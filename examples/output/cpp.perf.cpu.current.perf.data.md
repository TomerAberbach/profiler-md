# CPU profile

Took 519.5ms over 519 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 80.3% | 417.4ms |     417 |
| Native   | 19.7% | 102.1ms |     102 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 4.4% | 23.0ms |      23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 3.1% | 16.0ms |      16 | `0x4c30`   | `binary`                                           |
| 2.9% | 15.0ms |      15 | `0x5424`   | `binary`                                           |
| 2.7% | 14.0ms |      14 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.9% | 10.0ms |      10 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.7% |  9.0ms |       9 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.7% |  9.0ms |       9 | `0xe134`   | `binary`                                           |
| 1.5% |  8.0ms |       8 | `0x5408`   | `binary`                                           |
| 1.5% |  8.0ms |       8 | `0xe5a4`   | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x11268`  | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x5440`   | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x5464`   | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x120b0`  | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x11a14`  | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.2% |  6.0ms |       6 | `0xe5d0`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x11eb8`  | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.2% |  6.0ms |       6 | `0x5420`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x120bc`  | `binary`                                           |

#### Categories

##### Ours

|    % |   Time | Samples | Function  | Location |
| ---: | -----: | ------: | --------- | -------- |
| 3.1% | 16.0ms |      16 | `0x4c30`  | `binary` |
| 2.9% | 15.0ms |      15 | `0x5424`  | `binary` |
| 1.7% |  9.0ms |       9 | `0xe134`  | `binary` |
| 1.5% |  8.0ms |       8 | `0x5408`  | `binary` |
| 1.5% |  8.0ms |       8 | `0xe5a4`  | `binary` |
| 1.3% |  7.0ms |       7 | `0x11268` | `binary` |
| 1.3% |  7.0ms |       7 | `0x5440`  | `binary` |
| 1.3% |  7.0ms |       7 | `0x5464`  | `binary` |
| 1.3% |  7.0ms |       7 | `0x120b0` | `binary` |
| 1.3% |  7.0ms |       7 | `0x11a14` | `binary` |
| 1.2% |  6.0ms |       6 | `0xe5d0`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x11eb8` | `binary` |
| 1.2% |  6.0ms |       6 | `0x5420`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x120bc` | `binary` |
| 1.2% |  6.0ms |       6 | `0x5224`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x11bc8` | `binary` |
| 1.2% |  6.0ms |       6 | `0x11b98` | `binary` |
| 1.0% |  5.0ms |       5 | `0x10294` | `binary` |
| 1.0% |  5.0ms |       5 | `0x11b00` | `binary` |
| 1.0% |  5.0ms |       5 | `0x45c8`  | `binary` |

##### Native

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 4.4% | 23.0ms |      23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.7% | 14.0ms |      14 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.9% | 10.0ms |      10 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.7% |  9.0ms |       9 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.2% |  6.0ms |       6 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.2% |  6.0ms |       6 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.0% |  5.0ms |       5 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.8% |  4.0ms |       4 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x9a8f4`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.6% |  3.0ms |       3 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.6% |  3.0ms |       3 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.2% |  1.0ms |       1 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.2% |  1.0ms |       1 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x92260`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x8fae0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x9d190`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x8faa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 23.0ms |      23 | `0x12108` | `binary` |

##### `0x4c30` (`binary`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x11b08` | `binary` |

##### `0x5424` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 66.7% | 10.0ms |      10 | `0x11ec0` | `binary` |
| 13.3% |  2.0ms |       2 | `0xf4f0`  | `binary` |
| 13.3% |  2.0ms |       2 | `0xf708`  | `binary` |
|  6.7% |  1.0ms |       1 | `0x12140` | `binary` |

##### `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x12108` | `binary` |

##### `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x10f78` | `binary` |

##### `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 88.9% | 8.0ms |       8 | `0x11ec0` | `binary` |
| 11.1% | 1.0ms |       1 | `0x11b44` | `binary` |

##### `0xe134` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x11b44` | `binary` |

##### `0x5408` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 75.0% | 6.0ms |       6 | `0x12140` | `binary` |
| 25.0% | 2.0ms |       2 | `0x11ec0` | `binary` |

##### `0xe5a4` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 8.0ms |       8 | `0x11b44` | `binary` |

##### `0x11268` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x11b44` | `binary` |

##### `0x5440` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 42.9% | 3.0ms |       3 | `0x12140` | `binary` |
| 28.6% | 2.0ms |       2 | `0x11ec0` | `binary` |
| 14.3% | 1.0ms |       1 | `0xf708`  | `binary` |
| 14.3% | 1.0ms |       1 | `0xf4f0`  | `binary` |

##### `0x5464` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 57.1% | 4.0ms |       4 | `0x11ec0` | `binary` |
| 42.9% | 3.0ms |       3 | `0x12140` | `binary` |

##### `0x120b0` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 85.7% | 6.0ms |       6 | `0x1ab4` | `binary` |
| 14.3% | 1.0ms |       1 | `0x1a6c` | `binary` |

##### `0x11a14` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x11cd0` | `binary` |

##### `0x8faf4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 6.0ms |       6 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xe5d0` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11b44` | `binary` |

##### `0x11eb8` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x12150` | `binary` |

##### `0x929e0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 6.0ms |       6 | `0x1b18` | `binary` |

##### `0x5420` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11ec0` | `binary` |

##### `0x120bc` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 83.3% | 5.0ms |       5 | `0x1ab4` | `binary` |
| 16.7% | 1.0ms |       1 | `0x1a6c` | `binary` |

##### `0x5224` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11ec0` | `binary` |

##### `0x11bc8` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x12150` | `binary` |

##### `0x11b98` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x12150` | `binary` |

##### `0x10294` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11ec0` | `binary` |

##### `0x11b00` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11cd0` | `binary` |

##### `0x45c8` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 80.0% | 4.0ms |       4 | `0xf6f4` | `binary` |
| 20.0% | 1.0ms |       1 | `0xf748` | `binary` |

##### `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.0ms |       5 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9e6e8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 75.0% | 3.0ms |       3 | `0x11b44` | `binary` |
| 25.0% | 1.0ms |       1 | `0x11ec0` | `binary` |

##### `0x9a8f4` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 3.0ms |       3 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x137f84` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 3.0ms |       3 | `0x10f78` | `binary` |

##### `0x92284` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x9d1b0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x12108` | `binary` |

##### `0x137f94` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x10f78` | `binary` |

##### `0x9a104` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x12108` | `binary` |

##### `0x9d11c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x12108` | `binary` |

##### `0x92260` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x9e6f8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x11ec0` | `binary` |

##### `0x8fae0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d190` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x12108` | `binary` |

##### `0x8faa0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function   | Location                                           |
| -----: | ------: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 519.5ms |     519 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 519.5ms |     519 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 519.5ms |     519 | `0x1c30`   | `binary`                                           |
|  78.8% | 409.4ms |     409 | `0x1ab4`   | `binary`                                           |
|  75.0% | 389.4ms |     389 | `0x12150`  | `binary`                                           |
|  57.0% | 296.3ms |     296 | `0x11cd0`  | `binary`                                           |
|  40.8% | 212.2ms |     212 | `0x11b44`  | `binary`                                           |
|  16.8% |  87.1ms |      87 | `0x112e0`  | `binary`                                           |
|  15.4% |  80.1ms |      80 | `0x1a6c`   | `binary`                                           |
|  11.4% |  59.1ms |      59 | `0x11b08`  | `binary`                                           |
|  10.6% |  55.1ms |      55 | `0x11ec0`  | `binary`                                           |
|  10.2% |  53.1ms |      53 | `0x12108`  | `binary`                                           |
|  10.2% |  53.1ms |      53 | `0x10f78`  | `binary`                                           |
|   4.4% |  23.0ms |      23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   4.0% |  21.0ms |      21 | `0x10f48`  | `binary`                                           |
|   3.7% |  19.0ms |      19 | `0x12140`  | `binary`                                           |
|   3.1% |  16.0ms |      16 | `0x1b18`   | `binary`                                           |
|   3.1% |  16.0ms |      16 | `0x4c30`   | `binary`                                           |
|   2.9% |  15.0ms |      15 | `0x5424`   | `binary`                                           |
|   2.7% |  14.0ms |      14 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 519.5ms |     519 | `0x1c30`  | `binary` |
|  78.8% | 409.4ms |     409 | `0x1ab4`  | `binary` |
|  75.0% | 389.4ms |     389 | `0x12150` | `binary` |
|  57.0% | 296.3ms |     296 | `0x11cd0` | `binary` |
|  40.8% | 212.2ms |     212 | `0x11b44` | `binary` |
|  16.8% |  87.1ms |      87 | `0x112e0` | `binary` |
|  15.4% |  80.1ms |      80 | `0x1a6c`  | `binary` |
|  11.4% |  59.1ms |      59 | `0x11b08` | `binary` |
|  10.6% |  55.1ms |      55 | `0x11ec0` | `binary` |
|  10.2% |  53.1ms |      53 | `0x12108` | `binary` |
|  10.2% |  53.1ms |      53 | `0x10f78` | `binary` |
|   4.0% |  21.0ms |      21 | `0x10f48` | `binary` |
|   3.7% |  19.0ms |      19 | `0x12140` | `binary` |
|   3.1% |  16.0ms |      16 | `0x1b18`  | `binary` |
|   3.1% |  16.0ms |      16 | `0x4c30`  | `binary` |
|   2.9% |  15.0ms |      15 | `0x5424`  | `binary` |
|   2.1% |  11.0ms |      11 | `0xf6bc`  | `binary` |
|   2.1% |  11.0ms |      11 | `0x4dbc`  | `binary` |
|   1.7% |   9.0ms |       9 | `0xe134`  | `binary` |
|   1.5% |   8.0ms |       8 | `0x5408`  | `binary` |

##### Native

|      % |    Time | Samples | Function   | Location                                           |
| -----: | ------: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 519.5ms |     519 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 519.5ms |     519 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   4.4% |  23.0ms |      23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.7% |  14.0ms |      14 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.9% |  10.0ms |      10 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.7% |   9.0ms |       9 | `0x92a9c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.7% |   9.0ms |       9 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.2% |   6.0ms |       6 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.2% |   6.0ms |       6 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.0% |   5.0ms |       5 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.8% |   4.0ms |       4 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.8% |   4.0ms |       4 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x9a8f4`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.6% |   3.0ms |       3 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.6% |   3.0ms |       3 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.2% |   1.0ms |       1 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.2% |   1.0ms |       1 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.2% |   1.0ms |       1 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.2% |   1.0ms |       1 | `0x92260`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee    | Location                                           |
| ----: | ------: | ------: | --------- | -------------------------------------------------- |
| 78.8% | 409.4ms |     409 | `0x1ab4`  | `binary`                                           |
| 15.4% |  80.1ms |      80 | `0x1a6c`  | `binary`                                           |
|  3.1% |  16.0ms |      16 | `0x1b18`  | `binary`                                           |
|  1.0% |   5.0ms |       5 | `0xa0cb0` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  0.6% |   3.0ms |       3 | `0x9a8f4` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 519.5ms |     519 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1c30` (`binary`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 519.5ms |     519 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1ab4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.9% | 339.3ms |     339 | `0x12150` | `binary` |
|  8.3% |  34.0ms |      34 | `0x12108` | `binary` |
|  3.2% |  13.0ms |      13 | `0x12140` | `binary` |
|  1.5% |   6.0ms |       6 | `0x120b0` | `binary` |
|  1.2% |   5.0ms |       5 | `0x120bc` | `binary` |

##### `0x12150` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 76.1% | 296.3ms |     296 | `0x11cd0` | `binary` |
| 14.1% |  55.1ms |      55 | `0x11ec0` | `binary` |
|  1.5% |   6.0ms |       6 | `0x11eb8` | `binary` |
|  1.5% |   6.0ms |       6 | `0x11bc8` | `binary` |
|  1.5% |   6.0ms |       6 | `0x11b98` | `binary` |

##### `0x11cd0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 71.6% | 212.2ms |     212 | `0x11b44` | `binary` |
| 19.9% |  59.1ms |      59 | `0x11b08` | `binary` |
|  2.4% |   7.0ms |       7 | `0x11a14` | `binary` |
|  1.7% |   5.0ms |       5 | `0x11b00` | `binary` |
|  1.4% |   4.0ms |       4 | `0x11a44` | `binary` |

##### `0x11b44` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 41.0% | 87.1ms |      87 | `0x112e0` | `binary` |
|  4.2% |  9.0ms |       9 | `0xe134`  | `binary` |
|  3.8% |  8.0ms |       8 | `0xe5a4`  | `binary` |
|  3.3% |  7.0ms |       7 | `0x11268` | `binary` |
|  3.3% |  7.0ms |       7 | `0xc9c4`  | `binary` |

##### `0x112e0` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 60.9% | 53.1ms |      53 | `0x10f78` | `binary` |
| 24.1% | 21.0ms |      21 | `0x10f48` | `binary` |
|  2.3% |  2.0ms |       2 | `0x10ed4` | `binary` |
|  2.3% |  2.0ms |       2 | `0x10ea0` | `binary` |
|  2.3% |  2.0ms |       2 | `0x10e68` | `binary` |

##### `0x1a6c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 62.5% | 50.1ms |      50 | `0x12150` | `binary` |
| 23.8% | 19.0ms |      19 | `0x12108` | `binary` |
|  7.5% |  6.0ms |       6 | `0x12140` | `binary` |
|  2.5% |  2.0ms |       2 | `0x12134` | `binary` |
|  1.3% |  1.0ms |       1 | `0x120bc` | `binary` |

##### `0x11b08` (`binary`)

|     % |   Time | Samples | Callee   | Location |
| ----: | -----: | ------: | -------- | -------- |
| 27.1% | 16.0ms |      16 | `0x4c30` | `binary` |
| 18.6% | 11.0ms |      11 | `0x4dbc` | `binary` |
|  6.8% |  4.0ms |       4 | `0x4840` | `binary` |
|  6.8% |  4.0ms |       4 | `0x4b78` | `binary` |
|  6.8% |  4.0ms |       4 | `0x4e50` | `binary` |

##### `0x11ec0` (`binary`)

|     % |   Time | Samples | Callee    | Location                                 |
| ----: | -----: | ------: | --------- | ---------------------------------------- |
| 18.2% | 10.0ms |      10 | `0x5424`  | `binary`                                 |
| 14.5% |  8.0ms |       8 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.9% |  6.0ms |       6 | `0x5420`  | `binary`                                 |
| 10.9% |  6.0ms |       6 | `0x5224`  | `binary`                                 |
|  9.1% |  5.0ms |       5 | `0x10294` | `binary`                                 |

##### `0x12108` (`binary`)

|     % |   Time | Samples | Callee     | Location                                           |
| ----: | -----: | ------: | ---------- | -------------------------------------------------- |
| 43.4% | 23.0ms |      23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 26.4% | 14.0ms |      14 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  9.4% |  5.0ms |       5 | `0x50d8`   | `binary`                                           |
|  5.7% |  3.0ms |       3 | `0x506c`   | `binary`                                           |
|  3.8% |  2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

##### `0x10f78` (`binary`)

|     % |   Time | Samples | Callee     | Location                                           |
| ----: | -----: | ------: | ---------- | -------------------------------------------------- |
| 20.8% | 11.0ms |      11 | `0xf6bc`   | `binary`                                           |
| 18.9% | 10.0ms |      10 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 11.3% |  6.0ms |       6 | `0xf708`   | `binary`                                           |
|  9.4% |  5.0ms |       5 | `0xf6f4`   | `binary`                                           |
|  5.7% |  3.0ms |       3 | `0xf4f0`   | `binary`                                           |

##### `0x10f48` (`binary`)

|    % |  Time | Samples | Callee   | Location |
| ---: | ----: | ------: | -------- | -------- |
| 9.5% | 2.0ms |       2 | `0x7e0c` | `binary` |
| 9.5% | 2.0ms |       2 | `0x7f80` | `binary` |
| 9.5% | 2.0ms |       2 | `0x7cb4` | `binary` |
| 9.5% | 2.0ms |       2 | `0x7f24` | `binary` |
| 4.8% | 1.0ms |       1 | `0x7d90` | `binary` |

##### `0x12140` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 31.6% | 6.0ms |       6 | `0x5408` | `binary` |
| 15.8% | 3.0ms |       3 | `0x5440` | `binary` |
| 15.8% | 3.0ms |       3 | `0x53e4` | `binary` |
| 15.8% | 3.0ms |       3 | `0x5464` | `binary` |
|  5.3% | 1.0ms |       1 | `0x5424` | `binary` |

##### `0x1b18` (`binary`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 50.0% | 8.0ms |       8 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 37.5% | 6.0ms |       6 | `0x929e0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.3% | 1.0ms |       1 | `0x92aa0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.3% | 1.0ms |       1 | `0x92aa4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xf6bc` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 18.2% | 2.0ms |       2 | `0xed98` | `binary` |
| 18.2% | 2.0ms |       2 | `0xee94` | `binary` |
| 18.2% | 2.0ms |       2 | `0xee68` | `binary` |
|  9.1% | 1.0ms |       1 | `0xedd8` | `binary` |
|  9.1% | 1.0ms |       1 | `0xef74` | `binary` |

##### `0x4dbc` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 27.3% | 3.0ms |       3 | `0x494c` | `binary` |
| 27.3% | 3.0ms |       3 | `0x48e4` | `binary` |
| 27.3% | 3.0ms |       3 | `0x48ec` | `binary` |
|  9.1% | 1.0ms |       1 | `0x4850` | `binary` |
|  9.1% | 1.0ms |       1 | `0x4900` | `binary` |

##### `0x92a9c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 66.7% | 6.0ms |       6 | `0x8faf4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% | 1.0ms |       1 | `0x8fae0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% | 1.0ms |       1 | `0x8faa0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% | 1.0ms |       1 | `0x8fb44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xa2cac` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 75.0% | 3.0ms |       3 | `0x92284` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 25.0% | 1.0ms |       1 | `0x92260` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x1c30` (`binary`)

|    % |   Time | Samples | Call stack                                                                                                                                        |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.1% | 16.0ms |      16 | `0x4c30` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 2.5% | 13.0ms |      13 | `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x12108` (`binary`) ← `0x1a6c`                                                            |
| 2.3% | 12.0ms |      12 | `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x12108` (`binary`) ← `0x1ab4`                                                 |
| 1.9% | 10.0ms |      10 | `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x12108` (`binary`) ← `0x1ab4`                                                            |
| 1.9% | 10.0ms |      10 | `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x10f78` (`binary`) ← `0x112e0` ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4` |
| 1.7% |  9.0ms |       9 | `0xe134` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 1.5% |  8.0ms |       8 | `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x11ec0` (`binary`) ← `0x12150` ← `0x1a6c`                                                |
| 1.5% |  8.0ms |       8 | `0x5424` (`binary`) ← `0x11ec0` ← `0x12150` ← `0x1ab4`                                                                                            |
| 1.5% |  8.0ms |       8 | `0xe5a4` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 1.3% |  7.0ms |       7 | `0x11268` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                               |
| 1.3% |  7.0ms |       7 | `0x11a14` (`binary`) ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                           |
| 1.2% |  6.0ms |       6 | `0x8faf4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x92a9c` ← `0x1b18` (`binary`)                                                            |
| 1.2% |  6.0ms |       6 | `0xe5d0` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 1.2% |  6.0ms |       6 | `0x120b0` (`binary`) ← `0x1ab4`                                                                                                                   |
| 1.2% |  6.0ms |       6 | `0x929e0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x1b18` (`binary`)                                                                        |
| 1.2% |  6.0ms |       6 | `0x5224` (`binary`) ← `0x11ec0` ← `0x12150` ← `0x1a6c`                                                                                            |
| 1.2% |  6.0ms |       6 | `0x11bc8` (`binary`) ← `0x12150` ← `0x1ab4`                                                                                                       |
| 1.0% |  5.0ms |       5 | `0x11b00` (`binary`) ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                           |
| 1.0% |  5.0ms |       5 | `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)                                                                                    |
| 1.0% |  5.0ms |       5 | `0x5420` (`binary`) ← `0x11ec0` ← `0x12150` ← `0x1a6c`                                                                                            |

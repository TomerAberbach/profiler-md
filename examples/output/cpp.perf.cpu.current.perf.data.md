# CPU profile

Took 539.5ms over 539 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 82.9% | 447.4ms |     447 |
| Native   | 17.1% |  92.1ms |      92 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 4.6% | 25.0ms |      25 | `0x4f24`   | `binary`                                           |
| 3.0% | 16.0ms |      16 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.6% | 14.0ms |      14 | `0x46f0`   | `binary`                                           |
| 2.4% | 13.0ms |      13 | `0x4ee4`   | `binary`                                           |
| 2.0% | 11.0ms |      11 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.0% | 11.0ms |      11 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.5% |  8.0ms |       8 | `0x4e78`   | `binary`                                           |
| 1.5% |  8.0ms |       8 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.3% |  7.0ms |       7 | `0x12954`  | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.3% |  7.0ms |       7 | `0x12bbc`  | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x13644`  | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x4750`   | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x4cf0`   | `binary`                                           |
| 1.3% |  7.0ms |       7 | `0x4300`   | `binary`                                           |
| 1.1% |  6.0ms |       6 | `0x12b30`  | `binary`                                           |
| 0.9% |  5.0ms |       5 | `0x134a8`  | `binary`                                           |
| 0.9% |  5.0ms |       5 | `0x13490`  | `binary`                                           |
| 0.9% |  5.0ms |       5 | `0xb50c`   | `binary`                                           |
| 0.9% |  5.0ms |       5 | `0x13a8c`  | `binary`                                           |

#### Categories

##### Ours

|    % |   Time | Samples | Function  | Location |
| ---: | -----: | ------: | --------- | -------- |
| 4.6% | 25.0ms |      25 | `0x4f24`  | `binary` |
| 2.6% | 14.0ms |      14 | `0x46f0`  | `binary` |
| 2.4% | 13.0ms |      13 | `0x4ee4`  | `binary` |
| 1.5% |  8.0ms |       8 | `0x4e78`  | `binary` |
| 1.3% |  7.0ms |       7 | `0x12954` | `binary` |
| 1.3% |  7.0ms |       7 | `0x12bbc` | `binary` |
| 1.3% |  7.0ms |       7 | `0x13644` | `binary` |
| 1.3% |  7.0ms |       7 | `0x4750`  | `binary` |
| 1.3% |  7.0ms |       7 | `0x4cf0`  | `binary` |
| 1.3% |  7.0ms |       7 | `0x4300`  | `binary` |
| 1.1% |  6.0ms |       6 | `0x12b30` | `binary` |
| 0.9% |  5.0ms |       5 | `0x134a8` | `binary` |
| 0.9% |  5.0ms |       5 | `0x13490` | `binary` |
| 0.9% |  5.0ms |       5 | `0xb50c`  | `binary` |
| 0.9% |  5.0ms |       5 | `0x13a8c` | `binary` |
| 0.9% |  5.0ms |       5 | `0x4cf8`  | `binary` |
| 0.9% |  5.0ms |       5 | `0x12990` | `binary` |
| 0.9% |  5.0ms |       5 | `0x13734` | `binary` |
| 0.9% |  5.0ms |       5 | `0x4f00`  | `binary` |
| 0.9% |  5.0ms |       5 | `0x7904`  | `binary` |

##### Native

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 3.0% | 16.0ms |      16 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.0% | 11.0ms |      11 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.0% | 11.0ms |      11 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.5% |  8.0ms |       8 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.3% |  7.0ms |       7 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.9% |  5.0ms |       5 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.7% |  4.0ms |       4 | `0x137f3c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.6% |  3.0ms |       3 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.6% |  3.0ms |       3 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0xa2c9c`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x9a8f0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x92a58`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x9d114`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.2% |  1.0ms |       1 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x4f24` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 72.0% | 18.0ms |      18 | `0x13b70` | `binary` |
| 20.0% |  5.0ms |       5 | `0x1388c` | `binary` |
|  8.0% |  2.0ms |       2 | `0x13b2c` | `binary` |

##### `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x13b38` | `binary` |

##### `0x46f0` (`binary`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x13620` | `binary` |

##### `0x4ee4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 84.6% | 11.0ms |      11 | `0x1388c` | `binary` |
| 15.4% |  2.0ms |       2 | `0x13b70` | `binary` |

##### `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 90.9% | 10.0ms |      10 | `0x1388c` | `binary` |
|  9.1% |  1.0ms |       1 | `0x1364c` | `binary` |

##### `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x115dc` | `binary` |

##### `0x4e78` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 62.5% | 5.0ms |       5 | `0x13b70` | `binary` |
| 25.0% | 2.0ms |       2 | `0xe2d4`  | `binary` |
| 12.5% | 1.0ms |       1 | `0x13b2c` | `binary` |

##### `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 8.0ms |       8 | `0x13b38` | `binary` |

##### `0x12954` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x1364c` | `binary` |

##### `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 7.0ms |       7 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x12bbc` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x1364c` | `binary` |

##### `0x13644` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x13b80` | `binary` |

##### `0x4750` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x13620` | `binary` |

##### `0x4cf0` (`binary`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 7.0ms |       7 | `0xa9a8` | `binary` |

##### `0x4300` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x13620` | `binary` |

##### `0x12b30` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x1364c` | `binary` |

##### `0x134a8` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x13b80` | `binary` |

##### `0x13490` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x13b80` | `binary` |

##### `0xb50c` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 60.0% | 3.0ms |       3 | `0x12c30` | `binary` |
| 40.0% | 2.0ms |       2 | `0x129c4` | `binary` |

##### `0x13a8c` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 60.0% | 3.0ms |       3 | `0x1ab4` | `binary` |
| 40.0% | 2.0ms |       2 | `0x1a6c` | `binary` |

##### `0x4cf8` (`binary`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 5.0ms |       5 | `0xa9a8` | `binary` |

##### `0x12990` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x1364c` | `binary` |

##### `0x13734` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x13b80` | `binary` |

##### `0x4f00` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 40.0% | 2.0ms |       2 | `0x13b70` | `binary` |
| 20.0% | 1.0ms |       1 | `0xe0b0`  | `binary` |
| 20.0% | 1.0ms |       1 | `0x1388c` | `binary` |
| 20.0% | 1.0ms |       1 | `0xe2d4`  | `binary` |

##### `0x7904` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 80.0% | 4.0ms |       4 | `0x12c64` | `binary` |
| 20.0% | 1.0ms |       1 | `0xdc58`  | `binary` |

##### `0x92284` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x137f3c` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x13b38` | `binary` |

##### `0x9a104` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 3.0ms |       3 | `0x13b38` | `binary` |

##### `0x929e0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 66.7% | 2.0ms |       2 | `0x1b18` | `binary` |
| 33.3% | 1.0ms |       1 | `0x1ad0` | `binary` |

##### `0x8faf4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 3.0ms |       3 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x137f94` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 3.0ms |       3 | `0x115dc` | `binary` |

##### `0xa2c9c` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 2.0ms |       2 | `0x4b98` | `binary` |

##### `0x9a8f0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a58` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 50.0% | 1.0ms |       1 | `0x1b18` | `binary` |
| 50.0% | 1.0ms |       1 | `0x1ad0` | `binary` |

##### `0x9d11c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 50.0% | 1.0ms |       1 | `0x1364c` | `binary` |
| 50.0% | 1.0ms |       1 | `0x13b38` | `binary` |

##### `0x9d1b0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x13b38` | `binary` |

##### `0x9d114` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x1364c` | `binary` |

##### `0x137f84` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x115dc` | `binary` |

##### `0x9e6f8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x1388c` | `binary` |

##### `0x9e6e8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x1388c` | `binary` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function  | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 539.5ms |     539 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 539.5ms |     539 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 539.5ms |     539 | `0x1c30`  | `binary`                                 |
|  82.7% | 446.4ms |     446 | `0x1ab4`  | `binary`                                 |
|  74.8% | 403.4ms |     403 | `0x13b80` | `binary`                                 |
|  44.2% | 238.2ms |     238 | `0x1364c` | `binary`                                 |
|  13.0% |  70.1ms |      70 | `0x1a6c`  | `binary`                                 |
|  12.1% |  65.1ms |      65 | `0x13620` | `binary`                                 |
|  10.0% |  54.1ms |      54 | `0x13b38` | `binary`                                 |
|   9.1% |  49.0ms |      49 | `0x1388c` | `binary`                                 |
|   8.7% |  47.0ms |      47 | `0x115dc` | `binary`                                 |
|   6.3% |  34.0ms |      34 | `0x13b70` | `binary`                                 |
|   5.2% |  28.0ms |      28 | `0x115ac` | `binary`                                 |
|   4.6% |  25.0ms |      25 | `0x4f24`  | `binary`                                 |
|   3.0% |  16.0ms |      16 | `0x9d100` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   2.8% |  15.0ms |      15 | `0xa9a8`  | `binary`                                 |
|   2.6% |  14.0ms |      14 | `0x46f0`  | `binary`                                 |
|   2.4% |  13.0ms |      13 | `0x4ee4`  | `binary`                                 |
|   2.4% |  13.0ms |      13 | `0x487c`  | `binary`                                 |
|   2.0% |  11.0ms |      11 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 539.5ms |     539 | `0x1c30`  | `binary` |
|  82.7% | 446.4ms |     446 | `0x1ab4`  | `binary` |
|  74.8% | 403.4ms |     403 | `0x13b80` | `binary` |
|  44.2% | 238.2ms |     238 | `0x1364c` | `binary` |
|  13.0% |  70.1ms |      70 | `0x1a6c`  | `binary` |
|  12.1% |  65.1ms |      65 | `0x13620` | `binary` |
|  10.0% |  54.1ms |      54 | `0x13b38` | `binary` |
|   9.1% |  49.0ms |      49 | `0x1388c` | `binary` |
|   8.7% |  47.0ms |      47 | `0x115dc` | `binary` |
|   6.3% |  34.0ms |      34 | `0x13b70` | `binary` |
|   5.2% |  28.0ms |      28 | `0x115ac` | `binary` |
|   4.6% |  25.0ms |      25 | `0x4f24`  | `binary` |
|   2.8% |  15.0ms |      15 | `0xa9a8`  | `binary` |
|   2.6% |  14.0ms |      14 | `0x46f0`  | `binary` |
|   2.4% |  13.0ms |      13 | `0x4ee4`  | `binary` |
|   2.4% |  13.0ms |      13 | `0x487c`  | `binary` |
|   1.9% |  10.0ms |      10 | `0xa97c`  | `binary` |
|   1.5% |   8.0ms |       8 | `0x4e78`  | `binary` |
|   1.5% |   8.0ms |       8 | `0x4b98`  | `binary` |
|   1.3% |   7.0ms |       7 | `0x12954` | `binary` |

##### Native

|      % |    Time | Samples | Function   | Location                                           |
| -----: | ------: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 539.5ms |     539 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 539.5ms |     539 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   3.0% |  16.0ms |      16 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.0% |  11.0ms |      11 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.0% |  11.0ms |      11 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.5% |   8.0ms |       8 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.3% |   7.0ms |       7 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.1% |   6.0ms |       6 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.9% |   5.0ms |       5 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.7% |   4.0ms |       4 | `0x92a9c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.7% |   4.0ms |       4 | `0x137f3c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.6% |   3.0ms |       3 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.6% |   3.0ms |       3 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0xa2c9c`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x9a8f0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x92a58`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee    | Location                                           |
| ----: | ------: | ------: | --------- | -------------------------------------------------- |
| 82.7% | 446.4ms |     446 | `0x1ab4`  | `binary`                                           |
| 13.0% |  70.1ms |      70 | `0x1a6c`  | `binary`                                           |
|  1.3% |   7.0ms |       7 | `0xa0cb0` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  1.1% |   6.0ms |       6 | `0x1b18`  | `binary`                                           |
|  0.7% |   4.0ms |       4 | `0x1ad0`  | `binary`                                           |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 539.5ms |     539 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1c30` (`binary`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 539.5ms |     539 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1ab4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.3% | 367.4ms |     367 | `0x13b80` | `binary` |
|  6.7% |  30.0ms |      30 | `0x13b38` | `binary` |
|  6.3% |  28.0ms |      28 | `0x13b70` | `binary` |
|  1.1% |   5.0ms |       5 | `0x13ad0` | `binary` |
|  0.9% |   4.0ms |       4 | `0x13aec` | `binary` |

##### `0x13b80` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 59.1% | 238.2ms |     238 | `0x1364c` | `binary` |
| 16.1% |  65.1ms |      65 | `0x13620` | `binary` |
| 12.2% |  49.0ms |      49 | `0x1388c` | `binary` |
|  1.7% |   7.0ms |       7 | `0x13644` | `binary` |
|  1.2% |   5.0ms |       5 | `0x134a8` | `binary` |

##### `0x1364c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 19.7% | 47.0ms |      47 | `0x115dc` | `binary` |
| 11.8% | 28.0ms |      28 | `0x115ac` | `binary` |
|  6.3% | 15.0ms |      15 | `0xa9a8`  | `binary` |
|  4.2% | 10.0ms |      10 | `0xa97c`  | `binary` |
|  2.9% |  7.0ms |       7 | `0x12954` | `binary` |

##### `0x1a6c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 51.4% | 36.0ms |      36 | `0x13b80` | `binary` |
| 34.3% | 24.0ms |      24 | `0x13b38` | `binary` |
|  8.6% |  6.0ms |       6 | `0x13b70` | `binary` |
|  2.9% |  2.0ms |       2 | `0x13a8c` | `binary` |
|  1.4% |  1.0ms |       1 | `0x13ad4` | `binary` |

##### `0x13620` (`binary`)

|     % |   Time | Samples | Callee   | Location |
| ----: | -----: | ------: | -------- | -------- |
| 21.5% | 14.0ms |      14 | `0x46f0` | `binary` |
| 20.0% | 13.0ms |      13 | `0x487c` | `binary` |
| 10.8% |  7.0ms |       7 | `0x4750` | `binary` |
| 10.8% |  7.0ms |       7 | `0x4300` | `binary` |
|  6.2% |  4.0ms |       4 | `0x48d8` | `binary` |

##### `0x13b38` (`binary`)

|     % |   Time | Samples | Callee     | Location                                           |
| ----: | -----: | ------: | ---------- | -------------------------------------------------- |
| 29.6% | 16.0ms |      16 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 14.8% |  8.0ms |       8 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 14.8% |  8.0ms |       8 | `0x4b98`   | `binary`                                           |
|  7.4% |  4.0ms |       4 | `0x4b2c`   | `binary`                                           |
|  7.4% |  4.0ms |       4 | `0x137f3c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x1388c` (`binary`)

|     % |   Time | Samples | Callee    | Location                                 |
| ----: | -----: | ------: | --------- | ---------------------------------------- |
| 22.4% | 11.0ms |      11 | `0x4ee4`  | `binary`                                 |
| 20.4% | 10.0ms |      10 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.2% |  5.0ms |       5 | `0x4f24`  | `binary`                                 |
|  8.2% |  4.0ms |       4 | `0x4ee0`  | `binary`                                 |
|  6.1% |  3.0ms |       3 | `0xf268`  | `binary`                                 |

##### `0x115dc` (`binary`)

|     % |   Time | Samples | Callee     | Location                                           |
| ----: | -----: | ------: | ---------- | -------------------------------------------------- |
| 23.4% | 11.0ms |      11 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 10.6% |  5.0ms |       5 | `0xe1bc`   | `binary`                                           |
|  8.5% |  4.0ms |       4 | `0xe0b0`   | `binary`                                           |
|  8.5% |  4.0ms |       4 | `0xe2d4`   | `binary`                                           |
|  6.4% |  3.0ms |       3 | `0xde6c`   | `binary`                                           |

##### `0x13b70` (`binary`)

|     % |   Time | Samples | Callee   | Location |
| ----: | -----: | ------: | -------- | -------- |
| 52.9% | 18.0ms |      18 | `0x4f24` | `binary` |
| 14.7% |  5.0ms |       5 | `0x4e78` | `binary` |
|  5.9% |  2.0ms |       2 | `0x4ee4` | `binary` |
|  5.9% |  2.0ms |       2 | `0x4f00` | `binary` |
|  5.9% |  2.0ms |       2 | `0x4ec8` | `binary` |

##### `0x115ac` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 10.7% | 3.0ms |       3 | `0x6594` | `binary` |
| 10.7% | 3.0ms |       3 | `0x6344` | `binary` |
|  7.1% | 2.0ms |       2 | `0x6588` | `binary` |
|  7.1% | 2.0ms |       2 | `0x6330` | `binary` |
|  7.1% | 2.0ms |       2 | `0x65a8` | `binary` |

##### `0xa9a8` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 46.7% | 7.0ms |       7 | `0x4cf0` | `binary` |
| 33.3% | 5.0ms |       5 | `0x4cf8` | `binary` |
| 13.3% | 2.0ms |       2 | `0x4d14` | `binary` |
|  6.7% | 1.0ms |       1 | `0x4d0c` | `binary` |

##### `0x487c` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 23.1% | 3.0ms |       3 | `0x43f4` | `binary` |
| 23.1% | 3.0ms |       3 | `0x43a4` | `binary` |
| 23.1% | 3.0ms |       3 | `0x43ac` | `binary` |
| 23.1% | 3.0ms |       3 | `0x4310` | `binary` |
|  7.7% | 1.0ms |       1 | `0x431c` | `binary` |

##### `0xa97c` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 40.0% | 4.0ms |       4 | `0x5950` | `binary` |
| 20.0% | 2.0ms |       2 | `0x5914` | `binary` |
| 20.0% | 2.0ms |       2 | `0x58d0` | `binary` |
| 10.0% | 1.0ms |       1 | `0x5930` | `binary` |
| 10.0% | 1.0ms |       1 | `0x58f8` | `binary` |

##### `0x4b98` (`binary`)

|     % |  Time | Samples | Callee    | Location                                           |
| ----: | ----: | ------: | --------- | -------------------------------------------------- |
| 75.0% | 6.0ms |       6 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 25.0% | 2.0ms |       2 | `0xa2c9c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0xa2cac` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 83.3% | 5.0ms |       5 | `0x92284` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 16.7% | 1.0ms |       1 | `0x92260` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 75.0% | 3.0ms |       3 | `0x8faf4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 25.0% | 1.0ms |       1 | `0x8fae0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x1c30` (`binary`)

|    % |   Time | Samples | Call stack                                                                                                                |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------- |
| 2.6% | 14.0ms |      14 | `0x46f0` (`binary`) ← `0x13620` ← `0x13b80` ← `0x1ab4`                                                                    |
| 2.6% | 14.0ms |      14 | `0x4f24` (`binary`) ← `0x13b70` ← `0x1ab4`                                                                                |
| 2.0% | 11.0ms |      11 | `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x13b38` (`binary`) ← `0x1ab4`                                    |
| 2.0% | 11.0ms |      11 | `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x115dc` (`binary`) ← `0x1364c` ← `0x13b80` ← `0x1ab4` |
| 1.9% | 10.0ms |      10 | `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x1388c` (`binary`) ← `0x13b80` ← `0x1a6c`                        |
| 1.3% |  7.0ms |       7 | `0x12954` (`binary`) ← `0x1364c` ← `0x13b80` ← `0x1ab4`                                                                   |
| 1.3% |  7.0ms |       7 | `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)                                                            |
| 1.3% |  7.0ms |       7 | `0x12bbc` (`binary`) ← `0x1364c` ← `0x13b80` ← `0x1ab4`                                                                   |
| 1.3% |  7.0ms |       7 | `0x4ee4` (`binary`) ← `0x1388c` ← `0x13b80` ← `0x1ab4`                                                                    |
| 1.3% |  7.0ms |       7 | `0x13644` (`binary`) ← `0x13b80` ← `0x1ab4`                                                                               |
| 1.3% |  7.0ms |       7 | `0x4750` (`binary`) ← `0x13620` ← `0x13b80` ← `0x1ab4`                                                                    |
| 1.3% |  7.0ms |       7 | `0x4cf0` (`binary`) ← `0xa9a8` ← `0x1364c` ← `0x13b80` ← `0x1ab4`                                                         |
| 1.3% |  7.0ms |       7 | `0x4300` (`binary`) ← `0x13620` ← `0x13b80` ← `0x1ab4`                                                                    |
| 1.1% |  6.0ms |       6 | `0x12b30` (`binary`) ← `0x1364c` ← `0x13b80` ← `0x1ab4`                                                                   |
| 0.9% |  5.0ms |       5 | `0x134a8` (`binary`) ← `0x13b80` ← `0x1ab4`                                                                               |
| 0.9% |  5.0ms |       5 | `0x4cf8` (`binary`) ← `0xa9a8` ← `0x1364c` ← `0x13b80` ← `0x1ab4`                                                         |
| 0.9% |  5.0ms |       5 | `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x13b38` (`binary`) ← `0x1a6c`                                    |
| 0.9% |  5.0ms |       5 | `0x12990` (`binary`) ← `0x1364c` ← `0x13b80` ← `0x1ab4`                                                                   |
| 0.9% |  5.0ms |       5 | `0x13734` (`binary`) ← `0x13b80` ← `0x1ab4`                                                                               |
| 0.9% |  5.0ms |       5 | `0x13ad0` (`binary`) ← `0x1ab4`                                                                                           |

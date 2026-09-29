# CPU profile

Took 501.5ms over 501 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 80.8% | 405.4ms |     405 |
| Native   | 19.0% |  95.1ms |      95 |
| Kernel   |  0.2% |   1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 2.8% | 14.0ms |      14 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.4% | 12.0ms |      12 | `0x4c30`   | `binary`                                           |
| 2.2% | 11.0ms |      11 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.0% | 10.0ms |      10 | `0x5464`   | `binary`                                           |
| 1.8% |  9.0ms |       9 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.8% |  9.0ms |       9 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.6% |  8.0ms |       8 | `0x120b0`  | `binary`                                           |
| 1.6% |  8.0ms |       8 | `0x5424`   | `binary`                                           |
| 1.6% |  8.0ms |       8 | `0x75f4`   | `binary`                                           |
| 1.6% |  8.0ms |       8 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.4% |  7.0ms |       7 | `0xe5a4`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x4c20`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x12128`  | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x11268`  | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0xe134`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.2% |  6.0ms |       6 | `0x5230`   | `binary`                                           |
| 1.0% |  5.0ms |       5 | `0x11a44`  | `binary`                                           |
| 1.0% |  5.0ms |       5 | `0x4840`   | `binary`                                           |
| 1.0% |  5.0ms |       5 | `0x11eb8`  | `binary`                                           |

#### Categories

##### Ours

|    % |   Time | Samples | Function  | Location |
| ---: | -----: | ------: | --------- | -------- |
| 2.4% | 12.0ms |      12 | `0x4c30`  | `binary` |
| 2.0% | 10.0ms |      10 | `0x5464`  | `binary` |
| 1.6% |  8.0ms |       8 | `0x120b0` | `binary` |
| 1.6% |  8.0ms |       8 | `0x5424`  | `binary` |
| 1.6% |  8.0ms |       8 | `0x75f4`  | `binary` |
| 1.4% |  7.0ms |       7 | `0xe5a4`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x4c20`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x12128` | `binary` |
| 1.2% |  6.0ms |       6 | `0x11268` | `binary` |
| 1.2% |  6.0ms |       6 | `0xe134`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x5230`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x11a44` | `binary` |
| 1.0% |  5.0ms |       5 | `0x4840`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x11eb8` | `binary` |
| 1.0% |  5.0ms |       5 | `0x112a0` | `binary` |
| 1.0% |  5.0ms |       5 | `0x4c90`  | `binary` |
| 0.8% |  4.0ms |       4 | `0xe5d0`  | `binary` |
| 0.8% |  4.0ms |       4 | `0x4b78`  | `binary` |
| 0.8% |  4.0ms |       4 | `0x11b00` | `binary` |
| 0.8% |  4.0ms |       4 | `0x4da0`  | `binary` |

##### Native

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 2.8% | 14.0ms |      14 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.2% | 11.0ms |      11 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.8% |  9.0ms |       9 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.8% |  9.0ms |       9 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.6% |  8.0ms |       8 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.2% |  6.0ms |       6 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.0% |  5.0ms |       5 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.8% |  4.0ms |       4 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.6% |  3.0ms |       3 | `0x92274`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x9a8f0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x92aa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.2% |  1.0ms |       1 | `0x9d190`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x92260`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 78.6% | 11.0ms |      11 | `0x11ec0` | `binary` |
| 21.4% |  3.0ms |       3 | `0x11b44` | `binary` |

##### `0x4c30` (`binary`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x11b08` | `binary` |

##### `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x12108` | `binary` |

##### `0x5464` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 50.0% | 5.0ms |       5 | `0x12140` | `binary` |
| 20.0% | 2.0ms |       2 | `0x120fc` | `binary` |
| 10.0% | 1.0ms |       1 | `0x11ec0` | `binary` |
| 10.0% | 1.0ms |       1 | `0xf4f0`  | `binary` |
| 10.0% | 1.0ms |       1 | `0xf708`  | `binary` |

##### `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x12108` | `binary` |

##### `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x10f78` | `binary` |

##### `0x120b0` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 87.5% | 7.0ms |       7 | `0x1ab4` | `binary` |
| 12.5% | 1.0ms |       1 | `0x1a6c` | `binary` |

##### `0x5424` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 75.0% | 6.0ms |       6 | `0x11ec0` | `binary` |
| 25.0% | 2.0ms |       2 | `0x12140` | `binary` |

##### `0x75f4` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 50.0% | 4.0ms |       4 | `0xc86c` | `binary` |
| 50.0% | 4.0ms |       4 | `0xe2e0` | `binary` |

##### `0x8faf4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 8.0ms |       8 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xe5a4` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x11b44` | `binary` |

##### `0x4c20` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11b08` | `binary` |

##### `0x12128` (`binary`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 6.0ms |       6 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11268` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11b44` | `binary` |

##### `0xe134` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11b44` | `binary` |

##### `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 6.0ms |       6 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x5230` (`binary`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 6.0ms |       6 | `0xc9c4` | `binary` |

##### `0x11a44` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11cd0` | `binary` |

##### `0x4840` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11b08` | `binary` |

##### `0x11eb8` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x12150` | `binary` |

##### `0x112a0` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11b44` | `binary` |

##### `0x4c90` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11b08` | `binary` |

##### `0x92284` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0xe5d0` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x11b44` | `binary` |

##### `0x4b78` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x11b08` | `binary` |

##### `0x11b00` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x11cd0` | `binary` |

##### `0x4da0` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x11b08` | `binary` |

##### `0x929e0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 75.0% | 3.0ms |       3 | `0x1b18` | `binary` |
| 25.0% | 1.0ms |       1 | `0x1ad0` | `binary` |

##### `0x9a104` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 3.0ms |       3 | `0x12108` | `binary` |

##### `0x92274` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x137f84` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 3.0ms |       3 | `0x10f78` | `binary` |

##### `0x9a8f0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x923f0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x929c4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d234` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9e6e8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x11b44` | `binary` |

##### `0x92aa0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 2.0ms |       2 | `0x1b18` | `binary` |

##### `0xa2cac` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.0ms |       1 | `0x50d8` | `binary` |

##### `0x9d190` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x12108` | `binary` |

##### `0x92260` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function  | Location                                           |
| -----: | ------: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 501.5ms |     501 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 501.5ms |     501 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 501.5ms |     501 | `0x1c30`  | `binary`                                           |
|  81.2% | 407.4ms |     407 | `0x1ab4`  | `binary`                                           |
|  74.5% | 373.4ms |     373 | `0x12150` | `binary`                                           |
|  63.5% | 318.3ms |     318 | `0x11cd0` | `binary`                                           |
|  44.9% | 225.2ms |     225 | `0x11b44` | `binary`                                           |
|  17.2% |  86.1ms |      86 | `0x112e0` | `binary`                                           |
|  13.2% |  66.1ms |      66 | `0x11b08` | `binary`                                           |
|  11.4% |  57.1ms |      57 | `0x1a6c`  | `binary`                                           |
|   9.4% |  47.0ms |      47 | `0x10f78` | `binary`                                           |
|   8.8% |  44.0ms |      44 | `0x12108` | `binary`                                           |
|   7.6% |  38.0ms |      38 | `0x11ec0` | `binary`                                           |
|   5.2% |  26.0ms |      26 | `0x10f48` | `binary`                                           |
|   4.0% |  20.0ms |      20 | `0x12140` | `binary`                                           |
|   2.8% |  14.0ms |      14 | `0x1b18`  | `binary`                                           |
|   2.8% |  14.0ms |      14 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.6% |  13.0ms |      13 | `0x50d8`  | `binary`                                           |
|   2.4% |  12.0ms |      12 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   2.4% |  12.0ms |      12 | `0x4c30`  | `binary`                                           |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 501.5ms |     501 | `0x1c30`  | `binary` |
|  81.2% | 407.4ms |     407 | `0x1ab4`  | `binary` |
|  74.5% | 373.4ms |     373 | `0x12150` | `binary` |
|  63.5% | 318.3ms |     318 | `0x11cd0` | `binary` |
|  44.9% | 225.2ms |     225 | `0x11b44` | `binary` |
|  17.2% |  86.1ms |      86 | `0x112e0` | `binary` |
|  13.2% |  66.1ms |      66 | `0x11b08` | `binary` |
|  11.4% |  57.1ms |      57 | `0x1a6c`  | `binary` |
|   9.4% |  47.0ms |      47 | `0x10f78` | `binary` |
|   8.8% |  44.0ms |      44 | `0x12108` | `binary` |
|   7.6% |  38.0ms |      38 | `0x11ec0` | `binary` |
|   5.2% |  26.0ms |      26 | `0x10f48` | `binary` |
|   4.0% |  20.0ms |      20 | `0x12140` | `binary` |
|   2.8% |  14.0ms |      14 | `0x1b18`  | `binary` |
|   2.6% |  13.0ms |      13 | `0x50d8`  | `binary` |
|   2.4% |  12.0ms |      12 | `0x4c30`  | `binary` |
|   2.0% |  10.0ms |      10 | `0xc9c4`  | `binary` |
|   2.0% |  10.0ms |      10 | `0x5464`  | `binary` |
|   1.8% |   9.0ms |       9 | `0xc86c`  | `binary` |
|   1.6% |   8.0ms |       8 | `0x4dbc`  | `binary` |

##### Native

|      % |    Time | Samples | Function   | Location                                           |
| -----: | ------: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 501.5ms |     501 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 501.5ms |     501 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.8% |  14.0ms |      14 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.4% |  12.0ms |      12 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   2.2% |  11.0ms |      11 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.0% |  10.0ms |      10 | `0x92a9c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.8% |   9.0ms |       9 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.8% |   9.0ms |       9 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.6% |   8.0ms |       8 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.2% |   6.0ms |       6 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.0% |   5.0ms |       5 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.8% |   4.0ms |       4 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.6% |   3.0ms |       3 | `0x92274`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x9a8f0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee    | Location                                           |
| ----: | ------: | ------: | --------- | -------------------------------------------------- |
| 81.2% | 407.4ms |     407 | `0x1ab4`  | `binary`                                           |
| 11.4% |  57.1ms |      57 | `0x1a6c`  | `binary`                                           |
|  2.8% |  14.0ms |      14 | `0x1b18`  | `binary`                                           |
|  1.2% |   6.0ms |       6 | `0x12128` | `binary`                                           |
|  1.2% |   6.0ms |       6 | `0xa0cb0` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 501.5ms |     501 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1c30` (`binary`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 501.5ms |     501 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1ab4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 83.5% | 340.3ms |     340 | `0x12150` | `binary` |
|  7.1% |  29.0ms |      29 | `0x12108` | `binary` |
|  4.2% |  17.0ms |      17 | `0x12140` | `binary` |
|  1.7% |   7.0ms |       7 | `0x120b0` | `binary` |
|  1.0% |   4.0ms |       4 | `0x120bc` | `binary` |

##### `0x12150` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 85.3% | 318.3ms |     318 | `0x11cd0` | `binary` |
| 10.2% |  38.0ms |      38 | `0x11ec0` | `binary` |
|  1.3% |   5.0ms |       5 | `0x11eb8` | `binary` |
|  1.1% |   4.0ms |       4 | `0x11cf8` | `binary` |
|  0.5% |   2.0ms |       2 | `0x11bb4` | `binary` |

##### `0x11cd0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 70.8% | 225.2ms |     225 | `0x11b44` | `binary` |
| 20.8% |  66.1ms |      66 | `0x11b08` | `binary` |
|  1.6% |   5.0ms |       5 | `0x11a44` | `binary` |
|  1.3% |   4.0ms |       4 | `0x11b00` | `binary` |
|  1.3% |   4.0ms |       4 | `0x11a14` | `binary` |

##### `0x11b44` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 38.2% | 86.1ms |      86 | `0x112e0` | `binary` |
|  4.4% | 10.0ms |      10 | `0xc9c4`  | `binary` |
|  4.0% |  9.0ms |       9 | `0xc86c`  | `binary` |
|  3.1% |  7.0ms |       7 | `0xe5a4`  | `binary` |
|  2.7% |  6.0ms |       6 | `0x11268` | `binary` |

##### `0x112e0` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 54.7% | 47.0ms |      47 | `0x10f78` | `binary` |
| 30.2% | 26.0ms |      26 | `0x10f48` | `binary` |
|  3.5% |  3.0ms |       3 | `0x10f7c` | `binary` |
|  2.3% |  2.0ms |       2 | `0x10f30` | `binary` |
|  2.3% |  2.0ms |       2 | `0x10e68` | `binary` |

##### `0x11b08` (`binary`)

|     % |   Time | Samples | Callee   | Location |
| ----: | -----: | ------: | -------- | -------- |
| 18.2% | 12.0ms |      12 | `0x4c30` | `binary` |
| 12.1% |  8.0ms |       8 | `0x4dbc` | `binary` |
|  9.1% |  6.0ms |       6 | `0x4e50` | `binary` |
|  9.1% |  6.0ms |       6 | `0x4c20` | `binary` |
|  7.6% |  5.0ms |       5 | `0x4840` | `binary` |

##### `0x1a6c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 57.9% | 33.0ms |      33 | `0x12150` | `binary` |
| 26.3% | 15.0ms |      15 | `0x12108` | `binary` |
|  5.3% |  3.0ms |       3 | `0x12140` | `binary` |
|  3.5% |  2.0ms |       2 | `0x12134` | `binary` |
|  1.8% |  1.0ms |       1 | `0x120f0` | `binary` |

##### `0x10f78` (`binary`)

|     % |  Time | Samples | Callee     | Location                                           |
| ----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 19.1% | 9.0ms |       9 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 17.0% | 8.0ms |       8 | `0xf6bc`   | `binary`                                           |
|  8.5% | 4.0ms |       4 | `0xf4a0`   | `binary`                                           |
|  6.4% | 3.0ms |       3 | `0xf708`   | `binary`                                           |
|  6.4% | 3.0ms |       3 | `0xf6f4`   | `binary`                                           |

##### `0x12108` (`binary`)

|     % |   Time | Samples | Callee     | Location                                           |
| ----: | -----: | ------: | ---------- | -------------------------------------------------- |
| 29.5% | 13.0ms |      13 | `0x50d8`   | `binary`                                           |
| 25.0% | 11.0ms |      11 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 20.5% |  9.0ms |       9 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  6.8% |  3.0ms |       3 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  4.5% |  2.0ms |       2 | `0x505c`   | `binary`                                           |

##### `0x11ec0` (`binary`)

|     % |   Time | Samples | Callee    | Location                                 |
| ----: | -----: | ------: | --------- | ---------------------------------------- |
| 28.9% | 11.0ms |      11 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 15.8% |  6.0ms |       6 | `0x5424`  | `binary`                                 |
|  7.9% |  3.0ms |       3 | `0x10260` | `binary`                                 |
|  5.3% |  2.0ms |       2 | `0x51e8`  | `binary`                                 |
|  5.3% |  2.0ms |       2 | `0x5420`  | `binary`                                 |

##### `0x10f48` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 11.5% | 3.0ms |       3 | `0x80c8` | `binary` |
| 11.5% | 3.0ms |       3 | `0x7f54` | `binary` |
| 11.5% | 3.0ms |       3 | `0x7d48` | `binary` |
| 11.5% | 3.0ms |       3 | `0x7d6c` | `binary` |
|  3.8% | 1.0ms |       1 | `0x7c8c` | `binary` |

##### `0x12140` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 25.0% | 5.0ms |       5 | `0x5464` | `binary` |
| 20.0% | 4.0ms |       4 | `0x53e4` | `binary` |
| 15.0% | 3.0ms |       3 | `0x5440` | `binary` |
| 10.0% | 2.0ms |       2 | `0x5424` | `binary` |
| 10.0% | 2.0ms |       2 | `0x53c8` | `binary` |

##### `0x1b18` (`binary`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 64.3% | 9.0ms |       9 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 21.4% | 3.0ms |       3 | `0x929e0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 14.3% | 2.0ms |       2 | `0x92aa0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x50d8` (`binary`)

|     % |   Time | Samples | Callee    | Location                                           |
| ----: | -----: | ------: | --------- | -------------------------------------------------- |
| 92.3% | 12.0ms |      12 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  7.7% |  1.0ms |       1 | `0xa2c9c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0xa2cac` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 41.7% | 5.0ms |       5 | `0x92284` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 25.0% | 3.0ms |       3 | `0x92274` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 16.7% | 2.0ms |       2 | `0x923f0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.3% | 1.0ms |       1 | `0x92260` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xc9c4` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 60.0% | 6.0ms |       6 | `0x5230` | `binary` |
| 20.0% | 2.0ms |       2 | `0x5254` | `binary` |
| 10.0% | 1.0ms |       1 | `0x5270` | `binary` |
| 10.0% | 1.0ms |       1 | `0x51e8` | `binary` |

##### `0x92a9c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 80.0% | 8.0ms |       8 | `0x8faf4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.0% | 1.0ms |       1 | `0x8fb44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.0% | 1.0ms |       1 | `0x8fae0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xc86c` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 44.4% | 4.0ms |       4 | `0x75f4` | `binary` |
| 33.3% | 3.0ms |       3 | `0x7624` | `binary` |
| 22.2% | 2.0ms |       2 | `0x74dc` | `binary` |

##### `0x4dbc` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 37.5% | 3.0ms |       3 | `0x4850` | `binary` |
| 25.0% | 2.0ms |       2 | `0x4934` | `binary` |
| 12.5% | 1.0ms |       1 | `0x48ec` | `binary` |
| 12.5% | 1.0ms |       1 | `0x48e4` | `binary` |
| 12.5% | 1.0ms |       1 | `0x485c` | `binary` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x1c30` (`binary`)

|    % |   Time | Samples | Call stack                                                                                                                                                         |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.4% | 12.0ms |      12 | `0x4c30` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                 |
| 2.2% | 11.0ms |      11 | `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x11ec0` (`binary`) ← `0x12150` ← `0x1a6c`                                                                 |
| 1.8% |  9.0ms |       9 | `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x10f78` (`binary`) ← `0x112e0` ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                  |
| 1.4% |  7.0ms |       7 | `0xe5a4` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                 |
| 1.4% |  7.0ms |       7 | `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x12108` (`binary`) ← `0x1ab4`                                                                  |
| 1.4% |  7.0ms |       7 | `0x120b0` (`binary`) ← `0x1ab4`                                                                                                                                    |
| 1.4% |  7.0ms |       7 | `0x8faf4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x92a9c` ← `0x1b18` (`binary`)                                                                             |
| 1.2% |  6.0ms |       6 | `0x4c20` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                 |
| 1.2% |  6.0ms |       6 | `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x12108` (`binary`) ← `0x1ab4`                                                                             |
| 1.2% |  6.0ms |       6 | `0x12128` (`binary`)                                                                                                                                               |
| 1.2% |  6.0ms |       6 | `0x11268` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                |
| 1.2% |  6.0ms |       6 | `0xe134` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                 |
| 1.2% |  6.0ms |       6 | `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)                                                                                                     |
| 1.2% |  6.0ms |       6 | `0x5230` (`binary`) ← `0xc9c4` ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                      |
| 1.0% |  5.0ms |       5 | `0x11a44` (`binary`) ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                            |
| 1.0% |  5.0ms |       5 | `0x4840` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                 |
| 1.0% |  5.0ms |       5 | `0x92284` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xa2cac` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x50d8` (`binary`) ← `0x12108` ← `0x1ab4` |
| 1.0% |  5.0ms |       5 | `0x5424` (`binary`) ← `0x11ec0` ← `0x12150` ← `0x1ab4`                                                                                                             |
| 1.0% |  5.0ms |       5 | `0x112a0` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                |
| 1.0% |  5.0ms |       5 | `0x4c90` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                                 |

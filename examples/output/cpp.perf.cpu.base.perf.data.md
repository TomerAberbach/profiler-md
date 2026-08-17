# CPU profile

Took 499.5ms over 499 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 79.6% | 397.4ms |     397 |
| Native   | 20.4% | 102.1ms |     102 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 3.6% | 18.0ms |      18 | `0x5464`   | `binary`                                           |
| 3.2% | 16.0ms |      16 | `0x5424`   | `binary`                                           |
| 3.2% | 16.0ms |      16 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 3.0% | 15.0ms |      15 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.6% | 13.0ms |      13 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.4% | 12.0ms |      12 | `0x4c30`   | `binary`                                           |
| 1.6% |  8.0ms |       8 | `0x5408`   | `binary`                                           |
| 1.4% |  7.0ms |       7 | `0x11a30`  | `binary`                                           |
| 1.4% |  7.0ms |       7 | `0x11b98`  | `binary`                                           |
| 1.4% |  7.0ms |       7 | `0x4c90`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x112c4`  | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.2% |  6.0ms |       6 | `0xc95c`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x53b8`   | `binary`                                           |
| 1.2% |  6.0ms |       6 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.0% |  5.0ms |       5 | `0xe214`   | `binary`                                           |
| 1.0% |  5.0ms |       5 | `0x53e4`   | `binary`                                           |
| 1.0% |  5.0ms |       5 | `0x120a0`  | `binary`                                           |
| 1.0% |  5.0ms |       5 | `0x4b4c`   | `binary`                                           |
| 1.0% |  5.0ms |       5 | `0xe17c`   | `binary`                                           |

#### Categories

##### Ours

|    % |   Time | Samples | Function  | Location |
| ---: | -----: | ------: | --------- | -------- |
| 3.6% | 18.0ms |      18 | `0x5464`  | `binary` |
| 3.2% | 16.0ms |      16 | `0x5424`  | `binary` |
| 2.4% | 12.0ms |      12 | `0x4c30`  | `binary` |
| 1.6% |  8.0ms |       8 | `0x5408`  | `binary` |
| 1.4% |  7.0ms |       7 | `0x11a30` | `binary` |
| 1.4% |  7.0ms |       7 | `0x11b98` | `binary` |
| 1.4% |  7.0ms |       7 | `0x4c90`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x112c4` | `binary` |
| 1.2% |  6.0ms |       6 | `0xc95c`  | `binary` |
| 1.2% |  6.0ms |       6 | `0x53b8`  | `binary` |
| 1.0% |  5.0ms |       5 | `0xe214`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x53e4`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x120a0` | `binary` |
| 1.0% |  5.0ms |       5 | `0x4b4c`  | `binary` |
| 1.0% |  5.0ms |       5 | `0xe17c`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x5230`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x11268` | `binary` |
| 1.0% |  5.0ms |       5 | `0x5420`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x7624`  | `binary` |
| 1.0% |  5.0ms |       5 | `0x4934`  | `binary` |

##### Native

|    % |   Time | Samples | Function   | Location                                           |
| ---: | -----: | ------: | ---------- | -------------------------------------------------- |
| 3.2% | 16.0ms |      16 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 3.0% | 15.0ms |      15 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.6% | 13.0ms |      13 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.2% |  6.0ms |       6 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.2% |  6.0ms |       6 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.0% |  5.0ms |       5 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.8% |  4.0ms |       4 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.8% |  4.0ms |       4 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.8% |  4.0ms |       4 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.8% |  4.0ms |       4 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9d114`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x92aa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x92a58`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x8fb44`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5464` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 50.0% | 9.0ms |       9 | `0x12140` | `binary` |
| 16.7% | 3.0ms |       3 | `0x11ec0` | `binary` |
| 16.7% | 3.0ms |       3 | `0x120fc` | `binary` |
| 16.7% | 3.0ms |       3 | `0xf708`  | `binary` |

##### `0x5424` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 68.8% | 11.0ms |      11 | `0x11ec0` | `binary` |
| 18.8% |  3.0ms |       3 | `0x12140` | `binary` |
| 12.5% |  2.0ms |       2 | `0xf708`  | `binary` |

##### `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x12108` | `binary` |

##### `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 66.7% | 10.0ms |      10 | `0x11ec0` | `binary` |
| 33.3% |  5.0ms |       5 | `0x11b44` | `binary` |

##### `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x12108` | `binary` |

##### `0x4c30` (`binary`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x11b08` | `binary` |

##### `0x5408` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 50.0% | 4.0ms |       4 | `0x11ec0` | `binary` |
| 37.5% | 3.0ms |       3 | `0x12140` | `binary` |
| 12.5% | 1.0ms |       1 | `0xf4f0`  | `binary` |

##### `0x11a30` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x11cd0` | `binary` |

##### `0x11b98` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x12150` | `binary` |

##### `0x4c90` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x11b08` | `binary` |

##### `0x112c4` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11b44` | `binary` |

##### `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 6.0ms |       6 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xc95c` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x11b44` | `binary` |

##### `0x53b8` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 33.3% | 2.0ms |       2 | `0x11ec0` | `binary` |
| 33.3% | 2.0ms |       2 | `0x12140` | `binary` |
| 16.7% | 1.0ms |       1 | `0xf708`  | `binary` |
| 16.7% | 1.0ms |       1 | `0x120fc` | `binary` |

##### `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 6.0ms |       6 | `0x10f78` | `binary` |

##### `0xe214` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11b44` | `binary` |

##### `0x53e4` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 60.0% | 3.0ms |       3 | `0x12140` | `binary` |
| 40.0% | 2.0ms |       2 | `0x11ec0` | `binary` |

##### `0x120a0` (`binary`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 5.0ms |       5 | `0x1ab4` | `binary` |

##### `0x4b4c` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11b08` | `binary` |

##### `0xe17c` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11b44` | `binary` |

##### `0x5230` (`binary`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 5.0ms |       5 | `0xc9c4` | `binary` |

##### `0x11268` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11b44` | `binary` |

##### `0x5420` (`binary`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x11ec0` | `binary` |

##### `0x7624` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 60.0% | 3.0ms |       3 | `0xe2e0` | `binary` |
| 20.0% | 1.0ms |       1 | `0xee78` | `binary` |
| 20.0% | 1.0ms |       1 | `0xc86c` | `binary` |

##### `0x4934` (`binary`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 60.0% | 3.0ms |       3 | `0x4e50` | `binary` |
| 40.0% | 2.0ms |       2 | `0x4dbc` | `binary` |

##### `0x9d234` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.0ms |       5 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xa2cac` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 4.0ms |       4 | `0x50d8` | `binary` |

##### `0x9e6f8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x11b44` | `binary` |

##### `0x929e0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 75.0% | 3.0ms |       3 | `0x1b18` | `binary` |
| 25.0% | 1.0ms |       1 | `0x1ad0` | `binary` |

##### `0x8faf4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 4.0ms |       4 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x137f84` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 3.0ms |       3 | `0x10f78` | `binary` |

##### `0x92284` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x9d114` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x11b44` | `binary` |

##### `0x9d1b0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x12108` | `binary` |

##### `0x923f0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x92aa0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 50.0% | 1.0ms |       1 | `0x1b18` | `binary` |
| 50.0% | 1.0ms |       1 | `0x1ad0` | `binary` |

##### `0x929c4` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x137f94` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x10f78` | `binary` |

##### `0x92a58` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 50.0% | 1.0ms |       1 | `0x1b18` | `binary` |
| 50.0% | 1.0ms |       1 | `0x1ad0` | `binary` |

##### `0x8fb44` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function   | Location                                           |
| -----: | ------: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 499.5ms |     499 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 499.5ms |     499 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 499.5ms |     499 | `0x1c30`   | `binary`                                           |
|  81.0% | 404.4ms |     404 | `0x1ab4`   | `binary`                                           |
|  73.5% | 367.4ms |     367 | `0x12150`  | `binary`                                           |
|  59.3% | 296.3ms |     296 | `0x11cd0`  | `binary`                                           |
|  41.7% | 208.2ms |     208 | `0x11b44`  | `binary`                                           |
|  17.6% |  88.1ms |      88 | `0x112e0`  | `binary`                                           |
|  13.2% |  66.1ms |      66 | `0x11b08`  | `binary`                                           |
|  12.8% |  64.1ms |      64 | `0x1a6c`   | `binary`                                           |
|  10.0% |  50.1ms |      50 | `0x11ec0`  | `binary`                                           |
|   9.8% |  49.0ms |      49 | `0x12108`  | `binary`                                           |
|   9.6% |  48.0ms |      48 | `0x10f78`  | `binary`                                           |
|   5.8% |  29.0ms |      29 | `0x10f48`  | `binary`                                           |
|   5.2% |  26.0ms |      26 | `0x12140`  | `binary`                                           |
|   3.6% |  18.0ms |      18 | `0x5464`   | `binary`                                           |
|   3.2% |  16.0ms |      16 | `0x5424`   | `binary`                                           |
|   3.2% |  16.0ms |      16 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   3.0% |  15.0ms |      15 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.6% |  13.0ms |      13 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 499.5ms |     499 | `0x1c30`  | `binary` |
|  81.0% | 404.4ms |     404 | `0x1ab4`  | `binary` |
|  73.5% | 367.4ms |     367 | `0x12150` | `binary` |
|  59.3% | 296.3ms |     296 | `0x11cd0` | `binary` |
|  41.7% | 208.2ms |     208 | `0x11b44` | `binary` |
|  17.6% |  88.1ms |      88 | `0x112e0` | `binary` |
|  13.2% |  66.1ms |      66 | `0x11b08` | `binary` |
|  12.8% |  64.1ms |      64 | `0x1a6c`  | `binary` |
|  10.0% |  50.1ms |      50 | `0x11ec0` | `binary` |
|   9.8% |  49.0ms |      49 | `0x12108` | `binary` |
|   9.6% |  48.0ms |      48 | `0x10f78` | `binary` |
|   5.8% |  29.0ms |      29 | `0x10f48` | `binary` |
|   5.2% |  26.0ms |      26 | `0x12140` | `binary` |
|   3.6% |  18.0ms |      18 | `0x5464`  | `binary` |
|   3.2% |  16.0ms |      16 | `0x5424`  | `binary` |
|   2.4% |  12.0ms |      12 | `0x4c30`  | `binary` |
|   2.0% |  10.0ms |      10 | `0x50d8`  | `binary` |
|   2.0% |  10.0ms |      10 | `0xc9c4`  | `binary` |
|   2.0% |  10.0ms |      10 | `0x1b18`  | `binary` |
|   2.0% |  10.0ms |      10 | `0x4e50`  | `binary` |

##### Native

|      % |    Time | Samples | Function   | Location                                           |
| -----: | ------: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 499.5ms |     499 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 499.5ms |     499 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   3.2% |  16.0ms |      16 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   3.0% |  15.0ms |      15 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.6% |  13.0ms |      13 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.0% |  10.0ms |      10 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.4% |   7.0ms |       7 | `0x92a9c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.2% |   6.0ms |       6 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.2% |   6.0ms |       6 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.0% |   5.0ms |       5 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.8% |   4.0ms |       4 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.8% |   4.0ms |       4 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.8% |   4.0ms |       4 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9d114`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x92aa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee    | Location                                           |
| ----: | ------: | ------: | --------- | -------------------------------------------------- |
| 81.0% | 404.4ms |     404 | `0x1ab4`  | `binary`                                           |
| 12.8% |  64.1ms |      64 | `0x1a6c`  | `binary`                                           |
|  2.0% |  10.0ms |      10 | `0x1b18`  | `binary`                                           |
|  1.2% |   6.0ms |       6 | `0xa0cb0` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  1.0% |   5.0ms |       5 | `0x9d234` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 499.5ms |     499 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1c30` (`binary`)

|      % |    Time | Samples | Callee    | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% | 499.5ms |     499 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1ab4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 81.7% | 330.3ms |     330 | `0x12150` | `binary` |
|  6.9% |  28.0ms |      28 | `0x12108` | `binary` |
|  5.4% |  22.0ms |      22 | `0x12140` | `binary` |
|  1.2% |   5.0ms |       5 | `0x120a0` | `binary` |
|  1.2% |   5.0ms |       5 | `0x120fc` | `binary` |

##### `0x12150` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 80.7% | 296.3ms |     296 | `0x11cd0` | `binary` |
| 13.6% |  50.1ms |      50 | `0x11ec0` | `binary` |
|  1.9% |   7.0ms |       7 | `0x11b98` | `binary` |
|  1.1% |   4.0ms |       4 | `0x11cdc` | `binary` |
|  0.5% |   2.0ms |       2 | `0x11bb4` | `binary` |

##### `0x11cd0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 70.3% | 208.2ms |     208 | `0x11b44` | `binary` |
| 22.3% |  66.1ms |      66 | `0x11b08` | `binary` |
|  2.4% |   7.0ms |       7 | `0x11a30` | `binary` |
|  1.0% |   3.0ms |       3 | `0x11a14` | `binary` |
|  1.0% |   3.0ms |       3 | `0x11b50` | `binary` |

##### `0x11b44` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 42.3% | 88.1ms |      88 | `0x112e0` | `binary` |
|  4.8% | 10.0ms |      10 | `0xc9c4`  | `binary` |
|  2.9% |  6.0ms |       6 | `0x112c4` | `binary` |
|  2.9% |  6.0ms |       6 | `0xc95c`  | `binary` |
|  2.4% |  5.0ms |       5 | `0xe214`  | `binary` |

##### `0x112e0` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 54.5% | 48.0ms |      48 | `0x10f78` | `binary` |
| 33.0% | 29.0ms |      29 | `0x10f48` | `binary` |
|  3.4% |  3.0ms |       3 | `0x10e68` | `binary` |
|  2.3% |  2.0ms |       2 | `0xf208`  | `binary` |
|  2.3% |  2.0ms |       2 | `0x11208` | `binary` |

##### `0x11b08` (`binary`)

|     % |   Time | Samples | Callee   | Location |
| ----: | -----: | ------: | -------- | -------- |
| 18.2% | 12.0ms |      12 | `0x4c30` | `binary` |
| 15.2% | 10.0ms |      10 | `0x4e50` | `binary` |
| 10.6% |  7.0ms |       7 | `0x4c90` | `binary` |
|  9.1% |  6.0ms |       6 | `0x4dbc` | `binary` |
|  7.6% |  5.0ms |       5 | `0x4b4c` | `binary` |

##### `0x1a6c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 57.8% | 37.0ms |      37 | `0x12150` | `binary` |
| 32.8% | 21.0ms |      21 | `0x12108` | `binary` |
|  6.3% |  4.0ms |       4 | `0x12140` | `binary` |
|  3.1% |  2.0ms |       2 | `0x120fc` | `binary` |

##### `0x11ec0` (`binary`)

|     % |   Time | Samples | Callee    | Location                                 |
| ----: | -----: | ------: | --------- | ---------------------------------------- |
| 22.0% | 11.0ms |      11 | `0x5424`  | `binary`                                 |
| 20.0% | 10.0ms |      10 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.0% |  5.0ms |       5 | `0x5420`  | `binary`                                 |
|  8.0% |  4.0ms |       4 | `0x5434`  | `binary`                                 |
|  8.0% |  4.0ms |       4 | `0x5408`  | `binary`                                 |

##### `0x12108` (`binary`)

|     % |   Time | Samples | Callee     | Location                                           |
| ----: | -----: | ------: | ---------- | -------------------------------------------------- |
| 32.7% | 16.0ms |      16 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 26.5% | 13.0ms |      13 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 20.4% | 10.0ms |      10 | `0x50d8`   | `binary`                                           |
|  8.2% |  4.0ms |       4 | `0x5114`   | `binary`                                           |
|  4.1% |  2.0ms |       2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

##### `0x10f78` (`binary`)

|     % |  Time | Samples | Callee     | Location                                           |
| ----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 16.7% | 8.0ms |       8 | `0xf6bc`   | `binary`                                           |
| 16.7% | 8.0ms |       8 | `0xf708`   | `binary`                                           |
| 12.5% | 6.0ms |       6 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  8.3% | 4.0ms |       4 | `0xf6f4`   | `binary`                                           |
|  6.3% | 3.0ms |       3 | `0xf07c`   | `binary`                                           |

##### `0x10f48` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 13.8% | 4.0ms |       4 | `0x7cb4` | `binary` |
|  6.9% | 2.0ms |       2 | `0x7ef0` | `binary` |
|  6.9% | 2.0ms |       2 | `0x7bbc` | `binary` |
|  6.9% | 2.0ms |       2 | `0x7c08` | `binary` |
|  6.9% | 2.0ms |       2 | `0x7f54` | `binary` |

##### `0x12140` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 34.6% | 9.0ms |       9 | `0x5464` | `binary` |
| 11.5% | 3.0ms |       3 | `0x5408` | `binary` |
| 11.5% | 3.0ms |       3 | `0x5424` | `binary` |
| 11.5% | 3.0ms |       3 | `0x53e4` | `binary` |
|  7.7% | 2.0ms |       2 | `0x5440` | `binary` |

##### `0x50d8` (`binary`)

|      % |   Time | Samples | Callee    | Location                                           |
| -----: | -----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 10.0ms |      10 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0xc9c4` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 50.0% | 5.0ms |       5 | `0x5230` | `binary` |
| 20.0% | 2.0ms |       2 | `0x5270` | `binary` |
| 20.0% | 2.0ms |       2 | `0x5224` | `binary` |
| 10.0% | 1.0ms |       1 | `0x5238` | `binary` |

##### `0x1b18` (`binary`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 50.0% | 5.0ms |       5 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 30.0% | 3.0ms |       3 | `0x929e0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.0% | 1.0ms |       1 | `0x92aa0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.0% | 1.0ms |       1 | `0x92a58` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x4e50` (`binary`)

|     % |  Time | Samples | Callee   | Location |
| ----: | ----: | ------: | -------- | -------- |
| 40.0% | 4.0ms |       4 | `0x48ec` | `binary` |
| 30.0% | 3.0ms |       3 | `0x4934` | `binary` |
| 20.0% | 2.0ms |       2 | `0x48e4` | `binary` |
| 10.0% | 1.0ms |       1 | `0x48d8` | `binary` |

##### `0xa2cac` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 20.0% | 2.0ms |       2 | `0x92284` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 20.0% | 2.0ms |       2 | `0x923f0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 20.0% | 2.0ms |       2 | `0x92260` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 57.1% | 4.0ms |       4 | `0x8faf4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 28.6% | 2.0ms |       2 | `0x8fb44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 14.3% | 1.0ms |       1 | `0x8faa0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x1c30` (`binary`)

|    % |   Time | Samples | Call stack                                                                                                                                        |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.4% | 12.0ms |      12 | `0x4c30` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 2.0% | 10.0ms |      10 | `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x11ec0` (`binary`) ← `0x12150` ← `0x1a6c`                                                |
| 1.8% |  9.0ms |       9 | `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x12108` (`binary`) ← `0x1ab4`                                                 |
| 1.6% |  8.0ms |       8 | `0x5464` (`binary`) ← `0x12140` ← `0x1ab4`                                                                                                        |
| 1.4% |  7.0ms |       7 | `0x11a30` (`binary`) ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                           |
| 1.4% |  7.0ms |       7 | `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x12108` (`binary`) ← `0x1a6c`                                                            |
| 1.4% |  7.0ms |       7 | `0x137f20` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x12108` (`binary`) ← `0x1a6c`                                                 |
| 1.4% |  7.0ms |       7 | `0x11b98` (`binary`) ← `0x12150` ← `0x1ab4`                                                                                                       |
| 1.4% |  7.0ms |       7 | `0x4c90` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 1.2% |  6.0ms |       6 | `0x5424` (`binary`) ← `0x11ec0` ← `0x12150` ← `0x1ab4`                                                                                            |
| 1.2% |  6.0ms |       6 | `0x112c4` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                               |
| 1.2% |  6.0ms |       6 | `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x12108` (`binary`) ← `0x1ab4`                                                            |
| 1.2% |  6.0ms |       6 | `0xa0cb0` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)                                                                                    |
| 1.2% |  6.0ms |       6 | `0xc95c` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 1.2% |  6.0ms |       6 | `0x137f80` (`../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `0x10f78` (`binary`) ← `0x112e0` ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4` |
| 1.0% |  5.0ms |       5 | `0xe214` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 1.0% |  5.0ms |       5 | `0x9e6c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x11b44` (`binary`) ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                    |
| 1.0% |  5.0ms |       5 | `0x120a0` (`binary`) ← `0x1ab4`                                                                                                                   |
| 1.0% |  5.0ms |       5 | `0x4b4c` (`binary`) ← `0x11b08` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |
| 1.0% |  5.0ms |       5 | `0xe17c` (`binary`) ← `0x11b44` ← `0x11cd0` ← `0x12150` ← `0x1ab4`                                                                                |

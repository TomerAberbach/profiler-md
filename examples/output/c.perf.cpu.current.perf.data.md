# CPU profile

Took 1.22s over 1,219 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.5% | 1.21s |   1,213 |
| Native   |  0.2% | 3.0ms |       3 |
| Kernel   |  0.2% | 3.0ms |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 15.0% | 183.2ms |     183 | `0x60980` | `zstd`   |
| 13.9% | 170.2ms |     170 | `0x609c8` | `zstd`   |
| 11.9% | 145.1ms |     145 | `0x60c38` | `zstd`   |
| 11.7% | 143.1ms |     143 | `0x60c5c` | `zstd`   |
|  3.6% |  44.0ms |      44 | `0x609b8` | `zstd`   |
|  3.6% |  44.0ms |      44 | `0x5a65c` | `zstd`   |
|  3.3% |  40.0ms |      40 | `0x5a7c0` | `zstd`   |
|  2.2% |  27.0ms |      27 | `0x5a85c` | `zstd`   |
|  1.9% |  23.0ms |      23 | `0x5a78c` | `zstd`   |
|  1.7% |  21.0ms |      21 | `0x60c90` | `zstd`   |
|  1.6% |  19.0ms |      19 | `0x5a838` | `zstd`   |
|  1.3% |  16.0ms |      16 | `0x60978` | `zstd`   |
|  1.2% |  15.0ms |      15 | `0x60a08` | `zstd`   |
|  1.2% |  15.0ms |      15 | `0x5a7a8` | `zstd`   |
|  1.1% |  14.0ms |      14 | `0x609ec` | `zstd`   |
|  0.9% |  11.0ms |      11 | `0x60c60` | `zstd`   |
|  0.9% |  11.0ms |      11 | `0x609d4` | `zstd`   |
|  0.9% |  11.0ms |      11 | `0x609a0` | `zstd`   |
|  0.8% |  10.0ms |      10 | `0x58908` | `zstd`   |
|  0.7% |   9.0ms |       9 | `0x5a860` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60980` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 183.2ms |     183 | `0x5a3f4` | `zstd`   |

##### `0x609c8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 170.2ms |     170 | `0x5a3f4` | `zstd`   |

##### `0x60c38` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 145.1ms |     145 | `0x5a3f4` | `zstd`   |

##### `0x60c5c` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 143.1ms |     143 | `0x5a3f4` | `zstd`   |

##### `0x609b8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 44.0ms |      44 | `0x5a3f4` | `zstd`   |

##### `0x5a65c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 44.0ms |      44 | `0x11630` | `zstd`   |

##### `0x5a7c0` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.0% | 38.0ms |      38 | `0x11630` | `zstd`   |
|  5.0% |  2.0ms |       2 | `0x61b40` | `zstd`   |

##### `0x5a85c` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 96.3% | 26.0ms |      26 | `0x11630` | `zstd`   |
|  3.7% |  1.0ms |       1 | `0x61b40` | `zstd`   |

##### `0x5a78c` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.7% | 22.0ms |      22 | `0x11630` | `zstd`   |
|  4.3% |  1.0ms |       1 | `0x61b40` | `zstd`   |

##### `0x60c90` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 21.0ms |      21 | `0x5a3f4` | `zstd`   |

##### `0x5a838` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 94.7% | 18.0ms |      18 | `0x11630` | `zstd`   |
|  5.3% |  1.0ms |       1 | `0x61b40` | `zstd`   |

##### `0x60978` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x5a3f4` | `zstd`   |

##### `0x60a08` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x5a3f4` | `zstd`   |

##### `0x5a7a8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x11630` | `zstd`   |

##### `0x609ec` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x5a3f4` | `zstd`   |

##### `0x60c60` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x5a3f4` | `zstd`   |

##### `0x609d4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x5a3f4` | `zstd`   |

##### `0x609a0` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x5a3f4` | `zstd`   |

##### `0x58908` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x11630` | `zstd`   |

##### `0x5a860` (`zstd`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 88.9% | 8.0ms |       8 | `0x11630` | `zstd`   |
| 11.1% | 1.0ms |       1 | `0x61b40` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.21s |   1,217 | `0x9f20`  | `zstd`                                 |
| 99.8% |   1.21s |   1,217 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.21s |   1,217 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 98.7% |   1.20s |   1,203 | `0x11630` | `zstd`                                 |
| 98.7% |   1.20s |   1,203 | `0x16720` | `zstd`                                 |
| 79.8% | 974.0ms |     973 | `0x62a60` | `zstd`                                 |
| 72.2% | 880.9ms |     880 | `0x5a3f4` | `zstd`                                 |
| 19.8% | 241.2ms |     241 | `0x17e38` | `zstd`                                 |
| 19.8% | 241.2ms |     241 | `0x62d34` | `zstd`                                 |
| 15.0% | 183.2ms |     183 | `0x60980` | `zstd`                                 |
| 13.9% | 170.2ms |     170 | `0x609c8` | `zstd`                                 |
| 11.9% | 145.1ms |     145 | `0x60c38` | `zstd`                                 |
| 11.7% | 143.1ms |     143 | `0x60c5c` | `zstd`                                 |
|  3.6% |  44.0ms |      44 | `0x609b8` | `zstd`                                 |
|  3.6% |  44.0ms |      44 | `0x5a65c` | `zstd`                                 |
|  3.3% |  40.0ms |      40 | `0x5a7c0` | `zstd`                                 |
|  2.2% |  27.0ms |      27 | `0x5a85c` | `zstd`                                 |
|  1.9% |  23.0ms |      23 | `0x5a78c` | `zstd`                                 |
|  1.7% |  21.0ms |      21 | `0x60c90` | `zstd`                                 |
|  1.6% |  19.0ms |      19 | `0x5a838` | `zstd`                                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.21s |   1,217 | `0x9f20`  | `zstd`   |
| 98.7% |   1.20s |   1,203 | `0x11630` | `zstd`   |
| 98.7% |   1.20s |   1,203 | `0x16720` | `zstd`   |
| 79.8% | 974.0ms |     973 | `0x62a60` | `zstd`   |
| 72.2% | 880.9ms |     880 | `0x5a3f4` | `zstd`   |
| 19.8% | 241.2ms |     241 | `0x17e38` | `zstd`   |
| 19.8% | 241.2ms |     241 | `0x62d34` | `zstd`   |
| 15.0% | 183.2ms |     183 | `0x60980` | `zstd`   |
| 13.9% | 170.2ms |     170 | `0x609c8` | `zstd`   |
| 11.9% | 145.1ms |     145 | `0x60c38` | `zstd`   |
| 11.7% | 143.1ms |     143 | `0x60c5c` | `zstd`   |
|  3.6% |  44.0ms |      44 | `0x609b8` | `zstd`   |
|  3.6% |  44.0ms |      44 | `0x5a65c` | `zstd`   |
|  3.3% |  40.0ms |      40 | `0x5a7c0` | `zstd`   |
|  2.2% |  27.0ms |      27 | `0x5a85c` | `zstd`   |
|  1.9% |  23.0ms |      23 | `0x5a78c` | `zstd`   |
|  1.7% |  21.0ms |      21 | `0x60c90` | `zstd`   |
|  1.6% |  19.0ms |      19 | `0x5a838` | `zstd`   |
|  1.3% |  16.0ms |      16 | `0x61b40` | `zstd`   |
|  1.3% |  16.0ms |      16 | `0x60978` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9f20` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 80.0% | 974.0ms |     973 | `0x62a60` | `zstd`   |
| 19.8% | 241.2ms |     241 | `0x62d34` | `zstd`   |
|  0.2% |   2.0ms |       2 | `0x62afc` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0xa2e60` | `zstd`   |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.21s |   1,217 | `0x9f20` | `zstd`   |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.21s |   1,217 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11630` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.4% | 871.9ms |     871 | `0x5a3f4` | `zstd`   |
|  3.7% |  44.0ms |      44 | `0x5a65c` | `zstd`   |
|  3.2% |  38.0ms |      38 | `0x5a7c0` | `zstd`   |
|  2.2% |  26.0ms |      26 | `0x5a85c` | `zstd`   |
|  1.8% |  22.0ms |      22 | `0x5a78c` | `zstd`   |

##### `0x16720` (`zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.20s |   1,203 | `0x11630` | `zstd`   |

##### `0x62a60` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 98.9% | 963.0ms |     962 | `0x16720` | `zstd`   |
|  0.6% |   6.0ms |       6 | `0x168b8` | `zstd`   |
|  0.3% |   3.0ms |       3 | `0x16898` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x16a74` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x163b0` | `zstd`   |

##### `0x5a3f4` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 20.8% | 183.2ms |     183 | `0x60980` | `zstd`   |
| 19.3% | 170.2ms |     170 | `0x609c8` | `zstd`   |
| 16.5% | 145.1ms |     145 | `0x60c38` | `zstd`   |
| 16.3% | 143.1ms |     143 | `0x60c5c` | `zstd`   |
|  5.0% |  44.0ms |      44 | `0x609b8` | `zstd`   |

##### `0x17e38` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 241.2ms |     241 | `0x16720` | `zstd`   |

##### `0x62d34` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 241.2ms |     241 | `0x17e38` | `zstd`   |

##### `0x61b40` (`zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 56.3% | 9.0ms |       9 | `0x5a3f4` | `zstd`   |
| 12.5% | 2.0ms |       2 | `0x5a7c0` | `zstd`   |
|  6.3% | 1.0ms |       1 | `0x5a1f8` | `zstd`   |
|  6.3% | 1.0ms |       1 | `0x5a85c` | `zstd`   |
|  6.3% | 1.0ms |       1 | `0x5a78c` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9f20` (`zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 11.7% | 143.1ms |     143 | `0x60980` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
| 10.6% | 129.1ms |     129 | `0x609c8` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  9.4% | 115.1ms |     115 | `0x60c38` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  8.9% | 108.1ms |     108 | `0x60c5c` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  3.4% |  41.0ms |      41 | `0x5a65c` (`zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  3.4% |  41.0ms |      41 | `0x609c8` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  3.0% |  37.0ms |      37 | `0x60980` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.9% |  35.0ms |      35 | `0x60c5c` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.7% |  33.0ms |      33 | `0x5a7c0` (`zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  2.5% |  30.0ms |      30 | `0x60c38` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.4% |  29.0ms |      29 | `0x609b8` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  2.1% |  25.0ms |      25 | `0x5a85c` (`zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.7% |  21.0ms |      21 | `0x5a78c` (`zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.2% |  15.0ms |      15 | `0x5a838` (`zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.1% |  14.0ms |      14 | `0x5a7a8` (`zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.1% |  14.0ms |      14 | `0x60c90` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  1.1% |  14.0ms |      14 | `0x609b8` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  1.0% |  12.0ms |      12 | `0x60978` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  0.8% |  10.0ms |      10 | `0x60c60` (`zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  0.7% |   9.0ms |       9 | `0x58908` (`zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |

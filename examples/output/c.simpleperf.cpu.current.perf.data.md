# CPU profile

Took 1.60s over 1,608 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.8% | 1.60s |   1,605 |
| Kernel   |  0.1% | 2.0ms |       2 |
| Native   |  0.1% | 1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 17.3% | 278.3ms |     278 | `0x60980` | `zstd`   |
| 17.2% | 277.3ms |     277 | `0x609c8` | `zstd`   |
| 14.0% | 225.2ms |     225 | `0x60c38` | `zstd`   |
| 13.6% | 218.2ms |     218 | `0x60c5c` | `zstd`   |
|  3.5% |  57.1ms |      57 | `0x609b8` | `zstd`   |
|  3.0% |  48.0ms |      48 | `0x5a65c` | `zstd`   |
|  2.7% |  43.0ms |      43 | `0x60c90` | `zstd`   |
|  1.9% |  30.0ms |      30 | `0x5a7c0` | `zstd`   |
|  1.7% |  28.0ms |      28 | `0x5a85c` | `zstd`   |
|  1.4% |  23.0ms |      23 | `0x5a78c` | `zstd`   |
|  1.2% |  19.0ms |      19 | `0x60a08` | `zstd`   |
|  1.2% |  19.0ms |      19 | `0x609ec` | `zstd`   |
|  1.0% |  16.0ms |      16 | `0x5a838` | `zstd`   |
|  0.9% |  14.0ms |      14 | `0x609bc` | `zstd`   |
|  0.7% |  12.0ms |      12 | `0x60978` | `zstd`   |
|  0.6% |  10.0ms |      10 | `0x5a770` | `zstd`   |
|  0.6% |  10.0ms |      10 | `0x5a874` | `zstd`   |
|  0.6% |  10.0ms |      10 | `0x609d4` | `zstd`   |
|  0.6% |   9.0ms |       9 | `0x5a7a8` | `zstd`   |
|  0.5% |   8.0ms |       8 | `0x60acc` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60980` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 278.3ms |     278 | `0x5a3f2` | `zstd`   |

##### `0x609c8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 277.3ms |     277 | `0x5a3f2` | `zstd`   |

##### `0x60c38` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 225.2ms |     225 | `0x5a3f2` | `zstd`   |

##### `0x60c5c` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 218.2ms |     218 | `0x5a3f2` | `zstd`   |

##### `0x609b8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 57.1ms |      57 | `0x5a3f2` | `zstd`   |

##### `0x5a65c` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.8% | 46.0ms |      46 | `0x1162e` | `zstd`   |
|  4.2% |  2.0ms |       2 | `0x61b3e` | `zstd`   |

##### `0x60c90` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 43.0ms |      43 | `0x5a3f2` | `zstd`   |

##### `0x5a7c0` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 90.0% | 27.0ms |      27 | `0x1162e` | `zstd`   |
| 10.0% |  3.0ms |       3 | `0x61b3e` | `zstd`   |

##### `0x5a85c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 28.0ms |      28 | `0x1162e` | `zstd`   |

##### `0x5a78c` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.7% | 22.0ms |      22 | `0x1162e` | `zstd`   |
|  4.3% |  1.0ms |       1 | `0x61b3e` | `zstd`   |

##### `0x60a08` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 19.0ms |      19 | `0x5a3f2` | `zstd`   |

##### `0x609ec` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 19.0ms |      19 | `0x5a3f2` | `zstd`   |

##### `0x5a838` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 93.8% | 15.0ms |      15 | `0x1162e` | `zstd`   |
|  6.3% |  1.0ms |       1 | `0x61b3e` | `zstd`   |

##### `0x609bc` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x5a3f2` | `zstd`   |

##### `0x60978` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x5a3f2` | `zstd`   |

##### `0x5a770` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x1162e` | `zstd`   |

##### `0x5a874` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x1162e` | `zstd`   |

##### `0x609d4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x5a3f2` | `zstd`   |

##### `0x5a7a8` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x1162e` | `zstd`   |

##### `0x60acc` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 8.0ms |       8 | `0x5a3f2` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.9% |   1.60s |   1,606 | `0x9f1e`  | `zstd`                                 |
| 99.9% |   1.60s |   1,606 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.9% |   1.60s |   1,606 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.2% |   1.59s |   1,595 | `0x1162e` | `zstd`                                 |
| 99.2% |   1.59s |   1,595 | `0x1671e` | `zstd`                                 |
| 82.8% |   1.33s |   1,331 | `0x62a5e` | `zstd`                                 |
| 79.5% |   1.27s |   1,278 | `0x5a3f2` | `zstd`                                 |
| 17.3% | 278.3ms |     278 | `0x60980` | `zstd`                                 |
| 17.2% | 277.3ms |     277 | `0x609c8` | `zstd`                                 |
| 17.0% | 274.3ms |     274 | `0x17e36` | `zstd`                                 |
| 17.0% | 274.3ms |     274 | `0x62d32` | `zstd`                                 |
| 14.0% | 225.2ms |     225 | `0x60c38` | `zstd`                                 |
| 13.6% | 218.2ms |     218 | `0x60c5c` | `zstd`                                 |
|  3.5% |  57.1ms |      57 | `0x609b8` | `zstd`                                 |
|  3.0% |  48.0ms |      48 | `0x5a65c` | `zstd`                                 |
|  2.7% |  43.0ms |      43 | `0x60c90` | `zstd`                                 |
|  1.9% |  30.0ms |      30 | `0x5a7c0` | `zstd`                                 |
|  1.7% |  28.0ms |      28 | `0x5a85c` | `zstd`                                 |
|  1.4% |  23.0ms |      23 | `0x5a78c` | `zstd`                                 |
|  1.2% |  20.0ms |      20 | `0x61b3e` | `zstd`                                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.9% |   1.60s |   1,606 | `0x9f1e`  | `zstd`   |
| 99.2% |   1.59s |   1,595 | `0x1162e` | `zstd`   |
| 99.2% |   1.59s |   1,595 | `0x1671e` | `zstd`   |
| 82.8% |   1.33s |   1,331 | `0x62a5e` | `zstd`   |
| 79.5% |   1.27s |   1,278 | `0x5a3f2` | `zstd`   |
| 17.3% | 278.3ms |     278 | `0x60980` | `zstd`   |
| 17.2% | 277.3ms |     277 | `0x609c8` | `zstd`   |
| 17.0% | 274.3ms |     274 | `0x17e36` | `zstd`   |
| 17.0% | 274.3ms |     274 | `0x62d32` | `zstd`   |
| 14.0% | 225.2ms |     225 | `0x60c38` | `zstd`   |
| 13.6% | 218.2ms |     218 | `0x60c5c` | `zstd`   |
|  3.5% |  57.1ms |      57 | `0x609b8` | `zstd`   |
|  3.0% |  48.0ms |      48 | `0x5a65c` | `zstd`   |
|  2.7% |  43.0ms |      43 | `0x60c90` | `zstd`   |
|  1.9% |  30.0ms |      30 | `0x5a7c0` | `zstd`   |
|  1.7% |  28.0ms |      28 | `0x5a85c` | `zstd`   |
|  1.4% |  23.0ms |      23 | `0x5a78c` | `zstd`   |
|  1.2% |  20.0ms |      20 | `0x61b3e` | `zstd`   |
|  1.2% |  19.0ms |      19 | `0x60a08` | `zstd`   |
|  1.2% |  19.0ms |      19 | `0x609ec` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9f1e` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.9% |   1.33s |   1,331 | `0x62a5e` | `zstd`   |
| 17.1% | 274.3ms |     274 | `0x62d32` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x62afa` | `zstd`   |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.60s |   1,606 | `0x9f1e` | `zstd`   |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.60s |   1,606 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1162e` (`zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 79.5% |  1.26s |   1,268 | `0x5a3f2` | `zstd`   |
|  2.9% | 46.0ms |      46 | `0x5a65c` | `zstd`   |
|  1.8% | 28.0ms |      28 | `0x5a85c` | `zstd`   |
|  1.7% | 27.0ms |      27 | `0x5a7c0` | `zstd`   |
|  1.4% | 22.0ms |      22 | `0x5a78c` | `zstd`   |

##### `0x1671e` (`zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.59s |   1,595 | `0x1162e` | `zstd`   |

##### `0x62a5e` (`zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.4% | 1.32s |   1,323 | `0x1671e` | `zstd`   |
|  0.4% | 5.0ms |       5 | `0x168b6` | `zstd`   |
|  0.2% | 2.0ms |       2 | `0x16896` | `zstd`   |
|  0.1% | 1.0ms |       1 | `0x163ae` | `zstd`   |

##### `0x5a3f2` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 21.8% | 278.3ms |     278 | `0x60980` | `zstd`   |
| 21.7% | 277.3ms |     277 | `0x609c8` | `zstd`   |
| 17.6% | 225.2ms |     225 | `0x60c38` | `zstd`   |
| 17.1% | 218.2ms |     218 | `0x60c5c` | `zstd`   |
|  4.5% |  57.1ms |      57 | `0x609b8` | `zstd`   |

##### `0x17e36` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.3% | 272.3ms |     272 | `0x1671e` | `zstd`   |
|  0.7% |   2.0ms |       2 | `0x168b6` | `zstd`   |

##### `0x62d32` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 274.3ms |     274 | `0x17e36` | `zstd`   |

##### `0x61b3e` (`zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 50.0% | 10.0ms |      10 | `0x5a3f2` | `zstd`   |
| 15.0% |  3.0ms |       3 | `0x5a7c0` | `zstd`   |
| 10.0% |  2.0ms |       2 | `0x5a65c` | `zstd`   |
|  5.0% |  1.0ms |       1 | `0x59d4a` | `zstd`   |
|  5.0% |  1.0ms |       1 | `0x58680` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9f1e` (`zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 14.6% | 235.2ms |     235 | `0x609c8` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
| 13.9% | 223.2ms |     223 | `0x60980` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
| 11.1% | 178.2ms |     178 | `0x60c38` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
| 10.9% | 176.2ms |     176 | `0x60c5c` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  3.4% |  55.1ms |      55 | `0x60980` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  2.9% |  47.0ms |      47 | `0x60c38` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  2.7% |  43.0ms |      43 | `0x609b8` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  2.6% |  42.0ms |      42 | `0x60c5c` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  2.5% |  41.0ms |      41 | `0x609c8` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  2.4% |  39.0ms |      39 | `0x5a65c` (`zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  2.0% |  32.0ms |      32 | `0x60c90` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  1.6% |  26.0ms |      26 | `0x5a85c` (`zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  1.5% |  24.0ms |      24 | `0x5a7c0` (`zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  1.1% |  17.0ms |      17 | `0x5a78c` (`zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  0.9% |  15.0ms |      15 | `0x60a08` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  0.9% |  15.0ms |      15 | `0x609ec` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  0.9% |  14.0ms |      14 | `0x5a838` (`zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  0.9% |  14.0ms |      14 | `0x609bc` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  0.7% |  12.0ms |      12 | `0x609b8` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  0.7% |  11.0ms |      11 | `0x60978` (`zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |

# CPU profile

Took 1.10s over 1,108 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.7% | 1.10s |   1,105 |
| Kernel   |  0.2% | 2.0ms |       2 |
| Native   |  0.1% | 1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 14.2% | 157.2ms |     157 | `0x5f848` | `zstd`   |
| 13.0% | 144.1ms |     144 | `0x5fab8` | `zstd`   |
| 12.7% | 141.1ms |     141 | `0x5f800` | `zstd`   |
| 11.0% | 122.1ms |     122 | `0x5fadc` | `zstd`   |
|  4.2% |  46.0ms |      46 | `0x5f838` | `zstd`   |
|  4.0% |  44.0ms |      44 | `0x594d8` | `zstd`   |
|  3.2% |  35.0ms |      35 | `0x596dc` | `zstd`   |
|  3.0% |  33.0ms |      33 | `0x59640` | `zstd`   |
|  2.5% |  28.0ms |      28 | `0x5fb10` | `zstd`   |
|  2.3% |  26.0ms |      26 | `0x596b8` | `zstd`   |
|  2.1% |  23.0ms |      23 | `0x5960c` | `zstd`   |
|  1.4% |  16.0ms |      16 | `0x5f7f8` | `zstd`   |
|  1.4% |  15.0ms |      15 | `0x59628` | `zstd`   |
|  1.1% |  12.0ms |      12 | `0x596f4` | `zstd`   |
|  1.0% |  11.0ms |      11 | `0x596b4` | `zstd`   |
|  1.0% |  11.0ms |      11 | `0x5967c` | `zstd`   |
|  0.9% |  10.0ms |      10 | `0x59558` | `zstd`   |
|  0.8% |   9.0ms |       9 | `0x5fac4` | `zstd`   |
|  0.8% |   9.0ms |       9 | `0x5f820` | `zstd`   |
|  0.7% |   8.0ms |       8 | `0x5955c` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5f848` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 157.2ms |     157 | `0x59274` | `zstd`   |

##### `0x5fab8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 144.1ms |     144 | `0x59274` | `zstd`   |

##### `0x5f800` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 141.1ms |     141 | `0x59274` | `zstd`   |

##### `0x5fadc` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 122.1ms |     122 | `0x59274` | `zstd`   |

##### `0x5f838` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 46.0ms |      46 | `0x59274` | `zstd`   |

##### `0x594d8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 44.0ms |      44 | `0x11090` | `zstd`   |

##### `0x596dc` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.1% | 34.0ms |      34 | `0x11090` | `zstd`   |
|  2.9% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x59640` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.0% | 32.0ms |      32 | `0x11090` | `zstd`   |
|  3.0% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x5fb10` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 28.0ms |      28 | `0x59274` | `zstd`   |

##### `0x596b8` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 96.2% | 25.0ms |      25 | `0x11090` | `zstd`   |
|  3.8% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x5960c` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.7% | 22.0ms |      22 | `0x11090` | `zstd`   |
|  4.3% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x5f7f8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x59274` | `zstd`   |

##### `0x59628` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x11090` | `zstd`   |

##### `0x596f4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x11090` | `zstd`   |

##### `0x596b4` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 90.9% | 10.0ms |      10 | `0x11090` | `zstd`   |
|  9.1% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x5967c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x11090` | `zstd`   |

##### `0x59558` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x11090` | `zstd`   |

##### `0x5fac4` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x59274` | `zstd`   |

##### `0x5f820` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x59274` | `zstd`   |

##### `0x5955c` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 8.0ms |       8 | `0x11090` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function  | Location                               |
| -----: | ------: | ------: | --------- | -------------------------------------- |
| 100.0% |   1.10s |   1,108 | `0x9cf0`  | `zstd`                                 |
| 100.0% |   1.10s |   1,108 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   1.10s |   1,108 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  98.7% |   1.09s |   1,094 | `0x11090` | `zstd`                                 |
|  98.7% |   1.09s |   1,094 | `0x16020` | `zstd`                                 |
|  83.2% | 922.9ms |     922 | `0x61404` | `zstd`                                 |
|  69.2% | 767.8ms |     767 | `0x59274` | `zstd`                                 |
|  16.5% | 183.2ms |     183 | `0x17768` | `zstd`                                 |
|  16.5% | 183.2ms |     183 | `0x616b8` | `zstd`                                 |
|  14.2% | 157.2ms |     157 | `0x5f848` | `zstd`                                 |
|  13.0% | 144.1ms |     144 | `0x5fab8` | `zstd`                                 |
|  12.7% | 141.1ms |     141 | `0x5f800` | `zstd`                                 |
|  11.0% | 122.1ms |     122 | `0x5fadc` | `zstd`                                 |
|   4.2% |  46.0ms |      46 | `0x5f838` | `zstd`                                 |
|   4.0% |  44.0ms |      44 | `0x594d8` | `zstd`                                 |
|   3.2% |  35.0ms |      35 | `0x596dc` | `zstd`                                 |
|   3.0% |  33.0ms |      33 | `0x59640` | `zstd`                                 |
|   2.5% |  28.0ms |      28 | `0x5fb10` | `zstd`                                 |
|   2.3% |  26.0ms |      26 | `0x596b8` | `zstd`                                 |
|   2.1% |  23.0ms |      23 | `0x5960c` | `zstd`                                 |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% |   1.10s |   1,108 | `0x9cf0`  | `zstd`   |
|  98.7% |   1.09s |   1,094 | `0x11090` | `zstd`   |
|  98.7% |   1.09s |   1,094 | `0x16020` | `zstd`   |
|  83.2% | 922.9ms |     922 | `0x61404` | `zstd`   |
|  69.2% | 767.8ms |     767 | `0x59274` | `zstd`   |
|  16.5% | 183.2ms |     183 | `0x17768` | `zstd`   |
|  16.5% | 183.2ms |     183 | `0x616b8` | `zstd`   |
|  14.2% | 157.2ms |     157 | `0x5f848` | `zstd`   |
|  13.0% | 144.1ms |     144 | `0x5fab8` | `zstd`   |
|  12.7% | 141.1ms |     141 | `0x5f800` | `zstd`   |
|  11.0% | 122.1ms |     122 | `0x5fadc` | `zstd`   |
|   4.2% |  46.0ms |      46 | `0x5f838` | `zstd`   |
|   4.0% |  44.0ms |      44 | `0x594d8` | `zstd`   |
|   3.2% |  35.0ms |      35 | `0x596dc` | `zstd`   |
|   3.0% |  33.0ms |      33 | `0x59640` | `zstd`   |
|   2.5% |  28.0ms |      28 | `0x5fb10` | `zstd`   |
|   2.3% |  26.0ms |      26 | `0x596b8` | `zstd`   |
|   2.1% |  23.0ms |      23 | `0x5960c` | `zstd`   |
|   1.4% |  16.0ms |      16 | `0x5f7f8` | `zstd`   |
|   1.4% |  15.0ms |      15 | `0x609c0` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9cf0` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 83.2% | 922.9ms |     922 | `0x61404` | `zstd`   |
| 16.5% | 183.2ms |     183 | `0x616b8` | `zstd`   |
|  0.2% |   2.0ms |       2 | `0x613dc` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x614a0` | `zstd`   |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.10s |   1,108 | `0x9cf0` | `zstd`   |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.10s |   1,108 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11090` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 69.5% | 760.8ms |     760 | `0x59274` | `zstd`   |
|  4.0% |  44.0ms |      44 | `0x594d8` | `zstd`   |
|  3.1% |  34.0ms |      34 | `0x596dc` | `zstd`   |
|  2.9% |  32.0ms |      32 | `0x59640` | `zstd`   |
|  2.3% |  25.0ms |      25 | `0x596b8` | `zstd`   |

##### `0x16020` (`zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.09s |   1,094 | `0x11090` | `zstd`   |

##### `0x61404` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 98.9% | 912.9ms |     912 | `0x16020` | `zstd`   |
|  0.7% |   6.0ms |       6 | `0x161a4` | `zstd`   |
|  0.4% |   4.0ms |       4 | `0x16180` | `zstd`   |

##### `0x59274` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 20.5% | 157.2ms |     157 | `0x5f848` | `zstd`   |
| 18.8% | 144.1ms |     144 | `0x5fab8` | `zstd`   |
| 18.4% | 141.1ms |     141 | `0x5f800` | `zstd`   |
| 15.9% | 122.1ms |     122 | `0x5fadc` | `zstd`   |
|  6.0% |  46.0ms |      46 | `0x5f838` | `zstd`   |

##### `0x17768` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 182.2ms |     182 | `0x16020` | `zstd`   |
|  0.5% |   1.0ms |       1 | `0x16180` | `zstd`   |

##### `0x616b8` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 183.2ms |     183 | `0x17768` | `zstd`   |

##### `0x609c0` (`zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 46.7% | 7.0ms |       7 | `0x59274` | `zstd`   |
|  6.7% | 1.0ms |       1 | `0x58c78` | `zstd`   |
|  6.7% | 1.0ms |       1 | `0x5960c` | `zstd`   |
|  6.7% | 1.0ms |       1 | `0x596b4` | `zstd`   |
|  6.7% | 1.0ms |       1 | `0x596b8` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9cf0` (`zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 11.3% | 125.1ms |     125 | `0x5f848` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 11.2% | 124.1ms |     124 | `0x5fab8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 10.6% | 118.1ms |     118 | `0x5f800` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  8.3% |  92.1ms |      92 | `0x5fadc` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  3.3% |  37.0ms |      37 | `0x594d8` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  3.2% |  35.0ms |      35 | `0x5f838` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  2.9% |  32.0ms |      32 | `0x5f848` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.6% |  29.0ms |      29 | `0x596dc` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  2.6% |  29.0ms |      29 | `0x5fadc` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.4% |  27.0ms |      27 | `0x59640` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  2.1% |  23.0ms |      23 | `0x596b8` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  2.1% |  23.0ms |      23 | `0x5f800` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  1.8% |  20.0ms |      20 | `0x5fb10` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.7% |  19.0ms |      19 | `0x5960c` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.6% |  18.0ms |      18 | `0x5fab8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  1.3% |  14.0ms |      14 | `0x5f7f8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.2% |  13.0ms |      13 | `0x59628` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.0% |  11.0ms |      11 | `0x5967c` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.0% |  11.0ms |      11 | `0x5f838` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  0.9% |  10.0ms |      10 | `0x59558` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |

# CPU profile

Took 1.14s over 1,144 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.6% | 1.14s |   1,139 |
| Kernel   |  0.4% | 5.0ms |       5 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 14.9% | 170.2ms |     170 | `0x5f848` | `zstd`   |
| 14.5% | 166.2ms |     166 | `0x5f800` | `zstd`   |
| 12.4% | 142.1ms |     142 | `0x5fab8` | `zstd`   |
| 11.3% | 129.1ms |     129 | `0x5fadc` | `zstd`   |
|  3.6% |  41.0ms |      41 | `0x594d8` | `zstd`   |
|  3.1% |  35.0ms |      35 | `0x5f838` | `zstd`   |
|  2.7% |  31.0ms |      31 | `0x59640` | `zstd`   |
|  2.6% |  30.0ms |      30 | `0x5fb10` | `zstd`   |
|  2.0% |  23.0ms |      23 | `0x5960c` | `zstd`   |
|  1.9% |  22.0ms |      22 | `0x596dc` | `zstd`   |
|  1.6% |  18.0ms |      18 | `0x596b8` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x5fae0` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x577d4` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x5f888` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x59628` | `zstd`   |
|  1.0% |  12.0ms |      12 | `0x591d0` | `zstd`   |
|  1.0% |  11.0ms |      11 | `0x5f7f8` | `zstd`   |
|  1.0% |  11.0ms |      11 | `0x5f854` | `zstd`   |
|  0.9% |  10.0ms |      10 | `0x595f0` | `zstd`   |
|  0.9% |  10.0ms |      10 | `0x596b4` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5f848` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 170.2ms |     170 | `0x59274` | `zstd`   |

##### `0x5f800` (`zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.4% | 165.2ms |     165 | `0x59274` | `zstd`   |
|  0.6% |   1.0ms |       1 | `0x58c78` | `zstd`   |

##### `0x5fab8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 142.1ms |     142 | `0x59274` | `zstd`   |

##### `0x5fadc` (`zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.2% | 128.1ms |     128 | `0x59274` | `zstd`   |
|  0.8% |   1.0ms |       1 | `0x58c78` | `zstd`   |

##### `0x594d8` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.6% | 40.0ms |      40 | `0x11090` | `zstd`   |
|  2.4% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x5f838` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 35.0ms |      35 | `0x59274` | `zstd`   |

##### `0x59640` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 31.0ms |      31 | `0x11090` | `zstd`   |

##### `0x5fb10` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 30.0ms |      30 | `0x59274` | `zstd`   |

##### `0x5960c` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 87.0% | 20.0ms |      20 | `0x11090` | `zstd`   |
| 13.0% |  3.0ms |       3 | `0x609c0` | `zstd`   |

##### `0x596dc` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 22.0ms |      22 | `0x11090` | `zstd`   |

##### `0x596b8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 18.0ms |      18 | `0x11090` | `zstd`   |

##### `0x5fae0` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x59274` | `zstd`   |

##### `0x577d4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x11090` | `zstd`   |

##### `0x5f888` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x59274` | `zstd`   |

##### `0x59628` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x11090` | `zstd`   |

##### `0x591d0` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x11090` | `zstd`   |

##### `0x5f7f8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x59274` | `zstd`   |

##### `0x5f854` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 90.9% | 10.0ms |      10 | `0x59274` | `zstd`   |
|  9.1% |  1.0ms |       1 | `0x58c78` | `zstd`   |

##### `0x595f0` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x11090` | `zstd`   |

##### `0x596b4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x11090` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.14s |   1,142 | `0x9cf0`  | `zstd`                                 |
| 99.8% |   1.14s |   1,142 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.14s |   1,142 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 98.4% |   1.12s |   1,126 | `0x11090` | `zstd`                                 |
| 98.4% |   1.12s |   1,126 | `0x16020` | `zstd`                                 |
| 82.6% | 945.9ms |     945 | `0x61404` | `zstd`                                 |
| 69.4% | 794.8ms |     794 | `0x59274` | `zstd`                                 |
| 16.9% | 193.2ms |     193 | `0x17768` | `zstd`                                 |
| 16.9% | 193.2ms |     193 | `0x616b8` | `zstd`                                 |
| 14.9% | 170.2ms |     170 | `0x5f848` | `zstd`                                 |
| 14.5% | 166.2ms |     166 | `0x5f800` | `zstd`                                 |
| 12.4% | 142.1ms |     142 | `0x5fab8` | `zstd`                                 |
| 11.3% | 129.1ms |     129 | `0x5fadc` | `zstd`                                 |
|  3.6% |  41.0ms |      41 | `0x594d8` | `zstd`                                 |
|  3.1% |  35.0ms |      35 | `0x5f838` | `zstd`                                 |
|  2.7% |  31.0ms |      31 | `0x59640` | `zstd`                                 |
|  2.6% |  30.0ms |      30 | `0x5fb10` | `zstd`                                 |
|  2.0% |  23.0ms |      23 | `0x5960c` | `zstd`                                 |
|  1.9% |  22.0ms |      22 | `0x596dc` | `zstd`                                 |
|  1.6% |  18.0ms |      18 | `0x596b8` | `zstd`                                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.14s |   1,142 | `0x9cf0`  | `zstd`   |
| 98.4% |   1.12s |   1,126 | `0x11090` | `zstd`   |
| 98.4% |   1.12s |   1,126 | `0x16020` | `zstd`   |
| 82.6% | 945.9ms |     945 | `0x61404` | `zstd`   |
| 69.4% | 794.8ms |     794 | `0x59274` | `zstd`   |
| 16.9% | 193.2ms |     193 | `0x17768` | `zstd`   |
| 16.9% | 193.2ms |     193 | `0x616b8` | `zstd`   |
| 14.9% | 170.2ms |     170 | `0x5f848` | `zstd`   |
| 14.5% | 166.2ms |     166 | `0x5f800` | `zstd`   |
| 12.4% | 142.1ms |     142 | `0x5fab8` | `zstd`   |
| 11.3% | 129.1ms |     129 | `0x5fadc` | `zstd`   |
|  3.6% |  41.0ms |      41 | `0x594d8` | `zstd`   |
|  3.1% |  35.0ms |      35 | `0x5f838` | `zstd`   |
|  2.7% |  31.0ms |      31 | `0x59640` | `zstd`   |
|  2.6% |  30.0ms |      30 | `0x5fb10` | `zstd`   |
|  2.0% |  23.0ms |      23 | `0x5960c` | `zstd`   |
|  1.9% |  22.0ms |      22 | `0x596dc` | `zstd`   |
|  1.6% |  18.0ms |      18 | `0x596b8` | `zstd`   |
|  1.4% |  16.0ms |      16 | `0x609c0` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x5fae0` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9cf0` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.7% | 945.9ms |     945 | `0x61404` | `zstd`   |
| 16.9% | 193.2ms |     193 | `0x616b8` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0xa17b0` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x614a0` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x61860` | `zstd`   |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.14s |   1,142 | `0x9cf0` | `zstd`   |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.14s |   1,142 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11090` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 69.5% | 783.8ms |     783 | `0x59274` | `zstd`   |
|  3.6% |  40.0ms |      40 | `0x594d8` | `zstd`   |
|  2.8% |  31.0ms |      31 | `0x59640` | `zstd`   |
|  2.0% |  22.0ms |      22 | `0x596dc` | `zstd`   |
|  1.8% |  20.0ms |      20 | `0x5960c` | `zstd`   |

##### `0x16020` (`zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.12s |   1,126 | `0x11090` | `zstd`   |

##### `0x61404` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 98.8% | 934.9ms |     934 | `0x16020` | `zstd`   |
|  0.8% |   8.0ms |       8 | `0x161a4` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x106a4` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x16364` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x16180` | `zstd`   |

##### `0x59274` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 21.4% | 170.2ms |     170 | `0x5f848` | `zstd`   |
| 20.8% | 165.2ms |     165 | `0x5f800` | `zstd`   |
| 17.9% | 142.1ms |     142 | `0x5fab8` | `zstd`   |
| 16.1% | 128.1ms |     128 | `0x5fadc` | `zstd`   |
|  4.4% |  35.0ms |      35 | `0x5f838` | `zstd`   |

##### `0x17768` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 192.2ms |     192 | `0x16020` | `zstd`   |
|  0.5% |   1.0ms |       1 | `0x16180` | `zstd`   |

##### `0x616b8` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 193.2ms |     193 | `0x17768` | `zstd`   |

##### `0x609c0` (`zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 68.8% | 11.0ms |      11 | `0x59274` | `zstd`   |
| 18.8% |  3.0ms |       3 | `0x5960c` | `zstd`   |
|  6.3% |  1.0ms |       1 | `0x57708` | `zstd`   |
|  6.3% |  1.0ms |       1 | `0x594d8` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9cf0` (`zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 12.1% | 138.1ms |     138 | `0x5f848` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 11.1% | 127.1ms |     127 | `0x5f800` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 10.2% | 117.1ms |     117 | `0x5fab8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  8.7% |  99.1ms |      99 | `0x5fadc` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  3.2% |  37.0ms |      37 | `0x594d8` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  3.2% |  37.0ms |      37 | `0x5f800` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.6% |  30.0ms |      30 | `0x5f838` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  2.5% |  29.0ms |      29 | `0x5fadc` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.5% |  29.0ms |      29 | `0x5f848` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.2% |  25.0ms |      25 | `0x59640` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  2.2% |  25.0ms |      25 | `0x5fab8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  1.7% |  19.0ms |      19 | `0x596dc` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.5% |  17.0ms |      17 | `0x5fb10` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.5% |  17.0ms |      17 | `0x5960c` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.3% |  15.0ms |      15 | `0x596b8` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.0% |  12.0ms |      12 | `0x577d4` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.0% |  12.0ms |      12 | `0x5f888` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.0% |  12.0ms |      12 | `0x59628` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.0% |  11.0ms |      11 | `0x5fae0` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.0% |  11.0ms |      11 | `0x5fb10` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |

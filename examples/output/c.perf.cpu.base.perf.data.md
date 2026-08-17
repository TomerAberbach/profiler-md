# CPU profile

Took 1.28s over 1,282 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.8% | 1.28s |   1,280 |
| Native   |  0.1% | 1.0ms |       1 |
| Kernel   |  0.1% | 1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 15.5% | 199.2ms |     199 | `0x5f800` | `zstd`   |
| 15.3% | 196.2ms |     196 | `0x5f848` | `zstd`   |
| 14.7% | 189.2ms |     189 | `0x5fab8` | `zstd`   |
|  9.8% | 126.1ms |     126 | `0x5fadc` | `zstd`   |
|  4.0% |  51.1ms |      51 | `0x5f838` | `zstd`   |
|  3.0% |  39.0ms |      39 | `0x59640` | `zstd`   |
|  2.8% |  36.0ms |      36 | `0x594d8` | `zstd`   |
|  2.3% |  29.0ms |      29 | `0x5fb10` | `zstd`   |
|  2.0% |  26.0ms |      26 | `0x596b8` | `zstd`   |
|  1.9% |  24.0ms |      24 | `0x5960c` | `zstd`   |
|  1.9% |  24.0ms |      24 | `0x596dc` | `zstd`   |
|  1.6% |  20.0ms |      20 | `0x5f888` | `zstd`   |
|  1.1% |  14.0ms |      14 | `0x5f7f8` | `zstd`   |
|  1.0% |  13.0ms |      13 | `0x59628` | `zstd`   |
|  0.9% |  12.0ms |      12 | `0x59558` | `zstd`   |
|  0.9% |  11.0ms |      11 | `0x5f820` | `zstd`   |
|  0.9% |  11.0ms |      11 | `0x5966c` | `zstd`   |
|  0.8% |  10.0ms |      10 | `0x577d4` | `zstd`   |
|  0.7% |   9.0ms |       9 | `0x595f0` | `zstd`   |
|  0.7% |   9.0ms |       9 | `0x5f86c` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5f800` (`zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 198.2ms |     198 | `0x59274` | `zstd`   |
|  0.5% |   1.0ms |       1 | `0x58c78` | `zstd`   |

##### `0x5f848` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 196.2ms |     196 | `0x59274` | `zstd`   |

##### `0x5fab8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 189.2ms |     189 | `0x59274` | `zstd`   |

##### `0x5fadc` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 126.1ms |     126 | `0x59274` | `zstd`   |

##### `0x5f838` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 51.1ms |      51 | `0x59274` | `zstd`   |

##### `0x59640` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 39.0ms |      39 | `0x11090` | `zstd`   |

##### `0x594d8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 36.0ms |      36 | `0x11090` | `zstd`   |

##### `0x5fb10` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 29.0ms |      29 | `0x59274` | `zstd`   |

##### `0x596b8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 26.0ms |      26 | `0x11090` | `zstd`   |

##### `0x5960c` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.8% | 23.0ms |      23 | `0x11090` | `zstd`   |
|  4.2% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x596dc` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 24.0ms |      24 | `0x11090` | `zstd`   |

##### `0x5f888` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 20.0ms |      20 | `0x59274` | `zstd`   |

##### `0x5f7f8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x59274` | `zstd`   |

##### `0x59628` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 92.3% | 12.0ms |      12 | `0x11090` | `zstd`   |
|  7.7% |  1.0ms |       1 | `0x609c0` | `zstd`   |

##### `0x59558` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x11090` | `zstd`   |

##### `0x5f820` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x59274` | `zstd`   |

##### `0x5966c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x11090` | `zstd`   |

##### `0x577d4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x11090` | `zstd`   |

##### `0x595f0` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x11090` | `zstd`   |

##### `0x5f86c` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x59274` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.9% |   1.28s |   1,281 | `0x9cf0`  | `zstd`                                 |
| 99.9% |   1.28s |   1,281 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.9% |   1.28s |   1,281 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.2% |   1.27s |   1,272 | `0x11090` | `zstd`                                 |
| 99.2% |   1.27s |   1,272 | `0x16020` | `zstd`                                 |
| 79.6% |   1.02s |   1,021 | `0x61404` | `zstd`                                 |
| 73.6% | 943.9ms |     943 | `0x59274` | `zstd`                                 |
| 20.2% | 259.3ms |     259 | `0x17768` | `zstd`                                 |
| 20.2% | 259.3ms |     259 | `0x616b8` | `zstd`                                 |
| 15.5% | 199.2ms |     199 | `0x5f800` | `zstd`                                 |
| 15.3% | 196.2ms |     196 | `0x5f848` | `zstd`                                 |
| 14.7% | 189.2ms |     189 | `0x5fab8` | `zstd`                                 |
|  9.8% | 126.1ms |     126 | `0x5fadc` | `zstd`                                 |
|  4.0% |  51.1ms |      51 | `0x5f838` | `zstd`                                 |
|  3.0% |  39.0ms |      39 | `0x59640` | `zstd`                                 |
|  2.8% |  36.0ms |      36 | `0x594d8` | `zstd`                                 |
|  2.3% |  29.0ms |      29 | `0x5fb10` | `zstd`                                 |
|  2.0% |  26.0ms |      26 | `0x596b8` | `zstd`                                 |
|  1.9% |  24.0ms |      24 | `0x5960c` | `zstd`                                 |
|  1.9% |  24.0ms |      24 | `0x596dc` | `zstd`                                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.9% |   1.28s |   1,281 | `0x9cf0`  | `zstd`   |
| 99.2% |   1.27s |   1,272 | `0x11090` | `zstd`   |
| 99.2% |   1.27s |   1,272 | `0x16020` | `zstd`   |
| 79.6% |   1.02s |   1,021 | `0x61404` | `zstd`   |
| 73.6% | 943.9ms |     943 | `0x59274` | `zstd`   |
| 20.2% | 259.3ms |     259 | `0x17768` | `zstd`   |
| 20.2% | 259.3ms |     259 | `0x616b8` | `zstd`   |
| 15.5% | 199.2ms |     199 | `0x5f800` | `zstd`   |
| 15.3% | 196.2ms |     196 | `0x5f848` | `zstd`   |
| 14.7% | 189.2ms |     189 | `0x5fab8` | `zstd`   |
|  9.8% | 126.1ms |     126 | `0x5fadc` | `zstd`   |
|  4.0% |  51.1ms |      51 | `0x5f838` | `zstd`   |
|  3.0% |  39.0ms |      39 | `0x59640` | `zstd`   |
|  2.8% |  36.0ms |      36 | `0x594d8` | `zstd`   |
|  2.3% |  29.0ms |      29 | `0x5fb10` | `zstd`   |
|  2.0% |  26.0ms |      26 | `0x596b8` | `zstd`   |
|  1.9% |  24.0ms |      24 | `0x5960c` | `zstd`   |
|  1.9% |  24.0ms |      24 | `0x596dc` | `zstd`   |
|  1.6% |  20.0ms |      20 | `0x5f888` | `zstd`   |
|  1.3% |  17.0ms |      17 | `0x609c0` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9cf0` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 79.7% |   1.02s |   1,021 | `0x61404` | `zstd`   |
| 20.2% | 259.3ms |     259 | `0x616b8` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x614a0` | `zstd`   |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.28s |   1,281 | `0x9cf0` | `zstd`   |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.28s |   1,281 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11090` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 73.2% | 931.9ms |     931 | `0x59274` | `zstd`   |
|  3.1% |  39.0ms |      39 | `0x59640` | `zstd`   |
|  2.8% |  36.0ms |      36 | `0x594d8` | `zstd`   |
|  2.0% |  26.0ms |      26 | `0x596b8` | `zstd`   |
|  1.9% |  24.0ms |      24 | `0x596dc` | `zstd`   |

##### `0x16020` (`zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.27s |   1,272 | `0x11090` | `zstd`   |

##### `0x61404` (`zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.2% | 1.01s |   1,013 | `0x16020` | `zstd`   |
|  0.7% | 7.0ms |       7 | `0x161a4` | `zstd`   |
|  0.1% | 1.0ms |       1 | `0x16180` | `zstd`   |

##### `0x59274` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 21.0% | 198.2ms |     198 | `0x5f800` | `zstd`   |
| 20.8% | 196.2ms |     196 | `0x5f848` | `zstd`   |
| 20.0% | 189.2ms |     189 | `0x5fab8` | `zstd`   |
| 13.4% | 126.1ms |     126 | `0x5fadc` | `zstd`   |
|  5.4% |  51.1ms |      51 | `0x5f838` | `zstd`   |

##### `0x17768` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 259.3ms |     259 | `0x16020` | `zstd`   |

##### `0x616b8` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 259.3ms |     259 | `0x17768` | `zstd`   |

##### `0x609c0` (`zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 70.6% | 12.0ms |      12 | `0x59274` | `zstd`   |
|  5.9% |  1.0ms |       1 | `0x59628` | `zstd`   |
|  5.9% |  1.0ms |       1 | `0x577cc` | `zstd`   |
|  5.9% |  1.0ms |       1 | `0x59178` | `zstd`   |
|  5.9% |  1.0ms |       1 | `0x592a4` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9cf0` (`zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 11.5% | 148.1ms |     148 | `0x5f800` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 11.4% | 146.1ms |     146 | `0x5f848` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 10.9% | 140.1ms |     140 | `0x5fab8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  7.7% |  99.1ms |      99 | `0x5fadc` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  3.8% |  49.0ms |      49 | `0x5f848` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  3.7% |  48.0ms |      48 | `0x5f800` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  3.7% |  47.0ms |      47 | `0x5fab8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.8% |  36.0ms |      36 | `0x5f838` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  2.5% |  32.0ms |      32 | `0x594d8` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  2.1% |  27.0ms |      27 | `0x59640` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  2.0% |  26.0ms |      26 | `0x5fadc` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.0% |  25.0ms |      25 | `0x5fb10` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.8% |  23.0ms |      23 | `0x596b8` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.6% |  21.0ms |      21 | `0x596dc` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.4% |  18.0ms |      18 | `0x5960c` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.2% |  15.0ms |      15 | `0x5f888` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.1% |  14.0ms |      14 | `0x5f838` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  1.0% |  13.0ms |      13 | `0x5f7f8` (`zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  0.9% |  12.0ms |      12 | `0x59628` (`zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  0.9% |  12.0ms |      12 | `0x59640` (`zstd`) ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8`             |

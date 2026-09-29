# CPU profile

Took 1.88s over 1,887 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.8% | 1.88s |   1,883 |
| Native   |  0.2% | 3.0ms |       3 |
| Kernel   |  0.1% | 1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 15.7% | 296.3ms |     296 | `0x5f800` | `zstd`   |
| 15.7% | 296.3ms |     296 | `0x5f848` | `zstd`   |
| 15.5% | 292.3ms |     292 | `0x5fab8` | `zstd`   |
| 13.2% | 249.2ms |     249 | `0x5fadc` | `zstd`   |
|  5.2% |  99.1ms |      99 | `0x5f838` | `zstd`   |
|  2.8% |  52.1ms |      52 | `0x5fb10` | `zstd`   |
|  2.3% |  43.0ms |      43 | `0x594d8` | `zstd`   |
|  2.2% |  42.0ms |      42 | `0x59640` | `zstd`   |
|  1.7% |  33.0ms |      33 | `0x596dc` | `zstd`   |
|  1.7% |  32.0ms |      32 | `0x5f86c` | `zstd`   |
|  1.3% |  25.0ms |      25 | `0x5960c` | `zstd`   |
|  1.1% |  20.0ms |      20 | `0x596b8` | `zstd`   |
|  1.0% |  18.0ms |      18 | `0x5f7e0` | `zstd`   |
|  0.8% |  15.0ms |      15 | `0x591d0` | `zstd`   |
|  0.8% |  15.0ms |      15 | `0x5f888` | `zstd`   |
|  0.7% |  13.0ms |      13 | `0x577d4` | `zstd`   |
|  0.7% |  13.0ms |      13 | `0x596f4` | `zstd`   |
|  0.7% |  13.0ms |      13 | `0x5f854` | `zstd`   |
|  0.7% |  13.0ms |      13 | `0x5fb08` | `zstd`   |
|  0.6% |  11.0ms |      11 | `0x5f820` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5f800` (`zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.7% | 295.3ms |     295 | `0x59272` | `zstd`   |
|  0.3% |   1.0ms |       1 | `0x58c76` | `zstd`   |

##### `0x5f848` (`zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.7% | 295.3ms |     295 | `0x59272` | `zstd`   |
|  0.3% |   1.0ms |       1 | `0x58c76` | `zstd`   |

##### `0x5fab8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 292.3ms |     292 | `0x59272` | `zstd`   |

##### `0x5fadc` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 249.2ms |     249 | `0x59272` | `zstd`   |

##### `0x5f838` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 99.1ms |      99 | `0x59272` | `zstd`   |

##### `0x5fb10` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 52.1ms |      52 | `0x59272` | `zstd`   |

##### `0x594d8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 43.0ms |      43 | `0x1108e` | `zstd`   |

##### `0x59640` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 42.0ms |      42 | `0x1108e` | `zstd`   |

##### `0x596dc` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 33.0ms |      33 | `0x1108e` | `zstd`   |

##### `0x5f86c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 32.0ms |      32 | `0x59272` | `zstd`   |

##### `0x5960c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 25.0ms |      25 | `0x1108e` | `zstd`   |

##### `0x596b8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 20.0ms |      20 | `0x1108e` | `zstd`   |

##### `0x5f7e0` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 18.0ms |      18 | `0x59272` | `zstd`   |

##### `0x591d0` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 93.3% | 14.0ms |      14 | `0x1108e` | `zstd`   |
|  6.7% |  1.0ms |       1 | `0x609be` | `zstd`   |

##### `0x5f888` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x59272` | `zstd`   |

##### `0x577d4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x1108e` | `zstd`   |

##### `0x596f4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x1108e` | `zstd`   |

##### `0x5f854` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x59272` | `zstd`   |

##### `0x5fb08` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x59272` | `zstd`   |

##### `0x5f820` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x59272` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.88s |   1,884 | `0x9cee`  | `zstd`                                 |
| 99.8% |   1.88s |   1,884 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.88s |   1,884 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 98.9% |   1.86s |   1,866 | `0x1601e` | `zstd`                                 |
| 98.8% |   1.86s |   1,865 | `0x1108e` | `zstd`                                 |
| 83.5% |   1.57s |   1,576 | `0x61402` | `zstd`                                 |
| 79.0% |   1.49s |   1,491 | `0x59272` | `zstd`                                 |
| 16.2% | 306.3ms |     306 | `0x17766` | `zstd`                                 |
| 16.2% | 306.3ms |     306 | `0x616b6` | `zstd`                                 |
| 15.7% | 296.3ms |     296 | `0x5f800` | `zstd`                                 |
| 15.7% | 296.3ms |     296 | `0x5f848` | `zstd`                                 |
| 15.5% | 292.3ms |     292 | `0x5fab8` | `zstd`                                 |
| 13.2% | 249.2ms |     249 | `0x5fadc` | `zstd`                                 |
|  5.2% |  99.1ms |      99 | `0x5f838` | `zstd`                                 |
|  2.8% |  52.1ms |      52 | `0x5fb10` | `zstd`                                 |
|  2.3% |  43.0ms |      43 | `0x594d8` | `zstd`                                 |
|  2.2% |  42.0ms |      42 | `0x59640` | `zstd`                                 |
|  1.7% |  33.0ms |      33 | `0x596dc` | `zstd`                                 |
|  1.7% |  32.0ms |      32 | `0x5f86c` | `zstd`                                 |
|  1.3% |  25.0ms |      25 | `0x5960c` | `zstd`                                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.88s |   1,884 | `0x9cee`  | `zstd`   |
| 98.9% |   1.86s |   1,866 | `0x1601e` | `zstd`   |
| 98.8% |   1.86s |   1,865 | `0x1108e` | `zstd`   |
| 83.5% |   1.57s |   1,576 | `0x61402` | `zstd`   |
| 79.0% |   1.49s |   1,491 | `0x59272` | `zstd`   |
| 16.2% | 306.3ms |     306 | `0x17766` | `zstd`   |
| 16.2% | 306.3ms |     306 | `0x616b6` | `zstd`   |
| 15.7% | 296.3ms |     296 | `0x5f800` | `zstd`   |
| 15.7% | 296.3ms |     296 | `0x5f848` | `zstd`   |
| 15.5% | 292.3ms |     292 | `0x5fab8` | `zstd`   |
| 13.2% | 249.2ms |     249 | `0x5fadc` | `zstd`   |
|  5.2% |  99.1ms |      99 | `0x5f838` | `zstd`   |
|  2.8% |  52.1ms |      52 | `0x5fb10` | `zstd`   |
|  2.3% |  43.0ms |      43 | `0x594d8` | `zstd`   |
|  2.2% |  42.0ms |      42 | `0x59640` | `zstd`   |
|  1.7% |  33.0ms |      33 | `0x596dc` | `zstd`   |
|  1.7% |  32.0ms |      32 | `0x5f86c` | `zstd`   |
|  1.3% |  25.0ms |      25 | `0x5960c` | `zstd`   |
|  1.1% |  20.0ms |      20 | `0x596b8` | `zstd`   |
|  1.0% |  19.0ms |      19 | `0x609be` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9cee` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 83.7% |   1.57s |   1,576 | `0x61402` | `zstd`   |
| 16.2% | 306.3ms |     306 | `0x616b6` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x6149e` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x6185e` | `zstd`   |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.88s |   1,884 | `0x9cee` | `zstd`   |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.88s |   1,884 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1601e` (`zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.9% | 1.86s |   1,865 | `0x1108e` | `zstd`   |
|  0.1% | 1.0ms |       1 | `0x60920` | `zstd`   |

##### `0x1108e` (`zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 79.4% |  1.48s |   1,480 | `0x59272` | `zstd`   |
|  2.3% | 43.0ms |      43 | `0x594d8` | `zstd`   |
|  2.3% | 42.0ms |      42 | `0x59640` | `zstd`   |
|  1.8% | 33.0ms |      33 | `0x596dc` | `zstd`   |
|  1.3% | 25.0ms |      25 | `0x5960c` | `zstd`   |

##### `0x61402` (`zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.0% | 1.56s |   1,561 | `0x1601e` | `zstd`   |
|  0.4% | 7.0ms |       7 | `0x1617e` | `zstd`   |
|  0.4% | 6.0ms |       6 | `0x161a2` | `zstd`   |
|  0.1% | 1.0ms |       1 | `0x16362` | `zstd`   |
|  0.1% | 1.0ms |       1 | `0x15c8a` | `zstd`   |

##### `0x59272` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 19.8% | 295.3ms |     295 | `0x5f800` | `zstd`   |
| 19.8% | 295.3ms |     295 | `0x5f848` | `zstd`   |
| 19.6% | 292.3ms |     292 | `0x5fab8` | `zstd`   |
| 16.7% | 249.2ms |     249 | `0x5fadc` | `zstd`   |
|  6.6% |  99.1ms |      99 | `0x5f838` | `zstd`   |

##### `0x17766` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.7% | 305.3ms |     305 | `0x1601e` | `zstd`   |
|  0.3% |   1.0ms |       1 | `0x161a2` | `zstd`   |

##### `0x616b6` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 306.3ms |     306 | `0x17766` | `zstd`   |

##### `0x609be` (`zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 57.9% | 11.0ms |      11 | `0x59272` | `zstd`   |
| 10.5% |  2.0ms |       2 | `0x57758` | `zstd`   |
|  5.3% |  1.0ms |       1 | `0x577cc` | `zstd`   |
|  5.3% |  1.0ms |       1 | `0x594b8` | `zstd`   |
|  5.3% |  1.0ms |       1 | `0x58c76` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9cee` (`zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 13.1% | 247.2ms |     247 | `0x5f848` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 13.1% | 247.2ms |     247 | `0x5f800` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 12.9% | 244.2ms |     244 | `0x5fab8` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 10.9% | 206.2ms |     206 | `0x5fadc` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  4.4% |  83.1ms |      83 | `0x5f838` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  2.5% |  48.0ms |      48 | `0x5fab8` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.5% |  47.0ms |      47 | `0x5f848` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.4% |  46.0ms |      46 | `0x5f800` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.2% |  42.0ms |      42 | `0x5fadc` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.2% |  41.0ms |      41 | `0x5fb10` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  2.1% |  39.0ms |      39 | `0x59640` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  2.0% |  38.0ms |      38 | `0x594d8` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.4% |  27.0ms |      27 | `0x596dc` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.2% |  23.0ms |      23 | `0x5f86c` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  1.0% |  19.0ms |      19 | `0x5960c` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.0% |  18.0ms |      18 | `0x596b8` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  0.8% |  16.0ms |      16 | `0x5f838` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  0.6% |  12.0ms |      12 | `0x591d0` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  0.6% |  11.0ms |      11 | `0x5f888` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  0.6% |  11.0ms |      11 | `0x596f4` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |

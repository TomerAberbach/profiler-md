# CPU profile

Took 1.21s over 1,218 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.8% | 1.21s |   1,215 |
| Native   |  0.2% | 2.0ms |       2 |
| Kernel   |  0.1% | 1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 15.8% | 193.2ms |     193 | `0x5f800` | `zstd`   |
| 15.4% | 187.2ms |     187 | `0x5f848` | `zstd`   |
| 13.6% | 166.2ms |     166 | `0x5fab8` | `zstd`   |
| 13.1% | 159.2ms |     159 | `0x5fadc` | `zstd`   |
|  3.3% |  40.0ms |      40 | `0x5fb10` | `zstd`   |
|  2.9% |  35.0ms |      35 | `0x594d8` | `zstd`   |
|  2.9% |  35.0ms |      35 | `0x5f838` | `zstd`   |
|  2.6% |  32.0ms |      32 | `0x596dc` | `zstd`   |
|  2.2% |  27.0ms |      27 | `0x59640` | `zstd`   |
|  2.0% |  24.0ms |      24 | `0x5960c` | `zstd`   |
|  1.6% |  19.0ms |      19 | `0x596b8` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x5f854` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x5f888` | `zstd`   |
|  1.0% |  12.0ms |      12 | `0x5f86c` | `zstd`   |
|  0.9% |  11.0ms |      11 | `0x59628` | `zstd`   |
|  0.8% |  10.0ms |      10 | `0x59558` | `zstd`   |
|  0.8% |  10.0ms |      10 | `0x5966c` | `zstd`   |
|  0.7% |   9.0ms |       9 | `0x5fae0` | `zstd`   |
|  0.7% |   8.0ms |       8 | `0x5f83c` | `zstd`   |
|  0.6% |   7.0ms |       7 | `0x5f7f8` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5f800` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 193.2ms |     193 | `0x59272` | `zstd`   |

##### `0x5f848` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 187.2ms |     187 | `0x59272` | `zstd`   |

##### `0x5fab8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 166.2ms |     166 | `0x59272` | `zstd`   |

##### `0x5fadc` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 159.2ms |     159 | `0x59272` | `zstd`   |

##### `0x5fb10` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 40.0ms |      40 | `0x59272` | `zstd`   |

##### `0x594d8` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 91.4% | 32.0ms |      32 | `0x1108e` | `zstd`   |
|  8.6% |  3.0ms |       3 | `0x609be` | `zstd`   |

##### `0x5f838` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 35.0ms |      35 | `0x59272` | `zstd`   |

##### `0x596dc` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 32.0ms |      32 | `0x1108e` | `zstd`   |

##### `0x59640` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 27.0ms |      27 | `0x1108e` | `zstd`   |

##### `0x5960c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 24.0ms |      24 | `0x1108e` | `zstd`   |

##### `0x596b8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 19.0ms |      19 | `0x1108e` | `zstd`   |

##### `0x5f854` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x59272` | `zstd`   |

##### `0x5f888` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x59272` | `zstd`   |

##### `0x5f86c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x59272` | `zstd`   |

##### `0x59628` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x1108e` | `zstd`   |

##### `0x59558` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x1108e` | `zstd`   |

##### `0x5966c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x1108e` | `zstd`   |

##### `0x5fae0` (`zstd`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 88.9% | 8.0ms |       8 | `0x59272` | `zstd`   |
| 11.1% | 1.0ms |       1 | `0x58c76` | `zstd`   |

##### `0x5f83c` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 8.0ms |       8 | `0x59272` | `zstd`   |

##### `0x5f7f8` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 7.0ms |       7 | `0x59272` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.21s |   1,216 | `0x9cee`  | `zstd`                                 |
| 99.8% |   1.21s |   1,216 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.21s |   1,216 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.2% |   1.20s |   1,208 | `0x1108e` | `zstd`                                 |
| 99.2% |   1.20s |   1,208 | `0x1601e` | `zstd`                                 |
| 82.3% |      1s |   1,002 | `0x61402` | `zstd`                                 |
| 74.8% | 911.9ms |     911 | `0x59272` | `zstd`                                 |
| 17.5% | 213.2ms |     213 | `0x17766` | `zstd`                                 |
| 17.5% | 213.2ms |     213 | `0x616b6` | `zstd`                                 |
| 15.8% | 193.2ms |     193 | `0x5f800` | `zstd`                                 |
| 15.4% | 187.2ms |     187 | `0x5f848` | `zstd`                                 |
| 13.6% | 166.2ms |     166 | `0x5fab8` | `zstd`                                 |
| 13.1% | 159.2ms |     159 | `0x5fadc` | `zstd`                                 |
|  3.3% |  40.0ms |      40 | `0x5fb10` | `zstd`                                 |
|  2.9% |  35.0ms |      35 | `0x594d8` | `zstd`                                 |
|  2.9% |  35.0ms |      35 | `0x5f838` | `zstd`                                 |
|  2.6% |  32.0ms |      32 | `0x596dc` | `zstd`                                 |
|  2.2% |  27.0ms |      27 | `0x59640` | `zstd`                                 |
|  2.0% |  24.0ms |      24 | `0x5960c` | `zstd`                                 |
|  1.6% |  19.0ms |      19 | `0x596b8` | `zstd`                                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.21s |   1,216 | `0x9cee`  | `zstd`   |
| 99.2% |   1.20s |   1,208 | `0x1108e` | `zstd`   |
| 99.2% |   1.20s |   1,208 | `0x1601e` | `zstd`   |
| 82.3% |      1s |   1,002 | `0x61402` | `zstd`   |
| 74.8% | 911.9ms |     911 | `0x59272` | `zstd`   |
| 17.5% | 213.2ms |     213 | `0x17766` | `zstd`   |
| 17.5% | 213.2ms |     213 | `0x616b6` | `zstd`   |
| 15.8% | 193.2ms |     193 | `0x5f800` | `zstd`   |
| 15.4% | 187.2ms |     187 | `0x5f848` | `zstd`   |
| 13.6% | 166.2ms |     166 | `0x5fab8` | `zstd`   |
| 13.1% | 159.2ms |     159 | `0x5fadc` | `zstd`   |
|  3.3% |  40.0ms |      40 | `0x5fb10` | `zstd`   |
|  2.9% |  35.0ms |      35 | `0x594d8` | `zstd`   |
|  2.9% |  35.0ms |      35 | `0x5f838` | `zstd`   |
|  2.6% |  32.0ms |      32 | `0x596dc` | `zstd`   |
|  2.2% |  27.0ms |      27 | `0x59640` | `zstd`   |
|  2.0% |  24.0ms |      24 | `0x5960c` | `zstd`   |
|  1.6% |  19.0ms |      19 | `0x596b8` | `zstd`   |
|  1.3% |  16.0ms |      16 | `0x609be` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x5f854` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9cee` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.4% |      1s |   1,002 | `0x61402` | `zstd`   |
| 17.5% | 213.2ms |     213 | `0x616b6` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x6149e` | `zstd`   |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.21s |   1,216 | `0x9cee` | `zstd`   |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.21s |   1,216 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1108e` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 74.7% | 902.9ms |     902 | `0x59272` | `zstd`   |
|  2.6% |  32.0ms |      32 | `0x594d8` | `zstd`   |
|  2.6% |  32.0ms |      32 | `0x596dc` | `zstd`   |
|  2.2% |  27.0ms |      27 | `0x59640` | `zstd`   |
|  2.0% |  24.0ms |      24 | `0x5960c` | `zstd`   |

##### `0x1601e` (`zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.20s |   1,208 | `0x1108e` | `zstd`   |

##### `0x61402` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.6% | 999.0ms |     998 | `0x1601e` | `zstd`   |
|  0.2% |   2.0ms |       2 | `0x161a2` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x16362` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x1617e` | `zstd`   |

##### `0x59272` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 21.2% | 193.2ms |     193 | `0x5f800` | `zstd`   |
| 20.5% | 187.2ms |     187 | `0x5f848` | `zstd`   |
| 18.2% | 166.2ms |     166 | `0x5fab8` | `zstd`   |
| 17.5% | 159.2ms |     159 | `0x5fadc` | `zstd`   |
|  4.4% |  40.0ms |      40 | `0x5fb10` | `zstd`   |

##### `0x17766` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 98.6% | 210.2ms |     210 | `0x1601e` | `zstd`   |
|  1.4% |   3.0ms |       3 | `0x161a2` | `zstd`   |

##### `0x616b6` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 213.2ms |     213 | `0x17766` | `zstd`   |

##### `0x609be` (`zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 56.3% | 9.0ms |       9 | `0x59272` | `zstd`   |
| 18.8% | 3.0ms |       3 | `0x594d8` | `zstd`   |
| 12.5% | 2.0ms |       2 | `0x58c76` | `zstd`   |
|  6.3% | 1.0ms |       1 | `0x57788` | `zstd`   |
|  6.3% | 1.0ms |       1 | `0x5928c` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9cee` (`zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 13.3% | 162.2ms |     162 | `0x5f800` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 12.3% | 150.2ms |     150 | `0x5f848` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 11.2% | 137.1ms |     137 | `0x5fab8` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  9.8% | 119.1ms |     119 | `0x5fadc` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  3.0% |  37.0ms |      37 | `0x5fadc` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.7% |  33.0ms |      33 | `0x5f848` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.5% |  31.0ms |      31 | `0x5f800` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.5% |  30.0ms |      30 | `0x5fb10` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  2.5% |  30.0ms |      30 | `0x596dc` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  2.3% |  28.0ms |      28 | `0x5fab8` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.1% |  26.0ms |      26 | `0x5f838` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  2.1% |  26.0ms |      26 | `0x594d8` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  2.0% |  24.0ms |      24 | `0x59640` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.5% |  18.0ms |      18 | `0x596b8` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.3% |  16.0ms |      16 | `0x5960c` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.1% |  13.0ms |      13 | `0x5f854` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  0.9% |  11.0ms |      11 | `0x5f888` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  0.8% |  10.0ms |      10 | `0x5fb10` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  0.7% |   9.0ms |       9 | `0x59558` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  0.7% |   9.0ms |       9 | `0x5f838` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |

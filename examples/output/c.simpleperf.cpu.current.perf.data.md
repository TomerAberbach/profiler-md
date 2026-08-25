# CPU profile

Took 1.14s over 1,144 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.5% | 1.13s |   1,138 |
| Kernel   |  0.4% | 5.0ms |       5 |
| Native   |  0.1% | 1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 15.8% | 181.2ms |     181 | `0x5fab8` | `zstd`   |
| 14.4% | 165.2ms |     165 | `0x5f800` | `zstd`   |
| 13.1% | 150.2ms |     150 | `0x5f848` | `zstd`   |
|  9.9% | 113.1ms |     113 | `0x5fadc` | `zstd`   |
|  3.4% |  39.0ms |      39 | `0x5fb10` | `zstd`   |
|  3.3% |  38.0ms |      38 | `0x5f838` | `zstd`   |
|  3.2% |  37.0ms |      37 | `0x59640` | `zstd`   |
|  2.4% |  28.0ms |      28 | `0x596dc` | `zstd`   |
|  2.4% |  27.0ms |      27 | `0x594d8` | `zstd`   |
|  2.3% |  26.0ms |      26 | `0x596b8` | `zstd`   |
|  2.0% |  23.0ms |      23 | `0x5960c` | `zstd`   |
|  1.6% |  18.0ms |      18 | `0x5f86c` | `zstd`   |
|  1.1% |  13.0ms |      13 | `0x59558` | `zstd`   |
|  1.0% |  12.0ms |      12 | `0x577d4` | `zstd`   |
|  1.0% |  12.0ms |      12 | `0x5f888` | `zstd`   |
|  1.0% |  11.0ms |      11 | `0x5fae0` | `zstd`   |
|  0.9% |  10.0ms |      10 | `0x5fac4` | `zstd`   |
|  0.8% |   9.0ms |       9 | `0x596f4` | `zstd`   |
|  0.8% |   9.0ms |       9 | `0x5f820` | `zstd`   |
|  0.8% |   9.0ms |       9 | `0x5f7f8` | `zstd`   |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5fab8` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 181.2ms |     181 | `0x59272` | `zstd`   |

##### `0x5f800` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 165.2ms |     165 | `0x59272` | `zstd`   |

##### `0x5f848` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 150.2ms |     150 | `0x59272` | `zstd`   |

##### `0x5fadc` (`zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 113.1ms |     113 | `0x59272` | `zstd`   |

##### `0x5fb10` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 39.0ms |      39 | `0x59272` | `zstd`   |

##### `0x5f838` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 38.0ms |      38 | `0x59272` | `zstd`   |

##### `0x59640` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 91.9% | 34.0ms |      34 | `0x1108e` | `zstd`   |
|  8.1% |  3.0ms |       3 | `0x609be` | `zstd`   |

##### `0x596dc` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 96.4% | 27.0ms |      27 | `0x1108e` | `zstd`   |
|  3.6% |  1.0ms |       1 | `0x609be` | `zstd`   |

##### `0x594d8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 27.0ms |      27 | `0x1108e` | `zstd`   |

##### `0x596b8` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 26.0ms |      26 | `0x1108e` | `zstd`   |

##### `0x5960c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 23.0ms |      23 | `0x1108e` | `zstd`   |

##### `0x5f86c` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 18.0ms |      18 | `0x59272` | `zstd`   |

##### `0x59558` (`zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 92.3% | 12.0ms |      12 | `0x1108e` | `zstd`   |
|  7.7% |  1.0ms |       1 | `0x609be` | `zstd`   |

##### `0x577d4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x1108e` | `zstd`   |

##### `0x5f888` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x59272` | `zstd`   |

##### `0x5fae0` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x59272` | `zstd`   |

##### `0x5fac4` (`zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x59272` | `zstd`   |

##### `0x596f4` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x1108e` | `zstd`   |

##### `0x5f820` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x59272` | `zstd`   |

##### `0x5f7f8` (`zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x59272` | `zstd`   |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.14s |   1,142 | `0x9cee`  | `zstd`                                 |
| 99.8% |   1.14s |   1,142 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.14s |   1,142 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 98.6% |   1.12s |   1,128 | `0x1108e` | `zstd`                                 |
| 98.6% |   1.12s |   1,128 | `0x1601e` | `zstd`                                 |
| 81.9% | 937.9ms |     937 | `0x61402` | `zstd`                                 |
| 72.0% | 824.8ms |     824 | `0x59272` | `zstd`                                 |
| 17.5% | 200.2ms |     200 | `0x17766` | `zstd`                                 |
| 17.5% | 200.2ms |     200 | `0x616b6` | `zstd`                                 |
| 15.8% | 181.2ms |     181 | `0x5fab8` | `zstd`                                 |
| 14.4% | 165.2ms |     165 | `0x5f800` | `zstd`                                 |
| 13.1% | 150.2ms |     150 | `0x5f848` | `zstd`                                 |
|  9.9% | 113.1ms |     113 | `0x5fadc` | `zstd`                                 |
|  3.4% |  39.0ms |      39 | `0x5fb10` | `zstd`                                 |
|  3.3% |  38.0ms |      38 | `0x5f838` | `zstd`                                 |
|  3.2% |  37.0ms |      37 | `0x59640` | `zstd`                                 |
|  2.4% |  28.0ms |      28 | `0x596dc` | `zstd`                                 |
|  2.4% |  27.0ms |      27 | `0x594d8` | `zstd`                                 |
|  2.3% |  26.0ms |      26 | `0x596b8` | `zstd`                                 |
|  2.0% |  23.0ms |      23 | `0x5960c` | `zstd`                                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.14s |   1,142 | `0x9cee`  | `zstd`   |
| 98.6% |   1.12s |   1,128 | `0x1108e` | `zstd`   |
| 98.6% |   1.12s |   1,128 | `0x1601e` | `zstd`   |
| 81.9% | 937.9ms |     937 | `0x61402` | `zstd`   |
| 72.0% | 824.8ms |     824 | `0x59272` | `zstd`   |
| 17.5% | 200.2ms |     200 | `0x17766` | `zstd`   |
| 17.5% | 200.2ms |     200 | `0x616b6` | `zstd`   |
| 15.8% | 181.2ms |     181 | `0x5fab8` | `zstd`   |
| 14.4% | 165.2ms |     165 | `0x5f800` | `zstd`   |
| 13.1% | 150.2ms |     150 | `0x5f848` | `zstd`   |
|  9.9% | 113.1ms |     113 | `0x5fadc` | `zstd`   |
|  3.4% |  39.0ms |      39 | `0x5fb10` | `zstd`   |
|  3.3% |  38.0ms |      38 | `0x5f838` | `zstd`   |
|  3.2% |  37.0ms |      37 | `0x59640` | `zstd`   |
|  2.4% |  28.0ms |      28 | `0x596dc` | `zstd`   |
|  2.4% |  27.0ms |      27 | `0x594d8` | `zstd`   |
|  2.3% |  26.0ms |      26 | `0x596b8` | `zstd`   |
|  2.0% |  23.0ms |      23 | `0x5960c` | `zstd`   |
|  1.6% |  18.0ms |      18 | `0x5f86c` | `zstd`   |
|  1.5% |  17.0ms |      17 | `0x609be` | `zstd`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9cee` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.0% | 937.9ms |     937 | `0x61402` | `zstd`   |
| 17.5% | 200.2ms |     200 | `0x616b6` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0xa17ae` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x6149e` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x6185e` | `zstd`   |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.14s |   1,142 | `0x9cee` | `zstd`   |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.14s |   1,142 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1108e` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.0% | 812.8ms |     812 | `0x59272` | `zstd`   |
|  3.0% |  34.0ms |      34 | `0x59640` | `zstd`   |
|  2.4% |  27.0ms |      27 | `0x594d8` | `zstd`   |
|  2.4% |  27.0ms |      27 | `0x596dc` | `zstd`   |
|  2.3% |  26.0ms |      26 | `0x596b8` | `zstd`   |

##### `0x1601e` (`zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.12s |   1,128 | `0x1108e` | `zstd`   |

##### `0x61402` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.1% | 929.9ms |     929 | `0x1601e` | `zstd`   |
|  0.6% |   6.0ms |       6 | `0x161a2` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x15c8a` | `zstd`   |
|  0.1% |   1.0ms |       1 | `0x1617e` | `zstd`   |

##### `0x59272` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 22.0% | 181.2ms |     181 | `0x5fab8` | `zstd`   |
| 20.0% | 165.2ms |     165 | `0x5f800` | `zstd`   |
| 18.2% | 150.2ms |     150 | `0x5f848` | `zstd`   |
| 13.7% | 113.1ms |     113 | `0x5fadc` | `zstd`   |
|  4.7% |  39.0ms |      39 | `0x5fb10` | `zstd`   |

##### `0x17766` (`zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 199.2ms |     199 | `0x1601e` | `zstd`   |
|  0.5% |   1.0ms |       1 | `0x161a2` | `zstd`   |

##### `0x616b6` (`zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 200.2ms |     200 | `0x17766` | `zstd`   |

##### `0x609be` (`zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 70.6% | 12.0ms |      12 | `0x59272` | `zstd`   |
| 17.6% |  3.0ms |       3 | `0x59640` | `zstd`   |
|  5.9% |  1.0ms |       1 | `0x596dc` | `zstd`   |
|  5.9% |  1.0ms |       1 | `0x59558` | `zstd`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x9cee` (`zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

|     % |    Time | Samples | Call stack                                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------ |
| 12.8% | 147.1ms |     147 | `0x5fab8` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 11.6% | 133.1ms |     133 | `0x5f800` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 10.1% | 116.1ms |     116 | `0x5f848` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  7.5% |  86.1ms |      86 | `0x5fadc` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  2.9% |  33.0ms |      33 | `0x5f848` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.7% |  31.0ms |      31 | `0x59640` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  2.7% |  31.0ms |      31 | `0x5fab8` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.6% |  30.0ms |      30 | `0x5fb10` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  2.6% |  30.0ms |      30 | `0x5f800` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.5% |  29.0ms |      29 | `0x5f838` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  2.4% |  27.0ms |      27 | `0x5fadc` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.1% |  24.0ms |      24 | `0x594d8` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  2.0% |  23.0ms |      23 | `0x596dc` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.9% |  22.0ms |      22 | `0x596b8` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.7% |  20.0ms |      20 | `0x5960c` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.2% |  14.0ms |      14 | `0x5f86c` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  1.0% |  12.0ms |      12 | `0x59558` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.0% |  11.0ms |      11 | `0x577d4` (`zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  0.9% |  10.0ms |      10 | `0x5f888` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  0.8% |   9.0ms |       9 | `0x5fae0` (`zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |

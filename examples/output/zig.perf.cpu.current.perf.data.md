# CPU profile

Took 5.95s over 5,954 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 97.6% |   5.81s |   5,813 |
| Kernel   |  1.8% | 108.1ms |     108 |
| Native   |  0.6% |  33.0ms |      33 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|    % |    Time | Samples | Function  | Location |
| ---: | ------: | ------: | --------- | -------- |
| 6.2% | 372.4ms |     372 | `0x9a704` | `binary` |
| 3.1% | 184.2ms |     184 | `0x70014` | `binary` |
| 2.0% | 121.1ms |     121 | `0x70050` | `binary` |
| 1.4% |  82.1ms |      82 | `0x70034` | `binary` |
| 1.1% |  68.1ms |      68 | `0x6f6c4` | `binary` |
| 1.0% |  62.1ms |      62 | `0x700cc` | `binary` |
| 1.0% |  60.1ms |      60 | `0x6f844` | `binary` |
| 0.9% |  52.1ms |      52 | `0x70040` | `binary` |
| 0.9% |  51.1ms |      51 | `0x7b36c` | `binary` |
| 0.9% |  51.1ms |      51 | `0x70090` | `binary` |
| 0.9% |  51.1ms |      51 | `0x70918` | `binary` |
| 0.9% |  51.1ms |      51 | `0x70020` | `binary` |
| 0.8% |  48.0ms |      48 | `0x7009c` | `binary` |
| 0.8% |  47.0ms |      47 | `0x70028` | `binary` |
| 0.8% |  45.0ms |      45 | `0x674a0` | `binary` |
| 0.7% |  42.0ms |      42 | `0x6f834` | `binary` |
| 0.7% |  41.0ms |      41 | `0x700d4` | `binary` |
| 0.7% |  41.0ms |      41 | `0x6f798` | `binary` |
| 0.7% |  40.0ms |      40 | `0x6feb8` | `binary` |
| 0.7% |  39.0ms |      39 | `0x6f6f4` | `binary` |

##### Kernel

|     % |   Time | Samples | Function    | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
|  0.2% | 11.0ms |      11 | `0x14837cc` | `[kernel.kallsyms]` |
|  0.1% |  7.0ms |       7 | `0x39db08`  | `[kernel.kallsyms]` |
|  0.1% |  4.0ms |       4 | `0x14837bc` | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x14b23b8` | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x3c3834`  | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x2be198`  | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x44d484`  | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x14b2aac` | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x14837c4` | `[kernel.kallsyms]` |
| <0.1% |  2.0ms |       2 | `0x14837d0` | `[kernel.kallsyms]` |
| <0.1% |  2.0ms |       2 | `0x2aa344`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x2837d8`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x4ced8c`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x39db44`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x14c6048` | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x30bf14`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x1485f44` | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x4e0b88`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x3df9a8`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x438f64`  | `[kernel.kallsyms]` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x9a704` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 48.1% | 179.2ms |     179 | `0x90450` | `binary` |
| 32.5% | 121.1ms |     121 | `0x906b4` | `binary` |
|  4.8% |  18.0ms |      18 | `0x16d70` | `binary` |
|  2.4% |   9.0ms |       9 | `0x54d64` | `binary` |
|  1.6% |   6.0ms |       6 | `0x7b824` | `binary` |

##### `0x70014` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 75.5% | 139.1ms |     139 | `0x6f75c` | `binary` |
| 24.5% |  45.0ms |      45 | `0x14f10` | `binary` |

##### `0x70050` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 72.7% | 88.1ms |      88 | `0x6f75c` | `binary` |
| 27.3% | 33.0ms |      33 | `0x14f10` | `binary` |

##### `0x70034` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 76.8% | 63.1ms |      63 | `0x6f75c` | `binary` |
| 23.2% | 19.0ms |      19 | `0x14f10` | `binary` |

##### `0x6f6c4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 22.1% | 15.0ms |      15 | `0x7cd84` | `binary` |
| 16.2% | 11.0ms |      11 | `0x7d0a8` | `binary` |
|  5.9% |  4.0ms |       4 | `0x75014` | `binary` |
|  5.9% |  4.0ms |       4 | `0x77768` | `binary` |
|  4.4% |  3.0ms |       3 | `0x5f158` | `binary` |

##### `0x700cc` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 79.0% | 49.0ms |      49 | `0x6f75c` | `binary` |
| 21.0% | 13.0ms |      13 | `0x14f10` | `binary` |

##### `0x6f844` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 80.0% | 48.0ms |      48 | `0x14f10` | `binary` |
| 20.0% | 12.0ms |      12 | `0x6f75c` | `binary` |

##### `0x70040` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 65.4% | 34.0ms |      34 | `0x6f75c` | `binary` |
| 34.6% | 18.0ms |      18 | `0x14f10` | `binary` |

##### `0x7b36c` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 39.2% | 20.0ms |      20 | `0x5f554` | `binary` |
| 19.6% | 10.0ms |      10 | `0x69c74` | `binary` |
| 11.8% |  6.0ms |       6 | `0x6a110` | `binary` |
|  3.9% |  2.0ms |       2 | `0x5eb08` | `binary` |
|  3.9% |  2.0ms |       2 | `0x69a64` | `binary` |

##### `0x70090` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 88.2% | 45.0ms |      45 | `0x6f75c` | `binary` |
| 11.8% |  6.0ms |       6 | `0x14f10` | `binary` |

##### `0x70918` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 78.4% | 40.0ms |      40 | `0x674d4` | `binary` |
| 17.6% |  9.0ms |       9 | `0x79dc4` | `binary` |
|  3.9% |  2.0ms |       2 | `0x60f78` | `binary` |

##### `0x70020` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 82.4% | 42.0ms |      42 | `0x6f75c` | `binary` |
| 17.6% |  9.0ms |       9 | `0x14f10` | `binary` |

##### `0x7009c` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 83.3% | 40.0ms |      40 | `0x6f75c` | `binary` |
| 16.7% |  8.0ms |       8 | `0x14f10` | `binary` |

##### `0x70028` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 76.6% | 36.0ms |      36 | `0x6f75c` | `binary` |
| 23.4% | 11.0ms |      11 | `0x14f10` | `binary` |

##### `0x674a0` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 15.6% | 7.0ms |       7 | `0x7cd84` | `binary` |
| 13.3% | 6.0ms |       6 | `0x75014` | `binary` |
|  6.7% | 3.0ms |       3 | `0x7c504` | `binary` |
|  6.7% | 3.0ms |       3 | `0x6c938` | `binary` |
|  6.7% | 3.0ms |       3 | `0x75af8` | `binary` |

##### `0x6f834` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 66.7% | 28.0ms |      28 | `0x14f10` | `binary` |
| 33.3% | 14.0ms |      14 | `0x6f75c` | `binary` |

##### `0x700d4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 82.9% | 34.0ms |      34 | `0x6f75c` | `binary` |
| 17.1% |  7.0ms |       7 | `0x14f10` | `binary` |

##### `0x6f798` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 80.5% | 33.0ms |      33 | `0x674d4` | `binary` |
| 17.1% |  7.0ms |       7 | `0x79dc4` | `binary` |
|  2.4% |  1.0ms |       1 | `0x60f78` | `binary` |

##### `0x6feb8` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 65.0% | 26.0ms |      26 | `0x6f75c` | `binary` |
| 35.0% | 14.0ms |      14 | `0x14f10` | `binary` |

##### `0x6f6f4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 92.3% | 36.0ms |      36 | `0x674d4` | `binary` |
|  5.1% |  2.0ms |       2 | `0x79dc4` | `binary` |
|  2.6% |  1.0ms |       1 | `0x61594` | `binary` |

##### `0x14837cc` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Caller     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 11.0ms |      11 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x39db08` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 7.0ms |       7 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x14837bc` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 4.0ms |       4 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x14b23b8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x14b33a0` | `[kernel.kallsyms]` |

##### `0x3c3834` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x7733f8` | `[kernel.kallsyms]` |

##### `0x2be198` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x2beb84` | `[kernel.kallsyms]` |

##### `0x44d484` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x44d798` | `[kernel.kallsyms]` |

##### `0x14b2aac` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x14b33d0` | `[kernel.kallsyms]` |

##### `0x14837c4` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x14837d0` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x2aa344` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x2aad18` | `[kernel.kallsyms]` |

##### `0x2837d8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x2865fc` | `[kernel.kallsyms]` |

##### `0x4ced8c` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x4fdb24` | `[kernel.kallsyms]` |

##### `0x39db44` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x14c6048` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x14c6678` | `[kernel.kallsyms]` |

##### `0x30bf14` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x30c8f8` | `[kernel.kallsyms]` |

##### `0x1485f44` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x11d47b8` | `[kernel.kallsyms]` |

##### `0x4e0b88` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x773f64` | `[kernel.kallsyms]` |

##### `0x3df9a8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x44a794` | `[kernel.kallsyms]` |

##### `0x438f64` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x4cc4fc` | `[kernel.kallsyms]` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function  | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% |   5.95s |   5,954 | `0x16900` | `binary`                                 |
| 100.0% |   5.95s |   5,954 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.95s |   5,954 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.95s |   5,954 | `0x13e30` | `binary`                                 |
|  70.0% |   4.17s |   4,170 | `0x15964` | `binary`                                 |
|  47.2% |   2.81s |   2,808 | `0x5eff4` | `binary`                                 |
|  39.2% |   2.33s |   2,335 | `0x78ff4` | `binary`                                 |
|  36.7% |   2.18s |   2,187 | `0x672f0` | `binary`                                 |
|  35.9% |   2.13s |   2,136 | `0x6639c` | `binary`                                 |
|  30.1% |   1.79s |   1,792 | `0x6503c` | `binary`                                 |
|  28.5% |   1.69s |   1,695 | `0x61a90` | `binary`                                 |
|  20.6% |   1.22s |   1,226 | `0x71d44` | `binary`                                 |
|  20.2% |   1.20s |   1,200 | `0x61f50` | `binary`                                 |
|  19.3% |   1.14s |   1,147 | `0x674d4` | `binary`                                 |
|  16.2% | 968.0ms |     967 | `0x6f75c` | `binary`                                 |
|  15.5% | 921.9ms |     921 | `0x6a0c8` | `binary`                                 |
|  15.3% | 912.9ms |     912 | `0x672d4` | `binary`                                 |
|  12.7% | 755.8ms |     755 | `0x6aea0` | `binary`                                 |
|  12.2% | 728.7ms |     728 | `0x5ebe0` | `binary`                                 |
|  12.2% | 726.7ms |     726 | `0x6944c` | `binary`                                 |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% |   5.95s |   5,954 | `0x16900` | `binary` |
| 100.0% |   5.95s |   5,954 | `0x13e30` | `binary` |
|  70.0% |   4.17s |   4,170 | `0x15964` | `binary` |
|  47.2% |   2.81s |   2,808 | `0x5eff4` | `binary` |
|  39.2% |   2.33s |   2,335 | `0x78ff4` | `binary` |
|  36.7% |   2.18s |   2,187 | `0x672f0` | `binary` |
|  35.9% |   2.13s |   2,136 | `0x6639c` | `binary` |
|  30.1% |   1.79s |   1,792 | `0x6503c` | `binary` |
|  28.5% |   1.69s |   1,695 | `0x61a90` | `binary` |
|  20.6% |   1.22s |   1,226 | `0x71d44` | `binary` |
|  20.2% |   1.20s |   1,200 | `0x61f50` | `binary` |
|  19.3% |   1.14s |   1,147 | `0x674d4` | `binary` |
|  16.2% | 968.0ms |     967 | `0x6f75c` | `binary` |
|  15.5% | 921.9ms |     921 | `0x6a0c8` | `binary` |
|  15.3% | 912.9ms |     912 | `0x672d4` | `binary` |
|  12.7% | 755.8ms |     755 | `0x6aea0` | `binary` |
|  12.2% | 728.7ms |     728 | `0x5ebe0` | `binary` |
|  12.2% | 726.7ms |     726 | `0x6944c` | `binary` |
|  11.7% | 699.7ms |     699 | `0x5e5a4` | `binary` |
|  10.9% | 650.7ms |     650 | `0x68820` | `binary` |

##### Kernel

|    % |    Time | Samples | Function    | Location            |
| ---: | ------: | ------: | ----------- | ------------------- |
| 1.8% | 106.1ms |     106 | `0x15a0`    | `[kernel.kallsyms]` |
| 1.3% |  75.1ms |      75 | `0x14b33a0` | `[kernel.kallsyms]` |
| 1.2% |  70.1ms |      70 | `0x2ed74`   | `[kernel.kallsyms]` |
| 1.2% |  70.1ms |      70 | `0x14b23c0` | `[kernel.kallsyms]` |
| 1.2% |  69.1ms |      69 | `0x2ecb8`   | `[kernel.kallsyms]` |
| 0.6% |  36.0ms |      36 | `0x3b15e4`  | `[kernel.kallsyms]` |
| 0.6% |  36.0ms |      36 | `0x7768d0`  | `[kernel.kallsyms]` |
| 0.6% |  36.0ms |      36 | `0x3b21fc`  | `[kernel.kallsyms]` |
| 0.6% |  36.0ms |      36 | `0x3b253c`  | `[kernel.kallsyms]` |
| 0.6% |  36.0ms |      36 | `0x3b25d4`  | `[kernel.kallsyms]` |
| 0.6% |  34.0ms |      34 | `0x2ab954`  | `[kernel.kallsyms]` |
| 0.6% |  34.0ms |      34 | `0x4cb8b8`  | `[kernel.kallsyms]` |
| 0.6% |  34.0ms |      34 | `0x3b1aa0`  | `[kernel.kallsyms]` |
| 0.6% |  34.0ms |      34 | `0x44a7e0`  | `[kernel.kallsyms]` |
| 0.5% |  31.0ms |      31 | `0x14b33d0` | `[kernel.kallsyms]` |
| 0.5% |  28.0ms |      28 | `0x36870`   | `[kernel.kallsyms]` |
| 0.5% |  28.0ms |      28 | `0x14b2ab4` | `[kernel.kallsyms]` |
| 0.5% |  27.0ms |      27 | `0x14c6678` | `[kernel.kallsyms]` |
| 0.4% |  26.0ms |      26 | `0xb54524`  | `[kernel.kallsyms]` |
| 0.4% |  26.0ms |      26 | `0x2ab6f8`  | `[kernel.kallsyms]` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x16900` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 70.0% |   4.17s |   4,170 | `0x15964` | `binary` |
| 10.4% | 620.6ms |     620 | `0x150ac` | `binary` |
|  9.6% | 573.6ms |     573 | `0x14f10` | `binary` |
|  3.3% | 195.2ms |     195 | `0x15034` | `binary` |
|  1.5% |  87.1ms |      87 | `0x14e90` | `binary` |

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.95s |   5,954 | `0x16900` | `binary` |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.95s |   5,954 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x13e30` (`binary`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.95s |   5,954 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x15964` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 40.8% |   1.70s |   1,702 | `0x6503c` | `binary` |
| 39.3% |   1.63s |   1,638 | `0x6639c` | `binary` |
| 13.3% | 555.6ms |     555 | `0x5eff4` | `binary` |
|  4.6% | 192.2ms |     192 | `0x6627c` | `binary` |
|  0.6% |  25.0ms |      25 | `0x651bc` | `binary` |

##### `0x5eff4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 77.9% |   2.18s |   2,187 | `0x672f0` | `binary` |
| 32.5% | 912.9ms |     912 | `0x672d4` | `binary` |
|  1.5% |  42.0ms |      42 | `0x6716c` | `binary` |
|  1.3% |  37.0ms |      37 | `0x673a8` | `binary` |
|  0.8% |  23.0ms |      23 | `0x67420` | `binary` |

##### `0x78ff4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 57.4% |   1.34s |   1,340 | `0x61a90` | `binary` |
| 12.1% | 283.3ms |     283 | `0x60bf8` | `binary` |
|  8.1% | 189.2ms |     189 | `0x61f50` | `binary` |
|  7.9% | 184.2ms |     184 | `0x60c90` | `binary` |
|  7.5% | 174.2ms |     174 | `0x5ebe0` | `binary` |

##### `0x672f0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 25.6% | 559.6ms |     559 | `0x5e9c0` | `binary` |
| 25.0% | 546.5ms |     546 | `0x61f50` | `binary` |
| 21.6% | 472.5ms |     472 | `0x5ebe0` | `binary` |
| 15.4% | 337.3ms |     337 | `0x5e828` | `binary` |
| 12.6% | 276.3ms |     276 | `0x5ec7c` | `binary` |

##### `0x6639c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 99.1% |  2.11s |   2,117 | `0x5eff4` | `binary` |
|  0.5% | 10.0ms |      10 | `0x5efd4` | `binary` |
|  0.2% |  4.0ms |       4 | `0x5e6dc` | `binary` |
|  0.1% |  2.0ms |       2 | `0x5efa0` | `binary` |
| <0.1% |  1.0ms |       1 | `0x5ee0c` | `binary` |

##### `0x6503c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 96.7% |  1.73s |   1,732 | `0x78ff4` | `binary` |
|  2.1% | 37.0ms |      37 | `0x782ec` | `binary` |
|  0.8% | 14.0ms |      14 | `0x783f4` | `binary` |
|  0.6% | 10.0ms |      10 | `0x78fdc` | `binary` |
|  0.4% |  8.0ms |       8 | `0x78ea4` | `binary` |

##### `0x61a90` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.3% |   1.22s |   1,226 | `0x71d44` | `binary` |
| 16.3% | 277.3ms |     277 | `0x71cf8` | `binary` |
|  9.7% | 165.2ms |     165 | `0x7197c` | `binary` |
|  3.9% |  66.1ms |      66 | `0x71b24` | `binary` |
|  2.1% |  35.0ms |      35 | `0x71c40` | `binary` |

##### `0x71d44` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 55.0% | 674.7ms |     674 | `0x6639c` | `binary` |
| 42.2% | 517.5ms |     517 | `0x6503c` | `binary` |
| 10.0% | 123.1ms |     123 | `0x6627c` | `binary` |
|  1.0% |  12.0ms |      12 | `0x5eff4` | `binary` |
|  0.3% |   4.0ms |       4 | `0x65020` | `binary` |

##### `0x61f50` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 75.0% | 900.9ms |     900 | `0x6a0c8` | `binary` |
|  6.3% |  76.1ms |      76 | `0x6a31c` | `binary` |
|  3.4% |  41.0ms |      41 | `0x6a18c` | `binary` |
|  3.1% |  37.0ms |      37 | `0x69c74` | `binary` |
|  2.8% |  33.0ms |      33 | `0x69d98` | `binary` |

##### `0x674d4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 69.7% | 800.8ms |     800 | `0x6f75c` | `binary` |
|  3.5% |  40.0ms |      40 | `0x70918` | `binary` |
|  3.1% |  36.0ms |      36 | `0x6f6f4` | `binary` |
|  2.9% |  33.0ms |      33 | `0x6f798` | `binary` |
|  2.1% |  24.0ms |      24 | `0x6f7b4` | `binary` |

##### `0x6f75c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 14.4% | 139.1ms |     139 | `0x70014` | `binary` |
|  9.1% |  88.1ms |      88 | `0x70050` | `binary` |
|  6.5% |  63.1ms |      63 | `0x70034` | `binary` |
|  5.1% |  49.0ms |      49 | `0x700cc` | `binary` |
|  4.7% |  45.0ms |      45 | `0x70090` | `binary` |

##### `0x6a0c8` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 27.6% | 254.3ms |     254 | `0x60bf8` | `binary` |
| 11.4% | 105.1ms |     105 | `0x60c90` | `binary` |
| 10.9% | 100.1ms |     100 | `0x61f50` | `binary` |
|  6.6% |  61.1ms |      61 | `0x7cd84` | `binary` |
|  4.6% |  42.0ms |      42 | `0x5f5d4` | `binary` |

##### `0x672d4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 79.1% | 721.7ms |     721 | `0x78ff4` | `binary` |
|  8.2% |  75.1ms |      75 | `0x782ec` | `binary` |
|  5.0% |  46.0ms |      46 | `0x783f4` | `binary` |
|  1.5% |  14.0ms |      14 | `0x78200` | `binary` |
|  1.1% |  10.0ms |      10 | `0x78fdc` | `binary` |

##### `0x6aea0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 73.9% | 558.6ms |     558 | `0x6944c` | `binary` |
| 18.4% | 139.1ms |     139 | `0x695b4` | `binary` |
| 11.0% |  83.1ms |      83 | `0x5eff4` | `binary` |
|  8.3% |  63.1ms |      63 | `0x5e9c0` | `binary` |
|  2.9% |  22.0ms |      22 | `0x5ebe0` | `binary` |

##### `0x5ebe0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 78.7% | 573.6ms |     573 | `0x6c3fc` | `binary` |
| 26.1% | 190.2ms |     190 | `0x6c384` | `binary` |
|  2.5% |  18.0ms |      18 | `0x6c3e4` | `binary` |
|  1.2% |   9.0ms |       9 | `0x6c3d8` | `binary` |
|  0.1% |   1.0ms |       1 | `0x6c3ec` | `binary` |

##### `0x6944c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 90.6% | 658.7ms |     658 | `0x5eff4` | `binary` |
|  3.9% |  28.0ms |      28 | `0x5ebe0` | `binary` |
|  1.1% |   8.0ms |       8 | `0x5efd4` | `binary` |
|  1.0% |   7.0ms |       7 | `0x61f50` | `binary` |
|  1.0% |   7.0ms |       7 | `0x5eb54` | `binary` |

##### `0x5e5a4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 47.9% | 335.3ms |     335 | `0x5eff4` | `binary` |
| 15.2% | 106.1ms |     106 | `0x61a90` | `binary` |
|  7.7% |  54.1ms |      54 | `0x5ebe0` | `binary` |
|  7.0% |  49.0ms |      49 | `0x6b878` | `binary` |
|  6.0% |  42.0ms |      42 | `0x61f50` | `binary` |

##### `0x68820` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 83.1% | 540.5ms |     540 | `0x6aea0` | `binary` |
| 18.3% | 119.1ms |     119 | `0x6a948` | `binary` |
|  0.8% |   5.0ms |       5 | `0x6a988` | `binary` |
|  0.6% |   4.0ms |       4 | `0x6a8f8` | `binary` |
|  0.5% |   3.0ms |       3 | `0x6a86c` | `binary` |

##### `0x15a0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 70.8% | 75.1ms |      75 | `0x14b33a0` | `[kernel.kallsyms]` |
| 29.2% | 31.0ms |      31 | `0x14b33d0` | `[kernel.kallsyms]` |

##### `0x14b33a0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 93.3% | 70.1ms |      70 | `0x14b23c0` | `[kernel.kallsyms]` |
|  4.0% |  3.0ms |       3 | `0x14b23b8` | `[kernel.kallsyms]` |
|  2.7% |  2.0ms |       2 | `0x14b241c` | `[kernel.kallsyms]` |

##### `0x2ed74` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 98.6% | 69.1ms |      69 | `0x2ecb8`  | `[kernel.kallsyms]` |
|  1.4% |  1.0ms |       1 | `0x3add38` | `[kernel.kallsyms]` |

##### `0x14b23c0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee    | Location            |
| -----: | -----: | ------: | --------- | ------------------- |
| 100.0% | 70.1ms |      70 | `0x2ed74` | `[kernel.kallsyms]` |

##### `0x2ecb8` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 52.2% | 36.0ms |      36 | `0x3b25d4` | `[kernel.kallsyms]` |
| 21.7% | 15.0ms |      15 | `0x3b0d78` | `[kernel.kallsyms]` |
| 11.6% |  8.0ms |       8 | `0x31b744` | `[kernel.kallsyms]` |
|  8.7% |  6.0ms |       6 | `0x3d1ba4` | `[kernel.kallsyms]` |
|  2.9% |  2.0ms |       2 | `0x3bcad8` | `[kernel.kallsyms]` |

##### `0x3b15e4` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 36.0ms |      36 | `0x7768d0` | `[kernel.kallsyms]` |
|  94.4% | 34.0ms |      34 | `0x4cb8b8` | `[kernel.kallsyms]` |

##### `0x7768d0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 94.4% | 34.0ms |      34 | `0x44a7e0` | `[kernel.kallsyms]` |
|  5.6% |  2.0ms |       2 | `0x44a794` | `[kernel.kallsyms]` |

##### `0x3b21fc` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 36.0ms |      36 | `0x3b15e4` | `[kernel.kallsyms]` |

##### `0x3b253c` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 36.0ms |      36 | `0x3b21fc` | `[kernel.kallsyms]` |

##### `0x3b25d4` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 36.0ms |      36 | `0x3b253c` | `[kernel.kallsyms]` |

##### `0x2ab954` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 76.5% | 26.0ms |      26 | `0x2ab6f8` | `[kernel.kallsyms]` |
| 17.6% |  6.0ms |       6 | `0x2ab618` | `[kernel.kallsyms]` |
|  2.9% |  1.0ms |       1 | `0x2ab6b8` | `[kernel.kallsyms]` |
|  2.9% |  1.0ms |       1 | `0x2ab69c` | `[kernel.kallsyms]` |

##### `0x4cb8b8` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 34.0ms |      34 | `0x2ab954` | `[kernel.kallsyms]` |

##### `0x3b1aa0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 34.0ms |      34 | `0x3b15e4` | `[kernel.kallsyms]` |

##### `0x44a7e0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 34.0ms |      34 | `0x3b1aa0` | `[kernel.kallsyms]` |

##### `0x14b33d0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 90.3% | 28.0ms |      28 | `0x14b2ab4` | `[kernel.kallsyms]` |
|  9.7% |  3.0ms |       3 | `0x14b2aac` | `[kernel.kallsyms]` |

##### `0x36870` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 96.4% | 27.0ms |      27 | `0x14c6678` | `[kernel.kallsyms]` |
|  3.6% |  1.0ms |       1 | `0x14c5f00` | `[kernel.kallsyms]` |

##### `0x14b2ab4` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee    | Location            |
| -----: | -----: | ------: | --------- | ------------------- |
| 100.0% | 28.0ms |      28 | `0x36870` | `[kernel.kallsyms]` |

##### `0x14c6678` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 96.3% | 26.0ms |      26 | `0x14c6048` | `[kernel.kallsyms]` |
|  3.7% |  1.0ms |       1 | `0x14c5fc8` | `[kernel.kallsyms]` |

##### `0xb54524` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 42.3% | 11.0ms |      11 | `0x14837cc` | `[kernel.kallsyms]` |
| 15.4% |  4.0ms |       4 | `0x14837bc` | `[kernel.kallsyms]` |
| 11.5% |  3.0ms |       3 | `0x14837c4` | `[kernel.kallsyms]` |
|  7.7% |  2.0ms |       2 | `0x14837d0` | `[kernel.kallsyms]` |
|  3.8% |  1.0ms |       1 | `0x14837ac` | `[kernel.kallsyms]` |

##### `0x2ab6f8` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 26.0ms |      26 | `0xb54524` | `[kernel.kallsyms]` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x16900` (`binary`) ← `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x13e30` (`binary`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.0% | 179.2ms |     179 | `0x9a704` (`binary`) ← `0x90450` ← `0x15034`                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.4% |  85.1ms |      85 | `0x9a704` (`binary`) ← `0x906b4` ← `0x14e90`                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.8% |  48.0ms |      48 | `0x6f844` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.8% |  45.0ms |      45 | `0x70014` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |  36.0ms |      36 | `0x9a704` (`binary`) ← `0x906b4` ← `0x14f40`                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |  36.0ms |      36 | `0x6f850` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |  33.0ms |      33 | `0x70050` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% |  28.0ms |      28 | `0x6f834` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% |  27.0ms |      27 | `0x6ffec` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |  19.0ms |      19 | `0x70034` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |  18.0ms |      18 | `0x70040` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |  17.0ms |      17 | `0x70748` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |  15.0ms |      15 | `0x9075c` (`binary`) ← `0x14f40`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  14.0ms |      14 | `0x14f2c` (`binary`)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  14.0ms |      14 | `0x14f60` (`binary`)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  14.0ms |      14 | `0x6feb8` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  13.0ms |      13 | `0x700cc` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  12.0ms |      12 | `0x6f81c` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  12.0ms |      12 | `0x700c0` (`binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  11.0ms |      11 | `0x14837cc` (`[kernel.kallsyms]`) ← `0xb54524` ← `0x2ab6f8` ← `0x2ab954` ← `0x4cb8b8` ← `0x3b15e4` ← `0x3b1aa0` ← `0x44a7e0` ← `0x7768d0` ← `0x3b15e4` ← `0x3b21fc` ← `0x3b253c` ← `0x3b25d4` ← `0x2ecb8` ← `0x2ed74` ← `0x14b23c0` ← `0x14b33a0` ← `0x15a0` ← `0xe3e00` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x5112c` (`binary`) ← `0x228c0` ← `0x22470` ← `0x3b9b4` ← `0x3b854` ← `0x957f0` ← `0x2368c` ← `0x225d8` ← `0x14d1c` |

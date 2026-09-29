# CPU profile

Took 5.24s over 5,239 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 92.6% |   4.85s |   4,852 |
| Native   |  5.2% | 272.3ms |     272 |
| Kernel   |  2.2% | 115.1ms |     115 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function  | Location                                 |
| ---: | ------: | ------: | --------- | ---------------------------------------- |
| 3.9% | 203.2ms |     203 | `0x138f0` | `binary`                                 |
| 2.8% | 148.1ms |     148 | `0x1392c` | `binary`                                 |
| 2.4% | 125.1ms |     125 | `0x13910` | `binary`                                 |
| 2.3% | 118.1ms |     118 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 1.4% |  75.1ms |      75 | `0x1396c` | `binary`                                 |
| 1.4% |  74.1ms |      74 | `0x1391c` | `binary`                                 |
| 1.3% |  67.1ms |      67 | `0x138fc` | `binary`                                 |
| 1.3% |  66.1ms |      66 | `0x433d0` | `binary`                                 |
| 1.2% |  64.1ms |      64 | `0x13904` | `binary`                                 |
| 1.2% |  62.1ms |      62 | `0x139b0` | `binary`                                 |
| 1.1% |  60.1ms |      60 | `0x139a8` | `binary`                                 |
| 1.1% |  56.1ms |      56 | `0x9e670` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 1.0% |  52.1ms |      52 | `0x13978` | `binary`                                 |
| 0.9% |  46.0ms |      46 | `0x53b84` | `binary`                                 |
| 0.8% |  42.0ms |      42 | `0x53c64` | `binary`                                 |
| 0.8% |  41.0ms |      41 | `0x131a4` | `binary`                                 |
| 0.8% |  40.0ms |      40 | `0x13990` | `binary`                                 |
| 0.7% |  35.0ms |      35 | `0x53bb4` | `binary`                                 |
| 0.6% |  31.0ms |      31 | `0x53c80` | `binary`                                 |
| 0.6% |  31.0ms |      31 | `0x140b0` | `binary`                                 |

#### Categories

##### Ours

|    % |    Time | Samples | Function  | Location |
| ---: | ------: | ------: | --------- | -------- |
| 3.9% | 203.2ms |     203 | `0x138f0` | `binary` |
| 2.8% | 148.1ms |     148 | `0x1392c` | `binary` |
| 2.4% | 125.1ms |     125 | `0x13910` | `binary` |
| 1.4% |  75.1ms |      75 | `0x1396c` | `binary` |
| 1.4% |  74.1ms |      74 | `0x1391c` | `binary` |
| 1.3% |  67.1ms |      67 | `0x138fc` | `binary` |
| 1.3% |  66.1ms |      66 | `0x433d0` | `binary` |
| 1.2% |  64.1ms |      64 | `0x13904` | `binary` |
| 1.2% |  62.1ms |      62 | `0x139b0` | `binary` |
| 1.1% |  60.1ms |      60 | `0x139a8` | `binary` |
| 1.0% |  52.1ms |      52 | `0x13978` | `binary` |
| 0.9% |  46.0ms |      46 | `0x53b84` | `binary` |
| 0.8% |  42.0ms |      42 | `0x53c64` | `binary` |
| 0.8% |  41.0ms |      41 | `0x131a4` | `binary` |
| 0.8% |  40.0ms |      40 | `0x13990` | `binary` |
| 0.7% |  35.0ms |      35 | `0x53bb4` | `binary` |
| 0.6% |  31.0ms |      31 | `0x53c80` | `binary` |
| 0.6% |  31.0ms |      31 | `0x140b0` | `binary` |
| 0.6% |  30.0ms |      30 | `0x138c8` | `binary` |
| 0.6% |  29.0ms |      29 | `0x63400` | `binary` |

##### Native

|     % |    Time | Samples | Function  | Location                                 |
| ----: | ------: | ------: | --------- | ---------------------------------------- |
|  2.3% | 118.1ms |     118 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.1% |  56.1ms |      56 | `0x9e670` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |  13.0ms |      13 | `0x9d100` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |  12.0ms |      12 | `0x9d184` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.2% |  10.0ms |      10 | `0x9d11c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   6.0ms |       6 | `0x9d138` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   5.0ms |       5 | `0x9d150` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9d210` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9d168` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9e580` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.1% |   4.0ms |       4 | `0x9d114` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9e674` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9e5c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9e590` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9e5e0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9e678` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   2.0ms |       2 | `0x9d148` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   1.0ms |       1 | `0xddb88` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   1.0ms |       1 | `0x9e680` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| <0.1% |   1.0ms |       1 | `0x8e9cc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Kernel

|     % |  Time | Samples | Function    | Location            |
| ----: | ----: | ------: | ----------- | ------------------- |
|  0.2% | 9.0ms |       9 | `0x14837cc` | `[kernel.kallsyms]` |
|  0.1% | 6.0ms |       6 | `0x14b23b8` | `[kernel.kallsyms]` |
|  0.1% | 5.0ms |       5 | `0x14b2aac` | `[kernel.kallsyms]` |
|  0.1% | 5.0ms |       5 | `0x2be198`  | `[kernel.kallsyms]` |
|  0.1% | 5.0ms |       5 | `0x14837bc` | `[kernel.kallsyms]` |
|  0.1% | 4.0ms |       4 | `0x3a4ee0`  | `[kernel.kallsyms]` |
|  0.1% | 3.0ms |       3 | `0x3c3850`  | `[kernel.kallsyms]` |
|  0.1% | 3.0ms |       3 | `0x39db44`  | `[kernel.kallsyms]` |
|  0.1% | 3.0ms |       3 | `0x14837b8` | `[kernel.kallsyms]` |
|  0.1% | 3.0ms |       3 | `0x39db08`  | `[kernel.kallsyms]` |
| <0.1% | 2.0ms |       2 | `0x34b3e8`  | `[kernel.kallsyms]` |
| <0.1% | 2.0ms |       2 | `0x44d484`  | `[kernel.kallsyms]` |
| <0.1% | 2.0ms |       2 | `0x3a3538`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x315ccc`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x325cc0`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x3a4b04`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x39db20`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x2ab7f4`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x33e980`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x770c24`  | `[kernel.kallsyms]` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x138f0` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 84.2% | 171.2ms |     171 | `0x53c28` | `binary` |
| 15.8% |  32.0ms |      32 | `0xf660`  | `binary` |

##### `0x1392c` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 77.7% | 115.1ms |     115 | `0x53c28` | `binary` |
| 22.3% |  33.0ms |      33 | `0xf660`  | `binary` |

##### `0x13910` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 84.0% | 105.1ms |     105 | `0x53c28` | `binary` |
| 16.0% |  20.0ms |      20 | `0xf660`  | `binary` |

##### `0x9d200` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 64.4% | 76.1ms |      76 | `0x6aa34` | `binary` |
| 22.9% | 27.0ms |      27 | `0xf68c`  | `binary` |
|  5.9% |  7.0ms |       7 | `0x122fc` | `binary` |
|  3.4% |  4.0ms |       4 | `0x1130c` | `binary` |
|  1.7% |  2.0ms |       2 | `0xee68`  | `binary` |

##### `0x1396c` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 85.3% | 64.1ms |      64 | `0x53c28` | `binary` |
| 14.7% | 11.0ms |      11 | `0xf660`  | `binary` |

##### `0x1391c` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 79.7% | 59.1ms |      59 | `0x53c28` | `binary` |
| 20.3% | 15.0ms |      15 | `0xf660`  | `binary` |

##### `0x138fc` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 74.6% | 50.1ms |      50 | `0x53c28` | `binary` |
| 25.4% | 17.0ms |      17 | `0xf660`  | `binary` |

##### `0x433d0` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 74.2% | 49.0ms |      49 | `0x62fd4` | `binary` |
| 24.2% | 16.0ms |      16 | `0x491a0` | `binary` |
|  1.5% |  1.0ms |       1 | `0x369d4` | `binary` |

##### `0x13904` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 76.6% | 49.0ms |      49 | `0x53c28` | `binary` |
| 23.4% | 15.0ms |      15 | `0xf660`  | `binary` |

##### `0x139b0` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 87.1% | 54.1ms |      54 | `0x53c28` | `binary` |
| 12.9% |  8.0ms |       8 | `0xf660`  | `binary` |

##### `0x139a8` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 73.3% | 44.0ms |      44 | `0x53c28` | `binary` |
| 26.7% | 16.0ms |      16 | `0xf660`  | `binary` |

##### `0x9e670` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 48.2% | 27.0ms |      27 | `0x6aa34` | `binary` |
| 17.9% | 10.0ms |      10 | `0xf75c`  | `binary` |
|  8.9% |  5.0ms |       5 | `0xf140`  | `binary` |
|  7.1% |  4.0ms |       4 | `0xf68c`  | `binary` |
|  7.1% |  4.0ms |       4 | `0x122fc` | `binary` |

##### `0x13978` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 78.8% | 41.0ms |      41 | `0x53c28` | `binary` |
| 21.2% | 11.0ms |      11 | `0xf660`  | `binary` |

##### `0x53b84` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 19.6% | 9.0ms |       9 | `0x466a0` | `binary` |
| 17.4% | 8.0ms |       8 | `0x469d8` | `binary` |
| 10.9% | 5.0ms |       5 | `0x44044` | `binary` |
|  6.5% | 3.0ms |       3 | `0x54720` | `binary` |
|  6.5% | 3.0ms |       3 | `0x632d4` | `binary` |

##### `0x53c64` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 88.1% | 37.0ms |      37 | `0x62fd4` | `binary` |
| 11.9% |  5.0ms |       5 | `0x491a0` | `binary` |

##### `0x131a4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 80.5% | 33.0ms |      33 | `0xf660`  | `binary` |
| 19.5% |  8.0ms |       8 | `0x53c28` | `binary` |

##### `0x13990` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 82.5% | 33.0ms |      33 | `0x53c28` | `binary` |
| 17.5% |  7.0ms |       7 | `0xf660`  | `binary` |

##### `0x53bb4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 88.6% | 31.0ms |      31 | `0x62fd4` | `binary` |
| 11.4% |  4.0ms |       4 | `0x491a0` | `binary` |

##### `0x53c80` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 83.9% | 26.0ms |      26 | `0x62fd4` | `binary` |
| 16.1% |  5.0ms |       5 | `0x491a0` | `binary` |

##### `0x140b0` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 54.8% | 17.0ms |      17 | `0x53c28` | `binary` |
| 45.2% | 14.0ms |      14 | `0xf660`  | `binary` |

##### `0x138c8` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 76.7% | 23.0ms |      23 | `0xf660`  | `binary` |
| 23.3% |  7.0ms |       7 | `0x53c28` | `binary` |

##### `0x63400` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 20.7% | 6.0ms |       6 | `0x46a0c` | `binary` |
| 13.8% | 4.0ms |       4 | `0x66148` | `binary` |
| 10.3% | 3.0ms |       3 | `0x37200` | `binary` |
|  6.9% | 2.0ms |       2 | `0x4aa00` | `binary` |
|  3.4% | 1.0ms |       1 | `0x49ea0` | `binary` |

##### `0x9d100` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 84.6% | 11.0ms |      11 | `0x43eb8` | `binary` |
|  7.7% |  1.0ms |       1 | `0x3dbbc` | `binary` |
|  7.7% |  1.0ms |       1 | `0x6aa34` | `binary` |

##### `0x9d184` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x43eb8` | `binary` |

##### `0x9d11c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x43eb8` | `binary` |

##### `0x14837cc` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 9.0ms |       9 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x9d138` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 83.3% | 5.0ms |       5 | `0x43eb8` | `binary` |
| 16.7% | 1.0ms |       1 | `0x34f44` | `binary` |

##### `0x14b23b8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 6.0ms |       6 | `0x14b33a0` | `[kernel.kallsyms]` |

##### `0x9d150` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.0ms |       5 | `0x43eb8` | `binary` |

##### `0x14b2aac` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 5.0ms |       5 | `0x14b33d0` | `[kernel.kallsyms]` |

##### `0x2be198` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 5.0ms |       5 | `0x2beb84` | `[kernel.kallsyms]` |

##### `0x14837bc` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 5.0ms |       5 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x9d210` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 75.0% | 3.0ms |       3 | `0x6aa34` | `binary` |
| 25.0% | 1.0ms |       1 | `0xf68c`  | `binary` |

##### `0x9d168` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x43eb8` | `binary` |

##### `0x9e580` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 50.0% | 2.0ms |       2 | `0x6aa34` | `binary` |
| 25.0% | 1.0ms |       1 | `0x122fc` | `binary` |
| 25.0% | 1.0ms |       1 | `0x43e78` | `binary` |

##### `0x9d114` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 4.0ms |       4 | `0x43eb8` | `binary` |

##### `0x3a4ee0` (`[kernel.kallsyms]`)

|     % |  Time | Samples | Caller     | Location            |
| ----: | ----: | ------: | ---------- | ------------------- |
| 75.0% | 3.0ms |       3 | `0x361c28` | `[kernel.kallsyms]` |
| 25.0% | 1.0ms |       1 | `0x361c90` | `[kernel.kallsyms]` |

##### `0x3c3850` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x7733f8` | `[kernel.kallsyms]` |

##### `0x39db44` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x14837b8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x39db08` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x9e674` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x6aa34` | `binary` |

##### `0x9e5c0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 50.0% | 1.0ms |       1 | `0x43e78` | `binary` |
| 50.0% | 1.0ms |       1 | `0x366a8` | `binary` |

##### `0x9e590` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x43e78` | `binary` |

##### `0x9e5e0` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x43e78` | `binary` |

##### `0x9e678` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x6aa34` | `binary` |

##### `0x9d148` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 2.0ms |       2 | `0x43eb8` | `binary` |

##### `0x34b3e8` (`[kernel.kallsyms]`)

|     % |  Time | Samples | Caller     | Location            |
| ----: | ----: | ------: | ---------- | ------------------- |
| 50.0% | 1.0ms |       1 | `0xa8ecfc` | `[kernel.kallsyms]` |
| 50.0% | 1.0ms |       1 | `0xa8ec68` | `[kernel.kallsyms]` |

##### `0x44d484` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x44d798` | `[kernel.kallsyms]` |

##### `0x3a3538` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x3a4b04` | `[kernel.kallsyms]` |

##### `0xddb88` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x11b0c` | `binary` |

##### `0x9e680` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.0ms |       1 | `0x6aa34` | `binary` |

##### `0x8e9cc` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x900c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x315ccc` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x315eb8` | `[kernel.kallsyms]` |

##### `0x325cc0` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x315eb8` | `[kernel.kallsyms]` |

##### `0x3a4b04` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x315724` | `[kernel.kallsyms]` |

##### `0x39db20` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x2ab7f4` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x2ab954` | `[kernel.kallsyms]` |

##### `0x33e980` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x34306c` | `[kernel.kallsyms]` |

##### `0x770c24` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x3c49bc` | `[kernel.kallsyms]` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function  | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% |   5.24s |   5,239 | `0x1130c` | `binary`                                 |
| 100.0% |   5.24s |   5,239 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.24s |   5,239 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.24s |   5,239 | `0xdf70`  | `binary`                                 |
|  74.4% |   3.90s |   3,900 | `0x10144` | `binary`                                 |
|  50.7% |   2.65s |   2,657 | `0x368f8` | `binary`                                 |
|  40.7% |   2.13s |   2,131 | `0x4aa18` | `binary`                                 |
|  38.4% |   2.01s |   2,010 | `0x45be0` | `binary`                                 |
|  32.5% |   1.70s |   1,703 | `0x44b48` | `binary`                                 |
|  31.7% |   1.66s |   1,661 | `0x6449c` | `binary`                                 |
|  30.9% |   1.62s |   1,621 | `0x383d0` | `binary`                                 |
|  24.9% |   1.30s |   1,303 | `0x62fd4` | `binary`                                 |
|  23.0% |   1.20s |   1,205 | `0x36b64` | `binary`                                 |
|  22.1% |   1.15s |   1,158 | `0x537bc` | `binary`                                 |
|  20.7% |   1.08s |   1,084 | `0x53c28` | `binary`                                 |
|  14.8% | 775.8ms |     775 | `0x642d8` | `binary`                                 |
|  13.4% | 703.7ms |     703 | `0x66174` | `binary`                                 |
|  12.9% | 678.7ms |     678 | `0x36d98` | `binary`                                 |
|  12.5% | 653.7ms |     653 | `0x58e54` | `binary`                                 |
|  12.4% | 650.7ms |     650 | `0x3695c` | `binary`                                 |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% |   5.24s |   5,239 | `0x1130c` | `binary` |
| 100.0% |   5.24s |   5,239 | `0xdf70`  | `binary` |
|  74.4% |   3.90s |   3,900 | `0x10144` | `binary` |
|  50.7% |   2.65s |   2,657 | `0x368f8` | `binary` |
|  40.7% |   2.13s |   2,131 | `0x4aa18` | `binary` |
|  38.4% |   2.01s |   2,010 | `0x45be0` | `binary` |
|  32.5% |   1.70s |   1,703 | `0x44b48` | `binary` |
|  31.7% |   1.66s |   1,661 | `0x6449c` | `binary` |
|  30.9% |   1.62s |   1,621 | `0x383d0` | `binary` |
|  24.9% |   1.30s |   1,303 | `0x62fd4` | `binary` |
|  23.0% |   1.20s |   1,205 | `0x36b64` | `binary` |
|  22.1% |   1.15s |   1,158 | `0x537bc` | `binary` |
|  20.7% |   1.08s |   1,084 | `0x53c28` | `binary` |
|  14.8% | 775.8ms |     775 | `0x642d8` | `binary` |
|  13.4% | 703.7ms |     703 | `0x66174` | `binary` |
|  12.9% | 678.7ms |     678 | `0x36d98` | `binary` |
|  12.5% | 653.7ms |     653 | `0x58e54` | `binary` |
|  12.4% | 650.7ms |     650 | `0x3695c` | `binary` |
|  12.2% | 637.6ms |     637 | `0x64480` | `binary` |
|  11.9% | 624.6ms |     624 | `0x66a6c` | `binary` |

##### Native

|      % |    Time | Samples | Function  | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% |   5.24s |   5,239 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.24s |   5,239 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   2.3% | 118.1ms |     118 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   1.6% |  86.1ms |      86 | `0x9e670` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.6% |  29.0ms |      29 | `0xddb88` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.4% |  21.0ms |      21 | `0xdda44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.3% |  17.0ms |      17 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  13.0ms |      13 | `0x9d100` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  13.0ms |      13 | `0xe3acc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  13.0ms |      13 | `0x8f988` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  12.0ms |      12 | `0x9e674` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  12.0ms |      12 | `0x8fa48` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  12.0ms |      12 | `0x90240` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  12.0ms |      12 | `0x9d184` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |  10.0ms |      10 | `0x9d11c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |   9.0ms |       9 | `0x9405c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% |   8.0ms |       8 | `0x9245c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |   6.0ms |       6 | `0xde3c8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |   6.0ms |       6 | `0x9d138` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% |   5.0ms |       5 | `0x9d150` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Kernel

|    % |    Time | Samples | Function    | Location            |
| ---: | ------: | ------: | ----------- | ------------------- |
| 2.2% | 115.1ms |     115 | `0x15a0`    | `[kernel.kallsyms]` |
| 1.4% |  74.1ms |      74 | `0x14b33a0` | `[kernel.kallsyms]` |
| 1.3% |  66.1ms |      66 | `0x2ed74`   | `[kernel.kallsyms]` |
| 1.3% |  66.1ms |      66 | `0x14b23c0` | `[kernel.kallsyms]` |
| 1.2% |  65.1ms |      65 | `0x2ecb8`   | `[kernel.kallsyms]` |
| 0.8% |  41.0ms |      41 | `0x14b33d0` | `[kernel.kallsyms]` |
| 0.7% |  36.0ms |      36 | `0x14b2ab4` | `[kernel.kallsyms]` |
| 0.7% |  35.0ms |      35 | `0x14c6048` | `[kernel.kallsyms]` |
| 0.7% |  35.0ms |      35 | `0x14c6678` | `[kernel.kallsyms]` |
| 0.7% |  35.0ms |      35 | `0x36870`   | `[kernel.kallsyms]` |
| 0.6% |  33.0ms |      33 | `0x315eb8`  | `[kernel.kallsyms]` |
| 0.5% |  26.0ms |      26 | `0x3b47b4`  | `[kernel.kallsyms]` |
| 0.5% |  26.0ms |      26 | `0x3b4878`  | `[kernel.kallsyms]` |
| 0.5% |  25.0ms |      25 | `0x3b1aa0`  | `[kernel.kallsyms]` |
| 0.5% |  25.0ms |      25 | `0x44a7e0`  | `[kernel.kallsyms]` |
| 0.5% |  25.0ms |      25 | `0x7768d0`  | `[kernel.kallsyms]` |
| 0.5% |  25.0ms |      25 | `0x3b3c5c`  | `[kernel.kallsyms]` |
| 0.5% |  24.0ms |      24 | `0x4cb8b8`  | `[kernel.kallsyms]` |
| 0.5% |  24.0ms |      24 | `0x3b15e4`  | `[kernel.kallsyms]` |
| 0.4% |  23.0ms |      23 | `0x2ab954`  | `[kernel.kallsyms]` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x1130c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 74.4% |   3.90s |   3,900 | `0x10144` | `binary` |
|  9.9% | 521.5ms |     521 | `0xf660`  | `binary` |
|  9.6% | 501.5ms |     501 | `0xf7d4`  | `binary` |
|  1.4% |  74.1ms |      74 | `0x100f0` | `binary` |
|  1.3% |  67.1ms |      67 | `0xf68c`  | `binary` |

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.24s |   5,239 | `0x1130c` | `binary` |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.24s |   5,239 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xdf70` (`binary`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.24s |   5,239 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10144` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 41.2% |   1.60s |   1,605 | `0x44b48` | `binary` |
| 38.8% |   1.51s |   1,515 | `0x45be0` | `binary` |
| 14.0% | 546.5ms |     546 | `0x368f8` | `binary` |
|  3.8% | 147.1ms |     147 | `0x45934` | `binary` |
|  0.7% |  29.0ms |      29 | `0x44e28` | `binary` |

##### `0x368f8` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 62.5% |   1.66s |   1,661 | `0x6449c` | `binary` |
| 29.2% | 775.8ms |     775 | `0x642d8` | `binary` |
| 24.0% | 637.6ms |     637 | `0x64480` | `binary` |
|  7.3% | 195.2ms |     195 | `0x642bc` | `binary` |
|  2.5% |  67.1ms |      67 | `0x64410` | `binary` |

##### `0x4aa18` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 58.6% |   1.24s |   1,248 | `0x383d0` | `binary` |
| 10.3% | 220.2ms |     220 | `0x366a8` | `binary` |
|  7.9% | 168.2ms |     168 | `0x36d98` | `binary` |
|  7.9% | 168.2ms |     168 | `0x36670` | `binary` |
|  6.8% | 145.1ms |     145 | `0x36b64` | `binary` |

##### `0x45be0` (`binary`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.9% | 2.01s |   2,008 | `0x368f8` | `binary` |
|  0.1% | 2.0ms |       2 | `0x35760` | `binary` |

##### `0x44b48` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 96.1% |  1.63s |   1,637 | `0x4aa18` | `binary` |
|  2.6% | 45.0ms |      45 | `0x4a1ac` | `binary` |
|  0.6% | 10.0ms |      10 | `0x4a2b8` | `binary` |
|  0.5% |  8.0ms |       8 | `0x4a944` | `binary` |
|  0.5% |  8.0ms |       8 | `0x4aa00` | `binary` |

##### `0x6449c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 30.6% | 508.5ms |     508 | `0x36b64` | `binary` |
| 22.8% | 379.4ms |     379 | `0x36ddc` | `binary` |
| 18.7% | 310.3ms |     310 | `0x36d98` | `binary` |
| 15.2% | 252.3ms |     252 | `0x36b90` | `binary` |
| 12.1% | 201.2ms |     201 | `0x36c2c` | `binary` |

##### `0x383d0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 71.4% |   1.15s |   1,158 | `0x537bc` | `binary` |
| 15.5% | 251.3ms |     251 | `0x53784` | `binary` |
|  7.7% | 125.1ms |     125 | `0x532e4` | `binary` |
|  3.1% |  51.1ms |      51 | `0x534a0` | `binary` |
|  2.9% |  47.0ms |      47 | `0x5373c` | `binary` |

##### `0x62fd4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.2% | 941.9ms |     941 | `0x53c28` | `binary` |
|  3.8% |  49.0ms |      49 | `0x433d0` | `binary` |
|  2.8% |  37.0ms |      37 | `0x53c64` | `binary` |
|  2.4% |  31.0ms |      31 | `0x53bb4` | `binary` |
|  2.0% |  26.0ms |      26 | `0x53c80` | `binary` |

##### `0x36b64` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 56.7% | 683.7ms |     683 | `0x66174` | `binary` |
| 27.8% | 335.3ms |     335 | `0x52280` | `binary` |
|  5.5% |  66.1ms |      66 | `0x66384` | `binary` |
|  2.4% |  29.0ms |      29 | `0x66148` | `binary` |
|  1.7% |  21.0ms |      21 | `0x661a4` | `binary` |

##### `0x537bc` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 57.7% | 668.7ms |     668 | `0x45be0` | `binary` |
| 39.7% | 460.5ms |     460 | `0x44b48` | `binary` |
| 10.4% | 121.1ms |     121 | `0x45934` | `binary` |
|  0.9% |  11.0ms |      11 | `0x368f8` | `binary` |
|  0.9% |  10.0ms |      10 | `0x44c90` | `binary` |

##### `0x53c28` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 15.8% | 171.2ms |     171 | `0x138f0` | `binary` |
| 10.6% | 115.1ms |     115 | `0x1392c` | `binary` |
|  9.7% | 105.1ms |     105 | `0x13910` | `binary` |
|  5.9% |  64.1ms |      64 | `0x1396c` | `binary` |
|  5.4% |  59.1ms |      59 | `0x1391c` | `binary` |

##### `0x642d8` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 23.0% | 178.2ms |     178 | `0x36ddc` | `binary` |
| 21.4% | 166.2ms |     166 | `0x383d0` | `binary` |
| 20.8% | 161.2ms |     161 | `0x36b64` | `binary` |
| 19.7% | 153.2ms |     153 | `0x36d98` | `binary` |
|  4.4% |  34.0ms |      34 | `0x36c2c` | `binary` |

##### `0x66174` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 28.9% | 203.2ms |     203 | `0x366a8` | `binary` |
| 12.5% |  88.1ms |      88 | `0x36670` | `binary` |
| 11.1% |  78.1ms |      78 | `0x36b64` | `binary` |
|  7.7% |  54.1ms |      54 | `0x466a0` | `binary` |
|  5.3% |  37.0ms |      37 | `0x364a4` | `binary` |

##### `0x36d98` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 79.1% | 536.5ms |     536 | `0x577ec` | `binary` |
| 24.9% | 169.2ms |     169 | `0x577a4` | `binary` |
|  3.2% |  22.0ms |      22 | `0x577d4` | `binary` |
|  1.0% |   7.0ms |       7 | `0x577c8` | `binary` |
|  0.1% |   1.0ms |       1 | `0x57790` | `binary` |

##### `0x58e54` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 73.7% | 481.5ms |     481 | `0x66a6c` | `binary` |
| 19.6% | 128.1ms |     128 | `0x66750` | `binary` |
| 12.1% |  79.1ms |      79 | `0x368f8` | `binary` |
|  8.7% |  57.1ms |      57 | `0x36ddc` | `binary` |
|  2.3% |  15.0ms |      15 | `0x36d98` | `binary` |

##### `0x3695c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 43.4% | 282.3ms |     282 | `0x368f8` | `binary` |
| 18.6% | 121.1ms |     121 | `0x383d0` | `binary` |
|  7.5% |  49.0ms |      49 | `0x57e4c` | `binary` |
|  7.4% |  48.0ms |      48 | `0x36d98` | `binary` |
|  5.5% |  36.0ms |      36 | `0x57c58` | `binary` |

##### `0x64480` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 75.0% | 478.5ms |     478 | `0x4aa18` | `binary` |
| 10.0% |  64.1ms |      64 | `0x4a1ac` | `binary` |
|  6.0% |  38.0ms |      38 | `0x4a2b8` | `binary` |
|  2.5% |  16.0ms |      16 | `0x4a944` | `binary` |
|  1.6% |  10.0ms |      10 | `0x4a110` | `binary` |

##### `0x66a6c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 92.9% | 580.6ms |     580 | `0x368f8` | `binary` |
|  2.6% |  16.0ms |      16 | `0x36d98` | `binary` |
|  2.4% |  15.0ms |      15 | `0x36b64` | `binary` |
|  1.0% |   6.0ms |       6 | `0x3684c` | `binary` |
|  0.6% |   4.0ms |       4 | `0x466a0` | `binary` |

##### `0x15a0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 64.3% | 74.1ms |      74 | `0x14b33a0` | `[kernel.kallsyms]` |
| 35.7% | 41.0ms |      41 | `0x14b33d0` | `[kernel.kallsyms]` |

##### `0x9e670` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee   | Location            |
| ----: | -----: | ------: | -------- | ------------------- |
| 34.9% | 30.0ms |      30 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x14b33a0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 89.2% | 66.1ms |      66 | `0x14b23c0` | `[kernel.kallsyms]` |
|  8.1% |  6.0ms |       6 | `0x14b23b8` | `[kernel.kallsyms]` |
|  2.7% |  2.0ms |       2 | `0x14b241c` | `[kernel.kallsyms]` |

##### `0x2ed74` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee    | Location            |
| ----: | -----: | ------: | --------- | ------------------- |
| 98.5% | 65.1ms |      65 | `0x2ecb8` | `[kernel.kallsyms]` |
|  1.5% |  1.0ms |       1 | `0x2ecac` | `[kernel.kallsyms]` |

##### `0x14b23c0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee    | Location            |
| -----: | -----: | ------: | --------- | ------------------- |
| 100.0% | 66.1ms |      66 | `0x2ed74` | `[kernel.kallsyms]` |

##### `0x2ecb8` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 40.0% | 26.0ms |      26 | `0x3b4878` | `[kernel.kallsyms]` |
| 24.6% | 16.0ms |      16 | `0x3b0d78` | `[kernel.kallsyms]` |
| 20.0% | 13.0ms |      13 | `0x31b744` | `[kernel.kallsyms]` |
|  6.2% |  4.0ms |       4 | `0x3add78` | `[kernel.kallsyms]` |
|  4.6% |  3.0ms |       3 | `0x3d1ba4` | `[kernel.kallsyms]` |

##### `0x14b33d0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 87.8% | 36.0ms |      36 | `0x14b2ab4` | `[kernel.kallsyms]` |
| 12.2% |  5.0ms |       5 | `0x14b2aac` | `[kernel.kallsyms]` |

##### `0x14b2ab4` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee    | Location            |
| ----: | -----: | ------: | --------- | ------------------- |
| 97.2% | 35.0ms |      35 | `0x36870` | `[kernel.kallsyms]` |
|  2.8% |  1.0ms |       1 | `0x368a4` | `[kernel.kallsyms]` |

##### `0x14c6048` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 94.3% | 33.0ms |      33 | `0x315eb8` | `[kernel.kallsyms]` |
|  2.9% |  1.0ms |       1 | `0x315fe0` | `[kernel.kallsyms]` |
|  2.9% |  1.0ms |       1 | `0x315f78` | `[kernel.kallsyms]` |

##### `0x14c6678` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee      | Location            |
| -----: | -----: | ------: | ----------- | ------------------- |
| 100.0% | 35.0ms |      35 | `0x14c6048` | `[kernel.kallsyms]` |

##### `0x36870` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee      | Location            |
| -----: | -----: | ------: | ----------- | ------------------- |
| 100.0% | 35.0ms |      35 | `0x14c6678` | `[kernel.kallsyms]` |

##### `0x315eb8` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 42.4% | 14.0ms |      14 | `0x315724` | `[kernel.kallsyms]` |
| 15.2% |  5.0ms |       5 | `0x3158e0` | `[kernel.kallsyms]` |
| 12.1% |  4.0ms |       4 | `0x315708` | `[kernel.kallsyms]` |
|  9.1% |  3.0ms |       3 | `0x3158d0` | `[kernel.kallsyms]` |
|  6.1% |  2.0ms |       2 | `0x3157e4` | `[kernel.kallsyms]` |

##### `0xddb88` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee   | Location            |
| ----: | -----: | ------: | -------- | ------------------- |
| 96.6% | 28.0ms |      28 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x3b47b4` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 96.2% | 25.0ms |      25 | `0x3b3c5c` | `[kernel.kallsyms]` |
|  3.8% |  1.0ms |       1 | `0x3b3a44` | `[kernel.kallsyms]` |

##### `0x3b4878` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 26.0ms |      26 | `0x3b47b4` | `[kernel.kallsyms]` |

##### `0x3b1aa0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 96.0% | 24.0ms |      24 | `0x3b15e4` | `[kernel.kallsyms]` |
|  4.0% |  1.0ms |       1 | `0x3b1488` | `[kernel.kallsyms]` |

##### `0x44a7e0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 25.0ms |      25 | `0x3b1aa0` | `[kernel.kallsyms]` |

##### `0x7768d0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 25.0ms |      25 | `0x44a7e0` | `[kernel.kallsyms]` |

##### `0x3b3c5c` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 25.0ms |      25 | `0x7768d0` | `[kernel.kallsyms]` |

##### `0x4cb8b8` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 95.8% | 23.0ms |      23 | `0x2ab954` | `[kernel.kallsyms]` |
|  4.2% |  1.0ms |       1 | `0x2ab528` | `[kernel.kallsyms]` |

##### `0x3b15e4` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 24.0ms |      24 | `0x4cb8b8` | `[kernel.kallsyms]` |

##### `0x2ab954` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 87.0% | 20.0ms |      20 | `0x2ab6f8`  | `[kernel.kallsyms]` |
|  4.3% |  1.0ms |       1 | `0x2ab7f4`  | `[kernel.kallsyms]` |
|  4.3% |  1.0ms |       1 | `0x1486000` | `[kernel.kallsyms]` |
|  4.3% |  1.0ms |       1 | `0x2ab618`  | `[kernel.kallsyms]` |

##### `0xdda44` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee   | Location            |
| -----: | -----: | ------: | -------- | ------------------- |
| 100.0% | 21.0ms |      21 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x92a9c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                                 |
| ----: | -----: | ------: | --------- | ---------------------------------------- |
| 70.6% | 12.0ms |      12 | `0x90240` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x900c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x8fcb4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x8fc74` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.9% |  1.0ms |       1 | `0x8fccc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xe3acc` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee   | Location            |
| -----: | -----: | ------: | -------- | ------------------- |
| 100.0% | 13.0ms |      13 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x8f988` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee    | Location                                 |
| -----: | -----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 13.0ms |      13 | `0xe3acc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9e674` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee   | Location            |
| ----: | -----: | ------: | -------- | ------------------- |
| 83.3% | 10.0ms |      10 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x8fa48` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee    | Location                                 |
| -----: | -----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 12.0ms |      12 | `0x8f988` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90240` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Callee    | Location                                 |
| -----: | -----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 12.0ms |      12 | `0x8fa48` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9405c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 88.9% | 8.0ms |       8 | `0x9245c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% | 1.0ms |       1 | `0x9240c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9245c` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                                 |
| ----: | ----: | ------: | --------- | ---------------------------------------- |
| 25.0% | 2.0ms |       2 | `0x9189c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 1.0ms |       1 | `0x914e8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 1.0ms |       1 | `0x91234` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 1.0ms |       1 | `0x90d9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 1.0ms |       1 | `0x90ba0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xde3c8` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location            |
| -----: | ----: | ------: | -------- | ------------------- |
| 100.0% | 6.0ms |       6 | `0x15a0` | `[kernel.kallsyms]` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x1130c` (`binary`) ← `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0xdf70` (`binary`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                               |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 33.0ms |      33 | `0x131a4` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.6% | 33.0ms |      33 | `0x1392c` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.6% | 32.0ms |      32 | `0x138f0` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.5% | 27.0ms |      27 | `0x9d200` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xf68c` (`binary`)                                                                                                                                                                                                                                                               |
| 0.5% | 25.0ms |      25 | `0x131b0` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.4% | 23.0ms |      23 | `0x138c8` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.4% | 22.0ms |      22 | `0x13194` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.4% | 20.0ms |      20 | `0x13910` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.3% | 17.0ms |      17 | `0x138fc` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.3% | 16.0ms |      16 | `0x139a8` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.3% | 15.0ms |      15 | `0x1391c` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.3% | 15.0ms |      15 | `0x13904` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.3% | 14.0ms |      14 | `0x140b0` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.2% | 11.0ms |      11 | `0x1396c` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.2% | 11.0ms |      11 | `0x11f14` (`binary`) ← `0xf68c`                                                                                                                                                                                                                                                                                                          |
| 0.2% | 11.0ms |      11 | `0x13978` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.2% | 10.0ms |      10 | `0x13f34` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.2% | 10.0ms |      10 | `0x9e670` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xf75c` (`binary`)                                                                                                                                                                                                                                                               |
| 0.2% |  9.0ms |       9 | `0x13818` (`binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                          |
| 0.2% |  9.0ms |       9 | `0x14837cc` (`[kernel.kallsyms]`) ← `0xb54524` ← `0x2ab6f8` ← `0x2ab954` ← `0x4cb8b8` ← `0x3b15e4` ← `0x3b1aa0` ← `0x44a7e0` ← `0x7768d0` ← `0x3b3c5c` ← `0x3b47b4` ← `0x3b4878` ← `0x2ecb8` ← `0x2ed74` ← `0x14b23c0` ← `0x14b33a0` ← `0x15a0` ← `0xddb88` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x11b0c` (`binary`) ← `0xf1e0` |

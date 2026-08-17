# CPU profile

Took 5.78s over 5,781 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 97.7% |  5.65s |   5,648 |
| Kernel   |  1.6% | 91.1ms |      91 |
| Native   |  0.7% | 42.0ms |      42 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|    % |    Time | Samples | Function  | Location |
| ---: | ------: | ------: | --------- | -------- |
| 5.7% | 330.3ms |     330 | `0x9a704` | `binary` |
| 2.9% | 167.2ms |     167 | `0x70014` | `binary` |
| 1.8% | 102.1ms |     102 | `0x70050` | `binary` |
| 1.5% |  86.1ms |      86 | `0x70034` | `binary` |
| 1.3% |  77.1ms |      77 | `0x70040` | `binary` |
| 1.2% |  69.1ms |      69 | `0x70090` | `binary` |
| 1.1% |  66.1ms |      66 | `0x6f6c4` | `binary` |
| 1.1% |  63.1ms |      63 | `0x700cc` | `binary` |
| 1.1% |  63.1ms |      63 | `0x70918` | `binary` |
| 1.0% |  59.1ms |      59 | `0x70020` | `binary` |
| 0.9% |  54.1ms |      54 | `0x70028` | `binary` |
| 0.9% |  53.1ms |      53 | `0x7009c` | `binary` |
| 0.9% |  52.1ms |      52 | `0x674a0` | `binary` |
| 0.9% |  50.1ms |      50 | `0x700b4` | `binary` |
| 0.8% |  45.0ms |      45 | `0x6f798` | `binary` |
| 0.8% |  44.0ms |      44 | `0x6f6f4` | `binary` |
| 0.7% |  42.0ms |      42 | `0x7b36c` | `binary` |
| 0.7% |  40.0ms |      40 | `0x6f844` | `binary` |
| 0.6% |  37.0ms |      37 | `0x700d4` | `binary` |
| 0.6% |  36.0ms |      36 | `0x6f834` | `binary` |

##### Kernel

|     % |   Time | Samples | Function    | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
|  0.2% | 11.0ms |      11 | `0x12e138c` | `[kernel.kallsyms]` |
|  0.1% |  5.0ms |       5 | `0x33b7a4`  | `[kernel.kallsyms]` |
|  0.1% |  5.0ms |       5 | `0x1327fb8` | `[kernel.kallsyms]` |
|  0.1% |  4.0ms |       4 | `0x12e137c` | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x132858c` | `[kernel.kallsyms]` |
|  0.1% |  3.0ms |       3 | `0x12e0de4` | `[kernel.kallsyms]` |
| <0.1% |  2.0ms |       2 | `0x26b840`  | `[kernel.kallsyms]` |
| <0.1% |  2.0ms |       2 | `0x33a3dc`  | `[kernel.kallsyms]` |
| <0.1% |  2.0ms |       2 | `0x12e1370` | `[kernel.kallsyms]` |
| <0.1% |  2.0ms |       2 | `0x333114`  | `[kernel.kallsyms]` |
| <0.1% |  2.0ms |       2 | `0x35c7e0`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x2f16f8`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x347ff8`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x6b2440`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x2e0228`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x2cb528`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x12e39e0` | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x28f370`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x33a3f8`  | `[kernel.kallsyms]` |
| <0.1% |  1.0ms |       1 | `0x37f358`  | `[kernel.kallsyms]` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x9a704` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 57.3% | 189.2ms |     189 | `0x90450` | `binary` |
| 29.4% |  97.1ms |      97 | `0x906b4` | `binary` |
|  3.3% |  11.0ms |      11 | `0x16d70` | `binary` |
|  2.4% |   8.0ms |       8 | `0x54d64` | `binary` |
|  1.5% |   5.0ms |       5 | `0x8ae5c` | `binary` |

##### `0x70014` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 79.0% | 132.1ms |     132 | `0x6f75c` | `binary` |
| 21.0% |  35.0ms |      35 | `0x14f10` | `binary` |

##### `0x70050` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 63.7% | 65.1ms |      65 | `0x6f75c` | `binary` |
| 36.3% | 37.0ms |      37 | `0x14f10` | `binary` |

##### `0x70034` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 75.6% | 65.1ms |      65 | `0x6f75c` | `binary` |
| 24.4% | 21.0ms |      21 | `0x14f10` | `binary` |

##### `0x70040` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 77.9% | 60.1ms |      60 | `0x6f75c` | `binary` |
| 22.1% | 17.0ms |      17 | `0x14f10` | `binary` |

##### `0x70090` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 82.6% | 57.1ms |      57 | `0x6f75c` | `binary` |
| 17.4% | 12.0ms |      12 | `0x14f10` | `binary` |

##### `0x6f6c4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 31.8% | 21.0ms |      21 | `0x7cd84` | `binary` |
| 13.6% |  9.0ms |       9 | `0x7d0a8` | `binary` |
|  7.6% |  5.0ms |       5 | `0x7c504` | `binary` |
|  6.1% |  4.0ms |       4 | `0x5d714` | `binary` |
|  4.5% |  3.0ms |       3 | `0x75014` | `binary` |

##### `0x700cc` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 63.5% | 40.0ms |      40 | `0x6f75c` | `binary` |
| 36.5% | 23.0ms |      23 | `0x14f10` | `binary` |

##### `0x70918` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 76.2% | 48.0ms |      48 | `0x674d4` | `binary` |
| 22.2% | 14.0ms |      14 | `0x79dc4` | `binary` |
|  1.6% |  1.0ms |       1 | `0x60bf8` | `binary` |

##### `0x70020` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 69.5% | 41.0ms |      41 | `0x6f75c` | `binary` |
| 30.5% | 18.0ms |      18 | `0x14f10` | `binary` |

##### `0x70028` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 77.8% | 42.0ms |      42 | `0x6f75c` | `binary` |
| 22.2% | 12.0ms |      12 | `0x14f10` | `binary` |

##### `0x7009c` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 88.7% | 47.0ms |      47 | `0x6f75c` | `binary` |
| 11.3% |  6.0ms |       6 | `0x14f10` | `binary` |

##### `0x674a0` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 23.1% | 12.0ms |      12 | `0x75014` | `binary` |
| 17.3% |  9.0ms |       9 | `0x7cd84` | `binary` |
|  7.7% |  4.0ms |       4 | `0x694e0` | `binary` |
|  5.8% |  3.0ms |       3 | `0x6a8f8` | `binary` |
|  5.8% |  3.0ms |       3 | `0x77768` | `binary` |

##### `0x700b4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 62.0% | 31.0ms |      31 | `0x6f75c` | `binary` |
| 38.0% | 19.0ms |      19 | `0x14f10` | `binary` |

##### `0x6f798` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 80.0% | 36.0ms |      36 | `0x674d4` | `binary` |
| 20.0% |  9.0ms |       9 | `0x79dc4` | `binary` |

##### `0x6f6f4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 79.5% | 35.0ms |      35 | `0x674d4` | `binary` |
| 18.2% |  8.0ms |       8 | `0x79dc4` | `binary` |
|  2.3% |  1.0ms |       1 | `0x60f78` | `binary` |

##### `0x7b36c` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 21.4% | 9.0ms |       9 | `0x5f554` | `binary` |
| 21.4% | 9.0ms |       9 | `0x6a110` | `binary` |
| 19.0% | 8.0ms |       8 | `0x69c74` | `binary` |
|  7.1% | 3.0ms |       3 | `0x66f08` | `binary` |
|  4.8% | 2.0ms |       2 | `0x6df94` | `binary` |

##### `0x6f844` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 62.5% | 25.0ms |      25 | `0x14f10` | `binary` |
| 37.5% | 15.0ms |      15 | `0x6f75c` | `binary` |

##### `0x700d4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 78.4% | 29.0ms |      29 | `0x6f75c` | `binary` |
| 21.6% |  8.0ms |       8 | `0x14f10` | `binary` |

##### `0x6f834` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 72.2% | 26.0ms |      26 | `0x14f10` | `binary` |
| 27.8% | 10.0ms |      10 | `0x6f75c` | `binary` |

##### `0x12e138c` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Caller     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 11.0ms |      11 | `0xa2545c` | `[kernel.kallsyms]` |

##### `0x33b7a4` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 5.0ms |       5 | `0x2b919c` | `[kernel.kallsyms]` |

##### `0x1327fb8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 5.0ms |       5 | `0x1328e88` | `[kernel.kallsyms]` |

##### `0x12e137c` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 4.0ms |       4 | `0xa2545c` | `[kernel.kallsyms]` |

##### `0x132858c` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x1328e1c` | `[kernel.kallsyms]` |

##### `0x12e0de4` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x2e3ffc` | `[kernel.kallsyms]` |

##### `0x26b840` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x26baf8` | `[kernel.kallsyms]` |

##### `0x33a3dc` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x33b7a4` | `[kernel.kallsyms]` |

##### `0x12e1370` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0xa2545c` | `[kernel.kallsyms]` |

##### `0x333114` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x33b7a4` | `[kernel.kallsyms]` |

##### `0x35c7e0` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x362da8` | `[kernel.kallsyms]` |

##### `0x2f16f8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x34e088` | `[kernel.kallsyms]` |

##### `0x347ff8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x3630d4` | `[kernel.kallsyms]` |

##### `0x6b2440` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x6b2578` | `[kernel.kallsyms]` |

##### `0x2e0228` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x2e28d4` | `[kernel.kallsyms]` |

##### `0x2cb528` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x2b9940` | `[kernel.kallsyms]` |

##### `0x12e39e0` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x3484f8` | `[kernel.kallsyms]` |

##### `0x28f370` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x2c9758` | `[kernel.kallsyms]` |

##### `0x33a3f8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x33b7a4` | `[kernel.kallsyms]` |

##### `0x37f358` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x37f694` | `[kernel.kallsyms]` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function  | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% |   5.78s |   5,781 | `0x16900` | `binary`                                 |
| 100.0% |   5.78s |   5,781 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.78s |   5,781 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.78s |   5,781 | `0x13e30` | `binary`                                 |
|  71.0% |   4.10s |   4,105 | `0x15964` | `binary`                                 |
|  47.7% |   2.75s |   2,755 | `0x5eff4` | `binary`                                 |
|  40.7% |   2.35s |   2,355 | `0x78ff4` | `binary`                                 |
|  36.5% |   2.11s |   2,112 | `0x672f0` | `binary`                                 |
|  36.4% |   2.10s |   2,104 | `0x6639c` | `binary`                                 |
|  30.9% |   1.78s |   1,787 | `0x6503c` | `binary`                                 |
|  29.9% |   1.72s |   1,727 | `0x61a90` | `binary`                                 |
|  22.0% |   1.27s |   1,271 | `0x71d44` | `binary`                                 |
|  20.4% |   1.18s |   1,182 | `0x674d4` | `binary`                                 |
|  19.7% |   1.13s |   1,137 | `0x61f50` | `binary`                                 |
|  17.3% | 999.0ms |     998 | `0x6f75c` | `binary`                                 |
|  15.8% | 912.9ms |     912 | `0x672d4` | `binary`                                 |
|  15.3% | 882.9ms |     882 | `0x6a0c8` | `binary`                                 |
|  12.7% | 735.7ms |     735 | `0x6aea0` | `binary`                                 |
|  12.1% | 702.7ms |     702 | `0x5ebe0` | `binary`                                 |
|  11.8% | 685.7ms |     685 | `0x6944c` | `binary`                                 |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% |   5.78s |   5,781 | `0x16900` | `binary` |
| 100.0% |   5.78s |   5,781 | `0x13e30` | `binary` |
|  71.0% |   4.10s |   4,105 | `0x15964` | `binary` |
|  47.7% |   2.75s |   2,755 | `0x5eff4` | `binary` |
|  40.7% |   2.35s |   2,355 | `0x78ff4` | `binary` |
|  36.5% |   2.11s |   2,112 | `0x672f0` | `binary` |
|  36.4% |   2.10s |   2,104 | `0x6639c` | `binary` |
|  30.9% |   1.78s |   1,787 | `0x6503c` | `binary` |
|  29.9% |   1.72s |   1,727 | `0x61a90` | `binary` |
|  22.0% |   1.27s |   1,271 | `0x71d44` | `binary` |
|  20.4% |   1.18s |   1,182 | `0x674d4` | `binary` |
|  19.7% |   1.13s |   1,137 | `0x61f50` | `binary` |
|  17.3% | 999.0ms |     998 | `0x6f75c` | `binary` |
|  15.8% | 912.9ms |     912 | `0x672d4` | `binary` |
|  15.3% | 882.9ms |     882 | `0x6a0c8` | `binary` |
|  12.7% | 735.7ms |     735 | `0x6aea0` | `binary` |
|  12.1% | 702.7ms |     702 | `0x5ebe0` | `binary` |
|  11.8% | 685.7ms |     685 | `0x6944c` | `binary` |
|  11.8% | 683.7ms |     683 | `0x5e5a4` | `binary` |
|  10.7% | 621.6ms |     621 | `0x68820` | `binary` |

##### Kernel

|    % |   Time | Samples | Function    | Location            |
| ---: | -----: | ------: | ----------- | ------------------- |
| 1.6% | 91.1ms |      91 | `0x14d0`    | `[kernel.kallsyms]` |
| 1.1% | 62.1ms |      62 | `0x1328e88` | `[kernel.kallsyms]` |
| 1.0% | 56.1ms |      56 | `0x12d6c`   | `[kernel.kallsyms]` |
| 1.0% | 56.1ms |      56 | `0x1327fc0` | `[kernel.kallsyms]` |
| 1.0% | 55.1ms |      55 | `0x12c98`   | `[kernel.kallsyms]` |
| 0.5% | 29.0ms |      29 | `0x1328e1c` | `[kernel.kallsyms]` |
| 0.4% | 26.0ms |      26 | `0x1337320` | `[kernel.kallsyms]` |
| 0.4% | 26.0ms |      26 | `0x1a2f0`   | `[kernel.kallsyms]` |
| 0.4% | 26.0ms |      26 | `0x1328594` | `[kernel.kallsyms]` |
| 0.4% | 25.0ms |      25 | `0x34909c`  | `[kernel.kallsyms]` |
| 0.4% | 25.0ms |      25 | `0x349b08`  | `[kernel.kallsyms]` |
| 0.4% | 25.0ms |      25 | `0x34a030`  | `[kernel.kallsyms]` |
| 0.4% | 25.0ms |      25 | `0x1336ec8` | `[kernel.kallsyms]` |
| 0.4% | 24.0ms |      24 | `0x6b4390`  | `[kernel.kallsyms]` |
| 0.4% | 24.0ms |      24 | `0x2b9940`  | `[kernel.kallsyms]` |
| 0.4% | 23.0ms |      23 | `0x25c5d4`  | `[kernel.kallsyms]` |
| 0.4% | 23.0ms |      23 | `0x44ab98`  | `[kernel.kallsyms]` |
| 0.4% | 23.0ms |      23 | `0x34955c`  | `[kernel.kallsyms]` |
| 0.4% | 23.0ms |      23 | `0x3db354`  | `[kernel.kallsyms]` |
| 0.3% | 19.0ms |      19 | `0xa2545c`  | `[kernel.kallsyms]` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x16900` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 71.0% |   4.10s |   4,105 | `0x15964` | `binary` |
|  9.9% | 573.6ms |     573 | `0x14f10` | `binary` |
|  9.6% | 554.6ms |     554 | `0x150ac` | `binary` |
|  3.5% | 202.2ms |     202 | `0x15034` | `binary` |
|  1.3% |  73.1ms |      73 | `0x158e8` | `binary` |

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.78s |   5,781 | `0x16900` | `binary` |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.78s |   5,781 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x13e30` (`binary`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.78s |   5,781 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x15964` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 41.0% |   1.68s |   1,684 | `0x6503c` | `binary` |
| 39.3% |   1.61s |   1,612 | `0x6639c` | `binary` |
| 13.1% | 538.5ms |     538 | `0x5eff4` | `binary` |
|  4.9% | 201.2ms |     201 | `0x6627c` | `binary` |
|  0.5% |  19.0ms |      19 | `0x65330` | `binary` |

##### `0x5eff4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 76.7% |   2.11s |   2,112 | `0x672f0` | `binary` |
| 33.1% | 912.9ms |     912 | `0x672d4` | `binary` |
|  1.3% |  35.0ms |      35 | `0x6716c` | `binary` |
|  1.0% |  28.0ms |      28 | `0x673a8` | `binary` |
|  0.7% |  20.0ms |      20 | `0x67160` | `binary` |

##### `0x78ff4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 57.5% |   1.35s |   1,355 | `0x61a90` | `binary` |
| 12.1% | 286.3ms |     286 | `0x60bf8` | `binary` |
|  7.9% | 187.2ms |     187 | `0x61f50` | `binary` |
|  7.6% | 180.2ms |     180 | `0x60c90` | `binary` |
|  7.6% | 178.2ms |     178 | `0x5eff4` | `binary` |

##### `0x672f0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 25.2% | 532.5ms |     532 | `0x5e9c0` | `binary` |
| 24.7% | 521.5ms |     521 | `0x61f50` | `binary` |
| 21.5% | 454.5ms |     454 | `0x5ebe0` | `binary` |
| 15.4% | 326.3ms |     326 | `0x5e828` | `binary` |
| 12.8% | 271.3ms |     271 | `0x61a90` | `binary` |

##### `0x6639c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 99.1% |  2.08s |   2,086 | `0x5eff4` | `binary` |
|  0.6% | 12.0ms |      12 | `0x5efd4` | `binary` |
|  0.2% |  5.0ms |       5 | `0x5e6dc` | `binary` |
|  0.1% |  2.0ms |       2 | `0x5efa0` | `binary` |
| <0.1% |  1.0ms |       1 | `0x5ee0c` | `binary` |

##### `0x6503c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.9% |  1.75s |   1,749 | `0x78ff4` | `binary` |
|  1.7% | 30.0ms |      30 | `0x782ec` | `binary` |
|  0.8% | 15.0ms |      15 | `0x783f4` | `binary` |
|  0.4% |  7.0ms |       7 | `0x7821c` | `binary` |
|  0.3% |  5.0ms |       5 | `0x781e8` | `binary` |

##### `0x61a90` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 73.6% |   1.27s |   1,271 | `0x71d44` | `binary` |
| 14.4% | 249.2ms |     249 | `0x71cf8` | `binary` |
| 10.0% | 172.2ms |     172 | `0x7197c` | `binary` |
|  3.1% |  54.1ms |      54 | `0x71b24` | `binary` |
|  3.0% |  52.1ms |      52 | `0x71c40` | `binary` |

##### `0x71d44` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 53.4% | 679.7ms |     679 | `0x6639c` | `binary` |
| 43.7% | 556.6ms |     556 | `0x6503c` | `binary` |
| 11.3% | 144.1ms |     144 | `0x6627c` | `binary` |
|  0.9% |  12.0ms |      12 | `0x5eff4` | `binary` |
|  0.7% |   9.0ms |       9 | `0x651bc` | `binary` |

##### `0x674d4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 68.8% | 813.8ms |     813 | `0x6f75c` | `binary` |
|  4.1% |  48.0ms |      48 | `0x70918` | `binary` |
|  3.0% |  36.0ms |      36 | `0x6f798` | `binary` |
|  3.0% |  35.0ms |      35 | `0x6f6f4` | `binary` |
|  2.4% |  28.0ms |      28 | `0x6f720` | `binary` |

##### `0x61f50` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 76.1% | 865.9ms |     865 | `0x6a0c8` | `binary` |
|  6.4% |  73.1ms |      73 | `0x6a31c` | `binary` |
|  3.6% |  41.0ms |      41 | `0x6a18c` | `binary` |
|  2.4% |  27.0ms |      27 | `0x6a088` | `binary` |
|  2.2% |  25.0ms |      25 | `0x69c74` | `binary` |

##### `0x6f75c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 13.2% | 132.1ms |     132 | `0x70014` | `binary` |
|  6.5% |  65.1ms |      65 | `0x70050` | `binary` |
|  6.5% |  65.1ms |      65 | `0x70034` | `binary` |
|  6.0% |  60.1ms |      60 | `0x70040` | `binary` |
|  5.7% |  57.1ms |      57 | `0x70090` | `binary` |

##### `0x672d4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 80.3% | 732.7ms |     732 | `0x78ff4` | `binary` |
|  6.6% |  60.1ms |      60 | `0x782ec` | `binary` |
|  5.4% |  49.0ms |      49 | `0x783f4` | `binary` |
|  1.2% |  11.0ms |      11 | `0x781e8` | `binary` |
|  1.2% |  11.0ms |      11 | `0x78200` | `binary` |

##### `0x6a0c8` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 25.7% | 227.2ms |     227 | `0x60bf8` | `binary` |
| 12.8% | 113.1ms |     113 | `0x60c90` | `binary` |
| 11.3% | 100.1ms |     100 | `0x61f50` | `binary` |
|  5.7% |  50.1ms |      50 | `0x5f5d4` | `binary` |
|  4.5% |  40.0ms |      40 | `0x5dfd8` | `binary` |

##### `0x6aea0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.9% | 536.5ms |     536 | `0x6944c` | `binary` |
| 19.7% | 145.1ms |     145 | `0x695b4` | `binary` |
|  9.1% |  67.1ms |      67 | `0x5eff4` | `binary` |
|  7.2% |  53.1ms |      53 | `0x5e9c0` | `binary` |
|  3.7% |  27.0ms |      27 | `0x5ebe0` | `binary` |

##### `0x5ebe0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 81.6% | 573.6ms |     573 | `0x6c3fc` | `binary` |
| 25.4% | 178.2ms |     178 | `0x6c384` | `binary` |
|  1.4% |  10.0ms |      10 | `0x6c3e4` | `binary` |
|  0.6% |   4.0ms |       4 | `0x6c3d8` | `binary` |
|  0.3% |   2.0ms |       2 | `0x6c40c` | `binary` |

##### `0x6944c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 91.4% | 626.6ms |     626 | `0x5eff4` | `binary` |
|  4.5% |  31.0ms |      31 | `0x5ebe0` | `binary` |
|  1.6% |  11.0ms |      11 | `0x61f50` | `binary` |
|  0.6% |   4.0ms |       4 | `0x5efd4` | `binary` |
|  0.6% |   4.0ms |       4 | `0x5e9c0` | `binary` |

##### `0x5e5a4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 46.3% | 316.3ms |     316 | `0x5eff4` | `binary` |
| 15.7% | 107.1ms |     107 | `0x61a90` | `binary` |
|  8.5% |  58.1ms |      58 | `0x6b878` | `binary` |
|  7.9% |  54.1ms |      54 | `0x5ebe0` | `binary` |
|  5.9% |  40.0ms |      40 | `0x61f50` | `binary` |

##### `0x68820` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.6% | 513.5ms |     513 | `0x6aea0` | `binary` |
| 18.7% | 116.1ms |     116 | `0x6a948` | `binary` |
|  1.0% |   6.0ms |       6 | `0x6a86c` | `binary` |
|  0.8% |   5.0ms |       5 | `0x6a884` | `binary` |
|  0.6% |   4.0ms |       4 | `0x6a8f8` | `binary` |

##### `0x14d0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 68.1% | 62.1ms |      62 | `0x1328e88` | `[kernel.kallsyms]` |
| 31.9% | 29.0ms |      29 | `0x1328e1c` | `[kernel.kallsyms]` |

##### `0x1328e88` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 90.3% | 56.1ms |      56 | `0x1327fc0` | `[kernel.kallsyms]` |
|  8.1% |  5.0ms |       5 | `0x1327fb8` | `[kernel.kallsyms]` |
|  1.6% |  1.0ms |       1 | `0x1327ffc` | `[kernel.kallsyms]` |

##### `0x12d6c` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee    | Location            |
| ----: | -----: | ------: | --------- | ------------------- |
| 98.2% | 55.1ms |      55 | `0x12c98` | `[kernel.kallsyms]` |
|  1.8% |  1.0ms |       1 | `0x12c8c` | `[kernel.kallsyms]` |

##### `0x1327fc0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee    | Location            |
| -----: | -----: | ------: | --------- | ------------------- |
| 100.0% | 56.1ms |      56 | `0x12d6c` | `[kernel.kallsyms]` |

##### `0x12c98` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 45.5% | 25.0ms |      25 | `0x34a030` | `[kernel.kallsyms]` |
| 25.5% | 14.0ms |      14 | `0x348888` | `[kernel.kallsyms]` |
| 12.7% |  7.0ms |       7 | `0x369124` | `[kernel.kallsyms]` |
|  5.5% |  3.0ms |       3 | `0x2bfd60` | `[kernel.kallsyms]` |
|  3.6% |  2.0ms |       2 | `0x3456d0` | `[kernel.kallsyms]` |

##### `0x1328e1c` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 89.7% | 26.0ms |      26 | `0x1328594` | `[kernel.kallsyms]` |
| 10.3% |  3.0ms |       3 | `0x132858c` | `[kernel.kallsyms]` |

##### `0x1337320` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 96.2% | 25.0ms |      25 | `0x1336ec8` | `[kernel.kallsyms]` |
|  3.8% |  1.0ms |       1 | `0x1336e98` | `[kernel.kallsyms]` |

##### `0x1a2f0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee      | Location            |
| -----: | -----: | ------: | ----------- | ------------------- |
| 100.0% | 26.0ms |      26 | `0x1337320` | `[kernel.kallsyms]` |

##### `0x1328594` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee    | Location            |
| -----: | -----: | ------: | --------- | ------------------- |
| 100.0% | 26.0ms |      26 | `0x1a2f0` | `[kernel.kallsyms]` |

##### `0x34909c` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 96.0% | 24.0ms |      24 | `0x6b4390` | `[kernel.kallsyms]` |
| 92.0% | 23.0ms |      23 | `0x44ab98` | `[kernel.kallsyms]` |
|  4.0% |  1.0ms |       1 | `0x6b4364` | `[kernel.kallsyms]` |

##### `0x349b08` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 25.0ms |      25 | `0x34909c` | `[kernel.kallsyms]` |

##### `0x34a030` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 25.0ms |      25 | `0x349b08` | `[kernel.kallsyms]` |

##### `0x1336ec8` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 96.0% | 24.0ms |      24 | `0x2b9940` | `[kernel.kallsyms]` |
|  4.0% |  1.0ms |       1 | `0x2b9980` | `[kernel.kallsyms]` |

##### `0x6b4390` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 95.8% | 23.0ms |      23 | `0x3db354` | `[kernel.kallsyms]` |
|  4.2% |  1.0ms |       1 | `0x3db2f4` | `[kernel.kallsyms]` |

##### `0x2b9940` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 54.2% | 13.0ms |      13 | `0x2b919c` | `[kernel.kallsyms]` |
| 20.8% |  5.0ms |       5 | `0x2b9180` | `[kernel.kallsyms]` |
| 12.5% |  3.0ms |       3 | `0x2b9310` | `[kernel.kallsyms]` |
|  4.2% |  1.0ms |       1 | `0x2cb528` | `[kernel.kallsyms]` |
|  4.2% |  1.0ms |       1 | `0x2b9300` | `[kernel.kallsyms]` |

##### `0x25c5d4` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 82.6% | 19.0ms |      19 | `0x25b2c0` | `[kernel.kallsyms]` |
| 13.0% |  3.0ms |       3 | `0x25b1e0` | `[kernel.kallsyms]` |
|  4.3% |  1.0ms |       1 | `0x25b240` | `[kernel.kallsyms]` |

##### `0x44ab98` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 23.0ms |      23 | `0x25c5d4` | `[kernel.kallsyms]` |

##### `0x34955c` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 23.0ms |      23 | `0x34909c` | `[kernel.kallsyms]` |

##### `0x3db354` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 23.0ms |      23 | `0x34955c` | `[kernel.kallsyms]` |

##### `0xa2545c` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 57.9% | 11.0ms |      11 | `0x12e138c` | `[kernel.kallsyms]` |
| 21.1% |  4.0ms |       4 | `0x12e137c` | `[kernel.kallsyms]` |
| 10.5% |  2.0ms |       2 | `0x12e1370` | `[kernel.kallsyms]` |
|  5.3% |  1.0ms |       1 | `0x12e1384` | `[kernel.kallsyms]` |
|  5.3% |  1.0ms |       1 | `0x12e1398` | `[kernel.kallsyms]` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x16900` (`binary`) ← `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x13e30` (`binary`)

|    % |    Time | Samples | Call stack                                   |
| ---: | ------: | ------: | -------------------------------------------- |
| 3.3% | 189.2ms |     189 | `0x9a704` (`binary`) ← `0x90450` ← `0x15034` |
| 1.1% |  64.1ms |      64 | `0x9a704` (`binary`) ← `0x906b4` ← `0x14e90` |
| 0.6% |  37.0ms |      37 | `0x70050` (`binary`) ← `0x14f10`             |
| 0.6% |  35.0ms |      35 | `0x70014` (`binary`) ← `0x14f10`             |
| 0.6% |  33.0ms |      33 | `0x9a704` (`binary`) ← `0x906b4` ← `0x14f40` |
| 0.5% |  29.0ms |      29 | `0x6f850` (`binary`) ← `0x14f10`             |
| 0.4% |  26.0ms |      26 | `0x6f834` (`binary`) ← `0x14f10`             |
| 0.4% |  25.0ms |      25 | `0x6f844` (`binary`) ← `0x14f10`             |
| 0.4% |  23.0ms |      23 | `0x700cc` (`binary`) ← `0x14f10`             |
| 0.4% |  21.0ms |      21 | `0x70034` (`binary`) ← `0x14f10`             |
| 0.3% |  19.0ms |      19 | `0x700b4` (`binary`) ← `0x14f10`             |
| 0.3% |  18.0ms |      18 | `0x70020` (`binary`) ← `0x14f10`             |
| 0.3% |  17.0ms |      17 | `0x70748` (`binary`) ← `0x14f10`             |
| 0.3% |  17.0ms |      17 | `0x70040` (`binary`) ← `0x14f10`             |
| 0.3% |  15.0ms |      15 | `0x6f85c` (`binary`) ← `0x14f10`             |
| 0.2% |  14.0ms |      14 | `0x6fdec` (`binary`) ← `0x14f10`             |
| 0.2% |  13.0ms |      13 | `0x6feb8` (`binary`) ← `0x14f10`             |
| 0.2% |  12.0ms |      12 | `0x70090` (`binary`) ← `0x14f10`             |
| 0.2% |  12.0ms |      12 | `0x9075c` (`binary`) ← `0x14f40`             |
| 0.2% |  12.0ms |      12 | `0x6ffec` (`binary`) ← `0x14f10`             |

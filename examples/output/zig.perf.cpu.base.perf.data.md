# CPU profile

Took 5.75s over 5,749 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 98.5% |  5.66s |   5,660 |
| Kernel   |  1.0% | 60.1ms |      60 |
| Native   |  0.5% | 29.0ms |      29 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|    % |    Time | Samples | Function  | Location |
| ---: | ------: | ------: | --------- | -------- |
| 5.9% | 337.3ms |     337 | `0x9a704` | `binary` |
| 3.4% | 196.2ms |     196 | `0x70014` | `binary` |
| 2.1% | 119.1ms |     119 | `0x70050` | `binary` |
| 1.6% |  90.1ms |      90 | `0x70034` | `binary` |
| 1.2% |  69.1ms |      69 | `0x6f6c4` | `binary` |
| 1.1% |  65.1ms |      65 | `0x70090` | `binary` |
| 1.1% |  62.1ms |      62 | `0x6f844` | `binary` |
| 1.0% |  60.1ms |      60 | `0x700d4` | `binary` |
| 0.9% |  53.1ms |      53 | `0x70020` | `binary` |
| 0.9% |  53.1ms |      53 | `0x70040` | `binary` |
| 0.9% |  52.1ms |      52 | `0x70028` | `binary` |
| 0.9% |  50.1ms |      50 | `0x700b4` | `binary` |
| 0.9% |  50.1ms |      50 | `0x700cc` | `binary` |
| 0.9% |  50.1ms |      50 | `0x70918` | `binary` |
| 0.8% |  46.0ms |      46 | `0x221f0` | `binary` |
| 0.8% |  45.0ms |      45 | `0x6f834` | `binary` |
| 0.7% |  41.0ms |      41 | `0x674a0` | `binary` |
| 0.7% |  41.0ms |      41 | `0x7b36c` | `binary` |
| 0.7% |  40.0ms |      40 | `0x7dc74` | `binary` |
| 0.6% |  37.0ms |      37 | `0x7009c` | `binary` |

##### Kernel

|     % |  Time | Samples | Function    | Location            |
| ----: | ----: | ------: | ----------- | ------------------- |
|  0.1% | 8.0ms |       8 | `0x12e138c` | `[kernel.kallsyms]` |
|  0.1% | 3.0ms |       3 | `0x1327fb8` | `[kernel.kallsyms]` |
|  0.1% | 3.0ms |       3 | `0x132858c` | `[kernel.kallsyms]` |
|  0.1% | 3.0ms |       3 | `0x35c7e0`  | `[kernel.kallsyms]` |
| <0.1% | 2.0ms |       2 | `0x12e0de4` | `[kernel.kallsyms]` |
| <0.1% | 2.0ms |       2 | `0x33a3f8`  | `[kernel.kallsyms]` |
| <0.1% | 2.0ms |       2 | `0x12e1384` | `[kernel.kallsyms]` |
| <0.1% | 2.0ms |       2 | `0x25a754`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x12e1398` | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x1327fc0` | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0xa244d0`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0xa24d30`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x1302964` | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x12e39dc` | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x6b2448`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x6ade60`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x365dd8`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x2ed41c`  | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x12e3600` | `[kernel.kallsyms]` |
| <0.1% | 1.0ms |       1 | `0x6bc990`  | `[kernel.kallsyms]` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x9a704` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 50.1% | 169.2ms |     169 | `0x90450` | `binary` |
| 30.9% | 104.1ms |     104 | `0x906b4` | `binary` |
|  4.7% |  16.0ms |      16 | `0x16d70` | `binary` |
|  4.5% |  15.0ms |      15 | `0x54d64` | `binary` |
|  2.1% |   7.0ms |       7 | `0x8ffa0` | `binary` |

##### `0x70014` (`binary`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 76.0% | 149.1ms |     149 | `0x6f75c` | `binary` |
| 24.0% |  47.0ms |      47 | `0x14f10` | `binary` |

##### `0x70050` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 67.2% | 80.1ms |      80 | `0x6f75c` | `binary` |
| 32.8% | 39.0ms |      39 | `0x14f10` | `binary` |

##### `0x70034` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 74.4% | 67.1ms |      67 | `0x6f75c` | `binary` |
| 25.6% | 23.0ms |      23 | `0x14f10` | `binary` |

##### `0x6f6c4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 21.7% | 15.0ms |      15 | `0x7cd84` | `binary` |
| 11.6% |  8.0ms |       8 | `0x7d0a8` | `binary` |
|  8.7% |  6.0ms |       6 | `0x75014` | `binary` |
|  5.8% |  4.0ms |       4 | `0x77768` | `binary` |
|  5.8% |  4.0ms |       4 | `0x7c504` | `binary` |

##### `0x70090` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 81.5% | 53.1ms |      53 | `0x6f75c` | `binary` |
| 18.5% | 12.0ms |      12 | `0x14f10` | `binary` |

##### `0x6f844` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 79.0% | 49.0ms |      49 | `0x14f10` | `binary` |
| 21.0% | 13.0ms |      13 | `0x6f75c` | `binary` |

##### `0x700d4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 85.0% | 51.1ms |      51 | `0x6f75c` | `binary` |
| 15.0% |  9.0ms |       9 | `0x14f10` | `binary` |

##### `0x70020` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 69.8% | 37.0ms |      37 | `0x6f75c` | `binary` |
| 30.2% | 16.0ms |      16 | `0x14f10` | `binary` |

##### `0x70040` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 69.8% | 37.0ms |      37 | `0x6f75c` | `binary` |
| 30.2% | 16.0ms |      16 | `0x14f10` | `binary` |

##### `0x70028` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 80.8% | 42.0ms |      42 | `0x6f75c` | `binary` |
| 19.2% | 10.0ms |      10 | `0x14f10` | `binary` |

##### `0x700b4` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 74.0% | 37.0ms |      37 | `0x6f75c` | `binary` |
| 26.0% | 13.0ms |      13 | `0x14f10` | `binary` |

##### `0x700cc` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 68.0% | 34.0ms |      34 | `0x6f75c` | `binary` |
| 32.0% | 16.0ms |      16 | `0x14f10` | `binary` |

##### `0x70918` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 84.0% | 42.0ms |      42 | `0x674d4` | `binary` |
| 14.0% |  7.0ms |       7 | `0x79dc4` | `binary` |
|  2.0% |  1.0ms |       1 | `0x895a4` | `binary` |

##### `0x221f0` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 84.8% | 39.0ms |      39 | `0x7b968` | `binary` |
| 10.9% |  5.0ms |       5 | `0x79e10` | `binary` |
|  2.2% |  1.0ms |       1 | `0x7de94` | `binary` |
|  2.2% |  1.0ms |       1 | `0x77c64` | `binary` |

##### `0x6f834` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 62.2% | 28.0ms |      28 | `0x14f10` | `binary` |
| 37.8% | 17.0ms |      17 | `0x6f75c` | `binary` |

##### `0x674a0` (`binary`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 22.0% | 9.0ms |       9 | `0x7cd84` | `binary` |
| 14.6% | 6.0ms |       6 | `0x75014` | `binary` |
| 12.2% | 5.0ms |       5 | `0x7c504` | `binary` |
|  7.3% | 3.0ms |       3 | `0x7d0a8` | `binary` |
|  4.9% | 2.0ms |       2 | `0x6a8f8` | `binary` |

##### `0x7b36c` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 36.6% | 15.0ms |      15 | `0x5f554` | `binary` |
| 22.0% |  9.0ms |       9 | `0x69c74` | `binary` |
|  7.3% |  3.0ms |       3 | `0x69a64` | `binary` |
|  7.3% |  3.0ms |       3 | `0x66f08` | `binary` |
|  4.9% |  2.0ms |       2 | `0x7375c` | `binary` |

##### `0x7dc74` (`binary`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 40.0ms |      40 | `0x74ec8` | `binary` |

##### `0x7009c` (`binary`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 81.1% | 30.0ms |      30 | `0x6f75c` | `binary` |
| 18.9% |  7.0ms |       7 | `0x14f10` | `binary` |

##### `0x12e138c` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 8.0ms |       8 | `0xa2545c` | `[kernel.kallsyms]` |

##### `0x1327fb8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x1328e88` | `[kernel.kallsyms]` |

##### `0x132858c` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x1328e1c` | `[kernel.kallsyms]` |

##### `0x35c7e0` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 3.0ms |       3 | `0x362da8` | `[kernel.kallsyms]` |

##### `0x12e0de4` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x2e3ffc` | `[kernel.kallsyms]` |

##### `0x33a3f8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x33b7a4` | `[kernel.kallsyms]` |

##### `0x12e1384` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0xa2545c` | `[kernel.kallsyms]` |

##### `0x25a754` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 2.0ms |       2 | `0x25a988` | `[kernel.kallsyms]` |

##### `0x12e1398` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x354ac4` | `[kernel.kallsyms]` |

##### `0x1327fc0` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller      | Location            |
| -----: | ----: | ------: | ----------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x1328e88` | `[kernel.kallsyms]` |

##### `0xa244d0` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0xa26d14` | `[kernel.kallsyms]` |

##### `0xa24d30` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0xa2545c` | `[kernel.kallsyms]` |

##### `0x1302964` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x368d64` | `[kernel.kallsyms]` |

##### `0x12e39dc` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x3484f8` | `[kernel.kallsyms]` |

##### `0x6b2448` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x6b2578` | `[kernel.kallsyms]` |

##### `0x6ade60` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x6b2480` | `[kernel.kallsyms]` |

##### `0x365dd8` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x34dc18` | `[kernel.kallsyms]` |

##### `0x2ed41c` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x34da64` | `[kernel.kallsyms]` |

##### `0x12e3600` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x43bc34` | `[kernel.kallsyms]` |

##### `0x6bc990` (`[kernel.kallsyms]`)

|      % |  Time | Samples | Caller     | Location            |
| -----: | ----: | ------: | ---------- | ------------------- |
| 100.0% | 1.0ms |       1 | `0x346448` | `[kernel.kallsyms]` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function  | Location                                 |
| -----: | ------: | ------: | --------- | ---------------------------------------- |
| 100.0% |   5.75s |   5,749 | `0x16900` | `binary`                                 |
| 100.0% |   5.75s |   5,749 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.75s |   5,749 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% |   5.75s |   5,749 | `0x13e30` | `binary`                                 |
|  70.0% |   4.03s |   4,026 | `0x15964` | `binary`                                 |
|  48.5% |   2.78s |   2,787 | `0x5eff4` | `binary`                                 |
|  39.9% |   2.29s |   2,291 | `0x78ff4` | `binary`                                 |
|  37.6% |   2.16s |   2,159 | `0x672f0` | `binary`                                 |
|  37.0% |   2.12s |   2,125 | `0x6639c` | `binary`                                 |
|  30.6% |   1.76s |   1,760 | `0x6503c` | `binary`                                 |
|  29.2% |   1.67s |   1,678 | `0x61a90` | `binary`                                 |
|  21.2% |   1.21s |   1,218 | `0x71d44` | `binary`                                 |
|  20.3% |   1.17s |   1,169 | `0x674d4` | `binary`                                 |
|  19.7% |   1.13s |   1,135 | `0x61f50` | `binary`                                 |
|  17.5% |      1s |   1,004 | `0x6f75c` | `binary`                                 |
|  15.5% | 891.9ms |     891 | `0x672d4` | `binary`                                 |
|  15.5% | 890.9ms |     890 | `0x6a0c8` | `binary`                                 |
|  13.0% | 745.7ms |     745 | `0x6aea0` | `binary`                                 |
|  12.2% | 699.7ms |     699 | `0x6944c` | `binary`                                 |
|  12.0% | 690.7ms |     690 | `0x5ebe0` | `binary`                                 |

#### Categories

##### Ours

|      % |    Time | Samples | Function  | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% |   5.75s |   5,749 | `0x16900` | `binary` |
| 100.0% |   5.75s |   5,749 | `0x13e30` | `binary` |
|  70.0% |   4.03s |   4,026 | `0x15964` | `binary` |
|  48.5% |   2.78s |   2,787 | `0x5eff4` | `binary` |
|  39.9% |   2.29s |   2,291 | `0x78ff4` | `binary` |
|  37.6% |   2.16s |   2,159 | `0x672f0` | `binary` |
|  37.0% |   2.12s |   2,125 | `0x6639c` | `binary` |
|  30.6% |   1.76s |   1,760 | `0x6503c` | `binary` |
|  29.2% |   1.67s |   1,678 | `0x61a90` | `binary` |
|  21.2% |   1.21s |   1,218 | `0x71d44` | `binary` |
|  20.3% |   1.17s |   1,169 | `0x674d4` | `binary` |
|  19.7% |   1.13s |   1,135 | `0x61f50` | `binary` |
|  17.5% |      1s |   1,004 | `0x6f75c` | `binary` |
|  15.5% | 891.9ms |     891 | `0x672d4` | `binary` |
|  15.5% | 890.9ms |     890 | `0x6a0c8` | `binary` |
|  13.0% | 745.7ms |     745 | `0x6aea0` | `binary` |
|  12.2% | 699.7ms |     699 | `0x6944c` | `binary` |
|  12.0% | 690.7ms |     690 | `0x5ebe0` | `binary` |
|  11.7% | 672.7ms |     672 | `0x5e5a4` | `binary` |
|  10.8% | 620.6ms |     620 | `0x68820` | `binary` |

##### Kernel

|    % |   Time | Samples | Function    | Location            |
| ---: | -----: | ------: | ----------- | ------------------- |
| 1.0% | 60.1ms |      60 | `0x14d0`    | `[kernel.kallsyms]` |
| 0.9% | 50.1ms |      50 | `0x1328e88` | `[kernel.kallsyms]` |
| 0.8% | 46.0ms |      46 | `0x1327fc0` | `[kernel.kallsyms]` |
| 0.8% | 45.0ms |      45 | `0x12d6c`   | `[kernel.kallsyms]` |
| 0.7% | 43.0ms |      43 | `0x12c98`   | `[kernel.kallsyms]` |
| 0.3% | 18.0ms |      18 | `0x34a030`  | `[kernel.kallsyms]` |
| 0.3% | 17.0ms |      17 | `0x34909c`  | `[kernel.kallsyms]` |
| 0.3% | 17.0ms |      17 | `0x6b4390`  | `[kernel.kallsyms]` |
| 0.3% | 17.0ms |      17 | `0x349b08`  | `[kernel.kallsyms]` |
| 0.3% | 16.0ms |      16 | `0x25c5d4`  | `[kernel.kallsyms]` |
| 0.3% | 16.0ms |      16 | `0x44ab98`  | `[kernel.kallsyms]` |
| 0.3% | 16.0ms |      16 | `0x34955c`  | `[kernel.kallsyms]` |
| 0.3% | 16.0ms |      16 | `0x3db354`  | `[kernel.kallsyms]` |
| 0.2% | 13.0ms |      13 | `0xa2545c`  | `[kernel.kallsyms]` |
| 0.2% | 13.0ms |      13 | `0x25b2c0`  | `[kernel.kallsyms]` |
| 0.2% | 13.0ms |      13 | `0x348888`  | `[kernel.kallsyms]` |
| 0.2% | 12.0ms |      12 | `0x3484f8`  | `[kernel.kallsyms]` |
| 0.2% | 11.0ms |      11 | `0x363b0c`  | `[kernel.kallsyms]` |
| 0.2% | 10.0ms |      10 | `0x1328e1c` | `[kernel.kallsyms]` |
| 0.1% |  8.0ms |       8 | `0x12e138c` | `[kernel.kallsyms]` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x16900` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 70.0% |   4.03s |   4,026 | `0x15964` | `binary` |
| 10.6% | 612.6ms |     612 | `0x150ac` | `binary` |
| 10.0% | 577.6ms |     577 | `0x14f10` | `binary` |
|  3.0% | 172.2ms |     172 | `0x15034` | `binary` |
|  1.3% |  73.1ms |      73 | `0x14f40` | `binary` |

##### `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 5.75s |   5,749 | `0x16900` | `binary` |

##### `0x27818` (`../usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.75s |   5,749 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x13e30` (`binary`)

|      % |  Time | Samples | Callee    | Location                                 |
| -----: | ----: | ------: | --------- | ---------------------------------------- |
| 100.0% | 5.75s |   5,749 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x15964` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 41.1% |   1.65s |   1,654 | `0x6503c` | `binary` |
| 40.5% |   1.63s |   1,629 | `0x6639c` | `binary` |
| 13.1% | 529.5ms |     529 | `0x5eff4` | `binary` |
|  3.6% | 145.1ms |     145 | `0x6627c` | `binary` |
|  0.5% |  21.0ms |      21 | `0x65330` | `binary` |

##### `0x5eff4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 77.5% |   2.16s |   2,159 | `0x672f0` | `binary` |
| 32.0% | 891.9ms |     891 | `0x672d4` | `binary` |
|  1.5% |  42.0ms |      42 | `0x6716c` | `binary` |
|  1.2% |  33.0ms |      33 | `0x673a8` | `binary` |
|  0.7% |  20.0ms |      20 | `0x67420` | `binary` |

##### `0x78ff4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 57.0% |   1.30s |   1,306 | `0x61a90` | `binary` |
| 11.7% | 267.3ms |     267 | `0x60bf8` | `binary` |
|  8.0% | 184.2ms |     184 | `0x61f50` | `binary` |
|  7.6% | 175.2ms |     175 | `0x5eff4` | `binary` |
|  7.0% | 161.2ms |     161 | `0x60c90` | `binary` |

##### `0x672f0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 24.4% | 526.5ms |     526 | `0x61f50` | `binary` |
| 23.9% | 516.5ms |     516 | `0x5e9c0` | `binary` |
| 20.6% | 444.4ms |     444 | `0x5ebe0` | `binary` |
| 15.5% | 335.3ms |     335 | `0x5e828` | `binary` |
| 12.7% | 274.3ms |     274 | `0x61a90` | `binary` |

##### `0x6639c` (`binary`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.4% | 2.11s |   2,112 | `0x5eff4` | `binary` |
|  0.4% | 8.0ms |       8 | `0x5efd4` | `binary` |
|  0.1% | 3.0ms |       3 | `0x5e6dc` | `binary` |
| <0.1% | 1.0ms |       1 | `0x5d250` | `binary` |
| <0.1% | 1.0ms |       1 | `0x67474` | `binary` |

##### `0x6503c` (`binary`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.2% |  1.71s |   1,711 | `0x78ff4` | `binary` |
|  1.9% | 33.0ms |      33 | `0x782ec` | `binary` |
|  0.8% | 14.0ms |      14 | `0x783f4` | `binary` |
|  0.4% |  7.0ms |       7 | `0x78fdc` | `binary` |
|  0.3% |  6.0ms |       6 | `0x781e8` | `binary` |

##### `0x61a90` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.6% |   1.21s |   1,218 | `0x71d44` | `binary` |
| 15.5% | 260.3ms |     260 | `0x71cf8` | `binary` |
|  9.5% | 159.2ms |     159 | `0x7197c` | `binary` |
|  2.9% |  48.0ms |      48 | `0x71b24` | `binary` |
|  2.4% |  41.0ms |      41 | `0x71c40` | `binary` |

##### `0x71d44` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 54.9% | 669.7ms |     669 | `0x6639c` | `binary` |
| 41.5% | 505.5ms |     505 | `0x6503c` | `binary` |
| 11.9% | 145.1ms |     145 | `0x6627c` | `binary` |
|  1.6% |  20.0ms |      20 | `0x5eff4` | `binary` |
|  1.2% |  15.0ms |      15 | `0x651bc` | `binary` |

##### `0x674d4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 71.9% | 841.8ms |     841 | `0x6f75c` | `binary` |
|  3.6% |  42.0ms |      42 | `0x70918` | `binary` |
|  2.2% |  26.0ms |      26 | `0x6f6f4` | `binary` |
|  2.2% |  26.0ms |      26 | `0x6f720` | `binary` |
|  1.9% |  22.0ms |      22 | `0x6f7b4` | `binary` |

##### `0x61f50` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 77.4% | 879.9ms |     879 | `0x6a0c8` | `binary` |
|  5.5% |  62.1ms |      62 | `0x6a31c` | `binary` |
|  3.3% |  37.0ms |      37 | `0x69c74` | `binary` |
|  3.3% |  37.0ms |      37 | `0x6a18c` | `binary` |
|  3.2% |  36.0ms |      36 | `0x6a088` | `binary` |

##### `0x6f75c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 14.8% | 149.1ms |     149 | `0x70014` | `binary` |
|  8.0% |  80.1ms |      80 | `0x70050` | `binary` |
|  6.7% |  67.1ms |      67 | `0x70034` | `binary` |
|  5.3% |  53.1ms |      53 | `0x70090` | `binary` |
|  5.1% |  51.1ms |      51 | `0x700d4` | `binary` |

##### `0x672d4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 79.6% | 709.7ms |     709 | `0x78ff4` | `binary` |
|  8.4% |  75.1ms |      75 | `0x782ec` | `binary` |
|  5.5% |  49.0ms |      49 | `0x783f4` | `binary` |
|  1.1% |  10.0ms |      10 | `0x781e8` | `binary` |
|  1.0% |   9.0ms |       9 | `0x78200` | `binary` |

##### `0x6a0c8` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 24.9% | 222.2ms |     222 | `0x60bf8` | `binary` |
| 11.8% | 105.1ms |     105 | `0x60c90` | `binary` |
| 11.1% |  99.1ms |      99 | `0x61f50` | `binary` |
|  5.7% |  51.1ms |      51 | `0x5f5d4` | `binary` |
|  5.4% |  48.0ms |      48 | `0x7cd84` | `binary` |

##### `0x6aea0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.9% | 543.5ms |     543 | `0x6944c` | `binary` |
| 18.0% | 134.1ms |     134 | `0x695b4` | `binary` |
|  9.7% |  72.1ms |      72 | `0x5eff4` | `binary` |
|  8.6% |  64.1ms |      64 | `0x5e9c0` | `binary` |
|  2.7% |  20.0ms |      20 | `0x5ebe0` | `binary` |

##### `0x6944c` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 91.6% | 640.6ms |     640 | `0x5eff4` | `binary` |
|  4.3% |  30.0ms |      30 | `0x5ebe0` | `binary` |
|  1.4% |  10.0ms |      10 | `0x5efd4` | `binary` |
|  0.9% |   6.0ms |       6 | `0x5eb54` | `binary` |
|  0.6% |   4.0ms |       4 | `0x61f50` | `binary` |

##### `0x5ebe0` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 78.4% | 541.5ms |     541 | `0x6c3fc` | `binary` |
| 27.4% | 189.2ms |     189 | `0x6c384` | `binary` |
|  1.9% |  13.0ms |      13 | `0x6c3e4` | `binary` |
|  0.7% |   5.0ms |       5 | `0x6c3d8` | `binary` |
|  0.1% |   1.0ms |       1 | `0x6c398` | `binary` |

##### `0x5e5a4` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 46.4% | 312.3ms |     312 | `0x5eff4` | `binary` |
| 15.8% | 106.1ms |     106 | `0x61a90` | `binary` |
|  8.0% |  54.1ms |      54 | `0x5ebe0` | `binary` |
|  6.4% |  43.0ms |      43 | `0x61f50` | `binary` |
|  6.4% |  43.0ms |      43 | `0x6b878` | `binary` |

##### `0x68820` (`binary`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 81.5% | 505.5ms |     505 | `0x6aea0` | `binary` |
| 19.0% | 118.1ms |     118 | `0x6a948` | `binary` |
|  1.1% |   7.0ms |       7 | `0x6a884` | `binary` |
|  1.0% |   6.0ms |       6 | `0x6a988` | `binary` |
|  0.6% |   4.0ms |       4 | `0x6a86c` | `binary` |

##### `0x14d0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 83.3% | 50.1ms |      50 | `0x1328e88` | `[kernel.kallsyms]` |
| 16.7% | 10.0ms |      10 | `0x1328e1c` | `[kernel.kallsyms]` |

##### `0x1328e88` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 92.0% | 46.0ms |      46 | `0x1327fc0` | `[kernel.kallsyms]` |
|  6.0% |  3.0ms |       3 | `0x1327fb8` | `[kernel.kallsyms]` |
|  2.0% |  1.0ms |       1 | `0x1327ffc` | `[kernel.kallsyms]` |

##### `0x1327fc0` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee    | Location            |
| ----: | -----: | ------: | --------- | ------------------- |
| 97.8% | 45.0ms |      45 | `0x12d6c` | `[kernel.kallsyms]` |

##### `0x12d6c` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 95.6% | 43.0ms |      43 | `0x12c98`  | `[kernel.kallsyms]` |
|  2.2% |  1.0ms |       1 | `0x3690b8` | `[kernel.kallsyms]` |
|  2.2% |  1.0ms |       1 | `0x12c8c`  | `[kernel.kallsyms]` |

##### `0x12c98` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 41.9% | 18.0ms |      18 | `0x34a030` | `[kernel.kallsyms]` |
| 30.2% | 13.0ms |      13 | `0x348888` | `[kernel.kallsyms]` |
| 11.6% |  5.0ms |       5 | `0x354c18` | `[kernel.kallsyms]` |
|  7.0% |  3.0ms |       3 | `0x369124` | `[kernel.kallsyms]` |
|  7.0% |  3.0ms |       3 | `0x2bfd60` | `[kernel.kallsyms]` |

##### `0x34a030` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 94.4% | 17.0ms |      17 | `0x349b08` | `[kernel.kallsyms]` |
|  5.6% |  1.0ms |       1 | `0x349a20` | `[kernel.kallsyms]` |

##### `0x34909c` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 17.0ms |      17 | `0x6b4390` | `[kernel.kallsyms]` |
|  94.1% | 16.0ms |      16 | `0x44ab98` | `[kernel.kallsyms]` |

##### `0x6b4390` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 94.1% | 16.0ms |      16 | `0x3db354` | `[kernel.kallsyms]` |
|  5.9% |  1.0ms |       1 | `0x3db2f4` | `[kernel.kallsyms]` |

##### `0x349b08` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 17.0ms |      17 | `0x34909c` | `[kernel.kallsyms]` |

##### `0x25c5d4` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 81.3% | 13.0ms |      13 | `0x25b2c0` | `[kernel.kallsyms]` |
| 18.8% |  3.0ms |       3 | `0x25b1e0` | `[kernel.kallsyms]` |

##### `0x44ab98` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 16.0ms |      16 | `0x25c5d4` | `[kernel.kallsyms]` |

##### `0x34955c` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 16.0ms |      16 | `0x34909c` | `[kernel.kallsyms]` |

##### `0x3db354` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 16.0ms |      16 | `0x34955c` | `[kernel.kallsyms]` |

##### `0xa2545c` (`[kernel.kallsyms]`)

|     % |  Time | Samples | Callee      | Location            |
| ----: | ----: | ------: | ----------- | ------------------- |
| 61.5% | 8.0ms |       8 | `0x12e138c` | `[kernel.kallsyms]` |
| 15.4% | 2.0ms |       2 | `0x12e1384` | `[kernel.kallsyms]` |
|  7.7% | 1.0ms |       1 | `0xa24d30`  | `[kernel.kallsyms]` |
|  7.7% | 1.0ms |       1 | `0x12e1238` | `[kernel.kallsyms]` |
|  7.7% | 1.0ms |       1 | `0x12e137c` | `[kernel.kallsyms]` |

##### `0x25b2c0` (`[kernel.kallsyms]`)

|      % |   Time | Samples | Callee     | Location            |
| -----: | -----: | ------: | ---------- | ------------------- |
| 100.0% | 13.0ms |      13 | `0xa2545c` | `[kernel.kallsyms]` |

##### `0x348888` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee     | Location            |
| ----: | -----: | ------: | ---------- | ------------------- |
| 92.3% | 12.0ms |      12 | `0x3484f8` | `[kernel.kallsyms]` |
|  7.7% |  1.0ms |       1 | `0x363a68` | `[kernel.kallsyms]` |

##### `0x3484f8` (`[kernel.kallsyms]`)

|     % |   Time | Samples | Callee      | Location            |
| ----: | -----: | ------: | ----------- | ------------------- |
| 91.7% | 11.0ms |      11 | `0x363b0c`  | `[kernel.kallsyms]` |
|  8.3% |  1.0ms |       1 | `0x12e39dc` | `[kernel.kallsyms]` |

##### `0x363b0c` (`[kernel.kallsyms]`)

|     % |  Time | Samples | Callee     | Location            |
| ----: | ----: | ------: | ---------- | ------------------- |
| 36.4% | 4.0ms |       4 | `0x362da8` | `[kernel.kallsyms]` |
| 27.3% | 3.0ms |       3 | `0x3630d4` | `[kernel.kallsyms]` |
| 18.2% | 2.0ms |       2 | `0x362e04` | `[kernel.kallsyms]` |
|  9.1% | 1.0ms |       1 | `0x362a7c` | `[kernel.kallsyms]` |
|  9.1% | 1.0ms |       1 | `0x362a20` | `[kernel.kallsyms]` |

##### `0x1328e1c` (`[kernel.kallsyms]`)

|     % |  Time | Samples | Callee      | Location            |
| ----: | ----: | ------: | ----------- | ------------------- |
| 70.0% | 7.0ms |       7 | `0x1328594` | `[kernel.kallsyms]` |
| 30.0% | 3.0ms |       3 | `0x132858c` | `[kernel.kallsyms]` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x16900` (`binary`) ← `0x27744` (`../usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x13e30` (`binary`)

|    % |    Time | Samples | Call stack                                   |
| ---: | ------: | ------: | -------------------------------------------- |
| 2.9% | 169.2ms |     169 | `0x9a704` (`binary`) ← `0x90450` ← `0x15034` |
| 1.3% |  72.1ms |      72 | `0x9a704` (`binary`) ← `0x906b4` ← `0x14e90` |
| 0.9% |  49.0ms |      49 | `0x6f844` (`binary`) ← `0x14f10`             |
| 0.8% |  47.0ms |      47 | `0x70014` (`binary`) ← `0x14f10`             |
| 0.7% |  39.0ms |      39 | `0x70050` (`binary`) ← `0x14f10`             |
| 0.6% |  32.0ms |      32 | `0x9a704` (`binary`) ← `0x906b4` ← `0x14f40` |
| 0.5% |  29.0ms |      29 | `0x6f850` (`binary`) ← `0x14f10`             |
| 0.5% |  28.0ms |      28 | `0x6f834` (`binary`) ← `0x14f10`             |
| 0.4% |  23.0ms |      23 | `0x70034` (`binary`) ← `0x14f10`             |
| 0.3% |  18.0ms |      18 | `0x70748` (`binary`) ← `0x14f10`             |
| 0.3% |  17.0ms |      17 | `0x6ffec` (`binary`) ← `0x14f10`             |
| 0.3% |  16.0ms |      16 | `0x700cc` (`binary`) ← `0x14f10`             |
| 0.3% |  16.0ms |      16 | `0x70040` (`binary`) ← `0x14f10`             |
| 0.3% |  16.0ms |      16 | `0x70020` (`binary`) ← `0x14f10`             |
| 0.3% |  15.0ms |      15 | `0x9a704` (`binary`) ← `0x54d64` ← `0x14c7c` |
| 0.2% |  14.0ms |      14 | `0x6f81c` (`binary`) ← `0x14f10`             |
| 0.2% |  14.0ms |      14 | `0x90630` (`binary`) ← `0x14f40`             |
| 0.2% |  14.0ms |      14 | `0x9075c` (`binary`) ← `0x14f40`             |
| 0.2% |  13.0ms |      13 | `0x700b4` (`binary`) ← `0x14f10`             |
| 0.2% |  13.0ms |      13 | `0x700c0` (`binary`) ← `0x14f10`             |

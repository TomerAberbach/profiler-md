# CPU profile diff

Took 5.24s → 5.95s (+715.72ms, +13.6%) over 5,239 samples → 5,954 samples (1.0ms per sample).

| Category | Change |     Delta |             % |              Time |       Samples |
| -------- | -----: | --------: | ------------: | ----------------: | ------------: |
| Ours     | +19.8% | +961.96ms | 92.6% → 97.6% |     4.85s → 5.81s | 4,852 → 5,813 |
| Kernel   |  -6.1% |   -7.01ms |   2.2% → 1.8% | 115.1ms → 108.1ms |     115 → 108 |
| Native   | -87.9% | -239.24ms |   5.2% → 0.6% |  272.3ms → 33.0ms |      272 → 33 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Ours

| Change |     Delta |           % |          Time | Samples | Function  | Location |
| -----: | --------: | ----------: | ------------: | ------: | --------- | -------- |
|    new | +372.37ms | 0.0% → 6.2% | 0ms → 372.4ms | 0 → 372 | `0x9a704` | `binary` |
|    new | +184.18ms | 0.0% → 3.1% | 0ms → 184.2ms | 0 → 184 | `0x70014` | `binary` |
|    new | +121.12ms | 0.0% → 2.0% | 0ms → 121.1ms | 0 → 121 | `0x70050` | `binary` |
|    new |  +82.08ms | 0.0% → 1.4% |  0ms → 82.1ms |  0 → 82 | `0x70034` | `binary` |
|    new |  +68.07ms | 0.0% → 1.1% |  0ms → 68.1ms |  0 → 68 | `0x6f6c4` | `binary` |
|    new |  +62.06ms | 0.0% → 1.0% |  0ms → 62.1ms |  0 → 62 | `0x700cc` | `binary` |
|    new |  +60.06ms | 0.0% → 1.0% |  0ms → 60.1ms |  0 → 60 | `0x6f844` | `binary` |
|    new |  +52.05ms | 0.0% → 0.9% |  0ms → 52.1ms |  0 → 52 | `0x70040` | `binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x7b36c` | `binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x70090` | `binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x70918` | `binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x70020` | `binary` |
|    new |  +48.05ms | 0.0% → 0.8% |  0ms → 48.0ms |  0 → 48 | `0x7009c` | `binary` |
|    new |  +47.05ms | 0.0% → 0.8% |  0ms → 47.0ms |  0 → 47 | `0x70028` | `binary` |
|    new |  +45.05ms | 0.0% → 0.8% |  0ms → 45.0ms |  0 → 45 | `0x674a0` | `binary` |
|    new |  +42.04ms | 0.0% → 0.7% |  0ms → 42.0ms |  0 → 42 | `0x6f834` | `binary` |
|    new |  +41.04ms | 0.0% → 0.7% |  0ms → 41.0ms |  0 → 41 | `0x700d4` | `binary` |
|    new |  +41.04ms | 0.0% → 0.7% |  0ms → 41.0ms |  0 → 41 | `0x6f798` | `binary` |
|    new |  +40.04ms | 0.0% → 0.7% |  0ms → 40.0ms |  0 → 40 | `0x6feb8` | `binary` |
|    new |  +39.04ms | 0.0% → 0.7% |  0ms → 39.0ms |  0 → 39 | `0x6f6f4` | `binary` |

##### Native

|  Change |   Delta |            % |          Time | Samples | Function  | Location                                 |
| ------: | ------: | -----------: | ------------: | ------: | --------- | ---------------------------------------- |
|     new | +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |   0 → 2 | `0xe3e00` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |   0 → 2 | `0x8faf4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +1.00ms |        <0.1% | 1.0ms → 2.0ms |   1 → 2 | `0x8e9cc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xdda44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xde3c8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xdd2b4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92284` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x91b64` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8faa0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8fc14` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x901c8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x9d20c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92240` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xdd9f8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92dcc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x91b68` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92c70` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x90b58` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Kernel

|  Change |   Delta |            % |           Time | Samples | Function    | Location            |
| ------: | ------: | -----------: | -------------: | ------: | ----------- | ------------------- |
| +133.3% | +4.00ms |         0.1% |  3.0ms → 7.0ms |   3 → 7 | `0x39db08`  | `[kernel.kallsyms]` |
|     new | +3.00ms |  0.0% → 0.1% |    0ms → 3.0ms |   0 → 3 | `0x3c3834`  | `[kernel.kallsyms]` |
|  +22.2% | +2.00ms |         0.2% | 9.0ms → 11.0ms |  9 → 11 | `0x14837cc` | `[kernel.kallsyms]` |
| +200.0% | +2.00ms | <0.1% → 0.1% |  1.0ms → 3.0ms |   1 → 3 | `0x14837c4` | `[kernel.kallsyms]` |
|     new | +2.00ms | 0.0% → <0.1% |    0ms → 2.0ms |   0 → 2 | `0x14837d0` | `[kernel.kallsyms]` |
|     new | +2.00ms | 0.0% → <0.1% |    0ms → 2.0ms |   0 → 2 | `0x2aa344`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x14c6048` | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x2bec84`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x2c0a60`  | `[kernel.kallsyms]` |
|  +50.0% | +1.00ms | <0.1% → 0.1% |  2.0ms → 3.0ms |   2 → 3 | `0x44d484`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x2837d8`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x4ced8c`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x30bf14`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x1485f44` | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x3df9a8`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x438f64`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x14831f4` | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0xfbee8`   | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x3092bc`  | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |   0 → 1 | `0x77ee90`  | `[kernel.kallsyms]` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |           % |            Time | Samples | Function  | Location                                 |
| ------: | --------: | ----------: | --------------: | ------: | --------- | ---------------------------------------- |
| removed | -203.20ms | 3.9% → 0.0% |   203.2ms → 0ms | 203 → 0 | `0x138f0` | `binary`                                 |
| removed | -148.15ms | 2.8% → 0.0% |   148.1ms → 0ms | 148 → 0 | `0x1392c` | `binary`                                 |
| removed | -125.13ms | 2.4% → 0.0% |   125.1ms → 0ms | 125 → 0 | `0x13910` | `binary`                                 |
|  -92.4% | -109.11ms | 2.3% → 0.2% | 118.1ms → 9.0ms | 118 → 9 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -75.08ms | 1.4% → 0.0% |    75.1ms → 0ms |  75 → 0 | `0x1396c` | `binary`                                 |
| removed |  -74.07ms | 1.4% → 0.0% |    74.1ms → 0ms |  74 → 0 | `0x1391c` | `binary`                                 |
| removed |  -67.07ms | 1.3% → 0.0% |    67.1ms → 0ms |  67 → 0 | `0x138fc` | `binary`                                 |
| removed |  -66.07ms | 1.3% → 0.0% |    66.1ms → 0ms |  66 → 0 | `0x433d0` | `binary`                                 |
| removed |  -64.06ms | 1.2% → 0.0% |    64.1ms → 0ms |  64 → 0 | `0x13904` | `binary`                                 |
| removed |  -62.06ms | 1.2% → 0.0% |    62.1ms → 0ms |  62 → 0 | `0x139b0` | `binary`                                 |
| removed |  -60.06ms | 1.1% → 0.0% |    60.1ms → 0ms |  60 → 0 | `0x139a8` | `binary`                                 |
| removed |  -56.06ms | 1.1% → 0.0% |    56.1ms → 0ms |  56 → 0 | `0x9e670` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -52.05ms | 1.0% → 0.0% |    52.1ms → 0ms |  52 → 0 | `0x13978` | `binary`                                 |
| removed |  -46.05ms | 0.9% → 0.0% |    46.0ms → 0ms |  46 → 0 | `0x53b84` | `binary`                                 |
| removed |  -42.04ms | 0.8% → 0.0% |    42.0ms → 0ms |  42 → 0 | `0x53c64` | `binary`                                 |
| removed |  -41.04ms | 0.8% → 0.0% |    41.0ms → 0ms |  41 → 0 | `0x131a4` | `binary`                                 |
| removed |  -40.04ms | 0.8% → 0.0% |    40.0ms → 0ms |  40 → 0 | `0x13990` | `binary`                                 |
| removed |  -35.04ms | 0.7% → 0.0% |    35.0ms → 0ms |  35 → 0 | `0x53bb4` | `binary`                                 |
| removed |  -31.03ms | 0.6% → 0.0% |    31.0ms → 0ms |  31 → 0 | `0x53c80` | `binary`                                 |
| removed |  -31.03ms | 0.6% → 0.0% |    31.0ms → 0ms |  31 → 0 | `0x140b0` | `binary`                                 |

##### Ours

|  Change |     Delta |           % |          Time | Samples | Function  | Location |
| ------: | --------: | ----------: | ------------: | ------: | --------- | -------- |
| removed | -203.20ms | 3.9% → 0.0% | 203.2ms → 0ms | 203 → 0 | `0x138f0` | `binary` |
| removed | -148.15ms | 2.8% → 0.0% | 148.1ms → 0ms | 148 → 0 | `0x1392c` | `binary` |
| removed | -125.13ms | 2.4% → 0.0% | 125.1ms → 0ms | 125 → 0 | `0x13910` | `binary` |
| removed |  -75.08ms | 1.4% → 0.0% |  75.1ms → 0ms |  75 → 0 | `0x1396c` | `binary` |
| removed |  -74.07ms | 1.4% → 0.0% |  74.1ms → 0ms |  74 → 0 | `0x1391c` | `binary` |
| removed |  -67.07ms | 1.3% → 0.0% |  67.1ms → 0ms |  67 → 0 | `0x138fc` | `binary` |
| removed |  -66.07ms | 1.3% → 0.0% |  66.1ms → 0ms |  66 → 0 | `0x433d0` | `binary` |
| removed |  -64.06ms | 1.2% → 0.0% |  64.1ms → 0ms |  64 → 0 | `0x13904` | `binary` |
| removed |  -62.06ms | 1.2% → 0.0% |  62.1ms → 0ms |  62 → 0 | `0x139b0` | `binary` |
| removed |  -60.06ms | 1.1% → 0.0% |  60.1ms → 0ms |  60 → 0 | `0x139a8` | `binary` |
| removed |  -52.05ms | 1.0% → 0.0% |  52.1ms → 0ms |  52 → 0 | `0x13978` | `binary` |
| removed |  -46.05ms | 0.9% → 0.0% |  46.0ms → 0ms |  46 → 0 | `0x53b84` | `binary` |
| removed |  -42.04ms | 0.8% → 0.0% |  42.0ms → 0ms |  42 → 0 | `0x53c64` | `binary` |
| removed |  -41.04ms | 0.8% → 0.0% |  41.0ms → 0ms |  41 → 0 | `0x131a4` | `binary` |
| removed |  -40.04ms | 0.8% → 0.0% |  40.0ms → 0ms |  40 → 0 | `0x13990` | `binary` |
| removed |  -35.04ms | 0.7% → 0.0% |  35.0ms → 0ms |  35 → 0 | `0x53bb4` | `binary` |
| removed |  -31.03ms | 0.6% → 0.0% |  31.0ms → 0ms |  31 → 0 | `0x53c80` | `binary` |
| removed |  -31.03ms | 0.6% → 0.0% |  31.0ms → 0ms |  31 → 0 | `0x140b0` | `binary` |
| removed |  -30.03ms | 0.6% → 0.0% |  30.0ms → 0ms |  30 → 0 | `0x138c8` | `binary` |
| removed |  -29.03ms | 0.6% → 0.0% |  29.0ms → 0ms |  29 → 0 | `0x63400` | `binary` |

##### Native

|  Change |     Delta |            % |            Time | Samples | Function  | Location                                 |
| ------: | --------: | -----------: | --------------: | ------: | --------- | ---------------------------------------- |
|  -92.4% | -109.11ms |  2.3% → 0.2% | 118.1ms → 9.0ms | 118 → 9 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -56.06ms |  1.1% → 0.0% |    56.1ms → 0ms |  56 → 0 | `0x9e670` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -13.01ms |  0.2% → 0.0% |    13.0ms → 0ms |  13 → 0 | `0x9d100` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -12.01ms |  0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `0x9d184` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.01ms |  0.2% → 0.0% |    10.0ms → 0ms |  10 → 0 | `0x9d11c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -6.01ms |  0.1% → 0.0% |     6.0ms → 0ms |   6 → 0 | `0x9d138` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.01ms |  0.1% → 0.0% |     5.0ms → 0ms |   5 → 0 | `0x9d150` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d168` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9e580` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d114` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e674` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `0x9d210` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e5c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e590` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e5e0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e678` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9d148` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0xddb88` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9e680` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x914e8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Kernel

|  Change |   Delta |            % |          Time | Samples | Function    | Location            |
| ------: | ------: | -----------: | ------------: | ------: | ----------- | ------------------- |
| removed | -4.00ms |  0.1% → 0.0% |   4.0ms → 0ms |   4 → 0 | `0x3a4ee0`  | `[kernel.kallsyms]` |
|  -50.0% | -3.00ms |         0.1% | 6.0ms → 3.0ms |   6 → 3 | `0x14b23b8` | `[kernel.kallsyms]` |
| removed | -3.00ms |  0.1% → 0.0% |   3.0ms → 0ms |   3 → 0 | `0x14837b8` | `[kernel.kallsyms]` |
|  -66.7% | -2.00ms | 0.1% → <0.1% | 3.0ms → 1.0ms |   3 → 1 | `0x3c3850`  | `[kernel.kallsyms]` |
|  -66.7% | -2.00ms | 0.1% → <0.1% | 3.0ms → 1.0ms |   3 → 1 | `0x39db44`  | `[kernel.kallsyms]` |
|  -40.0% | -2.00ms |         0.1% | 5.0ms → 3.0ms |   5 → 3 | `0x14b2aac` | `[kernel.kallsyms]` |
|  -40.0% | -2.00ms |         0.1% | 5.0ms → 3.0ms |   5 → 3 | `0x2be198`  | `[kernel.kallsyms]` |
| removed | -2.00ms | <0.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x34b3e8`  | `[kernel.kallsyms]` |
| removed | -2.00ms | <0.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x3a3538`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x315ccc`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x325cc0`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x3a4b04`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x2ab7f4`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x33e980`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x770c24`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x168a20`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x3a2db8`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x14c2704` | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x3157e4`  | `[kernel.kallsyms]` |
| removed | -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x39edcc`  | `[kernel.kallsyms]` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|    Change |     Delta |             % |            Time |       Samples | Function  | Location                                 |
| --------: | --------: | ------------: | --------------: | ------------: | --------- | ---------------------------------------- |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s |     0 → 5,954 | `0x16900` | `binary`                                 |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s |     0 → 5,954 | `0x13e30` | `binary`                                 |
|       new |   +4.174s |  0.0% → 70.0% |     0ms → 4.17s |     0 → 4,170 | `0x15964` | `binary`                                 |
|       new |   +2.810s |  0.0% → 47.2% |     0ms → 2.81s |     0 → 2,808 | `0x5eff4` | `binary`                                 |
|       new |   +2.337s |  0.0% → 39.2% |     0ms → 2.33s |     0 → 2,335 | `0x78ff4` | `binary`                                 |
|       new |   +2.189s |  0.0% → 36.7% |     0ms → 2.18s |     0 → 2,187 | `0x672f0` | `binary`                                 |
|       new |   +2.138s |  0.0% → 35.9% |     0ms → 2.13s |     0 → 2,136 | `0x6639c` | `binary`                                 |
|       new |   +1.793s |  0.0% → 30.1% |     0ms → 1.79s |     0 → 1,792 | `0x6503c` | `binary`                                 |
|       new |   +1.696s |  0.0% → 28.5% |     0ms → 1.69s |     0 → 1,695 | `0x61a90` | `binary`                                 |
|       new |   +1.227s |  0.0% → 20.6% |     0ms → 1.22s |     0 → 1,226 | `0x71d44` | `binary`                                 |
|       new |   +1.201s |  0.0% → 20.2% |     0ms → 1.20s |     0 → 1,200 | `0x61f50` | `binary`                                 |
|       new |   +1.148s |  0.0% → 19.3% |     0ms → 1.14s |     0 → 1,147 | `0x674d4` | `binary`                                 |
|       new | +967.97ms |  0.0% → 16.2% |   0ms → 968.0ms |       0 → 967 | `0x6f75c` | `binary`                                 |
|       new | +921.92ms |  0.0% → 15.5% |   0ms → 921.9ms |       0 → 921 | `0x6a0c8` | `binary`                                 |
|       new | +912.91ms |  0.0% → 15.3% |   0ms → 912.9ms |       0 → 912 | `0x672d4` | `binary`                                 |
|       new | +755.76ms |  0.0% → 12.7% |   0ms → 755.8ms |       0 → 755 | `0x6aea0` | `binary`                                 |
|       new | +728.73ms |  0.0% → 12.2% |   0ms → 728.7ms |       0 → 728 | `0x5ebe0` | `binary`                                 |
| +72500.0% | +725.73ms | <0.1% → 12.2% | 1.0ms → 726.7ms |       1 → 726 | `0x6944c` | `binary`                                 |
|    +13.6% | +715.72ms |        100.0% |   5.24s → 5.95s | 5,239 → 5,954 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|    +13.6% | +715.72ms |        100.0% |   5.24s → 5.95s | 5,239 → 5,954 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Ours

|    Change |     Delta |             % |            Time |   Samples | Function  | Location |
| --------: | --------: | ------------: | --------------: | --------: | --------- | -------- |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s | 0 → 5,954 | `0x16900` | `binary` |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s | 0 → 5,954 | `0x13e30` | `binary` |
|       new |   +4.174s |  0.0% → 70.0% |     0ms → 4.17s | 0 → 4,170 | `0x15964` | `binary` |
|       new |   +2.810s |  0.0% → 47.2% |     0ms → 2.81s | 0 → 2,808 | `0x5eff4` | `binary` |
|       new |   +2.337s |  0.0% → 39.2% |     0ms → 2.33s | 0 → 2,335 | `0x78ff4` | `binary` |
|       new |   +2.189s |  0.0% → 36.7% |     0ms → 2.18s | 0 → 2,187 | `0x672f0` | `binary` |
|       new |   +2.138s |  0.0% → 35.9% |     0ms → 2.13s | 0 → 2,136 | `0x6639c` | `binary` |
|       new |   +1.793s |  0.0% → 30.1% |     0ms → 1.79s | 0 → 1,792 | `0x6503c` | `binary` |
|       new |   +1.696s |  0.0% → 28.5% |     0ms → 1.69s | 0 → 1,695 | `0x61a90` | `binary` |
|       new |   +1.227s |  0.0% → 20.6% |     0ms → 1.22s | 0 → 1,226 | `0x71d44` | `binary` |
|       new |   +1.201s |  0.0% → 20.2% |     0ms → 1.20s | 0 → 1,200 | `0x61f50` | `binary` |
|       new |   +1.148s |  0.0% → 19.3% |     0ms → 1.14s | 0 → 1,147 | `0x674d4` | `binary` |
|       new | +967.97ms |  0.0% → 16.2% |   0ms → 968.0ms |   0 → 967 | `0x6f75c` | `binary` |
|       new | +921.92ms |  0.0% → 15.5% |   0ms → 921.9ms |   0 → 921 | `0x6a0c8` | `binary` |
|       new | +912.91ms |  0.0% → 15.3% |   0ms → 912.9ms |   0 → 912 | `0x672d4` | `binary` |
|       new | +755.76ms |  0.0% → 12.7% |   0ms → 755.8ms |   0 → 755 | `0x6aea0` | `binary` |
|       new | +728.73ms |  0.0% → 12.2% |   0ms → 728.7ms |   0 → 728 | `0x5ebe0` | `binary` |
| +72500.0% | +725.73ms | <0.1% → 12.2% | 1.0ms → 726.7ms |   1 → 726 | `0x6944c` | `binary` |
|       new | +699.70ms |  0.0% → 11.7% |   0ms → 699.7ms |   0 → 699 | `0x5e5a4` | `binary` |
|       new | +650.65ms |  0.0% → 10.9% |   0ms → 650.7ms |   0 → 650 | `0x68820` | `binary` |

##### Native

|  Change |     Delta |            % |          Time |       Samples | Function  | Location                                 |
| ------: | --------: | -----------: | ------------: | ------------: | --------- | ---------------------------------------- |
|  +13.6% | +715.72ms |       100.0% | 5.24s → 5.95s | 5,239 → 5,954 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +13.6% | +715.72ms |       100.0% | 5.24s → 5.95s | 5,239 → 5,954 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +39.04ms |  0.0% → 0.7% |  0ms → 39.0ms |        0 → 39 | `0xe3e00` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +24.02ms |  0.0% → 0.4% |  0ms → 24.0ms |        0 → 24 | `0x92f68` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |         0 → 4 | `0xdd2b4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |         0 → 4 | `0x91d0c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x91bfc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% |   +2.00ms | <0.1% → 0.1% | 1.0ms → 3.0ms |         1 → 3 | `0x90818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +2.00ms | <0.1% → 0.1% | 2.0ms → 4.0ms |         2 → 4 | `0x9189c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `0x8faf4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `0x91b94` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x8e9cc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x900c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92284` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x91b64` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8faa0` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8fc14` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x901c8` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x9d20c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92240` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Kernel

|  Change |    Delta |            % |            Time | Samples | Function    | Location            |
| ------: | -------: | -----------: | --------------: | ------: | ----------- | ------------------- |
|     new | +36.04ms |  0.0% → 0.6% |    0ms → 36.0ms |  0 → 36 | `0x3b21fc`  | `[kernel.kallsyms]` |
|     new | +36.04ms |  0.0% → 0.6% |    0ms → 36.0ms |  0 → 36 | `0x3b253c`  | `[kernel.kallsyms]` |
|     new | +36.04ms |  0.0% → 0.6% |    0ms → 36.0ms |  0 → 36 | `0x3b25d4`  | `[kernel.kallsyms]` |
|  +50.0% | +12.01ms |  0.5% → 0.6% | 24.0ms → 36.0ms | 24 → 36 | `0x3b15e4`  | `[kernel.kallsyms]` |
|  +47.8% | +11.01ms |  0.4% → 0.6% | 23.0ms → 34.0ms | 23 → 34 | `0x2ab954`  | `[kernel.kallsyms]` |
|  +44.0% | +11.01ms |  0.5% → 0.6% | 25.0ms → 36.0ms | 25 → 36 | `0x7768d0`  | `[kernel.kallsyms]` |
|  +41.7% | +10.01ms |  0.5% → 0.6% | 24.0ms → 34.0ms | 24 → 34 | `0x4cb8b8`  | `[kernel.kallsyms]` |
|  +36.0% |  +9.01ms |  0.5% → 0.6% | 25.0ms → 34.0ms | 25 → 34 | `0x3b1aa0`  | `[kernel.kallsyms]` |
|  +36.0% |  +9.01ms |  0.5% → 0.6% | 25.0ms → 34.0ms | 25 → 34 | `0x44a7e0`  | `[kernel.kallsyms]` |
|  +30.0% |  +6.01ms |         0.4% | 20.0ms → 26.0ms | 20 → 26 | `0xb54524`  | `[kernel.kallsyms]` |
|  +30.0% |  +6.01ms |         0.4% | 20.0ms → 26.0ms | 20 → 26 | `0x2ab6f8`  | `[kernel.kallsyms]` |
| +500.0% |  +5.01ms | <0.1% → 0.1% |   1.0ms → 6.0ms |   1 → 6 | `0x2aad18`  | `[kernel.kallsyms]` |
| +500.0% |  +5.01ms | <0.1% → 0.1% |   1.0ms → 6.0ms |   1 → 6 | `0x2ab618`  | `[kernel.kallsyms]` |
|   +6.2% |  +4.00ms |         1.2% | 65.1ms → 69.1ms | 65 → 69 | `0x2ecb8`   | `[kernel.kallsyms]` |
|   +6.1% |  +4.00ms |  1.3% → 1.2% | 66.1ms → 70.1ms | 66 → 70 | `0x2ed74`   | `[kernel.kallsyms]` |
|   +6.1% |  +4.00ms |  1.3% → 1.2% | 66.1ms → 70.1ms | 66 → 70 | `0x14b23c0` | `[kernel.kallsyms]` |
| +133.3% |  +4.00ms |         0.1% |   3.0ms → 7.0ms |   3 → 7 | `0x39db08`  | `[kernel.kallsyms]` |
| +200.0% |  +4.00ms | <0.1% → 0.1% |   2.0ms → 6.0ms |   2 → 6 | `0x3d17e4`  | `[kernel.kallsyms]` |
| +200.0% |  +4.00ms | <0.1% → 0.1% |   2.0ms → 6.0ms |   2 → 6 | `0x3d171c`  | `[kernel.kallsyms]` |
| +200.0% |  +4.00ms | <0.1% → 0.1% |   2.0ms → 6.0ms |   2 → 6 | `0x779ba8`  | `[kernel.kallsyms]` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Ours

|  Change |     Delta |             % |          Time |   Samples | Function  | Location |
| ------: | --------: | ------------: | ------------: | --------: | --------- | -------- |
| removed |   -5.244s | 100.0% → 0.0% |   5.24s → 0ms | 5,239 → 0 | `0x1130c` | `binary` |
| removed |   -5.244s | 100.0% → 0.0% |   5.24s → 0ms | 5,239 → 0 | `0xdf70`  | `binary` |
| removed |   -3.903s |  74.4% → 0.0% |   3.90s → 0ms | 3,900 → 0 | `0x10144` | `binary` |
| removed |   -2.659s |  50.7% → 0.0% |   2.65s → 0ms | 2,657 → 0 | `0x368f8` | `binary` |
| removed |   -2.133s |  40.7% → 0.0% |   2.13s → 0ms | 2,131 → 0 | `0x4aa18` | `binary` |
| removed |   -2.012s |  38.4% → 0.0% |   2.01s → 0ms | 2,010 → 0 | `0x45be0` | `binary` |
| removed |   -1.704s |  32.5% → 0.0% |   1.70s → 0ms | 1,703 → 0 | `0x44b48` | `binary` |
| removed |   -1.662s |  31.7% → 0.0% |   1.66s → 0ms | 1,661 → 0 | `0x6449c` | `binary` |
| removed |   -1.622s |  30.9% → 0.0% |   1.62s → 0ms | 1,621 → 0 | `0x383d0` | `binary` |
| removed |   -1.304s |  24.9% → 0.0% |   1.30s → 0ms | 1,303 → 0 | `0x62fd4` | `binary` |
| removed |   -1.206s |  23.0% → 0.0% |   1.20s → 0ms | 1,205 → 0 | `0x36b64` | `binary` |
| removed |   -1.159s |  22.1% → 0.0% |   1.15s → 0ms | 1,158 → 0 | `0x537bc` | `binary` |
| removed |   -1.085s |  20.7% → 0.0% |   1.08s → 0ms | 1,084 → 0 | `0x53c28` | `binary` |
| removed | -775.78ms |  14.8% → 0.0% | 775.8ms → 0ms |   775 → 0 | `0x642d8` | `binary` |
| removed | -703.70ms |  13.4% → 0.0% | 703.7ms → 0ms |   703 → 0 | `0x66174` | `binary` |
| removed | -678.68ms |  12.9% → 0.0% | 678.7ms → 0ms |   678 → 0 | `0x36d98` | `binary` |
| removed | -653.65ms |  12.5% → 0.0% | 653.7ms → 0ms |   653 → 0 | `0x58e54` | `binary` |
| removed | -650.65ms |  12.4% → 0.0% | 650.7ms → 0ms |   650 → 0 | `0x3695c` | `binary` |
| removed | -637.64ms |  12.2% → 0.0% | 637.6ms → 0ms |   637 → 0 | `0x64480` | `binary` |
| removed | -624.62ms |  11.9% → 0.0% | 624.6ms → 0ms |   624 → 0 | `0x66a6c` | `binary` |

##### Native

|  Change |     Delta |           % |            Time | Samples | Function  | Location                                 |
| ------: | --------: | ----------: | --------------: | ------: | --------- | ---------------------------------------- |
|  -92.4% | -109.11ms | 2.3% → 0.2% | 118.1ms → 9.0ms | 118 → 9 | `0x9d200` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -86.09ms | 1.6% → 0.0% |    86.1ms → 0ms |  86 → 0 | `0x9e670` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -29.03ms | 0.6% → 0.0% |    29.0ms → 0ms |  29 → 0 | `0xddb88` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -13.01ms | 0.2% → 0.0% |    13.0ms → 0ms |  13 → 0 | `0x9d100` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -12.01ms | 0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `0x9e674` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -12.01ms | 0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `0x9d184` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.01ms | 0.2% → 0.0% |    10.0ms → 0ms |  10 → 0 | `0x9d11c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -52.9% |   -9.01ms | 0.3% → 0.1% |  17.0ms → 8.0ms |  17 → 8 | `0x92a9c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -9.01ms | 0.2% → 0.0% |     9.0ms → 0ms |   9 → 0 | `0x9405c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -58.3% |   -7.01ms | 0.2% → 0.1% |  12.0ms → 5.0ms |  12 → 5 | `0x8fa48` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -58.3% |   -7.01ms | 0.2% → 0.1% |  12.0ms → 5.0ms |  12 → 5 | `0x90240` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -6.01ms | 0.1% → 0.0% |     6.0ms → 0ms |   6 → 0 | `0x9d138` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -38.5% |   -5.01ms | 0.2% → 0.1% |  13.0ms → 8.0ms |  13 → 8 | `0xe3acc` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -38.5% |   -5.01ms | 0.2% → 0.1% |  13.0ms → 8.0ms |  13 → 8 | `0x8f988` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.01ms | 0.1% → 0.0% |     5.0ms → 0ms |   5 → 0 | `0x9d150` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -62.5% |   -5.01ms | 0.2% → 0.1% |   8.0ms → 3.0ms |   8 → 3 | `0x9245c` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -19.0% |   -4.00ms | 0.4% → 0.3% | 21.0ms → 17.0ms | 21 → 17 | `0xdda44` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms | 0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d168` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms | 0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9e580` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms | 0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d114` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Kernel

|  Change |    Delta |            % |              Time |   Samples | Function    | Location            |
| ------: | -------: | -----------: | ----------------: | --------: | ----------- | ------------------- |
| removed | -26.03ms |  0.5% → 0.0% |      26.0ms → 0ms |    26 → 0 | `0x3b47b4`  | `[kernel.kallsyms]` |
| removed | -26.03ms |  0.5% → 0.0% |      26.0ms → 0ms |    26 → 0 | `0x3b4878`  | `[kernel.kallsyms]` |
| removed | -25.03ms |  0.5% → 0.0% |      25.0ms → 0ms |    25 → 0 | `0x3b3c5c`  | `[kernel.kallsyms]` |
|  -24.4% | -10.01ms |  0.8% → 0.5% |   41.0ms → 31.0ms |   41 → 31 | `0x14b33d0` | `[kernel.kallsyms]` |
|   -7.8% |  -9.01ms |  2.2% → 1.8% | 115.1ms → 106.1ms | 115 → 106 | `0x15a0`    | `[kernel.kallsyms]` |
|  -27.3% |  -9.01ms |  0.6% → 0.4% |   33.0ms → 24.0ms |   33 → 24 | `0x315eb8`  | `[kernel.kallsyms]` |
|  -25.7% |  -9.01ms |  0.7% → 0.4% |   35.0ms → 26.0ms |   35 → 26 | `0x14c6048` | `[kernel.kallsyms]` |
|  -22.9% |  -8.01ms |  0.7% → 0.5% |   35.0ms → 27.0ms |   35 → 27 | `0x14c6678` | `[kernel.kallsyms]` |
|  -22.2% |  -8.01ms |  0.7% → 0.5% |   36.0ms → 28.0ms |   36 → 28 | `0x14b2ab4` | `[kernel.kallsyms]` |
| removed |  -7.01ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `0x31daf4`  | `[kernel.kallsyms]` |
| removed |  -7.01ms |  0.1% → 0.0% |       7.0ms → 0ms |     7 → 0 | `0x31e728`  | `[kernel.kallsyms]` |
|  -87.5% |  -7.01ms | 0.2% → <0.1% |     8.0ms → 1.0ms |     8 → 1 | `0x3383e8`  | `[kernel.kallsyms]` |
|  -58.3% |  -7.01ms |  0.2% → 0.1% |    12.0ms → 5.0ms |    12 → 5 | `0x33851c`  | `[kernel.kallsyms]` |
|  -58.3% |  -7.01ms |  0.2% → 0.1% |    12.0ms → 5.0ms |    12 → 5 | `0x3398ac`  | `[kernel.kallsyms]` |
|  -20.0% |  -7.01ms |  0.7% → 0.5% |   35.0ms → 28.0ms |   35 → 28 | `0x36870`   | `[kernel.kallsyms]` |
|  -58.3% |  -7.01ms |  0.2% → 0.1% |    12.0ms → 5.0ms |    12 → 5 | `0x31b6c0`  | `[kernel.kallsyms]` |
| removed |  -6.01ms |  0.1% → 0.0% |       6.0ms → 0ms |     6 → 0 | `0x3a4b04`  | `[kernel.kallsyms]` |
| removed |  -5.01ms |  0.1% → 0.0% |       5.0ms → 0ms |     5 → 0 | `0x361c28`  | `[kernel.kallsyms]` |
|  -38.5% |  -5.01ms |  0.2% → 0.1% |    13.0ms → 8.0ms |    13 → 8 | `0x31b744`  | `[kernel.kallsyms]` |
| removed |  -4.00ms |  0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `0x3a4ee0`  | `[kernel.kallsyms]` |

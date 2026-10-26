# CPU profile diff

Took 5.24s → 5.95s (+715.72ms, +13.6%) over 5,239 → 5,954 samples (1.0ms per sample).

| Category | Change |     Delta |             % |              Time |       Samples |
| -------- | -----: | --------: | ------------: | ----------------: | ------------: |
| Ours     | +19.8% | +961.96ms | 92.6% → 97.6% |     4.85s → 5.81s | 4,852 → 5,813 |
| Native   | -87.9% | -239.24ms |   5.2% → 0.6% |  272.3ms → 33.0ms |      272 → 33 |
| Kernel   |  -6.1% |   -7.01ms |   2.2% → 1.8% | 115.1ms → 108.1ms |     115 → 108 |

Paths starting with `./` or `../` are relative to `/tmp/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 5.24s → 0ms (100.0% → 0.0%) 0x1130c at ./binary
│   ├── 3.90s → 0ms (74.4% → 0.0%) 0x10144
│   │   ├── 1.60s → 0ms (30.6% → 0.0%) 0x44b48
│   │   │   ├── … 1.50s → 0ms (28.7% → 0.0%) 0x4aa18 at ./binary
│   │   │   │   └── 1.50s → 0ms (28.7% → 0.0%) 52 more callees, led by (15.7% → 0.0%) 0x383d0
│   │   │   └── 103.1ms → 0ms (2.0% → 0.0%) 17 more callees, led by (0.8% → 0.0%) 0x4a1ac
│   │   ├── 1.51s → 0ms (28.9% → 0.0%) 0x45be0
│   │   │   └── … 1.51s → 0ms (28.9% → 0.0%) 0x368f8 at ./binary
│   │   │       └── 1.51s → 0ms (28.9% → 0.0%) 25 more callees, led by (11.6% → 0.0%) 0x6449c at ./binary
│   │   └── 779.8ms → 0ms (14.9% → 0.0%) 19 more callees, led by (10.4% → 0.0%) 0x368f8
│   ├── 521.5ms → 0ms (9.9% → 0.0%) 0xf660
│   │   ├── 33.0ms → 0ms (0.6% → 0.0%, self 2.8% → 0.0% globally) 0x1392c
│   │   ├── 32.0ms → 0ms (0.6% → 0.0%, self 3.9% → 0.0% globally) 0x138f0
│   │   ├── 20.0ms → 0ms (0.4% → 0.0%, self 2.4% → 0.0% globally) 0x13910
│   │   ├── 17.0ms → 0ms (0.3% → 0.0%, self 1.3% → 0.0% globally) 0x138fc
│   │   ├── 15.0ms → 0ms (0.3% → 0.0%, self 1.4% → 0.0% globally) 0x1391c
│   │   ├── 15.0ms → 0ms (0.3% → 0.0%, self 1.2% → 0.0% globally) 0x13904
│   │   ├── 11.0ms → 0ms (0.2% → 0.0%, self 1.4% → 0.0% globally) 0x1396c
│   │   ├── 8.0ms → 0ms (0.2% → 0.0%, self 1.2% → 0.0% globally) 0x139b0
│   │   └── 363.4ms → 0ms (6.9% → 0.0%) 91 more callees, led by (0.6% → 0.0%) 0x131a4
│   ├── 67.1ms → 0ms (1.3% → 0.0%) 0xf68c
│   │   ├── 27.0ms → 0ms (0.5% → 0.0%, self 2.3% → 0.2% globally) 0x9d200 at /usr/lib/aarch64-linux-gnu/libc.so.6
│   │   └── 11.0ms → 0ms (0.2% → 0.0%) 0x11f14
│   └── 751.8ms → 0ms (14.3% → 0.0%) 37 more callees, led by (9.6% → 0.0%) 0xf7d4
└── … 0ms → 5.95s (0.0% → 100.0%) 0x16900 at ./binary
    ├── 0ms → 4.17s (0.0% → 70.0%) 0x15964
    │   ├── 0ms → 1.70s (0.0% → 28.6%) 0x6503c
    │   │   └── 0ms → 1.70s (0.0% → 28.6%) 18 more callees, led by (0.0% → 27.0%) 0x78ff4 at ./binary
    │   ├── 0ms → 1.63s (0.0% → 27.5%) 0x6639c
    │   │   └── … 0ms → 1.62s (0.0% → 27.2%) 0x5eff4 at ./binary
    │   │       └── 0ms → 1.62s (0.0% → 27.2%) 18 more callees, led by (0.0% → 17.9%) 0x672f0 at ./binary
    │   └── 0ms → 830.8ms (0.0% → 13.9%) 26 more callees, led by (0.0% → 9.3%) 0x5eff4
    ├── 0ms → 573.6ms (0.0% → 9.6%) 0x14f10
    │   ├── 0ms → 45.0ms (0.0% → 0.8%, self 0.0% → 3.1% globally) 0x70014
    │   ├── 0ms → 33.0ms (0.0% → 0.6%, self 0.0% → 2.0% globally) 0x70050
    │   ├── 0ms → 19.0ms (0.0% → 0.3%, self 0.0% → 1.4% globally) 0x70034
    │   ├── 0ms → 13.0ms (0.0% → 0.2%, self 0.0% → 1.0% globally) 0x700cc
    │   └── 0ms → 455.5ms (0.0% → 7.6%) 93 more callees, led by (0.0% → 0.8%) 0x6f844
    ├── … 0ms → 179.2ms (0.0% → 3.0%, self 0.0% → 6.2% globally) 0x9a704 at ./binary
    └── 0ms → 1.01s (0.0% → 17.1%) 30 more callees, led by (0.0% → 10.4%) 0x150ac
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |     Delta |           % |          Time | Samples | Function  | Location   |
| -----: | --------: | ----------: | ------------: | ------: | --------- | ---------- |
|    new | +372.37ms | 0.0% → 6.2% | 0ms → 372.4ms | 0 → 372 | `0x9a704` | `./binary` |
|    new | +184.18ms | 0.0% → 3.1% | 0ms → 184.2ms | 0 → 184 | `0x70014` | `./binary` |
|    new | +121.12ms | 0.0% → 2.0% | 0ms → 121.1ms | 0 → 121 | `0x70050` | `./binary` |
|    new |  +82.08ms | 0.0% → 1.4% |  0ms → 82.1ms |  0 → 82 | `0x70034` | `./binary` |
|    new |  +68.07ms | 0.0% → 1.1% |  0ms → 68.1ms |  0 → 68 | `0x6f6c4` | `./binary` |
|    new |  +62.06ms | 0.0% → 1.0% |  0ms → 62.1ms |  0 → 62 | `0x700cc` | `./binary` |
|    new |  +60.06ms | 0.0% → 1.0% |  0ms → 60.1ms |  0 → 60 | `0x6f844` | `./binary` |
|    new |  +52.05ms | 0.0% → 0.9% |  0ms → 52.1ms |  0 → 52 | `0x70040` | `./binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x7b36c` | `./binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x70090` | `./binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x70918` | `./binary` |
|    new |  +51.05ms | 0.0% → 0.9% |  0ms → 51.1ms |  0 → 51 | `0x70020` | `./binary` |
|    new |  +48.05ms | 0.0% → 0.8% |  0ms → 48.0ms |  0 → 48 | `0x7009c` | `./binary` |
|    new |  +47.05ms | 0.0% → 0.8% |  0ms → 47.0ms |  0 → 47 | `0x70028` | `./binary` |
|    new |  +45.05ms | 0.0% → 0.8% |  0ms → 45.0ms |  0 → 45 | `0x674a0` | `./binary` |
|    new |  +42.04ms | 0.0% → 0.7% |  0ms → 42.0ms |  0 → 42 | `0x6f834` | `./binary` |
|    new |  +41.04ms | 0.0% → 0.7% |  0ms → 41.0ms |  0 → 41 | `0x700d4` | `./binary` |
|    new |  +41.04ms | 0.0% → 0.7% |  0ms → 41.0ms |  0 → 41 | `0x6f798` | `./binary` |
|    new |  +40.04ms | 0.0% → 0.7% |  0ms → 40.0ms |  0 → 40 | `0x6feb8` | `./binary` |
|    new |  +39.04ms | 0.0% → 0.7% |  0ms → 39.0ms |  0 → 39 | `0x6f6f4` | `./binary` |

##### Native

|  Change |   Delta |            % |          Time | Samples | Function  | Location                               |
| ------: | ------: | -----------: | ------------: | ------: | --------- | -------------------------------------- |
|     new | +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |   0 → 2 | `0xe3e00` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |   0 → 2 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +1.00ms |        <0.1% | 1.0ms → 2.0ms |   1 → 2 | `0x8e9cc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xdda44` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xde3c8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xdd2b4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x91b64` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8faa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x8fc14` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x901c8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x9d20c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92240` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0xdd9f8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92dcc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x91b68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x92c70` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |   0 → 1 | `0x90b58` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |           % |            Time | Samples | Function  | Location                               |
| ------: | --------: | ----------: | --------------: | ------: | --------- | -------------------------------------- |
| removed | -203.20ms | 3.9% → 0.0% |   203.2ms → 0ms | 203 → 0 | `0x138f0` | `./binary`                             |
| removed | -148.15ms | 2.8% → 0.0% |   148.1ms → 0ms | 148 → 0 | `0x1392c` | `./binary`                             |
| removed | -125.13ms | 2.4% → 0.0% |   125.1ms → 0ms | 125 → 0 | `0x13910` | `./binary`                             |
|  -92.4% | -109.11ms | 2.3% → 0.2% | 118.1ms → 9.0ms | 118 → 9 | `0x9d200` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -75.08ms | 1.4% → 0.0% |    75.1ms → 0ms |  75 → 0 | `0x1396c` | `./binary`                             |
| removed |  -74.07ms | 1.4% → 0.0% |    74.1ms → 0ms |  74 → 0 | `0x1391c` | `./binary`                             |
| removed |  -67.07ms | 1.3% → 0.0% |    67.1ms → 0ms |  67 → 0 | `0x138fc` | `./binary`                             |
| removed |  -66.07ms | 1.3% → 0.0% |    66.1ms → 0ms |  66 → 0 | `0x433d0` | `./binary`                             |
| removed |  -64.06ms | 1.2% → 0.0% |    64.1ms → 0ms |  64 → 0 | `0x13904` | `./binary`                             |
| removed |  -62.06ms | 1.2% → 0.0% |    62.1ms → 0ms |  62 → 0 | `0x139b0` | `./binary`                             |
| removed |  -60.06ms | 1.1% → 0.0% |    60.1ms → 0ms |  60 → 0 | `0x139a8` | `./binary`                             |
| removed |  -56.06ms | 1.1% → 0.0% |    56.1ms → 0ms |  56 → 0 | `0x9e670` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -52.05ms | 1.0% → 0.0% |    52.1ms → 0ms |  52 → 0 | `0x13978` | `./binary`                             |
| removed |  -46.05ms | 0.9% → 0.0% |    46.0ms → 0ms |  46 → 0 | `0x53b84` | `./binary`                             |
| removed |  -42.04ms | 0.8% → 0.0% |    42.0ms → 0ms |  42 → 0 | `0x53c64` | `./binary`                             |
| removed |  -41.04ms | 0.8% → 0.0% |    41.0ms → 0ms |  41 → 0 | `0x131a4` | `./binary`                             |
| removed |  -40.04ms | 0.8% → 0.0% |    40.0ms → 0ms |  40 → 0 | `0x13990` | `./binary`                             |
| removed |  -35.04ms | 0.7% → 0.0% |    35.0ms → 0ms |  35 → 0 | `0x53bb4` | `./binary`                             |
| removed |  -31.03ms | 0.6% → 0.0% |    31.0ms → 0ms |  31 → 0 | `0x53c80` | `./binary`                             |
| removed |  -31.03ms | 0.6% → 0.0% |    31.0ms → 0ms |  31 → 0 | `0x140b0` | `./binary`                             |

##### Ours

|  Change |     Delta |           % |          Time | Samples | Function  | Location   |
| ------: | --------: | ----------: | ------------: | ------: | --------- | ---------- |
| removed | -203.20ms | 3.9% → 0.0% | 203.2ms → 0ms | 203 → 0 | `0x138f0` | `./binary` |
| removed | -148.15ms | 2.8% → 0.0% | 148.1ms → 0ms | 148 → 0 | `0x1392c` | `./binary` |
| removed | -125.13ms | 2.4% → 0.0% | 125.1ms → 0ms | 125 → 0 | `0x13910` | `./binary` |
| removed |  -75.08ms | 1.4% → 0.0% |  75.1ms → 0ms |  75 → 0 | `0x1396c` | `./binary` |
| removed |  -74.07ms | 1.4% → 0.0% |  74.1ms → 0ms |  74 → 0 | `0x1391c` | `./binary` |
| removed |  -67.07ms | 1.3% → 0.0% |  67.1ms → 0ms |  67 → 0 | `0x138fc` | `./binary` |
| removed |  -66.07ms | 1.3% → 0.0% |  66.1ms → 0ms |  66 → 0 | `0x433d0` | `./binary` |
| removed |  -64.06ms | 1.2% → 0.0% |  64.1ms → 0ms |  64 → 0 | `0x13904` | `./binary` |
| removed |  -62.06ms | 1.2% → 0.0% |  62.1ms → 0ms |  62 → 0 | `0x139b0` | `./binary` |
| removed |  -60.06ms | 1.1% → 0.0% |  60.1ms → 0ms |  60 → 0 | `0x139a8` | `./binary` |
| removed |  -52.05ms | 1.0% → 0.0% |  52.1ms → 0ms |  52 → 0 | `0x13978` | `./binary` |
| removed |  -46.05ms | 0.9% → 0.0% |  46.0ms → 0ms |  46 → 0 | `0x53b84` | `./binary` |
| removed |  -42.04ms | 0.8% → 0.0% |  42.0ms → 0ms |  42 → 0 | `0x53c64` | `./binary` |
| removed |  -41.04ms | 0.8% → 0.0% |  41.0ms → 0ms |  41 → 0 | `0x131a4` | `./binary` |
| removed |  -40.04ms | 0.8% → 0.0% |  40.0ms → 0ms |  40 → 0 | `0x13990` | `./binary` |
| removed |  -35.04ms | 0.7% → 0.0% |  35.0ms → 0ms |  35 → 0 | `0x53bb4` | `./binary` |
| removed |  -31.03ms | 0.6% → 0.0% |  31.0ms → 0ms |  31 → 0 | `0x53c80` | `./binary` |
| removed |  -31.03ms | 0.6% → 0.0% |  31.0ms → 0ms |  31 → 0 | `0x140b0` | `./binary` |
| removed |  -30.03ms | 0.6% → 0.0% |  30.0ms → 0ms |  30 → 0 | `0x138c8` | `./binary` |
| removed |  -29.03ms | 0.6% → 0.0% |  29.0ms → 0ms |  29 → 0 | `0x63400` | `./binary` |

##### Native

|  Change |     Delta |            % |            Time | Samples | Function  | Location                               |
| ------: | --------: | -----------: | --------------: | ------: | --------- | -------------------------------------- |
|  -92.4% | -109.11ms |  2.3% → 0.2% | 118.1ms → 9.0ms | 118 → 9 | `0x9d200` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -56.06ms |  1.1% → 0.0% |    56.1ms → 0ms |  56 → 0 | `0x9e670` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -13.01ms |  0.2% → 0.0% |    13.0ms → 0ms |  13 → 0 | `0x9d100` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -12.01ms |  0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `0x9d184` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.01ms |  0.2% → 0.0% |    10.0ms → 0ms |  10 → 0 | `0x9d11c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -6.01ms |  0.1% → 0.0% |     6.0ms → 0ms |   6 → 0 | `0x9d138` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.01ms |  0.1% → 0.0% |     5.0ms → 0ms |   5 → 0 | `0x9d150` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d168` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9e580` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms |  0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d114` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e674` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `0x9d210` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e5c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e590` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e5e0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9e678` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9d148` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0xddb88` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9e680` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x914e8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x9a704` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +179.18ms | 0.0% → 48.1% | 0ms → 179.2ms | 0 → 179 | `0x90450` | `./binary` |
|    new | +121.12ms | 0.0% → 32.5% | 0ms → 121.1ms | 0 → 121 | `0x906b4` | `./binary` |
|    new |  +18.02ms |  0.0% → 4.8% |  0ms → 18.0ms |  0 → 18 | `0x16d70` | `./binary` |
|    new |   +9.01ms |  0.0% → 2.4% |   0ms → 9.0ms |   0 → 9 | `0x54d64` | `./binary` |
|    new |   +6.01ms |  0.0% → 1.6% |   0ms → 6.0ms |   0 → 6 | `0x7b824` | `./binary` |

##### `0x70014` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +139.14ms | 0.0% → 75.5% | 0ms → 139.1ms | 0 → 139 | `0x6f75c` | `./binary` |
|    new |  +45.05ms | 0.0% → 24.5% |  0ms → 45.0ms |  0 → 45 | `0x14f10` | `./binary` |

##### `0x70050` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +88.09ms | 0.0% → 72.7% | 0ms → 88.1ms |  0 → 88 | `0x6f75c` | `./binary` |
|    new | +33.03ms | 0.0% → 27.3% | 0ms → 33.0ms |  0 → 33 | `0x14f10` | `./binary` |

##### `0x70034` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +63.06ms | 0.0% → 76.8% | 0ms → 63.1ms |  0 → 63 | `0x6f75c` | `./binary` |
|    new | +19.02ms | 0.0% → 23.2% | 0ms → 19.0ms |  0 → 19 | `0x14f10` | `./binary` |

##### `0x6f6c4` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +15.02ms | 0.0% → 22.1% | 0ms → 15.0ms |  0 → 15 | `0x7cd84` | `./binary` |
|    new | +11.01ms | 0.0% → 16.2% | 0ms → 11.0ms |  0 → 11 | `0x7d0a8` | `./binary` |
|    new |  +4.00ms |  0.0% → 5.9% |  0ms → 4.0ms |   0 → 4 | `0x75014` | `./binary` |
|    new |  +4.00ms |  0.0% → 5.9% |  0ms → 4.0ms |   0 → 4 | `0x77768` | `./binary` |
|    new |  +3.00ms |  0.0% → 4.4% |  0ms → 3.0ms |   0 → 3 | `0x5f158` | `./binary` |

##### `0x700cc` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +49.05ms | 0.0% → 79.0% | 0ms → 49.0ms |  0 → 49 | `0x6f75c` | `./binary` |
|    new | +13.01ms | 0.0% → 21.0% | 0ms → 13.0ms |  0 → 13 | `0x14f10` | `./binary` |

##### `0x6f844` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +48.05ms | 0.0% → 80.0% | 0ms → 48.0ms |  0 → 48 | `0x14f10` | `./binary` |
|    new | +12.01ms | 0.0% → 20.0% | 0ms → 12.0ms |  0 → 12 | `0x6f75c` | `./binary` |

##### `0x70040` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +34.03ms | 0.0% → 65.4% | 0ms → 34.0ms |  0 → 34 | `0x6f75c` | `./binary` |
|    new | +18.02ms | 0.0% → 34.6% | 0ms → 18.0ms |  0 → 18 | `0x14f10` | `./binary` |

##### `0x7b36c` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +20.02ms | 0.0% → 39.2% | 0ms → 20.0ms |  0 → 20 | `0x5f554` | `./binary` |
|    new | +10.01ms | 0.0% → 19.6% | 0ms → 10.0ms |  0 → 10 | `0x69c74` | `./binary` |
|    new |  +6.01ms | 0.0% → 11.8% |  0ms → 6.0ms |   0 → 6 | `0x6a110` | `./binary` |
|    new |  +2.00ms |  0.0% → 3.9% |  0ms → 2.0ms |   0 → 2 | `0x5eb08` | `./binary` |
|    new |  +2.00ms |  0.0% → 3.9% |  0ms → 2.0ms |   0 → 2 | `0x69a64` | `./binary` |

##### `0x70090` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +45.05ms | 0.0% → 88.2% | 0ms → 45.0ms |  0 → 45 | `0x6f75c` | `./binary` |
|    new |  +6.01ms | 0.0% → 11.8% |  0ms → 6.0ms |   0 → 6 | `0x14f10` | `./binary` |

##### `0x70918` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +40.04ms | 0.0% → 78.4% | 0ms → 40.0ms |  0 → 40 | `0x674d4` | `./binary` |
|    new |  +9.01ms | 0.0% → 17.6% |  0ms → 9.0ms |   0 → 9 | `0x79dc4` | `./binary` |
|    new |  +2.00ms |  0.0% → 3.9% |  0ms → 2.0ms |   0 → 2 | `0x60f78` | `./binary` |

##### `0x70020` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +42.04ms | 0.0% → 82.4% | 0ms → 42.0ms |  0 → 42 | `0x6f75c` | `./binary` |
|    new |  +9.01ms | 0.0% → 17.6% |  0ms → 9.0ms |   0 → 9 | `0x14f10` | `./binary` |

##### `0x7009c` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +40.04ms | 0.0% → 83.3% | 0ms → 40.0ms |  0 → 40 | `0x6f75c` | `./binary` |
|    new |  +8.01ms | 0.0% → 16.7% |  0ms → 8.0ms |   0 → 8 | `0x14f10` | `./binary` |

##### `0x70028` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +36.04ms | 0.0% → 76.6% | 0ms → 36.0ms |  0 → 36 | `0x6f75c` | `./binary` |
|    new | +11.01ms | 0.0% → 23.4% | 0ms → 11.0ms |  0 → 11 | `0x14f10` | `./binary` |

##### `0x674a0` (`./binary`)

| Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| -----: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
|    new | +7.01ms | 0.0% → 15.6% | 0ms → 7.0ms |   0 → 7 | `0x7cd84` | `./binary` |
|    new | +6.01ms | 0.0% → 13.3% | 0ms → 6.0ms |   0 → 6 | `0x75014` | `./binary` |
|    new | +3.00ms |  0.0% → 6.7% | 0ms → 3.0ms |   0 → 3 | `0x7c504` | `./binary` |
|    new | +3.00ms |  0.0% → 6.7% | 0ms → 3.0ms |   0 → 3 | `0x6c938` | `./binary` |
|    new | +3.00ms |  0.0% → 6.7% | 0ms → 3.0ms |   0 → 3 | `0x75af8` | `./binary` |

##### `0x6f834` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +28.03ms | 0.0% → 66.7% | 0ms → 28.0ms |  0 → 28 | `0x14f10` | `./binary` |
|    new | +14.01ms | 0.0% → 33.3% | 0ms → 14.0ms |  0 → 14 | `0x6f75c` | `./binary` |

##### `0x700d4` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +34.03ms | 0.0% → 82.9% | 0ms → 34.0ms |  0 → 34 | `0x6f75c` | `./binary` |
|    new |  +7.01ms | 0.0% → 17.1% |  0ms → 7.0ms |   0 → 7 | `0x14f10` | `./binary` |

##### `0x6f798` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +33.03ms | 0.0% → 80.5% | 0ms → 33.0ms |  0 → 33 | `0x674d4` | `./binary` |
|    new |  +7.01ms | 0.0% → 17.1% |  0ms → 7.0ms |   0 → 7 | `0x79dc4` | `./binary` |
|    new |  +1.00ms |  0.0% → 2.4% |  0ms → 1.0ms |   0 → 1 | `0x60f78` | `./binary` |

##### `0x6feb8` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +26.03ms | 0.0% → 65.0% | 0ms → 26.0ms |  0 → 26 | `0x6f75c` | `./binary` |
|    new | +14.01ms | 0.0% → 35.0% | 0ms → 14.0ms |  0 → 14 | `0x14f10` | `./binary` |

##### `0x6f6f4` (`./binary`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
|    new | +36.04ms | 0.0% → 92.3% | 0ms → 36.0ms |  0 → 36 | `0x674d4` | `./binary` |
|    new |  +2.00ms |  0.0% → 5.1% |  0ms → 2.0ms |   0 → 2 | `0x79dc4` | `./binary` |
|    new |  +1.00ms |  0.0% → 2.6% |  0ms → 1.0ms |   0 → 1 | `0x61594` | `./binary` |

##### `0xe3e00` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x5112c` | `./binary` |

##### `0x8faf4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x92a9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8e9cc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `0x900c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xdda44` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x54dec` | `./binary` |

##### `0xde3c8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x5278c` | `./binary` |

##### `0xdd2b4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x95694` | `./binary` |

##### `0x92284` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x95898` | `./binary` |

##### `0x91b64` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8faa0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92a9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fc14` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x901c8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x91bfc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d20c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92240` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x74778` | `./binary` |

##### `0xdd9f8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x54dec` | `./binary` |

##### `0x92dcc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x959d4` | `./binary` |

##### `0x91b68` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92c70` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x4daf4` | `./binary` |

##### `0x90b58` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x91b94` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x39db08` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +133.3% | +4.00ms | 100.0% | 3.0ms → 7.0ms |   3 → 7 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x3c3834` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `0x7733f8` | `[kernel.kallsyms]` |

##### `0x14837cc` (`[kernel.kallsyms]`)

| Change |   Delta |      % |           Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | -------------: | ------: | ---------- | ------------------- |
| +22.2% | +2.00ms | 100.0% | 9.0ms → 11.0ms |  9 → 11 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x14837c4` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x14837d0` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x2aa344` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x2aad18` | `[kernel.kallsyms]` |

##### `0x14c6048` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller      | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x14c6678` | `[kernel.kallsyms]` |

##### `0x2bec84` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x2c0a60` | `[kernel.kallsyms]` |

##### `0x2c0a60` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x3158e0` | `[kernel.kallsyms]` |

##### `0x44d484` (`[kernel.kallsyms]`)

| Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `0x44d798` | `[kernel.kallsyms]` |

##### `0x2837d8` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x2865fc` | `[kernel.kallsyms]` |

##### `0x4ced8c` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x4fdb24` | `[kernel.kallsyms]` |

##### `0x30bf14` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x30c8f8` | `[kernel.kallsyms]` |

##### `0x1485f44` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller      | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x11d47b8` | `[kernel.kallsyms]` |

##### `0x3df9a8` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x44a794` | `[kernel.kallsyms]` |

##### `0x438f64` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x4cc4fc` | `[kernel.kallsyms]` |

##### `0x14831f4` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x3459b0` | `[kernel.kallsyms]` |

##### `0xfbee8` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x31e71c` | `[kernel.kallsyms]` |

##### `0x3092bc` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller      | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x14c6048` | `[kernel.kallsyms]` |

##### `0x77ee90` (`[kernel.kallsyms]`)

| Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x3aec80` | `[kernel.kallsyms]` |

##### `0x138f0` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -171.17ms | 84.2% → 0.0% | 171.2ms → 0ms | 171 → 0 | `0x53c28` | `./binary` |
| removed |  -32.03ms | 15.8% → 0.0% |  32.0ms → 0ms |  32 → 0 | `0xf660`  | `./binary` |

##### `0x1392c` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -115.12ms | 77.7% → 0.0% | 115.1ms → 0ms | 115 → 0 | `0x53c28` | `./binary` |
| removed |  -33.03ms | 22.3% → 0.0% |  33.0ms → 0ms |  33 → 0 | `0xf660`  | `./binary` |

##### `0x13910` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -105.11ms | 84.0% → 0.0% | 105.1ms → 0ms | 105 → 0 | `0x53c28` | `./binary` |
| removed |  -20.02ms | 16.0% → 0.0% |  20.0ms → 0ms |  20 → 0 | `0xf660`  | `./binary` |

##### `0x9d200` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location                               |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------------------------------------- |
| removed | -76.08ms |  64.4% → 0.0% | 76.1ms → 0ms |  76 → 0 | `0x6aa34` | `./binary`                             |
| removed | -27.03ms |  22.9% → 0.0% | 27.0ms → 0ms |  27 → 0 | `0xf68c`  | `./binary`                             |
|     new |  +9.01ms | 0.0% → 100.0% |  0ms → 9.0ms |   0 → 9 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -7.01ms |   5.9% → 0.0% |  7.0ms → 0ms |   7 → 0 | `0x122fc` | `./binary`                             |
| removed |  -4.00ms |   3.4% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x1130c` | `./binary`                             |

##### `0x1396c` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -64.06ms | 85.3% → 0.0% | 64.1ms → 0ms |  64 → 0 | `0x53c28` | `./binary` |
| removed | -11.01ms | 14.7% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0xf660`  | `./binary` |

##### `0x1391c` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -59.06ms | 79.7% → 0.0% | 59.1ms → 0ms |  59 → 0 | `0x53c28` | `./binary` |
| removed | -15.02ms | 20.3% → 0.0% | 15.0ms → 0ms |  15 → 0 | `0xf660`  | `./binary` |

##### `0x138fc` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -50.05ms | 74.6% → 0.0% | 50.1ms → 0ms |  50 → 0 | `0x53c28` | `./binary` |
| removed | -17.02ms | 25.4% → 0.0% | 17.0ms → 0ms |  17 → 0 | `0xf660`  | `./binary` |

##### `0x433d0` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -49.05ms | 74.2% → 0.0% | 49.0ms → 0ms |  49 → 0 | `0x62fd4` | `./binary` |
| removed | -16.02ms | 24.2% → 0.0% | 16.0ms → 0ms |  16 → 0 | `0x491a0` | `./binary` |
| removed |  -1.00ms |  1.5% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x369d4` | `./binary` |

##### `0x13904` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -49.05ms | 76.6% → 0.0% | 49.0ms → 0ms |  49 → 0 | `0x53c28` | `./binary` |
| removed | -15.02ms | 23.4% → 0.0% | 15.0ms → 0ms |  15 → 0 | `0xf660`  | `./binary` |

##### `0x139b0` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -54.05ms | 87.1% → 0.0% | 54.1ms → 0ms |  54 → 0 | `0x53c28` | `./binary` |
| removed |  -8.01ms | 12.9% → 0.0% |  8.0ms → 0ms |   8 → 0 | `0xf660`  | `./binary` |

##### `0x139a8` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -44.04ms | 73.3% → 0.0% | 44.0ms → 0ms |  44 → 0 | `0x53c28` | `./binary` |
| removed | -16.02ms | 26.7% → 0.0% | 16.0ms → 0ms |  16 → 0 | `0xf660`  | `./binary` |

##### `0x9e670` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -27.03ms | 48.2% → 0.0% | 27.0ms → 0ms |  27 → 0 | `0x6aa34` | `./binary` |
| removed | -10.01ms | 17.9% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0xf75c`  | `./binary` |
| removed |  -5.01ms |  8.9% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0xf140`  | `./binary` |
| removed |  -4.00ms |  7.1% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0xf68c`  | `./binary` |
| removed |  -4.00ms |  7.1% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x122fc` | `./binary` |

##### `0x13978` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -41.04ms | 78.8% → 0.0% | 41.0ms → 0ms |  41 → 0 | `0x53c28` | `./binary` |
| removed | -11.01ms | 21.2% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0xf660`  | `./binary` |

##### `0x53b84` (`./binary`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -9.01ms | 19.6% → 0.0% | 9.0ms → 0ms |   9 → 0 | `0x466a0` | `./binary` |
| removed | -8.01ms | 17.4% → 0.0% | 8.0ms → 0ms |   8 → 0 | `0x469d8` | `./binary` |
| removed | -5.01ms | 10.9% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x44044` | `./binary` |
| removed | -3.00ms |  6.5% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x54720` | `./binary` |
| removed | -3.00ms |  6.5% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x632d4` | `./binary` |

##### `0x53c64` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -37.04ms | 88.1% → 0.0% | 37.0ms → 0ms |  37 → 0 | `0x62fd4` | `./binary` |
| removed |  -5.01ms | 11.9% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x491a0` | `./binary` |

##### `0x131a4` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -33.03ms | 80.5% → 0.0% | 33.0ms → 0ms |  33 → 0 | `0xf660`  | `./binary` |
| removed |  -8.01ms | 19.5% → 0.0% |  8.0ms → 0ms |   8 → 0 | `0x53c28` | `./binary` |

##### `0x13990` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -33.03ms | 82.5% → 0.0% | 33.0ms → 0ms |  33 → 0 | `0x53c28` | `./binary` |
| removed |  -7.01ms | 17.5% → 0.0% |  7.0ms → 0ms |   7 → 0 | `0xf660`  | `./binary` |

##### `0x53bb4` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -31.03ms | 88.6% → 0.0% | 31.0ms → 0ms |  31 → 0 | `0x62fd4` | `./binary` |
| removed |  -4.00ms | 11.4% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x491a0` | `./binary` |

##### `0x53c80` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -26.03ms | 83.9% → 0.0% | 26.0ms → 0ms |  26 → 0 | `0x62fd4` | `./binary` |
| removed |  -5.01ms | 16.1% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x491a0` | `./binary` |

##### `0x140b0` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -17.02ms | 54.8% → 0.0% | 17.0ms → 0ms |  17 → 0 | `0x53c28` | `./binary` |
| removed | -14.01ms | 45.2% → 0.0% | 14.0ms → 0ms |  14 → 0 | `0xf660`  | `./binary` |

##### `0x138c8` (`./binary`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -23.02ms | 76.7% → 0.0% | 23.0ms → 0ms |  23 → 0 | `0xf660`  | `./binary` |
| removed |  -7.01ms | 23.3% → 0.0% |  7.0ms → 0ms |   7 → 0 | `0x53c28` | `./binary` |

##### `0x63400` (`./binary`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -6.01ms | 20.7% → 0.0% | 6.0ms → 0ms |   6 → 0 | `0x46a0c` | `./binary` |
| removed | -4.00ms | 13.8% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x66148` | `./binary` |
| removed | -3.00ms | 10.3% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x37200` | `./binary` |
| removed | -2.00ms |  6.9% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x4aa00` | `./binary` |
| removed | -1.00ms |  3.4% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x49ea0` | `./binary` |

##### `0x9d100` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -11.01ms | 84.6% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x43eb8` | `./binary` |
| removed |  -1.00ms |  7.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x3dbbc` | `./binary` |
| removed |  -1.00ms |  7.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x6aa34` | `./binary` |

##### `0x9d184` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| ------: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
| removed | -12.01ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x43eb8` | `./binary` |

##### `0x9d11c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| ------: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
| removed | -10.01ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x43eb8` | `./binary` |

##### `0x9d138` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -5.01ms | 83.3% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x43eb8` | `./binary` |
| removed | -1.00ms | 16.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x34f44` | `./binary` |

##### `0x9d150` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -5.01ms | 100.0% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x43eb8` | `./binary` |

##### `0x9d168` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x43eb8` | `./binary` |

##### `0x9e580` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -2.00ms | 50.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x6aa34` | `./binary` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x122fc` | `./binary` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x43e78` | `./binary` |

##### `0x9d114` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x43eb8` | `./binary` |

##### `0x9e674` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x6aa34` | `./binary` |

##### `0x9d210` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -3.00ms |  75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x6aa34` | `./binary`                             |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |  25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0xf68c`  | `./binary`                             |

##### `0x9e5c0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x43e78` | `./binary` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x366a8` | `./binary` |

##### `0x9e590` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x43e78` | `./binary` |

##### `0x9e5e0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x43e78` | `./binary` |

##### `0x9e678` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x6aa34` | `./binary` |

##### `0x9d148` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x43eb8` | `./binary` |

##### `0xddb88` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x11b0c` | `./binary` |

##### `0x9e680` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x6aa34` | `./binary` |

##### `0x914e8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x9245c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x3a4ee0` (`[kernel.kallsyms]`)

|  Change |   Delta |            % |        Time | Samples | Caller     | Location            |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x361c28` | `[kernel.kallsyms]` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x361c90` | `[kernel.kallsyms]` |

##### `0x14b23b8` (`[kernel.kallsyms]`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ------------------- |
| -50.0% | -3.00ms | 100.0% | 6.0ms → 3.0ms |   6 → 3 | `0x14b33a0` | `[kernel.kallsyms]` |

##### `0x14837b8` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x3c3850` (`[kernel.kallsyms]`)

| Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `0x7733f8` | `[kernel.kallsyms]` |

##### `0x39db44` (`[kernel.kallsyms]`)

| Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x14b2aac` (`[kernel.kallsyms]`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ------------------- |
| -40.0% | -2.00ms | 100.0% | 5.0ms → 3.0ms |   5 → 3 | `0x14b33d0` | `[kernel.kallsyms]` |

##### `0x2be198` (`[kernel.kallsyms]`)

| Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| -40.0% | -2.00ms | 100.0% | 5.0ms → 3.0ms |   5 → 3 | `0x2beb84` | `[kernel.kallsyms]` |

##### `0x34b3e8` (`[kernel.kallsyms]`)

|  Change |   Delta |            % |        Time | Samples | Caller     | Location            |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0xa8ecfc` | `[kernel.kallsyms]` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0xa8ec68` | `[kernel.kallsyms]` |

##### `0x3a3538` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x3a4b04` | `[kernel.kallsyms]` |

##### `0x315ccc` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x315eb8` | `[kernel.kallsyms]` |

##### `0x325cc0` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x315eb8` | `[kernel.kallsyms]` |

##### `0x3a4b04` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x315724` | `[kernel.kallsyms]` |

##### `0x2ab7f4` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x2ab954` | `[kernel.kallsyms]` |

##### `0x33e980` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x34306c` | `[kernel.kallsyms]` |

##### `0x770c24` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x3c49bc` | `[kernel.kallsyms]` |

##### `0x168a20` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x168a64` | `[kernel.kallsyms]` |

##### `0x3a2db8` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x3a351c` | `[kernel.kallsyms]` |

##### `0x14c2704` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x3157e4` | `[kernel.kallsyms]` |

##### `0x3157e4` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x315eb8` | `[kernel.kallsyms]` |

##### `0x39edcc` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x329238` | `[kernel.kallsyms]` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|    Change |     Delta |             % |            Time |       Samples | Function  | Location                               |
| --------: | --------: | ------------: | --------------: | ------------: | --------- | -------------------------------------- |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s |     0 → 5,954 | `0x16900` | `./binary`                             |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s |     0 → 5,954 | `0x13e30` | `./binary`                             |
|       new |   +4.174s |  0.0% → 70.0% |     0ms → 4.17s |     0 → 4,170 | `0x15964` | `./binary`                             |
|       new |   +2.810s |  0.0% → 47.2% |     0ms → 2.81s |     0 → 2,808 | `0x5eff4` | `./binary`                             |
|       new |   +2.337s |  0.0% → 39.2% |     0ms → 2.33s |     0 → 2,335 | `0x78ff4` | `./binary`                             |
|       new |   +2.189s |  0.0% → 36.7% |     0ms → 2.18s |     0 → 2,187 | `0x672f0` | `./binary`                             |
|       new |   +2.138s |  0.0% → 35.9% |     0ms → 2.13s |     0 → 2,136 | `0x6639c` | `./binary`                             |
|       new |   +1.793s |  0.0% → 30.1% |     0ms → 1.79s |     0 → 1,792 | `0x6503c` | `./binary`                             |
|       new |   +1.696s |  0.0% → 28.5% |     0ms → 1.69s |     0 → 1,695 | `0x61a90` | `./binary`                             |
|       new |   +1.227s |  0.0% → 20.6% |     0ms → 1.22s |     0 → 1,226 | `0x71d44` | `./binary`                             |
|       new |   +1.201s |  0.0% → 20.2% |     0ms → 1.20s |     0 → 1,200 | `0x61f50` | `./binary`                             |
|       new |   +1.148s |  0.0% → 19.3% |     0ms → 1.14s |     0 → 1,147 | `0x674d4` | `./binary`                             |
|       new | +967.97ms |  0.0% → 16.2% |   0ms → 968.0ms |       0 → 967 | `0x6f75c` | `./binary`                             |
|       new | +921.92ms |  0.0% → 15.5% |   0ms → 921.9ms |       0 → 921 | `0x6a0c8` | `./binary`                             |
|       new | +912.91ms |  0.0% → 15.3% |   0ms → 912.9ms |       0 → 912 | `0x672d4` | `./binary`                             |
|       new | +755.76ms |  0.0% → 12.7% |   0ms → 755.8ms |       0 → 755 | `0x6aea0` | `./binary`                             |
|       new | +728.73ms |  0.0% → 12.2% |   0ms → 728.7ms |       0 → 728 | `0x5ebe0` | `./binary`                             |
| +72500.0% | +725.73ms | <0.1% → 12.2% | 1.0ms → 726.7ms |       1 → 726 | `0x6944c` | `./binary`                             |
|    +13.6% | +715.72ms |        100.0% |   5.24s → 5.95s | 5,239 → 5,954 | `0x27744` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    +13.6% | +715.72ms |        100.0% |   5.24s → 5.95s | 5,239 → 5,954 | `0x27818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Ours

|    Change |     Delta |             % |            Time |   Samples | Function  | Location   |
| --------: | --------: | ------------: | --------------: | --------: | --------- | ---------- |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s | 0 → 5,954 | `0x16900` | `./binary` |
|       new |   +5.959s | 0.0% → 100.0% |     0ms → 5.95s | 0 → 5,954 | `0x13e30` | `./binary` |
|       new |   +4.174s |  0.0% → 70.0% |     0ms → 4.17s | 0 → 4,170 | `0x15964` | `./binary` |
|       new |   +2.810s |  0.0% → 47.2% |     0ms → 2.81s | 0 → 2,808 | `0x5eff4` | `./binary` |
|       new |   +2.337s |  0.0% → 39.2% |     0ms → 2.33s | 0 → 2,335 | `0x78ff4` | `./binary` |
|       new |   +2.189s |  0.0% → 36.7% |     0ms → 2.18s | 0 → 2,187 | `0x672f0` | `./binary` |
|       new |   +2.138s |  0.0% → 35.9% |     0ms → 2.13s | 0 → 2,136 | `0x6639c` | `./binary` |
|       new |   +1.793s |  0.0% → 30.1% |     0ms → 1.79s | 0 → 1,792 | `0x6503c` | `./binary` |
|       new |   +1.696s |  0.0% → 28.5% |     0ms → 1.69s | 0 → 1,695 | `0x61a90` | `./binary` |
|       new |   +1.227s |  0.0% → 20.6% |     0ms → 1.22s | 0 → 1,226 | `0x71d44` | `./binary` |
|       new |   +1.201s |  0.0% → 20.2% |     0ms → 1.20s | 0 → 1,200 | `0x61f50` | `./binary` |
|       new |   +1.148s |  0.0% → 19.3% |     0ms → 1.14s | 0 → 1,147 | `0x674d4` | `./binary` |
|       new | +967.97ms |  0.0% → 16.2% |   0ms → 968.0ms |   0 → 967 | `0x6f75c` | `./binary` |
|       new | +921.92ms |  0.0% → 15.5% |   0ms → 921.9ms |   0 → 921 | `0x6a0c8` | `./binary` |
|       new | +912.91ms |  0.0% → 15.3% |   0ms → 912.9ms |   0 → 912 | `0x672d4` | `./binary` |
|       new | +755.76ms |  0.0% → 12.7% |   0ms → 755.8ms |   0 → 755 | `0x6aea0` | `./binary` |
|       new | +728.73ms |  0.0% → 12.2% |   0ms → 728.7ms |   0 → 728 | `0x5ebe0` | `./binary` |
| +72500.0% | +725.73ms | <0.1% → 12.2% | 1.0ms → 726.7ms |   1 → 726 | `0x6944c` | `./binary` |
|       new | +699.70ms |  0.0% → 11.7% |   0ms → 699.7ms |   0 → 699 | `0x5e5a4` | `./binary` |
|       new | +650.65ms |  0.0% → 10.9% |   0ms → 650.7ms |   0 → 650 | `0x68820` | `./binary` |

##### Native

|  Change |     Delta |            % |          Time |       Samples | Function  | Location                               |
| ------: | --------: | -----------: | ------------: | ------------: | --------- | -------------------------------------- |
|  +13.6% | +715.72ms |       100.0% | 5.24s → 5.95s | 5,239 → 5,954 | `0x27744` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +13.6% | +715.72ms |       100.0% | 5.24s → 5.95s | 5,239 → 5,954 | `0x27818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +39.04ms |  0.0% → 0.7% |  0ms → 39.0ms |        0 → 39 | `0xe3e00` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +24.02ms |  0.0% → 0.4% |  0ms → 24.0ms |        0 → 24 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |         0 → 4 | `0xdd2b4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +4.00ms |  0.0% → 0.1% |   0ms → 4.0ms |         0 → 4 | `0x91d0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +3.00ms |  0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `0x91bfc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% |   +2.00ms | <0.1% → 0.1% | 1.0ms → 3.0ms |         1 → 3 | `0x90818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +2.00ms | <0.1% → 0.1% | 2.0ms → 4.0ms |         2 → 4 | `0x9189c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +2.00ms | 0.0% → <0.1% |   0ms → 2.0ms |         0 → 2 | `0x91b94` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x8e9cc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |   +1.00ms |        <0.1% | 1.0ms → 2.0ms |         1 → 2 | `0x900c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x91b64` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8faa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x8fc14` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x901c8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x9d20c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |   +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x92240` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |     Delta |             % |          Time |   Samples | Function  | Location   |
| ------: | --------: | ------------: | ------------: | --------: | --------- | ---------- |
| removed |   -5.244s | 100.0% → 0.0% |   5.24s → 0ms | 5,239 → 0 | `0x1130c` | `./binary` |
| removed |   -5.244s | 100.0% → 0.0% |   5.24s → 0ms | 5,239 → 0 | `0xdf70`  | `./binary` |
| removed |   -3.903s |  74.4% → 0.0% |   3.90s → 0ms | 3,900 → 0 | `0x10144` | `./binary` |
| removed |   -2.659s |  50.7% → 0.0% |   2.65s → 0ms | 2,657 → 0 | `0x368f8` | `./binary` |
| removed |   -2.133s |  40.7% → 0.0% |   2.13s → 0ms | 2,131 → 0 | `0x4aa18` | `./binary` |
| removed |   -2.012s |  38.4% → 0.0% |   2.01s → 0ms | 2,010 → 0 | `0x45be0` | `./binary` |
| removed |   -1.704s |  32.5% → 0.0% |   1.70s → 0ms | 1,703 → 0 | `0x44b48` | `./binary` |
| removed |   -1.662s |  31.7% → 0.0% |   1.66s → 0ms | 1,661 → 0 | `0x6449c` | `./binary` |
| removed |   -1.622s |  30.9% → 0.0% |   1.62s → 0ms | 1,621 → 0 | `0x383d0` | `./binary` |
| removed |   -1.304s |  24.9% → 0.0% |   1.30s → 0ms | 1,303 → 0 | `0x62fd4` | `./binary` |
| removed |   -1.206s |  23.0% → 0.0% |   1.20s → 0ms | 1,205 → 0 | `0x36b64` | `./binary` |
| removed |   -1.159s |  22.1% → 0.0% |   1.15s → 0ms | 1,158 → 0 | `0x537bc` | `./binary` |
| removed |   -1.085s |  20.7% → 0.0% |   1.08s → 0ms | 1,084 → 0 | `0x53c28` | `./binary` |
| removed | -775.78ms |  14.8% → 0.0% | 775.8ms → 0ms |   775 → 0 | `0x642d8` | `./binary` |
| removed | -703.70ms |  13.4% → 0.0% | 703.7ms → 0ms |   703 → 0 | `0x66174` | `./binary` |
| removed | -678.68ms |  12.9% → 0.0% | 678.7ms → 0ms |   678 → 0 | `0x36d98` | `./binary` |
| removed | -653.65ms |  12.5% → 0.0% | 653.7ms → 0ms |   653 → 0 | `0x58e54` | `./binary` |
| removed | -650.65ms |  12.4% → 0.0% | 650.7ms → 0ms |   650 → 0 | `0x3695c` | `./binary` |
| removed | -637.64ms |  12.2% → 0.0% | 637.6ms → 0ms |   637 → 0 | `0x64480` | `./binary` |
| removed | -624.62ms |  11.9% → 0.0% | 624.6ms → 0ms |   624 → 0 | `0x66a6c` | `./binary` |

##### Native

|  Change |     Delta |           % |            Time | Samples | Function  | Location                               |
| ------: | --------: | ----------: | --------------: | ------: | --------- | -------------------------------------- |
|  -92.4% | -109.11ms | 2.3% → 0.2% | 118.1ms → 9.0ms | 118 → 9 | `0x9d200` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -86.09ms | 1.6% → 0.0% |    86.1ms → 0ms |  86 → 0 | `0x9e670` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -29.03ms | 0.6% → 0.0% |    29.0ms → 0ms |  29 → 0 | `0xddb88` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -13.01ms | 0.2% → 0.0% |    13.0ms → 0ms |  13 → 0 | `0x9d100` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -12.01ms | 0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `0x9e674` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -12.01ms | 0.2% → 0.0% |    12.0ms → 0ms |  12 → 0 | `0x9d184` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -10.01ms | 0.2% → 0.0% |    10.0ms → 0ms |  10 → 0 | `0x9d11c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -52.9% |   -9.01ms | 0.3% → 0.1% |  17.0ms → 8.0ms |  17 → 8 | `0x92a9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -9.01ms | 0.2% → 0.0% |     9.0ms → 0ms |   9 → 0 | `0x9405c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -58.3% |   -7.01ms | 0.2% → 0.1% |  12.0ms → 5.0ms |  12 → 5 | `0x8fa48` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -58.3% |   -7.01ms | 0.2% → 0.1% |  12.0ms → 5.0ms |  12 → 5 | `0x90240` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -6.01ms | 0.1% → 0.0% |     6.0ms → 0ms |   6 → 0 | `0x9d138` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -38.5% |   -5.01ms | 0.2% → 0.1% |  13.0ms → 8.0ms |  13 → 8 | `0xe3acc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -38.5% |   -5.01ms | 0.2% → 0.1% |  13.0ms → 8.0ms |  13 → 8 | `0x8f988` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -5.01ms | 0.1% → 0.0% |     5.0ms → 0ms |   5 → 0 | `0x9d150` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -62.5% |   -5.01ms | 0.2% → 0.1% |   8.0ms → 3.0ms |   8 → 3 | `0x9245c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -19.0% |   -4.00ms | 0.4% → 0.3% | 21.0ms → 17.0ms | 21 → 17 | `0xdda44` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms | 0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d168` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms | 0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9e580` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -4.00ms | 0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x9d114` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x16900` (`./binary`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
|    new | +5.959s | 0.0% → 100.0% | 0ms → 5.95s | 0 → 5,954 | `0x27744` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x15964` (`./binary`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
|    new | +4.174s | 0.0% → 100.0% | 0ms → 4.17s | 0 → 4,170 | `0x16900` | `./binary` |

##### `0x5eff4` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +2.119s | 0.0% → 75.4% |   0ms → 2.11s | 0 → 2,117 | `0x6639c` | `./binary` |
|    new | +658.66ms | 0.0% → 23.4% | 0ms → 658.7ms |   0 → 658 | `0x6944c` | `./binary` |
|    new | +555.56ms | 0.0% → 19.8% | 0ms → 555.6ms |   0 → 555 | `0x15964` | `./binary` |
|    new | +335.34ms | 0.0% → 11.9% | 0ms → 335.3ms |   0 → 335 | `0x5e5a4` | `./binary` |
|    new | +172.17ms |  0.0% → 6.1% | 0ms → 172.2ms |   0 → 172 | `0x78ff4` | `./binary` |

##### `0x78ff4` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +1.733s | 0.0% → 74.2% |   0ms → 1.73s | 0 → 1,732 | `0x6503c` | `./binary` |
|    new | +721.72ms | 0.0% → 30.9% | 0ms → 721.7ms |   0 → 721 | `0x672d4` | `./binary` |

##### `0x672f0` (`./binary`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
|    new | +2.189s | 0.0% → 100.0% | 0ms → 2.18s | 0 → 2,187 | `0x5eff4` | `./binary` |

##### `0x6639c` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +1.639s | 0.0% → 76.7% |   0ms → 1.63s | 0 → 1,638 | `0x15964` | `./binary` |
|    new | +674.67ms | 0.0% → 31.6% | 0ms → 674.7ms |   0 → 674 | `0x71d44` | `./binary` |
|    new |   +9.01ms |  0.0% → 0.4% |   0ms → 9.0ms |     0 → 9 | `0x71c40` | `./binary` |

##### `0x6503c` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +1.703s | 0.0% → 95.0% |   0ms → 1.70s | 0 → 1,702 | `0x15964` | `./binary` |
|    new | +517.52ms | 0.0% → 28.9% | 0ms → 517.5ms |   0 → 517 | `0x71d44` | `./binary` |
|    new |  +63.06ms |  0.0% → 3.5% |  0ms → 63.1ms |    0 → 63 | `0x158e8` | `./binary` |
|    new |  +23.02ms |  0.0% → 1.3% |  0ms → 23.0ms |    0 → 23 | `0x71c40` | `./binary` |

##### `0x61a90` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +1.341s | 0.0% → 79.1% |   0ms → 1.34s | 0 → 1,340 | `0x78ff4` | `./binary` |
|    new | +242.24ms | 0.0% → 14.3% | 0ms → 242.2ms |   0 → 242 | `0x672f0` | `./binary` |
|    new | +106.11ms |  0.0% → 6.3% | 0ms → 106.1ms |   0 → 106 | `0x5e5a4` | `./binary` |
|    new |  +12.01ms |  0.0% → 0.7% |  0ms → 12.0ms |    0 → 12 | `0x65a04` | `./binary` |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |    0 → 10 | `0x695b4` | `./binary` |

##### `0x71d44` (`./binary`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
|    new | +1.227s | 0.0% → 100.0% | 0ms → 1.22s | 0 → 1,226 | `0x61a90` | `./binary` |

##### `0x61f50` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +546.55ms | 0.0% → 45.5% | 0ms → 546.5ms | 0 → 546 | `0x672f0` | `./binary` |
|    new | +189.19ms | 0.0% → 15.8% | 0ms → 189.2ms | 0 → 189 | `0x78ff4` | `./binary` |
|    new | +160.16ms | 0.0% → 13.3% | 0ms → 160.2ms | 0 → 160 | `0x7327c` | `./binary` |
|    new | +100.10ms |  0.0% → 8.3% | 0ms → 100.1ms | 0 → 100 | `0x6a0c8` | `./binary` |
|    new |  +52.05ms |  0.0% → 4.3% |  0ms → 52.1ms |  0 → 52 | `0x5e490` | `./binary` |

##### `0x674d4` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +503.50ms | 0.0% → 43.9% | 0ms → 503.5ms | 0 → 503 | `0x7cd84` | `./binary` |
|    new | +289.29ms | 0.0% → 25.2% | 0ms → 289.3ms | 0 → 289 | `0x7d0a8` | `./binary` |
|    new |  +95.10ms |  0.0% → 8.3% |  0ms → 95.1ms |  0 → 95 | `0x5f158` | `./binary` |
|    new |  +48.05ms |  0.0% → 4.2% |  0ms → 48.0ms |  0 → 48 | `0x651bc` | `./binary` |
|    new |  +34.03ms |  0.0% → 3.0% |  0ms → 34.0ms |  0 → 34 | `0x77768` | `./binary` |

##### `0x6f75c` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +800.80ms | 0.0% → 82.7% | 0ms → 800.8ms | 0 → 800 | `0x674d4` | `./binary` |
|    new | +155.16ms | 0.0% → 16.0% | 0ms → 155.2ms | 0 → 155 | `0x79dc4` | `./binary` |
|    new |  +12.01ms |  0.0% → 1.2% |  0ms → 12.0ms |  0 → 12 | `0x60f78` | `./binary` |

##### `0x6a0c8` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +900.90ms | 0.0% → 97.7% | 0ms → 900.9ms | 0 → 900 | `0x61f50` | `./binary` |
|    new |  +21.02ms |  0.0% → 2.3% |  0ms → 21.0ms |  0 → 21 | `0x68d74` | `./binary` |

##### `0x672d4` (`./binary`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location   |
| -----: | --------: | ------------: | ------------: | ------: | --------- | ---------- |
|    new | +912.91ms | 0.0% → 100.0% | 0ms → 912.9ms | 0 → 912 | `0x5eff4` | `./binary` |

##### `0x6aea0` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +540.54ms | 0.0% → 71.5% | 0ms → 540.5ms | 0 → 540 | `0x68820` | `./binary` |
|    new | +323.32ms | 0.0% → 42.8% | 0ms → 323.3ms | 0 → 323 | `0x5e828` | `./binary` |

##### `0x5ebe0` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +472.47ms | 0.0% → 64.8% | 0ms → 472.5ms | 0 → 472 | `0x672f0` | `./binary` |
|    new | +174.17ms | 0.0% → 23.9% | 0ms → 174.2ms | 0 → 174 | `0x78ff4` | `./binary` |
|    new |  +54.05ms |  0.0% → 7.4% |  0ms → 54.1ms |  0 → 54 | `0x5e5a4` | `./binary` |
|    new |  +28.03ms |  0.0% → 3.8% |  0ms → 28.0ms |  0 → 28 | `0x6944c` | `./binary` |
|    new |  +26.03ms |  0.0% → 3.6% |  0ms → 26.0ms |  0 → 26 | `0x607d0` | `./binary` |

##### `0x6944c` (`./binary`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location   |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ---------- |
|     new | +558.56ms |  0.0% → 76.9% | 0ms → 558.6ms | 0 → 558 | `0x6aea0` | `./binary` |
|     new | +244.24ms |  0.0% → 33.6% | 0ms → 244.2ms | 0 → 244 | `0x69074` | `./binary` |
| removed |   -1.00ms | 100.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x57ac4` | `./binary` |

##### `0x27744` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Caller    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +13.6% | +715.72ms | 100.0% | 5.24s → 5.95s | 5,239 → 5,954 | `0x27818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x27818` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
|     new | +5.959s | 0.0% → 100.0% | 0ms → 5.95s | 0 → 5,954 | `0x13e30` | `./binary` |
| removed | -5.244s | 100.0% → 0.0% | 5.24s → 0ms | 5,239 → 0 | `0xdf70`  | `./binary` |

##### `0x5e5a4` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +566.57ms | 0.0% → 81.0% | 0ms → 566.6ms | 0 → 566 | `0x6c3fc` | `./binary` |
|    new | +189.19ms | 0.0% → 27.0% | 0ms → 189.2ms | 0 → 189 | `0x6c384` | `./binary` |

##### `0x68820` (`./binary`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location   |
| -----: | --------: | ------------: | ------------: | ------: | --------- | ---------- |
|    new | +650.65ms | 0.0% → 100.0% | 0ms → 650.7ms | 0 → 650 | `0x5e9c0` | `./binary` |

##### `0xe3e00` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| -----: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
|    new | +39.04ms | 0.0% → 100.0% | 0ms → 39.0ms |  0 → 39 | `0x5112c` | `./binary` |

##### `0x92f68` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| -----: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
|    new | +24.02ms | 0.0% → 100.0% | 0ms → 24.0ms |  0 → 24 | `0x959d4` | `./binary` |

##### `0xdd2b4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +4.00ms | 0.0% → 100.0% | 0ms → 4.0ms |   0 → 4 | `0x95694` | `./binary` |

##### `0x91d0c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +4.00ms | 0.0% → 100.0% | 0ms → 4.0ms |   0 → 4 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91bfc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90818` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `0x9189c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9189c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |              % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -------------: | ------------: | ------: | --------- | -------------------------------------- |
| +50.0% | +1.00ms | 100.0% → 75.0% | 2.0ms → 3.0ms |   2 → 3 | `0x9245c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms |   0.0% → 25.0% |   0ms → 1.0ms |   0 → 1 | `0x91b94` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8faf4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x92a9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91b94` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8e9cc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `0x900c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x900c0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `0x91bfc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x92a9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92284` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x95898` | `./binary` |

##### `0x91b64` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8faa0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92a9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fc14` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x901c8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x91bfc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d20c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92240` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| -----: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x74778` | `./binary` |

##### `0x3b21fc` (`[kernel.kallsyms]`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location            |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x3b253c` | `[kernel.kallsyms]` |

##### `0x3b253c` (`[kernel.kallsyms]`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location            |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x3b25d4` | `[kernel.kallsyms]` |

##### `0x3b25d4` (`[kernel.kallsyms]`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location            |
| -----: | -------: | ------------: | -----------: | ------: | --------- | ------------------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x2ecb8` | `[kernel.kallsyms]` |

##### `0x3b15e4` (`[kernel.kallsyms]`)

| Change |    Delta |              % |            Time | Samples | Caller     | Location            |
| -----: | -------: | -------------: | --------------: | ------: | ---------- | ------------------- |
|    new | +36.04ms |  0.0% → 100.0% |    0ms → 36.0ms |  0 → 36 | `0x3b21fc` | `[kernel.kallsyms]` |
| +41.7% | +10.01ms | 100.0% → 94.4% | 24.0ms → 34.0ms | 24 → 34 | `0x3b1aa0` | `[kernel.kallsyms]` |

##### `0x2ab954` (`[kernel.kallsyms]`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location            |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +47.8% | +11.01ms | 100.0% | 23.0ms → 34.0ms | 23 → 34 | `0x4cb8b8` | `[kernel.kallsyms]` |

##### `0x7768d0` (`[kernel.kallsyms]`)

|  Change |    Delta |             % |         Time | Samples | Caller     | Location            |
| ------: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
|     new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x3b15e4` | `[kernel.kallsyms]` |
| removed | -25.03ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x3b3c5c` | `[kernel.kallsyms]` |

##### `0x4cb8b8` (`[kernel.kallsyms]`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location            |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +41.7% | +10.01ms | 100.0% | 24.0ms → 34.0ms | 24 → 34 | `0x3b15e4` | `[kernel.kallsyms]` |

##### `0x3b1aa0` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +36.0% | +9.01ms | 100.0% | 25.0ms → 34.0ms | 25 → 34 | `0x44a7e0` | `[kernel.kallsyms]` |

##### `0x44a7e0` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +36.0% | +9.01ms | 100.0% | 25.0ms → 34.0ms | 25 → 34 | `0x7768d0` | `[kernel.kallsyms]` |

##### `0xb54524` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +30.0% | +6.01ms | 100.0% | 20.0ms → 26.0ms | 20 → 26 | `0x2ab6f8` | `[kernel.kallsyms]` |

##### `0x2ab6f8` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +30.0% | +6.01ms | 100.0% | 20.0ms → 26.0ms | 20 → 26 | `0x2ab954` | `[kernel.kallsyms]` |

##### `0x2aad18` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +500.0% | +5.01ms | 100.0% | 1.0ms → 6.0ms |   1 → 6 | `0x2ab618` | `[kernel.kallsyms]` |

##### `0x2ab618` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +500.0% | +5.01ms | 100.0% | 1.0ms → 6.0ms |   1 → 6 | `0x2ab954` | `[kernel.kallsyms]` |

##### `0x2ecb8` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller    | Location            |
| -----: | ------: | -----: | --------------: | ------: | --------- | ------------------- |
|  +6.2% | +4.00ms | 100.0% | 65.1ms → 69.1ms | 65 → 69 | `0x2ed74` | `[kernel.kallsyms]` |

##### `0x2ed74` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------- |
|  +6.1% | +4.00ms | 100.0% | 66.1ms → 70.1ms | 66 → 70 | `0x14b23c0` | `[kernel.kallsyms]` |

##### `0x14b23c0` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------- |
|  +6.1% | +4.00ms | 100.0% | 66.1ms → 70.1ms | 66 → 70 | `0x14b33a0` | `[kernel.kallsyms]` |

##### `0x39db08` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +133.3% | +4.00ms | 100.0% | 3.0ms → 7.0ms |   3 → 7 | `0x3a4af0` | `[kernel.kallsyms]` |

##### `0x3d17e4` (`[kernel.kallsyms]`)

|  Change |   Delta |              % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -------------: | ------------: | ------: | ---------- | ------------------- |
| +200.0% | +4.00ms |         100.0% | 2.0ms → 6.0ms |   2 → 6 | `0x3d1ba4` | `[kernel.kallsyms]` |
| +150.0% | +3.00ms | 100.0% → 83.3% | 2.0ms → 5.0ms |   2 → 5 | `0x77b550` | `[kernel.kallsyms]` |

##### `0x3d171c` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +200.0% | +4.00ms | 100.0% | 2.0ms → 6.0ms |   2 → 6 | `0x779ba8` | `[kernel.kallsyms]` |

##### `0x779ba8` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +200.0% | +4.00ms | 100.0% | 2.0ms → 6.0ms |   2 → 6 | `0x3d17e4` | `[kernel.kallsyms]` |

##### `0x1130c` (`./binary`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
| removed | -5.244s | 100.0% → 0.0% | 5.24s → 0ms | 5,239 → 0 | `0x27744` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10144` (`./binary`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
| removed | -3.903s | 100.0% → 0.0% | 3.90s → 0ms | 3,900 → 0 | `0x1130c` | `./binary` |

##### `0x368f8` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -2.010s | 75.6% → 0.0% |   2.01s → 0ms | 2,008 → 0 | `0x45be0` | `./binary` |
| removed | -580.58ms | 21.8% → 0.0% | 580.6ms → 0ms |   580 → 0 | `0x66a6c` | `./binary` |
| removed | -546.55ms | 20.5% → 0.0% | 546.5ms → 0ms |   546 → 0 | `0x10144` | `./binary` |
| removed | -282.28ms | 10.6% → 0.0% | 282.3ms → 0ms |   282 → 0 | `0x3695c` | `./binary` |
| removed | -139.14ms |  5.2% → 0.0% | 139.1ms → 0ms |   139 → 0 | `0x6449c` | `./binary` |

##### `0x4aa18` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.638s | 76.8% → 0.0% |   1.63s → 0ms | 1,637 → 0 | `0x44b48` | `./binary` |
| removed | -478.48ms | 22.4% → 0.0% | 478.5ms → 0ms |   478 → 0 | `0x64480` | `./binary` |
| removed | -146.15ms |  6.9% → 0.0% | 146.1ms → 0ms |   146 → 0 | `0x642bc` | `./binary` |

##### `0x45be0` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.516s | 75.4% → 0.0% |   1.51s → 0ms | 1,515 → 0 | `0x10144` | `./binary` |
| removed | -668.67ms | 33.2% → 0.0% | 668.7ms → 0ms |   668 → 0 | `0x537bc` | `./binary` |
| removed |  -13.01ms |  0.6% → 0.0% |  13.0ms → 0ms |    13 → 0 | `0x53624` | `./binary` |

##### `0x44b48` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.606s | 94.2% → 0.0% |   1.60s → 0ms | 1,605 → 0 | `0x10144` | `./binary` |
| removed | -460.46ms | 27.0% → 0.0% | 460.5ms → 0ms |   460 → 0 | `0x537bc` | `./binary` |
| removed |  -72.07ms |  4.2% → 0.0% |  72.1ms → 0ms |    72 → 0 | `0x100f0` | `./binary` |
| removed |  -20.02ms |  1.2% → 0.0% |  20.0ms → 0ms |    20 → 0 | `0x53624` | `./binary` |

##### `0x6449c` (`./binary`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
| removed | -1.662s | 100.0% → 0.0% | 1.66s → 0ms | 1,661 → 0 | `0x368f8` | `./binary` |

##### `0x383d0` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.249s | 77.0% → 0.0% |   1.24s → 0ms | 1,248 → 0 | `0x4aa18` | `./binary` |
| removed | -166.17ms | 10.2% → 0.0% | 166.2ms → 0ms |   166 → 0 | `0x642d8` | `./binary` |
| removed | -121.12ms |  7.5% → 0.0% | 121.1ms → 0ms |   121 → 0 | `0x3695c` | `./binary` |
| removed |  -90.09ms |  5.6% → 0.0% |  90.1ms → 0ms |    90 → 0 | `0x6449c` | `./binary` |
| removed |  -12.01ms |  0.7% → 0.0% |  12.0ms → 0ms |    12 → 0 | `0x45868` | `./binary` |

##### `0x62fd4` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -569.57ms | 43.7% → 0.0% | 569.6ms → 0ms | 569 → 0 | `0x466a0` | `./binary` |
| removed | -391.39ms | 30.0% → 0.0% | 391.4ms → 0ms | 391 → 0 | `0x469d8` | `./binary` |
| removed | -108.11ms |  8.3% → 0.0% | 108.1ms → 0ms | 108 → 0 | `0x44044` | `./binary` |
| removed |  -54.05ms |  4.1% → 0.0% |  54.1ms → 0ms |  54 → 0 | `0x441b0` | `./binary` |
| removed |  -46.05ms |  3.5% → 0.0% |  46.0ms → 0ms |  46 → 0 | `0x44c90` | `./binary` |

##### `0x36b64` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -508.51ms | 42.2% → 0.0% | 508.5ms → 0ms | 508 → 0 | `0x6449c` | `./binary` |
| removed | -161.16ms | 13.4% → 0.0% | 161.2ms → 0ms | 161 → 0 | `0x642d8` | `./binary` |
| removed | -153.15ms | 12.7% → 0.0% | 153.2ms → 0ms | 153 → 0 | `0x51aec` | `./binary` |
| removed | -145.15ms | 12.0% → 0.0% | 145.1ms → 0ms | 145 → 0 | `0x4aa18` | `./binary` |
| removed |  -78.08ms |  6.5% → 0.0% |  78.1ms → 0ms |  78 → 0 | `0x66174` | `./binary` |

##### `0x537bc` (`./binary`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
| removed | -1.159s | 100.0% → 0.0% | 1.15s → 0ms | 1,158 → 0 | `0x383d0` | `./binary` |

##### `0x53c28` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -941.94ms | 86.8% → 0.0% | 941.9ms → 0ms | 941 → 0 | `0x62fd4` | `./binary` |
| removed | -142.14ms | 13.1% → 0.0% | 142.1ms → 0ms | 142 → 0 | `0x491a0` | `./binary` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x369d4` | `./binary` |

##### `0x642d8` (`./binary`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location   |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ---------- |
| removed | -775.78ms | 100.0% → 0.0% | 775.8ms → 0ms | 775 → 0 | `0x368f8` | `./binary` |

##### `0x66174` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -683.68ms | 97.2% → 0.0% | 683.7ms → 0ms | 683 → 0 | `0x36b64` | `./binary` |
| removed |  -20.02ms |  2.8% → 0.0% |  20.0ms → 0ms |  20 → 0 | `0x593c4` | `./binary` |

##### `0x36d98` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -310.31ms | 45.7% → 0.0% | 310.3ms → 0ms | 310 → 0 | `0x6449c` | `./binary` |
| removed | -168.17ms | 24.8% → 0.0% | 168.2ms → 0ms | 168 → 0 | `0x4aa18` | `./binary` |
| removed | -153.15ms | 22.6% → 0.0% | 153.2ms → 0ms | 153 → 0 | `0x642d8` | `./binary` |
| removed |  -48.05ms |  7.1% → 0.0% |  48.0ms → 0ms |  48 → 0 | `0x3695c` | `./binary` |
| removed |  -28.03ms |  4.1% → 0.0% |  28.0ms → 0ms |  28 → 0 | `0x37b74` | `./binary` |

##### `0x58e54` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -483.48ms | 74.0% → 0.0% | 483.5ms → 0ms | 483 → 0 | `0x59c68` | `./binary` |
| removed | -262.26ms | 40.1% → 0.0% | 262.3ms → 0ms | 262 → 0 | `0x36b90` | `./binary` |

##### `0x3695c` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -533.53ms | 82.0% → 0.0% | 533.5ms → 0ms | 533 → 0 | `0x577ec` | `./binary` |
| removed | -167.17ms | 25.7% → 0.0% | 167.2ms → 0ms | 167 → 0 | `0x577a4` | `./binary` |

##### `0x64480` (`./binary`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location   |
| ------: | --------: | ------------: | ------------: | ------: | --------- | ---------- |
| removed | -637.64ms | 100.0% → 0.0% | 637.6ms → 0ms | 637 → 0 | `0x368f8` | `./binary` |

##### `0x66a6c` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -481.48ms | 77.1% → 0.0% | 481.5ms → 0ms | 481 → 0 | `0x58e54` | `./binary` |
| removed | -196.20ms | 31.4% → 0.0% | 196.2ms → 0ms | 196 → 0 | `0x36c2c` | `./binary` |

##### `0x9d200` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location                               |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------------------------------------- |
| removed | -76.08ms |  64.4% → 0.0% | 76.1ms → 0ms |  76 → 0 | `0x6aa34` | `./binary`                             |
| removed | -27.03ms |  22.9% → 0.0% | 27.0ms → 0ms |  27 → 0 | `0xf68c`  | `./binary`                             |
|     new |  +9.01ms | 0.0% → 100.0% |  0ms → 9.0ms |   0 → 9 | `0x92f68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -7.01ms |   5.9% → 0.0% |  7.0ms → 0ms |   7 → 0 | `0x122fc` | `./binary`                             |
| removed |  -4.00ms |   3.4% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x1130c` | `./binary`                             |

##### `0x9e670` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -46.05ms | 53.5% → 0.0% | 46.0ms → 0ms |  46 → 0 | `0x6aa34` | `./binary` |
| removed | -16.02ms | 18.6% → 0.0% | 16.0ms → 0ms |  16 → 0 | `0xf75c`  | `./binary` |
| removed |  -6.01ms |  7.0% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0xf140`  | `./binary` |
| removed |  -6.01ms |  7.0% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0xf68c`  | `./binary` |
| removed |  -4.00ms |  4.7% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x122fc` | `./binary` |

##### `0xddb88` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| ------: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
| removed | -29.03ms | 100.0% → 0.0% | 29.0ms → 0ms |  29 → 0 | `0x11b0c` | `./binary` |

##### `0x9d100` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location   |
| ------: | -------: | -----------: | -----------: | ------: | --------- | ---------- |
| removed | -11.01ms | 84.6% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x43eb8` | `./binary` |
| removed |  -1.00ms |  7.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x3dbbc` | `./binary` |
| removed |  -1.00ms |  7.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x6aa34` | `./binary` |

##### `0x9e674` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -7.01ms | 58.3% → 0.0% | 7.0ms → 0ms |   7 → 0 | `0x6aa34` | `./binary` |
| removed | -4.00ms | 33.3% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0xf75c`  | `./binary` |
| removed | -1.00ms |  8.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0xf68c`  | `./binary` |

##### `0x9d184` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| ------: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
| removed | -12.01ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x43eb8` | `./binary` |

##### `0x9d11c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| ------: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
| removed | -10.01ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x43eb8` | `./binary` |

##### `0x92a9c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -7.01ms | 41.2% → 0.0% | 7.0ms → 0ms |   7 → 0 | `0x10fc4` | `./binary` |
| removed | -5.01ms | 29.4% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x10338` | `./binary` |
| removed | -3.00ms | 17.6% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x11510` | `./binary` |
|     new | +3.00ms | 0.0% → 37.5% | 0ms → 3.0ms |   0 → 3 | `0x15ae0` | `./binary` |
|     new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `0x5ccd4` | `./binary` |

##### `0x9405c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -8.01ms | 88.9% → 0.0% | 8.0ms → 0ms |   8 → 0 | `0x6a874` | `./binary` |
| removed | -1.00ms | 11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x11fd4` | `./binary` |

##### `0x8fa48` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -58.3% | -7.01ms | 100.0% | 12.0ms → 5.0ms |  12 → 5 | `0x90240` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90240` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -58.3% | -7.01ms | 100.0% | 12.0ms → 5.0ms |  12 → 5 | `0x92a9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d138` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -5.01ms | 83.3% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x43eb8` | `./binary` |
| removed | -1.00ms | 16.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x34f44` | `./binary` |

##### `0xe3acc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -38.5% | -5.01ms | 100.0% | 13.0ms → 8.0ms |  13 → 8 | `0x8f988` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8f988` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |           Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | -------------: | ------: | --------- | -------------------------------------- |
|  -58.3% | -7.01ms | 92.3% → 62.5% | 12.0ms → 5.0ms |  12 → 5 | `0x8fa48` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% | +2.00ms |  7.7% → 37.5% |  1.0ms → 3.0ms |   1 → 3 | `0x90818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d150` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -5.01ms | 100.0% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x43eb8` | `./binary` |

##### `0x9245c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -8.01ms | 100.0% → 0.0% | 8.0ms → 0ms |   8 → 0 | `0x9405c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `0x95898` | `./binary`                             |

##### `0xdda44` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location   |
| ------: | -------: | ------------: | -----------: | ------: | --------- | ---------- |
| removed | -21.02ms | 100.0% → 0.0% | 21.0ms → 0ms |  21 → 0 | `0x23608` | `./binary` |
|     new | +13.01ms |  0.0% → 76.5% | 0ms → 13.0ms |  0 → 13 | `0x54dec` | `./binary` |
|     new |  +4.00ms |  0.0% → 23.5% |  0ms → 4.0ms |   0 → 4 | `0x54b3c` | `./binary` |

##### `0x9d168` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x43eb8` | `./binary` |

##### `0x9e580` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location   |
| ------: | ------: | -----------: | ----------: | ------: | --------- | ---------- |
| removed | -2.00ms | 50.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x6aa34` | `./binary` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x122fc` | `./binary` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x43e78` | `./binary` |

##### `0x9d114` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location   |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ---------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x43eb8` | `./binary` |

##### `0x3b47b4` (`[kernel.kallsyms]`)

|  Change |    Delta |             % |         Time | Samples | Caller     | Location            |
| ------: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
| removed | -26.03ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `0x3b4878` | `[kernel.kallsyms]` |

##### `0x3b4878` (`[kernel.kallsyms]`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location            |
| ------: | -------: | ------------: | -----------: | ------: | --------- | ------------------- |
| removed | -26.03ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `0x2ecb8` | `[kernel.kallsyms]` |

##### `0x3b3c5c` (`[kernel.kallsyms]`)

|  Change |    Delta |             % |         Time | Samples | Caller     | Location            |
| ------: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
| removed | -25.03ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x3b47b4` | `[kernel.kallsyms]` |

##### `0x14b33d0` (`[kernel.kallsyms]`)

| Change |    Delta |      % |            Time | Samples | Caller   | Location            |
| -----: | -------: | -----: | --------------: | ------: | -------- | ------------------- |
| -24.4% | -10.01ms | 100.0% | 41.0ms → 31.0ms | 41 → 31 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x15a0` (`[kernel.kallsyms]`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location                               |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------------------------------------- |
|     new | +37.04ms | 0.0% → 34.9% | 0ms → 37.0ms |  0 → 37 | `0xe3e00` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -30.03ms | 26.1% → 0.0% | 30.0ms → 0ms |  30 → 0 | `0x9e670` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -28.03ms | 24.3% → 0.0% | 28.0ms → 0ms |  28 → 0 | `0xddb88` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +13.01ms | 0.0% → 12.3% | 0ms → 13.0ms |  0 → 13 | `0x9a700` | `./binary`                             |
| removed | -10.01ms |  8.7% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x9e674` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x315eb8` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------- |
| -27.3% | -9.01ms | 100.0% | 33.0ms → 24.0ms | 33 → 24 | `0x14c6048` | `[kernel.kallsyms]` |

##### `0x14c6048` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------- |
| -25.7% | -9.01ms | 100.0% | 35.0ms → 26.0ms | 35 → 26 | `0x14c6678` | `[kernel.kallsyms]` |

##### `0x14c6678` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller    | Location            |
| -----: | ------: | -----: | --------------: | ------: | --------- | ------------------- |
| -22.9% | -8.01ms | 100.0% | 35.0ms → 27.0ms | 35 → 27 | `0x36870` | `[kernel.kallsyms]` |

##### `0x14b2ab4` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------- |
| -22.2% | -8.01ms | 100.0% | 36.0ms → 28.0ms | 36 → 28 | `0x14b33d0` | `[kernel.kallsyms]` |

##### `0x31daf4` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -7.01ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `0x31e728` | `[kernel.kallsyms]` |

##### `0x31e728` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -7.01ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `0x3383e8` | `[kernel.kallsyms]` |

##### `0x3383e8` (`[kernel.kallsyms]`)

| Change |   Delta |      % |          Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| -87.5% | -7.01ms | 100.0% | 8.0ms → 1.0ms |   8 → 1 | `0x33851c` | `[kernel.kallsyms]` |

##### `0x33851c` (`[kernel.kallsyms]`)

| Change |   Delta |      % |           Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | -------------: | ------: | ---------- | ------------------- |
| -58.3% | -7.01ms | 100.0% | 12.0ms → 5.0ms |  12 → 5 | `0x3398ac` | `[kernel.kallsyms]` |

##### `0x3398ac` (`[kernel.kallsyms]`)

|  Change |   Delta |              % |           Time | Samples | Caller     | Location            |
| ------: | ------: | -------------: | -------------: | ------: | ---------- | ------------------- |
|  -54.5% | -6.01ms | 91.7% → 100.0% | 11.0ms → 5.0ms |  11 → 5 | `0x31b6c0` | `[kernel.kallsyms]` |
| removed | -1.00ms |    8.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x339978` | `[kernel.kallsyms]` |

##### `0x36870` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Caller      | Location            |
| -----: | ------: | -----: | --------------: | ------: | ----------- | ------------------- |
| -20.0% | -7.01ms | 100.0% | 35.0ms → 28.0ms | 35 → 28 | `0x14b2ab4` | `[kernel.kallsyms]` |

##### `0x31b6c0` (`[kernel.kallsyms]`)

| Change |   Delta |      % |           Time | Samples | Caller     | Location            |
| -----: | ------: | -----: | -------------: | ------: | ---------- | ------------------- |
| -58.3% | -7.01ms | 100.0% | 12.0ms → 5.0ms |  12 → 5 | `0x31b744` | `[kernel.kallsyms]` |

##### `0x3a4b04` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -6.01ms | 100.0% → 0.0% | 6.0ms → 0ms |   6 → 0 | `0x315724` | `[kernel.kallsyms]` |

##### `0x361c28` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Caller     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -5.01ms | 100.0% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x31daf4` | `[kernel.kallsyms]` |

##### `0x31b744` (`[kernel.kallsyms]`)

| Change |   Delta |      % |           Time | Samples | Caller    | Location            |
| -----: | ------: | -----: | -------------: | ------: | --------- | ------------------- |
| -38.5% | -5.01ms | 100.0% | 13.0ms → 8.0ms |  13 → 8 | `0x2ecb8` | `[kernel.kallsyms]` |

##### `0x3a4ee0` (`[kernel.kallsyms]`)

|  Change |   Delta |            % |        Time | Samples | Caller     | Location            |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x361c28` | `[kernel.kallsyms]` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x361c90` | `[kernel.kallsyms]` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x16900` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +4.174s | 0.0% → 70.0% |   0ms → 4.17s | 0 → 4,170 | `0x15964` | `./binary` |
|    new | +620.62ms | 0.0% → 10.4% | 0ms → 620.6ms |   0 → 620 | `0x150ac` | `./binary` |
|    new | +573.57ms |  0.0% → 9.6% | 0ms → 573.6ms |   0 → 573 | `0x14f10` | `./binary` |
|    new | +195.20ms |  0.0% → 3.3% | 0ms → 195.2ms |   0 → 195 | `0x15034` | `./binary` |
|    new |  +87.09ms |  0.0% → 1.5% |  0ms → 87.1ms |    0 → 87 | `0x14e90` | `./binary` |

##### `0x13e30` (`./binary`)

| Change |   Delta |             % |        Time |   Samples | Callee    | Location                               |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
|    new | +5.959s | 0.0% → 100.0% | 0ms → 5.95s | 0 → 5,954 | `0x27818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x15964` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +1.703s | 0.0% → 40.8% |   0ms → 1.70s | 0 → 1,702 | `0x6503c` | `./binary` |
|    new |   +1.639s | 0.0% → 39.3% |   0ms → 1.63s | 0 → 1,638 | `0x6639c` | `./binary` |
|    new | +555.56ms | 0.0% → 13.3% | 0ms → 555.6ms |   0 → 555 | `0x5eff4` | `./binary` |
|    new | +192.19ms |  0.0% → 4.6% | 0ms → 192.2ms |   0 → 192 | `0x6627c` | `./binary` |
|    new |  +25.03ms |  0.0% → 0.6% |  0ms → 25.0ms |    0 → 25 | `0x651bc` | `./binary` |

##### `0x5eff4` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +2.189s | 0.0% → 77.9% |   0ms → 2.18s | 0 → 2,187 | `0x672f0` | `./binary` |
|    new | +912.91ms | 0.0% → 32.5% | 0ms → 912.9ms |   0 → 912 | `0x672d4` | `./binary` |
|    new |  +42.04ms |  0.0% → 1.5% |  0ms → 42.0ms |    0 → 42 | `0x6716c` | `./binary` |
|    new |  +37.04ms |  0.0% → 1.3% |  0ms → 37.0ms |    0 → 37 | `0x673a8` | `./binary` |
|    new |  +23.02ms |  0.0% → 0.8% |  0ms → 23.0ms |    0 → 23 | `0x67420` | `./binary` |

##### `0x78ff4` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +1.341s | 0.0% → 57.4% |   0ms → 1.34s | 0 → 1,340 | `0x61a90` | `./binary` |
|    new | +283.28ms | 0.0% → 12.1% | 0ms → 283.3ms |   0 → 283 | `0x60bf8` | `./binary` |
|    new | +189.19ms |  0.0% → 8.1% | 0ms → 189.2ms |   0 → 189 | `0x61f50` | `./binary` |
|    new | +184.18ms |  0.0% → 7.9% | 0ms → 184.2ms |   0 → 184 | `0x60c90` | `./binary` |
|    new | +174.17ms |  0.0% → 7.5% | 0ms → 174.2ms |   0 → 174 | `0x5ebe0` | `./binary` |

##### `0x672f0` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +559.56ms | 0.0% → 25.6% | 0ms → 559.6ms | 0 → 559 | `0x5e9c0` | `./binary` |
|    new | +546.55ms | 0.0% → 25.0% | 0ms → 546.5ms | 0 → 546 | `0x61f50` | `./binary` |
|    new | +472.47ms | 0.0% → 21.6% | 0ms → 472.5ms | 0 → 472 | `0x5ebe0` | `./binary` |
|    new | +337.34ms | 0.0% → 15.4% | 0ms → 337.3ms | 0 → 337 | `0x5e828` | `./binary` |
|    new | +276.28ms | 0.0% → 12.6% | 0ms → 276.3ms | 0 → 276 | `0x5ec7c` | `./binary` |

##### `0x6639c` (`./binary`)

| Change |    Delta |            % |         Time |   Samples | Callee    | Location   |
| -----: | -------: | -----------: | -----------: | --------: | --------- | ---------- |
|    new |  +2.119s | 0.0% → 99.1% |  0ms → 2.11s | 0 → 2,117 | `0x5eff4` | `./binary` |
|    new | +10.01ms |  0.0% → 0.5% | 0ms → 10.0ms |    0 → 10 | `0x5efd4` | `./binary` |
|    new |  +4.00ms |  0.0% → 0.2% |  0ms → 4.0ms |     0 → 4 | `0x5e6dc` | `./binary` |
|    new |  +2.00ms |  0.0% → 0.1% |  0ms → 2.0ms |     0 → 2 | `0x5efa0` | `./binary` |
|    new |  +1.00ms | 0.0% → <0.1% |  0ms → 1.0ms |     0 → 1 | `0x5ee0c` | `./binary` |

##### `0x6503c` (`./binary`)

| Change |    Delta |            % |         Time |   Samples | Callee    | Location   |
| -----: | -------: | -----------: | -----------: | --------: | --------- | ---------- |
|    new |  +1.733s | 0.0% → 96.7% |  0ms → 1.73s | 0 → 1,732 | `0x78ff4` | `./binary` |
|    new | +37.04ms |  0.0% → 2.1% | 0ms → 37.0ms |    0 → 37 | `0x782ec` | `./binary` |
|    new | +14.01ms |  0.0% → 0.8% | 0ms → 14.0ms |    0 → 14 | `0x783f4` | `./binary` |
|    new | +10.01ms |  0.0% → 0.6% | 0ms → 10.0ms |    0 → 10 | `0x78fdc` | `./binary` |
|    new |  +8.01ms |  0.0% → 0.4% |  0ms → 8.0ms |     0 → 8 | `0x78ea4` | `./binary` |

##### `0x61a90` (`./binary`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
|    new |   +1.227s | 0.0% → 72.3% |   0ms → 1.22s | 0 → 1,226 | `0x71d44` | `./binary` |
|    new | +277.28ms | 0.0% → 16.3% | 0ms → 277.3ms |   0 → 277 | `0x71cf8` | `./binary` |
|    new | +165.17ms |  0.0% → 9.7% | 0ms → 165.2ms |   0 → 165 | `0x7197c` | `./binary` |
|    new |  +66.07ms |  0.0% → 3.9% |  0ms → 66.1ms |    0 → 66 | `0x71b24` | `./binary` |
|    new |  +35.04ms |  0.0% → 2.1% |  0ms → 35.0ms |    0 → 35 | `0x71c40` | `./binary` |

##### `0x71d44` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +674.67ms | 0.0% → 55.0% | 0ms → 674.7ms | 0 → 674 | `0x6639c` | `./binary` |
|    new | +517.52ms | 0.0% → 42.2% | 0ms → 517.5ms | 0 → 517 | `0x6503c` | `./binary` |
|    new | +123.12ms | 0.0% → 10.0% | 0ms → 123.1ms | 0 → 123 | `0x6627c` | `./binary` |
|    new |  +12.01ms |  0.0% → 1.0% |  0ms → 12.0ms |  0 → 12 | `0x5eff4` | `./binary` |
|    new |   +4.00ms |  0.0% → 0.3% |   0ms → 4.0ms |   0 → 4 | `0x65020` | `./binary` |

##### `0x61f50` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +900.90ms | 0.0% → 75.0% | 0ms → 900.9ms | 0 → 900 | `0x6a0c8` | `./binary` |
|    new |  +76.08ms |  0.0% → 6.3% |  0ms → 76.1ms |  0 → 76 | `0x6a31c` | `./binary` |
|    new |  +41.04ms |  0.0% → 3.4% |  0ms → 41.0ms |  0 → 41 | `0x6a18c` | `./binary` |
|    new |  +37.04ms |  0.0% → 3.1% |  0ms → 37.0ms |  0 → 37 | `0x69c74` | `./binary` |
|    new |  +33.03ms |  0.0% → 2.8% |  0ms → 33.0ms |  0 → 33 | `0x69d98` | `./binary` |

##### `0x674d4` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +800.80ms | 0.0% → 69.7% | 0ms → 800.8ms | 0 → 800 | `0x6f75c` | `./binary` |
|    new |  +40.04ms |  0.0% → 3.5% |  0ms → 40.0ms |  0 → 40 | `0x70918` | `./binary` |
|    new |  +36.04ms |  0.0% → 3.1% |  0ms → 36.0ms |  0 → 36 | `0x6f6f4` | `./binary` |
|    new |  +33.03ms |  0.0% → 2.9% |  0ms → 33.0ms |  0 → 33 | `0x6f798` | `./binary` |
|    new |  +24.02ms |  0.0% → 2.1% |  0ms → 24.0ms |  0 → 24 | `0x6f7b4` | `./binary` |

##### `0x6f75c` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +139.14ms | 0.0% → 14.4% | 0ms → 139.1ms | 0 → 139 | `0x70014` | `./binary` |
|    new |  +88.09ms |  0.0% → 9.1% |  0ms → 88.1ms |  0 → 88 | `0x70050` | `./binary` |
|    new |  +63.06ms |  0.0% → 6.5% |  0ms → 63.1ms |  0 → 63 | `0x70034` | `./binary` |
|    new |  +49.05ms |  0.0% → 5.1% |  0ms → 49.0ms |  0 → 49 | `0x700cc` | `./binary` |
|    new |  +45.05ms |  0.0% → 4.7% |  0ms → 45.0ms |  0 → 45 | `0x70090` | `./binary` |

##### `0x6a0c8` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +254.25ms | 0.0% → 27.6% | 0ms → 254.3ms | 0 → 254 | `0x60bf8` | `./binary` |
|    new | +105.11ms | 0.0% → 11.4% | 0ms → 105.1ms | 0 → 105 | `0x60c90` | `./binary` |
|    new | +100.10ms | 0.0% → 10.9% | 0ms → 100.1ms | 0 → 100 | `0x61f50` | `./binary` |
|    new |  +61.06ms |  0.0% → 6.6% |  0ms → 61.1ms |  0 → 61 | `0x7cd84` | `./binary` |
|    new |  +42.04ms |  0.0% → 4.6% |  0ms → 42.0ms |  0 → 42 | `0x5f5d4` | `./binary` |

##### `0x672d4` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +721.72ms | 0.0% → 79.1% | 0ms → 721.7ms | 0 → 721 | `0x78ff4` | `./binary` |
|    new |  +75.08ms |  0.0% → 8.2% |  0ms → 75.1ms |  0 → 75 | `0x782ec` | `./binary` |
|    new |  +46.05ms |  0.0% → 5.0% |  0ms → 46.0ms |  0 → 46 | `0x783f4` | `./binary` |
|    new |  +14.01ms |  0.0% → 1.5% |  0ms → 14.0ms |  0 → 14 | `0x78200` | `./binary` |
|    new |  +10.01ms |  0.0% → 1.1% |  0ms → 10.0ms |  0 → 10 | `0x78fdc` | `./binary` |

##### `0x6aea0` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +558.56ms | 0.0% → 73.9% | 0ms → 558.6ms | 0 → 558 | `0x6944c` | `./binary` |
|    new | +139.14ms | 0.0% → 18.4% | 0ms → 139.1ms | 0 → 139 | `0x695b4` | `./binary` |
|    new |  +83.08ms | 0.0% → 11.0% |  0ms → 83.1ms |  0 → 83 | `0x5eff4` | `./binary` |
|    new |  +63.06ms |  0.0% → 8.3% |  0ms → 63.1ms |  0 → 63 | `0x5e9c0` | `./binary` |
|    new |  +22.02ms |  0.0% → 2.9% |  0ms → 22.0ms |  0 → 22 | `0x5ebe0` | `./binary` |

##### `0x5ebe0` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +573.57ms | 0.0% → 78.7% | 0ms → 573.6ms | 0 → 573 | `0x6c3fc` | `./binary` |
|    new | +190.19ms | 0.0% → 26.1% | 0ms → 190.2ms | 0 → 190 | `0x6c384` | `./binary` |
|    new |  +18.02ms |  0.0% → 2.5% |  0ms → 18.0ms |  0 → 18 | `0x6c3e4` | `./binary` |
|    new |   +9.01ms |  0.0% → 1.2% |   0ms → 9.0ms |   0 → 9 | `0x6c3d8` | `./binary` |
|    new |   +1.00ms |  0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `0x6c3ec` | `./binary` |

##### `0x6944c` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +658.66ms | 0.0% → 90.6% | 0ms → 658.7ms | 0 → 658 | `0x5eff4` | `./binary` |
|    new |  +28.03ms |  0.0% → 3.9% |  0ms → 28.0ms |  0 → 28 | `0x5ebe0` | `./binary` |
|    new |   +8.01ms |  0.0% → 1.1% |   0ms → 8.0ms |   0 → 8 | `0x5efd4` | `./binary` |
|    new |   +7.01ms |  0.0% → 1.0% |   0ms → 7.0ms |   0 → 7 | `0x61f50` | `./binary` |
|    new |   +7.01ms |  0.0% → 1.0% |   0ms → 7.0ms |   0 → 7 | `0x5eb54` | `./binary` |

##### `0x27744` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time |   Samples | Callee    | Location   |
| ------: | ------: | ------------: | ----------: | --------: | --------- | ---------- |
|     new | +5.959s | 0.0% → 100.0% | 0ms → 5.95s | 0 → 5,954 | `0x16900` | `./binary` |
| removed | -5.244s | 100.0% → 0.0% | 5.24s → 0ms | 5,239 → 0 | `0x1130c` | `./binary` |

##### `0x27818` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +13.6% | +715.72ms | 100.0% | 5.24s → 5.95s | 5,239 → 5,954 | `0x27744` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x5e5a4` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +335.34ms | 0.0% → 47.9% | 0ms → 335.3ms | 0 → 335 | `0x5eff4` | `./binary` |
|    new | +106.11ms | 0.0% → 15.2% | 0ms → 106.1ms | 0 → 106 | `0x61a90` | `./binary` |
|    new |  +54.05ms |  0.0% → 7.7% |  0ms → 54.1ms |  0 → 54 | `0x5ebe0` | `./binary` |
|    new |  +49.05ms |  0.0% → 7.0% |  0ms → 49.0ms |  0 → 49 | `0x6b878` | `./binary` |
|    new |  +42.04ms |  0.0% → 6.0% |  0ms → 42.0ms |  0 → 42 | `0x61f50` | `./binary` |

##### `0x68820` (`./binary`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| -----: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
|    new | +540.54ms | 0.0% → 83.1% | 0ms → 540.5ms | 0 → 540 | `0x6aea0` | `./binary` |
|    new | +119.12ms | 0.0% → 18.3% | 0ms → 119.1ms | 0 → 119 | `0x6a948` | `./binary` |
|    new |   +5.01ms |  0.0% → 0.8% |   0ms → 5.0ms |   0 → 5 | `0x6a988` | `./binary` |
|    new |   +4.00ms |  0.0% → 0.6% |   0ms → 4.0ms |   0 → 4 | `0x6a8f8` | `./binary` |
|    new |   +3.00ms |  0.0% → 0.5% |   0ms → 3.0ms |   0 → 3 | `0x6a86c` | `./binary` |

##### `0xe3e00` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |            % |         Time | Samples | Callee   | Location            |
| -----: | -------: | -----------: | -----------: | ------: | -------- | ------------------- |
|    new | +37.04ms | 0.0% → 94.9% | 0ms → 37.0ms |  0 → 37 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x92f68` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +9.01ms | 0.0% → 37.5% | 0ms → 9.0ms |   0 → 9 | `0x9d200` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +4.00ms | 0.0% → 16.7% | 0ms → 4.0ms |   0 → 4 | `0x91d0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +3.00ms | 0.0% → 12.5% | 0ms → 3.0ms |   0 → 3 | `0x91bfc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +2.00ms |  0.0% → 8.3% | 0ms → 2.0ms |   0 → 2 | `0x9d210` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +2.00ms |  0.0% → 8.3% | 0ms → 2.0ms |   0 → 2 | `0x91b94` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xdd2b4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Callee   | Location            |
| -----: | ------: | -----------: | ----------: | ------: | -------- | ------------------- |
|    new | +3.00ms | 0.0% → 75.0% | 0ms → 3.0ms |   0 → 3 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x91d0c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Callee   | Location            |
| -----: | ------: | ------------: | ----------: | ------: | -------- | ------------------- |
|    new | +4.00ms | 0.0% → 100.0% | 0ms → 4.0ms |   0 → 4 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x91bfc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `0x900c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `0x901c8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90818` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `0x8f988` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9189c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| +200.0% | +2.00ms | 50.0% → 75.0% | 1.0ms → 3.0ms |   1 → 3 | `0x90818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91b94` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `0x9189c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `0x90b58` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x900c0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `0x8e9cc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x3b21fc` (`[kernel.kallsyms]`)

| Change |    Delta |             % |         Time | Samples | Callee     | Location            |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x3b15e4` | `[kernel.kallsyms]` |

##### `0x3b253c` (`[kernel.kallsyms]`)

| Change |    Delta |             % |         Time | Samples | Callee     | Location            |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x3b21fc` | `[kernel.kallsyms]` |

##### `0x3b25d4` (`[kernel.kallsyms]`)

| Change |    Delta |             % |         Time | Samples | Callee     | Location            |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x3b253c` | `[kernel.kallsyms]` |

##### `0x3b15e4` (`[kernel.kallsyms]`)

| Change |    Delta |              % |            Time | Samples | Callee     | Location            |
| -----: | -------: | -------------: | --------------: | ------: | ---------- | ------------------- |
|    new | +36.04ms |  0.0% → 100.0% |    0ms → 36.0ms |  0 → 36 | `0x7768d0` | `[kernel.kallsyms]` |
| +41.7% | +10.01ms | 100.0% → 94.4% | 24.0ms → 34.0ms | 24 → 34 | `0x4cb8b8` | `[kernel.kallsyms]` |

##### `0x2ab954` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |            Time | Samples | Callee      | Location            |
| ------: | ------: | ------------: | --------------: | ------: | ----------- | ------------------- |
|  +30.0% | +6.01ms | 87.0% → 76.5% | 20.0ms → 26.0ms | 20 → 26 | `0x2ab6f8`  | `[kernel.kallsyms]` |
| +500.0% | +5.01ms |  4.3% → 17.6% |   1.0ms → 6.0ms |   1 → 6 | `0x2ab618`  | `[kernel.kallsyms]` |
| removed | -1.00ms |   4.3% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x2ab7f4`  | `[kernel.kallsyms]` |
| removed | -1.00ms |   4.3% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x1486000` | `[kernel.kallsyms]` |
|     new | +1.00ms |   0.0% → 2.9% |     0ms → 1.0ms |   0 → 1 | `0x2ab6b8`  | `[kernel.kallsyms]` |

##### `0x7768d0` (`[kernel.kallsyms]`)

| Change |   Delta |              % |            Time | Samples | Callee     | Location            |
| -----: | ------: | -------------: | --------------: | ------: | ---------- | ------------------- |
| +36.0% | +9.01ms | 100.0% → 94.4% | 25.0ms → 34.0ms | 25 → 34 | `0x44a7e0` | `[kernel.kallsyms]` |
|    new | +2.00ms |    0.0% → 5.6% |     0ms → 2.0ms |   0 → 2 | `0x44a794` | `[kernel.kallsyms]` |

##### `0x4cb8b8` (`[kernel.kallsyms]`)

|  Change |    Delta |              % |            Time | Samples | Callee     | Location            |
| ------: | -------: | -------------: | --------------: | ------: | ---------- | ------------------- |
|  +47.8% | +11.01ms | 95.8% → 100.0% | 23.0ms → 34.0ms | 23 → 34 | `0x2ab954` | `[kernel.kallsyms]` |
| removed |  -1.00ms |    4.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x2ab528` | `[kernel.kallsyms]` |

##### `0x3b1aa0` (`[kernel.kallsyms]`)

|  Change |    Delta |              % |            Time | Samples | Callee     | Location            |
| ------: | -------: | -------------: | --------------: | ------: | ---------- | ------------------- |
|  +41.7% | +10.01ms | 96.0% → 100.0% | 24.0ms → 34.0ms | 24 → 34 | `0x3b15e4` | `[kernel.kallsyms]` |
| removed |  -1.00ms |    4.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x3b1488` | `[kernel.kallsyms]` |

##### `0x44a7e0` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Callee     | Location            |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +36.0% | +9.01ms | 100.0% | 25.0ms → 34.0ms | 25 → 34 | `0x3b1aa0` | `[kernel.kallsyms]` |

##### `0xb54524` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |           Time | Samples | Callee      | Location            |
| ------: | ------: | ------------: | -------------: | ------: | ----------- | ------------------- |
| removed | -3.00ms |  15.0% → 0.0% |    3.0ms → 0ms |   3 → 0 | `0x14837b8` | `[kernel.kallsyms]` |
|  +22.2% | +2.00ms | 45.0% → 42.3% | 9.0ms → 11.0ms |  9 → 11 | `0x14837cc` | `[kernel.kallsyms]` |
| +200.0% | +2.00ms |  5.0% → 11.5% |  1.0ms → 3.0ms |   1 → 3 | `0x14837c4` | `[kernel.kallsyms]` |
|     new | +2.00ms |   0.0% → 7.7% |    0ms → 2.0ms |   0 → 2 | `0x14837d0` | `[kernel.kallsyms]` |
|  -20.0% | -1.00ms | 25.0% → 15.4% |  5.0ms → 4.0ms |   5 → 4 | `0x14837bc` | `[kernel.kallsyms]` |

##### `0x2ab6f8` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Callee     | Location            |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------- |
| +30.0% | +6.01ms | 100.0% | 20.0ms → 26.0ms | 20 → 26 | `0xb54524` | `[kernel.kallsyms]` |

##### `0x2aad18` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Callee     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
|     new | +2.00ms |  0.0% → 33.3% | 0ms → 2.0ms |   0 → 2 | `0x2aa344` | `[kernel.kallsyms]` |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x2aa2d0` | `[kernel.kallsyms]` |
|     new | +1.00ms |  0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `0x2aa1c8` | `[kernel.kallsyms]` |
|     new | +1.00ms |  0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `0x2aa278` | `[kernel.kallsyms]` |
|     new | +1.00ms |  0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `0x2aa164` | `[kernel.kallsyms]` |

##### `0x2ab618` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Callee     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +500.0% | +5.01ms | 100.0% | 1.0ms → 6.0ms |   1 → 6 | `0x2aad18` | `[kernel.kallsyms]` |

##### `0x2ecb8` (`[kernel.kallsyms]`)

|  Change |    Delta |             % |           Time | Samples | Callee     | Location            |
| ------: | -------: | ------------: | -------------: | ------: | ---------- | ------------------- |
|     new | +36.04ms |  0.0% → 52.2% |   0ms → 36.0ms |  0 → 36 | `0x3b25d4` | `[kernel.kallsyms]` |
| removed | -26.03ms |  40.0% → 0.0% |   26.0ms → 0ms |  26 → 0 | `0x3b4878` | `[kernel.kallsyms]` |
|  -38.5% |  -5.01ms | 20.0% → 11.6% | 13.0ms → 8.0ms |  13 → 8 | `0x31b744` | `[kernel.kallsyms]` |
| +100.0% |  +3.00ms |   4.6% → 8.7% |  3.0ms → 6.0ms |   3 → 6 | `0x3d1ba4` | `[kernel.kallsyms]` |
|  -50.0% |  -2.00ms |   6.2% → 2.9% |  4.0ms → 2.0ms |   4 → 2 | `0x3add78` | `[kernel.kallsyms]` |

##### `0x2ed74` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |            Time | Samples | Callee     | Location            |
| ------: | ------: | ------------: | --------------: | ------: | ---------- | ------------------- |
|   +6.2% | +4.00ms | 98.5% → 98.6% | 65.1ms → 69.1ms | 65 → 69 | `0x2ecb8`  | `[kernel.kallsyms]` |
| removed | -1.00ms |   1.5% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x2ecac`  | `[kernel.kallsyms]` |
|     new | +1.00ms |   0.0% → 1.4% |     0ms → 1.0ms |   0 → 1 | `0x3add38` | `[kernel.kallsyms]` |

##### `0x14b23c0` (`[kernel.kallsyms]`)

| Change |   Delta |      % |            Time | Samples | Callee    | Location            |
| -----: | ------: | -----: | --------------: | ------: | --------- | ------------------- |
|  +6.1% | +4.00ms | 100.0% | 66.1ms → 70.1ms | 66 → 70 | `0x2ed74` | `[kernel.kallsyms]` |

##### `0x3d17e4` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |          Time | Samples | Callee      | Location            |
| ------: | ------: | ------------: | ------------: | ------: | ----------- | ------------------- |
| +200.0% | +4.00ms |        100.0% | 2.0ms → 6.0ms |   2 → 6 | `0x779ba8`  | `[kernel.kallsyms]` |
| +300.0% | +3.00ms | 50.0% → 66.7% | 1.0ms → 4.0ms |   1 → 4 | `0x4bb4a8`  | `[kernel.kallsyms]` |
| removed | -1.00ms |  50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x14a3c80` | `[kernel.kallsyms]` |
|     new | +1.00ms |  0.0% → 16.7% |   0ms → 1.0ms |   0 → 1 | `0x4bb2a0`  | `[kernel.kallsyms]` |

##### `0x3d171c` (`[kernel.kallsyms]`)

|  Change |   Delta |              % |          Time | Samples | Callee     | Location            |
| ------: | ------: | -------------: | ------------: | ------: | ---------- | ------------------- |
| +150.0% | +3.00ms | 100.0% → 83.3% | 2.0ms → 5.0ms |   2 → 5 | `0x77b550` | `[kernel.kallsyms]` |
|     new | +1.00ms |   0.0% → 16.7% |   0ms → 1.0ms |   0 → 1 | `0x77b61c` | `[kernel.kallsyms]` |

##### `0x779ba8` (`[kernel.kallsyms]`)

|  Change |   Delta |      % |          Time | Samples | Callee     | Location            |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------- |
| +200.0% | +4.00ms | 100.0% | 2.0ms → 6.0ms |   2 → 6 | `0x3d171c` | `[kernel.kallsyms]` |

##### `0x1130c` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -3.903s | 74.4% → 0.0% |   3.90s → 0ms | 3,900 → 0 | `0x10144` | `./binary` |
| removed | -521.52ms |  9.9% → 0.0% | 521.5ms → 0ms |   521 → 0 | `0xf660`  | `./binary` |
| removed | -501.50ms |  9.6% → 0.0% | 501.5ms → 0ms |   501 → 0 | `0xf7d4`  | `./binary` |
| removed |  -74.07ms |  1.4% → 0.0% |  74.1ms → 0ms |    74 → 0 | `0x100f0` | `./binary` |
| removed |  -67.07ms |  1.3% → 0.0% |  67.1ms → 0ms |    67 → 0 | `0xf68c`  | `./binary` |

##### `0xdf70` (`./binary`)

|  Change |   Delta |             % |        Time |   Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
| removed | -5.244s | 100.0% → 0.0% | 5.24s → 0ms | 5,239 → 0 | `0x27818` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10144` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.606s | 41.2% → 0.0% |   1.60s → 0ms | 1,605 → 0 | `0x44b48` | `./binary` |
| removed |   -1.516s | 38.8% → 0.0% |   1.51s → 0ms | 1,515 → 0 | `0x45be0` | `./binary` |
| removed | -546.55ms | 14.0% → 0.0% | 546.5ms → 0ms |   546 → 0 | `0x368f8` | `./binary` |
| removed | -147.15ms |  3.8% → 0.0% | 147.1ms → 0ms |   147 → 0 | `0x45934` | `./binary` |
| removed |  -29.03ms |  0.7% → 0.0% |  29.0ms → 0ms |    29 → 0 | `0x44e28` | `./binary` |

##### `0x368f8` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.662s | 62.5% → 0.0% |   1.66s → 0ms | 1,661 → 0 | `0x6449c` | `./binary` |
| removed | -775.78ms | 29.2% → 0.0% | 775.8ms → 0ms |   775 → 0 | `0x642d8` | `./binary` |
| removed | -637.64ms | 24.0% → 0.0% | 637.6ms → 0ms |   637 → 0 | `0x64480` | `./binary` |
| removed | -195.20ms |  7.3% → 0.0% | 195.2ms → 0ms |   195 → 0 | `0x642bc` | `./binary` |
| removed |  -67.07ms |  2.5% → 0.0% |  67.1ms → 0ms |    67 → 0 | `0x64410` | `./binary` |

##### `0x4aa18` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.249s | 58.6% → 0.0% |   1.24s → 0ms | 1,248 → 0 | `0x383d0` | `./binary` |
| removed | -220.22ms | 10.3% → 0.0% | 220.2ms → 0ms |   220 → 0 | `0x366a8` | `./binary` |
| removed | -168.17ms |  7.9% → 0.0% | 168.2ms → 0ms |   168 → 0 | `0x36d98` | `./binary` |
| removed | -168.17ms |  7.9% → 0.0% | 168.2ms → 0ms |   168 → 0 | `0x36670` | `./binary` |
| removed | -145.15ms |  6.8% → 0.0% | 145.1ms → 0ms |   145 → 0 | `0x36b64` | `./binary` |

##### `0x45be0` (`./binary`)

|  Change |   Delta |            % |        Time |   Samples | Callee    | Location   |
| ------: | ------: | -----------: | ----------: | --------: | --------- | ---------- |
| removed | -2.010s | 99.9% → 0.0% | 2.01s → 0ms | 2,008 → 0 | `0x368f8` | `./binary` |
| removed | -2.00ms |  0.1% → 0.0% | 2.0ms → 0ms |     2 → 0 | `0x35760` | `./binary` |

##### `0x44b48` (`./binary`)

|  Change |    Delta |            % |         Time |   Samples | Callee    | Location   |
| ------: | -------: | -----------: | -----------: | --------: | --------- | ---------- |
| removed |  -1.638s | 96.1% → 0.0% |  1.63s → 0ms | 1,637 → 0 | `0x4aa18` | `./binary` |
| removed | -45.05ms |  2.6% → 0.0% | 45.0ms → 0ms |    45 → 0 | `0x4a1ac` | `./binary` |
| removed | -10.01ms |  0.6% → 0.0% | 10.0ms → 0ms |    10 → 0 | `0x4a2b8` | `./binary` |
| removed |  -8.01ms |  0.5% → 0.0% |  8.0ms → 0ms |     8 → 0 | `0x4a944` | `./binary` |
| removed |  -8.01ms |  0.5% → 0.0% |  8.0ms → 0ms |     8 → 0 | `0x4aa00` | `./binary` |

##### `0x6449c` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -508.51ms | 30.6% → 0.0% | 508.5ms → 0ms | 508 → 0 | `0x36b64` | `./binary` |
| removed | -379.38ms | 22.8% → 0.0% | 379.4ms → 0ms | 379 → 0 | `0x36ddc` | `./binary` |
| removed | -310.31ms | 18.7% → 0.0% | 310.3ms → 0ms | 310 → 0 | `0x36d98` | `./binary` |
| removed | -252.25ms | 15.2% → 0.0% | 252.3ms → 0ms | 252 → 0 | `0x36b90` | `./binary` |
| removed | -201.20ms | 12.1% → 0.0% | 201.2ms → 0ms | 201 → 0 | `0x36c2c` | `./binary` |

##### `0x383d0` (`./binary`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | --------: | --------- | ---------- |
| removed |   -1.159s | 71.4% → 0.0% |   1.15s → 0ms | 1,158 → 0 | `0x537bc` | `./binary` |
| removed | -251.25ms | 15.5% → 0.0% | 251.3ms → 0ms |   251 → 0 | `0x53784` | `./binary` |
| removed | -125.13ms |  7.7% → 0.0% | 125.1ms → 0ms |   125 → 0 | `0x532e4` | `./binary` |
| removed |  -51.05ms |  3.1% → 0.0% |  51.1ms → 0ms |    51 → 0 | `0x534a0` | `./binary` |
| removed |  -47.05ms |  2.9% → 0.0% |  47.0ms → 0ms |    47 → 0 | `0x5373c` | `./binary` |

##### `0x62fd4` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -941.94ms | 72.2% → 0.0% | 941.9ms → 0ms | 941 → 0 | `0x53c28` | `./binary` |
| removed |  -49.05ms |  3.8% → 0.0% |  49.0ms → 0ms |  49 → 0 | `0x433d0` | `./binary` |
| removed |  -37.04ms |  2.8% → 0.0% |  37.0ms → 0ms |  37 → 0 | `0x53c64` | `./binary` |
| removed |  -31.03ms |  2.4% → 0.0% |  31.0ms → 0ms |  31 → 0 | `0x53bb4` | `./binary` |
| removed |  -26.03ms |  2.0% → 0.0% |  26.0ms → 0ms |  26 → 0 | `0x53c80` | `./binary` |

##### `0x36b64` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -683.68ms | 56.7% → 0.0% | 683.7ms → 0ms | 683 → 0 | `0x66174` | `./binary` |
| removed | -335.34ms | 27.8% → 0.0% | 335.3ms → 0ms | 335 → 0 | `0x52280` | `./binary` |
| removed |  -66.07ms |  5.5% → 0.0% |  66.1ms → 0ms |  66 → 0 | `0x66384` | `./binary` |
| removed |  -29.03ms |  2.4% → 0.0% |  29.0ms → 0ms |  29 → 0 | `0x66148` | `./binary` |
| removed |  -21.02ms |  1.7% → 0.0% |  21.0ms → 0ms |  21 → 0 | `0x661a4` | `./binary` |

##### `0x537bc` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -668.67ms | 57.7% → 0.0% | 668.7ms → 0ms | 668 → 0 | `0x45be0` | `./binary` |
| removed | -460.46ms | 39.7% → 0.0% | 460.5ms → 0ms | 460 → 0 | `0x44b48` | `./binary` |
| removed | -121.12ms | 10.4% → 0.0% | 121.1ms → 0ms | 121 → 0 | `0x45934` | `./binary` |
| removed |  -11.01ms |  0.9% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x368f8` | `./binary` |
| removed |  -10.01ms |  0.9% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x44c90` | `./binary` |

##### `0x53c28` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -171.17ms | 15.8% → 0.0% | 171.2ms → 0ms | 171 → 0 | `0x138f0` | `./binary` |
| removed | -115.12ms | 10.6% → 0.0% | 115.1ms → 0ms | 115 → 0 | `0x1392c` | `./binary` |
| removed | -105.11ms |  9.7% → 0.0% | 105.1ms → 0ms | 105 → 0 | `0x13910` | `./binary` |
| removed |  -64.06ms |  5.9% → 0.0% |  64.1ms → 0ms |  64 → 0 | `0x1396c` | `./binary` |
| removed |  -59.06ms |  5.4% → 0.0% |  59.1ms → 0ms |  59 → 0 | `0x1391c` | `./binary` |

##### `0x642d8` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -178.18ms | 23.0% → 0.0% | 178.2ms → 0ms | 178 → 0 | `0x36ddc` | `./binary` |
| removed | -166.17ms | 21.4% → 0.0% | 166.2ms → 0ms | 166 → 0 | `0x383d0` | `./binary` |
| removed | -161.16ms | 20.8% → 0.0% | 161.2ms → 0ms | 161 → 0 | `0x36b64` | `./binary` |
| removed | -153.15ms | 19.7% → 0.0% | 153.2ms → 0ms | 153 → 0 | `0x36d98` | `./binary` |
| removed |  -34.03ms |  4.4% → 0.0% |  34.0ms → 0ms |  34 → 0 | `0x36c2c` | `./binary` |

##### `0x66174` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -203.20ms | 28.9% → 0.0% | 203.2ms → 0ms | 203 → 0 | `0x366a8` | `./binary` |
| removed |  -88.09ms | 12.5% → 0.0% |  88.1ms → 0ms |  88 → 0 | `0x36670` | `./binary` |
| removed |  -78.08ms | 11.1% → 0.0% |  78.1ms → 0ms |  78 → 0 | `0x36b64` | `./binary` |
| removed |  -54.05ms |  7.7% → 0.0% |  54.1ms → 0ms |  54 → 0 | `0x466a0` | `./binary` |
| removed |  -37.04ms |  5.3% → 0.0% |  37.0ms → 0ms |  37 → 0 | `0x364a4` | `./binary` |

##### `0x36d98` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -536.54ms | 79.1% → 0.0% | 536.5ms → 0ms | 536 → 0 | `0x577ec` | `./binary` |
| removed | -169.17ms | 24.9% → 0.0% | 169.2ms → 0ms | 169 → 0 | `0x577a4` | `./binary` |
| removed |  -22.02ms |  3.2% → 0.0% |  22.0ms → 0ms |  22 → 0 | `0x577d4` | `./binary` |
| removed |   -7.01ms |  1.0% → 0.0% |   7.0ms → 0ms |   7 → 0 | `0x577c8` | `./binary` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x57790` | `./binary` |

##### `0x58e54` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -481.48ms | 73.7% → 0.0% | 481.5ms → 0ms | 481 → 0 | `0x66a6c` | `./binary` |
| removed | -128.13ms | 19.6% → 0.0% | 128.1ms → 0ms | 128 → 0 | `0x66750` | `./binary` |
| removed |  -79.08ms | 12.1% → 0.0% |  79.1ms → 0ms |  79 → 0 | `0x368f8` | `./binary` |
| removed |  -57.06ms |  8.7% → 0.0% |  57.1ms → 0ms |  57 → 0 | `0x36ddc` | `./binary` |
| removed |  -15.02ms |  2.3% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x36d98` | `./binary` |

##### `0x3695c` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -282.28ms | 43.4% → 0.0% | 282.3ms → 0ms | 282 → 0 | `0x368f8` | `./binary` |
| removed | -121.12ms | 18.6% → 0.0% | 121.1ms → 0ms | 121 → 0 | `0x383d0` | `./binary` |
| removed |  -49.05ms |  7.5% → 0.0% |  49.0ms → 0ms |  49 → 0 | `0x57e4c` | `./binary` |
| removed |  -48.05ms |  7.4% → 0.0% |  48.0ms → 0ms |  48 → 0 | `0x36d98` | `./binary` |
| removed |  -36.04ms |  5.5% → 0.0% |  36.0ms → 0ms |  36 → 0 | `0x57c58` | `./binary` |

##### `0x64480` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -478.48ms | 75.0% → 0.0% | 478.5ms → 0ms | 478 → 0 | `0x4aa18` | `./binary` |
| removed |  -64.06ms | 10.0% → 0.0% |  64.1ms → 0ms |  64 → 0 | `0x4a1ac` | `./binary` |
| removed |  -38.04ms |  6.0% → 0.0% |  38.0ms → 0ms |  38 → 0 | `0x4a2b8` | `./binary` |
| removed |  -16.02ms |  2.5% → 0.0% |  16.0ms → 0ms |  16 → 0 | `0x4a944` | `./binary` |
| removed |  -10.01ms |  1.6% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x4a110` | `./binary` |

##### `0x66a6c` (`./binary`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location   |
| ------: | --------: | -----------: | ------------: | ------: | --------- | ---------- |
| removed | -580.58ms | 92.9% → 0.0% | 580.6ms → 0ms | 580 → 0 | `0x368f8` | `./binary` |
| removed |  -16.02ms |  2.6% → 0.0% |  16.0ms → 0ms |  16 → 0 | `0x36d98` | `./binary` |
| removed |  -15.02ms |  2.4% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x36b64` | `./binary` |
| removed |   -6.01ms |  1.0% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0x3684c` | `./binary` |
| removed |   -4.00ms |  0.6% → 0.0% |   4.0ms → 0ms |   4 → 0 | `0x466a0` | `./binary` |

##### `0x9e670` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Callee   | Location            |
| ------: | -------: | -----------: | -----------: | ------: | -------- | ------------------- |
| removed | -30.03ms | 34.9% → 0.0% | 30.0ms → 0ms |  30 → 0 | `0x15a0` | `[kernel.kallsyms]` |

##### `0xddb88` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Callee   | Location            |
| ------: | -------: | -----------: | -----------: | ------: | -------- | ------------------- |
| removed | -28.03ms | 96.6% → 0.0% | 28.0ms → 0ms |  28 → 0 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x9e674` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |         Time | Samples | Callee   | Location            |
| ------: | -------: | -----------: | -----------: | ------: | -------- | ------------------- |
| removed | -10.01ms | 83.3% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x92a9c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |           Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | -------------: | ------: | --------- | -------------------------------------- |
|  -58.3% | -7.01ms | 70.6% → 62.5% | 12.0ms → 5.0ms |  12 → 5 | `0x90240` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +2.00ms |  0.0% → 25.0% |    0ms → 2.0ms |   0 → 2 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x900c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x8fcb4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x8fc74` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9405c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| ------: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -8.01ms | 88.9% → 0.0% | 8.0ms → 0ms |   8 → 0 | `0x9245c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x9240c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fa48` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Callee    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -58.3% | -7.01ms | 100.0% | 12.0ms → 5.0ms |  12 → 5 | `0x8f988` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x90240` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Callee    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -58.3% | -7.01ms | 100.0% | 12.0ms → 5.0ms |  12 → 5 | `0x8fa48` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xe3acc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Callee   | Location            |
| -----: | ------: | -----: | -------------: | ------: | -------- | ------------------- |
| -38.5% | -5.01ms | 100.0% | 13.0ms → 8.0ms |  13 → 8 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x8f988` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Callee    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -38.5% | -5.01ms | 100.0% | 13.0ms → 8.0ms |  13 → 8 | `0xe3acc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9245c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| ------: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x914e8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x91234` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x90d9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x90ba0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x9159c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xdda44` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |              % |            Time | Samples | Callee   | Location            |
| -----: | ------: | -------------: | --------------: | ------: | -------- | ------------------- |
| -23.8% | -5.01ms | 100.0% → 94.1% | 21.0ms → 16.0ms | 21 → 16 | `0x15a0` | `[kernel.kallsyms]` |

##### `0x3b47b4` (`[kernel.kallsyms]`)

|  Change |    Delta |            % |         Time | Samples | Callee     | Location            |
| ------: | -------: | -----------: | -----------: | ------: | ---------- | ------------------- |
| removed | -25.03ms | 96.2% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x3b3c5c` | `[kernel.kallsyms]` |
| removed |  -1.00ms |  3.8% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x3b3a44` | `[kernel.kallsyms]` |

##### `0x3b4878` (`[kernel.kallsyms]`)

|  Change |    Delta |             % |         Time | Samples | Callee     | Location            |
| ------: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
| removed | -26.03ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `0x3b47b4` | `[kernel.kallsyms]` |

##### `0x3b3c5c` (`[kernel.kallsyms]`)

|  Change |    Delta |             % |         Time | Samples | Callee     | Location            |
| ------: | -------: | ------------: | -----------: | ------: | ---------- | ------------------- |
| removed | -25.03ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x7768d0` | `[kernel.kallsyms]` |

##### `0x14b33d0` (`[kernel.kallsyms]`)

| Change |   Delta |             % |            Time | Samples | Callee      | Location            |
| -----: | ------: | ------------: | --------------: | ------: | ----------- | ------------------- |
| -22.2% | -8.01ms | 87.8% → 90.3% | 36.0ms → 28.0ms | 36 → 28 | `0x14b2ab4` | `[kernel.kallsyms]` |
| -40.0% | -2.00ms |  12.2% → 9.7% |   5.0ms → 3.0ms |   5 → 3 | `0x14b2aac` | `[kernel.kallsyms]` |

##### `0x15a0` (`[kernel.kallsyms]`)

| Change |    Delta |             % |            Time | Samples | Callee      | Location            |
| -----: | -------: | ------------: | --------------: | ------: | ----------- | ------------------- |
| -24.4% | -10.01ms | 35.7% → 29.2% | 41.0ms → 31.0ms | 41 → 31 | `0x14b33d0` | `[kernel.kallsyms]` |
|  +1.4% |  +1.00ms | 64.3% → 70.8% | 74.1ms → 75.1ms | 74 → 75 | `0x14b33a0` | `[kernel.kallsyms]` |

##### `0x315eb8` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |            Time | Samples | Callee     | Location            |
| ------: | ------: | ------------: | --------------: | ------: | ---------- | ------------------- |
|  -28.6% | -4.00ms | 42.4% → 41.7% | 14.0ms → 10.0ms | 14 → 10 | `0x315724` | `[kernel.kallsyms]` |
|  -50.0% | -2.00ms |  12.1% → 8.3% |   4.0ms → 2.0ms |   4 → 2 | `0x315708` | `[kernel.kallsyms]` |
| removed | -1.00ms |   3.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x315ccc` | `[kernel.kallsyms]` |
| removed | -1.00ms |   3.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x325cc0` | `[kernel.kallsyms]` |
|  +50.0% | +1.00ms |  6.1% → 12.5% |   2.0ms → 3.0ms |   2 → 3 | `0x3157e4` | `[kernel.kallsyms]` |

##### `0x14c6048` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |            Time | Samples | Callee     | Location            |
| ------: | ------: | ------------: | --------------: | ------: | ---------- | ------------------- |
|  -27.3% | -9.01ms | 94.3% → 92.3% | 33.0ms → 24.0ms | 33 → 24 | `0x315eb8` | `[kernel.kallsyms]` |
| removed | -1.00ms |   2.9% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x315fe0` | `[kernel.kallsyms]` |
| removed | -1.00ms |   2.9% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x315f78` | `[kernel.kallsyms]` |
|     new | +1.00ms |   0.0% → 3.8% |     0ms → 1.0ms |   0 → 1 | `0x3092bc` | `[kernel.kallsyms]` |

##### `0x14c6678` (`[kernel.kallsyms]`)

| Change |   Delta |              % |            Time | Samples | Callee      | Location            |
| -----: | ------: | -------------: | --------------: | ------: | ----------- | ------------------- |
| -25.7% | -9.01ms | 100.0% → 96.3% | 35.0ms → 26.0ms | 35 → 26 | `0x14c6048` | `[kernel.kallsyms]` |
|    new | +1.00ms |    0.0% → 3.7% |     0ms → 1.0ms |   0 → 1 | `0x14c5fc8` | `[kernel.kallsyms]` |

##### `0x14b2ab4` (`[kernel.kallsyms]`)

|  Change |   Delta |              % |            Time | Samples | Callee    | Location            |
| ------: | ------: | -------------: | --------------: | ------: | --------- | ------------------- |
|  -20.0% | -7.01ms | 97.2% → 100.0% | 35.0ms → 28.0ms | 35 → 28 | `0x36870` | `[kernel.kallsyms]` |
| removed | -1.00ms |    2.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x368a4` | `[kernel.kallsyms]` |

##### `0x31daf4` (`[kernel.kallsyms]`)

|  Change |   Delta |            % |        Time | Samples | Callee     | Location            |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------- |
| removed | -5.01ms | 71.4% → 0.0% | 5.0ms → 0ms |   5 → 0 | `0x361c28` | `[kernel.kallsyms]` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x361c90` | `[kernel.kallsyms]` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x361a1c` | `[kernel.kallsyms]` |

##### `0x31e728` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Callee     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -7.01ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `0x31daf4` | `[kernel.kallsyms]` |

##### `0x3383e8` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |        Time | Samples | Callee     | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------- |
| removed | -7.01ms |  87.5% → 0.0% | 7.0ms → 0ms |   7 → 0 | `0x31e728` | `[kernel.kallsyms]` |
| removed | -1.00ms |  12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x31deec` | `[kernel.kallsyms]` |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x31e71c` | `[kernel.kallsyms]` |

##### `0x33851c` (`[kernel.kallsyms]`)

| Change |   Delta |             % |          Time | Samples | Callee     | Location            |
| -----: | ------: | ------------: | ------------: | ------: | ---------- | ------------------- |
| -87.5% | -7.01ms | 66.7% → 20.0% | 8.0ms → 1.0ms |   8 → 1 | `0x3383e8` | `[kernel.kallsyms]` |

##### `0x3398ac` (`[kernel.kallsyms]`)

| Change |   Delta |      % |           Time | Samples | Callee     | Location            |
| -----: | ------: | -----: | -------------: | ------: | ---------- | ------------------- |
| -58.3% | -7.01ms | 100.0% | 12.0ms → 5.0ms |  12 → 5 | `0x33851c` | `[kernel.kallsyms]` |

##### `0x36870` (`[kernel.kallsyms]`)

| Change |   Delta |              % |            Time | Samples | Callee      | Location            |
| -----: | ------: | -------------: | --------------: | ------: | ----------- | ------------------- |
| -22.9% | -8.01ms | 100.0% → 96.4% | 35.0ms → 27.0ms | 35 → 27 | `0x14c6678` | `[kernel.kallsyms]` |
|    new | +1.00ms |    0.0% → 3.6% |     0ms → 1.0ms |   0 → 1 | `0x14c5f00` | `[kernel.kallsyms]` |

##### `0x31b6c0` (`[kernel.kallsyms]`)

|  Change |   Delta |              % |           Time | Samples | Callee     | Location            |
| ------: | ------: | -------------: | -------------: | ------: | ---------- | ------------------- |
|  -54.5% | -6.01ms | 91.7% → 100.0% | 11.0ms → 5.0ms |  11 → 5 | `0x3398ac` | `[kernel.kallsyms]` |
| removed | -1.00ms |    8.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x339824` | `[kernel.kallsyms]` |

##### `0x3a4b04` (`[kernel.kallsyms]`)

|  Change |   Delta |            % |        Time | Samples | Callee     | Location            |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------- |
| removed | -3.00ms | 50.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x3a351c` | `[kernel.kallsyms]` |
| removed | -2.00ms | 33.3% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x3a3538` | `[kernel.kallsyms]` |

##### `0x361c28` (`[kernel.kallsyms]`)

|  Change |   Delta |            % |        Time | Samples | Callee     | Location            |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------- |
| removed | -3.00ms | 60.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x3a4ee0` | `[kernel.kallsyms]` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x2be2c4` | `[kernel.kallsyms]` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x2be2bc` | `[kernel.kallsyms]` |

##### `0x31b744` (`[kernel.kallsyms]`)

|  Change |   Delta |             % |           Time | Samples | Callee     | Location            |
| ------: | ------: | ------------: | -------------: | ------: | ---------- | ------------------- |
|  -58.3% | -7.01ms | 92.3% → 62.5% | 12.0ms → 5.0ms |  12 → 5 | `0x31b6c0` | `[kernel.kallsyms]` |
| +200.0% | +2.00ms |  7.7% → 37.5% |  1.0ms → 3.0ms |   1 → 3 | `0x31b628` | `[kernel.kallsyms]` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `0x16900` (`./binary`) ← `0x27744` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0x13e30` (`./binary`)

| Change |     Delta |           % |          Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | --------: | ----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new | +179.18ms | 0.0% → 3.0% | 0ms → 179.2ms | 0 → 179 | `0x9a704` (`./binary`) ← `0x90450` ← `0x15034`                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |  +85.09ms | 0.0% → 1.4% |  0ms → 85.1ms |  0 → 85 | `0x9a704` (`./binary`) ← `0x906b4` ← `0x14e90`                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |  +48.05ms | 0.0% → 0.8% |  0ms → 48.0ms |  0 → 48 | `0x6f844` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +45.05ms | 0.0% → 0.8% |  0ms → 45.0ms |  0 → 45 | `0x70014` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +36.04ms | 0.0% → 0.6% |  0ms → 36.0ms |  0 → 36 | `0x9a704` (`./binary`) ← `0x906b4` ← `0x14f40`                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |  +36.04ms | 0.0% → 0.6% |  0ms → 36.0ms |  0 → 36 | `0x6f850` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +33.03ms | 0.0% → 0.6% |  0ms → 33.0ms |  0 → 33 | `0x70050` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +28.03ms | 0.0% → 0.5% |  0ms → 28.0ms |  0 → 28 | `0x6f834` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +27.03ms | 0.0% → 0.5% |  0ms → 27.0ms |  0 → 27 | `0x6ffec` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +19.02ms | 0.0% → 0.3% |  0ms → 19.0ms |  0 → 19 | `0x70034` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +18.02ms | 0.0% → 0.3% |  0ms → 18.0ms |  0 → 18 | `0x70040` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +17.02ms | 0.0% → 0.3% |  0ms → 17.0ms |  0 → 17 | `0x70748` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +15.02ms | 0.0% → 0.3% |  0ms → 15.0ms |  0 → 15 | `0x9075c` (`./binary`) ← `0x14f40`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +14.01ms | 0.0% → 0.2% |  0ms → 14.0ms |  0 → 14 | `0x14f2c` (`./binary`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    new |  +14.01ms | 0.0% → 0.2% |  0ms → 14.0ms |  0 → 14 | `0x14f60` (`./binary`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    new |  +14.01ms | 0.0% → 0.2% |  0ms → 14.0ms |  0 → 14 | `0x6feb8` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +13.01ms | 0.0% → 0.2% |  0ms → 13.0ms |  0 → 13 | `0x700cc` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +12.01ms | 0.0% → 0.2% |  0ms → 12.0ms |  0 → 12 | `0x6f81c` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +12.01ms | 0.0% → 0.2% |  0ms → 12.0ms |  0 → 12 | `0x700c0` (`./binary`) ← `0x14f10`                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |  +11.01ms | 0.0% → 0.2% |  0ms → 11.0ms |  0 → 11 | `0x14837cc` (`[kernel.kallsyms]`) ← `0xb54524` ← `0x2ab6f8` ← `0x2ab954` ← `0x4cb8b8` ← `0x3b15e4` ← `0x3b1aa0` ← `0x44a7e0` ← `0x7768d0` ← `0x3b15e4` ← `0x3b21fc` ← `0x3b253c` ← `0x3b25d4` ← `0x2ecb8` ← `0x2ed74` ← `0x14b23c0` ← `0x14b33a0` ← `0x15a0` ← `0xe3e00` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x5112c` (`./binary`) ← `0x228c0` ← `0x22470` ← `0x3b9b4` ← `0x3b854` ← `0x957f0` ← `0x2368c` ← `0x225d8` ← `0x14d1c` |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `0x1130c` (`./binary`) ← `0x27744` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27818` ← `0xdf70` (`./binary`)

|  Change |    Delta |           % |         Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                               |
| ------: | -------: | ----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -33.03ms | 0.6% → 0.0% | 33.0ms → 0ms |  33 → 0 | `0x131a4` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -33.03ms | 0.6% → 0.0% | 33.0ms → 0ms |  33 → 0 | `0x1392c` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -32.03ms | 0.6% → 0.0% | 32.0ms → 0ms |  32 → 0 | `0x138f0` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -27.03ms | 0.5% → 0.0% | 27.0ms → 0ms |  27 → 0 | `0x9d200` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xf68c` (`./binary`)                                                                                                                                                                                                                                                               |
| removed | -25.03ms | 0.5% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x131b0` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -23.02ms | 0.4% → 0.0% | 23.0ms → 0ms |  23 → 0 | `0x138c8` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -22.02ms | 0.4% → 0.0% | 22.0ms → 0ms |  22 → 0 | `0x13194` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -20.02ms | 0.4% → 0.0% | 20.0ms → 0ms |  20 → 0 | `0x13910` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -17.02ms | 0.3% → 0.0% | 17.0ms → 0ms |  17 → 0 | `0x138fc` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -16.02ms | 0.3% → 0.0% | 16.0ms → 0ms |  16 → 0 | `0x139a8` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -15.02ms | 0.3% → 0.0% | 15.0ms → 0ms |  15 → 0 | `0x1391c` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -15.02ms | 0.3% → 0.0% | 15.0ms → 0ms |  15 → 0 | `0x13904` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -14.01ms | 0.3% → 0.0% | 14.0ms → 0ms |  14 → 0 | `0x140b0` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -11.01ms | 0.2% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x1396c` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -11.01ms | 0.2% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x11f14` (`./binary`) ← `0xf68c`                                                                                                                                                                                                                                                                                                        |
| removed | -11.01ms | 0.2% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x13978` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -10.01ms | 0.2% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x13f34` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed | -10.01ms | 0.2% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x9e670` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xf75c` (`./binary`)                                                                                                                                                                                                                                                               |
| removed |  -9.01ms | 0.2% → 0.0% |  9.0ms → 0ms |   9 → 0 | `0x13818` (`./binary`) ← `0xf660`                                                                                                                                                                                                                                                                                                        |
| removed |  -9.01ms | 0.2% → 0.0% |  9.0ms → 0ms |   9 → 0 | `0x14837cc` (`[kernel.kallsyms]`) ← `0xb54524` ← `0x2ab6f8` ← `0x2ab954` ← `0x4cb8b8` ← `0x3b15e4` ← `0x3b1aa0` ← `0x44a7e0` ← `0x7768d0` ← `0x3b3c5c` ← `0x3b47b4` ← `0x3b4878` ← `0x2ecb8` ← `0x2ed74` ← `0x14b23c0` ← `0x14b33a0` ← `0x15a0` ← `0xddb88` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x11b0c` (`./binary`) ← `0xf1e0` |

# CPU profile diff

Took 1.56s → 1.81s (+249.25ms, +16.0%) over 1,558 → 1,807 samples (1.0ms per sample).

| Category |  Change |     Delta |             % |          Time |       Samples |
| -------- | ------: | --------: | ------------: | ------------: | ------------: |
| Ours     |  +15.8% | +245.25ms | 99.7% → 99.5% | 1.55s → 1.80s | 1,553 → 1,798 |
| Kernel   |  +50.0% |   +2.00ms |          0.3% | 4.0ms → 6.0ms |         4 → 6 |
| Native   | +200.0% |   +2.00ms |   0.1% → 0.2% | 1.0ms → 3.0ms |         1 → 3 |

Paths starting with `./` or `../` are relative to `/src/zstd/programs/`.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 1.56s → 1.81s (99.8%) 0xebf5c at /usr/lib/aarch64-linux-gnu/libc.so.6
    └── 1.56s → 1.81s (99.8%) 0x82030
        ├── 0ms → 1.81s (0.0% → 99.8%) 0x9f20 at ./zstd
        │   ├── 0ms → 1.48s (0.0% → 81.7%) 0x62a60
        │   │   ├── 0ms → 1.47s (0.0% → 81.0%) 0x16720
        │   │   │   └── 0ms → 1.47s (0.0% → 81.0%) 0x11630
        │   │   │       ├── 0ms → 1.14s (0.0% → 62.9%) 0x5a3f4
        │   │   │       │   ├── 0ms → 230.2ms (0.0% → 12.7%, self 0.0% → 16.8% globally) 0x60c38
        │   │   │       │   ├── 0ms → 229.2ms (0.0% → 12.7%, self 0.0% → 16.2% globally) 0x60980
        │   │   │       │   ├── 0ms → 219.2ms (0.0% → 12.1%, self 0.0% → 14.9% globally) 0x609c8
        │   │   │       │   ├── 0ms → 189.2ms (0.0% → 10.5%, self 0.0% → 12.8% globally) 0x60c5c
        │   │   │       │   ├── 0ms → 65.1ms (0.0% → 3.6%, self 0.0% → 4.4% globally) 0x609b8
        │   │   │       │   ├── 0ms → 42.0ms (0.0% → 2.3%, self 0.0% → 2.9% globally) 0x60c90
        │   │   │       │   ├── 0ms → 24.0ms (0.0% → 1.3%) 0x609d4
        │   │   │       │   ├── 0ms → 19.0ms (0.0% → 1.1%) 0x60a08
        │   │   │       │   └── 0ms → 120.1ms (0.0% → 6.6%) 40 more callees, led by (0.0% → 0.8%) 0x609ec
        │   │   │       ├── 0ms → 36.0ms (0.0% → 2.0%, self 0.0% → 2.5% globally) 0x5a7c0
        │   │   │       ├── 0ms → 33.0ms (0.0% → 1.8%) 0x5a85c
        │   │   │       ├── 0ms → 27.0ms (0.0% → 1.5%) 0x5a65c
        │   │   │       └── 0ms → 231.2ms (0.0% → 12.8%) 68 more callees, led by (0.0% → 1.1%) 0x5a838
        │   │   └── 0ms → 8.0ms (0.0% → 0.4%) 0x168b8
        │   └── 0ms → 327.3ms (0.0% → 18.1%) 3 more callees, led by (0.0% → 17.8%) 0x62d34
        └── 1.56s → 0ms (99.8% → 0.0%) 0x9cf0 at ./zstd
            ├── 1.27s → 0ms (81.5% → 0.0%) 0x61404
            │   ├── 1.26s → 0ms (80.8% → 0.0%) 0x16020
            │   │   └── 1.26s → 0ms (80.8% → 0.0%) 0x11090
            │   │       ├── 964.0ms → 0ms (61.8% → 0.0%) 0x59274
            │   │       │   ├── 210.2ms → 0ms (13.5% → 0.0%, self 17.1% → 0.0% globally) 0x5f848
            │   │       │   ├── 193.2ms → 0ms (12.4% → 0.0%, self 16.4% → 0.0% globally) 0x5fab8
            │   │       │   ├── 193.2ms → 0ms (12.4% → 0.0%, self 16.3% → 0.0% globally) 0x5f800
            │   │       │   ├── 137.1ms → 0ms (8.8% → 0.0%, self 10.4% → 0.0% globally) 0x5fadc
            │   │       │   ├── 63.1ms → 0ms (4.0% → 0.0%, self 4.7% → 0.0% globally) 0x5f838
            │   │       │   ├── 30.0ms → 0ms (1.9% → 0.0%, self 2.4% → 0.0% globally) 0x5fb10
            │   │       │   └── 137.1ms → 0ms (8.8% → 0.0%) 39 more callees, led by (0.8% → 0.0%) 0x5f854
            │   │       ├── 40.0ms → 0ms (2.6% → 0.0%) 0x59640
            │   │       ├── 34.0ms → 0ms (2.2% → 0.0%) 0x594d8
            │   │       ├── 26.0ms → 0ms (1.7% → 0.0%) 0x596dc
            │   │       └── 196.2ms → 0ms (12.6% → 0.0%) 55 more callees, led by (1.2% → 0.0%) 0x609c0
            │   └── 10.0ms → 0ms (0.6% → 0.0%) 2 more callees, led by (0.5% → 0.0%) 0x161a4
            └── 286.3ms → 0ms (18.4% → 0.0%) 3 more callees, led by (18.2% → 0.0%) 0x616b8
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +303.30ms | 0.0% → 16.8% | 0ms → 303.3ms | 0 → 303 | `0x60c38` | `./zstd` |
|    new | +292.29ms | 0.0% → 16.2% | 0ms → 292.3ms | 0 → 292 | `0x60980` | `./zstd` |
|    new | +269.27ms | 0.0% → 14.9% | 0ms → 269.3ms | 0 → 269 | `0x609c8` | `./zstd` |
|    new | +232.23ms | 0.0% → 12.8% | 0ms → 232.2ms | 0 → 232 | `0x60c5c` | `./zstd` |
|    new |  +79.08ms |  0.0% → 4.4% |  0ms → 79.1ms |  0 → 79 | `0x609b8` | `./zstd` |
|    new |  +53.05ms |  0.0% → 2.9% |  0ms → 53.1ms |  0 → 53 | `0x60c90` | `./zstd` |
|    new |  +46.05ms |  0.0% → 2.5% |  0ms → 46.0ms |  0 → 46 | `0x5a7c0` | `./zstd` |
|    new |  +36.04ms |  0.0% → 2.0% |  0ms → 36.0ms |  0 → 36 | `0x5a65c` | `./zstd` |
|    new |  +36.04ms |  0.0% → 2.0% |  0ms → 36.0ms |  0 → 36 | `0x5a85c` | `./zstd` |
|    new |  +26.03ms |  0.0% → 1.4% |  0ms → 26.0ms |  0 → 26 | `0x60a08` | `./zstd` |
|    new |  +25.03ms |  0.0% → 1.4% |  0ms → 25.0ms |  0 → 25 | `0x609d4` | `./zstd` |
|    new |  +22.02ms |  0.0% → 1.2% |  0ms → 22.0ms |  0 → 22 | `0x609ec` | `./zstd` |
|    new |  +21.02ms |  0.0% → 1.2% |  0ms → 21.0ms |  0 → 21 | `0x5a78c` | `./zstd` |
|    new |  +21.02ms |  0.0% → 1.2% |  0ms → 21.0ms |  0 → 21 | `0x5a838` | `./zstd` |
|    new |  +17.02ms |  0.0% → 0.9% |  0ms → 17.0ms |  0 → 17 | `0x5a7a8` | `./zstd` |
|    new |  +14.01ms |  0.0% → 0.8% |  0ms → 14.0ms |  0 → 14 | `0x60960` | `./zstd` |
|    new |  +11.01ms |  0.0% → 0.6% |  0ms → 11.0ms |  0 → 11 | `0x5a874` | `./zstd` |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |  0 → 10 | `0x5a7ec` | `./zstd` |
|    new |   +9.01ms |  0.0% → 0.5% |   0ms → 9.0ms |   0 → 9 | `0x5a860` | `./zstd` |
|    new |   +9.01ms |  0.0% → 0.5% |   0ms → 9.0ms |   0 → 9 | `0x609bc` | `./zstd` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |     Delta |            % |          Time | Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -267.27ms | 17.1% → 0.0% | 267.3ms → 0ms | 267 → 0 | `0x5f848` | `./zstd` |
| removed | -255.26ms | 16.4% → 0.0% | 255.3ms → 0ms | 255 → 0 | `0x5fab8` | `./zstd` |
| removed | -254.25ms | 16.3% → 0.0% | 254.3ms → 0ms | 254 → 0 | `0x5f800` | `./zstd` |
| removed | -162.16ms | 10.4% → 0.0% | 162.2ms → 0ms | 162 → 0 | `0x5fadc` | `./zstd` |
| removed |  -74.07ms |  4.7% → 0.0% |  74.1ms → 0ms |  74 → 0 | `0x5f838` | `./zstd` |
| removed |  -46.05ms |  3.0% → 0.0% |  46.0ms → 0ms |  46 → 0 | `0x59640` | `./zstd` |
| removed |  -41.04ms |  2.6% → 0.0% |  41.0ms → 0ms |  41 → 0 | `0x594d8` | `./zstd` |
| removed |  -38.04ms |  2.4% → 0.0% |  38.0ms → 0ms |  38 → 0 | `0x5fb10` | `./zstd` |
| removed |  -33.03ms |  2.1% → 0.0% |  33.0ms → 0ms |  33 → 0 | `0x596dc` | `./zstd` |
| removed |  -19.02ms |  1.2% → 0.0% |  19.0ms → 0ms |  19 → 0 | `0x596b8` | `./zstd` |
| removed |  -15.02ms |  1.0% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x596f4` | `./zstd` |
| removed |  -14.01ms |  0.9% → 0.0% |  14.0ms → 0ms |  14 → 0 | `0x59628` | `./zstd` |
| removed |  -13.01ms |  0.8% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5f854` | `./zstd` |
| removed |  -12.01ms |  0.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x59558` | `./zstd` |
| removed |  -12.01ms |  0.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x5f7f8` | `./zstd` |
| removed |  -12.01ms |  0.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x5f888` | `./zstd` |
| removed |  -12.01ms |  0.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x5960c` | `./zstd` |
| removed |  -12.01ms |  0.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x5f83c` | `./zstd` |
| removed |  -11.01ms |  0.7% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x5f86c` | `./zstd` |
| removed |  -10.01ms |  0.6% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x577d4` | `./zstd` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60c38` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +303.30ms | 0.0% → 100.0% | 0ms → 303.3ms | 0 → 303 | `0x5a3f4` | `./zstd` |

##### `0x60980` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +291.29ms | 0.0% → 99.7% | 0ms → 291.3ms | 0 → 291 | `0x5a3f4` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.3% |   0ms → 1.0ms |   0 → 1 | `0x59de8` | `./zstd` |

##### `0x609c8` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +269.27ms | 0.0% → 100.0% | 0ms → 269.3ms | 0 → 269 | `0x5a3f4` | `./zstd` |

##### `0x60c5c` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +232.23ms | 0.0% → 100.0% | 0ms → 232.2ms | 0 → 232 | `0x5a3f4` | `./zstd` |

##### `0x609b8` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +79.08ms | 0.0% → 100.0% | 0ms → 79.1ms |  0 → 79 | `0x5a3f4` | `./zstd` |

##### `0x60c90` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +53.05ms | 0.0% → 100.0% | 0ms → 53.1ms |  0 → 53 | `0x5a3f4` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +46.05ms | 0.0% → 100.0% | 0ms → 46.0ms |  0 → 46 | `0x11630` | `./zstd` |

##### `0x5a65c` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +35.04ms | 0.0% → 97.2% | 0ms → 35.0ms |  0 → 35 | `0x11630` | `./zstd` |
|    new |  +1.00ms |  0.0% → 2.8% |  0ms → 1.0ms |   0 → 1 | `0x61b40` | `./zstd` |

##### `0x5a85c` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x11630` | `./zstd` |

##### `0x60a08` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +26.03ms | 0.0% → 100.0% | 0ms → 26.0ms |  0 → 26 | `0x5a3f4` | `./zstd` |

##### `0x609d4` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +25.03ms | 0.0% → 100.0% | 0ms → 25.0ms |  0 → 25 | `0x5a3f4` | `./zstd` |

##### `0x609ec` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +22.02ms | 0.0% → 100.0% | 0ms → 22.0ms |  0 → 22 | `0x5a3f4` | `./zstd` |

##### `0x5a78c` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +20.02ms | 0.0% → 95.2% | 0ms → 20.0ms |  0 → 20 | `0x11630` | `./zstd` |
|    new |  +1.00ms |  0.0% → 4.8% |  0ms → 1.0ms |   0 → 1 | `0x61b40` | `./zstd` |

##### `0x5a838` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +21.02ms | 0.0% → 100.0% | 0ms → 21.0ms |  0 → 21 | `0x11630` | `./zstd` |

##### `0x5a7a8` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +17.02ms | 0.0% → 100.0% | 0ms → 17.0ms |  0 → 17 | `0x11630` | `./zstd` |

##### `0x60960` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +14.01ms | 0.0% → 100.0% | 0ms → 14.0ms |  0 → 14 | `0x5a3f4` | `./zstd` |

##### `0x5a874` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +11.01ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `0x11630` | `./zstd` |

##### `0x5a7ec` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +10.01ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `0x11630` | `./zstd` |

##### `0x5a860` (`./zstd`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------- |
|    new | +9.01ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `0x11630` | `./zstd` |

##### `0x609bc` (`./zstd`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------- |
|    new | +9.01ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `0x5a3f4` | `./zstd` |

##### `0x5f848` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -267.27ms | 100.0% → 0.0% | 267.3ms → 0ms | 267 → 0 | `0x59274` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -255.26ms | 100.0% → 0.0% | 255.3ms → 0ms | 255 → 0 | `0x59274` | `./zstd` |

##### `0x5f800` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -254.25ms | 100.0% → 0.0% | 254.3ms → 0ms | 254 → 0 | `0x59274` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -162.16ms | 100.0% → 0.0% | 162.2ms → 0ms | 162 → 0 | `0x59274` | `./zstd` |

##### `0x5f838` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -74.07ms | 100.0% → 0.0% | 74.1ms → 0ms |  74 → 0 | `0x59274` | `./zstd` |

##### `0x59640` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -44.04ms | 95.7% → 0.0% | 44.0ms → 0ms |  44 → 0 | `0x11090` | `./zstd` |
| removed |  -2.00ms |  4.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `0x609c0` | `./zstd` |

##### `0x594d8` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -37.04ms | 90.2% → 0.0% | 37.0ms → 0ms |  37 → 0 | `0x11090` | `./zstd` |
| removed |  -4.00ms |  9.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x609c0` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -38.04ms | 100.0% → 0.0% | 38.0ms → 0ms |  38 → 0 | `0x59274` | `./zstd` |

##### `0x596dc` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -33.03ms | 100.0% → 0.0% | 33.0ms → 0ms |  33 → 0 | `0x11090` | `./zstd` |

##### `0x596b8` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -17.02ms | 89.5% → 0.0% | 17.0ms → 0ms |  17 → 0 | `0x11090` | `./zstd` |
| removed |  -2.00ms | 10.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `0x609c0` | `./zstd` |

##### `0x596f4` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -15.02ms | 100.0% → 0.0% | 15.0ms → 0ms |  15 → 0 | `0x11090` | `./zstd` |

##### `0x59628` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -14.01ms | 100.0% → 0.0% | 14.0ms → 0ms |  14 → 0 | `0x11090` | `./zstd` |

##### `0x5f854` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -13.01ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `0x59274` | `./zstd` |

##### `0x59558` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -11.01ms | 91.7% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x11090` | `./zstd` |
| removed |  -1.00ms |  8.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x609c0` | `./zstd` |

##### `0x5f7f8` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -12.01ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x59274` | `./zstd` |

##### `0x5f888` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -12.01ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x59274` | `./zstd` |

##### `0x5960c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -12.01ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x11090` | `./zstd` |

##### `0x5f83c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -12.01ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x59274` | `./zstd` |

##### `0x5f86c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -11.01ms | 100.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x59274` | `./zstd` |

##### `0x577d4` (`./zstd`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location |
| ------: | ------: | -----------: | ----------: | ------: | --------- | -------- |
| removed | -9.01ms | 90.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `0x11090` | `./zstd` |
| removed | -1.00ms | 10.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x609c0` | `./zstd` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |            % |          Time |       Samples | Function  | Location                               |
| -----: | --------: | -----------: | ------------: | ------------: | --------- | -------------------------------------- |
|    new |   +1.806s | 0.0% → 99.8% |   0ms → 1.81s |     0 → 1,804 | `0x9f20`  | `./zstd`                               |
|    new |   +1.785s | 0.0% → 98.7% |   0ms → 1.78s |     0 → 1,783 | `0x11630` | `./zstd`                               |
|    new |   +1.785s | 0.0% → 98.7% |   0ms → 1.78s |     0 → 1,783 | `0x16720` | `./zstd`                               |
|    new |   +1.478s | 0.0% → 81.7% |   0ms → 1.48s |     0 → 1,477 | `0x62a60` | `./zstd`                               |
|    new |   +1.427s | 0.0% → 78.9% |   0ms → 1.43s |     0 → 1,426 | `0x5a3f4` | `./zstd`                               |
|    new | +321.32ms | 0.0% → 17.8% | 0ms → 321.3ms |       0 → 321 | `0x17e38` | `./zstd`                               |
|    new | +321.32ms | 0.0% → 17.8% | 0ms → 321.3ms |       0 → 321 | `0x62d34` | `./zstd`                               |
|    new | +303.30ms | 0.0% → 16.8% | 0ms → 303.3ms |       0 → 303 | `0x60c38` | `./zstd`                               |
|    new | +292.29ms | 0.0% → 16.2% | 0ms → 292.3ms |       0 → 292 | `0x60980` | `./zstd`                               |
|    new | +269.27ms | 0.0% → 14.9% | 0ms → 269.3ms |       0 → 269 | `0x609c8` | `./zstd`                               |
| +16.0% | +249.25ms |        99.8% | 1.56s → 1.81s | 1,555 → 1,804 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +16.0% | +249.25ms |        99.8% | 1.56s → 1.81s | 1,555 → 1,804 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +232.23ms | 0.0% → 12.8% | 0ms → 232.2ms |       0 → 232 | `0x60c5c` | `./zstd`                               |
|    new |  +79.08ms |  0.0% → 4.4% |  0ms → 79.1ms |        0 → 79 | `0x609b8` | `./zstd`                               |
|    new |  +53.05ms |  0.0% → 2.9% |  0ms → 53.1ms |        0 → 53 | `0x60c90` | `./zstd`                               |
|    new |  +46.05ms |  0.0% → 2.5% |  0ms → 46.0ms |        0 → 46 | `0x5a7c0` | `./zstd`                               |
|    new |  +36.04ms |  0.0% → 2.0% |  0ms → 36.0ms |        0 → 36 | `0x5a65c` | `./zstd`                               |
|    new |  +36.04ms |  0.0% → 2.0% |  0ms → 36.0ms |        0 → 36 | `0x5a85c` | `./zstd`                               |
|    new |  +26.03ms |  0.0% → 1.4% |  0ms → 26.0ms |        0 → 26 | `0x60a08` | `./zstd`                               |
|    new |  +25.03ms |  0.0% → 1.4% |  0ms → 25.0ms |        0 → 25 | `0x609d4` | `./zstd`                               |

##### Ours

| Change |     Delta |            % |          Time |   Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.806s | 0.0% → 99.8% |   0ms → 1.81s | 0 → 1,804 | `0x9f20`  | `./zstd` |
|    new |   +1.785s | 0.0% → 98.7% |   0ms → 1.78s | 0 → 1,783 | `0x11630` | `./zstd` |
|    new |   +1.785s | 0.0% → 98.7% |   0ms → 1.78s | 0 → 1,783 | `0x16720` | `./zstd` |
|    new |   +1.478s | 0.0% → 81.7% |   0ms → 1.48s | 0 → 1,477 | `0x62a60` | `./zstd` |
|    new |   +1.427s | 0.0% → 78.9% |   0ms → 1.43s | 0 → 1,426 | `0x5a3f4` | `./zstd` |
|    new | +321.32ms | 0.0% → 17.8% | 0ms → 321.3ms |   0 → 321 | `0x17e38` | `./zstd` |
|    new | +321.32ms | 0.0% → 17.8% | 0ms → 321.3ms |   0 → 321 | `0x62d34` | `./zstd` |
|    new | +303.30ms | 0.0% → 16.8% | 0ms → 303.3ms |   0 → 303 | `0x60c38` | `./zstd` |
|    new | +292.29ms | 0.0% → 16.2% | 0ms → 292.3ms |   0 → 292 | `0x60980` | `./zstd` |
|    new | +269.27ms | 0.0% → 14.9% | 0ms → 269.3ms |   0 → 269 | `0x609c8` | `./zstd` |
|    new | +232.23ms | 0.0% → 12.8% | 0ms → 232.2ms |   0 → 232 | `0x60c5c` | `./zstd` |
|    new |  +79.08ms |  0.0% → 4.4% |  0ms → 79.1ms |    0 → 79 | `0x609b8` | `./zstd` |
|    new |  +53.05ms |  0.0% → 2.9% |  0ms → 53.1ms |    0 → 53 | `0x60c90` | `./zstd` |
|    new |  +46.05ms |  0.0% → 2.5% |  0ms → 46.0ms |    0 → 46 | `0x5a7c0` | `./zstd` |
|    new |  +36.04ms |  0.0% → 2.0% |  0ms → 36.0ms |    0 → 36 | `0x5a65c` | `./zstd` |
|    new |  +36.04ms |  0.0% → 2.0% |  0ms → 36.0ms |    0 → 36 | `0x5a85c` | `./zstd` |
|    new |  +26.03ms |  0.0% → 1.4% |  0ms → 26.0ms |    0 → 26 | `0x60a08` | `./zstd` |
|    new |  +25.03ms |  0.0% → 1.4% |  0ms → 25.0ms |    0 → 25 | `0x609d4` | `./zstd` |
|    new |  +22.02ms |  0.0% → 1.2% |  0ms → 22.0ms |    0 → 22 | `0x609ec` | `./zstd` |
|    new |  +21.02ms |  0.0% → 1.2% |  0ms → 21.0ms |    0 → 21 | `0x5a78c` | `./zstd` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |     Delta |            % |          Time |   Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.557s | 99.8% → 0.0% |   1.56s → 0ms | 1,555 → 0 | `0x9cf0`  | `./zstd` |
| removed |   -1.545s | 99.0% → 0.0% |   1.54s → 0ms | 1,543 → 0 | `0x11090` | `./zstd` |
| removed |   -1.545s | 99.0% → 0.0% |   1.54s → 0ms | 1,543 → 0 | `0x16020` | `./zstd` |
| removed |   -1.270s | 81.5% → 0.0% |   1.27s → 0ms | 1,269 → 0 | `0x61404` | `./zstd` |
| removed |   -1.213s | 77.8% → 0.0% |   1.21s → 0ms | 1,212 → 0 | `0x59274` | `./zstd` |
| removed | -284.28ms | 18.2% → 0.0% | 284.3ms → 0ms |   284 → 0 | `0x17768` | `./zstd` |
| removed | -284.28ms | 18.2% → 0.0% | 284.3ms → 0ms |   284 → 0 | `0x616b8` | `./zstd` |
| removed | -267.27ms | 17.1% → 0.0% | 267.3ms → 0ms |   267 → 0 | `0x5f848` | `./zstd` |
| removed | -255.26ms | 16.4% → 0.0% | 255.3ms → 0ms |   255 → 0 | `0x5fab8` | `./zstd` |
| removed | -254.25ms | 16.3% → 0.0% | 254.3ms → 0ms |   254 → 0 | `0x5f800` | `./zstd` |
| removed | -162.16ms | 10.4% → 0.0% | 162.2ms → 0ms |   162 → 0 | `0x5fadc` | `./zstd` |
| removed |  -74.07ms |  4.7% → 0.0% |  74.1ms → 0ms |    74 → 0 | `0x5f838` | `./zstd` |
| removed |  -46.05ms |  3.0% → 0.0% |  46.0ms → 0ms |    46 → 0 | `0x59640` | `./zstd` |
| removed |  -41.04ms |  2.6% → 0.0% |  41.0ms → 0ms |    41 → 0 | `0x594d8` | `./zstd` |
| removed |  -38.04ms |  2.4% → 0.0% |  38.0ms → 0ms |    38 → 0 | `0x5fb10` | `./zstd` |
| removed |  -33.03ms |  2.1% → 0.0% |  33.0ms → 0ms |    33 → 0 | `0x596dc` | `./zstd` |
| removed |  -19.02ms |  1.2% → 0.0% |  19.0ms → 0ms |    19 → 0 | `0x609c0` | `./zstd` |
| removed |  -19.02ms |  1.2% → 0.0% |  19.0ms → 0ms |    19 → 0 | `0x596b8` | `./zstd` |
| removed |  -15.02ms |  1.0% → 0.0% |  15.0ms → 0ms |    15 → 0 | `0x596f4` | `./zstd` |
| removed |  -14.01ms |  0.9% → 0.0% |  14.0ms → 0ms |    14 → 0 | `0x59628` | `./zstd` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f20` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
|    new | +1.806s | 0.0% → 100.0% | 0ms → 1.81s | 0 → 1,804 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11630` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------- |
|    new | +1.785s | 0.0% → 100.0% | 0ms → 1.78s | 0 → 1,783 | `0x16720` | `./zstd` |

##### `0x16720` (`./zstd`)

| Change |     Delta |            % |          Time |   Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.465s | 0.0% → 82.1% |   0ms → 1.47s | 0 → 1,464 | `0x62a60` | `./zstd` |
|    new | +319.32ms | 0.0% → 17.9% | 0ms → 319.3ms |   0 → 319 | `0x17e38` | `./zstd` |

##### `0x62a60` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Caller   | Location |
| -----: | ------: | ------------: | ----------: | --------: | -------- | -------- |
|    new | +1.478s | 0.0% → 100.0% | 0ms → 1.48s | 0 → 1,477 | `0x9f20` | `./zstd` |

##### `0x5a3f4` (`./zstd`)

| Change |    Delta |            % |         Time |   Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | --------: | --------- | -------- |
|    new |  +1.413s | 0.0% → 99.0% |  0ms → 1.41s | 0 → 1,412 | `0x11630` | `./zstd` |
|    new | +14.01ms |  0.0% → 1.0% | 0ms → 14.0ms |    0 → 14 | `0x61b40` | `./zstd` |

##### `0x17e38` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +321.32ms | 0.0% → 100.0% | 0ms → 321.3ms | 0 → 321 | `0x62d34` | `./zstd` |

##### `0x62d34` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller   | Location |
| -----: | --------: | ------------: | ------------: | ------: | -------- | -------- |
|    new | +321.32ms | 0.0% → 100.0% | 0ms → 321.3ms | 0 → 321 | `0x9f20` | `./zstd` |

##### `0x60c38` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +303.30ms | 0.0% → 100.0% | 0ms → 303.3ms | 0 → 303 | `0x5a3f4` | `./zstd` |

##### `0x60980` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +291.29ms | 0.0% → 99.7% | 0ms → 291.3ms | 0 → 291 | `0x5a3f4` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.3% |   0ms → 1.0ms |   0 → 1 | `0x59de8` | `./zstd` |

##### `0x609c8` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +269.27ms | 0.0% → 100.0% | 0ms → 269.3ms | 0 → 269 | `0x5a3f4` | `./zstd` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Caller    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +16.0% | +249.25ms | 100.0% | 1.56s → 1.81s | 1,555 → 1,804 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x60c5c` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +232.23ms | 0.0% → 100.0% | 0ms → 232.2ms | 0 → 232 | `0x5a3f4` | `./zstd` |

##### `0x609b8` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +79.08ms | 0.0% → 100.0% | 0ms → 79.1ms |  0 → 79 | `0x5a3f4` | `./zstd` |

##### `0x60c90` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +53.05ms | 0.0% → 100.0% | 0ms → 53.1ms |  0 → 53 | `0x5a3f4` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +46.05ms | 0.0% → 100.0% | 0ms → 46.0ms |  0 → 46 | `0x11630` | `./zstd` |

##### `0x5a65c` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +35.04ms | 0.0% → 97.2% | 0ms → 35.0ms |  0 → 35 | `0x11630` | `./zstd` |
|    new |  +1.00ms |  0.0% → 2.8% |  0ms → 1.0ms |   0 → 1 | `0x61b40` | `./zstd` |

##### `0x5a85c` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +36.04ms | 0.0% → 100.0% | 0ms → 36.0ms |  0 → 36 | `0x11630` | `./zstd` |

##### `0x60a08` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +26.03ms | 0.0% → 100.0% | 0ms → 26.0ms |  0 → 26 | `0x5a3f4` | `./zstd` |

##### `0x609d4` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +25.03ms | 0.0% → 100.0% | 0ms → 25.0ms |  0 → 25 | `0x5a3f4` | `./zstd` |

##### `0x609ec` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +22.02ms | 0.0% → 100.0% | 0ms → 22.0ms |  0 → 22 | `0x5a3f4` | `./zstd` |

##### `0x5a78c` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +20.02ms | 0.0% → 95.2% | 0ms → 20.0ms |  0 → 20 | `0x11630` | `./zstd` |
|    new |  +1.00ms |  0.0% → 4.8% |  0ms → 1.0ms |   0 → 1 | `0x61b40` | `./zstd` |

##### `0x9cf0` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
| removed | -1.557s | 100.0% → 0.0% | 1.56s → 0ms | 1,555 → 0 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11090` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------- |
| removed | -1.545s | 100.0% → 0.0% | 1.54s → 0ms | 1,543 → 0 | `0x16020` | `./zstd` |

##### `0x16020` (`./zstd`)

|  Change |     Delta |            % |          Time |   Samples | Caller    | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.260s | 81.6% → 0.0% |   1.26s → 0ms | 1,259 → 0 | `0x61404` | `./zstd` |
| removed | -284.28ms | 18.4% → 0.0% | 284.3ms → 0ms |   284 → 0 | `0x17768` | `./zstd` |

##### `0x61404` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Caller   | Location |
| ------: | ------: | ------------: | ----------: | --------: | -------- | -------- |
| removed | -1.270s | 100.0% → 0.0% | 1.27s → 0ms | 1,269 → 0 | `0x9cf0` | `./zstd` |

##### `0x59274` (`./zstd`)

|  Change |   Delta |            % |        Time |   Samples | Caller    | Location |
| ------: | ------: | -----------: | ----------: | --------: | --------- | -------- |
| removed | -1.206s | 99.4% → 0.0% | 1.21s → 0ms | 1,205 → 0 | `0x11090` | `./zstd` |
| removed | -7.01ms |  0.6% → 0.0% | 7.0ms → 0ms |     7 → 0 | `0x609c0` | `./zstd` |

##### `0x17768` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -284.28ms | 100.0% → 0.0% | 284.3ms → 0ms | 284 → 0 | `0x616b8` | `./zstd` |

##### `0x616b8` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller   | Location |
| ------: | --------: | ------------: | ------------: | ------: | -------- | -------- |
| removed | -284.28ms | 100.0% → 0.0% | 284.3ms → 0ms | 284 → 0 | `0x9cf0` | `./zstd` |

##### `0x5f848` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -267.27ms | 100.0% → 0.0% | 267.3ms → 0ms | 267 → 0 | `0x59274` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -255.26ms | 100.0% → 0.0% | 255.3ms → 0ms | 255 → 0 | `0x59274` | `./zstd` |

##### `0x5f800` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -254.25ms | 100.0% → 0.0% | 254.3ms → 0ms | 254 → 0 | `0x59274` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -162.16ms | 100.0% → 0.0% | 162.2ms → 0ms | 162 → 0 | `0x59274` | `./zstd` |

##### `0x5f838` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -74.07ms | 100.0% → 0.0% | 74.1ms → 0ms |  74 → 0 | `0x59274` | `./zstd` |

##### `0x59640` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -44.04ms | 95.7% → 0.0% | 44.0ms → 0ms |  44 → 0 | `0x11090` | `./zstd` |
| removed |  -2.00ms |  4.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `0x609c0` | `./zstd` |

##### `0x594d8` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -37.04ms | 90.2% → 0.0% | 37.0ms → 0ms |  37 → 0 | `0x11090` | `./zstd` |
| removed |  -4.00ms |  9.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x609c0` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -38.04ms | 100.0% → 0.0% | 38.0ms → 0ms |  38 → 0 | `0x59274` | `./zstd` |

##### `0x596dc` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -33.03ms | 100.0% → 0.0% | 33.0ms → 0ms |  33 → 0 | `0x11090` | `./zstd` |

##### `0x609c0` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -19.02ms | 100.0% → 0.0% | 19.0ms → 0ms |  19 → 0 | `0x11090` | `./zstd` |

##### `0x596b8` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -17.02ms | 89.5% → 0.0% | 17.0ms → 0ms |  17 → 0 | `0x11090` | `./zstd` |
| removed |  -2.00ms | 10.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `0x609c0` | `./zstd` |

##### `0x596f4` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -15.02ms | 100.0% → 0.0% | 15.0ms → 0ms |  15 → 0 | `0x11090` | `./zstd` |

##### `0x59628` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -14.01ms | 100.0% → 0.0% | 14.0ms → 0ms |  14 → 0 | `0x11090` | `./zstd` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f20` (`./zstd`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.478s | 0.0% → 81.9% |   0ms → 1.48s | 0 → 1,477 | `0x62a60` | `./zstd` |
|    new | +321.32ms | 0.0% → 17.8% | 0ms → 321.3ms |   0 → 321 | `0x62d34` | `./zstd` |
|    new |   +5.01ms |  0.0% → 0.3% |   0ms → 5.0ms |     0 → 5 | `0x62afc` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.1% |   0ms → 1.0ms |     0 → 1 | `0xa2e60` | `./zstd` |

##### `0x11630` (`./zstd`)

| Change |    Delta |            % |         Time |   Samples | Callee    | Location |
| -----: | -------: | -----------: | -----------: | --------: | --------- | -------- |
|    new |  +1.413s | 0.0% → 79.2% |  0ms → 1.41s | 0 → 1,412 | `0x5a3f4` | `./zstd` |
|    new | +46.05ms |  0.0% → 2.6% | 0ms → 46.0ms |    0 → 46 | `0x5a7c0` | `./zstd` |
|    new | +36.04ms |  0.0% → 2.0% | 0ms → 36.0ms |    0 → 36 | `0x5a85c` | `./zstd` |
|    new | +35.04ms |  0.0% → 2.0% | 0ms → 35.0ms |    0 → 35 | `0x5a65c` | `./zstd` |
|    new | +21.02ms |  0.0% → 1.2% | 0ms → 21.0ms |    0 → 21 | `0x5a838` | `./zstd` |

##### `0x16720` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Callee    | Location |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------- |
|    new | +1.785s | 0.0% → 100.0% | 0ms → 1.78s | 0 → 1,783 | `0x11630` | `./zstd` |

##### `0x62a60` (`./zstd`)

| Change |   Delta |            % |        Time |   Samples | Callee    | Location |
| -----: | ------: | -----------: | ----------: | --------: | --------- | -------- |
|    new | +1.465s | 0.0% → 99.1% | 0ms → 1.47s | 0 → 1,464 | `0x16720` | `./zstd` |
|    new | +8.01ms |  0.0% → 0.5% | 0ms → 8.0ms |     0 → 8 | `0x168b8` | `./zstd` |
|    new | +2.00ms |  0.0% → 0.1% | 0ms → 2.0ms |     0 → 2 | `0x163b0` | `./zstd` |
|    new | +2.00ms |  0.0% → 0.1% | 0ms → 2.0ms |     0 → 2 | `0x16898` | `./zstd` |
|    new | +1.00ms |  0.0% → 0.1% | 0ms → 1.0ms |     0 → 1 | `0x16308` | `./zstd` |

##### `0x5a3f4` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +303.30ms | 0.0% → 21.2% | 0ms → 303.3ms | 0 → 303 | `0x60c38` | `./zstd` |
|    new | +291.29ms | 0.0% → 20.4% | 0ms → 291.3ms | 0 → 291 | `0x60980` | `./zstd` |
|    new | +269.27ms | 0.0% → 18.9% | 0ms → 269.3ms | 0 → 269 | `0x609c8` | `./zstd` |
|    new | +232.23ms | 0.0% → 16.3% | 0ms → 232.2ms | 0 → 232 | `0x60c5c` | `./zstd` |
|    new |  +79.08ms |  0.0% → 5.5% |  0ms → 79.1ms |  0 → 79 | `0x609b8` | `./zstd` |

##### `0x17e38` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +319.32ms | 0.0% → 99.4% | 0ms → 319.3ms | 0 → 319 | `0x16720` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.3% |   0ms → 1.0ms |   0 → 1 | `0x16898` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.3% |   0ms → 1.0ms |   0 → 1 | `0x163b0` | `./zstd` |

##### `0x62d34` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Callee    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +321.32ms | 0.0% → 100.0% | 0ms → 321.3ms | 0 → 321 | `0x17e38` | `./zstd` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time |   Samples | Callee   | Location |
| ------: | ------: | ------------: | ----------: | --------: | -------- | -------- |
|     new | +1.806s | 0.0% → 100.0% | 0ms → 1.81s | 0 → 1,804 | `0x9f20` | `./zstd` |
| removed | -1.557s | 100.0% → 0.0% | 1.56s → 0ms | 1,555 → 0 | `0x9cf0` | `./zstd` |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +16.0% | +249.25ms | 100.0% | 1.56s → 1.81s | 1,555 → 1,804 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9cf0` (`./zstd`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.270s | 81.6% → 0.0% |   1.27s → 0ms | 1,269 → 0 | `0x61404` | `./zstd` |
| removed | -284.28ms | 18.3% → 0.0% | 284.3ms → 0ms |   284 → 0 | `0x616b8` | `./zstd` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |     1 → 0 | `0x614a0` | `./zstd` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |     1 → 0 | `0xa17b0` | `./zstd` |

##### `0x11090` (`./zstd`)

|  Change |    Delta |            % |         Time |   Samples | Callee    | Location |
| ------: | -------: | -----------: | -----------: | --------: | --------- | -------- |
| removed |  -1.206s | 78.1% → 0.0% |  1.21s → 0ms | 1,205 → 0 | `0x59274` | `./zstd` |
| removed | -44.04ms |  2.9% → 0.0% | 44.0ms → 0ms |    44 → 0 | `0x59640` | `./zstd` |
| removed | -37.04ms |  2.4% → 0.0% | 37.0ms → 0ms |    37 → 0 | `0x594d8` | `./zstd` |
| removed | -33.03ms |  2.1% → 0.0% | 33.0ms → 0ms |    33 → 0 | `0x596dc` | `./zstd` |
| removed | -19.02ms |  1.2% → 0.0% | 19.0ms → 0ms |    19 → 0 | `0x609c0` | `./zstd` |

##### `0x16020` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Callee    | Location |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------- |
| removed | -1.545s | 100.0% → 0.0% | 1.54s → 0ms | 1,543 → 0 | `0x11090` | `./zstd` |

##### `0x61404` (`./zstd`)

|  Change |   Delta |            % |        Time |   Samples | Callee    | Location |
| ------: | ------: | -----------: | ----------: | --------: | --------- | -------- |
| removed | -1.260s | 99.2% → 0.0% | 1.26s → 0ms | 1,259 → 0 | `0x16020` | `./zstd` |
| removed | -8.01ms |  0.6% → 0.0% | 8.0ms → 0ms |     8 → 0 | `0x161a4` | `./zstd` |
| removed | -2.00ms |  0.2% → 0.0% | 2.0ms → 0ms |     2 → 0 | `0x16180` | `./zstd` |

##### `0x59274` (`./zstd`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -267.27ms | 22.0% → 0.0% | 267.3ms → 0ms | 267 → 0 | `0x5f848` | `./zstd` |
| removed | -255.26ms | 21.0% → 0.0% | 255.3ms → 0ms | 255 → 0 | `0x5fab8` | `./zstd` |
| removed | -254.25ms | 21.0% → 0.0% | 254.3ms → 0ms | 254 → 0 | `0x5f800` | `./zstd` |
| removed | -162.16ms | 13.4% → 0.0% | 162.2ms → 0ms | 162 → 0 | `0x5fadc` | `./zstd` |
| removed |  -74.07ms |  6.1% → 0.0% |  74.1ms → 0ms |  74 → 0 | `0x5f838` | `./zstd` |

##### `0x17768` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -284.28ms | 100.0% → 0.0% | 284.3ms → 0ms | 284 → 0 | `0x16020` | `./zstd` |

##### `0x616b8` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -284.28ms | 100.0% → 0.0% | 284.3ms → 0ms | 284 → 0 | `0x17768` | `./zstd` |

##### `0x609c0` (`./zstd`)

|  Change |   Delta |            % |        Time | Samples | Callee    | Location |
| ------: | ------: | -----------: | ----------: | ------: | --------- | -------- |
| removed | -7.01ms | 36.8% → 0.0% | 7.0ms → 0ms |   7 → 0 | `0x59274` | `./zstd` |
| removed | -4.00ms | 21.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x594d8` | `./zstd` |
| removed | -2.00ms | 10.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x59640` | `./zstd` |
| removed | -2.00ms | 10.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x596b8` | `./zstd` |
| removed | -1.00ms |  5.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x59558` | `./zstd` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `0x9f20` (`./zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

| Change |     Delta |            % |          Time | Samples | Call stack                                                                       |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------- |
|    new | +230.23ms | 0.0% → 12.7% | 0ms → 230.2ms | 0 → 230 | `0x60c38` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new | +229.23ms | 0.0% → 12.7% | 0ms → 229.2ms | 0 → 229 | `0x60980` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new | +219.22ms | 0.0% → 12.1% | 0ms → 219.2ms | 0 → 219 | `0x609c8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new | +189.19ms | 0.0% → 10.5% | 0ms → 189.2ms | 0 → 189 | `0x60c5c` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new |  +73.07ms |  0.0% → 4.0% |  0ms → 73.1ms |  0 → 73 | `0x60c38` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|    new |  +65.07ms |  0.0% → 3.6% |  0ms → 65.1ms |  0 → 65 | `0x609b8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new |  +58.06ms |  0.0% → 3.2% |  0ms → 58.1ms |  0 → 58 | `0x60980` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|    new |  +48.05ms |  0.0% → 2.7% |  0ms → 48.0ms |  0 → 48 | `0x609c8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|    new |  +42.04ms |  0.0% → 2.3% |  0ms → 42.0ms |  0 → 42 | `0x60c90` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new |  +40.04ms |  0.0% → 2.2% |  0ms → 40.0ms |  0 → 40 | `0x60c5c` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|    new |  +36.04ms |  0.0% → 2.0% |  0ms → 36.0ms |  0 → 36 | `0x5a7c0` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|    new |  +33.03ms |  0.0% → 1.8% |  0ms → 33.0ms |  0 → 33 | `0x5a85c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|    new |  +27.03ms |  0.0% → 1.5% |  0ms → 27.0ms |  0 → 27 | `0x5a65c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|    new |  +24.02ms |  0.0% → 1.3% |  0ms → 24.0ms |  0 → 24 | `0x609d4` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new |  +20.02ms |  0.0% → 1.1% |  0ms → 20.0ms |  0 → 20 | `0x5a838` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|    new |  +19.02ms |  0.0% → 1.1% |  0ms → 19.0ms |  0 → 19 | `0x60a08` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new |  +17.02ms |  0.0% → 0.9% |  0ms → 17.0ms |  0 → 17 | `0x5a78c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|    new |  +14.01ms |  0.0% → 0.8% |  0ms → 14.0ms |  0 → 14 | `0x5a7a8` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|    new |  +14.01ms |  0.0% → 0.8% |  0ms → 14.0ms |  0 → 14 | `0x609ec` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|    new |  +14.01ms |  0.0% → 0.8% |  0ms → 14.0ms |  0 → 14 | `0x609b8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `0x9cf0` (`./zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|  Change |     Delta |            % |          Time | Samples | Call stack                                                                       |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------- |
| removed | -210.21ms | 13.5% → 0.0% | 210.2ms → 0ms | 210 → 0 | `0x5f848` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed | -193.19ms | 12.4% → 0.0% | 193.2ms → 0ms | 193 → 0 | `0x5fab8` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed | -193.19ms | 12.4% → 0.0% | 193.2ms → 0ms | 193 → 0 | `0x5f800` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed | -137.14ms |  8.8% → 0.0% | 137.1ms → 0ms | 137 → 0 | `0x5fadc` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed |  -63.06ms |  4.0% → 0.0% |  63.1ms → 0ms |  63 → 0 | `0x5f838` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed |  -60.06ms |  3.9% → 0.0% |  60.1ms → 0ms |  60 → 0 | `0x5f800` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
| removed |  -60.06ms |  3.9% → 0.0% |  60.1ms → 0ms |  60 → 0 | `0x5fab8` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
| removed |  -57.06ms |  3.7% → 0.0% |  57.1ms → 0ms |  57 → 0 | `0x5f848` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
| removed |  -40.04ms |  2.6% → 0.0% |  40.0ms → 0ms |  40 → 0 | `0x59640` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
| removed |  -34.03ms |  2.2% → 0.0% |  34.0ms → 0ms |  34 → 0 | `0x594d8` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
| removed |  -30.03ms |  1.9% → 0.0% |  30.0ms → 0ms |  30 → 0 | `0x5fb10` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed |  -26.03ms |  1.7% → 0.0% |  26.0ms → 0ms |  26 → 0 | `0x596dc` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
| removed |  -24.02ms |  1.5% → 0.0% |  24.0ms → 0ms |  24 → 0 | `0x5fadc` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
| removed |  -13.01ms |  0.8% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x596b8` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
| removed |  -13.01ms |  0.8% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5f854` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed |  -12.01ms |  0.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x5960c` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
| removed |  -12.01ms |  0.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x59628` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
| removed |  -11.01ms |  0.7% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x5f83c` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| removed |  -11.01ms |  0.7% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x596f4` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
| removed |  -11.01ms |  0.7% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x5f838` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |

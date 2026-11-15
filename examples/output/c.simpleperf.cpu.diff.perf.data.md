# CPU profile diff

Took 1.39s → 1.60s (+215.22ms, +15.5%) over 1,386 → 1,601 samples (1.0ms per sample).

| Category |  Change |     Delta |             % |          Time |       Samples |
| -------- | ------: | --------: | ------------: | ------------: | ------------: |
| Ours     |  +15.1% | +209.21ms | 99.7% → 99.4% | 1.38s → 1.59s | 1,382 → 1,591 |
| Kernel   | +600.0% |   +6.01ms |   0.1% → 0.4% | 1.0ms → 7.0ms |         1 → 7 |
| Native   |    0.0% |       0ms |          0.2% |         3.0ms |             3 |

Paths starting with `./` or `../` are relative to `/src/zstd/programs/`.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 1.39s → 1.60s (99.9%) 0xebf5a at /usr/lib/aarch64-linux-gnu/libc.so.6
    └── 1.39s → 1.60s (99.9%) 0x8202e
        ├── 0ms → 1.60s (0.0% → 99.9%) 0x9f1e at ./zstd
        │   ├── 0ms → 1.31s (0.0% → 81.9%) 0x62a5e
        │   │   ├── 0ms → 1.30s (0.0% → 81.3%) 0x1671e
        │   │   │   └── 0ms → 1.30s (0.0% → 81.3%) 0x1162e
        │   │   │       ├── 0ms → 1.00s (0.0% → 62.5%) 0x5a3f2
        │   │   │       │   ├── 0ms → 224.2ms (0.0% → 14.0%, self 0.0% → 17.6% globally) 0x60980
        │   │   │       │   ├── 0ms → 188.2ms (0.0% → 11.7%, self 0.0% → 15.4% globally) 0x60c38
        │   │   │       │   ├── 0ms → 182.2ms (0.0% → 11.4%, self 0.0% → 14.2% globally) 0x609c8
        │   │   │       │   ├── 0ms → 148.1ms (0.0% → 9.2%, self 0.0% → 11.6% globally) 0x60c5c
        │   │   │       │   ├── 0ms → 64.1ms (0.0% → 4.0%, self 0.0% → 5.2% globally) 0x609b8
        │   │   │       │   ├── 0ms → 47.0ms (0.0% → 2.9%) 0x60c90
        │   │   │       │   └── 0ms → 147.1ms (0.0% → 9.2%) 39 more callees, led by (0.0% → 0.9%) 0x60a08
        │   │   │       ├── 0ms → 37.0ms (0.0% → 2.3%) 0x5a7c0
        │   │   │       ├── 0ms → 32.0ms (0.0% → 2.0%) 0x5a85c
        │   │   │       ├── 0ms → 26.0ms (0.0% → 1.6%) 0x5a838
        │   │   │       ├── 0ms → 24.0ms (0.0% → 1.5%) 0x5a65c
        │   │   │       └── 0ms → 182.2ms (0.0% → 11.4%) 65 more callees, led by (0.0% → 1.1%) 0x61b3e
        │   │   └── 0ms → 5.0ms (0.0% → 0.3%) 0x168b6
        │   └── 0ms → 288.3ms (0.0% → 18.0%) 3 more callees, led by (0.0% → 17.8%) 0x62d32
        └── 1.39s → 0ms (99.9% → 0.0%) 0x9cee at ./zstd
            ├── 1.15s → 0ms (83.0% → 0.0%) 0x61402
            │   ├── 1.14s → 0ms (82.4% → 0.0%) 0x1601e
            │   │   └── 1.14s → 0ms (82.4% → 0.0%) 0x1108e
            │   │       ├── 850.9ms → 0ms (61.3% → 0.0%) 0x59272
            │   │       │   ├── 193.2ms → 0ms (13.9% → 0.0%, self 16.9% → 0.0% globally) 0x5f800
            │   │       │   ├── 156.2ms → 0ms (11.3% → 0.0%, self 13.9% → 0.0% globally) 0x5fadc
            │   │       │   ├── 149.1ms → 0ms (10.8% → 0.0%, self 13.9% → 0.0% globally) 0x5fab8
            │   │       │   ├── 149.1ms → 0ms (10.8% → 0.0%, self 13.1% → 0.0% globally) 0x5f848
            │   │       │   ├── 46.0ms → 0ms (3.3% → 0.0%, self 4.3% → 0.0% globally) 0x5f838
            │   │       │   ├── 27.0ms → 0ms (1.9% → 0.0%, self 2.5% → 0.0% globally) 0x5fb10
            │   │       │   └── 130.1ms → 0ms (9.4% → 0.0%) 40 more callees, led by (1.2% → 0.0%) 0x5f888
            │   │       ├── 50.1ms → 0ms (3.6% → 0.0%) 0x59640
            │   │       ├── 31.0ms → 0ms (2.2% → 0.0%) 0x594d8
            │   │       ├── 22.0ms → 0ms (1.6% → 0.0%) 0x596dc
            │   │       ├── 20.0ms → 0ms (1.4% → 0.0%) 0x5960c
            │   │       └── 169.2ms → 0ms (12.2% → 0.0%) 55 more callees, led by (1.2% → 0.0%) 0x596b8
            │   └── 9.0ms → 0ms (0.6% → 0.0%) 2 more callees, led by (0.5% → 0.0%) 0x161a2
            └── 233.2ms → 0ms (16.8% → 0.0%) 3 more callees, led by (16.7% → 0.0%) 0x616b6
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +282.28ms | 0.0% → 17.6% | 0ms → 282.3ms | 0 → 282 | `0x60980` | `./zstd` |
|    new | +247.25ms | 0.0% → 15.4% | 0ms → 247.2ms | 0 → 247 | `0x60c38` | `./zstd` |
|    new | +227.23ms | 0.0% → 14.2% | 0ms → 227.2ms | 0 → 227 | `0x609c8` | `./zstd` |
|    new | +186.19ms | 0.0% → 11.6% | 0ms → 186.2ms | 0 → 186 | `0x60c5c` | `./zstd` |
|    new |  +83.08ms |  0.0% → 5.2% |  0ms → 83.1ms |  0 → 83 | `0x609b8` | `./zstd` |
|    new |  +53.05ms |  0.0% → 3.3% |  0ms → 53.1ms |  0 → 53 | `0x60c90` | `./zstd` |
|    new |  +42.04ms |  0.0% → 2.6% |  0ms → 42.0ms |  0 → 42 | `0x5a7c0` | `./zstd` |
|    new |  +35.04ms |  0.0% → 2.2% |  0ms → 35.0ms |  0 → 35 | `0x5a85c` | `./zstd` |
|    new |  +28.03ms |  0.0% → 1.7% |  0ms → 28.0ms |  0 → 28 | `0x5a838` | `./zstd` |
|    new |  +26.03ms |  0.0% → 1.6% |  0ms → 26.0ms |  0 → 26 | `0x5a65c` | `./zstd` |
|    new |  +17.02ms |  0.0% → 1.1% |  0ms → 17.0ms |  0 → 17 | `0x5a78c` | `./zstd` |
|    new |  +16.02ms |  0.0% → 1.0% |  0ms → 16.0ms |  0 → 16 | `0x60c60` | `./zstd` |
|    new |  +16.02ms |  0.0% → 1.0% |  0ms → 16.0ms |  0 → 16 | `0x60a08` | `./zstd` |
|    new |  +14.01ms |  0.0% → 0.9% |  0ms → 14.0ms |  0 → 14 | `0x609ec` | `./zstd` |
|    new |  +13.01ms |  0.0% → 0.8% |  0ms → 13.0ms |  0 → 13 | `0x609a0` | `./zstd` |
|    new |  +12.01ms |  0.0% → 0.7% |  0ms → 12.0ms |  0 → 12 | `0x5a834` | `./zstd` |
|    new |  +12.01ms |  0.0% → 0.7% |  0ms → 12.0ms |  0 → 12 | `0x60978` | `./zstd` |
|    new |  +11.01ms |  0.0% → 0.7% |  0ms → 11.0ms |  0 → 11 | `0x5a7a8` | `./zstd` |
|    new |  +11.01ms |  0.0% → 0.7% |  0ms → 11.0ms |  0 → 11 | `0x5a6d8` | `./zstd` |
|    new |  +11.01ms |  0.0% → 0.7% |  0ms → 11.0ms |  0 → 11 | `0x5a7ec` | `./zstd` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |     Delta |            % |          Time | Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -234.23ms | 16.9% → 0.0% | 234.2ms → 0ms | 234 → 0 | `0x5f800` | `./zstd` |
| removed | -193.19ms | 13.9% → 0.0% | 193.2ms → 0ms | 193 → 0 | `0x5fadc` | `./zstd` |
| removed | -192.19ms | 13.9% → 0.0% | 192.2ms → 0ms | 192 → 0 | `0x5fab8` | `./zstd` |
| removed | -182.18ms | 13.1% → 0.0% | 182.2ms → 0ms | 182 → 0 | `0x5f848` | `./zstd` |
| removed |  -60.06ms |  4.3% → 0.0% |  60.1ms → 0ms |  60 → 0 | `0x5f838` | `./zstd` |
| removed |  -54.05ms |  3.9% → 0.0% |  54.1ms → 0ms |  54 → 0 | `0x59640` | `./zstd` |
| removed |  -37.04ms |  2.7% → 0.0% |  37.0ms → 0ms |  37 → 0 | `0x594d8` | `./zstd` |
| removed |  -35.04ms |  2.5% → 0.0% |  35.0ms → 0ms |  35 → 0 | `0x5fb10` | `./zstd` |
| removed |  -25.03ms |  1.8% → 0.0% |  25.0ms → 0ms |  25 → 0 | `0x596dc` | `./zstd` |
| removed |  -23.02ms |  1.7% → 0.0% |  23.0ms → 0ms |  23 → 0 | `0x5960c` | `./zstd` |
| removed |  -18.02ms |  1.3% → 0.0% |  18.0ms → 0ms |  18 → 0 | `0x596b8` | `./zstd` |
| removed |  -16.02ms |  1.2% → 0.0% |  16.0ms → 0ms |  16 → 0 | `0x5f888` | `./zstd` |
| removed |  -14.01ms |  1.0% → 0.0% |  14.0ms → 0ms |  14 → 0 | `0x5f83c` | `./zstd` |
| removed |  -12.01ms |  0.9% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x59628` | `./zstd` |
| removed |  -10.01ms |  0.7% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x5f7d4` | `./zstd` |
| removed |  -10.01ms |  0.7% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x5966c` | `./zstd` |
| removed |  -10.01ms |  0.7% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x5f86c` | `./zstd` |
| removed |   -9.01ms |  0.6% → 0.0% |   9.0ms → 0ms |   9 → 0 | `0x577d4` | `./zstd` |
| removed |   -9.01ms |  0.6% → 0.0% |   9.0ms → 0ms |   9 → 0 | `0x596b4` | `./zstd` |
| removed |   -9.01ms |  0.6% → 0.0% |   9.0ms → 0ms |   9 → 0 | `0x5f854` | `./zstd` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60980` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +282.28ms | 0.0% → 100.0% | 0ms → 282.3ms | 0 → 282 | `0x5a3f2` | `./zstd` |

##### `0x60c38` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +246.25ms | 0.0% → 99.6% | 0ms → 246.2ms | 0 → 246 | `0x5a3f2` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.4% |   0ms → 1.0ms |   0 → 1 | `0x59de6` | `./zstd` |

##### `0x609c8` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +227.23ms | 0.0% → 100.0% | 0ms → 227.2ms | 0 → 227 | `0x5a3f2` | `./zstd` |

##### `0x60c5c` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +185.19ms | 0.0% → 99.5% | 0ms → 185.2ms | 0 → 185 | `0x5a3f2` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.5% |   0ms → 1.0ms |   0 → 1 | `0x59de6` | `./zstd` |

##### `0x609b8` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +83.08ms | 0.0% → 100.0% | 0ms → 83.1ms |  0 → 83 | `0x5a3f2` | `./zstd` |

##### `0x60c90` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +53.05ms | 0.0% → 100.0% | 0ms → 53.1ms |  0 → 53 | `0x5a3f2` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +41.04ms | 0.0% → 97.6% | 0ms → 41.0ms |  0 → 41 | `0x1162e` | `./zstd` |
|    new |  +1.00ms |  0.0% → 2.4% |  0ms → 1.0ms |   0 → 1 | `0x61b3e` | `./zstd` |

##### `0x5a85c` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +35.04ms | 0.0% → 100.0% | 0ms → 35.0ms |  0 → 35 | `0x1162e` | `./zstd` |

##### `0x5a838` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +28.03ms | 0.0% → 100.0% | 0ms → 28.0ms |  0 → 28 | `0x1162e` | `./zstd` |

##### `0x5a65c` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +26.03ms | 0.0% → 100.0% | 0ms → 26.0ms |  0 → 26 | `0x1162e` | `./zstd` |

##### `0x5a78c` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +16.02ms | 0.0% → 94.1% | 0ms → 16.0ms |  0 → 16 | `0x1162e` | `./zstd` |
|    new |  +1.00ms |  0.0% → 5.9% |  0ms → 1.0ms |   0 → 1 | `0x61b3e` | `./zstd` |

##### `0x60c60` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +16.02ms | 0.0% → 100.0% | 0ms → 16.0ms |  0 → 16 | `0x5a3f2` | `./zstd` |

##### `0x60a08` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +16.02ms | 0.0% → 100.0% | 0ms → 16.0ms |  0 → 16 | `0x5a3f2` | `./zstd` |

##### `0x609ec` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +14.01ms | 0.0% → 100.0% | 0ms → 14.0ms |  0 → 14 | `0x5a3f2` | `./zstd` |

##### `0x609a0` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +13.01ms | 0.0% → 100.0% | 0ms → 13.0ms |  0 → 13 | `0x5a3f2` | `./zstd` |

##### `0x5a834` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +12.01ms | 0.0% → 100.0% | 0ms → 12.0ms |  0 → 12 | `0x1162e` | `./zstd` |

##### `0x60978` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +12.01ms | 0.0% → 100.0% | 0ms → 12.0ms |  0 → 12 | `0x5a3f2` | `./zstd` |

##### `0x5a7a8` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +10.01ms | 0.0% → 90.9% | 0ms → 10.0ms |  0 → 10 | `0x1162e` | `./zstd` |
|    new |  +1.00ms |  0.0% → 9.1% |  0ms → 1.0ms |   0 → 1 | `0x61b3e` | `./zstd` |

##### `0x5a6d8` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +11.01ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `0x1162e` | `./zstd` |

##### `0x5a7ec` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +11.01ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `0x1162e` | `./zstd` |

##### `0x5f800` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -234.23ms | 100.0% → 0.0% | 234.2ms → 0ms | 234 → 0 | `0x59272` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -192.19ms | 99.5% → 0.0% | 192.2ms → 0ms | 192 → 0 | `0x59272` | `./zstd` |
| removed |   -1.00ms |  0.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x58c76` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -192.19ms | 100.0% → 0.0% | 192.2ms → 0ms | 192 → 0 | `0x59272` | `./zstd` |

##### `0x5f848` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -182.18ms | 100.0% → 0.0% | 182.2ms → 0ms | 182 → 0 | `0x59272` | `./zstd` |

##### `0x5f838` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -60.06ms | 100.0% → 0.0% | 60.1ms → 0ms |  60 → 0 | `0x59272` | `./zstd` |

##### `0x59640` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -54.05ms | 100.0% → 0.0% | 54.1ms → 0ms |  54 → 0 | `0x1108e` | `./zstd` |

##### `0x594d8` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -36.04ms | 97.3% → 0.0% | 36.0ms → 0ms |  36 → 0 | `0x1108e` | `./zstd` |
| removed |  -1.00ms |  2.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x609be` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -35.04ms | 100.0% → 0.0% | 35.0ms → 0ms |  35 → 0 | `0x59272` | `./zstd` |

##### `0x596dc` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -25.03ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x1108e` | `./zstd` |

##### `0x5960c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -23.02ms | 100.0% → 0.0% | 23.0ms → 0ms |  23 → 0 | `0x1108e` | `./zstd` |

##### `0x596b8` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -18.02ms | 100.0% → 0.0% | 18.0ms → 0ms |  18 → 0 | `0x1108e` | `./zstd` |

##### `0x5f888` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -16.02ms | 100.0% → 0.0% | 16.0ms → 0ms |  16 → 0 | `0x59272` | `./zstd` |

##### `0x5f83c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -14.01ms | 100.0% → 0.0% | 14.0ms → 0ms |  14 → 0 | `0x59272` | `./zstd` |

##### `0x59628` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -12.01ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x1108e` | `./zstd` |

##### `0x5f7d4` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -10.01ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x59272` | `./zstd` |

##### `0x5966c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -10.01ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x1108e` | `./zstd` |

##### `0x5f86c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -10.01ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x59272` | `./zstd` |

##### `0x577d4` (`./zstd`)

|  Change |   Delta |            % |        Time | Samples | Caller    | Location |
| ------: | ------: | -----------: | ----------: | ------: | --------- | -------- |
| removed | -8.01ms | 88.9% → 0.0% | 8.0ms → 0ms |   8 → 0 | `0x1108e` | `./zstd` |
| removed | -1.00ms | 11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x609be` | `./zstd` |

##### `0x596b4` (`./zstd`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------- |
| removed | -9.01ms | 100.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `0x1108e` | `./zstd` |

##### `0x5f854` (`./zstd`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------- |
| removed | -9.01ms | 100.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `0x59272` | `./zstd` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |            % |          Time |       Samples | Function  | Location                               |
| -----: | --------: | -----------: | ------------: | ------------: | --------- | -------------------------------------- |
|    new |   +1.601s | 0.0% → 99.9% |   0ms → 1.60s |     0 → 1,599 | `0x9f1e`  | `./zstd`                               |
|    new |   +1.587s | 0.0% → 99.0% |   0ms → 1.59s |     0 → 1,585 | `0x1162e` | `./zstd`                               |
|    new |   +1.587s | 0.0% → 99.0% |   0ms → 1.59s |     0 → 1,585 | `0x1671e` | `./zstd`                               |
|    new |   +1.312s | 0.0% → 81.9% |   0ms → 1.31s |     0 → 1,311 | `0x62a5e` | `./zstd`                               |
|    new |   +1.252s | 0.0% → 78.1% |   0ms → 1.25s |     0 → 1,251 | `0x5a3f2` | `./zstd`                               |
|    new | +285.29ms | 0.0% → 17.8% | 0ms → 285.3ms |       0 → 285 | `0x17e36` | `./zstd`                               |
|    new | +285.29ms | 0.0% → 17.8% | 0ms → 285.3ms |       0 → 285 | `0x62d32` | `./zstd`                               |
|    new | +282.28ms | 0.0% → 17.6% | 0ms → 282.3ms |       0 → 282 | `0x60980` | `./zstd`                               |
|    new | +247.25ms | 0.0% → 15.4% | 0ms → 247.2ms |       0 → 247 | `0x60c38` | `./zstd`                               |
|    new | +227.23ms | 0.0% → 14.2% | 0ms → 227.2ms |       0 → 227 | `0x609c8` | `./zstd`                               |
| +15.5% | +215.22ms |        99.9% | 1.39s → 1.60s | 1,384 → 1,599 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +15.5% | +215.22ms |        99.9% | 1.39s → 1.60s | 1,384 → 1,599 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +186.19ms | 0.0% → 11.6% | 0ms → 186.2ms |       0 → 186 | `0x60c5c` | `./zstd`                               |
|    new |  +83.08ms |  0.0% → 5.2% |  0ms → 83.1ms |        0 → 83 | `0x609b8` | `./zstd`                               |
|    new |  +53.05ms |  0.0% → 3.3% |  0ms → 53.1ms |        0 → 53 | `0x60c90` | `./zstd`                               |
|    new |  +42.04ms |  0.0% → 2.6% |  0ms → 42.0ms |        0 → 42 | `0x5a7c0` | `./zstd`                               |
|    new |  +35.04ms |  0.0% → 2.2% |  0ms → 35.0ms |        0 → 35 | `0x5a85c` | `./zstd`                               |
|    new |  +28.03ms |  0.0% → 1.7% |  0ms → 28.0ms |        0 → 28 | `0x5a838` | `./zstd`                               |
|    new |  +26.03ms |  0.0% → 1.6% |  0ms → 26.0ms |        0 → 26 | `0x5a65c` | `./zstd`                               |
|    new |  +17.02ms |  0.0% → 1.1% |  0ms → 17.0ms |        0 → 17 | `0x61b3e` | `./zstd`                               |

##### Ours

| Change |     Delta |            % |          Time |   Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.601s | 0.0% → 99.9% |   0ms → 1.60s | 0 → 1,599 | `0x9f1e`  | `./zstd` |
|    new |   +1.587s | 0.0% → 99.0% |   0ms → 1.59s | 0 → 1,585 | `0x1162e` | `./zstd` |
|    new |   +1.587s | 0.0% → 99.0% |   0ms → 1.59s | 0 → 1,585 | `0x1671e` | `./zstd` |
|    new |   +1.312s | 0.0% → 81.9% |   0ms → 1.31s | 0 → 1,311 | `0x62a5e` | `./zstd` |
|    new |   +1.252s | 0.0% → 78.1% |   0ms → 1.25s | 0 → 1,251 | `0x5a3f2` | `./zstd` |
|    new | +285.29ms | 0.0% → 17.8% | 0ms → 285.3ms |   0 → 285 | `0x17e36` | `./zstd` |
|    new | +285.29ms | 0.0% → 17.8% | 0ms → 285.3ms |   0 → 285 | `0x62d32` | `./zstd` |
|    new | +282.28ms | 0.0% → 17.6% | 0ms → 282.3ms |   0 → 282 | `0x60980` | `./zstd` |
|    new | +247.25ms | 0.0% → 15.4% | 0ms → 247.2ms |   0 → 247 | `0x60c38` | `./zstd` |
|    new | +227.23ms | 0.0% → 14.2% | 0ms → 227.2ms |   0 → 227 | `0x609c8` | `./zstd` |
|    new | +186.19ms | 0.0% → 11.6% | 0ms → 186.2ms |   0 → 186 | `0x60c5c` | `./zstd` |
|    new |  +83.08ms |  0.0% → 5.2% |  0ms → 83.1ms |    0 → 83 | `0x609b8` | `./zstd` |
|    new |  +53.05ms |  0.0% → 3.3% |  0ms → 53.1ms |    0 → 53 | `0x60c90` | `./zstd` |
|    new |  +42.04ms |  0.0% → 2.6% |  0ms → 42.0ms |    0 → 42 | `0x5a7c0` | `./zstd` |
|    new |  +35.04ms |  0.0% → 2.2% |  0ms → 35.0ms |    0 → 35 | `0x5a85c` | `./zstd` |
|    new |  +28.03ms |  0.0% → 1.7% |  0ms → 28.0ms |    0 → 28 | `0x5a838` | `./zstd` |
|    new |  +26.03ms |  0.0% → 1.6% |  0ms → 26.0ms |    0 → 26 | `0x5a65c` | `./zstd` |
|    new |  +17.02ms |  0.0% → 1.1% |  0ms → 17.0ms |    0 → 17 | `0x61b3e` | `./zstd` |
|    new |  +17.02ms |  0.0% → 1.1% |  0ms → 17.0ms |    0 → 17 | `0x5a78c` | `./zstd` |
|    new |  +16.02ms |  0.0% → 1.0% |  0ms → 16.0ms |    0 → 16 | `0x60c60` | `./zstd` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |     Delta |            % |          Time |   Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.385s | 99.9% → 0.0% |   1.39s → 0ms | 1,384 → 0 | `0x9cee`  | `./zstd` |
| removed |   -1.370s | 98.8% → 0.0% |   1.37s → 0ms | 1,369 → 0 | `0x1108e` | `./zstd` |
| removed |   -1.370s | 98.8% → 0.0% |   1.37s → 0ms | 1,369 → 0 | `0x1601e` | `./zstd` |
| removed |   -1.152s | 83.0% → 0.0% |   1.15s → 0ms | 1,151 → 0 | `0x61402` | `./zstd` |
| removed |   -1.056s | 76.1% → 0.0% |   1.06s → 0ms | 1,055 → 0 | `0x59272` | `./zstd` |
| removed | -234.23ms | 16.9% → 0.0% | 234.2ms → 0ms |   234 → 0 | `0x5f800` | `./zstd` |
| removed | -231.23ms | 16.7% → 0.0% | 231.2ms → 0ms |   231 → 0 | `0x17766` | `./zstd` |
| removed | -231.23ms | 16.7% → 0.0% | 231.2ms → 0ms |   231 → 0 | `0x616b6` | `./zstd` |
| removed | -193.19ms | 13.9% → 0.0% | 193.2ms → 0ms |   193 → 0 | `0x5fadc` | `./zstd` |
| removed | -192.19ms | 13.9% → 0.0% | 192.2ms → 0ms |   192 → 0 | `0x5fab8` | `./zstd` |
| removed | -182.18ms | 13.1% → 0.0% | 182.2ms → 0ms |   182 → 0 | `0x5f848` | `./zstd` |
| removed |  -60.06ms |  4.3% → 0.0% |  60.1ms → 0ms |    60 → 0 | `0x5f838` | `./zstd` |
| removed |  -54.05ms |  3.9% → 0.0% |  54.1ms → 0ms |    54 → 0 | `0x59640` | `./zstd` |
| removed |  -37.04ms |  2.7% → 0.0% |  37.0ms → 0ms |    37 → 0 | `0x594d8` | `./zstd` |
| removed |  -35.04ms |  2.5% → 0.0% |  35.0ms → 0ms |    35 → 0 | `0x5fb10` | `./zstd` |
| removed |  -25.03ms |  1.8% → 0.0% |  25.0ms → 0ms |    25 → 0 | `0x596dc` | `./zstd` |
| removed |  -23.02ms |  1.7% → 0.0% |  23.0ms → 0ms |    23 → 0 | `0x5960c` | `./zstd` |
| removed |  -18.02ms |  1.3% → 0.0% |  18.0ms → 0ms |    18 → 0 | `0x596b8` | `./zstd` |
| removed |  -16.02ms |  1.2% → 0.0% |  16.0ms → 0ms |    16 → 0 | `0x609be` | `./zstd` |
| removed |  -16.02ms |  1.2% → 0.0% |  16.0ms → 0ms |    16 → 0 | `0x5f888` | `./zstd` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f1e` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
|    new | +1.601s | 0.0% → 100.0% | 0ms → 1.60s | 0 → 1,599 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1162e` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Caller    | Location |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------- |
|    new | +1.587s | 0.0% → 100.0% | 0ms → 1.59s | 0 → 1,585 | `0x1671e` | `./zstd` |

##### `0x1671e` (`./zstd`)

| Change |     Delta |            % |          Time |   Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.302s | 0.0% → 82.1% |   0ms → 1.30s | 0 → 1,301 | `0x62a5e` | `./zstd` |
|    new | +284.28ms | 0.0% → 17.9% | 0ms → 284.3ms |   0 → 284 | `0x17e36` | `./zstd` |

##### `0x62a5e` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Caller   | Location |
| -----: | ------: | ------------: | ----------: | --------: | -------- | -------- |
|    new | +1.312s | 0.0% → 100.0% | 0ms → 1.31s | 0 → 1,311 | `0x9f1e` | `./zstd` |

##### `0x5a3f2` (`./zstd`)

| Change |   Delta |            % |        Time |   Samples | Caller    | Location |
| -----: | ------: | -----------: | ----------: | --------: | --------- | -------- |
|    new | +1.243s | 0.0% → 99.3% | 0ms → 1.24s | 0 → 1,242 | `0x1162e` | `./zstd` |
|    new | +9.01ms |  0.0% → 0.7% | 0ms → 9.0ms |     0 → 9 | `0x61b3e` | `./zstd` |

##### `0x17e36` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +285.29ms | 0.0% → 100.0% | 0ms → 285.3ms | 0 → 285 | `0x62d32` | `./zstd` |

##### `0x62d32` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller   | Location |
| -----: | --------: | ------------: | ------------: | ------: | -------- | -------- |
|    new | +285.29ms | 0.0% → 100.0% | 0ms → 285.3ms | 0 → 285 | `0x9f1e` | `./zstd` |

##### `0x60980` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +282.28ms | 0.0% → 100.0% | 0ms → 282.3ms | 0 → 282 | `0x5a3f2` | `./zstd` |

##### `0x60c38` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +246.25ms | 0.0% → 99.6% | 0ms → 246.2ms | 0 → 246 | `0x5a3f2` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.4% |   0ms → 1.0ms |   0 → 1 | `0x59de6` | `./zstd` |

##### `0x609c8` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +227.23ms | 0.0% → 100.0% | 0ms → 227.2ms | 0 → 227 | `0x5a3f2` | `./zstd` |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Caller    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +15.5% | +215.22ms | 100.0% | 1.39s → 1.60s | 1,384 → 1,599 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x60c5c` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Caller    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +185.19ms | 0.0% → 99.5% | 0ms → 185.2ms | 0 → 185 | `0x5a3f2` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.5% |   0ms → 1.0ms |   0 → 1 | `0x59de6` | `./zstd` |

##### `0x609b8` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +83.08ms | 0.0% → 100.0% | 0ms → 83.1ms |  0 → 83 | `0x5a3f2` | `./zstd` |

##### `0x60c90` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +53.05ms | 0.0% → 100.0% | 0ms → 53.1ms |  0 → 53 | `0x5a3f2` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +41.04ms | 0.0% → 97.6% | 0ms → 41.0ms |  0 → 41 | `0x1162e` | `./zstd` |
|    new |  +1.00ms |  0.0% → 2.4% |  0ms → 1.0ms |   0 → 1 | `0x61b3e` | `./zstd` |

##### `0x5a85c` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +35.04ms | 0.0% → 100.0% | 0ms → 35.0ms |  0 → 35 | `0x1162e` | `./zstd` |

##### `0x5a838` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +28.03ms | 0.0% → 100.0% | 0ms → 28.0ms |  0 → 28 | `0x1162e` | `./zstd` |

##### `0x5a65c` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +26.03ms | 0.0% → 100.0% | 0ms → 26.0ms |  0 → 26 | `0x1162e` | `./zstd` |

##### `0x61b3e` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +17.02ms | 0.0% → 100.0% | 0ms → 17.0ms |  0 → 17 | `0x1162e` | `./zstd` |

##### `0x5a78c` (`./zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +16.02ms | 0.0% → 94.1% | 0ms → 16.0ms |  0 → 16 | `0x1162e` | `./zstd` |
|    new |  +1.00ms |  0.0% → 5.9% |  0ms → 1.0ms |   0 → 1 | `0x61b3e` | `./zstd` |

##### `0x60c60` (`./zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +16.02ms | 0.0% → 100.0% | 0ms → 16.0ms |  0 → 16 | `0x5a3f2` | `./zstd` |

##### `0x9cee` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------------------------------------- |
| removed | -1.385s | 100.0% → 0.0% | 1.39s → 0ms | 1,384 → 0 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1108e` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Caller    | Location |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------- |
| removed | -1.370s | 100.0% → 0.0% | 1.37s → 0ms | 1,369 → 0 | `0x1601e` | `./zstd` |

##### `0x1601e` (`./zstd`)

|  Change |     Delta |            % |          Time |   Samples | Caller    | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.143s | 83.4% → 0.0% |   1.14s → 0ms | 1,142 → 0 | `0x61402` | `./zstd` |
| removed | -227.23ms | 16.6% → 0.0% | 227.2ms → 0ms |   227 → 0 | `0x17766` | `./zstd` |

##### `0x61402` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Caller   | Location |
| ------: | ------: | ------------: | ----------: | --------: | -------- | -------- |
| removed | -1.152s | 100.0% → 0.0% | 1.15s → 0ms | 1,151 → 0 | `0x9cee` | `./zstd` |

##### `0x59272` (`./zstd`)

|  Change |    Delta |            % |         Time |   Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | --------: | --------- | -------- |
| removed |  -1.043s | 98.8% → 0.0% |  1.04s → 0ms | 1,042 → 0 | `0x1108e` | `./zstd` |
| removed | -13.01ms |  1.2% → 0.0% | 13.0ms → 0ms |    13 → 0 | `0x609be` | `./zstd` |

##### `0x5f800` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -234.23ms | 100.0% → 0.0% | 234.2ms → 0ms | 234 → 0 | `0x59272` | `./zstd` |

##### `0x17766` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -231.23ms | 100.0% → 0.0% | 231.2ms → 0ms | 231 → 0 | `0x616b6` | `./zstd` |

##### `0x616b6` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller   | Location |
| ------: | --------: | ------------: | ------------: | ------: | -------- | -------- |
| removed | -231.23ms | 100.0% → 0.0% | 231.2ms → 0ms | 231 → 0 | `0x9cee` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -192.19ms | 99.5% → 0.0% | 192.2ms → 0ms | 192 → 0 | `0x59272` | `./zstd` |
| removed |   -1.00ms |  0.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x58c76` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -192.19ms | 100.0% → 0.0% | 192.2ms → 0ms | 192 → 0 | `0x59272` | `./zstd` |

##### `0x5f848` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -182.18ms | 100.0% → 0.0% | 182.2ms → 0ms | 182 → 0 | `0x59272` | `./zstd` |

##### `0x5f838` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -60.06ms | 100.0% → 0.0% | 60.1ms → 0ms |  60 → 0 | `0x59272` | `./zstd` |

##### `0x59640` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -54.05ms | 100.0% → 0.0% | 54.1ms → 0ms |  54 → 0 | `0x1108e` | `./zstd` |

##### `0x594d8` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -36.04ms | 97.3% → 0.0% | 36.0ms → 0ms |  36 → 0 | `0x1108e` | `./zstd` |
| removed |  -1.00ms |  2.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x609be` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -35.04ms | 100.0% → 0.0% | 35.0ms → 0ms |  35 → 0 | `0x59272` | `./zstd` |

##### `0x596dc` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -25.03ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x1108e` | `./zstd` |

##### `0x5960c` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -23.02ms | 100.0% → 0.0% | 23.0ms → 0ms |  23 → 0 | `0x1108e` | `./zstd` |

##### `0x596b8` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -18.02ms | 100.0% → 0.0% | 18.0ms → 0ms |  18 → 0 | `0x1108e` | `./zstd` |

##### `0x609be` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -16.02ms | 100.0% → 0.0% | 16.0ms → 0ms |  16 → 0 | `0x1108e` | `./zstd` |

##### `0x5f888` (`./zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -16.02ms | 100.0% → 0.0% | 16.0ms → 0ms |  16 → 0 | `0x59272` | `./zstd` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f1e` (`./zstd`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.312s | 0.0% → 82.0% |   0ms → 1.31s | 0 → 1,311 | `0x62a5e` | `./zstd` |
|    new | +285.29ms | 0.0% → 17.8% | 0ms → 285.3ms |   0 → 285 | `0x62d32` | `./zstd` |
|    new |   +2.00ms |  0.0% → 0.1% |   0ms → 2.0ms |     0 → 2 | `0x62afa` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.1% |   0ms → 1.0ms |     0 → 1 | `0xa2e5e` | `./zstd` |

##### `0x1162e` (`./zstd`)

| Change |    Delta |            % |         Time |   Samples | Callee    | Location |
| -----: | -------: | -----------: | -----------: | --------: | --------- | -------- |
|    new |  +1.243s | 0.0% → 78.4% |  0ms → 1.24s | 0 → 1,242 | `0x5a3f2` | `./zstd` |
|    new | +41.04ms |  0.0% → 2.6% | 0ms → 41.0ms |    0 → 41 | `0x5a7c0` | `./zstd` |
|    new | +35.04ms |  0.0% → 2.2% | 0ms → 35.0ms |    0 → 35 | `0x5a85c` | `./zstd` |
|    new | +28.03ms |  0.0% → 1.8% | 0ms → 28.0ms |    0 → 28 | `0x5a838` | `./zstd` |
|    new | +26.03ms |  0.0% → 1.6% | 0ms → 26.0ms |    0 → 26 | `0x5a65c` | `./zstd` |

##### `0x1671e` (`./zstd`)

| Change |   Delta |             % |        Time |   Samples | Callee    | Location |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------- |
|    new | +1.587s | 0.0% → 100.0% | 0ms → 1.59s | 0 → 1,585 | `0x1162e` | `./zstd` |

##### `0x62a5e` (`./zstd`)

| Change |   Delta |            % |        Time |   Samples | Callee    | Location |
| -----: | ------: | -----------: | ----------: | --------: | --------- | -------- |
|    new | +1.302s | 0.0% → 99.2% | 0ms → 1.30s | 0 → 1,301 | `0x1671e` | `./zstd` |
|    new | +5.01ms |  0.0% → 0.4% | 0ms → 5.0ms |     0 → 5 | `0x168b6` | `./zstd` |
|    new | +3.00ms |  0.0% → 0.2% | 0ms → 3.0ms |     0 → 3 | `0x16896` | `./zstd` |
|    new | +1.00ms |  0.0% → 0.1% | 0ms → 1.0ms |     0 → 1 | `0x163ae` | `./zstd` |
|    new | +1.00ms |  0.0% → 0.1% | 0ms → 1.0ms |     0 → 1 | `0x16306` | `./zstd` |

##### `0x5a3f2` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +282.28ms | 0.0% → 22.5% | 0ms → 282.3ms | 0 → 282 | `0x60980` | `./zstd` |
|    new | +246.25ms | 0.0% → 19.7% | 0ms → 246.2ms | 0 → 246 | `0x60c38` | `./zstd` |
|    new | +227.23ms | 0.0% → 18.1% | 0ms → 227.2ms | 0 → 227 | `0x609c8` | `./zstd` |
|    new | +185.19ms | 0.0% → 14.8% | 0ms → 185.2ms | 0 → 185 | `0x60c5c` | `./zstd` |
|    new |  +83.08ms |  0.0% → 6.6% |  0ms → 83.1ms |  0 → 83 | `0x609b8` | `./zstd` |

##### `0x17e36` (`./zstd`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +284.28ms | 0.0% → 99.6% | 0ms → 284.3ms | 0 → 284 | `0x1671e` | `./zstd` |
|    new |   +1.00ms |  0.0% → 0.4% |   0ms → 1.0ms |   0 → 1 | `0x168b6` | `./zstd` |

##### `0x62d32` (`./zstd`)

| Change |     Delta |             % |          Time | Samples | Callee    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +285.29ms | 0.0% → 100.0% | 0ms → 285.3ms | 0 → 285 | `0x17e36` | `./zstd` |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time |   Samples | Callee   | Location |
| ------: | ------: | ------------: | ----------: | --------: | -------- | -------- |
|     new | +1.601s | 0.0% → 100.0% | 0ms → 1.60s | 0 → 1,599 | `0x9f1e` | `./zstd` |
| removed | -1.385s | 100.0% → 0.0% | 1.39s → 0ms | 1,384 → 0 | `0x9cee` | `./zstd` |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| +15.5% | +215.22ms | 100.0% | 1.39s → 1.60s | 1,384 → 1,599 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x61b3e` (`./zstd`)

| Change |   Delta |            % |        Time | Samples | Callee    | Location |
| -----: | ------: | -----------: | ----------: | ------: | --------- | -------- |
|    new | +9.01ms | 0.0% → 52.9% | 0ms → 9.0ms |   0 → 9 | `0x5a3f2` | `./zstd` |
|    new | +1.00ms |  0.0% → 5.9% | 0ms → 1.0ms |   0 → 1 | `0x5a7c0` | `./zstd` |
|    new | +1.00ms |  0.0% → 5.9% | 0ms → 1.0ms |   0 → 1 | `0x58938` | `./zstd` |
|    new | +1.00ms |  0.0% → 5.9% | 0ms → 1.0ms |   0 → 1 | `0x59f6c` | `./zstd` |
|    new | +1.00ms |  0.0% → 5.9% | 0ms → 1.0ms |   0 → 1 | `0x5a7a8` | `./zstd` |

##### `0x9cee` (`./zstd`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.152s | 83.2% → 0.0% |   1.15s → 0ms | 1,151 → 0 | `0x61402` | `./zstd` |
| removed | -231.23ms | 16.7% → 0.0% | 231.2ms → 0ms |   231 → 0 | `0x616b6` | `./zstd` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |     1 → 0 | `0x6149e` | `./zstd` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |     1 → 0 | `0x6185e` | `./zstd` |

##### `0x1108e` (`./zstd`)

|  Change |    Delta |            % |         Time |   Samples | Callee    | Location |
| ------: | -------: | -----------: | -----------: | --------: | --------- | -------- |
| removed |  -1.043s | 76.1% → 0.0% |  1.04s → 0ms | 1,042 → 0 | `0x59272` | `./zstd` |
| removed | -54.05ms |  3.9% → 0.0% | 54.1ms → 0ms |    54 → 0 | `0x59640` | `./zstd` |
| removed | -36.04ms |  2.6% → 0.0% | 36.0ms → 0ms |    36 → 0 | `0x594d8` | `./zstd` |
| removed | -25.03ms |  1.8% → 0.0% | 25.0ms → 0ms |    25 → 0 | `0x596dc` | `./zstd` |
| removed | -23.02ms |  1.7% → 0.0% | 23.0ms → 0ms |    23 → 0 | `0x5960c` | `./zstd` |

##### `0x1601e` (`./zstd`)

|  Change |   Delta |             % |        Time |   Samples | Callee    | Location |
| ------: | ------: | ------------: | ----------: | --------: | --------- | -------- |
| removed | -1.370s | 100.0% → 0.0% | 1.37s → 0ms | 1,369 → 0 | `0x1108e` | `./zstd` |

##### `0x61402` (`./zstd`)

|  Change |   Delta |            % |        Time |   Samples | Callee    | Location |
| ------: | ------: | -----------: | ----------: | --------: | --------- | -------- |
| removed | -1.143s | 99.2% → 0.0% | 1.14s → 0ms | 1,142 → 0 | `0x1601e` | `./zstd` |
| removed | -7.01ms |  0.6% → 0.0% | 7.0ms → 0ms |     7 → 0 | `0x161a2` | `./zstd` |
| removed | -2.00ms |  0.2% → 0.0% | 2.0ms → 0ms |     2 → 0 | `0x1617e` | `./zstd` |

##### `0x59272` (`./zstd`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -234.23ms | 22.2% → 0.0% | 234.2ms → 0ms | 234 → 0 | `0x5f800` | `./zstd` |
| removed | -192.19ms | 18.2% → 0.0% | 192.2ms → 0ms | 192 → 0 | `0x5fab8` | `./zstd` |
| removed | -192.19ms | 18.2% → 0.0% | 192.2ms → 0ms | 192 → 0 | `0x5fadc` | `./zstd` |
| removed | -182.18ms | 17.3% → 0.0% | 182.2ms → 0ms | 182 → 0 | `0x5f848` | `./zstd` |
| removed |  -60.06ms |  5.7% → 0.0% |  60.1ms → 0ms |  60 → 0 | `0x5f838` | `./zstd` |

##### `0x17766` (`./zstd`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -227.23ms | 98.3% → 0.0% | 227.2ms → 0ms | 227 → 0 | `0x1601e` | `./zstd` |
| removed |   -2.00ms |  0.9% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x161a2` | `./zstd` |
| removed |   -2.00ms |  0.9% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x1617e` | `./zstd` |

##### `0x616b6` (`./zstd`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -231.23ms | 100.0% → 0.0% | 231.2ms → 0ms | 231 → 0 | `0x17766` | `./zstd` |

##### `0x609be` (`./zstd`)

|  Change |    Delta |            % |         Time | Samples | Callee    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -13.01ms | 81.3% → 0.0% | 13.0ms → 0ms |  13 → 0 | `0x59272` | `./zstd` |
| removed |  -1.00ms |  6.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x594d8` | `./zstd` |
| removed |  -1.00ms |  6.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x575ec` | `./zstd` |
| removed |  -1.00ms |  6.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x577d4` | `./zstd` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `0x9f1e` (`./zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

| Change |     Delta |            % |          Time | Samples | Call stack                                                                       |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------- |
|    new | +224.22ms | 0.0% → 14.0% | 0ms → 224.2ms | 0 → 224 | `0x60980` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new | +188.19ms | 0.0% → 11.7% | 0ms → 188.2ms | 0 → 188 | `0x60c38` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new | +182.18ms | 0.0% → 11.4% | 0ms → 182.2ms | 0 → 182 | `0x609c8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new | +148.15ms |  0.0% → 9.2% | 0ms → 148.1ms | 0 → 148 | `0x60c5c` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new |  +64.06ms |  0.0% → 4.0% |  0ms → 64.1ms |  0 → 64 | `0x609b8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new |  +57.06ms |  0.0% → 3.6% |  0ms → 57.1ms |  0 → 57 | `0x60c38` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|    new |  +55.06ms |  0.0% → 3.4% |  0ms → 55.1ms |  0 → 55 | `0x60980` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|    new |  +47.05ms |  0.0% → 2.9% |  0ms → 47.0ms |  0 → 47 | `0x60c90` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new |  +44.04ms |  0.0% → 2.7% |  0ms → 44.0ms |  0 → 44 | `0x609c8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|    new |  +37.04ms |  0.0% → 2.3% |  0ms → 37.0ms |  0 → 37 | `0x5a7c0` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|    new |  +35.04ms |  0.0% → 2.2% |  0ms → 35.0ms |  0 → 35 | `0x60c5c` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|    new |  +32.03ms |  0.0% → 2.0% |  0ms → 32.0ms |  0 → 32 | `0x5a85c` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|    new |  +26.03ms |  0.0% → 1.6% |  0ms → 26.0ms |  0 → 26 | `0x5a838` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|    new |  +24.02ms |  0.0% → 1.5% |  0ms → 24.0ms |  0 → 24 | `0x5a65c` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |  0 → 19 | `0x609b8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|    new |  +14.01ms |  0.0% → 0.9% |  0ms → 14.0ms |  0 → 14 | `0x60a08` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new |  +13.01ms |  0.0% → 0.8% |  0ms → 13.0ms |  0 → 13 | `0x60c60` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new |  +13.01ms |  0.0% → 0.8% |  0ms → 13.0ms |  0 → 13 | `0x609ec` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|    new |  +12.01ms |  0.0% → 0.7% |  0ms → 12.0ms |  0 → 12 | `0x5a78c` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|    new |  +11.01ms |  0.0% → 0.7% |  0ms → 11.0ms |  0 → 11 | `0x609a0` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `0x9cee` (`./zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

|  Change |     Delta |            % |          Time | Samples | Call stack                                                                       |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------- |
| removed | -193.19ms | 13.9% → 0.0% | 193.2ms → 0ms | 193 → 0 | `0x5f800` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed | -156.16ms | 11.3% → 0.0% | 156.2ms → 0ms | 156 → 0 | `0x5fadc` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed | -149.15ms | 10.8% → 0.0% | 149.1ms → 0ms | 149 → 0 | `0x5f848` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed | -149.15ms | 10.8% → 0.0% | 149.1ms → 0ms | 149 → 0 | `0x5fab8` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed |  -50.05ms |  3.6% → 0.0% |  50.1ms → 0ms |  50 → 0 | `0x59640` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
| removed |  -46.05ms |  3.3% → 0.0% |  46.0ms → 0ms |  46 → 0 | `0x5f838` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed |  -41.04ms |  3.0% → 0.0% |  41.0ms → 0ms |  41 → 0 | `0x5fab8` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
| removed |  -38.04ms |  2.7% → 0.0% |  38.0ms → 0ms |  38 → 0 | `0x5f800` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
| removed |  -36.04ms |  2.6% → 0.0% |  36.0ms → 0ms |  36 → 0 | `0x5fadc` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
| removed |  -33.03ms |  2.4% → 0.0% |  33.0ms → 0ms |  33 → 0 | `0x5f848` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
| removed |  -31.03ms |  2.2% → 0.0% |  31.0ms → 0ms |  31 → 0 | `0x594d8` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
| removed |  -27.03ms |  1.9% → 0.0% |  27.0ms → 0ms |  27 → 0 | `0x5fb10` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed |  -22.02ms |  1.6% → 0.0% |  22.0ms → 0ms |  22 → 0 | `0x596dc` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
| removed |  -20.02ms |  1.4% → 0.0% |  20.0ms → 0ms |  20 → 0 | `0x5960c` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
| removed |  -17.02ms |  1.2% → 0.0% |  17.0ms → 0ms |  17 → 0 | `0x596b8` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
| removed |  -16.02ms |  1.2% → 0.0% |  16.0ms → 0ms |  16 → 0 | `0x5f888` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed |  -14.01ms |  1.0% → 0.0% |  14.0ms → 0ms |  14 → 0 | `0x5f838` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
| removed |  -11.01ms |  0.8% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x59628` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
| removed |  -10.01ms |  0.7% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x5f83c` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| removed |  -10.01ms |  0.7% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x5f86c` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |

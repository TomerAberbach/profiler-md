# CPU profile

Took 1.60s over 1,601 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.4% | 1.59s |   1,591 |
| Kernel   |  0.4% | 7.0ms |       7 |
| Native   |  0.2% | 3.0ms |       3 |

Paths starting with `./` or `../` are relative to `/src/zstd/programs/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.60s (99.9%) 0x9f1e at ./zstd
    ├── 1.31s (81.9%) 0x62a5e
    │   ├── 1.30s (81.3%) 0x1671e
    │   │   └── 1.30s (81.3%) 0x1162e
    │   │       ├── 1s (62.5%) 0x5a3f2
    │   │       │   ├── 224.2ms (14.0%, self 17.6% globally) 0x60980
    │   │       │   ├── 188.2ms (11.7%, self 15.4% globally) 0x60c38
    │   │       │   ├── 182.2ms (11.4%, self 14.2% globally) 0x609c8
    │   │       │   ├── 148.1ms (9.2%, self 11.6% globally) 0x60c5c
    │   │       │   ├── 64.1ms (4.0%, self 5.2% globally) 0x609b8
    │   │       │   ├── 47.0ms (2.9%) 0x60c90
    │   │       │   ├── 14.0ms (0.9%) 0x60a08
    │   │       │   ├── 13.0ms (0.8%) 0x60c60
    │   │       │   ├── 13.0ms (0.8%) 0x609ec
    │   │       │   ├── 11.0ms (0.7%) 0x609a0
    │   │       │   ├── 10.0ms (0.6%) 0x60978
    │   │       │   ├── 9.0ms (0.6%) 0x60c44
    │   │       │   ├── 8.0ms (0.5%) 0x608a4
    │   │       │   ├── 7.0ms (0.4%) 0x60960
    │   │       │   ├── 5.0ms (0.3%) 0x60c88
    │   │       │   └── 57.1ms (3.6%) 30 more callees, led by (0.4%) 0x609d4
    │   │       ├── 37.0ms (2.3%) 0x5a7c0
    │   │       ├── 32.0ms (2.0%) 0x5a85c
    │   │       ├── 26.0ms (1.6%) 0x5a838
    │   │       ├── 24.0ms (1.5%) 0x5a65c
    │   │       ├── 12.0ms (0.7%) 0x5a78c
    │   │       ├── 10.0ms (0.6%) 0x5a834
    │   │       ├── 10.0ms (0.6%) 0x5a6d8
    │   │       ├── 9.0ms (0.6%) 0x5a7a8
    │   │       ├── 9.0ms (0.6%) 0x5a7ec
    │   │       ├── 8.0ms (0.5%) 0x5a6dc
    │   │       ├── 7.0ms (0.4%) 0x5a354
    │   │       └── 117.1ms (7.3%) 58 more callees, led by (1.1%) 0x61b3e
    │   └── 5.0ms (0.3%) 0x168b6
    └── … 284.3ms (17.7%) 0x1162e at ./zstd
        ├── 242.2ms (15.1%) 0x5a3f2
        │   ├── 57.1ms (3.6%) 0x60c38
        │   ├── 55.1ms (3.4%) 0x60980
        │   └── 130.1ms (8.1%) 21 more callees, led by (2.7%) 0x609c8
        └── 42.0ms (2.6%) 27 more callees, led by (0.2%) 0x5a7c0
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 17.6% | 282.3ms |     282 | `0x60980` | `./zstd` |
| 15.4% | 247.2ms |     247 | `0x60c38` | `./zstd` |
| 14.2% | 227.2ms |     227 | `0x609c8` | `./zstd` |
| 11.6% | 186.2ms |     186 | `0x60c5c` | `./zstd` |
|  5.2% |  83.1ms |      83 | `0x609b8` | `./zstd` |
|  3.3% |  53.1ms |      53 | `0x60c90` | `./zstd` |
|  2.6% |  42.0ms |      42 | `0x5a7c0` | `./zstd` |
|  2.2% |  35.0ms |      35 | `0x5a85c` | `./zstd` |
|  1.7% |  28.0ms |      28 | `0x5a838` | `./zstd` |
|  1.6% |  26.0ms |      26 | `0x5a65c` | `./zstd` |
|  1.1% |  17.0ms |      17 | `0x5a78c` | `./zstd` |
|  1.0% |  16.0ms |      16 | `0x60c60` | `./zstd` |
|  1.0% |  16.0ms |      16 | `0x60a08` | `./zstd` |
|  0.9% |  14.0ms |      14 | `0x609ec` | `./zstd` |
|  0.8% |  13.0ms |      13 | `0x609a0` | `./zstd` |
|  0.7% |  12.0ms |      12 | `0x5a834` | `./zstd` |
|  0.7% |  12.0ms |      12 | `0x60978` | `./zstd` |
|  0.7% |  11.0ms |      11 | `0x5a7a8` | `./zstd` |
|  0.7% |  11.0ms |      11 | `0x5a6d8` | `./zstd` |
|  0.7% |  11.0ms |      11 | `0x5a7ec` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60980` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 282.3ms |     282 | `0x5a3f2` | `./zstd` |

##### `0x60c38` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.6% | 246.2ms |     246 | `0x5a3f2` | `./zstd` |
|  0.4% |   1.0ms |       1 | `0x59de6` | `./zstd` |

##### `0x609c8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 227.2ms |     227 | `0x5a3f2` | `./zstd` |

##### `0x60c5c` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 185.2ms |     185 | `0x5a3f2` | `./zstd` |
|  0.5% |   1.0ms |       1 | `0x59de6` | `./zstd` |

##### `0x609b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 83.1ms |      83 | `0x5a3f2` | `./zstd` |

##### `0x60c90` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 53.1ms |      53 | `0x5a3f2` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.6% | 41.0ms |      41 | `0x1162e` | `./zstd` |
|  2.4% |  1.0ms |       1 | `0x61b3e` | `./zstd` |

##### `0x5a85c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 35.0ms |      35 | `0x1162e` | `./zstd` |

##### `0x5a838` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 28.0ms |      28 | `0x1162e` | `./zstd` |

##### `0x5a65c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 26.0ms |      26 | `0x1162e` | `./zstd` |

##### `0x5a78c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 94.1% | 16.0ms |      16 | `0x1162e` | `./zstd` |
|  5.9% |  1.0ms |       1 | `0x61b3e` | `./zstd` |

##### `0x60c60` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x5a3f2` | `./zstd` |

##### `0x60a08` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x5a3f2` | `./zstd` |

##### `0x609ec` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x5a3f2` | `./zstd` |

##### `0x609a0` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x5a3f2` | `./zstd` |

##### `0x5a834` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x1162e` | `./zstd` |

##### `0x60978` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x5a3f2` | `./zstd` |

##### `0x5a7a8` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 90.9% | 10.0ms |      10 | `0x1162e` | `./zstd` |
|  9.1% |  1.0ms |       1 | `0x61b3e` | `./zstd` |

##### `0x5a6d8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x1162e` | `./zstd` |

##### `0x5a7ec` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x1162e` | `./zstd` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.9% |   1.60s |   1,599 | `0x9f1e`  | `./zstd`                               |
| 99.9% |   1.60s |   1,599 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.9% |   1.60s |   1,599 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.0% |   1.58s |   1,585 | `0x1162e` | `./zstd`                               |
| 99.0% |   1.58s |   1,585 | `0x1671e` | `./zstd`                               |
| 81.9% |   1.31s |   1,311 | `0x62a5e` | `./zstd`                               |
| 78.1% |   1.25s |   1,251 | `0x5a3f2` | `./zstd`                               |
| 17.8% | 285.3ms |     285 | `0x17e36` | `./zstd`                               |
| 17.8% | 285.3ms |     285 | `0x62d32` | `./zstd`                               |
| 17.6% | 282.3ms |     282 | `0x60980` | `./zstd`                               |
| 15.4% | 247.2ms |     247 | `0x60c38` | `./zstd`                               |
| 14.2% | 227.2ms |     227 | `0x609c8` | `./zstd`                               |
| 11.6% | 186.2ms |     186 | `0x60c5c` | `./zstd`                               |
|  5.2% |  83.1ms |      83 | `0x609b8` | `./zstd`                               |
|  3.3% |  53.1ms |      53 | `0x60c90` | `./zstd`                               |
|  2.6% |  42.0ms |      42 | `0x5a7c0` | `./zstd`                               |
|  2.2% |  35.0ms |      35 | `0x5a85c` | `./zstd`                               |
|  1.7% |  28.0ms |      28 | `0x5a838` | `./zstd`                               |
|  1.6% |  26.0ms |      26 | `0x5a65c` | `./zstd`                               |
|  1.1% |  17.0ms |      17 | `0x61b3e` | `./zstd`                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.9% |   1.60s |   1,599 | `0x9f1e`  | `./zstd` |
| 99.0% |   1.58s |   1,585 | `0x1162e` | `./zstd` |
| 99.0% |   1.58s |   1,585 | `0x1671e` | `./zstd` |
| 81.9% |   1.31s |   1,311 | `0x62a5e` | `./zstd` |
| 78.1% |   1.25s |   1,251 | `0x5a3f2` | `./zstd` |
| 17.8% | 285.3ms |     285 | `0x17e36` | `./zstd` |
| 17.8% | 285.3ms |     285 | `0x62d32` | `./zstd` |
| 17.6% | 282.3ms |     282 | `0x60980` | `./zstd` |
| 15.4% | 247.2ms |     247 | `0x60c38` | `./zstd` |
| 14.2% | 227.2ms |     227 | `0x609c8` | `./zstd` |
| 11.6% | 186.2ms |     186 | `0x60c5c` | `./zstd` |
|  5.2% |  83.1ms |      83 | `0x609b8` | `./zstd` |
|  3.3% |  53.1ms |      53 | `0x60c90` | `./zstd` |
|  2.6% |  42.0ms |      42 | `0x5a7c0` | `./zstd` |
|  2.2% |  35.0ms |      35 | `0x5a85c` | `./zstd` |
|  1.7% |  28.0ms |      28 | `0x5a838` | `./zstd` |
|  1.6% |  26.0ms |      26 | `0x5a65c` | `./zstd` |
|  1.1% |  17.0ms |      17 | `0x61b3e` | `./zstd` |
|  1.1% |  17.0ms |      17 | `0x5a78c` | `./zstd` |
|  1.0% |  16.0ms |      16 | `0x60c60` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f1e` (`./zstd`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.60s |   1,599 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.60s |   1,599 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1162e` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.58s |   1,585 | `0x1671e` | `./zstd` |

##### `0x1671e` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.1% |   1.30s |   1,301 | `0x62a5e` | `./zstd` |
| 17.9% | 284.3ms |     284 | `0x17e36` | `./zstd` |

##### `0x62a5e` (`./zstd`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.31s |   1,311 | `0x9f1e` | `./zstd` |

##### `0x5a3f2` (`./zstd`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.3% | 1.24s |   1,242 | `0x1162e` | `./zstd` |
|  0.7% | 9.0ms |       9 | `0x61b3e` | `./zstd` |

##### `0x17e36` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 285.3ms |     285 | `0x62d32` | `./zstd` |

##### `0x62d32` (`./zstd`)

|      % |    Time | Samples | Caller   | Location |
| -----: | ------: | ------: | -------- | -------- |
| 100.0% | 285.3ms |     285 | `0x9f1e` | `./zstd` |

##### `0x60980` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 282.3ms |     282 | `0x5a3f2` | `./zstd` |

##### `0x60c38` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.6% | 246.2ms |     246 | `0x5a3f2` | `./zstd` |
|  0.4% |   1.0ms |       1 | `0x59de6` | `./zstd` |

##### `0x609c8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 227.2ms |     227 | `0x5a3f2` | `./zstd` |

##### `0x60c5c` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 185.2ms |     185 | `0x5a3f2` | `./zstd` |
|  0.5% |   1.0ms |       1 | `0x59de6` | `./zstd` |

##### `0x609b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 83.1ms |      83 | `0x5a3f2` | `./zstd` |

##### `0x60c90` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 53.1ms |      53 | `0x5a3f2` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.6% | 41.0ms |      41 | `0x1162e` | `./zstd` |
|  2.4% |  1.0ms |       1 | `0x61b3e` | `./zstd` |

##### `0x5a85c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 35.0ms |      35 | `0x1162e` | `./zstd` |

##### `0x5a838` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 28.0ms |      28 | `0x1162e` | `./zstd` |

##### `0x5a65c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 26.0ms |      26 | `0x1162e` | `./zstd` |

##### `0x61b3e` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 17.0ms |      17 | `0x1162e` | `./zstd` |

##### `0x5a78c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 94.1% | 16.0ms |      16 | `0x1162e` | `./zstd` |
|  5.9% |  1.0ms |       1 | `0x61b3e` | `./zstd` |

##### `0x60c60` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x5a3f2` | `./zstd` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f1e` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.0% |   1.31s |   1,311 | `0x62a5e` | `./zstd` |
| 17.8% | 285.3ms |     285 | `0x62d32` | `./zstd` |
|  0.1% |   2.0ms |       2 | `0x62afa` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0xa2e5e` | `./zstd` |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.60s |   1,599 | `0x9f1e` | `./zstd` |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.60s |   1,599 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1162e` (`./zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 78.4% |  1.24s |   1,242 | `0x5a3f2` | `./zstd` |
|  2.6% | 41.0ms |      41 | `0x5a7c0` | `./zstd` |
|  2.2% | 35.0ms |      35 | `0x5a85c` | `./zstd` |
|  1.8% | 28.0ms |      28 | `0x5a838` | `./zstd` |
|  1.6% | 26.0ms |      26 | `0x5a65c` | `./zstd` |

##### `0x1671e` (`./zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.58s |   1,585 | `0x1162e` | `./zstd` |

##### `0x62a5e` (`./zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.2% | 1.30s |   1,301 | `0x1671e` | `./zstd` |
|  0.4% | 5.0ms |       5 | `0x168b6` | `./zstd` |
|  0.2% | 3.0ms |       3 | `0x16896` | `./zstd` |
|  0.1% | 1.0ms |       1 | `0x163ae` | `./zstd` |
|  0.1% | 1.0ms |       1 | `0x16306` | `./zstd` |

##### `0x5a3f2` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 22.5% | 282.3ms |     282 | `0x60980` | `./zstd` |
| 19.7% | 246.2ms |     246 | `0x60c38` | `./zstd` |
| 18.1% | 227.2ms |     227 | `0x609c8` | `./zstd` |
| 14.8% | 185.2ms |     185 | `0x60c5c` | `./zstd` |
|  6.6% |  83.1ms |      83 | `0x609b8` | `./zstd` |

##### `0x17e36` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.6% | 284.3ms |     284 | `0x1671e` | `./zstd` |
|  0.4% |   1.0ms |       1 | `0x168b6` | `./zstd` |

##### `0x62d32` (`./zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 285.3ms |     285 | `0x17e36` | `./zstd` |

##### `0x61b3e` (`./zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 52.9% | 9.0ms |       9 | `0x5a3f2` | `./zstd` |
|  5.9% | 1.0ms |       1 | `0x5a7c0` | `./zstd` |
|  5.9% | 1.0ms |       1 | `0x58938` | `./zstd` |
|  5.9% | 1.0ms |       1 | `0x59f6c` | `./zstd` |
|  5.9% | 1.0ms |       1 | `0x5a7a8` | `./zstd` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `0x9f1e` (`./zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

|     % |    Time | Samples | Call stack                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------- |
| 14.0% | 224.2ms |     224 | `0x60980` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
| 11.7% | 188.2ms |     188 | `0x60c38` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
| 11.4% | 182.2ms |     182 | `0x609c8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  9.2% | 148.1ms |     148 | `0x60c5c` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  4.0% |  64.1ms |      64 | `0x609b8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  3.6% |  57.1ms |      57 | `0x60c38` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  3.4% |  55.1ms |      55 | `0x60980` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  2.9% |  47.0ms |      47 | `0x60c90` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  2.7% |  44.0ms |      44 | `0x609c8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  2.3% |  37.0ms |      37 | `0x5a7c0` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  2.2% |  35.0ms |      35 | `0x60c5c` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  2.0% |  32.0ms |      32 | `0x5a85c` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  1.6% |  26.0ms |      26 | `0x5a838` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  1.5% |  24.0ms |      24 | `0x5a65c` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  1.2% |  19.0ms |      19 | `0x609b8` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x17e36` ← `0x62d32` |
|  0.9% |  14.0ms |      14 | `0x60a08` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  0.8% |  13.0ms |      13 | `0x60c60` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  0.8% |  13.0ms |      13 | `0x609ec` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |
|  0.7% |  12.0ms |      12 | `0x5a78c` (`./zstd`) ← `0x1162e` ← `0x1671e` ← `0x62a5e`                         |
|  0.7% |  11.0ms |      11 | `0x609a0` (`./zstd`) ← `0x5a3f2` ← `0x1162e` ← `0x1671e` ← `0x62a5e`             |

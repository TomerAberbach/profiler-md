# CPU profile

Took 1.80s over 1,807 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.5% | 1.79s |   1,798 |
| Kernel   |  0.3% | 6.0ms |       6 |
| Native   |  0.2% | 3.0ms |       3 |

Paths starting with `./` or `../` are relative to `/src/zstd/programs/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.80s (99.8%) 0x9f20 at ./zstd
    ├── 1.47s (81.7%) 0x62a60
    │   ├── 1.46s (81.0%) 0x16720
    │   │   └── 1.46s (81.0%) 0x11630
    │   │       ├── 1.13s (62.9%) 0x5a3f4
    │   │       │   ├── 230.2ms (12.7%, self 16.8% globally) 0x60c38
    │   │       │   ├── 229.2ms (12.7%, self 16.2% globally) 0x60980
    │   │       │   ├── 219.2ms (12.1%, self 14.9% globally) 0x609c8
    │   │       │   ├── 189.2ms (10.5%, self 12.8% globally) 0x60c5c
    │   │       │   ├── 65.1ms (3.6%, self 4.4% globally) 0x609b8
    │   │       │   ├── 42.0ms (2.3%, self 2.9% globally) 0x60c90
    │   │       │   ├── 24.0ms (1.3%) 0x609d4
    │   │       │   ├── 19.0ms (1.1%) 0x60a08
    │   │       │   ├── 14.0ms (0.8%) 0x609ec
    │   │       │   ├── 9.0ms (0.5%) 0x60960
    │   │       │   ├── 8.0ms (0.4%) 0x60978
    │   │       │   ├── 7.0ms (0.4%) 0x609bc
    │   │       │   ├── 6.0ms (0.3%) 0x60954
    │   │       │   └── 76.1ms (4.2%) 35 more callees, led by (0.3%) 0x60c60
    │   │       ├── 36.0ms (2.0%, self 2.5% globally) 0x5a7c0
    │   │       ├── 33.0ms (1.8%) 0x5a85c
    │   │       ├── 27.0ms (1.5%) 0x5a65c
    │   │       ├── 20.0ms (1.1%) 0x5a838
    │   │       ├── 17.0ms (0.9%) 0x5a78c
    │   │       ├── 14.0ms (0.8%) 0x5a7a8
    │   │       ├── 9.0ms (0.5%) 0x5a874
    │   │       ├── 9.0ms (0.5%) 0x5a7ec
    │   │       ├── 8.0ms (0.4%) 0x5a834
    │   │       ├── 8.0ms (0.4%) 0x5a2f8
    │   │       ├── 8.0ms (0.4%) 0x5a6d8
    │   │       ├── 6.0ms (0.3%) 0x5a860
    │   │       └── 132.1ms (7.3%) 59 more callees, led by (1.0%) 0x61b40
    │   └── 8.0ms (0.4%) 0x168b8
    └── … 319.3ms (17.7%) 0x11630 at ./zstd
        ├── 275.3ms (15.2%) 0x5a3f4
        │   ├── 73.1ms (4.0%) 0x60c38
        │   ├── 58.1ms (3.2%) 0x60980
        │   ├── 48.0ms (2.7%) 0x609c8
        │   └── 96.1ms (5.3%) 14 more callees, led by (2.2%) 0x60c5c
        └── 44.0ms (2.4%) 18 more callees, led by (0.6%) 0x5a7c0
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 16.8% | 303.3ms |     303 | `0x60c38` | `./zstd` |
| 16.2% | 292.3ms |     292 | `0x60980` | `./zstd` |
| 14.9% | 269.3ms |     269 | `0x609c8` | `./zstd` |
| 12.8% | 232.2ms |     232 | `0x60c5c` | `./zstd` |
|  4.4% |  79.1ms |      79 | `0x609b8` | `./zstd` |
|  2.9% |  53.1ms |      53 | `0x60c90` | `./zstd` |
|  2.5% |  46.0ms |      46 | `0x5a7c0` | `./zstd` |
|  2.0% |  36.0ms |      36 | `0x5a65c` | `./zstd` |
|  2.0% |  36.0ms |      36 | `0x5a85c` | `./zstd` |
|  1.4% |  26.0ms |      26 | `0x60a08` | `./zstd` |
|  1.4% |  25.0ms |      25 | `0x609d4` | `./zstd` |
|  1.2% |  22.0ms |      22 | `0x609ec` | `./zstd` |
|  1.2% |  21.0ms |      21 | `0x5a78c` | `./zstd` |
|  1.2% |  21.0ms |      21 | `0x5a838` | `./zstd` |
|  0.9% |  17.0ms |      17 | `0x5a7a8` | `./zstd` |
|  0.8% |  14.0ms |      14 | `0x60960` | `./zstd` |
|  0.6% |  11.0ms |      11 | `0x5a874` | `./zstd` |
|  0.6% |  10.0ms |      10 | `0x5a7ec` | `./zstd` |
|  0.5% |   9.0ms |       9 | `0x5a860` | `./zstd` |
|  0.5% |   9.0ms |       9 | `0x609bc` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60c38` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 303.3ms |     303 | `0x5a3f4` | `./zstd` |

##### `0x60980` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.7% | 291.3ms |     291 | `0x5a3f4` | `./zstd` |
|  0.3% |   1.0ms |       1 | `0x59de8` | `./zstd` |

##### `0x609c8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 269.3ms |     269 | `0x5a3f4` | `./zstd` |

##### `0x60c5c` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 232.2ms |     232 | `0x5a3f4` | `./zstd` |

##### `0x609b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 79.1ms |      79 | `0x5a3f4` | `./zstd` |

##### `0x60c90` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 53.1ms |      53 | `0x5a3f4` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 46.0ms |      46 | `0x11630` | `./zstd` |

##### `0x5a65c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.2% | 35.0ms |      35 | `0x11630` | `./zstd` |
|  2.8% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x5a85c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 36.0ms |      36 | `0x11630` | `./zstd` |

##### `0x60a08` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 26.0ms |      26 | `0x5a3f4` | `./zstd` |

##### `0x609d4` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 25.0ms |      25 | `0x5a3f4` | `./zstd` |

##### `0x609ec` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 22.0ms |      22 | `0x5a3f4` | `./zstd` |

##### `0x5a78c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.2% | 20.0ms |      20 | `0x11630` | `./zstd` |
|  4.8% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x5a838` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 21.0ms |      21 | `0x11630` | `./zstd` |

##### `0x5a7a8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 17.0ms |      17 | `0x11630` | `./zstd` |

##### `0x60960` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x5a3f4` | `./zstd` |

##### `0x5a874` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x11630` | `./zstd` |

##### `0x5a7ec` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x11630` | `./zstd` |

##### `0x5a860` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x11630` | `./zstd` |

##### `0x609bc` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x5a3f4` | `./zstd` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.80s |   1,804 | `0x9f20`  | `./zstd`                               |
| 99.8% |   1.80s |   1,804 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.80s |   1,804 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 98.7% |   1.78s |   1,783 | `0x11630` | `./zstd`                               |
| 98.7% |   1.78s |   1,783 | `0x16720` | `./zstd`                               |
| 81.7% |   1.47s |   1,477 | `0x62a60` | `./zstd`                               |
| 78.9% |   1.42s |   1,426 | `0x5a3f4` | `./zstd`                               |
| 17.8% | 321.3ms |     321 | `0x17e38` | `./zstd`                               |
| 17.8% | 321.3ms |     321 | `0x62d34` | `./zstd`                               |
| 16.8% | 303.3ms |     303 | `0x60c38` | `./zstd`                               |
| 16.2% | 292.3ms |     292 | `0x60980` | `./zstd`                               |
| 14.9% | 269.3ms |     269 | `0x609c8` | `./zstd`                               |
| 12.8% | 232.2ms |     232 | `0x60c5c` | `./zstd`                               |
|  4.4% |  79.1ms |      79 | `0x609b8` | `./zstd`                               |
|  2.9% |  53.1ms |      53 | `0x60c90` | `./zstd`                               |
|  2.5% |  46.0ms |      46 | `0x5a7c0` | `./zstd`                               |
|  2.0% |  36.0ms |      36 | `0x5a65c` | `./zstd`                               |
|  2.0% |  36.0ms |      36 | `0x5a85c` | `./zstd`                               |
|  1.4% |  26.0ms |      26 | `0x60a08` | `./zstd`                               |
|  1.4% |  25.0ms |      25 | `0x609d4` | `./zstd`                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.80s |   1,804 | `0x9f20`  | `./zstd` |
| 98.7% |   1.78s |   1,783 | `0x11630` | `./zstd` |
| 98.7% |   1.78s |   1,783 | `0x16720` | `./zstd` |
| 81.7% |   1.47s |   1,477 | `0x62a60` | `./zstd` |
| 78.9% |   1.42s |   1,426 | `0x5a3f4` | `./zstd` |
| 17.8% | 321.3ms |     321 | `0x17e38` | `./zstd` |
| 17.8% | 321.3ms |     321 | `0x62d34` | `./zstd` |
| 16.8% | 303.3ms |     303 | `0x60c38` | `./zstd` |
| 16.2% | 292.3ms |     292 | `0x60980` | `./zstd` |
| 14.9% | 269.3ms |     269 | `0x609c8` | `./zstd` |
| 12.8% | 232.2ms |     232 | `0x60c5c` | `./zstd` |
|  4.4% |  79.1ms |      79 | `0x609b8` | `./zstd` |
|  2.9% |  53.1ms |      53 | `0x60c90` | `./zstd` |
|  2.5% |  46.0ms |      46 | `0x5a7c0` | `./zstd` |
|  2.0% |  36.0ms |      36 | `0x5a65c` | `./zstd` |
|  2.0% |  36.0ms |      36 | `0x5a85c` | `./zstd` |
|  1.4% |  26.0ms |      26 | `0x60a08` | `./zstd` |
|  1.4% |  25.0ms |      25 | `0x609d4` | `./zstd` |
|  1.2% |  22.0ms |      22 | `0x609ec` | `./zstd` |
|  1.2% |  21.0ms |      21 | `0x5a78c` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f20` (`./zstd`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.80s |   1,804 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.80s |   1,804 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11630` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.78s |   1,783 | `0x16720` | `./zstd` |

##### `0x16720` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 82.1% |   1.46s |   1,464 | `0x62a60` | `./zstd` |
| 17.9% | 319.3ms |     319 | `0x17e38` | `./zstd` |

##### `0x62a60` (`./zstd`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.47s |   1,477 | `0x9f20` | `./zstd` |

##### `0x5a3f4` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 99.0% |  1.41s |   1,412 | `0x11630` | `./zstd` |
|  1.0% | 14.0ms |      14 | `0x61b40` | `./zstd` |

##### `0x17e38` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 321.3ms |     321 | `0x62d34` | `./zstd` |

##### `0x62d34` (`./zstd`)

|      % |    Time | Samples | Caller   | Location |
| -----: | ------: | ------: | -------- | -------- |
| 100.0% | 321.3ms |     321 | `0x9f20` | `./zstd` |

##### `0x60c38` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 303.3ms |     303 | `0x5a3f4` | `./zstd` |

##### `0x60980` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.7% | 291.3ms |     291 | `0x5a3f4` | `./zstd` |
|  0.3% |   1.0ms |       1 | `0x59de8` | `./zstd` |

##### `0x609c8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 269.3ms |     269 | `0x5a3f4` | `./zstd` |

##### `0x60c5c` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 232.2ms |     232 | `0x5a3f4` | `./zstd` |

##### `0x609b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 79.1ms |      79 | `0x5a3f4` | `./zstd` |

##### `0x60c90` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 53.1ms |      53 | `0x5a3f4` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 46.0ms |      46 | `0x11630` | `./zstd` |

##### `0x5a65c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.2% | 35.0ms |      35 | `0x11630` | `./zstd` |
|  2.8% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x5a85c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 36.0ms |      36 | `0x11630` | `./zstd` |

##### `0x60a08` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 26.0ms |      26 | `0x5a3f4` | `./zstd` |

##### `0x609d4` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 25.0ms |      25 | `0x5a3f4` | `./zstd` |

##### `0x609ec` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 22.0ms |      22 | `0x5a3f4` | `./zstd` |

##### `0x5a78c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.2% | 20.0ms |      20 | `0x11630` | `./zstd` |
|  4.8% |  1.0ms |       1 | `0x61b40` | `./zstd` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f20` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 81.9% |   1.47s |   1,477 | `0x62a60` | `./zstd` |
| 17.8% | 321.3ms |     321 | `0x62d34` | `./zstd` |
|  0.3% |   5.0ms |       5 | `0x62afc` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0xa2e60` | `./zstd` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.80s |   1,804 | `0x9f20` | `./zstd` |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.80s |   1,804 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11630` (`./zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 79.2% |  1.41s |   1,412 | `0x5a3f4` | `./zstd` |
|  2.6% | 46.0ms |      46 | `0x5a7c0` | `./zstd` |
|  2.0% | 36.0ms |      36 | `0x5a85c` | `./zstd` |
|  2.0% | 35.0ms |      35 | `0x5a65c` | `./zstd` |
|  1.2% | 21.0ms |      21 | `0x5a838` | `./zstd` |

##### `0x16720` (`./zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.78s |   1,783 | `0x11630` | `./zstd` |

##### `0x62a60` (`./zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.1% | 1.46s |   1,464 | `0x16720` | `./zstd` |
|  0.5% | 8.0ms |       8 | `0x168b8` | `./zstd` |
|  0.1% | 2.0ms |       2 | `0x163b0` | `./zstd` |
|  0.1% | 2.0ms |       2 | `0x16898` | `./zstd` |
|  0.1% | 1.0ms |       1 | `0x16308` | `./zstd` |

##### `0x5a3f4` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 21.2% | 303.3ms |     303 | `0x60c38` | `./zstd` |
| 20.4% | 291.3ms |     291 | `0x60980` | `./zstd` |
| 18.9% | 269.3ms |     269 | `0x609c8` | `./zstd` |
| 16.3% | 232.2ms |     232 | `0x60c5c` | `./zstd` |
|  5.5% |  79.1ms |      79 | `0x609b8` | `./zstd` |

##### `0x17e38` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.4% | 319.3ms |     319 | `0x16720` | `./zstd` |
|  0.3% |   1.0ms |       1 | `0x16898` | `./zstd` |
|  0.3% |   1.0ms |       1 | `0x163b0` | `./zstd` |

##### `0x62d34` (`./zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 321.3ms |     321 | `0x17e38` | `./zstd` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `0x9f20` (`./zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|     % |    Time | Samples | Call stack                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------- |
| 12.7% | 230.2ms |     230 | `0x60c38` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
| 12.7% | 229.2ms |     229 | `0x60980` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
| 12.1% | 219.2ms |     219 | `0x609c8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
| 10.5% | 189.2ms |     189 | `0x60c5c` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  4.0% |  73.1ms |      73 | `0x60c38` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  3.6% |  65.1ms |      65 | `0x609b8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  3.2% |  58.1ms |      58 | `0x60980` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.7% |  48.0ms |      48 | `0x609c8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.3% |  42.0ms |      42 | `0x60c90` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  2.2% |  40.0ms |      40 | `0x60c5c` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.0% |  36.0ms |      36 | `0x5a7c0` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.8% |  33.0ms |      33 | `0x5a85c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.5% |  27.0ms |      27 | `0x5a65c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.3% |  24.0ms |      24 | `0x609d4` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  1.1% |  20.0ms |      20 | `0x5a838` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.1% |  19.0ms |      19 | `0x60a08` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  0.9% |  17.0ms |      17 | `0x5a78c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  0.8% |  14.0ms |      14 | `0x5a7a8` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  0.8% |  14.0ms |      14 | `0x609ec` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  0.8% |  14.0ms |      14 | `0x609b8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |

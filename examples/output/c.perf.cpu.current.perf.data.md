# CPU profile

Took 1.22s over 1,219 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.5% | 1.21s |   1,213 |
| Native   |  0.2% | 3.0ms |       3 |
| Kernel   |  0.2% | 3.0ms |       3 |

Paths starting with `./` or `../` are relative to `/src/zstd/programs/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.21s (99.8%) 0x9f20 at ./zstd
    ├── 974.0ms (79.8%) 0x62a60
    │   ├── 963.0ms (78.9%) 0x16720
    │   │   └── 963.0ms (78.9%) 0x11630
    │   │       ├── 666.7ms (54.6%) 0x5a3f4
    │   │       │   ├── 143.1ms (11.7%, self 15.0% globally) 0x60980
    │   │       │   ├── 129.1ms (10.6%, self 13.9% globally) 0x609c8
    │   │       │   ├── 115.1ms (9.4%, self 11.9% globally) 0x60c38
    │   │       │   ├── 108.1ms (8.9%, self 11.7% globally) 0x60c5c
    │   │       │   ├── 29.0ms (2.4%, self 3.6% globally) 0x609b8
    │   │       │   ├── 14.0ms (1.1%, self 1.7% globally) 0x60c90
    │   │       │   ├── 12.0ms (1.0%) 0x60978
    │   │       │   ├── 10.0ms (0.8%) 0x60c60
    │   │       │   ├── 9.0ms (0.7%) 0x60a08
    │   │       │   ├── 8.0ms (0.7%) 0x609a0
    │   │       │   ├── 8.0ms (0.7%) 0x609bc
    │   │       │   ├── 7.0ms (0.6%, self 1.1% globally) 0x609ec
    │   │       │   ├── 7.0ms (0.6%) 0x609d4
    │   │       │   ├── 5.0ms (0.4%) 0x60aac
    │   │       │   └── 62.1ms (5.1%) 31 more callees, led by (0.5%) 0x60954
    │   │       ├── 41.0ms (3.4%) 0x5a65c
    │   │       ├── 33.0ms (2.7%, self 3.3% globally) 0x5a7c0
    │   │       ├── 25.0ms (2.1%) 0x5a85c
    │   │       ├── 21.0ms (1.7%) 0x5a78c
    │   │       ├── 15.0ms (1.2%) 0x5a838
    │   │       ├── 14.0ms (1.1%) 0x5a7a8
    │   │       ├── 9.0ms (0.7%) 0x58908
    │   │       ├── 7.0ms (0.6%) 0x5a860
    │   │       ├── 6.0ms (0.5%) 0x5a848
    │   │       ├── 5.0ms (0.4%) 0x5a7fc
    │   │       ├── 5.0ms (0.4%) 0x5a834
    │   │       └── 115.1ms (9.4%) 50 more callees, led by (1.3%) 0x61b40
    │   └── 6.0ms (0.5%) 0x168b8
    └── … 241.2ms (19.8%) 0x11630 at ./zstd
        ├── 205.2ms (16.8%) 0x5a3f4
        │   ├── 41.0ms (3.4%) 0x609c8
        │   ├── 37.0ms (3.0%) 0x60980
        │   ├── 35.0ms (2.9%) 0x60c5c
        │   └── 92.1ms (7.5%) 22 more callees, led by (2.5%) 0x60c38
        └── 36.0ms (3.0%) 23 more callees, led by (0.4%) 0x5a7c0
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 15.0% | 183.2ms |     183 | `0x60980` | `./zstd` |
| 13.9% | 170.2ms |     170 | `0x609c8` | `./zstd` |
| 11.9% | 145.1ms |     145 | `0x60c38` | `./zstd` |
| 11.7% | 143.1ms |     143 | `0x60c5c` | `./zstd` |
|  3.6% |  44.0ms |      44 | `0x609b8` | `./zstd` |
|  3.6% |  44.0ms |      44 | `0x5a65c` | `./zstd` |
|  3.3% |  40.0ms |      40 | `0x5a7c0` | `./zstd` |
|  2.2% |  27.0ms |      27 | `0x5a85c` | `./zstd` |
|  1.9% |  23.0ms |      23 | `0x5a78c` | `./zstd` |
|  1.7% |  21.0ms |      21 | `0x60c90` | `./zstd` |
|  1.6% |  19.0ms |      19 | `0x5a838` | `./zstd` |
|  1.3% |  16.0ms |      16 | `0x60978` | `./zstd` |
|  1.2% |  15.0ms |      15 | `0x60a08` | `./zstd` |
|  1.2% |  15.0ms |      15 | `0x5a7a8` | `./zstd` |
|  1.1% |  14.0ms |      14 | `0x609ec` | `./zstd` |
|  0.9% |  11.0ms |      11 | `0x60c60` | `./zstd` |
|  0.9% |  11.0ms |      11 | `0x609d4` | `./zstd` |
|  0.9% |  11.0ms |      11 | `0x609a0` | `./zstd` |
|  0.8% |  10.0ms |      10 | `0x58908` | `./zstd` |
|  0.7% |   9.0ms |       9 | `0x5a860` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60980` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 183.2ms |     183 | `0x5a3f4` | `./zstd` |

##### `0x609c8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 170.2ms |     170 | `0x5a3f4` | `./zstd` |

##### `0x60c38` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 145.1ms |     145 | `0x5a3f4` | `./zstd` |

##### `0x60c5c` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 143.1ms |     143 | `0x5a3f4` | `./zstd` |

##### `0x609b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 44.0ms |      44 | `0x5a3f4` | `./zstd` |

##### `0x5a65c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 44.0ms |      44 | `0x11630` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.0% | 38.0ms |      38 | `0x11630` | `./zstd` |
|  5.0% |  2.0ms |       2 | `0x61b40` | `./zstd` |

##### `0x5a85c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 96.3% | 26.0ms |      26 | `0x11630` | `./zstd` |
|  3.7% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x5a78c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.7% | 22.0ms |      22 | `0x11630` | `./zstd` |
|  4.3% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x60c90` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 21.0ms |      21 | `0x5a3f4` | `./zstd` |

##### `0x5a838` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 94.7% | 18.0ms |      18 | `0x11630` | `./zstd` |
|  5.3% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x60978` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x5a3f4` | `./zstd` |

##### `0x60a08` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x5a3f4` | `./zstd` |

##### `0x5a7a8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x11630` | `./zstd` |

##### `0x609ec` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x5a3f4` | `./zstd` |

##### `0x60c60` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x5a3f4` | `./zstd` |

##### `0x609d4` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x5a3f4` | `./zstd` |

##### `0x609a0` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x5a3f4` | `./zstd` |

##### `0x58908` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x11630` | `./zstd` |

##### `0x5a860` (`./zstd`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 88.9% | 8.0ms |       8 | `0x11630` | `./zstd` |
| 11.1% | 1.0ms |       1 | `0x61b40` | `./zstd` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.21s |   1,217 | `0x9f20`  | `./zstd`                               |
| 99.8% |   1.21s |   1,217 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.21s |   1,217 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 98.7% |   1.20s |   1,203 | `0x11630` | `./zstd`                               |
| 98.7% |   1.20s |   1,203 | `0x16720` | `./zstd`                               |
| 79.8% | 974.0ms |     973 | `0x62a60` | `./zstd`                               |
| 72.2% | 880.9ms |     880 | `0x5a3f4` | `./zstd`                               |
| 19.8% | 241.2ms |     241 | `0x17e38` | `./zstd`                               |
| 19.8% | 241.2ms |     241 | `0x62d34` | `./zstd`                               |
| 15.0% | 183.2ms |     183 | `0x60980` | `./zstd`                               |
| 13.9% | 170.2ms |     170 | `0x609c8` | `./zstd`                               |
| 11.9% | 145.1ms |     145 | `0x60c38` | `./zstd`                               |
| 11.7% | 143.1ms |     143 | `0x60c5c` | `./zstd`                               |
|  3.6% |  44.0ms |      44 | `0x609b8` | `./zstd`                               |
|  3.6% |  44.0ms |      44 | `0x5a65c` | `./zstd`                               |
|  3.3% |  40.0ms |      40 | `0x5a7c0` | `./zstd`                               |
|  2.2% |  27.0ms |      27 | `0x5a85c` | `./zstd`                               |
|  1.9% |  23.0ms |      23 | `0x5a78c` | `./zstd`                               |
|  1.7% |  21.0ms |      21 | `0x60c90` | `./zstd`                               |
|  1.6% |  19.0ms |      19 | `0x5a838` | `./zstd`                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.21s |   1,217 | `0x9f20`  | `./zstd` |
| 98.7% |   1.20s |   1,203 | `0x11630` | `./zstd` |
| 98.7% |   1.20s |   1,203 | `0x16720` | `./zstd` |
| 79.8% | 974.0ms |     973 | `0x62a60` | `./zstd` |
| 72.2% | 880.9ms |     880 | `0x5a3f4` | `./zstd` |
| 19.8% | 241.2ms |     241 | `0x17e38` | `./zstd` |
| 19.8% | 241.2ms |     241 | `0x62d34` | `./zstd` |
| 15.0% | 183.2ms |     183 | `0x60980` | `./zstd` |
| 13.9% | 170.2ms |     170 | `0x609c8` | `./zstd` |
| 11.9% | 145.1ms |     145 | `0x60c38` | `./zstd` |
| 11.7% | 143.1ms |     143 | `0x60c5c` | `./zstd` |
|  3.6% |  44.0ms |      44 | `0x609b8` | `./zstd` |
|  3.6% |  44.0ms |      44 | `0x5a65c` | `./zstd` |
|  3.3% |  40.0ms |      40 | `0x5a7c0` | `./zstd` |
|  2.2% |  27.0ms |      27 | `0x5a85c` | `./zstd` |
|  1.9% |  23.0ms |      23 | `0x5a78c` | `./zstd` |
|  1.7% |  21.0ms |      21 | `0x60c90` | `./zstd` |
|  1.6% |  19.0ms |      19 | `0x5a838` | `./zstd` |
|  1.3% |  16.0ms |      16 | `0x61b40` | `./zstd` |
|  1.3% |  16.0ms |      16 | `0x60978` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f20` (`./zstd`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.21s |   1,217 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.21s |   1,217 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11630` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.20s |   1,203 | `0x16720` | `./zstd` |

##### `0x16720` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 80.0% | 963.0ms |     962 | `0x62a60` | `./zstd` |
| 20.0% | 241.2ms |     241 | `0x17e38` | `./zstd` |

##### `0x62a60` (`./zstd`)

|      % |    Time | Samples | Caller   | Location |
| -----: | ------: | ------: | -------- | -------- |
| 100.0% | 974.0ms |     973 | `0x9f20` | `./zstd` |

##### `0x5a3f4` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.0% | 871.9ms |     871 | `0x11630` | `./zstd` |
|  1.0% |   9.0ms |       9 | `0x61b40` | `./zstd` |

##### `0x17e38` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 241.2ms |     241 | `0x62d34` | `./zstd` |

##### `0x62d34` (`./zstd`)

|      % |    Time | Samples | Caller   | Location |
| -----: | ------: | ------: | -------- | -------- |
| 100.0% | 241.2ms |     241 | `0x9f20` | `./zstd` |

##### `0x60980` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 183.2ms |     183 | `0x5a3f4` | `./zstd` |

##### `0x609c8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 170.2ms |     170 | `0x5a3f4` | `./zstd` |

##### `0x60c38` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 145.1ms |     145 | `0x5a3f4` | `./zstd` |

##### `0x60c5c` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 143.1ms |     143 | `0x5a3f4` | `./zstd` |

##### `0x609b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 44.0ms |      44 | `0x5a3f4` | `./zstd` |

##### `0x5a65c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 44.0ms |      44 | `0x11630` | `./zstd` |

##### `0x5a7c0` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.0% | 38.0ms |      38 | `0x11630` | `./zstd` |
|  5.0% |  2.0ms |       2 | `0x61b40` | `./zstd` |

##### `0x5a85c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 96.3% | 26.0ms |      26 | `0x11630` | `./zstd` |
|  3.7% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x5a78c` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.7% | 22.0ms |      22 | `0x11630` | `./zstd` |
|  4.3% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x60c90` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 21.0ms |      21 | `0x5a3f4` | `./zstd` |

##### `0x5a838` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 94.7% | 18.0ms |      18 | `0x11630` | `./zstd` |
|  5.3% |  1.0ms |       1 | `0x61b40` | `./zstd` |

##### `0x61b40` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x11630` | `./zstd` |

##### `0x60978` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x5a3f4` | `./zstd` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9f20` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 80.0% | 974.0ms |     973 | `0x62a60` | `./zstd` |
| 19.8% | 241.2ms |     241 | `0x62d34` | `./zstd` |
|  0.2% |   2.0ms |       2 | `0x62afc` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0xa2e60` | `./zstd` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.21s |   1,217 | `0x9f20` | `./zstd` |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.21s |   1,217 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11630` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 72.4% | 871.9ms |     871 | `0x5a3f4` | `./zstd` |
|  3.7% |  44.0ms |      44 | `0x5a65c` | `./zstd` |
|  3.2% |  38.0ms |      38 | `0x5a7c0` | `./zstd` |
|  2.2% |  26.0ms |      26 | `0x5a85c` | `./zstd` |
|  1.8% |  22.0ms |      22 | `0x5a78c` | `./zstd` |

##### `0x16720` (`./zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.20s |   1,203 | `0x11630` | `./zstd` |

##### `0x62a60` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 98.9% | 963.0ms |     962 | `0x16720` | `./zstd` |
|  0.6% |   6.0ms |       6 | `0x168b8` | `./zstd` |
|  0.3% |   3.0ms |       3 | `0x16898` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0x16a74` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0x163b0` | `./zstd` |

##### `0x5a3f4` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 20.8% | 183.2ms |     183 | `0x60980` | `./zstd` |
| 19.3% | 170.2ms |     170 | `0x609c8` | `./zstd` |
| 16.5% | 145.1ms |     145 | `0x60c38` | `./zstd` |
| 16.3% | 143.1ms |     143 | `0x60c5c` | `./zstd` |
|  5.0% |  44.0ms |      44 | `0x609b8` | `./zstd` |

##### `0x17e38` (`./zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 241.2ms |     241 | `0x16720` | `./zstd` |

##### `0x62d34` (`./zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 241.2ms |     241 | `0x17e38` | `./zstd` |

##### `0x61b40` (`./zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 56.3% | 9.0ms |       9 | `0x5a3f4` | `./zstd` |
| 12.5% | 2.0ms |       2 | `0x5a7c0` | `./zstd` |
|  6.3% | 1.0ms |       1 | `0x5a1f8` | `./zstd` |
|  6.3% | 1.0ms |       1 | `0x5a85c` | `./zstd` |
|  6.3% | 1.0ms |       1 | `0x5a78c` | `./zstd` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `0x9f20` (`./zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|     % |    Time | Samples | Call stack                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------- |
| 11.7% | 143.1ms |     143 | `0x60980` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
| 10.6% | 129.1ms |     129 | `0x609c8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  9.4% | 115.1ms |     115 | `0x60c38` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  8.9% | 108.1ms |     108 | `0x60c5c` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  3.4% |  41.0ms |      41 | `0x5a65c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  3.4% |  41.0ms |      41 | `0x609c8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  3.0% |  37.0ms |      37 | `0x60980` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.9% |  35.0ms |      35 | `0x60c5c` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.7% |  33.0ms |      33 | `0x5a7c0` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  2.5% |  30.0ms |      30 | `0x60c38` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  2.4% |  29.0ms |      29 | `0x609b8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  2.1% |  25.0ms |      25 | `0x5a85c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.7% |  21.0ms |      21 | `0x5a78c` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.2% |  15.0ms |      15 | `0x5a838` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.1% |  14.0ms |      14 | `0x5a7a8` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |
|  1.1% |  14.0ms |      14 | `0x60c90` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  1.1% |  14.0ms |      14 | `0x609b8` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x17e38` ← `0x62d34` |
|  1.0% |  12.0ms |      12 | `0x60978` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  0.8% |  10.0ms |      10 | `0x60c60` (`./zstd`) ← `0x5a3f4` ← `0x11630` ← `0x16720` ← `0x62a60`             |
|  0.7% |   9.0ms |       9 | `0x58908` (`./zstd`) ← `0x11630` ← `0x16720` ← `0x62a60`                         |

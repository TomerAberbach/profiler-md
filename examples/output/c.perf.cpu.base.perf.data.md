# CPU profile

Took 1.56s over 1,558 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.7% | 1.55s |   1,553 |
| Kernel   |  0.3% | 4.0ms |       4 |
| Native   |  0.1% | 1.0ms |       1 |

Paths starting with `./` or `../` are relative to `/src/zstd/programs/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.56s (99.8%) 0x9cf0 at ./zstd
    ├── 1.27s (81.5%) 0x61404
    │   ├── 1.26s (80.8%) 0x16020
    │   │   └── 1.26s (80.8%) 0x11090
    │   │       ├── 964.0ms (61.8%) 0x59274
    │   │       │   ├── 210.2ms (13.5%, self 17.1% globally) 0x5f848
    │   │       │   ├── 193.2ms (12.4%, self 16.4% globally) 0x5fab8
    │   │       │   ├── 193.2ms (12.4%, self 16.3% globally) 0x5f800
    │   │       │   ├── 137.1ms (8.8%, self 10.4% globally) 0x5fadc
    │   │       │   ├── 63.1ms (4.0%, self 4.7% globally) 0x5f838
    │   │       │   ├── 30.0ms (1.9%, self 2.4% globally) 0x5fb10
    │   │       │   ├── 13.0ms (0.8%) 0x5f854
    │   │       │   ├── 11.0ms (0.7%) 0x5f83c
    │   │       │   ├── 10.0ms (0.6%) 0x5f888
    │   │       │   ├── 8.0ms (0.5%) 0x5f7f8
    │   │       │   ├── 8.0ms (0.5%) 0x5f820
    │   │       │   ├── 7.0ms (0.4%) 0x5f86c
    │   │       │   ├── 7.0ms (0.4%) 0x5f7e0
    │   │       │   ├── 6.0ms (0.4%) 0x5fac4
    │   │       │   └── 67.1ms (4.3%) 31 more callees, led by (0.4%) 0x5f774
    │   │       ├── 40.0ms (2.6%) 0x59640
    │   │       ├── 34.0ms (2.2%) 0x594d8
    │   │       ├── 26.0ms (1.7%) 0x596dc
    │   │       ├── 13.0ms (0.8%) 0x596b8
    │   │       ├── 12.0ms (0.8%) 0x59628
    │   │       ├── 12.0ms (0.8%) 0x5960c
    │   │       ├── 11.0ms (0.7%) 0x596f4
    │   │       ├── 10.0ms (0.6%) 0x59558
    │   │       ├── 9.0ms (0.6%) 0x577d4
    │   │       ├── 8.0ms (0.5%) 0x591d0
    │   │       ├── 7.0ms (0.4%) 0x596b4
    │   │       └── 114.1ms (7.3%) 47 more callees, led by (1.2%) 0x609c0
    │   └── 10.0ms (0.6%) 2 more callees, led by (0.5%) 0x161a4
    └── … 284.3ms (18.2%) 0x11090 at ./zstd
        ├── 242.2ms (15.5%) 0x59274
        │   ├── 60.1ms (3.9%) 0x5f800
        │   ├── 60.1ms (3.9%) 0x5fab8
        │   ├── 57.1ms (3.7%) 0x5f848
        │   └── 65.1ms (4.2%) 16 more callees, led by (1.5%) 0x5fadc
        └── 42.0ms (2.7%) 22 more callees, led by (0.4%) 0x596dc
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 17.1% | 267.3ms |     267 | `0x5f848` | `./zstd` |
| 16.4% | 255.3ms |     255 | `0x5fab8` | `./zstd` |
| 16.3% | 254.3ms |     254 | `0x5f800` | `./zstd` |
| 10.4% | 162.2ms |     162 | `0x5fadc` | `./zstd` |
|  4.7% |  74.1ms |      74 | `0x5f838` | `./zstd` |
|  3.0% |  46.0ms |      46 | `0x59640` | `./zstd` |
|  2.6% |  41.0ms |      41 | `0x594d8` | `./zstd` |
|  2.4% |  38.0ms |      38 | `0x5fb10` | `./zstd` |
|  2.1% |  33.0ms |      33 | `0x596dc` | `./zstd` |
|  1.2% |  19.0ms |      19 | `0x596b8` | `./zstd` |
|  1.0% |  15.0ms |      15 | `0x596f4` | `./zstd` |
|  0.9% |  14.0ms |      14 | `0x59628` | `./zstd` |
|  0.8% |  13.0ms |      13 | `0x5f854` | `./zstd` |
|  0.8% |  12.0ms |      12 | `0x59558` | `./zstd` |
|  0.8% |  12.0ms |      12 | `0x5f7f8` | `./zstd` |
|  0.8% |  12.0ms |      12 | `0x5f888` | `./zstd` |
|  0.8% |  12.0ms |      12 | `0x5960c` | `./zstd` |
|  0.8% |  12.0ms |      12 | `0x5f83c` | `./zstd` |
|  0.7% |  11.0ms |      11 | `0x5f86c` | `./zstd` |
|  0.6% |  10.0ms |      10 | `0x577d4` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5f848` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 267.3ms |     267 | `0x59274` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 255.3ms |     255 | `0x59274` | `./zstd` |

##### `0x5f800` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 254.3ms |     254 | `0x59274` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 162.2ms |     162 | `0x59274` | `./zstd` |

##### `0x5f838` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 74.1ms |      74 | `0x59274` | `./zstd` |

##### `0x59640` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.7% | 44.0ms |      44 | `0x11090` | `./zstd` |
|  4.3% |  2.0ms |       2 | `0x609c0` | `./zstd` |

##### `0x594d8` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 90.2% | 37.0ms |      37 | `0x11090` | `./zstd` |
|  9.8% |  4.0ms |       4 | `0x609c0` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 38.0ms |      38 | `0x59274` | `./zstd` |

##### `0x596dc` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 33.0ms |      33 | `0x11090` | `./zstd` |

##### `0x596b8` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 89.5% | 17.0ms |      17 | `0x11090` | `./zstd` |
| 10.5% |  2.0ms |       2 | `0x609c0` | `./zstd` |

##### `0x596f4` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x11090` | `./zstd` |

##### `0x59628` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x11090` | `./zstd` |

##### `0x5f854` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 13.0ms |      13 | `0x59274` | `./zstd` |

##### `0x59558` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 91.7% | 11.0ms |      11 | `0x11090` | `./zstd` |
|  8.3% |  1.0ms |       1 | `0x609c0` | `./zstd` |

##### `0x5f7f8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x59274` | `./zstd` |

##### `0x5f888` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x59274` | `./zstd` |

##### `0x5960c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x11090` | `./zstd` |

##### `0x5f83c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x59274` | `./zstd` |

##### `0x5f86c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 11.0ms |      11 | `0x59274` | `./zstd` |

##### `0x577d4` (`./zstd`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 90.0% | 9.0ms |       9 | `0x11090` | `./zstd` |
| 10.0% | 1.0ms |       1 | `0x609c0` | `./zstd` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.8% |   1.56s |   1,555 | `0x9cf0`  | `./zstd`                               |
| 99.8% |   1.56s |   1,555 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.8% |   1.56s |   1,555 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.0% |   1.54s |   1,543 | `0x11090` | `./zstd`                               |
| 99.0% |   1.54s |   1,543 | `0x16020` | `./zstd`                               |
| 81.5% |   1.27s |   1,269 | `0x61404` | `./zstd`                               |
| 77.8% |   1.21s |   1,212 | `0x59274` | `./zstd`                               |
| 18.2% | 284.3ms |     284 | `0x17768` | `./zstd`                               |
| 18.2% | 284.3ms |     284 | `0x616b8` | `./zstd`                               |
| 17.1% | 267.3ms |     267 | `0x5f848` | `./zstd`                               |
| 16.4% | 255.3ms |     255 | `0x5fab8` | `./zstd`                               |
| 16.3% | 254.3ms |     254 | `0x5f800` | `./zstd`                               |
| 10.4% | 162.2ms |     162 | `0x5fadc` | `./zstd`                               |
|  4.7% |  74.1ms |      74 | `0x5f838` | `./zstd`                               |
|  3.0% |  46.0ms |      46 | `0x59640` | `./zstd`                               |
|  2.6% |  41.0ms |      41 | `0x594d8` | `./zstd`                               |
|  2.4% |  38.0ms |      38 | `0x5fb10` | `./zstd`                               |
|  2.1% |  33.0ms |      33 | `0x596dc` | `./zstd`                               |
|  1.2% |  19.0ms |      19 | `0x609c0` | `./zstd`                               |
|  1.2% |  19.0ms |      19 | `0x596b8` | `./zstd`                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.8% |   1.56s |   1,555 | `0x9cf0`  | `./zstd` |
| 99.0% |   1.54s |   1,543 | `0x11090` | `./zstd` |
| 99.0% |   1.54s |   1,543 | `0x16020` | `./zstd` |
| 81.5% |   1.27s |   1,269 | `0x61404` | `./zstd` |
| 77.8% |   1.21s |   1,212 | `0x59274` | `./zstd` |
| 18.2% | 284.3ms |     284 | `0x17768` | `./zstd` |
| 18.2% | 284.3ms |     284 | `0x616b8` | `./zstd` |
| 17.1% | 267.3ms |     267 | `0x5f848` | `./zstd` |
| 16.4% | 255.3ms |     255 | `0x5fab8` | `./zstd` |
| 16.3% | 254.3ms |     254 | `0x5f800` | `./zstd` |
| 10.4% | 162.2ms |     162 | `0x5fadc` | `./zstd` |
|  4.7% |  74.1ms |      74 | `0x5f838` | `./zstd` |
|  3.0% |  46.0ms |      46 | `0x59640` | `./zstd` |
|  2.6% |  41.0ms |      41 | `0x594d8` | `./zstd` |
|  2.4% |  38.0ms |      38 | `0x5fb10` | `./zstd` |
|  2.1% |  33.0ms |      33 | `0x596dc` | `./zstd` |
|  1.2% |  19.0ms |      19 | `0x609c0` | `./zstd` |
|  1.2% |  19.0ms |      19 | `0x596b8` | `./zstd` |
|  1.0% |  15.0ms |      15 | `0x596f4` | `./zstd` |
|  0.9% |  14.0ms |      14 | `0x59628` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9cf0` (`./zstd`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.56s |   1,555 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.56s |   1,555 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11090` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.54s |   1,543 | `0x16020` | `./zstd` |

##### `0x16020` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 81.6% |   1.26s |   1,259 | `0x61404` | `./zstd` |
| 18.4% | 284.3ms |     284 | `0x17768` | `./zstd` |

##### `0x61404` (`./zstd`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.27s |   1,269 | `0x9cf0` | `./zstd` |

##### `0x59274` (`./zstd`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.4% | 1.21s |   1,205 | `0x11090` | `./zstd` |
|  0.6% | 7.0ms |       7 | `0x609c0` | `./zstd` |

##### `0x17768` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 284.3ms |     284 | `0x616b8` | `./zstd` |

##### `0x616b8` (`./zstd`)

|      % |    Time | Samples | Caller   | Location |
| -----: | ------: | ------: | -------- | -------- |
| 100.0% | 284.3ms |     284 | `0x9cf0` | `./zstd` |

##### `0x5f848` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 267.3ms |     267 | `0x59274` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 255.3ms |     255 | `0x59274` | `./zstd` |

##### `0x5f800` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 254.3ms |     254 | `0x59274` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 162.2ms |     162 | `0x59274` | `./zstd` |

##### `0x5f838` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 74.1ms |      74 | `0x59274` | `./zstd` |

##### `0x59640` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 95.7% | 44.0ms |      44 | `0x11090` | `./zstd` |
|  4.3% |  2.0ms |       2 | `0x609c0` | `./zstd` |

##### `0x594d8` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 90.2% | 37.0ms |      37 | `0x11090` | `./zstd` |
|  9.8% |  4.0ms |       4 | `0x609c0` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 38.0ms |      38 | `0x59274` | `./zstd` |

##### `0x596dc` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 33.0ms |      33 | `0x11090` | `./zstd` |

##### `0x609c0` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 19.0ms |      19 | `0x11090` | `./zstd` |

##### `0x596b8` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 89.5% | 17.0ms |      17 | `0x11090` | `./zstd` |
| 10.5% |  2.0ms |       2 | `0x609c0` | `./zstd` |

##### `0x596f4` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 15.0ms |      15 | `0x11090` | `./zstd` |

##### `0x59628` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x11090` | `./zstd` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9cf0` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 81.6% |   1.27s |   1,269 | `0x61404` | `./zstd` |
| 18.3% | 284.3ms |     284 | `0x616b8` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0x614a0` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0xa17b0` | `./zstd` |

##### `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.56s |   1,555 | `0x9cf0` | `./zstd` |

##### `0xebf5c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.56s |   1,555 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11090` (`./zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 78.1% |  1.21s |   1,205 | `0x59274` | `./zstd` |
|  2.9% | 44.0ms |      44 | `0x59640` | `./zstd` |
|  2.4% | 37.0ms |      37 | `0x594d8` | `./zstd` |
|  2.1% | 33.0ms |      33 | `0x596dc` | `./zstd` |
|  1.2% | 19.0ms |      19 | `0x609c0` | `./zstd` |

##### `0x16020` (`./zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.54s |   1,543 | `0x11090` | `./zstd` |

##### `0x61404` (`./zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.2% | 1.26s |   1,259 | `0x16020` | `./zstd` |
|  0.6% | 8.0ms |       8 | `0x161a4` | `./zstd` |
|  0.2% | 2.0ms |       2 | `0x16180` | `./zstd` |

##### `0x59274` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 22.0% | 267.3ms |     267 | `0x5f848` | `./zstd` |
| 21.0% | 255.3ms |     255 | `0x5fab8` | `./zstd` |
| 21.0% | 254.3ms |     254 | `0x5f800` | `./zstd` |
| 13.4% | 162.2ms |     162 | `0x5fadc` | `./zstd` |
|  6.1% |  74.1ms |      74 | `0x5f838` | `./zstd` |

##### `0x17768` (`./zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 284.3ms |     284 | `0x16020` | `./zstd` |

##### `0x616b8` (`./zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 284.3ms |     284 | `0x17768` | `./zstd` |

##### `0x609c0` (`./zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 36.8% | 7.0ms |       7 | `0x59274` | `./zstd` |
| 21.1% | 4.0ms |       4 | `0x594d8` | `./zstd` |
| 10.5% | 2.0ms |       2 | `0x59640` | `./zstd` |
| 10.5% | 2.0ms |       2 | `0x596b8` | `./zstd` |
|  5.3% | 1.0ms |       1 | `0x59558` | `./zstd` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `0x9cf0` (`./zstd`) ← `0x82030` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5c`

|     % |    Time | Samples | Call stack                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------- |
| 13.5% | 210.2ms |     210 | `0x5f848` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 12.4% | 193.2ms |     193 | `0x5fab8` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
| 12.4% | 193.2ms |     193 | `0x5f800` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  8.8% | 137.1ms |     137 | `0x5fadc` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  4.0% |  63.1ms |      63 | `0x5f838` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  3.9% |  60.1ms |      60 | `0x5f800` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  3.9% |  60.1ms |      60 | `0x5fab8` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  3.7% |  57.1ms |      57 | `0x5f848` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  2.6% |  40.0ms |      40 | `0x59640` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  2.2% |  34.0ms |      34 | `0x594d8` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.9% |  30.0ms |      30 | `0x5fb10` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  1.7% |  26.0ms |      26 | `0x596dc` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  1.5% |  24.0ms |      24 | `0x5fadc` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |
|  0.8% |  13.0ms |      13 | `0x596b8` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  0.8% |  13.0ms |      13 | `0x5f854` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  0.8% |  12.0ms |      12 | `0x5960c` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  0.8% |  12.0ms |      12 | `0x59628` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  0.7% |  11.0ms |      11 | `0x5f83c` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x61404`             |
|  0.7% |  11.0ms |      11 | `0x596f4` (`./zstd`) ← `0x11090` ← `0x16020` ← `0x61404`                         |
|  0.7% |  11.0ms |      11 | `0x5f838` (`./zstd`) ← `0x59274` ← `0x11090` ← `0x16020` ← `0x17768` ← `0x616b8` |

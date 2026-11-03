# CPU profile

Took 1.38s over 1,386 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.7% | 1.38s |   1,382 |
| Native   |  0.2% | 3.0ms |       3 |
| Kernel   |  0.1% | 1.0ms |       1 |

Paths starting with `./` or `../` are relative to `/src/zstd/programs/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.38s (99.9%) 0x9cee at ./zstd
    ├── 1.15s (83.0%) 0x61402
    │   ├── 1.14s (82.4%) 0x1601e
    │   │   └── 1.14s (82.4%) 0x1108e
    │   │       ├── 850.9ms (61.3%) 0x59272
    │   │       │   ├── 193.2ms (13.9%, self 16.9% globally) 0x5f800
    │   │       │   ├── 156.2ms (11.3%, self 13.9% globally) 0x5fadc
    │   │       │   ├── 149.1ms (10.8%, self 13.1% globally) 0x5f848
    │   │       │   ├── 149.1ms (10.8%, self 13.9% globally) 0x5fab8
    │   │       │   ├── 46.0ms (3.3%, self 4.3% globally) 0x5f838
    │   │       │   ├── 27.0ms (1.9%, self 2.5% globally) 0x5fb10
    │   │       │   ├── 16.0ms (1.2%) 0x5f888
    │   │       │   ├── 10.0ms (0.7%) 0x5f83c
    │   │       │   ├── 10.0ms (0.7%) 0x5f86c
    │   │       │   ├── 8.0ms (0.6%) 0x5f854
    │   │       │   ├── 7.0ms (0.5%) 0x5f7d4
    │   │       │   ├── 6.0ms (0.4%) 0x5f820
    │   │       │   ├── 5.0ms (0.4%) 0x5f7f8
    │   │       │   ├── 5.0ms (0.4%) 0x5f94c
    │   │       │   └── 63.1ms (4.5%) 32 more callees, led by (0.4%) 0x5fb08
    │   │       ├── 50.1ms (3.6%) 0x59640
    │   │       ├── 31.0ms (2.2%) 0x594d8
    │   │       ├── 22.0ms (1.6%) 0x596dc
    │   │       ├── 20.0ms (1.4%) 0x5960c
    │   │       ├── 17.0ms (1.2%) 0x596b8
    │   │       ├── 11.0ms (0.8%) 0x59628
    │   │       ├── 8.0ms (0.6%) 0x5966c
    │   │       ├── 8.0ms (0.6%) 0x596b4
    │   │       ├── 7.0ms (0.5%) 0x577d4
    │   │       ├── 7.0ms (0.5%) 0x591d0
    │   │       ├── 6.0ms (0.4%) 0x5955c
    │   │       ├── 5.0ms (0.4%) 0x58e00
    │   │       └── 100.1ms (7.2%) 47 more callees, led by (1.2%) 0x609be
    │   └── 9.0ms (0.6%) 2 more callees, led by (0.5%) 0x161a2
    └── … 227.2ms (16.4%) 0x1108e at ./zstd
        ├── 192.2ms (13.9%) 0x59272
        │   ├── 41.0ms (3.0%) 0x5fab8
        │   ├── 38.0ms (2.7%) 0x5f800
        │   └── 113.1ms (8.2%) 21 more callees, led by (2.6%) 0x5fadc
        └── 35.0ms (2.5%) 20 more callees, led by (0.4%) 0x594d8
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 16.9% | 234.2ms |     234 | `0x5f800` | `./zstd` |
| 13.9% | 193.2ms |     193 | `0x5fadc` | `./zstd` |
| 13.9% | 192.2ms |     192 | `0x5fab8` | `./zstd` |
| 13.1% | 182.2ms |     182 | `0x5f848` | `./zstd` |
|  4.3% |  60.1ms |      60 | `0x5f838` | `./zstd` |
|  3.9% |  54.1ms |      54 | `0x59640` | `./zstd` |
|  2.7% |  37.0ms |      37 | `0x594d8` | `./zstd` |
|  2.5% |  35.0ms |      35 | `0x5fb10` | `./zstd` |
|  1.8% |  25.0ms |      25 | `0x596dc` | `./zstd` |
|  1.7% |  23.0ms |      23 | `0x5960c` | `./zstd` |
|  1.3% |  18.0ms |      18 | `0x596b8` | `./zstd` |
|  1.2% |  16.0ms |      16 | `0x5f888` | `./zstd` |
|  1.0% |  14.0ms |      14 | `0x5f83c` | `./zstd` |
|  0.9% |  12.0ms |      12 | `0x59628` | `./zstd` |
|  0.7% |  10.0ms |      10 | `0x5f7d4` | `./zstd` |
|  0.7% |  10.0ms |      10 | `0x5966c` | `./zstd` |
|  0.7% |  10.0ms |      10 | `0x5f86c` | `./zstd` |
|  0.6% |   9.0ms |       9 | `0x577d4` | `./zstd` |
|  0.6% |   9.0ms |       9 | `0x596b4` | `./zstd` |
|  0.6% |   9.0ms |       9 | `0x5f854` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x5f800` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 234.2ms |     234 | `0x59272` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 192.2ms |     192 | `0x59272` | `./zstd` |
|  0.5% |   1.0ms |       1 | `0x58c76` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 192.2ms |     192 | `0x59272` | `./zstd` |

##### `0x5f848` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 182.2ms |     182 | `0x59272` | `./zstd` |

##### `0x5f838` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 60.1ms |      60 | `0x59272` | `./zstd` |

##### `0x59640` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 54.1ms |      54 | `0x1108e` | `./zstd` |

##### `0x594d8` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.3% | 36.0ms |      36 | `0x1108e` | `./zstd` |
|  2.7% |  1.0ms |       1 | `0x609be` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 35.0ms |      35 | `0x59272` | `./zstd` |

##### `0x596dc` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 25.0ms |      25 | `0x1108e` | `./zstd` |

##### `0x5960c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 23.0ms |      23 | `0x1108e` | `./zstd` |

##### `0x596b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 18.0ms |      18 | `0x1108e` | `./zstd` |

##### `0x5f888` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x59272` | `./zstd` |

##### `0x5f83c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 14.0ms |      14 | `0x59272` | `./zstd` |

##### `0x59628` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 12.0ms |      12 | `0x1108e` | `./zstd` |

##### `0x5f7d4` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x59272` | `./zstd` |

##### `0x5966c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x1108e` | `./zstd` |

##### `0x5f86c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 10.0ms |      10 | `0x59272` | `./zstd` |

##### `0x577d4` (`./zstd`)

|     % |  Time | Samples | Caller    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 88.9% | 8.0ms |       8 | `0x1108e` | `./zstd` |
| 11.1% | 1.0ms |       1 | `0x609be` | `./zstd` |

##### `0x596b4` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x1108e` | `./zstd` |

##### `0x5f854` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 9.0ms |       9 | `0x59272` | `./zstd` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function  | Location                               |
| ----: | ------: | ------: | --------- | -------------------------------------- |
| 99.9% |   1.38s |   1,384 | `0x9cee`  | `./zstd`                               |
| 99.9% |   1.38s |   1,384 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 99.9% |   1.38s |   1,384 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 98.8% |   1.37s |   1,369 | `0x1108e` | `./zstd`                               |
| 98.8% |   1.37s |   1,369 | `0x1601e` | `./zstd`                               |
| 83.0% |   1.15s |   1,151 | `0x61402` | `./zstd`                               |
| 76.1% |   1.05s |   1,055 | `0x59272` | `./zstd`                               |
| 16.9% | 234.2ms |     234 | `0x5f800` | `./zstd`                               |
| 16.7% | 231.2ms |     231 | `0x17766` | `./zstd`                               |
| 16.7% | 231.2ms |     231 | `0x616b6` | `./zstd`                               |
| 13.9% | 193.2ms |     193 | `0x5fadc` | `./zstd`                               |
| 13.9% | 192.2ms |     192 | `0x5fab8` | `./zstd`                               |
| 13.1% | 182.2ms |     182 | `0x5f848` | `./zstd`                               |
|  4.3% |  60.1ms |      60 | `0x5f838` | `./zstd`                               |
|  3.9% |  54.1ms |      54 | `0x59640` | `./zstd`                               |
|  2.7% |  37.0ms |      37 | `0x594d8` | `./zstd`                               |
|  2.5% |  35.0ms |      35 | `0x5fb10` | `./zstd`                               |
|  1.8% |  25.0ms |      25 | `0x596dc` | `./zstd`                               |
|  1.7% |  23.0ms |      23 | `0x5960c` | `./zstd`                               |
|  1.3% |  18.0ms |      18 | `0x596b8` | `./zstd`                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function  | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.9% |   1.38s |   1,384 | `0x9cee`  | `./zstd` |
| 98.8% |   1.37s |   1,369 | `0x1108e` | `./zstd` |
| 98.8% |   1.37s |   1,369 | `0x1601e` | `./zstd` |
| 83.0% |   1.15s |   1,151 | `0x61402` | `./zstd` |
| 76.1% |   1.05s |   1,055 | `0x59272` | `./zstd` |
| 16.9% | 234.2ms |     234 | `0x5f800` | `./zstd` |
| 16.7% | 231.2ms |     231 | `0x17766` | `./zstd` |
| 16.7% | 231.2ms |     231 | `0x616b6` | `./zstd` |
| 13.9% | 193.2ms |     193 | `0x5fadc` | `./zstd` |
| 13.9% | 192.2ms |     192 | `0x5fab8` | `./zstd` |
| 13.1% | 182.2ms |     182 | `0x5f848` | `./zstd` |
|  4.3% |  60.1ms |      60 | `0x5f838` | `./zstd` |
|  3.9% |  54.1ms |      54 | `0x59640` | `./zstd` |
|  2.7% |  37.0ms |      37 | `0x594d8` | `./zstd` |
|  2.5% |  35.0ms |      35 | `0x5fb10` | `./zstd` |
|  1.8% |  25.0ms |      25 | `0x596dc` | `./zstd` |
|  1.7% |  23.0ms |      23 | `0x5960c` | `./zstd` |
|  1.3% |  18.0ms |      18 | `0x596b8` | `./zstd` |
|  1.2% |  16.0ms |      16 | `0x609be` | `./zstd` |
|  1.2% |  16.0ms |      16 | `0x5f888` | `./zstd` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9cee` (`./zstd`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.38s |   1,384 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.38s |   1,384 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1108e` (`./zstd`)

|      % |  Time | Samples | Caller    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.37s |   1,369 | `0x1601e` | `./zstd` |

##### `0x1601e` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 83.4% |   1.14s |   1,142 | `0x61402` | `./zstd` |
| 16.6% | 227.2ms |     227 | `0x17766` | `./zstd` |

##### `0x61402` (`./zstd`)

|      % |  Time | Samples | Caller   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.15s |   1,151 | `0x9cee` | `./zstd` |

##### `0x59272` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 98.8% |  1.04s |   1,042 | `0x1108e` | `./zstd` |
|  1.2% | 13.0ms |      13 | `0x609be` | `./zstd` |

##### `0x5f800` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 234.2ms |     234 | `0x59272` | `./zstd` |

##### `0x17766` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 231.2ms |     231 | `0x616b6` | `./zstd` |

##### `0x616b6` (`./zstd`)

|      % |    Time | Samples | Caller   | Location |
| -----: | ------: | ------: | -------- | -------- |
| 100.0% | 231.2ms |     231 | `0x9cee` | `./zstd` |

##### `0x5fadc` (`./zstd`)

|     % |    Time | Samples | Caller    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 99.5% | 192.2ms |     192 | `0x59272` | `./zstd` |
|  0.5% |   1.0ms |       1 | `0x58c76` | `./zstd` |

##### `0x5fab8` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 192.2ms |     192 | `0x59272` | `./zstd` |

##### `0x5f848` (`./zstd`)

|      % |    Time | Samples | Caller    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 182.2ms |     182 | `0x59272` | `./zstd` |

##### `0x5f838` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 60.1ms |      60 | `0x59272` | `./zstd` |

##### `0x59640` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 54.1ms |      54 | `0x1108e` | `./zstd` |

##### `0x594d8` (`./zstd`)

|     % |   Time | Samples | Caller    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 97.3% | 36.0ms |      36 | `0x1108e` | `./zstd` |
|  2.7% |  1.0ms |       1 | `0x609be` | `./zstd` |

##### `0x5fb10` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 35.0ms |      35 | `0x59272` | `./zstd` |

##### `0x596dc` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 25.0ms |      25 | `0x1108e` | `./zstd` |

##### `0x5960c` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 23.0ms |      23 | `0x1108e` | `./zstd` |

##### `0x596b8` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 18.0ms |      18 | `0x1108e` | `./zstd` |

##### `0x609be` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x1108e` | `./zstd` |

##### `0x5f888` (`./zstd`)

|      % |   Time | Samples | Caller    | Location |
| -----: | -----: | ------: | --------- | -------- |
| 100.0% | 16.0ms |      16 | `0x59272` | `./zstd` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x9cee` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 83.2% |   1.15s |   1,151 | `0x61402` | `./zstd` |
| 16.7% | 231.2ms |     231 | `0x616b6` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0x6149e` | `./zstd` |
|  0.1% |   1.0ms |       1 | `0x6185e` | `./zstd` |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee   | Location |
| -----: | ----: | ------: | -------- | -------- |
| 100.0% | 1.38s |   1,384 | `0x9cee` | `./zstd` |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.38s |   1,384 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1108e` (`./zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 76.1% |  1.04s |   1,042 | `0x59272` | `./zstd` |
|  3.9% | 54.1ms |      54 | `0x59640` | `./zstd` |
|  2.6% | 36.0ms |      36 | `0x594d8` | `./zstd` |
|  1.8% | 25.0ms |      25 | `0x596dc` | `./zstd` |
|  1.7% | 23.0ms |      23 | `0x5960c` | `./zstd` |

##### `0x1601e` (`./zstd`)

|      % |  Time | Samples | Callee    | Location |
| -----: | ----: | ------: | --------- | -------- |
| 100.0% | 1.37s |   1,369 | `0x1108e` | `./zstd` |

##### `0x61402` (`./zstd`)

|     % |  Time | Samples | Callee    | Location |
| ----: | ----: | ------: | --------- | -------- |
| 99.2% | 1.14s |   1,142 | `0x1601e` | `./zstd` |
|  0.6% | 7.0ms |       7 | `0x161a2` | `./zstd` |
|  0.2% | 2.0ms |       2 | `0x1617e` | `./zstd` |

##### `0x59272` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 22.2% | 234.2ms |     234 | `0x5f800` | `./zstd` |
| 18.2% | 192.2ms |     192 | `0x5fab8` | `./zstd` |
| 18.2% | 192.2ms |     192 | `0x5fadc` | `./zstd` |
| 17.3% | 182.2ms |     182 | `0x5f848` | `./zstd` |
|  5.7% |  60.1ms |      60 | `0x5f838` | `./zstd` |

##### `0x17766` (`./zstd`)

|     % |    Time | Samples | Callee    | Location |
| ----: | ------: | ------: | --------- | -------- |
| 98.3% | 227.2ms |     227 | `0x1601e` | `./zstd` |
|  0.9% |   2.0ms |       2 | `0x161a2` | `./zstd` |
|  0.9% |   2.0ms |       2 | `0x1617e` | `./zstd` |

##### `0x616b6` (`./zstd`)

|      % |    Time | Samples | Callee    | Location |
| -----: | ------: | ------: | --------- | -------- |
| 100.0% | 231.2ms |     231 | `0x17766` | `./zstd` |

##### `0x609be` (`./zstd`)

|     % |   Time | Samples | Callee    | Location |
| ----: | -----: | ------: | --------- | -------- |
| 81.3% | 13.0ms |      13 | `0x59272` | `./zstd` |
|  6.3% |  1.0ms |       1 | `0x594d8` | `./zstd` |
|  6.3% |  1.0ms |       1 | `0x575ec` | `./zstd` |
|  6.3% |  1.0ms |       1 | `0x577d4` | `./zstd` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `0x9cee` (`./zstd`) ← `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5a`

|     % |    Time | Samples | Call stack                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------- |
| 13.9% | 193.2ms |     193 | `0x5f800` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 11.3% | 156.2ms |     156 | `0x5fadc` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 10.8% | 149.1ms |     149 | `0x5f848` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
| 10.8% | 149.1ms |     149 | `0x5fab8` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  3.6% |  50.1ms |      50 | `0x59640` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  3.3% |  46.0ms |      46 | `0x5f838` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  3.0% |  41.0ms |      41 | `0x5fab8` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.7% |  38.0ms |      38 | `0x5f800` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.6% |  36.0ms |      36 | `0x5fadc` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.4% |  33.0ms |      33 | `0x5f848` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  2.2% |  31.0ms |      31 | `0x594d8` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.9% |  27.0ms |      27 | `0x5fb10` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  1.6% |  22.0ms |      22 | `0x596dc` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.4% |  20.0ms |      20 | `0x5960c` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.2% |  17.0ms |      17 | `0x596b8` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  1.2% |  16.0ms |      16 | `0x5f888` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  1.0% |  14.0ms |      14 | `0x5f838` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x17766` ← `0x616b6` |
|  0.8% |  11.0ms |      11 | `0x59628` (`./zstd`) ← `0x1108e` ← `0x1601e` ← `0x61402`                         |
|  0.7% |  10.0ms |      10 | `0x5f83c` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |
|  0.7% |  10.0ms |      10 | `0x5f86c` (`./zstd`) ← `0x59272` ← `0x1108e` ← `0x1601e` ← `0x61402`             |

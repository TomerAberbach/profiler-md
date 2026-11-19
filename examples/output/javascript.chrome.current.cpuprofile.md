# CPU profile

Took 4.23s over 3,352 samples (1.3ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| Third-party       | 92.7% |   3.92s |   3,108 |
| Garbage collector |  3.2% | 136.2ms |     108 |
| Native            |  3.1% | 129.9ms |     103 |
| Ours              |  0.8% |  32.8ms |      26 |
| Idle              |  0.2% |   8.8ms |       7 |

Paths starting with `./` or `../` are relative to `http://127.0.0.1:52789/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 4.02s (95.0%) (anonymous) at ./run.mjs:1:1
│   └── 4.01s (94.9%) globalThis.buildAndRetainDom at ./workload.mjs:1:32
│       ├── 3.73s (88.2%) chartLayouts at 116:24
│       │   ├── 2.15s (50.7%) h at ./node_modules/d3/dist/d3.min.js:2:235656
│       │   │   └── 2.14s (50.7%, self 1.9%) (anonymous) at 2:235751
│       │   │       ├── 1.22s (28.9%, self 11.0%) f at 2:233501
│       │   │       │   ├── 624.3ms (14.8%, self 1.0%, self 1.8% globally) Fc.visit at 2:105681
│       │   │       │   │   └── 584.0ms (13.8%, self 14.4% globally) h at 2:233933
│       │   │       │   ├── 66.8ms (1.6%, self 1.0%, self 1.5% globally) Fc.visitAfter at 2:106049
│       │   │       │   │   └── 26.5ms (0.6%) l at 2:233696
│       │   │       │   └── 66.8ms (1.6%) 3 more callees, led by (1.5%) $c at 2:102050
│       │   │       ├── 805.9ms (19.1%, self 8.1%) a at 2:231054
│       │   │       │   ├── 319.1ms (7.5%, self 0.8%) Fc.visit at 2:105681
│       │   │       │   │   └── 285.0ms (6.7%, self 7.4% globally) g at 2:231215
│       │   │       │   ├── 84.5ms (2.0%) $c at 2:102050
│       │   │       │   │   └── 74.4ms (1.8%, self 1.6%, self 2.8% globally) Fc.addAll at 2:103087
│       │   │       │   └── 59.3ms (1.4%, self 0.5%) Fc.visitAfter at 2:106049
│       │   │       │       └── 37.8ms (0.9%) u at 2:231519
│       │   │       └── 12.6ms (0.3%) l at 2:232151
│       │   ├── 1.29s (30.5%) d at ./node_modules/d3/dist/d3.min.js:2:223550
│       │   │   ├── … 1.07s (25.4%, self 23.1%) (anonymous) at ./node_modules/d3/dist/d3.min.js:2:77113
│       │   │   │   └── 93.3ms (2.2%, self 1.8%) p at 2:77576
│       │   │   ├── 160.2ms (3.8%) h at 2:223199
│       │   │   │   └── 152.6ms (3.6%) (anonymous) at 2:1144
│       │   │   │       ├── 80.7ms (1.9%, self 1.6%) p at 2:1697
│       │   │   │       │   └── 15.1ms (0.4%) (anonymous) at 2:2114
│       │   │   │       └── 70.6ms (1.7%, self 1.4%) g at 2:1758
│       │   │   └── 39.1ms (0.9%) J at 2:8205
│       │   ├── 155.1ms (3.7%) attr at ./node_modules/d3/dist/d3.min.js:2:25709
│       │   │   ├── 92.1ms (2.2%) each at 2:25558
│       │   │   │   └── 82.0ms (1.9%, self 0.9%, self 2.2% globally) (anonymous) at 2:18176
│       │   │   │       └── … 25.2ms (0.6%, self 1.1% globally) Jh at ./node_modules/d3/dist/d3.min.js:2:131218
│       │   │   └── 60.5ms (1.4%) 2 more callees, led by (1.3%) (anonymous) at 2:18176
│       │   ├── … 32.8ms (0.8%) (anonymous) at ./node_modules/d3/dist/d3.min.js:2:16259
│       │   │   └── 30.3ms (0.7%, self 1.6% globally) createElementNS
│       │   └── 84.5ms (2.0%) 16 more callees, led by (0.7%) from at ./node_modules/d3/dist/d3.min.js:2:94282
│       └── 281.3ms (6.7%) 11 more callees, led by (3.0%) call at ./node_modules/d3/dist/d3.min.js:2:25192
├── 136.2ms (3.2%) (garbage collector)
├── 24.0ms (0.6%) (program)
└── 50.4ms (1.2%) 6 more root frames, led by (0.4%) h at ./node_modules/d3/dist/d3.min.js:2:233933
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function              | Location                                    |
| ----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 23.1% | 977.5ms |     775 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.4% | 607.9ms |     482 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:233933` |
| 11.0% | 465.4ms |     369 | `f`                   | `./node_modules/d3/dist/d3.min.js:2:233501` |
|  8.1% | 341.8ms |     271 | `a`                   | `./node_modules/d3/dist/d3.min.js:2:231054` |
|  7.4% | 311.5ms |     247 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:231215` |
|  3.2% | 136.2ms |     108 | `(garbage collector)` | `<unknown>`                                 |
|  2.8% | 119.8ms |      95 | `Fc.addAll`           | `./node_modules/d3/dist/d3.min.js:2:103087` |
|  2.2% |  93.3ms |      74 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  1.9% |  79.5ms |      63 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:235751` |
|  1.9% |  79.5ms |      63 | `p`                   | `./node_modules/d3/dist/d3.min.js:2:77576`  |
|  1.8% |  74.4ms |      59 | `Fc.visit`            | `./node_modules/d3/dist/d3.min.js:2:105681` |
|  1.6% |  66.8ms |      53 | `createElementNS`     | `<unknown>`                                 |
|  1.6% |  65.6ms |      52 | `p`                   | `./node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.5% |  61.8ms |      49 | `Fc.visitAfter`       | `./node_modules/d3/dist/d3.min.js:2:106049` |
|  1.4% |  59.3ms |      47 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.2% |  49.2ms |      39 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18042`  |
|  1.1% |  47.9ms |      38 | `Jh`                  | `./node_modules/d3/dist/d3.min.js:2:131218` |
|  0.9% |  39.1ms |      31 | `J`                   | `./node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.9% |  37.8ms |      30 | `u`                   | `./node_modules/d3/dist/d3.min.js:2:231519` |
|  0.7% |  27.7ms |      22 | `l`                   | `./node_modules/d3/dist/d3.min.js:2:233696` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function        | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 23.1% | 977.5ms |     775 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.4% | 607.9ms |     482 | `h`             | `./node_modules/d3/dist/d3.min.js:2:233933` |
| 11.0% | 465.4ms |     369 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233501` |
|  8.1% | 341.8ms |     271 | `a`             | `./node_modules/d3/dist/d3.min.js:2:231054` |
|  7.4% | 311.5ms |     247 | `g`             | `./node_modules/d3/dist/d3.min.js:2:231215` |
|  2.8% | 119.8ms |      95 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103087` |
|  2.2% |  93.3ms |      74 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  1.9% |  79.5ms |      63 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:235751` |
|  1.9% |  79.5ms |      63 | `p`             | `./node_modules/d3/dist/d3.min.js:2:77576`  |
|  1.8% |  74.4ms |      59 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105681` |
|  1.6% |  65.6ms |      52 | `p`             | `./node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.5% |  61.8ms |      49 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106049` |
|  1.4% |  59.3ms |      47 | `g`             | `./node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.2% |  49.2ms |      39 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18042`  |
|  1.1% |  47.9ms |      38 | `Jh`            | `./node_modules/d3/dist/d3.min.js:2:131218` |
|  0.9% |  39.1ms |      31 | `J`             | `./node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.9% |  37.8ms |      30 | `u`             | `./node_modules/d3/dist/d3.min.js:2:231519` |
|  0.7% |  27.7ms |      22 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233696` |
|  0.6% |  26.5ms |      21 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:2114`   |
|  0.5% |  20.2ms |      16 | `g`             | `./node_modules/d3/dist/d3.min.js:2:108341` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 3.2% | 136.2ms |     108 | `(garbage collector)` | `<unknown>` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 66.8ms |      53 | `createElementNS`         | `<unknown>` |
| 0.6% | 24.0ms |      19 | `(program)`               | `<unknown>` |
| 0.4% | 16.4ms |      13 | `removeChild`             | `<unknown>` |
| 0.2% |  8.8ms |       7 | `appendChild`             | `<unknown>` |
| 0.2% |  8.8ms |       7 | `insertBefore`            | `<unknown>` |
| 0.1% |  5.0ms |       4 | `compareDocumentPosition` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 977.5ms |     775 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 607.9ms |     482 | `./node_modules/d3/dist/d3.min.js:2` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 465.4ms |     369 | `./node_modules/d3/dist/d3.min.js:2` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 341.8ms |     271 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231215`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 311.5ms |     247 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 119.8ms |      95 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 93.3ms |      74 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 79.5ms |      63 | `./node_modules/d3/dist/d3.min.js:2` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 79.5ms |      63 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 74.4ms |      59 | `./node_modules/d3/dist/d3.min.js:2` |

##### `createElementNS` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 66.8ms |      53 | 2        |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 65.6ms |      52 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 61.8ms |      49 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 59.3ms |      47 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 49.2ms |      39 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Jh` (`./node_modules/d3/dist/d3.min.js:2:131218`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 47.9ms |      38 | `./node_modules/d3/dist/d3.min.js:2` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 39.1ms |      31 | `./node_modules/d3/dist/d3.min.js:2` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 37.8ms |      30 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233696`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 27.7ms |      22 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 26.5ms |      21 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:108341`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 20.2ms |      16 | `./node_modules/d3/dist/d3.min.js:2` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 16.4ms |      13 | 2        |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 8.8ms |       7 | 2        |

##### `insertBefore` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 8.8ms |       7 | 2        |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.0ms |       4 | 2        |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Caller | Location                                   |
| -----: | ------: | ------: | ------ | ------------------------------------------ |
| 100.0% | 977.5ms |     775 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 96.1% | 584.0ms |     463 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105681` |
|  0.8% |   5.0ms |       4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 465.4ms |     369 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 99.6% | 340.5ms |     270 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |
|  0.4% |   1.3ms |       1 | `h`           | `./node_modules/d3/dist/d3.min.js:2:235656` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231215`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 91.5% | 285.0ms |     226 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105681` |
|  3.2% |  10.1ms |       8 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

|     % |    Time | Samples | Caller | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 94.7% | 113.5ms |      90 | `$c`   | `./node_modules/d3/dist/d3.min.js:2:102050` |
|  3.2% |   3.8ms |       3 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501` |
|  2.1% |   2.5ms |       2 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Caller | Location                                   |
| ----: | -----: | ------: | ------ | ------------------------------------------ |
| 64.9% | 60.5ms |      48 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 35.1% | 32.8ms |      26 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

|      % |   Time | Samples | Caller | Location                                    |
| -----: | -----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 79.5ms |      63 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235656` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

|     % |   Time | Samples | Caller        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 98.4% | 78.2ms |      62 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|  1.6% |  1.3ms |       1 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|     % |   Time | Samples | Caller | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 54.2% | 40.4ms |      32 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501` |
| 45.8% | 34.1ms |      27 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054` |

##### `createElementNS` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 98.1% | 65.6ms |      52 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |
|  1.9% |  1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16431` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Caller        | Location                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 65.6ms |      52 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

|     % |   Time | Samples | Caller | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 65.3% | 40.4ms |      32 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501` |
| 34.7% | 21.4ms |      17 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Caller        | Location                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 59.3ms |      47 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

|     % |   Time | Samples | Caller | Location                                   |
| ----: | -----: | ------: | ------ | ------------------------------------------ |
| 51.3% | 25.2ms |      20 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 48.7% | 24.0ms |      19 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `Jh` (`./node_modules/d3/dist/d3.min.js:2:131218`)

|      % |   Time | Samples | Caller  | Location                                    |
| -----: | -----: | ------: | ------- | ------------------------------------------- |
| 100.0% | 47.9ms |      38 | `point` | `./node_modules/d3/dist/d3.min.js:2:131542` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Caller | Location                                    |
| -----: | -----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 39.1ms |      31 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223550` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

|      % |   Time | Samples | Caller          | Location                                    |
| -----: | -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 37.8ms |      30 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106049` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233696`)

|     % |   Time | Samples | Caller          | Location                                    |
| ----: | -----: | ------: | --------------- | ------------------------------------------- |
| 95.5% | 26.5ms |      21 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106049` |
|  4.5% |  1.3ms |       1 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233501` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

|     % |   Time | Samples | Caller | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 57.1% | 15.1ms |      12 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |
| 42.9% | 11.4ms |       9 | `g`    | `./node_modules/d3/dist/d3.min.js:2:1758` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:108341`)

|      % |   Time | Samples | Caller | Location                                    |
| -----: | -----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 20.2ms |      16 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109939` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location                                   |
| -----: | -----: | ------: | -------- | ------------------------------------------ |
| 100.0% | 16.4ms |      13 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.8ms |       7 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller         | Location                                   |
| ----: | ----: | ------: | -------------- | ------------------------------------------ |
| 71.4% | 6.3ms |       5 | `appendChild`  | `./node_modules/d3/dist/d3.min.js:2:21447` |
| 28.6% | 2.5ms |       2 | `insertBefore` | `./node_modules/d3/dist/d3.min.js:2:21520` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location                                   |
| -----: | ----: | ------: | ------- | ------------------------------------------ |
| 100.0% | 5.0ms |       4 | `order` | `./node_modules/d3/dist/d3.min.js:2:24713` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                       | Location                                    |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 95.0% |   4.02s |   3,185 | `(anonymous)`                  | `./run.mjs:1:1`                             |
| 94.9% |   4.01s |   3,182 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                       |
| 88.2% |   3.73s |   2,956 | `chartLayouts`                 | `./workload.mjs:116:24`                     |
| 50.7% |   2.15s |   1,701 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:235656` |
| 50.7% |   2.14s |   1,698 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:235751` |
| 30.5% |   1.29s |   1,021 | `d`                            | `./node_modules/d3/dist/d3.min.js:2:223550` |
| 28.9% |   1.22s |     970 | `f`                            | `./node_modules/d3/dist/d3.min.js:2:233501` |
| 25.6% |   1.08s |     858 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:76982`  |
| 25.6% |   1.08s |     858 | `i`                            | `./node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.6% |   1.08s |     857 | `o`                            | `./node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.4% |   1.07s |     850 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 22.3% | 943.4ms |     748 | `Fc.visit`                     | `./node_modules/d3/dist/d3.min.js:2:105681` |
| 19.1% | 807.2ms |     640 | `a`                            | `./node_modules/d3/dist/d3.min.js:2:231054` |
| 14.4% | 607.9ms |     482 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:233933` |
|  7.4% | 311.5ms |     247 | `g`                            | `./node_modules/d3/dist/d3.min.js:2:231215` |
|  5.7% | 240.9ms |     191 | `attr`                         | `./node_modules/d3/dist/d3.min.js:2:25709`  |
|  4.4% | 184.1ms |     146 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 160.2ms |     127 | `each`                         | `./node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.8% | 160.2ms |     127 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:223199` |
|  3.6% | 152.6ms |     121 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:1144`   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function      | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 50.7% |   2.15s |   1,701 | `h`           | `./node_modules/d3/dist/d3.min.js:2:235656` |
| 50.7% |   2.14s |   1,698 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |
| 30.5% |   1.29s |   1,021 | `d`           | `./node_modules/d3/dist/d3.min.js:2:223550` |
| 28.9% |   1.22s |     970 | `f`           | `./node_modules/d3/dist/d3.min.js:2:233501` |
| 25.6% |   1.08s |     858 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982`  |
| 25.6% |   1.08s |     858 | `i`           | `./node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.6% |   1.08s |     857 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.4% |   1.07s |     850 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 22.3% | 943.4ms |     748 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105681` |
| 19.1% | 807.2ms |     640 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231054` |
| 14.4% | 607.9ms |     482 | `h`           | `./node_modules/d3/dist/d3.min.js:2:233933` |
|  7.4% | 311.5ms |     247 | `g`           | `./node_modules/d3/dist/d3.min.js:2:231215` |
|  5.7% | 240.9ms |     191 | `attr`        | `./node_modules/d3/dist/d3.min.js:2:25709`  |
|  4.4% | 184.1ms |     146 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 160.2ms |     127 | `each`        | `./node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.8% | 160.2ms |     127 | `h`           | `./node_modules/d3/dist/d3.min.js:2:223199` |
|  3.6% | 152.6ms |     121 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144`   |
|  3.5% | 147.6ms |     117 | `$c`          | `./node_modules/d3/dist/d3.min.js:2:102050` |
|  3.2% | 133.7ms |     106 | `call`        | `./node_modules/d3/dist/d3.min.js:2:25192`  |
|  3.1% | 132.4ms |     105 | `Fc.addAll`   | `./node_modules/d3/dist/d3.min.js:2:103087` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 3.2% | 136.2ms |     108 | `(garbage collector)` | `<unknown>` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 66.8ms |      53 | `createElementNS`         | `<unknown>` |
| 0.6% | 24.0ms |      19 | `(program)`               | `<unknown>` |
| 0.4% | 16.4ms |      13 | `removeChild`             | `<unknown>` |
| 0.2% |  8.8ms |       7 | `appendChild`             | `<unknown>` |
| 0.2% |  8.8ms |       7 | `insertBefore`            | `<unknown>` |
| 0.1% |  5.0ms |       4 | `compareDocumentPosition` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|      % |  Time | Samples | Caller        | Location        |
| -----: | ----: | ------: | ------------- | --------------- |
| 100.0% | 4.01s |   3,182 | `(anonymous)` | `./run.mjs:1:1` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|      % |  Time | Samples | Caller                         | Location              |
| -----: | ----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 3.73s |   2,956 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:235656`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 2.15s |   1,701 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

|      % |  Time | Samples | Caller | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 2.14s |   1,698 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235656` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:223550`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 1.29s |   1,021 | `chartLayouts` | `./workload.mjs:116:24` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 1.22s |     970 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

|      % |  Time | Samples | Caller | Location                                   |
| -----: | ----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 1.08s |     858 | `i`    | `./node_modules/d3/dist/d3.min.js:2:76807` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

|      % |  Time | Samples | Caller | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 1.08s |     858 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223550` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.08s |     857 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|      % |  Time | Samples | Caller | Location                                   |
| -----: | ----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 1.07s |     850 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|     % |    Time | Samples | Caller | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 66.2% | 624.3ms |     495 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501` |
| 33.8% | 319.1ms |     253 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 99.8% | 805.9ms |     639 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |
|  0.2% |   1.3ms |       1 | `h`           | `./node_modules/d3/dist/d3.min.js:2:235656` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 96.1% | 584.0ms |     463 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105681` |
|  0.8% |   5.0ms |       4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231215`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 91.5% | 285.0ms |     226 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105681` |
|  3.2% |  10.1ms |       8 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

|     % |    Time | Samples | Caller                         | Location                                   |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------ |
| 64.4% | 155.1ms |     123 | `chartLayouts`                 | `./workload.mjs:116:24`                    |
| 17.8% |  42.9ms |      34 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
|  6.3% |  15.1ms |      12 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |
|  5.8% |  13.9ms |      11 | `(anonymous)`                  | `./workload.mjs:195:13`                    |
|  5.8% |  13.9ms |      11 | `chartBreakdowns`              | `./workload.mjs:39:27`                     |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|     % |    Time | Samples | Caller | Location                                   |
| ----: | ------: | ------: | ------ | ------------------------------------------ |
| 63.0% | 116.0ms |      92 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 37.0% |  68.1ms |      54 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `each` (`./node_modules/d3/dist/d3.min.js:2:25558`)

|     % |    Time | Samples | Caller   | Location                                   |
| ----: | ------: | ------: | -------- | ------------------------------------------ |
| 89.8% | 143.8ms |     114 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  9.4% |  15.1ms |      12 | `text`   | `./node_modules/d3/dist/d3.min.js:2:26408` |
|  0.8% |   1.3ms |       1 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223199`)

|      % |    Time | Samples | Caller | Location                                    |
| -----: | ------: | ------: | ------ | ------------------------------------------- |
| 100.0% | 160.2ms |     127 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223550` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

|      % |    Time | Samples | Caller | Location                                    |
| -----: | ------: | ------: | ------ | ------------------------------------------- |
| 100.0% | 152.6ms |     121 | `h`    | `./node_modules/d3/dist/d3.min.js:2:223199` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

|     % |   Time | Samples | Caller        | Location                                    |
| ----: | -----: | ------: | ------------- | ------------------------------------------- |
| 57.3% | 84.5ms |      67 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231054` |
| 41.9% | 61.8ms |      49 | `f`           | `./node_modules/d3/dist/d3.min.js:2:233501` |
|  0.9% |  1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |

##### `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)

|     % |    Time | Samples | Caller                         | Location               |
| ----: | ------: | ------: | ------------------------------ | ---------------------- |
| 94.3% | 126.1ms |     100 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`  |
|  5.7% |   7.6ms |       6 | `chartBreakdowns`              | `./workload.mjs:39:27` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

|     % |    Time | Samples | Caller | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 95.2% | 126.1ms |     100 | `$c`   | `./node_modules/d3/dist/d3.min.js:2:102050` |
|  2.9% |   3.8ms |       3 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501` |
|  1.9% |   2.5ms |       2 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054` |

##### `createElementNS` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 98.1% | 65.6ms |      52 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |
|  1.9% |  1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16431` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location                                   |
| -----: | -----: | ------: | -------- | ------------------------------------------ |
| 100.0% | 16.4ms |      13 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.8ms |       7 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller         | Location                                   |
| ----: | ----: | ------: | -------------- | ------------------------------------------ |
| 71.4% | 6.3ms |       5 | `appendChild`  | `./node_modules/d3/dist/d3.min.js:2:21447` |
| 28.6% | 2.5ms |       2 | `insertBefore` | `./node_modules/d3/dist/d3.min.js:2:21520` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location                                   |
| -----: | ----: | ------: | ------- | ------------------------------------------ |
| 100.0% | 5.0ms |       4 | `order` | `./node_modules/d3/dist/d3.min.js:2:24713` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./run.mjs:1:1`)

|     % |  Time | Samples | Callee                         | Location              |
| ----: | ----: | ------: | ------------------------------ | --------------------- |
| 99.9% | 4.01s |   3,182 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|     % |    Time | Samples | Callee            | Location                                   |
| ----: | ------: | ------: | ----------------- | ------------------------------------------ |
| 92.9% |   3.73s |   2,956 | `chartLayouts`    | `./workload.mjs:116:24`                    |
|  3.1% | 126.1ms |     100 | `call`            | `./node_modules/d3/dist/d3.min.js:2:25192` |
|  1.4% |  55.5ms |      44 | `chartBreakdowns` | `./workload.mjs:39:27`                     |
|  1.1% |  44.1ms |      35 | `join`            | `./node_modules/d3/dist/d3.min.js:2:24162` |
|  0.6% |  25.2ms |      20 | `remove`          | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|     % |    Time | Samples | Callee | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 57.5% |   2.15s |   1,701 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235656` |
| 34.5% |   1.29s |   1,021 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223550` |
|  4.2% | 155.1ms |     123 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709`  |
|  1.2% |  45.4ms |      36 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162`  |
|  0.7% |  27.7ms |      22 | `from` | `./node_modules/d3/dist/d3.min.js:2:94282`  |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:235656`)

|     % |  Time | Samples | Callee        | Location                                    |
| ----: | ----: | ------: | ------------- | ------------------------------------------- |
| 99.8% | 2.14s |   1,698 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751` |
|  0.1% | 1.3ms |       1 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231054` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

|     % |    Time | Samples | Callee | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 57.1% |   1.22s |     970 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501` |
| 37.6% | 805.9ms |     639 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054` |
|  0.6% |  12.6ms |      10 | `l`    | `./node_modules/d3/dist/d3.min.js:2:232151` |
|  0.5% |  10.1ms |       8 | `g`    | `./node_modules/d3/dist/d3.min.js:2:231215` |
|  0.2% |   5.0ms |       4 | `h`    | `./node_modules/d3/dist/d3.min.js:2:233933` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:223550`)

|     % |    Time | Samples | Callee        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 84.0% |   1.08s |     858 | `i`           | `./node_modules/d3/dist/d3.min.js:2:76807`  |
| 12.4% | 160.2ms |     127 | `h`           | `./node_modules/d3/dist/d3.min.js:2:223199` |
|  3.0% |  39.1ms |      31 | `J`           | `./node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.4% |   5.0ms |       4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:223701` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

|     % |    Time | Samples | Callee          | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 51.0% | 624.3ms |     495 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105681` |
|  5.5% |  66.8ms |      53 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106049` |
|  5.1% |  61.8ms |      49 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102050` |
|  0.3% |   3.8ms |       3 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103087` |
|  0.1% |   1.3ms |       1 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233696` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

|     % |  Time | Samples | Callee | Location                                   |
| ----: | ----: | ------: | ------ | ------------------------------------------ |
| 99.9% | 1.08s |     857 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

|      % |  Time | Samples | Callee        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.08s |     858 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

|     % |  Time | Samples | Callee        | Location                                   |
| ----: | ----: | ------: | ------------- | ------------------------------------------ |
| 99.2% | 1.07s |     850 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|  0.1% | 1.3ms |       1 | `au`          | `./node_modules/d3/dist/d3.min.js:2:79110` |
|  0.1% | 1.3ms |       1 | `p`           | `./node_modules/d3/dist/d3.min.js:2:77576` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|    % |   Time | Samples | Callee | Location                                   |
| ---: | -----: | ------: | ------ | ------------------------------------------ |
| 8.7% | 93.3ms |      74 | `p`    | `./node_modules/d3/dist/d3.min.js:2:77576` |
| 0.1% |  1.3ms |       1 | `au`   | `./node_modules/d3/dist/d3.min.js:2:79110` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|     % |    Time | Samples | Callee | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 61.9% | 584.0ms |     463 | `h`    | `./node_modules/d3/dist/d3.min.js:2:233933` |
| 30.2% | 285.0ms |     226 | `g`    | `./node_modules/d3/dist/d3.min.js:2:231215` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

|     % |    Time | Samples | Callee          | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 39.5% | 319.1ms |     253 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105681` |
| 10.5% |  84.5ms |      67 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102050` |
|  7.3% |  59.3ms |      47 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106049` |
|  0.3% |   2.5ms |       2 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103087` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

|     % |    Time | Samples | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 59.7% | 143.8ms |     114 | `each`        | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 28.3% |  68.1ms |      54 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |
|  9.9% |  24.0ms |      19 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042` |
|  1.0% |   2.5ms |       2 | `It`          | `./node_modules/d3/dist/d3.min.js:2:16093` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Callee        | Location                                    |
| ----: | -----: | ------: | ------------- | ------------------------------------------- |
| 41.1% | 75.7ms |      60 | `a`           | `./node_modules/d3/dist/d3.min.js:2:244493` |
|  2.7% |  5.0ms |       4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:13444`  |
|  2.1% |  3.8ms |       3 | `(anonymous)` | `./workload.mjs:193:9`                      |
|  1.4% |  2.5ms |       2 | `f`           | `./node_modules/d3/dist/d3.min.js:2:218226` |
|  0.7% |  1.3ms |       1 | `(anonymous)` | `./workload.mjs:199:25`                     |

##### `each` (`./node_modules/d3/dist/d3.min.js:2:25558`)

|     % |    Time | Samples | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 72.4% | 116.0ms |      92 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |
| 15.7% |  25.2ms |      20 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042` |
|  9.4% |  15.1ms |      12 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |
|  0.8% |   1.3ms |       1 | `In`          | `./node_modules/d3/dist/d3.min.js:2:20104` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223199`)

|     % |    Time | Samples | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 95.3% | 152.6ms |     121 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144`  |
|  0.8% |   1.3ms |       1 | `lu`          | `./node_modules/d3/dist/d3.min.js:2:79374` |
|  0.8% |   1.3ms |       1 | `fu`          | `./node_modules/d3/dist/d3.min.js:2:79320` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

|     % |   Time | Samples | Callee | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 52.9% | 80.7ms |      64 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |
| 46.3% | 70.6ms |      56 | `g`    | `./node_modules/d3/dist/d3.min.js:2:1758` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

|     % |    Time | Samples | Callee      | Location                                    |
| ----: | ------: | ------: | ----------- | ------------------------------------------- |
| 85.5% | 126.1ms |     100 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103087` |
|  2.6% |   3.8ms |       3 | `Xc`        | `./node_modules/d3/dist/d3.min.js:2:106643` |
|  1.7% |   2.5ms |       2 | `Ic`        | `./node_modules/d3/dist/d3.min.js:2:102458` |
|  0.9% |   1.3ms |       1 | `Gc`        | `./node_modules/d3/dist/d3.min.js:2:106669` |

##### `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)

|     % |   Time | Samples | Callee        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 62.3% | 83.2ms |      66 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208` |
| 27.4% | 36.6ms |      29 | `(anonymous)` | `./workload.mjs:201:13`                    |
| 10.4% | 13.9ms |      11 | `(anonymous)` | `./workload.mjs:195:13`                    |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

|    % |  Time | Samples | Callee     | Location                                    |
| ---: | ----: | ------: | ---------- | ------------------------------------------- |
| 3.8% | 5.0ms |       4 | `kc`       | `./node_modules/d3/dist/d3.min.js:2:101394` |
| 1.9% | 2.5ms |       2 | `Gc`       | `./node_modules/d3/dist/d3.min.js:2:106669` |
| 1.9% | 2.5ms |       2 | `Oc`       | `./node_modules/d3/dist/d3.min.js:2:102489` |
| 1.0% | 1.3ms |       1 | `Fc.cover` | `./node_modules/d3/dist/d3.min.js:2:103436` |
| 1.0% | 1.3ms |       1 | `Xc`       | `./node_modules/d3/dist/d3.min.js:2:106643` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32) ← `(anonymous)` (`./run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.1% | 977.5ms |     775 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223550)                                                        |
| 13.8% | 584.0ms |     463 | `h` (`./node_modules/d3/dist/d3.min.js:2:233933`) ← `Fc.visit` (2:105681) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                       |
| 11.0% | 465.4ms |     369 | `f` (`./node_modules/d3/dist/d3.min.js:2:233501`) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                                                |
|  8.1% | 340.5ms |     270 | `a` (`./node_modules/d3/dist/d3.min.js:2:231054`) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                                                |
|  6.7% | 285.0ms |     226 | `g` (`./node_modules/d3/dist/d3.min.js:2:231215`) ← `Fc.visit` (2:105681) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                       |
|  1.9% |  79.5ms |      63 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`) ← `h` (2:235656)                                                                                                                 |
|  1.8% |  78.2ms |      62 | `p` (`./node_modules/d3/dist/d3.min.js:2:77576`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223550)                                        |
|  1.6% |  68.1ms |      54 | `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`) ← `$c` (2:102050) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                     |
|  1.6% |  65.6ms |      52 | `p` (`./node_modules/d3/dist/d3.min.js:2:1697`) ← `(anonymous)` (2:1144) ← `h` (2:223199) ← `d` (2:223550)                                                                                   |
|  1.4% |  59.3ms |      47 | `g` (`./node_modules/d3/dist/d3.min.js:2:1758`) ← `(anonymous)` (2:1144) ← `h` (2:223199) ← `d` (2:223550)                                                                                   |
|  1.1% |  45.4ms |      36 | `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`) ← `$c` (2:102050) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                     |
|  1.0% |  40.4ms |      32 | `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                        |
|  1.0% |  40.4ms |      32 | `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                   |
|  0.9% |  39.1ms |      31 | `J` (`./node_modules/d3/dist/d3.min.js:2:8205`) ← `d` (2:223550)                                                                                                                             |
|  0.9% |  37.8ms |      30 | `u` (`./node_modules/d3/dist/d3.min.js:2:231519`) ← `Fc.visitAfter` (2:106049) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                  |
|  0.9% |  36.6ms |      29 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `each` (2:25558) ← `attr` (2:25709)                                                                                             |
|  0.8% |  34.1ms |      27 | `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                        |
|  0.7% |  30.3ms |      24 | `createElementNS` ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162)                        |
|  0.6% |  26.5ms |      21 | `l` (`./node_modules/d3/dist/d3.min.js:2:233696`) ← `Fc.visitAfter` (2:106049) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                  |
|  0.6% |  25.2ms |      20 | `Jh` (`./node_modules/d3/dist/d3.min.js:2:131218`) ← `point` (2:131542) ← `Yf` (2:112811) ← `Lf` (2:112904) ← `a` (2:244493) ← `(anonymous)` (2:18176) ← `each` (2:25558) ← `attr` (2:25709) |

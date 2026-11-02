# CPU profile

Took 4.22s over 3,335 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 92.8% |   3.91s |   3,094 |
| Native             |  3.1% | 132.8ms |     105 |
| Garbage collector  |  2.8% | 116.4ms |      92 |
| Ours               |  1.1% |  45.5ms |      36 |
| Idle               |  0.2% |   8.9ms |       7 |
| Regular expression | <0.1% |   1.3ms |       1 |

Paths starting with `./` or `../` are relative to `http://127.0.0.1:52789/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 4.02s (95.4%) (anonymous) at ./run.mjs:1:1
│   └── 4.02s (95.3%) globalThis.buildAndRetainDom at ./workload.mjs:1:32
│       ├── 3.73s (88.5%) chartLayouts at 116:24
│       │   ├── 2.14s (50.7%) h at ./node_modules/d3/dist/d3.min.js:2:235607
│       │   │   └── 2.14s (50.6%, self 2.1%) (anonymous) at 2:235702
│       │   │       ├── 1.25s (29.7%, self 11.6%) f at 2:233452
│       │   │       │   ├── 609.7ms (14.5%) Fc.visit at 2:105700
│       │   │       │   │   └── 589.5ms (14.0%, self 14.7% globally) h at 2:233884
│       │   │       │   ├── 82.2ms (1.9%, self 1.0%, self 1.6% globally) Fc.visitAfter at 2:106068
│       │   │       │   │   └── 41.7ms (1.0%) l at 2:233647
│       │   │       │   └── 69.6ms (1.6%) $c at 2:102069
│       │   │       │       └── 65.8ms (1.6%, self 1.4%, self 2.6% globally) Fc.addAll at 2:103106
│       │   │       ├── 759.0ms (18.0%, self 8.1%) a at 2:231005
│       │   │       │   ├── 304.9ms (7.2%) Fc.visit at 2:105700
│       │   │       │   │   └── 290.9ms (6.9%) g at 2:231166
│       │   │       │   ├── 60.7ms (1.4%) $c at 2:102069 …
│       │   │       │   └── 50.6ms (1.2%, self 0.7%) Fc.visitAfter at 2:106068
│       │   │       │       └── 22.8ms (0.5%) u at 2:231470
│       │   │       └── 16.4ms (0.4%) l at 2:232102
│       │   ├── 1.29s (30.5%) d at ./node_modules/d3/dist/d3.min.js:2:223501
│       │   │   ├── … 1.06s (25.2%, self 22.5%) (anonymous) at ./node_modules/d3/dist/d3.min.js:2:77113
│       │   │   │   └── 112.6ms (2.7%, self 2.4%) p at 2:77577
│       │   │   ├── 156.9ms (3.7%) h at 2:223150
│       │   │   │   └── 155.6ms (3.7%) (anonymous) at 2:1144
│       │   │   │       ├── 77.2ms (1.8%, self 1.5%) p at 2:1697
│       │   │   │       │   └── 13.9ms (0.3%) (anonymous) at 2:2114
│       │   │   │       └── 69.6ms (1.6%, self 1.5%) g at 2:1758
│       │   │   └── 53.1ms (1.3%) J at 2:8205
│       │   ├── 180.9ms (4.3%) attr at ./node_modules/d3/dist/d3.min.js:2:25709
│       │   │   ├── 105.0ms (2.5%) each at 2:25558
│       │   │   │   └── 92.3ms (2.2%, self 1.0%, self 2.8% globally) (anonymous) at 2:18176
│       │   │   │       └── … 40.5ms (1.0%) point at ./node_modules/d3/dist/d3.min.js:2:131561
│       │   │   │           └── 29.1ms (0.7%) Jh at 2:131237
│       │   │   └── 70.8ms (1.7%) 3 more callees, led by (1.5%) (anonymous) at 2:18176
│       │   ├── … 25.3ms (0.6%, self 1.6% globally) createElementNS
│       │   └── 73.4ms (1.7%) 15 more callees, led by (0.4%) from at ./node_modules/d3/dist/d3.min.js:2:94301
│       └── 282.1ms (6.7%) 13 more callees, led by (3.1%) call at ./node_modules/d3/dist/d3.min.js:2:25192
├── 116.4ms (2.8%) (garbage collector)
├── 27.8ms (0.7%) (program)
└── 51.9ms (1.2%) 10 more root frames, led by (0.4%) h at ./node_modules/d3/dist/d3.min.js:2:233884
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function              | Location                                    |
| ----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 22.5% | 947.5ms |     749 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.7% | 618.6ms |     489 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:233884` |
| 11.6% | 490.8ms |     388 | `f`                   | `./node_modules/d3/dist/d3.min.js:2:233452` |
|  8.1% | 342.8ms |     271 | `a`                   | `./node_modules/d3/dist/d3.min.js:2:231005` |
|  7.4% | 311.2ms |     246 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:231166` |
|  2.8% | 120.2ms |      95 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  2.8% | 116.4ms |      92 | `(garbage collector)` | `<unknown>`                                 |
|  2.6% | 108.8ms |      86 | `Fc.addAll`           | `./node_modules/d3/dist/d3.min.js:2:103106` |
|  2.4% | 101.2ms |      80 | `p`                   | `./node_modules/d3/dist/d3.min.js:2:77577`  |
|  2.1% |  87.3ms |      69 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:235702` |
|  1.6% |  68.3ms |      54 | `createElementNS`     | `<unknown>`                                 |
|  1.6% |  68.3ms |      54 | `Fc.visitAfter`       | `./node_modules/d3/dist/d3.min.js:2:106068` |
|  1.5% |  64.5ms |      51 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.5% |  63.2ms |      50 | `p`                   | `./node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.3% |  53.1ms |      42 | `J`                   | `./node_modules/d3/dist/d3.min.js:2:8205`   |
|  1.1% |  46.8ms |      37 | `Jh`                  | `./node_modules/d3/dist/d3.min.js:2:131237` |
|  1.0% |  44.3ms |      35 | `l`                   | `./node_modules/d3/dist/d3.min.js:2:233647` |
|  0.9% |  36.7ms |      29 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18042`  |
|  0.8% |  34.2ms |      27 | `Fc.visit`            | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  0.7% |  27.8ms |      22 | `(program)`           | `<unknown>`                                 |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function        | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 22.5% | 947.5ms |     749 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.7% | 618.6ms |     489 | `h`             | `./node_modules/d3/dist/d3.min.js:2:233884` |
| 11.6% | 490.8ms |     388 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452` |
|  8.1% | 342.8ms |     271 | `a`             | `./node_modules/d3/dist/d3.min.js:2:231005` |
|  7.4% | 311.2ms |     246 | `g`             | `./node_modules/d3/dist/d3.min.js:2:231166` |
|  2.8% | 120.2ms |      95 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  2.6% | 108.8ms |      86 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103106` |
|  2.4% | 101.2ms |      80 | `p`             | `./node_modules/d3/dist/d3.min.js:2:77577`  |
|  2.1% |  87.3ms |      69 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:235702` |
|  1.6% |  68.3ms |      54 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068` |
|  1.5% |  64.5ms |      51 | `g`             | `./node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.5% |  63.2ms |      50 | `p`             | `./node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.3% |  53.1ms |      42 | `J`             | `./node_modules/d3/dist/d3.min.js:2:8205`   |
|  1.1% |  46.8ms |      37 | `Jh`            | `./node_modules/d3/dist/d3.min.js:2:131237` |
|  1.0% |  44.3ms |      35 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233647` |
|  0.9% |  36.7ms |      29 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18042`  |
|  0.8% |  34.2ms |      27 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  0.5% |  22.8ms |      18 | `u`             | `./node_modules/d3/dist/d3.min.js:2:231470` |
|  0.4% |  19.0ms |      15 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:2114`   |
|  0.4% |  16.4ms |      13 | `l`             | `./node_modules/d3/dist/d3.min.js:2:232102` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 68.3ms |      54 | `createElementNS`         | `<unknown>` |
| 0.7% | 27.8ms |      22 | `(program)`               | `<unknown>` |
| 0.3% | 12.6ms |      10 | `removeChild`             | `<unknown>` |
| 0.3% | 11.4ms |       9 | `insertBefore`            | `<unknown>` |
| 0.2% |  7.6ms |       6 | `appendChild`             | `<unknown>` |
| 0.1% |  5.1ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 2.8% | 116.4ms |      92 | `(garbage collector)` | `<unknown>` |

##### Ours

|     % |  Time | Samples | Function                       | Location                |
| ----: | ----: | ------: | ------------------------------ | ----------------------- |
|  0.2% | 8.9ms |       7 | `chartLayouts`                 | `./workload.mjs:116:24` |
|  0.2% | 7.6ms |       6 | `(anonymous)`                  | `./workload.mjs:205:13` |
|  0.1% | 5.1ms |       4 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
|  0.1% | 5.1ms |       4 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  0.1% | 5.1ms |       4 | `(anonymous)`                  | `./workload.mjs:82:7`   |
|  0.1% | 2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:124:13` |
|  0.1% | 2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:157:29` |
|  0.1% | 2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:139:12` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `./run.mjs:1:1`         |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:100:10` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:133:22` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:123:12` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:221:13` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 947.5ms |     749 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233884`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 618.6ms |     489 | `./node_modules/d3/dist/d3.min.js:2` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233452`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 490.8ms |     388 | `./node_modules/d3/dist/d3.min.js:2` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231005`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 342.8ms |     271 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231166`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 311.2ms |     246 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 120.2ms |      95 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103106`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 108.8ms |      86 | `./node_modules/d3/dist/d3.min.js:2` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77577`)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 101.2ms |      80 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235702`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 87.3ms |      69 | `./node_modules/d3/dist/d3.min.js:2` |

##### `createElementNS` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 68.3ms |      54 | 2        |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106068`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 68.3ms |      54 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 64.5ms |      51 | `./node_modules/d3/dist/d3.min.js:2` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 63.2ms |      50 | `./node_modules/d3/dist/d3.min.js:2` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 53.1ms |      42 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Jh` (`./node_modules/d3/dist/d3.min.js:2:131237`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 46.8ms |      37 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233647`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 44.3ms |      35 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 36.7ms |      29 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105700`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 34.2ms |      27 | `./node_modules/d3/dist/d3.min.js:2` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231470`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 22.8ms |      18 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 19.0ms |      15 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:232102`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 16.4ms |      13 | `./node_modules/d3/dist/d3.min.js:2` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 12.6ms |      10 | 2        |

##### `insertBefore` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 11.4ms |       9 | 2        |

##### `chartLayouts` (`./workload.mjs:116:24`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 42.9% | 3.8ms |       3 | `./workload.mjs:159` |
| 14.3% | 1.3ms |       1 | `./workload.mjs:155` |
| 14.3% | 1.3ms |       1 | `./workload.mjs:125` |
| 14.3% | 1.3ms |       1 | `./workload.mjs:121` |
| 14.3% | 1.3ms |       1 | `./workload.mjs:163` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.6ms |       6 | 2        |

##### `(anonymous)` (`./workload.mjs:205:13`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 3.8ms |       3 | `./workload.mjs:205` |
| 50.0% | 3.8ms |       3 | `./workload.mjs:206` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.1ms |       4 | 2        |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 2.5ms |       2 | `./workload.mjs:172` |
| 25.0% | 1.3ms |       1 | `./workload.mjs:223` |
| 25.0% | 1.3ms |       1 | `./workload.mjs:222` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 25.0% | 1.3ms |       1 | `./workload.mjs:104` |
| 25.0% | 1.3ms |       1 | `./workload.mjs:43`  |
| 25.0% | 1.3ms |       1 | `./workload.mjs:80`  |
| 25.0% | 1.3ms |       1 | `./workload.mjs:51`  |

##### `(anonymous)` (`./workload.mjs:82:7`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 5.1ms |       4 | `./workload.mjs:82` |

##### `(anonymous)` (`./workload.mjs:124:13`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 2.5ms |       2 | `./workload.mjs:124` |

##### `(anonymous)` (`./workload.mjs:157:29`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 2.5ms |       2 | `./workload.mjs:157` |

##### `(anonymous)` (`./workload.mjs:139:12`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 2.5ms |       2 | `./workload.mjs:139` |

##### `(anonymous)` (`./run.mjs:1:1`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 1.3ms |       1 | `./run.mjs:1` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.3ms |       1 | `./workload.mjs:100` |

##### `(anonymous)` (`./workload.mjs:133:22`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.3ms |       1 | `./workload.mjs:133` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.3ms |       1 | `./workload.mjs:123` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.3ms |       1 | `./workload.mjs:221` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Caller | Location                                   |
| -----: | ------: | ------: | ------ | ------------------------------------------ |
| 100.0% | 947.5ms |     749 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233884`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 95.3% | 589.5ms |     466 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  1.8% |  11.4ms |       9 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233452`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 490.8ms |     388 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231005`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 342.8ms |     271 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231166`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 93.5% | 290.9ms |     230 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  1.2% |   3.8ms |       3 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Caller | Location                                   |
| ----: | -----: | ------: | ------ | ------------------------------------------ |
| 53.7% | 64.5ms |      51 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 46.3% | 55.7ms |      44 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103106`)

|      % |    Time | Samples | Caller | Location                                    |
| -----: | ------: | ------: | ------ | ------------------------------------------- |
| 100.0% | 108.8ms |      86 | `$c`   | `./node_modules/d3/dist/d3.min.js:2:102069` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77577`)

|      % |    Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 101.2ms |      80 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235702`)

|      % |   Time | Samples | Caller | Location                                    |
| -----: | -----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 87.3ms |      69 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235607` |

##### `createElementNS` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 98.1% | 67.0ms |      53 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |
|  1.9% |  1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16431` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106068`)

|     % |   Time | Samples | Caller | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 59.3% | 40.5ms |      32 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 40.7% | 27.8ms |      22 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Caller        | Location                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 64.5ms |      51 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Caller        | Location                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 63.2ms |      50 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Caller | Location                                    |
| -----: | -----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 53.1ms |      42 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501` |

##### `Jh` (`./node_modules/d3/dist/d3.min.js:2:131237`)

|      % |   Time | Samples | Caller  | Location                                    |
| -----: | -----: | ------: | ------- | ------------------------------------------- |
| 100.0% | 46.8ms |      37 | `point` | `./node_modules/d3/dist/d3.min.js:2:131561` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233647`)

|     % |   Time | Samples | Caller          | Location                                    |
| ----: | -----: | ------: | --------------- | ------------------------------------------- |
| 94.3% | 41.7ms |      33 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068` |
|  2.9% |  1.3ms |       1 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

|     % |   Time | Samples | Caller | Location                                   |
| ----: | -----: | ------: | ------ | ------------------------------------------ |
| 48.3% | 17.7ms |      14 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 48.3% | 17.7ms |      14 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105700`)

|     % |   Time | Samples | Caller | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 59.3% | 20.2ms |      16 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 40.7% | 13.9ms |      11 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231470`)

|      % |   Time | Samples | Caller          | Location                                    |
| -----: | -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 22.8ms |      18 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

|     % |   Time | Samples | Caller | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 73.3% | 13.9ms |      11 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |
| 26.7% |  5.1ms |       4 | `g`    | `./node_modules/d3/dist/d3.min.js:2:1758` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:232102`)

|      % |   Time | Samples | Caller        | Location                                    |
| -----: | -----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 16.4ms |      13 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location                                   |
| -----: | -----: | ------: | -------- | ------------------------------------------ |
| 100.0% | 12.6ms |      10 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `insertBefore` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 11.4ms |       9 | `appendChild` | `./node_modules/d3/dist/d3.min.js:2:21447` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|      % |  Time | Samples | Caller                         | Location              |
| -----: | ----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 8.9ms |       7 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 7.6ms |       6 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `(anonymous)` (`./workload.mjs:205:13`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 7.6ms |       6 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location                                   |
| -----: | ----: | ------: | ------- | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `order` | `./node_modules/d3/dist/d3.min.js:2:24713` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|      % |  Time | Samples | Caller        | Location        |
| -----: | ----: | ------: | ------------- | --------------- |
| 100.0% | 5.1ms |       4 | `(anonymous)` | `./run.mjs:1:1` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|      % |  Time | Samples | Caller                         | Location              |
| -----: | ----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 5.1ms |       4 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `(anonymous)` (`./workload.mjs:82:7`)

|      % |  Time | Samples | Caller | Location                                  |
| -----: | ----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 5.1ms |       4 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `(anonymous)` (`./workload.mjs:124:13`)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 2.5ms |       2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142178` |

##### `(anonymous)` (`./workload.mjs:157:29`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 2.5ms |       2 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:139:12`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 2.5ms |       2 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|      % |  Time | Samples | Caller | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `f`    | `./node_modules/d3/dist/d3.min.js:2:194448` |

##### `(anonymous)` (`./workload.mjs:133:22`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142038` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                       | Location                                    |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 95.4% |   4.02s |   3,180 | `(anonymous)`                  | `./run.mjs:1:1`                             |
| 95.3% |   4.02s |   3,179 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                       |
| 88.5% |   3.73s |   2,952 | `chartLayouts`                 | `./workload.mjs:116:24`                     |
| 50.7% |   2.14s |   1,692 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:235607` |
| 50.6% |   2.14s |   1,688 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:235702` |
| 30.5% |   1.29s |   1,017 | `d`                            | `./node_modules/d3/dist/d3.min.js:2:223501` |
| 29.7% |   1.25s |     991 | `f`                            | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 25.4% |   1.07s |     847 | `i`                            | `./node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.3% |   1.07s |     845 | `o`                            | `./node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.3% |   1.07s |     845 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:76982`  |
| 25.2% |   1.06s |     839 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 21.7% | 914.6ms |     723 | `Fc.visit`                     | `./node_modules/d3/dist/d3.min.js:2:105700` |
| 18.0% | 759.0ms |     600 | `a`                            | `./node_modules/d3/dist/d3.min.js:2:231005` |
| 14.7% | 618.6ms |     489 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:233884` |
|  7.4% | 311.2ms |     246 | `g`                            | `./node_modules/d3/dist/d3.min.js:2:231166` |
|  6.1% | 259.3ms |     205 | `attr`                         | `./node_modules/d3/dist/d3.min.js:2:25709`  |
|  5.0% | 212.5ms |     168 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 159.4ms |     126 | `each`                         | `./node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.7% | 156.9ms |     124 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:223150` |
|  3.7% | 155.6ms |     123 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:1144`   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Third-party

|     % |    Time | Samples | Function        | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 50.7% |   2.14s |   1,692 | `h`             | `./node_modules/d3/dist/d3.min.js:2:235607` |
| 50.6% |   2.14s |   1,688 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:235702` |
| 30.5% |   1.29s |   1,017 | `d`             | `./node_modules/d3/dist/d3.min.js:2:223501` |
| 29.7% |   1.25s |     991 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 25.4% |   1.07s |     847 | `i`             | `./node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.3% |   1.07s |     845 | `o`             | `./node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.3% |   1.07s |     845 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:76982`  |
| 25.2% |   1.06s |     839 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:77113`  |
| 21.7% | 914.6ms |     723 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700` |
| 18.0% | 759.0ms |     600 | `a`             | `./node_modules/d3/dist/d3.min.js:2:231005` |
| 14.7% | 618.6ms |     489 | `h`             | `./node_modules/d3/dist/d3.min.js:2:233884` |
|  7.4% | 311.2ms |     246 | `g`             | `./node_modules/d3/dist/d3.min.js:2:231166` |
|  6.1% | 259.3ms |     205 | `attr`          | `./node_modules/d3/dist/d3.min.js:2:25709`  |
|  5.0% | 212.5ms |     168 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 159.4ms |     126 | `each`          | `./node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.7% | 156.9ms |     124 | `h`             | `./node_modules/d3/dist/d3.min.js:2:223150` |
|  3.7% | 155.6ms |     123 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:1144`   |
|  3.2% | 136.6ms |     108 | `call`          | `./node_modules/d3/dist/d3.min.js:2:25192`  |
|  3.1% | 132.8ms |     105 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068` |
|  3.1% | 130.3ms |     103 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102069` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 68.3ms |      54 | `createElementNS`         | `<unknown>` |
| 0.7% | 27.8ms |      22 | `(program)`               | `<unknown>` |
| 0.3% | 12.6ms |      10 | `removeChild`             | `<unknown>` |
| 0.3% | 11.4ms |       9 | `insertBefore`            | `<unknown>` |
| 0.2% |  7.6ms |       6 | `appendChild`             | `<unknown>` |
| 0.1% |  5.1ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 2.8% | 116.4ms |      92 | `(garbage collector)` | `<unknown>` |

##### Ours

|     % |   Time | Samples | Function                       | Location                |
| ----: | -----: | ------: | ------------------------------ | ----------------------- |
| 95.4% |  4.02s |   3,180 | `(anonymous)`                  | `./run.mjs:1:1`         |
| 95.3% |  4.02s |   3,179 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
| 88.5% |  3.73s |   2,952 | `chartLayouts`                 | `./workload.mjs:116:24` |
|  1.5% | 62.0ms |      49 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  1.0% | 43.0ms |      34 | `(anonymous)`                  | `./workload.mjs:201:13` |
|  0.8% | 32.9ms |      26 | `(anonymous)`                  | `./workload.mjs:185:13` |
|  0.7% | 31.6ms |      25 | `(anonymous)`                  | `./workload.mjs:205:13` |
|  0.5% | 20.2ms |      16 | `(anonymous)`                  | `./workload.mjs:195:13` |
|  0.2% |  7.6ms |       6 | `(anonymous)`                  | `./workload.mjs:82:7`   |
|  0.1% |  6.3ms |       5 | `(anonymous)`                  | `./workload.mjs:157:29` |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:124:13` |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:139:12` |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:193:9`  |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:221:13` |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:11:29`  |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:199:25` |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:100:10` |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:133:22` |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:123:12` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|      % |  Time | Samples | Caller        | Location        |
| -----: | ----: | ------: | ------------- | --------------- |
| 100.0% | 4.02s |   3,179 | `(anonymous)` | `./run.mjs:1:1` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|      % |  Time | Samples | Caller                         | Location              |
| -----: | ----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 3.73s |   2,952 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:235607`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 2.14s |   1,692 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235702`)

|      % |  Time | Samples | Caller | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 2.14s |   1,688 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235607` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:223501`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 1.29s |   1,017 | `chartLayouts` | `./workload.mjs:116:24` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233452`)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 1.25s |     991 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

|      % |  Time | Samples | Caller | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 1.07s |     847 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.07s |     845 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

|      % |  Time | Samples | Caller | Location                                   |
| -----: | ----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 1.07s |     845 | `i`    | `./node_modules/d3/dist/d3.min.js:2:76807` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|      % |  Time | Samples | Caller | Location                                   |
| -----: | ----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 1.06s |     839 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105700`)

|     % |    Time | Samples | Caller | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 66.7% | 609.7ms |     482 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 33.3% | 304.9ms |     241 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231005`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 759.0ms |     600 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233884`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 95.3% | 589.5ms |     466 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  1.8% |  11.4ms |       9 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231166`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 93.5% | 290.9ms |     230 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  1.2% |   3.8ms |       3 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

|     % |    Time | Samples | Caller                         | Location                                   |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------ |
| 69.8% | 180.9ms |     143 | `chartLayouts`                 | `./workload.mjs:116:24`                    |
|  9.3% |  24.0ms |      19 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
|  7.3% |  19.0ms |      15 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |
|  7.3% |  19.0ms |      15 | `(anonymous)`                  | `./workload.mjs:195:13`                    |
|  6.3% |  16.4ms |      13 | `chartBreakdowns`              | `./workload.mjs:39:27`                     |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|     % |    Time | Samples | Caller | Location                                   |
| ----: | ------: | ------: | ------ | ------------------------------------------ |
| 57.7% | 122.7ms |      97 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 42.3% |  89.8ms |      71 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `each` (`./node_modules/d3/dist/d3.min.js:2:25558`)

|     % |    Time | Samples | Caller   | Location                                   |
| ----: | ------: | ------: | -------- | ------------------------------------------ |
| 90.5% | 144.2ms |     114 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  8.7% |  13.9ms |      11 | `text`   | `./node_modules/d3/dist/d3.min.js:2:26408` |
|  0.8% |   1.3ms |       1 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223150`)

|      % |    Time | Samples | Caller | Location                                    |
| -----: | ------: | ------: | ------ | ------------------------------------------- |
| 100.0% | 156.9ms |     124 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

|      % |    Time | Samples | Caller | Location                                    |
| -----: | ------: | ------: | ------ | ------------------------------------------- |
| 100.0% | 155.6ms |     123 | `h`    | `./node_modules/d3/dist/d3.min.js:2:223150` |

##### `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)

|     % |    Time | Samples | Caller                         | Location               |
| ----: | ------: | ------: | ------------------------------ | ---------------------- |
| 95.4% | 130.3ms |     103 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`  |
|  4.6% |   6.3ms |       5 | `chartBreakdowns`              | `./workload.mjs:39:27` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106068`)

|     % |   Time | Samples | Caller | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 61.9% | 82.2ms |      65 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 38.1% | 50.6ms |      40 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102069`)

|     % |   Time | Samples | Caller | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 53.4% | 69.6ms |      55 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 46.6% | 60.7ms |      48 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005` |

##### `createElementNS` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 98.1% | 67.0ms |      53 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |
|  1.9% |  1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16431` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|      % |   Time | Samples | Caller                         | Location              |
| -----: | -----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 62.0ms |      49 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `(anonymous)` (`./workload.mjs:201:13`)

|      % |   Time | Samples | Caller | Location                                   |
| -----: | -----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 43.0ms |      34 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `(anonymous)` (`./workload.mjs:185:13`)

|      % |   Time | Samples | Caller | Location                                   |
| -----: | -----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 32.9ms |      26 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162` |

##### `(anonymous)` (`./workload.mjs:205:13`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 31.6ms |      25 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `(anonymous)` (`./workload.mjs:195:13`)

|      % |   Time | Samples | Caller | Location                                   |
| -----: | -----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 20.2ms |      16 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location                                   |
| -----: | -----: | ------: | -------- | ------------------------------------------ |
| 100.0% | 12.6ms |      10 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `insertBefore` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 11.4ms |       9 | `appendChild` | `./node_modules/d3/dist/d3.min.js:2:21447` |

##### `(anonymous)` (`./workload.mjs:82:7`)

|      % |  Time | Samples | Caller | Location                                  |
| -----: | ----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 7.6ms |       6 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 7.6ms |       6 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `(anonymous)` (`./workload.mjs:157:29`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 6.3ms |       5 | `chartLayouts` | `./workload.mjs:116:24` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location                                   |
| -----: | ----: | ------: | ------- | ------------------------------------------ |
| 100.0% | 5.1ms |       4 | `order` | `./node_modules/d3/dist/d3.min.js:2:24713` |

##### `(anonymous)` (`./workload.mjs:124:13`)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 2.5ms |       2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142178` |

##### `(anonymous)` (`./workload.mjs:139:12`)

|      % |  Time | Samples | Caller         | Location                |
| -----: | ----: | ------: | -------------- | ----------------------- |
| 100.0% | 2.5ms |       2 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:193:9`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.5ms |       2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `(anonymous)` (`./workload.mjs:11:29`)

|      % |  Time | Samples | Caller                         | Location              |
| -----: | ----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 1.3ms |       1 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `(anonymous)` (`./workload.mjs:199:25`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|      % |  Time | Samples | Caller | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `f`    | `./node_modules/d3/dist/d3.min.js:2:194448` |

##### `(anonymous)` (`./workload.mjs:133:22`)

|      % |  Time | Samples | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|      % |  Time | Samples | Caller        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142038` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./run.mjs:1:1`)

|      % |  Time | Samples | Callee                         | Location              |
| -----: | ----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 4.02s |   3,179 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|     % |    Time | Samples | Callee            | Location                                   |
| ----: | ------: | ------: | ----------------- | ------------------------------------------ |
| 92.9% |   3.73s |   2,952 | `chartLayouts`    | `./workload.mjs:116:24`                    |
|  3.2% | 130.3ms |     103 | `call`            | `./node_modules/d3/dist/d3.min.js:2:25192` |
|  1.5% |  62.0ms |      49 | `chartBreakdowns` | `./workload.mjs:39:27`                     |
|  0.8% |  32.9ms |      26 | `join`            | `./node_modules/d3/dist/d3.min.js:2:24162` |
|  0.5% |  21.5ms |      17 | `remove`          | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|     % |    Time | Samples | Callee | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 57.3% |   2.14s |   1,692 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235607` |
| 34.5% |   1.29s |   1,017 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501` |
|  4.8% | 180.9ms |     143 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709`  |
|  1.2% |  44.3ms |      35 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162`  |
|  0.4% |  15.2ms |      12 | `from` | `./node_modules/d3/dist/d3.min.js:2:94301`  |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:235607`)

|     % |  Time | Samples | Callee        | Location                                    |
| ----: | ----: | ------: | ------------- | ------------------------------------------- |
| 99.8% | 2.14s |   1,688 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |
|  0.1% | 1.3ms |       1 | `i`           | `./node_modules/d3/dist/d3.min.js:2:230589` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235702`)

|     % |    Time | Samples | Callee | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 58.7% |   1.25s |     991 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452` |
| 35.5% | 759.0ms |     600 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005` |
|  0.8% |  16.4ms |      13 | `l`    | `./node_modules/d3/dist/d3.min.js:2:232102` |
|  0.5% |  11.4ms |       9 | `h`    | `./node_modules/d3/dist/d3.min.js:2:233884` |
|  0.2% |   3.8ms |       3 | `g`    | `./node_modules/d3/dist/d3.min.js:2:231166` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:223501`)

|     % |    Time | Samples | Callee        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 83.3% |   1.07s |     847 | `i`           | `./node_modules/d3/dist/d3.min.js:2:76807`  |
| 12.2% | 156.9ms |     124 | `h`           | `./node_modules/d3/dist/d3.min.js:2:223150` |
|  4.1% |  53.1ms |      42 | `J`           | `./node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.2% |   2.5ms |       2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:223652` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233452`)

|     % |    Time | Samples | Callee          | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 48.6% | 609.7ms |     482 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  6.6% |  82.2ms |      65 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068` |
|  5.5% |  69.6ms |      55 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102069` |
|  0.1% |   1.3ms |       1 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233647` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

|     % |  Time | Samples | Callee        | Location                                   |
| ----: | ----: | ------: | ------------- | ------------------------------------------ |
| 99.8% | 1.07s |     845 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

|     % |  Time | Samples | Callee        | Location                                   |
| ----: | ----: | ------: | ------------- | ------------------------------------------ |
| 99.3% | 1.06s |     839 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

|      % |  Time | Samples | Callee | Location                                   |
| -----: | ----: | ------: | ------ | ------------------------------------------ |
| 100.0% | 1.07s |     845 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

|     % |    Time | Samples | Callee | Location                                   |
| ----: | ------: | ------: | ------ | ------------------------------------------ |
| 10.6% | 112.6ms |      89 | `p`    | `./node_modules/d3/dist/d3.min.js:2:77577` |
|  0.1% |   1.3ms |       1 | `au`   | `./node_modules/d3/dist/d3.min.js:2:79111` |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105700`)

|     % |    Time | Samples | Callee | Location                                    |
| ----: | ------: | ------: | ------ | ------------------------------------------- |
| 64.5% | 589.5ms |     466 | `h`    | `./node_modules/d3/dist/d3.min.js:2:233884` |
| 31.8% | 290.9ms |     230 | `g`    | `./node_modules/d3/dist/d3.min.js:2:231166` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231005`)

|     % |    Time | Samples | Callee          | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 40.2% | 304.9ms |     241 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700` |
|  8.0% |  60.7ms |      48 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102069` |
|  6.7% |  50.6ms |      40 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

|     % |    Time | Samples | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 55.6% | 144.2ms |     114 | `each`        | `./node_modules/d3/dist/d3.min.js:2:25558` |
| 34.6% |  89.8ms |      71 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |
|  6.8% |  17.7ms |      14 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042` |
|  0.5% |   1.3ms |       1 | `It`          | `./node_modules/d3/dist/d3.min.js:2:16093` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Callee        | Location                                    |
| ----: | -----: | ------: | ------------- | ------------------------------------------- |
| 35.1% | 74.6ms |      59 | `a`           | `./node_modules/d3/dist/d3.min.js:2:244444` |
|  6.0% | 12.6ms |      10 | `f`           | `./node_modules/d3/dist/d3.min.js:2:218177` |
|  1.2% |  2.5ms |       2 | `(anonymous)` | `./workload.mjs:193:9`                      |
|  0.6% |  1.3ms |       1 | `(anonymous)` | `./workload.mjs:199:25`                     |
|  0.6% |  1.3ms |       1 | `(anonymous)` | `./workload.mjs:133:22`                     |

##### `each` (`./node_modules/d3/dist/d3.min.js:2:25558`)

|     % |    Time | Samples | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 77.0% | 122.7ms |      97 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |
| 11.1% |  17.7ms |      14 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042` |
|  8.7% |  13.9ms |      11 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |
|  0.8% |   1.3ms |       1 | `In`          | `./node_modules/d3/dist/d3.min.js:2:20104` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223150`)

|     % |    Time | Samples | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 99.2% | 155.6ms |     123 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144`  |
|  0.8% |   1.3ms |       1 | `lu`          | `./node_modules/d3/dist/d3.min.js:2:79375` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

|     % |   Time | Samples | Callee | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 49.6% | 77.2ms |      61 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |
| 44.7% | 69.6ms |      55 | `g`    | `./node_modules/d3/dist/d3.min.js:2:1758` |

##### `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)

|     % |   Time | Samples | Callee        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 53.7% | 73.4ms |      58 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208` |
| 31.5% | 43.0ms |      34 | `(anonymous)` | `./workload.mjs:201:13`                    |
| 14.8% | 20.2ms |      16 | `(anonymous)` | `./workload.mjs:195:13`                    |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106068`)

|     % |   Time | Samples | Callee | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 31.4% | 41.7ms |      33 | `l`    | `./node_modules/d3/dist/d3.min.js:2:233647` |
| 17.1% | 22.8ms |      18 | `u`    | `./node_modules/d3/dist/d3.min.js:2:231470` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102069`)

|     % |    Time | Samples | Callee      | Location                                    |
| ----: | ------: | ------: | ----------- | ------------------------------------------- |
| 92.2% | 120.2ms |      95 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103106` |
|  1.0% |   1.3ms |       1 | `Xc`        | `./node_modules/d3/dist/d3.min.js:2:106662` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|     % |   Time | Samples | Callee | Location                                    |
| ----: | -----: | ------: | ------ | ------------------------------------------- |
| 30.6% | 19.0ms |      15 | `D`    | `./node_modules/d3/dist/d3.min.js:2:4759`   |
| 26.5% | 16.4ms |      13 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709`  |
| 10.2% |  6.3ms |       5 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192`  |
|  6.1% |  3.8ms |       3 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162`  |
|  4.1% |  2.5ms |       2 | `yg`   | `./node_modules/d3/dist/d3.min.js:2:152882` |

##### `(anonymous)` (`./workload.mjs:201:13`)

|     % |   Time | Samples | Callee   | Location                                   |
| ----: | -----: | ------: | -------- | ------------------------------------------ |
| 97.1% | 41.7ms |      33 | `text`   | `./node_modules/d3/dist/d3.min.js:2:26408` |
|  2.9% |  1.3ms |       1 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `(anonymous)` (`./workload.mjs:185:13`)

|      % |   Time | Samples | Callee   | Location                                   |
| -----: | -----: | ------: | -------- | ------------------------------------------ |
| 100.0% | 32.9ms |      26 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `(anonymous)` (`./workload.mjs:205:13`)

|     % |   Time | Samples | Callee        | Location                                    |
| ----: | -----: | ------: | ------------- | ------------------------------------------- |
| 48.0% | 15.2ms |      12 | `M`           | `./node_modules/d3/dist/d3.min.js:2:109958` |
| 16.0% |  5.1ms |       4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:165835` |
|  4.0% |  1.3ms |       1 | `Yv`          | `./node_modules/d3/dist/d3.min.js:2:169822` |
|  4.0% |  1.3ms |       1 | `format`      | `./node_modules/d3/dist/d3.min.js:2:167331` |
|  4.0% |  1.3ms |       1 | `o_`          | `./node_modules/d3/dist/d3.min.js:2:170691` |

##### `(anonymous)` (`./workload.mjs:195:13`)

|     % |   Time | Samples | Callee   | Location                                   |
| ----: | -----: | ------: | -------- | ------------------------------------------ |
| 93.7% | 19.0ms |      15 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  6.3% |  1.3ms |       1 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `(anonymous)` (`./workload.mjs:82:7`)

|     % |  Time | Samples | Callee       | Location                                    |
| ----: | ----: | ------: | ------------ | ------------------------------------------- |
| 33.3% | 2.5ms |       2 | `Vg.i.floor` | `./node_modules/d3/dist/d3.min.js:2:159113` |

##### `(anonymous)` (`./workload.mjs:157:29`)

|     % |  Time | Samples | Callee | Location                                    |
| ----: | ----: | ------: | ------ | ------------------------------------------- |
| 60.0% | 3.8ms |       3 | `l`    | `./node_modules/d3/dist/d3.min.js:2:155044` |

##### `(anonymous)` (`./workload.mjs:193:9`)

|      % |  Time | Samples | Callee | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 2.5ms |       2 | `l`    | `./node_modules/d3/dist/d3.min.js:2:155044` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|     % |  Time | Samples | Callee | Location                                    |
| ----: | ----: | ------: | ------ | ------------------------------------------- |
| 50.0% | 1.3ms |       1 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958` |

##### `(anonymous)` (`./workload.mjs:11:29`)

|      % |  Time | Samples | Callee        | Location                                    |
| -----: | ----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:166138` |

##### `(anonymous)` (`./workload.mjs:199:25`)

|      % |  Time | Samples | Callee | Location                                    |
| -----: | ----: | ------: | ------ | ------------------------------------------- |
| 100.0% | 1.3ms |       1 | `i`    | `./node_modules/d3/dist/d3.min.js:2:152428` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`) ← `(anonymous)` (`./run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.5% | 947.5ms |     749 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223501) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                   |
| 14.0% | 589.5ms |     466 | `h` (`./node_modules/d3/dist/d3.min.js:2:233884`) ← `Fc.visit` (2:105700) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                  |
| 11.6% | 490.8ms |     388 | `f` (`./node_modules/d3/dist/d3.min.js:2:233452`) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                           |
|  8.1% | 342.8ms |     271 | `a` (`./node_modules/d3/dist/d3.min.js:2:231005`) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                           |
|  6.9% | 290.9ms |     230 | `g` (`./node_modules/d3/dist/d3.min.js:2:231166`) ← `Fc.visit` (2:105700) ← `a` (2:231005) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                  |
|  2.4% | 101.2ms |      80 | `p` (`./node_modules/d3/dist/d3.min.js:2:77577`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223501) ← `chartLayouts` (`./workload.mjs:116:24`)                                                   |
|  2.1% |  87.3ms |      69 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235702`) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                            |
|  1.5% |  64.5ms |      51 | `g` (`./node_modules/d3/dist/d3.min.js:2:1758`) ← `(anonymous)` (2:1144) ← `h` (2:223150) ← `d` (2:223501) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                              |
|  1.5% |  63.2ms |      50 | `p` (`./node_modules/d3/dist/d3.min.js:2:1697`) ← `(anonymous)` (2:1144) ← `h` (2:223150) ← `d` (2:223501) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                              |
|  1.4% |  58.2ms |      46 | `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103106`) ← `$c` (2:102069) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                |
|  1.3% |  53.1ms |      42 | `J` (`./node_modules/d3/dist/d3.min.js:2:8205`) ← `d` (2:223501) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                        |
|  1.2% |  50.6ms |      40 | `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103106`) ← `$c` (2:102069) ← `a` (2:231005) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                |
|  1.0% |  43.0ms |      34 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `each` (2:25558) ← `attr` (2:25709) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                        |
|  1.0% |  41.7ms |      33 | `l` (`./node_modules/d3/dist/d3.min.js:2:233647`) ← `Fc.visitAfter` (2:106068) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                             |
|  1.0% |  40.5ms |      32 | `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106068`) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                              |
|  0.9% |  36.7ms |      29 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `attr` (2:25709) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                           |
|  0.7% |  29.1ms |      23 | `Jh` (`./node_modules/d3/dist/d3.min.js:2:131237`) ← `point` (2:131561) ← `Yf` (2:112830) ← `Lf` (2:112923) ← `a` (2:244444) ← `(anonymous)` (2:18176) ← `each` (2:25558) ← `attr` (2:25709) ← `chartLayouts` (`./workload.mjs:116:24`)            |
|  0.7% |  27.8ms |      22 | `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106068`) ← `a` (2:231005) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                              |
|  0.6% |  25.3ms |      20 | `createElementNS` ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`./workload.mjs:116:24`)                                   |
|  0.6% |  24.0ms |      19 | `createElementNS` ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `(anonymous)` (`./workload.mjs:185:13`) ← `join` (`./node_modules/d3/dist/d3.min.js:2:24162`) |

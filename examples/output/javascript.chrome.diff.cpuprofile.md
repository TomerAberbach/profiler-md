# CPU profile diff

Took 4.22s → 4.23s (+9.04ms, +0.2%) over 3,335 → 3,352 samples (1.3ms per sample).

| Category           |  Change |    Delta |             % |              Time |       Samples |
| ------------------ | ------: | -------: | ------------: | ----------------: | ------------: |
| Third-party        |   +0.2% |  +6.15ms | 92.8% → 92.7% |     3.91s → 3.92s | 3,094 → 3,108 |
| Garbage collector  |  +17.0% | +19.84ms |   2.8% → 3.2% | 116.4ms → 136.2ms |      92 → 108 |
| Native             |   -2.2% |  -2.91ms |          3.1% | 132.8ms → 129.9ms |     105 → 103 |
| Ours               |  -28.0% | -12.75ms |   1.1% → 0.8% |   45.5ms → 32.8ms |       36 → 26 |
| Idle               |   -0.3% |  -0.03ms |          0.2% |     8.9ms → 8.8ms |             7 |
| Regular expression | removed |  -1.26ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

Paths starting with `./` or `../` are relative to `http://127.0.0.1:52789/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 4.02s (95.4% → 95.0%) (anonymous) at ./run.mjs:1:1
│   └── 4.02s → 4.01s (95.3% → 94.9%) globalThis.buildAndRetainDom at ./workload.mjs:1:32
│       ├── 3.73s (88.5% → 88.2%) chartLayouts at 116:24
│       │   ├── 2.14s → 2.15s (50.7%) h at ./node_modules/d3/dist/d3.min.js:2:235607 → 2:235656
│       │   │   └── 2.14s (50.6% → 50.7%, self 2.1% → 1.9%) (anonymous) at 2:235702 → 2:235751
│       │   │       ├── 1.25s → 1.22s (29.7% → 28.9%, self 11.6% → 11.0%) f at 2:233452 → 2:233501
│       │   │       │   ├── 609.7ms → 624.3ms (14.5% → 14.8%, self 0.5% → 1.0%, self 0.8% → 1.8% globally) Fc.visit at 2:105700 → 2:105681
│       │   │       │   │   └── 589.5ms → 584.0ms (14.0% → 13.8%, self 14.7% → 14.4% globally) h at 2:233884 → 2:233933
│       │   │       │   ├── 82.2ms → 66.8ms (1.9% → 1.6%, self 1.0%, self 1.6% → 1.5% globally) Fc.visitAfter at 2:106068 → 2:106049
│       │   │       │   │   └── 41.7ms → 26.5ms (1.0% → 0.6%) l at 2:233647 → 2:233696
│       │   │       │   └── 70.8ms → 66.8ms (1.7% → 1.6%) 3 more callees, led by (1.6% → 1.5%) $c at 2:102069 → 2:102050
│       │   │       ├── 759.0ms → 805.9ms (18.0% → 19.1%, self 8.1%) a at 2:231005 → 2:231054
│       │   │       │   ├── 60.7ms → 84.5ms (1.4% → 2.0%) $c at 2:102069 → 2:102050
│       │   │       │   │   └── 54.4ms → 74.4ms (1.3% → 1.8%, self 1.2% → 1.6%, self 2.6% → 2.8% globally) Fc.addAll at 2:103106 → 2:103087
│       │   │       │   ├── 50.6ms → 59.3ms (1.2% → 1.4%, self 0.7% → 0.5%) Fc.visitAfter at 2:106068 → 2:106049
│       │   │       │   │   └── 22.8ms → 37.8ms (0.5% → 0.9%) u at 2:231470 → 2:231519
│       │   │       │   └── 304.9ms → 321.6ms (7.2% → 7.6%) 2 more callees, led by (7.2% → 7.5%) Fc.visit at 2:105700 → 2:105681
│       │   │       └── 16.4ms → 12.6ms (0.4% → 0.3%) l at 2:232102 → 2:232151
│       │   ├── 1.29s (30.5%) d at ./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550
│       │   │   ├── … 1.06s → 1.07s (25.2% → 25.4%, self 22.5% → 23.1%) (anonymous) at ./node_modules/d3/dist/d3.min.js:2:77113
│       │   │   │   └── 112.6ms → 93.3ms (2.7% → 2.2%, self 2.4% → 1.8%) p at 2:77577 → 2:77576
│       │   │   ├── 53.1ms → 39.1ms (1.3% → 0.9%) J at 2:8205
│       │   │   └── 159.4ms → 165.2ms (3.8% → 3.9%) 2 more callees, led by (3.7% → 3.8%) h at 2:223150 → 2:223199
│       │   ├── 180.9ms → 155.1ms (4.3% → 3.7%) attr at ./node_modules/d3/dist/d3.min.js:2:25709
│       │   │   ├── 105.0ms → 92.1ms (2.5% → 2.2%) each at 2:25558
│       │   │   │   └── 92.3ms → 82.0ms (2.2% → 1.9%, self 1.0% → 0.9%, self 2.8% → 2.2% globally) (anonymous) at 2:18176
│       │   │   │       └── 49.3ms → 45.4ms (1.2% → 1.1%) 2 more callees, led by (1.2% → 1.0%) a at 2:244444 → 2:244493
│       │   │   └── 70.8ms → 60.5ms (1.7% → 1.4%) 3 more callees, led by (1.5% → 1.3%) (anonymous) at 2:18176
│       │   └── 117.6ms → 129.9ms (2.8% → 3.1%) 21 more callees, led by (1.0% → 1.1%) join at ./node_modules/d3/dist/d3.min.js:2:24162
│       ├── 130.3ms → 126.1ms (3.1% → 3.0%) call at ./node_modules/d3/dist/d3.min.js:2:25192
│       │   ├── 67.0ms → 75.7ms (1.6% → 1.8%) h at 2:12208
│       │   │   ├── 24.0ms → 40.4ms (0.6% → 1.0%) attr at 2:25709
│       │   │   │   ├── 11.4ms → 16.4ms (0.3% → 0.4%, self 0.9% → 1.2% globally) (anonymous) at 2:18042
│       │   │   │   └── 10.1ms → 17.7ms (0.2% → 0.4%) each at 2:25558
│       │   │   │       └── 5.1ms → 12.6ms (0.1% → 0.3%) (anonymous) at 2:18042
│       │   │   └── 41.7ms → 30.3ms (1.0% → 0.7%) 12 more callees, led by (0.2% → 0.3%) append at 2:26726
│       │   └── … 22.8ms → 18.9ms (0.5% → 0.4%) (anonymous) at ./workload.mjs:205:13
│       └── 151.8ms → 155.1ms (3.6% → 3.7%) 13 more callees, led by (1.5% → 1.3%) chartBreakdowns at 39:27
├── 116.4ms → 136.2ms (2.8% → 3.2%) (garbage collector)
└── 79.7ms → 74.4ms (1.9% → 1.8%) 14 more root frames, led by (0.7% → 0.6%) (program)
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |   Samples | Function              | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
| +117.9% | +40.26ms |   0.8% → 1.8% |   34.2ms → 74.4ms |   27 → 59 | `Fc.visit`            | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|   +3.2% | +30.01ms | 22.5% → 23.1% | 947.5ms → 977.5ms | 749 → 775 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +17.0% | +19.84ms |   2.8% → 3.2% | 116.4ms → 136.2ms |  92 → 108 | `(garbage collector)` | `<unknown>`                                            |
|  +66.2% | +15.07ms |   0.5% → 0.9% |   22.8ms → 37.8ms |   18 → 30 | `u`                   | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|  +34.1% | +12.50ms |   0.9% → 1.2% |   36.7ms → 49.2ms |   29 → 39 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18042`             |
|  +10.1% | +11.03ms |   2.6% → 2.8% | 108.8ms → 119.8ms |   86 → 95 | `Fc.addAll`           | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
| +139.3% |  +8.81ms |   0.1% → 0.4% |    6.3ms → 15.1ms |    5 → 12 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:16259`             |
|  +77.3% |  +8.80ms |   0.3% → 0.5% |   11.4ms → 20.2ms |    9 → 16 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
|     new |  +7.57ms |   0.0% → 0.2% |       0ms → 7.6ms |     0 → 6 | `data`                | `./node_modules/d3/dist/d3.min.js:2:23459`             |
|  +39.6% |  +7.51ms |   0.4% → 0.6% |   19.0ms → 26.5ms |   15 → 21 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:2114`              |
|     new |  +6.31ms |   0.0% → 0.1% |       0ms → 6.3ms |     0 → 5 | `Oc`                  | `./node_modules/d3/dist/d3.min.js:2:102489`            |
| +498.2% |  +6.30ms |  <0.1% → 0.2% |     1.3ms → 7.6ms |     1 → 6 | `Gc`                  | `./node_modules/d3/dist/d3.min.js:2:106688 → 2:106669` |
|     new |  +5.04ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 4 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
|     new |  +5.04ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 4 | `l`                   | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
| +398.5% |  +5.04ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |
|  +56.7% |  +5.02ms |   0.2% → 0.3% |    8.9ms → 13.9ms |    7 → 11 | `$c`                  | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
| +298.8% |  +3.78ms |  <0.1% → 0.1% |     1.3ms → 5.0ms |     1 → 4 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:12208`             |
| +298.8% |  +3.78ms |  <0.1% → 0.1% |     1.3ms → 5.0ms |     1 → 4 | `v`                   | `./node_modules/d3/dist/d3.min.js:2:223794 → 2:223843` |
|  +74.5% |  +3.77ms |   0.1% → 0.2% |     5.1ms → 8.8ms |     4 → 7 | `Yf`                  | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
|  +59.5% |  +3.77ms |   0.1% → 0.2% |    6.3ms → 10.1ms |     5 → 8 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:78542 → 2:78541`   |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function      | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
| +117.9% | +40.26ms |   0.8% → 1.8% |   34.2ms → 74.4ms |   27 → 59 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|   +3.2% | +30.01ms | 22.5% → 23.1% | 947.5ms → 977.5ms | 749 → 775 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +66.2% | +15.07ms |   0.5% → 0.9% |   22.8ms → 37.8ms |   18 → 30 | `u`           | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|  +34.1% | +12.50ms |   0.9% → 1.2% |   36.7ms → 49.2ms |   29 → 39 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042`             |
|  +10.1% | +11.03ms |   2.6% → 2.8% | 108.8ms → 119.8ms |   86 → 95 | `Fc.addAll`   | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
| +139.3% |  +8.81ms |   0.1% → 0.4% |    6.3ms → 15.1ms |    5 → 12 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259`             |
|  +77.3% |  +8.80ms |   0.3% → 0.5% |   11.4ms → 20.2ms |    9 → 16 | `g`           | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
|     new |  +7.57ms |   0.0% → 0.2% |       0ms → 7.6ms |     0 → 6 | `data`        | `./node_modules/d3/dist/d3.min.js:2:23459`             |
|  +39.6% |  +7.51ms |   0.4% → 0.6% |   19.0ms → 26.5ms |   15 → 21 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:2114`              |
|     new |  +6.31ms |   0.0% → 0.1% |       0ms → 6.3ms |     0 → 5 | `Oc`          | `./node_modules/d3/dist/d3.min.js:2:102489`            |
| +498.2% |  +6.30ms |  <0.1% → 0.2% |     1.3ms → 7.6ms |     1 → 6 | `Gc`          | `./node_modules/d3/dist/d3.min.js:2:106688 → 2:106669` |
|     new |  +5.04ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 4 | `h`           | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
|     new |  +5.04ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 4 | `l`           | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
| +398.5% |  +5.04ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |
|  +56.7% |  +5.02ms |   0.2% → 0.3% |    8.9ms → 13.9ms |    7 → 11 | `$c`          | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
| +298.8% |  +3.78ms |  <0.1% → 0.1% |     1.3ms → 5.0ms |     1 → 4 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208`             |
| +298.8% |  +3.78ms |  <0.1% → 0.1% |     1.3ms → 5.0ms |     1 → 4 | `v`           | `./node_modules/d3/dist/d3.min.js:2:223794 → 2:223843` |
|  +74.5% |  +3.77ms |   0.1% → 0.2% |     5.1ms → 8.8ms |     4 → 7 | `Yf`          | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
|  +59.5% |  +3.77ms |   0.1% → 0.2% |    6.3ms → 10.1ms |     5 → 8 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78542 → 2:78541`   |
|     new |  +2.52ms |   0.0% → 0.1% |       0ms → 2.5ms |     0 → 2 | `G`           | `./node_modules/d3/dist/d3.min.js:2:6258`              |

##### Garbage collector

| Change |    Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
| +17.0% | +19.84ms | 2.8% → 3.2% | 116.4ms → 136.2ms | 92 → 108 | `(garbage collector)` | `<unknown>` |

##### Native

| Change |   Delta |           % |            Time | Samples | Function      | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +29.6% | +3.75ms | 0.3% → 0.4% | 12.6ms → 16.4ms | 10 → 13 | `removeChild` | `<unknown>` |
| +16.3% | +1.24ms |        0.2% |   7.6ms → 8.8ms |   6 → 7 | `appendChild` | `<unknown>` |

##### Ours

|  Change |   Delta |            % |           Time | Samples | Function       | Location                |
| ------: | ------: | -----------: | -------------: | ------: | -------------- | ----------------------- |
|     new | +2.52ms |  0.0% → 0.1% |    0ms → 2.5ms |   0 → 2 | `(anonymous)`  | `./workload.mjs:193:9`  |
| +199.1% | +2.52ms | <0.1% → 0.1% |  1.3ms → 3.8ms |   1 → 3 | `(anonymous)`  | `./run.mjs:1:1`         |
|     new | +1.26ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`  | `./workload.mjs:120:25` |
|     new | +1.26ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`  | `./workload.mjs:121:16` |
|  +13.9% | +1.24ms |         0.2% | 8.9ms → 10.1ms |   7 → 8 | `chartLayouts` | `./workload.mjs:116:24` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |             % |              Time |   Samples | Function          | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------- | ------------------------------------------------------ |
| -22.3% | -26.84ms |   2.8% → 2.2% |  120.2ms → 93.3ms |   95 → 74 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|  -5.2% | -25.41ms | 11.6% → 11.0% | 490.8ms → 465.4ms | 388 → 369 | `f`               | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| -21.5% | -21.74ms |   2.4% → 1.9% |  101.2ms → 79.5ms |   80 → 63 | `p`               | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
| -37.3% | -16.53ms |   1.0% → 0.7% |   44.3ms → 27.7ms |   35 → 22 | `l`               | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| -26.4% | -14.03ms |   1.3% → 0.9% |   53.1ms → 39.1ms |   42 → 31 | `J`               | `./node_modules/d3/dist/d3.min.js:2:8205`              |
|  -1.7% | -10.65ms | 14.7% → 14.4% | 618.6ms → 607.9ms | 489 → 482 | `h`               | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -9.0% |  -7.82ms |   2.1% → 1.9% |   87.3ms → 79.5ms |   69 → 63 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
| -66.8% |  -7.60ms |   0.3% → 0.1% |    11.4ms → 3.8ms |     9 → 3 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:19664`             |
| -85.8% |  -7.59ms |  0.2% → <0.1% |     8.9ms → 1.3ms |     7 → 1 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:1144`              |
|  -9.5% |  -6.51ms |   1.6% → 1.5% |   68.3ms → 61.8ms |   54 → 49 | `Fc.visitAfter`   | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -83.4% |  -6.33ms |  0.2% → <0.1% |     7.6ms → 1.3ms |     6 → 1 | `(anonymous)`     | `./workload.mjs:205:13`                                |
|  -8.1% |  -5.23ms |   1.5% → 1.4% |   64.5ms → 59.3ms |   51 → 47 | `g`               | `./node_modules/d3/dist/d3.min.js:2:1758`              |
| -80.1% |  -5.06ms |  0.1% → <0.1% |     6.3ms → 1.3ms |     5 → 1 | `h`               | `./node_modules/d3/dist/d3.min.js:2:232366 → 2:232415` |
| -13.9% |  -3.87ms |   0.7% → 0.6% |   27.8ms → 24.0ms |   22 → 19 | `(program)`       | `<unknown>`                                            |
| -23.3% |  -3.83ms |   0.4% → 0.3% |   16.4ms → 12.6ms |   13 → 10 | `l`               | `./node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
| -23.3% |  -3.83ms |   0.4% → 0.3% |   16.4ms → 12.6ms |   13 → 10 | `point`           | `./node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
| -60.1% |  -3.80ms |          0.1% |     6.3ms → 2.5ms |     5 → 2 | `r`               | `./node_modules/d3/dist/d3.min.js:2:109041 → 2:109022` |
| -60.1% |  -3.80ms |          0.1% |     6.3ms → 2.5ms |     5 → 2 | `attr`            | `./node_modules/d3/dist/d3.min.js:2:25709`             |
| -75.1% |  -3.80ms |  0.1% → <0.1% |     5.1ms → 1.3ms |     4 → 1 | `(anonymous)`     | `./workload.mjs:82:7`                                  |
| -75.1% |  -3.80ms |  0.1% → <0.1% |     5.1ms → 1.3ms |     4 → 1 | `chartBreakdowns` | `./workload.mjs:39:27`                                 |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function        | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
|  -22.3% | -26.84ms |   2.8% → 2.2% |  120.2ms → 93.3ms |   95 → 74 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|   -5.2% | -25.41ms | 11.6% → 11.0% | 490.8ms → 465.4ms | 388 → 369 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|  -21.5% | -21.74ms |   2.4% → 1.9% |  101.2ms → 79.5ms |   80 → 63 | `p`             | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -37.3% | -16.53ms |   1.0% → 0.7% |   44.3ms → 27.7ms |   35 → 22 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
|  -26.4% | -14.03ms |   1.3% → 0.9% |   53.1ms → 39.1ms |   42 → 31 | `J`             | `./node_modules/d3/dist/d3.min.js:2:8205`              |
|   -1.7% | -10.65ms | 14.7% → 14.4% | 618.6ms → 607.9ms | 489 → 482 | `h`             | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|   -9.0% |  -7.82ms |   2.1% → 1.9% |   87.3ms → 79.5ms |   69 → 63 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|  -66.8% |  -7.60ms |   0.3% → 0.1% |    11.4ms → 3.8ms |     9 → 3 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:19664`             |
|  -85.8% |  -7.59ms |  0.2% → <0.1% |     8.9ms → 1.3ms |     7 → 1 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:1144`              |
|   -9.5% |  -6.51ms |   1.6% → 1.5% |   68.3ms → 61.8ms |   54 → 49 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|   -8.1% |  -5.23ms |   1.5% → 1.4% |   64.5ms → 59.3ms |   51 → 47 | `g`             | `./node_modules/d3/dist/d3.min.js:2:1758`              |
|  -80.1% |  -5.06ms |  0.1% → <0.1% |     6.3ms → 1.3ms |     5 → 1 | `h`             | `./node_modules/d3/dist/d3.min.js:2:232366 → 2:232415` |
|  -23.3% |  -3.83ms |   0.4% → 0.3% |   16.4ms → 12.6ms |   13 → 10 | `l`             | `./node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
|  -23.3% |  -3.83ms |   0.4% → 0.3% |   16.4ms → 12.6ms |   13 → 10 | `point`         | `./node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
|  -60.1% |  -3.80ms |          0.1% |     6.3ms → 2.5ms |     5 → 2 | `r`             | `./node_modules/d3/dist/d3.min.js:2:109041 → 2:109022` |
|  -60.1% |  -3.80ms |          0.1% |     6.3ms → 2.5ms |     5 → 2 | `attr`          | `./node_modules/d3/dist/d3.min.js:2:25709`             |
| removed |  -3.79ms |   0.1% → 0.0% |       3.8ms → 0ms |     3 → 0 | `M`             | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |
| removed |  -3.79ms |   0.1% → 0.0% |       3.8ms → 0ms |     3 → 0 | `f`             | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -40.2% |  -2.54ms |          0.1% |     6.3ms → 3.8ms |     5 → 3 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:16765`             |
|  -50.1% |  -2.54ms |          0.1% |     5.1ms → 2.5ms |     4 → 2 | `select`        | `./node_modules/d3/dist/d3.min.js:2:22328`             |

##### Native

| Change |   Delta |           % |            Time | Samples | Function                  | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------------------- | ----------- |
| -13.9% | -3.87ms | 0.7% → 0.6% | 27.8ms → 24.0ms | 22 → 19 | `(program)`               | `<unknown>` |
| -22.5% | -2.56ms | 0.3% → 0.2% |  11.4ms → 8.8ms |   9 → 7 | `insertBefore`            | `<unknown>` |
|  -2.1% | -1.46ms |        1.6% | 68.3ms → 66.8ms | 54 → 53 | `createElementNS`         | `<unknown>` |
|  -0.3% | -0.01ms |        0.1% |   5.1ms → 5.0ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Ours

|  Change |   Delta |            % |          Time | Samples | Function                       | Location                |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------ | ----------------------- |
|  -83.4% | -6.33ms | 0.2% → <0.1% | 7.6ms → 1.3ms |   6 → 1 | `(anonymous)`                  | `./workload.mjs:205:13` |
|  -75.1% | -3.80ms | 0.1% → <0.1% | 5.1ms → 1.3ms |   4 → 1 | `(anonymous)`                  | `./workload.mjs:82:7`   |
|  -75.1% | -3.80ms | 0.1% → <0.1% | 5.1ms → 1.3ms |   4 → 1 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  -25.2% | -1.28ms |         0.1% | 5.1ms → 3.8ms |   4 → 3 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
|  -50.1% | -1.27ms | 0.1% → <0.1% | 2.5ms → 1.3ms |   2 → 1 | `(anonymous)`                  | `./workload.mjs:157:29` |
|  -50.1% | -1.27ms | 0.1% → <0.1% | 2.5ms → 1.3ms |   2 → 1 | `(anonymous)`                  | `./workload.mjs:139:12` |
| removed | -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `./workload.mjs:100:10` |
| removed | -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `./workload.mjs:123:12` |
| removed | -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `./workload.mjs:221:13` |
|   -0.3% | -0.01ms |         0.1% |         2.5ms |       2 | `(anonymous)`                  | `./workload.mjs:124:13` |
|   -0.3% | -3.72µs |        <0.1% |         1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:133:22` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|  Change |    Delta |      % |            Time | Samples | Location                             |
| ------: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| +117.9% | +40.26ms | 100.0% | 34.2ms → 74.4ms | 27 → 59 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |    Delta |      % |              Time |   Samples | Location                             |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------ |
|  +3.2% | +30.01ms | 100.0% | 947.5ms → 977.5ms | 749 → 775 | `./node_modules/d3/dist/d3.min.js:2` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| +66.2% | +15.07ms | 100.0% | 22.8ms → 37.8ms | 18 → 30 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| +34.1% | +12.50ms | 100.0% | 36.7ms → 49.2ms | 29 → 39 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

| Change |    Delta |      % |              Time | Samples | Location                             |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------ |
| +10.1% | +11.03ms | 100.0% | 108.8ms → 119.8ms | 86 → 95 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`)

|  Change |   Delta |      % |           Time | Samples | Location                             |
| ------: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| +139.3% | +8.81ms | 100.0% | 6.3ms → 15.1ms |  5 → 12 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:108341`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| +77.3% | +8.80ms | 100.0% | 11.4ms → 20.2ms |  9 → 16 | `./node_modules/d3/dist/d3.min.js:2` |

##### `data` (`./node_modules/d3/dist/d3.min.js:2:23459`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +7.57ms | 0.0% → 100.0% | 0ms → 7.6ms |   0 → 6 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| +39.6% | +7.51ms | 100.0% | 19.0ms → 26.5ms | 15 → 21 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Oc` (`./node_modules/d3/dist/d3.min.js:2:102489`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +6.31ms | 0.0% → 100.0% | 0ms → 6.3ms |   0 → 5 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Gc` (`./node_modules/d3/dist/d3.min.js:2:106669`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +498.2% | +6.30ms | 100.0% | 1.3ms → 7.6ms |   1 → 6 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223199`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +5.04ms | 0.0% → 100.0% | 0ms → 5.0ms |   0 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:269888`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +5.04ms | 0.0% → 100.0% | 0ms → 5.0ms |   0 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:142159`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +398.5% | +5.04ms | 100.0% | 1.3ms → 6.3ms |   1 → 5 | `./node_modules/d3/dist/d3.min.js:2` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

| Change |   Delta |      % |           Time | Samples | Location                             |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| +56.7% | +5.02ms | 100.0% | 8.9ms → 13.9ms |  7 → 11 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +298.8% | +3.78ms | 100.0% | 1.3ms → 5.0ms |   1 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `v` (`./node_modules/d3/dist/d3.min.js:2:223843`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +298.8% | +3.78ms | 100.0% | 1.3ms → 5.0ms |   1 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Yf` (`./node_modules/d3/dist/d3.min.js:2:112811`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +74.5% | +3.77ms | 100.0% | 5.1ms → 8.8ms |   4 → 7 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78541`)

| Change |   Delta |      % |           Time | Samples | Location                             |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| +59.5% | +3.77ms | 100.0% | 6.3ms → 10.1ms |   5 → 8 | `./node_modules/d3/dist/d3.min.js:2` |

##### `G` (`./node_modules/d3/dist/d3.min.js:2:6258`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +2.52ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `./node_modules/d3/dist/d3.min.js:2` |

##### `removeChild` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
| +29.6% | +3.75ms | 100.0% | 12.6ms → 16.4ms | 10 → 13 | 2        |

##### `appendChild` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +16.3% | +1.24ms | 100.0% | 7.6ms → 8.8ms |   6 → 7 | 2        |

##### `(anonymous)` (`./workload.mjs:193:9`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +2.52ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `./workload.mjs:193` |

##### `(anonymous)` (`./run.mjs:1:1`)

|  Change |   Delta |      % |          Time | Samples | Location      |
| ------: | ------: | -----: | ------------: | ------: | ------------- |
| +199.1% | +2.52ms | 100.0% | 1.3ms → 3.8ms |   1 → 3 | `./run.mjs:1` |

##### `(anonymous)` (`./workload.mjs:120:25`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `./workload.mjs:120` |

##### `(anonymous)` (`./workload.mjs:121:16`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `./workload.mjs:121` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|  Change |   Delta |            % |        Time | Samples | Location             |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- |
|     new | +2.52ms | 0.0% → 25.0% | 0ms → 2.5ms |   0 → 2 | `./workload.mjs:139` |
| removed | -1.26ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:121` |
| removed | -1.26ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:125` |
| removed | -1.26ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:155` |
|     new | +1.26ms | 0.0% → 12.5% | 0ms → 1.3ms |   0 → 1 | `./workload.mjs:129` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

| Change |    Delta |      % |             Time | Samples | Location                             |
| -----: | -------: | -----: | ---------------: | ------: | ------------------------------------ |
| -22.3% | -26.84ms | 100.0% | 120.2ms → 93.3ms | 95 → 74 | `./node_modules/d3/dist/d3.min.js:2` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

| Change |    Delta |      % |              Time |   Samples | Location                             |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------ |
|  -5.2% | -25.41ms | 100.0% | 490.8ms → 465.4ms | 388 → 369 | `./node_modules/d3/dist/d3.min.js:2` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |    Delta |      % |             Time | Samples | Location                             |
| -----: | -------: | -----: | ---------------: | ------: | ------------------------------------ |
| -21.5% | -21.74ms | 100.0% | 101.2ms → 79.5ms | 80 → 63 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233696`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| -37.3% | -16.53ms | 100.0% | 44.3ms → 27.7ms | 35 → 22 | `./node_modules/d3/dist/d3.min.js:2` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| -26.4% | -14.03ms | 100.0% | 53.1ms → 39.1ms | 42 → 31 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

| Change |    Delta |      % |              Time |   Samples | Location                             |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------ |
|  -1.7% | -10.65ms | 100.0% | 618.6ms → 607.9ms | 489 → 482 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
|  -9.0% | -7.82ms | 100.0% | 87.3ms → 79.5ms | 69 → 63 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`)

| Change |   Delta |      % |           Time | Samples | Location                             |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| -66.8% | -7.60ms | 100.0% | 11.4ms → 3.8ms |   9 → 3 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -85.8% | -7.59ms | 100.0% | 8.9ms → 1.3ms |   7 → 1 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
|  -9.5% | -6.51ms | 100.0% | 68.3ms → 61.8ms | 54 → 49 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./workload.mjs:205:13`)

|  Change |   Delta |              % |          Time | Samples | Location             |
| ------: | ------: | -------------: | ------------: | ------: | -------------------- |
| removed | -3.79ms |   50.0% → 0.0% |   3.8ms → 0ms |   3 → 0 | `./workload.mjs:206` |
|  -66.8% | -2.53ms | 50.0% → 100.0% | 3.8ms → 1.3ms |   3 → 1 | `./workload.mjs:205` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
|  -8.1% | -5.23ms | 100.0% | 64.5ms → 59.3ms | 51 → 47 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:232415`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -80.1% | -5.06ms | 100.0% | 6.3ms → 1.3ms |   5 → 1 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:232151`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| -23.3% | -3.83ms | 100.0% | 16.4ms → 12.6ms | 13 → 10 | `./node_modules/d3/dist/d3.min.js:2` |

##### `point` (`./node_modules/d3/dist/d3.min.js:2:131542`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| -23.3% | -3.83ms | 100.0% | 16.4ms → 12.6ms | 13 → 10 | `./node_modules/d3/dist/d3.min.js:2` |

##### `r` (`./node_modules/d3/dist/d3.min.js:2:109022`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -60.1% | -3.80ms | 100.0% | 6.3ms → 2.5ms |   5 → 2 | `./node_modules/d3/dist/d3.min.js:2` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -60.1% | -3.80ms | 100.0% | 6.3ms → 2.5ms |   5 → 2 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./workload.mjs:82:7`)

| Change |   Delta |      % |          Time | Samples | Location            |
| -----: | ------: | -----: | ------------: | ------: | ------------------- |
| -75.1% | -3.80ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `./workload.mjs:82` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|  Change |   Delta |              % |        Time | Samples | Location             |
| ------: | ------: | -------------: | ----------: | ------: | -------------------- |
| removed | -1.26ms |   25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:43`  |
| removed | -1.26ms |   25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:80`  |
| removed | -1.26ms |   25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:104` |
|   -0.3% | -3.72µs | 25.0% → 100.0% |       1.3ms |       1 | `./workload.mjs:51`  |

##### `M` (`./node_modules/d3/dist/d3.min.js:2:109939`)

|  Change |   Delta |             % |        Time | Samples | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
| removed | -3.79ms | 100.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/d3/dist/d3.min.js:2` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:218226`)

|  Change |   Delta |             % |        Time | Samples | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
| removed | -3.79ms | 100.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16765`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -40.2% | -2.54ms | 100.0% | 6.3ms → 3.8ms |   5 → 3 | `./node_modules/d3/dist/d3.min.js:2` |

##### `select` (`./node_modules/d3/dist/d3.min.js:2:22328`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -50.1% | -2.54ms | 100.0% | 5.1ms → 2.5ms |   4 → 2 | `./node_modules/d3/dist/d3.min.js:2` |

##### `insertBefore` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Location |
| -----: | ------: | -----: | -------------: | ------: | -------- |
| -22.5% | -2.56ms | 100.0% | 11.4ms → 8.8ms |   9 → 7 | 2        |

##### `createElementNS` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
|  -2.1% | -1.46ms | 100.0% | 68.3ms → 66.8ms | 54 → 53 | 2        |

##### `compareDocumentPosition` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
|  -0.3% | -0.01ms | 100.0% | 5.1ms → 5.0ms |       4 | 2        |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|  Change |   Delta |             % |          Time | Samples | Location             |
| ------: | ------: | ------------: | ------------: | ------: | -------------------- |
|  -50.1% | -1.27ms | 50.0% → 33.3% | 2.5ms → 1.3ms |   2 → 1 | `./workload.mjs:172` |
| removed | -1.26ms |  25.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./workload.mjs:223` |
|     new | +1.26ms |  0.0% → 33.3% |   0ms → 1.3ms |   0 → 1 | `./workload.mjs:211` |
|   -0.3% | -3.72µs | 25.0% → 33.3% |         1.3ms |       1 | `./workload.mjs:222` |

##### `(anonymous)` (`./workload.mjs:157:29`)

| Change |   Delta |      % |          Time | Samples | Location             |
| -----: | ------: | -----: | ------------: | ------: | -------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `./workload.mjs:157` |

##### `(anonymous)` (`./workload.mjs:139:12`)

| Change |   Delta |      % |          Time | Samples | Location             |
| -----: | ------: | -----: | ------------: | ------: | -------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `./workload.mjs:139` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|  Change |   Delta |             % |        Time | Samples | Location             |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:100` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|  Change |   Delta |             % |        Time | Samples | Location             |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:123` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|  Change |   Delta |             % |        Time | Samples | Location             |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:221` |

##### `(anonymous)` (`./workload.mjs:124:13`)

| Change |   Delta |      % |  Time | Samples | Location             |
| -----: | ------: | -----: | ----: | ------: | -------------------- |
|  -0.3% | -0.01ms | 100.0% | 2.5ms |       2 | `./workload.mjs:124` |

##### `(anonymous)` (`./workload.mjs:133:22`)

| Change |   Delta |      % |  Time | Samples | Location             |
| -----: | ------: | -----: | ----: | ------: | -------------------- |
|  -0.3% | -3.72µs | 100.0% | 1.3ms |       1 | `./workload.mjs:133` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|  Change |    Delta |             % |            Time | Samples | Caller | Location                                               |
| ------: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
| +144.7% | +20.14ms | 40.7% → 45.8% | 13.9ms → 34.1ms | 11 → 27 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  +99.4% | +20.12ms | 59.3% → 54.2% | 20.2ms → 40.4ms | 16 → 32 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |    Delta |      % |              Time |   Samples | Caller | Location                                   |
| -----: | -------: | -----: | ----------------: | --------: | ------ | ------------------------------------------ |
|  +3.2% | +30.01ms | 100.0% | 947.5ms → 977.5ms | 749 → 775 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| +66.2% | +15.07ms | 100.0% | 22.8ms → 37.8ms | 18 → 30 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

| Change |   Delta |             % |            Time | Samples | Caller | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------ |
| +42.4% | +7.52ms | 48.3% → 51.3% | 17.7ms → 25.2ms | 14 → 20 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| +35.3% | +6.25ms | 48.3% → 48.7% | 17.7ms → 24.0ms | 14 → 19 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

| Change |   Delta |              % |              Time | Samples | Caller | Location                                               |
| -----: | ------: | -------------: | ----------------: | ------: | ------ | ------------------------------------------------------ |
|  +4.3% | +4.73ms | 100.0% → 94.7% | 108.8ms → 113.5ms | 86 → 90 | `$c`   | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|    new | +3.78ms |    0.0% → 3.2% |       0ms → 3.8ms |   0 → 3 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501`            |
|    new | +2.52ms |    0.0% → 2.1% |       0ms → 2.5ms |   0 → 2 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`)

|  Change |   Delta |      % |           Time | Samples | Caller        | Location                                   |
| ------: | ------: | -----: | -------------: | ------: | ------------- | ------------------------------------------ |
| +139.3% | +8.81ms | 100.0% | 6.3ms → 15.1ms |  5 → 12 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:108341`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| +77.3% | +8.80ms | 100.0% | 11.4ms → 20.2ms |  9 → 16 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |

##### `data` (`./node_modules/d3/dist/d3.min.js:2:23459`)

| Change |   Delta |            % |        Time | Samples | Caller                         | Location                                   |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------ | ------------------------------------------ |
|    new | +3.78ms | 0.0% → 50.0% | 0ms → 3.8ms |   0 → 3 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
|    new | +2.52ms | 0.0% → 33.3% | 0ms → 2.5ms |   0 → 2 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |
|    new | +1.26ms | 0.0% → 16.7% | 0ms → 1.3ms |   0 → 1 | `chartLayouts`                 | `./workload.mjs:116:24`                    |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

|  Change |   Delta |             % |            Time | Samples | Caller | Location                                  |
| ------: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
| +124.3% | +6.29ms | 26.7% → 42.9% |  5.1ms → 11.4ms |   4 → 9 | `g`    | `./node_modules/d3/dist/d3.min.js:2:1758` |
|   +8.8% | +1.22ms | 73.3% → 57.1% | 13.9ms → 15.1ms | 11 → 12 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |

##### `Oc` (`./node_modules/d3/dist/d3.min.js:2:102489`)

| Change |   Delta |            % |        Time | Samples | Caller      | Location                                    |
| -----: | ------: | -----------: | ----------: | ------: | ----------- | ------------------------------------------- |
|    new | +2.52ms | 0.0% → 40.0% | 0ms → 2.5ms |   0 → 2 | `kc`        | `./node_modules/d3/dist/d3.min.js:2:101394` |
|    new | +2.52ms | 0.0% → 40.0% | 0ms → 2.5ms |   0 → 2 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103087` |

##### `Gc` (`./node_modules/d3/dist/d3.min.js:2:106669`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ------------------------------------------- |
|     new | +2.52ms |  0.0% → 33.3% | 0ms → 2.5ms |   0 → 2 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103087` |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `kc`        | `./node_modules/d3/dist/d3.min.js:2:101413` |
|     new | +1.26ms |  0.0% → 16.7% | 0ms → 1.3ms |   0 → 1 | `$c`        | `./node_modules/d3/dist/d3.min.js:2:102050` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223199`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------------------ |
|    new | +5.04ms | 0.0% → 100.0% | 0ms → 5.0ms |   0 → 4 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:269888`)

| Change |   Delta |             % |        Time | Samples | Caller       | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------------ | ------------------------------------------------------ |
|    new | +5.04ms | 0.0% → 100.0% | 0ms → 5.0ms |   0 → 4 | `eachBefore` | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:142159`)

|  Change |   Delta |      % |          Time | Samples | Caller       | Location                                               |
| ------: | ------: | -----: | ------------: | ------: | ------------ | ------------------------------------------------------ |
| +398.5% | +5.04ms | 100.0% | 1.3ms → 6.3ms |   1 → 5 | `eachBefore` | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

| Change |   Delta |             % |          Time | Samples | Caller        | Location                                               |
| -----: | ------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------------ |
| +99.4% | +2.52ms | 28.6% → 36.4% | 2.5ms → 5.0ms |   2 → 4 | `f`           | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|    new | +1.26ms |   0.0% → 9.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751`            |
| +19.6% | +1.24ms | 71.4% → 54.5% | 6.3ms → 7.6ms |   5 → 6 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

|  Change |   Delta |      % |          Time | Samples | Caller | Location                                   |
| ------: | ------: | -----: | ------------: | ------: | ------ | ------------------------------------------ |
| +298.8% | +3.78ms | 100.0% | 1.3ms → 5.0ms |   1 → 4 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `v` (`./node_modules/d3/dist/d3.min.js:2:223843`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------- |
|    new | +5.04ms | 0.0% → 100.0% | 0ms → 5.0ms |   0 → 4 | `y`    | `./node_modules/d3/dist/d3.min.js:2:223816` |

##### `Yf` (`./node_modules/d3/dist/d3.min.js:2:112811`)

| Change |   Delta |              % |          Time | Samples | Caller         | Location                                               |
| -----: | ------: | -------------: | ------------: | ------: | -------------- | ------------------------------------------------------ |
| +49.6% | +2.51ms | 100.0% → 85.7% | 5.1ms → 7.6ms |   4 → 6 | `Lf`           | `./node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |
|    new | +1.26ms |   0.0% → 14.3% |   0ms → 1.3ms |   0 → 1 | `MultiPolygon` | `./node_modules/d3/dist/d3.min.js:2:112551 → 2:112532` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78541`)

| Change |   Delta |      % |           Time | Samples | Caller | Location                                             |
| -----: | ------: | -----: | -------------: | ------: | ------ | ---------------------------------------------------- |
| +59.5% | +3.77ms | 100.0% | 6.3ms → 10.1ms |   5 → 8 | `u`    | `./node_modules/d3/dist/d3.min.js:2:78515 → 2:78514` |

##### `G` (`./node_modules/d3/dist/d3.min.js:2:6258`)

| Change |   Delta |            % |        Time | Samples | Caller         | Location                                  |
| -----: | ------: | -----------: | ----------: | ------: | -------------- | ----------------------------------------- |
|    new | +1.26ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `r`            | `./node_modules/d3/dist/d3.min.js:2:7022` |
|    new | +1.26ms | 0.0% → 50.0% | 0ms → 1.3ms |   0 → 1 | `chartLayouts` | `./workload.mjs:116:24`                   |

##### `removeChild` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller   | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | -------- | ------------------------------------------ |
| +29.6% | +3.75ms | 100.0% | 12.6ms → 16.4ms | 10 → 13 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `appendChild` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------ |
| +16.3% | +1.24ms | 100.0% | 7.6ms → 8.8ms |   6 → 7 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `(anonymous)` (`./workload.mjs:193:9`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
|    new | +2.52ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:120:25`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ----------------------------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `(anonymous)` (`./workload.mjs:121:16`)

| Change |   Delta |             % |        Time | Samples | Caller         | Location                |
| -----: | ------: | ------------: | ----------: | ------: | -------------- | ----------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `chartLayouts` (`./workload.mjs:116:24`)

| Change |   Delta |      % |           Time | Samples | Caller                         | Location              |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------ | --------------------- |
| +13.9% | +1.24ms | 100.0% | 8.9ms → 10.1ms |   7 → 8 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

| Change |    Delta |             % |            Time | Samples | Caller | Location                                   |
| -----: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------ |
| -41.1% | -22.87ms | 46.3% → 35.1% | 55.7ms → 32.8ms | 44 → 26 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  -6.2% |  -3.97ms | 53.7% → 64.9% | 64.5ms → 60.5ms | 51 → 48 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

| Change |    Delta |      % |              Time |   Samples | Caller        | Location                                               |
| -----: | -------: | -----: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
|  -5.2% | -25.41ms | 100.0% | 490.8ms → 465.4ms | 388 → 369 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |    Delta |              % |             Time | Samples | Caller        | Location                                   |
| -----: | -------: | -------------: | ---------------: | ------: | ------------- | ------------------------------------------ |
| -22.7% | -23.00ms | 100.0% → 98.4% | 101.2ms → 78.2ms | 80 → 62 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|    new |  +1.26ms |    0.0% → 1.6% |      0ms → 1.3ms |   0 → 1 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233696`)

| Change |    Delta |             % |            Time | Samples | Caller          | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| -36.6% | -15.26ms | 94.3% → 95.5% | 41.7ms → 26.5ms | 33 → 21 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|  -0.3% |  -3.72µs |   2.9% → 4.5% |           1.3ms |       1 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

| Change |    Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -26.4% | -14.03ms | 100.0% | 53.1ms → 39.1ms | 42 → 31 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

| Change |   Delta |             % |              Time |   Samples | Caller        | Location                                               |
| -----: | ------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
| -55.7% | -6.34ms |   1.8% → 0.8% |    11.4ms → 5.0ms |     9 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|  -0.9% | -5.52ms | 95.3% → 96.1% | 589.5ms → 584.0ms | 466 → 463 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
|  -9.0% | -7.82ms | 100.0% | 87.3ms → 79.5ms | 69 → 63 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235607 → 2:235656` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`)

| Change |   Delta |     % |          Time | Samples | Caller | Location                                   |
| -----: | ------: | ----: | ------------: | ------: | ------ | ------------------------------------------ |
| -66.8% | -5.07ms | 66.7% | 7.6ms → 2.5ms |   6 → 2 | `text` | `./node_modules/d3/dist/d3.min.js:2:26408` |
| -66.8% | -2.53ms | 33.3% | 3.8ms → 1.3ms |   3 → 1 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | ------ | ------------------------------------------------------ |
| -85.8% | -7.59ms | 100.0% | 8.9ms → 1.3ms |   7 → 1 | `h`    | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

| Change |   Delta |             % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -23.0% | -6.39ms | 40.7% → 34.7% | 27.8ms → 21.4ms | 22 → 17 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  -0.3% | -0.12ms | 59.3% → 65.3% | 40.5ms → 40.4ms |      32 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |

##### `(anonymous)` (`./workload.mjs:205:13`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------ |
| -83.4% | -6.33ms | 100.0% | 7.6ms → 1.3ms |   6 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                  |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ----------------------------------------- |
|  -8.1% | -5.23ms | 100.0% | 64.5ms → 59.3ms | 51 → 47 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:232415`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ------------------------------------------------------ |
| -80.1% | -5.06ms | 100.0% | 6.3ms → 1.3ms |   5 → 1 | `l.initialize` | `./node_modules/d3/dist/d3.min.js:2:233001 → 2:233050` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:232151`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| -23.3% | -3.83ms | 100.0% | 16.4ms → 12.6ms | 13 → 10 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `point` (`./node_modules/d3/dist/d3.min.js:2:131542`)

| Change |   Delta |             % |           Time | Samples | Caller         | Location                                               |
| -----: | ------: | ------------: | -------------: | ------: | -------------- | ------------------------------------------------------ |
| -33.5% | -3.82ms | 69.2% → 60.0% | 11.4ms → 7.6ms |   9 → 6 | `Yf`           | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
|    new | +2.52ms |  0.0% → 20.0% |    0ms → 2.5ms |   0 → 2 | `MultiPolygon` | `./node_modules/d3/dist/d3.min.js:2:112551 → 2:112532` |
| -33.5% | -1.27ms | 23.1% → 20.0% |  3.8ms → 2.5ms |   3 → 2 | `Bf`           | `./node_modules/d3/dist/d3.min.js:2:112719 → 2:112700` |

##### `r` (`./node_modules/d3/dist/d3.min.js:2:109022`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | ------ | ------------------------------------------------------ |
| -60.1% | -3.80ms | 100.0% | 6.3ms → 2.5ms |   5 → 2 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

|  Change |   Delta |              % |          Time | Samples | Caller         | Location                |
| ------: | ------: | -------------: | ------------: | ------: | -------------- | ----------------------- |
|  -50.1% | -2.54ms | 80.0% → 100.0% | 5.1ms → 2.5ms |   4 → 2 | `chartLayouts` | `./workload.mjs:116:24` |
| removed | -1.26ms |   20.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`  | `./workload.mjs:195:13` |

##### `(anonymous)` (`./workload.mjs:82:7`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                  |
| -----: | ------: | -----: | ------------: | ------: | ------ | ----------------------------------------- |
| -75.1% | -3.80ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location              |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | --------------------- |
| -75.1% | -3.80ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `M` (`./node_modules/d3/dist/d3.min.js:2:109939`)

|  Change |   Delta |            % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -2.53ms | 66.7% → 0.0% | 2.5ms → 0ms |   2 → 0 | `(anonymous)` | `./workload.mjs:205:13`                    |
| removed | -1.26ms | 33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `text`        | `./node_modules/d3/dist/d3.min.js:2:26408` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:218226`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -3.79ms | 100.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16765`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ----------- | ------------------------------------------ |
| -40.2% | -2.54ms | 100.0% | 6.3ms → 3.8ms |   5 → 3 | `selectAll` | `./node_modules/d3/dist/d3.min.js:2:22626` |

##### `select` (`./node_modules/d3/dist/d3.min.js:2:22328`)

|  Change |   Delta |              % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | -------------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -1.26ms |   25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./workload.mjs:201:13`                    |
| removed | -1.26ms |   25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208` |
|   -0.3% | -0.01ms | 50.0% → 100.0% |       2.5ms |       2 | `append`      | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `insertBefore` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Caller         | Location                                   |
| -----: | ------: | -------------: | -------------: | ------: | -------------- | ------------------------------------------ |
| -44.6% | -5.08ms | 100.0% → 71.4% | 11.4ms → 6.3ms |   9 → 5 | `appendChild`  | `./node_modules/d3/dist/d3.min.js:2:21447` |
|    new | +2.52ms |   0.0% → 28.6% |    0ms → 2.5ms |   0 → 2 | `insertBefore` | `./node_modules/d3/dist/d3.min.js:2:21520` |

##### `createElementNS` (`<unknown>`)

| Change |   Delta |     % |            Time | Samples | Caller        | Location                                   |
| -----: | ------: | ----: | --------------: | ------: | ------------- | ------------------------------------------ |
|  -2.2% | -1.46ms | 98.1% | 67.0ms → 65.6ms | 53 → 52 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |
|  -0.3% | -3.72µs |  1.9% |           1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16431` |

##### `compareDocumentPosition` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller  | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------- | ------------------------------------------ |
|  -0.3% | -0.01ms | 100.0% | 5.1ms → 5.0ms |       4 | `order` | `./node_modules/d3/dist/d3.min.js:2:24713` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location        |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------------- |
| -25.2% | -1.28ms | 100.0% | 5.1ms → 3.8ms |   4 → 3 | `(anonymous)` | `./run.mjs:1:1` |

##### `(anonymous)` (`./workload.mjs:157:29`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:139:12`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `f`    | `./node_modules/d3/dist/d3.min.js:2:194448` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142038` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `(anonymous)` (`./workload.mjs:124:13`)

| Change |   Delta |      % |  Time | Samples | Caller        | Location                                               |
| -----: | ------: | -----: | ----: | ------: | ------------- | ------------------------------------------------------ |
|  -0.3% | -0.01ms | 100.0% | 2.5ms |       2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |

##### `(anonymous)` (`./workload.mjs:133:22`)

| Change |   Delta |      % |  Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ----: | ------: | ------------- | ------------------------------------------ |
|  -0.3% | -3.72µs | 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |   Samples | Function              | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
|   +6.4% | +48.22ms | 18.0% → 19.1% | 759.0ms → 807.2ms | 600 → 640 | `a`                   | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +3.2% | +28.84ms | 21.7% → 22.3% | 914.6ms → 943.4ms | 723 → 748 | `Fc.visit`            | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|  +17.0% | +19.84ms |   2.8% → 3.2% | 116.4ms → 136.2ms |  92 → 108 | `(garbage collector)` | `<unknown>`                                            |
|  +13.3% | +17.27ms |   3.1% → 3.5% | 130.3ms → 147.6ms | 103 → 117 | `$c`                  | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|  +66.2% | +15.07ms |   0.5% → 0.9% |   22.8ms → 37.8ms |   18 → 30 | `u`                   | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|   +1.2% | +13.25ms | 25.3% → 25.6% |     1.07s → 1.08s | 845 → 858 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:76982`             |
|  +82.8% | +12.57ms |   0.4% → 0.7% |   15.2ms → 27.7ms |   12 → 22 | `from`                | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
|  +34.1% | +12.50ms |   0.9% → 1.2% |   36.7ms → 49.2ms |   29 → 39 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18042`             |
|  +13.9% | +12.35ms |   2.1% → 2.4% |  88.5ms → 100.9ms |   70 → 80 | `append`              | `./node_modules/d3/dist/d3.min.js:2:26726`             |
|  +10.2% | +12.26ms |   2.8% → 3.1% | 120.2ms → 132.4ms |  95 → 105 | `Fc.addAll`           | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|   +1.1% | +11.99ms | 25.3% → 25.6% |     1.07s → 1.08s | 845 → 857 | `o`                   | `./node_modules/d3/dist/d3.min.js:2:77004`             |
| +149.3% | +11.33ms |   0.2% → 0.4% |    7.6ms → 18.9ms |    6 → 15 | `Su`                  | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034`   |
| +111.9% | +11.32ms |   0.2% → 0.5% |   10.1ms → 21.4ms |    8 → 17 | `Lu`                  | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|   +1.0% | +10.75ms | 25.2% → 25.4% |     1.06s → 1.07s | 839 → 850 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|   +1.0% | +10.72ms | 25.4% → 25.6% |     1.07s → 1.08s | 847 → 858 | `i`                   | `./node_modules/d3/dist/d3.min.js:2:76807`             |
| +199.1% | +10.08ms |   0.1% → 0.4% |    5.1ms → 15.1ms |    4 → 12 | `update`              | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  +99.4% | +10.06ms |   0.2% → 0.5% |   10.1ms → 20.2ms |    8 → 16 | `data`                | `./node_modules/d3/dist/d3.min.js:2:23459`             |
|  +13.5% |  +9.87ms |   1.7% → 2.0% |   73.4ms → 83.2ms |   58 → 66 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:12208`             |
|  +12.2% |  +9.85ms |   1.9% → 2.1% |   81.0ms → 90.8ms |   64 → 72 | `join`                | `./node_modules/d3/dist/d3.min.js:2:24162`             |
|  +77.3% |  +8.80ms |   0.3% → 0.5% |   11.4ms → 20.2ms |    9 → 16 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function      | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
|   +6.4% | +48.22ms | 18.0% → 19.1% | 759.0ms → 807.2ms | 600 → 640 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +3.2% | +28.84ms | 21.7% → 22.3% | 914.6ms → 943.4ms | 723 → 748 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|  +13.3% | +17.27ms |   3.1% → 3.5% | 130.3ms → 147.6ms | 103 → 117 | `$c`          | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|  +66.2% | +15.07ms |   0.5% → 0.9% |   22.8ms → 37.8ms |   18 → 30 | `u`           | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|   +1.2% | +13.25ms | 25.3% → 25.6% |     1.07s → 1.08s | 845 → 858 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982`             |
|  +82.8% | +12.57ms |   0.4% → 0.7% |   15.2ms → 27.7ms |   12 → 22 | `from`        | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
|  +34.1% | +12.50ms |   0.9% → 1.2% |   36.7ms → 49.2ms |   29 → 39 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042`             |
|  +13.9% | +12.35ms |   2.1% → 2.4% |  88.5ms → 100.9ms |   70 → 80 | `append`      | `./node_modules/d3/dist/d3.min.js:2:26726`             |
|  +10.2% | +12.26ms |   2.8% → 3.1% | 120.2ms → 132.4ms |  95 → 105 | `Fc.addAll`   | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|   +1.1% | +11.99ms | 25.3% → 25.6% |     1.07s → 1.08s | 845 → 857 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004`             |
| +149.3% | +11.33ms |   0.2% → 0.4% |    7.6ms → 18.9ms |    6 → 15 | `Su`          | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034`   |
| +111.9% | +11.32ms |   0.2% → 0.5% |   10.1ms → 21.4ms |    8 → 17 | `Lu`          | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|   +1.0% | +10.75ms | 25.2% → 25.4% |     1.06s → 1.07s | 839 → 850 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|   +1.0% | +10.72ms | 25.4% → 25.6% |     1.07s → 1.08s | 847 → 858 | `i`           | `./node_modules/d3/dist/d3.min.js:2:76807`             |
| +199.1% | +10.08ms |   0.1% → 0.4% |    5.1ms → 15.1ms |    4 → 12 | `update`      | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  +99.4% | +10.06ms |   0.2% → 0.5% |   10.1ms → 20.2ms |    8 → 16 | `data`        | `./node_modules/d3/dist/d3.min.js:2:23459`             |
|  +13.5% |  +9.87ms |   1.7% → 2.0% |   73.4ms → 83.2ms |   58 → 66 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208`             |
|  +12.2% |  +9.85ms |   1.9% → 2.1% |   81.0ms → 90.8ms |   64 → 72 | `join`        | `./node_modules/d3/dist/d3.min.js:2:24162`             |
|  +77.3% |  +8.80ms |   0.3% → 0.5% |   11.4ms → 20.2ms |    9 → 16 | `g`           | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
|  +85.2% |  +7.54ms |   0.2% → 0.4% |    8.9ms → 16.4ms |    7 → 13 | `eachBefore`  | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |

##### Garbage collector

| Change |    Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
| +17.0% | +19.84ms | 2.8% → 3.2% | 116.4ms → 136.2ms | 92 → 108 | `(garbage collector)` | `<unknown>` |

##### Native

| Change |   Delta |           % |            Time | Samples | Function      | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +29.6% | +3.75ms | 0.3% → 0.4% | 12.6ms → 16.4ms | 10 → 13 | `removeChild` | `<unknown>` |
| +16.3% | +1.24ms |        0.2% |   7.6ms → 8.8ms |   6 → 7 | `appendChild` | `<unknown>` |

##### Ours

| Change |   Delta |            % |            Time | Samples | Function      | Location                |
| -----: | ------: | -----------: | --------------: | ------: | ------------- | ----------------------- |
| +22.7% | +7.47ms |  0.8% → 1.0% | 32.9ms → 40.4ms | 26 → 32 | `(anonymous)` | `./workload.mjs:185:13` |
|    new | +2.52ms |  0.0% → 0.1% |     0ms → 2.5ms |   0 → 2 | `(anonymous)` | `./workload.mjs:111:13` |
|    new | +1.26ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:60:18`  |
|    new | +1.26ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:120:25` |
|    new | +1.26ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:121:16` |
| +49.6% | +1.25ms |         0.1% |   2.5ms → 3.8ms |   2 → 3 | `(anonymous)` | `./workload.mjs:193:9`  |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |             % |              Time |       Samples | Function                       | Location                                               |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------ | ------------------------------------------------------ |
|  -2.4% | -30.17ms | 29.7% → 28.9% |     1.25s → 1.22s |     991 → 970 | `f`                            | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| -13.4% | -28.37ms |   5.0% → 4.4% | 212.5ms → 184.1ms |     168 → 146 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|  -7.1% | -18.42ms |   6.1% → 5.7% | 259.3ms → 240.9ms |     205 → 191 | `attr`                         | `./node_modules/d3/dist/d3.min.js:2:25709`             |
| -16.0% | -17.99ms |   2.7% → 2.2% |  112.6ms → 94.6ms |       89 → 75 | `p`                            | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
| -37.3% | -16.53ms |   1.0% → 0.7% |   44.3ms → 27.7ms |       35 → 22 | `l`                            | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| -25.2% | -14.04ms |   1.3% → 1.0% |   55.7ms → 41.6ms |       44 → 33 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:19664`             |
| -26.4% | -14.03ms |   1.3% → 0.9% |   53.1ms → 39.1ms |       42 → 31 | `J`                            | `./node_modules/d3/dist/d3.min.js:2:8205`              |
| -23.5% | -12.77ms |   1.3% → 1.0% |   54.4ms → 41.6ms |       43 → 33 | `text`                         | `./node_modules/d3/dist/d3.min.js:2:26408`             |
|  -1.7% | -10.65ms | 14.7% → 14.4% | 618.6ms → 607.9ms |     489 → 482 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
| -80.1% | -10.13ms |   0.3% → 0.1% |    12.6ms → 2.5ms |        10 → 2 | `f`                            | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -0.2% |  -8.04ms | 95.3% → 94.9% |     4.02s → 4.01s | 3,179 → 3,182 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                                  |
|  -5.0% |  -6.70ms |   3.1% → 3.0% | 132.8ms → 126.1ms |     105 → 100 | `Fc.visitAfter`                | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -10.5% |  -6.49ms |   1.5% → 1.3% |   62.0ms → 55.5ms |       49 → 44 | `chartBreakdowns`              | `./workload.mjs:39:27`                                 |
| -15.0% |  -6.43ms |   1.0% → 0.9% |   43.0ms → 36.6ms |       34 → 29 | `(anonymous)`                  | `./workload.mjs:201:13`                                |
| -31.5% |  -6.37ms |   0.5% → 0.3% |   20.2ms → 13.9ms |       16 → 11 | `(anonymous)`                  | `./workload.mjs:195:13`                                |
| -33.5% |  -6.36ms |   0.4% → 0.3% |   19.0ms → 12.6ms |       15 → 10 | `D`                            | `./node_modules/d3/dist/d3.min.js:2:4759`              |
| -62.6% |  -6.34ms |   0.2% → 0.1% |    10.1ms → 3.8ms |         8 → 3 | `force`                        | `./node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
|  -0.2% |  -5.93ms | 88.5% → 88.2% |             3.73s | 2,952 → 2,956 | `chartLayouts`                 | `./workload.mjs:116:24`                                |
|  -0.1% |  -5.52ms | 95.4% → 95.0% |             4.02s | 3,180 → 3,185 | `(anonymous)`                  | `./run.mjs:1:1`                                        |
|  -9.6% |  -5.20ms |   1.3% → 1.2% |   54.4ms → 49.2ms |       43 → 39 | `Lf`                           | `./node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function        | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
|  -2.4% | -30.17ms | 29.7% → 28.9% |     1.25s → 1.22s | 991 → 970 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| -13.4% | -28.37ms |   5.0% → 4.4% | 212.5ms → 184.1ms | 168 → 146 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|  -7.1% | -18.42ms |   6.1% → 5.7% | 259.3ms → 240.9ms | 205 → 191 | `attr`          | `./node_modules/d3/dist/d3.min.js:2:25709`             |
| -16.0% | -17.99ms |   2.7% → 2.2% |  112.6ms → 94.6ms |   89 → 75 | `p`             | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
| -37.3% | -16.53ms |   1.0% → 0.7% |   44.3ms → 27.7ms |   35 → 22 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| -25.2% | -14.04ms |   1.3% → 1.0% |   55.7ms → 41.6ms |   44 → 33 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:19664`             |
| -26.4% | -14.03ms |   1.3% → 0.9% |   53.1ms → 39.1ms |   42 → 31 | `J`             | `./node_modules/d3/dist/d3.min.js:2:8205`              |
| -23.5% | -12.77ms |   1.3% → 1.0% |   54.4ms → 41.6ms |   43 → 33 | `text`          | `./node_modules/d3/dist/d3.min.js:2:26408`             |
|  -1.7% | -10.65ms | 14.7% → 14.4% | 618.6ms → 607.9ms | 489 → 482 | `h`             | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
| -80.1% | -10.13ms |   0.3% → 0.1% |    12.6ms → 2.5ms |    10 → 2 | `f`             | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -5.0% |  -6.70ms |   3.1% → 3.0% | 132.8ms → 126.1ms | 105 → 100 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -33.5% |  -6.36ms |   0.4% → 0.3% |   19.0ms → 12.6ms |   15 → 10 | `D`             | `./node_modules/d3/dist/d3.min.js:2:4759`              |
| -62.6% |  -6.34ms |   0.2% → 0.1% |    10.1ms → 3.8ms |     8 → 3 | `force`         | `./node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
|  -9.6% |  -5.20ms |   1.3% → 1.2% |   54.4ms → 49.2ms |   43 → 39 | `Lf`            | `./node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |
| -22.5% |  -5.11ms |   0.5% → 0.4% |   22.8ms → 17.7ms |   18 → 14 | `t`             | `./node_modules/d3/dist/d3.min.js:2:4909`              |
| -40.2% |  -5.08ms |   0.3% → 0.2% |    12.6ms → 7.6ms |    10 → 6 | `appendChild`   | `./node_modules/d3/dist/d3.min.js:2:21447`             |
| -57.3% |  -5.07ms |   0.2% → 0.1% |     8.9ms → 3.8ms |     7 → 3 | `p`             | `./node_modules/d3/dist/d3.min.js:2:236084 → 2:236133` |
|  -7.6% |  -3.94ms |   1.2% → 1.1% |   51.9ms → 47.9ms |   41 → 38 | `Yf`            | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
| -17.9% |  -3.85ms |   0.5% → 0.4% |   21.5ms → 17.7ms |   17 → 14 | `F`             | `./node_modules/d3/dist/d3.min.js:2:4882`              |
| -23.3% |  -3.83ms |   0.4% → 0.3% |   16.4ms → 12.6ms |   13 → 10 | `l`             | `./node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |

##### Native

| Change |   Delta |           % |            Time | Samples | Function                  | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------------------- | ----------- |
| -13.9% | -3.87ms | 0.7% → 0.6% | 27.8ms → 24.0ms | 22 → 19 | `(program)`               | `<unknown>` |
| -22.5% | -2.56ms | 0.3% → 0.2% |  11.4ms → 8.8ms |   9 → 7 | `insertBefore`            | `<unknown>` |
|  -2.1% | -1.46ms |        1.6% | 68.3ms → 66.8ms | 54 → 53 | `createElementNS`         | `<unknown>` |
|  -0.3% | -0.01ms |        0.1% |   5.1ms → 5.0ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Ours

|  Change |   Delta |             % |            Time |       Samples | Function                       | Location                |
| ------: | ------: | ------------: | --------------: | ------------: | ------------------------------ | ----------------------- |
|   -0.2% | -8.04ms | 95.3% → 94.9% |   4.02s → 4.01s | 3,179 → 3,182 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
|  -10.5% | -6.49ms |   1.5% → 1.3% | 62.0ms → 55.5ms |       49 → 44 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  -15.0% | -6.43ms |   1.0% → 0.9% | 43.0ms → 36.6ms |       34 → 29 | `(anonymous)`                  | `./workload.mjs:201:13` |
|  -31.5% | -6.37ms |   0.5% → 0.3% | 20.2ms → 13.9ms |       16 → 11 | `(anonymous)`                  | `./workload.mjs:195:13` |
|   -0.2% | -5.93ms | 88.5% → 88.2% |           3.73s | 2,952 → 2,956 | `chartLayouts`                 | `./workload.mjs:116:24` |
|   -0.1% | -5.52ms | 95.4% → 95.0% |           4.02s | 3,180 → 3,185 | `(anonymous)`                  | `./run.mjs:1:1`         |
|  -50.1% | -3.81ms |   0.2% → 0.1% |   7.6ms → 3.8ms |         6 → 3 | `(anonymous)`                  | `./workload.mjs:82:7`   |
|   -8.3% | -2.62ms |          0.7% | 31.6ms → 29.0ms |       25 → 23 | `(anonymous)`                  | `./workload.mjs:205:13` |
| removed | -2.53ms |   0.1% → 0.0% |     2.5ms → 0ms |         2 → 0 | `(anonymous)`                  | `./workload.mjs:221:13` |
|  -20.2% | -1.28ms |          0.1% |   6.3ms → 5.0ms |         5 → 4 | `(anonymous)`                  | `./workload.mjs:157:29` |
|  -50.1% | -1.27ms |  0.1% → <0.1% |   2.5ms → 1.3ms |         2 → 1 | `(anonymous)`                  | `./workload.mjs:139:12` |
| removed | -1.26ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `(anonymous)`                  | `./workload.mjs:100:10` |
| removed | -1.26ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `(anonymous)`                  | `./workload.mjs:123:12` |
|   -0.3% | -0.01ms |          0.1% |           2.5ms |             2 | `(anonymous)`                  | `./workload.mjs:124:13` |
|   -0.3% | -3.72µs |         <0.1% |           1.3ms |             1 | `(anonymous)`                  | `./workload.mjs:11:29`  |
|   -0.3% | -3.72µs |         <0.1% |           1.3ms |             1 | `(anonymous)`                  | `./workload.mjs:199:25` |
|   -0.3% | -3.72µs |         <0.1% |           1.3ms |             1 | `(anonymous)`                  | `./workload.mjs:133:22` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

| Change |    Delta |              % |              Time |   Samples | Caller        | Location                                               |
| -----: | -------: | -------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
|  +6.2% | +46.96ms | 100.0% → 99.8% | 759.0ms → 805.9ms | 600 → 639 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|    new |  +1.26ms |    0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `h`           | `./node_modules/d3/dist/d3.min.js:2:235656`            |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

| Change |    Delta |             % |              Time |   Samples | Caller | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | ------ | ------------------------------------------------------ |
|  +2.4% | +14.60ms | 66.7% → 66.2% | 609.7ms → 624.3ms | 482 → 495 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|  +4.7% | +14.24ms | 33.3% → 33.8% | 304.9ms → 319.1ms | 241 → 253 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

| Change |    Delta |             % |            Time | Samples | Caller        | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| +39.2% | +23.79ms | 46.6% → 57.3% | 60.7ms → 84.5ms | 48 → 67 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
| -11.2% |  -7.77ms | 53.4% → 41.9% | 69.6ms → 61.8ms | 55 → 49 | `f`           | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|    new |  +1.26ms |   0.0% → 0.9% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751`            |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| +66.2% | +15.07ms | 100.0% | 22.8ms → 37.8ms | 18 → 30 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

| Change |    Delta |      % |          Time |   Samples | Caller | Location                                   |
| -----: | -------: | -----: | ------------: | --------: | ------ | ------------------------------------------ |
|  +1.2% | +13.25ms | 100.0% | 1.07s → 1.08s | 845 → 858 | `i`    | `./node_modules/d3/dist/d3.min.js:2:76807` |

##### `from` (`./node_modules/d3/dist/d3.min.js:2:94282`)

| Change |    Delta |      % |            Time | Samples | Caller         | Location                |
| -----: | -------: | -----: | --------------: | ------: | -------------- | ----------------------- |
| +82.8% | +12.57ms | 100.0% | 15.2ms → 27.7ms | 12 → 22 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

| Change |   Delta |             % |            Time | Samples | Caller | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------ |
| +42.4% | +7.52ms | 48.3% → 51.3% | 17.7ms → 25.2ms | 14 → 20 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| +35.3% | +6.25ms | 48.3% → 48.7% | 17.7ms → 24.0ms | 14 → 19 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `append` (`./node_modules/d3/dist/d3.min.js:2:26726`)

| Change |   Delta |             % |            Time | Samples | Caller            | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | ----------------- | ------------------------------------------ |
| +22.7% | +7.47ms | 37.1% → 40.0% | 32.9ms → 40.4ms | 26 → 32 | `(anonymous)`     | `./workload.mjs:185:13`                    |
| +49.6% | +3.76ms |  8.6% → 11.2% |  7.6ms → 11.4ms |   6 → 9 | `h`               | `./node_modules/d3/dist/d3.min.js:2:12208` |
| -40.2% | -2.54ms |   7.1% → 3.7% |   6.3ms → 3.8ms |   5 → 3 | `chartLayouts`    | `./workload.mjs:116:24`                    |
|  +5.9% | +2.40ms | 45.7% → 42.5% | 40.5ms → 42.9ms | 32 → 34 | `join`            | `./node_modules/d3/dist/d3.min.js:2:24162` |
|    new | +1.26ms |   0.0% → 1.2% |     0ms → 1.3ms |   0 → 1 | `chartBreakdowns` | `./workload.mjs:39:27`                     |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

| Change |   Delta |              % |              Time |  Samples | Caller | Location                                               |
| -----: | ------: | -------------: | ----------------: | -------: | ------ | ------------------------------------------------------ |
|  +5.0% | +5.95ms | 100.0% → 95.2% | 120.2ms → 126.1ms | 95 → 100 | `$c`   | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|    new | +3.78ms |    0.0% → 2.9% |       0ms → 3.8ms |    0 → 3 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501`            |
|    new | +2.52ms |    0.0% → 1.9% |       0ms → 2.5ms |    0 → 2 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054`            |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |    Delta |      % |          Time |   Samples | Caller        | Location                                   |
| -----: | -------: | -----: | ------------: | --------: | ------------- | ------------------------------------------ |
|  +1.1% | +11.99ms | 100.0% | 1.07s → 1.08s | 845 → 857 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `Su` (`./node_modules/d3/dist/d3.min.js:2:82034`)

|  Change |    Delta |      % |           Time | Samples | Caller | Location                                             |
| ------: | -------: | -----: | -------------: | ------: | ------ | ---------------------------------------------------- |
| +149.3% | +11.33ms | 100.0% | 7.6ms → 18.9ms |  6 → 15 | `Lu`   | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618` |

##### `Lu` (`./node_modules/d3/dist/d3.min.js:2:94618`)

|  Change |    Delta |      % |            Time | Samples | Caller | Location                                             |
| ------: | -------: | -----: | --------------: | ------: | ------ | ---------------------------------------------------- |
| +111.9% | +11.32ms | 100.0% | 10.1ms → 21.4ms |  8 → 17 | `from` | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |    Delta |      % |          Time |   Samples | Caller | Location                                   |
| -----: | -------: | -----: | ------------: | --------: | ------ | ------------------------------------------ |
|  +1.0% | +10.75ms | 100.0% | 1.06s → 1.07s | 839 → 850 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

| Change |    Delta |      % |          Time |   Samples | Caller | Location                                               |
| -----: | -------: | -----: | ------------: | --------: | ------ | ------------------------------------------------------ |
|  +1.0% | +10.72ms | 100.0% | 1.07s → 1.08s | 847 → 858 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `update` (`./node_modules/d3/dist/d3.min.js:2:82523`)

|  Change |    Delta |      % |           Time | Samples | Caller | Location                                             |
| ------: | -------: | -----: | -------------: | ------: | ------ | ---------------------------------------------------- |
| +199.1% | +10.08ms | 100.0% | 5.1ms → 15.1ms |  4 → 12 | `Su`   | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034` |

##### `data` (`./node_modules/d3/dist/d3.min.js:2:23459`)

|  Change |   Delta |             % |           Time | Samples | Caller                         | Location                                   |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------------------ |
| +298.8% | +3.78ms | 12.5% → 25.0% |  1.3ms → 5.0ms |   1 → 4 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
|  +59.5% | +3.77ms | 62.5% → 50.0% | 6.3ms → 10.1ms |   5 → 8 | `chartLayouts`                 | `./workload.mjs:116:24`                    |
|  +99.4% | +2.52ms |         25.0% |  2.5ms → 5.0ms |   2 → 4 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------ |
| +13.5% | +9.87ms | 100.0% | 73.4ms → 83.2ms | 58 → 66 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `join` (`./node_modules/d3/dist/d3.min.js:2:24162`)

| Change |    Delta |             % |            Time | Samples | Caller                         | Location                |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------ | ----------------------- |
| +34.2% | +11.25ms | 40.6% → 48.6% | 32.9ms → 44.1ms | 26 → 35 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
| -66.8% |  -2.53ms |   4.7% → 1.4% |   3.8ms → 1.3ms |   3 → 1 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  +2.6% |  +1.13ms | 54.7% → 50.0% | 44.3ms → 45.4ms | 35 → 36 | `chartLayouts`                 | `./workload.mjs:116:24` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:108341`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| +77.3% | +8.80ms | 100.0% | 11.4ms → 20.2ms |  9 → 16 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |

##### `eachBefore` (`./node_modules/d3/dist/d3.min.js:2:141754`)

|  Change |   Delta |             % |          Time | Samples | Caller | Location                                               |
| ------: | ------: | ------------: | ------------: | ------: | ------ | ------------------------------------------------------ |
| +132.6% | +5.03ms | 42.9% → 53.8% | 3.8ms → 8.8ms |   3 → 7 | `sort` | `./node_modules/d3/dist/d3.min.js:2:142142 → 2:142123` |
|  +49.6% | +2.51ms | 57.1% → 46.2% | 5.1ms → 7.6ms |   4 → 6 | `s`    | `./node_modules/d3/dist/d3.min.js:2:269724 → 2:269797` |

##### `removeChild` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller   | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | -------- | ------------------------------------------ |
| +29.6% | +3.75ms | 100.0% | 12.6ms → 16.4ms | 10 → 13 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `appendChild` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------ |
| +16.3% | +1.24ms | 100.0% | 7.6ms → 8.8ms |   6 → 7 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `(anonymous)` (`./workload.mjs:185:13`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------ |
| +22.7% | +7.47ms | 100.0% | 32.9ms → 40.4ms | 26 → 32 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162` |

##### `(anonymous)` (`./workload.mjs:111:13`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
|    new | +2.52ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `(anonymous)` (`./workload.mjs:60:18`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:120:25`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ----------------------------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `(anonymous)` (`./workload.mjs:121:16`)

| Change |   Delta |             % |        Time | Samples | Caller         | Location                |
| -----: | ------: | ------------: | ----------: | ------: | -------------- | ----------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:193:9`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------ |
| +49.6% | +1.25ms | 100.0% | 2.5ms → 3.8ms |   2 → 3 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

| Change |    Delta |      % |          Time |   Samples | Caller        | Location                                               |
| -----: | -------: | -----: | ------------: | --------: | ------------- | ------------------------------------------------------ |
|  -2.4% | -30.17ms | 100.0% | 1.25s → 1.22s | 991 → 970 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

| Change |    Delta |             % |              Time | Samples | Caller | Location                                   |
| -----: | -------: | ------------: | ----------------: | ------: | ------ | ------------------------------------------ |
| -24.2% | -21.71ms | 42.3% → 37.0% |   89.8ms → 68.1ms | 71 → 54 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  -5.4% |  -6.67ms | 57.7% → 63.0% | 122.7ms → 116.0ms | 97 → 92 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

| Change |    Delta |             % |              Time |   Samples | Caller                         | Location                                   |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ------------------------------------------ |
| -14.2% | -25.76ms | 69.8% → 64.4% | 180.9ms → 155.1ms | 143 → 123 | `chartLayouts`                 | `./workload.mjs:116:24`                    |
| +78.4% | +18.85ms |  9.3% → 17.8% |   24.0ms → 42.9ms |   19 → 34 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
| -26.9% |  -5.10ms |   7.3% → 5.8% |   19.0ms → 13.9ms |   15 → 11 | `(anonymous)`                  | `./workload.mjs:195:13`                    |
| -20.2% |  -3.84ms |   7.3% → 6.3% |   19.0ms → 15.1ms |   15 → 12 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |
| -15.6% |  -2.57ms |   6.3% → 5.8% |   16.4ms → 13.9ms |   13 → 11 | `chartBreakdowns`              | `./workload.mjs:39:27`                     |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |    Delta |              % |             Time | Samples | Caller        | Location                                   |
| -----: | -------: | -------------: | ---------------: | ------: | ------------- | ------------------------------------------ |
| -17.1% | -19.25ms | 100.0% → 98.7% | 112.6ms → 93.3ms | 89 → 74 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|    new |  +1.26ms |    0.0% → 1.3% |      0ms → 1.3ms |   0 → 1 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233696`)

| Change |    Delta |             % |            Time | Samples | Caller          | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| -36.6% | -15.26ms | 94.3% → 95.5% | 41.7ms → 26.5ms | 33 → 21 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|  -0.3% |  -3.72µs |   2.9% → 4.5% |           1.3ms |       1 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`)

| Change |    Delta |             % |            Time | Samples | Caller | Location                                   |
| -----: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------ |
| -36.9% | -13.99ms | 68.2% → 57.6% | 37.9ms → 24.0ms | 30 → 19 | `text` | `./node_modules/d3/dist/d3.min.js:2:26408` |
| -33.5% |  -1.27ms |   6.8% → 6.1% |   3.8ms → 2.5ms |   3 → 2 | `h`    | `./node_modules/d3/dist/d3.min.js:2:12208` |
|  +8.8% |  +1.22ms | 25.0% → 36.4% | 13.9ms → 15.1ms | 11 → 12 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

| Change |    Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -26.4% | -14.03ms | 100.0% | 53.1ms → 39.1ms | 42 → 31 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `text` (`./node_modules/d3/dist/d3.min.js:2:26408`)

|  Change |   Delta |             % |            Time | Samples | Caller                         | Location                                   |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------ | ------------------------------------------ |
|  -18.4% | -7.69ms | 76.7% → 81.8% | 41.7ms → 34.1ms | 33 → 27 | `(anonymous)`                  | `./workload.mjs:201:13`                    |
|  -57.3% | -5.07ms |  16.3% → 9.1% |   8.9ms → 3.8ms |   7 → 3 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
| removed | -2.53ms |   4.7% → 0.0% |     2.5ms → 0ms |   2 → 0 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |
| +199.1% | +2.52ms |   2.3% → 9.1% |   1.3ms → 3.8ms |   1 → 3 | `chartBreakdowns`              | `./workload.mjs:39:27`                     |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

| Change |   Delta |             % |              Time |   Samples | Caller        | Location                                               |
| -----: | ------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
| -55.7% | -6.34ms |   1.8% → 0.8% |    11.4ms → 5.0ms |     9 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|  -0.9% | -5.52ms | 95.3% → 96.1% | 589.5ms → 584.0ms | 466 → 463 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:218226`)

| Change |    Delta |      % |           Time | Samples | Caller        | Location                                   |
| -----: | -------: | -----: | -------------: | ------: | ------------- | ------------------------------------------ |
| -80.1% | -10.13ms | 100.0% | 12.6ms → 2.5ms |  10 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |   Delta |      % |          Time |       Samples | Caller        | Location        |
| -----: | ------: | -----: | ------------: | ------------: | ------------- | --------------- |
|  -0.2% | -8.04ms | 100.0% | 4.02s → 4.01s | 3,179 → 3,182 | `(anonymous)` | `./run.mjs:1:1` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

| Change |    Delta |             % |            Time | Samples | Caller | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -18.7% | -15.38ms | 61.9% → 53.0% | 82.2ms → 66.8ms | 65 → 53 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| +17.2% |  +8.68ms | 38.1% → 47.0% | 50.6ms → 59.3ms | 40 → 47 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

| Change |   Delta |      % |            Time | Samples | Caller                         | Location              |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------ | --------------------- |
| -10.5% | -6.49ms | 100.0% | 62.0ms → 55.5ms | 49 → 44 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `(anonymous)` (`./workload.mjs:201:13`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------ |
| -15.0% | -6.43ms | 100.0% | 43.0ms → 36.6ms | 34 → 29 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `(anonymous)` (`./workload.mjs:195:13`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------ |
| -31.5% | -6.37ms | 100.0% | 20.2ms → 13.9ms | 16 → 11 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `D` (`./node_modules/d3/dist/d3.min.js:2:4759`)

| Change |   Delta |      % |            Time | Samples | Caller            | Location               |
| -----: | ------: | -----: | --------------: | ------: | ----------------- | ---------------------- |
| -33.5% | -6.36ms | 100.0% | 19.0ms → 12.6ms | 15 → 10 | `chartBreakdowns` | `./workload.mjs:39:27` |

##### `force` (`./node_modules/d3/dist/d3.min.js:2:236745`)

|  Change |   Delta |              % |          Time | Samples | Caller                         | Location                |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------ | ----------------------- |
|  -57.3% | -5.07ms | 87.5% → 100.0% | 8.9ms → 3.8ms |   7 → 3 | `chartLayouts`                 | `./workload.mjs:116:24` |
| removed | -1.26ms |   12.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |

##### `chartLayouts` (`./workload.mjs:116:24`)

| Change |   Delta |      % |  Time |       Samples | Caller                         | Location              |
| -----: | ------: | -----: | ----: | ------------: | ------------------------------ | --------------------- |
|  -0.2% | -5.93ms | 100.0% | 3.73s | 2,952 → 2,956 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `Lf` (`./node_modules/d3/dist/d3.min.js:2:112904`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
|  -9.6% | -5.20ms | 100.0% | 54.4ms → 49.2ms | 43 → 39 | `a`    | `./node_modules/d3/dist/d3.min.js:2:244444 → 2:244493` |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:4909`)

|  Change |   Delta |             % |            Time | Samples | Caller | Location                                  |
| ------: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
|  -19.0% | -3.84ms | 88.9% → 92.9% | 20.2ms → 16.4ms | 16 → 13 | `F`    | `./node_modules/d3/dist/d3.min.js:2:4882` |
|  -50.1% | -1.27ms |  11.1% → 7.1% |   2.5ms → 1.3ms |   2 → 1 | `D`    | `./node_modules/d3/dist/d3.min.js:2:4759` |
| removed | -1.26ms |   5.6% → 0.0% |     1.3ms → 0ms |   1 → 0 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `appendChild` (`./node_modules/d3/dist/d3.min.js:2:21447`)

| Change |   Delta |      % |           Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | -------------: | ------: | ------------- | ------------------------------------------ |
| -40.2% | -5.08ms | 100.0% | 12.6ms → 7.6ms |  10 → 6 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:236133`)

| Change |   Delta |      % |          Time | Samples | Caller  | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | ------- | ------------------------------------------------------ |
| -57.3% | -5.07ms | 100.0% | 8.9ms → 3.8ms |   7 → 3 | `force` | `./node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |

##### `Yf` (`./node_modules/d3/dist/d3.min.js:2:112811`)

| Change |   Delta |             % |            Time | Samples | Caller         | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | -------------- | ------------------------------------------------------ |
|  -5.8% | -2.66ms | 87.8% → 89.5% | 45.5ms → 42.9ms | 36 → 34 | `Lf`           | `./node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |
| -20.2% | -1.28ms | 12.2% → 10.5% |   6.3ms → 5.0ms |   5 → 4 | `MultiPolygon` | `./node_modules/d3/dist/d3.min.js:2:112551 → 2:112532` |

##### `F` (`./node_modules/d3/dist/d3.min.js:2:4882`)

| Change |   Delta |             % |            Time | Samples | Caller | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
| -31.0% | -5.09ms | 76.5% → 64.3% | 16.4ms → 11.4ms |  13 → 9 | `D`    | `./node_modules/d3/dist/d3.min.js:2:4759` |
| +24.6% | +1.25ms | 23.5% → 35.7% |   5.1ms → 6.3ms |   4 → 5 | `P`    | `./node_modules/d3/dist/d3.min.js:2:4565` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:232151`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| -23.3% | -3.83ms | 100.0% | 16.4ms → 12.6ms | 13 → 10 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `insertBefore` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Caller         | Location                                   |
| -----: | ------: | -------------: | -------------: | ------: | -------------- | ------------------------------------------ |
| -44.6% | -5.08ms | 100.0% → 71.4% | 11.4ms → 6.3ms |   9 → 5 | `appendChild`  | `./node_modules/d3/dist/d3.min.js:2:21447` |
|    new | +2.52ms |   0.0% → 28.6% |    0ms → 2.5ms |   0 → 2 | `insertBefore` | `./node_modules/d3/dist/d3.min.js:2:21520` |

##### `createElementNS` (`<unknown>`)

| Change |   Delta |     % |            Time | Samples | Caller        | Location                                   |
| -----: | ------: | ----: | --------------: | ------: | ------------- | ------------------------------------------ |
|  -2.2% | -1.46ms | 98.1% | 67.0ms → 65.6ms | 53 → 52 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |
|  -0.3% | -3.72µs |  1.9% |           1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16431` |

##### `compareDocumentPosition` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller  | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------- | ------------------------------------------ |
|  -0.3% | -0.01ms | 100.0% | 5.1ms → 5.0ms |       4 | `order` | `./node_modules/d3/dist/d3.min.js:2:24713` |

##### `(anonymous)` (`./workload.mjs:82:7`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                  |
| -----: | ------: | -----: | ------------: | ------: | ------ | ----------------------------------------- |
| -50.1% | -3.81ms | 100.0% | 7.6ms → 3.8ms |   6 → 3 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `(anonymous)` (`./workload.mjs:205:13`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ------------------------------------------ |
|  -8.3% | -2.62ms | 100.0% | 31.6ms → 29.0ms | 25 → 23 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -2.53ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `(anonymous)` (`./workload.mjs:157:29`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------- |
| -20.2% | -1.28ms | 100.0% | 6.3ms → 5.0ms |   5 → 4 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:139:12`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------- |
| -50.1% | -1.27ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `f`    | `./node_modules/d3/dist/d3.min.js:2:194448` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142038` |

##### `(anonymous)` (`./workload.mjs:124:13`)

| Change |   Delta |      % |  Time | Samples | Caller        | Location                                               |
| -----: | ------: | -----: | ----: | ------: | ------------- | ------------------------------------------------------ |
|  -0.3% | -0.01ms | 100.0% | 2.5ms |       2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |

##### `(anonymous)` (`./workload.mjs:11:29`)

| Change |   Delta |      % |  Time | Samples | Caller                         | Location              |
| -----: | ------: | -----: | ----: | ------: | ------------------------------ | --------------------- |
|  -0.3% | -3.72µs | 100.0% | 1.3ms |       1 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `(anonymous)` (`./workload.mjs:199:25`)

| Change |   Delta |      % |  Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ----: | ------: | ------------- | ------------------------------------------ |
|  -0.3% | -3.72µs | 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:133:22`)

| Change |   Delta |      % |  Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ----: | ------: | ------------- | ------------------------------------------ |
|  -0.3% | -3.72µs | 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

| Change |    Delta |             % |              Time |   Samples | Callee          | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
| +39.2% | +23.79ms |  8.0% → 10.5% |   60.7ms → 84.5ms |   48 → 67 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|  +4.7% | +14.24ms | 40.2% → 39.5% | 304.9ms → 319.1ms | 241 → 253 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
| +17.2% |  +8.68ms |   6.7% → 7.3% |   50.6ms → 59.3ms |   40 → 47 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|    new |  +2.52ms |   0.0% → 0.3% |       0ms → 2.5ms |     0 → 2 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103087`            |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

| Change |   Delta |             % |              Time |   Samples | Callee | Location                                               |
| -----: | ------: | ------------: | ----------------: | --------: | ------ | ------------------------------------------------------ |
|  -2.0% | -5.90ms | 31.8% → 30.2% | 290.9ms → 285.0ms | 230 → 226 | `g`    | `./node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
|  -0.9% | -5.52ms | 64.5% → 61.9% | 589.5ms → 584.0ms | 466 → 463 | `h`    | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

|  Change |   Delta |             % |              Time |  Samples | Callee      | Location                                               |
| ------: | ------: | ------------: | ----------------: | -------: | ----------- | ------------------------------------------------------ |
|   +5.0% | +5.95ms | 92.2% → 85.5% | 120.2ms → 126.1ms | 95 → 100 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|     new | +2.52ms |   0.0% → 1.7% |       0ms → 2.5ms |    0 → 2 | `Ic`        | `./node_modules/d3/dist/d3.min.js:2:102458`            |
| +199.1% | +2.52ms |   1.0% → 2.6% |     1.3ms → 3.8ms |    1 → 3 | `Xc`        | `./node_modules/d3/dist/d3.min.js:2:106662 → 2:106643` |
|     new | +1.26ms |   0.0% → 0.9% |       0ms → 1.3ms |    0 → 1 | `Gc`        | `./node_modules/d3/dist/d3.min.js:2:106669`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

| Change |    Delta |              % |          Time |   Samples | Callee | Location                                   |
| -----: | -------: | -------------: | ------------: | --------: | ------ | ------------------------------------------ |
|  +1.1% | +11.99ms | 100.0% → 99.9% | 1.07s → 1.08s | 845 → 857 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `from` (`./node_modules/d3/dist/d3.min.js:2:94282`)

|  Change |    Delta |             % |            Time | Samples | Callee        | Location                                             |
| ------: | -------: | ------------: | --------------: | ------: | ------------- | ---------------------------------------------------- |
| +111.9% | +11.32ms | 66.7% → 77.3% | 10.1ms → 21.4ms |  8 → 17 | `Lu`          | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618` |
|  +32.9% |  +1.25ms | 25.0% → 18.2% |   3.8ms → 5.0ms |   3 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:94352 → 2:94333` |

##### `append` (`./node_modules/d3/dist/d3.min.js:2:26726`)

|  Change |    Delta |             % |            Time | Samples | Callee   | Location                                   |
| ------: | -------: | ------------: | --------------: | ------: | -------- | ------------------------------------------ |
|  +15.8% | +13.62ms | 97.1% → 98.8% | 86.0ms → 99.6ms | 68 → 79 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |
| removed |  -1.26ms |   1.4% → 0.0% |     1.3ms → 0ms |   1 → 0 | `It`     | `./node_modules/d3/dist/d3.min.js:2:16093` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

|  Change |   Delta |           % |          Time | Samples | Callee | Location                                               |
| ------: | ------: | ----------: | ------------: | ------: | ------ | ------------------------------------------------------ |
| removed | -2.53ms | 2.1% → 0.0% |   2.5ms → 0ms |   2 → 0 | `Ic`   | `./node_modules/d3/dist/d3.min.js:2:102477`            |
|     new | +2.52ms | 0.0% → 1.9% |   0ms → 2.5ms |   0 → 2 | `Gc`   | `./node_modules/d3/dist/d3.min.js:2:106669`            |
|     new | +2.52ms | 0.0% → 1.9% |   0ms → 2.5ms |   0 → 2 | `Oc`   | `./node_modules/d3/dist/d3.min.js:2:102489`            |
|  -20.2% | -1.28ms | 5.3% → 3.8% | 6.3ms → 5.0ms |   5 → 4 | `kc`   | `./node_modules/d3/dist/d3.min.js:2:101413 → 2:101394` |
|  -50.1% | -1.27ms | 2.1% → 1.0% | 2.5ms → 1.3ms |   2 → 1 | `Xc`   | `./node_modules/d3/dist/d3.min.js:2:106662 → 2:106643` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |    Delta |             % |          Time |   Samples | Callee        | Location                                   |
| -----: | -------: | ------------: | ------------: | --------: | ------------- | ------------------------------------------ |
|  +1.0% | +10.75ms | 99.3% → 99.2% | 1.06s → 1.07s | 839 → 850 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|    new |  +1.26ms |   0.0% → 0.1% |   0ms → 1.3ms |     0 → 1 | `au`          | `./node_modules/d3/dist/d3.min.js:2:79110` |
|    new |  +1.26ms |   0.0% → 0.1% |   0ms → 1.3ms |     0 → 1 | `p`           | `./node_modules/d3/dist/d3.min.js:2:77576` |

##### `Su` (`./node_modules/d3/dist/d3.min.js:2:82034`)

|  Change |    Delta |             % |           Time | Samples | Callee   | Location                                             |
| ------: | -------: | ------------: | -------------: | ------: | -------- | ---------------------------------------------------- |
| +199.1% | +10.08ms | 66.7% → 80.0% | 5.1ms → 15.1ms |  4 → 12 | `update` | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523` |
| removed |  -1.26ms |  16.7% → 0.0% |    1.3ms → 0ms |   1 → 0 | `Mu`     | `./node_modules/d3/dist/d3.min.js:2:80086`           |

##### `Lu` (`./node_modules/d3/dist/d3.min.js:2:94618`)

|  Change |    Delta |             % |           Time | Samples | Callee  | Location                                             |
| ------: | -------: | ------------: | -------------: | ------: | ------- | ---------------------------------------------------- |
| +149.3% | +11.33ms | 75.0% → 88.2% | 7.6ms → 18.9ms |  6 → 15 | `Su`    | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034` |
| removed |  -2.53ms |  25.0% → 0.0% |    2.5ms → 0ms |   2 → 0 | `_init` | `./node_modules/d3/dist/d3.min.js:2:94865`           |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |    Delta |            % |             Time | Samples | Callee | Location                                             |
| -----: | -------: | -----------: | ---------------: | ------: | ------ | ---------------------------------------------------- |
| -17.1% | -19.25ms | 10.6% → 8.7% | 112.6ms → 93.3ms | 89 → 74 | `p`    | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576` |
|  -0.3% |  -3.72µs |         0.1% |            1.3ms |       1 | `au`   | `./node_modules/d3/dist/d3.min.js:2:79111 → 2:79110` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

| Change |    Delta |              % |          Time |   Samples | Callee        | Location                                   |
| -----: | -------: | -------------: | ------------: | --------: | ------------- | ------------------------------------------ |
|  +1.2% | +13.25ms | 99.8% → 100.0% | 1.07s → 1.08s | 845 → 858 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `update` (`./node_modules/d3/dist/d3.min.js:2:82523`)

| Change |   Delta |             % |          Time | Samples | Callee         | Location                                             |
| -----: | ------: | ------------: | ------------: | ------: | -------------- | ---------------------------------------------------- |
|    new | +2.52ms |  0.0% → 16.7% |   0ms → 2.5ms |   0 → 2 | `Cu`           | `./node_modules/d3/dist/d3.min.js:2:86467`           |
| +99.4% | +2.52ms | 50.0% → 33.3% | 2.5ms → 5.0ms |   2 → 4 | `_legalize`    | `./node_modules/d3/dist/d3.min.js:2:85298 → 2:85279` |
|    new | +1.26ms |   0.0% → 8.3% |   0ms → 1.3ms |   0 → 1 | `_hashKey`     | `./node_modules/d3/dist/d3.min.js:2:85119`           |
|    new | +1.26ms |   0.0% → 8.3% |   0ms → 1.3ms |   0 → 1 | `_addTriangle` | `./node_modules/d3/dist/d3.min.js:2:85935`           |

##### `data` (`./node_modules/d3/dist/d3.min.js:2:23459`)

| Change |   Delta |             % |          Time | Samples | Callee | Location                                   |
| -----: | ------: | ------------: | ------------: | ------: | ------ | ------------------------------------------ |
| +39.6% | +2.50ms | 62.5% → 43.8% | 6.3ms → 8.8ms |   5 → 7 | `en`   | `./node_modules/d3/dist/d3.min.js:2:17247` |
|  -0.3% | -0.01ms | 37.5% → 18.8% |         3.8ms |       3 | `rn`   | `./node_modules/d3/dist/d3.min.js:2:17402` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

|  Change |    Delta |             % |            Time | Samples | Callee   | Location                                   |
| ------: | -------: | ------------: | --------------: | ------: | -------- | ------------------------------------------ |
|  +78.4% | +18.85ms | 32.8% → 51.5% | 24.0ms → 42.9ms | 19 → 34 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  -54.7% |  -7.61ms |  19.0% → 7.6% |  13.9ms → 6.3ms |  11 → 5 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |
|  -57.3% |  -5.07ms |  12.1% → 4.5% |   8.9ms → 3.8ms |   7 → 3 | `text`   | `./node_modules/d3/dist/d3.min.js:2:26408` |
| +298.8% |  +3.78ms |   1.7% → 6.1% |   1.3ms → 5.0ms |   1 → 4 | `data`   | `./node_modules/d3/dist/d3.min.js:2:23459` |
|  +49.6% |  +3.76ms | 10.3% → 13.6% |  7.6ms → 11.4ms |   6 → 9 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `join` (`./node_modules/d3/dist/d3.min.js:2:24162`)

| Change |   Delta |             % |            Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------ |
| +22.7% | +7.47ms | 40.6% → 44.4% | 32.9ms → 40.4ms | 26 → 32 | `(anonymous)` | `./workload.mjs:185:13`                    |
|  +5.9% | +2.40ms | 50.0% → 47.2% | 40.5ms → 42.9ms | 32 → 34 | `append`      | `./node_modules/d3/dist/d3.min.js:2:26726` |
|  -0.3% | -0.02ms |   7.8% → 6.9% |           6.3ms |       5 | `order`       | `./node_modules/d3/dist/d3.min.js:2:24713` |
|  -0.3% | -3.72µs |   1.6% → 1.4% |           1.3ms |       1 | `merge`       | `./node_modules/d3/dist/d3.min.js:2:24384` |

##### `eachBefore` (`./node_modules/d3/dist/d3.min.js:2:141754`)

|  Change |   Delta |             % |          Time | Samples | Callee        | Location                                               |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------------ |
| +132.6% | +5.03ms | 42.9% → 53.8% | 3.8ms → 8.8ms |   3 → 7 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |
|  +99.4% | +3.77ms | 42.9% → 46.2% | 3.8ms → 7.6ms |   3 → 6 | `l`           | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |

##### `(anonymous)` (`./workload.mjs:185:13`)

| Change |   Delta |      % |            Time | Samples | Callee   | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | -------- | ------------------------------------------ |
| +22.7% | +7.47ms | 100.0% | 32.9ms → 40.4ms | 26 → 32 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `(anonymous)` (`./workload.mjs:111:13`)

| Change |   Delta |             % |        Time | Samples | Callee | Location                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------ |
|    new | +2.52ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `Xr`   | `./node_modules/d3/dist/d3.min.js:2:42723` |

##### `(anonymous)` (`./workload.mjs:60:18`)

| Change |   Delta |             % |        Time | Samples | Callee | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `l`    | `./node_modules/d3/dist/d3.min.js:2:155023` |

##### `(anonymous)` (`./workload.mjs:193:9`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------- |
| removed | -2.53ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `l`           | `./node_modules/d3/dist/d3.min.js:2:155044` |
|     new | +1.26ms |  0.0% → 33.3% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:154360` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

| Change |    Delta |             % |              Time |   Samples | Callee          | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
| -18.7% | -15.38ms |   6.6% → 5.5% |   82.2ms → 66.8ms |   65 → 53 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|  +2.4% | +14.60ms | 48.6% → 51.0% | 609.7ms → 624.3ms | 482 → 495 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
| -11.2% |  -7.77ms |   5.5% → 5.1% |   69.6ms → 61.8ms |   55 → 49 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|    new |  +3.78ms |   0.0% → 0.3% |       0ms → 3.8ms |     0 → 3 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103087`            |
|  -0.3% |  -3.72µs |          0.1% |             1.3ms |         1 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

| Change |    Delta |             % |            Time | Samples | Callee        | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| -80.1% | -10.13ms |   6.0% → 1.4% |  12.6ms → 2.5ms |  10 → 2 | `f`           | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|    new |  +5.04ms |   0.0% → 2.7% |     0ms → 5.0ms |   0 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:13444`             |
|    new |  +1.26ms |   0.0% → 0.7% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:60:18`                                 |
| +49.6% |  +1.25ms |   1.2% → 2.1% |   2.5ms → 3.8ms |   2 → 3 | `(anonymous)` | `./workload.mjs:193:9`                                 |
|  +1.4% |  +1.04ms | 35.1% → 41.1% | 74.6ms → 75.7ms | 59 → 60 | `a`           | `./node_modules/d3/dist/d3.min.js:2:244444 → 2:244493` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

| Change |    Delta |             % |              Time | Samples | Callee        | Location                                   |
| -----: | -------: | ------------: | ----------------: | ------: | ------------- | ------------------------------------------ |
| -24.2% | -21.71ms | 34.6% → 28.3% |   89.8ms → 68.1ms | 71 → 54 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |
| +35.3% |  +6.25ms |   6.8% → 9.9% |   17.7ms → 24.0ms | 14 → 19 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042` |
| +99.4% |  +1.26ms |   0.5% → 1.0% |     1.3ms → 2.5ms |   1 → 2 | `It`          | `./node_modules/d3/dist/d3.min.js:2:16093` |
|  -0.3% |  -0.42ms | 55.6% → 59.7% | 144.2ms → 143.8ms |     114 | `each`        | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |   Delta |             % |            Time | Samples | Callee        | Location                                             |
| -----: | ------: | ------------: | --------------: | ------: | ------------- | ---------------------------------------------------- |
| +32.9% | +3.75ms | 10.1% → 16.0% | 11.4ms → 15.1ms |  9 → 12 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`)

|  Change |   Delta |             % |            Time | Samples | Callee        | Location                                               |
| ------: | ------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
|   -8.3% | -2.62ms | 56.8% → 69.7% | 31.6ms → 29.0ms | 25 → 23 | `(anonymous)` | `./workload.mjs:205:13`                                |
|  -66.8% | -2.53ms |   6.8% → 3.0% |   3.8ms → 1.3ms |   3 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:158066 → 2:158045` |
| removed | -2.53ms |   4.5% → 0.0% |     2.5ms → 0ms |   2 → 0 | `(anonymous)` | `./workload.mjs:221:13`                                |
|     new | +2.52ms |   0.0% → 6.1% |     0ms → 2.5ms |   0 → 2 | `(anonymous)` | `./workload.mjs:111:13`                                |
|  -50.1% | -1.27ms |   4.5% → 3.0% |   2.5ms → 1.3ms |   2 → 1 | `x`           | `./node_modules/d3/dist/d3.min.js:2:173246 → 2:173225` |

##### `text` (`./node_modules/d3/dist/d3.min.js:2:26408`)

|  Change |    Delta |             % |            Time | Samples | Callee        | Location                                    |
| ------: | -------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------- |
|  -36.9% | -13.99ms | 69.8% → 57.6% | 37.9ms → 24.0ms | 30 → 19 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664`  |
| removed |  -1.26ms |   2.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `M`           | `./node_modules/d3/dist/d3.min.js:2:109958` |
|   +8.8% |  +1.22ms | 25.6% → 36.4% | 13.9ms → 15.1ms | 11 → 12 | `each`        | `./node_modules/d3/dist/d3.min.js:2:25558`  |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:218226`)

|  Change |   Delta |             % |          Time | Samples | Callee        | Location                                    |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------- |
|  -75.1% | -3.80ms | 40.0% → 50.0% | 5.1ms → 1.3ms |   4 → 1 | `arc`         | `./node_modules/d3/dist/d3.min.js:2:73341`  |
| removed | -2.53ms |  20.0% → 0.0% |   2.5ms → 0ms |   2 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:192839` |
|   -0.3% | -3.72µs | 10.0% → 50.0% |         1.3ms |       1 | `moveTo`      | `./node_modules/d3/dist/d3.min.js:2:72387`  |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |    Delta |           % |              Time |       Samples | Callee            | Location                                   |
| -----: | -------: | ----------: | ----------------: | ------------: | ----------------- | ------------------------------------------ |
| +34.2% | +11.25ms | 0.8% → 1.1% |   32.9ms → 44.1ms |       26 → 35 | `join`            | `./node_modules/d3/dist/d3.min.js:2:24162` |
| -10.5% |  -6.49ms | 1.5% → 1.4% |   62.0ms → 55.5ms |       49 → 44 | `chartBreakdowns` | `./workload.mjs:39:27`                     |
|  -0.2% |  -5.93ms |       92.9% |             3.73s | 2,952 → 2,956 | `chartLayouts`    | `./workload.mjs:116:24`                    |
|  -3.2% |  -4.17ms | 3.2% → 3.1% | 130.3ms → 126.1ms |     103 → 100 | `call`            | `./node_modules/d3/dist/d3.min.js:2:25192` |
| -20.2% |  -3.84ms | 0.5% → 0.4% |   19.0ms → 15.1ms |       15 → 12 | `attr`            | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

| Change |    Delta |             % |            Time | Samples | Callee | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -36.6% | -15.26ms | 31.4% → 21.0% | 41.7ms → 26.5ms | 33 → 21 | `l`    | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| +66.2% | +15.07ms | 17.1% → 30.0% | 22.8ms → 37.8ms | 18 → 30 | `u`    | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

| Change |   Delta |             % |            Time | Samples | Callee | Location                                    |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------- |
| -33.5% | -6.36ms | 30.6% → 22.7% | 19.0ms → 12.6ms | 15 → 10 | `D`    | `./node_modules/d3/dist/d3.min.js:2:4759`   |
|    new | +3.78ms |   0.0% → 6.8% |     0ms → 3.8ms |   0 → 3 | `r`    | `./node_modules/d3/dist/d3.min.js:2:7022`   |
| -15.6% | -2.57ms | 26.5% → 25.0% | 16.4ms → 13.9ms | 13 → 11 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709`  |
| -66.8% | -2.53ms |   6.1% → 2.3% |   3.8ms → 1.3ms |   3 → 1 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162`  |
|    new | +2.52ms |   0.0% → 4.5% |     0ms → 2.5ms |   0 → 2 | `t`    | `./node_modules/d3/dist/d3.min.js:2:257411` |

##### `(anonymous)` (`./workload.mjs:201:13`)

| Change |   Delta |             % |            Time | Samples | Callee   | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | -------- | ------------------------------------------ |
| -18.4% | -7.69ms | 97.1% → 93.1% | 41.7ms → 34.1ms | 33 → 27 | `text`   | `./node_modules/d3/dist/d3.min.js:2:26408` |
| +99.4% | +1.26ms |   2.9% → 6.9% |   1.3ms → 2.5ms |   1 → 2 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `(anonymous)` (`./workload.mjs:195:13`)

|  Change |   Delta |              % |            Time | Samples | Callee   | Location                                   |
| ------: | ------: | -------------: | --------------: | ------: | -------- | ------------------------------------------ |
|  -26.9% | -5.10ms | 93.7% → 100.0% | 19.0ms → 13.9ms | 15 → 11 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
| removed | -1.26ms |    6.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `D` (`./node_modules/d3/dist/d3.min.js:2:4759`)

| Change |   Delta |             % |            Time | Samples | Callee | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
| -31.0% | -5.09ms | 86.7% → 90.0% | 16.4ms → 11.4ms |  13 → 9 | `F`    | `./node_modules/d3/dist/d3.min.js:2:4882` |
| -50.1% | -1.27ms | 13.3% → 10.0% |   2.5ms → 1.3ms |   2 → 1 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `force` (`./node_modules/d3/dist/d3.min.js:2:236745`)

| Change |   Delta |              % |          Time | Samples | Callee | Location                                               |
| -----: | ------: | -------------: | ------------: | ------: | ------ | ------------------------------------------------------ |
| -57.3% | -5.07ms | 87.5% → 100.0% | 8.9ms → 3.8ms |   7 → 3 | `p`    | `./node_modules/d3/dist/d3.min.js:2:236084 → 2:236133` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|  Change |    Delta |             % |              Time |       Samples | Callee  | Location                                               |
| ------: | -------: | ------------: | ----------------: | ------------: | ------- | ------------------------------------------------------ |
|  -14.2% | -25.76ms |   4.8% → 4.2% | 180.9ms → 155.1ms |     143 → 123 | `attr`  | `./node_modules/d3/dist/d3.min.js:2:25709`             |
|  +82.8% | +12.57ms |   0.4% → 0.7% |   15.2ms → 27.7ms |       12 → 22 | `from`  | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
|  -57.3% |  -5.07ms |   0.2% → 0.1% |     8.9ms → 3.8ms |         7 → 3 | `force` | `./node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
|   +0.2% |  +5.06ms | 57.3% → 57.5% |     2.14s → 2.15s | 1,692 → 1,701 | `h`     | `./node_modules/d3/dist/d3.min.js:2:235607 → 2:235656` |
| +132.6% |  +5.03ms |   0.1% → 0.2% |     3.8ms → 8.8ms |         3 → 7 | `sort`  | `./node_modules/d3/dist/d3.min.js:2:142142 → 2:142123` |

##### `(anonymous)` (`./run.mjs:1:1`)

| Change |   Delta |              % |          Time |       Samples | Callee                         | Location              |
| -----: | ------: | -------------: | ------------: | ------------: | ------------------------------ | --------------------- |
|  -0.2% | -8.04ms | 100.0% → 99.9% | 4.02s → 4.01s | 3,179 → 3,182 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `Lf` (`./node_modules/d3/dist/d3.min.js:2:112904`)

| Change |   Delta |             % |            Time | Samples | Callee | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
|  -5.8% | -2.66ms | 83.7% → 87.2% | 45.5ms → 42.9ms | 36 → 34 | `Yf`   | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
| -28.8% | -2.55ms | 16.3% → 12.8% |   8.9ms → 6.3ms |   7 → 5 | `Uf`   | `./node_modules/d3/dist/d3.min.js:2:111948 → 2:111929` |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:4909`)

|  Change |   Delta |             % |          Time | Samples | Callee        | Location                                  |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ----------------------------------------- |
|  -50.1% | -3.81ms | 33.3% → 21.4% | 7.6ms → 3.8ms |   6 → 3 | `(anonymous)` | `./workload.mjs:82:7`                     |
| removed | -1.26ms |   5.6% → 0.0% |   1.3ms → 0ms |   1 → 0 | `t`           | `./node_modules/d3/dist/d3.min.js:2:4909` |
| removed | -1.26ms |   5.6% → 0.0% |   1.3ms → 0ms |   1 → 0 | `InternMap`   | `./node_modules/d3/dist/d3.min.js:2:3622` |
|     new | +1.26ms |   0.0% → 7.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:120:25`                   |
|   -0.3% | -0.01ms | 16.7% → 21.4% |         3.8ms |       3 | `get`         | `./node_modules/d3/dist/d3.min.js:2:3756` |

##### `appendChild` (`./node_modules/d3/dist/d3.min.js:2:21447`)

| Change |   Delta |             % |           Time | Samples | Callee         | Location    |
| -----: | ------: | ------------: | -------------: | ------: | -------------- | ----------- |
| -44.6% | -5.08ms | 90.0% → 83.3% | 11.4ms → 6.3ms |   9 → 5 | `insertBefore` | `<unknown>` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:236133`)

|  Change |   Delta |              % |          Time | Samples | Callee         | Location                                               |
| ------: | ------: | -------------: | ------------: | ------: | -------------- | ------------------------------------------------------ |
|  -50.1% | -3.81ms | 85.7% → 100.0% | 7.6ms → 3.8ms |   6 → 3 | `l.initialize` | `./node_modules/d3/dist/d3.min.js:2:233001 → 2:233050` |
| removed | -1.26ms |   14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `a.initialize` | `./node_modules/d3/dist/d3.min.js:2:231734`            |

##### `Yf` (`./node_modules/d3/dist/d3.min.js:2:112811`)

| Change |   Delta |             % |            Time | Samples | Callee  | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | ------- | ------------------------------------------------------ |
| -12.8% | -5.16ms | 78.0% → 73.7% | 40.5ms → 35.3ms | 32 → 28 | `point` | `./node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
| -40.2% | -2.54ms |  12.2% → 7.9% |   6.3ms → 3.8ms |   5 → 3 | `Bf`    | `./node_modules/d3/dist/d3.min.js:2:112719 → 2:112700` |

##### `F` (`./node_modules/d3/dist/d3.min.js:2:4882`)

| Change |   Delta |             % |            Time | Samples | Callee | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
| -19.0% | -3.84ms | 94.1% → 92.9% | 20.2ms → 16.4ms | 16 → 13 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `(anonymous)` (`./workload.mjs:82:7`)

| Change |   Delta |             % |  Time | Samples | Callee       | Location                                               |
| -----: | ------: | ------------: | ----: | ------: | ------------ | ------------------------------------------------------ |
|  -0.3% | -0.01ms | 33.3% → 66.7% | 2.5ms |       2 | `Vg.i.floor` | `./node_modules/d3/dist/d3.min.js:2:159113 → 2:159092` |

##### `(anonymous)` (`./workload.mjs:205:13`)

|  Change |   Delta |             % |            Time | Samples | Callee        | Location                                               |
| ------: | ------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
|  +41.3% | +6.26ms | 48.0% → 73.9% | 15.2ms → 21.4ms | 12 → 17 | `M`           | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |
| removed | -1.26ms |   4.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `Yv`          | `./node_modules/d3/dist/d3.min.js:2:169822`            |
| removed | -1.26ms |   4.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `format`      | `./node_modules/d3/dist/d3.min.js:2:167331`            |
| removed | -1.26ms |   4.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `o_`          | `./node_modules/d3/dist/d3.min.js:2:170691`            |
|  +24.6% | +1.25ms | 16.0% → 21.7% |   5.1ms → 6.3ms |   4 → 5 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:165835 → 2:165814` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|  Change |   Delta |            % |        Time | Samples | Callee | Location                                    |
| ------: | ------: | -----------: | ----------: | ------: | ------ | ------------------------------------------- |
| removed | -1.26ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958` |

##### `(anonymous)` (`./workload.mjs:157:29`)

| Change |   Delta |             % |          Time | Samples | Callee        | Location                                               |
| -----: | ------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------------ |
| -33.5% | -1.27ms | 60.0% → 50.0% | 3.8ms → 2.5ms |   3 → 2 | `l`           | `./node_modules/d3/dist/d3.min.js:2:155044 → 2:155023` |
|    new | +1.26ms |  0.0% → 25.0% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:154171`            |

##### `(anonymous)` (`./workload.mjs:11:29`)

| Change |   Delta |      % |  Time | Samples | Callee        | Location                                               |
| -----: | ------: | -----: | ----: | ------: | ------------- | ------------------------------------------------------ |
|  -0.3% | -3.72µs | 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:166138 → 2:166117` |

##### `(anonymous)` (`./workload.mjs:199:25`)

| Change |   Delta |      % |  Time | Samples | Callee | Location                                               |
| -----: | ------: | -----: | ----: | ------: | ------ | ------------------------------------------------------ |
|  -0.3% | -3.72µs | 100.0% | 1.3ms |       1 | `i`    | `./node_modules/d3/dist/d3.min.js:2:152428 → 2:152407` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`) ← `(anonymous)` (`./run.mjs:1:1`)

|  Change |    Delta |             % |              Time |   Samples | Call stack                                                                                                                                                                                                                                                                                                      |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +3.2% | +30.01ms | 22.5% → 23.1% | 947.5ms → 977.5ms | 749 → 775 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                |
| +144.7% | +20.14ms |   0.3% → 0.8% |   13.9ms → 34.1ms |   11 → 27 | `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                                |
|  +99.4% | +20.12ms |   0.5% → 1.0% |   20.2ms → 40.4ms |   16 → 32 | `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                                |
|  +34.6% | +17.51ms |   1.2% → 1.6% |   50.6ms → 68.1ms |   40 → 54 | `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`) ← `$c` (2:102050) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                             |
|  +66.2% | +15.07ms |   0.5% → 0.9% |   22.8ms → 37.8ms |   18 → 30 | `u` (`./node_modules/d3/dist/d3.min.js:2:231519`) ← `Fc.visitAfter` (2:106049) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                          |
| +149.3% |  +7.55ms |   0.1% → 0.3% |    5.1ms → 12.6ms |    4 → 10 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`) ← `each` (2:25558) ← `attr` (2:25709) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                                             |
| +498.2% |  +6.30ms |  <0.1% → 0.2% |     1.3ms → 7.6ms |     1 → 6 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `(anonymous)` (`./workload.mjs:185:13`) ← `join` (`./node_modules/d3/dist/d3.min.js:2:24162`)                                                                                  |
| +165.9% |  +6.30ms |   0.1% → 0.2% |    3.8ms → 10.1ms |     3 → 8 | `g` (`./node_modules/d3/dist/d3.min.js:2:231215`) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                                                        |
| +124.3% |  +6.29ms |   0.1% → 0.3% |    5.1ms → 11.4ms |     4 → 9 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`) ← `g` (2:1758) ← `(anonymous)` (2:1144) ← `h` (2:223199) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                  |
|  +49.6% |  +6.27ms |   0.3% → 0.4% |   12.6ms → 18.9ms |   10 → 15 | `Jh` (`./node_modules/d3/dist/d3.min.js:2:131218`) ← `point` (2:131542) ← `MultiPolygon` (2:112532) ← `a` (2:244493) ← `(anonymous)` (2:18176) ← `attr` (2:25709) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                    |
|     new |  +5.04ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 4 | `h` (`./node_modules/d3/dist/d3.min.js:2:223199`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                                                                                   |
|     new |  +5.04ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 4 | `v` (`./node_modules/d3/dist/d3.min.js:2:223843`) ← `y` (2:223816) ← `g` (2:223789) ← `p` (2:223741) ← `(anonymous)` (2:223701) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                     |
|     new |  +5.04ms |   0.0% → 0.1% |       0ms → 5.0ms |     0 → 4 | `l` (`./node_modules/d3/dist/d3.min.js:2:269888`) ← `eachBefore` (2:141754) ← `s` (2:269797) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                                                         |
| +398.5% |  +5.04ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `each` (2:25558) ← `attr` (2:25709) ← `chartBreakdowns` (`./workload.mjs:39:27`)                                                                                                                                                                   |
| +398.5% |  +5.04ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:142159`) ← `eachBefore` (2:141754) ← `sort` (2:142123) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                                            |
| +199.1% |  +5.04ms |   0.1% → 0.2% |     2.5ms → 7.6ms |     2 → 6 | `g` (`./node_modules/d3/dist/d3.min.js:2:108341`) ← `M` (2:109939) ← `(anonymous)` (`./workload.mjs:205:13`) ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`) ← `each` (2:25558) ← `text` (2:26408) ← `(anonymous)` (`./workload.mjs:201:13`) ← `call` (`./node_modules/d3/dist/d3.min.js:2:25192`) |
|  +66.2% |  +5.02ms |   0.2% → 0.3% |    7.6ms → 12.6ms |    6 → 10 | `g` (`./node_modules/d3/dist/d3.min.js:2:108341`) ← `M` (2:109939) ← `(anonymous)` (`./workload.mjs:205:13`) ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`) ← `text` (2:26408) ← `(anonymous)` (`./workload.mjs:201:13`) ← `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)                    |
|  +44.0% |  +5.01ms |   0.3% → 0.4% |   11.4ms → 16.4ms |    9 → 13 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`) ← `attr` (2:25709) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                                                                |
|  +19.6% |  +4.97ms |   0.6% → 0.7% |   25.3ms → 30.3ms |   20 → 24 | `createElementNS` ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                |
|     new |  +3.78ms |   0.0% → 0.1% |       0ms → 3.8ms |     0 → 3 | `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                               |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`) ← `(anonymous)` (`./run.mjs:1:1`)

|  Change |    Delta |             % |              Time |   Samples | Call stack                                                                                                                                                                                                                              |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -5.2% | -25.41ms | 11.6% → 11.0% | 490.8ms → 465.4ms | 388 → 369 | `f` (`./node_modules/d3/dist/d3.min.js:2:233501`) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                |
|  -22.7% | -23.00ms |   2.4% → 1.8% |  101.2ms → 78.2ms |   80 → 62 | `p` (`./node_modules/d3/dist/d3.min.js:2:77576`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                        |
|  -36.6% | -15.26ms |   1.0% → 0.6% |   41.7ms → 26.5ms |   33 → 21 | `l` (`./node_modules/d3/dist/d3.min.js:2:233696`) ← `Fc.visitAfter` (2:106049) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                  |
|  -26.4% | -14.03ms |   1.3% → 0.9% |   53.1ms → 39.1ms |   42 → 31 | `J` (`./node_modules/d3/dist/d3.min.js:2:8205`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                             |
|  -22.0% | -12.78ms |   1.4% → 1.1% |   58.2ms → 45.4ms |   46 → 36 | `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`) ← `$c` (2:102050) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                     |
|  -34.7% | -12.72ms |   0.9% → 0.6% |   36.7ms → 24.0ms |   29 → 19 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `attr` (2:25709) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                |
|   -9.0% |  -7.82ms |   2.1% → 1.9% |   87.3ms → 79.5ms |   69 → 63 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                 |
|  -85.8% |  -7.59ms |  0.2% → <0.1% |     8.9ms → 1.3ms |     7 → 1 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`) ← `h` (2:223199) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                  |
|  -15.0% |  -6.43ms |   1.0% → 0.9% |   43.0ms → 36.6ms |   34 → 29 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `each` (2:25558) ← `attr` (2:25709) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                             |
|  -23.0% |  -6.39ms |   0.7% → 0.5% |   27.8ms → 21.4ms |   22 → 17 | `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                   |
|  -55.7% |  -6.34ms |   0.3% → 0.1% |    11.4ms → 5.0ms |     9 → 4 | `h` (`./node_modules/d3/dist/d3.min.js:2:233933`) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                |
| removed |  -6.32ms |   0.1% → 0.0% |       6.3ms → 0ms |     5 → 0 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `attr` (2:25709)                                                                                                                                                           |
|   -2.0% |  -5.90ms |   6.9% → 6.7% | 290.9ms → 285.0ms | 230 → 226 | `g` (`./node_modules/d3/dist/d3.min.js:2:231215`) ← `Fc.visit` (2:105681) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                       |
|   -0.9% |  -5.52ms | 14.0% → 13.8% | 589.5ms → 584.0ms | 466 → 463 | `h` (`./node_modules/d3/dist/d3.min.js:2:233933`) ← `Fc.visit` (2:105681) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656) ← `chartLayouts` (`./workload.mjs:116:24`)                                                       |
|   -8.1% |  -5.23ms |   1.5% → 1.4% |   64.5ms → 59.3ms |   51 → 47 | `g` (`./node_modules/d3/dist/d3.min.js:2:1758`) ← `(anonymous)` (2:1144) ← `h` (2:223199) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                   |
|  -57.3% |  -5.07ms |   0.2% → 0.1% |     8.9ms → 3.8ms |     7 → 3 | `createElementNS` ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `h` (2:12208) ← `call` (2:25192)                                                                        |
|  -57.3% |  -5.07ms |   0.2% → 0.1% |     8.9ms → 3.8ms |     7 → 3 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `attr` (2:25709) ← `(anonymous)` (`./workload.mjs:195:13`) ← `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)                                                           |
|  -80.1% |  -5.06ms |  0.1% → <0.1% |     6.3ms → 1.3ms |     5 → 1 | `h` (`./node_modules/d3/dist/d3.min.js:2:232415`) ← `l.initialize` (2:233050) ← `p` (2:236133) ← `force` (2:236745) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                          |
| removed |  -5.06ms |   0.1% → 0.0% |       5.1ms → 0ms |     4 → 0 | `(anonymous)` (`./workload.mjs:82:7`) ← `t` (`./node_modules/d3/dist/d3.min.js:2:4909`) ← `F` (2:4882) ← `D` (2:4759) ← `chartBreakdowns` (`./workload.mjs:39:27`)                                                                      |
|  -13.3% |  -3.87ms |   0.7% → 0.6% |   29.1ms → 25.2ms |   23 → 20 | `Jh` (`./node_modules/d3/dist/d3.min.js:2:131218`) ← `point` (2:131542) ← `Yf` (2:112811) ← `Lf` (2:112904) ← `a` (2:244493) ← `(anonymous)` (2:18176) ← `each` (2:25558) ← `attr` (2:25709) ← `chartLayouts` (`./workload.mjs:116:24`) |

# CPU profile diff

Took 4.21s → 4.22s (+9.33ms, +0.2%) over 3,361 samples → 3,379 samples (1.3ms per sample).

| Category           |  Change |    Delta |             % |              Time |       Samples |
| ------------------ | ------: | -------: | ------------: | ----------------: | ------------: |
| Third-party        |   +0.1% |  +5.74ms | 92.5% → 92.4% |             3.90s | 3,119 → 3,134 |
| Native             |   -2.7% |  -3.92ms |   3.5% → 3.4% | 146.0ms → 142.1ms |     106 → 104 |
| Garbage collector  |  +19.0% | +21.96ms |   2.7% → 3.3% | 115.7ms → 137.6ms |      92 → 108 |
| Ours               |  -28.6% | -13.08ms |   1.1% → 0.8% |   45.7ms → 32.6ms |       36 → 26 |
| Idle               |   -0.9% |  -0.08ms |          0.2% |     8.9ms → 8.8ms |             7 |
| Regular expression | removed |  -1.29ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

Paths starting with `./` or `../` are relative to `http://127.0.0.1:52789/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function              | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
| +109.6% | +38.42ms |   0.8% → 1.7% |   35.0ms → 73.5ms |   28 → 60 | `Fc.visit`            | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|   +3.6% | +33.71ms | 22.3% → 23.0% | 938.9ms → 972.6ms | 766 → 792 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +19.0% | +21.96ms |   2.7% → 3.3% | 115.7ms → 137.6ms |  92 → 108 | `(garbage collector)` | `<unknown>`                                            |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`                   | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|  +11.7% | +12.50ms |   2.5% → 2.8% | 107.3ms → 119.8ms |   86 → 95 | `Fc.addAll`           | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18042`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
| +136.9% |  +8.67ms |   0.2% → 0.4% |    6.3ms → 15.0ms |    5 → 12 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:16259`             |
|     new |  +7.58ms |   0.0% → 0.2% |       0ms → 7.6ms |     0 → 6 | `data`                | `./node_modules/d3/dist/d3.min.js:2:23459`             |
|  +37.5% |  +7.17ms |   0.5% → 0.6% |   19.1ms → 26.3ms |   15 → 21 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:2114`              |
|     new |  +6.17ms |   0.0% → 0.1% |       0ms → 6.2ms |     0 → 5 | `Oc`                  | `./node_modules/d3/dist/d3.min.js:2:102489`            |
| +489.9% |  +6.12ms |  <0.1% → 0.2% |     1.3ms → 7.4ms |     1 → 6 | `Gc`                  | `./node_modules/d3/dist/d3.min.js:2:106688 → 2:106669` |
|     new |  +5.13ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `l`                   | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  +59.1% |  +5.13ms |   0.2% → 0.3% |    8.7ms → 13.8ms |    7 → 11 | `$c`                  | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|     new |  +5.08ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
| +383.8% |  +4.96ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |
|  +71.6% |  +4.09ms |   0.1% → 0.2% |     5.7ms → 9.8ms |     5 → 8 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:78542 → 2:78541`   |
| +310.0% |  +3.88ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:12208`             |
| +306.6% |  +3.83ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `v`                   | `./node_modules/d3/dist/d3.min.js:2:223794 → 2:223843` |
|  +30.2% |  +3.79ms |   0.3% → 0.4% |   12.5ms → 16.3ms |   10 → 13 | `removeChild`         | `<unknown>`                                            |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function      | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
| +109.6% | +38.42ms |   0.8% → 1.7% |   35.0ms → 73.5ms |   28 → 60 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|   +3.6% | +33.71ms | 22.3% → 23.0% | 938.9ms → 972.6ms | 766 → 792 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`           | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|  +11.7% | +12.50ms |   2.5% → 2.8% | 107.3ms → 119.8ms |   86 → 95 | `Fc.addAll`   | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`           | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
| +136.9% |  +8.67ms |   0.2% → 0.4% |    6.3ms → 15.0ms |    5 → 12 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259`             |
|     new |  +7.58ms |   0.0% → 0.2% |       0ms → 7.6ms |     0 → 6 | `data`        | `./node_modules/d3/dist/d3.min.js:2:23459`             |
|  +37.5% |  +7.17ms |   0.5% → 0.6% |   19.1ms → 26.3ms |   15 → 21 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:2114`              |
|     new |  +6.17ms |   0.0% → 0.1% |       0ms → 6.2ms |     0 → 5 | `Oc`          | `./node_modules/d3/dist/d3.min.js:2:102489`            |
| +489.9% |  +6.12ms |  <0.1% → 0.2% |     1.3ms → 7.4ms |     1 → 6 | `Gc`          | `./node_modules/d3/dist/d3.min.js:2:106688 → 2:106669` |
|     new |  +5.13ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `l`           | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  +59.1% |  +5.13ms |   0.2% → 0.3% |    8.7ms → 13.8ms |    7 → 11 | `$c`          | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|     new |  +5.08ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `h`           | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
| +383.8% |  +4.96ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |
|  +71.6% |  +4.09ms |   0.1% → 0.2% |     5.7ms → 9.8ms |     5 → 8 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78542 → 2:78541`   |
| +310.0% |  +3.88ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208`             |
| +306.6% |  +3.83ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `v`           | `./node_modules/d3/dist/d3.min.js:2:223794 → 2:223843` |
|   +4.7% |  +2.92ms |          1.5% |   62.5ms → 65.5ms |   50 → 52 | `p`           | `./node_modules/d3/dist/d3.min.js:2:1697`              |
| +112.1% |  +2.71ms |          0.1% |     2.4ms → 5.1ms |     2 → 4 | `update`      | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |

##### Native

| Change |   Delta |           % |            Time | Samples | Function                  | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------------------- | ----------- |
| +30.2% | +3.79ms | 0.3% → 0.4% | 12.5ms → 16.3ms | 10 → 13 | `removeChild`             | `<unknown>` |
| +14.8% | +1.13ms |        0.2% |   7.6ms → 8.8ms |   6 → 7 | `appendChild`             | `<unknown>` |
|  +2.5% | +0.13ms |        0.1% |   5.0ms → 5.1ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

| Change |    Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
| +19.0% | +21.96ms | 2.7% → 3.3% | 115.7ms → 137.6ms | 92 → 108 | `(garbage collector)` | `<unknown>` |

##### Ours

|  Change |   Delta |            % |           Time | Samples | Function       | Location                |
| ------: | ------: | -----------: | -------------: | ------: | -------------- | ----------------------- |
| +193.5% | +2.50ms | <0.1% → 0.1% |  1.3ms → 3.8ms |   1 → 3 | `(anonymous)`  | `./run.mjs:1:1`         |
|     new | +2.50ms |  0.0% → 0.1% |    0ms → 2.5ms |   0 → 2 | `(anonymous)`  | `./workload.mjs:193:9`  |
|     new | +1.29ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`  | `./workload.mjs:120:25` |
|     new | +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`  | `./workload.mjs:121:16` |
|  +12.6% | +1.13ms |         0.2% | 9.0ms → 10.1ms |   7 → 8 | `chartLayouts` | `./workload.mjs:116:24` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function          | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------- | ------------------------------------------------------ |
|   -5.5% | -26.93ms | 11.6% → 11.0% | 491.0ms → 464.1ms | 388 → 369 | `f`               | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|  -20.0% | -23.58ms |   2.8% → 2.2% |  117.8ms → 94.2ms |   96 → 75 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|  -21.1% | -21.04ms |   2.4% → 1.9% |   99.7ms → 78.6ms |   81 → 64 | `p`               | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |   35 → 22 | `l`               | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
|  -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |   42 → 31 | `J`               | `./node_modules/d3/dist/d3.min.js:2:8205`              |
|  -68.6% |  -8.29ms |   0.3% → 0.1% |    12.1ms → 3.8ms |     9 → 3 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:19664`             |
|   -8.9% |  -7.71ms |   2.1% → 1.9% |   86.8ms → 79.1ms |   69 → 63 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|   -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms | 489 → 482 | `h`               | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -85.7% |  -7.50ms |  0.2% → <0.1% |     8.8ms → 1.3ms |     7 → 1 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:1144`              |
|   -1.9% |  -6.71ms |   8.2% → 8.0% | 346.8ms → 340.1ms |       271 | `a`               | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  -10.1% |  -6.71ms |   1.6% → 1.4% |   66.2ms → 59.5ms |   51 → 47 | `g`               | `./node_modules/d3/dist/d3.min.js:2:1758`              |
|   -9.4% |  -6.42ms |   1.6% → 1.5% |   68.0ms → 61.5ms |   54 → 49 | `Fc.visitAfter`   | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|  -83.5% |  -6.33ms |  0.2% → <0.1% |     7.6ms → 1.3ms |     6 → 1 | `(anonymous)`     | `./workload.mjs:205:13`                                |
|  -12.6% |  -5.25ms |   1.0% → 0.9% |   41.7ms → 36.4ms |   23 → 20 | `(program)`       | `<unknown>`                                            |
|  -79.5% |  -5.00ms |  0.1% → <0.1% |     6.3ms → 1.3ms |     5 → 1 | `h`               | `./node_modules/d3/dist/d3.min.js:2:232366 → 2:232415` |
|  -27.5% |  -4.50ms |   0.4% → 0.3% |   16.4ms → 11.9ms |   13 → 10 | `point`           | `./node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
|  -25.6% |  -4.25ms |   0.4% → 0.3% |   16.6ms → 12.4ms |   13 → 10 | `l`               | `./node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
|  -61.2% |  -3.88ms |   0.2% → 0.1% |     6.3ms → 2.5ms |     5 → 2 | `r`               | `./node_modules/d3/dist/d3.min.js:2:109041 → 2:109022` |
|  -75.0% |  -3.87ms |  0.1% → <0.1% |     5.2ms → 1.3ms |     4 → 1 | `chartBreakdowns` | `./workload.mjs:39:27`                                 |
| removed |  -3.87ms |   0.1% → 0.0% |       3.9ms → 0ms |     3 → 0 | `M`               | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function        | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
|   -5.5% | -26.93ms | 11.6% → 11.0% | 491.0ms → 464.1ms | 388 → 369 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|  -20.0% | -23.58ms |   2.8% → 2.2% |  117.8ms → 94.2ms |   96 → 75 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|  -21.1% | -21.04ms |   2.4% → 1.9% |   99.7ms → 78.6ms |   81 → 64 | `p`             | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |   35 → 22 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
|  -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |   42 → 31 | `J`             | `./node_modules/d3/dist/d3.min.js:2:8205`              |
|  -68.6% |  -8.29ms |   0.3% → 0.1% |    12.1ms → 3.8ms |     9 → 3 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:19664`             |
|   -8.9% |  -7.71ms |   2.1% → 1.9% |   86.8ms → 79.1ms |   69 → 63 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|   -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms | 489 → 482 | `h`             | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -85.7% |  -7.50ms |  0.2% → <0.1% |     8.8ms → 1.3ms |     7 → 1 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:1144`              |
|   -1.9% |  -6.71ms |   8.2% → 8.0% | 346.8ms → 340.1ms |       271 | `a`             | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  -10.1% |  -6.71ms |   1.6% → 1.4% |   66.2ms → 59.5ms |   51 → 47 | `g`             | `./node_modules/d3/dist/d3.min.js:2:1758`              |
|   -9.4% |  -6.42ms |   1.6% → 1.5% |   68.0ms → 61.5ms |   54 → 49 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|  -79.5% |  -5.00ms |  0.1% → <0.1% |     6.3ms → 1.3ms |     5 → 1 | `h`             | `./node_modules/d3/dist/d3.min.js:2:232366 → 2:232415` |
|  -27.5% |  -4.50ms |   0.4% → 0.3% |   16.4ms → 11.9ms |   13 → 10 | `point`         | `./node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
|  -25.6% |  -4.25ms |   0.4% → 0.3% |   16.6ms → 12.4ms |   13 → 10 | `l`             | `./node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
|  -61.2% |  -3.88ms |   0.2% → 0.1% |     6.3ms → 2.5ms |     5 → 2 | `r`             | `./node_modules/d3/dist/d3.min.js:2:109041 → 2:109022` |
| removed |  -3.87ms |   0.1% → 0.0% |       3.9ms → 0ms |     3 → 0 | `M`             | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |
|  -59.6% |  -3.75ms |          0.1% |     6.3ms → 2.5ms |     5 → 2 | `attr`          | `./node_modules/d3/dist/d3.min.js:2:25709`             |
| removed |  -3.75ms |   0.1% → 0.0% |       3.8ms → 0ms |     3 → 0 | `f`             | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -37.3% |  -3.75ms |   0.2% → 0.1% |    10.0ms → 6.3ms |     6 → 5 | `o`             | `./node_modules/d3/dist/d3.min.js:2:77004`             |

##### Native

| Change |   Delta |           % |            Time | Samples | Function          | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ----------------- | ----------- |
| -12.6% | -5.25ms | 1.0% → 0.9% | 41.7ms → 36.4ms | 23 → 20 | `(program)`       | `<unknown>` |
| -22.0% | -2.50ms | 0.3% → 0.2% |  11.4ms → 8.9ms |   9 → 7 | `insertBefore`    | `<unknown>` |
|  -1.8% | -1.21ms |        1.6% | 67.8ms → 66.6ms | 54 → 53 | `createElementNS` | `<unknown>` |

##### Ours

|  Change |   Delta |            % |          Time | Samples | Function                       | Location                |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------ | ----------------------- |
|  -83.5% | -6.33ms | 0.2% → <0.1% | 7.6ms → 1.3ms |   6 → 1 | `(anonymous)`                  | `./workload.mjs:205:13` |
|  -75.0% | -3.87ms | 0.1% → <0.1% | 5.2ms → 1.3ms |   4 → 1 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  -75.4% | -3.83ms | 0.1% → <0.1% | 5.1ms → 1.3ms |   4 → 1 | `(anonymous)`                  | `./workload.mjs:82:7`   |
|  -51.6% | -1.33ms | 0.1% → <0.1% | 2.6ms → 1.3ms |   2 → 1 | `(anonymous)`                  | `./workload.mjs:157:29` |
|  -26.7% | -1.33ms |         0.1% | 5.0ms → 3.7ms |   4 → 3 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
| removed | -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `./workload.mjs:100:10` |
| removed | -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `./workload.mjs:123:12` |
| removed | -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `./workload.mjs:221:13` |
|  -50.0% | -1.25ms | 0.1% → <0.1% | 2.5ms → 1.3ms |   2 → 1 | `(anonymous)`                  | `./workload.mjs:139:12` |
|   -3.3% | -0.04ms |        <0.1% |         1.3ms |       1 | `(anonymous)`                  | `./workload.mjs:133:22` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|  Change |    Delta |      % |            Time | Samples | Location                             |
| ------: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| +109.6% | +38.41ms | 100.0% | 35.0ms → 73.5ms | 27 → 59 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |    Delta |      % |              Time |   Samples | Location                             |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------ |
|  +3.6% | +33.70ms | 100.0% | 938.9ms → 972.6ms | 749 → 775 | `./node_modules/d3/dist/d3.min.js:2` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| +65.9% | +15.04ms | 100.0% | 22.8ms → 37.9ms | 18 → 30 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

| Change |    Delta |      % |              Time | Samples | Location                             |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------ |
| +11.7% | +12.51ms | 100.0% | 107.3ms → 119.8ms | 86 → 95 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| +34.4% | +12.50ms | 100.0% | 36.4ms → 48.9ms | 29 → 39 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:108341`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| +80.3% | +9.04ms | 100.0% | 11.3ms → 20.3ms |  9 → 16 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`)

|  Change |   Delta |      % |           Time | Samples | Location                             |
| ------: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| +136.9% | +8.67ms | 100.0% | 6.3ms → 15.0ms |  5 → 12 | `./node_modules/d3/dist/d3.min.js:2` |

##### `data` (`./node_modules/d3/dist/d3.min.js:2:23459`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +7.58ms | 0.0% → 100.0% | 0ms → 7.6ms |   0 → 6 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| +37.5% | +7.17ms | 100.0% | 19.1ms → 26.3ms | 15 → 21 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Oc` (`./node_modules/d3/dist/d3.min.js:2:102489`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +6.17ms | 0.0% → 100.0% | 0ms → 6.2ms |   0 → 5 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Gc` (`./node_modules/d3/dist/d3.min.js:2:106669`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +489.9% | +6.12ms | 100.0% | 1.3ms → 7.4ms |   1 → 6 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:269888`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +5.13ms | 0.0% → 100.0% | 0ms → 5.1ms |   0 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

| Change |   Delta |      % |           Time | Samples | Location                             |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| +59.1% | +5.13ms | 100.0% | 8.7ms → 13.8ms |  7 → 11 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223199`)

| Change |   Delta |             % |        Time | Samples | Location                             |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
|    new | +5.08ms | 0.0% → 100.0% | 0ms → 5.1ms |   0 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:142159`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +383.8% | +4.96ms | 100.0% | 1.3ms → 6.3ms |   1 → 5 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78541`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +71.7% | +4.09ms | 100.0% | 5.7ms → 9.8ms |   5 → 8 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +310.0% | +3.88ms | 100.0% | 1.3ms → 5.1ms |   1 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `v` (`./node_modules/d3/dist/d3.min.js:2:223843`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +306.6% | +3.83ms | 100.0% | 1.3ms → 5.1ms |   1 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `removeChild` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
| +30.2% | +3.79ms | 100.0% | 12.5ms → 16.3ms | 10 → 13 | 2        |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:1697`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
|  +4.7% | +2.92ms | 100.0% | 62.5ms → 65.5ms | 50 → 52 | `./node_modules/d3/dist/d3.min.js:2` |

##### `update` (`./node_modules/d3/dist/d3.min.js:2:82523`)

|  Change |   Delta |      % |          Time | Samples | Location                             |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| +112.1% | +2.71ms | 100.0% | 2.4ms → 5.1ms |   2 → 4 | `./node_modules/d3/dist/d3.min.js:2` |

##### `appendChild` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +14.8% | +1.13ms | 100.0% | 7.6ms → 8.8ms |   6 → 7 | 2        |

##### `compareDocumentPosition` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
|  +2.5% | +0.13ms | 100.0% | 5.0ms → 5.1ms |       4 | 2        |

##### `(anonymous)` (`./run.mjs:1:1`)

|  Change |   Delta |      % |          Time | Samples | Location      |
| ------: | ------: | -----: | ------------: | ------: | ------------- |
| +193.5% | +2.50ms | 100.0% | 1.3ms → 3.8ms |   1 → 3 | `./run.mjs:1` |

##### `(anonymous)` (`./workload.mjs:193:9`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +2.50ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `./workload.mjs:193` |

##### `(anonymous)` (`./workload.mjs:120:25`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `./workload.mjs:120` |

##### `(anonymous)` (`./workload.mjs:121:16`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `./workload.mjs:121` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|  Change |   Delta |            % |        Time | Samples | Location             |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- |
|     new | +2.52ms | 0.0% → 25.0% | 0ms → 2.5ms |   0 → 2 | `./workload.mjs:139` |
| removed | -1.28ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:121` |
| removed | -1.28ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:125` |
| removed | -1.28ms | 14.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:155` |
|     new | +1.26ms | 0.0% → 12.5% | 0ms → 1.3ms |   0 → 1 | `./workload.mjs:129` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

| Change |    Delta |      % |              Time |   Samples | Location                             |
| -----: | -------: | -----: | ----------------: | --------: | ------------------------------------ |
|  -5.5% | -26.93ms | 100.0% | 491.1ms → 464.1ms | 388 → 369 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

| Change |    Delta |      % |             Time | Samples | Location                             |
| -----: | -------: | -----: | ---------------: | ------: | ------------------------------------ |
| -20.0% | -23.58ms | 100.0% | 117.8ms → 94.2ms | 95 → 74 | `./node_modules/d3/dist/d3.min.js:2` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| -21.1% | -21.04ms | 100.0% | 99.7ms → 78.6ms | 80 → 63 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233696`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| -39.2% | -17.41ms | 100.0% | 44.4ms → 27.0ms | 35 → 22 | `./node_modules/d3/dist/d3.min.js:2` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

| Change |    Delta |      % |            Time | Samples | Location                             |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------ |
| -26.5% | -14.00ms | 100.0% | 52.8ms → 38.8ms | 42 → 31 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`)

| Change |   Delta |      % |           Time | Samples | Location                             |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| -68.6% | -8.29ms | 100.0% | 12.1ms → 3.8ms |   9 → 3 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
|  -8.9% | -7.71ms | 100.0% | 86.8ms → 79.1ms | 69 → 63 | `./node_modules/d3/dist/d3.min.js:2` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

| Change |   Delta |      % |              Time |   Samples | Location                             |
| -----: | ------: | -----: | ----------------: | --------: | ------------------------------------ |
|  -1.2% | -7.54ms | 100.0% | 612.8ms → 605.2ms | 489 → 482 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -85.7% | -7.50ms | 100.0% | 8.8ms → 1.3ms |   7 → 1 | `./node_modules/d3/dist/d3.min.js:2` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

| Change |   Delta |      % |              Time | Samples | Location                             |
| -----: | ------: | -----: | ----------------: | ------: | ------------------------------------ |
|  -1.9% | -6.71ms | 100.0% | 346.8ms → 340.1ms |     271 | `./node_modules/d3/dist/d3.min.js:2` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| -10.1% | -6.71ms | 100.0% | 66.2ms → 59.5ms | 51 → 47 | `./node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
|  -9.4% | -6.42ms | 100.0% | 68.0ms → 61.5ms | 54 → 49 | `./node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`./workload.mjs:205:13`)

|  Change |   Delta |              % |          Time | Samples | Location             |
| ------: | ------: | -------------: | ------------: | ------: | -------------------- |
| removed | -3.79ms |   50.0% → 0.0% |   3.8ms → 0ms |   3 → 0 | `./workload.mjs:206` |
|  -67.0% | -2.54ms | 50.0% → 100.0% | 3.8ms → 1.3ms |   3 → 1 | `./workload.mjs:205` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:232415`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -79.5% | -5.00ms | 100.0% | 6.3ms → 1.3ms |   5 → 1 | `./node_modules/d3/dist/d3.min.js:2` |

##### `point` (`./node_modules/d3/dist/d3.min.js:2:131542`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| -27.5% | -4.50ms | 100.0% | 16.4ms → 11.9ms | 13 → 10 | `./node_modules/d3/dist/d3.min.js:2` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:232151`)

| Change |   Delta |      % |            Time | Samples | Location                             |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------ |
| -25.6% | -4.25ms | 100.0% | 16.6ms → 12.4ms | 13 → 10 | `./node_modules/d3/dist/d3.min.js:2` |

##### `r` (`./node_modules/d3/dist/d3.min.js:2:109022`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -61.2% | -3.88ms | 100.0% | 6.3ms → 2.5ms |   5 → 2 | `./node_modules/d3/dist/d3.min.js:2` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|  Change |   Delta |            % |        Time | Samples | Location             |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- |
| removed | -1.29ms | 25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:43`  |
| removed | -1.29ms | 25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:80`  |
| removed | -1.29ms | 25.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:104` |

##### `M` (`./node_modules/d3/dist/d3.min.js:2:109939`)

|  Change |   Delta |             % |        Time | Samples | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
| removed | -3.88ms | 100.0% → 0.0% | 3.9ms → 0ms |   3 → 0 | `./node_modules/d3/dist/d3.min.js:2` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

| Change |   Delta |      % |          Time | Samples | Location                             |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------ |
| -59.6% | -3.75ms | 100.0% | 6.3ms → 2.5ms |   5 → 2 | `./node_modules/d3/dist/d3.min.js:2` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:218226`)

|  Change |   Delta |             % |        Time | Samples | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------ |
| removed | -3.75ms | 100.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `./node_modules/d3/dist/d3.min.js:2` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |   Delta |      % |           Time | Samples | Location                             |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------ |
| -37.3% | -3.75ms | 100.0% | 10.0ms → 6.3ms |   6 → 5 | `./node_modules/d3/dist/d3.min.js:2` |

##### `insertBefore` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Location |
| -----: | ------: | -----: | -------------: | ------: | -------- |
| -22.0% | -2.50ms | 100.0% | 11.4ms → 8.9ms |   9 → 7 | 2        |

##### `createElementNS` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
|  -1.8% | -1.21ms | 100.0% | 67.8ms → 66.6ms | 54 → 53 | 2        |

##### `(anonymous)` (`./workload.mjs:82:7`)

| Change |   Delta |      % |          Time | Samples | Location            |
| -----: | ------: | -----: | ------------: | ------: | ------------------- |
| -75.4% | -3.83ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `./workload.mjs:82` |

##### `(anonymous)` (`./workload.mjs:157:29`)

| Change |   Delta |      % |          Time | Samples | Location             |
| -----: | ------: | -----: | ------------: | ------: | -------------------- |
| -51.6% | -1.33ms | 100.0% | 2.6ms → 1.3ms |   2 → 1 | `./workload.mjs:157` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

|  Change |   Delta |             % |          Time | Samples | Location             |
| ------: | ------: | ------------: | ------------: | ------: | -------------------- |
|  -51.1% | -1.28ms | 50.0% → 33.3% | 2.5ms → 1.2ms |   2 → 1 | `./workload.mjs:172` |
| removed | -1.25ms |  25.0% → 0.0% |   1.3ms → 0ms |   1 → 0 | `./workload.mjs:223` |
|     new | +1.22ms |  0.0% → 33.3% |   0ms → 1.2ms |   0 → 1 | `./workload.mjs:211` |
|   -2.2% | -0.03ms | 25.0% → 33.3% | 1.3ms → 1.2ms |       1 | `./workload.mjs:222` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|  Change |   Delta |             % |        Time | Samples | Location             |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:100` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|  Change |   Delta |             % |        Time | Samples | Location             |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:123` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|  Change |   Delta |             % |        Time | Samples | Location             |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `./workload.mjs:221` |

##### `(anonymous)` (`./workload.mjs:139:12`)

| Change |   Delta |      % |          Time | Samples | Location             |
| -----: | ------: | -----: | ------------: | ------: | -------------------- |
| -50.0% | -1.25ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `./workload.mjs:139` |

##### `(anonymous)` (`./workload.mjs:133:22`)

| Change |   Delta |      % |  Time | Samples | Location             |
| -----: | ------: | -----: | ----: | ------: | -------------------- |
|  -3.3% | -0.04ms | 100.0% | 1.3ms |       1 | `./workload.mjs:133` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

|  Change |    Delta |             % |            Time | Samples | Caller | Location                                               |
| ------: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
|  +99.6% | +19.96ms | 57.2% → 54.5% | 20.0ms → 40.0ms | 16 → 32 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| +123.1% | +18.46ms | 42.8% → 45.5% | 15.0ms → 33.5ms | 12 → 28 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |    Delta |      % |              Time |   Samples | Caller | Location                                   |
| -----: | -------: | -----: | ----------------: | --------: | ------ | ------------------------------------------ |
|  +3.6% | +33.71ms | 100.0% | 938.9ms → 972.6ms | 766 → 792 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| +65.9% | +15.04ms | 100.0% | 22.8ms → 37.9ms | 18 → 30 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

| Change |   Delta |              % |              Time | Samples | Caller | Location                                               |
| -----: | ------: | -------------: | ----------------: | ------: | ------ | ------------------------------------------------------ |
|  +5.8% | +6.25ms | 100.0% → 94.8% | 107.3ms → 113.6ms | 86 → 90 | `$c`   | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|    new | +3.75ms |    0.0% → 3.1% |       0ms → 3.8ms |   0 → 3 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233501`            |
|    new | +2.50ms |    0.0% → 2.1% |       0ms → 2.5ms |   0 → 2 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231054`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18042`)

| Change |   Delta |             % |            Time | Samples | Caller | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------ |
| +40.3% | +7.16ms | 48.9% → 51.1% | 17.8ms → 25.0ms | 14 → 20 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |
| +38.0% | +6.58ms | 47.7% → 48.9% | 17.3ms → 23.9ms | 14 → 19 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:108341`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| +80.3% | +9.04ms | 100.0% | 11.3ms → 20.3ms |  9 → 16 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`)

|  Change |   Delta |      % |           Time | Samples | Caller        | Location                                   |
| ------: | ------: | -----: | -------------: | ------: | ------------- | ------------------------------------------ |
| +136.9% | +8.67ms | 100.0% | 6.3ms → 15.0ms |  5 → 12 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `data` (`./node_modules/d3/dist/d3.min.js:2:23459`)

| Change |   Delta |            % |        Time | Samples | Caller                         | Location                                   |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------ | ------------------------------------------ |
|    new | +3.79ms | 0.0% → 50.0% | 0ms → 3.8ms |   0 → 3 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
|    new | +2.54ms | 0.0% → 33.5% | 0ms → 2.5ms |   0 → 2 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |
|    new | +1.25ms | 0.0% → 16.5% | 0ms → 1.3ms |   0 → 1 | `chartLayouts`                 | `./workload.mjs:116:24`                    |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

|  Change |   Delta |             % |            Time | Samples | Caller | Location                                  |
| ------: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
| +128.0% | +6.46ms | 26.4% → 43.7% |  5.0ms → 11.5ms |   4 → 9 | `g`    | `./node_modules/d3/dist/d3.min.js:2:1758` |
|   +5.0% | +0.71ms | 73.6% → 56.3% | 14.1ms → 14.8ms | 11 → 12 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |

##### `Oc` (`./node_modules/d3/dist/d3.min.js:2:102489`)

| Change |   Delta |            % |        Time | Samples | Caller      | Location                                    |
| -----: | ------: | -----------: | ----------: | ------: | ----------- | ------------------------------------------- |
|    new | +2.50ms | 0.0% → 40.5% | 0ms → 2.5ms |   0 → 2 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103087` |
|    new | +2.42ms | 0.0% → 39.2% | 0ms → 2.4ms |   0 → 2 | `kc`        | `./node_modules/d3/dist/d3.min.js:2:101394` |

##### `Gc` (`./node_modules/d3/dist/d3.min.js:2:106669`)

|  Change |   Delta |             % |        Time | Samples | Caller      | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ------------------------------------------- |
|     new | +2.46ms |  0.0% → 33.3% | 0ms → 2.5ms |   0 → 2 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103087` |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `kc`        | `./node_modules/d3/dist/d3.min.js:2:101413` |
|     new | +1.25ms |  0.0% → 17.0% | 0ms → 1.3ms |   0 → 1 | `$c`        | `./node_modules/d3/dist/d3.min.js:2:102050` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:269888`)

| Change |   Delta |             % |        Time | Samples | Caller       | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------------ | ------------------------------------------------------ |
|    new | +5.13ms | 0.0% → 100.0% | 0ms → 5.1ms |   0 → 4 | `eachBefore` | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

|  Change |   Delta |             % |          Time | Samples | Caller        | Location                                               |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------------ |
| +101.6% | +2.54ms | 28.8% → 36.6% | 2.5ms → 5.0ms |   2 → 4 | `f`           | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|  +21.6% | +1.33ms | 71.2% → 54.4% | 6.2ms → 7.5ms |   5 → 6 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|     new | +1.25ms |   0.0% → 9.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235751`            |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223199`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                               |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------------------ |
|    new | +5.08ms | 0.0% → 100.0% | 0ms → 5.1ms |   0 → 4 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:142159`)

|  Change |   Delta |      % |          Time | Samples | Caller       | Location                                               |
| ------: | ------: | -----: | ------------: | ------: | ------------ | ------------------------------------------------------ |
| +383.8% | +4.96ms | 100.0% | 1.3ms → 6.3ms |   1 → 5 | `eachBefore` | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78541`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                             |
| -----: | ------: | -----: | ------------: | ------: | ------ | ---------------------------------------------------- |
| +71.6% | +4.09ms | 100.0% | 5.7ms → 9.8ms |   5 → 8 | `u`    | `./node_modules/d3/dist/d3.min.js:2:78515 → 2:78514` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

|  Change |   Delta |      % |          Time | Samples | Caller | Location                                   |
| ------: | ------: | -----: | ------------: | ------: | ------ | ------------------------------------------ |
| +310.0% | +3.88ms | 100.0% | 1.3ms → 5.1ms |   1 → 4 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `v` (`./node_modules/d3/dist/d3.min.js:2:223843`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------- |
|    new | +5.08ms | 0.0% → 100.0% | 0ms → 5.1ms |   0 → 4 | `y`    | `./node_modules/d3/dist/d3.min.js:2:223816` |

##### `removeChild` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller   | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | -------- | ------------------------------------------ |
| +30.2% | +3.79ms | 100.0% | 12.5ms → 16.3ms | 10 → 13 | `remove` | `./node_modules/d3/dist/d3.min.js:2:27077` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:1697`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                  |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ----------------------------------------- |
|  +4.7% | +2.92ms | 100.0% | 62.5ms → 65.5ms | 50 → 52 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144` |

##### `update` (`./node_modules/d3/dist/d3.min.js:2:82523`)

|  Change |   Delta |      % |          Time | Samples | Caller | Location                                             |
| ------: | ------: | -----: | ------------: | ------: | ------ | ---------------------------------------------------- |
| +112.1% | +2.71ms | 100.0% | 2.4ms → 5.1ms |   2 → 4 | `Su`   | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034` |

##### `appendChild` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------ |
| +14.8% | +1.13ms | 100.0% | 7.6ms → 8.8ms |   6 → 7 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `compareDocumentPosition` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller  | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------- | ------------------------------------------ |
|  +2.5% | +0.13ms | 100.0% | 5.0ms → 5.1ms |       4 | `order` | `./node_modules/d3/dist/d3.min.js:2:24713` |

##### `(anonymous)` (`./workload.mjs:193:9`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
|    new | +2.50ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:120:25`)

| Change |   Delta |             % |        Time | Samples | Caller | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ----------------------------------------- |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `(anonymous)` (`./workload.mjs:121:16`)

| Change |   Delta |             % |        Time | Samples | Caller         | Location                |
| -----: | ------: | ------------: | ----------: | ------: | -------------- | ----------------------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `chartLayouts` (`./workload.mjs:116:24`)

| Change |   Delta |      % |           Time | Samples | Caller                         | Location              |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------ | --------------------- |
| +12.6% | +1.13ms | 100.0% | 9.0ms → 10.1ms |   7 → 8 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

| Change |    Delta |      % |              Time |   Samples | Caller        | Location                                               |
| -----: | -------: | -----: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
|  -5.5% | -26.93ms | 100.0% | 491.0ms → 464.1ms | 388 → 369 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

| Change |    Delta |             % |            Time | Samples | Caller | Location                                   |
| -----: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------ |
| -38.9% | -20.88ms | 45.6% → 34.8% | 53.7ms → 32.8ms | 44 → 26 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  -4.2% |  -2.71ms | 54.4% → 65.2% | 64.1ms → 61.4ms | 52 → 49 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |    Delta |              % |            Time | Samples | Caller        | Location                                   |
| -----: | -------: | -------------: | --------------: | ------: | ------------- | ------------------------------------------ |
| -22.4% | -22.29ms | 100.0% → 98.4% | 99.7ms → 77.4ms | 81 → 63 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|    new |  +1.25ms |    0.0% → 1.6% |     0ms → 1.3ms |   0 → 1 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:233696`)

| Change |    Delta |             % |            Time | Samples | Caller          | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | --------------- | ------------------------------------------------------ |
| -38.6% | -16.16ms | 94.4% → 95.4% | 41.9ms → 25.8ms | 33 → 21 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |

##### `J` (`./node_modules/d3/dist/d3.min.js:2:8205`)

| Change |    Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -26.5% | -14.00ms | 100.0% | 52.8ms → 38.8ms | 42 → 31 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`)

| Change |   Delta |             % |          Time | Samples | Caller | Location                                   |
| -----: | ------: | ------------: | ------------: | ------: | ------ | ------------------------------------------ |
| -66.9% | -5.04ms | 62.4% → 65.9% | 7.5ms → 2.5ms |   6 → 2 | `text` | `./node_modules/d3/dist/d3.min.js:2:26408` |
| -71.6% | -3.25ms | 37.6% → 34.1% | 4.5ms → 1.3ms |   3 → 1 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:235751`)

| Change |   Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
|  -8.9% | -7.71ms | 100.0% | 86.8ms → 79.1ms | 69 → 63 | `h`    | `./node_modules/d3/dist/d3.min.js:2:235607 → 2:235656` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233933`)

| Change |   Delta |             % |              Time |   Samples | Caller        | Location                                               |
| -----: | ------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
| -54.8% | -6.17ms |   1.8% → 0.8% |    11.3ms → 5.1ms |     9 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|  -0.5% | -2.71ms | 95.3% → 96.0% | 583.9ms → 581.2ms | 466 → 463 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | ------ | ------------------------------------------------------ |
| -85.7% | -7.50ms | 100.0% | 8.8ms → 1.3ms |   7 → 1 | `h`    | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

| Change |   Delta |              % |              Time |   Samples | Caller        | Location                                               |
| -----: | ------: | -------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
|  -2.2% | -7.67ms | 100.0% → 99.7% | 346.8ms → 339.1ms | 271 → 270 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|    new | +0.96ms |    0.0% → 0.3% |       0ms → 1.0ms |     0 → 1 | `h`           | `./node_modules/d3/dist/d3.min.js:2:235656`            |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:1758`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                  |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ----------------------------------------- |
| -10.1% | -6.71ms | 100.0% | 66.2ms → 59.5ms | 51 → 47 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:1144` |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

| Change |   Delta |             % |            Time | Samples | Caller | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -22.9% | -6.34ms | 40.7% → 34.6% | 27.6ms → 21.3ms | 22 → 17 | `a`    | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  -0.2% | -0.08ms | 59.3% → 65.4% |          40.3ms |      32 | `f`    | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |

##### `(anonymous)` (`./workload.mjs:205:13`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------ |
| -83.5% | -6.33ms | 100.0% | 7.6ms → 1.3ms |   6 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:232415`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ------------------------------------------------------ |
| -79.5% | -5.00ms | 100.0% | 6.3ms → 1.3ms |   5 → 1 | `l.initialize` | `./node_modules/d3/dist/d3.min.js:2:233001 → 2:233050` |

##### `point` (`./node_modules/d3/dist/d3.min.js:2:131542`)

| Change |   Delta |             % |           Time | Samples | Caller         | Location                                               |
| -----: | ------: | ------------: | -------------: | ------: | -------------- | ------------------------------------------------------ |
| -33.1% | -3.75ms | 69.2% → 63.9% | 11.3ms → 7.6ms |   9 → 6 | `Yf`           | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
|    new | +2.58ms |  0.0% → 21.8% |    0ms → 2.6ms |   0 → 2 | `MultiPolygon` | `./node_modules/d3/dist/d3.min.js:2:112551 → 2:112532` |
| -55.0% | -2.08ms | 23.2% → 14.4% |  3.8ms → 1.7ms |   3 → 2 | `Bf`           | `./node_modules/d3/dist/d3.min.js:2:112719 → 2:112700` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:232151`)

| Change |   Delta |      % |            Time | Samples | Caller        | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| -25.6% | -4.25ms | 100.0% | 16.6ms → 12.4ms | 13 → 10 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `r` (`./node_modules/d3/dist/d3.min.js:2:109022`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | ------ | ------------------------------------------------------ |
| -61.2% | -3.88ms | 100.0% | 6.3ms → 2.5ms |   5 → 2 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location              |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | --------------------- |
| -75.0% | -3.87ms | 100.0% | 5.2ms → 1.3ms |   4 → 1 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `M` (`./node_modules/d3/dist/d3.min.js:2:109939`)

|  Change |   Delta |            % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | -----------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -2.58ms | 66.7% → 0.0% | 2.6ms → 0ms |   2 → 0 | `(anonymous)` | `./workload.mjs:205:13`                    |
| removed | -1.29ms | 33.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `text`        | `./node_modules/d3/dist/d3.min.js:2:26408` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

|  Change |   Delta |              % |          Time | Samples | Caller         | Location                |
| ------: | ------: | -------------: | ------------: | ------: | -------------- | ----------------------- |
|  -49.6% | -2.50ms | 80.1% → 100.0% | 5.0ms → 2.5ms |   4 → 2 | `chartLayouts` | `./workload.mjs:116:24` |
| removed | -1.25ms |   19.9% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`  | `./workload.mjs:195:13` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:218226`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -3.75ms | 100.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |   Delta |      % |           Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | -------------: | ------: | ------------- | ------------------------------------------ |
| -37.3% | -3.75ms | 100.0% | 10.0ms → 6.3ms |   6 → 5 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `insertBefore` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Caller         | Location                                   |
| -----: | ------: | -------------: | -------------: | ------: | -------------- | ------------------------------------------ |
| -44.7% | -5.08ms | 100.0% → 70.9% | 11.4ms → 6.3ms |   9 → 5 | `appendChild`  | `./node_modules/d3/dist/d3.min.js:2:21447` |
|    new | +2.58ms |   0.0% → 29.1% |    0ms → 2.6ms |   0 → 2 | `insertBefore` | `./node_modules/d3/dist/d3.min.js:2:21520` |

##### `createElementNS` (`<unknown>`)

| Change |   Delta |             % |            Time | Samples | Caller        | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------ |
|  -1.8% | -1.21ms | 98.2% → 98.1% | 66.6ms → 65.4ms | 53 → 52 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |

##### `(anonymous)` (`./workload.mjs:82:7`)

| Change |   Delta |      % |          Time | Samples | Caller | Location                                  |
| -----: | ------: | -----: | ------------: | ------: | ------ | ----------------------------------------- |
| -75.4% | -3.83ms | 100.0% | 5.1ms → 1.3ms |   4 → 1 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `(anonymous)` (`./workload.mjs:157:29`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------- |
| -51.6% | -1.33ms | 100.0% | 2.6ms → 1.3ms |   2 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location        |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------------- |
| -26.7% | -1.33ms | 100.0% | 5.0ms → 3.7ms |   4 → 3 | `(anonymous)` | `./run.mjs:1:1` |

##### `(anonymous)` (`./workload.mjs:100:10`)

|  Change |   Delta |             % |        Time | Samples | Caller | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `f`    | `./node_modules/d3/dist/d3.min.js:2:194448` |

##### `(anonymous)` (`./workload.mjs:123:12`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142038` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------ |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664` |

##### `(anonymous)` (`./workload.mjs:139:12`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location                |
| -----: | ------: | -----: | ------------: | ------: | -------------- | ----------------------- |
| -50.0% | -1.25ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./workload.mjs:133:22`)

| Change |   Delta |      % |  Time | Samples | Caller        | Location                                   |
| -----: | ------: | -----: | ----: | ------: | ------------- | ------------------------------------------ |
|  -3.3% | -0.04ms | 100.0% | 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function              | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
|   +5.6% | +42.96ms | 18.0% → 19.0% | 761.3ms → 804.2ms | 601 → 641 | `a`                   | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +3.5% | +31.50ms | 21.5% → 22.2% | 907.8ms → 939.3ms | 724 → 749 | `Fc.visit`            | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|  +19.0% | +21.96ms |   2.7% → 3.3% | 115.7ms → 137.6ms |  92 → 108 | `(garbage collector)` | `<unknown>`                                            |
|  +14.4% | +18.55ms |   3.1% → 3.5% | 128.8ms → 147.4ms | 103 → 117 | `$c`                  | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|   +1.5% | +15.55ms | 25.1% → 25.5% |     1.06s → 1.07s | 863 → 876 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:76982`             |
|   +1.5% | +15.51ms | 24.9% → 25.2% |     1.05s → 1.06s | 857 → 868 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`                   | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|   +1.3% | +14.30ms | 25.1% → 25.4% |     1.06s → 1.07s | 863 → 875 | `o`                   | `./node_modules/d3/dist/d3.min.js:2:77004`             |
|  +11.6% | +13.79ms |   2.8% → 3.1% | 118.5ms → 132.3ms |  95 → 105 | `Fc.addAll`           | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|   +1.2% | +13.05ms | 25.2% → 25.5% |     1.06s → 1.07s | 865 → 876 | `i`                   | `./node_modules/d3/dist/d3.min.js:2:76807`             |
|  +84.7% | +12.71ms |   0.4% → 0.7% |   15.0ms → 27.7ms |   12 → 22 | `from`                | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)`         | `./node_modules/d3/dist/d3.min.js:2:18042`             |
| +154.8% | +11.54ms |   0.2% → 0.4% |    7.5ms → 19.0ms |    6 → 15 | `Su`                  | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034`   |
| +113.7% | +11.42ms |   0.2% → 0.5% |   10.0ms → 21.5ms |    8 → 17 | `Lu`                  | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|  +12.6% | +11.12ms |   2.1% → 2.3% |   88.2ms → 99.3ms |   70 → 80 | `append`              | `./node_modules/d3/dist/d3.min.js:2:26726`             |
| +124.4% | +11.04ms |   0.2% → 0.5% |    8.9ms → 19.9ms |    8 → 16 | `data`                | `./node_modules/d3/dist/d3.min.js:2:23459`             |
| +206.7% | +10.25ms |   0.1% → 0.4% |    5.0ms → 15.2ms |    4 → 12 | `update`              | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  +14.0% | +10.17ms |   1.7% → 2.0% |   72.8ms → 83.0ms |   58 → 66 | `h`                   | `./node_modules/d3/dist/d3.min.js:2:12208`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`                   | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
|  +11.0% |  +8.87ms |   1.9% → 2.1% |   80.5ms → 89.3ms |   64 → 72 | `join`                | `./node_modules/d3/dist/d3.min.js:2:24162`             |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function      | Location                                               |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | ------------------------------------------------------ |
|   +5.6% | +42.96ms | 18.0% → 19.0% | 761.3ms → 804.2ms | 601 → 641 | `a`           | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +3.5% | +31.50ms | 21.5% → 22.2% | 907.8ms → 939.3ms | 724 → 749 | `Fc.visit`    | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|  +14.4% | +18.55ms |   3.1% → 3.5% | 128.8ms → 147.4ms | 103 → 117 | `$c`          | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|   +1.5% | +15.55ms | 25.1% → 25.5% |     1.06s → 1.07s | 863 → 876 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982`             |
|   +1.5% | +15.51ms | 24.9% → 25.2% |     1.05s → 1.06s | 857 → 868 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`           | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|   +1.3% | +14.30ms | 25.1% → 25.4% |     1.06s → 1.07s | 863 → 875 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004`             |
|  +11.6% | +13.79ms |   2.8% → 3.1% | 118.5ms → 132.3ms |  95 → 105 | `Fc.addAll`   | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|   +1.2% | +13.05ms | 25.2% → 25.5% |     1.06s → 1.07s | 865 → 876 | `i`           | `./node_modules/d3/dist/d3.min.js:2:76807`             |
|  +84.7% | +12.71ms |   0.4% → 0.7% |   15.0ms → 27.7ms |   12 → 22 | `from`        | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042`             |
| +154.8% | +11.54ms |   0.2% → 0.4% |    7.5ms → 19.0ms |    6 → 15 | `Su`          | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034`   |
| +113.7% | +11.42ms |   0.2% → 0.5% |   10.0ms → 21.5ms |    8 → 17 | `Lu`          | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|  +12.6% | +11.12ms |   2.1% → 2.3% |   88.2ms → 99.3ms |   70 → 80 | `append`      | `./node_modules/d3/dist/d3.min.js:2:26726`             |
| +124.4% | +11.04ms |   0.2% → 0.5% |    8.9ms → 19.9ms |    8 → 16 | `data`        | `./node_modules/d3/dist/d3.min.js:2:23459`             |
| +206.7% | +10.25ms |   0.1% → 0.4% |    5.0ms → 15.2ms |    4 → 12 | `update`      | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  +14.0% | +10.17ms |   1.7% → 2.0% |   72.8ms → 83.0ms |   58 → 66 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`           | `./node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
|  +11.0% |  +8.87ms |   1.9% → 2.1% |   80.5ms → 89.3ms |   64 → 72 | `join`        | `./node_modules/d3/dist/d3.min.js:2:24162`             |
|  +10.2% |  +7.46ms |   1.7% → 1.9% |   72.9ms → 80.4ms |   58 → 64 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259`             |

##### Native

| Change |   Delta |           % |            Time | Samples | Function                  | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------------------- | ----------- |
| +30.2% | +3.79ms | 0.3% → 0.4% | 12.5ms → 16.3ms | 10 → 13 | `removeChild`             | `<unknown>` |
| +14.8% | +1.13ms |        0.2% |   7.6ms → 8.8ms |   6 → 7 | `appendChild`             | `<unknown>` |
|  +2.5% | +0.13ms |        0.1% |   5.0ms → 5.1ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

| Change |    Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
| +19.0% | +21.96ms | 2.7% → 3.3% | 115.7ms → 137.6ms | 92 → 108 | `(garbage collector)` | `<unknown>` |

##### Ours

| Change |   Delta |            % |            Time | Samples | Function      | Location                |
| -----: | ------: | -----------: | --------------: | ------: | ------------- | ----------------------- |
| +19.3% | +6.33ms |  0.8% → 0.9% | 32.8ms → 39.2ms | 26 → 32 | `(anonymous)` | `./workload.mjs:185:13` |
|    new | +2.54ms |  0.0% → 0.1% |     0ms → 2.5ms |   0 → 2 | `(anonymous)` | `./workload.mjs:111:13` |
|    new | +1.29ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:120:25` |
| +51.6% | +1.29ms |         0.1% |   2.5ms → 3.8ms |   2 → 3 | `(anonymous)` | `./workload.mjs:193:9`  |
|    new | +1.29ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:60:18`  |
|    new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:121:16` |
| +36.3% | +0.33ms |        <0.1% |   0.9ms → 1.3ms |       1 | `(anonymous)` | `./workload.mjs:199:25` |
|  +6.9% | +0.08ms |        <0.1% |   1.2ms → 1.3ms |       1 | `(anonymous)` | `./workload.mjs:11:29`  |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |       Samples | Function                       | Location                                               |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------ | ------------------------------------------------------ |
|  -2.3% | -29.09ms | 29.6% → 28.8% |     1.24s → 1.21s |     991 → 970 | `f`                            | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| -12.4% | -26.08ms |   5.0% → 4.3% | 209.9ms → 183.8ms |     170 → 148 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:18176`             |
| -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |       35 → 22 | `l`                            | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| -15.4% | -16.95ms |   2.6% → 2.2% |  110.4ms → 93.5ms |       90 → 76 | `p`                            | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -6.3% | -16.25ms |   6.1% → 5.7% | 256.3ms → 240.1ms |     207 → 193 | `attr`                         | `./node_modules/d3/dist/d3.min.js:2:25709`             |
| -25.9% | -14.58ms |   1.3% → 1.0% |   56.2ms → 41.6ms |       44 → 33 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:19664`             |
| -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |       42 → 31 | `J`                            | `./node_modules/d3/dist/d3.min.js:2:8205`              |
| -24.5% | -13.46ms |   1.3% → 1.0% |   55.0ms → 41.5ms |       43 → 33 | `text`                         | `./node_modules/d3/dist/d3.min.js:2:26408`             |
| -79.7% | -10.00ms |   0.3% → 0.1% |    12.5ms → 2.5ms |        10 → 2 | `f`                            | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -0.2% |  -9.34ms | 95.0% → 94.6% |        4s → 3.99s | 3,203 → 3,207 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                                  |
|  -0.2% |  -8.68ms | 88.3% → 87.9% |     3.72s → 3.71s | 2,975 → 2,980 | `chartLayouts`                 | `./workload.mjs:116:24`                                |
|  -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms |     489 → 482 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -5.7% |  -7.54ms |   3.1% → 3.0% | 132.7ms → 125.2ms |     105 → 100 | `Fc.visitAfter`                | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -16.4% |  -7.17ms |   1.0% → 0.9% |   43.6ms → 36.4ms |       34 → 29 | `(anonymous)`                  | `./workload.mjs:201:13`                                |
|  -0.2% |  -6.84ms | 95.0% → 94.7% |                4s | 3,204 → 3,210 | `(anonymous)`                  | `./run.mjs:1:1`                                        |
| -12.4% |  -6.79ms |   1.3% → 1.1% |   54.7ms → 47.9ms |       44 → 40 | `Lf`                           | `./node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |
| -33.1% |  -6.25ms |   0.4% → 0.3% |   18.9ms → 12.6ms |       15 → 10 | `D`                            | `./node_modules/d3/dist/d3.min.js:2:4759`              |
| -62.1% |  -6.21ms |   0.2% → 0.1% |    10.0ms → 3.8ms |         8 → 3 | `force`                        | `./node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
| -10.0% |  -6.21ms |   1.5% → 1.3% |   61.7ms → 55.5ms |       49 → 44 | `chartBreakdowns`              | `./workload.mjs:39:27`                                 |
| -10.6% |  -5.54ms |   1.2% → 1.1% |   52.2ms → 46.7ms |       42 → 39 | `Yf`                           | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function        | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
|  -2.3% | -29.09ms | 29.6% → 28.8% |     1.24s → 1.21s | 991 → 970 | `f`             | `./node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| -12.4% | -26.08ms |   5.0% → 4.3% | 209.9ms → 183.8ms | 170 → 148 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`             |
| -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |   35 → 22 | `l`             | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| -15.4% | -16.95ms |   2.6% → 2.2% |  110.4ms → 93.5ms |   90 → 76 | `p`             | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -6.3% | -16.25ms |   6.1% → 5.7% | 256.3ms → 240.1ms | 207 → 193 | `attr`          | `./node_modules/d3/dist/d3.min.js:2:25709`             |
| -25.9% | -14.58ms |   1.3% → 1.0% |   56.2ms → 41.6ms |   44 → 33 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:19664`             |
| -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |   42 → 31 | `J`             | `./node_modules/d3/dist/d3.min.js:2:8205`              |
| -24.5% | -13.46ms |   1.3% → 1.0% |   55.0ms → 41.5ms |   43 → 33 | `text`          | `./node_modules/d3/dist/d3.min.js:2:26408`             |
| -79.7% | -10.00ms |   0.3% → 0.1% |    12.5ms → 2.5ms |    10 → 2 | `f`             | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms | 489 → 482 | `h`             | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -5.7% |  -7.54ms |   3.1% → 3.0% | 132.7ms → 125.2ms | 105 → 100 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -12.4% |  -6.79ms |   1.3% → 1.1% |   54.7ms → 47.9ms |   44 → 40 | `Lf`            | `./node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |
| -33.1% |  -6.25ms |   0.4% → 0.3% |   18.9ms → 12.6ms |   15 → 10 | `D`             | `./node_modules/d3/dist/d3.min.js:2:4759`              |
| -62.1% |  -6.21ms |   0.2% → 0.1% |    10.0ms → 3.8ms |     8 → 3 | `force`         | `./node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
| -10.6% |  -5.54ms |   1.2% → 1.1% |   52.2ms → 46.7ms |   42 → 39 | `Yf`            | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
| -40.5% |  -5.13ms |   0.3% → 0.2% |    12.7ms → 7.5ms |    10 → 6 | `appendChild`   | `./node_modules/d3/dist/d3.min.js:2:21447`             |
| -21.8% |  -4.96ms |   0.5% → 0.4% |   22.8ms → 17.8ms |   18 → 14 | `t`             | `./node_modules/d3/dist/d3.min.js:2:4909`              |
| -56.7% |  -4.96ms |   0.2% → 0.1% |     8.8ms → 3.8ms |     7 → 3 | `p`             | `./node_modules/d3/dist/d3.min.js:2:236084 → 2:236133` |
| -25.6% |  -4.25ms |   0.4% → 0.3% |   16.6ms → 12.4ms |   13 → 10 | `l`             | `./node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
|  -2.6% |  -4.13ms |   3.7% → 3.6% | 156.6ms → 152.5ms | 123 → 121 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:1144`              |

##### Native

| Change |   Delta |           % |            Time | Samples | Function          | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ----------------- | ----------- |
| -12.6% | -5.25ms | 1.0% → 0.9% | 41.7ms → 36.4ms | 23 → 20 | `(program)`       | `<unknown>` |
| -22.0% | -2.50ms | 0.3% → 0.2% |  11.4ms → 8.9ms |   9 → 7 | `insertBefore`    | `<unknown>` |
|  -1.8% | -1.21ms |        1.6% | 67.8ms → 66.6ms | 54 → 53 | `createElementNS` | `<unknown>` |

##### Ours

|  Change |   Delta |             % |            Time |       Samples | Function                       | Location                |
| ------: | ------: | ------------: | --------------: | ------------: | ------------------------------ | ----------------------- |
|   -0.2% | -9.34ms | 95.0% → 94.6% |      4s → 3.99s | 3,203 → 3,207 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
|   -0.2% | -8.68ms | 88.3% → 87.9% |   3.72s → 3.71s | 2,975 → 2,980 | `chartLayouts`                 | `./workload.mjs:116:24` |
|  -16.4% | -7.17ms |   1.0% → 0.9% | 43.6ms → 36.4ms |       34 → 29 | `(anonymous)`                  | `./workload.mjs:201:13` |
|   -0.2% | -6.84ms | 95.0% → 94.7% |              4s | 3,204 → 3,210 | `(anonymous)`                  | `./run.mjs:1:1`         |
|  -10.0% | -6.21ms |   1.5% → 1.3% | 61.7ms → 55.5ms |       49 → 44 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  -27.7% | -5.37ms |   0.5% → 0.3% | 19.4ms → 14.0ms |       16 → 11 | `(anonymous)`                  | `./workload.mjs:195:13` |
|  -50.0% | -3.79ms |   0.2% → 0.1% |   7.6ms → 3.8ms |         6 → 3 | `(anonymous)`                  | `./workload.mjs:82:7`   |
|   -7.9% | -2.50ms |          0.7% | 31.5ms → 29.0ms |       25 → 23 | `(anonymous)`                  | `./workload.mjs:205:13` |
| removed | -2.50ms |   0.1% → 0.0% |     2.5ms → 0ms |         2 → 0 | `(anonymous)`                  | `./workload.mjs:221:13` |
|  -22.1% | -1.42ms |   0.2% → 0.1% |   6.4ms → 5.0ms |         5 → 4 | `(anonymous)`                  | `./workload.mjs:157:29` |
| removed | -1.25ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `(anonymous)`                  | `./workload.mjs:100:10` |
| removed | -1.25ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `(anonymous)`                  | `./workload.mjs:123:12` |
|  -50.0% | -1.25ms |  0.1% → <0.1% |   2.5ms → 1.3ms |         2 → 1 | `(anonymous)`                  | `./workload.mjs:139:12` |
|   -3.3% | -0.04ms |         <0.1% |           1.3ms |             1 | `(anonymous)`                  | `./workload.mjs:133:22` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

| Change |    Delta |             % |              Time |   Samples | Callee          | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
| +40.3% | +24.21ms |  7.9% → 10.5% |   60.1ms → 84.3ms |   48 → 67 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|  +4.7% | +14.25ms | 39.9% → 39.6% | 303.9ms → 318.1ms | 242 → 254 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
| +17.2% |  +8.70ms |   6.6% → 7.4% |   50.5ms → 59.2ms |   40 → 47 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|    new |  +2.50ms |   0.0% → 0.3% |       0ms → 2.5ms |     0 → 2 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103087`            |

##### `Fc.visit` (`./node_modules/d3/dist/d3.min.js:2:105681`)

| Change |   Delta |             % |              Time |   Samples | Callee | Location                                               |
| -----: | ------: | ------------: | ----------------: | --------: | ------ | ------------------------------------------------------ |
|  -1.5% | -4.21ms | 31.8% → 30.3% | 288.9ms → 284.7ms | 230 → 226 | `g`    | `./node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
|  -0.5% | -2.71ms | 64.3% → 61.9% | 583.9ms → 581.2ms | 466 → 463 | `h`    | `./node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |

##### `$c` (`./node_modules/d3/dist/d3.min.js:2:102050`)

|  Change |   Delta |             % |              Time |  Samples | Callee      | Location                                               |
| ------: | ------: | ------------: | ----------------: | -------: | ----------- | ------------------------------------------------------ |
|   +6.4% | +7.54ms | 91.9% → 85.5% | 118.5ms → 126.0ms | 95 → 100 | `Fc.addAll` | `./node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|     new | +2.54ms |   0.0% → 1.7% |       0ms → 2.5ms |    0 → 2 | `Ic`        | `./node_modules/d3/dist/d3.min.js:2:102458`            |
| +122.0% | +2.08ms |   1.3% → 2.6% |     1.7ms → 3.8ms |    1 → 3 | `Xc`        | `./node_modules/d3/dist/d3.min.js:2:106662 → 2:106643` |
|     new | +1.25ms |   0.0% → 0.8% |       0ms → 1.3ms |    0 → 1 | `Gc`        | `./node_modules/d3/dist/d3.min.js:2:106669`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

| Change |    Delta |              % |          Time |   Samples | Callee | Location                                   |
| -----: | -------: | -------------: | ------------: | --------: | ------ | ------------------------------------------ |
|  +1.3% | +14.30ms | 100.0% → 99.9% | 1.06s → 1.07s | 863 → 875 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |    Delta |            % |             Time | Samples | Callee | Location                                             |
| -----: | -------: | -----------: | ---------------: | ------: | ------ | ---------------------------------------------------- |
| -16.5% | -18.20ms | 10.5% → 8.6% | 110.4ms → 92.2ms | 90 → 75 | `p`    | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576` |
|  +0.1% |  +1.00µs |         0.1% |            1.3ms |       1 | `au`   | `./node_modules/d3/dist/d3.min.js:2:79111 → 2:79110` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |    Delta |             % |          Time |   Samples | Callee        | Location                                   |
| -----: | -------: | ------------: | ------------: | --------: | ------------- | ------------------------------------------ |
|  +1.5% | +15.51ms | 99.1% → 99.2% | 1.05s → 1.06s | 857 → 868 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|    new |  +1.29ms |   0.0% → 0.1% |   0ms → 1.3ms |     0 → 1 | `au`          | `./node_modules/d3/dist/d3.min.js:2:79110` |
|    new |  +1.25ms |   0.0% → 0.1% |   0ms → 1.3ms |     0 → 1 | `p`           | `./node_modules/d3/dist/d3.min.js:2:77576` |

##### `Fc.addAll` (`./node_modules/d3/dist/d3.min.js:2:103087`)

|  Change |   Delta |           % |          Time | Samples | Callee     | Location                                               |
| ------: | ------: | ----------: | ------------: | ------: | ---------- | ------------------------------------------------------ |
| removed | -2.50ms | 2.1% → 0.0% |   2.5ms → 0ms |   2 → 0 | `Ic`       | `./node_modules/d3/dist/d3.min.js:2:102477`            |
|     new | +2.50ms | 0.0% → 1.9% |   0ms → 2.5ms |   0 → 2 | `Oc`       | `./node_modules/d3/dist/d3.min.js:2:102489`            |
|     new | +2.46ms | 0.0% → 1.9% |   0ms → 2.5ms |   0 → 2 | `Gc`       | `./node_modules/d3/dist/d3.min.js:2:106669`            |
|  -21.3% | -1.33ms | 5.3% → 3.7% | 6.3ms → 4.9ms |   5 → 4 | `kc`       | `./node_modules/d3/dist/d3.min.js:2:101413 → 2:101394` |
|     new | +1.25ms | 0.0% → 0.9% |   0ms → 1.3ms |   0 → 1 | `Fc.cover` | `./node_modules/d3/dist/d3.min.js:2:103436`            |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

| Change |    Delta |              % |          Time |   Samples | Callee        | Location                                   |
| -----: | -------: | -------------: | ------------: | --------: | ------------- | ------------------------------------------ |
|  +1.5% | +15.55ms | 99.8% → 100.0% | 1.06s → 1.07s | 863 → 876 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `from` (`./node_modules/d3/dist/d3.min.js:2:94282`)

|  Change |    Delta |             % |            Time | Samples | Callee        | Location                                             |
| ------: | -------: | ------------: | --------------: | ------: | ------------- | ---------------------------------------------------- |
| +113.7% | +11.42ms | 66.9% → 77.4% | 10.0ms → 21.5ms |  8 → 17 | `Lu`          | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618` |
|  +34.8% |  +1.29ms | 24.7% → 18.0% |   3.7ms → 5.0ms |   3 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:94352 → 2:94333` |

##### `Su` (`./node_modules/d3/dist/d3.min.js:2:82034`)

|  Change |    Delta |             % |           Time | Samples | Callee   | Location                                             |
| ------: | -------: | ------------: | -------------: | ------: | -------- | ---------------------------------------------------- |
| +206.7% | +10.25ms | 66.5% → 80.0% | 5.0ms → 15.2ms |  4 → 12 | `update` | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523` |
| removed |  -1.25ms |  16.8% → 0.0% |    1.3ms → 0ms |   1 → 0 | `Mu`     | `./node_modules/d3/dist/d3.min.js:2:80086`           |

##### `Lu` (`./node_modules/d3/dist/d3.min.js:2:94618`)

|  Change |    Delta |             % |           Time | Samples | Callee  | Location                                             |
| ------: | -------: | ------------: | -------------: | ------: | ------- | ---------------------------------------------------- |
| +154.8% | +11.54ms | 74.3% → 88.5% | 7.5ms → 19.0ms |  6 → 15 | `Su`    | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034` |
| removed |  -2.58ms |  25.7% → 0.0% |    2.6ms → 0ms |   2 → 0 | `_init` | `./node_modules/d3/dist/d3.min.js:2:94865`           |

##### `append` (`./node_modules/d3/dist/d3.min.js:2:26726`)

|  Change |    Delta |             % |            Time | Samples | Callee   | Location                                   |
| ------: | -------: | ------------: | --------------: | ------: | -------- | ------------------------------------------ |
|  +14.4% | +12.37ms | 97.2% → 98.7% | 85.7ms → 98.1ms | 68 → 79 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |
| removed |  -1.25ms |   1.4% → 0.0% |     1.3ms → 0ms |   1 → 0 | `It`     | `./node_modules/d3/dist/d3.min.js:2:16093` |

##### `data` (`./node_modules/d3/dist/d3.min.js:2:23459`)

| Change |   Delta |             % |          Time | Samples | Callee | Location                                   |
| -----: | ------: | ------------: | ------------: | ------: | ------ | ------------------------------------------ |
| +39.1% | +2.46ms | 70.9% → 43.9% | 6.3ms → 8.8ms |   5 → 7 | `en`   | `./node_modules/d3/dist/d3.min.js:2:17247` |
| +38.7% | +1.00ms | 29.1% → 18.0% | 2.6ms → 3.6ms |       3 | `rn`   | `./node_modules/d3/dist/d3.min.js:2:17402` |

##### `update` (`./node_modules/d3/dist/d3.min.js:2:82523`)

|  Change |   Delta |             % |          Time | Samples | Callee         | Location                                             |
| ------: | ------: | ------------: | ------------: | ------: | -------------- | ---------------------------------------------------- |
| +100.0% | +2.54ms | 51.3% → 33.4% | 2.5ms → 5.1ms |   2 → 4 | `_legalize`    | `./node_modules/d3/dist/d3.min.js:2:85298 → 2:85279` |
|     new | +2.50ms |  0.0% → 16.4% |   0ms → 2.5ms |   0 → 2 | `Cu`           | `./node_modules/d3/dist/d3.min.js:2:86467`           |
|     new | +1.25ms |   0.0% → 8.2% |   0ms → 1.3ms |   0 → 1 | `_hashKey`     | `./node_modules/d3/dist/d3.min.js:2:85119`           |
|     new | +1.25ms |   0.0% → 8.2% |   0ms → 1.3ms |   0 → 1 | `_addTriangle` | `./node_modules/d3/dist/d3.min.js:2:85935`           |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

|  Change |    Delta |             % |            Time | Samples | Callee   | Location                                   |
| ------: | -------: | ------------: | --------------: | ------: | -------- | ------------------------------------------ |
|  +80.8% | +19.12ms | 32.5% → 51.6% | 23.7ms → 42.8ms | 19 → 34 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
|  -54.1% |  -7.46ms |  18.9% → 7.6% |  13.8ms → 6.3ms |  11 → 5 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |
|  -57.3% |  -5.08ms |  12.2% → 4.6% |   8.9ms → 3.8ms |   7 → 3 | `text`   | `./node_modules/d3/dist/d3.min.js:2:26408` |
|  +48.7% |  +3.71ms | 10.5% → 13.7% |  7.6ms → 11.3ms |   6 → 9 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |
| +286.7% |  +3.58ms |   1.7% → 5.8% |   1.3ms → 4.8ms |   1 → 4 | `data`   | `./node_modules/d3/dist/d3.min.js:2:23459` |

##### `join` (`./node_modules/d3/dist/d3.min.js:2:24162`)

| Change |   Delta |             % |            Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------ |
| +19.3% | +6.33ms | 40.8% → 43.8% | 32.8ms → 39.2ms | 26 → 32 | `(anonymous)` | `./workload.mjs:185:13`                    |
|  +5.9% | +2.37ms | 49.9% → 47.6% | 40.2ms → 42.5ms | 32 → 34 | `append`      | `./node_modules/d3/dist/d3.min.js:2:26726` |
|  +2.7% | +0.17ms |   7.7% → 7.1% |   6.2ms → 6.4ms |       5 | `order`       | `./node_modules/d3/dist/d3.min.js:2:24713` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`)

| Change |   Delta |             % |            Time | Samples | Callee            | Location    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------- | ----------- |
|  -1.8% | -1.21ms | 91.3% → 81.3% | 66.6ms → 65.4ms | 53 → 52 | `createElementNS` | `<unknown>` |

##### `(anonymous)` (`./workload.mjs:185:13`)

| Change |   Delta |      % |            Time | Samples | Callee   | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | -------- | ------------------------------------------ |
| +19.3% | +6.33ms | 100.0% | 32.8ms → 39.2ms | 26 → 32 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `(anonymous)` (`./workload.mjs:111:13`)

| Change |   Delta |             % |        Time | Samples | Callee | Location                                   |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------ |
|    new | +2.54ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `Xr`   | `./node_modules/d3/dist/d3.min.js:2:42723` |

##### `(anonymous)` (`./workload.mjs:193:9`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ------------------------------------------- |
| removed | -2.50ms | 100.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `l`           | `./node_modules/d3/dist/d3.min.js:2:155044` |
|     new | +1.29ms |  0.0% → 34.1% | 0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:154360` |

##### `(anonymous)` (`./workload.mjs:60:18`)

| Change |   Delta |             % |        Time | Samples | Callee | Location                                    |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------------------------------- |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `l`    | `./node_modules/d3/dist/d3.min.js:2:155023` |

##### `(anonymous)` (`./workload.mjs:199:25`)

| Change |   Delta |      % |          Time | Samples | Callee | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | ------ | ------------------------------------------------------ |
| +36.3% | +0.33ms | 100.0% | 0.9ms → 1.3ms |       1 | `i`    | `./node_modules/d3/dist/d3.min.js:2:152428 → 2:152407` |

##### `(anonymous)` (`./workload.mjs:11:29`)

| Change |   Delta |      % |          Time | Samples | Callee        | Location                                               |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ------------------------------------------------------ |
|  +6.9% | +0.08ms | 100.0% | 1.2ms → 1.3ms |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:166138 → 2:166117` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233501`)

| Change |    Delta |             % |              Time |   Samples | Callee          | Location                                               |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ------------------------------------------------------ |
|  +2.9% | +17.25ms | 48.4% → 51.0% | 604.0ms → 621.2ms | 482 → 495 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
| -19.7% | -16.24ms |   6.6% → 5.4% |   82.2ms → 66.0ms |   65 → 53 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -10.1% |  -6.92ms |   5.5% → 5.1% |   68.7ms → 61.8ms |   55 → 49 | `$c`            | `./node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|    new |  +3.75ms |   0.0% → 0.3% |       0ms → 3.8ms |     0 → 3 | `Fc.addAll`     | `./node_modules/d3/dist/d3.min.js:2:103087`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

| Change |    Delta |             % |            Time | Samples | Callee        | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| -79.7% | -10.00ms |   6.0% → 1.4% |  12.5ms → 2.5ms |  10 → 2 | `f`           | `./node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|    new |  +5.04ms |   0.0% → 2.7% |     0ms → 5.0ms |   0 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:13444`             |
| +51.6% |  +1.29ms |   1.2% → 2.1% |   2.5ms → 3.8ms |   2 → 3 | `(anonymous)` | `./workload.mjs:193:9`                                 |
|    new |  +1.29ms |   0.0% → 0.7% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:60:18`                                 |
|  -0.6% |  -0.41ms | 35.6% → 40.5% | 74.8ms → 74.4ms | 60 → 61 | `a`           | `./node_modules/d3/dist/d3.min.js:2:244444 → 2:244493` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |   Delta |            % |            Time | Samples | Callee        | Location                                             |
| -----: | ------: | -----------: | --------------: | ------: | ------------- | ---------------------------------------------------- |
| +38.0% | +4.08ms | 9.7% → 15.9% | 10.7ms → 14.8ms |  9 → 12 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140` |

##### `attr` (`./node_modules/d3/dist/d3.min.js:2:25709`)

|  Change |    Delta |             % |              Time | Samples | Callee        | Location                                   |
| ------: | -------: | ------------: | ----------------: | ------: | ------------- | ------------------------------------------ |
|  -22.3% | -19.54ms | 34.2% → 28.4% |   87.7ms → 68.1ms | 71 → 54 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |
|  +38.0% |  +6.58ms |  6.8% → 10.0% |   17.3ms → 23.9ms | 14 → 19 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18042` |
| +100.0% |  +1.25ms |   0.5% → 1.0% |     1.3ms → 2.5ms |   1 → 2 | `It`          | `./node_modules/d3/dist/d3.min.js:2:16093` |
|   -0.6% |  -0.80ms | 56.1% → 59.6% | 143.8ms → 143.0ms |     116 | `each`        | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:19664`)

|  Change |   Delta |             % |            Time | Samples | Callee        | Location                                               |
| ------: | ------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
|     new | +2.54ms |   0.0% → 6.1% |     0ms → 2.5ms |   0 → 2 | `(anonymous)` | `./workload.mjs:111:13`                                |
|   -7.9% | -2.50ms | 56.1% → 69.8% | 31.5ms → 29.0ms | 25 → 23 | `(anonymous)` | `./workload.mjs:205:13`                                |
| removed | -2.50ms |   4.4% → 0.0% |     2.5ms → 0ms |   2 → 0 | `(anonymous)` | `./workload.mjs:221:13`                                |
|  -65.5% | -2.46ms |   6.7% → 3.1% |   3.8ms → 1.3ms |   3 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:158066 → 2:158045` |
|  -50.0% | -1.25ms |   4.4% → 3.0% |   2.5ms → 1.3ms |   2 → 1 | `x`           | `./node_modules/d3/dist/d3.min.js:2:173246 → 2:173225` |

##### `text` (`./node_modules/d3/dist/d3.min.js:2:26408`)

|  Change |    Delta |             % |            Time | Samples | Callee        | Location                                    |
| ------: | -------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------- |
|  -36.5% | -13.79ms | 68.7% → 57.7% | 37.7ms → 24.0ms | 30 → 19 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:19664`  |
| removed |  -1.29ms |   2.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `M`           | `./node_modules/d3/dist/d3.min.js:2:109958` |
|   +3.7% |  +0.54ms | 26.7% → 36.6% | 14.7ms → 15.2ms | 11 → 12 | `each`        | `./node_modules/d3/dist/d3.min.js:2:25558`  |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:218226`)

|  Change |   Delta |             % |          Time | Samples | Callee        | Location                                    |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------- |
|  -74.6% | -3.67ms | 39.2% → 49.2% | 4.9ms → 1.3ms |   4 → 1 | `arc`         | `./node_modules/d3/dist/d3.min.js:2:73341`  |
| removed | -2.58ms |  20.6% → 0.0% |   2.6ms → 0ms |   2 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:192839` |
|   +0.1% | +1.00µs | 10.3% → 50.8% |         1.3ms |       1 | `moveTo`      | `./node_modules/d3/dist/d3.min.js:2:72387`  |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |    Delta |           % |            Time |       Samples | Callee            | Location                                   |
| -----: | -------: | ----------: | --------------: | ------------: | ----------------- | ------------------------------------------ |
| +30.8% | +10.12ms | 0.8% → 1.1% | 32.8ms → 43.0ms |       26 → 35 | `join`            | `./node_modules/d3/dist/d3.min.js:2:24162` |
|  -0.2% |  -8.68ms |       92.9% |   3.72s → 3.71s | 2,975 → 2,980 | `chartLayouts`    | `./workload.mjs:116:24`                    |
| -10.0% |  -6.21ms | 1.5% → 1.4% | 61.7ms → 55.5ms |       49 → 44 | `chartBreakdowns` | `./workload.mjs:39:27`                     |
| +17.1% |  +3.83ms | 0.6% → 0.7% | 22.5ms → 26.3ms |       18 → 21 | `remove`          | `./node_modules/d3/dist/d3.min.js:2:27077` |
| -20.1% |  -3.75ms | 0.5% → 0.4% | 18.7ms → 14.9ms |       15 → 12 | `attr`            | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `chartLayouts` (`./workload.mjs:116:24`)

|  Change |    Delta |           % |              Time |   Samples | Callee  | Location                                               |
| ------: | -------: | ----------: | ----------------: | --------: | ------- | ------------------------------------------------------ |
|  -13.9% | -25.04ms | 4.8% → 4.2% | 179.5ms → 154.5ms | 145 → 125 | `attr`  | `./node_modules/d3/dist/d3.min.js:2:25709`             |
|  +84.7% | +12.71ms | 0.4% → 0.7% |   15.0ms → 27.7ms |   12 → 22 | `from`  | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
| +130.8% |  +4.96ms | 0.1% → 0.2% |     3.8ms → 8.8ms |     3 → 7 | `sort`  | `./node_modules/d3/dist/d3.min.js:2:142142 → 2:142123` |
|  -56.7% |  -4.96ms | 0.2% → 0.1% |     8.8ms → 3.8ms |     7 → 3 | `force` | `./node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
|  +59.0% |  +3.71ms | 0.2% → 0.3% |    6.3ms → 10.0ms |     5 → 8 | `data`  | `./node_modules/d3/dist/d3.min.js:2:23459`             |

##### `Fc.visitAfter` (`./node_modules/d3/dist/d3.min.js:2:106049`)

| Change |    Delta |             % |            Time | Samples | Callee | Location                                               |
| -----: | -------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -38.6% | -16.16ms | 31.6% → 20.6% | 41.9ms → 25.8ms | 33 → 21 | `l`    | `./node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| +65.9% | +15.04ms | 17.2% → 30.3% | 22.8ms → 37.9ms | 18 → 30 | `u`    | `./node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |

##### `(anonymous)` (`./workload.mjs:201:13`)

|  Change |   Delta |             % |            Time | Samples | Callee   | Location                                   |
| ------: | ------: | ------------: | --------------: | ------: | -------- | ------------------------------------------ |
|  -19.9% | -8.42ms | 97.1% → 93.1% | 42.3ms → 33.9ms | 33 → 27 | `text`   | `./node_modules/d3/dist/d3.min.js:2:26408` |
| +100.0% | +1.25ms |   2.9% → 6.9% |   1.3ms → 2.5ms |   1 → 2 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `(anonymous)` (`./run.mjs:1:1`)

| Change |   Delta |              % |       Time |       Samples | Callee                         | Location              |
| -----: | ------: | -------------: | ---------: | ------------: | ------------------------------ | --------------------- |
|  -0.2% | -9.34ms | 100.0% → 99.9% | 4s → 3.99s | 3,203 → 3,207 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `Lf` (`./node_modules/d3/dist/d3.min.js:2:112904`)

| Change |   Delta |             % |            Time | Samples | Callee | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -44.7% | -4.08ms | 16.7% → 10.5% |   9.1ms → 5.0ms |   8 → 6 | `Uf`   | `./node_modules/d3/dist/d3.min.js:2:111948 → 2:111929` |
|  -5.9% | -2.71ms | 83.3% → 89.5% | 45.6ms → 42.9ms | 36 → 34 | `Yf`   | `./node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |

##### `D` (`./node_modules/d3/dist/d3.min.js:2:4759`)

| Change |   Delta |             % |            Time | Samples | Callee | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
| -30.5% | -5.00ms | 86.8% → 90.1% | 16.4ms → 11.4ms |  13 → 9 | `F`    | `./node_modules/d3/dist/d3.min.js:2:4882` |
| -50.0% | -1.25ms |  13.2% → 9.9% |   2.5ms → 1.3ms |   2 → 1 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `force` (`./node_modules/d3/dist/d3.min.js:2:236745`)

| Change |   Delta |              % |          Time | Samples | Callee | Location                                               |
| -----: | ------: | -------------: | ------------: | ------: | ------ | ------------------------------------------------------ |
| -56.7% | -4.96ms | 87.5% → 100.0% | 8.8ms → 3.8ms |   7 → 3 | `p`    | `./node_modules/d3/dist/d3.min.js:2:236084 → 2:236133` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|  Change |   Delta |             % |            Time | Samples | Callee | Location                                    |
| ------: | ------: | ------------: | --------------: | ------: | ------ | ------------------------------------------- |
|  -33.1% | -6.25ms | 30.6% → 22.7% | 18.9ms → 12.6ms | 15 → 10 | `D`    | `./node_modules/d3/dist/d3.min.js:2:4759`   |
|     new | +3.75ms |   0.0% → 6.8% |     0ms → 3.8ms |   0 → 3 | `r`    | `./node_modules/d3/dist/d3.min.js:2:7022`   |
|  -67.0% | -2.54ms |   6.1% → 2.3% |   3.8ms → 1.3ms |   3 → 1 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162`  |
| +203.4% | +2.54ms |   2.0% → 6.8% |   1.3ms → 3.8ms |   1 → 3 | `text` | `./node_modules/d3/dist/d3.min.js:2:26408`  |
|     new | +2.54ms |   0.0% → 4.6% |     0ms → 2.5ms |   0 → 2 | `t`    | `./node_modules/d3/dist/d3.min.js:2:257411` |

##### `Yf` (`./node_modules/d3/dist/d3.min.js:2:112811`)

| Change |   Delta |             % |            Time | Samples | Callee  | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | ------- | ------------------------------------------------------ |
| -12.9% | -5.25ms | 77.7% → 75.6% | 40.5ms → 35.3ms | 32 → 28 | `point` | `./node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
| -44.0% | -2.92ms |  12.7% → 7.9% |   6.6ms → 3.7ms |   6 → 4 | `Bf`    | `./node_modules/d3/dist/d3.min.js:2:112719 → 2:112700` |

##### `appendChild` (`./node_modules/d3/dist/d3.min.js:2:21447`)

| Change |   Delta |             % |           Time | Samples | Callee         | Location    |
| -----: | ------: | ------------: | -------------: | ------: | -------------- | ----------- |
| -44.7% | -5.08ms | 89.8% → 83.4% | 11.4ms → 6.3ms |   9 → 5 | `insertBefore` | `<unknown>` |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:4909`)

|  Change |   Delta |             % |          Time | Samples | Callee        | Location                                  |
| ------: | ------: | ------------: | ------------: | ------: | ------------- | ----------------------------------------- |
|  -50.0% | -3.79ms | 33.3% → 21.3% | 7.6ms → 3.8ms |   6 → 3 | `(anonymous)` | `./workload.mjs:82:7`                     |
| removed | -1.29ms |   5.7% → 0.0% |   1.3ms → 0ms |   1 → 0 | `InternMap`   | `./node_modules/d3/dist/d3.min.js:2:3622` |
|     new | +1.29ms |   0.0% → 7.3% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./workload.mjs:120:25`                   |
| removed | -1.25ms |   5.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `t`           | `./node_modules/d3/dist/d3.min.js:2:4909` |
|     ~0% | -1.00µs | 16.5% → 21.1% | 3.8ms → 3.7ms |       3 | `get`         | `./node_modules/d3/dist/d3.min.js:2:3756` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:236133`)

|  Change |   Delta |              % |          Time | Samples | Callee         | Location                                               |
| ------: | ------: | -------------: | ------------: | ------: | -------------- | ------------------------------------------------------ |
|  -49.5% | -3.71ms | 85.7% → 100.0% | 7.5ms → 3.8ms |   6 → 3 | `l.initialize` | `./node_modules/d3/dist/d3.min.js:2:233001 → 2:233050` |
| removed | -1.25ms |   14.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `a.initialize` | `./node_modules/d3/dist/d3.min.js:2:231734`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:1144`)

| Change |   Delta |             % |            Time | Samples | Callee | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ------ | ----------------------------------------- |
|  +4.7% | +3.63ms | 48.9% → 52.6% | 76.6ms → 80.2ms | 61 → 64 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |
|  -0.4% | -0.25ms | 45.5% → 46.6% | 71.2ms → 71.0ms | 55 → 56 | `g`    | `./node_modules/d3/dist/d3.min.js:2:1758` |

##### `(anonymous)` (`./workload.mjs:195:13`)

|  Change |   Delta |              % |            Time | Samples | Callee   | Location                                   |
| ------: | ------: | -------------: | --------------: | ------: | -------- | ------------------------------------------ |
|  -22.7% | -4.12ms | 93.5% → 100.0% | 18.1ms → 14.0ms | 15 → 11 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
| removed | -1.25ms |    6.5% → 0.0% |     1.3ms → 0ms |   1 → 0 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `(anonymous)` (`./workload.mjs:82:7`)

| Change |   Delta |             % |  Time | Samples | Callee       | Location                                               |
| -----: | ------: | ------------: | ----: | ------: | ------------ | ------------------------------------------------------ |
|  +1.6% | +0.04ms | 33.0% → 67.0% | 2.5ms |       2 | `Vg.i.floor` | `./node_modules/d3/dist/d3.min.js:2:159113 → 2:159092` |

##### `(anonymous)` (`./workload.mjs:205:13`)

|  Change |   Delta |             % |            Time | Samples | Callee        | Location                                               |
| ------: | ------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
|  +42.4% | +6.42ms | 48.0% → 74.2% | 15.1ms → 21.5ms | 12 → 17 | `M`           | `./node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |
| removed | -1.29ms |   4.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `Yv`          | `./node_modules/d3/dist/d3.min.js:2:169822`            |
| removed | -1.25ms |   4.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `format`      | `./node_modules/d3/dist/d3.min.js:2:167331`            |
| removed | -1.25ms |   4.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `o_`          | `./node_modules/d3/dist/d3.min.js:2:170691`            |
|  +24.0% | +1.21ms | 16.0% → 21.5% |   5.0ms → 6.3ms |   4 → 5 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:165835 → 2:165814` |

##### `(anonymous)` (`./workload.mjs:221:13`)

|  Change |   Delta |            % |        Time | Samples | Callee | Location                                    |
| ------: | ------: | -----------: | ----------: | ------: | ------ | ------------------------------------------- |
| removed | -1.25ms | 50.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `M`    | `./node_modules/d3/dist/d3.min.js:2:109958` |

##### `(anonymous)` (`./workload.mjs:157:29`)

| Change |   Delta |             % |          Time | Samples | Callee        | Location                                               |
| -----: | ------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------------------ |
| -35.9% | -1.38ms | 59.7% → 49.2% | 3.8ms → 2.5ms |   3 → 2 | `l`           | `./node_modules/d3/dist/d3.min.js:2:155044 → 2:155023` |
|    new | +1.29ms |  0.0% → 25.8% |   0ms → 1.3ms |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:154171`            |

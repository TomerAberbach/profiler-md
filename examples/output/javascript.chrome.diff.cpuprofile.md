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

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function              | Location                                             |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------- | ---------------------------------------------------- |
| +109.6% | +38.42ms |   0.8% → 1.7% |   35.0ms → 73.5ms |   28 → 60 | `Fc.visit`            | `node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|   +3.6% | +33.71ms | 22.3% → 23.0% | 938.9ms → 972.6ms | 766 → 792 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:77113`             |
|  +19.0% | +21.96ms |   2.7% → 3.3% | 115.7ms → 137.6ms |  92 → 108 | `(garbage collector)` | `<unknown>`                                          |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`                   | `node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|  +11.7% | +12.50ms |   2.5% → 2.8% | 107.3ms → 119.8ms |   86 → 95 | `Fc.addAll`           | `node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:18042`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`                   | `node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
| +136.9% |  +8.67ms |   0.2% → 0.4% |    6.3ms → 15.0ms |    5 → 12 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:16259`             |
|     new |  +7.58ms |   0.0% → 0.2% |       0ms → 7.6ms |     0 → 6 | `data`                | `node_modules/d3/dist/d3.min.js:2:23459`             |
|  +37.5% |  +7.17ms |   0.5% → 0.6% |   19.1ms → 26.3ms |   15 → 21 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:2114`              |
|     new |  +6.17ms |   0.0% → 0.1% |       0ms → 6.2ms |     0 → 5 | `Oc`                  | `node_modules/d3/dist/d3.min.js:2:102489`            |
| +489.9% |  +6.12ms |  <0.1% → 0.2% |     1.3ms → 7.4ms |     1 → 6 | `Gc`                  | `node_modules/d3/dist/d3.min.js:2:106688 → 2:106669` |
|     new |  +5.13ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `l`                   | `node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  +59.1% |  +5.13ms |   0.2% → 0.3% |    8.7ms → 13.8ms |    7 → 11 | `$c`                  | `node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|     new |  +5.08ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `h`                   | `node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
| +383.8% |  +4.96ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |
|  +71.6% |  +4.09ms |   0.1% → 0.2% |     5.7ms → 9.8ms |     5 → 8 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:78542 → 2:78541`   |
| +310.0% |  +3.88ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `h`                   | `node_modules/d3/dist/d3.min.js:2:12208`             |
| +306.6% |  +3.83ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `v`                   | `node_modules/d3/dist/d3.min.js:2:223794 → 2:223843` |
|  +30.2% |  +3.79ms |   0.3% → 0.4% |   12.5ms → 16.3ms |   10 → 13 | `removeChild`         | `<unknown>`                                          |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function      | Location                                             |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | ---------------------------------------------------- |
| +109.6% | +38.42ms |   0.8% → 1.7% |   35.0ms → 73.5ms |   28 → 60 | `Fc.visit`    | `node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|   +3.6% | +33.71ms | 22.3% → 23.0% | 938.9ms → 972.6ms | 766 → 792 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113`             |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`           | `node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|  +11.7% | +12.50ms |   2.5% → 2.8% | 107.3ms → 119.8ms |   86 → 95 | `Fc.addAll`   | `node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18042`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`           | `node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
| +136.9% |  +8.67ms |   0.2% → 0.4% |    6.3ms → 15.0ms |    5 → 12 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`             |
|     new |  +7.58ms |   0.0% → 0.2% |       0ms → 7.6ms |     0 → 6 | `data`        | `node_modules/d3/dist/d3.min.js:2:23459`             |
|  +37.5% |  +7.17ms |   0.5% → 0.6% |   19.1ms → 26.3ms |   15 → 21 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:2114`              |
|     new |  +6.17ms |   0.0% → 0.1% |       0ms → 6.2ms |     0 → 5 | `Oc`          | `node_modules/d3/dist/d3.min.js:2:102489`            |
| +489.9% |  +6.12ms |  <0.1% → 0.2% |     1.3ms → 7.4ms |     1 → 6 | `Gc`          | `node_modules/d3/dist/d3.min.js:2:106688 → 2:106669` |
|     new |  +5.13ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `l`           | `node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  +59.1% |  +5.13ms |   0.2% → 0.3% |    8.7ms → 13.8ms |    7 → 11 | `$c`          | `node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|     new |  +5.08ms |   0.0% → 0.1% |       0ms → 5.1ms |     0 → 4 | `h`           | `node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
| +383.8% |  +4.96ms |  <0.1% → 0.1% |     1.3ms → 6.3ms |     1 → 5 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:142178 → 2:142159` |
|  +71.6% |  +4.09ms |   0.1% → 0.2% |     5.7ms → 9.8ms |     5 → 8 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78542 → 2:78541`   |
| +310.0% |  +3.88ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208`             |
| +306.6% |  +3.83ms |  <0.1% → 0.1% |     1.3ms → 5.1ms |     1 → 4 | `v`           | `node_modules/d3/dist/d3.min.js:2:223794 → 2:223843` |
|   +4.7% |  +2.92ms |          1.5% |   62.5ms → 65.5ms |   50 → 52 | `p`           | `node_modules/d3/dist/d3.min.js:2:1697`              |
| +112.1% |  +2.71ms |          0.1% |     2.4ms → 5.1ms |     2 → 4 | `update`      | `node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |

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

|  Change |   Delta |            % |           Time | Samples | Function       | Location              |
| ------: | ------: | -----------: | -------------: | ------: | -------------- | --------------------- |
| +193.5% | +2.50ms | <0.1% → 0.1% |  1.3ms → 3.8ms |   1 → 3 | `(anonymous)`  | `run.mjs:1:1`         |
|     new | +2.50ms |  0.0% → 0.1% |    0ms → 2.5ms |   0 → 2 | `(anonymous)`  | `workload.mjs:193:9`  |
|     new | +1.29ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`  | `workload.mjs:120:25` |
|     new | +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`  | `workload.mjs:121:16` |
|  +12.6% | +1.13ms |         0.2% | 9.0ms → 10.1ms |   7 → 8 | `chartLayouts` | `workload.mjs:116:24` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function          | Location                                             |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------- | ---------------------------------------------------- |
|   -5.5% | -26.93ms | 11.6% → 11.0% | 491.0ms → 464.1ms | 388 → 369 | `f`               | `node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|  -20.0% | -23.58ms |   2.8% → 2.2% |  117.8ms → 94.2ms |   96 → 75 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:18176`             |
|  -21.1% | -21.04ms |   2.4% → 1.9% |   99.7ms → 78.6ms |   81 → 64 | `p`               | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |   35 → 22 | `l`               | `node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
|  -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |   42 → 31 | `J`               | `node_modules/d3/dist/d3.min.js:2:8205`              |
|  -68.6% |  -8.29ms |   0.3% → 0.1% |    12.1ms → 3.8ms |     9 → 3 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:19664`             |
|   -8.9% |  -7.71ms |   2.1% → 1.9% |   86.8ms → 79.1ms |   69 → 63 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|   -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms | 489 → 482 | `h`               | `node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -85.7% |  -7.50ms |  0.2% → <0.1% |     8.8ms → 1.3ms |     7 → 1 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:1144`              |
|   -1.9% |  -6.71ms |   8.2% → 8.0% | 346.8ms → 340.1ms |       271 | `a`               | `node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  -10.1% |  -6.71ms |   1.6% → 1.4% |   66.2ms → 59.5ms |   51 → 47 | `g`               | `node_modules/d3/dist/d3.min.js:2:1758`              |
|   -9.4% |  -6.42ms |   1.6% → 1.5% |   68.0ms → 61.5ms |   54 → 49 | `Fc.visitAfter`   | `node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|  -83.5% |  -6.33ms |  0.2% → <0.1% |     7.6ms → 1.3ms |     6 → 1 | `(anonymous)`     | `workload.mjs:205:13`                                |
|  -12.6% |  -5.25ms |   1.0% → 0.9% |   41.7ms → 36.4ms |   23 → 20 | `(program)`       | `<unknown>`                                          |
|  -79.5% |  -5.00ms |  0.1% → <0.1% |     6.3ms → 1.3ms |     5 → 1 | `h`               | `node_modules/d3/dist/d3.min.js:2:232366 → 2:232415` |
|  -27.5% |  -4.50ms |   0.4% → 0.3% |   16.4ms → 11.9ms |   13 → 10 | `point`           | `node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
|  -25.6% |  -4.25ms |   0.4% → 0.3% |   16.6ms → 12.4ms |   13 → 10 | `l`               | `node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
|  -61.2% |  -3.88ms |   0.2% → 0.1% |     6.3ms → 2.5ms |     5 → 2 | `r`               | `node_modules/d3/dist/d3.min.js:2:109041 → 2:109022` |
|  -75.0% |  -3.87ms |  0.1% → <0.1% |     5.2ms → 1.3ms |     4 → 1 | `chartBreakdowns` | `workload.mjs:39:27`                                 |
| removed |  -3.87ms |   0.1% → 0.0% |       3.9ms → 0ms |     3 → 0 | `M`               | `node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function        | Location                                             |
| ------: | -------: | ------------: | ----------------: | --------: | --------------- | ---------------------------------------------------- |
|   -5.5% | -26.93ms | 11.6% → 11.0% | 491.0ms → 464.1ms | 388 → 369 | `f`             | `node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
|  -20.0% | -23.58ms |   2.8% → 2.2% |  117.8ms → 94.2ms |   96 → 75 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18176`             |
|  -21.1% | -21.04ms |   2.4% → 1.9% |   99.7ms → 78.6ms |   81 → 64 | `p`             | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |   35 → 22 | `l`             | `node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
|  -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |   42 → 31 | `J`             | `node_modules/d3/dist/d3.min.js:2:8205`              |
|  -68.6% |  -8.29ms |   0.3% → 0.1% |    12.1ms → 3.8ms |     9 → 3 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:19664`             |
|   -8.9% |  -7.71ms |   2.1% → 1.9% |   86.8ms → 79.1ms |   69 → 63 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |
|   -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms | 489 → 482 | `h`             | `node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -85.7% |  -7.50ms |  0.2% → <0.1% |     8.8ms → 1.3ms |     7 → 1 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:1144`              |
|   -1.9% |  -6.71ms |   8.2% → 8.0% | 346.8ms → 340.1ms |       271 | `a`             | `node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  -10.1% |  -6.71ms |   1.6% → 1.4% |   66.2ms → 59.5ms |   51 → 47 | `g`             | `node_modules/d3/dist/d3.min.js:2:1758`              |
|   -9.4% |  -6.42ms |   1.6% → 1.5% |   68.0ms → 61.5ms |   54 → 49 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
|  -79.5% |  -5.00ms |  0.1% → <0.1% |     6.3ms → 1.3ms |     5 → 1 | `h`             | `node_modules/d3/dist/d3.min.js:2:232366 → 2:232415` |
|  -27.5% |  -4.50ms |   0.4% → 0.3% |   16.4ms → 11.9ms |   13 → 10 | `point`         | `node_modules/d3/dist/d3.min.js:2:131561 → 2:131542` |
|  -25.6% |  -4.25ms |   0.4% → 0.3% |   16.6ms → 12.4ms |   13 → 10 | `l`             | `node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
|  -61.2% |  -3.88ms |   0.2% → 0.1% |     6.3ms → 2.5ms |     5 → 2 | `r`             | `node_modules/d3/dist/d3.min.js:2:109041 → 2:109022` |
| removed |  -3.87ms |   0.1% → 0.0% |       3.9ms → 0ms |     3 → 0 | `M`             | `node_modules/d3/dist/d3.min.js:2:109958 → 2:109939` |
|  -59.6% |  -3.75ms |          0.1% |     6.3ms → 2.5ms |     5 → 2 | `attr`          | `node_modules/d3/dist/d3.min.js:2:25709`             |
| removed |  -3.75ms |   0.1% → 0.0% |       3.8ms → 0ms |     3 → 0 | `f`             | `node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -37.3% |  -3.75ms |   0.2% → 0.1% |    10.0ms → 6.3ms |     6 → 5 | `o`             | `node_modules/d3/dist/d3.min.js:2:77004`             |

##### Native

| Change |   Delta |           % |            Time | Samples | Function          | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ----------------- | ----------- |
| -12.6% | -5.25ms | 1.0% → 0.9% | 41.7ms → 36.4ms | 23 → 20 | `(program)`       | `<unknown>` |
| -22.0% | -2.50ms | 0.3% → 0.2% |  11.4ms → 8.9ms |   9 → 7 | `insertBefore`    | `<unknown>` |
|  -1.8% | -1.21ms |        1.6% | 67.8ms → 66.6ms | 54 → 53 | `createElementNS` | `<unknown>` |

##### Ours

|  Change |   Delta |            % |          Time | Samples | Function                       | Location              |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------ | --------------------- |
|  -83.5% | -6.33ms | 0.2% → <0.1% | 7.6ms → 1.3ms |   6 → 1 | `(anonymous)`                  | `workload.mjs:205:13` |
|  -75.0% | -3.87ms | 0.1% → <0.1% | 5.2ms → 1.3ms |   4 → 1 | `chartBreakdowns`              | `workload.mjs:39:27`  |
|  -75.4% | -3.83ms | 0.1% → <0.1% | 5.1ms → 1.3ms |   4 → 1 | `(anonymous)`                  | `workload.mjs:82:7`   |
|  -51.6% | -1.33ms | 0.1% → <0.1% | 2.6ms → 1.3ms |   2 → 1 | `(anonymous)`                  | `workload.mjs:157:29` |
|  -26.7% | -1.33ms |         0.1% | 5.0ms → 3.7ms |   4 → 3 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
| removed | -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `workload.mjs:100:10` |
| removed | -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `workload.mjs:123:12` |
| removed | -1.25ms | <0.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `(anonymous)`                  | `workload.mjs:221:13` |
|  -50.0% | -1.25ms | 0.1% → <0.1% | 2.5ms → 1.3ms |   2 → 1 | `(anonymous)`                  | `workload.mjs:139:12` |
|   -3.3% | -0.04ms |        <0.1% |         1.3ms |       1 | `(anonymous)`                  | `workload.mjs:133:22` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function              | Location                                             |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------- | ---------------------------------------------------- |
|   +5.6% | +42.96ms | 18.0% → 19.0% | 761.3ms → 804.2ms | 601 → 641 | `a`                   | `node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +3.5% | +31.50ms | 21.5% → 22.2% | 907.8ms → 939.3ms | 724 → 749 | `Fc.visit`            | `node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|  +19.0% | +21.96ms |   2.7% → 3.3% | 115.7ms → 137.6ms |  92 → 108 | `(garbage collector)` | `<unknown>`                                          |
|  +14.4% | +18.55ms |   3.1% → 3.5% | 128.8ms → 147.4ms | 103 → 117 | `$c`                  | `node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|   +1.5% | +15.55ms | 25.1% → 25.5% |     1.06s → 1.07s | 863 → 876 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:76982`             |
|   +1.5% | +15.51ms | 24.9% → 25.2% |     1.05s → 1.06s | 857 → 868 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:77113`             |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`                   | `node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|   +1.3% | +14.30ms | 25.1% → 25.4% |     1.06s → 1.07s | 863 → 875 | `o`                   | `node_modules/d3/dist/d3.min.js:2:77004`             |
|  +11.6% | +13.79ms |   2.8% → 3.1% | 118.5ms → 132.3ms |  95 → 105 | `Fc.addAll`           | `node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|   +1.2% | +13.05ms | 25.2% → 25.5% |     1.06s → 1.07s | 865 → 876 | `i`                   | `node_modules/d3/dist/d3.min.js:2:76807`             |
|  +84.7% | +12.71ms |   0.4% → 0.7% |   15.0ms → 27.7ms |   12 → 22 | `from`                | `node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:18042`             |
| +154.8% | +11.54ms |   0.2% → 0.4% |    7.5ms → 19.0ms |    6 → 15 | `Su`                  | `node_modules/d3/dist/d3.min.js:2:82035 → 2:82034`   |
| +113.7% | +11.42ms |   0.2% → 0.5% |   10.0ms → 21.5ms |    8 → 17 | `Lu`                  | `node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|  +12.6% | +11.12ms |   2.1% → 2.3% |   88.2ms → 99.3ms |   70 → 80 | `append`              | `node_modules/d3/dist/d3.min.js:2:26726`             |
| +124.4% | +11.04ms |   0.2% → 0.5% |    8.9ms → 19.9ms |    8 → 16 | `data`                | `node_modules/d3/dist/d3.min.js:2:23459`             |
| +206.7% | +10.25ms |   0.1% → 0.4% |    5.0ms → 15.2ms |    4 → 12 | `update`              | `node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  +14.0% | +10.17ms |   1.7% → 2.0% |   72.8ms → 83.0ms |   58 → 66 | `h`                   | `node_modules/d3/dist/d3.min.js:2:12208`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`                   | `node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
|  +11.0% |  +8.87ms |   1.9% → 2.1% |   80.5ms → 89.3ms |   64 → 72 | `join`                | `node_modules/d3/dist/d3.min.js:2:24162`             |

##### Third-party

|  Change |    Delta |             % |              Time |   Samples | Function      | Location                                             |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | ---------------------------------------------------- |
|   +5.6% | +42.96ms | 18.0% → 19.0% | 761.3ms → 804.2ms | 601 → 641 | `a`           | `node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +3.5% | +31.50ms | 21.5% → 22.2% | 907.8ms → 939.3ms | 724 → 749 | `Fc.visit`    | `node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|  +14.4% | +18.55ms |   3.1% → 3.5% | 128.8ms → 147.4ms | 103 → 117 | `$c`          | `node_modules/d3/dist/d3.min.js:2:102069 → 2:102050` |
|   +1.5% | +15.55ms | 25.1% → 25.5% |     1.06s → 1.07s | 863 → 876 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982`             |
|   +1.5% | +15.51ms | 24.9% → 25.2% |     1.05s → 1.06s | 857 → 868 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113`             |
|  +65.9% | +15.04ms |   0.5% → 0.9% |   22.8ms → 37.9ms |   18 → 30 | `u`           | `node_modules/d3/dist/d3.min.js:2:231470 → 2:231519` |
|   +1.3% | +14.30ms | 25.1% → 25.4% |     1.06s → 1.07s | 863 → 875 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`             |
|  +11.6% | +13.79ms |   2.8% → 3.1% | 118.5ms → 132.3ms |  95 → 105 | `Fc.addAll`   | `node_modules/d3/dist/d3.min.js:2:103106 → 2:103087` |
|   +1.2% | +13.05ms | 25.2% → 25.5% |     1.06s → 1.07s | 865 → 876 | `i`           | `node_modules/d3/dist/d3.min.js:2:76807`             |
|  +84.7% | +12.71ms |   0.4% → 0.7% |   15.0ms → 27.7ms |   12 → 22 | `from`        | `node_modules/d3/dist/d3.min.js:2:94301 → 2:94282`   |
|  +34.4% | +12.50ms |   0.9% → 1.2% |   36.4ms → 48.9ms |   29 → 39 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18042`             |
| +154.8% | +11.54ms |   0.2% → 0.4% |    7.5ms → 19.0ms |    6 → 15 | `Su`          | `node_modules/d3/dist/d3.min.js:2:82035 → 2:82034`   |
| +113.7% | +11.42ms |   0.2% → 0.5% |   10.0ms → 21.5ms |    8 → 17 | `Lu`          | `node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|  +12.6% | +11.12ms |   2.1% → 2.3% |   88.2ms → 99.3ms |   70 → 80 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726`             |
| +124.4% | +11.04ms |   0.2% → 0.5% |    8.9ms → 19.9ms |    8 → 16 | `data`        | `node_modules/d3/dist/d3.min.js:2:23459`             |
| +206.7% | +10.25ms |   0.1% → 0.4% |    5.0ms → 15.2ms |    4 → 12 | `update`      | `node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  +14.0% | +10.17ms |   1.7% → 2.0% |   72.8ms → 83.0ms |   58 → 66 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208`             |
|  +80.3% |  +9.04ms |   0.3% → 0.5% |   11.3ms → 20.3ms |    9 → 16 | `g`           | `node_modules/d3/dist/d3.min.js:2:108360 → 2:108341` |
|  +11.0% |  +8.87ms |   1.9% → 2.1% |   80.5ms → 89.3ms |   64 → 72 | `join`        | `node_modules/d3/dist/d3.min.js:2:24162`             |
|  +10.2% |  +7.46ms |   1.7% → 1.9% |   72.9ms → 80.4ms |   58 → 64 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`             |

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

| Change |   Delta |            % |            Time | Samples | Function      | Location              |
| -----: | ------: | -----------: | --------------: | ------: | ------------- | --------------------- |
| +19.3% | +6.33ms |  0.8% → 0.9% | 32.8ms → 39.2ms | 26 → 32 | `(anonymous)` | `workload.mjs:185:13` |
|    new | +2.54ms |  0.0% → 0.1% |     0ms → 2.5ms |   0 → 2 | `(anonymous)` | `workload.mjs:111:13` |
|    new | +1.29ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `workload.mjs:120:25` |
| +51.6% | +1.29ms |         0.1% |   2.5ms → 3.8ms |   2 → 3 | `(anonymous)` | `workload.mjs:193:9`  |
|    new | +1.29ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `workload.mjs:60:18`  |
|    new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)` | `workload.mjs:121:16` |
| +36.3% | +0.33ms |        <0.1% |   0.9ms → 1.3ms |       1 | `(anonymous)` | `workload.mjs:199:25` |
|  +6.9% | +0.08ms |        <0.1% |   1.2ms → 1.3ms |       1 | `(anonymous)` | `workload.mjs:11:29`  |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |       Samples | Function                       | Location                                             |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------ | ---------------------------------------------------- |
|  -2.3% | -29.09ms | 29.6% → 28.8% |     1.24s → 1.21s |     991 → 970 | `f`                            | `node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| -12.4% | -26.08ms |   5.0% → 4.3% | 209.9ms → 183.8ms |     170 → 148 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:18176`             |
| -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |       35 → 22 | `l`                            | `node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| -15.4% | -16.95ms |   2.6% → 2.2% |  110.4ms → 93.5ms |       90 → 76 | `p`                            | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -6.3% | -16.25ms |   6.1% → 5.7% | 256.3ms → 240.1ms |     207 → 193 | `attr`                         | `node_modules/d3/dist/d3.min.js:2:25709`             |
| -25.9% | -14.58ms |   1.3% → 1.0% |   56.2ms → 41.6ms |       44 → 33 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:19664`             |
| -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |       42 → 31 | `J`                            | `node_modules/d3/dist/d3.min.js:2:8205`              |
| -24.5% | -13.46ms |   1.3% → 1.0% |   55.0ms → 41.5ms |       43 → 33 | `text`                         | `node_modules/d3/dist/d3.min.js:2:26408`             |
| -79.7% | -10.00ms |   0.3% → 0.1% |    12.5ms → 2.5ms |        10 → 2 | `f`                            | `node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -0.2% |  -9.34ms | 95.0% → 94.6% |        4s → 3.99s | 3,203 → 3,207 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`                                  |
|  -0.2% |  -8.68ms | 88.3% → 87.9% |     3.72s → 3.71s | 2,975 → 2,980 | `chartLayouts`                 | `workload.mjs:116:24`                                |
|  -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms |     489 → 482 | `h`                            | `node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -5.7% |  -7.54ms |   3.1% → 3.0% | 132.7ms → 125.2ms |     105 → 100 | `Fc.visitAfter`                | `node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -16.4% |  -7.17ms |   1.0% → 0.9% |   43.6ms → 36.4ms |       34 → 29 | `(anonymous)`                  | `workload.mjs:201:13`                                |
|  -0.2% |  -6.84ms | 95.0% → 94.7% |                4s | 3,204 → 3,210 | `(anonymous)`                  | `run.mjs:1:1`                                        |
| -12.4% |  -6.79ms |   1.3% → 1.1% |   54.7ms → 47.9ms |       44 → 40 | `Lf`                           | `node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |
| -33.1% |  -6.25ms |   0.4% → 0.3% |   18.9ms → 12.6ms |       15 → 10 | `D`                            | `node_modules/d3/dist/d3.min.js:2:4759`              |
| -62.1% |  -6.21ms |   0.2% → 0.1% |    10.0ms → 3.8ms |         8 → 3 | `force`                        | `node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
| -10.0% |  -6.21ms |   1.5% → 1.3% |   61.7ms → 55.5ms |       49 → 44 | `chartBreakdowns`              | `workload.mjs:39:27`                                 |
| -10.6% |  -5.54ms |   1.2% → 1.1% |   52.2ms → 46.7ms |       42 → 39 | `Yf`                           | `node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function        | Location                                             |
| -----: | -------: | ------------: | ----------------: | --------: | --------------- | ---------------------------------------------------- |
|  -2.3% | -29.09ms | 29.6% → 28.8% |     1.24s → 1.21s | 991 → 970 | `f`             | `node_modules/d3/dist/d3.min.js:2:233452 → 2:233501` |
| -12.4% | -26.08ms |   5.0% → 4.3% | 209.9ms → 183.8ms | 170 → 148 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18176`             |
| -39.2% | -17.41ms |   1.1% → 0.6% |   44.4ms → 27.0ms |   35 → 22 | `l`             | `node_modules/d3/dist/d3.min.js:2:233647 → 2:233696` |
| -15.4% | -16.95ms |   2.6% → 2.2% |  110.4ms → 93.5ms |   90 → 76 | `p`             | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -6.3% | -16.25ms |   6.1% → 5.7% | 256.3ms → 240.1ms | 207 → 193 | `attr`          | `node_modules/d3/dist/d3.min.js:2:25709`             |
| -25.9% | -14.58ms |   1.3% → 1.0% |   56.2ms → 41.6ms |   44 → 33 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:19664`             |
| -26.5% | -14.00ms |   1.3% → 0.9% |   52.8ms → 38.8ms |   42 → 31 | `J`             | `node_modules/d3/dist/d3.min.js:2:8205`              |
| -24.5% | -13.46ms |   1.3% → 1.0% |   55.0ms → 41.5ms |   43 → 33 | `text`          | `node_modules/d3/dist/d3.min.js:2:26408`             |
| -79.7% | -10.00ms |   0.3% → 0.1% |    12.5ms → 2.5ms |    10 → 2 | `f`             | `node_modules/d3/dist/d3.min.js:2:218177 → 2:218226` |
|  -1.2% |  -7.54ms | 14.5% → 14.3% | 612.8ms → 605.2ms | 489 → 482 | `h`             | `node_modules/d3/dist/d3.min.js:2:233884 → 2:233933` |
|  -5.7% |  -7.54ms |   3.1% → 3.0% | 132.7ms → 125.2ms | 105 → 100 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068 → 2:106049` |
| -12.4% |  -6.79ms |   1.3% → 1.1% |   54.7ms → 47.9ms |   44 → 40 | `Lf`            | `node_modules/d3/dist/d3.min.js:2:112923 → 2:112904` |
| -33.1% |  -6.25ms |   0.4% → 0.3% |   18.9ms → 12.6ms |   15 → 10 | `D`             | `node_modules/d3/dist/d3.min.js:2:4759`              |
| -62.1% |  -6.21ms |   0.2% → 0.1% |    10.0ms → 3.8ms |     8 → 3 | `force`         | `node_modules/d3/dist/d3.min.js:2:236696 → 2:236745` |
| -10.6% |  -5.54ms |   1.2% → 1.1% |   52.2ms → 46.7ms |   42 → 39 | `Yf`            | `node_modules/d3/dist/d3.min.js:2:112830 → 2:112811` |
| -40.5% |  -5.13ms |   0.3% → 0.2% |    12.7ms → 7.5ms |    10 → 6 | `appendChild`   | `node_modules/d3/dist/d3.min.js:2:21447`             |
| -21.8% |  -4.96ms |   0.5% → 0.4% |   22.8ms → 17.8ms |   18 → 14 | `t`             | `node_modules/d3/dist/d3.min.js:2:4909`              |
| -56.7% |  -4.96ms |   0.2% → 0.1% |     8.8ms → 3.8ms |     7 → 3 | `p`             | `node_modules/d3/dist/d3.min.js:2:236084 → 2:236133` |
| -25.6% |  -4.25ms |   0.4% → 0.3% |   16.6ms → 12.4ms |   13 → 10 | `l`             | `node_modules/d3/dist/d3.min.js:2:232102 → 2:232151` |
|  -2.6% |  -4.13ms |   3.7% → 3.6% | 156.6ms → 152.5ms | 123 → 121 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:1144`              |

##### Native

| Change |   Delta |           % |            Time | Samples | Function          | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ----------------- | ----------- |
| -12.6% | -5.25ms | 1.0% → 0.9% | 41.7ms → 36.4ms | 23 → 20 | `(program)`       | `<unknown>` |
| -22.0% | -2.50ms | 0.3% → 0.2% |  11.4ms → 8.9ms |   9 → 7 | `insertBefore`    | `<unknown>` |
|  -1.8% | -1.21ms |        1.6% | 67.8ms → 66.6ms | 54 → 53 | `createElementNS` | `<unknown>` |

##### Ours

|  Change |   Delta |             % |            Time |       Samples | Function                       | Location              |
| ------: | ------: | ------------: | --------------: | ------------: | ------------------------------ | --------------------- |
|   -0.2% | -9.34ms | 95.0% → 94.6% |      4s → 3.99s | 3,203 → 3,207 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
|   -0.2% | -8.68ms | 88.3% → 87.9% |   3.72s → 3.71s | 2,975 → 2,980 | `chartLayouts`                 | `workload.mjs:116:24` |
|  -16.4% | -7.17ms |   1.0% → 0.9% | 43.6ms → 36.4ms |       34 → 29 | `(anonymous)`                  | `workload.mjs:201:13` |
|   -0.2% | -6.84ms | 95.0% → 94.7% |              4s | 3,204 → 3,210 | `(anonymous)`                  | `run.mjs:1:1`         |
|  -10.0% | -6.21ms |   1.5% → 1.3% | 61.7ms → 55.5ms |       49 → 44 | `chartBreakdowns`              | `workload.mjs:39:27`  |
|  -27.7% | -5.37ms |   0.5% → 0.3% | 19.4ms → 14.0ms |       16 → 11 | `(anonymous)`                  | `workload.mjs:195:13` |
|  -50.0% | -3.79ms |   0.2% → 0.1% |   7.6ms → 3.8ms |         6 → 3 | `(anonymous)`                  | `workload.mjs:82:7`   |
|   -7.9% | -2.50ms |          0.7% | 31.5ms → 29.0ms |       25 → 23 | `(anonymous)`                  | `workload.mjs:205:13` |
| removed | -2.50ms |   0.1% → 0.0% |     2.5ms → 0ms |         2 → 0 | `(anonymous)`                  | `workload.mjs:221:13` |
|  -22.1% | -1.42ms |   0.2% → 0.1% |   6.4ms → 5.0ms |         5 → 4 | `(anonymous)`                  | `workload.mjs:157:29` |
| removed | -1.25ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `(anonymous)`                  | `workload.mjs:100:10` |
| removed | -1.25ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `(anonymous)`                  | `workload.mjs:123:12` |
|  -50.0% | -1.25ms |  0.1% → <0.1% |   2.5ms → 1.3ms |         2 → 1 | `(anonymous)`                  | `workload.mjs:139:12` |
|   -3.3% | -0.04ms |         <0.1% |           1.3ms |             1 | `(anonymous)`                  | `workload.mjs:133:22` |

# CPU profile

Took 4.21s over 3,361 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 92.5% |   3.90s |   3,119 |
| Native             |  3.5% | 146.0ms |     106 |
| Garbage collector  |  2.7% | 115.7ms |      92 |
| Ours               |  1.1% |  45.7ms |      36 |
| Idle               |  0.2% |   8.9ms |       7 |
| Regular expression | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function              | Location                                  |
| ----: | ------: | ------: | --------------------- | ----------------------------------------- |
| 22.3% | 938.9ms |     766 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.5% | 612.8ms |     489 | `h`                   | `node_modules/d3/dist/d3.min.js:2:233884` |
| 11.6% | 491.0ms |     388 | `f`                   | `node_modules/d3/dist/d3.min.js:2:233452` |
|  8.2% | 346.8ms |     271 | `a`                   | `node_modules/d3/dist/d3.min.js:2:231005` |
|  7.3% | 309.1ms |     246 | `g`                   | `node_modules/d3/dist/d3.min.js:2:231166` |
|  2.8% | 117.8ms |      96 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  2.7% | 115.7ms |      92 | `(garbage collector)` | `<unknown>`                               |
|  2.5% | 107.3ms |      86 | `Fc.addAll`           | `node_modules/d3/dist/d3.min.js:2:103106` |
|  2.4% |  99.7ms |      81 | `p`                   | `node_modules/d3/dist/d3.min.js:2:77577`  |
|  2.1% |  86.8ms |      69 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:235702` |
|  1.6% |  68.0ms |      54 | `Fc.visitAfter`       | `node_modules/d3/dist/d3.min.js:2:106068` |
|  1.6% |  67.8ms |      54 | `createElementNS`     | `<unknown>`                               |
|  1.6% |  66.2ms |      51 | `g`                   | `node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.5% |  62.5ms |      50 | `p`                   | `node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.3% |  52.8ms |      42 | `J`                   | `node_modules/d3/dist/d3.min.js:2:8205`   |
|  1.1% |  46.8ms |      37 | `Jh`                  | `node_modules/d3/dist/d3.min.js:2:131237` |
|  1.1% |  44.4ms |      35 | `l`                   | `node_modules/d3/dist/d3.min.js:2:233647` |
|  1.0% |  41.7ms |      23 | `(program)`           | `<unknown>`                               |
|  0.9% |  36.4ms |      29 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:18042`  |
|  0.8% |  35.0ms |      28 | `Fc.visit`            | `node_modules/d3/dist/d3.min.js:2:105700` |

#### Categories

##### Third-party

|     % |    Time | Samples | Function        | Location                                  |
| ----: | ------: | ------: | --------------- | ----------------------------------------- |
| 22.3% | 938.9ms |     766 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.5% | 612.8ms |     489 | `h`             | `node_modules/d3/dist/d3.min.js:2:233884` |
| 11.6% | 491.0ms |     388 | `f`             | `node_modules/d3/dist/d3.min.js:2:233452` |
|  8.2% | 346.8ms |     271 | `a`             | `node_modules/d3/dist/d3.min.js:2:231005` |
|  7.3% | 309.1ms |     246 | `g`             | `node_modules/d3/dist/d3.min.js:2:231166` |
|  2.8% | 117.8ms |      96 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  2.5% | 107.3ms |      86 | `Fc.addAll`     | `node_modules/d3/dist/d3.min.js:2:103106` |
|  2.4% |  99.7ms |      81 | `p`             | `node_modules/d3/dist/d3.min.js:2:77577`  |
|  2.1% |  86.8ms |      69 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:235702` |
|  1.6% |  68.0ms |      54 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068` |
|  1.6% |  66.2ms |      51 | `g`             | `node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.5% |  62.5ms |      50 | `p`             | `node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.3% |  52.8ms |      42 | `J`             | `node_modules/d3/dist/d3.min.js:2:8205`   |
|  1.1% |  46.8ms |      37 | `Jh`            | `node_modules/d3/dist/d3.min.js:2:131237` |
|  1.1% |  44.4ms |      35 | `l`             | `node_modules/d3/dist/d3.min.js:2:233647` |
|  0.9% |  36.4ms |      29 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18042`  |
|  0.8% |  35.0ms |      28 | `Fc.visit`      | `node_modules/d3/dist/d3.min.js:2:105700` |
|  0.5% |  22.8ms |      18 | `u`             | `node_modules/d3/dist/d3.min.js:2:231470` |
|  0.5% |  19.1ms |      15 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:2114`   |
|  0.4% |  16.6ms |      13 | `l`             | `node_modules/d3/dist/d3.min.js:2:232102` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 67.8ms |      54 | `createElementNS`         | `<unknown>` |
| 1.0% | 41.7ms |      23 | `(program)`               | `<unknown>` |
| 0.3% | 12.5ms |      10 | `removeChild`             | `<unknown>` |
| 0.3% | 11.4ms |       9 | `insertBefore`            | `<unknown>` |
| 0.2% |  7.6ms |       6 | `appendChild`             | `<unknown>` |
| 0.1% |  5.0ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 2.7% | 115.7ms |      92 | `(garbage collector)` | `<unknown>` |

##### Ours

|     % |  Time | Samples | Function                       | Location              |
| ----: | ----: | ------: | ------------------------------ | --------------------- |
|  0.2% | 9.0ms |       7 | `chartLayouts`                 | `workload.mjs:116:24` |
|  0.2% | 7.6ms |       6 | `(anonymous)`                  | `workload.mjs:205:13` |
|  0.1% | 5.2ms |       4 | `chartBreakdowns`              | `workload.mjs:39:27`  |
|  0.1% | 5.1ms |       4 | `(anonymous)`                  | `workload.mjs:82:7`   |
|  0.1% | 5.0ms |       4 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
|  0.1% | 2.6ms |       2 | `(anonymous)`                  | `workload.mjs:157:29` |
|  0.1% | 2.5ms |       2 | `(anonymous)`                  | `workload.mjs:124:13` |
|  0.1% | 2.5ms |       2 | `(anonymous)`                  | `workload.mjs:139:12` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `run.mjs:1:1`         |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `workload.mjs:133:22` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `workload.mjs:100:10` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `workload.mjs:123:12` |
| <0.1% | 1.3ms |       1 | `(anonymous)`                  | `workload.mjs:221:13` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 938.9ms |     749 | `node_modules/d3/dist/d3.min.js:2` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:233884`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 612.8ms |     489 | `node_modules/d3/dist/d3.min.js:2` |

##### `f` (`node_modules/d3/dist/d3.min.js:2:233452`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 491.1ms |     388 | `node_modules/d3/dist/d3.min.js:2` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:231005`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 346.8ms |     271 | `node_modules/d3/dist/d3.min.js:2` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:231166`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 309.1ms |     246 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 117.8ms |      95 | `node_modules/d3/dist/d3.min.js:2` |

##### `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103106`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 107.3ms |      86 | `node_modules/d3/dist/d3.min.js:2` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:77577`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 99.7ms |      80 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235702`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 86.8ms |      69 | `node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106068`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 68.0ms |      54 | `node_modules/d3/dist/d3.min.js:2` |

##### `createElementNS` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 67.8ms |      54 | 2        |

##### `g` (`node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 66.2ms |      51 | `node_modules/d3/dist/d3.min.js:2` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 62.5ms |      50 | `node_modules/d3/dist/d3.min.js:2` |

##### `J` (`node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 52.8ms |      42 | `node_modules/d3/dist/d3.min.js:2` |

##### `Jh` (`node_modules/d3/dist/d3.min.js:2:131237`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 46.8ms |      37 | `node_modules/d3/dist/d3.min.js:2` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:233647`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 44.4ms |      35 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18042`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 36.4ms |      29 | `node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105700`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 35.0ms |      27 | `node_modules/d3/dist/d3.min.js:2` |

##### `u` (`node_modules/d3/dist/d3.min.js:2:231470`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 22.8ms |      18 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:2114`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 19.1ms |      15 | `node_modules/d3/dist/d3.min.js:2` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:232102`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 16.6ms |      13 | `node_modules/d3/dist/d3.min.js:2` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 12.5ms |      10 | 2        |

##### `insertBefore` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 11.4ms |       9 | 2        |

##### `chartLayouts` (`workload.mjs:116:24`)

|     % |  Time | Samples | Location           |
| ----: | ----: | ------: | ------------------ |
| 42.9% | 3.8ms |       3 | `workload.mjs:159` |
| 14.3% | 1.3ms |       1 | `workload.mjs:155` |
| 14.3% | 1.3ms |       1 | `workload.mjs:125` |
| 14.3% | 1.3ms |       1 | `workload.mjs:121` |
| 14.3% | 1.3ms |       1 | `workload.mjs:163` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.6ms |       6 | 2        |

##### `(anonymous)` (`workload.mjs:205:13`)

|     % |  Time | Samples | Location           |
| ----: | ----: | ------: | ------------------ |
| 50.0% | 3.8ms |       3 | `workload.mjs:205` |
| 50.0% | 3.8ms |       3 | `workload.mjs:206` |

##### `chartBreakdowns` (`workload.mjs:39:27`)

|     % |  Time | Samples | Location           |
| ----: | ----: | ------: | ------------------ |
| 25.0% | 1.3ms |       1 | `workload.mjs:104` |
| 25.0% | 1.3ms |       1 | `workload.mjs:43`  |
| 25.0% | 1.3ms |       1 | `workload.mjs:80`  |
| 25.0% | 1.3ms |       1 | `workload.mjs:51`  |

##### `(anonymous)` (`workload.mjs:82:7`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 5.1ms |       4 | `workload.mjs:82` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |  Time | Samples | Location           |
| ----: | ----: | ------: | ------------------ |
| 50.0% | 2.5ms |       2 | `workload.mjs:172` |
| 25.0% | 1.3ms |       1 | `workload.mjs:223` |
| 25.0% | 1.3ms |       1 | `workload.mjs:222` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.0ms |       4 | 2        |

##### `(anonymous)` (`workload.mjs:157:29`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 2.6ms |       2 | `workload.mjs:157` |

##### `(anonymous)` (`workload.mjs:124:13`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 2.5ms |       2 | `workload.mjs:124` |

##### `(anonymous)` (`workload.mjs:139:12`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 2.5ms |       2 | `workload.mjs:139` |

##### `(anonymous)` (`run.mjs:1:1`)

|      % |  Time | Samples | Location    |
| -----: | ----: | ------: | ----------- |
| 100.0% | 1.3ms |       1 | `run.mjs:1` |

##### `(anonymous)` (`workload.mjs:133:22`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `workload.mjs:133` |

##### `(anonymous)` (`workload.mjs:100:10`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `workload.mjs:100` |

##### `(anonymous)` (`workload.mjs:123:12`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `workload.mjs:123` |

##### `(anonymous)` (`workload.mjs:221:13`)

|      % |  Time | Samples | Location           |
| -----: | ----: | ------: | ------------------ |
| 100.0% | 1.3ms |       1 | `workload.mjs:221` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Caller | Location                                 |
| -----: | ------: | ------: | ------ | ---------------------------------------- |
| 100.0% | 938.9ms |     766 | `o`    | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:233884`)

|     % |    Time | Samples | Caller        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 95.3% | 583.9ms |     466 | `Fc.visit`    | `node_modules/d3/dist/d3.min.js:2:105700` |
|  1.8% |  11.3ms |       9 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235702` |

##### `f` (`node_modules/d3/dist/d3.min.js:2:233452`)

|      % |    Time | Samples | Caller        | Location                                  |
| -----: | ------: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 491.0ms |     388 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235702` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:231005`)

|      % |    Time | Samples | Caller        | Location                                  |
| -----: | ------: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 346.8ms |     271 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235702` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:231166`)

|     % |    Time | Samples | Caller        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 93.5% | 288.9ms |     230 | `Fc.visit`    | `node_modules/d3/dist/d3.min.js:2:105700` |
|  1.2% |   3.8ms |       3 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235702` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Caller | Location                                 |
| ----: | -----: | ------: | ------ | ---------------------------------------- |
| 54.4% | 64.1ms |      52 | `each` | `node_modules/d3/dist/d3.min.js:2:25558` |
| 45.6% | 53.7ms |      44 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709` |

##### `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103106`)

|      % |    Time | Samples | Caller | Location                                  |
| -----: | ------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 107.3ms |      86 | `$c`   | `node_modules/d3/dist/d3.min.js:2:102069` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:77577`)

|      % |   Time | Samples | Caller        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 99.7ms |      81 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235702`)

|      % |   Time | Samples | Caller | Location                                  |
| -----: | -----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 86.8ms |      69 | `h`    | `node_modules/d3/dist/d3.min.js:2:235607` |

##### `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106068`)

|     % |   Time | Samples | Caller | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 59.3% | 40.3ms |      32 | `f`    | `node_modules/d3/dist/d3.min.js:2:233452` |
| 40.7% | 27.6ms |      22 | `a`    | `node_modules/d3/dist/d3.min.js:2:231005` |

##### `createElementNS` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------- |
| 98.2% | 66.6ms |      53 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259` |
|  1.8% |  1.3ms |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16431` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Caller        | Location                                |
| -----: | -----: | ------: | ------------- | --------------------------------------- |
| 100.0% | 66.2ms |      51 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:1144` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Caller        | Location                                |
| -----: | -----: | ------: | ------------- | --------------------------------------- |
| 100.0% | 62.5ms |      50 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:1144` |

##### `J` (`node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Caller | Location                                  |
| -----: | -----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 52.8ms |      42 | `d`    | `node_modules/d3/dist/d3.min.js:2:223501` |

##### `Jh` (`node_modules/d3/dist/d3.min.js:2:131237`)

|      % |   Time | Samples | Caller  | Location                                  |
| -----: | -----: | ------: | ------- | ----------------------------------------- |
| 100.0% | 46.8ms |      37 | `point` | `node_modules/d3/dist/d3.min.js:2:131561` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:233647`)

|     % |   Time | Samples | Caller          | Location                                  |
| ----: | -----: | ------: | --------------- | ----------------------------------------- |
| 94.4% | 41.9ms |      33 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068` |
|  2.8% |  1.3ms |       1 | `f`             | `node_modules/d3/dist/d3.min.js:2:233452` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18042`)

|     % |   Time | Samples | Caller | Location                                 |
| ----: | -----: | ------: | ------ | ---------------------------------------- |
| 48.9% | 17.8ms |      14 | `each` | `node_modules/d3/dist/d3.min.js:2:25558` |
| 47.7% | 17.3ms |      14 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709` |

##### `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105700`)

|     % |   Time | Samples | Caller | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 57.2% | 20.0ms |      16 | `f`    | `node_modules/d3/dist/d3.min.js:2:233452` |
| 42.8% | 15.0ms |      12 | `a`    | `node_modules/d3/dist/d3.min.js:2:231005` |

##### `u` (`node_modules/d3/dist/d3.min.js:2:231470`)

|      % |   Time | Samples | Caller          | Location                                  |
| -----: | -----: | ------: | --------------- | ----------------------------------------- |
| 100.0% | 22.8ms |      18 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:2114`)

|     % |   Time | Samples | Caller | Location                                |
| ----: | -----: | ------: | ------ | --------------------------------------- |
| 73.6% | 14.1ms |      11 | `p`    | `node_modules/d3/dist/d3.min.js:2:1697` |
| 26.4% |  5.0ms |       4 | `g`    | `node_modules/d3/dist/d3.min.js:2:1758` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:232102`)

|      % |   Time | Samples | Caller        | Location                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 16.6ms |      13 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235702` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location                                 |
| -----: | -----: | ------: | -------- | ---------------------------------------- |
| 100.0% | 12.5ms |      10 | `remove` | `node_modules/d3/dist/d3.min.js:2:27077` |

##### `insertBefore` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 11.4ms |       9 | `appendChild` | `node_modules/d3/dist/d3.min.js:2:21447` |

##### `chartLayouts` (`workload.mjs:116:24`)

|      % |  Time | Samples | Caller                         | Location            |
| -----: | ----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 9.0ms |       7 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 7.6ms |       6 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |

##### `(anonymous)` (`workload.mjs:205:13`)

|      % |  Time | Samples | Caller        | Location                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 7.6ms |       6 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:19664` |

##### `chartBreakdowns` (`workload.mjs:39:27`)

|      % |  Time | Samples | Caller                         | Location            |
| -----: | ----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 5.2ms |       4 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `(anonymous)` (`workload.mjs:82:7`)

|      % |  Time | Samples | Caller | Location                                |
| -----: | ----: | ------: | ------ | --------------------------------------- |
| 100.0% | 5.1ms |       4 | `t`    | `node_modules/d3/dist/d3.min.js:2:4909` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |  Time | Samples | Caller        | Location      |
| -----: | ----: | ------: | ------------- | ------------- |
| 100.0% | 5.0ms |       4 | `(anonymous)` | `run.mjs:1:1` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location                                 |
| -----: | ----: | ------: | ------- | ---------------------------------------- |
| 100.0% | 5.0ms |       4 | `order` | `node_modules/d3/dist/d3.min.js:2:24713` |

##### `(anonymous)` (`workload.mjs:157:29`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 2.6ms |       2 | `chartLayouts` | `workload.mjs:116:24` |

##### `(anonymous)` (`workload.mjs:124:13`)

|      % |  Time | Samples | Caller        | Location                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 2.5ms |       2 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:142178` |

##### `(anonymous)` (`workload.mjs:139:12`)

|      % |  Time | Samples | Caller         | Location              |
| -----: | ----: | ------: | -------------- | --------------------- |
| 100.0% | 2.5ms |       2 | `chartLayouts` | `workload.mjs:116:24` |

##### `(anonymous)` (`workload.mjs:133:22`)

|      % |  Time | Samples | Caller        | Location                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`workload.mjs:100:10`)

|      % |  Time | Samples | Caller | Location                                  |
| -----: | ----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `f`    | `node_modules/d3/dist/d3.min.js:2:194448` |

##### `(anonymous)` (`workload.mjs:123:12`)

|      % |  Time | Samples | Caller        | Location                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:142038` |

##### `(anonymous)` (`workload.mjs:221:13`)

|      % |  Time | Samples | Caller        | Location                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:19664` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location                                  |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 95.0% |      4s |   3,204 | `(anonymous)`                  | `run.mjs:1:1`                             |
| 95.0% |      4s |   3,203 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`                       |
| 88.3% |   3.72s |   2,975 | `chartLayouts`                 | `workload.mjs:116:24`                     |
| 50.7% |   2.13s |   1,694 | `h`                            | `node_modules/d3/dist/d3.min.js:2:235607` |
| 50.5% |   2.13s |   1,689 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:235702` |
| 30.3% |   1.27s |   1,035 | `d`                            | `node_modules/d3/dist/d3.min.js:2:223501` |
| 29.6% |   1.24s |     991 | `f`                            | `node_modules/d3/dist/d3.min.js:2:233452` |
| 25.2% |   1.06s |     865 | `i`                            | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.1% |   1.06s |     863 | `o`                            | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.1% |   1.06s |     863 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 24.9% |   1.05s |     857 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 21.5% | 907.8ms |     724 | `Fc.visit`                     | `node_modules/d3/dist/d3.min.js:2:105700` |
| 18.0% | 761.3ms |     601 | `a`                            | `node_modules/d3/dist/d3.min.js:2:231005` |
| 14.5% | 612.8ms |     489 | `h`                            | `node_modules/d3/dist/d3.min.js:2:233884` |
|  7.3% | 309.1ms |     246 | `g`                            | `node_modules/d3/dist/d3.min.js:2:231166` |
|  6.1% | 256.3ms |     207 | `attr`                         | `node_modules/d3/dist/d3.min.js:2:25709`  |
|  5.0% | 209.9ms |     170 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 160.8ms |     129 | `each`                         | `node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.7% | 157.9ms |     124 | `h`                            | `node_modules/d3/dist/d3.min.js:2:223150` |
|  3.7% | 156.6ms |     123 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:1144`   |

#### Categories

##### Third-party

|     % |    Time | Samples | Function        | Location                                  |
| ----: | ------: | ------: | --------------- | ----------------------------------------- |
| 50.7% |   2.13s |   1,694 | `h`             | `node_modules/d3/dist/d3.min.js:2:235607` |
| 50.5% |   2.13s |   1,689 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:235702` |
| 30.3% |   1.27s |   1,035 | `d`             | `node_modules/d3/dist/d3.min.js:2:223501` |
| 29.6% |   1.24s |     991 | `f`             | `node_modules/d3/dist/d3.min.js:2:233452` |
| 25.2% |   1.06s |     865 | `i`             | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.1% |   1.06s |     863 | `o`             | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.1% |   1.06s |     863 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 24.9% |   1.05s |     857 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 21.5% | 907.8ms |     724 | `Fc.visit`      | `node_modules/d3/dist/d3.min.js:2:105700` |
| 18.0% | 761.3ms |     601 | `a`             | `node_modules/d3/dist/d3.min.js:2:231005` |
| 14.5% | 612.8ms |     489 | `h`             | `node_modules/d3/dist/d3.min.js:2:233884` |
|  7.3% | 309.1ms |     246 | `g`             | `node_modules/d3/dist/d3.min.js:2:231166` |
|  6.1% | 256.3ms |     207 | `attr`          | `node_modules/d3/dist/d3.min.js:2:25709`  |
|  5.0% | 209.9ms |     170 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 160.8ms |     129 | `each`          | `node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.7% | 157.9ms |     124 | `h`             | `node_modules/d3/dist/d3.min.js:2:223150` |
|  3.7% | 156.6ms |     123 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:1144`   |
|  3.2% | 135.8ms |     108 | `call`          | `node_modules/d3/dist/d3.min.js:2:25192`  |
|  3.1% | 132.7ms |     105 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068` |
|  3.1% | 128.8ms |     103 | `$c`            | `node_modules/d3/dist/d3.min.js:2:102069` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 67.8ms |      54 | `createElementNS`         | `<unknown>` |
| 1.0% | 41.7ms |      23 | `(program)`               | `<unknown>` |
| 0.3% | 12.5ms |      10 | `removeChild`             | `<unknown>` |
| 0.3% | 11.4ms |       9 | `insertBefore`            | `<unknown>` |
| 0.2% |  7.6ms |       6 | `appendChild`             | `<unknown>` |
| 0.1% |  5.0ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 2.7% | 115.7ms |      92 | `(garbage collector)` | `<unknown>` |

##### Ours

|     % |   Time | Samples | Function                       | Location              |
| ----: | -----: | ------: | ------------------------------ | --------------------- |
| 95.0% |     4s |   3,204 | `(anonymous)`                  | `run.mjs:1:1`         |
| 95.0% |     4s |   3,203 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
| 88.3% |  3.72s |   2,975 | `chartLayouts`                 | `workload.mjs:116:24` |
|  1.5% | 61.7ms |      49 | `chartBreakdowns`              | `workload.mjs:39:27`  |
|  1.0% | 43.6ms |      34 | `(anonymous)`                  | `workload.mjs:201:13` |
|  0.8% | 32.8ms |      26 | `(anonymous)`                  | `workload.mjs:185:13` |
|  0.7% | 31.5ms |      25 | `(anonymous)`                  | `workload.mjs:205:13` |
|  0.5% | 19.4ms |      16 | `(anonymous)`                  | `workload.mjs:195:13` |
|  0.2% |  7.6ms |       6 | `(anonymous)`                  | `workload.mjs:82:7`   |
|  0.2% |  6.4ms |       5 | `(anonymous)`                  | `workload.mjs:157:29` |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `workload.mjs:124:13` |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `workload.mjs:193:9`  |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `workload.mjs:221:13` |
|  0.1% |  2.5ms |       2 | `(anonymous)`                  | `workload.mjs:139:12` |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `workload.mjs:133:22` |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `workload.mjs:100:10` |
| <0.1% |  1.3ms |       1 | `(anonymous)`                  | `workload.mjs:123:12` |
| <0.1% |  1.2ms |       1 | `(anonymous)`                  | `workload.mjs:11:29`  |
| <0.1% |  0.9ms |       1 | `(anonymous)`                  | `workload.mjs:199:25` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`run.mjs:1:1`)

|      % | Time | Samples | Callee                         | Location            |
| -----: | ---: | ------: | ------------------------------ | ------------------- |
| 100.0% |   4s |   3,203 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |    Time | Samples | Callee            | Location                                 |
| ----: | ------: | ------: | ----------------- | ---------------------------------------- |
| 92.9% |   3.72s |   2,975 | `chartLayouts`    | `workload.mjs:116:24`                    |
|  3.2% | 129.5ms |     103 | `call`            | `node_modules/d3/dist/d3.min.js:2:25192` |
|  1.5% |  61.7ms |      49 | `chartBreakdowns` | `workload.mjs:39:27`                     |
|  0.8% |  32.8ms |      26 | `join`            | `node_modules/d3/dist/d3.min.js:2:24162` |
|  0.6% |  22.5ms |      18 | `remove`          | `node_modules/d3/dist/d3.min.js:2:27077` |

##### `chartLayouts` (`workload.mjs:116:24`)

|     % |    Time | Samples | Callee | Location                                  |
| ----: | ------: | ------: | ------ | ----------------------------------------- |
| 57.4% |   2.13s |   1,694 | `h`    | `node_modules/d3/dist/d3.min.js:2:235607` |
| 34.4% |   1.27s |   1,035 | `d`    | `node_modules/d3/dist/d3.min.js:2:223501` |
|  4.8% | 179.5ms |     145 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709`  |
|  1.2% |  43.8ms |      35 | `join` | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  0.4% |  15.0ms |      12 | `from` | `node_modules/d3/dist/d3.min.js:2:94301`  |

##### `h` (`node_modules/d3/dist/d3.min.js:2:235607`)

|     % |  Time | Samples | Callee        | Location                                  |
| ----: | ----: | ------: | ------------- | ----------------------------------------- |
| 99.7% | 2.13s |   1,689 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235702` |
|  0.1% | 1.3ms |       1 | `i`           | `node_modules/d3/dist/d3.min.js:2:230589` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235702`)

|     % |    Time | Samples | Callee | Location                                  |
| ----: | ------: | ------: | ------ | ----------------------------------------- |
| 58.5% |   1.24s |     991 | `f`    | `node_modules/d3/dist/d3.min.js:2:233452` |
| 35.7% | 761.3ms |     601 | `a`    | `node_modules/d3/dist/d3.min.js:2:231005` |
|  0.8% |  16.6ms |      13 | `l`    | `node_modules/d3/dist/d3.min.js:2:232102` |
|  0.5% |  11.3ms |       9 | `h`    | `node_modules/d3/dist/d3.min.js:2:233884` |
|  0.2% |   3.8ms |       3 | `i`    | `node_modules/d3/dist/d3.min.js:2:230589` |

##### `d` (`node_modules/d3/dist/d3.min.js:2:223501`)

|     % |    Time | Samples | Callee        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 83.1% |   1.06s |     865 | `i`           | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 12.3% | 157.9ms |     124 | `h`           | `node_modules/d3/dist/d3.min.js:2:223150` |
|  4.1% |  52.8ms |      42 | `J`           | `node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.2% |   2.5ms |       2 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:223652` |

##### `f` (`node_modules/d3/dist/d3.min.js:2:233452`)

|     % |    Time | Samples | Callee          | Location                                  |
| ----: | ------: | ------: | --------------- | ----------------------------------------- |
| 48.4% | 604.0ms |     482 | `Fc.visit`      | `node_modules/d3/dist/d3.min.js:2:105700` |
|  6.6% |  82.2ms |      65 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068` |
|  5.5% |  68.7ms |      55 | `$c`            | `node_modules/d3/dist/d3.min.js:2:102069` |
|  0.1% |   1.3ms |       1 | `l`             | `node_modules/d3/dist/d3.min.js:2:233647` |

##### `i` (`node_modules/d3/dist/d3.min.js:2:76807`)

|     % |  Time | Samples | Callee        | Location                                 |
| ----: | ----: | ------: | ------------- | ---------------------------------------- |
| 99.8% | 1.06s |     863 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982` |

##### `o` (`node_modules/d3/dist/d3.min.js:2:77004`)

|     % |  Time | Samples | Callee        | Location                                 |
| ----: | ----: | ------: | ------------- | ---------------------------------------- |
| 99.1% | 1.05s |     857 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:76982`)

|      % |  Time | Samples | Callee | Location                                 |
| -----: | ----: | ------: | ------ | ---------------------------------------- |
| 100.0% | 1.06s |     863 | `o`    | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|     % |    Time | Samples | Callee | Location                                 |
| ----: | ------: | ------: | ------ | ---------------------------------------- |
| 10.5% | 110.4ms |      90 | `p`    | `node_modules/d3/dist/d3.min.js:2:77577` |
|  0.1% |   1.3ms |       1 | `au`   | `node_modules/d3/dist/d3.min.js:2:79111` |

##### `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105700`)

|     % |    Time | Samples | Callee | Location                                  |
| ----: | ------: | ------: | ------ | ----------------------------------------- |
| 64.3% | 583.9ms |     466 | `h`    | `node_modules/d3/dist/d3.min.js:2:233884` |
| 31.8% | 288.9ms |     230 | `g`    | `node_modules/d3/dist/d3.min.js:2:231166` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:231005`)

|     % |    Time | Samples | Callee          | Location                                  |
| ----: | ------: | ------: | --------------- | ----------------------------------------- |
| 39.9% | 303.9ms |     242 | `Fc.visit`      | `node_modules/d3/dist/d3.min.js:2:105700` |
|  7.9% |  60.1ms |      48 | `$c`            | `node_modules/d3/dist/d3.min.js:2:102069` |
|  6.6% |  50.5ms |      40 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106068` |

##### `attr` (`node_modules/d3/dist/d3.min.js:2:25709`)

|     % |    Time | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 56.1% | 143.8ms |     116 | `each`        | `node_modules/d3/dist/d3.min.js:2:25558` |
| 34.2% |  87.7ms |      71 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |
|  6.8% |  17.3ms |      14 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18042` |
|  0.5% |   1.3ms |       1 | `It`          | `node_modules/d3/dist/d3.min.js:2:16093` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Callee        | Location                                  |
| ----: | -----: | ------: | ------------- | ----------------------------------------- |
| 35.6% | 74.8ms |      60 | `a`           | `node_modules/d3/dist/d3.min.js:2:244444` |
|  6.0% | 12.5ms |      10 | `f`           | `node_modules/d3/dist/d3.min.js:2:218177` |
|  1.2% |  2.5ms |       2 | `(anonymous)` | `workload.mjs:193:9`                      |
|  0.6% |  1.3ms |       1 | `(anonymous)` | `workload.mjs:133:22`                     |
|  0.4% |  0.9ms |       1 | `(anonymous)` | `workload.mjs:199:25`                     |

##### `each` (`node_modules/d3/dist/d3.min.js:2:25558`)

|     % |    Time | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 76.0% | 122.3ms |      99 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |
| 11.1% |  17.8ms |      14 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18042` |
|  9.1% |  14.7ms |      11 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:19664` |
|  0.8% |   1.3ms |       1 | `In`          | `node_modules/d3/dist/d3.min.js:2:20104` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:223150`)

|     % |    Time | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 99.2% | 156.6ms |     123 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:1144`  |
|  0.8% |   1.3ms |       1 | `lu`          | `node_modules/d3/dist/d3.min.js:2:79375` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:1144`)

|     % |   Time | Samples | Callee | Location                                |
| ----: | -----: | ------: | ------ | --------------------------------------- |
| 48.9% | 76.6ms |      61 | `p`    | `node_modules/d3/dist/d3.min.js:2:1697` |
| 45.5% | 71.2ms |      55 | `g`    | `node_modules/d3/dist/d3.min.js:2:1758` |

##### `call` (`node_modules/d3/dist/d3.min.js:2:25192`)

|     % |   Time | Samples | Callee        | Location                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------- |
| 53.6% | 72.8ms |      58 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208` |
| 32.1% | 43.6ms |      34 | `(anonymous)` | `workload.mjs:201:13`                    |
| 14.3% | 19.4ms |      16 | `(anonymous)` | `workload.mjs:195:13`                    |

##### `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106068`)

|     % |   Time | Samples | Callee | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 31.6% | 41.9ms |      33 | `l`    | `node_modules/d3/dist/d3.min.js:2:233647` |
| 17.2% | 22.8ms |      18 | `u`    | `node_modules/d3/dist/d3.min.js:2:231470` |

##### `$c` (`node_modules/d3/dist/d3.min.js:2:102069`)

|     % |    Time | Samples | Callee      | Location                                  |
| ----: | ------: | ------: | ----------- | ----------------------------------------- |
| 91.9% | 118.5ms |      95 | `Fc.addAll` | `node_modules/d3/dist/d3.min.js:2:103106` |
|  1.3% |   1.7ms |       1 | `Xc`        | `node_modules/d3/dist/d3.min.js:2:106662` |

##### `chartBreakdowns` (`workload.mjs:39:27`)

|     % |   Time | Samples | Callee | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 30.6% | 18.9ms |      15 | `D`    | `node_modules/d3/dist/d3.min.js:2:4759`   |
| 26.5% | 16.3ms |      13 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709`  |
| 10.3% |  6.3ms |       5 | `call` | `node_modules/d3/dist/d3.min.js:2:25192`  |
|  6.1% |  3.8ms |       3 | `join` | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  4.0% |  2.5ms |       2 | `yg`   | `node_modules/d3/dist/d3.min.js:2:152882` |

##### `(anonymous)` (`workload.mjs:201:13`)

|     % |   Time | Samples | Callee   | Location                                 |
| ----: | -----: | ------: | -------- | ---------------------------------------- |
| 97.1% | 42.3ms |      33 | `text`   | `node_modules/d3/dist/d3.min.js:2:26408` |
|  2.9% |  1.3ms |       1 | `select` | `node_modules/d3/dist/d3.min.js:2:22328` |

##### `(anonymous)` (`workload.mjs:185:13`)

|      % |   Time | Samples | Callee   | Location                                 |
| -----: | -----: | ------: | -------- | ---------------------------------------- |
| 100.0% | 32.8ms |      26 | `append` | `node_modules/d3/dist/d3.min.js:2:26726` |

##### `(anonymous)` (`workload.mjs:205:13`)

|     % |   Time | Samples | Callee        | Location                                  |
| ----: | -----: | ------: | ------------- | ----------------------------------------- |
| 48.0% | 15.1ms |      12 | `M`           | `node_modules/d3/dist/d3.min.js:2:109958` |
| 16.0% |  5.0ms |       4 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:165835` |
|  4.1% |  1.3ms |       1 | `Yv`          | `node_modules/d3/dist/d3.min.js:2:169822` |
|  4.0% |  1.3ms |       1 | `format`      | `node_modules/d3/dist/d3.min.js:2:167331` |
|  4.0% |  1.3ms |       1 | `o_`          | `node_modules/d3/dist/d3.min.js:2:170691` |

##### `(anonymous)` (`workload.mjs:195:13`)

|     % |   Time | Samples | Callee   | Location                                 |
| ----: | -----: | ------: | -------- | ---------------------------------------- |
| 93.5% | 18.1ms |      15 | `attr`   | `node_modules/d3/dist/d3.min.js:2:25709` |
|  6.5% |  1.3ms |       1 | `select` | `node_modules/d3/dist/d3.min.js:2:22328` |

##### `(anonymous)` (`workload.mjs:82:7`)

|     % |  Time | Samples | Callee       | Location                                  |
| ----: | ----: | ------: | ------------ | ----------------------------------------- |
| 33.0% | 2.5ms |       2 | `Vg.i.floor` | `node_modules/d3/dist/d3.min.js:2:159113` |

##### `(anonymous)` (`workload.mjs:157:29`)

|     % |  Time | Samples | Callee | Location                                  |
| ----: | ----: | ------: | ------ | ----------------------------------------- |
| 59.7% | 3.8ms |       3 | `l`    | `node_modules/d3/dist/d3.min.js:2:155044` |

##### `(anonymous)` (`workload.mjs:193:9`)

|      % |  Time | Samples | Callee | Location                                  |
| -----: | ----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 2.5ms |       2 | `l`    | `node_modules/d3/dist/d3.min.js:2:155044` |

##### `(anonymous)` (`workload.mjs:221:13`)

|     % |  Time | Samples | Callee | Location                                  |
| ----: | ----: | ------: | ------ | ----------------------------------------- |
| 50.0% | 1.3ms |       1 | `M`    | `node_modules/d3/dist/d3.min.js:2:109958` |

##### `(anonymous)` (`workload.mjs:11:29`)

|      % |  Time | Samples | Callee        | Location                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 1.2ms |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:166138` |

##### `(anonymous)` (`workload.mjs:199:25`)

|      % |  Time | Samples | Callee | Location                                  |
| -----: | ----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 0.9ms |       1 | `i`    | `node_modules/d3/dist/d3.min.js:2:152428` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `globalThis.buildAndRetainDom` (`workload.mjs:1:32`) ← `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.3% | 938.9ms |     766 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)                                                                 |
| 13.8% | 583.9ms |     466 | `h` (`node_modules/d3/dist/d3.min.js:2:233884`) ← `Fc.visit` (2:105700) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                                |
| 11.6% | 491.0ms |     388 | `f` (`node_modules/d3/dist/d3.min.js:2:233452`) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                         |
|  8.2% | 346.8ms |     271 | `a` (`node_modules/d3/dist/d3.min.js:2:231005`) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                         |
|  6.8% | 288.9ms |     230 | `g` (`node_modules/d3/dist/d3.min.js:2:231166`) ← `Fc.visit` (2:105700) ← `a` (2:231005) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                                |
|  2.4% |  99.7ms |      81 | `p` (`node_modules/d3/dist/d3.min.js:2:77577`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)                                                 |
|  2.1% |  86.8ms |      69 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235702`) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                          |
|  1.6% |  66.2ms |      51 | `g` (`node_modules/d3/dist/d3.min.js:2:1758`) ← `(anonymous)` (2:1144) ← `h` (2:223150) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                            |
|  1.5% |  62.5ms |      50 | `p` (`node_modules/d3/dist/d3.min.js:2:1697`) ← `(anonymous)` (2:1144) ← `h` (2:223150) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                            |
|  1.4% |  57.1ms |      46 | `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103106`) ← `$c` (2:102069) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                              |
|  1.3% |  52.8ms |      42 | `J` (`node_modules/d3/dist/d3.min.js:2:8205`) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                      |
|  1.2% |  50.2ms |      40 | `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103106`) ← `$c` (2:102069) ← `a` (2:231005) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                              |
|  1.0% |  42.9ms |      35 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`) ← `each` (2:25558) ← `attr` (2:25709) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                      |
|  1.0% |  41.9ms |      33 | `l` (`node_modules/d3/dist/d3.min.js:2:233647`) ← `Fc.visitAfter` (2:106068) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                           |
|  1.0% |  40.3ms |      32 | `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106068`) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                                            |
|  0.8% |  35.3ms |      29 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`) ← `attr` (2:25709) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                         |
|  0.7% |  29.2ms |      23 | `Jh` (`node_modules/d3/dist/d3.min.js:2:131237`) ← `point` (2:131561) ← `Yf` (2:112830) ← `Lf` (2:112923) ← `a` (2:244444) ← `(anonymous)` (2:18176) ← `each` (2:25558) ← `attr` (2:25709) ← `chartLayouts` (`workload.mjs:116:24`)          |
|  0.7% |  27.6ms |      22 | `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106068`) ← `a` (2:231005) ← `(anonymous)` (2:235702) ← `h` (2:235607) ← `chartLayouts` (`workload.mjs:116:24`)                                                                            |
|  0.6% |  25.0ms |      20 | `createElementNS` ← `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`workload.mjs:116:24`)                                 |
|  0.6% |  24.0ms |      19 | `createElementNS` ← `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `(anonymous)` (`workload.mjs:185:13`) ← `join` (`node_modules/d3/dist/d3.min.js:2:24162`) |

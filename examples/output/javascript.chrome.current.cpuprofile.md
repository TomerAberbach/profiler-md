# CPU profile

Took 4.22s over 3,379 samples (1.3ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| Third-party       | 92.4% |   3.90s |   3,134 |
| Native            |  3.4% | 142.1ms |     104 |
| Garbage collector |  3.3% | 137.6ms |     108 |
| Ours              |  0.8% |  32.6ms |      26 |
| Idle              |  0.2% |   8.8ms |       7 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function              | Location                                  |
| ----: | ------: | ------: | --------------------- | ----------------------------------------- |
| 23.0% | 972.6ms |     792 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.3% | 605.2ms |     482 | `h`                   | `node_modules/d3/dist/d3.min.js:2:233933` |
| 11.0% | 464.1ms |     369 | `f`                   | `node_modules/d3/dist/d3.min.js:2:233501` |
|  8.0% | 340.1ms |     271 | `a`                   | `node_modules/d3/dist/d3.min.js:2:231054` |
|  7.4% | 311.0ms |     247 | `g`                   | `node_modules/d3/dist/d3.min.js:2:231215` |
|  3.3% | 137.6ms |     108 | `(garbage collector)` | `<unknown>`                               |
|  2.8% | 119.8ms |      95 | `Fc.addAll`           | `node_modules/d3/dist/d3.min.js:2:103087` |
|  2.2% |  94.2ms |      75 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  1.9% |  79.1ms |      63 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:235751` |
|  1.9% |  78.6ms |      64 | `p`                   | `node_modules/d3/dist/d3.min.js:2:77576`  |
|  1.7% |  73.5ms |      60 | `Fc.visit`            | `node_modules/d3/dist/d3.min.js:2:105681` |
|  1.6% |  66.6ms |      53 | `createElementNS`     | `<unknown>`                               |
|  1.5% |  65.5ms |      52 | `p`                   | `node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.5% |  61.5ms |      49 | `Fc.visitAfter`       | `node_modules/d3/dist/d3.min.js:2:106049` |
|  1.4% |  59.5ms |      47 | `g`                   | `node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.2% |  48.9ms |      39 | `(anonymous)`         | `node_modules/d3/dist/d3.min.js:2:18042`  |
|  1.1% |  48.1ms |      38 | `Jh`                  | `node_modules/d3/dist/d3.min.js:2:131218` |
|  0.9% |  38.8ms |      31 | `J`                   | `node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.9% |  37.9ms |      30 | `u`                   | `node_modules/d3/dist/d3.min.js:2:231519` |
|  0.9% |  36.4ms |      20 | `(program)`           | `<unknown>`                               |

#### Categories

##### Third-party

|     % |    Time | Samples | Function        | Location                                  |
| ----: | ------: | ------: | --------------- | ----------------------------------------- |
| 23.0% | 972.6ms |     792 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.3% | 605.2ms |     482 | `h`             | `node_modules/d3/dist/d3.min.js:2:233933` |
| 11.0% | 464.1ms |     369 | `f`             | `node_modules/d3/dist/d3.min.js:2:233501` |
|  8.0% | 340.1ms |     271 | `a`             | `node_modules/d3/dist/d3.min.js:2:231054` |
|  7.4% | 311.0ms |     247 | `g`             | `node_modules/d3/dist/d3.min.js:2:231215` |
|  2.8% | 119.8ms |      95 | `Fc.addAll`     | `node_modules/d3/dist/d3.min.js:2:103087` |
|  2.2% |  94.2ms |      75 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  1.9% |  79.1ms |      63 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:235751` |
|  1.9% |  78.6ms |      64 | `p`             | `node_modules/d3/dist/d3.min.js:2:77576`  |
|  1.7% |  73.5ms |      60 | `Fc.visit`      | `node_modules/d3/dist/d3.min.js:2:105681` |
|  1.5% |  65.5ms |      52 | `p`             | `node_modules/d3/dist/d3.min.js:2:1697`   |
|  1.5% |  61.5ms |      49 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106049` |
|  1.4% |  59.5ms |      47 | `g`             | `node_modules/d3/dist/d3.min.js:2:1758`   |
|  1.2% |  48.9ms |      39 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18042`  |
|  1.1% |  48.1ms |      38 | `Jh`            | `node_modules/d3/dist/d3.min.js:2:131218` |
|  0.9% |  38.8ms |      31 | `J`             | `node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.9% |  37.9ms |      30 | `u`             | `node_modules/d3/dist/d3.min.js:2:231519` |
|  0.6% |  27.0ms |      22 | `l`             | `node_modules/d3/dist/d3.min.js:2:233696` |
|  0.6% |  26.3ms |      21 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:2114`   |
|  0.5% |  20.3ms |      16 | `g`             | `node_modules/d3/dist/d3.min.js:2:108341` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 66.6ms |      53 | `createElementNS`         | `<unknown>` |
| 0.9% | 36.4ms |      20 | `(program)`               | `<unknown>` |
| 0.4% | 16.3ms |      13 | `removeChild`             | `<unknown>` |
| 0.2% |  8.9ms |       7 | `insertBefore`            | `<unknown>` |
| 0.2% |  8.8ms |       7 | `appendChild`             | `<unknown>` |
| 0.1% |  5.1ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 3.3% | 137.6ms |     108 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 972.6ms |     775 | `node_modules/d3/dist/d3.min.js:2` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:233933`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 605.2ms |     482 | `node_modules/d3/dist/d3.min.js:2` |

##### `f` (`node_modules/d3/dist/d3.min.js:2:233501`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 464.1ms |     369 | `node_modules/d3/dist/d3.min.js:2` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:231054`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 340.1ms |     271 | `node_modules/d3/dist/d3.min.js:2` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:231215`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 311.0ms |     247 | `node_modules/d3/dist/d3.min.js:2` |

##### `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103087`)

|      % |    Time | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 119.8ms |      95 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 94.2ms |      74 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235751`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 79.1ms |      63 | `node_modules/d3/dist/d3.min.js:2` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:77576`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 78.6ms |      63 | `node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105681`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 73.5ms |      59 | `node_modules/d3/dist/d3.min.js:2` |

##### `createElementNS` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 66.6ms |      53 | 2        |

##### `p` (`node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 65.5ms |      52 | `node_modules/d3/dist/d3.min.js:2` |

##### `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106049`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 61.5ms |      49 | `node_modules/d3/dist/d3.min.js:2` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 59.5ms |      47 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18042`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 48.9ms |      39 | `node_modules/d3/dist/d3.min.js:2` |

##### `Jh` (`node_modules/d3/dist/d3.min.js:2:131218`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 48.1ms |      38 | `node_modules/d3/dist/d3.min.js:2` |

##### `J` (`node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 38.8ms |      31 | `node_modules/d3/dist/d3.min.js:2` |

##### `u` (`node_modules/d3/dist/d3.min.js:2:231519`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 37.9ms |      30 | `node_modules/d3/dist/d3.min.js:2` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:233696`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 27.0ms |      22 | `node_modules/d3/dist/d3.min.js:2` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:2114`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 26.3ms |      21 | `node_modules/d3/dist/d3.min.js:2` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:108341`)

|      % |   Time | Samples | Location                           |
| -----: | -----: | ------: | ---------------------------------- |
| 100.0% | 20.3ms |      16 | `node_modules/d3/dist/d3.min.js:2` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 16.3ms |      13 | 2        |

##### `insertBefore` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 8.9ms |       7 | 2        |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 8.8ms |       7 | 2        |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.1ms |       4 | 2        |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|      % |    Time | Samples | Caller | Location                                 |
| -----: | ------: | ------: | ------ | ---------------------------------------- |
| 100.0% | 972.6ms |     792 | `o`    | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:233933`)

|     % |    Time | Samples | Caller        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 96.0% | 581.2ms |     463 | `Fc.visit`    | `node_modules/d3/dist/d3.min.js:2:105681` |
|  0.8% |   5.1ms |       4 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235751` |

##### `f` (`node_modules/d3/dist/d3.min.js:2:233501`)

|      % |    Time | Samples | Caller        | Location                                  |
| -----: | ------: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 464.1ms |     369 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235751` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:231054`)

|     % |    Time | Samples | Caller        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 99.7% | 339.1ms |     270 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235751` |
|  0.3% |   1.0ms |       1 | `h`           | `node_modules/d3/dist/d3.min.js:2:235656` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:231215`)

|     % |    Time | Samples | Caller        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 91.5% | 284.7ms |     226 | `Fc.visit`    | `node_modules/d3/dist/d3.min.js:2:105681` |
|  3.2% |  10.1ms |       8 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235751` |

##### `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103087`)

|     % |    Time | Samples | Caller | Location                                  |
| ----: | ------: | ------: | ------ | ----------------------------------------- |
| 94.8% | 113.6ms |      90 | `$c`   | `node_modules/d3/dist/d3.min.js:2:102050` |
|  3.1% |   3.8ms |       3 | `f`    | `node_modules/d3/dist/d3.min.js:2:233501` |
|  2.1% |   2.5ms |       2 | `a`    | `node_modules/d3/dist/d3.min.js:2:231054` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Caller | Location                                 |
| ----: | -----: | ------: | ------ | ---------------------------------------- |
| 65.2% | 61.4ms |      49 | `each` | `node_modules/d3/dist/d3.min.js:2:25558` |
| 34.8% | 32.8ms |      26 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235751`)

|      % |   Time | Samples | Caller | Location                                  |
| -----: | -----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 79.1ms |      63 | `h`    | `node_modules/d3/dist/d3.min.js:2:235656` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:77576`)

|     % |   Time | Samples | Caller        | Location                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------- |
| 98.4% | 77.4ms |      63 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |
|  1.6% |  1.3ms |       1 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105681`)

|     % |   Time | Samples | Caller | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 54.5% | 40.0ms |      32 | `f`    | `node_modules/d3/dist/d3.min.js:2:233501` |
| 45.5% | 33.5ms |      28 | `a`    | `node_modules/d3/dist/d3.min.js:2:231054` |

##### `createElementNS` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------- |
| 98.1% | 65.4ms |      52 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259` |
|  1.9% |  1.3ms |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16431` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:1697`)

|      % |   Time | Samples | Caller        | Location                                |
| -----: | -----: | ------: | ------------- | --------------------------------------- |
| 100.0% | 65.5ms |      52 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:1144` |

##### `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106049`)

|     % |   Time | Samples | Caller | Location                                  |
| ----: | -----: | ------: | ------ | ----------------------------------------- |
| 65.4% | 40.3ms |      32 | `f`    | `node_modules/d3/dist/d3.min.js:2:233501` |
| 34.6% | 21.3ms |      17 | `a`    | `node_modules/d3/dist/d3.min.js:2:231054` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:1758`)

|      % |   Time | Samples | Caller        | Location                                |
| -----: | -----: | ------: | ------------- | --------------------------------------- |
| 100.0% | 59.5ms |      47 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:1144` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18042`)

|     % |   Time | Samples | Caller | Location                                 |
| ----: | -----: | ------: | ------ | ---------------------------------------- |
| 51.1% | 25.0ms |      20 | `each` | `node_modules/d3/dist/d3.min.js:2:25558` |
| 48.9% | 23.9ms |      19 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709` |

##### `Jh` (`node_modules/d3/dist/d3.min.js:2:131218`)

|      % |   Time | Samples | Caller  | Location                                  |
| -----: | -----: | ------: | ------- | ----------------------------------------- |
| 100.0% | 48.1ms |      38 | `point` | `node_modules/d3/dist/d3.min.js:2:131542` |

##### `J` (`node_modules/d3/dist/d3.min.js:2:8205`)

|      % |   Time | Samples | Caller | Location                                  |
| -----: | -----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 38.8ms |      31 | `d`    | `node_modules/d3/dist/d3.min.js:2:223550` |

##### `u` (`node_modules/d3/dist/d3.min.js:2:231519`)

|      % |   Time | Samples | Caller          | Location                                  |
| -----: | -----: | ------: | --------------- | ----------------------------------------- |
| 100.0% | 37.9ms |      30 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106049` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:233696`)

|     % |   Time | Samples | Caller          | Location                                  |
| ----: | -----: | ------: | --------------- | ----------------------------------------- |
| 95.4% | 25.8ms |      21 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106049` |
|  4.6% |  1.3ms |       1 | `f`             | `node_modules/d3/dist/d3.min.js:2:233501` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:2114`)

|     % |   Time | Samples | Caller | Location                                |
| ----: | -----: | ------: | ------ | --------------------------------------- |
| 56.3% | 14.8ms |      12 | `p`    | `node_modules/d3/dist/d3.min.js:2:1697` |
| 43.7% | 11.5ms |       9 | `g`    | `node_modules/d3/dist/d3.min.js:2:1758` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:108341`)

|      % |   Time | Samples | Caller | Location                                  |
| -----: | -----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 20.3ms |      16 | `M`    | `node_modules/d3/dist/d3.min.js:2:109939` |

##### `removeChild` (`<unknown>`)

|      % |   Time | Samples | Caller   | Location                                 |
| -----: | -----: | ------: | -------- | ---------------------------------------- |
| 100.0% | 16.3ms |      13 | `remove` | `node_modules/d3/dist/d3.min.js:2:27077` |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller         | Location                                 |
| ----: | ----: | ------: | -------------- | ---------------------------------------- |
| 70.9% | 6.3ms |       5 | `appendChild`  | `node_modules/d3/dist/d3.min.js:2:21447` |
| 29.1% | 2.6ms |       2 | `insertBefore` | `node_modules/d3/dist/d3.min.js:2:21520` |

##### `appendChild` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 8.8ms |       7 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |

##### `compareDocumentPosition` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location                                 |
| -----: | ----: | ------: | ------- | ---------------------------------------- |
| 100.0% | 5.1ms |       4 | `order` | `node_modules/d3/dist/d3.min.js:2:24713` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location                                  |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 94.7% |      4s |   3,210 | `(anonymous)`                  | `run.mjs:1:1`                             |
| 94.6% |   3.99s |   3,207 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`                       |
| 87.9% |   3.71s |   2,980 | `chartLayouts`                 | `workload.mjs:116:24`                     |
| 50.6% |   2.13s |   1,704 | `h`                            | `node_modules/d3/dist/d3.min.js:2:235656` |
| 50.5% |   2.13s |   1,699 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:235751` |
| 30.3% |   1.28s |   1,039 | `d`                            | `node_modules/d3/dist/d3.min.js:2:223550` |
| 28.8% |   1.21s |     970 | `f`                            | `node_modules/d3/dist/d3.min.js:2:233501` |
| 25.5% |   1.07s |     876 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 25.5% |   1.07s |     876 | `i`                            | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.4% |   1.07s |     875 | `o`                            | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.2% |   1.06s |     868 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 22.2% | 939.3ms |     749 | `Fc.visit`                     | `node_modules/d3/dist/d3.min.js:2:105681` |
| 19.0% | 804.2ms |     641 | `a`                            | `node_modules/d3/dist/d3.min.js:2:231054` |
| 14.3% | 605.2ms |     482 | `h`                            | `node_modules/d3/dist/d3.min.js:2:233933` |
|  7.4% | 311.0ms |     247 | `g`                            | `node_modules/d3/dist/d3.min.js:2:231215` |
|  5.7% | 240.1ms |     193 | `attr`                         | `node_modules/d3/dist/d3.min.js:2:25709`  |
|  4.3% | 183.8ms |     148 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 160.6ms |     130 | `each`                         | `node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.8% | 160.1ms |     127 | `h`                            | `node_modules/d3/dist/d3.min.js:2:223199` |
|  3.6% | 152.5ms |     121 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:1144`   |

#### Categories

##### Third-party

|     % |    Time | Samples | Function      | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 50.6% |   2.13s |   1,704 | `h`           | `node_modules/d3/dist/d3.min.js:2:235656` |
| 50.5% |   2.13s |   1,699 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235751` |
| 30.3% |   1.28s |   1,039 | `d`           | `node_modules/d3/dist/d3.min.js:2:223550` |
| 28.8% |   1.21s |     970 | `f`           | `node_modules/d3/dist/d3.min.js:2:233501` |
| 25.5% |   1.07s |     876 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 25.5% |   1.07s |     876 | `i`           | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 25.4% |   1.07s |     875 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 25.2% |   1.06s |     868 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 22.2% | 939.3ms |     749 | `Fc.visit`    | `node_modules/d3/dist/d3.min.js:2:105681` |
| 19.0% | 804.2ms |     641 | `a`           | `node_modules/d3/dist/d3.min.js:2:231054` |
| 14.3% | 605.2ms |     482 | `h`           | `node_modules/d3/dist/d3.min.js:2:233933` |
|  7.4% | 311.0ms |     247 | `g`           | `node_modules/d3/dist/d3.min.js:2:231215` |
|  5.7% | 240.1ms |     193 | `attr`        | `node_modules/d3/dist/d3.min.js:2:25709`  |
|  4.3% | 183.8ms |     148 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176`  |
|  3.8% | 160.6ms |     130 | `each`        | `node_modules/d3/dist/d3.min.js:2:25558`  |
|  3.8% | 160.1ms |     127 | `h`           | `node_modules/d3/dist/d3.min.js:2:223199` |
|  3.6% | 152.5ms |     121 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:1144`   |
|  3.5% | 147.4ms |     117 | `$c`          | `node_modules/d3/dist/d3.min.js:2:102050` |
|  3.2% | 133.4ms |     106 | `call`        | `node_modules/d3/dist/d3.min.js:2:25192`  |
|  3.1% | 132.3ms |     105 | `Fc.addAll`   | `node_modules/d3/dist/d3.min.js:2:103087` |

##### Native

|    % |   Time | Samples | Function                  | Location    |
| ---: | -----: | ------: | ------------------------- | ----------- |
| 1.6% | 66.6ms |      53 | `createElementNS`         | `<unknown>` |
| 0.9% | 36.4ms |      20 | `(program)`               | `<unknown>` |
| 0.4% | 16.3ms |      13 | `removeChild`             | `<unknown>` |
| 0.2% |  8.9ms |       7 | `insertBefore`            | `<unknown>` |
| 0.2% |  8.8ms |       7 | `appendChild`             | `<unknown>` |
| 0.1% |  5.1ms |       4 | `compareDocumentPosition` | `<unknown>` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 3.3% | 137.6ms |     108 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`run.mjs:1:1`)

|     % |  Time | Samples | Callee                         | Location            |
| ----: | ----: | ------: | ------------------------------ | ------------------- |
| 99.9% | 3.99s |   3,207 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |    Time | Samples | Callee            | Location                                 |
| ----: | ------: | ------: | ----------------- | ---------------------------------------- |
| 92.9% |   3.71s |   2,980 | `chartLayouts`    | `workload.mjs:116:24`                    |
|  3.1% | 125.8ms |     100 | `call`            | `node_modules/d3/dist/d3.min.js:2:25192` |
|  1.4% |  55.5ms |      44 | `chartBreakdowns` | `workload.mjs:39:27`                     |
|  1.1% |  43.0ms |      35 | `join`            | `node_modules/d3/dist/d3.min.js:2:24162` |
|  0.7% |  26.3ms |      21 | `remove`          | `node_modules/d3/dist/d3.min.js:2:27077` |

##### `chartLayouts` (`workload.mjs:116:24`)

|     % |    Time | Samples | Callee | Location                                  |
| ----: | ------: | ------: | ------ | ----------------------------------------- |
| 57.6% |   2.13s |   1,704 | `h`    | `node_modules/d3/dist/d3.min.js:2:235656` |
| 34.5% |   1.28s |   1,039 | `d`    | `node_modules/d3/dist/d3.min.js:2:223550` |
|  4.2% | 154.5ms |     125 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709`  |
|  1.2% |  45.1ms |      36 | `join` | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  0.7% |  27.7ms |      22 | `from` | `node_modules/d3/dist/d3.min.js:2:94282`  |

##### `h` (`node_modules/d3/dist/d3.min.js:2:235656`)

|     % |  Time | Samples | Callee        | Location                                  |
| ----: | ----: | ------: | ------------- | ----------------------------------------- |
| 99.8% | 2.13s |   1,699 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235751` |
| <0.1% | 1.0ms |       1 | `a`           | `node_modules/d3/dist/d3.min.js:2:231054` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235751`)

|     % |    Time | Samples | Callee | Location                                  |
| ----: | ------: | ------: | ------ | ----------------------------------------- |
| 57.1% |   1.21s |     970 | `f`    | `node_modules/d3/dist/d3.min.js:2:233501` |
| 37.7% | 803.3ms |     640 | `a`    | `node_modules/d3/dist/d3.min.js:2:231054` |
|  0.6% |  12.4ms |      10 | `l`    | `node_modules/d3/dist/d3.min.js:2:232151` |
|  0.5% |  10.1ms |       8 | `g`    | `node_modules/d3/dist/d3.min.js:2:231215` |
|  0.2% |   5.1ms |       4 | `h`    | `node_modules/d3/dist/d3.min.js:2:233933` |

##### `d` (`node_modules/d3/dist/d3.min.js:2:223550`)

|     % |    Time | Samples | Callee        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 84.0% |   1.07s |     876 | `i`           | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 12.5% | 160.1ms |     127 | `h`           | `node_modules/d3/dist/d3.min.js:2:223199` |
|  3.0% |  38.8ms |      31 | `J`           | `node_modules/d3/dist/d3.min.js:2:8205`   |
|  0.4% |   5.1ms |       4 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:223701` |

##### `f` (`node_modules/d3/dist/d3.min.js:2:233501`)

|     % |    Time | Samples | Callee          | Location                                  |
| ----: | ------: | ------: | --------------- | ----------------------------------------- |
| 51.0% | 621.2ms |     495 | `Fc.visit`      | `node_modules/d3/dist/d3.min.js:2:105681` |
|  5.4% |  66.0ms |      53 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106049` |
|  5.1% |  61.8ms |      49 | `$c`            | `node_modules/d3/dist/d3.min.js:2:102050` |
|  0.3% |   3.8ms |       3 | `Fc.addAll`     | `node_modules/d3/dist/d3.min.js:2:103087` |
|  0.1% |   1.3ms |       1 | `l`             | `node_modules/d3/dist/d3.min.js:2:233696` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:76982`)

|     % |  Time | Samples | Callee | Location                                 |
| ----: | ----: | ------: | ------ | ---------------------------------------- |
| 99.9% | 1.07s |     875 | `o`    | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `i` (`node_modules/d3/dist/d3.min.js:2:76807`)

|      % |  Time | Samples | Callee        | Location                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 1.07s |     876 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982` |

##### `o` (`node_modules/d3/dist/d3.min.js:2:77004`)

|     % |  Time | Samples | Callee        | Location                                 |
| ----: | ----: | ------: | ------------- | ---------------------------------------- |
| 99.2% | 1.06s |     868 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |
|  0.1% | 1.3ms |       1 | `au`          | `node_modules/d3/dist/d3.min.js:2:79110` |
|  0.1% | 1.3ms |       1 | `p`           | `node_modules/d3/dist/d3.min.js:2:77576` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|    % |   Time | Samples | Callee | Location                                 |
| ---: | -----: | ------: | ------ | ---------------------------------------- |
| 8.6% | 92.2ms |      75 | `p`    | `node_modules/d3/dist/d3.min.js:2:77576` |
| 0.1% |  1.3ms |       1 | `au`   | `node_modules/d3/dist/d3.min.js:2:79110` |

##### `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105681`)

|     % |    Time | Samples | Callee | Location                                  |
| ----: | ------: | ------: | ------ | ----------------------------------------- |
| 61.9% | 581.2ms |     463 | `h`    | `node_modules/d3/dist/d3.min.js:2:233933` |
| 30.3% | 284.7ms |     226 | `g`    | `node_modules/d3/dist/d3.min.js:2:231215` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:231054`)

|     % |    Time | Samples | Callee          | Location                                  |
| ----: | ------: | ------: | --------------- | ----------------------------------------- |
| 39.6% | 318.1ms |     254 | `Fc.visit`      | `node_modules/d3/dist/d3.min.js:2:105681` |
| 10.5% |  84.3ms |      67 | `$c`            | `node_modules/d3/dist/d3.min.js:2:102050` |
|  7.4% |  59.2ms |      47 | `Fc.visitAfter` | `node_modules/d3/dist/d3.min.js:2:106049` |
|  0.3% |   2.5ms |       2 | `Fc.addAll`     | `node_modules/d3/dist/d3.min.js:2:103087` |

##### `attr` (`node_modules/d3/dist/d3.min.js:2:25709`)

|     % |    Time | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 59.6% | 143.0ms |     116 | `each`        | `node_modules/d3/dist/d3.min.js:2:25558` |
| 28.4% |  68.1ms |      54 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |
| 10.0% |  23.9ms |      19 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18042` |
|  1.0% |   2.5ms |       2 | `It`          | `node_modules/d3/dist/d3.min.js:2:16093` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`)

|     % |   Time | Samples | Callee        | Location                                  |
| ----: | -----: | ------: | ------------- | ----------------------------------------- |
| 40.5% | 74.4ms |      61 | `a`           | `node_modules/d3/dist/d3.min.js:2:244493` |
|  2.7% |  5.0ms |       4 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:13444`  |
|  2.1% |  3.8ms |       3 | `(anonymous)` | `workload.mjs:193:9`                      |
|  1.4% |  2.5ms |       2 | `f`           | `node_modules/d3/dist/d3.min.js:2:218226` |
|  0.7% |  1.3ms |       1 | `(anonymous)` | `workload.mjs:60:18`                      |

##### `each` (`node_modules/d3/dist/d3.min.js:2:25558`)

|     % |    Time | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 72.1% | 115.7ms |      94 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |
| 15.5% |  25.0ms |      20 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18042` |
|  9.5% |  15.2ms |      12 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:19664` |
|  0.8% |   1.3ms |       1 | `In`          | `node_modules/d3/dist/d3.min.js:2:20104` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:223199`)

|     % |    Time | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 95.3% | 152.5ms |     121 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:1144`  |
|  0.8% |   1.3ms |       1 | `fu`          | `node_modules/d3/dist/d3.min.js:2:79320` |
|  0.8% |   1.2ms |       1 | `lu`          | `node_modules/d3/dist/d3.min.js:2:79374` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:1144`)

|     % |   Time | Samples | Callee | Location                                |
| ----: | -----: | ------: | ------ | --------------------------------------- |
| 52.6% | 80.2ms |      64 | `p`    | `node_modules/d3/dist/d3.min.js:2:1697` |
| 46.6% | 71.0ms |      56 | `g`    | `node_modules/d3/dist/d3.min.js:2:1758` |

##### `$c` (`node_modules/d3/dist/d3.min.js:2:102050`)

|     % |    Time | Samples | Callee      | Location                                  |
| ----: | ------: | ------: | ----------- | ----------------------------------------- |
| 85.5% | 126.0ms |     100 | `Fc.addAll` | `node_modules/d3/dist/d3.min.js:2:103087` |
|  2.6% |   3.8ms |       3 | `Xc`        | `node_modules/d3/dist/d3.min.js:2:106643` |
|  1.7% |   2.5ms |       2 | `Ic`        | `node_modules/d3/dist/d3.min.js:2:102458` |
|  0.8% |   1.3ms |       1 | `Gc`        | `node_modules/d3/dist/d3.min.js:2:106669` |

##### `call` (`node_modules/d3/dist/d3.min.js:2:25192`)

|     % |   Time | Samples | Callee        | Location                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------- |
| 62.2% | 83.0ms |      66 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208` |
| 27.3% | 36.4ms |      29 | `(anonymous)` | `workload.mjs:201:13`                    |
| 10.5% | 14.0ms |      11 | `(anonymous)` | `workload.mjs:195:13`                    |

##### `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103087`)

|    % |  Time | Samples | Callee     | Location                                  |
| ---: | ----: | ------: | ---------- | ----------------------------------------- |
| 3.7% | 4.9ms |       4 | `kc`       | `node_modules/d3/dist/d3.min.js:2:101394` |
| 1.9% | 2.5ms |       2 | `Oc`       | `node_modules/d3/dist/d3.min.js:2:102489` |
| 1.9% | 2.5ms |       2 | `Gc`       | `node_modules/d3/dist/d3.min.js:2:106669` |
| 1.0% | 1.3ms |       1 | `Xc`       | `node_modules/d3/dist/d3.min.js:2:106643` |
| 0.9% | 1.3ms |       1 | `Fc.cover` | `node_modules/d3/dist/d3.min.js:2:103436` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `chartLayouts` (`workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32) ← `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 23.0% | 972.6ms |     792 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223550)                                                        |
| 13.7% | 581.2ms |     463 | `h` (`node_modules/d3/dist/d3.min.js:2:233933`) ← `Fc.visit` (2:105681) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                       |
| 11.0% | 464.1ms |     369 | `f` (`node_modules/d3/dist/d3.min.js:2:233501`) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                                                |
|  8.0% | 339.1ms |     270 | `a` (`node_modules/d3/dist/d3.min.js:2:231054`) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                                                |
|  6.7% | 284.7ms |     226 | `g` (`node_modules/d3/dist/d3.min.js:2:231215`) ← `Fc.visit` (2:105681) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                       |
|  1.9% |  79.1ms |      63 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235751`) ← `h` (2:235656)                                                                                                                 |
|  1.8% |  77.4ms |      63 | `p` (`node_modules/d3/dist/d3.min.js:2:77576`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `i` (2:76807) ← `d` (2:223550)                                        |
|  1.6% |  68.1ms |      54 | `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103087`) ← `$c` (2:102050) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                     |
|  1.5% |  65.5ms |      52 | `p` (`node_modules/d3/dist/d3.min.js:2:1697`) ← `(anonymous)` (2:1144) ← `h` (2:223199) ← `d` (2:223550)                                                                                   |
|  1.4% |  59.5ms |      47 | `g` (`node_modules/d3/dist/d3.min.js:2:1758`) ← `(anonymous)` (2:1144) ← `h` (2:223199) ← `d` (2:223550)                                                                                   |
|  1.1% |  45.5ms |      36 | `Fc.addAll` (`node_modules/d3/dist/d3.min.js:2:103087`) ← `$c` (2:102050) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                     |
|  1.0% |  40.3ms |      32 | `Fc.visitAfter` (`node_modules/d3/dist/d3.min.js:2:106049`) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                   |
|  0.9% |  40.0ms |      32 | `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105681`) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                        |
|  0.9% |  38.8ms |      31 | `J` (`node_modules/d3/dist/d3.min.js:2:8205`) ← `d` (2:223550)                                                                                                                             |
|  0.9% |  37.9ms |      30 | `u` (`node_modules/d3/dist/d3.min.js:2:231519`) ← `Fc.visitAfter` (2:106049) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                  |
|  0.9% |  37.6ms |      30 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:18176`) ← `each` (2:25558) ← `attr` (2:25709)                                                                                             |
|  0.8% |  33.5ms |      28 | `Fc.visit` (`node_modules/d3/dist/d3.min.js:2:105681`) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                                        |
|  0.7% |  30.0ms |      24 | `createElementNS` ← `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162)                        |
|  0.6% |  25.8ms |      21 | `l` (`node_modules/d3/dist/d3.min.js:2:233696`) ← `Fc.visitAfter` (2:106049) ← `f` (2:233501) ← `(anonymous)` (2:235751) ← `h` (2:235656)                                                  |
|  0.6% |  25.2ms |      20 | `Jh` (`node_modules/d3/dist/d3.min.js:2:131218`) ← `point` (2:131542) ← `Yf` (2:112811) ← `Lf` (2:112904) ← `a` (2:244493) ← `(anonymous)` (2:18176) ← `each` (2:25558) ← `attr` (2:25709) |

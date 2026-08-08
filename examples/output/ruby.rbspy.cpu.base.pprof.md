# Wall time profile

Took 1.33s over 133 samples (10.0ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| stdlib      | 66.4% | 885.6ms |      89 |
| third-party | 33.6% | 448.9ms |      44 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                 | Location    |
| ----: | ------: | ------: | ------------------------ | ----------- |
| 63.5% | 847.6ms |      85 | `(unknown) [c function]` | `(unknown)` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `(unknown) [c function]` (`(unknown)`)

|    % |   Time | Samples | Caller                   | Location    |
| ---: | -----: | ------: | ------------------------ | ----------- |
| 6.1% | 51.6ms |       5 | `(unknown) [c function]` | `(unknown)` |
| 0.9% |  7.9ms |       1 | `do_parse`               | `(eval)`    |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|      % |    Time | Samples | Function                 | Location                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% |   1.33s |     133 | `(unknown) [c function]` | `(unknown)`                              |
|  99.0% |   1.32s |     131 | `<main>`                 | `rubocop`                                |
|  14.6% | 194.2ms |      19 | `do_parse`               | `(eval)`                                 |
|   2.1% |  28.1ms |       3 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |
|   1.0% |  13.2ms |       2 | `(anonymous)`            | `<internal:gem_prelude>`                 |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(unknown) [c function]` (`(unknown)`)

|     % |    Time | Samples | Callee                   | Location    |
| ----: | ------: | ------: | ------------------------ | ----------- |
| 57.5% | 767.9ms |      76 | `(unknown) [c function]` | `(unknown)` |

##### `<main>` (`rubocop`)

|     % |   Time | Samples | Callee                   | Location                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------- |
| 97.9% |  1.29s |     128 | `(unknown) [c function]` | `(unknown)`                              |
|  2.1% | 28.1ms |       3 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `do_parse` (`(eval)`)

|      % |    Time | Samples | Callee                   | Location    |
| -----: | ------: | ------: | ------------------------ | ----------- |
| 100.0% | 194.2ms |      19 | `(unknown) [c function]` | `(unknown)` |

##### `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|     % |   Time | Samples | Callee                   | Location    |
| ----: | -----: | ------: | ------------------------ | ----------- |
| 69.8% | 19.6ms |       2 | `(unknown) [c function]` | `(unknown)` |

##### `(anonymous)` (`<internal:gem_prelude>`)

|      % |   Time | Samples | Callee                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% | 13.2ms |       2 | `(unknown) [c function]` | `(unknown)` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame. `…` stands for frames the entry filter hides.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.2% | 189.0ms |      19 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  6.8% |  90.4ms |       9 | `(unknown) [c function]` (`(unknown)`) ← `do_parse` (`(eval)`) ← … ← `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                       |
|  6.2% |  82.8ms |       8 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                                                     |
|  5.0% |  66.5ms |       7 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                             |
|  4.6% |  60.9ms |       6 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                              |
|  4.5% |  59.7ms |       6 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                    |
|  3.9% |  51.9ms |       5 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.8% |  51.0ms |       5 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.7% |  49.8ms |       5 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                       |
|  3.6% |  48.4ms |       5 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                            |
|  3.2% |  42.4ms |       4 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← `do_parse` (`(eval)`) ← … ← `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                        |
|  3.1% |  41.9ms |       4 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`) |
|  2.4% |  32.1ms |       3 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                               |
|  2.4% |  31.6ms |       3 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                      |
|  2.2% |  29.3ms |       3 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `do_parse` (`(eval)`) ← … ← `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                         |
|  2.2% |  28.9ms |       3 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |  20.3ms |       2 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |  19.9ms |       2 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                                                                                                                                                              |
|  1.4% |  18.6ms |       2 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `<main>` (`rubocop`)                                                                                                                                                                                                   |
|  1.0% |  13.2ms |       1 | `(unknown) [c function]` (`(unknown)`) ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← … ← `(unknown) [c function]` ← `(anonymous)` (`<internal:gem_prelude>`)                                                                                                                                                                                                                                                                                                                                                                                                               |

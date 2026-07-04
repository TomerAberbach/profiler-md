# Sampling profile

Took 1.33s over 133 samples (10.0ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| stdlib      | 66.4% | 885.6ms |      89 |
| third-party | 33.6% | 448.9ms |      44 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                 | Location  |
| ----: | ------: | ------: | ------------------------ | --------- |
| 63.5% | 847.6ms |      85 | `(unknown) [c function]` | (unknown) |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `(unknown) [c function]` ((unknown))

|    % |   Time | Samples | Caller                   | Location  |
| ---: | -----: | ------: | ------------------------ | --------- |
| 6.1% | 51.6ms |       5 | `(unknown) [c function]` | (unknown) |
| 0.9% |  7.9ms |       1 | `do_parse`               | (eval)    |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                 | Location                             |
| -----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 100.0% |   1.33s |     133 | `(unknown) [c function]` | (unknown)                            |
|  99.0% |   1.32s |     131 | `<main>`                 | usr/local/bin/rubocop                |
|  14.6% | 194.2ms |      19 | `do_parse`               | (eval)                               |
|   2.1% |  28.1ms |       3 | `activate_bin_path`      | usr/lib/ruby/vendor_ruby/rubygems.rb |
|   1.0% |  13.2ms |       2 | `<internal:gem_prelude>` | <internal:gem_prelude>               |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(unknown) [c function]` ((unknown))

|     % |    Time | Samples | Callee                   | Location  |
| ----: | ------: | ------: | ------------------------ | --------- |
| 57.5% | 767.9ms |      76 | `(unknown) [c function]` | (unknown) |

##### `<main>` (usr/local/bin/rubocop)

|     % |   Time | Samples | Callee                   | Location                             |
| ----: | -----: | ------: | ------------------------ | ------------------------------------ |
| 97.9% |  1.29s |     128 | `(unknown) [c function]` | (unknown)                            |
|  2.1% | 28.1ms |       3 | `activate_bin_path`      | usr/lib/ruby/vendor_ruby/rubygems.rb |

##### `do_parse` ((eval))

|      % |    Time | Samples | Callee                   | Location  |
| -----: | ------: | ------: | ------------------------ | --------- |
| 100.0% | 194.2ms |      19 | `(unknown) [c function]` | (unknown) |

##### `activate_bin_path` (usr/lib/ruby/vendor_ruby/rubygems.rb)

|     % |   Time | Samples | Callee                   | Location  |
| ----: | -----: | ------: | ------------------------ | --------- |
| 69.8% | 19.6ms |       2 | `(unknown) [c function]` | (unknown) |

##### `<internal:gem_prelude>` (<internal:gem_prelude>)

|      % |   Time | Samples | Callee                   | Location  |
| -----: | -----: | ------: | ------------------------ | --------- |
| 100.0% | 13.2ms |       2 | `(unknown) [c function]` | (unknown) |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(unknown) [c function]` ((unknown)) ← `<main>` (usr/local/bin/rubocop)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 14.2% | 189.0ms |      19 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  8.1% | 108.1ms |      11 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                              |
|  7.7% | 103.2ms |      10 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                           |
|  6.8% |  90.4ms |       9 | `(unknown) [c function]` ((unknown)) ← `do_parse` ((eval)) ← `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                         |
|  5.8% |  77.2ms |       8 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                   |
|  5.5% |  73.2ms |       7 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                        |
|  4.9% |  65.6ms |       6 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                       |
|  4.5% |  60.3ms |       6 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                |
|  4.4% |  59.2ms |       6 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                     |
|  3.9% |  51.9ms |       5 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.8% |  51.0ms |       5 | `(unknown) [c function]` ((unknown))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.8% |  50.9ms |       5 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                             |
|  3.2% |  42.4ms |       4 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `do_parse` ((eval)) ← `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                              |
|  2.5% |  32.8ms |       3 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` |
|  2.4% |  31.9ms |       3 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                               |
|  2.2% |  29.3ms |       3 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `do_parse` ((eval)) ← `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                   |
|  2.2% |  28.9ms |       3 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.2% |  28.7ms |       3 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                         |
|  1.5% |  19.4ms |       2 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                            |
|  1.4% |  18.9ms |       2 | `(unknown) [c function]` ((unknown)) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                  |

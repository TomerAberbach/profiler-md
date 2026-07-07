# Sampling profile

Collected 131 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| stdlib      | 72.5% |      95 |
| third-party | 27.5% |      36 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 67.9% |      89 | `(unknown) [c function]` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(unknown) [c function]` (`<unknown>`)

|    % | Samples | Caller                   | Location    |
| ---: | ------: | ------------------------ | ----------- |
| 3.4% |       3 | `(unknown) [c function]` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                 | Location                               |
| -----: | ------: | ------------------------ | -------------------------------------- |
| 100.0% |     131 | `(unknown) [c function]` | `<unknown>`                            |
|  98.5% |     129 | `<main>`                 | `usr/local/bin/rubocop`                |
|   1.5% |       2 | `activate_bin_path`      | `usr/lib/ruby/vendor_ruby/rubygems.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 59.5% |      78 | `(unknown) [c function]` | `<unknown>` |

##### `<main>` (`usr/local/bin/rubocop`)

|     % | Samples | Callee                   | Location                               |
| ----: | ------: | ------------------------ | -------------------------------------- |
| 98.4% |     127 | `(unknown) [c function]` | `<unknown>`                            |
|  1.6% |       2 | `activate_bin_path`      | `usr/lib/ruby/vendor_ruby/rubygems.rb` |

##### `activate_bin_path` (`usr/lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `(unknown) [c function]` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `(unknown) [c function]` ← `<main>` (`usr/local/bin/rubocop`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.3% |      20 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 11.5% |      15 | `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  9.2% |      12 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                     |
|  8.4% |      11 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.1% |       8 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                               |
|  5.3% |       7 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  5.3% |       7 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                              |
|  4.6% |       6 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                    |
|  4.6% |       6 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.8% |       5 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.1% |       4 | `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  3.1% |       4 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                |
|  2.3% |       3 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                          |
|  2.3% |       3 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                   |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                       |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                  |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                         |
|  0.8% |       1 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` |

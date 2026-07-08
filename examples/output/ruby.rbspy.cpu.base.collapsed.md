# Sampling profile

Collected 133 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| stdlib      | 69.9% |      93 |
| third-party | 30.1% |      40 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 63.9% |      85 | `(unknown) [c function]` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(unknown) [c function]` (`<unknown>`)

|    % | Samples | Caller                   | Location    |
| ---: | ------: | ------------------------ | ----------- |
| 5.9% |       5 | `(unknown) [c function]` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                 | Location                                 |
| -----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% |     133 | `(unknown) [c function]` | `<unknown>`                              |
|  98.5% |     131 | `<main>`                 | `rubocop`                                |
|   2.3% |       3 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 57.1% |      76 | `(unknown) [c function]` | `<unknown>` |

##### `<main>` (`rubocop`)

|     % | Samples | Callee                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 97.7% |     128 | `(unknown) [c function]` | `<unknown>`                              |
|  2.3% |       3 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 66.7% |       2 | `(unknown) [c function]` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `<main>` (`rubocop`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.0% |      20 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 14.3% |      19 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  8.3% |      11 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                    |
|  8.3% |      11 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.8% |       9 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                           |
|  6.0% |       8 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                         |
|  5.3% |       7 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                              |
|  4.5% |       6 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                             |
|  3.8% |       5 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.8% |       5 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                   |
|  3.8% |       5 | `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.0% |       4 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.3% |       3 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                       |
|  2.3% |       3 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                               |
|  2.3% |       3 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                     |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                        |
|  1.5% |       2 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                  |
|  0.8% |       1 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)                                                                                                                                                                                                                                                                                                                          |
|  0.8% |       1 | `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` |

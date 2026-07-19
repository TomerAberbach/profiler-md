# Wall time profile

Took 1.31s over 131 samples (10.0ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| stdlib      | 69.8% | 917.7ms |      92 |
| third-party | 30.2% | 396.7ms |      39 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                 | Location    |
| ----: | ------: | ------: | ------------------------ | ----------- |
| 67.5% | 887.6ms |      89 | `(unknown) [c function]` | `(unknown)` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `(unknown) [c function]` (`(unknown)`)

|     % |   Time | Samples | Caller               | Location                                                                                               |
| ----: | -----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------ |
| 10.6% | 94.4ms |      10 | `<top (required)>`   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                               |
|  9.5% | 83.9ms |       8 | `require`            | `<internal:/usr/lib/ruby/vendor_ruby/rubygems/core_ext/kernel_require.rb>`                             |
|  5.2% | 46.5ms |       5 | `slice`              | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                 |
|  4.7% | 41.5ms |       4 | `move_pos`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                          |
|  4.5% | 39.6ms |       4 | `<module:Interface>` | `/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|      % |    Time | Samples | Function                   | Location                                                              |
| -----: | ------: | ------: | -------------------------- | --------------------------------------------------------------------- |
| 100.0% |   1.31s |     131 | `(unknown) [c function]`   | `(unknown)`                                                           |
|  99.1% |   1.30s |     129 | `<main>`                   | `rubocop`                                                             |
|  13.9% | 182.9ms |      18 | `do_parse`                 | `(eval)`                                                              |
|   1.6% |  20.8ms |       2 | `activate_bin_path`        | `../../lib/ruby/vendor_ruby/rubygems.rb`                              |
|   1.5% |  20.1ms |       2 | `tap`                      | `<internal:kernel>`                                                   |
|   0.9% |  11.6ms |       2 | `(anonymous)`              | `<internal:gem_prelude>`                                              |
|   0.8% |  10.3ms |       1 | `block in dir`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb` |
|   0.7% |   9.7ms |       1 | `block in execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`          |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `(unknown) [c function]` (`(unknown)`)

|     % |    Time | Samples | Callee                              | Location                                                        |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------------------------------- |
| 97.5% |   1.28s |     127 | `<top (required)>`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`           |
| 60.4% | 794.1ms |      78 | `(unknown) [c function]`            | `(unknown)`                                                     |
| 54.6% | 717.5ms |      71 | `block in each_inspected_file`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
| 41.4% | 544.2ms |      54 | `block in inspect_file`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
| 41.4% | 544.2ms |      54 | `block in iterate_until_no_changes` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `<main>` (`rubocop`)

|     % |   Time | Samples | Callee                   | Location                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------- |
| 98.4% |  1.28s |     127 | `(unknown) [c function]` | `(unknown)`                              |
|  1.6% | 20.8ms |       2 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `do_parse` (`(eval)`)

|      % |    Time | Samples | Callee                   | Location    |
| -----: | ------: | ------: | ------------------------ | ----------- |
| 100.0% | 182.9ms |      18 | `(unknown) [c function]` | `(unknown)` |

##### `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % |   Time | Samples | Callee                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% | 20.8ms |       2 | `(unknown) [c function]` | `(unknown)` |

##### `tap` (`<internal:kernel>`)

|     % |   Time | Samples | Callee                     | Location                                                              |
| ----: | -----: | ------: | -------------------------- | --------------------------------------------------------------------- |
| 51.6% | 10.3ms |       1 | `block in dir`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb` |
| 48.4% |  9.7ms |       1 | `block in execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`          |

##### `(anonymous)` (`<internal:gem_prelude>`)

|      % |   Time | Samples | Callee                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% | 11.6ms |       2 | `(unknown) [c function]` | `(unknown)` |

##### `block in dir` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`)

|      % |   Time | Samples | Callee   | Location                           |
| -----: | -----: | ------: | -------- | ---------------------------------- |
| 100.0% | 10.3ms |       1 | `mkpath` | `../../lib/ruby/3.1.0/pathname.rb` |

##### `block in execute_runners` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % |  Time | Samples | Callee               | Location                                                     |
| -----: | ----: | ------: | -------------------- | ------------------------------------------------------------ |
| 100.0% | 9.7ms |       1 | `suggest_extensions` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `(unknown) [c function]` (`(unknown)`) ← `<main>` (`rubocop`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% | 134.9ms |      14 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  9.3% | 122.6ms |      12 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                |
|  9.2% | 120.4ms |      12 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                   |
|  6.9% |  90.9ms |       9 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                           |
|  6.0% |  79.5ms |       8 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                             |
|  5.8% |  75.6ms |       7 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                            |
|  5.6% |  73.1ms |       7 | `(unknown) [c function]` (`(unknown)`) ← `do_parse` (`(eval)`) ← `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                          |
|  4.4% |  58.4ms |       6 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                  |
|  4.4% |  57.4ms |       6 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `do_parse` (`(eval)`) ← `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                               |
|  4.1% |  53.5ms |       5 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  3.8% |  50.3ms |       5 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                          |
|  2.9% |  38.7ms |       4 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                              |
|  2.4% |  30.9ms |       3 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                        |
|  2.3% |  30.1ms |       3 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                               |
|  2.2% |  28.7ms |       3 | `(unknown) [c function]` (`(unknown)`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.8% |  23.3ms |       2 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                    |
|  1.6% |  21.6ms |       2 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `do_parse` (`(eval)`) ← `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                    |
|  1.6% |  21.6ms |       2 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]`                                                       |
|  1.6% |  21.4ms |       2 | `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` |
|  1.6% |  20.6ms |       2 | `(unknown) [c function]` (`(unknown)`) ← `do_parse` (`(eval)`) ← `(unknown) [c function]` (`(unknown)`) ← `(unknown) [c function]` ← `(unknown) [c function]`                                                                                                                                                                                                                                                                                                                                                     |

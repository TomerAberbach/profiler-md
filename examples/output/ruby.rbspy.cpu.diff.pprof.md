# Wall time profile diff

Took 1.33s → 1.31s (-20.04ms, -1.5%) over 133 samples → 131 samples (10.0ms per sample).

| Category         | Change |    Delta |             % |              Time | Samples |
| ---------------- | -----: | -------: | ------------: | ----------------: | ------: |
| Native           |  +4.7% | +39.95ms | 63.5% → 67.5% | 847.6ms → 887.6ms | 85 → 89 |
| Third-party      | -11.6% | -52.15ms | 33.6% → 30.2% | 448.9ms → 396.7ms | 44 → 39 |
| Standard library | -20.7% |  -7.84ms |   2.8% → 2.3% |   37.9ms → 30.1ms |   4 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

| Change |    Delta |             % |              Time | Samples | Function                 | Location    |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------ | ----------- |
|  +4.7% | +39.95ms | 63.5% → 67.5% | 847.6ms → 887.6ms | 85 → 89 | `(unknown) [c function]` | `(unknown)` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |    Delta |           % |         Time | Samples | Function                   | Location                                                              |
| -----: | -------: | ----------: | -----------: | ------: | -------------------------- | --------------------------------------------------------------------- |
|    new | +20.05ms | 0.0% → 1.5% | 0ms → 20.1ms |   0 → 2 | `tap`                      | `<internal:kernel>`                                                   |
|    new | +10.34ms | 0.0% → 0.8% | 0ms → 10.3ms |   0 → 1 | `block in dir`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb` |
|    new |  +9.71ms | 0.0% → 0.7% |  0ms → 9.7ms |   0 → 1 | `block in execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`          |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

| Change |    Delta |             % |              Time |   Samples | Function                 | Location                                 |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------ | ---------------------------------------- |
|  -1.5% | -20.04ms |        100.0% |     1.33s → 1.31s | 133 → 131 | `(unknown) [c function]` | `(unknown)`                              |
|  -1.4% | -18.50ms | 99.0% → 99.1% |     1.32s → 1.30s | 131 → 129 | `<main>`                 | `rubocop`                                |
|  -5.9% | -11.37ms | 14.6% → 13.9% | 194.2ms → 182.9ms |   19 → 18 | `do_parse`               | `(eval)`                                 |
| -25.9% |  -7.28ms |   2.1% → 1.6% |   28.1ms → 20.8ms |     3 → 2 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |
| -11.7% |  -1.54ms |   1.0% → 0.9% |   13.2ms → 11.6ms |         2 | `(anonymous)`            | `<internal:gem_prelude>`                 |

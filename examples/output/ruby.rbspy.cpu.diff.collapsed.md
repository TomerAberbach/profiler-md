# Sampling profile diff

133 samples → 131 samples (-2 samples, -1.5%).

| Category    | Change | Delta |             % | Samples |
| ----------- | -----: | ----: | ------------: | ------: |
| stdlib      |  +2.2% |    +2 | 69.9% → 72.5% | 93 → 95 |
| third-party | -10.0% |    -4 | 30.1% → 27.5% | 40 → 36 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |             % | Samples | Function                 | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|  +4.7% |    +4 | 63.9% → 67.9% | 85 → 89 | `(unknown) [c function]` | `<unknown>` |

### Total samples

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |           % |   Samples | Function                 | Location                                 |
| -----: | ----: | ----------: | --------: | ------------------------ | ---------------------------------------- |
|  -1.5% |    -2 |      100.0% | 133 → 131 | `(unknown) [c function]` | `<unknown>`                              |
|  -1.5% |    -2 |       98.5% | 131 → 129 | `<main>`                 | `rubocop`                                |
| -33.3% |    -1 | 2.3% → 1.5% |     3 → 2 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |

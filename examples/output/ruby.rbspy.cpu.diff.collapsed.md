# Sampling profile diff

Collected 133 samples → 131 samples (-2 samples, -1.5%).

| Category         | Change | Delta |             % | Samples |
| ---------------- | -----: | ----: | ------------: | ------: |
| Native           |  +4.7% |    +4 | 63.9% → 67.9% | 85 → 89 |
| Third-party      | -10.0% |    -4 | 30.1% → 27.5% | 40 → 36 |
| Standard library | -25.0% |    -1 |   3.0% → 2.3% |   4 → 3 |
| Unknown          | -25.0% |    -1 |   3.0% → 2.3% |   4 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Native

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

##### Native

| Change | Delta |      % |   Samples | Function                 | Location    |
| -----: | ----: | -----: | --------: | ------------------------ | ----------- |
|  -1.5% |    -2 | 100.0% | 133 → 131 | `(unknown) [c function]` | `<unknown>` |

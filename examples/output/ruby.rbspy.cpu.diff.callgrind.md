# Sampling profile diff

129 samples → 126 samples (-3 samples, -2.3%).

| Category    | Change |  Delta |             % |         Samples |
| ----------- | -----: | -----: | ------------: | --------------: |
| third-party |  -3.1% | -3.154 | 79.2% → 78.6% | 102.15 → 98.996 |
| stdlib      |  +0.6% | +0.154 | 20.8% → 21.4% |  26.85 → 27.004 |

## Hottest functions

### Total samples

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function            | Location                                              |
| -----: | ----: | ------------: | --------: | ------------------- | ----------------------------------------------------- |
|  -2.4% |    -3 | 96.9% → 96.8% | 125 → 122 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  -2.4% |    -3 |         98.4% | 127 → 124 | `<main>`            | `rubocop`                                             |
|    ~0% |    -0 |          1.6% |         2 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

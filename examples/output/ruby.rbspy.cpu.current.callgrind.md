# Sampling profile

Collected 126 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| third-party | 78.6% |  98.996 |
| stdlib      | 21.4% |  27.004 |

## Hottest functions

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function            | Location                                              |
| ----: | ------: | ------------------- | ----------------------------------------------------- |
| 98.4% |     124 | `<main>`            | `rubocop`                                             |
| 96.8% |     122 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<main>` (`rubocop`)

|     % | Samples | Callee              | Location                                              |
| ----: | ------: | ------------------- | ----------------------------------------------------- |
| 98.4% |     122 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `<main>` (`rubocop`)

|     % | Samples | Call stack                                                                 |
| ----: | ------: | -------------------------------------------------------------------------- |
| 96.8% |     122 | `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) |
|  1.6% |       2 | `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)             |

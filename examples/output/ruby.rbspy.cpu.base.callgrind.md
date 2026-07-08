# Sampling profile

Collected 129 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| third-party | 79.2% |  102.15 |
| stdlib      | 20.8% |   26.85 |

## Hottest functions

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function            | Location                                              |
| ----: | ------: | ------------------- | ----------------------------------------------------- |
| 98.4% |     127 | `<main>`            | `rubocop`                                             |
| 96.9% |     125 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<main>` (`rubocop`)

|     % | Samples | Callee              | Location                                              |
| ----: | ------: | ------------------- | ----------------------------------------------------- |
| 98.4% |     125 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `<main>` (`rubocop`)

|     % | Samples | Call stack                                                                 |
| ----: | ------: | -------------------------------------------------------------------------- |
| 96.9% |     125 | `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) |
|  1.6% |       2 | `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)             |

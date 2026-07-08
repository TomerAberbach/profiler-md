# Sampling profile

Collected 126 samples.

| Category    |     % | Samples |
| ----------- | ----: | ------: |
| third-party | 78.6% |      99 |
| stdlib      | 21.4% |      27 |

## Hottest functions

### Total samples

Functions ranked by total samples collected in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function            | Location                                              |
| ----: | ------: | ------------------- | ----------------------------------------------------- |
| 98.4% |     124 | `<main>`            | `rubocop`                                             |
| 96.8% |     122 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

#### Callers

Callers ranked by the samples collected in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |     122 |     1 | `<main>` | `rubocop` |

##### `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |       2 |     1 | `<main>` | `rubocop` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`rubocop`)

|     % | Samples | Calls | Callee              | Location                                              |
| ----: | ------: | ----: | ------------------- | ----------------------------------------------------- |
| 98.4% |     122 |     1 | `<top (required)>`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |
|  1.6% |       2 |     1 | `activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`              |

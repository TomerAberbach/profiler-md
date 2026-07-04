# CPU profile

Took 4.27s over 4,275 samples (1.0ms per sample).

| Category    |     % |  Time | Samples |
| ----------- | ----: | ----: | ------: |
| third-party | 53.5% | 2.28s |   2,287 |
| stdlib      | 46.5% | 1.98s |   1,988 |

## Hottest functions

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                             | Location                                                                                                                                   |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% |   4.27s |   4,275 | `json_bench::workload`                               | `profile.rs`                                                                                                                               |
| 100.0% |   4.27s |   4,275 | `json_bench::main`                                   | `profile.rs`                                                                                                                               |
|  49.8% |   2.13s |   2,130 | `serde_json::de::from_str`                           | `/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs`  |
|  46.2% |   1.97s |   1,973 | `core::ptr::drop_in_place<serde_json::value::Value>` | `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`                                                              |
|   4.0% | 172.0ms |     172 | `serde_json::ser::to_string`                         | `/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `json_bench::workload` (`profile.rs`)

|     % |    Time | Samples | Callee                                               | Location                                                                                                                                   |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 49.8% |   2.13s |   2,130 | `serde_json::de::from_str`                           | `/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs`  |
| 46.2% |   1.97s |   1,973 | `core::ptr::drop_in_place<serde_json::value::Value>` | `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`                                                              |
|  4.0% | 172.0ms |     172 | `serde_json::ser::to_string`                         | `/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs` |

##### `json_bench::main` (`profile.rs`)

|      % |  Time | Samples | Callee                 | Location     |
| -----: | ----: | ------: | ---------------------- | ------------ |
| 100.0% | 4.27s |   4,275 | `json_bench::workload` | `profile.rs` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `json_bench::workload` (`profile.rs`) ← `json_bench::main`

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 49.8% |   2.13s |   2,130 | `serde_json::de::from_str` (`/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs`)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 24.4% |   1.04s |   1,041 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                      |
| 12.3% | 525.0ms |     525 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                             |
|  5.6% | 240.0ms |     240 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                                                                                                                                           |
|  4.0% | 172.0ms |     172 | `serde_json::ser::to_string` (`/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs`)                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.5% | 148.0ms |     148 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                                                                                    |
|  0.2% |   9.0ms |       9 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                               |
|  0.1% |   4.0ms |       4 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                        |
|  0.1% |   3.0ms |       3 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` |
| <0.1% |   2.0ms |       2 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |   1.0ms |       1 | `core::ptr::drop_in_place<serde_json::value::Value>` (`/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`) ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                                                                                                                                                                                                  |

# CPU profile

Took 4.36s over 4,363 samples (1.0ms per sample).

| Category    |     % |  Time | Samples |
| ----------- | ----: | ----: | ------: |
| third-party | 53.0% | 2.31s |   2,312 |
| stdlib      | 47.0% | 2.05s |   2,051 |

## Hottest functions

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                             | Location                                                                                                                                |
| -----: | ------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |   4.36s |   4,363 | `json_bench::workload`                               | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs                                         |
| 100.0% |   4.36s |   4,363 | `json_bench::main`                                   | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs                                         |
|  50.1% |   2.18s |   2,186 | `serde_json::de::from_str`                           | tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs  |
|  45.6% |   1.98s |   1,988 | `core::ptr::drop_in_place<serde_json::value::Value>` | rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs                                                              |
|   4.3% | 189.0ms |     189 | `serde_json::ser::to_string`                         | tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `json_bench::workload` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs)

|     % |    Time | Samples | Callee                                               | Location                                                                                                                                |
| ----: | ------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 50.1% |   2.18s |   2,186 | `serde_json::de::from_str`                           | tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs  |
| 45.6% |   1.98s |   1,988 | `core::ptr::drop_in_place<serde_json::value::Value>` | rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs                                                              |
|  4.3% | 189.0ms |     189 | `serde_json::ser::to_string`                         | tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs |

##### `json_bench::main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs)

|      % |  Time | Samples | Callee                 | Location                                                                                        |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 4.36s |   4,363 | `json_bench::workload` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `json_bench::workload` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs) ← `json_bench::main`

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.1% |   2.18s |   2,186 | `serde_json::de::from_str` (tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 30.2% |   1.31s |   1,318 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                      |
|  6.8% | 298.0ms |     298 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                                                                                                                                           |
|  4.3% | 189.0ms |     189 | `serde_json::ser::to_string` (tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs)                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  4.0% | 173.0ms |     173 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                             |
|  4.0% | 173.0ms |     173 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                                                                                    |
|  0.2% |   8.0ms |       8 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                        |
|  0.2% |   8.0ms |       8 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                               |
|  0.1% |   4.0ms |       4 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` ← `core::ptr::drop_in_place<serde_json::value::Value>` |
|  0.1% |   4.0ms |       4 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |   2.0ms |       2 | `core::ptr::drop_in_place<serde_json::value::Value>` (rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs) ← `core::ptr::drop_in_place<serde_json::value::Value>`                                                                                                                                                                                                                                                                                                                                                                                                  |

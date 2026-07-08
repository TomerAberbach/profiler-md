# CPU profile diff

Took 4.27s → 4.36s (+88.00ms, +2.1%) over 4,275 samples → 4,363 samples (1.0ms per sample).

| Category    | Change |    Delta |             % |          Time |       Samples |
| ----------- | -----: | -------: | ------------: | ------------: | ------------: |
| third-party |  +1.1% | +25.00ms | 53.5% → 53.0% | 2.28s → 2.31s | 2,287 → 2,312 |
| stdlib      |  +3.2% | +63.00ms | 46.5% → 47.0% | 1.98s → 2.05s | 1,988 → 2,051 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |       Samples | Function                                             | Location                                                                                                                                   |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
|  +2.1% | +88.00ms |        100.0% |     4.27s → 4.36s | 4,275 → 4,363 | `json_bench::workload`                               | `profile.rs`                                                                                                                               |
|  +2.1% | +88.00ms |        100.0% |     4.27s → 4.36s | 4,275 → 4,363 | `json_bench::main`                                   | `profile.rs`                                                                                                                               |
|  +2.6% | +56.00ms | 49.8% → 50.1% |     2.13s → 2.18s | 2,130 → 2,186 | `serde_json::de::from_str`                           | `/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs`  |
|  +9.9% | +17.00ms |   4.0% → 4.3% | 172.0ms → 189.0ms |     172 → 189 | `serde_json::ser::to_string`                         | `/tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs` |
|  +0.8% | +15.00ms | 46.2% → 45.6% |     1.97s → 1.98s | 1,973 → 1,988 | `core::ptr::drop_in_place<serde_json::value::Value>` | `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs`                                                              |

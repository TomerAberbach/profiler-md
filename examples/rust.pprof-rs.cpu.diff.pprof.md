# CPU profile diff

Took 4.27s → 4.36s (+0.09s, +2.1%) over 237 samples → 278 samples (18.0ms → 15.7ms per sample).

| Category    | Change |   Delta |             % |          Time |   Samples |
| ----------- | -----: | ------: | ------------: | ------------: | --------: |
| third-party |  +1.1% | +25.0ms | 53.5% → 53.0% | 2.28s → 2.31s | 134 → 140 |
| stdlib      |  +3.2% | +63.0ms | 46.5% → 47.0% | 1.98s → 2.05s | 103 → 138 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |   Delta |             % |              Time |   Samples | Function                                             | Location                                                                                                                                |
| -----: | ------: | ------------: | ----------------: | --------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
|  +2.1% | +88.0ms |        100.0% |     4.27s → 4.36s | 237 → 278 | `json_bench::workload`                               | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs                                         |
|  +2.1% | +88.0ms |        100.0% |     4.27s → 4.36s | 237 → 278 | `json_bench::main`                                   | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/rust/profile/src/profile.rs                                         |
|  +2.6% | +56.0ms | 49.8% → 50.1% |     2.13s → 2.18s | 121 → 129 | `serde_json::de::from_str`                           | tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs  |
|  +9.9% | +17.0ms |   4.0% → 4.3% | 172.0ms → 189.0ms |   22 → 18 | `serde_json::ser::to_string`                         | tmp/nix-shell.uf1Gw1/profiler-md-fixtures.nUom3J/cargo-home/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/ser.rs |
|  +0.8% | +15.0ms | 46.2% → 45.6% |     1.97s → 1.98s |  94 → 131 | `core::ptr::drop_in_place<serde_json::value::Value>` | rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/core/src/ptr/mod.rs                                                              |

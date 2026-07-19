# Contention profile diff

Blocked 155.8ms → 159.9ms (+4.09ms, +2.6%) over 5,028 samples → 4,990 samples (31.0µs → 32.0µs per sample).

| Category | Change |   Delta |      % |              Time |       Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------------: |
| stdlib   |  +2.6% | +4.09ms | 100.0% | 155.8ms → 159.9ms | 5,028 → 4,990 |

Hidden functions account for 100.0% of time blocked, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

| Change |   Delta |     % |              Time |       Samples | Function         | Location                                                                                         |
| -----: | ------: | ----: | ----------------: | ------------: | ---------------- | ------------------------------------------------------------------------------------------------ |
|  +2.6% | +3.69ms | 89.6% | 139.6ms → 143.3ms | 4,344 → 4,249 | `runtime.unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |           % |              Time |       Samples | Function                  | Location                                                                                         |
| -----: | ------: | ----------: | ----------------: | ------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  +2.6% | +3.69ms |       89.6% | 139.6ms → 143.3ms | 4,344 → 4,249 | `runtime.unlock`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  +3.9% | +0.08ms | 1.3% → 1.4% |     2.1ms → 2.2ms |     349 → 390 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |            % |          Time |   Samples | Function                           | Location                                                                                         |
| ------: | ------: | -----------: | ------------: | --------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -11.0% | -0.16ms |  0.9% → 0.8% | 1.5ms → 1.3ms | 197 → 192 | `encoding/json.Marshal`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|   -2.2% | -0.08ms |  2.3% → 2.2% | 3.6ms → 3.5ms | 546 → 582 | `main.workload.func1`              | `profile.go:25`                                                                                  |
| removed | -4.08µs | <0.1% → 0.0% |   4.1µs → 0ms |     1 → 0 | `runtime/pprof.(*Profile).WriteTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`  |
| removed | -4.08µs | <0.1% → 0.0% |   4.1µs → 0ms |     1 → 0 | `main.writeProfile`                | `profile.go:46`                                                                                  |
| removed | -4.08µs | <0.1% → 0.0% |   4.1µs → 0ms |     1 → 0 | `main.main`                        | `profile.go:61`                                                                                  |

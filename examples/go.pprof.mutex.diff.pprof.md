# Contention profile diff

Blocked 155.8ms → 159.9ms (+4.1ms, +2.6%) over 255 samples → 263 samples (611.1µs → 608.0µs per sample).

| Category | Change |  Delta |      % |              Time |   Samples |
| -------- | -----: | -----: | -----: | ----------------: | --------: |
| stdlib   |  +2.6% | +4.1ms | 100.0% | 155.8ms → 159.9ms | 255 → 263 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |  Delta |           % |          Time |   Samples | Function                  | Location                                                                                      |
| -----: | -----: | ----------: | ------------: | --------: | ------------------------- | --------------------------------------------------------------------------------------------- |
|  +3.9% | +0.1ms | 1.3% → 1.4% | 2.1ms → 2.2ms | 106 → 116 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

#### Progressions

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |  Delta |            % |          Time |   Samples | Function                           | Location                                                                                      |
| ------: | -----: | -----------: | ------------: | --------: | ---------------------------------- | --------------------------------------------------------------------------------------------- |
|  -11.0% | -0.2ms |  0.9% → 0.8% | 1.5ms → 1.3ms |   70 → 72 | `encoding/json.Marshal`            | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|   -2.2% | -0.1ms |  2.3% → 2.2% | 3.6ms → 3.5ms | 176 → 188 | `main.workload.func1`              | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
| removed | -4.1µs | <0.1% → 0.0% |   4.1µs → 0ms |     1 → 0 | `runtime/pprof.(*Profile).WriteTo` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403  |
| removed | -4.1µs | <0.1% → 0.0% |   4.1µs → 0ms |     1 → 0 | `main.writeProfile`                | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46          |
| removed | -4.1µs | <0.1% → 0.0% |   4.1µs → 0ms |     1 → 0 | `main.main`                        | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61          |

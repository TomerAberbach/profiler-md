# Contention profile diff

Blocked 1.41s → 1.40s (-0.01s, -0.3%) over 5 samples → 3 samples (282.7ms → 470.0ms per sample).

| Category | Change |  Delta |      % |          Time | Samples |
| -------- | -----: | -----: | -----: | ------------: | ------: |
| stdlib   |  -0.3% | -3.9ms | 100.0% | 1.41s → 1.40s |   5 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

| Change |   Delta |             % |          Time | Samples | Function                 | Location                                                                                |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------ | --------------------------------------------------------------------------------------- |
|  +2.7% | +34.6ms | 89.7% → 92.4% | 1.26s → 1.30s |       1 | `sync.(*WaitGroup).Wait` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|  Change |   Delta |             % |           Time | Samples | Function                  | Location                                                                                      |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
|   +2.7% | +34.6ms | 89.7% → 92.4% |  1.26s → 1.30s |       1 | `sync.(*WaitGroup).Wait`  | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160       |
|   +2.7% | +34.6ms | 89.7% → 92.4% |  1.26s → 1.30s |       1 | `main.workload`           | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:16          |
| +117.6% |  +7.8µs |         <0.1% | 6.6µs → 14.4µs |       1 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |            % |              Time | Samples | Function                       | Location                                                                                      |
| ------: | ------: | -----------: | ----------------: | ------: | ------------------------------ | --------------------------------------------------------------------------------------------- |
|  -26.5% | -38.4ms | 10.3% → 7.6% | 145.1ms → 106.7ms |       1 | `runtime/pprof.StopCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950  |
|   -0.3% |  -3.8ms |       100.0% |     1.41s → 1.40s |       2 | `main.main`                    | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61          |
| removed | -30.9µs | <0.1% → 0.0% |      30.9µs → 0ms |   2 → 0 | `encoding/json.Marshal`        | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  -61.6% | -23.1µs |        <0.1% |   37.5µs → 14.4µs |   3 → 1 | `main.workload.func1`          | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |

# Contention profile

Blocked 1.41s over 5 samples (282.7ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 1.41s |       5 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |  Time | Samples | Function                 | Location                                                                                |
| ----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------- |
| 89.7% | 1.26s |       1 | `sync.(*WaitGroup).Wait` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |

#### Lines

Lines ranked by contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160)

|      % |  Time | Samples | Location                                                                                |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% | 1.26s |       1 | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `sync.(*WaitGroup).Wait` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160)

|      % |  Time | Samples | Caller          | Location                                                                             |
| -----: | ----: | ------: | --------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 1.26s |       1 | `main.workload` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:16 |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|      % |    Time | Samples | Function                       | Location                                                                                      |
| -----: | ------: | ------: | ------------------------------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   1.41s |       2 | `main.main`                    | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61          |
|  89.7% |   1.26s |       1 | `sync.(*WaitGroup).Wait`       | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160       |
|  89.7% |   1.26s |       1 | `main.workload`                | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:16          |
|  10.3% | 145.1ms |       1 | `runtime/pprof.StopCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950  |
|  <0.1% |  37.5µs |       3 | `main.workload.func1`          | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
|  <0.1% |  30.9µs |       2 | `encoding/json.Marshal`        | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  <0.1% |   6.6µs |       1 | `encoding/json.Unmarshal`      | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)

|     % |    Time | Samples | Callee                         | Location                                                                                     |
| ----: | ------: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 89.7% |   1.26s |       1 | `main.workload`                | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:16         |
| 10.3% | 145.1ms |       1 | `runtime/pprof.StopCPUProfile` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950 |

##### `main.workload` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:16)

|      % |  Time | Samples | Callee                   | Location                                                                                |
| -----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------- |
| 100.0% | 1.26s |       1 | `sync.(*WaitGroup).Wait` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |

##### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |   Time | Samples | Callee                    | Location                                                                                      |
| ----: | -----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 82.3% | 30.9µs |       2 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 17.7% |  6.6µs |       1 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89.7% |   1.26s |       1 | `sync.(*WaitGroup).Wait` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160) ← `main.workload` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:16) ← `main.main` (61) |
| 10.3% | 145.1ms |       1 | `runtime/pprof.StopCPUProfile` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950) ← `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)             |
| <0.1% |  30.9µs |       2 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)         |
| <0.1% |   6.6µs |       1 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)       |

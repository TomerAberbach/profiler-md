# Contention profile

Blocked 155.8ms over 5,028 samples (31.0µs per sample).

| Category |      % |    Time | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 155.8ms |   5,028 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Samples | Function                           | Location                                                                                      |
| ----: | ----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------------- |
|  2.3% | 3.6ms |     546 | `main.workload.func1`              | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25          |
|  1.3% | 2.1ms |     349 | `encoding/json.Unmarshal`          | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
|  0.9% | 1.5ms |     197 | `encoding/json.Marshal`            | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| <0.1% | 4.1µs |       1 | `runtime/pprof.(*Profile).WriteTo` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403  |
| <0.1% | 4.1µs |       1 | `main.writeProfile`                | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46          |
| <0.1% | 4.1µs |       1 | `main.main`                        | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61          |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)

|     % |  Time | Samples | Callee                    | Location                                                                                      |
| ----: | ----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| 58.7% | 2.1ms |     349 | `encoding/json.Unmarshal` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |
| 41.3% | 1.5ms |     197 | `encoding/json.Marshal`   | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

##### `main.writeProfile` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46)

|      % |  Time | Samples | Callee                             | Location                                                                                     |
| -----: | ----: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 4.1µs |       1 | `runtime/pprof.(*Profile).WriteTo` | nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403 |

##### `main.main` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61)

|      % |  Time | Samples | Callee              | Location                                                                             |
| -----: | ----: | ------: | ------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 4.1µs |       1 | `main.writeProfile` | Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46 |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |  Time | Samples | Call stack                                                                                                                                                                                                                                                        |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1.3% | 2.1ms |     349 | `encoding/json.Unmarshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)                          |
|  0.9% | 1.5ms |     197 | `encoding/json.Marshal` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205) ← `main.workload.func1` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25)                            |
| <0.1% | 4.1µs |       1 | `runtime/pprof.(*Profile).WriteTo` (nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403) ← `main.writeProfile` (Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:46) ← `main.main` (61) |

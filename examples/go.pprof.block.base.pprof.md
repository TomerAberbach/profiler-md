# CPU profile

Took 1.41s over 5 samples (282.7ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 1.41s |       5 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                 | Location                                                                                                  |
| ----: | ------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| 89.7% |   1.26s |       1 | `sync.(*WaitGroup).Wait` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |
| 10.3% | 145.1ms |       2 | `runtime.chanrecv1`      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508   |
|  0.0% |     0ms |       2 | `sync.(*Mutex).Lock`     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160)

|      % |  Time | Samples | Location                                                                                                  |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.26s |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206 |

##### `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508)

|      % |    Time | Samples | Location                                                                                                |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 145.1ms |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:509 |

##### `sync.(*Mutex).Lock` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45)

|      % | Time | Samples | Location                                                                                             |
| -----: | ---: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:46 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `sync.(*WaitGroup).Wait` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160)

|      % |  Time | Samples | Caller          | Location                                 |
| -----: | ----: | ------: | --------------- | ---------------------------------------- |
| 100.0% | 1.26s |       1 | `main.workload` | scripts/fixtures/assets/go/profile.go:16 |

##### `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508)

|      % |    Time | Samples | Caller                         | Location                                                                                                       |
| -----: | ------: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 145.1ms |       1 | `runtime/pprof.StopCPUProfile` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950 |
|   0.0% |     0ms |       1 | `runtime.gcBgMarkStartWorkers` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672        |

##### `sync.(*Mutex).Lock` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45)

|     % | Time | Samples | Caller                 | Location                                                                                             |
| ----: | ---: | ------: | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| 65.5% |  0ms |       1 | `sync.(*Once).doSlow`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73  |
| 34.5% |  0ms |       1 | `sync.(*Pool).pinSlow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                                                                                     | Location                                                                                                        |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1.41s |       2 | `main.main`                                                                                                                  | scripts/fixtures/assets/go/profile.go:61                                                                        |
| 100.0% |   1.41s |       2 | `runtime.main`                                                                                                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149         |
|  89.7% |   1.26s |       1 | `sync.(*WaitGroup).Wait`                                                                                                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160       |
|  89.7% |   1.26s |       1 | `main.workload`                                                                                                              | scripts/fixtures/assets/go/profile.go:16                                                                        |
|  10.3% | 145.1ms |       2 | `runtime.chanrecv1`                                                                                                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508         |
|  10.3% | 145.1ms |       1 | `runtime/pprof.StopCPUProfile`                                                                                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950  |
|   0.0% |     0ms |       3 | `main.workload.func1`                                                                                                        | scripts/fixtures/assets/go/profile.go:25                                                                        |
|   0.0% |     0ms |       2 | `sync.(*Mutex).Lock`                                                                                                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45            |
|   0.0% |     0ms |       2 | `encoding/json.Marshal`                                                                                                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|   0.0% |     0ms |       1 | `sync.(*Once).doSlow`                                                                                                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73             |
|   0.0% |     0ms |       1 | `sync.(*Once).Do`                                                                                                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52             |
|   0.0% |     0ms |       1 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57         |
|   0.0% |     0ms |       1 | `encoding/json.typeEncoder.func2`                                                                                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402 |
|   0.0% |     0ms |       1 | `encoding/json.(*encodeState).reflectValue`                                                                                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |
|   0.0% |     0ms |       1 | `encoding/json.(*encodeState).marshal`                                                                                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
|   0.0% |     0ms |       1 | `sync.(*Pool).pinSlow`                                                                                                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223            |
|   0.0% |     0ms |       1 | `sync.(*Pool).pin`                                                                                                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202            |
|   0.0% |     0ms |       1 | `sync.(*Pool).Get`                                                                                                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131            |
|   0.0% |     0ms |       1 | `encoding/json.newEncodeState`                                                                                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315 |
|   0.0% |     0ms |       1 | `runtime.gcBgMarkStartWorkers`                                                                                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672         |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `main.main` (scripts/fixtures/assets/go/profile.go:61)

|     % |    Time | Samples | Callee                         | Location                                                                                                       |
| ----: | ------: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 89.7% |   1.26s |       1 | `main.workload`                | scripts/fixtures/assets/go/profile.go:16                                                                       |
| 10.3% | 145.1ms |       1 | `runtime/pprof.StopCPUProfile` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950 |

##### `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)

|      % |  Time | Samples | Callee      | Location                                 |
| -----: | ----: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 1.41s |       2 | `main.main` | scripts/fixtures/assets/go/profile.go:61 |

##### `main.workload` (scripts/fixtures/assets/go/profile.go:16)

|      % |  Time | Samples | Callee                   | Location                                                                                                  |
| -----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.26s |       1 | `sync.(*WaitGroup).Wait` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |

##### `runtime/pprof.StopCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950)

|      % |    Time | Samples | Callee              | Location                                                                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 145.1ms |       1 | `runtime.chanrecv1` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508 |

##### `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)

|     % | Time | Samples | Callee                    | Location                                                                                                        |
| ----: | ---: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 82.3% |  0ms |       2 | `encoding/json.Marshal`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 17.7% |  0ms |       1 | `encoding/json.Unmarshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

##### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|     % | Time | Samples | Callee                                 | Location                                                                                                        |
| ----: | ---: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 65.5% |  0ms |       1 | `encoding/json.(*encodeState).marshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
| 34.5% |  0ms |       1 | `encoding/json.newEncodeState`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315 |

##### `sync.(*Once).doSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73)

|      % | Time | Samples | Callee               | Location                                                                                             |
| -----: | ---: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `sync.(*Mutex).Lock` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45 |

##### `sync.(*Once).Do` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52)

|      % | Time | Samples | Callee                | Location                                                                                            |
| -----: | ---: | ------: | --------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `sync.(*Once).doSlow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73 |

##### `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57)

|      % | Time | Samples | Callee            | Location                                                                                            |
| -----: | ---: | ------: | ----------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `sync.(*Once).Do` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52 |

##### `encoding/json.typeEncoder.func2` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402)

|      % | Time | Samples | Callee                                                                                                                       | Location                                                                                                |
| -----: | ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57 |

##### `encoding/json.(*encodeState).reflectValue` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366)

|      % | Time | Samples | Callee                            | Location                                                                                                        |
| -----: | ---: | ------: | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `encoding/json.typeEncoder.func2` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402 |

##### `encoding/json.(*encodeState).marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333)

|      % | Time | Samples | Callee                                      | Location                                                                                                        |
| -----: | ---: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

##### `sync.(*Pool).pinSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223)

|      % | Time | Samples | Callee               | Location                                                                                             |
| -----: | ---: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `sync.(*Mutex).Lock` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45 |

##### `sync.(*Pool).pin` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202)

|      % | Time | Samples | Callee                 | Location                                                                                             |
| -----: | ---: | ------: | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `sync.(*Pool).pinSlow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223 |

##### `sync.(*Pool).Get` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131)

|      % | Time | Samples | Callee             | Location                                                                                             |
| -----: | ---: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `sync.(*Pool).pin` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202 |

##### `encoding/json.newEncodeState` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315)

|      % | Time | Samples | Callee             | Location                                                                                             |
| -----: | ---: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `sync.(*Pool).Get` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131 |

##### `runtime.gcBgMarkStartWorkers` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672)

|      % | Time | Samples | Callee              | Location                                                                                                |
| -----: | ---: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `runtime.chanrecv1` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89.7% |   1.26s |       1 | `sync.(*WaitGroup).Wait` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160) ← `main.workload` (scripts/fixtures/assets/go/profile.go:16) ← `main.main` (61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.3% | 145.1ms |       1 | `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508) ← `runtime/pprof.StopCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950) ← `main.main` (scripts/fixtures/assets/go/profile.go:61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.0% |     0ms |       1 | `sync.(*Mutex).Lock` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45) ← `sync.(*Once).doSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73) ← `sync.(*Once).Do` (52) ← `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57) ← `encoding/json.typeEncoder.func2` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.0% |     0ms |       1 | `sync.(*Mutex).Lock` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45) ← `sync.(*Pool).pinSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223) ← `sync.(*Pool).pin` (202) ← `sync.(*Pool).Get` (131) ← `encoding/json.newEncodeState` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.0% |     0ms |       1 | `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508) ← `runtime.gcBgMarkStartWorkers` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallScanNoHeader` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503) ← `runtime.mallocgc` (1067) ← `runtime.convTstring` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419) ← `encoding/json.(*decodeState).literalInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25) |

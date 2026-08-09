# Contention profile

Blocked 1.41s over 14 contentions (101.0ms per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.41s |          14 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |    Time | Contentions | Function                 | Location                                                                                   |
| ----: | ------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 89.7% |   1.26s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |
| 10.3% | 145.1ms |          11 | `runtime.chanrecv1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`   |
| <0.1% |  30.9µs |           2 | `sync.(*Mutex).Lock`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Location                                                                                   |
| -----: | ----: | ----------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.26s |           1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|      % |    Time | Contentions | Location                                                                                 |
| -----: | ------: | ----------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 145.1ms |          11 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:509` |

##### `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`)

|      % |   Time | Contentions | Location                                                                              |
| -----: | -----: | ----------: | ------------------------------------------------------------------------------------- |
| 100.0% | 30.9µs |           2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:46` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Caller          | Location        |
| -----: | ----: | ----------: | --------------- | --------------- |
| 100.0% | 1.26s |           1 | `main.workload` | `profile.go:16` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|      % |    Time | Contentions | Caller                         | Location                                                                                        |
| -----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 145.1ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
|  <0.1% |   6.6µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

##### `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`)

|     % |   Time | Contentions | Caller                 | Location                                                                              |
| ----: | -----: | ----------: | ---------------------- | ------------------------------------------------------------------------------------- |
| 65.5% | 20.2µs |           1 | `sync.(*Once).doSlow`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`  |
| 34.5% | 10.7µs |           1 | `sync.(*Pool).pinSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|      % |    Time | Contentions | Function                                                                                                                     | Location                                                                                         |
| -----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1.41s |           2 | `main.main`                                                                                                                  | `profile.go:61`                                                                                  |
| 100.0% |   1.41s |           2 | `runtime.main`                                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`         |
|  89.7% |   1.26s |           1 | `sync.(*WaitGroup).Wait`                                                                                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`       |
|  89.7% |   1.26s |           1 | `main.workload`                                                                                                              | `profile.go:16`                                                                                  |
|  10.3% | 145.1ms |          11 | `runtime.chanrecv1`                                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`         |
|  10.3% | 145.1ms |           1 | `runtime/pprof.StopCPUProfile`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`  |
|  <0.1% |  37.5µs |          12 | `main.workload.func1`                                                                                                        | `profile.go:25`                                                                                  |
|  <0.1% |  30.9µs |           2 | `sync.(*Mutex).Lock`                                                                                                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`            |
|  <0.1% |  30.9µs |           2 | `encoding/json.Marshal`                                                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  <0.1% |  20.2µs |           1 | `sync.(*Once).doSlow`                                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`             |
|  <0.1% |  20.2µs |           1 | `sync.(*Once).Do`                                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52`             |
|  <0.1% |  20.2µs |           1 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`         |
|  <0.1% |  20.2µs |           1 | `encoding/json.typeEncoder.func2`                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |
|  <0.1% |  20.2µs |           1 | `encoding/json.(*encodeState).reflectValue`                                                                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
|  <0.1% |  20.2µs |           1 | `encoding/json.(*encodeState).marshal`                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
|  <0.1% |  10.7µs |           1 | `sync.(*Pool).pinSlow`                                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`            |
|  <0.1% |  10.7µs |           1 | `sync.(*Pool).pin`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`            |
|  <0.1% |  10.7µs |           1 | `sync.(*Pool).Get`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`            |
|  <0.1% |  10.7µs |           1 | `encoding/json.newEncodeState`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |
|  <0.1% |   6.6µs |          10 | `runtime.gcBgMarkStartWorkers`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`         |

#### Categories

##### Standard library

|      % |    Time | Contentions | Function                                                                                                                     | Location                                                                                          |
| -----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1.41s |           2 | `runtime.main`                                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
|  89.7% |   1.26s |           1 | `sync.(*WaitGroup).Wait`                                                                                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`        |
|  10.3% | 145.1ms |          11 | `runtime.chanrecv1`                                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`          |
|  10.3% | 145.1ms |           1 | `runtime/pprof.StopCPUProfile`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`   |
|  <0.1% |  30.9µs |           2 | `sync.(*Mutex).Lock`                                                                                                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`             |
|  <0.1% |  30.9µs |           2 | `encoding/json.Marshal`                                                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  <0.1% |  20.2µs |           1 | `sync.(*Once).doSlow`                                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`              |
|  <0.1% |  20.2µs |           1 | `sync.(*Once).Do`                                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52`              |
|  <0.1% |  20.2µs |           1 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`          |
|  <0.1% |  20.2µs |           1 | `encoding/json.typeEncoder.func2`                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`  |
|  <0.1% |  20.2µs |           1 | `encoding/json.(*encodeState).reflectValue`                                                                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
|  <0.1% |  20.2µs |           1 | `encoding/json.(*encodeState).marshal`                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
|  <0.1% |  10.7µs |           1 | `sync.(*Pool).pinSlow`                                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`             |
|  <0.1% |  10.7µs |           1 | `sync.(*Pool).pin`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`             |
|  <0.1% |  10.7µs |           1 | `sync.(*Pool).Get`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`             |
|  <0.1% |  10.7µs |           1 | `encoding/json.newEncodeState`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`  |
|  <0.1% |   6.6µs |          10 | `runtime.mallocgcSmallScanNoHeader`                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`       |
|  <0.1% |   6.6µs |          10 | `runtime.mallocgc`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
|  <0.1% |   6.6µs |          10 | `runtime.convTstring`                                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`         |
|  <0.1% |   6.6µs |          10 | `encoding/json.(*decodeState).literalInterface`                                                                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.main` (`profile.go:61`)

|     % |    Time | Contentions | Callee                         | Location                                                                                        |
| ----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 89.7% |   1.26s |           1 | `main.workload`                | `profile.go:16`                                                                                 |
| 10.3% | 145.1ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

|      % |  Time | Contentions | Callee      | Location        |
| -----: | ----: | ----------: | ----------- | --------------- |
| 100.0% | 1.41s |           2 | `main.main` | `profile.go:61` |

##### `main.workload` (`profile.go:16`)

|      % |  Time | Contentions | Callee                   | Location                                                                                   |
| -----: | ----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.26s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

|      % |    Time | Contentions | Callee              | Location                                                                                 |
| -----: | ------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 145.1ms |           1 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `main.workload.func1` (`profile.go:25`)

|     % |   Time | Contentions | Callee                    | Location                                                                                         |
| ----: | -----: | ----------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 82.3% | 30.9µs |           2 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 17.7% |  6.6µs |          10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |   Time | Contentions | Callee                                 | Location                                                                                         |
| ----: | -----: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 65.5% | 20.2µs |           1 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 34.5% | 10.7µs |           1 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

##### `sync.(*Once).doSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`)

|      % |   Time | Contentions | Callee               | Location                                                                              |
| -----: | -----: | ----------: | -------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 20.2µs |           1 | `sync.(*Mutex).Lock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45` |

##### `sync.(*Once).Do` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52`)

|      % |   Time | Contentions | Callee                | Location                                                                             |
| -----: | -----: | ----------: | --------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 20.2µs |           1 | `sync.(*Once).doSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73` |

##### `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`)

|      % |   Time | Contentions | Callee            | Location                                                                             |
| -----: | -----: | ----------: | ----------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 20.2µs |           1 | `sync.(*Once).Do` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52` |

##### `encoding/json.typeEncoder.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`)

|      % |   Time | Contentions | Callee                                                                                                                       | Location                                                                                 |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 20.2µs |           1 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|      % |   Time | Contentions | Callee                            | Location                                                                                         |
| -----: | -----: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 20.2µs |           1 | `encoding/json.typeEncoder.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |   Time | Contentions | Callee                                      | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 20.2µs |           1 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

|      % |   Time | Contentions | Callee               | Location                                                                              |
| -----: | -----: | ----------: | -------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 10.7µs |           1 | `sync.(*Mutex).Lock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45` |

##### `sync.(*Pool).pin` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`)

|      % |   Time | Contentions | Callee                 | Location                                                                              |
| -----: | -----: | ----------: | ---------------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 10.7µs |           1 | `sync.(*Pool).pinSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223` |

##### `sync.(*Pool).Get` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`)

|      % |   Time | Contentions | Callee             | Location                                                                              |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------- |
| 100.0% | 10.7µs |           1 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

|      % |   Time | Contentions | Callee             | Location                                                                              |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------- |
| 100.0% | 10.7µs |           1 | `sync.(*Pool).Get` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

|      % |  Time | Contentions | Callee              | Location                                                                                 |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 6.6µs |          10 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|      % |  Time | Contentions | Callee            | Location                                                                                |
| -----: | ----: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 6.6µs |          10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|      % |  Time | Contentions | Callee                              | Location                                                                                    |
| -----: | ----: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 6.6µs |          10 | `runtime.mallocgcSmallScanNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503` |

##### `runtime.convTstring` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`)

|      % |  Time | Contentions | Callee             | Location                                                                                    |
| -----: | ----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 6.6µs |          10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|      % |  Time | Contentions | Callee                | Location                                                                                  |
| -----: | ----: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 6.6µs |          10 | `runtime.convTstring` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89.7% |   1.26s |           1 | `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`) ← `main.workload` (`profile.go:16`) ← `main.main` (61) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 10.3% | 145.1ms |           1 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`) ← `main.main` (`profile.go:61`) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |  20.2µs |           1 | `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`) ← `sync.(*Once).doSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`) ← `sync.(*Once).Do` (52) ← `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`) ← `encoding/json.typeEncoder.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |  10.7µs |           1 | `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`) ← `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`) ← `sync.(*Pool).pin` (202) ← `sync.(*Pool).Get` (131) ← `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   6.6µs |          10 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `runtime.convTstring` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`) ← `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`) |

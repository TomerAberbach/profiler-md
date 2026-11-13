# Contention profile

Blocked 1.51s over 13 contentions (115.9ms per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.51s |          13 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

## Call tree

Call paths to the hottest functions.

```
└── 1.51s (100.0%) runtime.main at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149
    └── 1.51s (100.0%) main.main at ./profile.go:82
        ├── 1.32s (87.8%) main.workload at 16
        │   └── 1.32s (87.8%) sync.(*WaitGroup).Wait at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160
        └── 178.4ms (11.8%) runtime/pprof.StopCPUProfile at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950
            └── 178.4ms (11.8%) runtime.chanrecv1 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                 | Location                                                                                   |
| ----: | ------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 87.8% |   1.32s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |
| 12.2% | 184.1ms |          12 | `runtime.chanrecv1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`   |

#### Lines

Lines with the largest contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Location                                                                                   |
| -----: | ----: | ----------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.32s |           1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|      % |    Time | Contentions | Location                                                                                 |
| -----: | ------: | ----------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 184.1ms |          12 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:509` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Caller          | Location          |
| -----: | ----: | ----------: | --------------- | ----------------- |
| 100.0% | 1.32s |           1 | `main.workload` | `./profile.go:16` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|     % |    Time | Contentions | Caller                         | Location                                                                                        |
| ----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 96.9% | 178.4ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
|  3.1% |   5.7ms |           1 | `main.leakWorkers`             | `./profile.go:49`                                                                               |
| <0.1% |  11.0µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                        | Location                                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1.51s |           3 | `main.main`                                     | `./profile.go:82`                                                                                 |
| 100.0% |   1.51s |           3 | `runtime.main`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
|  87.8% |   1.32s |           1 | `sync.(*WaitGroup).Wait`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`        |
|  87.8% |   1.32s |           1 | `main.workload`                                 | `./profile.go:16`                                                                                 |
|  12.2% | 184.1ms |          12 | `runtime.chanrecv1`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`          |
|  11.8% | 178.4ms |           1 | `runtime/pprof.StopCPUProfile`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`   |
|   0.4% |   5.7ms |           1 | `main.leakWorkers`                              | `./profile.go:49`                                                                                 |
|  <0.1% |  11.0µs |          10 | `runtime.gcBgMarkStartWorkers`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`          |
|  <0.1% |  11.0µs |          10 | `runtime.gcStart`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`           |
|  <0.1% |  11.0µs |          10 | `runtime.mallocgcSmallNoscan`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`       |
|  <0.1% |  11.0µs |          10 | `runtime.mallocgc`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
|  <0.1% |  11.0µs |          10 | `runtime.makeslice`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`         |
|  <0.1% |  11.0µs |          10 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
|  <0.1% |  11.0µs |          10 | `encoding/json.unquote`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).object`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).value`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |    Time | Contentions | Function                                        | Location                                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1.51s |           3 | `runtime.main`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
|  87.8% |   1.32s |           1 | `sync.(*WaitGroup).Wait`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`        |
|  12.2% | 184.1ms |          12 | `runtime.chanrecv1`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`          |
|  11.8% | 178.4ms |           1 | `runtime/pprof.StopCPUProfile`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`   |
|  <0.1% |  11.0µs |          10 | `runtime.mallocgcSmallNoscan`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`       |
|  <0.1% |  11.0µs |          10 | `runtime.mallocgc`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
|  <0.1% |  11.0µs |          10 | `runtime.makeslice`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`         |
|  <0.1% |  11.0µs |          10 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
|  <0.1% |  11.0µs |          10 | `encoding/json.unquote`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).object`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).value`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
|  <0.1% |  11.0µs |          10 | `encoding/json.(*decodeState).unmarshal`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
|  <0.1% |  11.0µs |          10 | `encoding/json.Unmarshal`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.main` (`./profile.go:82`)

|      % |  Time | Contentions | Caller         | Location                                                                                 |
| -----: | ----: | ----------: | -------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.51s |           3 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Caller          | Location          |
| -----: | ----: | ----------: | --------------- | ----------------- |
| 100.0% | 1.32s |           1 | `main.workload` | `./profile.go:16` |

##### `main.workload` (`./profile.go:16`)

|      % |  Time | Contentions | Caller      | Location          |
| -----: | ----: | ----------: | ----------- | ----------------- |
| 100.0% | 1.32s |           1 | `main.main` | `./profile.go:82` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|     % |    Time | Contentions | Caller                         | Location                                                                                        |
| ----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 96.9% | 178.4ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
|  3.1% |   5.7ms |           1 | `main.leakWorkers`             | `./profile.go:49`                                                                               |
| <0.1% |  11.0µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

|      % |    Time | Contentions | Caller      | Location          |
| -----: | ------: | ----------: | ----------- | ----------------- |
| 100.0% | 178.4ms |           1 | `main.main` | `./profile.go:82` |

##### `main.leakWorkers` (`./profile.go:49`)

|      % |  Time | Contentions | Caller      | Location          |
| -----: | ----: | ----------: | ----------- | ----------------- |
| 100.0% | 5.7ms |           1 | `main.main` | `./profile.go:82` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

|      % |   Time | Contentions | Caller            | Location                                                                                |
| -----: | -----: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|      % |   Time | Contentions | Caller                        | Location                                                                                    |
| -----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.mallocgcSmallNoscan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358` |

##### `runtime.mallocgcSmallNoscan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`)

|      % |   Time | Contentions | Caller             | Location                                                                                    |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|      % |   Time | Contentions | Caller              | Location                                                                                  |
| -----: | -----: | ----------: | ------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102` |

##### `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`)

|      % |   Time | Contentions | Caller                       | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |   Time | Contentions | Caller                  | Location                                                                                          |
| -----: | -----: | ----------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|      % |   Time | Contentions | Caller                                          | Location                                                                                          |
| -----: | -----: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|      % |   Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |   Time | Contentions | Caller                                         | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |   Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |   Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |   Time | Contentions | Caller                               | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |   Time | Contentions | Caller                                   | Location                                                                                         |
| -----: | -----: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |   Time | Contentions | Caller                    | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.0µs |          10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |   Time | Contentions | Caller                | Location          |
| -----: | -----: | ----------: | --------------------- | ----------------- |
| 100.0% | 11.0µs |          10 | `main.workload.func1` | `./profile.go:25` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.main` (`./profile.go:82`)

|     % |    Time | Contentions | Callee                         | Location                                                                                        |
| ----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 87.8% |   1.32s |           1 | `main.workload`                | `./profile.go:16`                                                                               |
| 11.8% | 178.4ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
|  0.4% |   5.7ms |           1 | `main.leakWorkers`             | `./profile.go:49`                                                                               |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

|      % |  Time | Contentions | Callee      | Location          |
| -----: | ----: | ----------: | ----------- | ----------------- |
| 100.0% | 1.51s |           3 | `main.main` | `./profile.go:82` |

##### `main.workload` (`./profile.go:16`)

|      % |  Time | Contentions | Callee                   | Location                                                                                   |
| -----: | ----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.32s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

|      % |    Time | Contentions | Callee              | Location                                                                                 |
| -----: | ------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 178.4ms |           1 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `main.leakWorkers` (`./profile.go:49`)

|      % |  Time | Contentions | Callee              | Location                                                                                 |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 5.7ms |           1 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

|      % |   Time | Contentions | Callee              | Location                                                                                 |
| -----: | -----: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|      % |   Time | Contentions | Callee                         | Location                                                                                 |
| -----: | -----: | ----------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672` |

##### `runtime.mallocgcSmallNoscan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`)

|      % |   Time | Contentions | Callee            | Location                                                                                |
| -----: | -----: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|      % |   Time | Contentions | Callee                        | Location                                                                                    |
| -----: | -----: | ----------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.mallocgcSmallNoscan` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358` |

##### `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`)

|      % |   Time | Contentions | Callee             | Location                                                                                    |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |   Time | Contentions | Callee              | Location                                                                                  |
| -----: | -----: | ----------: | ------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|      % |   Time | Contentions | Callee                       | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|      % |   Time | Contentions | Callee                  | Location                                                                                          |
| -----: | -----: | ----------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |   Time | Contentions | Callee                                          | Location                                                                                          |
| -----: | -----: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |   Time | Contentions | Callee                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |   Time | Contentions | Callee                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |   Time | Contentions | Callee                                         | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |   Time | Contentions | Callee                                | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |   Time | Contentions | Callee                               | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |   Time | Contentions | Callee                                   | Location                                                                                         |
| -----: | -----: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 11.0µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87.8% |   1.32s |           1 | `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`) ← `main.workload` (`./profile.go:16`) ← `main.main` (82) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 11.8% | 178.4ms |           1 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`) ← `main.main` (`./profile.go:82`) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% |   5.7ms |           1 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `main.leakWorkers` (`./profile.go:49`) ← `main.main` (82) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |  11.0µs |          10 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallNoscan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`) ← `runtime.mallocgc` (1067) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |

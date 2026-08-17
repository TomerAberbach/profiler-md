# Contention profile

Blocked 1.40s over 12 contentions (117.5ms per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.40s |          12 |

Paths starting with `./` or `../` are relative to `/Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/`.

## Call tree

Call paths to the hottest functions.

```
└── 1.40s (100.0%) runtime.main  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149
    └── 1.40s (100.0%) main.main  ./profile.go:61
        ├── 1.30s (92.4%) main.workload  :16
        │   └── 1.30s (92.4%) sync.(*WaitGroup).Wait  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160
        └── 106.7ms (7.6%) runtime/pprof.StopCPUProfile  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950
            └── 106.7ms (7.6%) runtime.chanrecv1  /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                 | Location                                                                                   |
| ----: | ------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 92.4% |   1.30s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |
|  7.6% | 106.7ms |          11 | `runtime.chanrecv1`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`   |

#### Lines

Lines with the largest contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Location                                                                                   |
| -----: | ----: | ----------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.30s |           1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|      % |    Time | Contentions | Location                                                                                 |
| -----: | ------: | ----------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 106.7ms |          11 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:509` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Caller          | Location          |
| -----: | ----: | ----------: | --------------- | ----------------- |
| 100.0% | 1.30s |           1 | `main.workload` | `./profile.go:16` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|      % |    Time | Contentions | Caller                         | Location                                                                                        |
| -----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 106.7ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
|  <0.1% |  14.4µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                       | Location                                                                                                          |
| -----: | ------: | ----------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1.40s |           2 | `main.main`                                    | `./profile.go:61`                                                                                                 |
| 100.0% |   1.40s |           2 | `runtime.main`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`                          |
|  92.4% |   1.30s |           1 | `sync.(*WaitGroup).Wait`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`                        |
|  92.4% |   1.30s |           1 | `main.workload`                                | `./profile.go:16`                                                                                                 |
|   7.6% | 106.7ms |          11 | `runtime.chanrecv1`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`                          |
|   7.6% | 106.7ms |           1 | `runtime/pprof.StopCPUProfile`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`                   |
|  <0.1% |  14.4µs |          10 | `runtime.gcBgMarkStartWorkers`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`                          |
|  <0.1% |  14.4µs |          10 | `runtime.gcStart`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`                           |
|  <0.1% |  14.4µs |          10 | `runtime.mallocgcSmallScanHeader`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`                       |
|  <0.1% |  14.4µs |          10 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                       |
|  <0.1% |  14.4µs |          10 | `runtime.newarray`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`                       |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.newarray`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`                       |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.newGroups`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`           |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.(*table).reset`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`           |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.newTable`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`            |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.(*Map).growToTable`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`             |
|  <0.1% |  14.4µs |          10 | `runtime.mapassign_faststr`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`                 |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`                 |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |    Time | Contentions | Function                                       | Location                                                                                                          |
| -----: | ------: | ----------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1.40s |           2 | `runtime.main`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`                          |
|  92.4% |   1.30s |           1 | `sync.(*WaitGroup).Wait`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`                        |
|   7.6% | 106.7ms |          11 | `runtime.chanrecv1`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`                          |
|   7.6% | 106.7ms |           1 | `runtime/pprof.StopCPUProfile`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`                   |
|  <0.1% |  14.4µs |          10 | `runtime.mallocgcSmallScanHeader`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`                       |
|  <0.1% |  14.4µs |          10 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                       |
|  <0.1% |  14.4µs |          10 | `runtime.newarray`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`                       |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.newarray`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`                       |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.newGroups`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`           |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.(*table).reset`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`           |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.newTable`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`            |
|  <0.1% |  14.4µs |          10 | `internal/runtime/maps.(*Map).growToTable`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`             |
|  <0.1% |  14.4µs |          10 | `runtime.mapassign_faststr`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`                 |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`                 |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`                  |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`                  |
|  <0.1% |  14.4µs |          10 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`                  |
|  <0.1% |  14.4µs |          10 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.main` (`./profile.go:61`)

|      % |  Time | Contentions | Caller         | Location                                                                                 |
| -----: | ----: | ----------: | -------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.40s |           2 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Contentions | Caller          | Location          |
| -----: | ----: | ----------: | --------------- | ----------------- |
| 100.0% | 1.30s |           1 | `main.workload` | `./profile.go:16` |

##### `main.workload` (`./profile.go:16`)

|      % |  Time | Contentions | Caller      | Location          |
| -----: | ----: | ----------: | ----------- | ----------------- |
| 100.0% | 1.30s |           1 | `main.main` | `./profile.go:61` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|      % |    Time | Contentions | Caller                         | Location                                                                                        |
| -----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 106.7ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
|  <0.1% |  14.4µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

|      % |    Time | Contentions | Caller      | Location          |
| -----: | ------: | ----------: | ----------- | ----------------- |
| 100.0% | 106.7ms |           1 | `main.main` | `./profile.go:61` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

|      % |   Time | Contentions | Caller            | Location                                                                                |
| -----: | -----: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|      % |   Time | Contentions | Caller                            | Location                                                                                    |
| -----: | -----: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.mallocgcSmallScanHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594` |

##### `runtime.mallocgcSmallScanHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`)

|      % |   Time | Contentions | Caller             | Location                                                                                    |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|      % |   Time | Contentions | Caller             | Location                                                                                    |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |

##### `runtime.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`)

|      % |   Time | Contentions | Caller                           | Location                                                                                    |
| -----: | -----: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230` |

##### `internal/runtime/maps.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`)

|      % |   Time | Contentions | Caller                            | Location                                                                                                |
| -----: | -----: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.newGroups` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318` |

##### `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`)

|      % |   Time | Contentions | Caller                                 | Location                                                                                                |
| -----: | -----: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.(*table).reset` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101` |

##### `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`)

|      % |   Time | Contentions | Caller                           | Location                                                                                               |
| -----: | -----: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.newTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73` |

##### `internal/runtime/maps.newTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`)

|      % |   Time | Contentions | Caller                                     | Location                                                                                              |
| -----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.(*Map).growToTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608` |

##### `internal/runtime/maps.(*Map).growToTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`)

|      % |   Time | Contentions | Caller                      | Location                                                                                                          |
| -----: | -----: | ----------: | --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.mapassign_faststr` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |

##### `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`)

|      % |   Time | Contentions | Caller                                         | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |   Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |   Time | Contentions | Caller                                         | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |   Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |   Time | Contentions | Caller                               | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |   Time | Contentions | Caller                                   | Location                                                                                         |
| -----: | -----: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |   Time | Contentions | Caller                    | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |   Time | Contentions | Caller                | Location          |
| -----: | -----: | ----------: | --------------------- | ----------------- |
| 100.0% | 14.4µs |          10 | `main.workload.func1` | `./profile.go:25` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.main` (`./profile.go:61`)

|     % |    Time | Contentions | Callee                         | Location                                                                                        |
| ----: | ------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 92.4% |   1.30s |           1 | `main.workload`                | `./profile.go:16`                                                                               |
|  7.6% | 106.7ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

|      % |  Time | Contentions | Callee      | Location          |
| -----: | ----: | ----------: | ----------- | ----------------- |
| 100.0% | 1.40s |           2 | `main.main` | `./profile.go:61` |

##### `main.workload` (`./profile.go:16`)

|      % |  Time | Contentions | Callee                   | Location                                                                                   |
| -----: | ----: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.30s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

|      % |    Time | Contentions | Callee              | Location                                                                                 |
| -----: | ------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 106.7ms |           1 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

|      % |   Time | Contentions | Callee              | Location                                                                                 |
| -----: | -----: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|      % |   Time | Contentions | Callee                         | Location                                                                                 |
| -----: | -----: | ----------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672` |

##### `runtime.mallocgcSmallScanHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`)

|      % |   Time | Contentions | Callee            | Location                                                                                |
| -----: | -----: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|      % |   Time | Contentions | Callee                            | Location                                                                                    |
| -----: | -----: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.mallocgcSmallScanHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594` |

##### `runtime.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`)

|      % |   Time | Contentions | Callee             | Location                                                                                    |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `internal/runtime/maps.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`)

|      % |   Time | Contentions | Callee             | Location                                                                                    |
| -----: | -----: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |

##### `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`)

|      % |   Time | Contentions | Callee                           | Location                                                                                    |
| -----: | -----: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230` |

##### `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`)

|      % |   Time | Contentions | Callee                            | Location                                                                                                |
| -----: | -----: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.newGroups` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318` |

##### `internal/runtime/maps.newTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`)

|      % |   Time | Contentions | Callee                                 | Location                                                                                                |
| -----: | -----: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.(*table).reset` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101` |

##### `internal/runtime/maps.(*Map).growToTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`)

|      % |   Time | Contentions | Callee                           | Location                                                                                               |
| -----: | -----: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.newTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73` |

##### `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`)

|      % |   Time | Contentions | Callee                                     | Location                                                                                              |
| -----: | -----: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `internal/runtime/maps.(*Map).growToTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |   Time | Contentions | Callee                                        | Location                                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `runtime.mapassign_faststr`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |   Time | Contentions | Callee                                         | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |   Time | Contentions | Callee                                        | Location                                                                                          |
| -----: | -----: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |   Time | Contentions | Callee                                         | Location                                                                                          |
| -----: | -----: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |   Time | Contentions | Callee                                | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |   Time | Contentions | Callee                               | Location                                                                                         |
| -----: | -----: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |   Time | Contentions | Callee                                   | Location                                                                                         |
| -----: | -----: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.4% |   1.30s |           1 | `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`) ← `main.workload` (`./profile.go:16`) ← `main.main` (61) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  7.6% | 106.7ms |           1 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`) ← `main.main` (`./profile.go:61`) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |  14.4µs |          10 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallScanHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`) ← `runtime.mallocgc` (1067) ← `runtime.newarray` (2199) ← `internal/runtime/maps.newarray` (2230) ← `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`) ← `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`) ← `internal/runtime/maps.newTable` (73) ← `internal/runtime/maps.(*Map).growToTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`) ← `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |

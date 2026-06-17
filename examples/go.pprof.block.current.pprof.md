# CPU profile

Took 1.40s over 3 samples (470.0ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 1.40s |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                 | Location                                                                                                  |
| ----: | ------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| 92.4% |   1.30s |       1 | `sync.(*WaitGroup).Wait` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |
|  7.6% | 106.7ms |       2 | `runtime.chanrecv1`      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508   |

#### Lines

Lines ranked by contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160)

|      % |  Time | Samples | Location                                                                                                  |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.30s |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206 |

##### `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508)

|      % |    Time | Samples | Location                                                                                                |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 106.7ms |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:509 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `sync.(*WaitGroup).Wait` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160)

|      % |  Time | Samples | Caller          | Location                                 |
| -----: | ----: | ------: | --------------- | ---------------------------------------- |
| 100.0% | 1.30s |       1 | `main.workload` | scripts/fixtures/assets/go/profile.go:16 |

##### `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508)

|      % |    Time | Samples | Caller                         | Location                                                                                                       |
| -----: | ------: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 106.7ms |       1 | `runtime/pprof.StopCPUProfile` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950 |
|   0.0% |     0ms |       1 | `runtime.gcBgMarkStartWorkers` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672        |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                       | Location                                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1.40s |       2 | `main.main`                                    | scripts/fixtures/assets/go/profile.go:61                                                                                         |
| 100.0% |   1.40s |       2 | `runtime.main`                                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149                          |
|  92.4% |   1.30s |       1 | `sync.(*WaitGroup).Wait`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160                        |
|  92.4% |   1.30s |       1 | `main.workload`                                | scripts/fixtures/assets/go/profile.go:16                                                                                         |
|   7.6% | 106.7ms |       2 | `runtime.chanrecv1`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508                          |
|   7.6% | 106.7ms |       1 | `runtime/pprof.StopCPUProfile`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950                   |
|   0.0% |     0ms |       1 | `runtime.gcBgMarkStartWorkers`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672                          |
|   0.0% |     0ms |       1 | `runtime.gcStart`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733                           |
|   0.0% |     0ms |       1 | `runtime.mallocgcSmallScanHeader`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594                       |
|   0.0% |     0ms |       1 | `runtime.mallocgc`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067                       |
|   0.0% |     0ms |       1 | `runtime.newarray`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199                       |
|   0.0% |     0ms |       1 | `internal/runtime/maps.newarray`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230                       |
|   0.0% |     0ms |       1 | `internal/runtime/maps.newGroups`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318           |
|   0.0% |     0ms |       1 | `internal/runtime/maps.(*table).reset`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101           |
|   0.0% |     0ms |       1 | `internal/runtime/maps.newTable`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73            |
|   0.0% |     0ms |       1 | `internal/runtime/maps.(*Map).growToTable`     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608             |
|   0.0% |     0ms |       1 | `runtime.mapassign_faststr`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263 |
|   0.0% |     0ms |       1 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078                 |
|   0.0% |     0ms |       1 | `encoding/json.(*decodeState).valueInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035                 |
|   0.0% |     0ms |       1 | `encoding/json.(*decodeState).arrayInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052                 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `main.main` (scripts/fixtures/assets/go/profile.go:61)

|     % |    Time | Samples | Callee                         | Location                                                                                                       |
| ----: | ------: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 92.4% |   1.30s |       1 | `main.workload`                | scripts/fixtures/assets/go/profile.go:16                                                                       |
|  7.6% | 106.7ms |       1 | `runtime/pprof.StopCPUProfile` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950 |

##### `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)

|      % |  Time | Samples | Callee      | Location                                 |
| -----: | ----: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 1.40s |       2 | `main.main` | scripts/fixtures/assets/go/profile.go:61 |

##### `main.workload` (scripts/fixtures/assets/go/profile.go:16)

|      % |  Time | Samples | Callee                   | Location                                                                                                  |
| -----: | ----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.30s |       1 | `sync.(*WaitGroup).Wait` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |

##### `runtime/pprof.StopCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950)

|      % |    Time | Samples | Callee              | Location                                                                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 106.7ms |       1 | `runtime.chanrecv1` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508 |

##### `runtime.gcBgMarkStartWorkers` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672)

|      % | Time | Samples | Callee              | Location                                                                                                |
| -----: | ---: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `runtime.chanrecv1` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508 |

##### `runtime.gcStart` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733)

|      % | Time | Samples | Callee                         | Location                                                                                                |
| -----: | ---: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `runtime.gcBgMarkStartWorkers` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672 |

##### `runtime.mallocgcSmallScanHeader` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594)

|      % | Time | Samples | Callee            | Location                                                                                               |
| -----: | ---: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% |  0ms |       1 | `runtime.gcStart` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733 |

##### `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067)

|      % | Time | Samples | Callee                            | Location                                                                                                   |
| -----: | ---: | ------: | --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `runtime.mallocgcSmallScanHeader` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594 |

##### `runtime.newarray` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199)

|      % | Time | Samples | Callee             | Location                                                                                                   |
| -----: | ---: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `runtime.mallocgc` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067 |

##### `internal/runtime/maps.newarray` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230)

|      % | Time | Samples | Callee             | Location                                                                                                   |
| -----: | ---: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `runtime.newarray` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199 |

##### `internal/runtime/maps.newGroups` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318)

|      % | Time | Samples | Callee                           | Location                                                                                                   |
| -----: | ---: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `internal/runtime/maps.newarray` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230 |

##### `internal/runtime/maps.(*table).reset` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101)

|      % | Time | Samples | Callee                            | Location                                                                                                               |
| -----: | ---: | ------: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `internal/runtime/maps.newGroups` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318 |

##### `internal/runtime/maps.newTable` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73)

|      % | Time | Samples | Callee                                 | Location                                                                                                               |
| -----: | ---: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `internal/runtime/maps.(*table).reset` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101 |

##### `internal/runtime/maps.(*Map).growToTable` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608)

|      % | Time | Samples | Callee                           | Location                                                                                                              |
| -----: | ---: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `internal/runtime/maps.newTable` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73 |

##### `runtime.mapassign_faststr` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263)

|      % | Time | Samples | Callee                                     | Location                                                                                                             |
| -----: | ---: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `internal/runtime/maps.(*Map).growToTable` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608 |

##### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|      % | Time | Samples | Callee                                        | Location                                                                                                                         |
| -----: | ---: | ------: | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `runtime.mapassign_faststr`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263 |
| 100.0% |  0ms |       1 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035                 |

##### `encoding/json.(*decodeState).valueInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035)

|      % | Time | Samples | Callee                                         | Location                                                                                                         |
| -----: | ---: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |
| 100.0% |  0ms |       1 | `encoding/json.(*decodeState).arrayInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052 |

##### `encoding/json.(*decodeState).arrayInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052)

|      % | Time | Samples | Callee                                        | Location                                                                                                         |
| -----: | ---: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |  0ms |       1 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.4% |   1.30s |       1 | `sync.(*WaitGroup).Wait` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160) ← `main.workload` (scripts/fixtures/assets/go/profile.go:16) ← `main.main` (61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  7.6% | 106.7ms |       1 | `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508) ← `runtime/pprof.StopCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950) ← `main.main` (scripts/fixtures/assets/go/profile.go:61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.0% |     0ms |       1 | `runtime.chanrecv1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508) ← `runtime.gcBgMarkStartWorkers` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallScanHeader` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594) ← `runtime.mallocgc` (1067) ← `runtime.newarray` (2199) ← `internal/runtime/maps.newarray` (2230) ← `internal/runtime/maps.newGroups` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318) ← `internal/runtime/maps.(*table).reset` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101) ← `internal/runtime/maps.newTable` (73) ← `internal/runtime/maps.(*Map).growToTable` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608) ← `runtime.mapassign_faststr` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263) ← `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25) |

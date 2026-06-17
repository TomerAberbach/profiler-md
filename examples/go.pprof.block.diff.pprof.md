# CPU profile diff

Took 1.41s → 1.40s (-3.9ms, -0.3%) over 5 samples → 3 samples (282.7ms → 470.0ms per sample).

| Category | Change |  Delta |      % |          Time | Samples |
| -------- | -----: | -----: | -----: | ------------: | ------: |
| ours     |  -0.3% | -3.9ms | 100.0% | 1.41s → 1.40s |   5 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |   Delta |             % |          Time | Samples | Function                 | Location                                                                                                  |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
|  +2.7% | +34.6ms | 89.7% → 92.4% | 1.26s → 1.30s |       1 | `sync.(*WaitGroup).Wait` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160 |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |            % |              Time | Samples | Function             | Location                                                                                                |
| ------: | ------: | -----------: | ----------------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------- |
|  -26.5% | -38.4ms | 10.3% → 7.6% | 145.1ms → 106.7ms |       2 | `runtime.chanrecv1`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508 |
| removed |    -0ms |         0.0% |               0ms |   2 → 0 | `sync.(*Mutex).Lock` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45    |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |             % |          Time | Samples | Function                                       | Location                                                                                                                         |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
|   +2.7% | +34.6ms | 89.7% → 92.4% | 1.26s → 1.30s |       1 | `sync.(*WaitGroup).Wait`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160                        |
|   +2.7% | +34.6ms | 89.7% → 92.4% | 1.26s → 1.30s |       1 | `main.workload`                                | scripts/fixtures/assets/go/profile.go:16                                                                                         |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `runtime.mallocgcSmallScanHeader`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594                       |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `runtime.newarray`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199                       |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `internal/runtime/maps.newarray`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230                       |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `internal/runtime/maps.newGroups`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318           |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `internal/runtime/maps.(*table).reset`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101           |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `internal/runtime/maps.newTable`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73            |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `internal/runtime/maps.(*Map).growToTable`     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608             |
|     new |    +0ms |          0.0% |           0ms |   0 → 1 | `runtime.mapassign_faststr`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263 |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `runtime.gcBgMarkStartWorkers`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672                          |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `runtime.gcStart`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733                           |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `runtime.mallocgc`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067                       |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `encoding/json.(*decodeState).valueInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035                 |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078                 |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `encoding/json.(*decodeState).arrayInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052                 |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `encoding/json.(*decodeState).object`          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604                  |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `encoding/json.(*decodeState).value`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363                  |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `encoding/json.(*decodeState).unmarshal`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173                  |
| +117.6% |    +0ms |          0.0% |           0ms |       1 | `encoding/json.Unmarshal`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102                  |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |   Delta |            % |              Time | Samples | Function                                                                                                                     | Location                                                                                                         |
| ------: | ------: | -----------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  -26.5% | -38.4ms | 10.3% → 7.6% | 145.1ms → 106.7ms |       1 | `runtime/pprof.StopCPUProfile`                                                                                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950   |
|  -26.5% | -38.4ms | 10.3% → 7.6% | 145.1ms → 106.7ms |       2 | `runtime.chanrecv1`                                                                                                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508          |
|   -0.3% |  -3.8ms |       100.0% |     1.41s → 1.40s |       2 | `main.main`                                                                                                                  | scripts/fixtures/assets/go/profile.go:61                                                                         |
|   -0.3% |  -3.8ms |       100.0% |     1.41s → 1.40s |       2 | `runtime.main`                                                                                                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149          |
| removed |    -0ms |         0.0% |               0ms |   2 → 0 | `sync.(*Mutex).Lock`                                                                                                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45             |
| removed |    -0ms |         0.0% |               0ms |   2 → 0 | `encoding/json.Marshal`                                                                                                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205  |
|  -61.6% |    -0ms |         0.0% |               0ms |   3 → 1 | `main.workload.func1`                                                                                                        | scripts/fixtures/assets/go/profile.go:25                                                                         |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `sync.(*Once).doSlow`                                                                                                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73              |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `sync.(*Once).Do`                                                                                                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52              |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57          |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `encoding/json.typeEncoder.func2`                                                                                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402  |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `encoding/json.(*encodeState).reflectValue`                                                                                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366  |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `encoding/json.(*encodeState).marshal`                                                                                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333  |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `sync.(*Pool).pinSlow`                                                                                                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223             |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `sync.(*Pool).pin`                                                                                                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202             |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `sync.(*Pool).Get`                                                                                                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131             |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `encoding/json.newEncodeState`                                                                                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315  |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `runtime.mallocgcSmallScanNoHeader`                                                                                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503       |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `runtime.convTstring`                                                                                                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419         |
| removed |    -0ms |         0.0% |               0ms |   1 → 0 | `encoding/json.(*decodeState).literalInterface`                                                                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |

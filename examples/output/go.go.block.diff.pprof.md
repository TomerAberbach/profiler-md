# Contention profile diff

Blocked 1.41s → 1.40s (-3.85ms, -0.3%) over 14 contentions → 12 contentions (101.0ms → 117.5ms per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library |  -0.3% | -3.85ms | 100.0% | 1.41s → 1.40s |     14 → 12 |

Paths starting with `./` or `../` are relative to `/Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |    Delta |             % |          Time | Contentions | Function                 | Location                                                                                   |
| -----: | -------: | ------------: | ------------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
|  +2.7% | +34.59ms | 89.7% → 92.4% | 1.26s → 1.30s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |    Delta |            % |              Time | Contentions | Function             | Location                                                                                 |
| ------: | -------: | -----------: | ----------------: | ----------: | -------------------- | ---------------------------------------------------------------------------------------- |
|  -26.5% | -38.41ms | 10.3% → 7.6% | 145.1ms → 106.7ms |          11 | `runtime.chanrecv1`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |
| removed |  -0.03ms | <0.1% → 0.0% |      30.9µs → 0ms |       2 → 0 | `sync.(*Mutex).Lock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`    |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

| Change |    Delta |      % |          Time | Contentions | Location                                                                                   |
| -----: | -------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------ |
|  +2.7% | +34.59ms | 100.0% | 1.26s → 1.30s |           1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

| Change |    Delta |      % |              Time | Contentions | Location                                                                                 |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------------------------------------- |
| -26.5% | -38.41ms | 100.0% | 145.1ms → 106.7ms |          11 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:509` |

##### `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`)

|  Change |   Delta |             % |         Time | Contentions | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------------------------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 30.9µs → 0ms |       2 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:46` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

| Change |    Delta |      % |          Time | Contentions | Caller          | Location          |
| -----: | -------: | -----: | ------------: | ----------: | --------------- | ----------------- |
|  +2.7% | +34.59ms | 100.0% | 1.26s → 1.30s |           1 | `main.workload` | `./profile.go:16` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|  Change |    Delta |      % |              Time | Contentions | Caller                         | Location                                                                                        |
| ------: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -26.5% | -38.42ms | 100.0% | 145.1ms → 106.7ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
| +117.6% |  +0.01ms |  <0.1% |    6.6µs → 14.4µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

##### `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`)

|  Change |   Delta |            % |         Time | Contentions | Caller                 | Location                                                                              |
| ------: | ------: | -----------: | -----------: | ----------: | ---------------------- | ------------------------------------------------------------------------------------- |
| removed | -0.02ms | 65.5% → 0.0% | 20.2µs → 0ms |       1 → 0 | `sync.(*Once).doSlow`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`  |
| removed | -0.01ms | 34.5% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pinSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |           Time | Contentions | Function                                       | Location                                                                                                          |
| ------: | -------: | ------------: | -------------: | ----------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|   +2.7% | +34.59ms | 89.7% → 92.4% |  1.26s → 1.30s |           1 | `sync.(*WaitGroup).Wait`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`                        |
|   +2.7% | +34.59ms | 89.7% → 92.4% |  1.26s → 1.30s |           1 | `main.workload`                                | `./profile.go:16`                                                                                                 |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `runtime.mallocgcSmallScanHeader`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`                       |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `runtime.newarray`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`                       |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newarray`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`                       |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newGroups`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`           |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*table).reset`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`           |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newTable`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`            |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*Map).growToTable`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`             |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `runtime.mapassign_faststr`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `runtime.gcBgMarkStartWorkers`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`                          |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `runtime.gcStart`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`                           |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                       |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`                 |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`                 |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`                  |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`                  |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`                  |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`                  |

##### Standard library

|  Change |    Delta |             % |           Time | Contentions | Function                                       | Location                                                                                                          |
| ------: | -------: | ------------: | -------------: | ----------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|   +2.7% | +34.59ms | 89.7% → 92.4% |  1.26s → 1.30s |           1 | `sync.(*WaitGroup).Wait`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`                        |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `runtime.mallocgcSmallScanHeader`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`                       |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `runtime.newarray`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`                       |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newarray`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`                       |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newGroups`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`           |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*table).reset`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`           |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newTable`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`            |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*Map).growToTable`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`             |
|     new |  +0.01ms |  0.0% → <0.1% |   0ms → 14.4µs |      0 → 10 | `runtime.mapassign_faststr`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                       |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`                 |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`                 |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`                  |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`                  |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`                  |
| +117.6% |  +0.01ms |         <0.1% | 6.6µs → 14.4µs |          10 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`                  |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time | Contentions | Function                                                                                                                     | Location                                                                                          |
| ------: | -------: | -----------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -26.5% | -38.42ms | 10.3% → 7.6% | 145.1ms → 106.7ms |           1 | `runtime/pprof.StopCPUProfile`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`   |
|  -26.5% | -38.41ms | 10.3% → 7.6% | 145.1ms → 106.7ms |          11 | `runtime.chanrecv1`                                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`          |
|   -0.3% |  -3.83ms |       100.0% |     1.41s → 1.40s |           2 | `main.main`                                                                                                                  | `./profile.go:61`                                                                                 |
|   -0.3% |  -3.83ms |       100.0% |     1.41s → 1.40s |           2 | `runtime.main`                                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
| removed |  -0.03ms | <0.1% → 0.0% |      30.9µs → 0ms |       2 → 0 | `sync.(*Mutex).Lock`                                                                                                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`             |
| removed |  -0.03ms | <0.1% → 0.0% |      30.9µs → 0ms |       2 → 0 | `encoding/json.Marshal`                                                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  -61.6% |  -0.02ms |        <0.1% |   37.5µs → 14.4µs |     12 → 10 | `main.workload.func1`                                                                                                        | `./profile.go:25`                                                                                 |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `sync.(*Once).doSlow`                                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`              |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `sync.(*Once).Do`                                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52`              |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`          |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.func2`                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`  |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).reflectValue`                                                                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).marshal`                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pinSlow`                                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`             |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pin`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`             |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `sync.(*Pool).Get`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`             |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `encoding/json.newEncodeState`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`  |
| removed |  -0.01ms | <0.1% → 0.0% |       6.6µs → 0ms |      10 → 0 | `runtime.mallocgcSmallScanNoHeader`                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`       |
| removed |  -0.01ms | <0.1% → 0.0% |       6.6µs → 0ms |      10 → 0 | `runtime.convTstring`                                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`         |
| removed |  -0.01ms | <0.1% → 0.0% |       6.6µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface`                                                                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### Standard library

|  Change |    Delta |            % |              Time | Contentions | Function                                                                                                                     | Location                                                                                          |
| ------: | -------: | -----------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -26.5% | -38.42ms | 10.3% → 7.6% | 145.1ms → 106.7ms |           1 | `runtime/pprof.StopCPUProfile`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`   |
|  -26.5% | -38.41ms | 10.3% → 7.6% | 145.1ms → 106.7ms |          11 | `runtime.chanrecv1`                                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`          |
|   -0.3% |  -3.83ms |       100.0% |     1.41s → 1.40s |           2 | `runtime.main`                                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
| removed |  -0.03ms | <0.1% → 0.0% |      30.9µs → 0ms |       2 → 0 | `sync.(*Mutex).Lock`                                                                                                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`             |
| removed |  -0.03ms | <0.1% → 0.0% |      30.9µs → 0ms |       2 → 0 | `encoding/json.Marshal`                                                                                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `sync.(*Once).doSlow`                                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`              |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `sync.(*Once).Do`                                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52`              |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`          |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.func2`                                                                                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`  |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).reflectValue`                                                                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).marshal`                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pinSlow`                                                                                                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`             |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pin`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`             |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `sync.(*Pool).Get`                                                                                                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`             |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `encoding/json.newEncodeState`                                                                                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`  |
| removed |  -0.01ms | <0.1% → 0.0% |       6.6µs → 0ms |      10 → 0 | `runtime.mallocgcSmallScanNoHeader`                                                                                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`       |
| removed |  -0.01ms | <0.1% → 0.0% |       6.6µs → 0ms |      10 → 0 | `runtime.convTstring`                                                                                                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`         |
| removed |  -0.01ms | <0.1% → 0.0% |       6.6µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface`                                                                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

| Change |    Delta |      % |          Time | Contentions | Caller          | Location          |
| -----: | -------: | -----: | ------------: | ----------: | --------------- | ----------------- |
|  +2.7% | +34.59ms | 100.0% | 1.26s → 1.30s |           1 | `main.workload` | `./profile.go:16` |

##### `main.workload` (`./profile.go:16`)

| Change |    Delta |      % |          Time | Contentions | Caller      | Location          |
| -----: | -------: | -----: | ------------: | ----------: | ----------- | ----------------- |
|  +2.7% | +34.59ms | 100.0% | 1.26s → 1.30s |           1 | `main.main` | `./profile.go:61` |

##### `runtime.mallocgcSmallScanHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`)

| Change |   Delta |             % |         Time | Contentions | Caller             | Location                                                                                    |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`)

| Change |   Delta |             % |         Time | Contentions | Caller                           | Location                                                                                    |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230` |

##### `internal/runtime/maps.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`)

| Change |   Delta |             % |         Time | Contentions | Caller                            | Location                                                                                                |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newGroups` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318` |

##### `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`)

| Change |   Delta |             % |         Time | Contentions | Caller                                 | Location                                                                                                |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*table).reset` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101` |

##### `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`)

| Change |   Delta |             % |         Time | Contentions | Caller                           | Location                                                                                               |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73` |

##### `internal/runtime/maps.newTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`)

| Change |   Delta |             % |         Time | Contentions | Caller                                     | Location                                                                                              |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*Map).growToTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608` |

##### `internal/runtime/maps.(*Map).growToTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`)

| Change |   Delta |             % |         Time | Contentions | Caller                      | Location                                                                                                          |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.mapassign_faststr` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |

##### `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`)

| Change |   Delta |             % |         Time | Contentions | Caller                                         | Location                                                                                          |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

|  Change |   Delta |      % |           Time | Contentions | Caller            | Location                                                                                |
| ------: | ------: | -----: | -------------: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|  Change |   Delta |             % |         Time | Contentions | Caller                              | Location                                                                                    |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------- |
|     new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.mallocgcSmallScanHeader`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594` |
| removed | -0.01ms | 100.0% → 0.0% |  6.6µs → 0ms |      10 → 0 | `runtime.mallocgcSmallScanNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|  Change |   Delta |             % |         Time | Contentions | Caller                | Location                                                                                    |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------- | ------------------------------------------------------------------------------------------- |
|     new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.newarray`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |
| removed | -0.01ms | 100.0% → 0.0% |  6.6µs → 0ms |      10 → 0 | `runtime.convTstring` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`   |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                         | Location                                                                                          |
| ------: | ------: | -----: | -------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                        | Location                                                                                          |
| ------: | ------: | -----: | -------------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                        | Location                                                                                          |
| ------: | ------: | -----: | -------------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|  Change |   Delta |      % |           Time | Contentions | Caller                               | Location                                                                                         |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                   | Location                                                                                         |
| ------: | ------: | -----: | -------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|  Change |   Delta |      % |           Time | Contentions | Caller                    | Location                                                                                         |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|  Change |   Delta |      % |           Time | Contentions | Caller                | Location          |
| ------: | ------: | -----: | -------------: | ----------: | --------------------- | ----------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `main.workload.func1` | `./profile.go:25` |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

| Change |    Delta |      % |              Time | Contentions | Caller      | Location          |
| -----: | -------: | -----: | ----------------: | ----------: | ----------- | ----------------- |
| -26.5% | -38.42ms | 100.0% | 145.1ms → 106.7ms |           1 | `main.main` | `./profile.go:61` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

|  Change |    Delta |      % |              Time | Contentions | Caller                         | Location                                                                                        |
| ------: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -26.5% | -38.42ms | 100.0% | 145.1ms → 106.7ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
| +117.6% |  +0.01ms |  <0.1% |    6.6µs → 14.4µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

##### `main.main` (`./profile.go:61`)

| Change |   Delta |      % |          Time | Contentions | Caller         | Location                                                                                 |
| -----: | ------: | -----: | ------------: | ----------: | -------------- | ---------------------------------------------------------------------------------------- |
|  -0.3% | -3.83ms | 100.0% | 1.41s → 1.40s |           2 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

##### `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`)

|  Change |   Delta |            % |         Time | Contentions | Caller                 | Location                                                                              |
| ------: | ------: | -----------: | -----------: | ----------: | ---------------------- | ------------------------------------------------------------------------------------- |
| removed | -0.02ms | 65.5% → 0.0% | 20.2µs → 0ms |       1 → 0 | `sync.(*Once).doSlow`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`  |
| removed | -0.01ms | 34.5% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pinSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|  Change |   Delta |             % |         Time | Contentions | Caller                | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------- | ----------------- |
| removed | -0.03ms | 100.0% → 0.0% | 30.9µs → 0ms |       2 → 0 | `main.workload.func1` | `./profile.go:25` |

##### `sync.(*Once).doSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`)

|  Change |   Delta |             % |         Time | Contentions | Caller            | Location                                                                             |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------- | ------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `sync.(*Once).Do` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52` |

##### `sync.(*Once).Do` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                                                                                                       | Location                                                                                 |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57` |

##### `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`)

|  Change |   Delta |             % |         Time | Contentions | Caller                            | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |

##### `encoding/json.typeEncoder.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                      | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                 | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|  Change |   Delta |             % |         Time | Contentions | Caller                  | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

|  Change |   Delta |             % |         Time | Contentions | Caller             | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `sync.(*Pool).pin` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`)

|  Change |   Delta |             % |         Time | Contentions | Caller             | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Pool).Get` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131` |

##### `sync.(*Pool).Get` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`)

|  Change |   Delta |             % |         Time | Contentions | Caller                         | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `encoding/json.newEncodeState` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

|  Change |   Delta |             % |         Time | Contentions | Caller                  | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|  Change |   Delta |             % |        Time | Contentions | Caller             | Location                                                                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 6.6µs → 0ms |      10 → 0 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.convTstring` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                          | Location                                                                                          |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 6.6µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                        | Location                                                                                          |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 6.6µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.workload` (`./profile.go:16`)

| Change |    Delta |      % |          Time | Contentions | Callee                   | Location                                                                                   |
| -----: | -------: | -----: | ------------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
|  +2.7% | +34.59ms | 100.0% | 1.26s → 1.30s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

##### `runtime.mallocgcSmallScanHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`)

| Change |   Delta |             % |         Time | Contentions | Callee            | Location                                                                                |
| -----: | ------: | ------------: | -----------: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`)

| Change |   Delta |             % |         Time | Contentions | Callee             | Location                                                                                    |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `internal/runtime/maps.newarray` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230`)

| Change |   Delta |             % |         Time | Contentions | Callee             | Location                                                                                    |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199` |

##### `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`)

| Change |   Delta |             % |         Time | Contentions | Callee                           | Location                                                                                    |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newarray` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230` |

##### `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`)

| Change |   Delta |             % |         Time | Contentions | Callee                            | Location                                                                                                |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newGroups` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318` |

##### `internal/runtime/maps.newTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`)

| Change |   Delta |             % |         Time | Contentions | Callee                                 | Location                                                                                                |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*table).reset` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101` |

##### `internal/runtime/maps.(*Map).growToTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`)

| Change |   Delta |             % |         Time | Contentions | Callee                           | Location                                                                                               |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.newTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73` |

##### `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`)

| Change |   Delta |             % |         Time | Contentions | Callee                                     | Location                                                                                              |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `internal/runtime/maps.(*Map).growToTable` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

|  Change |   Delta |      % |           Time | Contentions | Callee              | Location                                                                                 |
| ------: | ------: | -----: | -------------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|  Change |   Delta |      % |           Time | Contentions | Callee                         | Location                                                                                 |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|  Change |   Delta |             % |         Time | Contentions | Callee                              | Location                                                                                    |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------- |
|     new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |      0 → 10 | `runtime.mallocgcSmallScanHeader`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594` |
| removed | -0.01ms | 100.0% → 0.0% |  6.6µs → 0ms |      10 → 0 | `runtime.mallocgcSmallScanNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |   Delta |             % |           Time | Contentions | Callee                                          | Location                                                                                          |
| ------: | ------: | ------------: | -------------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms |        100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| +117.6% | +0.01ms |        100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| removed | -0.01ms | 100.0% → 0.0% |    6.6µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |   Delta |             % |           Time | Contentions | Callee                                        | Location                                                                                                          |
| ------: | ------: | ------------: | -------------: | ----------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|     new | +0.01ms | 0.0% → 100.0% |   0ms → 14.4µs |      0 → 10 | `runtime.mapassign_faststr`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
| +117.6% | +0.01ms |        100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`                 |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                        | Location                                                                                          |
| ------: | ------: | -----: | -------------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                         | Location                                                                                          |
| ------: | ------: | -----: | -------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                | Location                                                                                         |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|  Change |   Delta |      % |           Time | Contentions | Callee                               | Location                                                                                         |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                   | Location                                                                                         |
| ------: | ------: | -----: | -------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +117.6% | +0.01ms | 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

| Change |    Delta |      % |              Time | Contentions | Callee              | Location                                                                                 |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| -26.5% | -38.42ms | 100.0% | 145.1ms → 106.7ms |           1 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `main.main` (`./profile.go:61`)

| Change |    Delta |             % |              Time | Contentions | Callee                         | Location                                                                                        |
| -----: | -------: | ------------: | ----------------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| -26.5% | -38.42ms |  10.3% → 7.6% | 145.1ms → 106.7ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
|  +2.7% | +34.59ms | 89.7% → 92.4% |     1.26s → 1.30s |           1 | `main.workload`                | `./profile.go:16`                                                                               |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

| Change |   Delta |      % |          Time | Contentions | Callee      | Location          |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ----------------- |
|  -0.3% | -3.83ms | 100.0% | 1.41s → 1.40s |           2 | `main.main` | `./profile.go:61` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|  Change |   Delta |            % |         Time | Contentions | Callee                                 | Location                                                                                         |
| ------: | ------: | -----------: | -----------: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.02ms | 65.5% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| removed | -0.01ms | 34.5% → 0.0% | 10.7µs → 0ms |       1 → 0 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

##### `main.workload.func1` (`./profile.go:25`)

|  Change |   Delta |              % |           Time | Contentions | Callee                    | Location                                                                                         |
| ------: | ------: | -------------: | -------------: | ----------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.03ms |   82.3% → 0.0% |   30.9µs → 0ms |       2 → 0 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| +117.6% | +0.01ms | 17.7% → 100.0% | 6.6µs → 14.4µs |          10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `sync.(*Once).doSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`)

|  Change |   Delta |             % |         Time | Contentions | Callee               | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------- | ------------------------------------------------------------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `sync.(*Mutex).Lock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45` |

##### `sync.(*Once).Do` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52`)

|  Change |   Delta |             % |         Time | Contentions | Callee                | Location                                                                             |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------- | ------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `sync.(*Once).doSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73` |

##### `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`)

|  Change |   Delta |             % |         Time | Contentions | Callee            | Location                                                                             |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------- | ------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `sync.(*Once).Do` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:52` |

##### `encoding/json.typeEncoder.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                                                                                                       | Location                                                                                 |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|  Change |   Delta |             % |         Time | Contentions | Callee                            | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.typeEncoder.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                      | Location                                                                                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 20.2µs → 0ms |       1 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

|  Change |   Delta |             % |         Time | Contentions | Callee               | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------- | ------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Mutex).Lock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45` |

##### `sync.(*Pool).pin` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`)

|  Change |   Delta |             % |         Time | Contentions | Callee                 | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------- | ------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pinSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223` |

##### `sync.(*Pool).Get` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`)

|  Change |   Delta |             % |         Time | Contentions | Callee             | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

|  Change |   Delta |             % |         Time | Contentions | Callee             | Location                                                                              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.7µs → 0ms |       1 → 0 | `sync.(*Pool).Get` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

|  Change |   Delta |             % |        Time | Contentions | Callee            | Location                                                                                |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 6.6µs → 0ms |      10 → 0 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.convTstring` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`)

|  Change |   Delta |             % |        Time | Contentions | Callee             | Location                                                                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 6.6µs → 0ms |      10 → 0 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|  Change |   Delta |             % |        Time | Contentions | Callee                | Location                                                                                  |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------- | ----------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 6.6µs → 0ms |      10 → 0 | `runtime.convTstring` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

| Change |    Delta |             % |          Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -----: | -------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +2.7% | +34.59ms | 89.7% → 92.4% | 1.26s → 1.30s |           1 | `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`) ← `main.workload` (`./profile.go:16`) ← `main.main` (61) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    new |  +0.01ms |  0.0% → <0.1% |  0ms → 14.4µs |      0 → 10 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallScanHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`) ← `runtime.mallocgc` (1067) ← `runtime.newarray` (2199) ← `internal/runtime/maps.newarray` (2230) ← `internal/runtime/maps.newGroups` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318`) ← `internal/runtime/maps.(*table).reset` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`) ← `internal/runtime/maps.newTable` (73) ← `internal/runtime/maps.(*Map).growToTable` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/map.go:608`) ← `runtime.mapassign_faststr` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |    Delta |            % |              Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------: | -------: | -----------: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -26.5% | -38.42ms | 10.3% → 7.6% | 145.1ms → 106.7ms |           1 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`) ← `main.main` (`./profile.go:61`) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -0.02ms | <0.1% → 0.0% |      20.2µs → 0ms |       1 → 0 | `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`) ← `sync.(*Once).doSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`) ← `sync.(*Once).Do` (52) ← `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`) ← `encoding/json.typeEncoder.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |  -0.01ms | <0.1% → 0.0% |      10.7µs → 0ms |       1 → 0 | `sync.(*Mutex).Lock` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:45`) ← `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`) ← `sync.(*Pool).pin` (202) ← `sync.(*Pool).Get` (131) ← `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -0.01ms | <0.1% → 0.0% |       6.6µs → 0ms |      10 → 0 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `runtime.convTstring` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/iface.go:419`) ← `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |

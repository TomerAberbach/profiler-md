# Contention profile diff

Blocked 1.51s (+1.17ms, +0.1%) over 13 contentions (115.9ms → 116.0ms per contention).

| Category         | Change |   Delta |      % |  Time | Contentions |
| ---------------- | -----: | ------: | -----: | ----: | ----------: |
| Standard library |  +0.1% | +1.17ms | 100.0% | 1.51s |          13 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 1.51s (100.0%) runtime.main at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149
    └── 1.51s (100.0%) main.main at ./profile.go:82
        ├── 1.32s → 1.34s (87.8% → 89.0%) main.workload at 16
        │   └── 1.32s → 1.34s (87.8% → 89.0%) sync.(*WaitGroup).Wait at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160
        └── 178.4ms → 161.0ms (11.8% → 10.7%) runtime/pprof.StopCPUProfile at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950
            └── 178.4ms → 161.0ms (11.8% → 10.7%) runtime.chanrecv1 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |    Delta |             % |          Time | Contentions | Function                 | Location                                                                                   |
| -----: | -------: | ------------: | ------------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
|  +1.5% | +19.46ms | 87.8% → 89.0% | 1.32s → 1.34s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |    Delta |             % |              Time | Contentions | Function            | Location                                                                                 |
| -----: | -------: | ------------: | ----------------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
|  -9.9% | -18.29ms | 12.2% → 11.0% | 184.1ms → 165.8ms |          12 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

| Change |    Delta |      % |          Time | Contentions | Location                                                                                   |
| -----: | -------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------ |
|  +1.5% | +19.46ms | 100.0% | 1.32s → 1.34s |           1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

| Change |    Delta |      % |              Time | Contentions | Location                                                                                 |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------------------------------------- |
|  -9.9% | -18.29ms | 100.0% | 184.1ms → 165.8ms |          12 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:509` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

| Change |    Delta |      % |          Time | Contentions | Caller          | Location          |
| -----: | -------: | -----: | ------------: | ----------: | --------------- | ----------------- |
|  +1.5% | +19.46ms | 100.0% | 1.32s → 1.34s |           1 | `main.workload` | `./profile.go:16` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

| Change |    Delta |             % |              Time | Contentions | Caller                         | Location                                                                                        |
| -----: | -------: | ------------: | ----------------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -9.8% | -17.45ms | 96.9% → 97.1% | 178.4ms → 161.0ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
| -14.9% |  -0.84ms |   3.1% → 2.9% |     5.7ms → 4.8ms |           1 | `main.leakWorkers`             | `./profile.go:49`                                                                               |
| +54.4% |  +0.01ms |         <0.1% |   11.0µs → 16.9µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |             % |            Time | Contentions | Function                                       | Location                                                                                          |
| -----: | -------: | ------------: | --------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.5% | +19.46ms | 87.8% → 89.0% |   1.32s → 1.34s |           1 | `sync.(*WaitGroup).Wait`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`        |
|  +1.5% | +19.46ms | 87.8% → 89.0% |   1.32s → 1.34s |           1 | `main.workload`                                | `./profile.go:16`                                                                                 |
|  +0.1% |  +1.17ms |        100.0% |           1.51s |           3 | `main.main`                                    | `./profile.go:82`                                                                                 |
|  +0.1% |  +1.17ms |        100.0% |           1.51s |           3 | `runtime.main`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
|    new |  +0.02ms |  0.0% → <0.1% |    0ms → 16.9µs |      0 → 10 | `runtime.mallocgcSmallScanNoHeader`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`       |
|    new |  +0.02ms |  0.0% → <0.1% |    0ms → 16.9µs |      0 → 10 | `runtime.growslice`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`         |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `runtime.gcBgMarkStartWorkers`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`          |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `runtime.gcStart`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`           |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `main.workload.func1`                          | `./profile.go:25`                                                                                 |

##### Standard library

| Change |    Delta |             % |            Time | Contentions | Function                                       | Location                                                                                          |
| -----: | -------: | ------------: | --------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.5% | +19.46ms | 87.8% → 89.0% |   1.32s → 1.34s |           1 | `sync.(*WaitGroup).Wait`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`        |
|  +0.1% |  +1.17ms |        100.0% |           1.51s |           3 | `runtime.main`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
|    new |  +0.02ms |  0.0% → <0.1% |    0ms → 16.9µs |      0 → 10 | `runtime.mallocgcSmallScanNoHeader`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`       |
|    new |  +0.02ms |  0.0% → <0.1% |    0ms → 16.9µs |      0 → 10 | `runtime.growslice`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`         |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| +54.4% |  +0.01ms |         <0.1% | 11.0µs → 16.9µs |          10 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time | Contentions | Function                                        | Location                                                                                          |
| ------: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|   -9.9% | -18.29ms | 12.2% → 11.0% | 184.1ms → 165.8ms |          12 | `runtime.chanrecv1`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`          |
|   -9.8% | -17.45ms | 11.8% → 10.7% | 178.4ms → 161.0ms |           1 | `runtime/pprof.StopCPUProfile`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`   |
|  -14.9% |  -0.84ms |   0.4% → 0.3% |     5.7ms → 4.8ms |           1 | `main.leakWorkers`                              | `./profile.go:49`                                                                                 |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `runtime.mallocgcSmallNoscan`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`       |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `runtime.makeslice`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`         |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `encoding/json.unquote`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### Standard library

|  Change |    Delta |             % |              Time | Contentions | Function                                        | Location                                                                                          |
| ------: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|   -9.9% | -18.29ms | 12.2% → 11.0% | 184.1ms → 165.8ms |          12 | `runtime.chanrecv1`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`          |
|   -9.8% | -17.45ms | 11.8% → 10.7% | 178.4ms → 161.0ms |           1 | `runtime/pprof.StopCPUProfile`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`   |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `runtime.mallocgcSmallNoscan`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`       |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `runtime.makeslice`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`         |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `encoding/json.unquote`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

| Change |    Delta |      % |          Time | Contentions | Caller          | Location          |
| -----: | -------: | -----: | ------------: | ----------: | --------------- | ----------------- |
|  +1.5% | +19.46ms | 100.0% | 1.32s → 1.34s |           1 | `main.workload` | `./profile.go:16` |

##### `main.workload` (`./profile.go:16`)

| Change |    Delta |      % |          Time | Contentions | Caller      | Location          |
| -----: | -------: | -----: | ------------: | ----------: | ----------- | ----------------- |
|  +1.5% | +19.46ms | 100.0% | 1.32s → 1.34s |           1 | `main.main` | `./profile.go:82` |

##### `main.main` (`./profile.go:82`)

| Change |   Delta |      % |  Time | Contentions | Caller         | Location                                                                                 |
| -----: | ------: | -----: | ----: | ----------: | -------------- | ---------------------------------------------------------------------------------------- |
|  +0.1% | +1.17ms | 100.0% | 1.51s |           3 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

| Change |   Delta |             % |         Time | Contentions | Caller             | Location                                                                                    |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.growslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`)

| Change |   Delta |             % |         Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `encoding/json.(*decodeState).arrayInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

| Change |   Delta |      % |            Time | Contentions | Caller            | Location                                                                                |
| -----: | ------: | -----: | --------------: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|  Change |   Delta |             % |         Time | Contentions | Caller                              | Location                                                                                    |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------- |
|     new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `runtime.mallocgcSmallScanNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503` |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `runtime.mallocgcSmallNoscan`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|  Change |   Delta |             % |         Time | Contentions | Caller              | Location                                                                                  |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------- | ----------------------------------------------------------------------------------------- |
|     new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `runtime.growslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178` |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |   Delta |             % |            Time | Contentions | Caller                                         | Location                                                                                          |
| ------: | ------: | ------------: | --------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% |    11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|  +54.4% | +0.01ms |        100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |   Delta |             % |            Time | Contentions | Caller                                        | Location                                                                                          |
| ------: | ------: | ------------: | --------------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% |    11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|  +54.4% | +0.01ms |        100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |   Delta |      % |            Time | Contentions | Caller                                        | Location                                                                                          |
| -----: | ------: | -----: | --------------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

| Change |   Delta |      % |            Time | Contentions | Caller                               | Location                                                                                         |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

| Change |   Delta |      % |            Time | Contentions | Caller                                   | Location                                                                                         |
| -----: | ------: | -----: | --------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

| Change |   Delta |      % |            Time | Contentions | Caller                    | Location                                                                                         |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |   Delta |      % |            Time | Contentions | Caller                | Location          |
| -----: | ------: | -----: | --------------: | ----------: | --------------------- | ----------------- |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `main.workload.func1` | `./profile.go:25` |

##### `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`)

| Change |    Delta |             % |              Time | Contentions | Caller                         | Location                                                                                        |
| -----: | -------: | ------------: | ----------------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -9.8% | -17.45ms | 96.9% → 97.1% | 178.4ms → 161.0ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
| -14.9% |  -0.84ms |   3.1% → 2.9% |     5.7ms → 4.8ms |           1 | `main.leakWorkers`             | `./profile.go:49`                                                                               |
| +54.4% |  +0.01ms |         <0.1% |   11.0µs → 16.9µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`        |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

| Change |    Delta |      % |              Time | Contentions | Caller      | Location          |
| -----: | -------: | -----: | ----------------: | ----------: | ----------- | ----------------- |
|  -9.8% | -17.45ms | 100.0% | 178.4ms → 161.0ms |           1 | `main.main` | `./profile.go:82` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |   Delta |      % |          Time | Contentions | Caller      | Location          |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ----------------- |
| -14.9% | -0.84ms | 100.0% | 5.7ms → 4.8ms |           1 | `main.main` | `./profile.go:82` |

##### `runtime.mallocgcSmallNoscan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`)

|  Change |   Delta |             % |         Time | Contentions | Caller             | Location                                                                                    |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`)

|  Change |   Delta |             % |         Time | Contentions | Caller                       | Location                                                                                          |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|  Change |   Delta |             % |         Time | Contentions | Caller                  | Location                                                                                          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                          | Location                                                                                          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                        | Location                                                                                          |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.workload` (`./profile.go:16`)

| Change |    Delta |      % |          Time | Contentions | Callee                   | Location                                                                                   |
| -----: | -------: | -----: | ------------: | ----------: | ------------------------ | ------------------------------------------------------------------------------------------ |
|  +1.5% | +19.46ms | 100.0% | 1.32s → 1.34s |           1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

##### `main.main` (`./profile.go:82`)

| Change |    Delta |             % |              Time | Contentions | Callee                         | Location                                                                                        |
| -----: | -------: | ------------: | ----------------: | ----------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
|  +1.5% | +19.46ms | 87.8% → 89.0% |     1.32s → 1.34s |           1 | `main.workload`                | `./profile.go:16`                                                                               |
|  -9.8% | -17.45ms | 11.8% → 10.7% | 178.4ms → 161.0ms |           1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |
| -14.9% |  -0.84ms |   0.4% → 0.3% |     5.7ms → 4.8ms |           1 | `main.leakWorkers`             | `./profile.go:49`                                                                               |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

| Change |   Delta |      % |  Time | Contentions | Callee      | Location          |
| -----: | ------: | -----: | ----: | ----------: | ----------- | ----------------- |
|  +0.1% | +1.17ms | 100.0% | 1.51s |           3 | `main.main` | `./profile.go:82` |

##### `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`)

| Change |   Delta |             % |         Time | Contentions | Callee            | Location                                                                                |
| -----: | ------: | ------------: | -----------: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.growslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`)

| Change |   Delta |             % |         Time | Contentions | Callee             | Location                                                                                    |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`)

| Change |   Delta |      % |            Time | Contentions | Callee              | Location                                                                                 |
| -----: | ------: | -----: | --------------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

| Change |   Delta |      % |            Time | Contentions | Callee                         | Location                                                                                 |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|  Change |   Delta |             % |         Time | Contentions | Callee                              | Location                                                                                    |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------- | ------------------------------------------------------------------------------------------- |
|     new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `runtime.mallocgcSmallScanNoHeader` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503` |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `runtime.mallocgcSmallNoscan`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |   Delta |             % |            Time | Contentions | Callee                                          | Location                                                                                          |
| ------: | ------: | ------------: | --------------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% |    11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| removed | -0.01ms | 100.0% → 0.0% |    11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  +54.4% | +0.01ms |        100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |   Delta |      % |            Time | Contentions | Callee                                        | Location                                                                                          |
| -----: | ------: | -----: | --------------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                        | Location                                                                                          |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new | +0.02ms | 0.0% → 100.0% | 0ms → 16.9µs |      0 → 10 | `runtime.growslice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`         |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

| Change |   Delta |      % |            Time | Contentions | Callee                                         | Location                                                                                          |
| -----: | ------: | -----: | --------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

| Change |   Delta |      % |            Time | Contentions | Callee                                | Location                                                                                         |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

| Change |   Delta |      % |            Time | Contentions | Callee                               | Location                                                                                         |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |   Delta |      % |            Time | Contentions | Callee                                   | Location                                                                                         |
| -----: | ------: | -----: | --------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `main.workload.func1` (`./profile.go:25`)

| Change |   Delta |      % |            Time | Contentions | Callee                    | Location                                                                                         |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| +54.4% | +0.01ms | 100.0% | 11.0µs → 16.9µs |          10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`)

| Change |    Delta |      % |              Time | Contentions | Callee              | Location                                                                                 |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
|  -9.8% | -17.45ms | 100.0% | 178.4ms → 161.0ms |           1 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |   Delta |      % |          Time | Contentions | Callee              | Location                                                                                 |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ---------------------------------------------------------------------------------------- |
| -14.9% | -0.84ms | 100.0% | 5.7ms → 4.8ms |           1 | `runtime.chanrecv1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508` |

##### `runtime.mallocgcSmallNoscan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`)

|  Change |   Delta |             % |         Time | Contentions | Callee            | Location                                                                                |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------- | --------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `runtime.gcStart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733` |

##### `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`)

|  Change |   Delta |             % |         Time | Contentions | Callee             | Location                                                                                    |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|  Change |   Delta |             % |         Time | Contentions | Callee              | Location                                                                                  |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------- | ----------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|  Change |   Delta |             % |         Time | Contentions | Callee                       | Location                                                                                          |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|  Change |   Delta |             % |         Time | Contentions | Callee                  | Location                                                                                          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.0µs → 0ms |      10 → 0 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

| Change |    Delta |             % |          Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -----: | -------: | ------------: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +1.5% | +19.46ms | 87.8% → 89.0% | 1.32s → 1.34s |           1 | `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`) ← `main.workload` (`./profile.go:16`) ← `main.main` (82) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    new |  +0.02ms |  0.0% → <0.1% |  0ms → 16.9µs |      0 → 10 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallScanNoHeader` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `runtime.growslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`) ← `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |    Delta |             % |              Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------: | -------: | ------------: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -9.8% | -17.45ms | 11.8% → 10.7% | 178.4ms → 161.0ms |           1 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`) ← `main.main` (`./profile.go:82`) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -14.9% |  -0.84ms |   0.4% → 0.3% |     5.7ms → 4.8ms |           1 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `main.leakWorkers` (`./profile.go:49`) ← `main.main` (82) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |  -0.01ms |  <0.1% → 0.0% |      11.0µs → 0ms |      10 → 0 | `runtime.chanrecv1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/chan.go:508`) ← `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← `runtime.mallocgcSmallNoscan` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1358`) ← `runtime.mallocgc` (1067) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`) |

# Contention profile

Blocked 1.40s over 12 samples (117.5ms per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 1.40s |      12 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |  Time | Samples | Function                 | Location                                                                                   |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 92.4% | 1.30s |       1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Samples | Location                                                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.30s |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:206` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`)

|      % |  Time | Samples | Caller          | Location        |
| -----: | ----: | ------: | --------------- | --------------- |
| 100.0% | 1.30s |       1 | `main.workload` | `profile.go:16` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|      % |    Time | Samples | Function                       | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1.40s |       2 | `main.main`                    | `profile.go:61`                                                                                  |
|  92.4% |   1.30s |       1 | `sync.(*WaitGroup).Wait`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`       |
|  92.4% |   1.30s |       1 | `main.workload`                | `profile.go:16`                                                                                  |
|   7.6% | 106.7ms |       1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`  |
|  <0.1% |  14.4µs |      10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`         |
|  <0.1% |  14.4µs |      10 | `runtime.gcStart`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`          |
|  <0.1% |  14.4µs |      10 | `encoding/json.Unmarshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  <0.1% |  14.4µs |      10 | `main.workload.func1`          | `profile.go:25`                                                                                  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.main` (`profile.go:61`)

|     % |    Time | Samples | Callee                         | Location                                                                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| 92.4% |   1.30s |       1 | `main.workload`                | `profile.go:16`                                                                                 |
|  7.6% | 106.7ms |       1 | `runtime/pprof.StopCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950` |

##### `main.workload` (`profile.go:16`)

|      % |  Time | Samples | Callee                   | Location                                                                                   |
| -----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% | 1.30s |       1 | `sync.(*WaitGroup).Wait` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160` |

##### `runtime.gcStart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`)

|      % |   Time | Samples | Callee                         | Location                                                                                 |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 14.4µs |      10 | `runtime.gcBgMarkStartWorkers` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672` |

##### `main.workload.func1` (`profile.go:25`)

|      % |   Time | Samples | Callee                    | Location                                                                                         |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 14.4µs |      10 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame. `…` stands for frames the entry filter hides.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.4% |   1.30s |       1 | `sync.(*WaitGroup).Wait` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/waitgroup.go:160`) ← `main.workload` (`profile.go:16`) ← `main.main` (61)                                                                                                                                                     |
|  7.6% | 106.7ms |       1 | `runtime/pprof.StopCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:950`) ← `main.main` (`profile.go:61`)                                                                                                                                                                 |
| <0.1% |  14.4µs |      10 | `runtime.gcBgMarkStartWorkers` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1672`) ← `runtime.gcStart` (733) ← … ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`) |

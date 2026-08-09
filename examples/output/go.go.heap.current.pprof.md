# Allocated heap profile

Allocated 1.67 GiB over 21,882,354 objects (82.1 B per object).

| Category         |      % |     Size |    Objects |
| ---------------- | -----: | -------: | ---------: |
| Standard library | 100.0% | 1.67 GiB | 21,882,098 |
| Ours             |  <0.1% | 4.01 KiB |        256 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                        | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 10.6% |  181 MiB |     400 | `encoding/json.Marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  0.1% | 1.13 MiB |       2 | `runtime/pprof.StartCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`  |
| <0.1% | 77.3 KiB |     550 | `encoding/json.Unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| <0.1% | 4.01 KiB |     256 | `main.workload.func1`           | `profile.go:25`                                                                                  |

#### Categories

##### Standard library

|     % |     Size | Objects | Function                        | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 10.6% |  181 MiB |     400 | `encoding/json.Marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  0.1% | 1.13 MiB |       2 | `runtime/pprof.StartCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`  |
| <0.1% | 77.3 KiB |     550 | `encoding/json.Unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 181 MiB |     400 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213` |

##### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Objects | Location                                                                                        |
| -----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.13 MiB |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |     Size | Objects | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 77.3 KiB |     550 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:106` |

##### `main.workload.func1` (`profile.go:25`)

|      % |     Size | Objects | Location        |
| -----: | -------: | ------: | --------------- |
| 100.0% | 4.01 KiB |     256 | `profile.go:28` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Objects | Caller                | Location        |
| -----: | ------: | ------: | --------------------- | --------------- |
| 100.0% | 181 MiB |     400 | `main.workload.func1` | `profile.go:25` |

##### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Objects | Caller      | Location        |
| -----: | -------: | ------: | ----------- | --------------- |
| 100.0% | 1.13 MiB |       2 | `main.main` | `profile.go:61` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |     Size | Objects | Caller                | Location        |
| -----: | -------: | ------: | --------------------- | --------------- |
| 100.0% | 77.3 KiB |     550 | `main.workload.func1` | `profile.go:25` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |    Objects | Function                        | Location                                                                                         |
| ----: | -------: | ---------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% | 1.67 GiB | 21,880,349 | `main.workload.func1`           | `profile.go:25`                                                                                  |
| 53.6% |  917 MiB | 11,225,798 | `encoding/json.Marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.3% |  793 MiB | 10,654,295 | `encoding/json.Unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  0.1% | 1.13 MiB |         53 | `main.main`                     | `profile.go:61`                                                                                  |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`  |
| <0.1% | 12.4 KiB |         82 | `runtime.gcBgMarkWorker`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
| <0.1% | 8.83 KiB |         13 | `runtime.gcStart.func4`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`          |
| <0.1% | 8.11 KiB |         74 | `runtime.gcMarkDone`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
| <0.1% | 5.08 KiB |          2 | `runtime.gcDrain`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`     |
| <0.1% | 5.08 KiB |          2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`     |
| <0.1% | 5.08 KiB |          2 | `runtime.gcBgMarkWorker.func2`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`         |
| <0.1% | 4.04 KiB |         51 | `path/filepath.Join`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`   |

#### Categories

##### Standard library

|     % |     Size |    Objects | Function                        | Location                                                                                         |
| ----: | -------: | ---------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.6% |  917 MiB | 11,225,798 | `encoding/json.Marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.3% |  793 MiB | 10,654,295 | `encoding/json.Unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`  |
| <0.1% | 4.04 KiB |         51 | `path/filepath.Join`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.workload.func1` (`profile.go:25`)

|     % |    Size |    Objects | Callee                    | Location                                                                                         |
| ----: | ------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.6% | 917 MiB | 11,225,798 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.4% | 793 MiB | 10,654,295 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `main.main` (`profile.go:61`)

|     % |     Size | Objects | Callee                          | Location                                                                                        |
| ----: | -------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| 99.7% | 1.13 MiB |       2 | `runtime/pprof.StartCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888` |
|  0.3% | 4.04 KiB |      51 | `path/filepath.Join`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`  |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|     % |     Size | Objects | Callee               | Location                                                                                 |
| ----: | -------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 65.6% | 8.11 KiB |      74 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcDrainMarkWorkerIdle` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

|      % |     Size | Objects | Callee            | Location                                                                                     |
| -----: | -------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 5.08 KiB |       2 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

|      % |     Size | Objects | Callee                          | Location                                                                                     |
| -----: | -------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 5.08 KiB |       2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |    Objects | Call stack                                                                                                                                                                                                                                                                            |
| ----: | -------: | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 53.6% |  917 MiB | 11,225,798 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                  |
| 46.3% |  793 MiB | 10,654,295 | `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`) ← `main.main` (`profile.go:61`)                                                                                                                     |
| <0.1% | 8.11 KiB |         74 | `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                     |
| <0.1% | 5.08 KiB |          2 | `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) |
| <0.1% | 4.04 KiB |         51 | `path/filepath.Join` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`) ← `main.main` (`profile.go:61`)                                                                                                                                 |

# Retained heap profile

Retained 1.59 MiB over 285 objects (5.71 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 1.59 MiB |     285 |

## Hottest functions

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Objects | Function                        | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.2% | 1.51 MiB |     132 | `encoding/json.Marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 95.2% | 1.51 MiB |     132 | `main.workload.func1`           | `profile.go:25`                                                                                  |
|  0.8% | 12.4 KiB |      82 | `runtime.gcBgMarkWorker`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
|  0.5% | 8.83 KiB |      13 | `runtime.gcStart.func4`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`          |
|  0.5% | 8.11 KiB |      74 | `runtime.gcMarkDone`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
|  0.3% | 5.08 KiB |       2 | `runtime.gcDrain`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`     |
|  0.3% | 5.08 KiB |       2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`     |
|  0.3% | 5.08 KiB |       2 | `runtime.gcBgMarkWorker.func2`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.workload.func1` (`profile.go:25`)

|      % |     Size | Objects | Callee                  | Location                                                                                         |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.51 MiB |     132 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|     % |     Size | Objects | Callee               | Location                                                                                 |
| ----: | -------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 65.6% | 8.11 KiB |      74 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcDrainMarkWorkerIdle` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

|      % |     Size | Objects | Callee            | Location                                                                                     |
| -----: | -------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 5.08 KiB |       2 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

|      % |     Size | Objects | Callee                          | Location                                                                                     |
| -----: | -------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 5.08 KiB |       2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.2% | 1.51 MiB |     132 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                  |
|  0.5% | 8.11 KiB |      74 | `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                     |
|  0.3% | 5.08 KiB |       2 | `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) |

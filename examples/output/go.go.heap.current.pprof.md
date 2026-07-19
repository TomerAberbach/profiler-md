# Allocated heap and retained heap profile

Allocated 1.67 GiB and retained 1.59 MiB over 21,882,356 samples (82.1 B and 0.0761 B per sample).

| Category |      % | Allocated | Retained |    Samples |
| -------- | -----: | --------: | -------: | ---------: |
| stdlib   | 100.0% |  1.67 GiB | 1.59 MiB | 21,882,100 |
| ours     |  <0.1% |  4.01 KiB |      0 B |        256 |

## Allocated heap

Hidden functions account for 89.3% of bytes allocated, so the hottest are also shown.

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size |   Samples | Function                                       | Location                                                                                          |
| ----: | -------: | --------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 32.5% |  556 MiB | 1,839,235 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 20.3% |  348 MiB |     4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 10.6% |  181 MiB |       400 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  0.1% | 1.13 MiB |         2 | `runtime/pprof.StartCPUProfile`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`   |
| <0.1% | 77.3 KiB |       550 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| <0.1% | 4.01 KiB |       256 | `main.workload.func1`                          | `profile.go:25`                                                                                   |

##### Lines

Lines ranked by contribution to each function's self size.

###### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|     % |    Size |   Samples | Location                                                                                          |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------- |
| 95.9% | 533 MiB | 1,337,626 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |
|  4.1% |  23 MiB |   501,609 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079` |

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Samples | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 348 MiB |   4,364 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

###### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Samples | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 181 MiB |     400 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213` |

###### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Samples | Location                                                                                        |
| -----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.13 MiB |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910` |

###### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |     Size | Samples | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 77.3 KiB |     550 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:106` |

###### `main.workload.func1` (`profile.go:25`)

|      % |     Size | Samples | Location        |
| -----: | -------: | ------: | --------------- |
| 100.0% | 4.01 KiB |     256 | `profile.go:28` |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

###### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |   Samples | Caller                                        | Location                                                                                          |
| -----: | ------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 556 MiB | 1,838,637 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Samples | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 348 MiB |   4,364 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

###### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Samples | Caller                | Location        |
| -----: | ------: | ------: | --------------------- | --------------- |
| 100.0% | 181 MiB |     400 | `main.workload.func1` | `profile.go:25` |

###### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Samples | Caller      | Location        |
| -----: | -------: | ------: | ----------- | --------------- |
| 100.0% | 1.13 MiB |       2 | `main.main` | `profile.go:61` |

###### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |     Size | Samples | Caller                | Location        |
| -----: | -------: | ------: | --------------------- | --------------- |
| 100.0% | 77.3 KiB |     550 | `main.workload.func1` | `profile.go:25` |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |    Samples | Function                                       | Location                                                                                          |
| ----: | -------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.8% | 1.67 GiB | 21,880,349 | `main.workload.func1`                          | `profile.go:25`                                                                                   |
| 53.6% |  917 MiB | 11,225,798 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 46.3% |  793 MiB | 10,654,295 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 46.3% |  792 MiB | 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 20.3% |  348 MiB |      4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  0.1% | 1.13 MiB |         55 | `main.main`                                    | `profile.go:61`                                                                                   |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`   |
| <0.1% | 4.04 KiB |         51 | `path/filepath.Join`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`    |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

###### `main.workload.func1` (`profile.go:25`)

|     % |    Size |    Samples | Callee                    | Location                                                                                         |
| ----: | ------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.6% | 917 MiB | 11,225,798 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.4% | 793 MiB | 10,654,295 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

###### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |    Size |    Samples | Callee                                 | Location                                                                                         |
| ----: | ------: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.2% | 736 MiB | 11,224,399 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

###### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |    Size |    Samples | Callee                                   | Location                                                                                         |
| -----: | ------: | ---------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

###### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |    Samples | Callee                                        | Location                                                                                          |
| -----: | ------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 792 MiB | 10,650,607 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

###### `main.main` (`profile.go:61`)

|     % |     Size | Samples | Callee                          | Location                                                                                        |
| ----: | -------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| 99.7% | 1.13 MiB |       2 | `runtime/pprof.StartCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888` |
|  0.3% | 4.04 KiB |      51 | `path/filepath.Join`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`  |

###### `path/filepath.Join` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`)

|      % |     Size | Samples | Callee               | Location                                                                                           |
| -----: | -------: | ------: | -------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 4.04 KiB |      51 | `path/filepath.join` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path_unix.go:32` |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |    Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 33.2% |  569 MiB | 11,221,434 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                           |
| 21.4% |  366 MiB |  4,813,582 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                 |
| 20.3% |  348 MiB |      4,364 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                            |
| 14.4% |  247 MiB |  3,632,298 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                         |
|  7.2% |  123 MiB |  1,485,310 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                         |
|  1.8% |   31 MiB |    348,964 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                 |
|  1.1% | 18.4 MiB |    254,326 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                         |
|  0.3% | 4.95 MiB |    113,692 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`) |
|  0.1% | 1.83 MiB |      4,059 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`) ← `main.main` (`profile.go:61`)                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |  170 KiB |      2,064 | `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% | 4.04 KiB |         51 | `path/filepath.Join` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`) ← `main.main` (`profile.go:61`)                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Retained heap

Hidden functions account for 100.0% of bytes retained, so the hottest are also shown.

### Hottest functions

#### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |    Size | Samples | Function          | Location                                                                                 |
| ----: | ------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 94.5% | 1.5 MiB |   4,364 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### Lines

Lines ranked by contribution to each function's self size.

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Samples | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |   4,364 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Samples | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |   4,364 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size |    Samples | Function                | Location                                                                                         |
| ----: | -------: | ---------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 95.2% | 1.51 MiB | 21,880,349 | `main.workload.func1`   | `profile.go:25`                                                                                  |
| 95.2% | 1.51 MiB | 11,225,798 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 94.5% |  1.5 MiB |      4,364 | `bytes.growSlice`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

###### `main.workload.func1` (`profile.go:25`)

|      % |     Size |    Samples | Callee                  | Location                                                                                         |
| -----: | -------: | ---------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.51 MiB | 11,225,798 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

###### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |     Size |    Samples | Callee                                 | Location                                                                                         |
| ----: | -------: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% | 1.51 MiB | 11,224,399 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

Common call stack: `main.workload.func1` (`profile.go:25`)

|     % |     Size |    Samples | Call stack                                                                                                                                                                                                                                |
| ----: | -------: | ---------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94.5% |  1.5 MiB |      4,364 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) |
|  0.7% | 12.2 KiB | 11,221,434 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)                                                                                                                |

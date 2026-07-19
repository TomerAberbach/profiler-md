# Allocated heap and retained heap profile

Allocated 1.67 GiB and retained 2.09 MiB over 21,825,387 samples (82.4 B and 0.101 B per sample).

| Category |      % | Allocated | Retained |    Samples |
| -------- | -----: | --------: | -------: | ---------: |
| stdlib   | 100.0% |  1.67 GiB | 2.09 MiB | 21,824,618 |
| ours     |  <0.1% |    12 KiB |      0 B |        769 |

## Allocated heap

Hidden functions account for 89.4% of bytes allocated, so the hottest are also shown.

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size |   Samples | Function                                       | Location                                                                                          |
| ----: | -------: | --------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 32.6% |  558 MiB | 1,846,099 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 20.3% |  349 MiB |     4,660 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 10.6% |  181 MiB |       400 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  0.1% | 1.13 MiB |         2 | `runtime/pprof.StartCPUProfile`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`   |
| <0.1% | 65.1 KiB |       463 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| <0.1% |   12 KiB |       769 | `main.workload.func1`                          | `profile.go:25`                                                                                   |

##### Lines

Lines ranked by contribution to each function's self size.

###### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|     % |     Size |   Samples | Location                                                                                          |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 95.8% |  535 MiB | 1,335,135 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |
|  4.2% | 23.4 MiB |   510,964 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079` |

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Samples | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 349 MiB |   4,660 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

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
| 100.0% | 65.1 KiB |     463 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:106` |

###### `main.workload.func1` (`profile.go:25`)

|      % |   Size | Samples | Location        |
| -----: | -----: | ------: | --------------- |
| 100.0% | 12 KiB |     769 | `profile.go:28` |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

###### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |   Samples | Caller                                        | Location                                                                                          |
| -----: | ------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 558 MiB | 1,845,356 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Samples | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 349 MiB |   4,660 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

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
| 100.0% | 65.1 KiB |     463 | `main.workload.func1` | `profile.go:25` |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |    Samples | Function                                       | Location                                                                                          |
| ----: | -------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.8% | 1.67 GiB | 21,823,512 | `main.workload.func1`                          | `profile.go:25`                                                                                   |
| 53.5% |  917 MiB | 11,200,763 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 46.3% |  795 MiB | 10,621,980 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 46.3% |  794 MiB | 10,619,361 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 20.3% |  349 MiB |      4,660 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  0.1% | 1.74 MiB |         55 | `main.main`                                    | `profile.go:61`                                                                                   |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`   |
| <0.1% |  624 KiB |          1 | `os.ReadFile`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`               |
| <0.1% | 4.04 KiB |         51 | `path/filepath.Join`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`    |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

###### `main.workload.func1` (`profile.go:25`)

|     % |    Size |    Samples | Callee                    | Location                                                                                         |
| ----: | ------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.6% | 917 MiB | 11,200,763 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.4% | 795 MiB | 10,621,980 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

###### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |    Size |    Samples | Callee                                 | Location                                                                                         |
| ----: | ------: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.2% | 735 MiB | 11,199,505 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

###### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |    Size |    Samples | Callee                                   | Location                                                                                         |
| -----: | ------: | ---------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

###### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |    Samples | Callee                                        | Location                                                                                          |
| -----: | ------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 794 MiB | 10,618,105 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

###### `main.main` (`profile.go:61`)

|     % |     Size | Samples | Callee                          | Location                                                                                        |
| ----: | -------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| 64.7% | 1.13 MiB |       2 | `runtime/pprof.StartCPUProfile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888` |
| 35.1% |  624 KiB |       1 | `os.ReadFile`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`             |
|  0.2% | 4.04 KiB |      51 | `path/filepath.Join`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`  |

###### `os.ReadFile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`)

|      % |    Size | Samples | Callee                | Location                                                                            |
| -----: | ------: | ------: | --------------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 624 KiB |       1 | `os.readFileContents` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886` |

###### `path/filepath.Join` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`)

|      % |     Size | Samples | Callee               | Location                                                                                           |
| -----: | -------: | ------: | -------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 4.04 KiB |      51 | `path/filepath.join` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path_unix.go:32` |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |    Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 33.1% |  568 MiB | 11,196,103 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                           |
| 21.4% |  367 MiB |  4,835,448 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                 |
| 20.3% |  349 MiB |      4,660 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                            |
| 14.4% |  248 MiB |  3,583,655 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                         |
|  7.2% |  123 MiB |  1,467,902 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                         |
|  1.8% | 31.1 MiB |    363,053 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                 |
|  1.1% | 18.3 MiB |    253,517 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                         |
|  0.3% |  5.2 MiB |    110,558 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`) |
|  0.1% | 1.84 MiB |      5,228 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`) ← `main.main` (`profile.go:61`)                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |  624 KiB |          1 | `os.ReadFile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`) ← `main.main` (`profile.go:61`)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <0.1% |  170 KiB |      2,619 | `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% | 4.04 KiB |         51 | `path/filepath.Join` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/path/filepath/path.go:130`) ← `main.main` (`profile.go:61`)                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Retained heap

Hidden functions account for 100.0% of bytes retained, so the hottest are also shown.

### Hottest functions

#### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |  Size | Samples | Function          | Location                                                                                 |
| ----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 95.6% | 2 MiB |   4,660 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### Lines

Lines ranked by contribution to each function's self size.

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |  Size | Samples | Location                                                                                 |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |   4,660 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

###### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |  Size | Samples | Caller                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |   4,660 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size |    Samples | Function                  | Location                                                                                         |
| ----: | -------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.8% |    2 MiB | 21,823,512 | `main.workload.func1`     | `profile.go:25`                                                                                  |
| 95.6% |    2 MiB | 11,200,763 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 95.6% |    2 MiB |      4,660 | `bytes.growSlice`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
|  0.2% | 4.05 KiB | 10,621,980 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

###### `main.workload.func1` (`profile.go:25`)

|     % |     Size |    Samples | Callee                    | Location                                                                                         |
| ----: | -------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |    2 MiB | 11,200,763 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  0.2% | 4.05 KiB | 10,621,980 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

###### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |  Size |    Samples | Callee                                 | Location                                                                                         |
| -----: | ----: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB | 11,199,505 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

###### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |     Size |    Samples | Callee                                   | Location                                                                                         |
| -----: | -------: | ---------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 4.05 KiB | 10,619,361 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

Common call stack: `main.workload.func1` (`profile.go:25`)

|     % |     Size |    Samples | Call stack                                                                                                                                                                                                                                |
| ----: | -------: | ---------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.6% |    2 MiB |      4,660 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) |
|  0.2% | 4.05 KiB | 10,621,980 | `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)                                                                                                              |

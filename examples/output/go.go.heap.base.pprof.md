# Allocated heap profile

Allocated 1.67 GiB over 21,825,386 objects (82.4 B per object).

| Category         |      % |     Size |    Objects |
| ---------------- | -----: | -------: | ---------: |
| Standard library | 100.0% | 1.67 GiB | 21,824,617 |
| Ours             |  <0.1% |   12 KiB |        769 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |     Size |    Objects | Function                                        | Location                                                                                              |
| ----: | -------: | ---------: | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 32.6% |  558 MiB |  1,846,099 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`     |
| 20.3% |  349 MiB |      4,660 | `bytes.growSlice`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`              |
| 13.0% |  223 MiB |    499,177 | `encoding/json.mapEncoder.encode`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`      |
| 10.6% |  181 MiB |        400 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`      |
|  9.5% |  163 MiB | 10,689,894 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`           |
|  9.5% |  162 MiB |  5,518,199 | `encoding/json.unquote`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`     |
|  1.8% | 31.7 MiB |  2,037,361 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`     |
|  1.1% | 19.6 MiB |    123,445 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`     |
|  0.6% |   10 MiB |    438,014 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`     |
|  0.4% |  7.1 MiB |    465,543 | `encoding/json.(*decodeState).convertNumber`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`      |
|  0.3% | 5.53 MiB |    190,700 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`     |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`       |
| <0.1% |  648 KiB |          1 | `compress/flate.NewWriter`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664`    |
| <0.1% |  624 KiB |          1 | `os.readFileContents`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`                   |
| <0.1% |  355 KiB |        257 | `sync.(*Pool).pinSlow`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`                 |
| <0.1% |  320 KiB |          2 | `compress/flate.(*compressor).init`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`    |
| <0.1% |  222 KiB |      5,196 | `encoding/json.appendString[go.shape.string]`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`      |
| <0.1% |  200 KiB |          2 | `compress/flate.newDeflateFast`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63` |
| <0.1% |  127 KiB |        774 | `runtime/pprof.allFrames`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`       |
| <0.1% |  121 KiB |        702 | `runtime/pprof.(*profileBuilder).emitLocation`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`       |

#### Lines

Lines ranked by contribution to each function's self size.

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|     % |     Size |   Objects | Location                                                                                          |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 95.8% |  535 MiB | 1,335,135 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |
|  4.2% | 23.4 MiB |   510,964 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 349 MiB |   4,660 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 223 MiB | 499,177 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 181 MiB |     400 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

|      % |    Size |    Objects | Location                                                                                    |
| -----: | ------: | ---------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 163 MiB | 10,689,894 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2178` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|      % |    Size |   Objects | Location                                                                                          |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 162 MiB | 5,518,199 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1189` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|     % |     Size |   Objects | Location                                                                                          |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 87.8% | 27.8 MiB | 1,821,150 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1148` |
| 12.2% | 3.88 MiB |   216,211 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1154` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 19.6 MiB | 123,445 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1218` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |   Size | Objects | Location                                                                                          |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 10 MiB | 438,014 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1040` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 7.1 MiB | 465,543 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:846` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 5.53 MiB | 190,700 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1061` |

##### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Objects | Location                                                                                        |
| -----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.13 MiB |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910` |

##### `compress/flate.NewWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664`)

|      % |    Size | Objects | Location                                                                                           |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% | 648 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:665` |

##### `os.readFileContents` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`)

|      % |    Size | Objects | Location                                                                            |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% | 624 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:906` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 355 KiB |     257 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:241` |

##### `compress/flate.(*compressor).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`)

|     % |    Size | Objects | Location                                                                                           |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- |
| 80.0% | 256 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:589` |
| 20.0% |  64 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:585` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

|     % |     Size | Objects | Location                                                                                          |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 47.2% |  105 KiB |   2,879 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1063` |
| 22.0% | 48.8 KiB |     347 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1011` |
| 14.5% | 32.1 KiB |   1,070 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1064` |
| 10.9% | 24.2 KiB |     387 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1028` |
|  3.6% | 8.03 KiB |     257 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1008` |

##### `compress/flate.newDeflateFast` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63`)

|      % |    Size | Objects | Location                                                                                              |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 200 KiB |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:64` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

|     % |     Size | Objects | Location                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 71.3% | 90.6 KiB |     386 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:214` |
| 28.7% | 36.4 KiB |     388 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:232` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

|     % |     Size | Objects | Location                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 60.7% | 73.4 KiB |       9 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:609` |
| 19.3% | 23.3 KiB |       9 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:625` |
| 13.4% | 16.2 KiB |     172 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:613` |
|  6.6% | 8.02 KiB |     512 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:611` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |   Objects | Caller                                        | Location                                                                                          |
| -----: | ------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 558 MiB | 1,845,356 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|  <0.1% | 149 KiB |       743 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 349 MiB |   4,660 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 223 MiB | 499,177 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Objects | Caller                | Location        |
| -----: | ------: | ------: | --------------------- | --------------- |
| 100.0% | 181 MiB |     400 | `main.workload.func1` | `profile.go:25` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

|      % |    Size |    Objects | Caller            | Location                                                                                   |
| -----: | ------: | ---------: | ----------------- | ------------------------------------------------------------------------------------------ |
| 100.0% | 163 MiB | 10,689,894 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|     % |     Size |   Objects | Caller                                          | Location                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 51.9% | 84.2 MiB | 1,443,845 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| 48.1% | 78.1 MiB | 4,074,354 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|      % |     Size |   Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 31.7 MiB | 2,037,361 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |     Size | Objects | Caller                  | Location                                                                                          |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 19.6 MiB | 123,445 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |   Size | Objects | Caller                                         | Location                                                                                          |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 10 MiB | 438,014 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

|      % |    Size | Objects | Caller                                          | Location                                                                                          |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 7.1 MiB | 465,543 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |     Size | Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 5.53 MiB | 190,700 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Objects | Caller      | Location        |
| -----: | -------: | ------: | ----------- | --------------- |
| 100.0% | 1.13 MiB |       2 | `main.main` | `profile.go:61` |

##### `compress/flate.NewWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664`)

|      % |    Size | Objects | Caller                          | Location                                                                                       |
| -----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 648 KiB |       1 | `compress/gzip.(*Writer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139` |

##### `os.readFileContents` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`)

|      % |    Size | Objects | Caller        | Location                                                                            |
| -----: | ------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 624 KiB |       1 | `os.ReadFile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

|      % |    Size | Objects | Caller             | Location                                                                              |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------------- |
| 100.0% | 355 KiB |     257 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `compress/flate.(*compressor).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`)

|      % |    Size | Objects | Caller                     | Location                                                                                           |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 320 KiB |       2 | `compress/flate.NewWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

|     % |     Size | Objects | Caller                            | Location                                                                                         |
| ----: | -------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 58.4% |  130 KiB |   1,476 | `encoding/json.stringEncoder`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 41.6% | 92.3 KiB |   3,720 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `compress/flate.newDeflateFast` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63`)

|      % |    Size | Objects | Caller                              | Location                                                                                           |
| -----: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 200 KiB |       2 | `compress/flate.(*compressor).init` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

|      % |    Size | Objects | Caller                                               | Location                                                                                        |
| -----: | ------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 127 KiB |     774 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

|      % |    Size | Objects | Caller                                               | Location                                                                                        |
| -----: | ------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 121 KiB |     702 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |    Objects | Function                                       | Location                                                                                          |
| ----: | -------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.8% | 1.67 GiB | 21,823,512 | `main.workload.func1`                          | `profile.go:25`                                                                                   |
| 53.5% |  917 MiB | 11,200,763 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 46.3% |  795 MiB | 10,621,980 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 46.3% |  794 MiB | 10,619,361 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 46.3% |  794 MiB | 10,619,361 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| 46.3% |  794 MiB | 10,619,361 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| 46.3% |  794 MiB | 10,619,361 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| 46.3% |  794 MiB | 10,618,105 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 46.3% |  794 MiB | 10,607,828 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 42.9% |  735 MiB | 11,199,505 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| 42.9% |  735 MiB | 11,199,505 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| 42.9% |  735 MiB | 11,199,505 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| 42.9% |  735 MiB | 11,197,413 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| 42.8% |  734 MiB | 11,188,238 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| 42.8% |  734 MiB | 11,188,238 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| 20.3% |  349 MiB |      4,853 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| 20.3% |  349 MiB |      4,660 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 20.3% |  349 MiB |      4,660 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| 11.5% |  197 MiB |      2,463 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| 10.6% |  182 MiB |  5,641,644 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

#### Categories

##### Standard library

|     % |    Size |    Objects | Function                                       | Location                                                                                          |
| ----: | ------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 53.5% | 917 MiB | 11,200,763 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 46.3% | 795 MiB | 10,621,980 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 46.3% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 46.3% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| 46.3% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| 46.3% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| 46.3% | 794 MiB | 10,618,105 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 46.3% | 794 MiB | 10,607,828 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 42.9% | 735 MiB | 11,199,505 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| 42.9% | 735 MiB | 11,199,505 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| 42.9% | 735 MiB | 11,199,505 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| 42.9% | 735 MiB | 11,197,413 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| 42.8% | 734 MiB | 11,188,238 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| 42.8% | 734 MiB | 11,188,238 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| 20.3% | 349 MiB |      4,853 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| 20.3% | 349 MiB |      4,660 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 20.3% | 349 MiB |      4,660 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| 11.5% | 197 MiB |      2,463 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| 10.6% | 182 MiB |  5,641,644 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  9.5% | 163 MiB | 10,689,894 | `reflect.unsafe_New`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.workload.func1` (`profile.go:25`)

|     % |    Size |    Objects | Callee                    | Location                                                                                         |
| ----: | ------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.6% | 917 MiB | 11,200,763 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.4% | 795 MiB | 10,621,980 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |    Size |    Objects | Callee                                 | Location                                                                                         |
| ----: | ------: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.2% | 735 MiB | 11,199,505 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| <0.1% | 268 KiB |        769 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |
| <0.1% | 123 KiB |         89 | `sync.(*Pool).Put`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99`             |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |    Size |    Objects | Callee                                   | Location                                                                                         |
| -----: | ------: | ---------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |
|  <0.1% | 105 KiB |      2,156 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |     Size |    Objects | Callee                                        | Location                                                                                          |
| -----: | -------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |  794 MiB | 10,618,105 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|   9.8% | 78.1 MiB |  4,074,354 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |    Size |    Objects | Callee                                         | Location                                                                                          |
| -----: | ------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |    Size |    Objects | Callee                                | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |    Size |    Objects | Callee                               | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,619,361 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|     % |    Size |    Objects | Callee                                          | Location                                                                                          |
| ----: | ------: | ---------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.9% | 794 MiB | 10,607,828 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 99.8% | 793 MiB | 10,614,133 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 17.9% | 143 MiB |  4,070,194 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|     % |    Size |    Objects | Callee                                        | Location                                                                                          |
| ----: | ------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.8% | 792 MiB | 10,604,369 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |     Size |    Objects | Callee                                        | Location                                                                                         |
| -----: | -------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  735 MiB | 11,197,413 | `encoding/json.interfaceEncoder`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
|  20.7% |  152 MiB |      3,218 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  11.1% | 81.9 MiB |  5,365,723 | `reflect.(*MapIter).Value`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`          |
|  11.1% | 81.2 MiB |  5,324,171 | `reflect.(*MapIter).Key`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`          |
|  <0.1% | 92.3 KiB |      3,720 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|      % |     Size |    Objects | Callee                              | Location                                                                                         |
| -----: | -------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  735 MiB | 11,199,505 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  99.9% |  734 MiB | 11,188,238 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|  26.7% |  197 MiB |      2,463 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|   0.3% |  1.9 MiB |     27,579 | `encoding/json.typeEncoder.func2`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |
|  <0.1% | 68.9 KiB |        840 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |    Size |    Objects | Callee                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 735 MiB | 11,199,505 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|      % |    Size |    Objects | Callee                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 735 MiB | 11,197,413 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|      % |    Size |    Objects | Callee                           | Location                                                                                         |
| -----: | ------: | ---------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 734 MiB | 11,188,238 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|      % |    Size |    Objects | Callee                              | Location                                                                                         |
| -----: | ------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 734 MiB | 11,188,238 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|      % |    Size | Objects | Callee            | Location                                                                                 |
| -----: | ------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 349 MiB |   4,660 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|      % |    Size | Objects | Callee                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 349 MiB |   4,660 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|     % |    Size | Objects | Callee                                        | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.9% | 196 MiB |     987 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  0.1% | 130 KiB |   1,476 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|     % |     Size | Objects | Callee                       | Location                                                                                          |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| 10.8% | 19.6 MiB | 123,445 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `main.workload.func1` (`profile.go:25`)

|     % |     Size |   Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.9% |  256 MiB |   716,763 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10.6% |  181 MiB |       400 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10.1% |  174 MiB |       348 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                             |
|  9.2% |  157 MiB |   461,327 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.2% |  106 MiB |   146,692 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.3% | 90.3 MiB |     1,030 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.8% | 81.6 MiB |   272,933 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% | 58.2 MiB |   125,764 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% | 43.5 MiB |       348 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                |
|  2.4% | 41.4 MiB |   682,145 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.3% | 39.9 MiB | 2,035,472 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.3% |   39 MiB |    39,909 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.3% | 38.7 MiB | 2,534,223 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                          |
|  2.2% | 38.3 MiB | 2,513,190 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                        |
|  1.4% | 23.6 MiB | 1,205,616 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% | 23.5 MiB |   149,612 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                     |
|  1.3% | 21.8 MiB |       348 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                    |
|  1.2% | 21.2 MiB | 1,390,231 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) |
|  1.2% | 20.9 MiB | 1,371,250 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)   |
|  1.1% | 19.7 MiB |   364,849 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                   |

# Retained heap profile

Retained 2.09 MiB over 291 objects (7.36 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 2.09 MiB |     291 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |     Size | Objects | Function                                       | Location                                                                                          |
| ----: | -------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 95.6% |    2 MiB |       4 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  4.2% | 90.5 KiB |     250 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
|  0.2% | 4.05 KiB |      37 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |  Size | Objects | Location                                                                                 |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |     Size | Objects | Location                                                                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------- |
| 44.0% | 39.8 KiB |      13 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152` |
| 36.4% |   33 KiB |     212 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |
| 19.5% | 17.7 KiB |      25 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 4.05 KiB |      37 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |  Size | Objects | Caller                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |     Size | Objects | Caller              | Location                                                                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| 89.9% | 81.3 KiB |     242 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| 10.1% | 9.18 KiB |       8 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |     Size | Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 4.05 KiB |      37 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Objects | Function                                    | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.8% |    2 MiB |      41 | `main.workload.func1`                       | `profile.go:25`                                                                                  |
| 95.6% |    2 MiB |       4 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
| 95.6% |    2 MiB |       4 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
| 95.6% |    2 MiB |       4 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| 95.6% |    2 MiB |       4 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 95.6% |    2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
| 95.6% |    2 MiB |       4 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| 95.6% |    2 MiB |       4 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 95.6% |    2 MiB |       4 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
| 95.6% |    2 MiB |       4 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
| 95.6% |    2 MiB |       4 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 95.6% |    2 MiB |       4 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  4.2% | 90.5 KiB |     250 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  3.8% | 81.3 KiB |     242 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |
|  1.6% | 34.6 KiB |      20 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`        |
|  1.6% | 34.6 KiB |      20 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`        |
|  1.6% | 34.6 KiB |      20 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |
|  1.6% | 34.6 KiB |      20 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  1.6% | 34.6 KiB |      20 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  1.6% | 34.6 KiB |      20 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |

#### Categories

##### Standard library

|     % |     Size | Objects | Function                                    | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.6% |    2 MiB |       4 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
| 95.6% |    2 MiB |       4 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
| 95.6% |    2 MiB |       4 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| 95.6% |    2 MiB |       4 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 95.6% |    2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
| 95.6% |    2 MiB |       4 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| 95.6% |    2 MiB |       4 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 95.6% |    2 MiB |       4 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
| 95.6% |    2 MiB |       4 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
| 95.6% |    2 MiB |       4 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 95.6% |    2 MiB |       4 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  4.2% | 90.5 KiB |     250 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  3.8% | 81.3 KiB |     242 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |
|  1.6% | 34.6 KiB |      20 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`        |
|  1.6% | 34.6 KiB |      20 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`        |
|  1.6% | 34.6 KiB |      20 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |
|  1.6% | 34.6 KiB |      20 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  1.6% | 34.6 KiB |      20 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  1.6% | 34.6 KiB |      20 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
|  0.9% | 20.3 KiB |     185 | `runtime.acquireSudog`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.workload.func1` (`profile.go:25`)

|     % |     Size | Objects | Callee                    | Location                                                                                         |
| ----: | -------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |    2 MiB |       4 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  0.2% | 4.05 KiB |      37 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|      % |  Size | Objects | Callee            | Location                                                                                 |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|      % |  Size | Objects | Callee                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|      % |  Size | Objects | Callee                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `bytes.(*Buffer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|      % |  Size | Objects | Callee                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 100.0% | 2 MiB |       4 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 100.0% | 2 MiB |       4 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|      % |  Size | Objects | Callee                                      | Location                                                                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |  Size | Objects | Callee                           | Location                                                                                         |
| -----: | ----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|      % |  Size | Objects | Callee                           | Location                                                                                         |
| -----: | ----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|      % |  Size | Objects | Callee                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |  Size | Objects | Callee                                      | Location                                                                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |  Size | Objects | Callee                                 | Location                                                                                         |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

|      % |     Size | Objects | Callee             | Location                                                                                    |
| -----: | -------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 81.3 KiB |     242 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

|     % |     Size | Objects | Callee                | Location                                                                                    |
| ----: | -------: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| 73.5% | 25.4 KiB |      12 | `runtime.newobject`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| 26.5% | 9.18 KiB |       8 | `runtime.mcommoninit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`    |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

|      % |     Size | Objects | Callee           | Location                                                                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 34.6 KiB |      20 | `runtime.allocm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |

##### `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`)

|      % |     Size | Objects | Callee         | Location                                                                                  |
| -----: | -------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 34.6 KiB |      20 | `runtime.newm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|      % |     Size | Objects | Callee           | Location                                                                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 34.6 KiB |      20 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |     Size | Objects | Callee          | Location                                                                                  |
| -----: | -------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 34.6 KiB |      20 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|      % |     Size | Objects | Callee                  | Location                                                                                  |
| -----: | -------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 34.6 KiB |      20 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`)

|      % |     Size | Objects | Callee              | Location                                                                                    |
| -----: | -------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 20.3 KiB |     185 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.6% |    2 MiB |       4 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`profile.go:25`) |
|  0.9% | 20.3 KiB |     185 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`) ← `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`) ← `runtime.semacquire` (142) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.7% | 15.2 KiB |       7 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.7% | 14.4 KiB |       1 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.procresize` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030`) ← `runtime.schedinit` (831) ← `runtime.rt0_go` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.6% | 12.7 KiB |      27 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.newproc1` (5313) ← `runtime.newproc.func1` (5298) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.5% | 10.2 KiB |       5 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% | 8.51 KiB |      17 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% | 4.59 KiB |       4 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% | 4.59 KiB |       4 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% | 4.05 KiB |      37 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                        |

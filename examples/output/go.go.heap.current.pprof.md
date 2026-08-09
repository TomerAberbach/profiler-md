# Allocated heap profile

Allocated 1.67 GiB over 21,882,354 objects (82.1 B per object).

| Category         |      % |     Size |    Objects |
| ---------------- | -----: | -------: | ---------: |
| Standard library | 100.0% | 1.67 GiB | 21,882,098 |
| Ours             |  <0.1% | 4.01 KiB |        256 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |     Size |    Objects | Function                                        | Location                                                                                              |
| ----: | -------: | ---------: | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 32.5% |  556 MiB |  1,839,235 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`     |
| 20.3% |  348 MiB |      4,364 | `bytes.growSlice`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`              |
| 13.1% |  224 MiB |    501,806 | `encoding/json.mapEncoder.encode`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`      |
| 10.6% |  181 MiB |        400 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`      |
|  9.5% |  163 MiB | 10,710,418 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`           |
|  9.4% |  162 MiB |  5,503,076 | `encoding/json.unquote`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`     |
|  1.9% | 32.7 MiB |  2,105,252 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`     |
|  1.1% | 19.4 MiB |    122,176 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`     |
|  0.6% | 9.67 MiB |    422,438 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`     |
|  0.4% | 7.23 MiB |    474,008 | `encoding/json.(*decodeState).convertNumber`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`      |
|  0.3% | 5.53 MiB |    186,046 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`     |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`       |
| <0.1% |  648 KiB |          1 | `compress/flate.NewWriter`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664`    |
| <0.1% |  402 KiB |        292 | `sync.(*Pool).pinSlow`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`                 |
| <0.1% |  320 KiB |          2 | `compress/flate.(*compressor).init`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`    |
| <0.1% |  254 KiB |      6,050 | `encoding/json.appendString[go.shape.string]`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`      |
| <0.1% |  200 KiB |          2 | `compress/flate.newDeflateFast`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63` |
| <0.1% |  180 KiB |      1,318 | `runtime/pprof.allFrames`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`       |
| <0.1% |  150 KiB |        402 | `runtime/pprof.(*profileBuilder).emitLocation`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`       |
| <0.1% | 93.1 KiB |      1,514 | `encoding/json.(*scanner).pushParseState`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`     |

#### Lines

Lines ranked by contribution to each function's self size.

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|     % |    Size |   Objects | Location                                                                                          |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------- |
| 95.9% | 533 MiB | 1,337,626 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |
|  4.1% |  23 MiB |   501,609 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 348 MiB |   4,364 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 224 MiB | 501,806 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 181 MiB |     400 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

|      % |    Size |    Objects | Location                                                                                    |
| -----: | ------: | ---------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 163 MiB | 10,710,418 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2178` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|      % |    Size |   Objects | Location                                                                                          |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 162 MiB | 5,503,076 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1189` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|     % |     Size |   Objects | Location                                                                                          |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 87.6% | 28.6 MiB | 1,876,811 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1148` |
| 12.4% | 4.06 MiB |   228,441 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1154` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 19.4 MiB | 122,176 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1218` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 9.67 MiB | 422,438 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1040` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

|      % |     Size | Objects | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 7.23 MiB | 474,008 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:846` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 5.53 MiB | 186,046 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1061` |

##### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Objects | Location                                                                                        |
| -----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.13 MiB |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910` |

##### `compress/flate.NewWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664`)

|      % |    Size | Objects | Location                                                                                           |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% | 648 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:665` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 402 KiB |     292 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:241` |

##### `compress/flate.(*compressor).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`)

|     % |    Size | Objects | Location                                                                                           |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- |
| 80.0% | 256 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:589` |
| 20.0% |  64 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:585` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

|     % |     Size | Objects | Location                                                                                          |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 63.4% |  161 KiB |   4,533 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1063` |
| 17.6% | 44.8 KiB |     318 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1011` |
|  9.5% | 24.2 KiB |     387 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1028` |
|  4.7% | 12.1 KiB |     299 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1064` |
|  3.2% | 8.03 KiB |     257 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1008` |

##### `compress/flate.newDeflateFast` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63`)

|      % |    Size | Objects | Location                                                                                              |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 200 KiB |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:64` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

|     % |     Size | Objects | Location                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 73.1% |  132 KiB |     800 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:214` |
| 26.9% | 48.6 KiB |     518 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:232` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

|     % |     Size | Objects | Location                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 54.3% | 81.4 KiB |       6 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:609` |
| 24.3% | 36.4 KiB |     388 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:613` |
| 21.4% | 32.1 KiB |       8 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:625` |

##### `encoding/json.(*scanner).pushParseState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 93.1 KiB |   1,514 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:181` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |   Objects | Caller                                        | Location                                                                                          |
| -----: | ------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 556 MiB | 1,838,637 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|  <0.1% | 128 KiB |       598 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 348 MiB |   4,364 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 224 MiB | 501,806 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Objects | Caller                | Location        |
| -----: | ------: | ------: | --------------------- | --------------- |
| 100.0% | 181 MiB |     400 | `main.workload.func1` | `profile.go:25` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

|      % |    Size |    Objects | Caller            | Location                                                                                   |
| -----: | ------: | ---------: | ----------------- | ------------------------------------------------------------------------------------------ |
| 100.0% | 163 MiB | 10,710,418 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|     % |     Size |   Objects | Caller                                          | Location                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 52.0% | 84.2 MiB | 1,455,289 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| 48.0% | 77.6 MiB | 4,047,787 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|      % |     Size |   Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 32.7 MiB | 2,105,252 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |     Size | Objects | Caller                  | Location                                                                                          |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 19.4 MiB | 122,176 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |     Size | Objects | Caller                                         | Location                                                                                          |
| -----: | -------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 9.67 MiB | 422,438 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

|      % |     Size | Objects | Caller                                          | Location                                                                                          |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 7.23 MiB | 474,008 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |     Size | Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 5.53 MiB | 186,046 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Objects | Caller      | Location        |
| -----: | -------: | ------: | ----------- | --------------- |
| 100.0% | 1.13 MiB |       2 | `main.main` | `profile.go:61` |

##### `compress/flate.NewWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664`)

|      % |    Size | Objects | Caller                          | Location                                                                                       |
| -----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 648 KiB |       1 | `compress/gzip.(*Writer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

|      % |    Size | Objects | Caller             | Location                                                                              |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------------- |
| 100.0% | 402 KiB |     292 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `compress/flate.(*compressor).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`)

|      % |    Size | Objects | Caller                     | Location                                                                                           |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 320 KiB |       2 | `compress/flate.NewWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

|     % |    Size | Objects | Caller                            | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 60.5% | 154 KiB |   1,732 | `encoding/json.stringEncoder`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 39.5% | 100 KiB |   4,318 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `compress/flate.newDeflateFast` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63`)

|      % |    Size | Objects | Caller                              | Location                                                                                           |
| -----: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 200 KiB |       2 | `compress/flate.(*compressor).init` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

|      % |    Size | Objects | Caller                                               | Location                                                                                        |
| -----: | ------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 180 KiB |   1,318 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

|      % |    Size | Objects | Caller                                               | Location                                                                                        |
| -----: | ------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 150 KiB |     402 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `encoding/json.(*scanner).pushParseState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`)

|      % |     Size | Objects | Caller                          | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 93.1 KiB |   1,514 | `encoding/json.stateBeginValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |    Objects | Function                                       | Location                                                                                          |
| ----: | -------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.8% | 1.67 GiB | 21,880,349 | `main.workload.func1`                          | `profile.go:25`                                                                                   |
| 53.6% |  917 MiB | 11,225,798 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 46.3% |  793 MiB | 10,654,295 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 46.3% |  792 MiB | 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 46.3% |  792 MiB | 10,652,231 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| 46.3% |  792 MiB | 10,652,231 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| 46.3% |  792 MiB | 10,652,231 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| 46.3% |  792 MiB | 10,650,607 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 46.2% |  792 MiB | 10,640,995 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 43.0% |  736 MiB | 11,224,399 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| 43.0% |  736 MiB | 11,224,399 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| 42.9% |  736 MiB | 11,224,371 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| 42.9% |  735 MiB | 11,222,201 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| 42.9% |  735 MiB | 11,211,030 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| 42.9% |  735 MiB | 11,211,030 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| 20.3% |  348 MiB |      4,686 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| 20.3% |  348 MiB |      4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 20.3% |  348 MiB |      4,364 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| 11.4% |  196 MiB |      2,691 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| 10.6% |  181 MiB |  5,625,252 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

#### Categories

##### Standard library

|     % |    Size |    Objects | Function                                       | Location                                                                                          |
| ----: | ------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 53.6% | 917 MiB | 11,225,798 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 46.3% | 793 MiB | 10,654,295 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 46.3% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 46.3% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| 46.3% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| 46.3% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| 46.3% | 792 MiB | 10,650,607 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 46.2% | 792 MiB | 10,640,995 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 43.0% | 736 MiB | 11,224,399 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| 43.0% | 736 MiB | 11,224,399 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| 42.9% | 736 MiB | 11,224,371 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| 42.9% | 735 MiB | 11,222,201 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| 42.9% | 735 MiB | 11,211,030 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| 42.9% | 735 MiB | 11,211,030 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| 20.3% | 348 MiB |      4,686 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| 20.3% | 348 MiB |      4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 20.3% | 348 MiB |      4,364 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| 11.4% | 196 MiB |      2,691 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| 10.6% | 181 MiB |  5,625,252 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  9.5% | 163 MiB | 10,710,418 | `reflect.unsafe_New`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.workload.func1` (`profile.go:25`)

|     % |    Size |    Objects | Callee                    | Location                                                                                         |
| ----: | ------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.6% | 917 MiB | 11,225,798 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.4% | 793 MiB | 10,654,295 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |    Size |    Objects | Callee                                 | Location                                                                                         |
| ----: | ------: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.2% | 736 MiB | 11,224,399 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| <0.1% | 296 KiB |        811 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |
| <0.1% | 146 KiB |        188 | `sync.(*Pool).Put`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99`             |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |     Size |    Objects | Callee                                   | Location                                                                                         |
| -----: | -------: | ---------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  792 MiB | 10,652,231 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |
|  <0.1% | 93.1 KiB |      1,514 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |     Size |    Objects | Callee                                        | Location                                                                                          |
| -----: | -------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |  792 MiB | 10,650,607 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|   9.8% | 77.6 MiB |  4,047,787 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |    Size |    Objects | Callee                                         | Location                                                                                          |
| -----: | ------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |    Size |    Objects | Callee                                | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |    Size |    Objects | Callee                               | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 792 MiB | 10,652,231 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|     % |    Size |    Objects | Callee                                          | Location                                                                                          |
| ----: | ------: | ---------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.9% | 792 MiB | 10,640,995 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 99.8% | 791 MiB | 10,648,172 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 18.1% | 143 MiB |  4,156,725 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|     % |    Size |    Objects | Callee                                        | Location                                                                                          |
| ----: | ------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.8% | 790 MiB | 10,638,731 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|      % |     Size |    Objects | Callee                              | Location                                                                                         |
| -----: | -------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  736 MiB | 11,224,371 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  99.9% |  735 MiB | 11,211,030 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|  26.7% |  196 MiB |      2,691 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  <0.1% | 56.5 KiB |      1,638 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |
|  <0.1% | 4.07 KiB |         28 | `encoding/json.valueEncoder`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:381` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |    Size |    Objects | Callee                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 736 MiB | 11,224,399 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |     Size |    Objects | Callee                                        | Location                                                                                         |
| -----: | -------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  735 MiB | 11,222,201 | `encoding/json.interfaceEncoder`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
|  20.7% |  152 MiB |      3,178 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  11.2% | 82.1 MiB |  5,381,372 | `reflect.(*MapIter).Key`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`          |
|  11.1% | 81.3 MiB |  5,329,046 | `reflect.(*MapIter).Value`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`          |
|  <0.1% |  100 KiB |      4,318 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|      % |    Size |    Objects | Callee                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 735 MiB | 11,222,201 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|      % |    Size |    Objects | Callee                           | Location                                                                                         |
| -----: | ------: | ---------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 735 MiB | 11,211,030 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|      % |    Size |    Objects | Callee                              | Location                                                                                         |
| -----: | ------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 735 MiB | 11,211,030 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|      % |    Size | Objects | Callee            | Location                                                                                 |
| -----: | ------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 348 MiB |   4,364 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|      % |    Size | Objects | Callee                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 348 MiB |   4,364 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|     % |    Size | Objects | Callee                                        | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.9% | 196 MiB |     959 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  0.1% | 154 KiB |   1,732 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|     % |     Size | Objects | Callee                       | Location                                                                                          |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| 10.7% | 19.4 MiB | 122,176 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `main.workload.func1` (`profile.go:25`)

|     % |     Size |   Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.9% |  256 MiB |   719,336 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10.6% |  181 MiB |       400 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10.2% |  174 MiB |       348 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                             |
|  9.2% |  157 MiB |   456,839 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.2% |  107 MiB |   148,898 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.3% | 90.5 MiB |     1,083 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.7% |   81 MiB |   278,937 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% |   59 MiB |   127,519 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% | 43.5 MiB |       348 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                |
|  2.4% | 41.2 MiB |   683,797 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.3% | 38.9 MiB | 2,548,587 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                          |
|  2.3% | 38.8 MiB |    39,760 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.3% | 38.6 MiB | 1,972,934 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.2% | 38.4 MiB | 2,515,755 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                        |
|  1.4% | 24.2 MiB | 1,235,125 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% | 23.6 MiB |   143,872 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                     |
|  1.3% | 21.8 MiB |       348 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                    |
|  1.3% | 21.4 MiB | 1,404,339 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)   |
|  1.2% | 21.2 MiB | 1,388,692 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) |
|  1.2% | 19.8 MiB |   367,278 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                   |

# Retained heap profile

Retained 1.59 MiB over 285 objects (5.71 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 1.59 MiB |     285 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |     Size | Objects | Function                          | Location                                                                                         |
| ----: | -------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 94.5% |  1.5 MiB |       3 | `bytes.growSlice`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
|  4.8% | 77.8 KiB |     153 | `runtime.mallocgc`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  0.3% | 4.07 KiB |      28 | `reflect.addReflectOff`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`     |
|  0.2% | 4.05 KiB |      37 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  0.2% | 4.03 KiB |      64 | `encoding/json.newEncodeState`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |     Size | Objects | Location                                                                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------- |
| 39.2% | 30.5 KiB |      14 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152` |
| 37.7% | 29.3 KiB |     119 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |
| 23.2% |   18 KiB |      20 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |

##### `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`)

|      % |     Size | Objects | Location                                                                                     |
| -----: | -------: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% | 4.07 KiB |      28 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:719` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |     Size | Objects | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 4.05 KiB |      37 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

|      % |     Size | Objects | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 4.03 KiB |      64 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:325` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |     Size | Objects | Caller              | Location                                                                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| 82.3% | 64.1 KiB |     141 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| 17.7% | 13.8 KiB |      12 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`)

|      % |     Size | Objects | Caller                       | Location                                                                                 |
| -----: | -------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.07 KiB |      28 | `reflect.resolveReflectName` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |     Size | Objects | Caller                                      | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 4.05 KiB |      37 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

|      % |     Size | Objects | Caller                  | Location                                                                                         |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 4.03 KiB |      64 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Objects | Function                                    | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.2% | 1.51 MiB |     132 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 95.2% | 1.51 MiB |     132 | `main.workload.func1`                       | `profile.go:25`                                                                                  |
| 95.0% | 1.51 MiB |      68 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
| 95.0% | 1.51 MiB |      68 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
| 94.5% |  1.5 MiB |       3 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
| 94.5% |  1.5 MiB |       3 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
| 94.5% |  1.5 MiB |       3 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| 94.5% |  1.5 MiB |       3 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  4.8% | 77.8 KiB |     153 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  3.9% | 64.1 KiB |     141 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |
|  3.5% |   57 KiB |      53 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`        |
|  3.5% |   57 KiB |      53 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`        |
|  3.5% |   57 KiB |      53 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |
|  3.5% |   57 KiB |      53 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  2.6% | 43.1 KiB |      38 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  2.6% | 43.1 KiB |      38 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |

#### Categories

##### Standard library

|     % |     Size | Objects | Function                                    | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.2% | 1.51 MiB |     132 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 95.0% | 1.51 MiB |      68 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
| 95.0% | 1.51 MiB |      68 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
| 94.7% |  1.5 MiB |      40 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
| 94.5% |  1.5 MiB |       3 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
| 94.5% |  1.5 MiB |       3 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
| 94.5% |  1.5 MiB |       3 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| 94.5% |  1.5 MiB |       3 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  4.8% | 77.8 KiB |     153 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  3.9% | 64.1 KiB |     141 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |
|  3.5% |   57 KiB |      53 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`        |
|  3.5% |   57 KiB |      53 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`        |
|  3.5% |   57 KiB |      53 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |
|  3.5% |   57 KiB |      53 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  2.6% | 43.1 KiB |      38 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  2.6% | 43.1 KiB |      38 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
|  1.4% | 23.2 KiB |      27 | `runtime.mstart1`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |     Size | Objects | Callee                                 | Location                                                                                         |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% | 1.51 MiB |      68 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
|  0.3% | 4.03 KiB |      64 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

##### `main.workload.func1` (`profile.go:25`)

|      % |     Size | Objects | Callee                  | Location                                                                                         |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.51 MiB |     132 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|     % |     Size | Objects | Callee                              | Location                                                                                         |
| ----: | -------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% |  1.5 MiB |      40 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 99.7% |  1.5 MiB |      40 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
| 99.5% |  1.5 MiB |       3 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  0.3% | 4.07 KiB |      28 | `encoding/json.valueEncoder`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:381` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |     Size | Objects | Callee                                      | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.51 MiB |      68 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size | Objects | Callee                           | Location                                                                                         |
| -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.5 MiB |      40 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|      % |    Size | Objects | Callee                                      | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.5 MiB |      40 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|      % |    Size | Objects | Callee                           | Location                                                                                         |
| -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.5 MiB |      40 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|      % |    Size | Objects | Callee                              | Location                                                                                         |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.5 MiB |      40 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|      % |    Size | Objects | Callee            | Location                                                                                 |
| -----: | ------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|      % |    Size | Objects | Callee                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|      % |    Size | Objects | Callee                  | Location                                                                                 |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `bytes.(*Buffer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

|      % |     Size | Objects | Callee             | Location                                                                                    |
| -----: | -------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 64.1 KiB |     141 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

|     % |     Size | Objects | Callee                | Location                                                                                    |
| ----: | -------: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| 53.5% | 30.5 KiB |      14 | `runtime.newobject`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| 24.2% | 13.8 KiB |      12 | `runtime.mcommoninit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`    |
| 22.3% | 12.7 KiB |      27 | `runtime.malg`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`   |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

|      % |   Size | Objects | Callee           | Location                                                                                  |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 57 KiB |      53 | `runtime.allocm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |

##### `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`)

|      % |   Size | Objects | Callee         | Location                                                                                  |
| -----: | -----: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 57 KiB |      53 | `runtime.newm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|      % |   Size | Objects | Callee           | Location                                                                                  |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 57 KiB |      53 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |     Size | Objects | Callee          | Location                                                                                  |
| -----: | -------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 43.1 KiB |      38 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|      % |     Size | Objects | Callee                  | Location                                                                                  |
| -----: | -------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 43.1 KiB |      38 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.mstart1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`)

|      % |     Size | Objects | Callee             | Location                                                                                  |
| -----: | -------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 23.2 KiB |      27 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94.5% |  1.5 MiB |       3 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                   |
|  0.9% | 15.2 KiB |       7 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% | 10.2 KiB |       5 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% | 8.48 KiB |      18 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.5% | 8.48 KiB |      18 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.newproc1` (5313) ← `runtime.newproc.func1` (5298) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 8.11 KiB |      74 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`) ← `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`) ← `runtime.semacquire` (142) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% | 5.08 KiB |       2 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.3% | 4.59 KiB |       4 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.3% | 4.59 KiB |       4 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.startTheWorldWithSema` (1760) ← `runtime.gcStart.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.3% | 4.59 KiB |       4 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% | 4.25 KiB |       8 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.3% | 4.24 KiB |       9 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.startTheWorldWithSema` (1760) ← `runtime.gcStart.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.3% | 4.07 KiB |      28 | `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`) ← `reflect.resolveReflectName` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568`) ← `reflect.(*rtype).ptrTo` (1418) ← `reflect.PointerTo` (1414) ← `encoding/json.newTypeEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:421`) ← `encoding/json.typeEncoder.func1` (399) ← `encoding/json.typeEncoder.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:58`) ← `sync.(*Once).doSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`) ← `sync.(*Once).Do` (52) ← `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`) ← `encoding/json.typeEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:388`) ← `encoding/json.valueEncoder` (381) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`profile.go:25`) |
|  0.2% | 4.05 KiB |      37 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% | 4.03 KiB |      64 | `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

# Allocated heap and retained heap profile

Allocated 1.8 GB and retained 1.66 MB over 429 samples (4.19 MB and 3.88 kB per sample).

| Category |      % |   Size |    Size | Samples |
| -------- | -----: | -----: | ------: | ------: |
| ours     | 100.0% | 1.8 GB | 1.66 MB |     429 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                        | Location                                                                                                             |
| ----: | ------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 32.5% |  583 MB |      55 | `encoding/json.(*decodeState).objectInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078     |
| 20.3% |  365 MB |      13 | `bytes.growSlice`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247              |
| 13.1% |  235 MB |      33 | `encoding/json.mapEncoder.encode`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765      |
| 10.6% |  190 MB |       1 | `encoding/json.Marshal`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205      |
|  9.5% |  171 MB |      30 | `reflect.unsafe_New`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177           |
|  9.4% |  170 MB |     119 | `encoding/json.unquote`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187     |
|  1.9% | 34.3 MB |      25 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129     |
|  1.1% | 20.3 MB |      29 | `encoding/json.unquoteBytes`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193     |
|  0.6% | 10.1 MB |       9 | `encoding/json.(*decodeState).valueInterface`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035     |
|  0.4% | 7.58 MB |      11 | `encoding/json.(*decodeState).convertNumber`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838      |
|  0.3% | 5.79 MB |      23 | `encoding/json.(*decodeState).arrayInterface`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052     |
|  0.1% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888       |
|  0.0% |  664 kB |       1 | `compress/flate.NewWriter`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664    |
|  0.0% |  411 kB |       2 | `sync.(*Pool).pinSlow`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223                 |
|  0.0% |  328 kB |       2 | `compress/flate.(*compressor).init`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571    |
|  0.0% |  260 kB |      13 | `encoding/json.appendString[go.shape.string]`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999      |
|  0.0% |  205 kB |       2 | `compress/flate.newDeflateFast`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63 |
|  0.0% |  185 kB |       3 | `runtime/pprof.allFrames`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209       |
|  0.0% |  154 kB |      11 | `runtime/pprof.(*profileBuilder).emitLocation`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589       |
|  0.0% | 95.3 kB |       5 | `encoding/json.(*scanner).pushParseState`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180     |

##### Lines

Lines ranked by contribution to each function's self size.

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|     % |    Size | Samples | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 95.9% |  559 MB |      40 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110 |
|  4.1% | 24.1 MB |      15 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079 |

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |   Size | Samples | Location                                                                                                |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 365 MB |      13 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |   Size | Samples | Location                                                                                                        |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 235 MB |      33 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Location                                                                                                        |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 190 MB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213 |

###### `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177)

|      % |   Size | Samples | Location                                                                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 171 MB |      30 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2178 |

###### `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187)

|      % |   Size | Samples | Location                                                                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 170 MB |     119 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1189 |

###### `encoding/json.(*decodeState).literalInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129)

|     % |    Size | Samples | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 87.6% |   30 MB |      10 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1148 |
| 12.4% | 4.26 MB |      15 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1154 |

###### `encoding/json.unquoteBytes` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193)

|      % |    Size | Samples | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.3 MB |      29 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1218 |

###### `encoding/json.(*decodeState).valueInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035)

|      % |    Size | Samples | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.1 MB |       9 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1040 |

###### `encoding/json.(*decodeState).convertNumber` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838)

|      % |    Size | Samples | Location                                                                                                        |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 7.58 MB |      11 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:846 |

###### `encoding/json.(*decodeState).arrayInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052)

|      % |    Size | Samples | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.79 MB |      23 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1061 |

###### `runtime/pprof.StartCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Location                                                                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.18 MB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910 |

###### `compress/flate.NewWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664)

|      % |   Size | Samples | Location                                                                                                          |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 664 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:665 |

###### `sync.(*Pool).pinSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223)

|      % |   Size | Samples | Location                                                                                             |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 411 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:241 |

###### `compress/flate.(*compressor).init` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571)

|     % |    Size | Samples | Location                                                                                                          |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 80.0% |  262 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:589 |
| 20.0% | 65.5 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:585 |

###### `encoding/json.appendString[go.shape.string]` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999)

|     % |    Size | Samples | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 63.4% |  165 kB |       7 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1063 |
| 17.6% | 45.9 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1011 |
|  9.5% | 24.8 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1028 |
|  4.7% | 12.4 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1064 |
|  3.2% | 8.22 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1008 |

###### `compress/flate.newDeflateFast` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63)

|      % |   Size | Samples | Location                                                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 205 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:64 |

###### `runtime/pprof.allFrames` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209)

|     % |    Size | Samples | Location                                                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 73.1% |  135 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:214 |
| 26.9% | 49.7 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:232 |

###### `runtime/pprof.(*profileBuilder).emitLocation` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589)

|     % |    Size | Samples | Location                                                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 54.3% | 83.3 kB |       5 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:609 |
| 24.3% | 37.3 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:613 |
| 21.4% | 32.9 kB |       4 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:625 |

###### `encoding/json.(*scanner).pushParseState` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180)

|      % |    Size | Samples | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 95.3 kB |       5 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:181 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|      % |   Size | Samples | Caller                                        | Location                                                                                                         |
| -----: | -----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 583 MB |      53 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |
|   0.0% | 131 kB |       2 | `encoding/json.(*decodeState).object`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604  |

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |   Size | Samples | Caller                 | Location                                                                                                |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 365 MB |      13 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |   Size | Samples | Caller                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 235 MB |      33 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Caller                | Location                                 |
| -----: | -----: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 190 MB |       1 | `main.workload.func1` | scripts/fixtures/assets/go/profile.go:25 |

###### `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177)

|      % |   Size | Samples | Caller            | Location                                                                                                  |
| -----: | -----: | ------: | ----------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 171 MB |      30 | `reflect.copyVal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881 |

###### `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187)

|     % |    Size | Samples | Caller                                          | Location                                                                                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 52.0% | 88.3 MB |      90 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |
| 48.0% | 81.3 MB |      29 | `encoding/json.(*decodeState).objectInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

###### `encoding/json.(*decodeState).literalInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129)

|      % |    Size | Samples | Caller                                        | Location                                                                                                         |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 34.3 MB |      25 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

###### `encoding/json.unquoteBytes` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193)

|      % |    Size | Samples | Caller                  | Location                                                                                                         |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.3 MB |      29 | `encoding/json.unquote` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187 |

###### `encoding/json.(*decodeState).valueInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035)

|      % |    Size | Samples | Caller                                         | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.1 MB |       9 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

###### `encoding/json.(*decodeState).convertNumber` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838)

|      % |    Size | Samples | Caller                                          | Location                                                                                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 7.58 MB |      11 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |

###### `encoding/json.(*decodeState).arrayInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052)

|      % |    Size | Samples | Caller                                        | Location                                                                                                         |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.79 MB |      23 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

###### `runtime/pprof.StartCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Caller      | Location                                 |
| -----: | ------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 1.18 MB |       2 | `main.main` | scripts/fixtures/assets/go/profile.go:61 |

###### `compress/flate.NewWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664)

|      % |   Size | Samples | Caller                          | Location                                                                                                      |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 100.0% | 664 kB |       1 | `compress/gzip.(*Writer).Write` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139 |

###### `sync.(*Pool).pinSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223)

|      % |   Size | Samples | Caller             | Location                                                                                             |
| -----: | -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 411 kB |       2 | `sync.(*Pool).pin` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202 |

###### `compress/flate.(*compressor).init` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571)

|      % |   Size | Samples | Caller                     | Location                                                                                                          |
| -----: | -----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 328 kB |       2 | `compress/flate.NewWriter` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664 |

###### `encoding/json.appendString[go.shape.string]` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999)

|     % |   Size | Samples | Caller                            | Location                                                                                                        |
| ----: | -----: | ------: | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 60.5% | 158 kB |       5 | `encoding/json.stringEncoder`     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
| 39.5% | 103 kB |       8 | `encoding/json.mapEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |

###### `compress/flate.newDeflateFast` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63)

|      % |   Size | Samples | Caller                              | Location                                                                                                          |
| -----: | -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 205 kB |       2 | `compress/flate.(*compressor).init` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571 |

###### `runtime/pprof.allFrames` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209)

|      % |   Size | Samples | Caller                                               | Location                                                                                                       |
| -----: | -----: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 185 kB |       3 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406 |

###### `runtime/pprof.(*profileBuilder).emitLocation` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589)

|      % |   Size | Samples | Caller                                               | Location                                                                                                       |
| -----: | -----: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 154 kB |      11 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406 |

###### `encoding/json.(*scanner).pushParseState` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180)

|      % |    Size | Samples | Caller                          | Location                                                                                                         |
| -----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 95.3 kB |       5 | `encoding/json.stateBeginValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217 |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                       | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 99.8% | 1.79 GB |     377 | `main.workload.func1`                          | scripts/fixtures/assets/go/profile.go:25                                                                         |
| 53.6% |  962 MB |      99 | `encoding/json.Marshal`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205  |
| 46.3% |  831 MB |     277 | `encoding/json.Unmarshal`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102  |
| 46.3% |  831 MB |     271 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |
| 46.3% |  831 MB |     271 | `encoding/json.(*decodeState).object`          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604  |
| 46.3% |  831 MB |     271 | `encoding/json.(*decodeState).value`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363  |
| 46.3% |  831 MB |     271 | `encoding/json.(*decodeState).unmarshal`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173  |
| 46.3% |  831 MB |     268 | `encoding/json.(*decodeState).valueInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |
| 46.2% |  830 MB |     255 | `encoding/json.(*decodeState).arrayInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052 |
| 43.0% |  771 MB |      93 | `encoding/json.(*encodeState).reflectValue`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366  |
| 43.0% |  771 MB |      93 | `encoding/json.(*encodeState).marshal`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333  |
| 42.9% |  771 MB |      92 | `encoding/json.mapEncoder.encode`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765  |
| 42.9% |  771 MB |      88 | `encoding/json.interfaceEncoder`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695  |
| 42.9% |  771 MB |      76 | `encoding/json.arrayEncoder.encode`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883  |
| 42.9% |  771 MB |      76 | `encoding/json.sliceEncoder.encode`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843  |
| 20.3% |  365 MB |      14 | `bytes.(*Buffer).grow`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144          |
| 20.3% |  365 MB |      13 | `bytes.growSlice`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247          |
| 20.3% |  365 MB |      13 | `bytes.(*Buffer).Write`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193          |
| 11.4% |  206 MB |       8 | `encoding/json.stringEncoder`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610  |
| 10.6% |  190 MB |     148 | `encoding/json.unquote`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187 |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)

|     % |   Size | Samples | Callee                    | Location                                                                                                        |
| ----: | -----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 53.6% | 962 MB |      99 | `encoding/json.Marshal`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 46.4% | 831 MB |     277 | `encoding/json.Unmarshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|     % |   Size | Samples | Callee                                 | Location                                                                                                        |
| ----: | -----: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 80.2% | 771 MB |      93 | `encoding/json.(*encodeState).marshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
|  0.0% | 303 kB |       3 | `encoding/json.newEncodeState`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315 |
|  0.0% | 149 kB |       2 | `sync.(*Pool).Put`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99             |

###### `encoding/json.Unmarshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)

|      % |    Size | Samples | Callee                                   | Location                                                                                                        |
| -----: | ------: | ------: | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |  831 MB |     271 | `encoding/json.(*decodeState).unmarshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173 |
|   0.0% | 95.3 kB |       5 | `encoding/json.checkValid`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33 |

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|      % |    Size | Samples | Callee                                        | Location                                                                                                         |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |  831 MB |     268 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |
|   9.8% | 81.3 MB |      29 | `encoding/json.unquote`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187 |

###### `encoding/json.(*decodeState).object` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604)

|      % |   Size | Samples | Callee                                         | Location                                                                                                         |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 831 MB |     271 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

###### `encoding/json.(*decodeState).value` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363)

|      % |   Size | Samples | Callee                                | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 831 MB |     271 | `encoding/json.(*decodeState).object` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604 |

###### `encoding/json.(*decodeState).unmarshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173)

|      % |   Size | Samples | Callee                               | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 831 MB |     271 | `encoding/json.(*decodeState).value` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363 |

###### `encoding/json.(*decodeState).valueInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035)

|     % |   Size | Samples | Callee                                          | Location                                                                                                         |
| ----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 99.9% | 830 MB |     255 | `encoding/json.(*decodeState).arrayInterface`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052 |
| 99.8% | 829 MB |     260 | `encoding/json.(*decodeState).objectInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |
| 18.1% | 150 MB |     155 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |

###### `encoding/json.(*decodeState).arrayInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052)

|     % |   Size | Samples | Callee                                        | Location                                                                                                         |
| ----: | -----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 99.8% | 828 MB |     248 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

###### `encoding/json.(*encodeState).reflectValue` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366)

|      % |    Size | Samples | Callee                              | Location                                                                                                        |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |  771 MB |      92 | `encoding/json.mapEncoder.encode`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
|  99.9% |  771 MB |      76 | `encoding/json.sliceEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843 |
|  26.7% |  206 MB |       8 | `encoding/json.stringEncoder`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
|   0.0% | 57.9 kB |       3 | `encoding/json.floatEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571 |
|   0.0% | 4.17 kB |       1 | `encoding/json.valueEncoder`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:381 |

###### `encoding/json.(*encodeState).marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333)

|      % |   Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 771 MB |      93 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |    Size | Samples | Callee                                        | Location                                                                                                        |
| -----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |  771 MB |      88 | `encoding/json.interfaceEncoder`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |
|  20.7% |  159 MB |       9 | `bytes.(*Buffer).Write`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193         |
|  11.2% | 86.1 MB |      15 | `reflect.(*MapIter).Key`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245          |
|  11.1% | 85.3 MB |      15 | `reflect.(*MapIter).Value`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289          |
|   0.0% |  103 kB |       8 | `encoding/json.appendString[go.shape.string]` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999 |

###### `encoding/json.interfaceEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695)

|      % |   Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 771 MB |      88 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.arrayEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883)

|      % |   Size | Samples | Callee                           | Location                                                                                                        |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 771 MB |      76 | `encoding/json.interfaceEncoder` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |

###### `encoding/json.sliceEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843)

|      % |   Size | Samples | Callee                              | Location                                                                                                        |
| -----: | -----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 771 MB |      76 | `encoding/json.arrayEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883 |

###### `bytes.(*Buffer).grow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144)

|      % |   Size | Samples | Callee            | Location                                                                                                |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 365 MB |      13 | `bytes.growSlice` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247 |

###### `bytes.(*Buffer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193)

|      % |   Size | Samples | Callee                 | Location                                                                                                |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 365 MB |      13 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610)

|     % |   Size | Samples | Callee                                        | Location                                                                                                        |
| ----: | -----: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 99.9% | 205 MB |       3 | `bytes.(*Buffer).Write`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193         |
|  0.1% | 158 kB |       5 | `encoding/json.appendString[go.shape.string]` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999 |

###### `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187)

|     % |    Size | Samples | Callee                       | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 10.7% | 20.3 MB |      29 | `encoding/json.unquoteBytes` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193 |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.9% |  268 MB |       8 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 10.6% |  190 MB |       1 | `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 10.2% |  182 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                           |
|  9.2% |  164 MB |       8 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  6.2% |  112 MB |       6 | `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  5.3% | 94.9 MB |       3 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  4.7% | 84.9 MB |       7 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.4% | 61.9 MB |       5 | `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% | 45.6 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                              |
|  2.4% | 43.2 MB |      24 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.3% | 40.8 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Key` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                          |
|  2.3% | 40.7 MB |       1 | `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% | 40.5 MB |       5 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.2% | 40.3 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Value` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                        |
|  1.4% | 25.3 MB |       5 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% | 24.7 MB |       2 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% | 22.8 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                  |
|  1.3% | 22.5 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Key` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)   |
|  1.2% | 22.2 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Value` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) |
|  1.2% | 20.8 MB |      17 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                |

## Retained heap

### Hottest functions

#### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |    Size | Samples | Function                          | Location                                                                                                        |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 94.5% | 1.57 MB |      13 | `bytes.growSlice`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247         |
|  4.8% | 79.7 kB |      11 | `runtime.mallocgc`                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067      |
|  0.3% | 4.17 kB |       1 | `reflect.addReflectOff`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707     |
|  0.2% | 4.15 kB |      33 | `encoding/json.mapEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
|  0.2% | 4.13 kB |       2 | `encoding/json.newEncodeState`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315 |

##### Lines

Lines ranked by contribution to each function's self size.

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |    Size | Samples | Location                                                                                                |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57 MB |      13 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267 |

###### `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067)

|     % |    Size | Samples | Location                                                                                                   |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 39.2% | 31.2 kB |       3 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152 |
| 37.7% |   30 kB |       4 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150 |
| 23.2% | 18.5 kB |       4 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143 |

###### `reflect.addReflectOff` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707)

|      % |    Size | Samples | Location                                                                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.17 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:719 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |    Size | Samples | Location                                                                                                        |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.15 kB |      33 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784 |

###### `encoding/json.newEncodeState` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315)

|      % |    Size | Samples | Location                                                                                                        |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.13 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:325 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |    Size | Samples | Caller                 | Location                                                                                                |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57 MB |      13 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067)

|     % |    Size | Samples | Caller              | Location                                                                                                   |
| ----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------------------------- |
| 82.3% | 65.6 kB |       8 | `runtime.newobject` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156 |
| 17.7% | 14.1 kB |       3 | `runtime.makeslice` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102   |

###### `reflect.addReflectOff` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707)

|      % |    Size | Samples | Caller                       | Location                                                                                                |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.17 kB |       1 | `reflect.resolveReflectName` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |    Size | Samples | Caller                                      | Location                                                                                                        |
| -----: | ------: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.15 kB |      33 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.newEncodeState` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315)

|      % |    Size | Samples | Caller                  | Location                                                                                                        |
| -----: | ------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.13 kB |       2 | `encoding/json.Marshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size | Samples | Function                                    | Location                                                                                                        |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 95.2% | 1.59 MB |     377 | `main.workload.func1`                       | scripts/fixtures/assets/go/profile.go:25                                                                        |
| 95.2% | 1.59 MB |      99 | `encoding/json.Marshal`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 95.0% | 1.58 MB |      93 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |
| 95.0% | 1.58 MB |      93 | `encoding/json.(*encodeState).marshal`      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
| 94.7% | 1.58 MB |      92 | `encoding/json.mapEncoder.encode`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
| 94.7% | 1.58 MB |      88 | `encoding/json.interfaceEncoder`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |
| 94.7% | 1.58 MB |      76 | `encoding/json.arrayEncoder.encode`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883 |
| 94.7% | 1.58 MB |      76 | `encoding/json.sliceEncoder.encode`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843 |
| 94.5% | 1.57 MB |       8 | `encoding/json.stringEncoder`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
| 94.5% | 1.57 MB |      13 | `bytes.growSlice`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247         |
| 94.5% | 1.57 MB |      14 | `bytes.(*Buffer).grow`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144         |
| 94.5% | 1.57 MB |      13 | `bytes.(*Buffer).Write`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193         |
|  4.8% | 79.7 kB |      11 | `runtime.mallocgc`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067      |
|  3.9% | 65.6 kB |       8 | `runtime.newobject`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156      |
|  3.5% | 58.3 kB |       8 | `runtime.allocm`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269        |
|  3.5% | 58.3 kB |       8 | `runtime.newm`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857        |
|  3.5% | 58.3 kB |       8 | `runtime.startm`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035        |
|  3.5% | 58.3 kB |       8 | `runtime.wakep`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212        |
|  2.6% | 44.1 kB |       5 | `runtime.resetspinning`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021        |
|  2.6% | 44.1 kB |       5 | `runtime.schedule`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135        |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)

|      % |    Size | Samples | Callee                  | Location                                                                                                        |
| -----: | ------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.59 MB |      99 | `encoding/json.Marshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|     % |    Size | Samples | Callee                                 | Location                                                                                                        |
| ----: | ------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 99.7% | 1.58 MB |      93 | `encoding/json.(*encodeState).marshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
|  0.3% | 4.13 kB |       3 | `encoding/json.newEncodeState`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315 |

###### `encoding/json.(*encodeState).reflectValue` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366)

|     % |    Size | Samples | Callee                              | Location                                                                                                        |
| ----: | ------: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 99.7% | 1.58 MB |      92 | `encoding/json.mapEncoder.encode`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
| 99.7% | 1.58 MB |      76 | `encoding/json.sliceEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843 |
| 99.5% | 1.57 MB |       8 | `encoding/json.stringEncoder`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
|  0.3% | 4.17 kB |       1 | `encoding/json.valueEncoder`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:381 |

###### `encoding/json.(*encodeState).marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333)

|      % |    Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | ------: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.58 MB |      93 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |    Size | Samples | Callee                           | Location                                                                                                        |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.58 MB |      88 | `encoding/json.interfaceEncoder` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |

###### `encoding/json.interfaceEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695)

|      % |    Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | ------: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.58 MB |      88 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.arrayEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883)

|      % |    Size | Samples | Callee                           | Location                                                                                                        |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.58 MB |      76 | `encoding/json.interfaceEncoder` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |

###### `encoding/json.sliceEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843)

|      % |    Size | Samples | Callee                              | Location                                                                                                        |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.58 MB |      76 | `encoding/json.arrayEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883 |

###### `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610)

|      % |    Size | Samples | Callee                  | Location                                                                                                |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57 MB |       3 | `bytes.(*Buffer).Write` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193 |

###### `bytes.(*Buffer).grow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144)

|      % |    Size | Samples | Callee            | Location                                                                                                |
| -----: | ------: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57 MB |      13 | `bytes.growSlice` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247 |

###### `bytes.(*Buffer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193)

|      % |    Size | Samples | Callee                 | Location                                                                                                |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.57 MB |      13 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `runtime.newobject` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156)

|      % |    Size | Samples | Callee             | Location                                                                                                   |
| -----: | ------: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 65.6 kB |       8 | `runtime.mallocgc` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067 |

###### `runtime.allocm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269)

|     % |    Size | Samples | Callee                | Location                                                                                                   |
| ----: | ------: | ------: | --------------------- | ---------------------------------------------------------------------------------------------------------- |
| 53.5% | 31.2 kB |       3 | `runtime.newobject`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156 |
| 24.2% | 14.1 kB |       3 | `runtime.mcommoninit` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998    |
| 22.3% |   13 kB |       2 | `runtime.malg`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273   |

###### `runtime.newm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857)

|      % |    Size | Samples | Callee           | Location                                                                                                 |
| -----: | ------: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 58.3 kB |       8 | `runtime.allocm` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269 |

###### `runtime.startm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035)

|      % |    Size | Samples | Callee         | Location                                                                                                 |
| -----: | ------: | ------: | -------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 58.3 kB |       8 | `runtime.newm` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857 |

###### `runtime.wakep` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212)

|      % |    Size | Samples | Callee           | Location                                                                                                 |
| -----: | ------: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 58.3 kB |       8 | `runtime.startm` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035 |

###### `runtime.resetspinning` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021)

|      % |    Size | Samples | Callee          | Location                                                                                                 |
| -----: | ------: | ------: | --------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 44.1 kB |       5 | `runtime.wakep` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212 |

###### `runtime.schedule` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135)

|      % |    Size | Samples | Callee                  | Location                                                                                                 |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 44.1 kB |       5 | `runtime.resetspinning` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021 |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 94.5% | 1.57 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)                                                                                                                                                                                                                                                                                              |
|  0.9% | 15.6 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.allocm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.6% | 10.4 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.allocm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% | 8.68 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.malg` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.5% | 8.68 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.malg` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273) ← `runtime.newproc1` (5313) ← `runtime.newproc.func1` (5298) ← `runtime.systemstack` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.5% |  8.3 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.acquireSudog` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488) ← `runtime.semacquire1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146) ← `runtime.semacquire` (142) ← `runtime.gcMarkDone` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% |  5.2 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.allocm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697) ← `runtime.gcDrain` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847) ← `runtime.systemstack` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.3% |  4.7 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.makeslice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102) ← `runtime.makeProfStackFP` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |  4.7 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.makeslice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102) ← `runtime.makeProfStackFP` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.startTheWorldWithSema` (1760) ← `runtime.gcStart.func4` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947) ← `runtime.systemstack` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% |  4.7 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.makeslice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102) ← `runtime.makeProfStackFP` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% | 4.36 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.gcBgMarkWorker` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% | 4.34 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.malg` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.startTheWorldWithSema` (1760) ← `runtime.gcStart.func4` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947) ← `runtime.systemstack` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.3% | 4.17 kB |       1 | `reflect.addReflectOff` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707) ← `reflect.resolveReflectName` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568) ← `reflect.(*rtype).ptrTo` (1418) ← `reflect.PointerTo` (1414) ← `encoding/json.newTypeEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:421) ← `encoding/json.typeEncoder.func1` (399) ← `encoding/json.typeEncoder.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3.func4` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:58) ← `sync.(*Once).doSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73) ← `sync.(*Once).Do` (52) ← `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57) ← `encoding/json.typeEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:388) ← `encoding/json.valueEncoder` (381) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25) |
|  0.2% | 4.15 kB |       6 | `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% | 4.13 kB |       2 | `encoding/json.newEncodeState` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.0% |     0 B |       1 | `runtime/pprof.writeHeapInternal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:631) ← `runtime/pprof.writeHeap` (621) ← `runtime/pprof.(*Profile).WriteTo` (403) ← `main.writeProfile` (scripts/fixtures/assets/go/profile.go:46) ← `main.main` (61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.0% |     0 B |       1 | `runtime/pprof.lockProfiles` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:255) ← `runtime/pprof.Lookup` (301) ← `main.writeProfile` (scripts/fixtures/assets/go/profile.go:46) ← `main.main` (61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.0% |     0 B |       3 | `runtime/pprof.(*protobuf).string` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:92) ← `runtime/pprof.(*protobuf).strings` (97) ← `runtime/pprof.(*profileBuilder).build` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.0% |     0 B |       1 | `runtime/pprof.(*protobuf).varint` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14) ← `runtime/pprof.(*protobuf).length` (22) ← `runtime/pprof.(*protobuf).string` (92) ← `runtime/pprof.(*protobuf).strings` (97) ← `runtime/pprof.(*profileBuilder).build` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.0% |     0 B |      11 | `runtime/pprof.(*profileBuilder).emitLocation` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589) ← `runtime/pprof.(*profileBuilder).appendLocsForStack` (406) ← `runtime/pprof.(*profileBuilder).build` (348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

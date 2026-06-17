# Allocated heap and retained heap profile

Allocated 1.8 GB and retained 2.19 MB over 465 samples (3.87 MB and 4.72 kB per sample).

| Category |      % |   Size |    Size | Samples |
| -------- | -----: | -----: | ------: | ------: |
| ours     | 100.0% | 1.8 GB | 2.19 MB |     465 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                        | Location                                                                                                             |
| ----: | ------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 32.6% |  585 MB |      56 | `encoding/json.(*decodeState).objectInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078     |
| 20.3% |  366 MB |      21 | `bytes.growSlice`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247              |
| 13.0% |  234 MB |      47 | `encoding/json.mapEncoder.encode`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765      |
| 10.6% |  190 MB |       1 | `encoding/json.Marshal`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205      |
|  9.5% |  171 MB |      43 | `reflect.unsafe_New`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177           |
|  9.5% |  170 MB |     119 | `encoding/json.unquote`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187     |
|  1.8% | 33.2 MB |      25 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129     |
|  1.1% | 20.5 MB |      29 | `encoding/json.unquoteBytes`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193     |
|  0.6% | 10.5 MB |       9 | `encoding/json.(*decodeState).valueInterface`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035     |
|  0.4% | 7.45 MB |      11 | `encoding/json.(*decodeState).convertNumber`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838      |
|  0.3% |  5.8 MB |      24 | `encoding/json.(*decodeState).arrayInterface`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052     |
|  0.1% | 1.18 MB |       2 | `runtime/pprof.StartCPUProfile`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888       |
|  0.0% |  664 kB |       1 | `compress/flate.NewWriter`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664    |
|  0.0% |  639 kB |       1 | `os.readFileContents`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886                   |
|  0.0% |  363 kB |       2 | `sync.(*Pool).pinSlow`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223                 |
|  0.0% |  328 kB |       2 | `compress/flate.(*compressor).init`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571    |
|  0.0% |  227 kB |      14 | `encoding/json.appendString[go.shape.string]`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999      |
|  0.0% |  205 kB |       2 | `compress/flate.newDeflateFast`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63 |
|  0.0% |  130 kB |       2 | `runtime/pprof.allFrames`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209       |
|  0.0% |  124 kB |      12 | `runtime/pprof.(*profileBuilder).emitLocation`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589       |

##### Lines

Lines ranked by contribution to each function's self size.

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|     % |    Size | Samples | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 95.8% |  561 MB |      41 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110 |
|  4.2% | 24.5 MB |      15 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079 |

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |   Size | Samples | Location                                                                                                |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 366 MB |      21 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |   Size | Samples | Location                                                                                                        |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 234 MB |      47 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Location                                                                                                        |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 190 MB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213 |

###### `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177)

|      % |   Size | Samples | Location                                                                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 171 MB |      43 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2178 |

###### `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187)

|      % |   Size | Samples | Location                                                                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 170 MB |     119 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1189 |

###### `encoding/json.(*decodeState).literalInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129)

|     % |    Size | Samples | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 87.8% | 29.1 MB |      10 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1148 |
| 12.2% | 4.06 MB |      15 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1154 |

###### `encoding/json.unquoteBytes` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193)

|      % |    Size | Samples | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.5 MB |      29 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1218 |

###### `encoding/json.(*decodeState).valueInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035)

|      % |    Size | Samples | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.5 MB |       9 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1040 |

###### `encoding/json.(*decodeState).convertNumber` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838)

|      % |    Size | Samples | Location                                                                                                        |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 7.45 MB |      11 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:846 |

###### `encoding/json.(*decodeState).arrayInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052)

|      % |   Size | Samples | Location                                                                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.8 MB |      24 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1061 |

###### `runtime/pprof.StartCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Location                                                                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.18 MB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:910 |

###### `compress/flate.NewWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664)

|      % |   Size | Samples | Location                                                                                                          |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 664 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:665 |

###### `os.readFileContents` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886)

|      % |   Size | Samples | Location                                                                                           |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% | 639 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:906 |

###### `sync.(*Pool).pinSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223)

|      % |   Size | Samples | Location                                                                                             |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 363 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:241 |

###### `compress/flate.(*compressor).init` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571)

|     % |    Size | Samples | Location                                                                                                          |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 80.0% |  262 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:589 |
| 20.0% | 65.5 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:585 |

###### `encoding/json.appendString[go.shape.string]` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999)

|     % |    Size | Samples | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 47.2% |  107 kB |       7 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1063 |
| 22.0% |   50 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1011 |
| 14.5% | 32.9 kB |       3 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1064 |
| 10.9% | 24.8 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1028 |
|  3.6% | 8.22 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1008 |

###### `compress/flate.newDeflateFast` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63)

|      % |   Size | Samples | Location                                                                                                             |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 205 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:64 |

###### `runtime/pprof.allFrames` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209)

|     % |    Size | Samples | Location                                                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 71.3% | 92.8 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:214 |
| 28.7% | 37.3 kB |       1 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:232 |

###### `runtime/pprof.(*profileBuilder).emitLocation` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589)

|     % |    Size | Samples | Location                                                                                                       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------- |
| 60.7% | 75.2 kB |       4 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:609 |
| 19.3% | 23.9 kB |       4 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:625 |
| 13.4% | 16.6 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:613 |
|  6.6% | 8.21 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:611 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|      % |   Size | Samples | Caller                                        | Location                                                                                                         |
| -----: | -----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 585 MB |      54 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |
|   0.0% | 152 kB |       2 | `encoding/json.(*decodeState).object`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604  |

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |   Size | Samples | Caller                 | Location                                                                                                |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 366 MB |      21 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |   Size | Samples | Caller                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 234 MB |      47 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Caller                | Location                                 |
| -----: | -----: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 190 MB |       1 | `main.workload.func1` | scripts/fixtures/assets/go/profile.go:25 |

###### `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177)

|      % |   Size | Samples | Caller            | Location                                                                                                  |
| -----: | -----: | ------: | ----------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% | 171 MB |      43 | `reflect.copyVal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881 |

###### `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187)

|     % |    Size | Samples | Caller                                          | Location                                                                                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 51.9% | 88.3 MB |      90 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |
| 48.1% | 81.9 MB |      29 | `encoding/json.(*decodeState).objectInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

###### `encoding/json.(*decodeState).literalInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129)

|      % |    Size | Samples | Caller                                        | Location                                                                                                         |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 33.2 MB |      25 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

###### `encoding/json.unquoteBytes` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193)

|      % |    Size | Samples | Caller                  | Location                                                                                                         |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 20.5 MB |      29 | `encoding/json.unquote` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187 |

###### `encoding/json.(*decodeState).valueInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035)

|      % |    Size | Samples | Caller                                         | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.5 MB |       9 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

###### `encoding/json.(*decodeState).convertNumber` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838)

|      % |    Size | Samples | Caller                                          | Location                                                                                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 7.45 MB |      11 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |

###### `encoding/json.(*decodeState).arrayInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052)

|      % |   Size | Samples | Caller                                        | Location                                                                                                         |
| -----: | -----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.8 MB |      24 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

###### `runtime/pprof.StartCPUProfile` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888)

|      % |    Size | Samples | Caller      | Location                                 |
| -----: | ------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 1.18 MB |       2 | `main.main` | scripts/fixtures/assets/go/profile.go:61 |

###### `compress/flate.NewWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664)

|      % |   Size | Samples | Caller                          | Location                                                                                                      |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 100.0% | 664 kB |       1 | `compress/gzip.(*Writer).Write` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139 |

###### `os.readFileContents` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886)

|      % |   Size | Samples | Caller        | Location                                                                                           |
| -----: | -----: | ------: | ------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 639 kB |       1 | `os.ReadFile` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864 |

###### `sync.(*Pool).pinSlow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223)

|      % |   Size | Samples | Caller             | Location                                                                                             |
| -----: | -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 363 kB |       2 | `sync.(*Pool).pin` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202 |

###### `compress/flate.(*compressor).init` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571)

|      % |   Size | Samples | Caller                     | Location                                                                                                          |
| -----: | -----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 328 kB |       2 | `compress/flate.NewWriter` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664 |

###### `encoding/json.appendString[go.shape.string]` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999)

|     % |    Size | Samples | Caller                            | Location                                                                                                        |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 58.4% |  133 kB |       5 | `encoding/json.stringEncoder`     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
| 41.6% | 94.6 kB |       9 | `encoding/json.mapEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |

###### `compress/flate.newDeflateFast` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63)

|      % |   Size | Samples | Caller                              | Location                                                                                                          |
| -----: | -----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% | 205 kB |       2 | `compress/flate.(*compressor).init` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571 |

###### `runtime/pprof.allFrames` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209)

|      % |   Size | Samples | Caller                                               | Location                                                                                                       |
| -----: | -----: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 130 kB |       2 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406 |

###### `runtime/pprof.(*profileBuilder).emitLocation` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589)

|      % |   Size | Samples | Caller                                               | Location                                                                                                       |
| -----: | -----: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 100.0% | 124 kB |      12 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406 |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                       | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 99.8% | 1.79 GB |     412 | `main.workload.func1`                          | scripts/fixtures/assets/go/profile.go:25                                                                         |
| 53.5% |  961 MB |     132 | `encoding/json.Marshal`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205  |
| 46.3% |  833 MB |     279 | `encoding/json.Unmarshal`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102  |
| 46.3% |  833 MB |     273 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |
| 46.3% |  833 MB |     273 | `encoding/json.(*decodeState).object`          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604  |
| 46.3% |  833 MB |     273 | `encoding/json.(*decodeState).value`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363  |
| 46.3% |  833 MB |     273 | `encoding/json.(*decodeState).unmarshal`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173  |
| 46.3% |  833 MB |     270 | `encoding/json.(*decodeState).valueInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |
| 46.3% |  832 MB |     257 | `encoding/json.(*decodeState).arrayInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052 |
| 42.9% |  771 MB |     127 | `encoding/json.mapEncoder.encode`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765  |
| 42.9% |  771 MB |     127 | `encoding/json.(*encodeState).reflectValue`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366  |
| 42.9% |  771 MB |     127 | `encoding/json.(*encodeState).marshal`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333  |
| 42.9% |  771 MB |     123 | `encoding/json.interfaceEncoder`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695  |
| 42.8% |  770 MB |     112 | `encoding/json.arrayEncoder.encode`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883  |
| 42.8% |  770 MB |     112 | `encoding/json.sliceEncoder.encode`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843  |
| 20.3% |  366 MB |      22 | `bytes.(*Buffer).grow`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144          |
| 20.3% |  366 MB |      21 | `bytes.growSlice`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247          |
| 20.3% |  366 MB |      21 | `bytes.(*Buffer).Write`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193          |
| 11.5% |  206 MB |      10 | `encoding/json.stringEncoder`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610  |
| 10.6% |  191 MB |     148 | `encoding/json.unquote`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187 |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)

|     % |   Size | Samples | Callee                    | Location                                                                                                        |
| ----: | -----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 53.6% | 961 MB |     132 | `encoding/json.Marshal`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 46.4% | 833 MB |     279 | `encoding/json.Unmarshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|     % |   Size | Samples | Callee                                 | Location                                                                                                        |
| ----: | -----: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 80.2% | 771 MB |     127 | `encoding/json.(*encodeState).marshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
|  0.0% | 274 kB |       3 | `encoding/json.newEncodeState`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315 |
|  0.0% | 126 kB |       1 | `sync.(*Pool).Put`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99             |

###### `encoding/json.Unmarshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102)

|      % |   Size | Samples | Callee                                   | Location                                                                                                        |
| -----: | -----: | ------: | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 833 MB |     273 | `encoding/json.(*decodeState).unmarshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173 |
|   0.0% | 108 kB |       5 | `encoding/json.checkValid`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33 |

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|      % |    Size | Samples | Callee                                        | Location                                                                                                         |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |  833 MB |     270 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |
|   9.8% | 81.9 MB |      29 | `encoding/json.unquote`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187 |

###### `encoding/json.(*decodeState).object` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604)

|      % |   Size | Samples | Callee                                         | Location                                                                                                         |
| -----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 833 MB |     273 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

###### `encoding/json.(*decodeState).value` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363)

|      % |   Size | Samples | Callee                                | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 833 MB |     273 | `encoding/json.(*decodeState).object` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604 |

###### `encoding/json.(*decodeState).unmarshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173)

|      % |   Size | Samples | Callee                               | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 833 MB |     273 | `encoding/json.(*decodeState).value` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363 |

###### `encoding/json.(*decodeState).valueInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035)

|     % |   Size | Samples | Callee                                          | Location                                                                                                         |
| ----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 99.9% | 832 MB |     257 | `encoding/json.(*decodeState).arrayInterface`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052 |
| 99.8% | 831 MB |     261 | `encoding/json.(*decodeState).objectInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |
| 17.9% | 149 MB |     155 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |

###### `encoding/json.(*decodeState).arrayInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052)

|     % |   Size | Samples | Callee                                        | Location                                                                                                         |
| ----: | -----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 99.8% | 831 MB |     249 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |    Size | Samples | Callee                                        | Location                                                                                                        |
| -----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |  771 MB |     123 | `encoding/json.interfaceEncoder`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |
|  20.7% |  160 MB |      15 | `bytes.(*Buffer).Write`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193         |
|  11.1% | 85.9 MB |      23 | `reflect.(*MapIter).Value`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289          |
|  11.1% | 85.2 MB |      20 | `reflect.(*MapIter).Key`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245          |
|   0.0% | 94.6 kB |       9 | `encoding/json.appendString[go.shape.string]` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999 |

###### `encoding/json.(*encodeState).reflectValue` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366)

|      % |    Size | Samples | Callee                              | Location                                                                                                        |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% |  771 MB |     127 | `encoding/json.mapEncoder.encode`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
|  99.9% |  770 MB |     112 | `encoding/json.sliceEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843 |
|  26.7% |  206 MB |      10 | `encoding/json.stringEncoder`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
|   0.3% | 1.99 MB |      36 | `encoding/json.typeEncoder.func2`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402 |
|   0.0% | 70.6 kB |       2 | `encoding/json.floatEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571 |

###### `encoding/json.(*encodeState).marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333)

|      % |   Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 771 MB |     127 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.interfaceEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695)

|      % |   Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 771 MB |     123 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.arrayEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883)

|      % |   Size | Samples | Callee                           | Location                                                                                                        |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 770 MB |     112 | `encoding/json.interfaceEncoder` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |

###### `encoding/json.sliceEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843)

|      % |   Size | Samples | Callee                              | Location                                                                                                        |
| -----: | -----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 770 MB |     112 | `encoding/json.arrayEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883 |

###### `bytes.(*Buffer).grow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144)

|      % |   Size | Samples | Callee            | Location                                                                                                |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 366 MB |      21 | `bytes.growSlice` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247 |

###### `bytes.(*Buffer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193)

|      % |   Size | Samples | Callee                 | Location                                                                                                |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 366 MB |      21 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610)

|     % |   Size | Samples | Callee                                        | Location                                                                                                        |
| ----: | -----: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 99.9% | 206 MB |       5 | `bytes.(*Buffer).Write`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193         |
|  0.1% | 133 kB |       5 | `encoding/json.appendString[go.shape.string]` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999 |

###### `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187)

|     % |    Size | Samples | Callee                       | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 10.8% | 20.5 MB |      29 | `encoding/json.unquoteBytes` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193 |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.9% |  269 MB |       8 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 10.6% |  190 MB |       1 | `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 10.1% |  182 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                           |
|  9.2% |  165 MB |       9 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  6.2% |  111 MB |       5 | `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  5.3% | 94.7 MB |       3 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  4.8% | 85.5 MB |       7 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.4% |   61 MB |       5 | `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% | 45.6 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                              |
|  2.4% | 43.5 MB |      24 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.3% | 41.8 MB |       5 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.3% | 40.9 MB |       1 | `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% | 40.5 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Key` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                          |
|  2.2% | 40.2 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Value` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                        |
|  1.4% | 24.8 MB |       5 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% | 24.7 MB |       2 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% | 22.8 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                  |
|  1.2% | 22.2 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Value` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) |
|  1.2% | 21.9 MB |       1 | `reflect.unsafe_New` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177) ← `reflect.copyVal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881) ← `reflect.(*MapIter).Key` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245) ← `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)   |
|  1.1% | 20.6 MB |      17 | `encoding/json.unquote` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                |

## Retained heap

### Hottest functions

#### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                       | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 95.6% |  2.1 MB |      21 | `bytes.growSlice`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247          |
|  4.2% | 92.7 kB |       8 | `runtime.mallocgc`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067       |
|  0.2% | 4.15 kB |      56 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

##### Lines

Lines ranked by contribution to each function's self size.

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |   Size | Samples | Location                                                                                                |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |      21 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267 |

###### `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067)

|     % |    Size | Samples | Location                                                                                                   |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 44.0% | 40.8 kB |       3 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152 |
| 36.4% | 33.8 kB |       2 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150 |
| 19.5% | 18.1 kB |       3 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143 |

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|      % |    Size | Samples | Location                                                                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.15 kB |      41 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110 |
|   0.0% |     0 B |      15 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247)

|      % |   Size | Samples | Caller                 | Location                                                                                                |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |      21 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067)

|     % |    Size | Samples | Caller              | Location                                                                                                   |
| ----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------------------------- |
| 89.9% | 83.3 kB |       6 | `runtime.newobject` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156 |
| 10.1% |  9.4 kB |       2 | `runtime.makeslice` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102   |

###### `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078)

|      % |    Size | Samples | Caller                                        | Location                                                                                                         |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.15 kB |      54 | `encoding/json.(*decodeState).valueInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |    Size | Samples | Function                                    | Location                                                                                                        |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 95.8% |  2.1 MB |     412 | `main.workload.func1`                       | scripts/fixtures/assets/go/profile.go:25                                                                        |
| 95.6% |  2.1 MB |     127 | `encoding/json.mapEncoder.encode`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
| 95.6% |  2.1 MB |     127 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |
| 95.6% |  2.1 MB |     123 | `encoding/json.interfaceEncoder`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |
| 95.6% |  2.1 MB |     112 | `encoding/json.arrayEncoder.encode`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883 |
| 95.6% |  2.1 MB |     112 | `encoding/json.sliceEncoder.encode`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843 |
| 95.6% |  2.1 MB |     127 | `encoding/json.(*encodeState).marshal`      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
| 95.6% |  2.1 MB |     132 | `encoding/json.Marshal`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
| 95.6% |  2.1 MB |      22 | `bytes.(*Buffer).grow`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144         |
| 95.6% |  2.1 MB |      10 | `encoding/json.stringEncoder`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
| 95.6% |  2.1 MB |      21 | `bytes.growSlice`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247         |
| 95.6% |  2.1 MB |      21 | `bytes.(*Buffer).Write`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193         |
|  4.2% | 92.7 kB |       8 | `runtime.mallocgc`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067      |
|  3.8% | 83.3 kB |       6 | `runtime.newobject`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156      |
|  1.6% | 35.4 kB |       4 | `runtime.allocm`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269        |
|  1.6% | 35.4 kB |       4 | `runtime.newm`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857        |
|  1.6% | 35.4 kB |       4 | `runtime.startm`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035        |
|  1.6% | 35.4 kB |       4 | `runtime.wakep`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212        |
|  1.6% | 35.4 kB |       4 | `runtime.resetspinning`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021        |
|  1.6% | 35.4 kB |       4 | `runtime.schedule`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135        |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)

|     % |    Size | Samples | Callee                    | Location                                                                                                        |
| ----: | ------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 99.8% |  2.1 MB |     132 | `encoding/json.Marshal`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  0.2% | 4.15 kB |     279 | `encoding/json.Unmarshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102 |

###### `encoding/json.mapEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765)

|      % |   Size | Samples | Callee                           | Location                                                                                                        |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |     123 | `encoding/json.interfaceEncoder` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |

###### `encoding/json.(*encodeState).reflectValue` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366)

|      % |   Size | Samples | Callee                              | Location                                                                                                        |
| -----: | -----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |     127 | `encoding/json.mapEncoder.encode`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
| 100.0% | 2.1 MB |     112 | `encoding/json.sliceEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843 |
| 100.0% | 2.1 MB |      10 | `encoding/json.stringEncoder`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |

###### `encoding/json.interfaceEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695)

|      % |   Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |     123 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.arrayEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883)

|      % |   Size | Samples | Callee                           | Location                                                                                                        |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |     112 | `encoding/json.interfaceEncoder` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |

###### `encoding/json.sliceEncoder.encode` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843)

|      % |   Size | Samples | Callee                              | Location                                                                                                        |
| -----: | -----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |     112 | `encoding/json.arrayEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883 |

###### `encoding/json.(*encodeState).marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333)

|      % |   Size | Samples | Callee                                      | Location                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |     127 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |

###### `encoding/json.Marshal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205)

|      % |   Size | Samples | Callee                                 | Location                                                                                                        |
| -----: | -----: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |     127 | `encoding/json.(*encodeState).marshal` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |

###### `bytes.(*Buffer).grow` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144)

|      % |   Size | Samples | Callee            | Location                                                                                                |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |      21 | `bytes.growSlice` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247 |

###### `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610)

|      % |   Size | Samples | Callee                  | Location                                                                                                |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |       5 | `bytes.(*Buffer).Write` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193 |

###### `bytes.(*Buffer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193)

|      % |   Size | Samples | Callee                 | Location                                                                                                |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.1 MB |      21 | `bytes.(*Buffer).grow` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144 |

###### `runtime.newobject` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156)

|      % |    Size | Samples | Callee             | Location                                                                                                   |
| -----: | ------: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% | 83.3 kB |       6 | `runtime.mallocgc` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067 |

###### `runtime.allocm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269)

|     % |   Size | Samples | Callee                | Location                                                                                                   |
| ----: | -----: | ------: | --------------------- | ---------------------------------------------------------------------------------------------------------- |
| 73.5% |  26 kB |       2 | `runtime.newobject`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156 |
| 26.5% | 9.4 kB |       2 | `runtime.mcommoninit` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998    |

###### `runtime.newm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857)

|      % |    Size | Samples | Callee           | Location                                                                                                 |
| -----: | ------: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 35.4 kB |       4 | `runtime.allocm` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269 |

###### `runtime.startm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035)

|      % |    Size | Samples | Callee         | Location                                                                                                 |
| -----: | ------: | ------: | -------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 35.4 kB |       4 | `runtime.newm` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857 |

###### `runtime.wakep` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212)

|      % |    Size | Samples | Callee           | Location                                                                                                 |
| -----: | ------: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 35.4 kB |       4 | `runtime.startm` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035 |

###### `runtime.resetspinning` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021)

|      % |    Size | Samples | Callee          | Location                                                                                                 |
| -----: | ------: | ------: | --------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 35.4 kB |       4 | `runtime.wakep` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212 |

###### `runtime.schedule` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135)

|      % |    Size | Samples | Callee                  | Location                                                                                                 |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 35.4 kB |       4 | `runtime.resetspinning` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021 |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.6% |  2.1 MB |       1 | `bytes.growSlice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25) |
|  0.9% | 20.8 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.acquireSudog` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488) ← `runtime.semacquire1` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146) ← `runtime.semacquire` (142) ← `runtime.gcMarkDone` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.7% | 15.6 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.allocm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.7% | 14.8 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.procresize` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030) ← `runtime.schedinit` (831) ← `runtime.rt0_go` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% |   13 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.malg` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273) ← `runtime.newproc1` (5313) ← `runtime.newproc.func1` (5298) ← `runtime.systemstack` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.5% | 10.4 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.allocm` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% | 8.71 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.newobject` (2156) ← `runtime.gcBgMarkWorker` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  4.7 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.makeslice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102) ← `runtime.makeProfStackFP` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.2% |  4.7 kB |       1 | `runtime.mallocgc` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067) ← `runtime.makeslice` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102) ← `runtime.makeProfStackFP` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% | 4.15 kB |       9 | `encoding/json.(*decodeState).objectInterface` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (scripts/fixtures/assets/go/profile.go:25)                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.0% |     0 B |       1 | `runtime/pprof.writeHeapInternal` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:631) ← `runtime/pprof.writeHeap` (621) ← `runtime/pprof.(*Profile).WriteTo` (403) ← `main.writeProfile` (scripts/fixtures/assets/go/profile.go:46) ← `main.main` (61) ← `runtime.main` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.0% |     0 B |       1 | `compress/flate.(*huffmanEncoder).generate` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272) ← `compress/flate.(*huffmanBitWriter).writeBlockDynamic` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:498) ← `compress/flate.(*compressor).encSpeed` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:334) ← `compress/flate.(*compressor).close` (629) ← `compress/flate.(*Writer).Close` (728) ← `compress/gzip.(*Writer).Close` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:228) ← `runtime/pprof.(*profileBuilder).build` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                      |
|  0.0% |     0 B |       2 | `compress/flate.(*huffmanEncoder).generate` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272) ← `compress/flate.(*huffmanBitWriter).indexTokens` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:530) ← `compress/flate.(*huffmanBitWriter).writeBlockDynamic` (498) ← `compress/flate.(*compressor).encSpeed` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:334) ← `compress/flate.(*compressor).close` (629) ← `compress/flate.(*Writer).Close` (728) ← `compress/gzip.(*Writer).Close` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:228) ← `runtime/pprof.(*profileBuilder).build` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                             |
|  0.0% |     0 B |       3 | `runtime/pprof.(*protobuf).string` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:92) ← `runtime/pprof.(*protobuf).strings` (97) ← `runtime/pprof.(*profileBuilder).build` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.0% |     0 B |      12 | `runtime/pprof.(*profileBuilder).emitLocation` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589) ← `runtime/pprof.(*profileBuilder).appendLocsForStack` (406) ← `runtime/pprof.(*profileBuilder).build` (348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.0% |     0 B |       5 | `runtime/pprof.(*profileBuilder).stringIndex` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133) ← `runtime/pprof.(*profileBuilder).emitLocation` (589) ← `runtime/pprof.(*profileBuilder).appendLocsForStack` (406) ← `runtime/pprof.(*profileBuilder).build` (348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.0% |     0 B |       2 | `compress/flate.(*compressor).init` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571) ← `compress/flate.NewWriter` (664) ← `compress/gzip.(*Writer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139) ← `runtime/pprof.(*profileBuilder).flush` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:143) ← `runtime/pprof.(*profileBuilder).emitLocation` (589) ← `runtime/pprof.(*profileBuilder).appendLocsForStack` (406) ← `runtime/pprof.(*profileBuilder).build` (348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.0% |     0 B |       2 | `compress/flate.newDeflateFast` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63) ← `compress/flate.(*compressor).init` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571) ← `compress/flate.NewWriter` (664) ← `compress/gzip.(*Writer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139) ← `runtime/pprof.(*profileBuilder).flush` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:143) ← `runtime/pprof.(*profileBuilder).emitLocation` (589) ← `runtime/pprof.(*profileBuilder).appendLocsForStack` (406) ← `runtime/pprof.(*profileBuilder).build` (348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                               |
|  0.0% |     0 B |       1 | `compress/flate.newHuffmanBitWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94) ← `compress/flate.(*compressor).init` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571) ← `compress/flate.NewWriter` (664) ← `compress/gzip.(*Writer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139) ← `runtime/pprof.(*profileBuilder).flush` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:143) ← `runtime/pprof.(*profileBuilder).emitLocation` (589) ← `runtime/pprof.(*profileBuilder).appendLocsForStack` (406) ← `runtime/pprof.(*profileBuilder).build` (348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                   |
|  0.0% |     0 B |       1 | `compress/flate.NewWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664) ← `compress/gzip.(*Writer).Write` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139) ← `runtime/pprof.(*profileBuilder).flush` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:143) ← `runtime/pprof.(*profileBuilder).emitLocation` (589) ← `runtime/pprof.(*profileBuilder).appendLocsForStack` (406) ← `runtime/pprof.(*profileBuilder).build` (348) ← `runtime/pprof.profileWriter` (../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

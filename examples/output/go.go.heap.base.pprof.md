# Allocated heap profile

Allocated 1.69 GiB over 21,959,562 objects (82.7 B per object).

| Category         |      % |     Size |    Objects |
| ---------------- | -----: | -------: | ---------: |
| Standard library | 100.0% | 1.69 GiB | 21,958,536 |
| Ours             |  <0.1% |   16 KiB |      1,026 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.68 GiB (99.1%) main.workload.func1 at ./profile.go:25
│   ├── 924 MiB (53.4%, self 10.5%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
│   │   └── 742 MiB (42.9%) encoding/json.(*encodeState).marshal at 333
│   │       └── 742 MiB (42.9%) encoding/json.(*encodeState).reflectValue at 366
│   │           ├── … 542 MiB (31.3%, self 13.0%) encoding/json.mapEncoder.encode at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765
│   │           │   ├── 155 MiB (9.0%) bytes.(*Buffer).Write at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193
│   │           │   │   └── 155 MiB (9.0%) bytes.(*Buffer).grow at 144
│   │           │   │       └── 155 MiB (9.0%) bytes.growSlice at 247
│   │           │   ├── 81.6 MiB (4.7%) reflect.(*MapIter).Value at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289
│   │           │   │   └── 81.6 MiB (4.7%) reflect.copyVal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881
│   │           │   │       └── 81.6 MiB (4.7%, self 9.5% globally) reflect.unsafe_New at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177
│   │           │   └── 81.3 MiB (4.7%) reflect.(*MapIter).Key at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245
│   │           │       └── 81.3 MiB (4.7%) reflect.copyVal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881
│   │           │           └── 81.3 MiB (4.7%) reflect.unsafe_New at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177
│   │           └── … 200 MiB (11.6%) encoding/json.stringEncoder at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610
│   │               └── 200 MiB (11.5%) bytes.(*Buffer).Write at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193
│   │                   └── 200 MiB (11.5%) bytes.(*Buffer).grow at 144
│   │                       └── 200 MiB (11.5%, self 20.7% globally) bytes.growSlice at 247
│   └── 792 MiB (45.7%) encoding/json.Unmarshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102
│       └── 792 MiB (45.7%) encoding/json.(*decodeState).unmarshal at 173
│           └── 792 MiB (45.7%) encoding/json.(*decodeState).value at 363
│               └── 792 MiB (45.7%) encoding/json.(*decodeState).object at 604
│                   └── 792 MiB (45.7%, self 32.1%) encoding/json.(*decodeState).objectInterface at 1078
│                       ├── … 158 MiB (9.1%, self 0.5%) encoding/json.(*decodeState).valueInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035
│                       │   ├── 143 MiB (8.3%, self 1.9%) encoding/json.(*decodeState).literalInterface at 1129
│                       │   │   ├── 104 MiB (6.0%, self 4.8%, self 9.4% globally) encoding/json.unquote at 1187
│                       │   │   │   └── 19.8 MiB (1.1%) encoding/json.unquoteBytes at 1193
│                       │   │   └── 7 MiB (0.4%) encoding/json.(*decodeState).convertNumber at 838
│                       │   └── 5.77 MiB (0.3%) encoding/json.(*decodeState).arrayInterface at 1052
│                       └── … 78 MiB (4.5%) encoding/json.unquote at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187
├── 9.67 MiB (0.6%) main.leakWorkers.func1 at ./profile.go:56
│   └── 9.67 MiB (0.6%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
├── 1.67 MiB (0.1%) runtime/pprof.profileWriter at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922
│   └── 1.6 MiB (0.1%) runtime/pprof.(*profileBuilder).build at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348
│       └── 1.55 MiB (0.1%) runtime/pprof.(*profileBuilder).appendLocsForStack at 406
│           └── 1.34 MiB (0.1%) runtime/pprof.(*profileBuilder).emitLocation at 589
│               └── 1.15 MiB (0.1%) runtime/pprof.(*profileBuilder).flush at 143
│                   └── 1.15 MiB (0.1%) compress/gzip.(*Writer).Write at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:139
│                       └── 1.15 MiB (0.1%) compress/flate.NewWriter at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664
└── … 1.13 MiB (0.1%) runtime/pprof.StartCPUProfile at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size |    Objects | Function                                        | Location                                                                                              |
| ----: | -------: | ---------: | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 32.2% |  557 MiB |  1,849,080 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`     |
| 20.7% |  359 MiB |      4,523 | `bytes.growSlice`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`              |
| 13.1% |  227 MiB |    516,805 | `encoding/json.mapEncoder.encode`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`      |
| 10.6% |  183 MiB |        404 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`      |
|  9.5% |  164 MiB | 10,778,641 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`           |
|  9.4% |  162 MiB |  5,517,901 | `encoding/json.unquote`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`     |
|  1.9% | 32.4 MiB |  2,082,853 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`     |
|  1.1% | 19.8 MiB |    127,224 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`     |
|  0.5% | 9.34 MiB |    407,886 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`     |
|  0.4% | 7.03 MiB |    460,669 | `encoding/json.(*decodeState).convertNumber`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`      |
|  0.3% | 5.78 MiB |    202,623 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`     |
|  0.1% | 1.13 MiB |          2 | `runtime/pprof.StartCPUProfile`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`       |
| <0.1% |  648 KiB |          1 | `compress/flate.NewWriter`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664`    |
| <0.1% |  624 KiB |          1 | `os.readFileContents`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`                   |
| <0.1% |  397 KiB |        288 | `sync.(*Pool).pinSlow`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`                 |
| <0.1% |  320 KiB |          2 | `compress/flate.(*compressor).init`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`    |
| <0.1% |  214 KiB |      4,643 | `encoding/json.appendString[go.shape.string]`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`      |
| <0.1% |  209 KiB |      1,176 | `runtime/pprof.allFrames`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`       |
| <0.1% |  200 KiB |          2 | `compress/flate.newDeflateFast`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63` |
| <0.1% |  137 KiB |        361 | `runtime/pprof.(*profileBuilder).emitLocation`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`       |

#### Lines

Lines with the largest contribution to each function's self size.

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|     % |     Size |   Objects | Location                                                                                          |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 95.9% |  535 MiB | 1,352,711 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |
|  4.1% | 22.7 MiB |   496,369 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 359 MiB |   4,523 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 227 MiB | 516,805 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |    Size | Objects | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 183 MiB |     404 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

|      % |    Size |    Objects | Location                                                                                    |
| -----: | ------: | ---------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 164 MiB | 10,778,641 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2178` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|      % |    Size |   Objects | Location                                                                                          |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 162 MiB | 5,517,901 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1189` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|     % |     Size |   Objects | Location                                                                                          |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 86.8% | 28.1 MiB | 1,843,720 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1148` |
| 13.2% | 4.28 MiB |   239,133 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1154` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 19.8 MiB | 127,224 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1218` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 9.34 MiB | 407,886 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1040` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

|      % |     Size | Objects | Location                                                                                         |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 7.03 MiB | 460,669 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:846` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 5.78 MiB | 202,623 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1061` |

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
| 100.0% | 397 KiB |     288 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:241` |

##### `compress/flate.(*compressor).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`)

|     % |    Size | Objects | Location                                                                                           |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- |
| 80.0% | 256 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:589` |
| 20.0% |  64 KiB |       1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:585` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

|     % |     Size | Objects | Location                                                                                          |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 58.4% |  125 KiB |   3,404 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1063` |
| 26.6% |   57 KiB |     405 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1011` |
|  7.5% | 16.1 KiB |     385 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1064` |
|  5.6% | 12.1 KiB |     193 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1028` |
|  1.9% | 4.01 KiB |     256 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1065` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

|     % |     Size | Objects | Location                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 78.7% |  165 KiB |     702 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:214` |
| 21.3% | 44.5 KiB |     474 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:232` |

##### `compress/flate.newDeflateFast` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63`)

|      % |    Size | Objects | Location                                                                                              |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 200 KiB |       2 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:64` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

|     % |     Size | Objects | Location                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------- |
| 58.7% | 80.2 KiB |      10 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:609` |
| 23.7% | 32.4 KiB |     344 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:613` |
| 17.6% | 24.1 KiB |       7 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:625` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |   Objects | Caller                                        | Location                                                                                          |
| -----: | ------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 557 MiB | 1,848,453 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|  <0.1% | 136 KiB |       627 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 359 MiB |   4,523 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 227 MiB | 516,805 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |     Size | Objects | Caller                   | Location          |
| ----: | -------: | ------: | ------------------------ | ----------------- |
| 99.0% |  181 MiB |     400 | `main.workload.func1`    | `./profile.go:25` |
|  1.0% | 1.81 MiB |       4 | `main.leakWorkers.func1` | `./profile.go:56` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

|      % |    Size |    Objects | Caller            | Location                                                                                   |
| -----: | ------: | ---------: | ----------------- | ------------------------------------------------------------------------------------------ |
| 100.0% | 164 MiB | 10,778,641 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|     % |     Size |   Objects | Caller                                          | Location                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 51.8% |   84 MiB | 1,443,799 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| 48.2% | 78.2 MiB | 4,074,102 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

|      % |     Size |   Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 32.4 MiB | 2,082,853 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

|      % |     Size | Objects | Caller                  | Location                                                                                          |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 19.8 MiB | 127,224 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |     Size | Objects | Caller                                         | Location                                                                                          |
| -----: | -------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 9.34 MiB | 407,886 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

|      % |     Size | Objects | Caller                                          | Location                                                                                          |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 7.03 MiB | 460,669 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |     Size | Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 5.78 MiB | 202,623 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `runtime/pprof.StartCPUProfile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:888`)

|      % |     Size | Objects | Caller      | Location          |
| -----: | -------: | ------: | ----------- | ----------------- |
| 100.0% | 1.13 MiB |       2 | `main.main` | `./profile.go:82` |

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
| 100.0% | 397 KiB |     288 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `compress/flate.(*compressor).init` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571`)

|      % |    Size | Objects | Caller                     | Location                                                                                           |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 320 KiB |       2 | `compress/flate.NewWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:664` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

|     % |     Size | Objects | Caller                            | Location                                                                                         |
| ----: | -------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 60.6% |  130 KiB |   1,180 | `encoding/json.stringEncoder`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 39.4% | 84.3 KiB |   3,463 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

|      % |    Size | Objects | Caller                                               | Location                                                                                        |
| -----: | ------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 209 KiB |   1,176 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `compress/flate.newDeflateFast` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflatefast.go:63`)

|      % |    Size | Objects | Caller                              | Location                                                                                           |
| -----: | ------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 200 KiB |       2 | `compress/flate.(*compressor).init` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

|      % |    Size | Objects | Caller                                               | Location                                                                                        |
| -----: | ------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 137 KiB |     361 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size |    Objects | Function                                       | Location                                                                                          |
| ----: | -------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.1% | 1.68 GiB | 21,819,963 | `main.workload.func1`                          | `./profile.go:25`                                                                                 |
| 53.9% |  934 MiB | 11,306,676 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 45.9% |  794 MiB | 10,650,090 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 45.9% |  794 MiB | 10,648,236 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 45.9% |  794 MiB | 10,648,236 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| 45.9% |  794 MiB | 10,648,236 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| 45.9% |  794 MiB | 10,648,236 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| 45.8% |  794 MiB | 10,646,327 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 45.8% |  793 MiB | 10,634,576 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 43.3% |  750 MiB | 11,305,577 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| 43.3% |  750 MiB | 11,305,577 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| 43.3% |  750 MiB | 11,305,577 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| 43.3% |  750 MiB | 11,303,793 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| 43.3% |  750 MiB | 11,295,047 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| 43.3% |  750 MiB | 11,295,047 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| 20.7% |  359 MiB |      4,974 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| 20.7% |  359 MiB |      4,523 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 20.7% |  359 MiB |      4,523 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| 11.7% |  202 MiB |      2,212 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| 10.5% |  182 MiB |  5,645,125 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |    Size |    Objects | Function                                       | Location                                                                                          |
| ----: | ------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 53.9% | 934 MiB | 11,306,676 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
| 45.9% | 794 MiB | 10,650,090 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
| 45.9% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 45.9% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| 45.9% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| 45.9% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| 45.8% | 794 MiB | 10,646,327 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| 45.8% | 793 MiB | 10,634,576 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 43.3% | 750 MiB | 11,305,577 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| 43.3% | 750 MiB | 11,305,577 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| 43.3% | 750 MiB | 11,305,577 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| 43.3% | 750 MiB | 11,303,793 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| 43.3% | 750 MiB | 11,295,047 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| 43.3% | 750 MiB | 11,295,047 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| 20.7% | 359 MiB |      4,974 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| 20.7% | 359 MiB |      4,523 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| 20.7% | 359 MiB |      4,523 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| 11.7% | 202 MiB |      2,212 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| 10.5% | 182 MiB |  5,645,125 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  9.5% | 164 MiB | 10,778,641 | `reflect.unsafe_New`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`       |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |     Size |    Objects | Caller                   | Location          |
| ----: | -------: | ---------: | ------------------------ | ----------------- |
| 99.0% |  924 MiB | 11,196,749 | `main.workload.func1`    | `./profile.go:25` |
|  1.0% | 9.67 MiB |    109,927 | `main.leakWorkers.func1` | `./profile.go:56` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|     % |     Size |    Objects | Caller                | Location          |
| ----: | -------: | ---------: | --------------------- | ----------------- |
| 99.7% |  792 MiB | 10,622,188 | `main.workload.func1` | `./profile.go:25` |
|  0.3% | 2.09 MiB |     27,902 | `main.leakWorkers`    | `./profile.go:49` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |    Size |    Objects | Caller                                        | Location                                                                                          |
| -----: | ------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
|  99.8% | 792 MiB | 10,643,268 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |    Size |    Objects | Caller                               | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |    Size |    Objects | Caller                                   | Location                                                                                         |
| -----: | ------: | ---------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |    Size |    Objects | Caller                    | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|      % |    Size |    Objects | Caller                                         | Location                                                                                          |
| -----: | ------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 794 MiB | 10,646,327 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  99.7% | 791 MiB | 10,632,030 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|      % |    Size |    Objects | Caller                                        | Location                                                                                          |
| -----: | ------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 793 MiB | 10,634,576 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |    Size |    Objects | Caller                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,305,577 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|      % |    Size |    Objects | Caller                                 | Location                                                                                         |
| -----: | ------: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,305,577 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 100.0% | 750 MiB | 11,303,793 | `encoding/json.interfaceEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |    Size |    Objects | Caller                  | Location                                                                                         |
| -----: | ------: | ---------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,305,577 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|      % |    Size |    Objects | Caller                              | Location                                                                                         |
| -----: | ------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,303,793 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  99.9% | 750 MiB | 11,295,047 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|      % |    Size |    Objects | Caller                              | Location                                                                                         |
| -----: | ------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,295,047 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|      % |    Size |    Objects | Caller                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,295,047 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|      % |     Size | Objects | Caller                      | Location                                                                                 |
| -----: | -------: | ------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |  359 MiB |   4,523 | `bytes.(*Buffer).Write`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |
|  <0.1% | 28.2 KiB |     451 | `bytes.(*Buffer).WriteByte` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |    Size | Objects | Caller                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 359 MiB |   4,523 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|     % |     Size | Objects | Caller                              | Location                                                                                         |
| ----: | -------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 56.3% |  202 MiB |   1,032 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 43.7% |  157 MiB |   3,199 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| <0.1% | 36.6 KiB |     292 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|      % |    Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 202 MiB |   2,212 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|     % |     Size |   Objects | Caller                                          | Location                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 57.0% |  104 MiB | 1,571,023 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
| 43.0% | 78.2 MiB | 4,074,102 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

|      % |    Size |    Objects | Caller            | Location                                                                                   |
| -----: | ------: | ---------: | ----------------- | ------------------------------------------------------------------------------------------ |
| 100.0% | 164 MiB | 10,778,641 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.workload.func1` (`./profile.go:25`)

|     % |    Size |    Objects | Callee                    | Location                                                                                         |
| ----: | ------: | ---------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.9% | 924 MiB | 11,196,749 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 46.1% | 792 MiB | 10,622,188 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|     % |    Size |    Objects | Callee                                 | Location                                                                                         |
| ----: | ------: | ---------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 80.4% | 750 MiB | 11,305,577 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| <0.1% | 275 KiB |        589 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |
| <0.1% | 147 KiB |        106 | `sync.(*Pool).Put`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99`             |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|      % |    Size |    Objects | Callee                                   | Location                                                                                         |
| -----: | ------: | ---------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |
|  <0.1% | 109 KiB |      1,420 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |     Size |    Objects | Callee                                        | Location                                                                                          |
| -----: | -------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |  794 MiB | 10,646,327 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|   9.9% | 78.2 MiB |  4,074,102 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|      % |    Size |    Objects | Callee                                         | Location                                                                                          |
| -----: | ------: | ---------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|      % |    Size |    Objects | Callee                                | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|      % |    Size |    Objects | Callee                               | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 794 MiB | 10,648,236 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|     % |    Size |    Objects | Callee                                          | Location                                                                                          |
| ----: | ------: | ---------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.9% | 793 MiB | 10,634,576 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| 99.8% | 792 MiB | 10,643,268 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| 18.0% | 143 MiB |  4,114,545 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|     % |    Size |    Objects | Callee                                        | Location                                                                                          |
| ----: | ------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.8% | 791 MiB | 10,632,030 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |     Size |    Objects | Callee                                        | Location                                                                                         |
| -----: | -------: | ---------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  750 MiB | 11,303,793 | `encoding/json.interfaceEncoder`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
|  20.9% |  157 MiB |      3,199 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  11.0% | 82.3 MiB |  5,396,502 | `reflect.(*MapIter).Value`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`          |
|  10.9% | 82.1 MiB |  5,382,139 | `reflect.(*MapIter).Key`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`          |
|  <0.1% | 84.3 KiB |      3,463 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|      % |     Size |    Objects | Callee                              | Location                                                                                         |
| -----: | -------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  750 MiB | 11,305,577 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  99.9% |  750 MiB | 11,295,047 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|  27.0% |  202 MiB |      2,212 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  <0.1% | 52.6 KiB |        806 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |    Size |    Objects | Callee                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,305,577 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|      % |    Size |    Objects | Callee                                      | Location                                                                                         |
| -----: | ------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,303,793 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|      % |    Size |    Objects | Callee                           | Location                                                                                         |
| -----: | ------: | ---------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,295,047 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|      % |    Size |    Objects | Callee                              | Location                                                                                         |
| -----: | ------: | ---------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 750 MiB | 11,295,047 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|      % |    Size | Objects | Callee            | Location                                                                                 |
| -----: | ------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 359 MiB |   4,523 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|      % |    Size | Objects | Callee                 | Location                                                                                 |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 359 MiB |   4,523 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|     % |    Size | Objects | Callee                                        | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.9% | 202 MiB |   1,032 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  0.1% | 130 KiB |   1,180 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

|     % |     Size | Objects | Callee                       | Location                                                                                          |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| 10.9% | 19.8 MiB | 127,224 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `main.workload.func1` (`./profile.go:25`)

|     % |     Size |   Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.7% |  255 MiB |   729,694 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10.5% |  181 MiB |       400 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10.3% |  178 MiB |       355 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                             |
|  9.1% |  157 MiB |   458,029 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.2% |  107 MiB |   149,977 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.3% | 92.3 MiB |     1,075 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.7% | 81.4 MiB |   275,578 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% | 58.3 MiB |   130,298 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                              |
|  2.6% | 44.4 MiB |       355 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                |
|  2.4% | 41.4 MiB |   683,876 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.3% | 39.5 MiB | 2,018,655 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.3% | 39.2 MiB |    40,122 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.2% | 38.7 MiB | 2,535,762 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                        |
|  2.2% | 38.6 MiB | 2,532,171 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                          |
|  1.4% |   24 MiB | 1,221,837 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.3% | 23.3 MiB |   142,067 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                     |
|  1.3% | 22.2 MiB |       355 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                    |
|  1.2% | 21.3 MiB | 1,397,926 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) |
|  1.2% | 20.7 MiB | 1,356,373 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)   |
|  1.1% | 19.5 MiB |   360,198 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                   |

# Retained heap profile

Retained 2.08 MiB over 196 objects (10.9 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 2.08 MiB |     196 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2 MiB (96.2%) main.leakWorkers.func1 at ./profile.go:56
│   └── 2 MiB (96.2%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
│       └── 2 MiB (96.2%) encoding/json.(*encodeState).marshal at 333
│           └── 2 MiB (96.2%) encoding/json.(*encodeState).reflectValue at 366
│               └── … 2 MiB (96.2%) encoding/json.stringEncoder at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610
│                   └── 2 MiB (96.2%) bytes.(*Buffer).Write at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193
│                       └── 2 MiB (96.2%) bytes.(*Buffer).grow at 144
│                           └── 2 MiB (96.2%) bytes.growSlice at 247
├── 46.3 KiB (2.2%) runtime.mcall at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302
│   └── 46.3 KiB (2.2%) runtime.park_m at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253
│       └── 46.3 KiB (2.2%) runtime.schedule at 4135
│           └── 46.3 KiB (2.2%) runtime.resetspinning at 4021
│               └── 46.3 KiB (2.2%) runtime.wakep at 3212
│                   └── 46.3 KiB (2.2%) runtime.startm at 3035
│                       └── 46.3 KiB (2.2%) runtime.newm at 2857
│                           └── 46.3 KiB (2.2%) runtime.allocm at 2269
│                               ├── 26.8 KiB (1.3%) runtime.mcommoninit at 998
│                               │   └── 18.4 KiB (0.9%) runtime.mProfStackInit at 1043
│                               │       └── 18.4 KiB (0.9%) runtime.makeProfStackFP at 1056
│                               │           └── 18.4 KiB (0.9%) runtime.makeslice at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102
│                               │               └── 18.4 KiB (0.9%, self 3.3% globally) runtime.mallocgc at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067
│                               └── 15.2 KiB (0.7%) runtime.newobject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156
│                                   └── 15.2 KiB (0.7%) runtime.mallocgc at 1067
├── 14.4 KiB (0.7%) runtime.mstart at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258
│   └── 14.4 KiB (0.7%) runtime.mstart0 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862
│       └── 14.4 KiB (0.7%) runtime.mstart1 at 1904
│           └── 14.4 KiB (0.7%) runtime.schedule at 4135
│               └── 14.4 KiB (0.7%) runtime.resetspinning at 4021
│                   └── 14.4 KiB (0.7%) runtime.wakep at 3212
│                       └── 14.4 KiB (0.7%) runtime.startm at 3035
│                           └── 14.4 KiB (0.7%) runtime.newm at 2857
│                               └── 14.4 KiB (0.7%) runtime.allocm at 2269
│                                   └── 10.2 KiB (0.5%) runtime.newobject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156
└── 12.2 KiB (0.6%) main.workload.func1 at ./profile.go:25
    └── 12.2 KiB (0.6%) encoding/json.Unmarshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102
        └── 12.2 KiB (0.6%) encoding/json.(*decodeState).unmarshal at 173
            └── 12.2 KiB (0.6%) encoding/json.(*decodeState).value at 363
                └── 12.2 KiB (0.6%) encoding/json.(*decodeState).object at 604
                    └── 12.2 KiB (0.6%) encoding/json.(*decodeState).objectInterface at 1078
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                                       | Location                                                                                          |
| ----: | -------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 96.2% |    2 MiB |       4 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  3.3% | 69.2 KiB |      81 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
|  0.6% | 12.2 KiB |     111 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Lines

Lines with the largest contribution to each function's self size.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |  Size | Objects | Location                                                                                 |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |     Size | Objects | Location                                                                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------- |
| 36.7% | 25.4 KiB |      12 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152` |
| 32.7% | 22.6 KiB |      24 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |
| 30.6% | 21.2 KiB |      45 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |     Size | Objects | Location                                                                                          |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 12.2 KiB |     111 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |  Size | Objects | Caller                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |     Size | Objects | Caller              | Location                                                                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| 73.5% | 50.9 KiB |      65 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| 26.5% | 18.4 KiB |      16 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|      % |     Size | Objects | Caller                                        | Location                                                                                          |
| -----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 12.2 KiB |     111 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

### Total size

Functions with the most bytes retained within the function and its callees.

|     % |     Size | Objects | Function                                    | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 96.2% |    2 MiB |       4 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
| 96.2% |    2 MiB |       4 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
| 96.2% |    2 MiB |       4 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| 96.2% |    2 MiB |       4 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 96.2% |    2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
| 96.2% |    2 MiB |       4 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| 96.2% |    2 MiB |       4 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 96.2% |    2 MiB |       4 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
| 96.2% |    2 MiB |       4 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
| 96.2% |    2 MiB |       4 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 96.2% |    2 MiB |       4 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| 96.2% |    2 MiB |       4 | `main.leakWorkers.func1`                    | `./profile.go:56`                                                                                |
|  3.3% | 69.2 KiB |      81 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  2.9% | 60.7 KiB |      64 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`        |
|  2.9% | 60.7 KiB |      64 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`        |
|  2.9% | 60.7 KiB |      64 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |
|  2.9% | 60.7 KiB |      64 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  2.9% | 60.7 KiB |      64 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  2.9% | 60.7 KiB |      64 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
|  2.4% | 50.9 KiB |      65 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                                    | Location                                                                                         |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 96.2% |    2 MiB |       4 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
| 96.2% |    2 MiB |       4 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
| 96.2% |    2 MiB |       4 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| 96.2% |    2 MiB |       4 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| 96.2% |    2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
| 96.2% |    2 MiB |       4 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| 96.2% |    2 MiB |       4 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 96.2% |    2 MiB |       4 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
| 96.2% |    2 MiB |       4 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
| 96.2% |    2 MiB |       4 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| 96.2% |    2 MiB |       4 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  3.3% | 69.2 KiB |      81 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  2.9% | 60.7 KiB |      64 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`        |
|  2.9% | 60.7 KiB |      64 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`        |
|  2.9% | 60.7 KiB |      64 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`        |
|  2.9% | 60.7 KiB |      64 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
|  2.9% | 60.7 KiB |      64 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
|  2.9% | 60.7 KiB |      64 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
|  2.4% | 50.9 KiB |      65 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |
|  2.2% | 46.3 KiB |      50 | `runtime.park_m`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`        |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|      % |  Size | Objects | Caller                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|      % |  Size | Objects | Caller                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `bytes.(*Buffer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|      % |  Size | Objects | Caller                        | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.stringEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|      % |  Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|      % |  Size | Objects | Caller                                 | Location                                                                                         |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.interfaceEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| 100.0% | 2 MiB |       4 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|      % |  Size | Objects | Caller                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| 100.0% | 2 MiB |       4 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|      % |  Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|      % |  Size | Objects | Caller                              | Location                                                                                         |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|      % |  Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ----: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|      % |  Size | Objects | Caller                  | Location                                                                                         |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|      % |  Size | Objects | Caller                   | Location          |
| -----: | ----: | ------: | ------------------------ | ----------------- |
| 100.0% | 2 MiB |       4 | `main.leakWorkers.func1` | `./profile.go:56` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

|     % |     Size | Objects | Caller              | Location                                                                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| 73.5% | 50.9 KiB |      65 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| 26.5% | 18.4 KiB |      16 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

|      % |     Size | Objects | Caller         | Location                                                                                  |
| -----: | -------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.newm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857` |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

|      % |     Size | Objects | Caller           | Location                                                                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035` |

##### `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`)

|      % |     Size | Objects | Caller          | Location                                                                                  |
| -----: | -------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|      % |     Size | Objects | Caller                  | Location                                                                                  |
| -----: | -------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |     Size | Objects | Caller             | Location                                                                                  |
| -----: | -------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|     % |     Size | Objects | Caller            | Location                                                                                  |
| ----: | -------: | ------: | ----------------- | ----------------------------------------------------------------------------------------- |
| 76.3% | 46.3 KiB |      50 | `runtime.park_m`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |
| 23.7% | 14.4 KiB |      14 | `runtime.mstart1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

|     % |     Size | Objects | Caller                   | Location                                                                                  |
| ----: | -------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 50.0% | 25.4 KiB |      12 | `runtime.allocm`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |
| 41.7% | 21.2 KiB |      45 | `runtime.malg`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273` |
|  8.4% | 4.25 KiB |       8 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`  |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |     Size | Objects | Caller          | Location                                                                                     |
| -----: | -------: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 46.3 KiB |      50 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

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

##### `main.leakWorkers.func1` (`./profile.go:56`)

|      % |  Size | Objects | Callee                  | Location                                                                                         |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       4 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

|     % |     Size | Objects | Callee                | Location                                                                                    |
| ----: | -------: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| 44.2% | 26.8 KiB |      34 | `runtime.mcommoninit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`    |
| 41.9% | 25.4 KiB |      12 | `runtime.newobject`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| 14.0% | 8.48 KiB |      18 | `runtime.malg`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`   |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

|      % |     Size | Objects | Callee           | Location                                                                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.allocm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |

##### `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`)

|      % |     Size | Objects | Callee         | Location                                                                                  |
| -----: | -------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.newm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

|      % |     Size | Objects | Callee           | Location                                                                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

|      % |     Size | Objects | Callee          | Location                                                                                  |
| -----: | -------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

|      % |     Size | Objects | Callee                  | Location                                                                                  |
| -----: | -------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 60.7 KiB |      64 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

|      % |     Size | Objects | Callee             | Location                                                                                    |
| -----: | -------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 50.9 KiB |      65 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

|      % |     Size | Objects | Callee             | Location                                                                                  |
| -----: | -------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 46.3 KiB |      50 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 96.2% |    2 MiB |       4 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.leakWorkers.func1` (`./profile.go:56`) |
|  0.9% | 18.4 KiB |      16 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.7% | 15.2 KiB |       7 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% | 10.2 KiB |       5 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 8.48 KiB |      18 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.mpreinit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328`) ← `runtime.mcommoninit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.4% | 8.11 KiB |      74 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% | 4.25 KiB |       8 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% | 4.24 KiB |       9 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% | 4.24 KiB |       9 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% | 4.24 KiB |       9 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.newproc1` (5313) ← `runtime.newproc.func1` (5298) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.2% | 4.05 KiB |      37 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

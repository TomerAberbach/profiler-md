# Allocated heap and retained heap profile diff

Allocated 1.8 GB (-2.23 MB, -0.1%) and retained 2.19 MB → 1.66 MB (-529 kB, -24.1%) over 491 samples → 461 samples (3.66 MB → 3.9 MB and 4.47 kB → 3.61 kB per sample).

| Category | Change |    Delta |      % |   Size |              Size |   Samples |
| -------- | -----: | -------: | -----: | -----: | ----------------: | --------: |
| ours     |  -0.1% | -2.23 MB | 100.0% | 1.8 GB | 2.19 MB → 1.66 MB | 491 → 461 |

## Allocated heap

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size | Samples | Function                                        | Location                                                                                                         |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|   +3.3% | +1.09 MB |   1.8% → 1.9% | 33.2 MB → 34.3 MB |      25 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |
|   +0.4% | +1.04 MB | 13.0% → 13.1% |   234 MB → 235 MB | 47 → 33 | `encoding/json.mapEncoder.encode`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765  |
|   +0.2% |  +328 kB |          9.5% |            171 MB | 43 → 30 | `reflect.unsafe_New`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177       |
|   +1.8% |  +135 kB |          0.4% | 7.45 MB → 7.58 MB |      11 | `encoding/json.(*decodeState).convertNumber`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838  |
|  +41.9% | +54.5 kB |          0.0% |   130 kB → 185 kB |   5 → 6 | `runtime/pprof.allFrames`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209   |
|  +13.3% | +48.4 kB |          0.0% |   363 kB → 411 kB |       2 | `sync.(*Pool).pinSlow`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223             |
|  +14.5% | +33.1 kB |          0.0% |   227 kB → 260 kB | 14 → 13 | `encoding/json.appendString[go.shape.string]`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999  |
|  +24.0% | +29.7 kB |          0.0% |   124 kB → 154 kB | 16 → 17 | `runtime/pprof.(*profileBuilder).emitLocation`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589   |
| +133.1% | +16.4 kB |          0.0% | 12.3 kB → 28.8 kB |   1 → 2 | `internal/strconv.fmtF`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460 |
|  +18.8% | +12.5 kB |          0.0% | 66.7 kB → 79.2 kB |       1 | `encoding/json.Unmarshal`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102  |
|  +66.7% | +8.26 kB |          0.0% | 12.4 kB → 20.6 kB |       1 | `bytes.(*Buffer).grow`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144          |
|     new | +4.27 kB |          0.0% |     0 B → 4.27 kB |   0 → 1 | `runtime/pprof.newProfileBuilder`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259   |
|     new | +4.17 kB |          0.0% |     0 B → 4.17 kB |   0 → 1 | `reflect.addReflectOff`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707      |
|     new | +4.12 kB |          0.0% |     0 B → 4.12 kB |   0 → 1 | `sync.(*poolChain).pushHead`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/poolqueue.go:220        |
|   +2.1% |   +630 B |          0.0% | 29.7 kB → 30.3 kB |   7 → 9 | `runtime/pprof.(*protobuf).varint`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14 |

##### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size | Samples | Function                                       | Location                                                                                                                    |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
|   -0.4% | -2.22 MB | 32.6% → 32.5% |   585 MB → 583 MB | 56 → 55 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078            |
|   -0.3% |  -939 kB |         20.3% |   366 MB → 365 MB | 21 → 13 | `bytes.growSlice`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247                     |
| removed |  -639 kB |          0.0% |      639 kB → 0 B |   1 → 0 | `os.readFileContents`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886                          |
|   -0.3% |  -571 kB |   9.5% → 9.4% |            170 MB |     119 | `encoding/json.unquote`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187            |
|   -3.6% |  -374 kB |          0.6% | 10.5 MB → 10.1 MB |       9 | `encoding/json.(*decodeState).valueInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035            |
|   -1.1% |  -219 kB |          1.1% | 20.5 MB → 20.3 MB |      29 | `encoding/json.unquoteBytes`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193            |
| removed | -16.1 kB |          0.0% |     16.1 kB → 0 B |   4 → 1 | `compress/flate.(*huffmanEncoder).generate`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272      |
|  -14.0% |   -13 kB |          0.0% | 92.7 kB → 79.7 kB |  8 → 11 | `runtime.mallocgc`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067                  |
|  -11.3% | -12.2 kB |          0.0% |  108 kB → 95.3 kB |       5 | `encoding/json.(*scanner).pushParseState`      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180            |
|   -0.2% | -9.74 kB |          0.3% |  5.8 MB → 5.79 MB | 24 → 23 | `encoding/json.(*decodeState).arrayInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052            |
|  -66.7% | -8.21 kB |          0.0% |  12.3 kB → 4.1 kB |       1 | `main.workload.func1`                          | scripts/fixtures/assets/go/profile.go:25                                                                                    |
| removed | -4.16 kB |          0.0% |     4.16 kB → 0 B |   1 → 0 | `compress/flate.newHuffmanBitWriter`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94 |
|   -7.3% | -2.89 kB |          0.0% |   39.9 kB → 37 kB | 10 → 11 | `runtime/pprof.(*profileBuilder).stringIndex`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133              |
|   -0.0% |     -8 B |          0.0% |           37.1 kB |       2 | `encoding/json.newEncodeState`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315             |

#### Total size

##### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |              Size |  Samples | Function                                             | Location                                                                                                         |
| -----: | -------: | ------------: | ----------------: | -------: | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  +0.7% | +1.01 MB |   8.3% → 8.4% |   149 MB → 150 MB |      155 | `encoding/json.(*decodeState).literalInterface`      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |
|  +1.1% |  +915 kB |   4.7% → 4.8% | 85.2 MB → 86.1 MB |  20 → 15 | `reflect.(*MapIter).Key`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245           |
|  +0.1% |  +541 kB | 53.5% → 53.6% |   961 MB → 962 MB | 132 → 99 | `encoding/json.Marshal`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205  |
|  +0.1% |  +533 kB | 42.8% → 42.9% |   770 MB → 771 MB | 112 → 76 | `encoding/json.arrayEncoder.encode`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883  |
|  +0.1% |  +533 kB | 42.8% → 42.9% |   770 MB → 771 MB | 112 → 76 | `encoding/json.sliceEncoder.encode`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843  |
|  +0.1% |  +489 kB | 42.9% → 43.0% |            771 MB | 127 → 93 | `encoding/json.(*encodeState).reflectValue`          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366  |
|  +0.1% |  +489 kB | 42.9% → 43.0% |            771 MB | 127 → 93 | `encoding/json.(*encodeState).marshal`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333  |
|  +0.1% |  +484 kB |         42.9% |            771 MB | 127 → 92 | `encoding/json.mapEncoder.encode`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765  |
|  +0.1% |  +480 kB |         42.9% |            771 MB | 123 → 88 | `encoding/json.interfaceEncoder`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695  |
|  +0.2% |  +328 kB |          9.5% |            171 MB |  43 → 30 | `reflect.unsafe_New`                                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177       |
|  +0.2% |  +328 kB |          9.5% |            171 MB |  43 → 30 | `reflect.copyVal`                                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881        |
|  +1.8% |  +135 kB |          0.4% | 7.45 MB → 7.58 MB |       11 | `encoding/json.(*decodeState).convertNumber`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838  |
|  +4.6% | +69.7 kB |          0.1% | 1.52 MB → 1.59 MB |  43 → 47 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406   |
|  +4.1% |   +66 kB |          0.1% | 1.62 MB → 1.69 MB |  40 → 36 | `runtime/pprof.profileWriter`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922   |
|  +3.9% | +61.7 kB |          0.1% | 1.58 MB → 1.64 MB |  39 → 35 | `runtime/pprof.(*profileBuilder).build`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348   |
| +41.9% | +54.5 kB |          0.0% |   130 kB → 185 kB |    5 → 6 | `runtime/pprof.allFrames`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209   |
| +13.3% | +48.4 kB |          0.0% |   363 kB → 411 kB |        2 | `sync.(*Pool).pinSlow`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223             |
| +13.3% | +48.4 kB |          0.0% |   363 kB → 411 kB |        2 | `sync.(*Pool).pin`                                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202             |
| +14.5% | +33.1 kB |          0.0% |   227 kB → 260 kB |  14 → 13 | `encoding/json.appendString[go.shape.string]`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999  |
| +12.2% |   +29 kB |          0.0% |   237 kB → 266 kB |        1 | `sync.(*Pool).Get`                                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131             |

##### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                       | Location                                                                                                         |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|   -0.3% | -2.17 MB |         46.3% |   833 MB → 831 MB | 273 → 271 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |
|   -0.3% | -2.17 MB |         46.3% |   833 MB → 831 MB | 273 → 271 | `encoding/json.(*decodeState).object`          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604  |
|   -0.3% | -2.17 MB |         46.3% |   833 MB → 831 MB | 273 → 271 | `encoding/json.(*decodeState).value`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363  |
|   -0.3% | -2.17 MB |         46.3% |   833 MB → 831 MB | 273 → 271 | `encoding/json.(*decodeState).unmarshal`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173  |
|   -0.3% | -2.17 MB |         46.3% |   833 MB → 831 MB | 279 → 277 | `encoding/json.Unmarshal`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102  |
|   -0.3% | -2.16 MB |         46.3% |   833 MB → 831 MB | 270 → 268 | `encoding/json.(*decodeState).valueInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035 |
|   -0.3% | -2.12 MB | 46.3% → 46.2% |   832 MB → 830 MB | 257 → 255 | `encoding/json.(*decodeState).arrayInterface`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052 |
| removed | -1.99 MB |   0.1% → 0.0% |     1.99 MB → 0 B |    36 → 0 | `encoding/json.typeEncoder.func2`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402  |
|   -0.1% | -1.64 MB |         99.8% |           1.79 GB | 412 → 377 | `main.workload.func1`                          | scripts/fixtures/assets/go/profile.go:25                                                                         |
|   -0.3% |  -939 kB |         20.3% |   366 MB → 365 MB |   21 → 13 | `bytes.growSlice`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247          |
|   -0.3% |  -939 kB |         20.3% |   366 MB → 365 MB |   21 → 13 | `bytes.(*Buffer).Write`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193          |
|   -0.3% |  -930 kB |         20.3% |   366 MB → 365 MB |   22 → 14 | `bytes.(*Buffer).grow`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144          |
|   -0.4% |  -791 kB |         10.6% |   191 MB → 190 MB |       148 | `encoding/json.unquote`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187 |
|  -35.1% |  -639 kB |          0.1% | 1.82 MB → 1.18 MB |   31 → 37 | `main.main`                                    | scripts/fixtures/assets/go/profile.go:61                                                                         |
|  -35.1% |  -639 kB |          0.1% | 1.82 MB → 1.18 MB |   31 → 37 | `runtime.main`                                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149          |
| removed |  -639 kB |          0.0% |      639 kB → 0 B |     1 → 0 | `os.readFileContents`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886               |
| removed |  -639 kB |          0.0% |      639 kB → 0 B |     1 → 0 | `os.ReadFile`                                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864               |
|   -0.7% |  -587 kB |   4.8% → 4.7% | 85.9 MB → 85.3 MB |   23 → 15 | `reflect.(*MapIter).Value`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289           |
|   -0.3% |  -578 kB | 11.5% → 11.4% |            206 MB |    10 → 8 | `encoding/json.stringEncoder`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610  |
|   -1.1% |  -219 kB |          1.1% | 20.5 MB → 20.3 MB |        29 | `encoding/json.unquoteBytes`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193 |

## Retained heap

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |    Delta |           % |          Size | Samples | Function                          | Location                                                                                                        |
| -----: | -------: | ----------: | ------------: | ------: | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|    new | +4.17 kB | 0.0% → 0.3% | 0 B → 4.17 kB |   0 → 1 | `reflect.addReflectOff`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707     |
|    new | +4.15 kB | 0.0% → 0.2% | 0 B → 4.15 kB | 47 → 33 | `encoding/json.mapEncoder.encode` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
|    new | +4.13 kB | 0.0% → 0.2% | 0 B → 4.13 kB |       2 | `encoding/json.newEncodeState`    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315 |

##### Progressions

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size | Samples | Function                                       | Location                                                                                                         |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  -25.0% |  -524 kB | 95.6% → 94.5% |  2.1 MB → 1.57 MB | 21 → 13 | `bytes.growSlice`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247          |
|  -14.0% |   -13 kB |   4.2% → 4.8% | 92.7 kB → 79.7 kB |  8 → 11 | `runtime.mallocgc`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067       |
| removed | -4.15 kB |   0.2% → 0.0% |     4.15 kB → 0 B | 56 → 55 | `encoding/json.(*decodeState).objectInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078 |

#### Total size

##### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |    Delta |           % |              Size | Samples | Function                                    | Location                                                                                                    |
| -----: | -------: | ----------: | ----------------: | ------: | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| +64.7% | +22.9 kB | 1.6% → 3.5% | 35.4 kB → 58.3 kB |   4 → 8 | `runtime.allocm`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269    |
| +64.7% | +22.9 kB | 1.6% → 3.5% | 35.4 kB → 58.3 kB |   4 → 8 | `runtime.newm`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857    |
| +64.7% | +22.9 kB | 1.6% → 3.5% | 35.4 kB → 58.3 kB |   4 → 8 | `runtime.startm`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035    |
| +64.7% | +22.9 kB | 1.6% → 3.5% | 35.4 kB → 58.3 kB |   4 → 8 | `runtime.wakep`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212    |
| +76.0% |  +9.9 kB | 0.6% → 1.4% |   13 kB → 22.9 kB |   1 → 4 | `runtime.systemstack`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353 |
|    new | +9.04 kB | 0.0% → 0.5% |     0 B → 9.04 kB |   0 → 2 | `runtime.startTheWorldWithSema`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1760    |
|    new | +9.04 kB | 0.0% → 0.5% |     0 B → 9.04 kB |   0 → 2 | `runtime.gcStart.func4`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947      |
| +24.5% | +8.68 kB | 1.6% → 2.6% | 35.4 kB → 44.1 kB |   4 → 5 | `runtime.resetspinning`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021    |
| +24.5% | +8.68 kB | 1.6% → 2.6% | 35.4 kB → 44.1 kB |   4 → 5 | `runtime.schedule`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135    |
| +66.7% | +8.68 kB | 0.6% → 1.3% |   13 kB → 21.7 kB |   1 → 3 | `runtime.malg`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273    |
| +34.5% | +5.21 kB | 0.7% → 1.2% | 15.1 kB → 20.3 kB |       2 | `runtime.park_m`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253    |
| +34.5% | +5.21 kB | 0.7% → 1.2% | 15.1 kB → 20.3 kB |       2 | `runtime.mcall`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302 |
|    new |  +5.2 kB | 0.0% → 0.3% |      0 B → 5.2 kB |   0 → 1 | `runtime.(*gcControllerState).enlistWorker` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697 |
|    new |  +5.2 kB | 0.0% → 0.3% |      0 B → 5.2 kB |   0 → 1 | `runtime.gcDrain`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239 |
|    new |  +5.2 kB | 0.0% → 0.3% |      0 B → 5.2 kB |   0 → 1 | `runtime.gcDrainMarkWorkerIdle`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167 |
|    new |  +5.2 kB | 0.0% → 0.3% |      0 B → 5.2 kB |   0 → 1 | `runtime.gcBgMarkWorker.func2`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847     |
| +50.0% |  +4.7 kB | 0.4% → 0.8% |  9.4 kB → 14.1 kB |   2 → 3 | `runtime.makeslice`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102    |
| +50.0% |  +4.7 kB | 0.4% → 0.8% |  9.4 kB → 14.1 kB |   2 → 3 | `runtime.makeProfStackFP`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056    |
| +50.0% |  +4.7 kB | 0.4% → 0.8% |  9.4 kB → 14.1 kB |   2 → 3 | `runtime.mProfStackInit`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043    |
| +50.0% |  +4.7 kB | 0.4% → 0.8% |  9.4 kB → 14.1 kB |   2 → 3 | `runtime.mcommoninit`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998     |

##### Progressions

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                    | Location                                                                                                        |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|  -25.0% |  -524 kB | 95.6% → 94.5% |  2.1 MB → 1.57 MB |   22 → 14 | `bytes.(*Buffer).grow`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144         |
|  -25.0% |  -524 kB | 95.6% → 94.5% |  2.1 MB → 1.57 MB |    10 → 8 | `encoding/json.stringEncoder`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610 |
|  -25.0% |  -524 kB | 95.6% → 94.5% |  2.1 MB → 1.57 MB |   21 → 13 | `bytes.growSlice`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247         |
|  -25.0% |  -524 kB | 95.6% → 94.5% |  2.1 MB → 1.57 MB |   21 → 13 | `bytes.(*Buffer).Write`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193         |
|  -24.8% |  -520 kB | 95.6% → 94.7% |  2.1 MB → 1.58 MB |  127 → 92 | `encoding/json.mapEncoder.encode`           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765 |
|  -24.8% |  -520 kB | 95.6% → 94.7% |  2.1 MB → 1.58 MB |  123 → 88 | `encoding/json.interfaceEncoder`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695 |
|  -24.8% |  -520 kB | 95.6% → 94.7% |  2.1 MB → 1.58 MB |  112 → 76 | `encoding/json.arrayEncoder.encode`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883 |
|  -24.8% |  -520 kB | 95.6% → 94.7% |  2.1 MB → 1.58 MB |  112 → 76 | `encoding/json.sliceEncoder.encode`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843 |
|  -24.6% |  -516 kB | 95.8% → 95.2% |  2.1 MB → 1.59 MB | 412 → 377 | `main.workload.func1`                       | scripts/fixtures/assets/go/profile.go:25                                                                        |
|  -24.6% |  -516 kB | 95.6% → 95.0% |  2.1 MB → 1.58 MB |  127 → 93 | `encoding/json.(*encodeState).reflectValue` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366 |
|  -24.6% |  -516 kB | 95.6% → 95.0% |  2.1 MB → 1.58 MB |  127 → 93 | `encoding/json.(*encodeState).marshal`      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333 |
|  -24.4% |  -512 kB | 95.6% → 95.2% |  2.1 MB → 1.59 MB |  132 → 99 | `encoding/json.Marshal`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205 |
|  -21.3% | -17.7 kB |   3.8% → 3.9% | 83.3 kB → 65.6 kB |     6 → 8 | `runtime.newobject`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156      |
|  -57.0% | -16.8 kB |   1.3% → 0.8% | 29.5 kB → 12.7 kB |         2 | `runtime.gcBgMarkWorker`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750         |
| removed | -14.8 kB |   0.7% → 0.0% |     14.8 kB → 0 B |     1 → 0 | `runtime.procresize`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030        |
| removed | -14.8 kB |   0.7% → 0.0% |     14.8 kB → 0 B |     1 → 0 | `runtime.schedinit`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:831         |
| removed | -14.8 kB |   0.7% → 0.0% |     14.8 kB → 0 B |     1 → 0 | `runtime.rt0_go`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105     |
|  -14.0% |   -13 kB |   4.2% → 4.8% | 92.7 kB → 79.7 kB |    8 → 11 | `runtime.mallocgc`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067      |
|  -60.0% | -12.5 kB |   0.9% → 0.5% |  20.8 kB → 8.3 kB |         1 | `runtime.acquireSudog`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488         |
|  -60.0% | -12.5 kB |   0.9% → 0.5% |  20.8 kB → 8.3 kB |         1 | `runtime.semacquire1`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146         |

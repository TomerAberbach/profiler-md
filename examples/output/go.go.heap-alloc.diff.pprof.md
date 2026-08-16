# Allocated heap profile diff

Allocated 1.67 GiB (-2.123 MiB, -0.1%) over 21,825,386 objects → 21,882,354 objects (82.4 B → 82.1 B per object).

| Category         | Change |      Delta |      % |              Size |                 Objects |
| ---------------- | -----: | ---------: | -----: | ----------------: | ----------------------: |
| Standard library |  -0.1% | -2.115 MiB | 100.0% |          1.67 GiB | 21,824,617 → 21,882,098 |
| Ours             | -66.7% | -8.015 KiB |  <0.1% | 12 KiB → 4.01 KiB |               769 → 256 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Standard library

|  Change |          Delta |             % |                Size |                 Objects | Function                                        | Location                                                                                          |
| ------: | -------------: | ------------: | ------------------: | ----------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|   +3.3% |     +1.037 MiB |   1.8% → 1.9% | 31.7 MiB → 32.7 MiB |   2,037,361 → 2,105,252 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|   +0.4% | +1,012.675 KiB | 13.0% → 13.1% |   223 MiB → 224 MiB |       499,177 → 501,806 | `encoding/json.mapEncoder.encode`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
|   +0.2% |   +320.626 KiB |          9.5% |             163 MiB | 10,689,894 → 10,710,418 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`       |
|   +1.8% |   +132.258 KiB |          0.4% |  7.1 MiB → 7.23 MiB |       465,543 → 474,008 | `encoding/json.(*decodeState).convertNumber`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`  |
|  +41.9% |    +53.214 KiB |         <0.1% |   127 KiB → 180 KiB |             774 → 1,318 | `runtime/pprof.allFrames`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`   |
|  +13.3% |    +47.267 KiB |         <0.1% |   355 KiB → 402 KiB |               257 → 292 | `sync.(*Pool).pinSlow`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`             |
|  +14.5% |    +32.293 KiB |         <0.1% |   222 KiB → 254 KiB |           5,196 → 6,050 | `encoding/json.appendString[go.shape.string]`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`  |
|  +24.0% |    +28.999 KiB |         <0.1% |   121 KiB → 150 KiB |               702 → 402 | `runtime/pprof.(*profileBuilder).emitLocation`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`   |
| +133.1% |    +16.031 KiB |         <0.1% |   12 KiB → 28.1 KiB |             385 → 1,411 | `internal/strconv.fmtF`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460` |
|  +18.8% |    +12.212 KiB |         <0.1% | 65.1 KiB → 77.3 KiB |               463 → 550 | `encoding/json.Unmarshal`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
|  +66.7% |     +8.062 KiB |         <0.1% | 12.1 KiB → 20.2 KiB |               193 → 322 | `bytes.(*Buffer).grow`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
|     new |     +4.173 KiB |  0.0% → <0.1% |      0 B → 4.17 KiB |                  0 → 12 | `runtime/pprof.newProfileBuilder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259`   |
|     new |      +4.07 KiB |  0.0% → <0.1% |      0 B → 4.07 KiB |                  0 → 28 | `reflect.addReflectOff`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`      |
|     new |     +4.023 KiB |  0.0% → <0.1% |      0 B → 4.02 KiB |                  0 → 85 | `sync.(*poolChain).pushHead`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/poolqueue.go:220`        |
|   +2.1% |         +630 B |         <0.1% |   29 KiB → 29.6 KiB |                   8 → 7 | `runtime/pprof.(*protobuf).varint`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |               Objects | Function                                       | Location                                                                                                     |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
|   -0.4% |   -2.119 MiB | 32.6% → 32.5% |   558 MiB → 556 MiB | 1,846,099 → 1,839,235 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`            |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |         4,660 → 4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`                     |
| removed |     -624 KiB |  <0.1% → 0.0% |       624 KiB → 0 B |                 1 → 0 | `os.readFileContents`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`                          |
|   -0.3% | -557.882 KiB |   9.5% → 9.4% |             162 MiB | 5,518,199 → 5,503,076 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`            |
|   -3.6% | -365.067 KiB |          0.6% |   10 MiB → 9.67 MiB |     438,014 → 422,438 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`            |
|   -1.1% | -214.197 KiB |          1.1% | 19.6 MiB → 19.4 MiB |     123,445 → 122,176 | `encoding/json.unquoteBytes`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`            |
| removed |  -15.688 KiB |  <0.1% → 0.0% |      15.7 KiB → 0 B |                 6 → 0 | `compress/flate.(*huffmanEncoder).generate`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272`      |
|  -14.0% |  -12.708 KiB |         <0.1% | 90.5 KiB → 77.8 KiB |             250 → 153 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                  |
|  -11.3% |  -11.913 KiB |         <0.1% |  105 KiB → 93.1 KiB |         2,156 → 1,514 | `encoding/json.(*scanner).pushParseState`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`            |
|   -0.2% |   -9.516 KiB |          0.3% |            5.53 MiB |     190,700 → 186,046 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`            |
|  -66.7% |   -8.015 KiB |         <0.1% |   12 KiB → 4.01 KiB |             769 → 256 | `main.workload.func1`                          | `profile.go:25`                                                                                              |
| removed |   -4.062 KiB |  <0.1% → 0.0% |      4.06 KiB → 0 B |                32 → 0 | `compress/flate.newHuffmanBitWriter`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94` |
|   -7.3% |   -2.826 KiB |         <0.1% |   39 KiB → 36.1 KiB |                9 → 21 | `runtime/pprof.(*profileBuilder).stringIndex`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`              |
|     ~0% |         -8 B |         <0.1% |            36.3 KiB |             601 → 622 | `encoding/json.newEncodeState`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`             |

##### Standard library

|  Change |        Delta |             % |                Size |               Objects | Function                                       | Location                                                                                                     |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
|   -0.4% |   -2.119 MiB | 32.6% → 32.5% |   558 MiB → 556 MiB | 1,846,099 → 1,839,235 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`            |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |         4,660 → 4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`                     |
| removed |     -624 KiB |  <0.1% → 0.0% |       624 KiB → 0 B |                 1 → 0 | `os.readFileContents`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`                          |
|   -0.3% | -557.882 KiB |   9.5% → 9.4% |             162 MiB | 5,518,199 → 5,503,076 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`            |
|   -3.6% | -365.067 KiB |          0.6% |   10 MiB → 9.67 MiB |     438,014 → 422,438 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`            |
|   -1.1% | -214.197 KiB |          1.1% | 19.6 MiB → 19.4 MiB |     123,445 → 122,176 | `encoding/json.unquoteBytes`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`            |
| removed |  -15.688 KiB |  <0.1% → 0.0% |      15.7 KiB → 0 B |                 6 → 0 | `compress/flate.(*huffmanEncoder).generate`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272`      |
|  -14.0% |  -12.708 KiB |         <0.1% | 90.5 KiB → 77.8 KiB |             250 → 153 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                  |
|  -11.3% |  -11.913 KiB |         <0.1% |  105 KiB → 93.1 KiB |         2,156 → 1,514 | `encoding/json.(*scanner).pushParseState`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`            |
|   -0.2% |   -9.516 KiB |          0.3% |            5.53 MiB |     190,700 → 186,046 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`            |
| removed |   -4.062 KiB |  <0.1% → 0.0% |      4.06 KiB → 0 B |                32 → 0 | `compress/flate.newHuffmanBitWriter`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94` |
|   -7.3% |   -2.826 KiB |         <0.1% |   39 KiB → 36.1 KiB |                9 → 21 | `runtime/pprof.(*profileBuilder).stringIndex`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`              |
|     ~0% |         -8 B |         <0.1% |            36.3 KiB |             601 → 622 | `encoding/json.newEncodeState`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`             |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

| Change |        Delta |             % |                Size |                 Objects | Function                                             | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | ----------------------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +0.7% |  +988.58 KiB |   8.3% → 8.4% |             143 MiB |   4,070,194 → 4,156,725 | `encoding/json.(*decodeState).literalInterface`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|  +1.1% | +893.744 KiB |   4.7% → 4.8% | 81.2 MiB → 82.1 MiB |   5,324,171 → 5,381,372 | `reflect.(*MapIter).Key`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`           |
|  +0.1% | +528.409 KiB | 53.5% → 53.6% |             917 MiB | 11,200,763 → 11,225,798 | `encoding/json.Marshal`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  +0.1% | +520.515 KiB | 42.8% → 42.9% |   734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.arrayEncoder.encode`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
|  +0.1% | +520.515 KiB | 42.8% → 42.9% |   734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.sliceEncoder.encode`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
|  +0.1% | +477.125 KiB | 42.9% → 43.0% |   735 MiB → 736 MiB | 11,199,505 → 11,224,399 | `encoding/json.(*encodeState).reflectValue`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
|  +0.1% | +477.125 KiB | 42.9% → 43.0% |   735 MiB → 736 MiB | 11,199,505 → 11,224,399 | `encoding/json.(*encodeState).marshal`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
|  +0.1% | +473.055 KiB |         42.9% |   735 MiB → 736 MiB | 11,199,505 → 11,224,371 | `encoding/json.mapEncoder.encode`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
|  +0.1% | +469.032 KiB |         42.9% |             735 MiB | 11,197,413 → 11,222,201 | `encoding/json.interfaceEncoder`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
|  +0.2% | +320.626 KiB |          9.5% |             163 MiB | 10,689,894 → 10,710,418 | `reflect.unsafe_New`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`       |
|  +0.2% | +320.626 KiB |          9.5% |             163 MiB | 10,689,894 → 10,710,418 | `reflect.copyVal`                                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`        |
|  +1.8% | +132.258 KiB |          0.4% |  7.1 MiB → 7.23 MiB |       465,543 → 474,008 | `encoding/json.(*decodeState).convertNumber`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`  |
|  +4.6% |  +68.039 KiB |          0.1% | 1.45 MiB → 1.51 MiB |           1,527 → 1,752 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406`   |
|  +4.1% |  +64.425 KiB |          0.1% | 1.55 MiB → 1.61 MiB |           1,570 → 1,799 | `runtime/pprof.profileWriter`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922`   |
|  +3.9% |  +60.251 KiB |          0.1% |  1.5 MiB → 1.56 MiB |           1,539 → 1,756 | `runtime/pprof.(*profileBuilder).build`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348`   |
| +41.9% |  +53.214 KiB |         <0.1% |   127 KiB → 180 KiB |             774 → 1,318 | `runtime/pprof.allFrames`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`   |
| +13.3% |  +47.267 KiB |         <0.1% |   355 KiB → 402 KiB |               257 → 292 | `sync.(*Pool).pinSlow`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`             |
| +13.3% |  +47.267 KiB |         <0.1% |   355 KiB → 402 KiB |               257 → 292 | `sync.(*Pool).pin`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`             |
| +14.5% |  +32.293 KiB |         <0.1% |   222 KiB → 254 KiB |           5,196 → 6,050 | `encoding/json.appendString[go.shape.string]`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`  |
| +12.2% |   +28.36 KiB |         <0.1% |   232 KiB → 260 KiB |               168 → 189 | `sync.(*Pool).Get`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |                 Objects | Function                                       | Location                                                                                          |
| ------: | -----------: | ------------: | ------------------: | ----------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
|   -0.3% |   -2.072 MiB |         46.3% |   795 MiB → 793 MiB | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
|   -0.3% |    -2.06 MiB |         46.3% |   794 MiB → 792 MiB | 10,618,105 → 10,650,607 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|   -0.3% |   -2.019 MiB | 46.3% → 46.2% |   794 MiB → 792 MiB | 10,607,828 → 10,640,995 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| removed |   -1.901 MiB |   0.1% → 0.0% |       1.9 MiB → 0 B |              27,579 → 0 | `encoding/json.typeEncoder.func2`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`  |
|   -0.1% |   -1.564 MiB |         99.8% |            1.67 GiB | 21,823,512 → 21,880,349 | `main.workload.func1`                          | `profile.go:25`                                                                                   |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |           4,660 → 4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |           4,660 → 4,364 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
|   -0.3% | -908.572 KiB |         20.3% |   349 MiB → 348 MiB |           4,853 → 4,686 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
|   -0.4% |  -772.08 KiB |         10.6% |   182 MiB → 181 MiB |   5,641,644 → 5,625,252 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  -35.1% |     -624 KiB |          0.1% | 1.74 MiB → 1.13 MiB |                 54 → 53 | `main.main`                                    | `profile.go:61`                                                                                   |
|  -35.1% |     -624 KiB |          0.1% | 1.74 MiB → 1.13 MiB |                 54 → 53 | `runtime.main`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`          |
| removed |     -624 KiB |  <0.1% → 0.0% |       624 KiB → 0 B |                   1 → 0 | `os.readFileContents`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`               |
| removed |     -624 KiB |  <0.1% → 0.0% |       624 KiB → 0 B |                   1 → 0 | `os.ReadFile`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`               |
|   -0.7% | -573.117 KiB |   4.8% → 4.7% | 81.9 MiB → 81.3 MiB |   5,365,723 → 5,329,046 | `reflect.(*MapIter).Value`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`           |
|   -0.3% | -564.467 KiB | 11.5% → 11.4% |   197 MiB → 196 MiB |           2,463 → 2,691 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
|   -1.1% | -214.197 KiB |          1.1% | 19.6 MiB → 19.4 MiB |       123,445 → 122,176 | `encoding/json.unquoteBytes`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### Standard library

|  Change |        Delta |             % |                Size |                 Objects | Function                                       | Location                                                                                                |
| ------: | -----------: | ------------: | ------------------: | ----------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`       |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`        |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`        |
|   -0.3% |   -2.072 MiB |         46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`        |
|   -0.3% |   -2.072 MiB |         46.3% |   795 MiB → 793 MiB | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`        |
|   -0.3% |    -2.06 MiB |         46.3% |   794 MiB → 792 MiB | 10,618,105 → 10,650,607 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`       |
|   -0.3% |   -2.019 MiB | 46.3% → 46.2% |   794 MiB → 792 MiB | 10,607,828 → 10,640,995 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`       |
| removed |   -1.901 MiB |   0.1% → 0.0% |       1.9 MiB → 0 B |              27,579 → 0 | `encoding/json.typeEncoder.func2`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`        |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |           4,660 → 4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`                |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |           4,660 → 4,364 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`                |
|   -0.3% | -908.572 KiB |         20.3% |   349 MiB → 348 MiB |           4,853 → 4,686 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`                |
|   -0.4% |  -772.08 KiB |         10.6% |   182 MiB → 181 MiB |   5,641,644 → 5,625,252 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`       |
|  -35.1% |     -624 KiB |          0.1% | 1.74 MiB → 1.13 MiB |                 54 → 53 | `runtime.main`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`                |
| removed |     -624 KiB |  <0.1% → 0.0% |       624 KiB → 0 B |                   1 → 0 | `os.readFileContents`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`                     |
| removed |     -624 KiB |  <0.1% → 0.0% |       624 KiB → 0 B |                   1 → 0 | `os.ReadFile`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`                     |
|   -0.7% | -573.117 KiB |   4.8% → 4.7% | 81.9 MiB → 81.3 MiB |   5,365,723 → 5,329,046 | `reflect.(*MapIter).Value`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`                 |
|   -0.3% | -564.467 KiB | 11.5% → 11.4% |   197 MiB → 196 MiB |           2,463 → 2,691 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`        |
|   -1.1% | -214.197 KiB |          1.1% | 19.6 MiB → 19.4 MiB |       123,445 → 122,176 | `encoding/json.unquoteBytes`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`       |
|  -21.3% |  -17.296 KiB |         <0.1% | 81.3 KiB → 64.1 KiB |               242 → 141 | `runtime.newobject`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`             |
| removed |  -15.688 KiB |  <0.1% → 0.0% |      15.7 KiB → 0 B |                   6 → 0 | `compress/flate.(*huffmanEncoder).generate`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272` |

# Retained heap profile diff

Retained 2.09 MiB → 1.59 MiB (-516.607 KiB, -24.1%) over 291 objects → 285 objects (7.36 KiB → 5.71 KiB per object).

| Category         | Change |        Delta |      % |                Size |   Objects |
| ---------------- | -----: | -----------: | -----: | ------------------: | --------: |
| Standard library | -24.1% | -516.607 KiB | 100.0% | 2.09 MiB → 1.59 MiB | 291 → 285 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change |      Delta |           % |           Size | Objects | Function                          | Location                                                                                         |
| -----: | ---------: | ----------: | -------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new |  +4.07 KiB | 0.0% → 0.3% | 0 B → 4.07 KiB |  0 → 28 | `reflect.addReflectOff`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`     |
|    new | +4.054 KiB | 0.0% → 0.2% | 0 B → 4.05 KiB |  0 → 37 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|    new | +4.031 KiB | 0.0% → 0.2% | 0 B → 4.03 KiB |  0 → 64 | `encoding/json.newEncodeState`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |       Delta |             % |                Size |   Objects | Function                                       | Location                                                                                          |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -25.0% |    -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  -14.0% | -12.708 KiB |   4.2% → 4.8% | 90.5 KiB → 77.8 KiB | 250 → 153 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
| removed |  -4.054 KiB |   0.2% → 0.0% |      4.05 KiB → 0 B |    37 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |       Delta |           % |                Size | Objects | Function                                    | Location                                                                                     |
| -----: | ----------: | ----------: | ------------------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`    |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`    |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`    |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`    |
| +76.0% |  +9.668 KiB | 0.6% → 1.4% | 12.7 KiB → 22.4 KiB | 27 → 33 | `runtime.systemstack`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |
|    new |  +8.826 KiB | 0.0% → 0.5% |      0 B → 8.83 KiB |  0 → 13 | `runtime.startTheWorldWithSema`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1760`    |
|    new |  +8.826 KiB | 0.0% → 0.5% |      0 B → 8.83 KiB |  0 → 13 | `runtime.gcStart.func4`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`      |
| +24.5% |  +8.477 KiB | 1.6% → 2.6% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`    |
| +24.5% |  +8.477 KiB | 1.6% → 2.6% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`    |
| +66.7% |  +8.476 KiB | 0.6% → 1.3% | 12.7 KiB → 21.2 KiB | 27 → 45 | `runtime.malg`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`    |
| +34.5% |  +5.083 KiB | 0.7% → 1.2% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.park_m`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`    |
| +34.5% |  +5.083 KiB | 0.7% → 1.2% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.mcall`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |
|    new |  +5.082 KiB | 0.0% → 0.3% |      0 B → 5.08 KiB |   0 → 2 | `runtime.(*gcControllerState).enlistWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697` |
|    new |  +5.082 KiB | 0.0% → 0.3% |      0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrain`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |
|    new |  +5.082 KiB | 0.0% → 0.3% |      0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrainMarkWorkerIdle`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |
|    new |  +5.082 KiB | 0.0% → 0.3% |      0 B → 5.08 KiB |   0 → 2 | `runtime.gcBgMarkWorker.func2`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`     |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.makeslice`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`    |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.makeProfStackFP`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`    |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mProfStackInit`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043`    |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mcommoninit`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`     |

##### Standard library

| Change |       Delta |           % |                Size | Objects | Function                                    | Location                                                                                     |
| -----: | ----------: | ----------: | ------------------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.allocm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`    |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.newm`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`    |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.startm`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`    |
| +64.7% | +22.385 KiB | 1.6% → 3.5% |   34.6 KiB → 57 KiB | 20 → 53 | `runtime.wakep`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`    |
| +76.0% |  +9.668 KiB | 0.6% → 1.4% | 12.7 KiB → 22.4 KiB | 27 → 33 | `runtime.systemstack`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |
|    new |  +8.826 KiB | 0.0% → 0.5% |      0 B → 8.83 KiB |  0 → 13 | `runtime.startTheWorldWithSema`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1760`    |
| +24.5% |  +8.477 KiB | 1.6% → 2.6% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`    |
| +24.5% |  +8.477 KiB | 1.6% → 2.6% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.schedule`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`    |
| +66.7% |  +8.476 KiB | 0.6% → 1.3% | 12.7 KiB → 21.2 KiB | 27 → 45 | `runtime.malg`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`    |
| +34.5% |  +5.083 KiB | 0.7% → 1.2% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.park_m`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`    |
| +34.5% |  +5.083 KiB | 0.7% → 1.2% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.mcall`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |
|    new |  +5.082 KiB | 0.0% → 0.3% |      0 B → 5.08 KiB |   0 → 2 | `runtime.(*gcControllerState).enlistWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697` |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.makeslice`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`    |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.makeProfStackFP`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`    |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mProfStackInit`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043`    |
| +50.0% |  +4.587 KiB | 0.4% → 0.8% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mcommoninit`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`     |
|    new |   +4.07 KiB | 0.0% → 0.3% |      0 B → 4.07 KiB |  0 → 28 | `reflect.addReflectOff`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707` |
|    new |   +4.07 KiB | 0.0% → 0.3% |      0 B → 4.07 KiB |  0 → 28 | `reflect.resolveReflectName`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568`     |
|    new |   +4.07 KiB | 0.0% → 0.3% |      0 B → 4.07 KiB |  0 → 28 | `reflect.(*rtype).ptrTo`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1418`    |
|    new |   +4.07 KiB | 0.0% → 0.3% |      0 B → 4.07 KiB |  0 → 28 | `reflect.PointerTo`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1414`    |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size |   Objects | Function                                    | Location                                                                                         |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|  -24.6% | -503.898 KiB | 95.8% → 95.2% |    2 MiB → 1.51 MiB |  41 → 132 | `main.workload.func1`                       | `profile.go:25`                                                                                  |
|  -24.6% | -503.875 KiB | 95.6% → 95.0% |    2 MiB → 1.51 MiB |    4 → 68 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
|  -24.6% | -503.875 KiB | 95.6% → 95.0% |    2 MiB → 1.51 MiB |    4 → 68 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
|  -24.4% | -499.843 KiB | 95.6% → 95.2% |    2 MiB → 1.51 MiB |   4 → 132 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  -21.3% |  -17.296 KiB |   3.8% → 3.9% | 81.3 KiB → 64.1 KiB | 242 → 141 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |
|  -57.0% |  -16.419 KiB |   1.3% → 0.8% | 28.8 KiB → 12.4 KiB |  202 → 82 | `runtime.gcBgMarkWorker`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
| removed |  -14.435 KiB |   0.7% → 0.0% |      14.4 KiB → 0 B |     1 → 0 | `runtime.procresize`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030`        |
| removed |  -14.435 KiB |   0.7% → 0.0% |      14.4 KiB → 0 B |     1 → 0 | `runtime.schedinit`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:831`         |
| removed |  -14.435 KiB |   0.7% → 0.0% |      14.4 KiB → 0 B |     1 → 0 | `runtime.rt0_go`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105`     |
|  -14.0% |  -12.708 KiB |   4.2% → 4.8% | 90.5 KiB → 77.8 KiB | 250 → 153 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  -60.0% |  -12.165 KiB |   0.9% → 0.5% | 20.3 KiB → 8.11 KiB |  185 → 74 | `runtime.acquireSudog`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`         |
|  -60.0% |  -12.165 KiB |   0.9% → 0.5% | 20.3 KiB → 8.11 KiB |  185 → 74 | `runtime.semacquire1`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`         |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                    | Location                                                                                         |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.growSlice`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.(*Buffer).grow`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`         |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.(*Buffer).Write`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `encoding/json.stringEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.interfaceEncoder`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.mapEncoder.encode`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.arrayEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
|  -24.8% | -507.945 KiB | 95.6% → 94.7% |     2 MiB → 1.5 MiB |    4 → 40 | `encoding/json.sliceEncoder.encode`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|  -24.6% | -503.875 KiB | 95.6% → 95.0% |    2 MiB → 1.51 MiB |    4 → 68 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |
|  -24.6% | -503.875 KiB | 95.6% → 95.0% |    2 MiB → 1.51 MiB |    4 → 68 | `encoding/json.(*encodeState).marshal`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
|  -24.4% | -499.843 KiB | 95.6% → 95.2% |    2 MiB → 1.51 MiB |   4 → 132 | `encoding/json.Marshal`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  -21.3% |  -17.296 KiB |   3.8% → 3.9% | 81.3 KiB → 64.1 KiB | 242 → 141 | `runtime.newobject`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`      |
| removed |  -14.435 KiB |   0.7% → 0.0% |      14.4 KiB → 0 B |     1 → 0 | `runtime.procresize`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030`        |
| removed |  -14.435 KiB |   0.7% → 0.0% |      14.4 KiB → 0 B |     1 → 0 | `runtime.schedinit`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:831`         |
| removed |  -14.435 KiB |   0.7% → 0.0% |      14.4 KiB → 0 B |     1 → 0 | `runtime.rt0_go`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105`     |
|  -14.0% |  -12.708 KiB |   4.2% → 4.8% | 90.5 KiB → 77.8 KiB | 250 → 153 | `runtime.mallocgc`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|  -60.0% |  -12.165 KiB |   0.9% → 0.5% | 20.3 KiB → 8.11 KiB |  185 → 74 | `runtime.acquireSudog`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`         |
|  -60.0% |  -12.165 KiB |   0.9% → 0.5% | 20.3 KiB → 8.11 KiB |  185 → 74 | `runtime.semacquire1`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`         |
|  -60.0% |  -12.165 KiB |   0.9% → 0.5% | 20.3 KiB → 8.11 KiB |  185 → 74 | `runtime.semacquire`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142`         |
|  -33.3% |   -4.239 KiB |   0.6% → 0.5% | 12.7 KiB → 8.48 KiB |   27 → 18 | `runtime.newproc1`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`        |

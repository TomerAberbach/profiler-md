# Allocated heap profile diff

Allocated 1.67 GiB (-2.123 MiB, -0.1%) over 21,825,386 → 21,882,354 objects (82.4 B → 82.1 B per object).

| Category         | Change |      Delta |      % |              Size |                 Objects |
| ---------------- | -----: | ---------: | -----: | ----------------: | ----------------------: |
| Standard library |  -0.1% | -2.115 MiB | 100.0% |          1.67 GiB | 21,824,617 → 21,882,098 |
| Ours             | -66.7% | -8.015 KiB |  <0.1% | 12 KiB → 4.01 KiB |               769 → 256 |

Paths starting with `./` or `../` are relative to `/Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

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
|  -66.7% |   -8.015 KiB |         <0.1% |   12 KiB → 4.01 KiB |             769 → 256 | `main.workload.func1`                          | `./profile.go:25`                                                                                            |
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

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |        Delta |             % |                Size |               Objects | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ------------------------------------------------------------------------------------------------- |
|  +3.1% | +869.697 KiB | 87.8% → 87.6% | 27.8 MiB → 28.6 MiB | 1,821,150 → 1,876,811 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1148` |
|  +4.8% | +192.378 KiB | 12.2% → 12.4% | 3.88 MiB → 4.06 MiB |     216,211 → 228,441 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1154` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |          Delta |      % |              Size |           Objects | Location                                                                                         |
| -----: | -------------: | -----: | ----------------: | ----------------: | ------------------------------------------------------------------------------------------------ |
|  +0.4% | +1,012.675 KiB | 100.0% | 223 MiB → 224 MiB | 499,177 → 501,806 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

| Change |        Delta |      % |    Size |                 Objects | Location                                                                                    |
| -----: | -----------: | -----: | ------: | ----------------------: | ------------------------------------------------------------------------------------------- |
|  +0.2% | +320.626 KiB | 100.0% | 163 MiB | 10,689,894 → 10,710,418 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2178` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

| Change |        Delta |      % |               Size |           Objects | Location                                                                                         |
| -----: | -----------: | -----: | -----------------: | ----------------: | ------------------------------------------------------------------------------------------------ |
|  +1.8% | +132.258 KiB | 100.0% | 7.1 MiB → 7.23 MiB | 465,543 → 474,008 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:846` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

| Change |       Delta |             % |                Size |   Objects | Location                                                                                        |
| -----: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------- |
| +45.3% | +41.073 KiB | 71.3% → 73.1% |  90.6 KiB → 132 KiB | 386 → 800 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:214` |
| +33.3% | +12.141 KiB | 28.7% → 26.9% | 36.4 KiB → 48.6 KiB | 388 → 518 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:232` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

| Change |       Delta |      % |              Size |   Objects | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------------- |
| +13.3% | +47.267 KiB | 100.0% | 355 KiB → 402 KiB | 257 → 292 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:241` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

| Change |       Delta |             % |                Size |       Objects | Location                                                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------- |
| +53.9% | +56.451 KiB | 47.2% → 63.4% |   105 KiB → 161 KiB | 2,879 → 4,533 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1063` |
| -62.5% | -20.085 KiB |  14.5% → 4.7% | 32.1 KiB → 12.1 KiB |   1,070 → 299 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1064` |
|  -8.3% |  -4.071 KiB | 22.0% → 17.6% | 48.8 KiB → 44.8 KiB |     347 → 318 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1011` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

|  Change |       Delta |             % |                Size |   Objects | Location                                                                                        |
| ------: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------- |
| +125.0% | +20.235 KiB | 13.4% → 24.3% | 16.2 KiB → 36.4 KiB | 172 → 388 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:613` |
|  +37.8% |  +8.811 KiB | 19.3% → 21.4% | 23.3 KiB → 32.1 KiB |     9 → 8 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:625` |
| removed |  -8.015 KiB |   6.6% → 0.0% |      8.02 KiB → 0 B |   512 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:611` |
|  +10.9% |  +7.967 KiB | 60.7% → 54.3% | 73.4 KiB → 81.4 KiB |     9 → 6 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:609` |

##### `internal/strconv.fmtF` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460`)

| Change |       Delta |            % |         Size |   Objects | Location                                                                                          |
| -----: | ----------: | -----------: | -----------: | --------: | ------------------------------------------------------------------------------------------------- |
|    new | +16.031 KiB | 0.0% → 57.1% | 0 B → 16 KiB | 0 → 1,026 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:469` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |       Delta |      % |                Size |   Objects | Location                                                                                         |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------------------------------ |
| +18.8% | +12.212 KiB | 100.0% | 65.1 KiB → 77.3 KiB | 463 → 550 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:106` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |      Delta |      % |                Size |   Objects | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------------------------------------------------------------------------- |
| +66.7% | +8.062 KiB | 100.0% | 12.1 KiB → 20.2 KiB | 193 → 322 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:155` |

##### `runtime/pprof.newProfileBuilder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                        |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------------------------------------------- |
|    new | +4.173 KiB | 0.0% → 100.0% | 0 B → 4.17 KiB |  0 → 12 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:261` |

##### `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`)

| Change |     Delta |             % |           Size | Objects | Location                                                                                     |
| -----: | --------: | ------------: | -------------: | ------: | -------------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:719` |

##### `sync.(*poolChain).pushHead` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/poolqueue.go:220`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                   |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------ |
|    new | +4.023 KiB | 0.0% → 100.0% | 0 B → 4.02 KiB |  0 → 85 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/poolqueue.go:225` |

##### `runtime/pprof.(*protobuf).varint` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14`)

| Change |      Delta |              % |              Size | Objects | Location                                                                                          |
| -----: | ---------: | -------------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------- |
|    new | +7.182 KiB |   0.0% → 24.2% |    0 B → 7.18 KiB |   0 → 1 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:16` |
| -22.6% | -6.567 KiB | 100.0% → 75.8% | 29 KiB → 22.4 KiB |   8 → 6 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:19` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |        Delta |             % |              Size |               Objects | Location                                                                                          |
| -----: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------------------------------------------------------------- |
|  -0.3% |   -1.691 MiB | 95.8% → 95.9% | 535 MiB → 533 MiB | 1,335,135 → 1,337,626 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |
|  -1.8% | -438.561 KiB |   4.2% → 4.1% | 23.4 MiB → 23 MiB |     510,964 → 501,609 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |        Delta |      % |              Size |       Objects | Location                                                                                 |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------------------------------------------------------------------------- |
|  -0.3% | -916.634 KiB | 100.0% | 349 MiB → 348 MiB | 4,660 → 4,364 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `os.readFileContents` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`)

|  Change |    Delta |             % |          Size | Objects | Location                                                                            |
| ------: | -------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------- |
| removed | -624 KiB | 100.0% → 0.0% | 624 KiB → 0 B |   1 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:906` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |        Delta |      % |    Size |               Objects | Location                                                                                          |
| -----: | -----------: | -----: | ------: | --------------------: | ------------------------------------------------------------------------------------------------- |
|  -0.3% | -557.882 KiB | 100.0% | 162 MiB | 5,518,199 → 5,503,076 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1189` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |        Delta |      % |              Size |           Objects | Location                                                                                          |
| -----: | -----------: | -----: | ----------------: | ----------------: | ------------------------------------------------------------------------------------------------- |
|  -3.6% | -365.067 KiB | 100.0% | 10 MiB → 9.67 MiB | 438,014 → 422,438 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1040` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

| Change |        Delta |      % |                Size |           Objects | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------------- |
|  -1.1% | -214.197 KiB | 100.0% | 19.6 MiB → 19.4 MiB | 123,445 → 122,176 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1218` |

##### `compress/flate.(*huffmanEncoder).generate` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272`)

|  Change |       Delta |             % |           Size | Objects | Location                                                                                                |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------- |
| removed | -15.688 KiB | 100.0% → 0.0% | 15.7 KiB → 0 B |   6 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:277` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |      Delta |             % |                Size |   Objects | Location                                                                                    |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------- |
| -23.5% | -9.353 KiB | 44.0% → 39.2% | 39.8 KiB → 30.5 KiB |   13 → 14 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152` |
| -11.2% | -3.688 KiB | 36.4% → 37.7% |   33 KiB → 29.3 KiB | 212 → 119 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |
|  +1.9% |     +341 B | 19.5% → 23.2% |   17.7 KiB → 18 KiB |   25 → 20 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |

##### `encoding/json.(*scanner).pushParseState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`)

| Change |       Delta |      % |               Size |       Objects | Location                                                                                          |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------------------------------------------------------------------------------- |
| -11.3% | -11.913 KiB | 100.0% | 105 KiB → 93.1 KiB | 2,156 → 1,514 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:181` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |      Delta |      % |     Size |           Objects | Location                                                                                          |
| -----: | ---------: | -----: | -------: | ----------------: | ------------------------------------------------------------------------------------------------- |
|  -0.2% | -9.516 KiB | 100.0% | 5.53 MiB | 190,700 → 186,046 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1061` |

##### `main.workload.func1` (`./profile.go:25`)

| Change |      Delta |      % |              Size |   Objects | Location          |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------- |
| -66.7% | -8.015 KiB | 100.0% | 12 KiB → 4.01 KiB | 769 → 256 | `./profile.go:28` |

##### `compress/flate.newHuffmanBitWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94`)

|  Change |      Delta |             % |           Size | Objects | Location                                                                                                     |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
| removed | -4.062 KiB | 100.0% → 0.0% | 4.06 KiB → 0 B |  32 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:98` |

##### `runtime/pprof.(*profileBuilder).stringIndex` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`)

| Change |      Delta |             % |                Size | Objects | Location                                                                                        |
| -----: | ---------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------- |
| -37.7% | -2.579 KiB | 17.5% → 11.8% | 6.83 KiB → 4.25 KiB |   1 → 8 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:137` |
|  -0.8% |     -253 B | 82.5% → 88.2% | 32.1 KiB → 31.9 KiB |  8 → 13 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:138` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change | Delta |      % |     Size |   Objects | Location                                                                                         |
| -----: | ----: | -----: | -------: | --------: | ------------------------------------------------------------------------------------------------ |
|    ~0% |  -8 B | 100.0% | 36.3 KiB | 601 → 622 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:325` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |      Delta |      % |                Size |               Objects | Caller                                        | Location                                                                                          |
| -----: | ---------: | -----: | ------------------: | --------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +3.3% | +1.037 MiB | 100.0% | 31.7 MiB → 32.7 MiB | 2,037,361 → 2,105,252 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |          Delta |      % |              Size |           Objects | Caller                                      | Location                                                                                         |
| -----: | -------------: | -----: | ----------------: | ----------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.4% | +1,012.675 KiB | 100.0% | 223 MiB → 224 MiB | 499,177 → 501,806 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

| Change |        Delta |      % |    Size |                 Objects | Caller            | Location                                                                                   |
| -----: | -----------: | -----: | ------: | ----------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  +0.2% | +320.626 KiB | 100.0% | 163 MiB | 10,689,894 → 10,710,418 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

| Change |        Delta |      % |               Size |           Objects | Caller                                          | Location                                                                                          |
| -----: | -----------: | -----: | -----------------: | ----------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.8% | +132.258 KiB | 100.0% | 7.1 MiB → 7.23 MiB | 465,543 → 474,008 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

| Change |       Delta |      % |              Size |     Objects | Caller                                               | Location                                                                                        |
| -----: | ----------: | -----: | ----------------: | ----------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +41.9% | +53.214 KiB | 100.0% | 127 KiB → 180 KiB | 774 → 1,318 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

| Change |       Delta |      % |              Size |   Objects | Caller             | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
| +13.3% | +47.267 KiB | 100.0% | 355 KiB → 402 KiB | 257 → 292 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

| Change |       Delta |             % |               Size |       Objects | Caller                            | Location                                                                                         |
| -----: | ----------: | ------------: | -----------------: | ------------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +18.7% | +24.297 KiB | 58.4% → 60.5% |  130 KiB → 154 KiB | 1,476 → 1,732 | `encoding/json.stringEncoder`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  +8.7% |  +7.996 KiB | 41.6% → 39.5% | 92.3 KiB → 100 KiB | 3,720 → 4,318 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

| Change |       Delta |      % |              Size |   Objects | Caller                                               | Location                                                                                        |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +24.0% | +28.999 KiB | 100.0% | 121 KiB → 150 KiB | 702 → 402 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `internal/strconv.fmtF` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460`)

|  Change |       Delta |      % |              Size |     Objects | Caller                          | Location                                                                                          |
| ------: | ----------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| +133.1% | +16.031 KiB | 100.0% | 12 KiB → 28.1 KiB | 385 → 1,411 | `internal/strconv.formatDigits` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:225` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |       Delta |      % |                Size |   Objects | Caller                | Location          |
| -----: | ----------: | -----: | ------------------: | --------: | --------------------- | ----------------- |
| +18.8% | +12.212 KiB | 100.0% | 65.1 KiB → 77.3 KiB | 463 → 550 | `main.workload.func1` | `./profile.go:25` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |      Delta |      % |                Size |   Objects | Caller                      | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| +66.7% | +8.062 KiB | 100.0% | 12.1 KiB → 20.2 KiB | 193 → 322 | `bytes.(*Buffer).WriteByte` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303` |

##### `runtime/pprof.newProfileBuilder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259`)

| Change |      Delta |             % |           Size | Objects | Caller                        | Location                                                                                        |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------- | ----------------------------------------------------------------------------------------------- |
|    new | +4.173 KiB | 0.0% → 100.0% | 0 B → 4.17 KiB |  0 → 12 | `runtime/pprof.profileWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922` |

##### `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`)

| Change |     Delta |             % |           Size | Objects | Caller                       | Location                                                                                 |
| -----: | --------: | ------------: | -------------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.resolveReflectName` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568` |

##### `sync.(*poolChain).pushHead` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/poolqueue.go:220`)

| Change |      Delta |             % |           Size | Objects | Caller             | Location                                                                             |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------ | ------------------------------------------------------------------------------------ |
|    new | +4.023 KiB | 0.0% → 100.0% | 0 B → 4.02 KiB |  0 → 85 | `sync.(*Pool).Put` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99` |

##### `runtime/pprof.(*protobuf).varint` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14`)

|  Change |       Delta |             % |                Size | Objects | Caller                             | Location                                                                                          |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| +267.2% | +12.627 KiB | 16.3% → 58.6% | 4.73 KiB → 17.4 KiB |   3 → 4 | `runtime/pprof.(*protobuf).length` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:22` |
|  -49.5% | -12.012 KiB | 83.7% → 41.4% | 24.3 KiB → 12.3 KiB |   5 → 3 | `runtime/pprof.(*protobuf).uint64` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:27` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |       Delta |      % |              Size |               Objects | Caller                                        | Location                                                                                          |
| -----: | ----------: | -----: | ----------------: | --------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.4% |  -2.099 MiB | 100.0% | 558 MiB → 556 MiB | 1,845,356 → 1,838,637 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| -13.8% | -20.592 KiB |  <0.1% | 149 KiB → 128 KiB |             743 → 598 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |        Delta |      % |              Size |       Objects | Caller                 | Location                                                                                 |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------- | ---------------------------------------------------------------------------------------- |
|  -0.3% | -916.634 KiB | 100.0% | 349 MiB → 348 MiB | 4,660 → 4,364 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `os.readFileContents` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`)

|  Change |    Delta |             % |          Size | Objects | Caller        | Location                                                                            |
| ------: | -------: | ------------: | ------------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| removed | -624 KiB | 100.0% → 0.0% | 624 KiB → 0 B |   1 → 0 | `os.ReadFile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |        Delta |             % |                Size |               Objects | Caller                                          | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.7% | -566.325 KiB | 48.1% → 48.0% | 78.1 MiB → 77.6 MiB | 4,074,354 → 4,047,787 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|    ~0% |   +8.442 KiB | 51.9% → 52.0% |            84.2 MiB | 1,443,845 → 1,455,289 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |        Delta |      % |              Size |           Objects | Caller                                         | Location                                                                                          |
| -----: | -----------: | -----: | ----------------: | ----------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -3.6% | -365.067 KiB | 100.0% | 10 MiB → 9.67 MiB | 438,014 → 422,438 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

| Change |        Delta |      % |                Size |           Objects | Caller                  | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.1% | -214.197 KiB | 100.0% | 19.6 MiB → 19.4 MiB | 123,445 → 122,176 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `compress/flate.(*huffmanEncoder).generate` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272`)

|  Change |       Delta |            % |           Size | Objects | Caller                                                 | Location                                                                                                      |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| removed | -10.458 KiB | 66.7% → 0.0% | 10.5 KiB → 0 B |   4 → 0 | `compress/flate.(*huffmanBitWriter).indexTokens`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:530` |
| removed |  -5.229 KiB | 33.3% → 0.0% | 5.23 KiB → 0 B |   2 → 0 | `compress/flate.(*huffmanBitWriter).writeBlockDynamic` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:498` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |       Delta |             % |                Size |   Objects | Caller              | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------- | ------------------------------------------------------------------------------------------- |
| -21.3% | -17.296 KiB | 89.9% → 82.3% | 81.3 KiB → 64.1 KiB | 242 → 141 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| +50.0% |  +4.587 KiB | 10.1% → 17.7% | 9.18 KiB → 13.8 KiB |    8 → 12 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `encoding/json.(*scanner).pushParseState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`)

| Change |       Delta |      % |               Size |       Objects | Caller                          | Location                                                                                          |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| -11.3% | -11.913 KiB | 100.0% | 105 KiB → 93.1 KiB | 2,156 → 1,514 | `encoding/json.stateBeginValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |      Delta |      % |     Size |           Objects | Caller                                        | Location                                                                                          |
| -----: | ---------: | -----: | -------: | ----------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.2% | -9.516 KiB | 100.0% | 5.53 MiB | 190,700 → 186,046 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `compress/flate.newHuffmanBitWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94`)

|  Change |      Delta |             % |           Size | Objects | Caller                              | Location                                                                                           |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed | -4.062 KiB | 100.0% → 0.0% | 4.06 KiB → 0 B |  32 → 0 | `compress/flate.(*compressor).init` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571` |

##### `runtime/pprof.(*profileBuilder).stringIndex` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`)

| Change |      Delta |      % |              Size | Objects | Caller                                         | Location                                                                                        |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  -7.3% | -2.826 KiB | 100.0% | 39 KiB → 36.1 KiB |  9 → 21 | `runtime/pprof.(*profileBuilder).emitLocation` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change | Delta |      % |     Size |   Objects | Caller                  | Location                                                                                         |
| -----: | ----: | -----: | -------: | --------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
|    ~0% |  -8 B | 100.0% | 36.3 KiB | 601 → 622 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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
|   -0.1% |   -1.564 MiB |         99.8% |            1.67 GiB | 21,823,512 → 21,880,349 | `main.workload.func1`                          | `./profile.go:25`                                                                                 |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |           4,660 → 4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|   -0.3% | -916.634 KiB |         20.3% |   349 MiB → 348 MiB |           4,660 → 4,364 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
|   -0.3% | -908.572 KiB |         20.3% |   349 MiB → 348 MiB |           4,853 → 4,686 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
|   -0.4% |  -772.08 KiB |         10.6% |   182 MiB → 181 MiB |   5,641,644 → 5,625,252 | `encoding/json.unquote`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  -35.1% |     -624 KiB |          0.1% | 1.74 MiB → 1.13 MiB |                 54 → 53 | `main.main`                                    | `./profile.go:61`                                                                                 |
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

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |       Delta |      % |    Size |               Objects | Caller                                        | Location                                                                                          |
| -----: | ----------: | -----: | ------: | --------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +0.7% | +988.58 KiB | 100.0% | 143 MiB | 4,070,194 → 4,156,725 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`)

| Change |        Delta |      % |                Size |               Objects | Caller                            | Location                                                                                         |
| -----: | -----------: | -----: | ------------------: | --------------------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.1% | +893.744 KiB | 100.0% | 81.2 MiB → 82.1 MiB | 5,324,171 → 5,381,372 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |        Delta |      % |    Size |                 Objects | Caller                | Location          |
| -----: | -----------: | -----: | ------: | ----------------------: | --------------------- | ----------------- |
|  +0.1% | +528.409 KiB | 100.0% | 917 MiB | 11,200,763 → 11,225,798 | `main.workload.func1` | `./profile.go:25` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

| Change |        Delta |      % |              Size |                 Objects | Caller                              | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +520.515 KiB | 100.0% | 734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

| Change |        Delta |      % |              Size |                 Objects | Caller                                      | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +520.515 KiB | 100.0% | 734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

| Change |        Delta |      % |              Size |                 Objects | Caller                                 | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +477.125 KiB | 100.0% | 735 MiB → 736 MiB | 11,199,505 → 11,224,399 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
|  +0.1% | +469.032 KiB | 100.0% |           735 MiB | 11,197,413 → 11,222,201 | `encoding/json.interfaceEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

| Change |        Delta |      % |              Size |                 Objects | Caller                  | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +477.125 KiB | 100.0% | 735 MiB → 736 MiB | 11,199,505 → 11,224,399 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|  Change |        Delta |           % |              Size |                 Objects | Caller                                      | Location                                                                                         |
| ------: | -----------: | ----------: | ----------------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed |   -1.901 MiB | 0.3% → 0.0% |     1.9 MiB → 0 B |              27,579 → 0 | `encoding/json.typeEncoder.func2`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |
|   +0.1% | +473.055 KiB |      100.0% | 735 MiB → 736 MiB | 11,199,505 → 11,224,371 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

| Change |        Delta |      % |              Size |                 Objects | Caller                              | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +520.515 KiB |  99.9% | 734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |
|  +0.1% | +469.032 KiB | 100.0% |           735 MiB | 11,197,413 → 11,222,201 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

| Change |        Delta |      % |    Size |                 Objects | Caller            | Location                                                                                   |
| -----: | -----------: | -----: | ------: | ----------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  +0.2% | +320.626 KiB | 100.0% | 163 MiB | 10,689,894 → 10,710,418 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`)

| Change |        Delta |             % |                Size |               Objects | Caller                     | Location                                                                                |
| -----: | -----------: | ------------: | ------------------: | --------------------: | -------------------------- | --------------------------------------------------------------------------------------- |
|  +1.1% | +893.744 KiB | 49.8% → 50.2% | 81.2 MiB → 82.1 MiB | 5,324,171 → 5,381,372 | `reflect.(*MapIter).Key`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245` |
|  -0.7% | -573.117 KiB | 50.2% → 49.8% | 81.9 MiB → 81.3 MiB | 5,365,723 → 5,329,046 | `reflect.(*MapIter).Value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

| Change |        Delta |      % |               Size |           Objects | Caller                                          | Location                                                                                          |
| -----: | -----------: | -----: | -----------------: | ----------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.8% | +132.258 KiB | 100.0% | 7.1 MiB → 7.23 MiB | 465,543 → 474,008 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `runtime/pprof.(*profileBuilder).appendLocsForStack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406`)

| Change |       Delta |      % |                Size |       Objects | Caller                                  | Location                                                                                        |
| -----: | ----------: | -----: | ------------------: | ------------: | --------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  +4.6% | +68.039 KiB | 100.0% | 1.45 MiB → 1.51 MiB | 1,527 → 1,752 | `runtime/pprof.(*profileBuilder).build` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348` |

##### `runtime/pprof.(*profileBuilder).build` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348`)

| Change |       Delta |      % |               Size |       Objects | Caller                        | Location                                                                                        |
| -----: | ----------: | -----: | -----------------: | ------------: | ----------------------------- | ----------------------------------------------------------------------------------------------- |
|  +3.9% | +60.251 KiB | 100.0% | 1.5 MiB → 1.56 MiB | 1,539 → 1,756 | `runtime/pprof.profileWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

| Change |       Delta |      % |              Size |     Objects | Caller                                               | Location                                                                                        |
| -----: | ----------: | -----: | ----------------: | ----------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +41.9% | +53.214 KiB | 100.0% | 127 KiB → 180 KiB | 774 → 1,318 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

| Change |       Delta |      % |              Size |   Objects | Caller             | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
| +13.3% | +47.267 KiB | 100.0% | 355 KiB → 402 KiB | 257 → 292 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `sync.(*Pool).pin` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`)

| Change |       Delta |             % |              Size |   Objects | Caller             | Location                                                                              |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
| +12.2% |  +28.36 KiB | 65.3% → 64.7% | 232 KiB → 260 KiB | 168 → 189 | `sync.(*Pool).Get` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131` |
| +15.4% | +18.907 KiB | 34.7% → 35.3% | 123 KiB → 142 KiB |  89 → 103 | `sync.(*Pool).Put` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99`  |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

| Change |       Delta |             % |               Size |       Objects | Caller                            | Location                                                                                         |
| -----: | ----------: | ------------: | -----------------: | ------------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +18.7% | +24.297 KiB | 58.4% → 60.5% |  130 KiB → 154 KiB | 1,476 → 1,732 | `encoding/json.stringEncoder`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  +8.7% |  +7.996 KiB | 41.6% → 39.5% | 92.3 KiB → 100 KiB | 3,720 → 4,318 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `sync.(*Pool).Get` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`)

| Change |      Delta |      % |              Size |   Objects | Caller                         | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| +12.2% | +28.36 KiB | 100.0% | 232 KiB → 260 KiB | 168 → 189 | `encoding/json.newEncodeState` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |      Delta |      % |              Size |                 Objects | Caller                                        | Location                                                                                          |
| -----: | ---------: | -----: | ----------------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.3% | -2.072 MiB | 100.0% | 794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
|  -0.3% | -2.059 MiB |  99.8% | 793 MiB → 791 MiB | 10,614,133 → 10,648,172 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

| Change |      Delta |      % |              Size |                 Objects | Caller                               | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -2.072 MiB | 100.0% | 794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

| Change |      Delta |      % |              Size |                 Objects | Caller                                   | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -2.072 MiB | 100.0% | 794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

| Change |      Delta |      % |              Size |                 Objects | Caller                    | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -2.072 MiB | 100.0% | 794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |      Delta |      % |              Size |                 Objects | Caller                | Location          |
| -----: | ---------: | -----: | ----------------: | ----------------------: | --------------------- | ----------------- |
|  -0.3% | -2.072 MiB | 100.0% | 795 MiB → 793 MiB | 10,621,980 → 10,654,295 | `main.workload.func1` | `./profile.go:25` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |      Delta |      % |              Size |                 Objects | Caller                                         | Location                                                                                          |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.3% |  -2.06 MiB | 100.0% | 794 MiB → 792 MiB | 10,618,105 → 10,650,607 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  -0.3% | -2.025 MiB |  99.7% | 792 MiB → 790 MiB | 10,604,369 → 10,638,731 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |      Delta |      % |              Size |                 Objects | Caller                                        | Location                                                                                          |
| -----: | ---------: | -----: | ----------------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.3% | -2.019 MiB | 100.0% | 794 MiB → 792 MiB | 10,607,828 → 10,640,995 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.typeEncoder.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`)

|  Change |      Delta |             % |          Size |    Objects | Caller                                      | Location                                                                                         |
| ------: | ---------: | ------------: | ------------: | ---------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -1.901 MiB | 100.0% → 0.0% | 1.9 MiB → 0 B | 27,579 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |        Delta |      % |              Size |       Objects | Caller                 | Location                                                                                 |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------- | ---------------------------------------------------------------------------------------- |
|  -0.3% | -916.634 KiB | 100.0% | 349 MiB → 348 MiB | 4,660 → 4,364 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

| Change |        Delta |     % |                Size |       Objects | Caller                              | Location                                                                                         |
| -----: | -----------: | ----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -588.765 KiB | 56.3% |             196 MiB |     987 → 959 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  -0.2% | -299.429 KiB | 43.7% |             152 MiB | 3,218 → 3,178 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| -50.0% |  -28.439 KiB | <0.1% | 56.9 KiB → 28.4 KiB |     455 → 227 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |        Delta |      % |                Size |       Objects | Caller                      | Location                                                                                 |
| -----: | -----------: | -----: | ------------------: | ------------: | --------------------------- | ---------------------------------------------------------------------------------------- |
|  -0.3% | -916.634 KiB | 100.0% |   349 MiB → 348 MiB | 4,660 → 4,364 | `bytes.(*Buffer).Write`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |
| +66.7% |   +8.062 KiB |  <0.1% | 12.1 KiB → 20.2 KiB |     193 → 322 | `bytes.(*Buffer).WriteByte` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |        Delta |             % |                Size |               Objects | Caller                                          | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.7% | -566.325 KiB | 43.0% → 42.8% | 78.1 MiB → 77.6 MiB | 4,074,354 → 4,047,787 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  -0.2% | -205.754 KiB | 57.0% → 57.2% |             104 MiB | 1,567,290 → 1,577,465 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `main.main` (`./profile.go:61`)

| Change |    Delta |      % |                Size | Objects | Caller         | Location                                                                                 |
| -----: | -------: | -----: | ------------------: | ------: | -------------- | ---------------------------------------------------------------------------------------- |
| -35.1% | -624 KiB | 100.0% | 1.74 MiB → 1.13 MiB | 54 → 53 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

##### `os.readFileContents` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`)

|  Change |    Delta |             % |          Size | Objects | Caller        | Location                                                                            |
| ------: | -------: | ------------: | ------------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| removed | -624 KiB | 100.0% → 0.0% | 624 KiB → 0 B |   1 → 0 | `os.ReadFile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864` |

##### `os.ReadFile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`)

|  Change |    Delta |             % |          Size | Objects | Caller      | Location          |
| ------: | -------: | ------------: | ------------: | ------: | ----------- | ----------------- |
| removed | -624 KiB | 100.0% → 0.0% | 624 KiB → 0 B |   1 → 0 | `main.main` | `./profile.go:61` |

##### `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`)

| Change |        Delta |      % |                Size |               Objects | Caller                            | Location                                                                                         |
| -----: | -----------: | -----: | ------------------: | --------------------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.7% | -573.117 KiB | 100.0% | 81.9 MiB → 81.3 MiB | 5,365,723 → 5,329,046 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

| Change |        Delta |      % |              Size |       Objects | Caller                                      | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -564.467 KiB | 100.0% | 197 MiB → 196 MiB | 2,463 → 2,691 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

| Change |        Delta |      % |                Size |           Objects | Caller                  | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.1% | -214.197 KiB | 100.0% | 19.6 MiB → 19.4 MiB | 123,445 → 122,176 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

|  Change |       Delta |             % |                Size |  Objects | Caller                   | Location                                                                                  |
| ------: | ----------: | ------------: | ------------------: | -------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| removed | -14.435 KiB |  17.7% → 0.0% |      14.4 KiB → 0 B |    1 → 0 | `runtime.procresize`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030` |
|  -60.0% | -12.165 KiB | 24.9% → 12.7% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.acquireSudog`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`  |
|  +66.7% |  +8.476 KiB | 15.6% → 33.1% | 12.7 KiB → 21.2 KiB |  27 → 45 | `runtime.malg`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273` |
|  +20.0% |  +5.082 KiB | 31.2% → 47.6% | 25.4 KiB → 30.5 KiB |  12 → 14 | `runtime.allocm`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |
|  -50.0% |  -4.254 KiB |  10.5% → 6.6% | 8.51 KiB → 4.25 KiB |   17 → 8 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`  |

##### `compress/flate.(*huffmanEncoder).generate` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272`)

|  Change |       Delta |            % |           Size | Objects | Caller                                                 | Location                                                                                                      |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| removed | -10.458 KiB | 66.7% → 0.0% | 10.5 KiB → 0 B |   4 → 0 | `compress/flate.(*huffmanBitWriter).indexTokens`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:530` |
| removed |  -5.229 KiB | 33.3% → 0.0% | 5.23 KiB → 0 B |   2 → 0 | `compress/flate.(*huffmanBitWriter).writeBlockDynamic` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:498` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |        Delta |             % |               Size |               Objects | Callee                                       | Location                                                                                          |
| -----: | -----------: | ------------: | -----------------: | --------------------: | -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.2% | -205.754 KiB | 72.8% → 72.2% |            104 MiB | 1,567,290 → 1,577,465 | `encoding/json.unquote`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  +1.8% | +132.258 KiB |          5.0% | 7.1 MiB → 7.23 MiB |     465,543 → 474,008 | `encoding/json.(*decodeState).convertNumber` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`  |

##### `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`)

| Change |        Delta |      % |                Size |               Objects | Callee            | Location                                                                                   |
| -----: | -----------: | -----: | ------------------: | --------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  +1.1% | +893.744 KiB | 100.0% | 81.2 MiB → 82.1 MiB | 5,324,171 → 5,381,372 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |        Delta |     % |              Size |                 Objects | Callee                                 | Location                                                                                         |
| -----: | -----------: | ----: | ----------------: | ----------------------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +477.125 KiB | 80.2% | 735 MiB → 736 MiB | 11,199,505 → 11,224,399 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| +10.6% |  +28.352 KiB | <0.1% | 268 KiB → 296 KiB |               769 → 811 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |
| +18.7% |   +22.93 KiB | <0.1% | 123 KiB → 146 KiB |                89 → 188 | `sync.(*Pool).Put`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99`             |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

| Change |        Delta |      % |              Size |                 Objects | Callee                           | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +520.515 KiB | 100.0% | 734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

| Change |        Delta |      % |              Size |                 Objects | Callee                              | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +520.515 KiB | 100.0% | 734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|  Change |        Delta |           % |                Size |                 Objects | Callee                              | Location                                                                                         |
| ------: | -----------: | ----------: | ------------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed |   -1.901 MiB | 0.3% → 0.0% |       1.9 MiB → 0 B |              27,579 → 0 | `encoding/json.typeEncoder.func2`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |
|   -0.3% | -564.467 KiB |       26.7% |   197 MiB → 196 MiB |           2,463 → 2,691 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|   +0.1% | +520.515 KiB |       99.9% |   734 MiB → 735 MiB | 11,188,238 → 11,211,030 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|   +0.1% | +473.055 KiB |      100.0% |   735 MiB → 736 MiB | 11,199,505 → 11,224,371 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  -18.0% |  -12.408 KiB |       <0.1% | 68.9 KiB → 56.5 KiB |             840 → 1,638 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

| Change |        Delta |      % |              Size |                 Objects | Callee                                      | Location                                                                                         |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +477.125 KiB | 100.0% | 735 MiB → 736 MiB | 11,199,505 → 11,224,399 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |        Delta |             % |                Size |                 Objects | Callee                           | Location                                                                                         |
| -----: | -----------: | ------------: | ------------------: | ----------------------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.1% | +893.744 KiB | 11.1% → 11.2% | 81.2 MiB → 82.1 MiB |   5,324,171 → 5,381,372 | `reflect.(*MapIter).Key`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`          |
|  -0.7% | -573.117 KiB |         11.1% | 81.9 MiB → 81.3 MiB |   5,365,723 → 5,329,046 | `reflect.(*MapIter).Value`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`          |
|  +0.1% | +469.032 KiB |        100.0% |             735 MiB | 11,197,413 → 11,222,201 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
|  -0.2% | -299.429 KiB |         20.7% |             152 MiB |           3,218 → 3,178 | `bytes.(*Buffer).Write`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| +66.7% |   +8.062 KiB |         <0.1% | 12.1 KiB → 20.2 KiB |               193 → 322 | `bytes.(*Buffer).WriteByte`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303`         |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

| Change |        Delta |      % |    Size |                 Objects | Callee                                      | Location                                                                                         |
| -----: | -----------: | -----: | ------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +469.032 KiB | 100.0% | 735 MiB | 11,197,413 → 11,222,201 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`)

| Change |        Delta |      % |    Size |                 Objects | Callee               | Location                                                                                    |
| -----: | -----------: | -----: | ------: | ----------------------: | -------------------- | ------------------------------------------------------------------------------------------- |
|  +0.2% | +320.626 KiB | 100.0% | 163 MiB | 10,689,894 → 10,710,418 | `reflect.unsafe_New` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177` |

##### `runtime/pprof.(*profileBuilder).appendLocsForStack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406`)

| Change |       Delta |             % |                Size |     Objects | Callee                                         | Location                                                                                        |
| -----: | ----------: | ------------: | ------------------: | ----------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +41.9% | +53.214 KiB |  8.6% → 11.6% |   127 KiB → 180 KiB | 774 → 1,318 | `runtime/pprof.allFrames`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209` |
|  +1.1% | +14.824 KiB | 91.4% → 88.4% | 1.32 MiB → 1.34 MiB |   753 → 434 | `runtime/pprof.(*profileBuilder).emitLocation` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589` |

##### `runtime/pprof.profileWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922`)

|  Change |       Delta |             % |                Size |       Objects | Callee                                  | Location                                                                                        |
| ------: | ----------: | ------------: | ------------------: | ------------: | --------------------------------------- | ----------------------------------------------------------------------------------------------- |
|   +3.9% | +60.251 KiB | 97.0% → 96.8% |  1.5 MiB → 1.56 MiB | 1,539 → 1,756 | `runtime/pprof.(*profileBuilder).build` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348` |
| +102.3% |  +4.173 KiB |   0.3% → 0.5% | 4.08 KiB → 8.25 KiB |       26 → 38 | `runtime/pprof.newProfileBuilder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259` |

##### `runtime/pprof.(*profileBuilder).build` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348`)

|  Change |       Delta |             % |                Size |       Objects | Callee                                               | Location                                                                                          |
| ------: | ----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|   +4.6% | +68.039 KiB | 96.4% → 97.0% | 1.45 MiB → 1.51 MiB | 1,527 → 1,752 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406`   |
| removed | -15.688 KiB |   1.0% → 0.0% |      15.7 KiB → 0 B |         6 → 0 | `compress/gzip.(*Writer).Close`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:228`    |
|  +36.2% | +12.627 KiB |   2.3% → 3.0% | 34.8 KiB → 47.5 KiB |         3 → 4 | `runtime/pprof.(*protobuf).strings`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:97` |
| removed |  -4.726 KiB |   0.3% → 0.0% |      4.73 KiB → 0 B |         3 → 0 | `runtime/pprof.(*profileBuilder).pbSample`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:160`   |

##### `sync.(*Pool).pin` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`)

| Change |       Delta |      % |              Size |   Objects | Callee                 | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- | ------------------------------------------------------------------------------------- |
| +13.3% | +47.267 KiB | 100.0% | 355 KiB → 402 KiB | 257 → 292 | `sync.(*Pool).pinSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223` |

##### `sync.(*Pool).Get` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`)

| Change |      Delta |      % |              Size |   Objects | Callee             | Location                                                                              |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
| +12.2% | +28.36 KiB | 100.0% | 232 KiB → 260 KiB | 168 → 189 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |        Delta |      % |                Size |                 Objects | Callee                                        | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.3% |    -2.06 MiB | 100.0% |   794 MiB → 792 MiB | 10,618,105 → 10,650,607 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|  -0.7% | -566.325 KiB |   9.8% | 78.1 MiB → 77.6 MiB |   4,074,354 → 4,047,787 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

| Change |      Delta |      % |              Size |                 Objects | Callee                                         | Location                                                                                          |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.3% | -2.072 MiB | 100.0% | 794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

| Change |      Delta |      % |              Size |                 Objects | Callee                                | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -2.072 MiB | 100.0% | 794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

| Change |      Delta |      % |              Size |                 Objects | Callee                               | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -2.072 MiB | 100.0% | 794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |       Delta |      % |               Size |                 Objects | Callee                                   | Location                                                                                         |
| -----: | ----------: | -----: | -----------------: | ----------------------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% |  -2.072 MiB | 100.0% |  794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |
| -11.3% | -11.913 KiB |  <0.1% | 105 KiB → 93.1 KiB |           2,156 → 1,514 | `encoding/json.checkValid`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |       Delta |             % |              Size |                 Objects | Callee                                          | Location                                                                                          |
| -----: | ----------: | ------------: | ----------------: | ----------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.3% |  -2.059 MiB |         99.8% | 793 MiB → 791 MiB | 10,614,133 → 10,648,172 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  -0.3% |  -2.019 MiB |         99.9% | 794 MiB → 792 MiB | 10,607,828 → 10,640,995 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|  +0.7% | +988.58 KiB | 17.9% → 18.1% |           143 MiB |   4,070,194 → 4,156,725 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |      Delta |     % |              Size |                 Objects | Callee                                        | Location                                                                                          |
| -----: | ---------: | ----: | ----------------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.3% | -2.025 MiB | 99.8% | 792 MiB → 790 MiB | 10,604,369 → 10,638,731 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.typeEncoder.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402`)

|  Change |      Delta |             % |          Size |    Objects | Callee                            | Location                                                                                         |
| ------: | ---------: | ------------: | ------------: | ---------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -1.901 MiB | 100.0% → 0.0% | 1.9 MiB → 0 B | 27,579 → 0 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `main.workload.func1` (`./profile.go:25`)

| Change |        Delta |     % |              Size |                 Objects | Callee                    | Location                                                                                         |
| -----: | -----------: | ----: | ----------------: | ----------------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% |   -2.072 MiB | 46.4% | 795 MiB → 793 MiB | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  +0.1% | +528.409 KiB | 53.6% |           917 MiB | 11,200,763 → 11,225,798 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

| Change |        Delta |      % |              Size |       Objects | Callee                 | Location                                                                                 |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------- | ---------------------------------------------------------------------------------------- |
|  -0.3% | -916.634 KiB | 100.0% | 349 MiB → 348 MiB | 4,660 → 4,364 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |        Delta |      % |              Size |       Objects | Callee            | Location                                                                                 |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------- | ---------------------------------------------------------------------------------------- |
|  -0.3% | -916.634 KiB | 100.0% | 349 MiB → 348 MiB | 4,660 → 4,364 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |        Delta |             % |                Size |           Objects | Callee                       | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | ----------------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.1% | -214.197 KiB | 10.8% → 10.7% | 19.6 MiB → 19.4 MiB | 123,445 → 122,176 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### `main.main` (`./profile.go:61`)

|  Change |    Delta |            % |          Size | Objects | Callee        | Location                                                                            |
| ------: | -------: | -----------: | ------------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| removed | -624 KiB | 35.1% → 0.0% | 624 KiB → 0 B |   1 → 0 | `os.ReadFile` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864` |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

| Change |    Delta |      % |                Size | Objects | Callee      | Location          |
| -----: | -------: | -----: | ------------------: | ------: | ----------- | ----------------- |
| -35.1% | -624 KiB | 100.0% | 1.74 MiB → 1.13 MiB | 54 → 53 | `main.main` | `./profile.go:61` |

##### `os.ReadFile` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`)

|  Change |    Delta |             % |          Size | Objects | Callee                | Location                                                                            |
| ------: | -------: | ------------: | ------------: | ------: | --------------------- | ----------------------------------------------------------------------------------- |
| removed | -624 KiB | 100.0% → 0.0% | 624 KiB → 0 B |   1 → 0 | `os.readFileContents` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886` |

##### `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`)

| Change |        Delta |      % |                Size |               Objects | Callee            | Location                                                                                   |
| -----: | -----------: | -----: | ------------------: | --------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  -0.7% | -573.117 KiB | 100.0% | 81.9 MiB → 81.3 MiB | 5,365,723 → 5,329,046 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

| Change |        Delta |     % |              Size |       Objects | Callee                                        | Location                                                                                         |
| -----: | -----------: | ----: | ----------------: | ------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.3% | -588.765 KiB | 99.9% |           196 MiB |     987 → 959 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
| +18.7% |  +24.297 KiB |  0.1% | 130 KiB → 154 KiB | 1,476 → 1,732 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

| Change |       Delta |      % |                Size |   Objects | Callee             | Location                                                                                    |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------ | ------------------------------------------------------------------------------------------- |
| -21.3% | -17.296 KiB | 100.0% | 81.3 KiB → 64.1 KiB | 242 → 141 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `main.workload.func1` (`./profile.go:25`)

| Change |        Delta |            % |                Size |               Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | -----------: | -----------: | ------------------: | --------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +0.7% | +796.839 KiB |         6.2% |   106 MiB → 107 MiB |     146,692 → 148,898 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +1.3% | +796.678 KiB |         3.4% |   58.2 MiB → 59 MiB |     125,764 → 127,519 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +2.3% | +561.289 KiB |         1.4% | 23.6 MiB → 24.2 MiB | 1,205,616 → 1,235,125 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +3.6% | +524.989 KiB |  0.8% → 0.9% | 14.2 MiB → 14.7 MiB |     916,161 → 950,530 | `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +2.4% | +517.008 KiB |  1.2% → 1.3% | 20.9 MiB → 21.4 MiB | 1,371,250 → 1,404,339 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +2.8% | +400.782 KiB |  0.8% → 0.9% | 14.2 MiB → 14.6 MiB |     932,378 → 958,028 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +4.2% | +356.696 KiB |         0.5% | 8.39 MiB → 8.74 MiB |     549,936 → 572,764 | `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +0.6% | +224.437 KiB |         2.3% | 38.7 MiB → 38.9 MiB | 2,534,223 → 2,548,587 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +2.7% | +210.667 KiB |  0.4% → 0.5% | 7.71 MiB → 7.91 MiB |       50,144 → 50,852 | `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +0.2% | +196.521 KiB |         5.3% | 90.3 MiB → 90.5 MiB |         1,030 → 1,083 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +38.7% | +173.381 KiB |        <0.1% |   449 KiB → 622 KiB |         3,382 → 4,357 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +8.5% | +160.292 KiB |         0.1% | 1.85 MiB → 2.01 MiB |     120,215 → 130,901 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +0.8% | +158.741 KiB |         1.1% | 18.4 MiB → 18.6 MiB |     203,228 → 210,576 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +18.7% | +138.135 KiB | <0.1% → 0.1% |   739 KiB → 878 KiB |         5,915 → 7,020 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                     |
| +21.1% | +136.266 KiB |        <0.1% |   645 KiB → 782 KiB |       41,296 → 50,017 | `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +0.7% | +132.612 KiB |  1.1% → 1.2% | 19.7 MiB → 19.8 MiB |     364,849 → 367,278 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +3.8% | +128.249 KiB |         0.2% | 3.26 MiB → 3.38 MiB |     213,408 → 221,616 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                               |
| +11.4% | +121.884 KiB |         0.1% | 1.05 MiB → 1.17 MiB |         8,580 → 9,555 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                            |
| +30.3% |  +108.21 KiB |        <0.1% |   357 KiB → 465 KiB |       22,828 → 29,754 | `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +30.6% | +104.203 KiB |        <0.1% |   341 KiB → 445 KiB |       21,802 → 28,471 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |            % |                Size |               Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | -----------: | -----------: | ------------------: | --------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -3.2% |   -1.257 MiB |         2.3% | 39.9 MiB → 38.6 MiB | 2,035,472 → 1,972,934 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -0.4% | -721.561 KiB |         9.2% |             157 MiB |     461,327 → 456,839 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |     -624 KiB | <0.1% → 0.0% |       624 KiB → 0 B |                 1 → 0 | `os.readFileContents` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:886`) ← `os.ReadFile` (864) ← `main.main` (`./profile.go:61`) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   -0.7% | -590.159 KiB |  4.8% → 4.7% |   81.6 MiB → 81 MiB |     272,933 → 278,937 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |     -512 KiB | <0.1% → 0.0% |       512 KiB → 0 B |                 1 → 0 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.typeEncoder.func2` (402) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                        |
|   -2.5% | -427.138 KiB |  1.0% → 0.9% |   16.4 MiB → 16 MiB |      100,826 → 96,089 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   -9.5% | -280.821 KiB |         0.2% | 2.88 MiB → 2.61 MiB |     125,979 → 113,997 | `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -265.251 KiB | <0.1% → 0.0% |       265 KiB → 0 B |                 2 → 0 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.typeEncoder.func2` (402) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   -3.9% | -244.388 KiB |  0.4% → 0.3% | 6.05 MiB → 5.82 MiB |       48,382 → 47,233 | `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -229.355 KiB | <0.1% → 0.0% |       229 KiB → 0 B |               295 → 0 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.typeEncoder.func2` (402) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   -0.5% | -226.651 KiB |         2.4% | 41.4 MiB → 41.2 MiB |     682,145 → 683,797 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -0.1% | -210.968 KiB |        14.9% |             256 MiB |     716,763 → 719,336 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   -3.0% | -180.476 KiB |         0.3% | 5.81 MiB → 5.64 MiB |       24,919 → 24,091 | `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   -8.2% | -173.857 KiB |         0.1% | 2.08 MiB → 1.91 MiB |       12,221 → 11,531 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                              |
|   -7.3% | -160.383 KiB |         0.1% | 2.13 MiB → 1.98 MiB |       94,736 → 85,627 | `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                             |
|   -4.1% | -152.296 KiB |         0.2% | 3.61 MiB → 3.46 MiB |     236,493 → 226,746 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`) |
|   -0.4% | -149.186 KiB |         2.3% |   39 MiB → 38.8 MiB |       39,909 → 39,760 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -137.111 KiB | <0.1% → 0.0% |       137 KiB → 0 B |               357 → 0 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.typeEncoder.func2` (402) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |     -128 KiB | <0.1% → 0.0% |       128 KiB → 0 B |                 1 → 0 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.typeEncoder.func2` (402) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                           |
|   -8.4% | -124.862 KiB |         0.1% | 1.45 MiB → 1.33 MiB |         8,785 → 8,699 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                              |

# Retained heap profile diff

Retained 2.09 MiB → 1.59 MiB (-516.607 KiB, -24.1%) over 291 → 285 objects (7.36 KiB → 5.71 KiB per object).

| Category         | Change |        Delta |      % |                Size |   Objects |
| ---------------- | -----: | -----------: | -----: | ------------------: | --------: |
| Standard library | -24.1% | -516.607 KiB | 100.0% | 2.09 MiB → 1.59 MiB | 291 → 285 |

Paths starting with `./` or `../` are relative to `/Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

| Change |      Delta |           % |           Size | Objects | Function                          | Location                                                                                         |
| -----: | ---------: | ----------: | -------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new |  +4.07 KiB | 0.0% → 0.3% | 0 B → 4.07 KiB |  0 → 28 | `reflect.addReflectOff`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`     |
|    new | +4.054 KiB | 0.0% → 0.2% | 0 B → 4.05 KiB |  0 → 37 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|    new | +4.031 KiB | 0.0% → 0.2% | 0 B → 4.03 KiB |  0 → 64 | `encoding/json.newEncodeState`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |       Delta |             % |                Size |   Objects | Function                                       | Location                                                                                          |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -25.0% |    -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |     4 → 3 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  -14.0% | -12.708 KiB |   4.2% → 4.8% | 90.5 KiB → 77.8 KiB | 250 → 153 | `runtime.mallocgc`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`       |
| removed |  -4.054 KiB |   0.2% → 0.0% |      4.05 KiB → 0 B |    37 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`)

| Change |     Delta |             % |           Size | Objects | Location                                                                                     |
| -----: | --------: | ------------: | -------------: | ------: | -------------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:719` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new | +4.031 KiB | 0.0% → 100.0% | 0 B → 4.03 KiB |  0 → 64 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:325` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |    Delta |      % |            Size | Objects | Location                                                                                 |
| -----: | -------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |      Delta |             % |                Size |   Objects | Location                                                                                    |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------- |
| -23.5% | -9.353 KiB | 44.0% → 39.2% | 39.8 KiB → 30.5 KiB |   13 → 14 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152` |
| -11.2% | -3.688 KiB | 36.4% → 37.7% |   33 KiB → 29.3 KiB | 212 → 119 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |
|  +1.9% |     +341 B | 19.5% → 23.2% |   17.7 KiB → 18 KiB |   25 → 20 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |      Delta |             % |           Size | Objects | Location                                                                                          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed | -4.054 KiB | 100.0% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`)

| Change |     Delta |             % |           Size | Objects | Caller                       | Location                                                                                 |
| -----: | --------: | ------------: | -------------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.resolveReflectName` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |      Delta |             % |           Size | Objects | Caller                                      | Location                                                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change |      Delta |             % |           Size | Objects | Caller                  | Location                                                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +4.031 KiB | 0.0% → 100.0% | 0 B → 4.03 KiB |  0 → 64 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |    Delta |      % |            Size | Objects | Caller                 | Location                                                                                 |
| -----: | -------: | -----: | --------------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |       Delta |             % |                Size |   Objects | Caller              | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------- | ------------------------------------------------------------------------------------------- |
| -21.3% | -17.296 KiB | 89.9% → 82.3% | 81.3 KiB → 64.1 KiB | 242 → 141 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| +50.0% |  +4.587 KiB | 10.1% → 17.7% | 9.18 KiB → 13.8 KiB |    8 → 12 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |      Delta |             % |           Size | Objects | Caller                                        | Location                                                                                          |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -4.054 KiB | 100.0% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

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
|  -24.6% | -503.898 KiB | 95.8% → 95.2% |    2 MiB → 1.51 MiB |  41 → 132 | `main.workload.func1`                       | `./profile.go:25`                                                                                |
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

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

| Change |       Delta |      % |              Size | Objects | Caller         | Location                                                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 100.0% | 34.6 KiB → 57 KiB | 20 → 53 | `runtime.newm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857` |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

| Change |       Delta |      % |              Size | Objects | Caller           | Location                                                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 100.0% | 34.6 KiB → 57 KiB | 20 → 53 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035` |

##### `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`)

| Change |       Delta |      % |              Size | Objects | Caller          | Location                                                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 100.0% | 34.6 KiB → 57 KiB | 20 → 53 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

| Change |      Delta |              % |                Size | Objects | Caller                                      | Location                                                                                     |
| -----: | ---------: | -------------: | ------------------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
|    new | +8.826 KiB |   0.0% → 15.5% |      0 B → 8.83 KiB |  0 → 13 | `runtime.startTheWorldWithSema`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1760`    |
| +24.5% | +8.477 KiB | 100.0% → 75.6% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.resetspinning`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`    |
|    new | +5.082 KiB |    0.0% → 8.9% |      0 B → 5.08 KiB |   0 → 2 | `runtime.(*gcControllerState).enlistWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697` |

##### `runtime.startTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1760`)

| Change |      Delta |             % |           Size | Objects | Caller                  | Location                                                                                |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------- | --------------------------------------------------------------------------------------- |
|    new | +8.826 KiB | 0.0% → 100.0% | 0 B → 8.83 KiB |  0 → 13 | `runtime.gcStart.func4` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947` |

##### `runtime.gcStart.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`)

| Change |      Delta |             % |           Size | Objects | Caller                | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
|    new | +8.826 KiB | 0.0% → 100.0% | 0 B → 8.83 KiB |  0 → 13 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

| Change |      Delta |      % |                Size | Objects | Caller             | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| +24.5% | +8.477 KiB | 100.0% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

| Change |      Delta |             % |                Size | Objects | Caller            | Location                                                                                  |
| -----: | ---------: | ------------: | ------------------: | ------: | ----------------- | ----------------------------------------------------------------------------------------- |
| +34.5% | +5.083 KiB | 42.7% → 46.1% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.park_m`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |
| +17.1% | +3.394 KiB | 57.3% → 53.9% | 19.8 KiB → 23.2 KiB | 11 → 27 | `runtime.mstart1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904` |

##### `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`)

| Change |       Delta |              % |                Size | Objects | Caller             | Location                                                                                  |
| -----: | ----------: | -------------: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
|    new | +12.715 KiB |   0.0% → 60.0% |      0 B → 12.7 KiB |  0 → 27 | `runtime.allocm`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |
| -33.3% |  -4.239 KiB | 100.0% → 40.0% | 12.7 KiB → 8.48 KiB | 27 → 18 | `runtime.newproc1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |      Delta |      % |                Size | Objects | Caller          | Location                                                                                     |
| -----: | ---------: | -----: | ------------------: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| +34.5% | +5.083 KiB | 100.0% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `runtime.(*gcControllerState).enlistWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`)

| Change |      Delta |             % |           Size | Objects | Caller            | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

| Change |      Delta |             % |           Size | Objects | Caller                          | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.gcDrainMarkWorkerIdle` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

| Change |      Delta |             % |           Size | Objects | Caller                         | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcBgMarkWorker.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847` |

##### `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

| Change |      Delta |             % |           Size | Objects | Caller                | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`)

| Change |      Delta |      % |                Size | Objects | Caller                    | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.makeProfStackFP` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056` |

##### `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`)

| Change |      Delta |      % |                Size | Objects | Caller                   | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mProfStackInit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043` |

##### `runtime.mProfStackInit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043`)

| Change |      Delta |      % |                Size | Objects | Caller                | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mcommoninit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998` |

##### `runtime.mcommoninit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`)

| Change |      Delta |      % |                Size | Objects | Caller           | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.allocm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |

##### `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`)

| Change |     Delta |             % |           Size | Objects | Caller                       | Location                                                                                 |
| -----: | --------: | ------------: | -------------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.resolveReflectName` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568` |

##### `reflect.resolveReflectName` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568`)

| Change |     Delta |             % |           Size | Objects | Caller                   | Location                                                                                  |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.(*rtype).ptrTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1418` |

##### `reflect.(*rtype).ptrTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1418`)

| Change |     Delta |             % |           Size | Objects | Caller              | Location                                                                                  |
| -----: | --------: | ------------: | -------------: | ------: | ------------------- | ----------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.PointerTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1414` |

##### `reflect.PointerTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1414`)

| Change |     Delta |             % |           Size | Objects | Caller                         | Location                                                                                         |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `encoding/json.newTypeEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:421` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |    Delta |      % |            Size | Objects | Caller                 | Location                                                                                 |
| -----: | -------: | -----: | --------------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |    Delta |      % |            Size | Objects | Caller                  | Location                                                                                 |
| -----: | -------: | -----: | --------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `bytes.(*Buffer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

| Change |    Delta |      % |            Size | Objects | Caller                        | Location                                                                                         |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `encoding/json.stringEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

| Change |    Delta |      % |            Size | Objects | Caller                                      | Location                                                                                         |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

| Change |        Delta |      % |            Size | Objects | Caller                              | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |        Delta |      % |            Size | Objects | Caller                                      | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

| Change |        Delta |      % |            Size | Objects | Caller                              | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

| Change |        Delta |      % |            Size | Objects | Caller                                      | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

| Change |        Delta |              % |             Size | Objects | Caller                                 | Location                                                                                         |
| -----: | -----------: | -------------: | ---------------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% → 99.7% |  2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.interfaceEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| -24.6% | -503.875 KiB |         100.0% | 2 MiB → 1.51 MiB |  4 → 68 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

| Change |        Delta |      % |             Size | Objects | Caller                  | Location                                                                                         |
| -----: | -----------: | -----: | ---------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| -24.6% | -503.875 KiB | 100.0% | 2 MiB → 1.51 MiB |  4 → 68 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |        Delta |      % |             Size | Objects | Caller                | Location          |
| -----: | -----------: | -----: | ---------------: | ------: | --------------------- | ----------------- |
| -24.4% | -499.843 KiB | 100.0% | 2 MiB → 1.51 MiB | 4 → 132 | `main.workload.func1` | `./profile.go:25` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

|  Change |       Delta |             % |                Size |  Objects | Caller                   | Location                                                                                  |
| ------: | ----------: | ------------: | ------------------: | -------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| removed | -14.435 KiB |  17.7% → 0.0% |      14.4 KiB → 0 B |    1 → 0 | `runtime.procresize`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030` |
|  -60.0% | -12.165 KiB | 24.9% → 12.7% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.acquireSudog`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`  |
|  +66.7% |  +8.476 KiB | 15.6% → 33.1% | 12.7 KiB → 21.2 KiB |  27 → 45 | `runtime.malg`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273` |
|  +20.0% |  +5.082 KiB | 31.2% → 47.6% | 25.4 KiB → 30.5 KiB |  12 → 14 | `runtime.allocm`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |
|  -50.0% |  -4.254 KiB |  10.5% → 6.6% | 8.51 KiB → 4.25 KiB |   17 → 8 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`  |

##### `runtime.procresize` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030`)

|  Change |       Delta |             % |           Size | Objects | Caller              | Location                                                                                 |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| removed | -14.435 KiB | 100.0% → 0.0% | 14.4 KiB → 0 B |   1 → 0 | `runtime.schedinit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:831` |

##### `runtime.schedinit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:831`)

|  Change |       Delta |             % |           Size | Objects | Caller           | Location                                                                                     |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| removed | -14.435 KiB | 100.0% → 0.0% | 14.4 KiB → 0 B |   1 → 0 | `runtime.rt0_go` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |       Delta |             % |                Size |   Objects | Caller              | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------- | ------------------------------------------------------------------------------------------- |
| -21.3% | -17.296 KiB | 89.9% → 82.3% | 81.3 KiB → 64.1 KiB | 242 → 141 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| +50.0% |  +4.587 KiB | 10.1% → 17.7% | 9.18 KiB → 13.8 KiB |    8 → 12 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`)

| Change |       Delta |      % |                Size |  Objects | Caller                | Location                                                                                 |
| -----: | ----------: | -----: | ------------------: | -------: | --------------------- | ---------------------------------------------------------------------------------------- |
| -60.0% | -12.165 KiB | 100.0% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.semacquire1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146` |

##### `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`)

| Change |       Delta |      % |                Size |  Objects | Caller               | Location                                                                                 |
| -----: | ----------: | -----: | ------------------: | -------: | -------------------- | ---------------------------------------------------------------------------------------- |
| -60.0% | -12.165 KiB | 100.0% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.semacquire` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142` |

##### `runtime.semacquire` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142`)

| Change |       Delta |      % |                Size |  Objects | Caller               | Location                                                                                 |
| -----: | ----------: | -----: | ------------------: | -------: | -------------------- | ---------------------------------------------------------------------------------------- |
| -60.0% | -12.165 KiB | 100.0% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.newproc1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`)

| Change |      Delta |      % |                Size | Objects | Caller                  | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| -33.3% | -4.239 KiB | 100.0% | 12.7 KiB → 8.48 KiB | 27 → 18 | `runtime.newproc.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

| Change |       Delta |             % |                Size | Objects | Callee                | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
|    new | +12.715 KiB |  0.0% → 22.3% |      0 B → 12.7 KiB |  0 → 27 | `runtime.malg`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`   |
| +20.0% |  +5.082 KiB | 73.5% → 53.5% | 25.4 KiB → 30.5 KiB | 12 → 14 | `runtime.newobject`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| +50.0% |  +4.587 KiB | 26.5% → 24.2% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mcommoninit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`    |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

| Change |       Delta |      % |              Size | Objects | Callee           | Location                                                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 100.0% | 34.6 KiB → 57 KiB | 20 → 53 | `runtime.allocm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |

##### `runtime.startm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035`)

| Change |       Delta |      % |              Size | Objects | Callee         | Location                                                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 100.0% | 34.6 KiB → 57 KiB | 20 → 53 | `runtime.newm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857` |

##### `runtime.wakep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`)

| Change |       Delta |      % |              Size | Objects | Callee           | Location                                                                                  |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| +64.7% | +22.385 KiB | 100.0% | 34.6 KiB → 57 KiB | 20 → 53 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035` |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

| Change |      Delta |              % |                Size | Objects | Callee                         | Location                                                                                  |
| -----: | ---------: | -------------: | ------------------: | ------: | ------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +8.826 KiB |   0.0% → 39.4% |      0 B → 8.83 KiB |  0 → 13 | `runtime.gcStart.func4`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`   |
|    new | +5.082 KiB |   0.0% → 22.7% |      0 B → 5.08 KiB |   0 → 2 | `runtime.gcBgMarkWorker.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`  |
| -33.3% | -4.239 KiB | 100.0% → 37.9% | 12.7 KiB → 8.48 KiB | 27 → 18 | `runtime.newproc.func1`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298` |

##### `runtime.startTheWorldWithSema` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1760`)

| Change |      Delta |             % |           Size | Objects | Callee          | Location                                                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
|    new | +8.826 KiB | 0.0% → 100.0% | 0 B → 8.83 KiB |  0 → 13 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.gcStart.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`)

| Change |      Delta |             % |           Size | Objects | Callee                          | Location                                                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
|    new | +8.826 KiB | 0.0% → 100.0% | 0 B → 8.83 KiB |  0 → 13 | `runtime.startTheWorldWithSema` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1760` |

##### `runtime.resetspinning` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`)

| Change |      Delta |      % |                Size | Objects | Callee          | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
| +24.5% | +8.477 KiB | 100.0% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.schedule` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`)

| Change |      Delta |      % |                Size | Objects | Callee                  | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| +24.5% | +8.477 KiB | 100.0% | 34.6 KiB → 43.1 KiB | 20 → 38 | `runtime.resetspinning` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021` |

##### `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`)

| Change |      Delta |      % |                Size | Objects | Callee              | Location                                                                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| +66.7% | +8.476 KiB | 100.0% | 12.7 KiB → 21.2 KiB | 27 → 45 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |      Delta |      % |                Size | Objects | Callee             | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| +34.5% | +5.083 KiB | 100.0% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)

| Change |      Delta |      % |                Size | Objects | Callee           | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| +34.5% | +5.083 KiB | 100.0% | 14.8 KiB → 19.8 KiB |  9 → 11 | `runtime.park_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253` |

##### `runtime.(*gcControllerState).enlistWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`)

| Change |      Delta |             % |           Size | Objects | Callee          | Location                                                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.wakep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212` |

##### `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

| Change |      Delta |             % |           Size | Objects | Callee                                      | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.(*gcControllerState).enlistWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697` |

##### `runtime.gcDrainMarkWorkerIdle` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

| Change |      Delta |             % |           Size | Objects | Callee            | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

| Change |      Delta |             % |           Size | Objects | Callee                          | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`)

| Change |      Delta |      % |                Size | Objects | Callee             | Location                                                                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`)

| Change |      Delta |      % |                Size | Objects | Callee              | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------- | ----------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102` |

##### `runtime.mProfStackInit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043`)

| Change |      Delta |      % |                Size | Objects | Callee                    | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.makeProfStackFP` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056` |

##### `runtime.mcommoninit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`)

| Change |      Delta |      % |                Size | Objects | Callee                   | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| +50.0% | +4.587 KiB | 100.0% | 9.18 KiB → 13.8 KiB |  8 → 12 | `runtime.mProfStackInit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043` |

##### `reflect.resolveReflectName` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568`)

| Change |     Delta |             % |           Size | Objects | Callee                  | Location                                                                                     |
| -----: | --------: | ------------: | -------------: | ------: | ----------------------- | -------------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.addReflectOff` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707` |

##### `reflect.(*rtype).ptrTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1418`)

| Change |     Delta |             % |           Size | Objects | Callee                       | Location                                                                                 |
| -----: | --------: | ------------: | -------------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.resolveReflectName` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568` |

##### `reflect.PointerTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1414`)

| Change |     Delta |             % |           Size | Objects | Callee                   | Location                                                                                  |
| -----: | --------: | ------------: | -------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +4.07 KiB | 0.0% → 100.0% | 0 B → 4.07 KiB |  0 → 28 | `reflect.(*rtype).ptrTo` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:1418` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |    Delta |      % |            Size | Objects | Callee            | Location                                                                                 |
| -----: | -------: | -----: | --------------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

| Change |    Delta |      % |            Size | Objects | Callee                 | Location                                                                                 |
| -----: | -------: | -----: | --------------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

| Change |    Delta |      % |            Size | Objects | Callee                  | Location                                                                                 |
| -----: | -------: | -----: | --------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `bytes.(*Buffer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

| Change |        Delta |      % |            Size | Objects | Callee                                      | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |        Delta |      % |            Size | Objects | Callee                           | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

| Change |        Delta |      % |            Size | Objects | Callee                           | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

| Change |        Delta |      % |            Size | Objects | Callee                              | Location                                                                                         |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.8% | -507.945 KiB | 100.0% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `main.workload.func1` (`./profile.go:25`)

|  Change |        Delta |              % |             Size | Objects | Callee                    | Location                                                                                         |
| ------: | -----------: | -------------: | ---------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  -24.4% | -499.843 KiB | 99.8% → 100.0% | 2 MiB → 1.51 MiB | 4 → 132 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| removed |   -4.054 KiB |    0.2% → 0.0% |   4.05 KiB → 0 B |  37 → 0 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

| Change |        Delta |              % |            Size | Objects | Callee                              | Location                                                                                         |
| -----: | -----------: | -------------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| -25.0% |     -512 KiB | 100.0% → 99.5% | 2 MiB → 1.5 MiB |   4 → 3 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| -24.8% | -507.945 KiB | 100.0% → 99.7% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| -24.8% | -507.945 KiB | 100.0% → 99.7% | 2 MiB → 1.5 MiB |  4 → 40 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|    new |    +4.07 KiB |    0.0% → 0.3% |  0 B → 4.07 KiB |  0 → 28 | `encoding/json.valueEncoder`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:381` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

| Change |        Delta |      % |             Size | Objects | Callee                                      | Location                                                                                         |
| -----: | -----------: | -----: | ---------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.6% | -503.875 KiB | 100.0% | 2 MiB → 1.51 MiB |  4 → 68 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |        Delta |              % |             Size | Objects | Callee                                 | Location                                                                                         |
| -----: | -----------: | -------------: | ---------------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -24.6% | -503.875 KiB | 100.0% → 99.7% | 2 MiB → 1.51 MiB |  4 → 68 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
|    new |   +4.031 KiB |    0.0% → 0.3% |   0 B → 4.03 KiB |  0 → 64 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

| Change |       Delta |      % |                Size |   Objects | Callee             | Location                                                                                    |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------ | ------------------------------------------------------------------------------------------- |
| -21.3% | -17.296 KiB | 100.0% | 81.3 KiB → 64.1 KiB | 242 → 141 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

| Change |       Delta |             % |                Size |  Objects | Callee               | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | -------: | -------------------- | ------------------------------------------------------------------------------------------- |
| -60.0% | -12.165 KiB | 70.4% → 65.6% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`    |
| -50.0% |  -4.254 KiB | 29.6% → 34.4% | 8.51 KiB → 4.25 KiB |   17 → 8 | `runtime.newobject`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

##### `runtime.procresize` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030`)

|  Change |       Delta |             % |           Size | Objects | Callee              | Location                                                                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
| removed | -14.435 KiB | 100.0% → 0.0% | 14.4 KiB → 0 B |   1 → 0 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

##### `runtime.schedinit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:831`)

|  Change |       Delta |             % |           Size | Objects | Callee               | Location                                                                                  |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| removed | -14.435 KiB | 100.0% → 0.0% | 14.4 KiB → 0 B |   1 → 0 | `runtime.procresize` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030` |

##### `runtime.rt0_go` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105`)

|  Change |       Delta |             % |           Size | Objects | Callee              | Location                                                                                 |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| removed | -14.435 KiB | 100.0% → 0.0% | 14.4 KiB → 0 B |   1 → 0 | `runtime.schedinit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:831` |

##### `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`)

| Change |       Delta |      % |                Size |  Objects | Callee              | Location                                                                                    |
| -----: | ----------: | -----: | ------------------: | -------: | ------------------- | ------------------------------------------------------------------------------------------- |
| -60.0% | -12.165 KiB | 100.0% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

##### `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`)

| Change |       Delta |      % |                Size |  Objects | Callee                 | Location                                                                                 |
| -----: | ----------: | -----: | ------------------: | -------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| -60.0% | -12.165 KiB | 100.0% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.acquireSudog` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488` |

##### `runtime.semacquire` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142`)

| Change |       Delta |      % |                Size |  Objects | Callee                | Location                                                                                 |
| -----: | ----------: | -----: | ------------------: | -------: | --------------------- | ---------------------------------------------------------------------------------------- |
| -60.0% | -12.165 KiB | 100.0% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.semacquire1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146` |

##### `runtime.newproc1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`)

| Change |      Delta |      % |                Size | Objects | Callee         | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| -33.3% | -4.239 KiB | 100.0% | 12.7 KiB → 8.48 KiB | 27 → 18 | `runtime.malg` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

| Change |      Delta |           % |                Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -----: | ---------: | ----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +8.477 KiB | 0.0% → 0.5% |      0 B → 8.48 KiB |  0 → 18 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +50.0% | +5.083 KiB | 0.5% → 0.9% | 10.2 KiB → 15.2 KiB |   5 → 7 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|    new | +5.082 KiB | 0.0% → 0.3% |      0 B → 5.08 KiB |   0 → 2 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +4.587 KiB | 0.0% → 0.3% |      0 B → 4.59 KiB |   0 → 4 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.startTheWorldWithSema` (1760) ← `runtime.gcStart.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +4.238 KiB | 0.0% → 0.3% |      0 B → 4.24 KiB |   0 → 9 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.startTheWorldWithSema` (1760) ← `runtime.gcStart.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new |  +4.07 KiB | 0.0% → 0.3% |      0 B → 4.07 KiB |  0 → 28 | `reflect.addReflectOff` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/runtime1.go:707`) ← `reflect.resolveReflectName` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/type.go:568`) ← `reflect.(*rtype).ptrTo` (1418) ← `reflect.PointerTo` (1414) ← `encoding/json.newTypeEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:421`) ← `encoding/json.typeEncoder.func1` (399) ← `encoding/json.typeEncoder.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:58`) ← `sync.(*Once).doSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/once.go:73`) ← `sync.(*Once).Do` (52) ← `encoding/json.typeEncoder.OnceValue[go.shape.func(*encoding/json.encodeState, reflect.Value, encoding/json.encOpts)].func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/oncefunc.go:57`) ← `encoding/json.typeEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:388`) ← `encoding/json.valueEncoder` (381) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`) |
|    new | +4.054 KiB | 0.0% → 0.2% |      0 B → 4.05 KiB |  0 → 37 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new | +4.031 KiB | 0.0% → 0.2% |      0 B → 4.03 KiB |  0 → 64 | `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

|  Change |       Delta |             % |                Size |  Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------: | ----------: | ------------: | ------------------: | -------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -25.0% |    -512 KiB | 95.6% → 94.5% |     2 MiB → 1.5 MiB |    4 → 3 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`) |
| removed | -14.435 KiB |   0.7% → 0.0% |      14.4 KiB → 0 B |    1 → 0 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.procresize` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6030`) ← `runtime.schedinit` (831) ← `runtime.rt0_go` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:105`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -60.0% | -12.165 KiB |   0.9% → 0.5% | 20.3 KiB → 8.11 KiB | 185 → 74 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`) ← `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`) ← `runtime.semacquire` (142) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -33.3% |  -5.083 KiB |   0.7% → 0.6% | 15.2 KiB → 10.2 KiB |    7 → 5 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -50.0% |  -4.254 KiB |   0.4% → 0.3% | 8.51 KiB → 4.25 KiB |   17 → 8 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -33.3% |  -4.239 KiB |   0.6% → 0.5% | 12.7 KiB → 8.48 KiB |  27 → 18 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.newproc1` (5313) ← `runtime.newproc.func1` (5298) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -4.054 KiB |   0.2% → 0.0% |      4.05 KiB → 0 B |   37 → 0 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                        |

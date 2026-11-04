# Allocated heap profile diff

Allocated 1.69 GiB → 1.7 GiB (+8.962 MiB, +0.5%) over 21,959,562 → 21,998,676 objects (82.7 B → 82.9 B per object).

| Category         | Change |      Delta |      % |               Size |                 Objects |
| ---------------- | -----: | ---------: | -----: | -----------------: | ----------------------: |
| Standard library |  +0.5% | +8.958 MiB | 100.0% | 1.69 GiB → 1.7 GiB | 21,958,536 → 21,997,613 |
| Ours             | +25.3% | +4.054 KiB |  <0.1% |  16 KiB → 20.1 KiB |           1,026 → 1,063 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.68 GiB → 1.69 GiB (99.1% → 99.2%) main.workload.func1 at ./profile.go:25
│   ├── 924 MiB → 934 MiB (53.4% → 53.7%, self 10.5% → 10.4%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
│   │   └── 742 MiB → 752 MiB (42.9% → 43.2%) encoding/json.(*encodeState).marshal at 333
│   │       └── 742 MiB → 752 MiB (42.9% → 43.2%) encoding/json.(*encodeState).reflectValue at 366
│   │           ├── … 542 MiB → 547 MiB (31.3% → 31.4%, self 13.0% → 12.8%) encoding/json.mapEncoder.encode at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765
│   │           │   ├── 155 MiB → 160 MiB (9.0% → 9.2%) bytes.(*Buffer).Write at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193
│   │           │   │   └── 155 MiB → 160 MiB (9.0% → 9.2%) bytes.(*Buffer).grow at 144
│   │           │   │       └── 155 MiB → 160 MiB (9.0% → 9.2%) bytes.growSlice at 247
│   │           │   ├── 81.6 MiB → 81.8 MiB (4.7%) reflect.(*MapIter).Value at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289
│   │           │   │   └── 81.6 MiB → 81.8 MiB (4.7%) reflect.copyVal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881
│   │           │   │       └── 81.6 MiB → 81.8 MiB (4.7%, self 9.5% globally) reflect.unsafe_New at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177
│   │           │   └── 81.3 MiB → 81.7 MiB (4.7%) reflect.(*MapIter).Key at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245
│   │           │       └── 81.3 MiB → 81.7 MiB (4.7%) reflect.copyVal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881
│   │           │           └── 81.3 MiB → 81.7 MiB (4.7%) reflect.unsafe_New at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177
│   │           └── … 200 MiB → 206 MiB (11.6% → 11.8%) encoding/json.stringEncoder at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610
│   │               └── 200 MiB → 206 MiB (11.5% → 11.8%) bytes.(*Buffer).Write at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193
│   │                   └── 200 MiB → 206 MiB (11.5% → 11.8%) bytes.(*Buffer).grow at 144
│   │                       └── 200 MiB → 206 MiB (11.5% → 11.8%, self 20.7% → 21.2% globally) bytes.growSlice at 247
│   └── 792 MiB (45.7% → 45.5%) encoding/json.Unmarshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102
│       └── 792 MiB (45.7% → 45.5%) encoding/json.(*decodeState).unmarshal at 173
│           └── 792 MiB (45.7% → 45.5%) encoding/json.(*decodeState).value at 363
│               └── 792 MiB (45.7% → 45.5%) encoding/json.(*decodeState).object at 604
│                   └── 792 MiB (45.7% → 45.5%, self 32.1% → 31.9%) encoding/json.(*decodeState).objectInterface at 1078
│                       ├── … 158 MiB → 159 MiB (9.1%, self 0.5%) encoding/json.(*decodeState).valueInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035
│                       │   ├── 143 MiB → 144 MiB (8.3%, self 1.9%) encoding/json.(*decodeState).literalInterface at 1129
│                       │   │   ├── 104 MiB (6.0%, self 4.8%, self 9.4% → 9.3% globally) encoding/json.unquote at 1187
│                       │   │   │   └── 19.8 MiB → 20 MiB (1.1% → 1.2%) encoding/json.unquoteBytes at 1193
│                       │   │   └── 7 MiB → 6.9 MiB (0.4%) encoding/json.(*decodeState).convertNumber at 838
│                       │   └── 5.77 MiB → 5.61 MiB (0.3%) encoding/json.(*decodeState).arrayInterface at 1052
│                       └── … 78 MiB → 77.3 MiB (4.5% → 4.4%) encoding/json.unquote at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187
├── 9.67 MiB → 8.66 MiB (0.6% → 0.5%) main.leakWorkers.func1 at ./profile.go:56
│   └── 9.67 MiB → 8.66 MiB (0.6% → 0.5%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
├── 3.83 MiB → 3.75 MiB (0.2%) runtime.main at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149
│   └── 3.83 MiB → 3.75 MiB (0.2%) main.main at ./profile.go:82
│       └── 2.09 MiB → 2.01 MiB (0.1%) main.leakWorkers at 49
└── 1.67 MiB → 1.7 MiB (0.1%) runtime/pprof.profileWriter at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922
    └── 1.6 MiB → 1.63 MiB (0.1%) runtime/pprof.(*profileBuilder).build at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348
        └── 1.55 MiB → 1.57 MiB (0.1%) runtime/pprof.(*profileBuilder).appendLocsForStack at 406
            └── 1.34 MiB → 1.35 MiB (0.1%) runtime/pprof.(*profileBuilder).emitLocation at 589
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |                 Objects | Function                                        | Location                                                                                                     |
| -----: | -----------: | ------------: | ------------------: | ----------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
|  +2.6% |   +9.214 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,523 → 5,092 | `bytes.growSlice`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`                     |
|  +0.4% | +657.282 KiB |          9.5% |   164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`                  |
|  +1.8% | +593.069 KiB |          1.9% |   32.4 MiB → 33 MiB |   2,082,853 → 2,122,692 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`            |
|  +1.3% | +273.656 KiB |   1.1% → 1.2% | 19.8 MiB → 20.1 MiB |       127,224 → 128,153 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`            |
|  +2.8% | +264.774 KiB |   0.5% → 0.6% | 9.34 MiB → 9.59 MiB |       407,886 → 419,182 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`            |
| +14.9% |  +31.941 KiB |         <0.1% |   214 KiB → 246 KiB |           4,643 → 6,122 | `encoding/json.appendString[go.shape.string]`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`             |
|    ~0% |  +24.381 KiB | 32.2% → 32.0% |             557 MiB |   1,849,080 → 1,853,800 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`            |
|  +7.8% |  +16.402 KiB |         <0.1% |   209 KiB → 226 KiB |           1,176 → 1,273 | `runtime/pprof.allFrames`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`              |
| +19.1% |  +13.191 KiB |         <0.1% | 69.2 KiB → 82.4 KiB |                81 → 157 | `runtime.mallocgc`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                  |
| +28.9% |   +8.391 KiB |         <0.1% |   29 KiB → 37.4 KiB |                  8 → 13 | `runtime/pprof.(*protobuf).varint`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14`            |
| +17.2% |    +6.35 KiB |         <0.1% | 36.8 KiB → 43.2 KiB |                  15 → 6 | `runtime/pprof.(*profileBuilder).stringIndex`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`              |
| +10.2% |   +6.192 KiB |         <0.1% | 60.7 KiB → 66.9 KiB |                  8 → 11 | `runtime/pprof.(*profMap).lookup`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/map.go:28`                 |
|  +4.0% |   +5.533 KiB |         <0.1% |   137 KiB → 142 KiB |               361 → 525 | `runtime/pprof.(*profileBuilder).emitLocation`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`              |
|    new |   +4.238 KiB |  0.0% → <0.1% |      0 B → 4.24 KiB |                   0 → 9 | `compress/flate.newHuffmanBitWriter`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94` |
|    new |   +4.078 KiB |  0.0% → <0.1% |      0 B → 4.08 KiB |                  0 → 26 | `compress/gzip.NewWriterLevel`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:60`                |
|    ~0% |   +4.054 KiB | 10.6% → 10.5% |             183 MiB |               404 → 441 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`             |
|    new |   +4.054 KiB |  0.0% → <0.1% |      0 B → 4.05 KiB |                  0 → 37 | `main.leakWorkers`                              | `./profile.go:49`                                                                                            |
| +16.6% |   +4.015 KiB |         <0.1% | 24.2 KiB → 28.2 KiB |               407 → 515 | `encoding/json.newEncodeState`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`             |
|    new |   +4.007 KiB |  0.0% → <0.1% |      0 B → 4.01 KiB |                 0 → 256 | `encoding/json.typeEncoder`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:388`             |
| +24.8% |   +3.984 KiB |         <0.1% |   16.1 KiB → 20 KiB |             514 → 1,154 | `internal/strconv.fmtF`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460`            |

##### Standard library

| Change |        Delta |             % |                Size |                 Objects | Function                                        | Location                                                                                                     |
| -----: | -----------: | ------------: | ------------------: | ----------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
|  +2.6% |   +9.214 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,523 → 5,092 | `bytes.growSlice`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`                     |
|  +0.4% | +657.282 KiB |          9.5% |   164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`                  |
|  +1.8% | +593.069 KiB |          1.9% |   32.4 MiB → 33 MiB |   2,082,853 → 2,122,692 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`            |
|  +1.3% | +273.656 KiB |   1.1% → 1.2% | 19.8 MiB → 20.1 MiB |       127,224 → 128,153 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`            |
|  +2.8% | +264.774 KiB |   0.5% → 0.6% | 9.34 MiB → 9.59 MiB |       407,886 → 419,182 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`            |
| +14.9% |  +31.941 KiB |         <0.1% |   214 KiB → 246 KiB |           4,643 → 6,122 | `encoding/json.appendString[go.shape.string]`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`             |
|    ~0% |  +24.381 KiB | 32.2% → 32.0% |             557 MiB |   1,849,080 → 1,853,800 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`            |
|  +7.8% |  +16.402 KiB |         <0.1% |   209 KiB → 226 KiB |           1,176 → 1,273 | `runtime/pprof.allFrames`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`              |
| +19.1% |  +13.191 KiB |         <0.1% | 69.2 KiB → 82.4 KiB |                81 → 157 | `runtime.mallocgc`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`                  |
| +28.9% |   +8.391 KiB |         <0.1% |   29 KiB → 37.4 KiB |                  8 → 13 | `runtime/pprof.(*protobuf).varint`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14`            |
| +17.2% |    +6.35 KiB |         <0.1% | 36.8 KiB → 43.2 KiB |                  15 → 6 | `runtime/pprof.(*profileBuilder).stringIndex`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`              |
| +10.2% |   +6.192 KiB |         <0.1% | 60.7 KiB → 66.9 KiB |                  8 → 11 | `runtime/pprof.(*profMap).lookup`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/map.go:28`                 |
|  +4.0% |   +5.533 KiB |         <0.1% |   137 KiB → 142 KiB |               361 → 525 | `runtime/pprof.(*profileBuilder).emitLocation`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`              |
|    new |   +4.238 KiB |  0.0% → <0.1% |      0 B → 4.24 KiB |                   0 → 9 | `compress/flate.newHuffmanBitWriter`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94` |
|    new |   +4.078 KiB |  0.0% → <0.1% |      0 B → 4.08 KiB |                  0 → 26 | `compress/gzip.NewWriterLevel`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:60`                |
|    ~0% |   +4.054 KiB | 10.6% → 10.5% |             183 MiB |               404 → 441 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`             |
| +16.6% |   +4.015 KiB |         <0.1% | 24.2 KiB → 28.2 KiB |               407 → 515 | `encoding/json.newEncodeState`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`             |
|    new |   +4.007 KiB |  0.0% → <0.1% |      0 B → 4.01 KiB |                 0 → 256 | `encoding/json.typeEncoder`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:388`             |
| +24.8% |   +3.984 KiB |         <0.1% |   16.1 KiB → 20 KiB |             514 → 1,154 | `internal/strconv.fmtF`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460`            |
|  +2.2% |        +90 B |         <0.1% | 4.09 KiB → 4.17 KiB |                 23 → 12 | `runtime/pprof.(*pcDeck).tryAdd`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:555`              |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |             % |                Size |               Objects | Function                                             | Location                                                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
|   -0.5% |   -1.036 MiB | 13.1% → 13.0% |   227 MiB → 225 MiB |     516,805 → 509,686 | `encoding/json.mapEncoder.encode`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`       |
|   -0.5% | -750.915 KiB |   9.4% → 9.3% |   162 MiB → 161 MiB | 5,517,901 → 5,476,113 | `encoding/json.unquote`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`      |
|   -2.9% | -170.667 KiB |          0.3% | 5.78 MiB → 5.61 MiB |     202,623 → 196,191 | `encoding/json.(*decodeState).arrayInterface`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`      |
|   -1.6% | -116.226 KiB |          0.4% | 7.03 MiB → 6.92 MiB |     460,669 → 453,232 | `encoding/json.(*decodeState).convertNumber`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`       |
|  -26.1% |  -28.502 KiB |         <0.1% |  109 KiB → 80.9 KiB |         1,420 → 1,256 | `encoding/json.(*scanner).pushParseState`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`      |
|  -40.0% |  -24.424 KiB |         <0.1% | 61.1 KiB → 36.6 KiB |             434 → 260 | `encoding/json.Unmarshal`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`       |
|   -4.8% |  -18.907 KiB |         <0.1% |   397 KiB → 378 KiB |             288 → 273 | `sync.(*Pool).pinSlow`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`                  |
| removed |   -4.587 KiB |  <0.1% → 0.0% |      4.59 KiB → 0 B |                 4 → 0 | `compress/flate.newHuffmanEncoder`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:59` |
| removed |   -4.254 KiB |  <0.1% → 0.0% |      4.25 KiB → 0 B |                 8 → 0 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406`        |
| removed |   -4.101 KiB |  <0.1% → 0.0% |       4.1 KiB → 0 B |                20 → 0 | `runtime/pprof.newProfileBuilder`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259`        |
|  -14.3% |   -4.031 KiB |         <0.1% | 28.2 KiB → 24.2 KiB |             451 → 387 | `bytes.(*Buffer).grow`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`               |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |      Delta |      % |              Size |       Objects | Location                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------------: | ---------------------------------------------------------------------------------------- |
|  +2.6% | +9.214 MiB | 100.0% | 359 MiB → 368 MiB | 4,523 → 5,092 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

| Change |        Delta |      % |              Size |                 Objects | Location                                                                                    |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ------------------------------------------------------------------------------------------- |
|  +0.4% | +657.282 KiB | 100.0% | 164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2178` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |        Delta |             % |                Size |               Objects | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ------------------------------------------------------------------------------------------------- |
|  +2.4% | +701.367 KiB | 86.8% → 87.3% | 28.1 MiB → 28.8 MiB | 1,843,720 → 1,888,607 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1148` |
|  -2.5% | -108.297 KiB | 13.2% → 12.7% | 4.28 MiB → 4.18 MiB |     239,133 → 234,085 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1154` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

| Change |        Delta |      % |                Size |           Objects | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------------- |
|  +1.3% | +273.656 KiB | 100.0% | 19.8 MiB → 20.1 MiB | 127,224 → 128,153 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1218` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |        Delta |      % |                Size |           Objects | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------------- |
|  +2.8% | +264.774 KiB | 100.0% | 9.34 MiB → 9.59 MiB | 407,886 → 419,182 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1040` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

| Change |       Delta |             % |                Size |       Objects | Location                                                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------- |
| -28.6% | -16.282 KiB | 26.6% → 16.5% |   57 KiB → 40.7 KiB |     405 → 289 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1011` |
|    new | +16.062 KiB |   0.0% → 6.5% |      0 B → 16.1 KiB |       0 → 514 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1008` |
|  +9.7% | +12.067 KiB | 58.4% → 55.7% |   125 KiB → 137 KiB | 3,404 → 3,714 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1063` |
| +66.7% |  +8.062 KiB |   5.6% → 8.2% | 12.1 KiB → 20.2 KiB |     193 → 322 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1028` |
| +49.9% |  +8.023 KiB |   7.5% → 9.8% | 16.1 KiB → 24.1 KiB |     385 → 770 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:1064` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |        Delta |             % |                Size |               Objects | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ------------------------------------------------------------------------------------------------- |
|  +4.1% |  +957.59 KiB |   4.1% → 4.2% | 22.7 MiB → 23.7 MiB |     496,369 → 516,797 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1079` |
|  -0.2% | -933.208 KiB | 95.9% → 95.8% |   535 MiB → 534 MiB | 1,352,711 → 1,337,003 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

| Change |       Delta |             % |                Size |   Objects | Location                                                                                        |
| -----: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------- |
|  +7.5% | +12.355 KiB | 78.7% → 78.5% |   165 KiB → 177 KiB | 702 → 755 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:214` |
|  +9.1% |  +4.046 KiB | 21.3% → 21.5% | 44.5 KiB → 48.6 KiB | 474 → 518 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:232` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |      Delta |             % |                Size |  Objects | Location                                                                                    |
| -----: | ---------: | ------------: | ------------------: | -------: | ------------------------------------------------------------------------------------------- |
| +38.3% |  +8.11 KiB | 30.6% → 35.6% | 21.2 KiB → 29.3 KiB | 45 → 119 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |
| +20.0% | +5.082 KiB | 36.7% → 37.0% | 25.4 KiB → 30.5 KiB |  12 → 14 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152` |
|    ~0% |       -1 B | 32.7% → 27.4% |            22.6 KiB |       24 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |

##### `runtime/pprof.(*protobuf).varint` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14`)

| Change |      Delta |      % |              Size | Objects | Location                                                                                          |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------------------------- |
| +28.9% | +8.391 KiB | 100.0% | 29 KiB → 37.4 KiB |  8 → 13 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:19` |

##### `runtime/pprof.(*profileBuilder).stringIndex` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`)

| Change |       Delta |              % |                Size | Objects | Location                                                                                        |
| -----: | ----------: | -------------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------- |
|    new | +15.495 KiB |   0.0% → 35.9% |      0 B → 15.5 KiB |   0 → 3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:137` |
| -24.8% |  -9.144 KiB | 100.0% → 64.1% | 36.8 KiB → 27.7 KiB |  15 → 3 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:138` |

##### `runtime/pprof.(*profMap).lookup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/map.go:28`)

|  Change |      Delta |            % |                Size | Objects | Location                                                                                     |
| ------: | ---------: | -----------: | ------------------: | ------: | -------------------------------------------------------------------------------------------- |
| +118.4% | +6.192 KiB | 8.6% → 17.1% | 5.23 KiB → 11.4 KiB |   2 → 5 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/map.go:81` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

| Change |      Delta |             % |                Size |   Objects | Location                                                                                        |
| -----: | ---------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------- |
| +35.2% | +8.485 KiB | 17.6% → 22.9% | 24.1 KiB → 32.6 KiB |     7 → 5 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:625` |
| -25.0% | -8.093 KiB | 23.7% → 17.1% | 32.4 KiB → 24.3 KiB | 344 → 258 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:613` |
|    new | +4.007 KiB |   0.0% → 2.8% |      0 B → 4.01 KiB |   0 → 256 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:611` |
|  +1.4% | +1.133 KiB | 58.7% → 57.2% | 80.2 KiB → 81.4 KiB |    10 → 6 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:609` |

##### `compress/flate.newHuffmanBitWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
|    new | +4.238 KiB | 0.0% → 100.0% | 0 B → 4.24 KiB |   0 → 9 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:95` |

##### `compress/gzip.NewWriterLevel` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:60`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                      |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------------------------- |
|    new | +4.078 KiB | 0.0% → 100.0% | 0 B → 4.08 KiB |  0 → 26 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:64` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |      Delta |      % |    Size |   Objects | Location                                                                                         |
| -----: | ---------: | -----: | ------: | --------: | ------------------------------------------------------------------------------------------------ |
|    ~0% | +4.054 KiB | 100.0% | 183 MiB | 404 → 441 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |      Delta |             % |           Size | Objects | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `./profile.go:54` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change |      Delta |      % |                Size |   Objects | Location                                                                                         |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------------------------------ |
| +16.6% | +4.015 KiB | 100.0% | 24.2 KiB → 28.2 KiB | 407 → 515 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:325` |

##### `encoding/json.typeEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:388`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new | +4.007 KiB | 0.0% → 100.0% | 0 B → 4.01 KiB | 0 → 256 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:402` |

##### `internal/strconv.fmtF` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460`)

| Change |       Delta |              % |                Size |   Objects | Location                                                                                          |
| -----: | ----------: | -------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------- |
|    new | +16.031 KiB |   0.0% → 80.0% |        0 B → 16 KiB | 0 → 1,026 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:469` |
| -75.0% | -12.046 KiB | 100.0% → 20.0% | 16.1 KiB → 4.02 KiB | 514 → 128 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:471` |

##### `runtime/pprof.(*pcDeck).tryAdd` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:555`)

| Change | Delta |      % |                Size | Objects | Location                                                                                        |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------- |
|  +2.2% | +90 B | 100.0% | 4.09 KiB → 4.17 KiB | 23 → 12 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:576` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |      Delta |      % |              Size |           Objects | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------: | ------------------------------------------------------------------------------------------------ |
|  -0.5% | -1.036 MiB | 100.0% | 227 MiB → 225 MiB | 516,805 → 509,686 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:784` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |        Delta |      % |              Size |               Objects | Location                                                                                          |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------------------------------------------------------------------------- |
|  -0.5% | -750.915 KiB | 100.0% | 162 MiB → 161 MiB | 5,517,901 → 5,476,113 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1189` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |        Delta |      % |                Size |           Objects | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------------- |
|  -2.9% | -170.667 KiB | 100.0% | 5.78 MiB → 5.61 MiB | 202,623 → 196,191 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1061` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

| Change |        Delta |      % |                Size |           Objects | Location                                                                                         |
| -----: | -----------: | -----: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------------ |
|  -1.6% | -116.226 KiB | 100.0% | 7.03 MiB → 6.92 MiB | 460,669 → 453,232 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:846` |

##### `encoding/json.(*scanner).pushParseState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`)

| Change |       Delta |      % |               Size |       Objects | Location                                                                                          |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------------------------------------------------------------------------------- |
| -26.1% | -28.502 KiB | 100.0% | 109 KiB → 80.9 KiB | 1,420 → 1,256 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:181` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |       Delta |      % |                Size |   Objects | Location                                                                                         |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------------------------------ |
| -40.0% | -24.424 KiB | 100.0% | 61.1 KiB → 36.6 KiB | 434 → 260 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:106` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

| Change |       Delta |      % |              Size |   Objects | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------------------------------- |
|  -4.8% | -18.907 KiB | 100.0% | 397 KiB → 378 KiB | 288 → 273 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:241` |

##### `compress/flate.newHuffmanEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:59`)

|  Change |      Delta |             % |           Size | Objects | Location                                                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------ |
| removed | -4.587 KiB | 100.0% → 0.0% | 4.59 KiB → 0 B |   4 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:60` |

##### `runtime/pprof.(*profileBuilder).appendLocsForStack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406`)

|  Change |      Delta |             % |           Size | Objects | Location                                                                                        |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------------------------------------------- |
| removed | -4.254 KiB | 100.0% → 0.0% | 4.25 KiB → 0 B |   8 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:440` |

##### `runtime/pprof.newProfileBuilder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259`)

|  Change |      Delta |             % |          Size | Objects | Location                                                                                        |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------- |
| removed | -4.101 KiB | 100.0% → 0.0% | 4.1 KiB → 0 B |  20 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:266` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |      Delta |      % |                Size |   Objects | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------------------------------------------------------------------------- |
| -14.3% | -4.031 KiB | 100.0% | 28.2 KiB → 24.2 KiB | 451 → 387 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:155` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |      Delta |      % |              Size |       Objects | Caller                 | Location                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------------: | ---------------------- | ---------------------------------------------------------------------------------------- |
|  +2.6% | +9.214 MiB | 100.0% | 359 MiB → 368 MiB | 4,523 → 5,092 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

| Change |        Delta |      % |              Size |                 Objects | Caller            | Location                                                                                   |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  +0.4% | +657.282 KiB | 100.0% | 164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |        Delta |      % |              Size |               Objects | Caller                                        | Location                                                                                          |
| -----: | -----------: | -----: | ----------------: | --------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.8% | +593.069 KiB | 100.0% | 32.4 MiB → 33 MiB | 2,082,853 → 2,122,692 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

| Change |        Delta |      % |                Size |           Objects | Caller                  | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.3% | +273.656 KiB | 100.0% | 19.8 MiB → 20.1 MiB | 127,224 → 128,153 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |        Delta |      % |                Size |           Objects | Caller                                         | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +2.8% | +264.774 KiB | 100.0% | 9.34 MiB → 9.59 MiB | 407,886 → 419,182 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.appendString[go.shape.string]` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999`)

| Change |       Delta |             % |               Size |       Objects | Caller                            | Location                                                                                         |
| -----: | ----------: | ------------: | -----------------: | ------------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| +23.8% | +20.058 KiB | 39.4% → 42.4% | 84.3 KiB → 104 KiB | 3,463 → 4,362 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  +9.1% | +11.882 KiB | 60.6% → 57.6% |  130 KiB → 142 KiB | 1,180 → 1,760 | `encoding/json.stringEncoder`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |       Delta |      % |              Size |               Objects | Caller                                        | Location                                                                                          |
| -----: | ----------: | -----: | ----------------: | --------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    ~0% | +49.591 KiB | 100.0% |           557 MiB | 1,848,453 → 1,853,047 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| -18.5% | -25.209 KiB |  <0.1% | 136 KiB → 111 KiB |             627 → 753 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `runtime/pprof.allFrames` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:209`)

| Change |       Delta |      % |              Size |       Objects | Caller                                               | Location                                                                                        |
| -----: | ----------: | -----: | ----------------: | ------------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  +7.8% | +16.402 KiB | 100.0% | 209 KiB → 226 KiB | 1,176 → 1,273 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |       Delta |             % |                Size |  Objects | Caller              | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | -------: | ------------------- | ------------------------------------------------------------------------------------------- |
| +25.9% | +13.192 KiB | 73.5% → 77.7% | 50.9 KiB → 64.1 KiB | 65 → 141 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
|    ~0% |        -1 B | 26.5% → 22.3% |            18.4 KiB |       16 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `runtime/pprof.(*protobuf).varint` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:14`)

|  Change |       Delta |             % |                Size | Objects | Caller                              | Location                                                                                          |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| +128.4% | +12.594 KiB | 33.8% → 59.9% | 9.81 KiB → 22.4 KiB |   5 → 9 | `runtime/pprof.(*protobuf).uint64`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:27` |
|  -24.0% |  -3.244 KiB | 46.6% → 27.5% | 13.5 KiB → 10.3 KiB |   2 → 1 | `runtime/pprof.(*protobuf).length`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:22` |
|  -16.9% |      -982 B | 19.6% → 12.6% | 5.69 KiB → 4.73 KiB |   1 → 3 | `runtime/pprof.(*protobuf).uint64s` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:33` |

##### `runtime/pprof.(*profileBuilder).stringIndex` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:133`)

| Change |     Delta |      % |                Size | Objects | Caller                                         | Location                                                                                        |
| -----: | --------: | -----: | ------------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +17.2% | +6.35 KiB | 100.0% | 36.8 KiB → 43.2 KiB |  15 → 6 | `runtime/pprof.(*profileBuilder).emitLocation` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589` |

##### `runtime/pprof.(*profMap).lookup` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/map.go:28`)

| Change |      Delta |      % |                Size | Objects | Caller                                       | Location                                                                                        |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +10.2% | +6.192 KiB | 100.0% | 60.7 KiB → 66.9 KiB |  8 → 11 | `runtime/pprof.(*profileBuilder).addCPUData` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:278` |

##### `runtime/pprof.(*profileBuilder).emitLocation` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589`)

| Change |      Delta |      % |              Size |   Objects | Caller                                               | Location                                                                                        |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  +4.0% | +5.533 KiB | 100.0% | 137 KiB → 142 KiB | 361 → 525 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `compress/flate.newHuffmanBitWriter` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94`)

| Change |      Delta |             % |           Size | Objects | Caller                              | Location                                                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
|    new | +4.238 KiB | 0.0% → 100.0% | 0 B → 4.24 KiB |   0 → 9 | `compress/flate.(*compressor).init` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/deflate.go:571` |

##### `compress/gzip.NewWriterLevel` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/gzip/gzip.go:60`)

| Change |      Delta |             % |           Size | Objects | Caller                            | Location                                                                                        |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------------------- | ----------------------------------------------------------------------------------------------- |
|    new | +4.078 KiB | 0.0% → 100.0% | 0 B → 4.08 KiB |  0 → 26 | `runtime/pprof.newProfileBuilder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |      Delta |     % |    Size |   Objects | Caller                | Location          |
| -----: | ---------: | ----: | ------: | --------: | --------------------- | ----------------- |
|    ~0% | +4.054 KiB | 99.0% | 181 MiB | 400 → 437 | `main.workload.func1` | `./profile.go:25` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |      Delta |             % |           Size | Objects | Caller      | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | ----------- | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `main.main` | `./profile.go:82` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change |      Delta |      % |                Size |   Objects | Caller                  | Location                                                                                         |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| +16.6% | +4.015 KiB | 100.0% | 24.2 KiB → 28.2 KiB | 407 → 515 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.typeEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:388`)

| Change |      Delta |             % |           Size | Objects | Caller                       | Location                                                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
|    new | +4.007 KiB | 0.0% → 100.0% | 0 B → 4.01 KiB | 0 → 256 | `encoding/json.valueEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:381` |

##### `internal/strconv.fmtF` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:460`)

| Change |      Delta |      % |              Size |     Objects | Caller                          | Location                                                                                          |
| -----: | ---------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| +24.8% | +3.984 KiB | 100.0% | 16.1 KiB → 20 KiB | 514 → 1,154 | `internal/strconv.formatDigits` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/strconv/ftoa.go:225` |

##### `runtime/pprof.(*pcDeck).tryAdd` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:555`)

| Change | Delta |      % |                Size | Objects | Caller                                               | Location                                                                                        |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  +2.2% | +90 B | 100.0% | 4.09 KiB → 4.17 KiB | 23 → 12 | `runtime/pprof.(*profileBuilder).appendLocsForStack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |      Delta |      % |              Size |           Objects | Caller                                      | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -0.5% | -1.036 MiB | 100.0% | 227 MiB → 225 MiB | 516,805 → 509,686 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |       Delta |             % |                Size |               Objects | Caller                                          | Location                                                                                          |
| -----: | ----------: | ------------: | ------------------: | --------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.0% | -774.58 KiB | 48.2% → 48.0% | 78.2 MiB → 77.4 MiB | 4,074,102 → 4,044,179 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|    ~0% | +23.665 KiB | 51.8% → 52.0% |              84 MiB | 1,443,799 → 1,431,934 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |        Delta |      % |                Size |           Objects | Caller                                        | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -2.9% | -170.667 KiB | 100.0% | 5.78 MiB → 5.61 MiB | 202,623 → 196,191 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

| Change |        Delta |      % |                Size |           Objects | Caller                                          | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.6% | -116.226 KiB | 100.0% | 7.03 MiB → 6.92 MiB | 460,669 → 453,232 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*scanner).pushParseState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`)

| Change |       Delta |      % |               Size |       Objects | Caller                          | Location                                                                                          |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| -26.1% | -28.502 KiB | 100.0% | 109 KiB → 80.9 KiB | 1,420 → 1,256 | `encoding/json.stateBeginValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

| Change |       Delta |      % |                Size |   Objects | Caller                | Location          |
| -----: | ----------: | -----: | ------------------: | --------: | --------------------- | ----------------- |
| -40.0% | -24.424 KiB | 100.0% | 61.1 KiB → 36.6 KiB | 434 → 260 | `main.workload.func1` | `./profile.go:25` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

| Change |       Delta |      % |              Size |   Objects | Caller             | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
|  -4.8% | -18.907 KiB | 100.0% | 397 KiB → 378 KiB | 288 → 273 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `compress/flate.newHuffmanEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:59`)

|  Change |      Delta |             % |           Size | Objects | Caller                               | Location                                                                                                     |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| removed | -4.587 KiB | 100.0% → 0.0% | 4.59 KiB → 0 B |   4 → 0 | `compress/flate.newHuffmanBitWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94` |

##### `runtime/pprof.(*profileBuilder).appendLocsForStack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:406`)

|  Change |      Delta |             % |           Size | Objects | Caller                                  | Location                                                                                        |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| removed | -4.254 KiB | 100.0% → 0.0% | 4.25 KiB → 0 B |   8 → 0 | `runtime/pprof.(*profileBuilder).build` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:348` |

##### `runtime/pprof.newProfileBuilder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:259`)

|  Change |      Delta |             % |          Size | Objects | Caller                        | Location                                                                                        |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------- | ----------------------------------------------------------------------------------------------- |
| removed | -4.101 KiB | 100.0% → 0.0% | 4.1 KiB → 0 B |  20 → 0 | `runtime/pprof.profileWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:922` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |      Delta |      % |                Size |   Objects | Caller                      | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| -14.3% | -4.031 KiB | 100.0% | 28.2 KiB → 24.2 KiB | 451 → 387 | `bytes.(*Buffer).WriteByte` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |                 Objects | Function                                        | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | ----------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +0.6% |   +9.991 MiB | 99.1% → 99.2% | 1.68 GiB → 1.69 GiB | 21,819,963 → 21,864,420 | `main.workload.func1`                           | `./profile.go:25`                                                                                 |
|  +2.6% |   +9.214 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,523 → 5,092 | `bytes.growSlice`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  +2.6% |   +9.214 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,523 → 5,092 | `bytes.(*Buffer).Write`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
|  +2.6% |    +9.21 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,974 → 5,479 | `bytes.(*Buffer).grow`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
|  +1.2% |   +8.854 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.mapEncoder.encode`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
|  +1.2% |   +8.854 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).reflectValue`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
|  +1.2% |   +8.854 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).marshal`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
|  +0.9% |   +8.844 MiB | 53.9% → 54.2% |   934 MiB → 943 MiB | 11,306,676 → 11,344,636 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  +1.2% |   +8.831 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,303,793 → 11,341,120 | `encoding/json.interfaceEncoder`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
|  +1.2% |    +8.67 MiB | 43.3% → 43.6% |   750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.arrayEncoder.encode`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
|  +1.2% |    +8.67 MiB | 43.3% → 43.6% |   750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.sliceEncoder.encode`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
|  +2.5% |    +5.14 MiB | 11.7% → 11.9% |   202 MiB → 207 MiB |           2,212 → 2,947 | `encoding/json.stringEncoder`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
|  +0.5% | +774.164 KiB |          8.3% |   143 MiB → 144 MiB |   4,114,545 → 4,136,011 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|  +0.4% | +657.282 KiB |          9.5% |   164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`       |
|  +0.4% | +657.282 KiB |          9.5% |   164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.copyVal`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`        |
|  +0.4% | +360.703 KiB |          4.7% | 82.1 MiB → 82.5 MiB |   5,382,139 → 5,405,226 | `reflect.(*MapIter).Key`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`           |
|  +0.4% | +296.579 KiB |   4.8% → 4.7% | 82.3 MiB → 82.6 MiB |   5,396,502 → 5,415,484 | `reflect.(*MapIter).Value`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`           |
|  +1.3% | +273.656 KiB |   1.1% → 1.2% | 19.8 MiB → 20.1 MiB |       127,224 → 128,153 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
|    ~0% | +159.313 KiB | 45.8% → 45.6% |             794 MiB | 10,646,327 → 10,648,354 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|    ~0% | +147.802 KiB | 45.8% → 45.6% |             793 MiB | 10,634,576 → 10,639,503 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### Standard library

| Change |        Delta |             % |                Size |                 Objects | Function                                        | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | ----------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +2.6% |   +9.214 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,523 → 5,092 | `bytes.growSlice`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  +2.6% |   +9.214 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,523 → 5,092 | `bytes.(*Buffer).Write`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
|  +2.6% |    +9.21 MiB | 20.7% → 21.2% |   359 MiB → 368 MiB |           4,974 → 5,479 | `bytes.(*Buffer).grow`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
|  +1.2% |   +8.854 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.mapEncoder.encode`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
|  +1.2% |   +8.854 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).reflectValue`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
|  +1.2% |   +8.854 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).marshal`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
|  +0.9% |   +8.844 MiB | 53.9% → 54.2% |   934 MiB → 943 MiB | 11,306,676 → 11,344,636 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  +1.2% |   +8.831 MiB | 43.3% → 43.6% |   750 MiB → 759 MiB | 11,303,793 → 11,341,120 | `encoding/json.interfaceEncoder`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
|  +1.2% |    +8.67 MiB | 43.3% → 43.6% |   750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.arrayEncoder.encode`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
|  +1.2% |    +8.67 MiB | 43.3% → 43.6% |   750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.sliceEncoder.encode`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
|  +2.5% |    +5.14 MiB | 11.7% → 11.9% |   202 MiB → 207 MiB |           2,212 → 2,947 | `encoding/json.stringEncoder`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
|  +0.5% | +774.164 KiB |          8.3% |   143 MiB → 144 MiB |   4,114,545 → 4,136,011 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|  +0.4% | +657.282 KiB |          9.5% |   164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.unsafe_New`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`       |
|  +0.4% | +657.282 KiB |          9.5% |   164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.copyVal`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`        |
|  +0.4% | +360.703 KiB |          4.7% | 82.1 MiB → 82.5 MiB |   5,382,139 → 5,405,226 | `reflect.(*MapIter).Key`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`           |
|  +0.4% | +296.579 KiB |   4.8% → 4.7% | 82.3 MiB → 82.6 MiB |   5,396,502 → 5,415,484 | `reflect.(*MapIter).Value`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`           |
|  +1.3% | +273.656 KiB |   1.1% → 1.2% | 19.8 MiB → 20.1 MiB |       127,224 → 128,153 | `encoding/json.unquoteBytes`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |
|    ~0% | +159.313 KiB | 45.8% → 45.6% |             794 MiB | 10,646,327 → 10,648,354 | `encoding/json.(*decodeState).valueInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|    ~0% | +147.802 KiB | 45.8% → 45.6% |             793 MiB | 10,634,576 → 10,639,503 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|    ~0% | +118.072 KiB | 45.9% → 45.6% |             794 MiB | 10,648,236 → 10,649,363 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |               Objects | Function                                         | Location                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
|  -10.4% |   -1.002 MiB |   0.6% → 0.5% | 9.67 MiB → 8.66 MiB |     109,927 → 108,044 | `main.leakWorkers.func1`                         | `./profile.go:56`                                                                                             |
|   -0.3% | -477.258 KiB | 10.5% → 10.4% |             182 MiB | 5,645,125 → 5,604,266 | `encoding/json.unquote`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`             |
|   -1.6% | -116.226 KiB |          0.4% | 7.03 MiB → 6.92 MiB |     460,669 → 453,232 | `encoding/json.(*decodeState).convertNumber`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`              |
|   -3.7% |  -79.024 KiB |          0.1% | 2.09 MiB → 2.01 MiB |       27,902 → 24,114 | `main.leakWorkers`                               | `./profile.go:49`                                                                                             |
|   -2.0% |  -79.024 KiB |          0.2% | 3.83 MiB → 3.75 MiB |       27,956 → 24,168 | `main.main`                                      | `./profile.go:82`                                                                                             |
|   -2.0% |  -79.024 KiB |          0.2% | 3.83 MiB → 3.75 MiB |       27,956 → 24,168 | `runtime.main`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`                      |
|  -18.9% |  -47.268 KiB |         <0.1% |   251 KiB → 203 KiB |             182 → 147 | `sync.(*Pool).Get`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`                         |
|  -15.7% |  -43.252 KiB |         <0.1% |   275 KiB → 231 KiB |             589 → 662 | `encoding/json.newEncodeState`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`              |
|  -26.1% |  -28.502 KiB |         <0.1% |  109 KiB → 80.9 KiB |         1,420 → 1,256 | `encoding/json.(*scanner).pushParseState`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`             |
|  -26.1% |  -28.502 KiB |         <0.1% |  109 KiB → 80.9 KiB |         1,420 → 1,256 | `encoding/json.stateBeginValue`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217`             |
|  -26.1% |  -28.502 KiB |         <0.1% |  109 KiB → 80.9 KiB |         1,420 → 1,256 | `encoding/json.checkValid`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`              |
|  -48.3% |  -22.387 KiB |         <0.1% | 46.3 KiB → 23.9 KiB |               50 → 17 | `runtime.park_m`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`                     |
|   -4.8% |  -18.907 KiB |         <0.1% |   397 KiB → 378 KiB |             288 → 273 | `sync.(*Pool).pinSlow`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`                         |
|   -4.8% |  -18.907 KiB |         <0.1% |   397 KiB → 378 KiB |             288 → 273 | `sync.(*Pool).pin`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`                         |
|  -37.4% |  -17.305 KiB |         <0.1% |   46.3 KiB → 29 KiB |               50 → 19 | `runtime.mcall`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`                  |
| removed |  -13.509 KiB |  <0.1% → 0.0% |      13.5 KiB → 0 B |                 2 → 0 | `runtime/pprof.(*protobuf).endMessage`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:132`            |
|  -50.0% |   -5.229 KiB |         <0.1% | 10.5 KiB → 5.23 KiB |                 4 → 2 | `compress/flate.(*huffmanBitWriter).indexTokens` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:530` |
| removed |   -4.587 KiB |  <0.1% → 0.0% |      4.59 KiB → 0 B |                 4 → 0 | `compress/flate.newHuffmanEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:59`        |
|  -15.8% |    -4.24 KiB |         <0.1% | 26.8 KiB → 22.6 KiB |               34 → 25 | `runtime.mcommoninit`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`                      |
|  -50.0% |   -4.239 KiB |         <0.1% | 8.48 KiB → 4.24 KiB |                18 → 9 | `runtime.mpreinit`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328`                 |

##### Standard library

|  Change |        Delta |             % |                Size |               Objects | Function                                         | Location                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
|   -0.3% | -477.258 KiB | 10.5% → 10.4% |             182 MiB | 5,645,125 → 5,604,266 | `encoding/json.unquote`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`             |
|   -1.6% | -116.226 KiB |          0.4% | 7.03 MiB → 6.92 MiB |     460,669 → 453,232 | `encoding/json.(*decodeState).convertNumber`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`              |
|   -2.0% |  -79.024 KiB |          0.2% | 3.83 MiB → 3.75 MiB |       27,956 → 24,168 | `runtime.main`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`                      |
|  -18.9% |  -47.268 KiB |         <0.1% |   251 KiB → 203 KiB |             182 → 147 | `sync.(*Pool).Get`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`                         |
|  -15.7% |  -43.252 KiB |         <0.1% |   275 KiB → 231 KiB |             589 → 662 | `encoding/json.newEncodeState`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`              |
|  -26.1% |  -28.502 KiB |         <0.1% |  109 KiB → 80.9 KiB |         1,420 → 1,256 | `encoding/json.(*scanner).pushParseState`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`             |
|  -26.1% |  -28.502 KiB |         <0.1% |  109 KiB → 80.9 KiB |         1,420 → 1,256 | `encoding/json.stateBeginValue`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217`             |
|  -26.1% |  -28.502 KiB |         <0.1% |  109 KiB → 80.9 KiB |         1,420 → 1,256 | `encoding/json.checkValid`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`              |
|  -48.3% |  -22.387 KiB |         <0.1% | 46.3 KiB → 23.9 KiB |               50 → 17 | `runtime.park_m`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`                     |
|   -4.8% |  -18.907 KiB |         <0.1% |   397 KiB → 378 KiB |             288 → 273 | `sync.(*Pool).pinSlow`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`                         |
|   -4.8% |  -18.907 KiB |         <0.1% |   397 KiB → 378 KiB |             288 → 273 | `sync.(*Pool).pin`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`                         |
|  -37.4% |  -17.305 KiB |         <0.1% |   46.3 KiB → 29 KiB |               50 → 19 | `runtime.mcall`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`                  |
| removed |  -13.509 KiB |  <0.1% → 0.0% |      13.5 KiB → 0 B |                 2 → 0 | `runtime/pprof.(*protobuf).endMessage`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:132`            |
|  -50.0% |   -5.229 KiB |         <0.1% | 10.5 KiB → 5.23 KiB |                 4 → 2 | `compress/flate.(*huffmanBitWriter).indexTokens` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:530` |
| removed |   -4.587 KiB |  <0.1% → 0.0% |      4.59 KiB → 0 B |                 4 → 0 | `compress/flate.newHuffmanEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:59`        |
|  -15.8% |    -4.24 KiB |         <0.1% | 26.8 KiB → 22.6 KiB |               34 → 25 | `runtime.mcommoninit`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`                      |
|  -50.0% |   -4.239 KiB |         <0.1% | 8.48 KiB → 4.24 KiB |                18 → 9 | `runtime.mpreinit`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328`                 |
|  -14.3% |   -4.031 KiB |         <0.1% | 28.2 KiB → 24.2 KiB |             451 → 387 | `bytes.(*Buffer).WriteByte`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303`                      |
|   -5.6% |   -3.396 KiB |         <0.1% | 60.7 KiB → 57.3 KiB |               64 → 48 | `runtime.allocm`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`                     |
|   -5.6% |   -3.396 KiB |         <0.1% | 60.7 KiB → 57.3 KiB |               64 → 48 | `runtime.newm`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`                     |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

| Change |      Delta |      % |              Size |       Objects | Caller                 | Location                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------------: | ---------------------- | ---------------------------------------------------------------------------------------- |
|  +2.6% | +9.214 MiB | 100.0% | 359 MiB → 368 MiB | 4,523 → 5,092 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

| Change |       Delta |     % |                Size |       Objects | Caller                              | Location                                                                                         |
| -----: | ----------: | ----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +2.5% |  +5.128 MiB | 56.3% |   202 MiB → 207 MiB | 1,032 → 1,187 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
|  +2.6% |  +4.065 MiB | 43.7% |   157 MiB → 161 MiB | 3,199 → 3,450 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| +55.6% | +20.314 KiB | <0.1% | 36.6 KiB → 56.9 KiB |     292 → 455 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |      Delta |      % |                Size |       Objects | Caller                      | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------------- | ---------------------------------------------------------------------------------------- |
|  +2.6% | +9.214 MiB | 100.0% |   359 MiB → 368 MiB | 4,523 → 5,092 | `bytes.(*Buffer).Write`     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |
| -14.3% | -4.031 KiB |  <0.1% | 28.2 KiB → 24.2 KiB |     451 → 387 | `bytes.(*Buffer).WriteByte` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |      Delta |      % |              Size |                 Objects | Caller                                      | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.854 MiB | 100.0% | 750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

| Change |      Delta |      % |              Size |                 Objects | Caller                                 | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.854 MiB | 100.0% | 750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
|  +1.2% | +8.831 MiB | 100.0% | 750 MiB → 759 MiB | 11,303,793 → 11,341,120 | `encoding/json.interfaceEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

| Change |      Delta |      % |              Size |                 Objects | Caller                  | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.854 MiB | 100.0% | 750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |      Delta |             % |                Size |                 Objects | Caller                   | Location          |
| -----: | ---------: | ------------: | ------------------: | ----------------------: | ------------------------ | ----------------- |
|  +1.1% | +9.846 MiB | 99.0% → 99.1% |   924 MiB → 934 MiB | 11,196,749 → 11,236,592 | `main.workload.func1`    | `./profile.go:25` |
| -10.4% | -1.002 MiB |   1.0% → 0.9% | 9.67 MiB → 8.66 MiB |       109,927 → 108,044 | `main.leakWorkers.func1` | `./profile.go:56` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

| Change |      Delta |      % |              Size |                 Objects | Caller                              | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.831 MiB | 100.0% | 750 MiB → 759 MiB | 11,303,793 → 11,341,120 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  +1.2% |  +8.67 MiB |  99.9% | 750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

| Change |     Delta |      % |              Size |                 Objects | Caller                              | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.67 MiB | 100.0% | 750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

| Change |     Delta |      % |              Size |                 Objects | Caller                                      | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.67 MiB | 100.0% | 750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

| Change |     Delta |      % |              Size |       Objects | Caller                                      | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +2.5% | +5.14 MiB | 100.0% | 202 MiB → 207 MiB | 2,212 → 2,947 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |        Delta |      % |              Size |               Objects | Caller                                        | Location                                                                                          |
| -----: | -----------: | -----: | ----------------: | --------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +0.5% | +774.164 KiB | 100.0% | 143 MiB → 144 MiB | 4,114,545 → 4,136,011 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`)

| Change |        Delta |      % |              Size |                 Objects | Caller            | Location                                                                                   |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  +0.4% | +657.282 KiB | 100.0% | 164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`)

| Change |        Delta |             % |                Size |               Objects | Caller                     | Location                                                                                |
| -----: | -----------: | ------------: | ------------------: | --------------------: | -------------------------- | --------------------------------------------------------------------------------------- |
|  +0.4% | +360.703 KiB | 49.9% → 50.0% | 82.1 MiB → 82.5 MiB | 5,382,139 → 5,405,226 | `reflect.(*MapIter).Key`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245` |
|  +0.4% | +296.579 KiB | 50.1% → 50.0% | 82.3 MiB → 82.6 MiB | 5,396,502 → 5,415,484 | `reflect.(*MapIter).Value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289` |

##### `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`)

| Change |        Delta |      % |                Size |               Objects | Caller                            | Location                                                                                         |
| -----: | -----------: | -----: | ------------------: | --------------------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.4% | +360.703 KiB | 100.0% | 82.1 MiB → 82.5 MiB | 5,382,139 → 5,405,226 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`)

| Change |        Delta |      % |                Size |               Objects | Caller                            | Location                                                                                         |
| -----: | -----------: | -----: | ------------------: | --------------------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.4% | +296.579 KiB | 100.0% | 82.3 MiB → 82.6 MiB | 5,396,502 → 5,415,484 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`)

| Change |        Delta |      % |                Size |           Objects | Caller                  | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ----------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.3% | +273.656 KiB | 100.0% | 19.8 MiB → 20.1 MiB | 127,224 → 128,153 | `encoding/json.unquote` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |        Delta |      % |              Size |                 Objects | Caller                                         | Location                                                                                          |
| -----: | -----------: | -----: | ----------------: | ----------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    ~0% | +182.119 KiB |  99.7% | 791 MiB → 792 MiB | 10,632,030 → 10,635,884 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
|    ~0% | +159.313 KiB | 100.0% |           794 MiB | 10,646,327 → 10,648,354 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |        Delta |      % |    Size |                 Objects | Caller                                        | Location                                                                                          |
| -----: | -----------: | -----: | ------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    ~0% | +147.802 KiB | 100.0% | 793 MiB | 10,634,576 → 10,639,503 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |        Delta |      % |    Size |                 Objects | Caller                                        | Location                                                                                          |
| -----: | -----------: | -----: | ------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    ~0% | +197.641 KiB |  99.8% | 792 MiB | 10,643,268 → 10,644,393 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
|    ~0% | +118.072 KiB | 100.0% | 794 MiB | 10,648,236 → 10,649,363 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |        Delta |             % |                Size |               Objects | Caller                                          | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.0% |  -774.58 KiB | 43.0% → 42.7% | 78.2 MiB → 77.4 MiB | 4,074,102 → 4,044,179 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  +0.3% | +297.321 KiB | 57.0% → 57.3% |             104 MiB | 1,571,023 → 1,560,087 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).convertNumber` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`)

| Change |        Delta |      % |                Size |           Objects | Caller                                          | Location                                                                                          |
| -----: | -----------: | -----: | ------------------: | ----------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.6% | -116.226 KiB | 100.0% | 7.03 MiB → 6.92 MiB | 460,669 → 453,232 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |       Delta |      % |                Size |         Objects | Caller      | Location          |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------- | ----------------- |
|  -3.7% | -79.024 KiB | 100.0% | 2.09 MiB → 2.01 MiB | 27,902 → 24,114 | `main.main` | `./profile.go:82` |

##### `main.main` (`./profile.go:82`)

| Change |       Delta |      % |                Size |         Objects | Caller         | Location                                                                                 |
| -----: | ----------: | -----: | ------------------: | --------------: | -------------- | ---------------------------------------------------------------------------------------- |
|  -2.0% | -79.024 KiB | 100.0% | 3.83 MiB → 3.75 MiB | 27,956 → 24,168 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

##### `sync.(*Pool).Get` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`)

| Change |       Delta |      % |              Size |   Objects | Caller                         | Location                                                                                         |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| -18.9% | -47.268 KiB | 100.0% | 251 KiB → 203 KiB | 182 → 147 | `encoding/json.newEncodeState` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change |       Delta |      % |              Size |   Objects | Caller                  | Location                                                                                         |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| -15.7% | -43.252 KiB | 100.0% | 275 KiB → 231 KiB | 589 → 662 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.(*scanner).pushParseState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180`)

| Change |       Delta |      % |               Size |       Objects | Caller                          | Location                                                                                          |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| -26.1% | -28.502 KiB | 100.0% | 109 KiB → 80.9 KiB | 1,420 → 1,256 | `encoding/json.stateBeginValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217` |

##### `encoding/json.stateBeginValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217`)

| Change |       Delta |             % |               Size |       Objects | Caller                     | Location                                                                                         |
| -----: | ----------: | ------------: | -----------------: | ------------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| -27.1% | -28.502 KiB | 96.3% → 95.0% | 105 KiB → 76.9 KiB | 1,292 → 1,128 | `encoding/json.checkValid` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

| Change |       Delta |      % |               Size |       Objects | Caller                    | Location                                                                                         |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| -26.1% | -28.502 KiB | 100.0% | 109 KiB → 80.9 KiB | 1,420 → 1,256 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |       Delta |      % |                Size | Objects | Caller          | Location                                                                                     |
| -----: | ----------: | -----: | ------------------: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| -48.3% | -22.387 KiB | 100.0% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `sync.(*Pool).pinSlow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223`)

| Change |       Delta |      % |              Size |   Objects | Caller             | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
|  -4.8% | -18.907 KiB | 100.0% | 397 KiB → 378 KiB | 288 → 273 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `sync.(*Pool).pin` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`)

| Change |       Delta |             % |              Size |   Objects | Caller             | Location                                                                              |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
| -18.9% | -47.268 KiB | 63.1% → 53.7% | 251 KiB → 203 KiB | 182 → 147 | `sync.(*Pool).Get` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131` |
| +19.4% | +28.361 KiB | 36.9% → 46.3% | 147 KiB → 175 KiB | 106 → 126 | `sync.(*Pool).Put` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99`  |

##### `runtime/pprof.(*protobuf).endMessage` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:132`)

|  Change |      Delta |            % |           Size | Objects | Caller                                         | Location                                                                                        |
| ------: | ---------: | -----------: | -------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| removed | -7.182 KiB | 53.2% → 0.0% | 7.18 KiB → 0 B |   1 → 0 | `runtime/pprof.(*profileBuilder).pbLine`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:181` |
| removed | -6.327 KiB | 46.8% → 0.0% | 6.33 KiB → 0 B |   1 → 0 | `runtime/pprof.(*profileBuilder).emitLocation` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/proto.go:589` |

##### `compress/flate.(*huffmanBitWriter).indexTokens` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:530`)

| Change |      Delta |      % |                Size | Objects | Caller                                                 | Location                                                                                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| -50.0% | -5.229 KiB | 100.0% | 10.5 KiB → 5.23 KiB |   4 → 2 | `compress/flate.(*huffmanBitWriter).writeBlockDynamic` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:498` |

##### `compress/flate.newHuffmanEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:59`)

|  Change |      Delta |             % |           Size | Objects | Caller                               | Location                                                                                                     |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| removed | -4.587 KiB | 100.0% → 0.0% | 4.59 KiB → 0 B |   4 → 0 | `compress/flate.newHuffmanBitWriter` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:94` |

##### `runtime.mcommoninit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`)

| Change |     Delta |      % |                Size | Objects | Caller           | Location                                                                                  |
| -----: | --------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| -15.8% | -4.24 KiB | 100.0% | 26.8 KiB → 22.6 KiB | 34 → 25 | `runtime.allocm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |

##### `runtime.mpreinit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328`)

| Change |      Delta |      % |                Size | Objects | Caller                | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| -50.0% | -4.239 KiB | 100.0% | 8.48 KiB → 4.24 KiB |  18 → 9 | `runtime.mcommoninit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998` |

##### `bytes.(*Buffer).WriteByte` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303`)

| Change |      Delta |      % |                Size |   Objects | Caller                            | Location                                                                                         |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| -14.3% | -4.031 KiB | 100.0% | 28.2 KiB → 24.2 KiB | 451 → 387 | `encoding/json.mapEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

| Change |      Delta |      % |                Size | Objects | Caller         | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
|  -5.6% | -3.396 KiB | 100.0% | 60.7 KiB → 57.3 KiB | 64 → 48 | `runtime.newm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857` |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

| Change |      Delta |      % |                Size | Objects | Caller           | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
|  -5.6% | -3.396 KiB | 100.0% | 60.7 KiB → 57.3 KiB | 64 → 48 | `runtime.startm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3035` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main.workload.func1` (`./profile.go:25`)

| Change |        Delta |             % |              Size |                 Objects | Callee                    | Location                                                                                         |
| -----: | -----------: | ------------: | ----------------: | ----------------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.1% |   +9.846 MiB | 53.9% → 54.1% | 924 MiB → 934 MiB | 11,196,749 → 11,236,592 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|    ~0% | +148.223 KiB | 46.1% → 45.9% |           792 MiB | 10,622,188 → 10,626,802 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

| Change |      Delta |      % |              Size |       Objects | Callee                 | Location                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------------: | ---------------------- | ---------------------------------------------------------------------------------------- |
|  +2.6% | +9.214 MiB | 100.0% | 359 MiB → 368 MiB | 4,523 → 5,092 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

| Change |      Delta |      % |              Size |       Objects | Callee            | Location                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------------: | ----------------- | ---------------------------------------------------------------------------------------- |
|  +2.6% | +9.214 MiB | 100.0% | 359 MiB → 368 MiB | 4,523 → 5,092 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

| Change |        Delta |             % |                Size |                 Objects | Callee                                        | Location                                                                                         |
| -----: | -----------: | ------------: | ------------------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% |   +8.831 MiB |        100.0% |   750 MiB → 759 MiB | 11,303,793 → 11,341,120 | `encoding/json.interfaceEncoder`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
|  +2.6% |   +4.065 MiB | 20.9% → 21.2% |   157 MiB → 161 MiB |           3,199 → 3,450 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  +0.4% | +360.703 KiB |         10.9% | 82.1 MiB → 82.5 MiB |   5,382,139 → 5,405,226 | `reflect.(*MapIter).Key`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`          |
|  +0.4% | +296.579 KiB | 11.0% → 10.9% | 82.3 MiB → 82.6 MiB |   5,396,502 → 5,415,484 | `reflect.(*MapIter).Value`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`          |
| +23.8% |  +20.058 KiB |         <0.1% |  84.3 KiB → 104 KiB |           3,463 → 4,362 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

| Change |       Delta |             % |                Size |                 Objects | Callee                              | Location                                                                                         |
| -----: | ----------: | ------------: | ------------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% |  +8.854 MiB |        100.0% |   750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
|  +1.2% |   +8.67 MiB |         99.9% |   750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |
|  +2.5% |   +5.14 MiB | 27.0% → 27.3% |   202 MiB → 207 MiB |           2,212 → 2,947 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| +46.2% | +24.298 KiB |         <0.1% | 52.6 KiB → 76.9 KiB |             806 → 1,609 | `encoding/json.floatEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:571` |
|    new |  +4.007 KiB |  0.0% → <0.1% |      0 B → 4.01 KiB |                 0 → 256 | `encoding/json.valueEncoder`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:381` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

| Change |      Delta |      % |              Size |                 Objects | Callee                                      | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.854 MiB | 100.0% | 750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |       Delta |             % |              Size |                 Objects | Callee                                 | Location                                                                                         |
| -----: | ----------: | ------------: | ----------------: | ----------------------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% |  +8.854 MiB | 80.4% → 80.5% | 750 MiB → 759 MiB | 11,305,577 → 11,343,407 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |
| -15.7% | -43.252 KiB |         <0.1% | 275 KiB → 231 KiB |               589 → 662 | `encoding/json.newEncodeState`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315` |
| +19.4% | +28.361 KiB |         <0.1% | 147 KiB → 175 KiB |               106 → 126 | `sync.(*Pool).Put`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:99`             |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

| Change |      Delta |      % |              Size |                 Objects | Callee                                      | Location                                                                                         |
| -----: | ---------: | -----: | ----------------: | ----------------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.831 MiB | 100.0% | 750 MiB → 759 MiB | 11,303,793 → 11,341,120 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

| Change |     Delta |      % |              Size |                 Objects | Callee                           | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ----------------------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.67 MiB | 100.0% | 750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

| Change |     Delta |      % |              Size |                 Objects | Callee                              | Location                                                                                         |
| -----: | --------: | -----: | ----------------: | ----------------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +1.2% | +8.67 MiB | 100.0% | 750 MiB → 758 MiB | 11,295,047 → 11,327,573 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

| Change |       Delta |     % |              Size |       Objects | Callee                                        | Location                                                                                         |
| -----: | ----------: | ----: | ----------------: | ------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +2.5% |  +5.128 MiB | 99.9% | 202 MiB → 207 MiB | 1,032 → 1,187 | `bytes.(*Buffer).Write`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`         |
|  +9.1% | +11.882 KiB |  0.1% | 130 KiB → 142 KiB | 1,180 → 1,760 | `encoding/json.appendString[go.shape.string]` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:999` |

##### `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`)

| Change |        Delta |             % |                Size |               Objects | Callee                                       | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | --------------------: | -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +0.3% | +297.321 KiB | 72.5% → 72.3% |             104 MiB | 1,571,023 → 1,560,087 | `encoding/json.unquote`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|  -1.6% | -116.226 KiB |   4.9% → 4.8% | 7.03 MiB → 6.92 MiB |     460,669 → 453,232 | `encoding/json.(*decodeState).convertNumber` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:838`  |

##### `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`)

| Change |        Delta |      % |              Size |                 Objects | Callee               | Location                                                                                    |
| -----: | -----------: | -----: | ----------------: | ----------------------: | -------------------- | ------------------------------------------------------------------------------------------- |
|  +0.4% | +657.282 KiB | 100.0% | 164 MiB → 165 MiB | 10,778,641 → 10,820,710 | `reflect.unsafe_New` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177` |

##### `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`)

| Change |        Delta |      % |                Size |               Objects | Callee            | Location                                                                                   |
| -----: | -----------: | -----: | ------------------: | --------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  +0.4% | +360.703 KiB | 100.0% | 82.1 MiB → 82.5 MiB | 5,382,139 → 5,405,226 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`)

| Change |        Delta |      % |                Size |               Objects | Callee            | Location                                                                                   |
| -----: | -----------: | -----: | ------------------: | --------------------: | ----------------- | ------------------------------------------------------------------------------------------ |
|  +0.4% | +296.579 KiB | 100.0% | 82.3 MiB → 82.6 MiB | 5,396,502 → 5,415,484 | `reflect.copyVal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

| Change |        Delta |             % |              Size |                 Objects | Callee                                          | Location                                                                                          |
| -----: | -----------: | ------------: | ----------------: | ----------------------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  +0.5% | +774.164 KiB | 18.0% → 18.1% | 143 MiB → 144 MiB |   4,114,545 → 4,136,011 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|    ~0% | +197.641 KiB |         99.8% |           792 MiB | 10,643,268 → 10,644,393 | `encoding/json.(*decodeState).objectInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|    ~0% | +147.802 KiB |         99.9% |           793 MiB | 10,634,576 → 10,639,503 | `encoding/json.(*decodeState).arrayInterface`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

| Change |        Delta |     % |              Size |                 Objects | Callee                                        | Location                                                                                          |
| -----: | -----------: | ----: | ----------------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    ~0% | +182.119 KiB | 99.8% | 791 MiB → 792 MiB | 10,632,030 → 10,635,884 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

| Change |        Delta |           % |                Size |                 Objects | Callee                                        | Location                                                                                          |
| -----: | -----------: | ----------: | ------------------: | ----------------------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -1.0% |  -774.58 KiB | 9.9% → 9.8% | 78.2 MiB → 77.4 MiB |   4,074,102 → 4,044,179 | `encoding/json.unquote`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187` |
|    ~0% | +159.313 KiB |      100.0% |             794 MiB | 10,646,327 → 10,648,354 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `main.leakWorkers.func1` (`./profile.go:56`)

| Change |      Delta |      % |                Size |           Objects | Callee                  | Location                                                                                         |
| -----: | ---------: | -----: | ------------------: | ----------------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| -10.4% | -1.002 MiB | 100.0% | 9.67 MiB → 8.66 MiB | 109,927 → 108,044 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`)

| Change |        Delta |             % |                Size |           Objects | Callee                       | Location                                                                                          |
| -----: | -----------: | ------------: | ------------------: | ----------------: | ---------------------------- | ------------------------------------------------------------------------------------------------- |
|  +1.3% | +273.656 KiB | 10.9% → 11.1% | 19.8 MiB → 20.1 MiB | 127,224 → 128,153 | `encoding/json.unquoteBytes` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |       Delta |              % |                Size |         Objects | Callee                    | Location                                                                                         |
| -----: | ----------: | -------------: | ------------------: | --------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  -3.9% | -83.079 KiB | 100.0% → 99.8% | 2.09 MiB → 2.01 MiB | 27,902 → 24,077 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `main.main` (`./profile.go:82`)

| Change |       Delta |             % |                Size |         Objects | Callee             | Location          |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------ | ----------------- |
|  -3.7% | -79.024 KiB | 54.6% → 53.6% | 2.09 MiB → 2.01 MiB | 27,902 → 24,114 | `main.leakWorkers` | `./profile.go:49` |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

| Change |       Delta |      % |                Size |         Objects | Callee      | Location          |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------- | ----------------- |
|  -2.0% | -79.024 KiB | 100.0% | 3.83 MiB → 3.75 MiB | 27,956 → 24,168 | `main.main` | `./profile.go:82` |

##### `sync.(*Pool).Get` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131`)

| Change |       Delta |      % |              Size |   Objects | Callee             | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
| -18.9% | -47.268 KiB | 100.0% | 251 KiB → 203 KiB | 182 → 147 | `sync.(*Pool).pin` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202` |

##### `encoding/json.newEncodeState` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:315`)

| Change |       Delta |             % |              Size |   Objects | Callee             | Location                                                                              |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------ | ------------------------------------------------------------------------------------- |
| -18.9% | -47.268 KiB | 91.2% → 87.8% | 251 KiB → 203 KiB | 182 → 147 | `sync.(*Pool).Get` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:131` |

##### `encoding/json.stateBeginValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217`)

| Change |       Delta |      % |               Size |       Objects | Callee                                    | Location                                                                                          |
| -----: | ----------: | -----: | -----------------: | ------------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| -26.1% | -28.502 KiB | 100.0% | 109 KiB → 80.9 KiB | 1,420 → 1,256 | `encoding/json.(*scanner).pushParseState` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:180` |

##### `encoding/json.checkValid` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33`)

| Change |       Delta |             % |               Size |       Objects | Callee                          | Location                                                                                          |
| -----: | ----------: | ------------: | -----------------: | ------------: | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| -27.1% | -28.502 KiB | 96.3% → 95.0% | 105 KiB → 76.9 KiB | 1,292 → 1,128 | `encoding/json.stateBeginValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:217` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |       Delta |      % |                Size | Objects | Callee             | Location                                                                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| -48.3% | -22.387 KiB | 100.0% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `sync.(*Pool).pin` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:202`)

| Change |       Delta |      % |              Size |   Objects | Callee                 | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- | ------------------------------------------------------------------------------------- |
|  -4.8% | -18.907 KiB | 100.0% | 397 KiB → 378 KiB | 288 → 273 | `sync.(*Pool).pinSlow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/pool.go:223` |

##### `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)

| Change |       Delta |              % |                Size | Objects | Callee                        | Location                                                                                    |
| -----: | ----------: | -------------: | ------------------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| -48.3% | -22.387 KiB | 100.0% → 82.5% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.park_m`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`   |
|    new |  +5.082 KiB |   0.0% → 17.5% |      0 B → 5.08 KiB |   0 → 2 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime/pprof.(*protobuf).endMessage` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:132`)

|  Change |       Delta |             % |           Size | Objects | Callee                             | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -13.509 KiB | 100.0% → 0.0% | 13.5 KiB → 0 B |   2 → 0 | `runtime/pprof.(*protobuf).length` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/protobuf.go:22` |

##### `compress/flate.(*huffmanBitWriter).indexTokens` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_bit_writer.go:530`)

| Change |      Delta |      % |                Size | Objects | Callee                                      | Location                                                                                                |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -50.0% | -5.229 KiB | 100.0% | 10.5 KiB → 5.23 KiB |   4 → 2 | `compress/flate.(*huffmanEncoder).generate` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/compress/flate/huffman_code.go:272` |

##### `runtime.mcommoninit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`)

| Change |      Delta |             % |                Size | Objects | Callee                   | Location                                                                                      |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------- |
| -50.0% | -4.239 KiB | 31.6% → 18.8% | 8.48 KiB → 4.24 KiB |  18 → 9 | `runtime.mpreinit`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328` |
|    ~0% |       -1 B | 68.4% → 81.2% |            18.4 KiB |      16 | `runtime.mProfStackInit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1043`     |

##### `runtime.mpreinit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328`)

| Change |      Delta |      % |                Size | Objects | Callee         | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| -50.0% | -4.239 KiB | 100.0% | 8.48 KiB → 4.24 KiB |  18 → 9 | `runtime.malg` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273` |

##### `bytes.(*Buffer).WriteByte` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:303`)

| Change |      Delta |      % |                Size |   Objects | Callee                 | Location                                                                                 |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| -14.3% | -4.031 KiB | 100.0% | 28.2 KiB → 24.2 KiB | 451 → 387 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`)

| Change |      Delta |             % |                Size | Objects | Callee                | Location                                                                                    |
| -----: | ---------: | ------------: | ------------------: | ------: | --------------------- | ------------------------------------------------------------------------------------------- |
| +20.0% | +5.082 KiB | 41.9% → 53.2% | 25.4 KiB → 30.5 KiB | 12 → 14 | `runtime.newobject`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
| -15.8% |  -4.24 KiB | 44.2% → 39.4% | 26.8 KiB → 22.6 KiB | 34 → 25 | `runtime.mcommoninit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`    |
| -50.0% | -4.238 KiB |  14.0% → 7.4% | 8.48 KiB → 4.24 KiB |  18 → 9 | `runtime.malg`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`   |

##### `runtime.newm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2857`)

| Change |      Delta |      % |                Size | Objects | Callee           | Location                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
|  -5.6% | -3.396 KiB | 100.0% | 60.7 KiB → 57.3 KiB | 64 → 48 | `runtime.allocm` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `main.workload.func1` (`./profile.go:25`)

| Change |        Delta |             % |                Size |               Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +2.8% |       +5 MiB | 10.3% → 10.5% |   178 MiB → 183 MiB |             355 → 365 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                     |
|  +2.8% |   +2.547 MiB |   5.3% → 5.5% | 92.3 MiB → 94.8 MiB |         1,075 → 1,103 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +2.8% |    +1.25 MiB |          2.6% | 44.4 MiB → 45.6 MiB |             355 → 365 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                        |
|  +0.9% | +709.421 KiB |          4.7% | 81.4 MiB → 82.1 MiB |     275,578 → 278,025 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +1.1% | +685.056 KiB |          3.4% |   58.3 MiB → 59 MiB |     130,298 → 128,719 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                                                                      |
|  +3.4% | +646.505 KiB |          1.1% | 18.4 MiB → 19.1 MiB |     208,471 → 216,273 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +2.8% | +639.999 KiB |          1.3% | 22.2 MiB → 22.8 MiB |             355 → 365 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                            |
|  +4.1% | +601.172 KiB |          0.8% | 14.2 MiB → 14.7 MiB |     927,505 → 965,980 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                       |
|  +4.5% | +584.997 KiB |   0.7% → 0.8% | 12.8 MiB → 13.4 MiB |         1,025 → 1,186 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                                                                                                                                                                                               |
|  +3.2% | +476.871 KiB |          0.9% | 14.8 MiB → 15.2 MiB |     952,331 → 984,134 | `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +1.1% | +440.859 KiB |          2.2% | 38.6 MiB → 39.1 MiB | 2,532,171 → 2,560,386 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205)                                                                                                                                                  |
|  +1.5% | +349.955 KiB |   1.3% → 1.4% | 23.3 MiB → 23.6 MiB |     142,067 → 144,598 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                             |
|  +3.0% | +344.609 KiB |   0.6% → 0.7% | 11.1 MiB → 11.4 MiB |     602,290 → 625,543 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +3.8% | +316.617 KiB |          0.5% | 8.18 MiB → 8.49 MiB |     535,829 → 556,092 | `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                            |
|  +7.6% | +230.762 KiB |          0.2% | 2.95 MiB → 3.17 MiB |       18,342 → 18,434 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                               |
|  +1.3% | +207.099 KiB |          0.9% | 15.9 MiB → 16.1 MiB |      98,318 → 100,741 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                              |
|  +2.1% | +177.867 KiB |          0.5% | 8.34 MiB → 8.51 MiB |       55,197 → 55,921 | `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                    |
|  +4.9% | +176.516 KiB |          0.2% | 3.55 MiB → 3.73 MiB |     155,248 → 162,779 | `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +3.1% | +173.491 KiB |          0.3% | 5.39 MiB → 5.56 MiB |       22,952 → 23,650 | `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102)                                                                                                                                                                                                                                                                     |
|  +7.7% | +150.531 KiB |          0.1% |  1.9 MiB → 2.05 MiB |       11,857 → 14,037 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

| Change |        Delta |            % |                Size |               Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | -----------: | -----------: | ------------------: | --------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -0.7% |   -1.164 MiB |  9.1% → 9.0% |   157 MiB → 156 MiB |     458,029 → 460,061 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -0.9% | -988.464 KiB |  6.2% → 6.1% |   107 MiB → 106 MiB |     149,977 → 147,301 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -2.4% | -966.546 KiB |  2.3% → 2.2% | 39.5 MiB → 38.6 MiB | 2,018,655 → 1,969,085 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -3.5% | -692.808 KiB |         1.1% | 19.5 MiB → 18.9 MiB |     360,198 → 350,840 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -25.0% |     -512 KiB |         0.1% |     2 MiB → 1.5 MiB |                 4 → 3 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.leakWorkers.func1` (`./profile.go:56`)                                                                                                                                                                                                                               |
|  -1.0% | -415.915 KiB |  2.3% → 2.2% | 39.2 MiB → 38.8 MiB |       40,122 → 39,706 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -4.2% | -395.402 KiB |         0.5% | 9.21 MiB → 8.82 MiB |       46,791 → 44,948 | `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                              |
|  -9.6% | -356.695 KiB |         0.2% | 3.64 MiB → 3.29 MiB |     238,545 → 215,716 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`) |
|  -0.8% | -336.656 KiB |         2.2% | 38.7 MiB → 38.4 MiB | 2,535,762 → 2,514,216 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:289`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                             |
|  -6.4% |   -320.7 KiB |         0.3% | 4.89 MiB → 4.58 MiB |     298,267 → 279,368 | `encoding/json.(*decodeState).literalInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -26.1% |   -280.5 KiB | 0.1% → <0.1% |  1.05 MiB → 796 KiB |                15 → 6 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.leakWorkers.func1` (`./profile.go:56`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -10.6% | -208.406 KiB |         0.1% | 1.92 MiB → 1.72 MiB |     125,002 → 111,664 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -1.6% | -170.188 KiB |         0.6% | 10.3 MiB → 10.1 MiB |       63,328 → 62,937 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                           |
| -10.3% | -162.855 KiB |         0.1% | 1.54 MiB → 1.39 MiB |         8,697 → 8,906 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                              |
| -25.0% |     -128 KiB |        <0.1% |   512 KiB → 384 KiB |                 4 → 3 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.leakWorkers.func1` (`./profile.go:56`)                                                                                                                                                                                                                                                                                                                                                                  |
| -10.7% | -120.352 KiB |         0.1% | 1.1 MiB → 1,003 KiB |       47,926 → 42,791 | `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -0.3% | -114.039 KiB |         2.4% | 41.4 MiB → 41.3 MiB |     683,876 → 671,742 | `encoding/json.unquote` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -3.3% |   -105.1 KiB |         0.2% |     3.1 MiB → 3 MiB |       18,663 → 19,219 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                             |
|  -1.6% |  -98.317 KiB |  0.4% → 0.3% | 6.06 MiB → 5.97 MiB |       48,780 → 48,190 | `encoding/json.unquoteBytes` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -0.4% |  -88.171 KiB |         1.2% | 20.7 MiB → 20.6 MiB | 1,356,373 → 1,350,730 | `reflect.unsafe_New` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2177`) ← `reflect.copyVal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                        |

# Retained heap profile diff

Retained 2.08 MiB → 90.5 KiB (-1.991 MiB, -95.7%) over 196 → 231 objects (10.9 KiB → 401 B per object).

| Category         | Change |      Delta |              % |                Size |   Objects |
| ---------------- | -----: | ---------: | -------------: | ------------------: | --------: |
| Standard library | -95.9% | -1.995 MiB | 100.0% → 95.5% | 2.08 MiB → 86.5 KiB | 196 → 194 |
| Ours             |    new | +4.054 KiB |    0.0% → 4.5% |      0 B → 4.05 KiB |    0 → 37 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-go-workload/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 2 MiB → 0 B (96.2% → 0.0%) main.leakWorkers.func1 at ./profile.go:56
│   └── 2 MiB → 0 B (96.2% → 0.0%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
│       └── 2 MiB → 0 B (96.2% → 0.0%) encoding/json.(*encodeState).marshal at 333
│           └── 2 MiB → 0 B (96.2% → 0.0%) encoding/json.(*encodeState).reflectValue at 366
│               └── … 2 MiB → 0 B (96.2% → 0.0%) encoding/json.stringEncoder at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610
│                   └── 2 MiB → 0 B (96.2% → 0.0%) bytes.(*Buffer).Write at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193
│                       └── 2 MiB → 0 B (96.2% → 0.0%) bytes.(*Buffer).grow at 144
│                           └── 2 MiB → 0 B (96.2% → 0.0%) bytes.growSlice at 247
├── 46.3 KiB → 29 KiB (2.2% → 32.1%) runtime.mcall at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302
│   ├── … 46.3 KiB → 23.9 KiB (2.2% → 26.4%) runtime.allocm at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269
│   │   ├── … 18.4 KiB → 13.8 KiB (0.9% → 15.2%) runtime.mallocgc at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067
│   │   └── 15.2 KiB → 10.2 KiB (0.7% → 11.2%) runtime.newobject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156
│   │       └── 15.2 KiB → 10.2 KiB (0.7% → 11.2%) runtime.mallocgc at 1067
│   └── … 0 B → 5.08 KiB (0.0% → 5.6%) runtime.mallocgc at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067
├── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.mstart at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258
│   └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.mstart0 at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862
│       └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.mstart1 at 1904
│           └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.schedule at 4135
│               └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.resetspinning at 4021
│                   └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.wakep at 3212
│                       └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.startm at 3035
│                           └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.newm at 2857
│                               └── 14.4 KiB → 28.3 KiB (0.7% → 31.3%) runtime.allocm at 2269
│                                   ├── 10.2 KiB → 15.2 KiB (0.5% → 16.8%) runtime.newobject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156
│                                   │   └── 10.2 KiB → 15.2 KiB (0.5% → 16.8%, self 3.3% → 91.0% globally) runtime.mallocgc at 1067
│                                   ├── 0 B → 8.83 KiB (0.0% → 9.8%) runtime.mcommoninit at 998
│                                   │   ├── … 0 B → 4.59 KiB (0.0% → 5.1%) runtime.mallocgc at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067
│                                   │   └── … 0 B → 4.24 KiB (0.0% → 4.7%) runtime.mallocgc at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067
│                                   └── 4.24 KiB (0.2% → 4.7%) runtime.malg at 5273
│                                       └── 4.24 KiB (0.2% → 4.7%) runtime.newobject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156
│                                           └── 4.24 KiB (0.2% → 4.7%) runtime.mallocgc at 1067
├── … 4.24 KiB → 12.7 KiB (0.2% → 14.0%) runtime.mallocgc at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067
├── 4.25 KiB → 12.4 KiB (0.2% → 13.7%) runtime.gcBgMarkWorker at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750
│   ├── … 0 B → 8.11 KiB (0.0% → 9.0%) runtime.mallocgc at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067
│   └── 4.25 KiB (0.2% → 4.7%) runtime.newobject at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156
│       └── 4.25 KiB (0.2% → 4.7%) runtime.mallocgc at 1067
├── 12.2 KiB → 4.05 KiB (0.6% → 4.5%) main.workload.func1 at ./profile.go:25
│   ├── 0 B → 4.05 KiB (0.0% → 4.5%) encoding/json.Marshal at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205
│   └── … 12.2 KiB → 0 B (0.6% → 0.0%) encoding/json.(*decodeState).objectInterface at /nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078
└── … 0 B → 4.05 KiB (0.0% → 4.5%) main.leakWorkers at ./profile.go:49
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |            % |                Size |  Objects | Function                | Location                                                                                         |
| -----: | ----------: | -----------: | ------------------: | -------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| +19.1% | +13.191 KiB | 3.3% → 91.0% | 69.2 KiB → 82.4 KiB | 81 → 157 | `runtime.mallocgc`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|    new |  +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |   0 → 37 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|    new |  +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |   0 → 37 | `main.leakWorkers`      | `./profile.go:49`                                                                                |

##### Standard library

| Change |       Delta |            % |                Size |  Objects | Function                | Location                                                                                         |
| -----: | ----------: | -----------: | ------------------: | -------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| +19.1% | +13.191 KiB | 3.3% → 91.0% | 69.2 KiB → 82.4 KiB | 81 → 157 | `runtime.mallocgc`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`      |
|    new |  +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |   0 → 37 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### Ours

| Change |      Delta |           % |           Size | Objects | Function           | Location          |
| -----: | ---------: | ----------: | -------------: | ------: | ------------------ | ----------------- |
|    new | +4.054 KiB | 0.0% → 4.5% | 0 B → 4.05 KiB |  0 → 37 | `main.leakWorkers` | `./profile.go:49` |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |       Delta |            % |           Size | Objects | Function                                       | Location                                                                                          |
| ------: | ----------: | -----------: | -------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |      -2 MiB | 96.2% → 0.0% |    2 MiB → 0 B |   4 → 0 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| removed | -12.164 KiB |  0.6% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |      Delta |             % |                Size |  Objects | Location                                                                                    |
| -----: | ---------: | ------------: | ------------------: | -------: | ------------------------------------------------------------------------------------------- |
| +38.3% |  +8.11 KiB | 30.6% → 35.6% | 21.2 KiB → 29.3 KiB | 45 → 119 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1150` |
| +20.0% | +5.082 KiB | 36.7% → 37.0% | 25.4 KiB → 30.5 KiB |  12 → 14 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1152` |
|    ~0% |       -1 B | 32.7% → 27.4% |            22.6 KiB |       24 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1143` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |      Delta |             % |           Size | Objects | Location                                                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:213` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |      Delta |             % |           Size | Objects | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `./profile.go:54` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|  Change |  Delta |             % |        Size | Objects | Location                                                                                 |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:267` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |       Delta |             % |           Size | Objects | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1110` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |       Delta |             % |                Size |  Objects | Caller              | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | -------: | ------------------- | ------------------------------------------------------------------------------------------- |
| +25.9% | +13.192 KiB | 73.5% → 77.7% | 50.9 KiB → 64.1 KiB | 65 → 141 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
|    ~0% |        -1 B | 26.5% → 22.3% |            18.4 KiB |       16 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

| Change |      Delta |             % |           Size | Objects | Caller                | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `main.workload.func1` | `./profile.go:25` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |      Delta |             % |           Size | Objects | Caller      | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | ----------- | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `main.main` | `./profile.go:82` |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|  Change |  Delta |             % |        Size | Objects | Caller                 | Location                                                                                 |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |       Delta |             % |           Size | Objects | Caller                                        | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |            % |                Size |  Objects | Function                      | Location                                                                                     |
| ------: | ----------: | -----------: | ------------------: | -------: | ----------------------------- | -------------------------------------------------------------------------------------------- |
|  +96.6% | +13.909 KiB | 0.7% → 31.3% | 14.4 KiB → 28.3 KiB |  14 → 29 | `runtime.mstart1`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`    |
|  +96.6% | +13.909 KiB | 0.7% → 31.3% | 14.4 KiB → 28.3 KiB |  14 → 29 | `runtime.mstart0`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862`    |
|  +96.6% | +13.909 KiB | 0.7% → 31.3% | 14.4 KiB → 28.3 KiB |  14 → 29 | `runtime.mstart`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258` |
|  +25.9% | +13.192 KiB | 2.4% → 70.8% | 50.9 KiB → 64.1 KiB | 65 → 141 | `runtime.newobject`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`  |
|  +19.1% | +13.191 KiB | 3.3% → 91.0% | 69.2 KiB → 82.4 KiB | 81 → 157 | `runtime.mallocgc`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`  |
| +200.0% |  +8.478 KiB | 0.2% → 14.0% | 4.24 KiB → 12.7 KiB |   9 → 27 | `runtime.newproc1`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`    |
| +200.0% |  +8.478 KiB | 0.2% → 14.0% | 4.24 KiB → 12.7 KiB |   9 → 27 | `runtime.newproc.func1`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298`    |
| +200.0% |  +8.478 KiB | 0.2% → 14.0% | 4.24 KiB → 12.7 KiB |   9 → 27 | `runtime.systemstack`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |
| +190.6% |  +8.109 KiB | 0.2% → 13.7% | 4.25 KiB → 12.4 KiB |   8 → 82 | `runtime.gcBgMarkWorker`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`     |
|     new |  +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |   0 → 74 | `runtime.acquireSudog`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`     |
|     new |  +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |   0 → 74 | `runtime.semacquire1`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`     |
|     new |  +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |   0 → 74 | `runtime.semacquire`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142`     |
|     new |  +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |   0 → 74 | `runtime.gcMarkDone`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`     |
|     new |  +5.082 KiB |  0.0% → 5.6% |      0 B → 5.08 KiB |    0 → 2 | `runtime.goschedImpl`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`    |
|     new |  +5.082 KiB |  0.0% → 5.6% |      0 B → 5.08 KiB |    0 → 2 | `runtime.gopreempt_m`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`    |
|     new |  +5.082 KiB |  0.0% → 5.6% |      0 B → 5.08 KiB |    0 → 2 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320`  |
|     new |  +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |   0 → 37 | `main.leakWorkers`            | `./profile.go:49`                                                                            |
|     new |  +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |   0 → 37 | `main.main`                   | `./profile.go:82`                                                                            |
|     new |  +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |   0 → 37 | `runtime.main`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`     |
|     ~0% |        +1 B | 1.0% → 23.4% |            21.2 KiB |       45 | `runtime.malg`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`    |

##### Standard library

|  Change |       Delta |            % |                Size |  Objects | Function                      | Location                                                                                     |
| ------: | ----------: | -----------: | ------------------: | -------: | ----------------------------- | -------------------------------------------------------------------------------------------- |
|  +96.6% | +13.909 KiB | 0.7% → 31.3% | 14.4 KiB → 28.3 KiB |  14 → 29 | `runtime.mstart1`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`    |
|  +96.6% | +13.909 KiB | 0.7% → 31.3% | 14.4 KiB → 28.3 KiB |  14 → 29 | `runtime.mstart0`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862`    |
|  +96.6% | +13.909 KiB | 0.7% → 31.3% | 14.4 KiB → 28.3 KiB |  14 → 29 | `runtime.mstart`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258` |
|  +25.9% | +13.192 KiB | 2.4% → 70.8% | 50.9 KiB → 64.1 KiB | 65 → 141 | `runtime.newobject`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`  |
|  +19.1% | +13.191 KiB | 3.3% → 91.0% | 69.2 KiB → 82.4 KiB | 81 → 157 | `runtime.mallocgc`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`  |
| +200.0% |  +8.478 KiB | 0.2% → 14.0% | 4.24 KiB → 12.7 KiB |   9 → 27 | `runtime.newproc1`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`    |
| +200.0% |  +8.478 KiB | 0.2% → 14.0% | 4.24 KiB → 12.7 KiB |   9 → 27 | `runtime.newproc.func1`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298`    |
| +200.0% |  +8.478 KiB | 0.2% → 14.0% | 4.24 KiB → 12.7 KiB |   9 → 27 | `runtime.systemstack`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |
|     new |  +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |   0 → 74 | `runtime.acquireSudog`        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`     |
|     new |  +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |   0 → 74 | `runtime.semacquire1`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`     |
|     new |  +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |   0 → 74 | `runtime.semacquire`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142`     |
|     new |  +5.082 KiB |  0.0% → 5.6% |      0 B → 5.08 KiB |    0 → 2 | `runtime.goschedImpl`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`    |
|     new |  +5.082 KiB |  0.0% → 5.6% |      0 B → 5.08 KiB |    0 → 2 | `runtime.gopreempt_m`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`    |
|     new |  +5.082 KiB |  0.0% → 5.6% |      0 B → 5.08 KiB |    0 → 2 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320`  |
|     new |  +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |   0 → 37 | `runtime.main`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`     |
|     ~0% |        +1 B | 1.0% → 23.4% |            21.2 KiB |       45 | `runtime.malg`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`    |

##### Ours

| Change |      Delta |           % |           Size | Objects | Function           | Location          |
| -----: | ---------: | ----------: | -------------: | ------: | ------------------ | ----------------- |
|    new | +4.054 KiB | 0.0% → 4.5% | 0 B → 4.05 KiB |  0 → 37 | `main.leakWorkers` | `./profile.go:49` |
|    new | +4.054 KiB | 0.0% → 4.5% | 0 B → 4.05 KiB |  0 → 37 | `main.main`        | `./profile.go:82` |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |            % |                Size | Objects | Function                                       | Location                                                                                          |
| ------: | ----------: | -----------: | ------------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `main.leakWorkers.func1`                       | `./profile.go:56`                                                                                 |
|  -99.8% |  -1.996 MiB | 96.2% → 4.5% |    2 MiB → 4.05 KiB |  4 → 37 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  -48.3% | -22.387 KiB | 2.2% → 26.4% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.park_m`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`         |
|  -37.4% | -17.305 KiB | 2.2% → 32.1% |   46.3 KiB → 29 KiB | 50 → 19 | `runtime.mcall`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`      |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |

##### Standard library

|  Change |       Delta |            % |                Size | Objects | Function                                       | Location                                                                                          |
| ------: | ----------: | -----------: | ------------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).grow`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`          |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).Write`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`          |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.stringEncoder`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).reflectValue`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.interfaceEncoder`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.mapEncoder.encode`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.arrayEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.sliceEncoder.encode`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`  |
| removed |      -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`  |
|  -99.8% |  -1.996 MiB | 96.2% → 4.5% |    2 MiB → 4.05 KiB |  4 → 37 | `encoding/json.Marshal`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |
|  -48.3% | -22.387 KiB | 2.2% → 26.4% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.park_m`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`         |
|  -37.4% | -17.305 KiB | 2.2% → 32.1% |   46.3 KiB → 29 KiB | 50 → 19 | `runtime.mcall`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`      |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).valueInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).object`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).value`           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`  |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).unmarshal`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`  |
| removed | -12.164 KiB |  0.6% → 0.0% |      12.2 KiB → 0 B | 111 → 0 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |

##### Ours

|  Change |      Delta |            % |                Size |  Objects | Function                 | Location          |
| ------: | ---------: | -----------: | ------------------: | -------: | ------------------------ | ----------------- |
| removed |     -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |    4 → 0 | `main.leakWorkers.func1` | `./profile.go:56` |
|  -66.7% | -8.109 KiB |  0.6% → 4.5% | 12.2 KiB → 4.05 KiB | 111 → 37 | `main.workload.func1`    | `./profile.go:25` |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.mstart1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`)

| Change |       Delta |      % |                Size | Objects | Caller            | Location                                                                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------- | ----------------------------------------------------------------------------------------- |
| +96.6% | +13.909 KiB | 100.0% | 14.4 KiB → 28.3 KiB | 14 → 29 | `runtime.mstart0` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862` |

##### `runtime.mstart0` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862`)

| Change |       Delta |      % |                Size | Objects | Caller           | Location                                                                                     |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| +96.6% | +13.909 KiB | 100.0% | 14.4 KiB → 28.3 KiB | 14 → 29 | `runtime.mstart` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

| Change |      Delta |             % |                Size | Objects | Caller                 | Location                                                                                  |
| -----: | ---------: | ------------: | ------------------: | ------: | ---------------------- | ----------------------------------------------------------------------------------------- |
|    new | +8.109 KiB |  0.0% → 12.7% |      0 B → 8.11 KiB |  0 → 74 | `runtime.acquireSudog` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`  |
| +20.0% | +5.082 KiB | 50.0% → 47.6% | 25.4 KiB → 30.5 KiB | 12 → 14 | `runtime.allocm`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269` |
|    ~0% |       +1 B | 41.7% → 33.1% |            21.2 KiB |      45 | `runtime.malg`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273` |

##### `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`)

| Change |       Delta |             % |                Size |  Objects | Caller              | Location                                                                                    |
| -----: | ----------: | ------------: | ------------------: | -------: | ------------------- | ------------------------------------------------------------------------------------------- |
| +25.9% | +13.192 KiB | 73.5% → 77.7% | 50.9 KiB → 64.1 KiB | 65 → 141 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |
|    ~0% |        -1 B | 26.5% → 22.3% |            18.4 KiB |       16 | `runtime.makeslice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`   |

##### `runtime.newproc1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`)

|  Change |      Delta |      % |                Size | Objects | Caller                  | Location                                                                                  |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| +200.0% | +8.478 KiB | 100.0% | 4.24 KiB → 12.7 KiB |  9 → 27 | `runtime.newproc.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298` |

##### `runtime.newproc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298`)

|  Change |      Delta |      % |                Size | Objects | Caller                | Location                                                                                     |
| ------: | ---------: | -----: | ------------------: | ------: | --------------------- | -------------------------------------------------------------------------------------------- |
| +200.0% | +8.478 KiB | 100.0% | 4.24 KiB → 12.7 KiB |  9 → 27 | `runtime.systemstack` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353` |

##### `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`)

| Change |      Delta |             % |           Size | Objects | Caller                | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.semacquire1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146` |

##### `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`)

| Change |      Delta |             % |           Size | Objects | Caller               | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.semacquire` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142` |

##### `runtime.semacquire` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142`)

| Change |      Delta |             % |           Size | Objects | Caller               | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

| Change |      Delta |             % |           Size | Objects | Caller                   | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.gcBgMarkWorker` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

| Change |      Delta |             % |           Size | Objects | Caller                | Location                                                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

| Change |      Delta |             % |           Size | Objects | Caller                        | Location                                                                                    |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `runtime.asyncPreempt2.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320`)

| Change |      Delta |             % |           Size | Objects | Caller          | Location                                                                                     |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `main.leakWorkers` (`./profile.go:49`)

| Change |      Delta |             % |           Size | Objects | Caller      | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | ----------- | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `main.main` | `./profile.go:82` |

##### `main.main` (`./profile.go:82`)

| Change |      Delta |             % |           Size | Objects | Caller         | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | -------------- | ---------------------------------------------------------------------------------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `runtime.main` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149` |

##### `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`)

|  Change |      Delta |             % |                Size | Objects | Caller             | Location                                                                                      |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------ | --------------------------------------------------------------------------------------------- |
| +200.0% | +8.478 KiB | 20.0% → 60.0% | 4.24 KiB → 12.7 KiB |  9 → 27 | `runtime.newproc1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`     |
|  -50.0% | -4.239 KiB | 40.0% → 20.0% | 8.48 KiB → 4.24 KiB |  18 → 9 | `runtime.mpreinit` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328` |
|  -50.0% | -4.238 KiB | 40.0% → 20.0% | 8.48 KiB → 4.24 KiB |  18 → 9 | `runtime.allocm`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`     |

##### `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`)

|  Change |  Delta |             % |        Size | Objects | Caller                 | Location                                                                                 |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|  Change |  Delta |             % |        Size | Objects | Caller                  | Location                                                                                 |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|  Change |  Delta |             % |        Size | Objects | Caller                        | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.stringEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|  Change |  Delta |             % |        Size | Objects | Caller                                      | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|  Change |  Delta |             % |        Size | Objects | Caller                                 | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.interfaceEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|  Change |  Delta |             % |        Size | Objects | Caller                              | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|  Change |  Delta |             % |        Size | Objects | Caller                                      | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|  Change |  Delta |             % |        Size | Objects | Caller                              | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|  Change |  Delta |             % |        Size | Objects | Caller                                      | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|  Change |  Delta |             % |        Size | Objects | Caller                  | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|  Change |      Delta |             % |           Size | Objects | Caller                   | Location          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------ | ----------------- |
| removed |     -2 MiB | 100.0% → 0.0% |    2 MiB → 0 B |   4 → 0 | `main.leakWorkers.func1` | `./profile.go:56` |
|     new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `main.workload.func1`    | `./profile.go:25` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |       Delta |      % |                Size | Objects | Caller          | Location                                                                                     |
| -----: | ----------: | -----: | ------------------: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| -48.3% | -22.387 KiB | 100.0% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.mcall` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |       Delta |             % |           Size | Objects | Caller                                        | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).object`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |       Delta |             % |           Size | Objects | Caller                                         | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|  Change |       Delta |             % |           Size | Objects | Caller                                        | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|  Change |       Delta |             % |           Size | Objects | Caller                               | Location                                                                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|  Change |       Delta |             % |           Size | Objects | Caller                                   | Location                                                                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|  Change |       Delta |             % |           Size | Objects | Caller                    | Location                                                                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|  Change |       Delta |             % |           Size | Objects | Caller                | Location          |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------- | ----------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `main.workload.func1` | `./profile.go:25` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.mstart1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`)

| Change |       Delta |      % |                Size | Objects | Callee             | Location                                                                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| +96.6% | +13.909 KiB | 100.0% | 14.4 KiB → 28.3 KiB | 14 → 29 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.mstart0` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862`)

| Change |       Delta |      % |                Size | Objects | Callee            | Location                                                                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------- | ----------------------------------------------------------------------------------------- |
| +96.6% | +13.909 KiB | 100.0% | 14.4 KiB → 28.3 KiB | 14 → 29 | `runtime.mstart1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904` |

##### `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)

| Change |       Delta |      % |                Size | Objects | Callee            | Location                                                                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------- | ----------------------------------------------------------------------------------------- |
| +96.6% | +13.909 KiB | 100.0% | 14.4 KiB → 28.3 KiB | 14 → 29 | `runtime.mstart0` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862` |

##### `runtime.newobject` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156`)

| Change |       Delta |      % |                Size |  Objects | Callee             | Location                                                                                    |
| -----: | ----------: | -----: | ------------------: | -------: | ------------------ | ------------------------------------------------------------------------------------------- |
| +25.9% | +13.192 KiB | 100.0% | 50.9 KiB → 64.1 KiB | 65 → 141 | `runtime.mallocgc` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067` |

##### `runtime.newproc1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313`)

|  Change |      Delta |      % |                Size | Objects | Callee         | Location                                                                                  |
| ------: | ---------: | -----: | ------------------: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| +200.0% | +8.478 KiB | 100.0% | 4.24 KiB → 12.7 KiB |  9 → 27 | `runtime.malg` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273` |

##### `runtime.newproc.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298`)

|  Change |      Delta |      % |                Size | Objects | Callee             | Location                                                                                  |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| +200.0% | +8.478 KiB | 100.0% | 4.24 KiB → 12.7 KiB |  9 → 27 | `runtime.newproc1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5313` |

##### `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)

|  Change |      Delta |      % |                Size | Objects | Callee                  | Location                                                                                  |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| +200.0% | +8.478 KiB | 100.0% | 4.24 KiB → 12.7 KiB |  9 → 27 | `runtime.newproc.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5298` |

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

| Change |      Delta |            % |           Size | Objects | Callee               | Location                                                                                 |
| -----: | ---------: | -----------: | -------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 65.6% | 0 B → 8.11 KiB |  0 → 74 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`)

| Change |      Delta |             % |           Size | Objects | Callee              | Location                                                                                    |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

##### `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`)

| Change |      Delta |             % |           Size | Objects | Callee                 | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.acquireSudog` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488` |

##### `runtime.semacquire` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142`)

| Change |      Delta |             % |           Size | Objects | Callee                | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.semacquire1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

| Change |      Delta |             % |           Size | Objects | Callee               | Location                                                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
|    new | +8.109 KiB | 0.0% → 100.0% | 0 B → 8.11 KiB |  0 → 74 | `runtime.semacquire` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:142` |

##### `runtime.goschedImpl` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`)

| Change |      Delta |             % |           Size | Objects | Callee             | Location                                                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.gopreempt_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`)

| Change |      Delta |             % |           Size | Objects | Callee                | Location                                                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.goschedImpl` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307` |

##### `runtime.asyncPreempt2.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320`)

| Change |      Delta |             % |           Size | Objects | Callee                | Location                                                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
|    new | +5.082 KiB | 0.0% → 100.0% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gopreempt_m` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361` |

##### `main.main` (`./profile.go:82`)

| Change |      Delta |             % |           Size | Objects | Callee             | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------ | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `main.leakWorkers` | `./profile.go:49` |

##### `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)

| Change |      Delta |             % |           Size | Objects | Callee      | Location          |
| -----: | ---------: | ------------: | -------------: | ------: | ----------- | ----------------- |
|    new | +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `main.main` | `./profile.go:82` |

##### `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`)

| Change | Delta |      % |     Size | Objects | Callee              | Location                                                                                    |
| -----: | ----: | -----: | -------: | ------: | ------------------- | ------------------------------------------------------------------------------------------- |
|    ~0% |  +1 B | 100.0% | 21.2 KiB |      45 | `runtime.newobject` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2156` |

##### `bytes.(*Buffer).grow` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144`)

|  Change |  Delta |             % |        Size | Objects | Callee            | Location                                                                                 |
| ------: | -----: | ------------: | ----------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

##### `bytes.(*Buffer).Write` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193`)

|  Change |  Delta |             % |        Size | Objects | Callee                 | Location                                                                                 |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).grow` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:144` |

##### `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`)

|  Change |  Delta |             % |        Size | Objects | Callee                  | Location                                                                                 |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `bytes.(*Buffer).Write` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:193` |

##### `encoding/json.(*encodeState).reflectValue` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366`)

|  Change |  Delta |             % |        Size | Objects | Callee                              | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.stringEncoder`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610` |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.mapEncoder.encode`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765` |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.sliceEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843` |

##### `encoding/json.interfaceEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695`)

|  Change |  Delta |             % |        Size | Objects | Callee                                      | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `encoding/json.mapEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765`)

|  Change |  Delta |             % |        Size | Objects | Callee                           | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.arrayEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883`)

|  Change |  Delta |             % |        Size | Objects | Callee                           | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.interfaceEncoder` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:843`)

|  Change |  Delta |             % |        Size | Objects | Callee                              | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.arrayEncoder.encode` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:883` |

##### `encoding/json.(*encodeState).marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333`)

|  Change |  Delta |             % |        Size | Objects | Callee                                      | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).reflectValue` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:366` |

##### `main.leakWorkers.func1` (`./profile.go:56`)

|  Change |  Delta |             % |        Size | Objects | Callee                  | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`)

|  Change |  Delta |             % |        Size | Objects | Callee                                 | Location                                                                                         |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -2 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `encoding/json.(*encodeState).marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:333` |

##### `runtime.park_m` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`)

| Change |       Delta |      % |                Size | Objects | Callee             | Location                                                                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------------------------------- |
| -48.3% | -22.387 KiB | 100.0% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.schedule` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135` |

##### `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)

| Change |       Delta |              % |                Size | Objects | Callee                        | Location                                                                                    |
| -----: | ----------: | -------------: | ------------------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| -48.3% | -22.387 KiB | 100.0% → 82.5% | 46.3 KiB → 23.9 KiB | 50 → 17 | `runtime.park_m`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`   |
|    new |  +5.082 KiB |   0.0% → 17.5% |      0 B → 5.08 KiB |   0 → 2 | `runtime.asyncPreempt2.func1` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320` |

##### `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`)

|  Change |       Delta |             % |           Size | Objects | Callee                                        | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).valueInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035`)

|  Change |       Delta |             % |           Size | Objects | Callee                                         | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).arrayInterface`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).arrayInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1052`)

|  Change |       Delta |             % |           Size | Objects | Callee                                        | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).valueInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604`)

|  Change |       Delta |             % |           Size | Objects | Callee                                         | Location                                                                                          |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363`)

|  Change |       Delta |             % |           Size | Objects | Callee                                | Location                                                                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).object` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173`)

|  Change |       Delta |             % |           Size | Objects | Callee                               | Location                                                                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).value` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:363` |

##### `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`)

|  Change |       Delta |             % |           Size | Objects | Callee                                   | Location                                                                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.(*decodeState).unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:173` |

##### `main.workload.func1` (`./profile.go:25`)

|  Change |       Delta |             % |           Size | Objects | Callee                    | Location                                                                                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| removed | -12.164 KiB | 100.0% → 0.0% | 12.2 KiB → 0 B | 111 → 0 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|     new |  +4.054 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

|  Change |      Delta |            % |                Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | ---------: | -----------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% | +8.478 KiB | 0.2% → 14.0% | 4.24 KiB → 12.7 KiB |  9 → 27 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.newproc1` (5313) ← `runtime.newproc.func1` (5298) ← `runtime.systemstack` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +8.109 KiB |  0.0% → 9.0% |      0 B → 8.11 KiB |  0 → 74 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.acquireSudog` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:488`) ← `runtime.semacquire1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sema.go:146`) ← `runtime.semacquire` (142) ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                        |
|  +50.0% | +5.083 KiB | 0.5% → 16.8% | 10.2 KiB → 15.2 KiB |   5 → 7 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                                                                                                                                                                                                                 |
|     new | +5.082 KiB |  0.0% → 5.6% |      0 B → 5.08 KiB |   0 → 2 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.asyncPreempt2.func1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/preempt.go:320`) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                            |
|     new | +4.587 KiB |  0.0% → 5.1% |      0 B → 4.59 KiB |   0 → 4 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`)                                                                         |
|     new | +4.238 KiB |  0.0% → 4.7% |      0 B → 4.24 KiB |   0 → 9 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.mpreinit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328`) ← `runtime.mcommoninit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.mstart1` (1904) ← `runtime.mstart0` (1862) ← `runtime.mstart` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`) |
|     new | +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |  0 → 37 | `main.leakWorkers` (`./profile.go:49`) ← `main.main` (82) ← `runtime.main` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +4.054 KiB |  0.0% → 4.5% |      0 B → 4.05 KiB |  0 → 37 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

|  Change |      Delta |            % |                Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | ---------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |     -2 MiB | 96.2% → 0.0% |         2 MiB → 0 B |   4 → 0 | `bytes.growSlice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`) ← `bytes.(*Buffer).grow` (144) ← `bytes.(*Buffer).Write` (193) ← `encoding/json.stringEncoder` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:610`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `main.leakWorkers.func1` (`./profile.go:56`) |
| removed | -8.477 KiB |  0.4% → 0.0% |      8.48 KiB → 0 B |  18 → 0 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.mpreinit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:328`) ← `runtime.mcommoninit` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:998`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -8.109 KiB |  0.4% → 0.0% |      8.11 KiB → 0 B |  74 → 0 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -33.3% | -5.083 KiB | 0.7% → 11.2% | 15.2 KiB → 10.2 KiB |   7 → 5 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.allocm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2269`) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -25.0% | -4.588 KiB | 0.9% → 15.2% | 18.4 KiB → 13.8 KiB | 16 → 12 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.makeslice` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:102`) ← `runtime.makeProfStackFP` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1056`) ← `runtime.mProfStackInit` (1043) ← `runtime.mcommoninit` (998) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -4.238 KiB |  0.2% → 0.0% |      4.24 KiB → 0 B |   9 → 0 | `runtime.mallocgc` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1067`) ← `runtime.newobject` (2156) ← `runtime.malg` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5273`) ← `runtime.allocm` (2269) ← `runtime.newm` (2857) ← `runtime.startm` (3035) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -4.054 KiB |  0.2% → 0.0% |      4.05 KiB → 0 B |  37 → 0 | `encoding/json.(*decodeState).objectInterface` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `main.workload.func1` (`./profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

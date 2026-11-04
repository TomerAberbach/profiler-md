# CPU profile diff

Took 3.31s → 3.36s (+50.00ms, +1.5%) over 331 → 336 samples (10.0ms per sample).

| Category          |  Change |    Delta |              % |          Time |   Samples |
| ----------------- | ------: | -------: | -------------: | ------------: | --------: |
| Standard library  |   +2.1% | +70.00ms | 99.4% → 100.0% | 3.29s → 3.36s | 329 → 336 |
| Garbage collector | removed | -20.00ms |    0.6% → 0.0% |  20.0ms → 0ms |     2 → 0 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.73s → 1.77s (52.3% → 52.7%) runtime.systemstack at runtime/asm_arm64.s:353
│   ├── … 830.0ms (25.1% → 24.7%, self 26.0% → 25.6% globally) runtime.madvise at runtime/sys_darwin.go:224
│   ├── … 590.0ms → 650.0ms (17.8% → 19.3%) runtime.kevent at runtime/sys_darwin.go:438
│   └── 310.0ms → 280.0ms (9.4% → 8.3%) 6 more callees, led by (8.5% → 6.8%) runtime.gcBgMarkWorker.func2 at runtime/mgc.go:1847
├── … 810.0ms → 940.0ms (24.5% → 28.0%) github.com/tomeraberbach/profiler-md-workload/internal/work.Run at github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10
│   ├── 570.0ms → 620.0ms (17.2% → 18.5%) encoding/json.Unmarshal at encoding/json/decode.go:102
│   │   ├── … 370.0ms (11.2% → 11.0%) encoding/json.(*decodeState).objectInterface at encoding/json/decode.go:1078
│   │   │   ├── … 140.0ms → 160.0ms (4.2% → 4.8%) encoding/json.(*decodeState).valueInterface at encoding/json/decode.go:1035
│   │   │   │   ├── 120.0ms → 140.0ms (3.6% → 4.2%) encoding/json.(*decodeState).literalInterface at 1129
│   │   │   │   │   ├── 50.0ms → 100.0ms (1.5% → 3.0%) encoding/json.unquote at 1187
│   │   │   │   │   │   ├── 20.0ms → 90.0ms (0.6% → 2.7%, self 0.6% → 1.2%, self 1.2% globally) encoding/json.unquoteBytes at 1193
│   │   │   │   │   │   │   └── 0ms → 50.0ms (0.0% → 1.5%) unicode/utf8.DecodeRune at unicode/utf8/utf8.go:157
│   │   │   │   │   │   │       └── 0ms → 40.0ms (0.0% → 1.2%) unicode/utf8.decodeRuneSlow at 171
│   │   │   │   │   │   └── 30.0ms → 10.0ms (0.9% → 0.3%) runtime.slicebytetostring at runtime/string.go:139 …
│   │   │   │   │   └── 70.0ms → 40.0ms (2.1% → 1.2%) 3 more callees, led by (1.2% → 0.6%) encoding/json.(*decodeState).rescanLiteral at 322
│   │   │   │   └── 10.0ms (0.3%) encoding/json.(*decodeState).arrayInterface at 1052
│   │   │   └── 230.0ms → 210.0ms (6.9% → 6.3%) 5 more callees, led by (3.6% → 2.4%) encoding/json.(*decodeState).scanWhile at encoding/json/decode.go:298
│   │   └── 200.0ms → 250.0ms (6.0% → 7.4%, self 2.1% → 2.4%) encoding/json.checkValid at encoding/json/scanner.go:33
│   │       ├── 40.0ms → 90.0ms (1.2% → 2.7%) encoding/json.stateInString at 339
│   │       └── 90.0ms → 80.0ms (2.7% → 2.4%) 3 more callees, led by (1.8% → 1.2%) encoding/json.stateBeginString at 268
│   └── … 240.0ms → 310.0ms (7.3% → 9.2%) encoding/json.(*encodeState).reflectValue at encoding/json/encode.go:366
│       ├── … 180.0ms → 270.0ms (5.4% → 8.0%) encoding/json.mapEncoder.encode at encoding/json/encode.go:765
│       │   ├── 70.0ms → 160.0ms (2.1% → 4.8%) slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at slices/sort.go:30
│       │   │   └── 70.0ms → 160.0ms (2.1% → 4.8%) slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at slices/zsortanyfunc.go:61
│       │   │       ├── … 40.0ms → 80.0ms (1.2% → 2.4%, self 0.0% → 1.2%) slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at slices/zsortanyfunc.go:10
│       │   │       │   └── 40.0ms (1.2%) 2 more callees, led by (1.2% → 0.9%) encoding/json.mapEncoder.encode.func1 at encoding/json/encode.go:794
│       │   │       └── 30.0ms → 70.0ms (0.9% → 2.1%, self 0.3% → 0.6%) slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at 135
│       │   │           └── … 10.0ms → 40.0ms (0.3% → 1.2%, self 0.9% → 2.1% globally) cmpbody at internal/bytealg/compare_arm64.s:35
│       │   └── 110.0ms (3.3%) 6 more callees, led by (0.6% → 1.2%) reflect.(*MapIter).Value at reflect/map.go:289
│       ├── … 50.0ms → 20.0ms (1.5% → 0.6%) encoding/json.stringEncoder at encoding/json/encode.go:610
│       │   └── 40.0ms → 20.0ms (1.2% → 0.6%, self 1.2% → 0.3%, self 1.8% → 0.6% globally) encoding/json.appendString[go.shape.string] at 999
│       └── 10.0ms → 20.0ms (0.3% → 0.6%) 2 more callees, led by (0.0% → 0.6%) encoding/json.floatEncoder.encode at encoding/json/encode.go:571
├── … 500.0ms → 430.0ms (15.1% → 12.8%) runtime.schedule at runtime/proc.go:4135
│   ├── 450.0ms → 390.0ms (13.6% → 11.6%) runtime.findRunnable at 3389
│   │   ├── 400.0ms → 330.0ms (12.1% → 9.8%) runtime.stopm at 2992
│   │   │   ├── … 360.0ms → 320.0ms (10.9% → 9.5%, self 11.5% → 9.5% globally) runtime.pthread_cond_wait at runtime/sys_darwin.go:487
│   │   │   └── … 40.0ms → 10.0ms (1.2% → 0.3%, self 5.1% → 3.0% globally) runtime.usleep at runtime/sys_darwin.go:273
│   │   └── 50.0ms → 60.0ms (1.5% → 1.8%) 5 more callees, led by (0.9% → 0.3%) runtime.lock at runtime/lock_spinbit.go:151
│   └── … 50.0ms → 30.0ms (1.5% → 0.9%, self 3.0% → 2.4% globally) runtime.pthread_cond_signal at runtime/sys_darwin.go:508
└── 260.0ms → 220.0ms (7.9% → 6.5%) 5 more root frames, led by (3.9%) runtime.gcBgMarkWorker at runtime/mgc.go:1750
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |    Delta |             % |              Time | Samples | Function                                                                                                  | Location                              |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------- |
|  +11.9% | +70.00ms | 17.8% → 19.6% | 590.0ms → 660.0ms | 59 → 66 | `runtime.kevent`                                                                                          | `runtime/sys_darwin.go:438`           |
| +125.0% | +50.00ms |   1.2% → 2.7% |   40.0ms → 90.0ms |   4 → 9 | `encoding/json.stateInString`                                                                             | `encoding/json/scanner.go:339`        |
| +133.3% | +40.00ms |   0.9% → 2.1% |   30.0ms → 70.0ms |   3 → 7 | `cmpbody`                                                                                                 | `internal/bytealg/compare_arm64.s:35` |
|     new | +40.00ms |   0.0% → 1.2% |      0ms → 40.0ms |   0 → 4 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:10`           |
|     new | +40.00ms |   0.0% → 1.2% |      0ms → 40.0ms |   0 → 4 | `unicode/utf8.decodeRuneSlow`                                                                             | `unicode/utf8/utf8.go:171`            |
|  +66.7% | +20.00ms |   0.9% → 1.5% |   30.0ms → 50.0ms |   3 → 5 | `encoding/json.(*decodeState).rescanLiteral`                                                              | `encoding/json/decode.go:322`         |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.lock2`                                                                                           | `runtime/lock_spinbit.go:155`         |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.scanObject`                                                                                      | `runtime/mgcmark_greenteagc.go:1187`  |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `internal/runtime/maps.(*Iter).Next`                                                                      | `internal/runtime/maps/table.go:810`  |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `aeshashbody`                                                                                             | `runtime/asm_arm64.s:762`             |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.(*mspan).writeHeapBitsSmall`                                                                     | `runtime/mbitmap.go:624`              |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.alignDown`                                                                                       | `runtime/stubs.go:381`                |
|  +14.3% | +10.00ms |   2.1% → 2.4% |   70.0ms → 80.0ms |   7 → 8 | `encoding/json.checkValid`                                                                                | `encoding/json/scanner.go:33`         |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `encoding/json.(*decodeState).arrayInterface`                                                             | `encoding/json/decode.go:1052`        |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `runtime.newstack`                                                                                        | `runtime/stack.go:1026`               |
| +100.0% | +10.00ms |   0.3% → 0.6% |   10.0ms → 20.0ms |   1 → 2 | `runtime.mallocgcSmallScanNoHeader`                                                                       | `runtime/malloc.go:1503`              |
| +100.0% | +10.00ms |   0.3% → 0.6% |   10.0ms → 20.0ms |   1 → 2 | `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`     | `slices/zsortanyfunc.go:135`          |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`       | `slices/zsortanyfunc.go:61`           |
| +100.0% | +10.00ms |   0.3% → 0.6% |   10.0ms → 20.0ms |   1 → 2 | `unicode/utf8.DecodeRune`                                                                                 | `unicode/utf8/utf8.go:157`            |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `runtime.(*pallocBits).summarize`                                                                         | `runtime/mpallocbits.go:132`          |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time | Samples | Function                                             | Location                                  |
| ------: | -------: | -----------: | ----------------: | ------: | ---------------------------------------------------- | ----------------------------------------- |
|  -41.2% | -70.00ms |  5.1% → 3.0% | 170.0ms → 100.0ms | 17 → 10 | `runtime.usleep`                                     | `runtime/sys_darwin.go:273`               |
|  -15.8% | -60.00ms | 11.5% → 9.5% | 380.0ms → 320.0ms | 38 → 32 | `runtime.pthread_cond_wait`                          | `runtime/sys_darwin.go:487`               |
|  -66.7% | -40.00ms |  1.8% → 0.6% |   60.0ms → 20.0ms |   6 → 2 | `encoding/json.appendString[go.shape.string]`        | `encoding/json/encode.go:999`             |
|  -13.0% | -30.00ms |  6.9% → 6.0% | 230.0ms → 200.0ms | 23 → 20 | `runtime.pthread_kill`                               | `runtime/sys_darwin.go:148`               |
|  -20.0% | -20.00ms |  3.0% → 2.4% |  100.0ms → 80.0ms |  10 → 8 | `runtime.pthread_cond_signal`                        | `runtime/sys_darwin.go:508`               |
|  -20.0% | -20.00ms |  3.0% → 2.4% |  100.0ms → 80.0ms |  10 → 8 | `encoding/json.stateBeginString`                     | `encoding/json/scanner.go:268`            |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.mallocgc`                                   | `runtime/malloc.go:1067`                  |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.mapEncoder.encode.func1`              | `encoding/json/encode.go:794`             |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `internal/strconv.readFloat`                         | `internal/strconv/atof.go:171`            |
|  -50.0% | -20.00ms |  1.2% → 0.6% |   40.0ms → 20.0ms |   4 → 2 | `encoding/json.stateBeginValue`                      | `encoding/json/scanner.go:217`            |
|  -14.3% | -10.00ms |  2.1% → 1.8% |   70.0ms → 60.0ms |   7 → 6 | `runtime.tryDeferToSpanScan`                         | `runtime/mgcmark_greenteagc.go:264`       |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcDrain`                                    | `runtime/mgcmark.go:1239`                 |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_cond_timedwait_relative_np`         | `runtime/sys_darwin.go:497`               |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.slicebytetostring`                          | `runtime/string.go:139`                   |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcSmallScanHeader`                    | `runtime/malloc.go:1594`                  |
|  -50.0% | -10.00ms |  0.6% → 0.3% |   20.0ms → 10.0ms |   2 → 1 | `runtime.scanObjectsSmall`                           | `runtime/mgcmark_greenteagc.go:1015`      |
|  -33.3% | -10.00ms |  0.9% → 0.6% |   30.0ms → 20.0ms |   3 → 2 | `encoding/json.(*decodeState).scanWhile`             | `encoding/json/decode.go:298`             |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `internal/chacha8rand.block`                         | `internal/chacha8rand/chacha8_arm64.s:19` |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.nilinterhash`                               | `runtime/alg.go:177`                      |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` | `internal/runtime/atomic/types.go:478`    |

##### Standard library

|  Change |    Delta |            % |              Time | Samples | Function                                             | Location                                  |
| ------: | -------: | -----------: | ----------------: | ------: | ---------------------------------------------------- | ----------------------------------------- |
|  -41.2% | -70.00ms |  5.1% → 3.0% | 170.0ms → 100.0ms | 17 → 10 | `runtime.usleep`                                     | `runtime/sys_darwin.go:273`               |
|  -15.8% | -60.00ms | 11.5% → 9.5% | 380.0ms → 320.0ms | 38 → 32 | `runtime.pthread_cond_wait`                          | `runtime/sys_darwin.go:487`               |
|  -66.7% | -40.00ms |  1.8% → 0.6% |   60.0ms → 20.0ms |   6 → 2 | `encoding/json.appendString[go.shape.string]`        | `encoding/json/encode.go:999`             |
|  -13.0% | -30.00ms |  6.9% → 6.0% | 230.0ms → 200.0ms | 23 → 20 | `runtime.pthread_kill`                               | `runtime/sys_darwin.go:148`               |
|  -20.0% | -20.00ms |  3.0% → 2.4% |  100.0ms → 80.0ms |  10 → 8 | `runtime.pthread_cond_signal`                        | `runtime/sys_darwin.go:508`               |
|  -20.0% | -20.00ms |  3.0% → 2.4% |  100.0ms → 80.0ms |  10 → 8 | `encoding/json.stateBeginString`                     | `encoding/json/scanner.go:268`            |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.mallocgc`                                   | `runtime/malloc.go:1067`                  |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.mapEncoder.encode.func1`              | `encoding/json/encode.go:794`             |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `internal/strconv.readFloat`                         | `internal/strconv/atof.go:171`            |
|  -50.0% | -20.00ms |  1.2% → 0.6% |   40.0ms → 20.0ms |   4 → 2 | `encoding/json.stateBeginValue`                      | `encoding/json/scanner.go:217`            |
|  -14.3% | -10.00ms |  2.1% → 1.8% |   70.0ms → 60.0ms |   7 → 6 | `runtime.tryDeferToSpanScan`                         | `runtime/mgcmark_greenteagc.go:264`       |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_cond_timedwait_relative_np`         | `runtime/sys_darwin.go:497`               |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.slicebytetostring`                          | `runtime/string.go:139`                   |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcSmallScanHeader`                    | `runtime/malloc.go:1594`                  |
|  -50.0% | -10.00ms |  0.6% → 0.3% |   20.0ms → 10.0ms |   2 → 1 | `runtime.scanObjectsSmall`                           | `runtime/mgcmark_greenteagc.go:1015`      |
|  -33.3% | -10.00ms |  0.9% → 0.6% |   30.0ms → 20.0ms |   3 → 2 | `encoding/json.(*decodeState).scanWhile`             | `encoding/json/decode.go:298`             |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `internal/chacha8rand.block`                         | `internal/chacha8rand/chacha8_arm64.s:19` |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.nilinterhash`                               | `runtime/alg.go:177`                      |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` | `internal/runtime/atomic/types.go:478`    |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.stringEncoder`                        | `encoding/json/encode.go:610`             |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

| Change |    Delta |      % |              Time | Samples | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- |
| +11.9% | +70.00ms | 100.0% | 590.0ms → 660.0ms | 59 → 66 | `runtime/sys_darwin.go:439` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
| +300.0% | +30.00ms | 25.0% → 44.4% | 10.0ms → 40.0ms |   1 → 4 | `encoding/json/scanner.go:339` |
|  -66.7% | -20.00ms | 75.0% → 11.1% | 30.0ms → 10.0ms |   3 → 1 | `encoding/json/scanner.go:351` |
|     new | +10.00ms |  0.0% → 11.1% |    0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:341` |
|     new | +10.00ms |  0.0% → 11.1% |    0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:342` |
|     new | +10.00ms |  0.0% → 11.1% |    0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:346` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|  Change |    Delta |            % |         Time | Samples | Location                              |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------- |
|     new | +20.00ms | 0.0% → 28.6% | 0ms → 20.0ms |   0 → 2 | `internal/bytealg/compare_arm64.s:80` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/bytealg/compare_arm64.s:36` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/bytealg/compare_arm64.s:53` |
|     new | +10.00ms | 0.0% → 14.3% | 0ms → 10.0ms |   0 → 1 | `internal/bytealg/compare_arm64.s:38` |
|     new | +10.00ms | 0.0% → 14.3% | 0ms → 10.0ms |   0 → 1 | `internal/bytealg/compare_arm64.s:72` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

| Change |    Delta |            % |         Time | Samples | Location                    |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------- |
|    new | +30.00ms | 0.0% → 75.0% | 0ms → 30.0ms |   0 → 3 | `slices/zsortanyfunc.go:12` |
|    new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `slices/zsortanyfunc.go:11` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

| Change |    Delta |            % |         Time | Samples | Location                   |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------- |
|    new | +20.00ms | 0.0% → 50.0% | 0ms → 20.0ms |   0 → 2 | `unicode/utf8/utf8.go:171` |
|    new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `unicode/utf8/utf8.go:178` |
|    new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `unicode/utf8/utf8.go:186` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|  Change |    Delta |            % |         Time | Samples | Location                      |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------- |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json/decode.go:329` |
|     new | +10.00ms | 0.0% → 20.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:322` |
|     new | +10.00ms | 0.0% → 20.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:327` |
|     new | +10.00ms | 0.0% → 20.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:332` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

| Change |    Delta |            % |         Time | Samples | Location                      |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------- |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/lock_spinbit.go:162` |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/lock_spinbit.go:165` |

##### `runtime.scanObject` (`runtime/mgcmark_greenteagc.go:1187`)

| Change |    Delta |            % |         Time | Samples | Location                             |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------ |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:1250` |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:1258` |

##### `internal/runtime/maps.(*Iter).Next` (`internal/runtime/maps/table.go:810`)

| Change |    Delta |            % |         Time | Samples | Location                              |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------- |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `internal/runtime/maps/table.go:833`  |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `internal/runtime/maps/table.go:1008` |

##### `aeshashbody` (`runtime/asm_arm64.s:762`)

| Change |    Delta |            % |         Time | Samples | Location                  |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------- |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/asm_arm64.s:794` |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/asm_arm64.s:797` |

##### `runtime.(*mspan).writeHeapBitsSmall` (`runtime/mbitmap.go:624`)

| Change |    Delta |            % |         Time | Samples | Location                 |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------ |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/mbitmap.go:659` |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/mbitmap.go:683` |

##### `runtime.alignDown` (`runtime/stubs.go:381`)

| Change |    Delta |             % |         Time | Samples | Location               |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `runtime/stubs.go:382` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|  Change |    Delta |             % |            Time | Samples | Location                      |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------- |
| +100.0% | +20.00ms | 28.6% → 50.0% | 20.0ms → 40.0ms |   2 → 4 | `encoding/json/scanner.go:37` |
| removed | -10.00ms |  14.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/scanner.go:35` |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

| Change |    Delta |             % |         Time | Samples | Location                       |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:1074` |

##### `runtime.newstack` (`runtime/stack.go:1026`)

| Change |    Delta |             % |         Time | Samples | Location                |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime/stack.go:1095` |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

| Change |    Delta |            % |         Time | Samples | Location                 |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------ |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/malloc.go:1531` |

##### `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:135`)

|  Change |    Delta |             % |         Time | Samples | Location                     |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `slices/zsortanyfunc.go:163` |
|     new | +10.00ms |  0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `slices/zsortanyfunc.go:143` |
|     new | +10.00ms |  0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `slices/zsortanyfunc.go:154` |

##### `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:61`)

| Change |    Delta |             % |         Time | Samples | Location                    |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `slices/zsortanyfunc.go:73` |

##### `unicode/utf8.DecodeRune` (`unicode/utf8/utf8.go:157`)

|  Change |    Delta |      % |            Time | Samples | Location                   |
| ------: | -------: | -----: | --------------: | ------: | -------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `unicode/utf8/utf8.go:161` |

##### `runtime.(*pallocBits).summarize` (`runtime/mpallocbits.go:132`)

| Change |    Delta |             % |         Time | Samples | Location                     |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime/mpallocbits.go:178` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

| Change |    Delta |      % |              Time | Samples | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- |
| -41.2% | -70.00ms | 100.0% | 170.0ms → 100.0ms | 17 → 10 | `runtime/sys_darwin.go:274` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

| Change |    Delta |      % |              Time | Samples | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- |
| -15.8% | -60.00ms | 100.0% | 380.0ms → 320.0ms | 38 → 32 | `runtime/sys_darwin.go:488` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
| removed | -20.00ms |  33.3% → 0.0% |    20.0ms → 0ms |   2 → 0 | `encoding/json/encode.go:1004` |
| removed | -10.00ms |  16.7% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/encode.go:1002` |
|  -50.0% | -10.00ms | 33.3% → 50.0% | 20.0ms → 10.0ms |   2 → 1 | `encoding/json/encode.go:1003` |
| removed | -10.00ms |  16.7% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/encode.go:1005` |
|     new | +10.00ms |  0.0% → 50.0% |    0ms → 10.0ms |   0 → 1 | `encoding/json/encode.go:1063` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

| Change |    Delta |      % |              Time | Samples | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- |
| -13.0% | -30.00ms | 100.0% | 230.0ms → 200.0ms | 23 → 20 | `runtime/sys_darwin.go:149` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

| Change |    Delta |      % |             Time | Samples | Location                    |
| -----: | -------: | -----: | ---------------: | ------: | --------------------------- |
| -20.0% | -20.00ms | 100.0% | 100.0ms → 80.0ms |  10 → 8 | `runtime/sys_darwin.go:509` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
| removed | -20.00ms |  20.0% → 0.0% |    20.0ms → 0ms |   2 → 0 | `encoding/json/scanner.go:270` |
|  +33.3% | +10.00ms | 30.0% → 50.0% | 30.0ms → 40.0ms |   3 → 4 | `encoding/json/scanner.go:272` |
| removed | -10.00ms |  10.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/scanner.go:274` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|  Change |    Delta |            % |         Time | Samples | Location                 |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------ |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1067` |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1112` |

##### `encoding/json.mapEncoder.encode.func1` (`encoding/json/encode.go:794`)

|  Change |    Delta |            % |         Time | Samples | Location                      |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------- |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json/encode.go:794` |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json/encode.go:795` |

##### `internal/strconv.readFloat` (`internal/strconv/atof.go:171`)

|  Change |    Delta |            % |         Time | Samples | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/strconv/atof.go:219` |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/strconv/atof.go:224` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
|  -66.7% | -20.00ms | 75.0% → 50.0% | 30.0ms → 10.0ms |   3 → 1 | `encoding/json/scanner.go:221` |
| removed | -10.00ms |  25.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/scanner.go:217` |
|     new | +10.00ms |  0.0% → 50.0% |    0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:234` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|  Change |    Delta |             % |            Time | Samples | Location                            |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------- |
|  -66.7% | -20.00ms | 42.9% → 16.7% | 30.0ms → 10.0ms |   3 → 1 | `runtime/mgcmark_greenteagc.go:290` |
|  -50.0% | -10.00ms | 28.6% → 16.7% | 20.0ms → 10.0ms |   2 → 1 | `runtime/mgcmark_greenteagc.go:283` |
| removed | -10.00ms |  14.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `runtime/mgcmark_greenteagc.go:288` |
|     new | +10.00ms |  0.0% → 16.7% |    0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:274` |
|     new | +10.00ms |  0.0% → 16.7% |    0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:276` |

##### `runtime.gcDrain` (`runtime/mgcmark.go:1239`)

|  Change |    Delta |             % |         Time | Samples | Location                  |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/mgcmark.go:1307` |

##### `runtime.pthread_cond_timedwait_relative_np` (`runtime/sys_darwin.go:497`)

|  Change |    Delta |             % |         Time | Samples | Location                    |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/sys_darwin.go:498` |

##### `runtime.slicebytetostring` (`runtime/string.go:139`)

|  Change |    Delta |             % |         Time | Samples | Location                |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/string.go:173` |

##### `runtime.mallocgcSmallScanHeader` (`runtime/malloc.go:1594`)

|  Change |    Delta |             % |         Time | Samples | Location                 |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1676` |

##### `runtime.scanObjectsSmall` (`runtime/mgcmark_greenteagc.go:1015`)

|  Change |    Delta |             % |         Time | Samples | Location                             |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------ |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime/mgcmark_greenteagc.go:1050` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:1055` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

| Change |    Delta |      % |            Time | Samples | Location                      |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------- |
| -33.3% | -10.00ms | 100.0% | 30.0ms → 20.0ms |   3 → 2 | `encoding/json/decode.go:301` |

##### `internal/chacha8rand.block` (`internal/chacha8rand/chacha8_arm64.s:19`)

|  Change |    Delta |             % |         Time | Samples | Location                                  |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/chacha8rand/chacha8_arm64.s:65` |

##### `runtime.nilinterhash` (`runtime/alg.go:177`)

|  Change |    Delta |             % |         Time | Samples | Location             |
| ------: | -------: | ------------: | -----------: | ------: | -------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/alg.go:183` |

##### `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` (`internal/runtime/atomic/types.go:478`)

|  Change |    Delta |             % |         Time | Samples | Location                               |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic/types.go:479` |

##### `encoding/json.stringEncoder` (`encoding/json/encode.go:610`)

|  Change |    Delta |             % |         Time | Samples | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json/encode.go:610` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

| Change |    Delta |      % |              Time | Samples | Caller            | Location                       |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | ------------------------------ |
| +11.9% | +70.00ms | 100.0% | 590.0ms → 660.0ms | 59 → 66 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|  Change |    Delta |      % |            Time | Samples | Caller                     | Location                      |
| ------: | -------: | -----: | --------------: | ------: | -------------------------- | ----------------------------- |
| +125.0% | +50.00ms | 100.0% | 40.0ms → 90.0ms |   4 → 9 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|  Change |    Delta |      % |            Time | Samples | Caller                           | Location                                |
| ------: | -------: | -----: | --------------: | ------: | -------------------------------- | --------------------------------------- |
| +133.3% | +40.00ms | 100.0% | 30.0ms → 70.0ms |   3 → 7 | `internal/bytealg.CompareString` | `internal/bytealg/compare_native.go:14` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                              | Location                    |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
|    new | +40.00ms | 0.0% → 100.0% | 0ms → 40.0ms |   0 → 4 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location                   |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | -------------------------- |
|    new | +40.00ms | 0.0% → 100.0% | 0ms → 40.0ms |   0 → 4 | `unicode/utf8.DecodeRune` | `unicode/utf8/utf8.go:157` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|  Change |    Delta |             % |            Time | Samples | Caller                                         | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------- | ------------------------------ |
| +200.0% | +20.00ms | 33.3% → 60.0% | 10.0ms → 30.0ms |   1 → 3 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

| Change |    Delta |             % |         Time | Samples | Caller                 | Location                     |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------- | ---------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `runtime.lockWithRank` | `runtime/lockrank_off.go:23` |

##### `runtime.scanObject` (`runtime/mgcmark_greenteagc.go:1187`)

| Change |    Delta |             % |         Time | Samples | Caller            | Location                  |
| -----: | -------: | ------------: | -----------: | ------: | ----------------- | ------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `runtime.gcDrain` | `runtime/mgcmark.go:1239` |

##### `internal/runtime/maps.(*Iter).Next` (`internal/runtime/maps/table.go:810`)

| Change |    Delta |             % |         Time | Samples | Caller                | Location             |
| -----: | -------: | ------------: | -----------: | ------: | --------------------- | -------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `reflect.mapIterNext` | `reflect/map.go:190` |

##### `aeshashbody` (`runtime/asm_arm64.s:762`)

| Change |    Delta |             % |         Time | Samples | Caller                                | Location                              |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------- | ------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `internal/runtime/maps.(*table).grow` | `internal/runtime/maps/table.go:1227` |

##### `runtime.(*mspan).writeHeapBitsSmall` (`runtime/mbitmap.go:624`)

| Change |    Delta |             % |         Time | Samples | Caller                        | Location                 |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------- | ------------------------ |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `runtime.heapSetTypeNoHeader` | `runtime/mbitmap.go:705` |

##### `runtime.alignDown` (`runtime/stubs.go:381`)

| Change |    Delta |             % |         Time | Samples | Caller                       | Location                            |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------- | ----------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `runtime.tryDeferToSpanScan` | `runtime/mgcmark_greenteagc.go:264` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

| Change |    Delta |      % |            Time | Samples | Caller                    | Location                      |
| -----: | -------: | -----: | --------------: | ------: | ------------------------- | ----------------------------- |
| +14.3% | +10.00ms | 100.0% | 70.0ms → 80.0ms |   7 → 8 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

| Change |    Delta |             % |         Time | Samples | Caller                                        | Location                       |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------- | ------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |

##### `runtime.newstack` (`runtime/stack.go:1026`)

| Change |    Delta |             % |         Time | Samples | Caller                                        | Location                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------- | ------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.(*gcControllerState).markWorkerStop` | `runtime/mgcpacer.go:939` |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

|  Change |    Delta |      % |            Time | Samples | Caller             | Location                 |
| ------: | -------: | -----: | --------------: | ------: | ------------------ | ------------------------ |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `runtime.mallocgc` | `runtime/malloc.go:1067` |

##### `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:135`)

|  Change |    Delta |      % |            Time | Samples | Caller                                                                                              | Location                    |
| ------: | -------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:61`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                   | Location            |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/sort.go:30` |

##### `unicode/utf8.DecodeRune` (`unicode/utf8/utf8.go:157`)

|  Change |    Delta |      % |            Time | Samples | Caller                       | Location                       |
| ------: | -------: | -----: | --------------: | ------: | ---------------------------- | ------------------------------ |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json.unquoteBytes` | `encoding/json/decode.go:1193` |

##### `runtime.(*pallocBits).summarize` (`runtime/mpallocbits.go:132`)

| Change |    Delta |             % |         Time | Samples | Caller                        | Location                    |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------- | --------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.(*pageAlloc).update` | `runtime/mpagealloc.go:492` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

| Change |     Delta |              % |             Time | Samples | Caller             | Location                   |
| -----: | --------: | -------------: | ---------------: | ------: | ------------------ | -------------------------- |
| -58.8% | -100.00ms | 100.0% → 70.0% | 170.0ms → 70.0ms |  17 → 7 | `runtime.osyield`  | `runtime/os_darwin.go:379` |
|    new |  +30.00ms |   0.0% → 30.0% |     0ms → 30.0ms |   0 → 3 | `runtime.runqgrab` | `runtime/proc.go:7662`     |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

| Change |    Delta |      % |              Time | Samples | Caller              | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -15.8% | -60.00ms | 100.0% | 380.0ms → 320.0ms | 38 → 32 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

| Change |    Delta |             % |            Time | Samples | Caller                            | Location                      |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------- | ----------------------------- |
| -75.0% | -30.00ms | 66.7% → 50.0% | 40.0ms → 10.0ms |   4 → 1 | `encoding/json.stringEncoder`     | `encoding/json/encode.go:610` |
| -50.0% | -10.00ms | 33.3% → 50.0% | 20.0ms → 10.0ms |   2 → 1 | `encoding/json.mapEncoder.encode` | `encoding/json/encode.go:765` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

| Change |    Delta |      % |              Time | Samples | Caller            | Location                   |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | -------------------------- |
| -13.0% | -30.00ms | 100.0% | 230.0ms → 200.0ms | 23 → 20 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

| Change |    Delta |      % |             Time | Samples | Caller               | Location                  |
| -----: | -------: | -----: | ---------------: | ------: | -------------------- | ------------------------- |
| -20.0% | -20.00ms | 100.0% | 100.0ms → 80.0ms |  10 → 8 | `runtime.semawakeup` | `runtime/os_darwin.go:83` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

| Change |    Delta |             % |            Time | Samples | Caller                                   | Location                      |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------------------- | ----------------------------- |
| -50.0% | -30.00ms | 60.0% → 37.5% | 60.0ms → 30.0ms |   6 → 3 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |
| +25.0% | +10.00ms | 40.0% → 62.5% | 40.0ms → 50.0ms |   4 → 5 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|  Change |    Delta |             % |         Time | Samples | Caller                      | Location                |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------- | ----------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.slicebytetostring` | `runtime/string.go:139` |

##### `encoding/json.mapEncoder.encode.func1` (`encoding/json/encode.go:794`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                                    | Location                    |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- | --------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:10` |

##### `internal/strconv.readFloat` (`internal/strconv/atof.go:171`)

|  Change |    Delta |             % |         Time | Samples | Caller                    | Location                       |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------- | ------------------------------ |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `internal/strconv.atof64` | `internal/strconv/atof.go:614` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|  Change |    Delta |             % |         Time | Samples | Caller                                   | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------- | ----------------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

| Change |    Delta |              % |            Time | Samples | Caller                     | Location                             |
| -----: | -------: | -------------: | --------------: | ------: | -------------------------- | ------------------------------------ |
| -71.4% | -50.00ms | 100.0% → 33.3% | 70.0ms → 20.0ms |   7 → 2 | `runtime.scanObject`       | `runtime/mgcmark_greenteagc.go:1187` |
|    new | +40.00ms |   0.0% → 66.7% |    0ms → 40.0ms |   0 → 4 | `runtime.scanObjectsSmall` | `runtime/mgcmark_greenteagc.go:1015` |

##### `runtime.gcDrain` (`runtime/mgcmark.go:1239`)

|  Change |    Delta |             % |         Time | Samples | Caller                               | Location                  |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------ | ------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.gcDrainMarkWorkerDedicated` | `runtime/mgcmark.go:1173` |

##### `runtime.pthread_cond_timedwait_relative_np` (`runtime/sys_darwin.go:497`)

|  Change |    Delta |             % |         Time | Samples | Caller              | Location                  |
| ------: | -------: | ------------: | -----------: | ------: | ------------------- | ------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.slicebytetostring` (`runtime/string.go:139`)

|  Change |    Delta |             % |         Time | Samples | Caller                  | Location                       |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------- | ------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `runtime.mallocgcSmallScanHeader` (`runtime/malloc.go:1594`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                 |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.mallocgc` | `runtime/malloc.go:1067` |

##### `runtime.scanObjectsSmall` (`runtime/mgcmark_greenteagc.go:1015`)

| Change |    Delta |      % |            Time | Samples | Caller             | Location                            |
| -----: | -------: | -----: | --------------: | ------: | ------------------ | ----------------------------------- |
| -50.0% | -10.00ms | 100.0% | 20.0ms → 10.0ms |   2 → 1 | `runtime.scanSpan` | `runtime/mgcmark_greenteagc.go:844` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

| Change |    Delta |      % |            Time | Samples | Caller                                         | Location                       |
| -----: | -------: | -----: | --------------: | ------: | ---------------------------------------------- | ------------------------------ |
| -33.3% | -10.00ms | 100.0% | 30.0ms → 20.0ms |   3 → 2 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `runtime.nilinterhash` (`runtime/alg.go:177`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                           | Location                          |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------- | --------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/sync.(*HashTrieMap[go.shape.interface {},go.shape.interface {}]).Load` | `internal/sync/hashtriemap.go:64` |

##### `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` (`internal/runtime/atomic/types.go:478`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                                                                         | Location                               |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic.(*Pointer[go.shape.struct { runtime.spanSetBlockHeader2; runtime.spans [512]runtime.atomicMSpanPointer }]).StoreNoWB` | `internal/runtime/atomic/types.go:538` |

##### `encoding/json.stringEncoder` (`encoding/json/encode.go:610`)

|  Change |    Delta |             % |         Time | Samples | Caller                                      | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------- | ----------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |   Samples | Function                                                                                                                                 | Location                                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  +16.0% | +130.00ms | 24.5% → 28.0% | 810.0ms → 940.0ms |   81 → 94 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run`                                                                        | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |
|  +16.0% | +130.00ms | 24.5% → 28.0% | 810.0ms → 940.0ms |   81 → 94 | `main.main`                                                                                                                              | `github.com/tomeraberbach/profiler-md-workload/main.go:12`               |
|  +16.0% | +130.00ms | 24.5% → 28.0% | 810.0ms → 940.0ms |   81 → 94 | `runtime.main`                                                                                                                           | `runtime/proc.go:149`                                                    |
| +128.6% |  +90.00ms |   2.1% → 4.8% |  70.0ms → 160.0ms |    7 → 16 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`                                      | `slices/zsortanyfunc.go:61`                                              |
| +128.6% |  +90.00ms |   2.1% → 4.8% |  70.0ms → 160.0ms |    7 → 16 | `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/sort.go:30`                                                      |
|  +33.3% |  +80.00ms |   7.3% → 9.5% | 240.0ms → 320.0ms |   24 → 32 | `encoding/json.Marshal`                                                                                                                  | `encoding/json/encode.go:205`                                            |
|  +11.9% |  +70.00ms | 17.8% → 19.6% | 590.0ms → 660.0ms |   59 → 66 | `runtime.kevent`                                                                                                                         | `runtime/sys_darwin.go:438`                                              |
|  +11.9% |  +70.00ms | 17.8% → 19.6% | 590.0ms → 660.0ms |   59 → 66 | `runtime.netpoll`                                                                                                                        | `runtime/netpoll_kqueue.go:90`                                           |
|  +11.9% |  +70.00ms | 17.8% → 19.6% | 590.0ms → 660.0ms |   59 → 66 | `runtime.startTheWorldWithSema`                                                                                                          | `runtime/proc.go:1760`                                                   |
|  +29.2% |  +70.00ms |   7.3% → 9.2% | 240.0ms → 310.0ms |   24 → 31 | `encoding/json.mapEncoder.encode`                                                                                                        | `encoding/json/encode.go:765`                                            |
|  +29.2% |  +70.00ms |   7.3% → 9.2% | 240.0ms → 310.0ms |   24 → 31 | `encoding/json.(*encodeState).reflectValue`                                                                                              | `encoding/json/encode.go:366`                                            |
|  +29.2% |  +70.00ms |   7.3% → 9.2% | 240.0ms → 310.0ms |   24 → 31 | `encoding/json.(*encodeState).marshal`                                                                                                   | `encoding/json/encode.go:333`                                            |
|  +10.2% |  +60.00ms | 17.8% → 19.3% | 590.0ms → 650.0ms |   59 → 65 | `runtime.gcStart.func4`                                                                                                                  | `runtime/mgc.go:947`                                                     |
|  +25.0% |  +60.00ms |   7.3% → 8.9% | 240.0ms → 300.0ms |   24 → 30 | `encoding/json.interfaceEncoder`                                                                                                         | `encoding/json/encode.go:695`                                            |
|  +25.0% |  +60.00ms |   7.3% → 8.9% | 240.0ms → 300.0ms |   24 → 30 | `encoding/json.arrayEncoder.encode`                                                                                                      | `encoding/json/encode.go:883`                                            |
|  +25.0% |  +60.00ms |   7.3% → 8.9% | 240.0ms → 300.0ms |   24 → 30 | `encoding/json.sliceEncoder.encode`                                                                                                      | `encoding/json/encode.go:843`                                            |
|   +2.6% |  +50.00ms | 57.1% → 57.7% |     1.89s → 1.94s | 189 → 194 | `runtime.systemstack`                                                                                                                    | `runtime/asm_arm64.s:353`                                                |
| +125.0% |  +50.00ms |   1.2% → 2.7% |   40.0ms → 90.0ms |     4 → 9 | `encoding/json.stateInString`                                                                                                            | `encoding/json/scanner.go:339`                                           |
|  +25.0% |  +50.00ms |   6.0% → 7.4% | 200.0ms → 250.0ms |   20 → 25 | `encoding/json.checkValid`                                                                                                               | `encoding/json/scanner.go:33`                                            |
|   +8.8% |  +50.00ms | 17.2% → 18.5% | 570.0ms → 620.0ms |   57 → 62 | `encoding/json.Unmarshal`                                                                                                                | `encoding/json/decode.go:102`                                            |

##### Standard library

|  Change |     Delta |             % |              Time |   Samples | Function                                                                                                                                 | Location                             |
| ------: | --------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
|  +16.0% | +130.00ms | 24.5% → 28.0% | 810.0ms → 940.0ms |   81 → 94 | `runtime.main`                                                                                                                           | `runtime/proc.go:149`                |
| +128.6% |  +90.00ms |   2.1% → 4.8% |  70.0ms → 160.0ms |    7 → 16 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`                                      | `slices/zsortanyfunc.go:61`          |
| +128.6% |  +90.00ms |   2.1% → 4.8% |  70.0ms → 160.0ms |    7 → 16 | `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/sort.go:30`                  |
|  +33.3% |  +80.00ms |   7.3% → 9.5% | 240.0ms → 320.0ms |   24 → 32 | `encoding/json.Marshal`                                                                                                                  | `encoding/json/encode.go:205`        |
|  +11.9% |  +70.00ms | 17.8% → 19.6% | 590.0ms → 660.0ms |   59 → 66 | `runtime.kevent`                                                                                                                         | `runtime/sys_darwin.go:438`          |
|  +11.9% |  +70.00ms | 17.8% → 19.6% | 590.0ms → 660.0ms |   59 → 66 | `runtime.netpoll`                                                                                                                        | `runtime/netpoll_kqueue.go:90`       |
|  +11.9% |  +70.00ms | 17.8% → 19.6% | 590.0ms → 660.0ms |   59 → 66 | `runtime.startTheWorldWithSema`                                                                                                          | `runtime/proc.go:1760`               |
|  +29.2% |  +70.00ms |   7.3% → 9.2% | 240.0ms → 310.0ms |   24 → 31 | `encoding/json.mapEncoder.encode`                                                                                                        | `encoding/json/encode.go:765`        |
|  +29.2% |  +70.00ms |   7.3% → 9.2% | 240.0ms → 310.0ms |   24 → 31 | `encoding/json.(*encodeState).reflectValue`                                                                                              | `encoding/json/encode.go:366`        |
|  +29.2% |  +70.00ms |   7.3% → 9.2% | 240.0ms → 310.0ms |   24 → 31 | `encoding/json.(*encodeState).marshal`                                                                                                   | `encoding/json/encode.go:333`        |
|  +25.0% |  +60.00ms |   7.3% → 8.9% | 240.0ms → 300.0ms |   24 → 30 | `encoding/json.interfaceEncoder`                                                                                                         | `encoding/json/encode.go:695`        |
|  +25.0% |  +60.00ms |   7.3% → 8.9% | 240.0ms → 300.0ms |   24 → 30 | `encoding/json.arrayEncoder.encode`                                                                                                      | `encoding/json/encode.go:883`        |
|  +25.0% |  +60.00ms |   7.3% → 8.9% | 240.0ms → 300.0ms |   24 → 30 | `encoding/json.sliceEncoder.encode`                                                                                                      | `encoding/json/encode.go:843`        |
|   +2.6% |  +50.00ms | 57.1% → 57.7% |     1.89s → 1.94s | 189 → 194 | `runtime.systemstack`                                                                                                                    | `runtime/asm_arm64.s:353`            |
| +125.0% |  +50.00ms |   1.2% → 2.7% |   40.0ms → 90.0ms |     4 → 9 | `encoding/json.stateInString`                                                                                                            | `encoding/json/scanner.go:339`       |
|  +25.0% |  +50.00ms |   6.0% → 7.4% | 200.0ms → 250.0ms |   20 → 25 | `encoding/json.checkValid`                                                                                                               | `encoding/json/scanner.go:33`        |
|   +8.8% |  +50.00ms | 17.2% → 18.5% | 570.0ms → 620.0ms |   57 → 62 | `encoding/json.Unmarshal`                                                                                                                | `encoding/json/decode.go:102`        |
| +250.0% |  +50.00ms |   0.6% → 2.1% |   20.0ms → 70.0ms |     2 → 7 | `runtime.scanObjectsSmall`                                                                                                               | `runtime/mgcmark_greenteagc.go:1015` |
| +250.0% |  +50.00ms |   0.6% → 2.1% |   20.0ms → 70.0ms |     2 → 7 | `runtime.scanSpan`                                                                                                                       | `runtime/mgcmark_greenteagc.go:844`  |
| +100.0% |  +50.00ms |   1.5% → 3.0% |  50.0ms → 100.0ms |    5 → 10 | `encoding/json.unquoteBytes`                                                                                                             | `encoding/json/decode.go:1193`       |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time | Samples | Function                                    | Location                      |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| -58.8% | -100.00ms |   5.1% → 2.1% |  170.0ms → 70.0ms |  17 → 7 | `runtime.osyield`                           | `runtime/os_darwin.go:379`    |
| -16.7% |  -90.00ms | 16.3% → 13.4% | 540.0ms → 450.0ms | 54 → 45 | `runtime.schedule`                          | `runtime/proc.go:4135`        |
| -19.0% |  -80.00ms | 12.7% → 10.1% | 420.0ms → 340.0ms | 42 → 34 | `runtime.stopm`                             | `runtime/proc.go:2992`        |
| -16.3% |  -80.00ms | 14.8% → 12.2% | 490.0ms → 410.0ms | 49 → 41 | `runtime.findRunnable`                      | `runtime/proc.go:3389`        |
| -15.7% |  -80.00ms | 15.4% → 12.8% | 510.0ms → 430.0ms | 51 → 43 | `runtime.park_m`                            | `runtime/proc.go:4253`        |
| -15.7% |  -80.00ms | 15.4% → 12.8% | 510.0ms → 430.0ms | 51 → 43 | `runtime.mcall`                             | `runtime/asm_arm64.s:302`     |
| -44.4% |  -80.00ms |   5.4% → 3.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lock2`                             | `runtime/lock_spinbit.go:155` |
| -44.4% |  -80.00ms |   5.4% → 3.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lockWithRank`                      | `runtime/lockrank_off.go:23`  |
| -44.4% |  -80.00ms |   5.4% → 3.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lock`                              | `runtime/lock_spinbit.go:151` |
| -30.8% |  -80.00ms |   7.9% → 5.4% | 260.0ms → 180.0ms | 26 → 18 | `runtime.(*gcControllerState).enlistWorker` | `runtime/mgcpacer.go:697`     |
| -17.9% |  -70.00ms |  11.8% → 9.5% | 390.0ms → 320.0ms | 39 → 32 | `runtime.semasleep`                         | `runtime/os_darwin.go:45`     |
| -41.2% |  -70.00ms |   5.1% → 3.0% | 170.0ms → 100.0ms | 17 → 10 | `runtime.usleep`                            | `runtime/sys_darwin.go:273`   |
| -24.1% |  -70.00ms |   8.8% → 6.5% | 290.0ms → 220.0ms | 29 → 22 | `runtime.gcDrainMarkWorkerDedicated`        | `runtime/mgcmark.go:1173`     |
| -15.8% |  -60.00ms |  11.5% → 9.5% | 380.0ms → 320.0ms | 38 → 32 | `runtime.pthread_cond_wait`                 | `runtime/sys_darwin.go:487`   |
| -14.6% |  -60.00ms | 12.4% → 10.4% | 410.0ms → 350.0ms | 41 → 35 | `runtime.gcDrain`                           | `runtime/mgcmark.go:1239`     |
| -14.6% |  -60.00ms | 12.4% → 10.4% | 410.0ms → 350.0ms | 41 → 35 | `runtime.gcBgMarkWorker.func2`              | `runtime/mgc.go:1847`         |
| -13.5% |  -50.00ms |  11.2% → 9.5% | 370.0ms → 320.0ms | 37 → 32 | `runtime.notesleep`                         | `runtime/lock_sema.go:46`     |
| -13.5% |  -50.00ms |  11.2% → 9.5% | 370.0ms → 320.0ms | 37 → 32 | `runtime.mPark`                             | `runtime/proc.go:1965`        |
| -21.7% |  -50.00ms |   6.9% → 5.4% | 230.0ms → 180.0ms | 23 → 18 | `runtime.preemptone`                        | `runtime/proc.go:6866`        |
| -38.5% |  -50.00ms |   3.9% → 2.4% |  130.0ms → 80.0ms |  13 → 8 | `encoding/json.(*decodeState).scanWhile`    | `encoding/json/decode.go:298` |

##### Standard library

|  Change |     Delta |             % |              Time | Samples | Function                                    | Location                             |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------------------------------- | ------------------------------------ |
|  -58.8% | -100.00ms |   5.1% → 2.1% |  170.0ms → 70.0ms |  17 → 7 | `runtime.osyield`                           | `runtime/os_darwin.go:379`           |
|  -16.7% |  -90.00ms | 16.3% → 13.4% | 540.0ms → 450.0ms | 54 → 45 | `runtime.schedule`                          | `runtime/proc.go:4135`               |
|  -19.0% |  -80.00ms | 12.7% → 10.1% | 420.0ms → 340.0ms | 42 → 34 | `runtime.stopm`                             | `runtime/proc.go:2992`               |
|  -16.3% |  -80.00ms | 14.8% → 12.2% | 490.0ms → 410.0ms | 49 → 41 | `runtime.findRunnable`                      | `runtime/proc.go:3389`               |
|  -15.7% |  -80.00ms | 15.4% → 12.8% | 510.0ms → 430.0ms | 51 → 43 | `runtime.park_m`                            | `runtime/proc.go:4253`               |
|  -15.7% |  -80.00ms | 15.4% → 12.8% | 510.0ms → 430.0ms | 51 → 43 | `runtime.mcall`                             | `runtime/asm_arm64.s:302`            |
|  -44.4% |  -80.00ms |   5.4% → 3.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lock2`                             | `runtime/lock_spinbit.go:155`        |
|  -44.4% |  -80.00ms |   5.4% → 3.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lockWithRank`                      | `runtime/lockrank_off.go:23`         |
|  -44.4% |  -80.00ms |   5.4% → 3.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lock`                              | `runtime/lock_spinbit.go:151`        |
|  -30.8% |  -80.00ms |   7.9% → 5.4% | 260.0ms → 180.0ms | 26 → 18 | `runtime.(*gcControllerState).enlistWorker` | `runtime/mgcpacer.go:697`            |
|  -17.9% |  -70.00ms |  11.8% → 9.5% | 390.0ms → 320.0ms | 39 → 32 | `runtime.semasleep`                         | `runtime/os_darwin.go:45`            |
|  -41.2% |  -70.00ms |   5.1% → 3.0% | 170.0ms → 100.0ms | 17 → 10 | `runtime.usleep`                            | `runtime/sys_darwin.go:273`          |
|  -15.8% |  -60.00ms |  11.5% → 9.5% | 380.0ms → 320.0ms | 38 → 32 | `runtime.pthread_cond_wait`                 | `runtime/sys_darwin.go:487`          |
|  -13.5% |  -50.00ms |  11.2% → 9.5% | 370.0ms → 320.0ms | 37 → 32 | `runtime.notesleep`                         | `runtime/lock_sema.go:46`            |
|  -13.5% |  -50.00ms |  11.2% → 9.5% | 370.0ms → 320.0ms | 37 → 32 | `runtime.mPark`                             | `runtime/proc.go:1965`               |
|  -21.7% |  -50.00ms |   6.9% → 5.4% | 230.0ms → 180.0ms | 23 → 18 | `runtime.preemptone`                        | `runtime/proc.go:6866`               |
|  -38.5% |  -50.00ms |   3.9% → 2.4% |  130.0ms → 80.0ms |  13 → 8 | `encoding/json.(*decodeState).scanWhile`    | `encoding/json/decode.go:298`        |
| removed |  -40.00ms |   1.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `runtime.runSafePointFn`                    | `runtime/proc.go:2232`               |
|  -30.0% |  -30.00ms |   3.0% → 2.1% |  100.0ms → 70.0ms |  10 → 7 | `runtime.notewakeup`                        | `runtime/lock_sema.go:23`            |
|  -37.5% |  -30.00ms |   2.4% → 1.5% |   80.0ms → 50.0ms |   8 → 5 | `runtime.scanObject`                        | `runtime/mgcmark_greenteagc.go:1187` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`)

| Change |     Delta |      % |              Time | Samples | Caller      | Location                                                   |
| -----: | --------: | -----: | ----------------: | ------: | ----------- | ---------------------------------------------------------- |
| +16.0% | +130.00ms | 100.0% | 810.0ms → 940.0ms | 81 → 94 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

| Change |     Delta |      % |              Time | Samples | Caller         | Location              |
| -----: | --------: | -----: | ----------------: | ------: | -------------- | --------------------- |
| +16.0% | +130.00ms | 100.0% | 810.0ms → 940.0ms | 81 → 94 | `runtime.main` | `runtime/proc.go:149` |

##### `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:61`)

|  Change |    Delta |             % |             Time | Samples | Caller                                                                                                                                   | Location                    |
| ------: | -------: | ------------: | ---------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| +128.6% | +90.00ms |        100.0% | 70.0ms → 160.0ms |  7 → 16 | `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/sort.go:30`         |
|  +33.3% | +10.00ms | 42.9% → 25.0% |  30.0ms → 40.0ms |   3 → 4 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`                                      | `slices/zsortanyfunc.go:61` |

##### `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/sort.go:30`)

|  Change |    Delta |      % |             Time | Samples | Caller                            | Location                      |
| ------: | -------: | -----: | ---------------: | ------: | --------------------------------- | ----------------------------- |
| +128.6% | +90.00ms | 100.0% | 70.0ms → 160.0ms |  7 → 16 | `encoding/json.mapEncoder.encode` | `encoding/json/encode.go:765` |

##### `encoding/json.Marshal` (`encoding/json/encode.go:205`)

| Change |    Delta |      % |              Time | Samples | Caller                                                            | Location                                                                 |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +33.3% | +80.00ms | 100.0% | 240.0ms → 320.0ms | 24 → 32 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

| Change |    Delta |      % |              Time | Samples | Caller            | Location                       |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | ------------------------------ |
| +11.9% | +70.00ms | 100.0% | 590.0ms → 660.0ms | 59 → 66 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`)

| Change |    Delta |      % |              Time | Samples | Caller                          | Location               |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------- | ---------------------- |
| +11.9% | +70.00ms | 100.0% | 590.0ms → 660.0ms | 59 → 66 | `runtime.startTheWorldWithSema` | `runtime/proc.go:1760` |

##### `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`)

| Change |    Delta |              % |              Time | Samples | Caller                            | Location              |
| -----: | -------: | -------------: | ----------------: | ------: | --------------------------------- | --------------------- |
| +10.2% | +60.00ms | 100.0% → 98.5% | 590.0ms → 650.0ms | 59 → 65 | `runtime.gcStart.func4`           | `runtime/mgc.go:947`  |
|    new | +10.00ms |    0.0% → 1.5% |      0ms → 10.0ms |   0 → 1 | `runtime.gcMarkTermination.func3` | `runtime/mgc.go:1500` |

##### `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`)

| Change |    Delta |      % |              Time | Samples | Caller                                      | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| +29.2% | +70.00ms | 100.0% | 240.0ms → 310.0ms | 24 → 31 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

| Change |    Delta |              % |              Time | Samples | Caller                                 | Location                      |
| -----: | -------: | -------------: | ----------------: | ------: | -------------------------------------- | ----------------------------- |
| +29.2% | +70.00ms |         100.0% | 240.0ms → 310.0ms | 24 → 31 | `encoding/json.(*encodeState).marshal` | `encoding/json/encode.go:333` |
| +25.0% | +60.00ms | 100.0% → 96.8% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.interfaceEncoder`       | `encoding/json/encode.go:695` |

##### `encoding/json.(*encodeState).marshal` (`encoding/json/encode.go:333`)

| Change |    Delta |      % |              Time | Samples | Caller                  | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------- |
| +29.2% | +70.00ms | 100.0% | 240.0ms → 310.0ms | 24 → 31 | `encoding/json.Marshal` | `encoding/json/encode.go:205` |

##### `runtime.gcStart.func4` (`runtime/mgc.go:947`)

| Change |    Delta |      % |              Time | Samples | Caller                | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | --------------------- | ------------------------- |
| +10.2% | +60.00ms | 100.0% | 590.0ms → 650.0ms | 59 → 65 | `runtime.systemstack` | `runtime/asm_arm64.s:353` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

| Change |    Delta |      % |              Time | Samples | Caller                              | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
| +25.0% | +60.00ms | 100.0% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.mapEncoder.encode`   | `encoding/json/encode.go:765` |
| +25.0% | +60.00ms | 100.0% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.arrayEncoder.encode` | `encoding/json/encode.go:883` |

##### `encoding/json.arrayEncoder.encode` (`encoding/json/encode.go:883`)

| Change |    Delta |      % |              Time | Samples | Caller                              | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
| +25.0% | +60.00ms | 100.0% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.sliceEncoder.encode` | `encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`encoding/json/encode.go:843`)

| Change |    Delta |      % |              Time | Samples | Caller                                      | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| +25.0% | +60.00ms | 100.0% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|  Change |    Delta |           % |              Time | Samples | Caller                          | Location                     |
| ------: | -------: | ----------: | ----------------: | ------: | ------------------------------- | ---------------------------- |
|   -7.7% | -10.00ms | 6.9% → 6.2% | 130.0ms → 120.0ms | 13 → 12 | `runtime.gcBgMarkWorker`        | `runtime/mgc.go:1750`        |
| +100.0% | +10.00ms | 0.5% → 1.0% |   10.0ms → 20.0ms |   1 → 2 | `runtime.wbBufFlush`            | `runtime/mwbbuf.go:166`      |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*pageAlloc).scavenge` | `runtime/mgcscavenge.go:675` |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `runtime.(*mheap).freeSpan`     | `runtime/mheap.go:1666`      |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `runtime.gcAssistAlloc`         | `runtime/mgcmark.go:499`     |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|  Change |    Delta |      % |            Time | Samples | Caller                     | Location                      |
| ------: | -------: | -----: | --------------: | ------: | -------------------------- | ----------------------------- |
| +125.0% | +50.00ms | 100.0% | 40.0ms → 90.0ms |   4 → 9 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

| Change |    Delta |      % |              Time | Samples | Caller                    | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------- | ----------------------------- |
| +25.0% | +50.00ms | 100.0% | 200.0ms → 250.0ms | 20 → 25 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

| Change |    Delta |      % |              Time | Samples | Caller                                                            | Location                                                                 |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  +8.8% | +50.00ms | 100.0% | 570.0ms → 620.0ms | 57 → 62 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |

##### `runtime.scanObjectsSmall` (`runtime/mgcmark_greenteagc.go:1015`)

|  Change |    Delta |      % |            Time | Samples | Caller             | Location                            |
| ------: | -------: | -----: | --------------: | ------: | ------------------ | ----------------------------------- |
| +250.0% | +50.00ms | 100.0% | 20.0ms → 70.0ms |   2 → 7 | `runtime.scanSpan` | `runtime/mgcmark_greenteagc.go:844` |

##### `runtime.scanSpan` (`runtime/mgcmark_greenteagc.go:844`)

|  Change |    Delta |      % |            Time | Samples | Caller            | Location                  |
| ------: | -------: | -----: | --------------: | ------: | ----------------- | ------------------------- |
| +250.0% | +50.00ms | 100.0% | 20.0ms → 70.0ms |   2 → 7 | `runtime.gcDrain` | `runtime/mgcmark.go:1239` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|  Change |    Delta |      % |             Time | Samples | Caller                  | Location                       |
| ------: | -------: | -----: | ---------------: | ------: | ----------------------- | ------------------------------ |
| +100.0% | +50.00ms | 100.0% | 50.0ms → 100.0ms |  5 → 10 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `runtime.osyield` (`runtime/os_darwin.go:379`)

| Change |     Delta |      % |             Time | Samples | Caller          | Location                      |
| -----: | --------: | -----: | ---------------: | ------: | --------------- | ----------------------------- |
| -58.8% | -100.00ms | 100.0% | 170.0ms → 70.0ms |  17 → 7 | `runtime.lock2` | `runtime/lock_spinbit.go:155` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

|  Change |    Delta |             % |              Time | Samples | Caller                | Location               |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------- | ---------------------- |
|  -14.0% | -70.00ms | 92.6% → 95.6% | 500.0ms → 430.0ms | 50 → 43 | `runtime.park_m`      | `runtime/proc.go:4253` |
|  -33.3% | -10.00ms |   5.6% → 4.4% |   30.0ms → 20.0ms |   3 → 2 | `runtime.goschedImpl` | `runtime/proc.go:4307` |
| removed | -10.00ms |   1.9% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.preemptPark` | `runtime/proc.go:4368` |

##### `runtime.stopm` (`runtime/proc.go:2992`)

| Change |    Delta |             % |              Time | Samples | Caller                 | Location               |
| -----: | -------: | ------------: | ----------------: | ------: | ---------------------- | ---------------------- |
| -19.5% | -80.00ms | 97.6% → 97.1% | 410.0ms → 330.0ms | 41 → 33 | `runtime.findRunnable` | `runtime/proc.go:3389` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

| Change |    Delta |      % |              Time | Samples | Caller             | Location               |
| -----: | -------: | -----: | ----------------: | ------: | ------------------ | ---------------------- |
| -16.3% | -80.00ms | 100.0% | 490.0ms → 410.0ms | 49 → 41 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

| Change |    Delta |      % |              Time | Samples | Caller          | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ------------------------- |
| -15.7% | -80.00ms | 100.0% | 510.0ms → 430.0ms | 51 → 43 | `runtime.mcall` | `runtime/asm_arm64.s:302` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

| Change |    Delta |      % |              Time | Samples | Caller                 | Location                     |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------- | ---------------------------- |
| -44.4% | -80.00ms | 100.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lockWithRank` | `runtime/lockrank_off.go:23` |

##### `runtime.lockWithRank` (`runtime/lockrank_off.go:23`)

| Change |    Delta |      % |              Time | Samples | Caller         | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | -------------- | ----------------------------- |
| -44.4% | -80.00ms | 100.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lock` | `runtime/lock_spinbit.go:151` |

##### `runtime.lock` (`runtime/lock_spinbit.go:151`)

|  Change |    Delta |             % |            Time | Samples | Caller                   | Location               |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------ | ---------------------- |
|  -80.0% | -40.00ms | 27.8% → 10.0% | 50.0ms → 10.0ms |   5 → 1 | `runtime.stopm`          | `runtime/proc.go:2992` |
| removed | -20.00ms |  11.1% → 0.0% |    20.0ms → 0ms |   2 → 0 | `runtime.runSafePointFn` | `runtime/proc.go:2232` |
|  -66.7% | -20.00ms | 16.7% → 10.0% | 30.0ms → 10.0ms |   3 → 1 | `runtime.findRunnable`   | `runtime/proc.go:3389` |
|  -16.7% | -10.00ms | 33.3% → 50.0% | 60.0ms → 50.0ms |   6 → 5 | `runtime.goschedImpl`    | `runtime/proc.go:4307` |
|     new | +10.00ms |  0.0% → 10.0% |    0ms → 10.0ms |   0 → 1 | `runtime.GOMAXPROCS`     | `runtime/debug.go:70`  |

##### `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`)

| Change |    Delta |      % |              Time | Samples | Caller            | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | ------------------------- |
| -30.8% | -80.00ms | 100.0% | 260.0ms → 180.0ms | 26 → 18 | `runtime.gcDrain` | `runtime/mgcmark.go:1239` |

##### `runtime.semasleep` (`runtime/os_darwin.go:45`)

|  Change |    Delta |              % |              Time | Samples | Caller                        | Location                      |
| ------: | -------: | -------------: | ----------------: | ------: | ----------------------------- | ----------------------------- |
|  -13.5% | -50.00ms | 94.9% → 100.0% | 370.0ms → 320.0ms | 37 → 32 | `runtime.notesleep`           | `runtime/lock_sema.go:46`     |
| removed | -10.00ms |    2.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.notetsleep_internal` | `runtime/lock_sema.go:75`     |
| removed | -10.00ms |    2.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.lock2`               | `runtime/lock_spinbit.go:155` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

| Change |     Delta |              % |             Time | Samples | Caller             | Location                   |
| -----: | --------: | -------------: | ---------------: | ------: | ------------------ | -------------------------- |
| -58.8% | -100.00ms | 100.0% → 70.0% | 170.0ms → 70.0ms |  17 → 7 | `runtime.osyield`  | `runtime/os_darwin.go:379` |
|    new |  +30.00ms |   0.0% → 30.0% |     0ms → 30.0ms |   0 → 3 | `runtime.runqgrab` | `runtime/proc.go:7662`     |

##### `runtime.gcDrainMarkWorkerDedicated` (`runtime/mgcmark.go:1173`)

| Change |    Delta |      % |              Time | Samples | Caller                         | Location              |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------ | --------------------- |
| -24.1% | -70.00ms | 100.0% | 290.0ms → 220.0ms | 29 → 22 | `runtime.gcBgMarkWorker.func2` | `runtime/mgc.go:1847` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

| Change |    Delta |      % |              Time | Samples | Caller              | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -15.8% | -60.00ms | 100.0% | 380.0ms → 320.0ms | 38 → 32 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.gcDrain` (`runtime/mgcmark.go:1239`)

| Change |    Delta |             % |              Time | Samples | Caller                               | Location                  |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------------------ | ------------------------- |
| -24.1% | -70.00ms | 70.7% → 62.9% | 290.0ms → 220.0ms | 29 → 22 | `runtime.gcDrainMarkWorkerDedicated` | `runtime/mgcmark.go:1173` |
|  +8.3% | +10.00ms | 29.3% → 37.1% | 120.0ms → 130.0ms | 12 → 13 | `runtime.gcDrainMarkWorkerIdle`      | `runtime/mgcmark.go:1167` |

##### `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`)

| Change |    Delta |      % |              Time | Samples | Caller                | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | --------------------- | ------------------------- |
| -14.6% | -60.00ms | 100.0% | 410.0ms → 350.0ms | 41 → 35 | `runtime.systemstack` | `runtime/asm_arm64.s:353` |

##### `runtime.notesleep` (`runtime/lock_sema.go:46`)

| Change |    Delta |      % |              Time | Samples | Caller          | Location               |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ---------------------- |
| -13.5% | -50.00ms | 100.0% | 370.0ms → 320.0ms | 37 → 32 | `runtime.mPark` | `runtime/proc.go:1965` |

##### `runtime.mPark` (`runtime/proc.go:1965`)

| Change |    Delta |      % |              Time | Samples | Caller          | Location               |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ---------------------- |
| -13.5% | -50.00ms | 100.0% | 370.0ms → 320.0ms | 37 → 32 | `runtime.stopm` | `runtime/proc.go:2992` |

##### `runtime.preemptone` (`runtime/proc.go:6866`)

| Change |    Delta |              % |              Time | Samples | Caller                                      | Location                  |
| -----: | -------: | -------------: | ----------------: | ------: | ------------------------------------------- | ------------------------- |
| -34.8% | -80.00ms | 100.0% → 83.3% | 230.0ms → 150.0ms | 23 → 15 | `runtime.(*gcControllerState).enlistWorker` | `runtime/mgcpacer.go:697` |
|    new | +30.00ms |   0.0% → 16.7% |      0ms → 30.0ms |   0 → 3 | `runtime.preemptall`                        | `runtime/proc.go:6843`    |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|  Change |    Delta |              % |             Time | Samples | Caller                                         | Location                       |
| ------: | -------: | -------------: | ---------------: | ------: | ---------------------------------------------- | ------------------------------ |
|  -33.3% | -40.00ms | 92.3% → 100.0% | 120.0ms → 80.0ms |  12 → 8 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |
| removed | -10.00ms |    7.7% → 0.0% |     10.0ms → 0ms |   1 → 0 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |

##### `runtime.runSafePointFn` (`runtime/proc.go:2232`)

|  Change |    Delta |             % |         Time | Samples | Caller                 | Location               |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------- | ---------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `runtime.findRunnable` | `runtime/proc.go:3389` |

##### `runtime.notewakeup` (`runtime/lock_sema.go:23`)

|  Change |    Delta |              % |            Time | Samples | Caller                   | Location               |
| ------: | -------: | -------------: | --------------: | ------: | ------------------------ | ---------------------- |
| removed | -20.00ms |   20.0% → 0.0% |    20.0ms → 0ms |   2 → 0 | `runtime.runSafePointFn` | `runtime/proc.go:2232` |
|  -12.5% | -10.00ms | 80.0% → 100.0% | 80.0ms → 70.0ms |   8 → 7 | `runtime.startm`         | `runtime/proc.go:3035` |

##### `runtime.scanObject` (`runtime/mgcmark_greenteagc.go:1187`)

| Change |    Delta |      % |            Time | Samples | Caller            | Location                  |
| -----: | -------: | -----: | --------------: | ------: | ----------------- | ------------------------- |
| -37.5% | -30.00ms | 100.0% | 80.0ms → 50.0ms |   8 → 5 | `runtime.gcDrain` | `runtime/mgcmark.go:1239` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`)

| Change |    Delta |             % |              Time | Samples | Callee                    | Location                      |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------- | ----------------------------- |
| +33.3% | +80.00ms | 29.6% → 34.0% | 240.0ms → 320.0ms | 24 → 32 | `encoding/json.Marshal`   | `encoding/json/encode.go:205` |
|  +8.8% | +50.00ms | 70.4% → 66.0% | 570.0ms → 620.0ms | 57 → 62 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

| Change |     Delta |      % |              Time | Samples | Callee                                                            | Location                                                                 |
| -----: | --------: | -----: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +16.0% | +130.00ms | 100.0% | 810.0ms → 940.0ms | 81 → 94 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |

##### `runtime.main` (`runtime/proc.go:149`)

| Change |     Delta |      % |              Time | Samples | Callee      | Location                                                   |
| -----: | --------: | -----: | ----------------: | ------: | ----------- | ---------------------------------------------------------- |
| +16.0% | +130.00ms | 100.0% | 810.0ms → 940.0ms | 81 → 94 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:61`)

|  Change |    Delta |             % |            Time | Samples | Callee                                                                                                    | Location                     |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| +133.3% | +40.00ms | 42.9% → 43.8% | 30.0ms → 70.0ms |   3 → 7 | `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`     | `slices/zsortanyfunc.go:135` |
| +100.0% | +40.00ms | 57.1% → 50.0% | 40.0ms → 80.0ms |   4 → 8 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:10`  |
|  +33.3% | +10.00ms | 42.9% → 25.0% | 30.0ms → 40.0ms |   3 → 4 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`       | `slices/zsortanyfunc.go:61`  |

##### `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/sort.go:30`)

|  Change |    Delta |      % |             Time | Samples | Callee                                                                                              | Location                    |
| ------: | -------: | -----: | ---------------: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
| +128.6% | +90.00ms | 100.0% | 70.0ms → 160.0ms |  7 → 16 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `encoding/json.Marshal` (`encoding/json/encode.go:205`)

| Change |    Delta |              % |              Time | Samples | Callee                                 | Location                      |
| -----: | -------: | -------------: | ----------------: | ------: | -------------------------------------- | ----------------------------- |
| +29.2% | +70.00ms | 100.0% → 96.9% | 240.0ms → 310.0ms | 24 → 31 | `encoding/json.(*encodeState).marshal` | `encoding/json/encode.go:333` |
|    new | +10.00ms |    0.0% → 3.1% |      0ms → 10.0ms |   0 → 1 | `sync.(*Pool).Put`                     | `sync/pool.go:99`             |

##### `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`)

| Change |    Delta |      % |              Time | Samples | Callee           | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | ---------------- | --------------------------- |
| +11.9% | +70.00ms | 100.0% | 590.0ms → 660.0ms | 59 → 66 | `runtime.kevent` | `runtime/sys_darwin.go:438` |

##### `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`)

| Change |    Delta |      % |              Time | Samples | Callee            | Location                       |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | ------------------------------ |
| +11.9% | +70.00ms | 100.0% | 590.0ms → 660.0ms | 59 → 66 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`)

|  Change |    Delta |              % |              Time | Samples | Callee                                                                                                                                   | Location                      |
| ------: | -------: | -------------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| +128.6% | +90.00ms |  29.2% → 51.6% |  70.0ms → 160.0ms |  7 → 16 | `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/sort.go:30`           |
|  +25.0% | +60.00ms | 100.0% → 96.8% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.interfaceEncoder`                                                                                                         | `encoding/json/encode.go:695` |
| removed | -30.00ms |   12.5% → 0.0% |      30.0ms → 0ms |   3 → 0 | `runtime.makeslice`                                                                                                                      | `runtime/slice.go:102`        |
|     new | +30.00ms |    0.0% → 9.7% |      0ms → 30.0ms |   0 → 3 | `reflect.(*MapIter).Key`                                                                                                                 | `reflect/map.go:245`          |
| +100.0% | +20.00ms |   8.3% → 12.9% |   20.0ms → 40.0ms |   2 → 4 | `reflect.(*MapIter).Value`                                                                                                               | `reflect/map.go:289`          |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

|  Change |    Delta |              % |              Time | Samples | Callee                              | Location                      |
| ------: | -------: | -------------: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
|  +29.2% | +70.00ms |         100.0% | 240.0ms → 310.0ms | 24 → 31 | `encoding/json.mapEncoder.encode`   | `encoding/json/encode.go:765` |
|  +25.0% | +60.00ms | 100.0% → 96.8% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.sliceEncoder.encode` | `encoding/json/encode.go:843` |
|  -60.0% | -30.00ms |   20.8% → 6.5% |   50.0ms → 20.0ms |   5 → 2 | `encoding/json.stringEncoder`       | `encoding/json/encode.go:610` |
|     new | +20.00ms |    0.0% → 6.5% |      0ms → 20.0ms |   0 → 2 | `encoding/json.floatEncoder.encode` | `encoding/json/encode.go:571` |
| removed | -10.00ms |    4.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.valueEncoder`        | `encoding/json/encode.go:381` |

##### `encoding/json.(*encodeState).marshal` (`encoding/json/encode.go:333`)

| Change |    Delta |      % |              Time | Samples | Callee                                      | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| +29.2% | +70.00ms | 100.0% | 240.0ms → 310.0ms | 24 → 31 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `runtime.gcStart.func4` (`runtime/mgc.go:947`)

| Change |    Delta |      % |              Time | Samples | Callee                          | Location               |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------- | ---------------------- |
| +10.2% | +60.00ms | 100.0% | 590.0ms → 650.0ms | 59 → 65 | `runtime.startTheWorldWithSema` | `runtime/proc.go:1760` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

|  Change |    Delta |           % |              Time | Samples | Callee                                      | Location                      |
| ------: | -------: | ----------: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
|  +25.0% | +60.00ms |      100.0% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |
| removed | -10.00ms | 4.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `bytes.(*Buffer).WriteString`               | `bytes/buffer.go:205`         |
|     new | +10.00ms | 0.0% → 3.3% |      0ms → 10.0ms |   0 → 1 | `reflect.Value.Elem`                        | `reflect/value.go:1220`       |

##### `encoding/json.arrayEncoder.encode` (`encoding/json/encode.go:883`)

| Change |    Delta |      % |              Time | Samples | Callee                           | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | -------------------------------- | ----------------------------- |
| +25.0% | +60.00ms | 100.0% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.interfaceEncoder` | `encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`encoding/json/encode.go:843`)

| Change |    Delta |      % |              Time | Samples | Callee                              | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
| +25.0% | +60.00ms | 100.0% | 240.0ms → 300.0ms | 24 → 30 | `encoding/json.arrayEncoder.encode` | `encoding/json/encode.go:883` |

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|  Change |    Delta |             % |              Time | Samples | Callee                                | Location                     |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------------------- | ---------------------------- |
|  +10.2% | +60.00ms | 31.2% → 33.5% | 590.0ms → 650.0ms | 59 → 65 | `runtime.gcStart.func4`               | `runtime/mgc.go:947`         |
|  -14.6% | -60.00ms | 21.7% → 18.0% | 410.0ms → 350.0ms | 41 → 35 | `runtime.gcBgMarkWorker.func2`        | `runtime/mgc.go:1847`        |
|     new | +30.00ms |   0.0% → 1.5% |      0ms → 30.0ms |   0 → 3 | `runtime.gcMarkDone.forEachP.func5`   | `runtime/proc.go:2112`       |
| removed | -20.00ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.(*pageAlloc).scavenge.func1` | `runtime/mgcscavenge.go:682` |
|   +1.2% | +10.00ms | 44.4% → 43.8% | 840.0ms → 850.0ms | 84 → 85 | `runtime.(*mheap).alloc.func1`        | `runtime/mheap.go:1011`      |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|  Change |    Delta |             % |            Time | Samples | Callee                           | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------- | ------------------------------ |
| +125.0% | +50.00ms | 20.0% → 36.0% | 40.0ms → 90.0ms |   4 → 9 | `encoding/json.stateInString`    | `encoding/json/scanner.go:339` |
|  -33.3% | -20.00ms | 30.0% → 16.0% | 60.0ms → 40.0ms |   6 → 4 | `encoding/json.stateBeginString` | `encoding/json/scanner.go:268` |
|     new | +20.00ms |   0.0% → 8.0% |    0ms → 20.0ms |   0 → 2 | `encoding/json.stateBeginValue`  | `encoding/json/scanner.go:217` |
|  -33.3% | -10.00ms |  15.0% → 8.0% | 30.0ms → 20.0ms |   3 → 2 | `encoding/json.stateEndValue`    | `encoding/json/scanner.go:281` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

| Change |    Delta |             % |              Time | Samples | Callee                     | Location                      |
| -----: | -------: | ------------: | ----------------: | ------: | -------------------------- | ----------------------------- |
| +25.0% | +50.00ms | 35.1% → 40.3% | 200.0ms → 250.0ms | 20 → 25 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `runtime.scanObjectsSmall` (`runtime/mgcmark_greenteagc.go:1015`)

| Change |    Delta |            % |         Time | Samples | Callee                       | Location                            |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------- | ----------------------------------- |
|    new | +60.00ms | 0.0% → 85.7% | 0ms → 60.0ms |   0 → 6 | `runtime.tryDeferToSpanScan` | `runtime/mgcmark_greenteagc.go:264` |

##### `runtime.scanSpan` (`runtime/mgcmark_greenteagc.go:844`)

|  Change |    Delta |      % |            Time | Samples | Callee                     | Location                             |
| ------: | -------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------ |
| +250.0% | +50.00ms | 100.0% | 20.0ms → 70.0ms |   2 → 7 | `runtime.scanObjectsSmall` | `runtime/mgcmark_greenteagc.go:1015` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|  Change |    Delta |             % |            Time | Samples | Callee                    | Location                   |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------- | -------------------------- |
| +500.0% | +50.00ms | 20.0% → 60.0% | 10.0ms → 60.0ms |   1 → 6 | `unicode/utf8.DecodeRune` | `unicode/utf8/utf8.go:157` |

##### `runtime.osyield` (`runtime/os_darwin.go:379`)

| Change |     Delta |      % |             Time | Samples | Callee           | Location                    |
| -----: | --------: | -----: | ---------------: | ------: | ---------------- | --------------------------- |
| -58.8% | -100.00ms | 100.0% | 170.0ms → 70.0ms |  17 → 7 | `runtime.usleep` | `runtime/sys_darwin.go:273` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

| Change |    Delta |             % |              Time | Samples | Callee                  | Location               |
| -----: | -------: | ------------: | ----------------: | ------: | ----------------------- | ---------------------- |
| -16.3% | -80.00ms | 90.7% → 91.1% | 490.0ms → 410.0ms | 49 → 41 | `runtime.findRunnable`  | `runtime/proc.go:3389` |
| -20.0% | -10.00ms |   9.3% → 8.9% |   50.0ms → 40.0ms |   5 → 4 | `runtime.resetspinning` | `runtime/proc.go:4021` |

##### `runtime.stopm` (`runtime/proc.go:2992`)

| Change |    Delta |             % |              Time | Samples | Callee             | Location                      |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------ | ----------------------------- |
| -13.5% | -50.00ms | 88.1% → 94.1% | 370.0ms → 320.0ms | 37 → 32 | `runtime.mPark`    | `runtime/proc.go:1965`        |
| -80.0% | -40.00ms |  11.9% → 2.9% |   50.0ms → 10.0ms |   5 → 1 | `runtime.lock`     | `runtime/lock_spinbit.go:151` |
|    new | +10.00ms |   0.0% → 2.9% |      0ms → 10.0ms |   0 → 1 | `runtime.acquirep` | `runtime/proc.go:6259`        |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

|  Change |    Delta |             % |              Time | Samples | Callee                   | Location                      |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------ | ----------------------------- |
|  -19.5% | -80.00ms | 83.7% → 80.5% | 410.0ms → 330.0ms | 41 → 33 | `runtime.stopm`          | `runtime/proc.go:2992`        |
|     new | +50.00ms |  0.0% → 12.2% |      0ms → 50.0ms |   0 → 5 | `runtime.stealWork`      | `runtime/proc.go:3828`        |
| removed | -40.00ms |   8.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `runtime.runSafePointFn` | `runtime/proc.go:2232`        |
|  -66.7% | -20.00ms |   6.1% → 2.4% |   30.0ms → 10.0ms |   3 → 1 | `runtime.lock`           | `runtime/lock_spinbit.go:151` |
|     new | +10.00ms |   0.0% → 2.4% |      0ms → 10.0ms |   0 → 1 | `runtime.unlock`         | `runtime/lock_spinbit.go:260` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

|  Change |    Delta |              % |              Time | Samples | Callee                         | Location               |
| ------: | -------: | -------------: | ----------------: | ------: | ------------------------------ | ---------------------- |
|  -14.0% | -70.00ms | 98.0% → 100.0% | 500.0ms → 430.0ms | 50 → 43 | `runtime.schedule`             | `runtime/proc.go:4135` |
| removed | -10.00ms |    2.0% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcBgMarkWorker.func1` | `runtime/mgc.go:1791`  |

##### `runtime.mcall` (`runtime/asm_arm64.s:302`)

| Change |    Delta |      % |              Time | Samples | Callee           | Location               |
| -----: | -------: | -----: | ----------------: | ------: | ---------------- | ---------------------- |
| -15.7% | -80.00ms | 100.0% | 510.0ms → 430.0ms | 51 → 43 | `runtime.park_m` | `runtime/proc.go:4253` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

|  Change |     Delta |             % |             Time | Samples | Callee              | Location                   |
| ------: | --------: | ------------: | ---------------: | ------: | ------------------- | -------------------------- |
|  -58.8% | -100.00ms | 94.4% → 70.0% | 170.0ms → 70.0ms |  17 → 7 | `runtime.osyield`   | `runtime/os_darwin.go:379` |
| removed |  -10.00ms |   5.6% → 0.0% |     10.0ms → 0ms |   1 → 0 | `runtime.semasleep` | `runtime/os_darwin.go:45`  |
|     new |  +10.00ms |  0.0% → 10.0% |     0ms → 10.0ms |   0 → 1 | `runtime.procyield` | `runtime/stubs.go:278`     |

##### `runtime.lockWithRank` (`runtime/lockrank_off.go:23`)

| Change |    Delta |      % |              Time | Samples | Callee          | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ----------------------------- |
| -44.4% | -80.00ms | 100.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lock2` | `runtime/lock_spinbit.go:155` |

##### `runtime.lock` (`runtime/lock_spinbit.go:151`)

| Change |    Delta |      % |              Time | Samples | Callee                 | Location                     |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------- | ---------------------------- |
| -44.4% | -80.00ms | 100.0% | 180.0ms → 100.0ms | 18 → 10 | `runtime.lockWithRank` | `runtime/lockrank_off.go:23` |

##### `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`)

| Change |    Delta |             % |              Time | Samples | Callee               | Location               |
| -----: | -------: | ------------: | ----------------: | ------: | -------------------- | ---------------------- |
| -34.8% | -80.00ms | 88.5% → 83.3% | 230.0ms → 150.0ms | 23 → 15 | `runtime.preemptone` | `runtime/proc.go:6866` |

##### `runtime.semasleep` (`runtime/os_darwin.go:45`)

|  Change |    Delta |              % |              Time | Samples | Callee                                       | Location                    |
| ------: | -------: | -------------: | ----------------: | ------: | -------------------------------------------- | --------------------------- |
|  -15.8% | -60.00ms | 97.4% → 100.0% | 380.0ms → 320.0ms | 38 → 32 | `runtime.pthread_cond_wait`                  | `runtime/sys_darwin.go:487` |
| removed | -10.00ms |    2.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_cond_timedwait_relative_np` | `runtime/sys_darwin.go:497` |

##### `runtime.gcDrainMarkWorkerDedicated` (`runtime/mgcmark.go:1173`)

| Change |    Delta |      % |              Time | Samples | Callee            | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | ------------------------- |
| -24.1% | -70.00ms | 100.0% | 290.0ms → 220.0ms | 29 → 22 | `runtime.gcDrain` | `runtime/mgcmark.go:1239` |

##### `runtime.gcDrain` (`runtime/mgcmark.go:1239`)

|  Change |    Delta |             % |              Time | Samples | Callee                                      | Location                             |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------------------------- | ------------------------------------ |
|  -30.8% | -80.00ms | 63.4% → 51.4% | 260.0ms → 180.0ms | 26 → 18 | `runtime.(*gcControllerState).enlistWorker` | `runtime/mgcpacer.go:697`            |
| +250.0% | +50.00ms |  4.9% → 20.0% |   20.0ms → 70.0ms |   2 → 7 | `runtime.scanSpan`                          | `runtime/mgcmark_greenteagc.go:844`  |
|  -37.5% | -30.00ms | 19.5% → 14.3% |   80.0ms → 50.0ms |   8 → 5 | `runtime.scanObject`                        | `runtime/mgcmark_greenteagc.go:1187` |
| +100.0% | +10.00ms |   2.4% → 5.7% |   10.0ms → 20.0ms |   1 → 2 | `runtime.markroot`                          | `runtime/mgcmark.go:221`             |
| removed | -10.00ms |   2.4% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*gcWork).tryGetObj`               | `runtime/mgcwork.go:258`             |

##### `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`)

| Change |    Delta |             % |              Time | Samples | Callee                               | Location                  |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------------------ | ------------------------- |
| -24.1% | -70.00ms | 70.7% → 62.9% | 290.0ms → 220.0ms | 29 → 22 | `runtime.gcDrainMarkWorkerDedicated` | `runtime/mgcmark.go:1173` |
|  +8.3% | +10.00ms | 29.3% → 37.1% | 120.0ms → 130.0ms | 12 → 13 | `runtime.gcDrainMarkWorkerIdle`      | `runtime/mgcmark.go:1167` |

##### `runtime.notesleep` (`runtime/lock_sema.go:46`)

| Change |    Delta |      % |              Time | Samples | Callee              | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -13.5% | -50.00ms | 100.0% | 370.0ms → 320.0ms | 37 → 32 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.mPark` (`runtime/proc.go:1965`)

| Change |    Delta |      % |              Time | Samples | Callee              | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -13.5% | -50.00ms | 100.0% | 370.0ms → 320.0ms | 37 → 32 | `runtime.notesleep` | `runtime/lock_sema.go:46` |

##### `runtime.preemptone` (`runtime/proc.go:6866`)

| Change |    Delta |      % |              Time | Samples | Callee             | Location                     |
| -----: | -------: | -----: | ----------------: | ------: | ------------------ | ---------------------------- |
| -21.7% | -50.00ms | 100.0% | 230.0ms → 180.0ms | 23 → 18 | `runtime.preemptM` | `runtime/signal_unix.go:369` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|  Change |    Delta |            % |         Time | Samples | Callee                                  | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------- | ------------------------------ |
| removed | -40.00ms | 30.8% → 0.0% | 40.0ms → 0ms |   4 → 0 | `encoding/json.stateBeginValue`         | `encoding/json/scanner.go:217` |
| removed | -10.00ms |  7.7% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json.stateBeginValueOrEmpty`  | `encoding/json/scanner.go:206` |
|     new | +10.00ms | 0.0% → 12.5% | 0ms → 10.0ms |   0 → 1 | `encoding/json.stateBeginStringOrEmpty` | `encoding/json/scanner.go:255` |

##### `runtime.runSafePointFn` (`runtime/proc.go:2232`)

|  Change |    Delta |            % |         Time | Samples | Callee               | Location                      |
| ------: | -------: | -----------: | -----------: | ------: | -------------------- | ----------------------------- |
| removed | -20.00ms | 50.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.lock`       | `runtime/lock_spinbit.go:151` |
| removed | -20.00ms | 50.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.notewakeup` | `runtime/lock_sema.go:23`     |

##### `runtime.notewakeup` (`runtime/lock_sema.go:23`)

| Change |    Delta |      % |             Time | Samples | Callee               | Location                  |
| -----: | -------: | -----: | ---------------: | ------: | -------------------- | ------------------------- |
| -30.0% | -30.00ms | 100.0% | 100.0ms → 70.0ms |  10 → 7 | `runtime.semawakeup` | `runtime/os_darwin.go:83` |

##### `runtime.scanObject` (`runtime/mgcmark_greenteagc.go:1187`)

|  Change |    Delta |             % |            Time | Samples | Callee                       | Location                            |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------- | ----------------------------------- |
|  -57.1% | -40.00ms | 87.5% → 60.0% | 70.0ms → 30.0ms |   7 → 3 | `runtime.tryDeferToSpanScan` | `runtime/mgcmark_greenteagc.go:264` |
| removed | -10.00ms |  12.5% → 0.0% |    10.0ms → 0ms |   1 → 0 | `runtime.findObject`         | `runtime/mbitmap.go:1361`           |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

|  Change |    Delta |             % |              Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +10.2% | +60.00ms | 17.8% → 19.3% | 590.0ms → 650.0ms | 59 → 65 | `runtime.kevent` (`runtime/sys_darwin.go:438`) ← `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`) ← `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`) ← `runtime.gcStart.func4` (`runtime/mgc.go:947`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +125.0% | +50.00ms |   1.2% → 2.7% |   40.0ms → 90.0ms |   4 → 9 | `encoding/json.stateInString` (`encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new | +30.00ms |   0.0% → 0.9% |      0ms → 30.0ms |   0 → 3 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.forEachPInternal` (2140) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +200.0% | +20.00ms |   0.3% → 0.9% |   10.0ms → 30.0ms |   1 → 3 | `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `aeshashbody` (`runtime/asm_arm64.s:762`) ← `internal/runtime/maps.(*table).grow` (`internal/runtime/maps/table.go:1227`) ← `internal/runtime/maps.(*table).rehash` (1145) ← `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`) ← `unicode/utf8.DecodeRune` (157) ← `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `cmpbody` (`internal/bytealg/compare_arm64.s:35`) ← `internal/bytealg.CompareString` (`internal/bytealg/compare_native.go:14`) ← `strings.Compare` (`strings/compare.go:15`) ← `encoding/json.mapEncoder.encode.func1` (`encoding/json/encode.go:794`) ← `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:135`) ← `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (61) ← `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/sort.go:30`) ← `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.runqgrab` (`runtime/proc.go:7662`) ← `runtime.runqsteal` (7730) ← `runtime.stealWork` (3828) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObjectsSmall` (1015) ← `runtime.scanSpan` (844) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.suspendG` (`runtime/preempt.go:106`) ← `runtime.markroot.func1` (`runtime/mgcmark.go:280`) ← `runtime.markroot` (221) ← `runtime.gcDrain` (1239) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +20.00ms |   0.0% → 0.6% |      0ms → 20.0ms |   0 → 2 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObjectsSmall` (1015) ← `runtime.scanSpan` (844) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +14.3% | +10.00ms |   2.1% → 2.4% |   70.0ms → 80.0ms |   7 → 8 | `encoding/json.checkValid` (`encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +100.0% | +10.00ms |   0.3% → 0.6% |   10.0ms → 20.0ms |   1 → 2 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `runtime.(*pallocBits).summarize` (`runtime/mpallocbits.go:132`) ← `runtime.(*pageAlloc).update` (`runtime/mpagealloc.go:492`) ← `runtime.(*pageAlloc).free` (940) ← `runtime.(*mheap).freeSpanLocked` (`runtime/mheap.go:1730`) ← `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (1667) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.(*mheap).freeSpan` (`runtime/mheap.go:1666`) ← `runtime.(*sweepLocked).sweep` (`runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `cmpbody` (`internal/bytealg/compare_arm64.s:35`) ← `internal/bytealg.CompareString` (`internal/bytealg/compare_native.go:14`) ← `strings.Compare` (`strings/compare.go:15`) ← `encoding/json.mapEncoder.encode.func1` (`encoding/json/encode.go:794`) ← `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`) ← `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (61) ← `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/sort.go:30`) ← `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `encoding/json.isSpace` (`encoding/json/scanner.go:201`) ← `encoding/json.stateBeginString` (268) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `runtime.(*mspan).writeHeapBitsSmall` (`runtime/mbitmap.go:624`) ← `runtime.heapSetTypeNoHeader` (705) ← `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `runtime.convTstring` (`runtime/iface.go:419`) ← `encoding/json.(*decodeState).literalInterface` (`encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +10.00ms |   0.0% → 0.3% |      0ms → 10.0ms |   0 → 1 | `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.(*gcControllerState).markWorkerStop` (`runtime/mgcpacer.go:939`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

|  Change |    Delta |            % |              Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | -------: | -----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -43.8% | -70.00ms |  4.8% → 2.7% |  160.0ms → 90.0ms |  16 → 9 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -11.1% | -40.00ms | 10.9% → 9.5% | 360.0ms → 320.0ms | 36 → 32 | `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.notesleep` (`runtime/lock_sema.go:46`) ← `runtime.mPark` (`runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -60.0% | -30.00ms |  1.5% → 0.6% |   50.0ms → 20.0ms |   5 → 2 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -50.0% | -30.00ms |  1.8% → 0.9% |   60.0ms → 30.0ms |   6 → 3 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -75.0% | -30.00ms |  1.2% → 0.3% |   40.0ms → 10.0ms |   4 → 1 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.stopm` (`runtime/proc.go:2992`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -40.0% | -20.00ms |  1.5% → 0.9% |   50.0ms → 30.0ms |   5 → 3 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -33.3% | -20.00ms |  1.8% → 1.2% |   60.0ms → 40.0ms |   6 → 4 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                    |
|  -66.7% | -20.00ms |  0.9% → 0.3% |   30.0ms → 10.0ms |   3 → 1 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.findRunnable` (`runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -20.00ms |  0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.stopm` (`runtime/proc.go:2992`) ← `runtime.gcstopm` (3296) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -14.3% | -10.00ms |  2.1% → 1.8% |   70.0ms → 60.0ms |   7 → 6 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_cond_timedwait_relative_np` (`runtime/sys_darwin.go:497`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.notetsleep_internal` (`runtime/lock_sema.go:75`) ← `runtime.notetsleep` (158) ← `runtime.forEachPInternal` (`runtime/proc.go:2140`) ← `runtime.gcMarkTermination.forEachP.func7` (2112) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.runSafePointFn` (`runtime/proc.go:2232`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.slicebytetostring` (`runtime/string.go:139`) ← `encoding/json.unquote` (`encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                              |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.memclrNoHeapPointers` (`runtime/memclr_arm64.s:11`) ← `runtime.mallocgcSmallScanHeader` (`runtime/malloc.go:1594`) ← `runtime.mallocgc` (1067) ← `runtime.makeslice` (`runtime/slice.go:102`) ← `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                         |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUnusedOS` (`runtime/mem_darwin.go:23`) ← `runtime.sysUnused` (`runtime/mem.go:68`) ← `runtime.(*pageAlloc).scavengeOne` (`runtime/mgcscavenge.go:732`) ← `runtime.(*pageAlloc).scavenge.func1` (682) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.procyieldAsm` (`runtime/asm_arm64.s:1103`) ← `runtime.procyield` (`runtime/stubs.go:278`) ← `runtime.(*lfstack).pop` (`runtime/lfstack.go:36`) ← `runtime.getempty` (`runtime/mgcwork.go:424`) ← `runtime.(*stackScanState).addObject` (`runtime/mgcstack.go:270`) ← `runtime.scanframeworker` (`runtime/mgcmark.go:1069`) ← `runtime.scanstack` (904) ← `runtime.markroot.func1` (280) ← `runtime.markroot` (221) ← `runtime.gcDrain` (1239) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -10.00ms |  0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgc` (`runtime/malloc.go:1067`) ← `runtime.slicebytetostring` (`runtime/string.go:139`) ← `encoding/json.unquote` (`encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |

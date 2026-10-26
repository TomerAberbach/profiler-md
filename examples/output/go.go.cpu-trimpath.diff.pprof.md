# CPU profile diff

Took 3.46s → 3.44s (-20.00ms, -0.6%) over 346 → 344 samples (10.0ms per sample).

| Category          | Change |    Delta |              % |          Time |   Samples |
| ----------------- | -----: | -------: | -------------: | ------------: | --------: |
| Standard library  |  -0.9% | -30.00ms | 100.0% → 99.7% | 3.46s → 3.43s | 346 → 343 |
| Garbage collector |    new | +10.00ms |    0.0% → 0.3% |  0ms → 10.0ms |     0 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 1.51s → 1.71s (43.6% → 49.7%) github.com/tomeraberbach/profiler-md-workload/internal/work.Run at github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11
│   ├── 1.02s → 1.13s (29.5% → 32.8%) encoding/json.Unmarshal at encoding/json/decode.go:102
│   │   ├── … 550.0ms → 670.0ms (15.9% → 19.5%, self 0.0% → 0.6%) encoding/json.(*decodeState).objectInterface at encoding/json/decode.go:1078
│   │   │   ├── … 120.0ms → 160.0ms (3.5% → 4.7%, self 0.6% → 2.0%) encoding/json.(*decodeState).scanWhile at encoding/json/decode.go:298
│   │   │   │   ├── 30.0ms → 10.0ms (0.9% → 0.3%) encoding/json.stateBeginStringOrEmpty at encoding/json/scanner.go:255
│   │   │   │   │   └── 20.0ms → 0ms (0.6% → 0.0%, self 1.4% → 2.6% globally) encoding/json.isSpace at 201
│   │   │   │   └── 70.0ms → 80.0ms (2.0% → 2.3%) 3 more callees, led by (0.9% → 1.5%) encoding/json.stateBeginString at encoding/json/scanner.go:268
│   │   │   ├── … 130.0ms → 90.0ms (3.8% → 2.6%) encoding/json.unquote at encoding/json/decode.go:1187
│   │   │   │   ├── 60.0ms → 90.0ms (1.7% → 2.6%, self 1.7% → 3.2% globally) encoding/json.unquoteBytes at 1193
│   │   │   │   └── 70.0ms → 0ms (2.0% → 0.0%) runtime.slicebytetostring at runtime/string.go:139 …
│   │   │   └── 300.0ms → 400.0ms (8.7% → 11.6%) 3 more callees, led by (5.5% → 4.7%) encoding/json.(*decodeState).valueInterface at encoding/json/decode.go:1035
│   │   └── 470.0ms → 460.0ms (13.6% → 13.4%, self 5.5% → 3.8%) encoding/json.checkValid at encoding/json/scanner.go:33
│   │       ├── 170.0ms → 120.0ms (4.9% → 3.5%) encoding/json.stateInString at 339
│   │       └── 110.0ms → 210.0ms (3.2% → 6.1%) 9 more callees, led by (1.2% → 2.6%) encoding/json.stateBeginString at 268
│   └── … 490.0ms → 580.0ms (14.2% → 16.9%) encoding/json.(*encodeState).reflectValue at encoding/json/encode.go:366
│       ├── … 350.0ms → 400.0ms (10.1% → 11.6%) encoding/json.mapEncoder.encode at encoding/json/encode.go:765
│       │   ├── 30.0ms → 70.0ms (0.9% → 2.0%, self 2.6% → 4.1% globally) encoding/json.appendString[go.shape.string] at 999
│       │   └── 310.0ms → 320.0ms (9.0% → 9.3%) 8 more callees, led by (4.6% → 2.9%) slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at slices/sort.go:30
│       ├── … 20.0ms → 0ms (0.6% → 0.0%) internal/strconv.formatBase10 at internal/strconv/itoa.go:191
│       └── 120.0ms → 160.0ms (3.5% → 4.7%) 3 more callees, led by (2.6%) encoding/json.stringEncoder at encoding/json/encode.go:610
├── 1.16s → 1.14s (33.5% → 33.1%) runtime.systemstack at runtime/asm_arm64.s:353
│   ├── … 640.0ms → 560.0ms (18.5% → 16.3%) runtime.madvise at runtime/sys_darwin.go:224
│   ├── … 370.0ms → 330.0ms (10.7% → 9.6%) runtime.kevent at runtime/sys_darwin.go:438
│   ├── … 10.0ms → 50.0ms (0.3% → 1.5%, self 2.3% → 4.4% globally) runtime.pthread_kill at runtime/sys_darwin.go:148
│   └── 130.0ms → 200.0ms (3.8% → 5.8%) 4 more callees, led by (3.5% → 4.1%) runtime.gcBgMarkWorker.func2 at runtime/mgc.go:1847
├── … 510.0ms → 400.0ms (14.7% → 11.6%) runtime.schedule at runtime/proc.go:4135
│   ├── 480.0ms → 370.0ms (13.9% → 10.8%) runtime.findRunnable at 3389
│   │   ├── 420.0ms → 280.0ms (12.1% → 8.1%) runtime.stopm at 2992
│   │   │   ├── … 380.0ms → 270.0ms (11.0% → 7.8%) runtime.pthread_cond_wait at runtime/sys_darwin.go:487
│   │   │   └── … 40.0ms → 10.0ms (1.2% → 0.3%, self 5.2% → 4.1% globally) runtime.usleep at runtime/sys_darwin.go:273
│   │   └── 60.0ms → 80.0ms (1.7% → 2.3%) 4 more callees, led by (1.4% → 0.6%) runtime.lock at runtime/lock_spinbit.go:151
│   └── 30.0ms (0.9%) runtime.resetspinning at 4021 …
├── … 100.0ms (2.9%) runtime.gcBgMarkWorker.func2 at runtime/mgc.go:1847
│   ├── 70.0ms → 50.0ms (2.0% → 1.5%) runtime.gcDrainMarkWorkerDedicated at runtime/mgcmark.go:1173
│   │   └── 70.0ms → 50.0ms (2.0% → 1.5%) runtime.gcDrain at 1239
│   │       ├── 20.0ms → 40.0ms (0.6% → 1.2%) runtime.scanObject at runtime/mgcmark_greenteagc.go:1187
│   │       │   └── 0ms → 40.0ms (0.0% → 1.2%, self 0.9% → 2.0% globally) runtime.tryDeferToSpanScan at 264
│   │       └── 50.0ms → 10.0ms (1.4% → 0.3%) runtime.scanSpan at runtime/mgcmark_greenteagc.go:844 …
│   └── 30.0ms → 50.0ms (0.9% → 1.5%) runtime.gcDrainMarkWorkerIdle at runtime/mgcmark.go:1167 …
└── 170.0ms → 80.0ms (4.9% → 2.3%) 2 more root frames, led by (4.6% → 2.3%) runtime.morestack at runtime/asm_arm64.s:457
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |    Delta |           % |             Time | Samples | Function                                       | Location                                       |
| ------: | -------: | ----------: | ---------------: | ------: | ---------------------------------------------- | ---------------------------------------------- |
|  +87.5% | +70.00ms | 2.3% → 4.4% | 80.0ms → 150.0ms |  8 → 15 | `runtime.pthread_kill`                         | `runtime/sys_darwin.go:148`                    |
|  +83.3% | +50.00ms | 1.7% → 3.2% | 60.0ms → 110.0ms |  6 → 11 | `encoding/json.unquoteBytes`                   | `encoding/json/decode.go:1193`                 |
|  +55.6% | +50.00ms | 2.6% → 4.1% | 90.0ms → 140.0ms |  9 → 14 | `encoding/json.appendString[go.shape.string]`  | `encoding/json/encode.go:999`                  |
|  +80.0% | +40.00ms | 1.4% → 2.6% |  50.0ms → 90.0ms |   5 → 9 | `encoding/json.isSpace`                        | `encoding/json/scanner.go:201`                 |
| +133.3% | +40.00ms | 0.9% → 2.0% |  30.0ms → 70.0ms |   3 → 7 | `encoding/json.(*decodeState).scanWhile`       | `encoding/json/decode.go:298`                  |
| +133.3% | +40.00ms | 0.9% → 2.0% |  30.0ms → 70.0ms |   3 → 7 | `runtime.tryDeferToSpanScan`                   | `runtime/mgcmark_greenteagc.go:264`            |
|  +66.7% | +40.00ms | 1.7% → 2.9% | 60.0ms → 100.0ms |  6 → 10 | `encoding/json.stateBeginString`               | `encoding/json/scanner.go:268`                 |
| +200.0% | +40.00ms | 0.6% → 1.7% |  20.0ms → 60.0ms |   2 → 6 | `cmpbody`                                      | `internal/bytealg/compare_arm64.s:35`          |
|     new | +30.00ms | 0.0% → 0.9% |     0ms → 30.0ms |   0 → 3 | `runtime.mapassign_faststr`                    | `internal/runtime/maps/runtime_faststr.go:263` |
| +300.0% | +30.00ms | 0.3% → 1.2% |  10.0ms → 40.0ms |   1 → 4 | `runtime.typedmemmove`                         | `runtime/mbarrier.go:150`                      |
|     new | +20.00ms | 0.0% → 0.6% |     0ms → 20.0ms |   0 → 2 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078`                 |
|  +50.0% | +20.00ms | 1.2% → 1.7% |  40.0ms → 60.0ms |   4 → 6 | `runtime.mallocgcSmallScanNoHeader`            | `runtime/malloc.go:1503`                       |
| +200.0% | +20.00ms | 0.3% → 0.9% |  10.0ms → 30.0ms |   1 → 3 | `encoding/json.stateEndValue`                  | `encoding/json/scanner.go:281`                 |
|     new | +20.00ms | 0.0% → 0.6% |     0ms → 20.0ms |   0 → 2 | `sync/atomic.(*Uint32).Load`                   | `sync/atomic/type.go:147`                      |
|     new | +20.00ms | 0.0% → 0.6% |     0ms → 20.0ms |   0 → 2 | `aeshashbody`                                  | `runtime/asm_arm64.s:762`                      |
|     new | +10.00ms | 0.0% → 0.3% |     0ms → 10.0ms |   0 → 1 | `runtime.findRunnable`                         | `runtime/proc.go:3389`                         |
|     new | +10.00ms | 0.0% → 0.3% |     0ms → 10.0ms |   0 → 1 | `encoding/json.valueEncoder`                   | `encoding/json/encode.go:381`                  |
|     new | +10.00ms | 0.0% → 0.3% |     0ms → 10.0ms |   0 → 1 | `encoding/json.(*encodeState).reflectValue`    | `encoding/json/encode.go:366`                  |
|     new | +10.00ms | 0.0% → 0.3% |     0ms → 10.0ms |   0 → 1 | `encoding/json.interfaceEncoder`               | `encoding/json/encode.go:695`                  |
|     new | +10.00ms | 0.0% → 0.3% |     0ms → 10.0ms |   0 → 1 | `runtime.convTstring`                          | `runtime/iface.go:419`                         |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |     Delta |             % |              Time | Samples | Function                                                                                                  | Location                             |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------ |
|  -28.2% | -110.00ms |  11.3% → 8.1% | 390.0ms → 280.0ms | 39 → 28 | `runtime.pthread_cond_wait`                                                                               | `runtime/sys_darwin.go:487`          |
|  -12.3% |  -80.00ms | 18.8% → 16.6% | 650.0ms → 570.0ms | 65 → 57 | `runtime.madvise`                                                                                         | `runtime/sys_darwin.go:224`          |
|  -31.6% |  -60.00ms |   5.5% → 3.8% | 190.0ms → 130.0ms | 19 → 13 | `encoding/json.checkValid`                                                                                | `encoding/json/scanner.go:33`        |
|  -29.4% |  -50.00ms |   4.9% → 3.5% | 170.0ms → 120.0ms | 17 → 12 | `encoding/json.stateInString`                                                                             | `encoding/json/scanner.go:339`       |
|  -10.8% |  -40.00ms |  10.7% → 9.6% | 370.0ms → 330.0ms | 37 → 33 | `runtime.kevent`                                                                                          | `runtime/sys_darwin.go:438`          |
|  -22.2% |  -40.00ms |   5.2% → 4.1% | 180.0ms → 140.0ms | 18 → 14 | `runtime.usleep`                                                                                          | `runtime/sys_darwin.go:273`          |
|  -80.0% |  -40.00ms |   1.4% → 0.3% |   50.0ms → 10.0ms |   5 → 1 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:10`          |
|  -80.0% |  -40.00ms |   1.4% → 0.3% |   50.0ms → 10.0ms |   5 → 1 | `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`     | `slices/zsortanyfunc.go:135`         |
|  -75.0% |  -30.00ms |   1.2% → 0.3% |   40.0ms → 10.0ms |   4 → 1 | `unicode/utf8.decodeRuneSlow`                                                                             | `unicode/utf8/utf8.go:171`           |
| removed |  -30.00ms |   0.9% → 0.0% |      30.0ms → 0ms |   3 → 0 | `runtime.mallocgcTiny`                                                                                    | `runtime/malloc.go:1202`             |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.lock2`                                                                                           | `runtime/lock_spinbit.go:155`        |
|  -66.7% |  -20.00ms |   0.9% → 0.3% |   30.0ms → 10.0ms |   3 → 1 | `runtime.nextFreeFast`                                                                                    | `runtime/malloc.go:969`              |
|  -50.0% |  -20.00ms |   1.2% → 0.6% |   40.0ms → 20.0ms |   4 → 2 | `runtime.mallocgc`                                                                                        | `runtime/malloc.go:1067`             |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.acquirem`                                                                                        | `runtime/runtime1.go:600`            |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.(*scanner).pushParseState`                                                                 | `encoding/json/scanner.go:180`       |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `internal/strconv.formatBase10`                                                                           | `internal/strconv/itoa.go:191`       |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.(*mheap).allocNeedsZero`                                                                         | `runtime/mheap.go:1072`              |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.heapArenaOf`                                                                                     | `runtime/mheap.go:766`               |
| removed |  -10.00ms |   0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.scanObject`                                                                                      | `runtime/mgcmark_greenteagc.go:1187` |
| removed |  -10.00ms |   0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.systemstack`                                                                                     | `runtime/asm_arm64.s:353`            |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

| Change |    Delta |      % |             Time | Samples | Location                    |
| -----: | -------: | -----: | ---------------: | ------: | --------------------------- |
| +87.5% | +70.00ms | 100.0% | 80.0ms → 150.0ms |  8 → 15 | `runtime/sys_darwin.go:149` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
|     new | +20.00ms |  0.0% → 18.2% |    0ms → 20.0ms |   0 → 2 | `encoding/json/decode.go:1209` |
| +100.0% | +10.00ms | 16.7% → 18.2% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json/decode.go:1204` |
|  +50.0% | +10.00ms | 33.3% → 27.3% | 20.0ms → 30.0ms |   2 → 3 | `encoding/json/decode.go:1205` |
|     new | +10.00ms |   0.0% → 9.1% |    0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:1194` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
| removed | -40.00ms |  44.4% → 0.0% |    40.0ms → 0ms |   4 → 0 | `encoding/json/encode.go:1004` |
| +400.0% | +40.00ms | 11.1% → 35.7% | 10.0ms → 50.0ms |   1 → 5 | `encoding/json/encode.go:1063` |
|     new | +30.00ms |  0.0% → 21.4% |    0ms → 30.0ms |   0 → 3 | `encoding/json/encode.go:1005` |
|     new | +20.00ms |  0.0% → 14.3% |    0ms → 20.0ms |   0 → 2 | `encoding/json/encode.go:1002` |
| removed | -10.00ms |  11.1% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/encode.go:1000` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

| Change |    Delta |      % |            Time | Samples | Location                       |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------ |
| +80.0% | +40.00ms | 100.0% | 50.0ms → 90.0ms |   5 → 9 | `encoding/json/scanner.go:202` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|  Change |    Delta |             % |            Time | Samples | Location                      |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------- |
| +150.0% | +30.00ms | 66.7% → 71.4% | 20.0ms → 50.0ms |   2 → 5 | `encoding/json/decode.go:301` |
| removed | -10.00ms |  33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/decode.go:299` |
|     new | +10.00ms |  0.0% → 14.3% |    0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:300` |
|     new | +10.00ms |  0.0% → 14.3% |    0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:303` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|  Change |    Delta |             % |            Time | Samples | Location                            |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------- |
| +200.0% | +20.00ms | 33.3% → 42.9% | 10.0ms → 30.0ms |   1 → 3 | `runtime/mgcmark_greenteagc.go:290` |
| removed | -10.00ms |  33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `runtime/mgcmark_greenteagc.go:295` |
|     new | +10.00ms |  0.0% → 14.3% |    0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:272` |
|     new | +10.00ms |  0.0% → 14.3% |    0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:287` |
|     new | +10.00ms |  0.0% → 14.3% |    0ms → 10.0ms |   0 → 1 | `runtime/mgcmark_greenteagc.go:288` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
|  +66.7% | +20.00ms |         50.0% | 30.0ms → 50.0ms |   3 → 5 | `encoding/json/scanner.go:268` |
| +100.0% | +10.00ms | 16.7% → 20.0% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json/scanner.go:270` |
|     new | +10.00ms |  0.0% → 10.0% |    0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:273` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|  Change |    Delta |             % |            Time | Samples | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------- |
| +100.0% | +10.00ms | 50.0% → 33.3% | 10.0ms → 20.0ms |   1 → 2 | `internal/bytealg/compare_arm64.s:80`  |
|     new | +10.00ms |  0.0% → 16.7% |    0ms → 10.0ms |   0 → 1 | `internal/bytealg/compare_arm64.s:72`  |
|     new | +10.00ms |  0.0% → 16.7% |    0ms → 10.0ms |   0 → 1 | `internal/bytealg/compare_arm64.s:92`  |
|     new | +10.00ms |  0.0% → 16.7% |    0ms → 10.0ms |   0 → 1 | `internal/bytealg/compare_arm64.s:102` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

| Change |    Delta |            % |         Time | Samples | Location                                       |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------- |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `internal/runtime/maps/runtime_faststr.go:289` |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `internal/runtime/maps/runtime_faststr.go:300` |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `internal/runtime/maps/runtime_faststr.go:324` |

##### `runtime.typedmemmove` (`runtime/mbarrier.go:150`)

| Change |    Delta |            % |         Time | Samples | Location                  |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------- |
|    new | +20.00ms | 0.0% → 50.0% | 0ms → 20.0ms |   0 → 2 | `runtime/mbarrier.go:150` |
|    new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `runtime/mbarrier.go:154` |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

| Change |    Delta |            % |         Time | Samples | Location                       |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------ |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:1083` |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/decode.go:1110` |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

|  Change |    Delta |             % |            Time | Samples | Location                 |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------ |
| +300.0% | +30.00ms | 25.0% → 66.7% | 10.0ms → 40.0ms |   1 → 4 | `runtime/malloc.go:1550` |
| removed | -10.00ms |  25.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1526` |

##### `encoding/json.stateEndValue` (`encoding/json/scanner.go:281`)

|  Change |    Delta |             % |         Time | Samples | Location                       |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json/scanner.go:302` |
|     new | +10.00ms |  0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:281` |
|     new | +10.00ms |  0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:291` |
|     new | +10.00ms |  0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `encoding/json/scanner.go:305` |

##### `sync/atomic.(*Uint32).Load` (`sync/atomic/type.go:147`)

| Change |    Delta |             % |         Time | Samples | Location                  |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `sync/atomic/type.go:147` |

##### `aeshashbody` (`runtime/asm_arm64.s:762`)

| Change |    Delta |            % |         Time | Samples | Location                  |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------- |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/asm_arm64.s:794` |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime/asm_arm64.s:798` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

| Change |    Delta |             % |         Time | Samples | Location               |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime/proc.go:3469` |

##### `encoding/json.valueEncoder` (`encoding/json/encode.go:381`)

| Change |    Delta |             % |         Time | Samples | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/encode.go:381` |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

| Change |    Delta |             % |         Time | Samples | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/encode.go:367` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

| Change |    Delta |             % |         Time | Samples | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json/encode.go:701` |

##### `runtime.convTstring` (`runtime/iface.go:419`)

| Change |    Delta |             % |         Time | Samples | Location               |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime/iface.go:419` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

| Change |     Delta |      % |              Time | Samples | Location                    |
| -----: | --------: | -----: | ----------------: | ------: | --------------------------- |
| -28.2% | -110.00ms | 100.0% | 390.0ms → 280.0ms | 39 → 28 | `runtime/sys_darwin.go:488` |

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

| Change |    Delta |      % |              Time | Samples | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- |
| -12.3% | -80.00ms | 100.0% | 650.0ms → 570.0ms | 65 → 57 | `runtime/sys_darwin.go:225` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

| Change |    Delta |             % |            Time | Samples | Location                      |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------- |
| -55.6% | -50.00ms | 47.4% → 30.8% | 90.0ms → 40.0ms |   9 → 4 | `encoding/json/scanner.go:37` |
| -50.0% | -10.00ms |  10.5% → 7.7% | 20.0ms → 10.0ms |   2 → 1 | `encoding/json/scanner.go:35` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|  Change |    Delta |             % |            Time | Samples | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ |
|  -57.1% | -40.00ms | 41.2% → 25.0% | 70.0ms → 30.0ms |   7 → 3 | `encoding/json/scanner.go:351` |
|  +50.0% | +20.00ms | 23.5% → 50.0% | 40.0ms → 60.0ms |   4 → 6 | `encoding/json/scanner.go:339` |
| removed | -20.00ms |  11.8% → 0.0% |    20.0ms → 0ms |   2 → 0 | `encoding/json/scanner.go:340` |
| +100.0% | +10.00ms |  5.9% → 16.7% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json/scanner.go:341` |
| removed | -10.00ms |   5.9% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json/scanner.go:344` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

| Change |    Delta |      % |              Time | Samples | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- |
| -10.8% | -40.00ms | 100.0% | 370.0ms → 330.0ms | 37 → 33 | `runtime/sys_darwin.go:439` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

| Change |    Delta |      % |              Time | Samples | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------- |
| -22.2% | -40.00ms | 100.0% | 180.0ms → 140.0ms | 18 → 14 | `runtime/sys_darwin.go:274` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

|  Change |    Delta |              % |            Time | Samples | Location                    |
| ------: | -------: | -------------: | --------------: | ------: | --------------------------- |
| removed | -30.00ms |   60.0% → 0.0% |    30.0ms → 0ms |   3 → 0 | `slices/zsortanyfunc.go:12` |
|  -50.0% | -10.00ms | 40.0% → 100.0% | 20.0ms → 10.0ms |   2 → 1 | `slices/zsortanyfunc.go:13` |

##### `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:135`)

|  Change |    Delta |             % |         Time | Samples | Location                     |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- |
| removed | -20.00ms |  40.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `slices/zsortanyfunc.go:139` |
| removed | -10.00ms |  20.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `slices/zsortanyfunc.go:149` |
| removed | -10.00ms |  20.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `slices/zsortanyfunc.go:158` |
| removed | -10.00ms |  20.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `slices/zsortanyfunc.go:160` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `slices/zsortanyfunc.go:154` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

|  Change |    Delta |             % |         Time | Samples | Location                   |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------- |
| removed | -30.00ms |  75.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `unicode/utf8/utf8.go:185` |
| removed | -10.00ms |  25.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `unicode/utf8/utf8.go:171` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `unicode/utf8/utf8.go:190` |

##### `runtime.mallocgcTiny` (`runtime/malloc.go:1202`)

|  Change |    Delta |            % |         Time | Samples | Location                 |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------ |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1202` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1265` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1298` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

|  Change |    Delta |            % |         Time | Samples | Location                      |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------- |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/lock_spinbit.go:155` |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/lock_spinbit.go:209` |

##### `runtime.nextFreeFast` (`runtime/malloc.go:969`)

|  Change |    Delta |             % |         Time | Samples | Location                |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------- |
| removed | -10.00ms |  33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:970` |
| removed | -10.00ms |  33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:973` |
| removed | -10.00ms |  33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:975` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime/malloc.go:972` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|  Change |    Delta |             % |         Time | Samples | Location                 |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------ |
| removed | -30.00ms |  75.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `runtime/malloc.go:1189` |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `runtime/malloc.go:1112` |
| removed | -10.00ms |  25.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/malloc.go:1146` |

##### `runtime.acquirem` (`runtime/runtime1.go:600`)

|  Change |    Delta |             % |         Time | Samples | Location                  |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime/runtime1.go:602` |

##### `encoding/json.(*scanner).pushParseState` (`encoding/json/scanner.go:180`)

|  Change |    Delta |            % |         Time | Samples | Location                       |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------ |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json/scanner.go:180` |
| removed | -10.00ms | 50.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `encoding/json/scanner.go:183` |

##### `internal/strconv.formatBase10` (`internal/strconv/itoa.go:191`)

|  Change |    Delta |             % |         Time | Samples | Location                       |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `internal/strconv/itoa.go:191` |

##### `runtime.(*mheap).allocNeedsZero` (`runtime/mheap.go:1072`)

|  Change |    Delta |             % |         Time | Samples | Location                |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime/mheap.go:1077` |

##### `runtime.heapArenaOf` (`runtime/mheap.go:766`)

|  Change |    Delta |             % |         Time | Samples | Location               |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime/mheap.go:783` |

##### `runtime.scanObject` (`runtime/mgcmark_greenteagc.go:1187`)

|  Change |    Delta |             % |         Time | Samples | Location                             |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/mgcmark_greenteagc.go:1241` |

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|  Change |    Delta |             % |         Time | Samples | Location                  |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime/asm_arm64.s:365` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

| Change |    Delta |      % |             Time | Samples | Caller            | Location                   |
| -----: | -------: | -----: | ---------------: | ------: | ----------------- | -------------------------- |
| +87.5% | +70.00ms | 100.0% | 80.0ms → 150.0ms |  8 → 15 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

| Change |    Delta |      % |             Time | Samples | Caller                  | Location                       |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------- | ------------------------------ |
| +83.3% | +50.00ms | 100.0% | 60.0ms → 110.0ms |  6 → 11 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|  Change |    Delta |             % |            Time | Samples | Caller                            | Location                      |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------- | ----------------------------- |
| +133.3% | +40.00ms | 33.3% → 50.0% | 30.0ms → 70.0ms |   3 → 7 | `encoding/json.mapEncoder.encode` | `encoding/json/encode.go:765` |
|  +16.7% | +10.00ms | 66.7% → 50.0% | 60.0ms → 70.0ms |   6 → 7 | `encoding/json.stringEncoder`     | `encoding/json/encode.go:610` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

|  Change |    Delta |             % |            Time | Samples | Caller                                  | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------- | ------------------------------ |
| +300.0% | +30.00ms | 20.0% → 44.4% | 10.0ms → 40.0ms |   1 → 4 | `encoding/json.stateBeginString`        | `encoding/json/scanner.go:268` |
| removed | -20.00ms |  40.0% → 0.0% |    20.0ms → 0ms |   2 → 0 | `encoding/json.stateBeginStringOrEmpty` | `encoding/json/scanner.go:255` |
| +200.0% | +20.00ms | 20.0% → 33.3% | 10.0ms → 30.0ms |   1 → 3 | `encoding/json.stateEndValue`           | `encoding/json/scanner.go:281` |
|     new | +20.00ms |  0.0% → 22.2% |    0ms → 20.0ms |   0 → 2 | `encoding/json.stateBeginValueOrEmpty`  | `encoding/json/scanner.go:206` |
| removed | -10.00ms |  20.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json.stateBeginValue`         | `encoding/json/scanner.go:217` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|  Change |    Delta |              % |            Time | Samples | Caller                                         | Location                       |
| ------: | -------: | -------------: | --------------: | ------: | ---------------------------------------------- | ------------------------------ |
| +250.0% | +50.00ms | 66.7% → 100.0% | 20.0ms → 70.0ms |   2 → 7 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |
| removed | -10.00ms |   33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

| Change |    Delta |              % |            Time | Samples | Caller                     | Location                             |
| -----: | -------: | -------------: | --------------: | ------: | -------------------------- | ------------------------------------ |
|    new | +60.00ms |   0.0% → 85.7% |    0ms → 60.0ms |   0 → 6 | `runtime.scanObject`       | `runtime/mgcmark_greenteagc.go:1187` |
| -66.7% | -20.00ms | 100.0% → 14.3% | 30.0ms → 10.0ms |   3 → 1 | `runtime.scanObjectsSmall` | `runtime/mgcmark_greenteagc.go:1015` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

| Change |    Delta |             % |            Time | Samples | Caller                                   | Location                      |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------------------- | ----------------------------- |
| +75.0% | +30.00ms | 66.7% → 70.0% | 40.0ms → 70.0ms |   4 → 7 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |
| +50.0% | +10.00ms | 33.3% → 30.0% | 20.0ms → 30.0ms |   2 → 3 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|  Change |    Delta |      % |            Time | Samples | Caller                           | Location                                |
| ------: | -------: | -----: | --------------: | ------: | -------------------------------- | --------------------------------------- |
| +200.0% | +40.00ms | 100.0% | 20.0ms → 60.0ms |   2 → 6 | `internal/bytealg.CompareString` | `internal/bytealg/compare_native.go:14` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

| Change |    Delta |             % |         Time | Samples | Caller                                         | Location                       |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------- | ------------------------------ |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `runtime.typedmemmove` (`runtime/mbarrier.go:150`)

|  Change |    Delta |              % |            Time | Samples | Caller                               | Location                  |
| ------: | -------: | -------------: | --------------: | ------: | ------------------------------------ | ------------------------- |
|     new | +20.00ms |   0.0% → 50.0% |    0ms → 20.0ms |   0 → 2 | `internal/runtime/maps.typedmemmove` | `runtime/mbarrier.go:235` |
| +100.0% | +10.00ms | 100.0% → 50.0% | 10.0ms → 20.0ms |   1 → 2 | `reflect.typedmemmove`               | `runtime/mbarrier.go:213` |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

| Change |    Delta |             % |         Time | Samples | Caller                                        | Location                       |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------- | ------------------------------ |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

| Change |    Delta |      % |            Time | Samples | Caller             | Location                 |
| -----: | -------: | -----: | --------------: | ------: | ------------------ | ------------------------ |
| +50.0% | +20.00ms | 100.0% | 40.0ms → 60.0ms |   4 → 6 | `runtime.mallocgc` | `runtime/malloc.go:1067` |

##### `encoding/json.stateEndValue` (`encoding/json/scanner.go:281`)

|  Change |    Delta |              % |            Time | Samples | Caller                                       | Location                      |
| ------: | -------: | -------------: | --------------: | ------: | -------------------------------------------- | ----------------------------- |
| +100.0% | +10.00ms | 100.0% → 66.7% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json.checkValid`                   | `encoding/json/scanner.go:33` |
|     new | +10.00ms |   0.0% → 33.3% |    0ms → 10.0ms |   0 → 1 | `encoding/json.(*decodeState).rescanLiteral` | `encoding/json/decode.go:322` |

##### `sync/atomic.(*Uint32).Load` (`sync/atomic/type.go:147`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                           | Location                          |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------------------------------- | --------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `internal/sync.(*HashTrieMap[go.shape.interface {},go.shape.interface {}]).init` | `internal/sync/hashtriemap.go:30` |

##### `aeshashbody` (`runtime/asm_arm64.s:762`)

| Change |    Delta |            % |         Time | Samples | Caller                                | Location                                       |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------- | ---------------------------------------------- |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `internal/runtime/maps.(*table).grow` | `internal/runtime/maps/table.go:1227`          |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `runtime.mapassign_faststr`           | `internal/runtime/maps/runtime_faststr.go:263` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

| Change |    Delta |             % |         Time | Samples | Caller             | Location               |
| -----: | -------: | ------------: | -----------: | ------: | ------------------ | ---------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `encoding/json.valueEncoder` (`encoding/json/encode.go:381`)

| Change |    Delta |             % |         Time | Samples | Caller                                      | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------- | ----------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

| Change |    Delta |             % |         Time | Samples | Caller                           | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------- | ----------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json.interfaceEncoder` | `encoding/json/encode.go:695` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

| Change |    Delta |             % |         Time | Samples | Caller                              | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------- | ----------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json.arrayEncoder.encode` | `encoding/json/encode.go:883` |

##### `runtime.convTstring` (`runtime/iface.go:419`)

| Change |    Delta |             % |         Time | Samples | Caller                                          | Location                       |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

| Change |     Delta |      % |              Time | Samples | Caller              | Location                  |
| -----: | --------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -28.2% | -110.00ms | 100.0% | 390.0ms → 280.0ms | 39 → 28 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

| Change |    Delta |      % |              Time | Samples | Caller              | Location                   |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | -------------------------- |
| -12.3% | -80.00ms | 100.0% | 650.0ms → 570.0ms | 65 → 57 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

| Change |    Delta |      % |              Time | Samples | Caller                    | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------- | ----------------------------- |
| -31.6% | -60.00ms | 100.0% | 190.0ms → 130.0ms | 19 → 13 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

| Change |    Delta |      % |              Time | Samples | Caller                     | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | -------------------------- | ----------------------------- |
| -29.4% | -50.00ms | 100.0% | 170.0ms → 120.0ms | 17 → 12 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

| Change |    Delta |      % |              Time | Samples | Caller            | Location                       |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | ------------------------------ |
| -10.8% | -40.00ms | 100.0% | 370.0ms → 330.0ms | 37 → 33 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

| Change |    Delta |              % |              Time | Samples | Caller             | Location                   |
| -----: | -------: | -------------: | ----------------: | ------: | ------------------ | -------------------------- |
| -33.3% | -60.00ms | 100.0% → 85.7% | 180.0ms → 120.0ms | 18 → 12 | `runtime.osyield`  | `runtime/os_darwin.go:379` |
|    new | +20.00ms |   0.0% → 14.3% |      0ms → 20.0ms |   0 → 2 | `runtime.runqgrab` | `runtime/proc.go:7662`     |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

| Change |    Delta |      % |            Time | Samples | Caller                                                                                              | Location                    |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
| -80.0% | -40.00ms | 100.0% | 50.0ms → 10.0ms |   5 → 1 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:135`)

| Change |    Delta |      % |            Time | Samples | Caller                                                                                              | Location                    |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
| -80.0% | -40.00ms | 100.0% | 50.0ms → 10.0ms |   5 → 1 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

| Change |    Delta |      % |            Time | Samples | Caller                    | Location                   |
| -----: | -------: | -----: | --------------: | ------: | ------------------------- | -------------------------- |
| -75.0% | -30.00ms | 100.0% | 40.0ms → 10.0ms |   4 → 1 | `unicode/utf8.DecodeRune` | `unicode/utf8/utf8.go:157` |

##### `runtime.mallocgcTiny` (`runtime/malloc.go:1202`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                 |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------ |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `runtime.mallocgc` | `runtime/malloc.go:1067` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

|  Change |    Delta |             % |         Time | Samples | Caller                 | Location                     |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------- | ---------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.lockWithRank` | `runtime/lockrank_off.go:23` |

##### `runtime.nextFreeFast` (`runtime/malloc.go:969`)

|  Change |    Delta |              % |            Time | Samples | Caller                              | Location                 |
| ------: | -------: | -------------: | --------------: | ------: | ----------------------------------- | ------------------------ |
| removed | -10.00ms |   33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `runtime.mallocgcSmallNoscan`       | `runtime/malloc.go:1358` |
|  -50.0% | -10.00ms | 66.7% → 100.0% | 20.0ms → 10.0ms |   2 → 1 | `runtime.mallocgcSmallScanNoHeader` | `runtime/malloc.go:1503` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|  Change |    Delta |            % |         Time | Samples | Caller                      | Location                |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------- | ----------------------- |
| removed | -20.00ms | 50.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.slicebytetostring` | `runtime/string.go:139` |

##### `runtime.acquirem` (`runtime/runtime1.go:600`)

|  Change |    Delta |             % |         Time | Samples | Caller                              | Location                 |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------- | ------------------------ |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.mallocgcSmallScanNoHeader` | `runtime/malloc.go:1503` |

##### `encoding/json.(*scanner).pushParseState` (`encoding/json/scanner.go:180`)

|  Change |    Delta |             % |         Time | Samples | Caller                          | Location                       |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------- | ------------------------------ |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `encoding/json.stateBeginValue` | `encoding/json/scanner.go:217` |

##### `internal/strconv.formatBase10` (`internal/strconv/itoa.go:191`)

|  Change |    Delta |             % |         Time | Samples | Caller                        | Location                           |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------- | ---------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `internal/strconv.dboxDigits` | `internal/strconv/ftoadbox.go:175` |

##### `runtime.(*mheap).allocNeedsZero` (`runtime/mheap.go:1072`)

|  Change |    Delta |             % |         Time | Samples | Caller                      | Location                |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------- | ----------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.(*mheap).initSpan` | `runtime/mheap.go:1439` |

##### `runtime.heapArenaOf` (`runtime/mheap.go:766`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                            |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ----------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `runtime.tryDeferToSpanScan` | `runtime/mgcmark_greenteagc.go:264` |

##### `runtime.scanObject` (`runtime/mgcmark_greenteagc.go:1187`)

|  Change |    Delta |             % |         Time | Samples | Caller            | Location                  |
| ------: | -------: | ------------: | -----------: | ------: | ----------------- | ------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.gcDrain` | `runtime/mgcmark.go:1239` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |   Samples | Function                                                          | Location                                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  +13.2% | +200.00ms | 43.6% → 49.7% |     1.51s → 1.71s | 151 → 171 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |
|  +13.2% | +200.00ms | 43.6% → 49.7% |     1.51s → 1.71s | 151 → 171 | `main.main`                                                       | `github.com/tomeraberbach/profiler-md-workload/main.go:12`               |
|  +13.2% | +200.00ms | 43.6% → 49.7% |     1.51s → 1.71s | 151 → 171 | `runtime.main`                                                    | `runtime/proc.go:149`                                                    |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).objectInterface`                    | `encoding/json/decode.go:1078`                                           |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).valueInterface`                     | `encoding/json/decode.go:1035`                                           |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).arrayInterface`                     | `encoding/json/decode.go:1052`                                           |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).object`                             | `encoding/json/decode.go:604`                                            |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).value`                              | `encoding/json/decode.go:363`                                            |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).unmarshal`                          | `encoding/json/decode.go:173`                                            |
| +171.4% | +120.00ms |   2.0% → 5.5% |  70.0ms → 190.0ms |    7 → 19 | `runtime.mapassign_faststr`                                       | `internal/runtime/maps/runtime_faststr.go:263`                           |
|  +10.8% | +110.00ms | 29.5% → 32.8% |     1.02s → 1.13s | 102 → 113 | `encoding/json.Unmarshal`                                         | `encoding/json/decode.go:102`                                            |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.(*encodeState).reflectValue`                       | `encoding/json/encode.go:366`                                            |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.interfaceEncoder`                                  | `encoding/json/encode.go:695`                                            |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.mapEncoder.encode`                                 | `encoding/json/encode.go:765`                                            |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.arrayEncoder.encode`                               | `encoding/json/encode.go:883`                                            |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.sliceEncoder.encode`                               | `encoding/json/encode.go:843`                                            |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.(*encodeState).marshal`                            | `encoding/json/encode.go:333`                                            |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.Marshal`                                           | `encoding/json/encode.go:205`                                            |
| +100.0% |  +70.00ms |   2.0% → 4.1% |  70.0ms → 140.0ms |    7 → 14 | `encoding/json.stateBeginString`                                  | `encoding/json/scanner.go:268`                                           |
|  +87.5% |  +70.00ms |   2.3% → 4.4% |  80.0ms → 150.0ms |    8 → 15 | `runtime.pthread_kill`                                            | `runtime/sys_darwin.go:148`                                              |

##### Standard library

|  Change |     Delta |             % |              Time |   Samples | Function                                       | Location                                       |
| ------: | --------: | ------------: | ----------------: | --------: | ---------------------------------------------- | ---------------------------------------------- |
|  +13.2% | +200.00ms | 43.6% → 49.7% |     1.51s → 1.71s | 151 → 171 | `runtime.main`                                 | `runtime/proc.go:149`                          |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078`                 |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).valueInterface`  | `encoding/json/decode.go:1035`                 |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052`                 |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).object`          | `encoding/json/decode.go:604`                  |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).value`           | `encoding/json/decode.go:363`                  |
|  +21.8% | +120.00ms | 15.9% → 19.5% | 550.0ms → 670.0ms |   55 → 67 | `encoding/json.(*decodeState).unmarshal`       | `encoding/json/decode.go:173`                  |
| +171.4% | +120.00ms |   2.0% → 5.5% |  70.0ms → 190.0ms |    7 → 19 | `runtime.mapassign_faststr`                    | `internal/runtime/maps/runtime_faststr.go:263` |
|  +10.8% | +110.00ms | 29.5% → 32.8% |     1.02s → 1.13s | 102 → 113 | `encoding/json.Unmarshal`                      | `encoding/json/decode.go:102`                  |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.(*encodeState).reflectValue`    | `encoding/json/encode.go:366`                  |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.interfaceEncoder`               | `encoding/json/encode.go:695`                  |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.mapEncoder.encode`              | `encoding/json/encode.go:765`                  |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.arrayEncoder.encode`            | `encoding/json/encode.go:883`                  |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.sliceEncoder.encode`            | `encoding/json/encode.go:843`                  |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.(*encodeState).marshal`         | `encoding/json/encode.go:333`                  |
|  +18.4% |  +90.00ms | 14.2% → 16.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.Marshal`                        | `encoding/json/encode.go:205`                  |
| +100.0% |  +70.00ms |   2.0% → 4.1% |  70.0ms → 140.0ms |    7 → 14 | `encoding/json.stateBeginString`               | `encoding/json/scanner.go:268`                 |
|  +87.5% |  +70.00ms |   2.3% → 4.4% |  80.0ms → 150.0ms |    8 → 15 | `runtime.pthread_kill`                         | `runtime/sys_darwin.go:148`                    |
|  +87.5% |  +70.00ms |   2.3% → 4.4% |  80.0ms → 150.0ms |    8 → 15 | `runtime.signalM`                              | `runtime/os_darwin.go:489`                     |
|  +87.5% |  +70.00ms |   2.3% → 4.4% |  80.0ms → 150.0ms |    8 → 15 | `runtime.preemptM`                             | `runtime/signal_unix.go:369`                   |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |             % |              Time | Samples | Function                       | Location                      |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------------------ | ----------------------------- |
| -31.0% | -130.00ms |  12.1% → 8.4% | 420.0ms → 290.0ms | 42 → 29 | `runtime.stopm`                | `runtime/proc.go:2992`        |
| -24.0% | -120.00ms | 14.5% → 11.0% | 500.0ms → 380.0ms | 50 → 38 | `runtime.findRunnable`         | `runtime/proc.go:3389`        |
| -28.2% | -110.00ms |  11.3% → 8.1% | 390.0ms → 280.0ms | 39 → 28 | `runtime.pthread_cond_wait`    | `runtime/sys_darwin.go:487`   |
| -20.8% | -110.00ms | 15.3% → 12.2% | 530.0ms → 420.0ms | 53 → 42 | `runtime.schedule`             | `runtime/proc.go:4135`        |
| -21.6% | -110.00ms | 14.7% → 11.6% | 510.0ms → 400.0ms | 51 → 40 | `runtime.park_m`               | `runtime/proc.go:4253`        |
| -21.6% | -110.00ms | 14.7% → 11.6% | 510.0ms → 400.0ms | 51 → 40 | `runtime.mcall`                | `runtime/asm_arm64.s:302`     |
| -25.6% | -100.00ms |  11.3% → 8.4% | 390.0ms → 290.0ms | 39 → 29 | `runtime.semasleep`            | `runtime/os_darwin.go:45`     |
| -26.3% | -100.00ms |  11.0% → 8.1% | 380.0ms → 280.0ms | 38 → 28 | `runtime.notesleep`            | `runtime/lock_sema.go:46`     |
| -26.3% | -100.00ms |  11.0% → 8.1% | 380.0ms → 280.0ms | 38 → 28 | `runtime.mPark`                | `runtime/proc.go:1965`        |
| -45.5% | -100.00ms |   6.4% → 3.5% | 220.0ms → 120.0ms | 22 → 12 | `runtime.lock2`                | `runtime/lock_spinbit.go:155` |
| -45.5% | -100.00ms |   6.4% → 3.5% | 220.0ms → 120.0ms | 22 → 12 | `runtime.lockWithRank`         | `runtime/lockrank_off.go:23`  |
| -45.5% | -100.00ms |   6.4% → 3.5% | 220.0ms → 120.0ms | 22 → 12 | `runtime.lock`                 | `runtime/lock_spinbit.go:151` |
| -13.4% |  -90.00ms | 19.4% → 16.9% | 670.0ms → 580.0ms | 67 → 58 | `runtime.(*mheap).allocSpan`   | `runtime/mheap.go:1224`       |
| -13.6% |  -90.00ms | 19.1% → 16.6% | 660.0ms → 570.0ms | 66 → 57 | `runtime.(*mheap).alloc.func1` | `runtime/mheap.go:1011`       |
| -81.8% |  -90.00ms |   3.2% → 0.6% |  110.0ms → 20.0ms |  11 → 2 | `runtime.slicebytetostring`    | `runtime/string.go:139`       |
| -50.0% |  -80.00ms |   4.6% → 2.3% |  160.0ms → 80.0ms |  16 → 8 | `runtime.morestack`            | `runtime/asm_arm64.s:457`     |
| -12.3% |  -80.00ms | 18.8% → 16.6% | 650.0ms → 570.0ms | 65 → 57 | `runtime.madvise`              | `runtime/sys_darwin.go:224`   |
| -12.3% |  -80.00ms | 18.8% → 16.6% | 650.0ms → 570.0ms | 65 → 57 | `runtime.sysUsedOS`            | `runtime/mem_darwin.go:29`    |
| -12.3% |  -80.00ms | 18.8% → 16.6% | 650.0ms → 570.0ms | 65 → 57 | `runtime.sysUsed`              | `runtime/mem.go:89`           |
| -43.8% |  -70.00ms |   4.6% → 2.6% |  160.0ms → 90.0ms |  16 → 9 | `runtime.goschedImpl`          | `runtime/proc.go:4307`        |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`)

| Change |     Delta |      % |          Time |   Samples | Caller      | Location                                                   |
| -----: | --------: | -----: | ------------: | --------: | ----------- | ---------------------------------------------------------- |
| +13.2% | +200.00ms | 100.0% | 1.51s → 1.71s | 151 → 171 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

| Change |     Delta |      % |          Time |   Samples | Caller         | Location              |
| -----: | --------: | -----: | ------------: | --------: | -------------- | --------------------- |
| +13.2% | +200.00ms | 100.0% | 1.51s → 1.71s | 151 → 171 | `runtime.main` | `runtime/proc.go:149` |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

| Change |     Delta |      % |              Time | Samples | Caller                                        | Location                       |
| -----: | --------: | -----: | ----------------: | ------: | --------------------------------------------- | ------------------------------ |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).object`         | `encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).valueInterface` (`encoding/json/decode.go:1035`)

| Change |     Delta |      % |              Time | Samples | Caller                                         | Location                       |
| -----: | --------: | -----: | ----------------: | ------: | ---------------------------------------------- | ------------------------------ |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

| Change |     Delta |      % |              Time | Samples | Caller                                        | Location                       |
| -----: | --------: | -----: | ----------------: | ------: | --------------------------------------------- | ------------------------------ |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`encoding/json/decode.go:604`)

| Change |     Delta |      % |              Time | Samples | Caller                               | Location                      |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------ | ----------------------------- |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).value` | `encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`encoding/json/decode.go:363`)

| Change |     Delta |      % |              Time | Samples | Caller                                   | Location                      |
| -----: | --------: | -----: | ----------------: | ------: | ---------------------------------------- | ----------------------------- |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).unmarshal` | `encoding/json/decode.go:173` |

##### `encoding/json.(*decodeState).unmarshal` (`encoding/json/decode.go:173`)

| Change |     Delta |      % |              Time | Samples | Caller                    | Location                      |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------- | ----------------------------- |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

|  Change |     Delta |      % |             Time | Samples | Caller                                         | Location                       |
| ------: | --------: | -----: | ---------------: | ------: | ---------------------------------------------- | ------------------------------ |
| +171.4% | +120.00ms | 100.0% | 70.0ms → 190.0ms |  7 → 19 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

| Change |     Delta |      % |          Time |   Samples | Caller                                                            | Location                                                                 |
| -----: | --------: | -----: | ------------: | --------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +10.8% | +110.00ms | 100.0% | 1.02s → 1.13s | 102 → 113 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

| Change |    Delta |      % |              Time | Samples | Caller                                 | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | -------------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.interfaceEncoder`       | `encoding/json/encode.go:695` |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.(*encodeState).marshal` | `encoding/json/encode.go:333` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

| Change |    Delta |      % |              Time | Samples | Caller                              | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.mapEncoder.encode`   | `encoding/json/encode.go:765` |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.arrayEncoder.encode` | `encoding/json/encode.go:883` |

##### `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`)

| Change |    Delta |      % |              Time | Samples | Caller                                      | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `encoding/json.arrayEncoder.encode` (`encoding/json/encode.go:883`)

| Change |    Delta |      % |              Time | Samples | Caller                              | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.sliceEncoder.encode` | `encoding/json/encode.go:843` |

##### `encoding/json.sliceEncoder.encode` (`encoding/json/encode.go:843`)

| Change |    Delta |      % |              Time | Samples | Caller                                      | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `encoding/json.(*encodeState).marshal` (`encoding/json/encode.go:333`)

| Change |    Delta |      % |              Time | Samples | Caller                  | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.Marshal` | `encoding/json/encode.go:205` |

##### `encoding/json.Marshal` (`encoding/json/encode.go:205`)

| Change |    Delta |      % |              Time | Samples | Caller                                                            | Location                                                                 |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|  Change |    Delta |             % |            Time | Samples | Caller                                   | Location                      |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------- | ----------------------------- |
| +125.0% | +50.00ms | 57.1% → 64.3% | 40.0ms → 90.0ms |   4 → 9 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |
|  +66.7% | +20.00ms | 42.9% → 35.7% | 30.0ms → 50.0ms |   3 → 5 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

| Change |    Delta |      % |             Time | Samples | Caller            | Location                   |
| -----: | -------: | -----: | ---------------: | ------: | ----------------- | -------------------------- |
| +87.5% | +70.00ms | 100.0% | 80.0ms → 150.0ms |  8 → 15 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `runtime.signalM` (`runtime/os_darwin.go:489`)

| Change |    Delta |      % |             Time | Samples | Caller             | Location                     |
| -----: | -------: | -----: | ---------------: | ------: | ------------------ | ---------------------------- |
| +87.5% | +70.00ms | 100.0% | 80.0ms → 150.0ms |  8 → 15 | `runtime.preemptM` | `runtime/signal_unix.go:369` |

##### `runtime.preemptM` (`runtime/signal_unix.go:369`)

|  Change |    Delta |             % |             Time | Samples | Caller               | Location               |
| ------: | -------: | ------------: | ---------------: | ------: | -------------------- | ---------------------- |
| +100.0% | +70.00ms | 87.5% → 93.3% | 70.0ms → 140.0ms |  7 → 14 | `runtime.preemptone` | `runtime/proc.go:6866` |

##### `runtime.stopm` (`runtime/proc.go:2992`)

| Change |     Delta |      % |              Time | Samples | Caller                 | Location               |
| -----: | --------: | -----: | ----------------: | ------: | ---------------------- | ---------------------- |
| -31.0% | -130.00ms | 100.0% | 420.0ms → 290.0ms | 42 → 29 | `runtime.findRunnable` | `runtime/proc.go:3389` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

| Change |     Delta |      % |              Time | Samples | Caller             | Location               |
| -----: | --------: | -----: | ----------------: | ------: | ------------------ | ---------------------- |
| -24.0% | -120.00ms | 100.0% | 500.0ms → 380.0ms | 50 → 38 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

| Change |     Delta |      % |              Time | Samples | Caller              | Location                  |
| -----: | --------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -28.2% | -110.00ms | 100.0% | 390.0ms → 280.0ms | 39 → 28 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

| Change |     Delta |             % |              Time | Samples | Caller           | Location               |
| -----: | --------: | ------------: | ----------------: | ------: | ---------------- | ---------------------- |
| -21.6% | -110.00ms | 96.2% → 95.2% | 510.0ms → 400.0ms | 51 → 40 | `runtime.park_m` | `runtime/proc.go:4253` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

| Change |     Delta |      % |              Time | Samples | Caller          | Location                  |
| -----: | --------: | -----: | ----------------: | ------: | --------------- | ------------------------- |
| -21.6% | -110.00ms | 100.0% | 510.0ms → 400.0ms | 51 → 40 | `runtime.mcall` | `runtime/asm_arm64.s:302` |

##### `runtime.semasleep` (`runtime/os_darwin.go:45`)

|  Change |     Delta |             % |              Time | Samples | Caller                        | Location                      |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------- | ----------------------------- |
|  -26.3% | -100.00ms | 97.4% → 96.6% | 380.0ms → 280.0ms | 38 → 28 | `runtime.notesleep`           | `runtime/lock_sema.go:46`     |
| removed |  -10.00ms |   2.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.lock2`               | `runtime/lock_spinbit.go:155` |
|     new |  +10.00ms |   0.0% → 3.4% |      0ms → 10.0ms |   0 → 1 | `runtime.notetsleep_internal` | `runtime/lock_sema.go:75`     |

##### `runtime.notesleep` (`runtime/lock_sema.go:46`)

| Change |     Delta |      % |              Time | Samples | Caller          | Location               |
| -----: | --------: | -----: | ----------------: | ------: | --------------- | ---------------------- |
| -26.3% | -100.00ms | 100.0% | 380.0ms → 280.0ms | 38 → 28 | `runtime.mPark` | `runtime/proc.go:1965` |

##### `runtime.mPark` (`runtime/proc.go:1965`)

| Change |     Delta |      % |              Time | Samples | Caller          | Location               |
| -----: | --------: | -----: | ----------------: | ------: | --------------- | ---------------------- |
| -26.3% | -100.00ms | 100.0% | 380.0ms → 280.0ms | 38 → 28 | `runtime.stopm` | `runtime/proc.go:2992` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

| Change |     Delta |      % |              Time | Samples | Caller                 | Location                     |
| -----: | --------: | -----: | ----------------: | ------: | ---------------------- | ---------------------------- |
| -45.5% | -100.00ms | 100.0% | 220.0ms → 120.0ms | 22 → 12 | `runtime.lockWithRank` | `runtime/lockrank_off.go:23` |

##### `runtime.lockWithRank` (`runtime/lockrank_off.go:23`)

| Change |     Delta |      % |              Time | Samples | Caller         | Location                      |
| -----: | --------: | -----: | ----------------: | ------: | -------------- | ----------------------------- |
| -45.5% | -100.00ms | 100.0% | 220.0ms → 120.0ms | 22 → 12 | `runtime.lock` | `runtime/lock_spinbit.go:151` |

##### `runtime.lock` (`runtime/lock_spinbit.go:151`)

|  Change |    Delta |             % |             Time | Samples | Caller                 | Location               |
| ------: | -------: | ------------: | ---------------: | ------: | ---------------------- | ---------------------- |
|  -45.5% | -50.00ms |         50.0% | 110.0ms → 60.0ms |  11 → 6 | `runtime.goschedImpl`  | `runtime/proc.go:4307` |
|  -75.0% | -30.00ms |  18.2% → 8.3% |  40.0ms → 10.0ms |   4 → 1 | `runtime.stopm`        | `runtime/proc.go:2992` |
|  -60.0% | -30.00ms | 22.7% → 16.7% |  50.0ms → 20.0ms |   5 → 2 | `runtime.findRunnable` | `runtime/proc.go:3389` |
| +100.0% | +10.00ms |  4.5% → 16.7% |  10.0ms → 20.0ms |   1 → 2 | `runtime.wakep`        | `runtime/proc.go:3212` |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

| Change |    Delta |             % |              Time | Samples | Caller                         | Location                |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------------ | ----------------------- |
| -13.6% | -90.00ms | 98.5% → 98.3% | 660.0ms → 570.0ms | 66 → 57 | `runtime.(*mheap).alloc.func1` | `runtime/mheap.go:1011` |

##### `runtime.(*mheap).alloc.func1` (`runtime/mheap.go:1011`)

| Change |    Delta |      % |              Time | Samples | Caller                | Location                  |
| -----: | -------: | -----: | ----------------: | ------: | --------------------- | ------------------------- |
| -13.6% | -90.00ms | 100.0% | 660.0ms → 570.0ms | 66 → 57 | `runtime.systemstack` | `runtime/asm_arm64.s:353` |

##### `runtime.slicebytetostring` (`runtime/string.go:139`)

| Change |    Delta |             % |             Time | Samples | Caller                  | Location                       |
| -----: | -------: | ------------: | ---------------: | ------: | ----------------------- | ------------------------------ |
| -90.0% | -90.00ms | 90.9% → 50.0% | 100.0ms → 10.0ms |  10 → 1 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

| Change |    Delta |      % |              Time | Samples | Caller              | Location                   |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | -------------------------- |
| -12.3% | -80.00ms | 100.0% | 650.0ms → 570.0ms | 65 → 57 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

| Change |    Delta |      % |              Time | Samples | Caller            | Location            |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | ------------------- |
| -12.3% | -80.00ms | 100.0% | 650.0ms → 570.0ms | 65 → 57 | `runtime.sysUsed` | `runtime/mem.go:89` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

| Change |    Delta |      % |              Time | Samples | Caller                       | Location                |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------- |
| -12.3% | -80.00ms | 100.0% | 650.0ms → 570.0ms | 65 → 57 | `runtime.(*mheap).allocSpan` | `runtime/mheap.go:1224` |

##### `runtime.goschedImpl` (`runtime/proc.go:4307`)

| Change |    Delta |      % |             Time | Samples | Caller                | Location               |
| -----: | -------: | -----: | ---------------: | ------: | --------------------- | ---------------------- |
| -43.8% | -70.00ms | 100.0% | 160.0ms → 90.0ms |  16 → 9 | `runtime.gopreempt_m` | `runtime/proc.go:4361` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`)

| Change |     Delta |             % |              Time |   Samples | Callee                    | Location                      |
| -----: | --------: | ------------: | ----------------: | --------: | ------------------------- | ----------------------------- |
| +10.8% | +110.00ms | 67.5% → 66.1% |     1.02s → 1.13s | 102 → 113 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |
| +18.4% |  +90.00ms | 32.5% → 33.9% | 490.0ms → 580.0ms |   49 → 58 | `encoding/json.Marshal`   | `encoding/json/encode.go:205` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

| Change |     Delta |      % |          Time |   Samples | Callee                                                            | Location                                                                 |
| -----: | --------: | -----: | ------------: | --------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +13.2% | +200.00ms | 100.0% | 1.51s → 1.71s | 151 → 171 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |

##### `runtime.main` (`runtime/proc.go:149`)

| Change |     Delta |      % |          Time |   Samples | Callee      | Location                                                   |
| -----: | --------: | -----: | ------------: | --------: | ----------- | ---------------------------------------------------------- |
| +13.2% | +200.00ms | 100.0% | 1.51s → 1.71s | 151 → 171 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

|  Change |     Delta |             % |              Time | Samples | Callee                                        | Location                                       |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------------------------------- | ---------------------------------------------- |
|  +21.8% | +120.00ms |        100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035`                 |
| +171.4% | +120.00ms | 12.7% → 28.4% |  70.0ms → 190.0ms |  7 → 19 | `runtime.mapassign_faststr`                   | `internal/runtime/maps/runtime_faststr.go:263` |
|  +33.3% |  +40.00ms | 21.8% → 23.9% | 120.0ms → 160.0ms | 12 → 16 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`                  |
|  -30.8% |  -40.00ms | 23.6% → 13.4% |  130.0ms → 90.0ms |  13 → 9 | `encoding/json.unquote`                       | `encoding/json/decode.go:1187`                 |
|  +25.0% |  +10.00ms |   7.3% → 7.5% |   40.0ms → 50.0ms |   4 → 5 | `encoding/json.(*decodeState).rescanLiteral`  | `encoding/json/decode.go:322`                  |

##### `encoding/json.(*decodeState).valueInterface` (`encoding/json/decode.go:1035`)

|  Change |     Delta |             % |              Time | Samples | Callee                                          | Location                       |
| ------: | --------: | ------------: | ----------------: | ------: | ----------------------------------------------- | ------------------------------ |
|  +21.8% | +120.00ms |        100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |
|  +21.8% | +120.00ms |        100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).arrayInterface`   | `encoding/json/decode.go:1052` |
|   -6.7% |  -10.00ms | 27.3% → 20.9% | 150.0ms → 140.0ms | 15 → 14 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |
| removed |  -10.00ms |   1.8% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.convTslice`                            | `runtime/iface.go:438`         |
| removed |  -10.00ms |   1.8% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.(*decodeState).scanNext`         | `encoding/json/decode.go:286`  |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

|  Change |     Delta |           % |              Time | Samples | Callee                                        | Location                       |
| ------: | --------: | ----------: | ----------------: | ------: | --------------------------------------------- | ------------------------------ |
|  +21.8% | +120.00ms |      100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |
| +100.0% |  +10.00ms | 1.8% → 3.0% |   10.0ms → 20.0ms |   1 → 2 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`  |
| removed |  -10.00ms | 1.8% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.growslice`                           | `runtime/slice.go:178`         |

##### `encoding/json.(*decodeState).object` (`encoding/json/decode.go:604`)

| Change |     Delta |      % |              Time | Samples | Callee                                         | Location                       |
| -----: | --------: | -----: | ----------------: | ------: | ---------------------------------------------- | ------------------------------ |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`encoding/json/decode.go:363`)

| Change |     Delta |      % |              Time | Samples | Callee                                | Location                      |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------- | ----------------------------- |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).object` | `encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`encoding/json/decode.go:173`)

| Change |     Delta |      % |              Time | Samples | Callee                               | Location                      |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------ | ----------------------------- |
| +21.8% | +120.00ms | 100.0% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).value` | `encoding/json/decode.go:363` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

|  Change |    Delta |             % |            Time | Samples | Callee                                             | Location                                       |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------------------- | ---------------------------------------------- |
|     new | +30.00ms |  0.0% → 15.8% |    0ms → 30.0ms |   0 → 3 | `internal/runtime/maps.(*Map).growToTable`         | `internal/runtime/maps/map.go:608`             |
|  +40.0% | +20.00ms | 71.4% → 36.8% | 50.0ms → 70.0ms |   5 → 7 | `internal/runtime/maps.(*table).rehash`            | `internal/runtime/maps/table.go:1145`          |
|     new | +20.00ms |  0.0% → 10.5% |    0ms → 20.0ms |   0 → 2 | `internal/runtime/maps.(*Map).growToSmall`         | `internal/runtime/maps/map.go:598`             |
| removed | -10.00ms |  14.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `runtime.strhash`                                  | `runtime/asm_arm64.s:750`                      |
| removed | -10.00ms |  14.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `internal/runtime/maps.(*Map).putSlotSmallFastStr` | `internal/runtime/maps/runtime_faststr.go:220` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

| Change |     Delta |             % |              Time | Samples | Callee                                   | Location                      |
| -----: | --------: | ------------: | ----------------: | ------: | ---------------------------------------- | ----------------------------- |
| +21.8% | +120.00ms | 53.9% → 59.3% | 550.0ms → 670.0ms | 55 → 67 | `encoding/json.(*decodeState).unmarshal` | `encoding/json/decode.go:173` |
|  -2.1% |  -10.00ms | 46.1% → 40.7% | 470.0ms → 460.0ms | 47 → 46 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

| Change |    Delta |           % |              Time | Samples | Callee                              | Location                      |
| -----: | -------: | ----------: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
| +18.4% | +90.00ms |      100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.mapEncoder.encode`   | `encoding/json/encode.go:765` |
| +18.4% | +90.00ms |      100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.sliceEncoder.encode` | `encoding/json/encode.go:843` |
| +66.7% | +20.00ms | 6.1% → 8.6% |   30.0ms → 50.0ms |   3 → 5 | `encoding/json.valueEncoder`        | `encoding/json/encode.go:381` |
| -50.0% | -10.00ms | 4.1% → 1.7% |   20.0ms → 10.0ms |   2 → 1 | `encoding/json.floatEncoder.encode` | `encoding/json/encode.go:571` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

| Change |    Delta |           % |              Time | Samples | Callee                                      | Location                      |
| -----: | -------: | ----------: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| +18.4% | +90.00ms |      100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |
|    new | +10.00ms | 0.0% → 1.7% |      0ms → 10.0ms |   0 → 1 | `reflect.Value.IsNil`                       | `reflect/value.go:1632`       |

##### `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`)

|  Change |    Delta |             % |              Time | Samples | Callee                                                                                                                                   | Location                      |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
|  +18.4% | +90.00ms |        100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.interfaceEncoder`                                                                                                         | `encoding/json/encode.go:695` |
|  -37.5% | -60.00ms | 32.7% → 17.2% | 160.0ms → 100.0ms | 16 → 10 | `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/sort.go:30`           |
| +200.0% | +60.00ms |  6.1% → 15.5% |   30.0ms → 90.0ms |   3 → 9 | `reflect.(*MapIter).Key`                                                                                                                 | `reflect/map.go:245`          |
| +133.3% | +40.00ms |  6.1% → 12.1% |   30.0ms → 70.0ms |   3 → 7 | `encoding/json.appendString[go.shape.string]`                                                                                            | `encoding/json/encode.go:999` |
|  -33.3% | -10.00ms |   6.1% → 3.4% |   30.0ms → 20.0ms |   3 → 2 | `reflect.(*MapIter).Next`                                                                                                                | `reflect/map.go:335`          |

##### `encoding/json.arrayEncoder.encode` (`encoding/json/encode.go:883`)

| Change |    Delta |      % |              Time | Samples | Callee                           | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | -------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.interfaceEncoder` | `encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`encoding/json/encode.go:843`)

| Change |    Delta |      % |              Time | Samples | Callee                              | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.arrayEncoder.encode` | `encoding/json/encode.go:883` |

##### `encoding/json.(*encodeState).marshal` (`encoding/json/encode.go:333`)

| Change |    Delta |      % |              Time | Samples | Callee                                      | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`encoding/json/encode.go:205`)

| Change |    Delta |      % |              Time | Samples | Callee                                 | Location                      |
| -----: | -------: | -----: | ----------------: | ------: | -------------------------------------- | ----------------------------- |
| +18.4% | +90.00ms | 100.0% | 490.0ms → 580.0ms | 49 → 58 | `encoding/json.(*encodeState).marshal` | `encoding/json/encode.go:333` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|  Change |    Delta |             % |            Time | Samples | Callee                  | Location                       |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------- | ------------------------------ |
| +300.0% | +30.00ms | 14.3% → 28.6% | 10.0ms → 40.0ms |   1 → 4 | `encoding/json.isSpace` | `encoding/json/scanner.go:201` |

##### `runtime.signalM` (`runtime/os_darwin.go:489`)

| Change |    Delta |      % |             Time | Samples | Callee                 | Location                    |
| -----: | -------: | -----: | ---------------: | ------: | ---------------------- | --------------------------- |
| +87.5% | +70.00ms | 100.0% | 80.0ms → 150.0ms |  8 → 15 | `runtime.pthread_kill` | `runtime/sys_darwin.go:148` |

##### `runtime.preemptM` (`runtime/signal_unix.go:369`)

| Change |    Delta |      % |             Time | Samples | Callee            | Location                   |
| -----: | -------: | -----: | ---------------: | ------: | ----------------- | -------------------------- |
| +87.5% | +70.00ms | 100.0% | 80.0ms → 150.0ms |  8 → 15 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `runtime.stopm` (`runtime/proc.go:2992`)

| Change |     Delta |             % |              Time | Samples | Callee          | Location                      |
| -----: | --------: | ------------: | ----------------: | ------: | --------------- | ----------------------------- |
| -26.3% | -100.00ms | 90.5% → 96.6% | 380.0ms → 280.0ms | 38 → 28 | `runtime.mPark` | `runtime/proc.go:1965`        |
| -75.0% |  -30.00ms |   9.5% → 3.4% |   40.0ms → 10.0ms |   4 → 1 | `runtime.lock`  | `runtime/lock_spinbit.go:151` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

|  Change |     Delta |             % |              Time | Samples | Callee                    | Location                      |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------------- | ----------------------------- |
|  -31.0% | -130.00ms | 84.0% → 76.3% | 420.0ms → 290.0ms | 42 → 29 | `runtime.stopm`           | `runtime/proc.go:2992`        |
|  -60.0% |  -30.00ms |  10.0% → 5.3% |   50.0ms → 20.0ms |   5 → 2 | `runtime.lock`            | `runtime/lock_spinbit.go:151` |
|     new |  +30.00ms |   0.0% → 7.9% |      0ms → 30.0ms |   0 → 3 | `runtime.stealWork`       | `runtime/proc.go:3828`        |
| removed |  -10.00ms |   2.0% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcstopm`         | `runtime/proc.go:3296`        |
|     new |  +10.00ms |   0.0% → 2.6% |      0ms → 10.0ms |   0 → 1 | `runtime.(*timers).check` | `runtime/time.go:1009`        |

##### `runtime.schedule` (`runtime/proc.go:4135`)

| Change |     Delta |             % |              Time | Samples | Callee                 | Location               |
| -----: | --------: | ------------: | ----------------: | ------: | ---------------------- | ---------------------- |
| -24.0% | -120.00ms | 94.3% → 90.5% | 500.0ms → 380.0ms | 50 → 38 | `runtime.findRunnable` | `runtime/proc.go:3389` |
|    new |  +10.00ms |   0.0% → 2.4% |      0ms → 10.0ms |   0 → 1 | `runtime.execute`      | `runtime/proc.go:3331` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

| Change |     Delta |      % |              Time | Samples | Callee             | Location               |
| -----: | --------: | -----: | ----------------: | ------: | ------------------ | ---------------------- |
| -21.6% | -110.00ms | 100.0% | 510.0ms → 400.0ms | 51 → 40 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `runtime.mcall` (`runtime/asm_arm64.s:302`)

| Change |     Delta |      % |              Time | Samples | Callee           | Location               |
| -----: | --------: | -----: | ----------------: | ------: | ---------------- | ---------------------- |
| -21.6% | -110.00ms | 100.0% | 510.0ms → 400.0ms | 51 → 40 | `runtime.park_m` | `runtime/proc.go:4253` |

##### `runtime.semasleep` (`runtime/os_darwin.go:45`)

| Change |     Delta |              % |              Time | Samples | Callee                                       | Location                    |
| -----: | --------: | -------------: | ----------------: | ------: | -------------------------------------------- | --------------------------- |
| -28.2% | -110.00ms | 100.0% → 96.6% | 390.0ms → 280.0ms | 39 → 28 | `runtime.pthread_cond_wait`                  | `runtime/sys_darwin.go:487` |
|    new |  +10.00ms |    0.0% → 3.4% |      0ms → 10.0ms |   0 → 1 | `runtime.pthread_cond_timedwait_relative_np` | `runtime/sys_darwin.go:497` |

##### `runtime.notesleep` (`runtime/lock_sema.go:46`)

| Change |     Delta |      % |              Time | Samples | Callee              | Location                  |
| -----: | --------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -26.3% | -100.00ms | 100.0% | 380.0ms → 280.0ms | 38 → 28 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.mPark` (`runtime/proc.go:1965`)

| Change |     Delta |      % |              Time | Samples | Callee              | Location                  |
| -----: | --------: | -----: | ----------------: | ------: | ------------------- | ------------------------- |
| -26.3% | -100.00ms | 100.0% | 380.0ms → 280.0ms | 38 → 28 | `runtime.notesleep` | `runtime/lock_sema.go:46` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

|  Change |    Delta |              % |              Time | Samples | Callee              | Location                   |
| ------: | -------: | -------------: | ----------------: | ------: | ------------------- | -------------------------- |
|  -33.3% | -60.00ms | 81.8% → 100.0% | 180.0ms → 120.0ms | 18 → 12 | `runtime.osyield`   | `runtime/os_darwin.go:379` |
| removed | -10.00ms |    4.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.semasleep` | `runtime/os_darwin.go:45`  |
| removed | -10.00ms |    4.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.procyield` | `runtime/stubs.go:278`     |

##### `runtime.lockWithRank` (`runtime/lockrank_off.go:23`)

| Change |     Delta |      % |              Time | Samples | Callee          | Location                      |
| -----: | --------: | -----: | ----------------: | ------: | --------------- | ----------------------------- |
| -45.5% | -100.00ms | 100.0% | 220.0ms → 120.0ms | 22 → 12 | `runtime.lock2` | `runtime/lock_spinbit.go:155` |

##### `runtime.lock` (`runtime/lock_spinbit.go:151`)

| Change |     Delta |      % |              Time | Samples | Callee                 | Location                     |
| -----: | --------: | -----: | ----------------: | ------: | ---------------------- | ---------------------------- |
| -45.5% | -100.00ms | 100.0% | 220.0ms → 120.0ms | 22 → 12 | `runtime.lockWithRank` | `runtime/lockrank_off.go:23` |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

| Change |    Delta |             % |              Time | Samples | Callee                      | Location                |
| -----: | -------: | ------------: | ----------------: | ------: | --------------------------- | ----------------------- |
| -12.3% | -80.00ms | 97.0% → 98.3% | 650.0ms → 570.0ms | 65 → 57 | `runtime.sysUsed`           | `runtime/mem.go:89`     |
| -50.0% | -10.00ms |   3.0% → 1.7% |   20.0ms → 10.0ms |   2 → 1 | `runtime.(*mheap).initSpan` | `runtime/mheap.go:1439` |

##### `runtime.(*mheap).alloc.func1` (`runtime/mheap.go:1011`)

| Change |    Delta |      % |              Time | Samples | Callee                       | Location                |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------- |
| -13.6% | -90.00ms | 100.0% | 660.0ms → 570.0ms | 66 → 57 | `runtime.(*mheap).allocSpan` | `runtime/mheap.go:1224` |

##### `runtime.slicebytetostring` (`runtime/string.go:139`)

|  Change |    Delta |             % |            Time | Samples | Callee             | Location                     |
| ------: | -------: | ------------: | --------------: | ------: | ------------------ | ---------------------------- |
|  -87.5% | -70.00ms | 72.7% → 50.0% | 80.0ms → 10.0ms |   8 → 1 | `runtime.mallocgc` | `runtime/malloc.go:1067`     |
| removed | -10.00ms |   9.1% → 0.0% |    10.0ms → 0ms |   1 → 0 | `runtime.memmove`  | `runtime/memmove_arm64.s:29` |

##### `runtime.morestack` (`runtime/asm_arm64.s:457`)

| Change |    Delta |      % |             Time | Samples | Callee             | Location                |
| -----: | -------: | -----: | ---------------: | ------: | ------------------ | ----------------------- |
| -50.0% | -80.00ms | 100.0% | 160.0ms → 80.0ms |  16 → 8 | `runtime.newstack` | `runtime/stack.go:1026` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

| Change |    Delta |      % |              Time | Samples | Callee            | Location                    |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | --------------------------- |
| -12.3% | -80.00ms | 100.0% | 650.0ms → 570.0ms | 65 → 57 | `runtime.madvise` | `runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

| Change |    Delta |      % |              Time | Samples | Callee              | Location                   |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | -------------------------- |
| -12.3% | -80.00ms | 100.0% | 650.0ms → 570.0ms | 65 → 57 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.goschedImpl` (`runtime/proc.go:4307`)

| Change |    Delta |             % |             Time | Samples | Callee          | Location                      |
| -----: | -------: | ------------: | ---------------: | ------: | --------------- | ----------------------------- |
| -45.5% | -50.00ms | 68.8% → 66.7% | 110.0ms → 60.0ms |  11 → 6 | `runtime.lock`  | `runtime/lock_spinbit.go:151` |
| -66.7% | -20.00ms | 18.8% → 11.1% |  30.0ms → 10.0ms |   3 → 1 | `runtime.wakep` | `runtime/proc.go:3212`        |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

|  Change |    Delta |           % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | -------: | ----------: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +400.0% | +40.00ms | 0.3% → 1.5% | 10.0ms → 50.0ms |   1 → 5 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.forEachPInternal` (2140) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +200.0% | +40.00ms | 0.6% → 1.7% | 20.0ms → 60.0ms |   2 → 6 | `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +40.00ms | 0.0% → 1.2% |    0ms → 40.0ms |   0 → 4 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +75.0% | +30.00ms | 1.2% → 2.0% | 40.0ms → 70.0ms |   4 → 7 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +30.00ms | 0.0% → 0.9% |    0ms → 30.0ms |   0 → 3 | `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                            |
|  +66.7% | +20.00ms | 0.9% → 1.5% | 30.0ms → 50.0ms |   3 → 5 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.stringEncoder` (610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                     |
|  +66.7% | +20.00ms | 0.9% → 1.5% | 30.0ms → 50.0ms |   3 → 5 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.runqgrab` (`runtime/proc.go:7662`) ← `runtime.runqsteal` (7730) ← `runtime.stealWork` (3828) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                     |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `encoding/json.isSpace` (`encoding/json/scanner.go:201`) ← `encoding/json.stateBeginString` (268) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `encoding/json.isSpace` (`encoding/json/scanner.go:201`) ← `encoding/json.stateEndValue` (281) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.unlock2Wake` (`runtime/lock_spinbit.go:345`) ← `runtime.unlock2` (267) ← `runtime.unlockWithRank` (`runtime/lockrank_off.go:34`) ← `runtime.unlock` (`runtime/lock_spinbit.go:260`) ← `runtime.forEachPInternal` (`runtime/proc.go:2140`) ← `runtime.gcMarkTermination.forEachP.func7` (2112) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `runtime.typedmemmove` (`runtime/mbarrier.go:150`) ← `internal/runtime/maps.typedmemmove` (235) ← `internal/runtime/maps.(*table).uncheckedPutSlot` (`internal/runtime/maps/table.go:382`) ← `internal/runtime/maps.(*table).grow` (1227) ← `internal/runtime/maps.(*table).rehash` (1145) ← `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |
|     new | +20.00ms | 0.0% → 0.6% |    0ms → 20.0ms |   0 → 2 | `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `reflect.unsafe_New` (2177) ← `reflect.copyVal` (`reflect/value.go:1881`) ← `reflect.(*MapIter).Key` (`reflect/map.go:245`) ← `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                   |
| +100.0% | +10.00ms | 0.3% → 0.6% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                       |
| +100.0% | +10.00ms | 0.3% → 0.6% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                 |
| +100.0% | +10.00ms | 0.3% → 0.6% | 10.0ms → 20.0ms |   1 → 2 | `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +100.0% | +10.00ms | 0.3% → 0.6% | 10.0ms → 20.0ms |   1 → 2 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`) ← `runtime.gcMarkTermination.func3` (`runtime/mgc.go:1500`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +50.0% | +10.00ms | 0.6% → 0.9% | 20.0ms → 30.0ms |   2 → 3 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                        |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

|  Change |     Delta |             % |              Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -28.9% | -110.00ms |  11.0% → 7.8% | 380.0ms → 270.0ms | 38 → 27 | `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.notesleep` (`runtime/lock_sema.go:46`) ← `runtime.mPark` (`runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -12.5% |  -80.00ms | 18.5% → 16.3% | 640.0ms → 560.0ms | 64 → 56 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -31.6% |  -60.00ms |   5.5% → 3.8% | 190.0ms → 130.0ms | 19 → 13 | `encoding/json.checkValid` (`encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -29.4% |  -50.00ms |   4.9% → 3.5% | 170.0ms → 120.0ms | 17 → 12 | `encoding/json.stateInString` (`encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -10.8% |  -40.00ms |  10.7% → 9.6% | 370.0ms → 330.0ms | 37 → 33 | `runtime.kevent` (`runtime/sys_darwin.go:438`) ← `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`) ← `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`) ← `runtime.gcStart.func4` (`runtime/mgc.go:947`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -75.0% |  -30.00ms |   1.2% → 0.3% |   40.0ms → 10.0ms |   4 → 1 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.stopm` (`runtime/proc.go:2992`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -30.00ms |   0.9% → 0.0% |      30.0ms → 0ms |   3 → 0 | `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`) ← `unicode/utf8.DecodeRune` (157) ← `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                          |
|  -25.0% |  -20.00ms |   2.3% → 1.7% |   80.0ms → 60.0ms |   8 → 6 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.acquirem` (`runtime/runtime1.go:600`) ← `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `runtime.convTstring` (`runtime/iface.go:419`) ← `encoding/json.(*decodeState).literalInterface` (`encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                 |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.isSpace` (`encoding/json/scanner.go:201`) ← `encoding/json.stateBeginStringOrEmpty` (255) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                       |
|  -50.0% |  -20.00ms |   1.2% → 0.6% |   40.0ms → 20.0ms |   4 → 2 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.findRunnable` (`runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`) ← `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (61) ← `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (61) ← `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/sort.go:30`) ← `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |
|  -66.7% |  -20.00ms |   0.9% → 0.3% |   30.0ms → 10.0ms |   3 → 1 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `internal/runtime/maps.(*table).grow` (`internal/runtime/maps/table.go:1227`) ← `internal/runtime/maps.(*table).rehash` (1145) ← `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                 |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `runtime.convTstring` (`runtime/iface.go:419`) ← `encoding/json.(*decodeState).literalInterface` (`encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                  |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.heapArenaOf` (`runtime/mheap.go:766`) ← `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -20.00ms |   0.6% → 0.0% |      20.0ms → 0ms |   2 → 0 | `runtime.mallocgc` (`runtime/malloc.go:1067`) ← `runtime.slicebytetostring` (`runtime/string.go:139`) ← `encoding/json.unquote` (`encoding/json/decode.go:1187`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -10.00ms |   0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.scanObject` (`runtime/mgcmark_greenteagc.go:1187`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -10.00ms |   0.3% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.isSpace` (`encoding/json/scanner.go:201`) ← `encoding/json.stateBeginValue` (217) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                            |

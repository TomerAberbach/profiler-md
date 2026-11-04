# CPU profile

Took 3.36s over 336 samples (10.0ms per sample).

| Category         |      % |  Time | Samples |
| ---------------- | -----: | ----: | ------: |
| Standard library | 100.0% | 3.36s |     336 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.77s (52.7%) runtime.systemstack at runtime/asm_arm64.s:353
│   ├── … 830.0ms (24.7%, self 25.6% globally) runtime.madvise at runtime/sys_darwin.go:224
│   ├── … 650.0ms (19.3%) runtime.kevent at runtime/sys_darwin.go:438
│   ├── 230.0ms (6.8%) runtime.gcBgMarkWorker.func2 at runtime/mgc.go:1847
│   │   ├── 160.0ms (4.8%) runtime.gcDrainMarkWorkerDedicated at runtime/mgcmark.go:1173
│   │   │   └── 160.0ms (4.8%) runtime.gcDrain at 1239
│   │   │       ├── 120.0ms (3.6%) runtime.(*gcControllerState).enlistWorker at runtime/mgcpacer.go:697
│   │   │       │   ├── … 90.0ms (2.7%, self 6.0% globally) runtime.pthread_kill at runtime/sys_darwin.go:148
│   │   │       │   └── 30.0ms (0.9%) runtime.wakep at runtime/proc.go:3212 …
│   │   │       └── 40.0ms (1.2%) 2 more callees, led by (0.6%) runtime.(*gcWork).balance at runtime/mgcwork.go:356
│   │   └── 70.0ms (2.1%) runtime.gcDrainMarkWorkerIdle at runtime/mgcmark.go:1167 …
│   └── 50.0ms (1.5%) 3 more callees, led by (0.9%) runtime.gcMarkDone.forEachP.func5 at runtime/proc.go:2112
├── … 940.0ms (28.0%) github.com/tomeraberbach/profiler-md-workload/internal/work.Run at github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10
│   ├── 620.0ms (18.5%) encoding/json.Unmarshal at encoding/json/decode.go:102
│   │   ├── … 370.0ms (11.0%) encoding/json.(*decodeState).objectInterface at encoding/json/decode.go:1078
│   │   │   ├── … 80.0ms (2.4%, self 0.6%) encoding/json.(*decodeState).scanWhile at encoding/json/decode.go:298
│   │   │   │   └── 50.0ms (1.5%, self 2.4% globally) encoding/json.stateBeginString at encoding/json/scanner.go:268
│   │   │   ├── … 40.0ms (1.2%, self 0.9%, self 1.5% globally) encoding/json.(*decodeState).rescanLiteral at encoding/json/decode.go:322
│   │   │   └── 250.0ms (7.4%) 4 more callees, led by (4.8%) encoding/json.(*decodeState).valueInterface at encoding/json/decode.go:1035
│   │   └── 250.0ms (7.4%, self 2.4%) encoding/json.checkValid at encoding/json/scanner.go:33
│   │       ├── 90.0ms (2.7%) encoding/json.stateInString at 339
│   │       └── 80.0ms (2.4%) 3 more callees, led by (1.2%) encoding/json.stateBeginString at 268
│   └── … 310.0ms (9.2%) encoding/json.(*encodeState).reflectValue at encoding/json/encode.go:366
│       ├── … 270.0ms (8.0%) encoding/json.mapEncoder.encode at encoding/json/encode.go:765
│       │   ├── 160.0ms (4.8%) slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at slices/sort.go:30
│       │   │   └── 160.0ms (4.8%) slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at slices/zsortanyfunc.go:61
│       │   │       ├── … 80.0ms (2.4%) slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at slices/zsortanyfunc.go:10 …
│       │   │       └── 70.0ms (2.1%, self 0.6%) slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }] at 135
│       │   │           └── … 40.0ms (1.2%, self 2.1% globally) cmpbody at internal/bytealg/compare_arm64.s:35
│       │   └── 110.0ms (3.3%) 5 more callees, led by (1.2%) reflect.(*MapIter).Value at reflect/map.go:289
│       └── 40.0ms (1.2%) 2 more callees, led by (0.6%) encoding/json.stringEncoder at encoding/json/encode.go:610
├── … 430.0ms (12.8%) runtime.schedule at runtime/proc.go:4135
│   ├── 390.0ms (11.6%) runtime.findRunnable at 3389
│   │   ├── … 320.0ms (9.5%) runtime.pthread_cond_wait at runtime/sys_darwin.go:487
│   │   └── 60.0ms (1.8%) 3 more callees, led by (1.2%) runtime.stealWork at 3828
│   └── … 30.0ms (0.9%, self 2.4% globally) runtime.pthread_cond_signal at runtime/sys_darwin.go:508
├── … 80.0ms (2.4%) runtime.goschedImpl at runtime/proc.go:4307
│   ├── … 40.0ms (1.2%, self 3.0% globally) runtime.usleep at runtime/sys_darwin.go:273
│   └── 30.0ms (0.9%) 2 more callees, led by (0.6%) runtime.schedule at 4135
└── 140.0ms (4.2%) 2 more root frames, led by (3.9%) runtime.gcBgMarkWorker at runtime/mgc.go:1750
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                                                                                  | Location                                       |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 25.6% | 860.0ms |      86 | `runtime.madvise`                                                                                         | `runtime/sys_darwin.go:224`                    |
| 19.6% | 660.0ms |      66 | `runtime.kevent`                                                                                          | `runtime/sys_darwin.go:438`                    |
|  9.5% | 320.0ms |      32 | `runtime.pthread_cond_wait`                                                                               | `runtime/sys_darwin.go:487`                    |
|  6.0% | 200.0ms |      20 | `runtime.pthread_kill`                                                                                    | `runtime/sys_darwin.go:148`                    |
|  3.0% | 100.0ms |      10 | `runtime.usleep`                                                                                          | `runtime/sys_darwin.go:273`                    |
|  2.7% |  90.0ms |       9 | `encoding/json.stateInString`                                                                             | `encoding/json/scanner.go:339`                 |
|  2.4% |  80.0ms |       8 | `encoding/json.stateBeginString`                                                                          | `encoding/json/scanner.go:268`                 |
|  2.4% |  80.0ms |       8 | `encoding/json.checkValid`                                                                                | `encoding/json/scanner.go:33`                  |
|  2.4% |  80.0ms |       8 | `runtime.pthread_cond_signal`                                                                             | `runtime/sys_darwin.go:508`                    |
|  2.1% |  70.0ms |       7 | `cmpbody`                                                                                                 | `internal/bytealg/compare_arm64.s:35`          |
|  1.8% |  60.0ms |       6 | `runtime.tryDeferToSpanScan`                                                                              | `runtime/mgcmark_greenteagc.go:264`            |
|  1.5% |  50.0ms |       5 | `encoding/json.(*decodeState).rescanLiteral`                                                              | `encoding/json/decode.go:322`                  |
|  1.2% |  40.0ms |       4 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:10`                    |
|  1.2% |  40.0ms |       4 | `unicode/utf8.decodeRuneSlow`                                                                             | `unicode/utf8/utf8.go:171`                     |
|  1.2% |  40.0ms |       4 | `encoding/json.unquoteBytes`                                                                              | `encoding/json/decode.go:1193`                 |
|  0.6% |  20.0ms |       2 | `runtime.lock2`                                                                                           | `runtime/lock_spinbit.go:155`                  |
|  0.6% |  20.0ms |       2 | `encoding/json.(*decodeState).scanWhile`                                                                  | `encoding/json/decode.go:298`                  |
|  0.6% |  20.0ms |       2 | `aeshashbody`                                                                                             | `runtime/asm_arm64.s:762`                      |
|  0.6% |  20.0ms |       2 | `runtime.mapassign_faststr`                                                                               | `internal/runtime/maps/runtime_faststr.go:263` |
|  0.6% |  20.0ms |       2 | `encoding/json.isSpace`                                                                                   | `encoding/json/scanner.go:201`                 |

#### Lines

Lines with the largest contribution to each function's self time.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 860.0ms |      86 | `runtime/sys_darwin.go:225` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 660.0ms |      66 | `runtime/sys_darwin.go:439` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 320.0ms |      32 | `runtime/sys_darwin.go:488` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 200.0ms |      20 | `runtime/sys_darwin.go:149` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 100.0ms |      10 | `runtime/sys_darwin.go:274` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 44.4% | 40.0ms |       4 | `encoding/json/scanner.go:339` |
| 11.1% | 10.0ms |       1 | `encoding/json/scanner.go:351` |
| 11.1% | 10.0ms |       1 | `encoding/json/scanner.go:346` |
| 11.1% | 10.0ms |       1 | `encoding/json/scanner.go:341` |
| 11.1% | 10.0ms |       1 | `encoding/json/scanner.go:342` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 50.0% | 40.0ms |       4 | `encoding/json/scanner.go:272` |
| 50.0% | 40.0ms |       4 | `encoding/json/scanner.go:268` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 50.0% | 40.0ms |       4 | `encoding/json/scanner.go:37` |
| 50.0% | 40.0ms |       4 | `encoding/json/scanner.go:36` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |   Time | Samples | Location                    |
| -----: | -----: | ------: | --------------------------- |
| 100.0% | 80.0ms |       8 | `runtime/sys_darwin.go:509` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|     % |   Time | Samples | Location                              |
| ----: | -----: | ------: | ------------------------------------- |
| 28.6% | 20.0ms |       2 | `internal/bytealg/compare_arm64.s:80` |
| 14.3% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:93` |
| 14.3% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:72` |
| 14.3% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:38` |
| 14.3% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:81` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 16.7% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:274` |
| 16.7% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:294` |
| 16.7% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:290` |
| 16.7% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:295` |
| 16.7% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:283` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 40.0% | 20.0ms |       2 | `encoding/json/decode.go:328` |
| 20.0% | 10.0ms |       1 | `encoding/json/decode.go:327` |
| 20.0% | 10.0ms |       1 | `encoding/json/decode.go:332` |
| 20.0% | 10.0ms |       1 | `encoding/json/decode.go:322` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

|     % |   Time | Samples | Location                    |
| ----: | -----: | ------: | --------------------------- |
| 75.0% | 30.0ms |       3 | `slices/zsortanyfunc.go:12` |
| 25.0% | 10.0ms |       1 | `slices/zsortanyfunc.go:11` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

|     % |   Time | Samples | Location                   |
| ----: | -----: | ------: | -------------------------- |
| 50.0% | 20.0ms |       2 | `unicode/utf8/utf8.go:171` |
| 25.0% | 10.0ms |       1 | `unicode/utf8/utf8.go:186` |
| 25.0% | 10.0ms |       1 | `unicode/utf8/utf8.go:178` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1208` |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1209` |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1235` |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1229` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 50.0% | 10.0ms |       1 | `runtime/lock_spinbit.go:162` |
| 50.0% | 10.0ms |       1 | `runtime/lock_spinbit.go:165` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|      % |   Time | Samples | Location                      |
| -----: | -----: | ------: | ----------------------------- |
| 100.0% | 20.0ms |       2 | `encoding/json/decode.go:301` |

##### `aeshashbody` (`runtime/asm_arm64.s:762`)

|     % |   Time | Samples | Location                  |
| ----: | -----: | ------: | ------------------------- |
| 50.0% | 10.0ms |       1 | `runtime/asm_arm64.s:797` |
| 50.0% | 10.0ms |       1 | `runtime/asm_arm64.s:794` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

|     % |   Time | Samples | Location                                       |
| ----: | -----: | ------: | ---------------------------------------------- |
| 50.0% | 10.0ms |       1 | `internal/runtime/maps/runtime_faststr.go:289` |
| 50.0% | 10.0ms |       1 | `internal/runtime/maps/runtime_faststr.go:263` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

|      % |   Time | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 20.0ms |       2 | `encoding/json/scanner.go:202` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Caller              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 860.0ms |      86 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Caller            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 660.0ms |      66 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                  |
| -----: | ------: | ------: | ------------------- | ------------------------- |
| 100.0% | 320.0ms |      32 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 200.0ms |      20 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|     % |   Time | Samples | Caller             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 70.0% | 70.0ms |       7 | `runtime.osyield`  | `runtime/os_darwin.go:379` |
| 30.0% | 30.0ms |       3 | `runtime.runqgrab` | `runtime/proc.go:7662`     |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|      % |   Time | Samples | Caller                     | Location                      |
| -----: | -----: | ------: | -------------------------- | ----------------------------- |
| 100.0% | 90.0ms |       9 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Caller                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 62.5% | 50.0ms |       5 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |
| 37.5% | 30.0ms |       3 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|      % |   Time | Samples | Caller                    | Location                      |
| -----: | -----: | ------: | ------------------------- | ----------------------------- |
| 100.0% | 80.0ms |       8 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |   Time | Samples | Caller               | Location                  |
| -----: | -----: | ------: | -------------------- | ------------------------- |
| 100.0% | 80.0ms |       8 | `runtime.semawakeup` | `runtime/os_darwin.go:83` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|      % |   Time | Samples | Caller                           | Location                                |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------- |
| 100.0% | 70.0ms |       7 | `internal/bytealg.CompareString` | `internal/bytealg/compare_native.go:14` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Caller                     | Location                             |
| ----: | -----: | ------: | -------------------------- | ------------------------------------ |
| 66.7% | 40.0ms |       4 | `runtime.scanObjectsSmall` | `runtime/mgcmark_greenteagc.go:1015` |
| 33.3% | 20.0ms |       2 | `runtime.scanObject`       | `runtime/mgcmark_greenteagc.go:1187` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Caller                                          | Location                       |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------ |
| 60.0% | 30.0ms |       3 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |
| 40.0% | 20.0ms |       2 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

|      % |   Time | Samples | Caller                                                                                              | Location                    |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
| 100.0% | 40.0ms |       4 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

|      % |   Time | Samples | Caller                    | Location                   |
| -----: | -----: | ------: | ------------------------- | -------------------------- |
| 100.0% | 40.0ms |       4 | `unicode/utf8.DecodeRune` | `unicode/utf8/utf8.go:157` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|      % |   Time | Samples | Caller                  | Location                       |
| -----: | -----: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 40.0ms |       4 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `runtime.lock2` (`runtime/lock_spinbit.go:155`)

|      % |   Time | Samples | Caller                 | Location                     |
| -----: | -----: | ------: | ---------------------- | ---------------------------- |
| 100.0% | 20.0ms |       2 | `runtime.lockWithRank` | `runtime/lockrank_off.go:23` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|      % |   Time | Samples | Caller                                         | Location                       |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 20.0ms |       2 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `aeshashbody` (`runtime/asm_arm64.s:762`)

|      % |   Time | Samples | Caller                                | Location                              |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------- |
| 100.0% | 20.0ms |       2 | `internal/runtime/maps.(*table).grow` | `internal/runtime/maps/table.go:1227` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

|      % |   Time | Samples | Caller                                         | Location                       |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 20.0ms |       2 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

|     % |   Time | Samples | Caller                           | Location                       |
| ----: | -----: | ------: | -------------------------------- | ------------------------------ |
| 50.0% | 10.0ms |       1 | `encoding/json.stateBeginString` | `encoding/json/scanner.go:268` |
| 50.0% | 10.0ms |       1 | `encoding/json.stateEndValue`    | `encoding/json/scanner.go:281` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                                                          | Location                                                                 |
| ----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 57.7% |   1.94s |     194 | `runtime.systemstack`                                             | `runtime/asm_arm64.s:353`                                                |
| 28.0% | 940.0ms |      94 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |
| 28.0% | 940.0ms |      94 | `main.main`                                                       | `github.com/tomeraberbach/profiler-md-workload/main.go:12`               |
| 28.0% | 940.0ms |      94 | `runtime.main`                                                    | `runtime/proc.go:149`                                                    |
| 26.2% | 880.0ms |      88 | `runtime.(*mheap).allocSpan`                                      | `runtime/mheap.go:1224`                                                  |
| 25.6% | 860.0ms |      86 | `runtime.madvise`                                                 | `runtime/sys_darwin.go:224`                                              |
| 25.6% | 860.0ms |      86 | `runtime.sysUsedOS`                                               | `runtime/mem_darwin.go:29`                                               |
| 25.6% | 860.0ms |      86 | `runtime.sysUsed`                                                 | `runtime/mem.go:89`                                                      |
| 25.3% | 850.0ms |      85 | `runtime.(*mheap).alloc.func1`                                    | `runtime/mheap.go:1011`                                                  |
| 19.6% | 660.0ms |      66 | `runtime.kevent`                                                  | `runtime/sys_darwin.go:438`                                              |
| 19.6% | 660.0ms |      66 | `runtime.netpoll`                                                 | `runtime/netpoll_kqueue.go:90`                                           |
| 19.6% | 660.0ms |      66 | `runtime.startTheWorldWithSema`                                   | `runtime/proc.go:1760`                                                   |
| 19.3% | 650.0ms |      65 | `runtime.gcStart.func4`                                           | `runtime/mgc.go:947`                                                     |
| 18.5% | 620.0ms |      62 | `encoding/json.Unmarshal`                                         | `encoding/json/decode.go:102`                                            |
| 13.4% | 450.0ms |      45 | `runtime.schedule`                                                | `runtime/proc.go:4135`                                                   |
| 12.8% | 430.0ms |      43 | `runtime.park_m`                                                  | `runtime/proc.go:4253`                                                   |
| 12.8% | 430.0ms |      43 | `runtime.mcall`                                                   | `runtime/asm_arm64.s:302`                                                |
| 12.2% | 410.0ms |      41 | `runtime.findRunnable`                                            | `runtime/proc.go:3389`                                                   |
| 11.0% | 370.0ms |      37 | `encoding/json.(*decodeState).objectInterface`                    | `encoding/json/decode.go:1078`                                           |
| 11.0% | 370.0ms |      37 | `encoding/json.(*decodeState).valueInterface`                     | `encoding/json/decode.go:1035`                                           |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                       | Location                       |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 57.7% |   1.94s |     194 | `runtime.systemstack`                          | `runtime/asm_arm64.s:353`      |
| 28.0% | 940.0ms |      94 | `runtime.main`                                 | `runtime/proc.go:149`          |
| 26.2% | 880.0ms |      88 | `runtime.(*mheap).allocSpan`                   | `runtime/mheap.go:1224`        |
| 25.6% | 860.0ms |      86 | `runtime.madvise`                              | `runtime/sys_darwin.go:224`    |
| 25.6% | 860.0ms |      86 | `runtime.sysUsedOS`                            | `runtime/mem_darwin.go:29`     |
| 25.6% | 860.0ms |      86 | `runtime.sysUsed`                              | `runtime/mem.go:89`            |
| 25.3% | 850.0ms |      85 | `runtime.(*mheap).alloc.func1`                 | `runtime/mheap.go:1011`        |
| 19.6% | 660.0ms |      66 | `runtime.kevent`                               | `runtime/sys_darwin.go:438`    |
| 19.6% | 660.0ms |      66 | `runtime.netpoll`                              | `runtime/netpoll_kqueue.go:90` |
| 19.6% | 660.0ms |      66 | `runtime.startTheWorldWithSema`                | `runtime/proc.go:1760`         |
| 18.5% | 620.0ms |      62 | `encoding/json.Unmarshal`                      | `encoding/json/decode.go:102`  |
| 13.4% | 450.0ms |      45 | `runtime.schedule`                             | `runtime/proc.go:4135`         |
| 12.8% | 430.0ms |      43 | `runtime.park_m`                               | `runtime/proc.go:4253`         |
| 12.8% | 430.0ms |      43 | `runtime.mcall`                                | `runtime/asm_arm64.s:302`      |
| 12.2% | 410.0ms |      41 | `runtime.findRunnable`                         | `runtime/proc.go:3389`         |
| 11.0% | 370.0ms |      37 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |
| 11.0% | 370.0ms |      37 | `encoding/json.(*decodeState).valueInterface`  | `encoding/json/decode.go:1035` |
| 11.0% | 370.0ms |      37 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |
| 11.0% | 370.0ms |      37 | `encoding/json.(*decodeState).object`          | `encoding/json/decode.go:604`  |
| 11.0% | 370.0ms |      37 | `encoding/json.(*decodeState).value`           | `encoding/json/decode.go:363`  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|    % |    Time | Samples | Caller                      | Location                 |
| ---: | ------: | ------: | --------------------------- | ------------------------ |
| 6.2% | 120.0ms |      12 | `runtime.gcBgMarkWorker`    | `runtime/mgc.go:1750`    |
| 1.0% |  20.0ms |       2 | `runtime.wbBufFlush`        | `runtime/mwbbuf.go:166`  |
| 0.5% |  10.0ms |       1 | `runtime.(*mheap).freeSpan` | `runtime/mheap.go:1666`  |
| 0.5% |  10.0ms |       1 | `runtime.(*mheap).alloc`    | `runtime/mheap.go:1006`  |
| 0.5% |  10.0ms |       1 | `runtime.gcAssistAlloc`     | `runtime/mgcmark.go:499` |

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`)

|      % |    Time | Samples | Caller      | Location                                                   |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------------- |
| 100.0% | 940.0ms |      94 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

|      % |    Time | Samples | Caller         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 940.0ms |      94 | `runtime.main` | `runtime/proc.go:149` |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

|     % |    Time | Samples | Caller                         | Location                |
| ----: | ------: | ------: | ------------------------------ | ----------------------- |
| 96.6% | 850.0ms |      85 | `runtime.(*mheap).alloc.func1` | `runtime/mheap.go:1011` |
|  3.4% |  30.0ms |       3 | `runtime.(*mheap).allocManual` | `runtime/mheap.go:1039` |

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Caller              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 860.0ms |      86 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

|      % |    Time | Samples | Caller            | Location            |
| -----: | ------: | ------: | ----------------- | ------------------- |
| 100.0% | 860.0ms |      86 | `runtime.sysUsed` | `runtime/mem.go:89` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

|      % |    Time | Samples | Caller                       | Location                |
| -----: | ------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 860.0ms |      86 | `runtime.(*mheap).allocSpan` | `runtime/mheap.go:1224` |

##### `runtime.(*mheap).alloc.func1` (`runtime/mheap.go:1011`)

|      % |    Time | Samples | Caller                | Location                  |
| -----: | ------: | ------: | --------------------- | ------------------------- |
| 100.0% | 850.0ms |      85 | `runtime.systemstack` | `runtime/asm_arm64.s:353` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Caller            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 660.0ms |      66 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`)

|      % |    Time | Samples | Caller                          | Location               |
| -----: | ------: | ------: | ------------------------------- | ---------------------- |
| 100.0% | 660.0ms |      66 | `runtime.startTheWorldWithSema` | `runtime/proc.go:1760` |

##### `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`)

|     % |    Time | Samples | Caller                            | Location              |
| ----: | ------: | ------: | --------------------------------- | --------------------- |
| 98.5% | 650.0ms |      65 | `runtime.gcStart.func4`           | `runtime/mgc.go:947`  |
|  1.5% |  10.0ms |       1 | `runtime.gcMarkTermination.func3` | `runtime/mgc.go:1500` |

##### `runtime.gcStart.func4` (`runtime/mgc.go:947`)

|      % |    Time | Samples | Caller                | Location                  |
| -----: | ------: | ------: | --------------------- | ------------------------- |
| 100.0% | 650.0ms |      65 | `runtime.systemstack` | `runtime/asm_arm64.s:353` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

|      % |    Time | Samples | Caller                                                            | Location                                                                 |
| -----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 620.0ms |      62 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

|     % |    Time | Samples | Caller                | Location               |
| ----: | ------: | ------: | --------------------- | ---------------------- |
| 95.6% | 430.0ms |      43 | `runtime.park_m`      | `runtime/proc.go:4253` |
|  4.4% |  20.0ms |       2 | `runtime.goschedImpl` | `runtime/proc.go:4307` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

|      % |    Time | Samples | Caller          | Location                  |
| -----: | ------: | ------: | --------------- | ------------------------- |
| 100.0% | 430.0ms |      43 | `runtime.mcall` | `runtime/asm_arm64.s:302` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

|      % |    Time | Samples | Caller             | Location               |
| -----: | ------: | ------: | ------------------ | ---------------------- |
| 100.0% | 410.0ms |      41 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

|      % |    Time | Samples | Caller                                        | Location                       |
| -----: | ------: | ------: | --------------------------------------------- | ------------------------------ |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).object`         | `encoding/json/decode.go:604`  |

##### `encoding/json.(*decodeState).valueInterface` (`encoding/json/decode.go:1035`)

|      % |    Time | Samples | Caller                                         | Location                       |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

|      % |    Time | Samples | Caller                                        | Location                       |
| -----: | ------: | ------: | --------------------------------------------- | ------------------------------ |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`encoding/json/decode.go:604`)

|      % |    Time | Samples | Caller                               | Location                      |
| -----: | ------: | ------: | ------------------------------------ | ----------------------------- |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).value` | `encoding/json/decode.go:363` |

##### `encoding/json.(*decodeState).value` (`encoding/json/decode.go:363`)

|      % |    Time | Samples | Caller                                   | Location                      |
| -----: | ------: | ------: | ---------------------------------------- | ----------------------------- |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).unmarshal` | `encoding/json/decode.go:173` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|     % |    Time | Samples | Callee                              | Location                |
| ----: | ------: | ------: | ----------------------------------- | ----------------------- |
| 43.8% | 850.0ms |      85 | `runtime.(*mheap).alloc.func1`      | `runtime/mheap.go:1011` |
| 33.5% | 650.0ms |      65 | `runtime.gcStart.func4`             | `runtime/mgc.go:947`    |
| 18.0% | 350.0ms |      35 | `runtime.gcBgMarkWorker.func2`      | `runtime/mgc.go:1847`   |
|  1.5% |  30.0ms |       3 | `runtime.gcMarkDone.forEachP.func5` | `runtime/proc.go:2112`  |
|  1.0% |  20.0ms |       2 | `runtime.wbBufFlush.func1`          | `runtime/mwbbuf.go:180` |

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`)

|     % |    Time | Samples | Callee                    | Location                      |
| ----: | ------: | ------: | ------------------------- | ----------------------------- |
| 66.0% | 620.0ms |      62 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |
| 34.0% | 320.0ms |      32 | `encoding/json.Marshal`   | `encoding/json/encode.go:205` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

|      % |    Time | Samples | Callee                                                            | Location                                                                 |
| -----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 940.0ms |      94 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |

##### `runtime.main` (`runtime/proc.go:149`)

|      % |    Time | Samples | Callee      | Location                                                   |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------------- |
| 100.0% | 940.0ms |      94 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

|     % |    Time | Samples | Callee                                   | Location                |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------- |
| 97.7% | 860.0ms |      86 | `runtime.sysUsed`                        | `runtime/mem.go:89`     |
|  1.1% |  10.0ms |       1 | `runtime.(*mheap).allocMSpanLocked`      | `runtime/mheap.go:1160` |
|  1.1% |  10.0ms |       1 | `runtime.(*consistentHeapStats).acquire` | `runtime/mstats.go:776` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

|      % |    Time | Samples | Callee            | Location                    |
| -----: | ------: | ------: | ----------------- | --------------------------- |
| 100.0% | 860.0ms |      86 | `runtime.madvise` | `runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

|      % |    Time | Samples | Callee              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 860.0ms |      86 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.(*mheap).alloc.func1` (`runtime/mheap.go:1011`)

|      % |    Time | Samples | Callee                       | Location                |
| -----: | ------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 850.0ms |      85 | `runtime.(*mheap).allocSpan` | `runtime/mheap.go:1224` |

##### `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`)

|      % |    Time | Samples | Callee           | Location                    |
| -----: | ------: | ------: | ---------------- | --------------------------- |
| 100.0% | 660.0ms |      66 | `runtime.kevent` | `runtime/sys_darwin.go:438` |

##### `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`)

|      % |    Time | Samples | Callee            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 660.0ms |      66 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.gcStart.func4` (`runtime/mgc.go:947`)

|      % |    Time | Samples | Callee                          | Location               |
| -----: | ------: | ------: | ------------------------------- | ---------------------- |
| 100.0% | 650.0ms |      65 | `runtime.startTheWorldWithSema` | `runtime/proc.go:1760` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                      |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------- |
| 59.7% | 370.0ms |      37 | `encoding/json.(*decodeState).unmarshal` | `encoding/json/decode.go:173` |
| 40.3% | 250.0ms |      25 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

|     % |    Time | Samples | Callee                  | Location               |
| ----: | ------: | ------: | ----------------------- | ---------------------- |
| 91.1% | 410.0ms |      41 | `runtime.findRunnable`  | `runtime/proc.go:3389` |
|  8.9% |  40.0ms |       4 | `runtime.resetspinning` | `runtime/proc.go:4021` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

|      % |    Time | Samples | Callee             | Location               |
| -----: | ------: | ------: | ------------------ | ---------------------- |
| 100.0% | 430.0ms |      43 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `runtime.mcall` (`runtime/asm_arm64.s:302`)

|      % |    Time | Samples | Callee           | Location               |
| -----: | ------: | ------: | ---------------- | ---------------------- |
| 100.0% | 430.0ms |      43 | `runtime.park_m` | `runtime/proc.go:4253` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

|     % |    Time | Samples | Callee              | Location                      |
| ----: | ------: | ------: | ------------------- | ----------------------------- |
| 80.5% | 330.0ms |      33 | `runtime.stopm`     | `runtime/proc.go:2992`        |
| 12.2% |  50.0ms |       5 | `runtime.stealWork` | `runtime/proc.go:3828`        |
|  2.4% |  10.0ms |       1 | `runtime.lock`      | `runtime/lock_spinbit.go:151` |
|  2.4% |  10.0ms |       1 | `runtime.unlock`    | `runtime/lock_spinbit.go:260` |
|  2.4% |  10.0ms |       1 | `runtime.gcstopm`   | `runtime/proc.go:3296`        |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

|      % |    Time | Samples | Callee                                        | Location                                       |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------- |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035`                 |
|  21.6% |  80.0ms |       8 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`                  |
|  13.5% |  50.0ms |       5 | `runtime.mapassign_faststr`                   | `internal/runtime/maps/runtime_faststr.go:263` |
|  10.8% |  40.0ms |       4 | `encoding/json.(*decodeState).rescanLiteral`  | `encoding/json/decode.go:322`                  |
|   8.1% |  30.0ms |       3 | `encoding/json.unquote`                       | `encoding/json/decode.go:1187`                 |

##### `encoding/json.(*decodeState).valueInterface` (`encoding/json/decode.go:1035`)

|      % |    Time | Samples | Callee                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).arrayInterface`   | `encoding/json/decode.go:1052` |
|  37.8% | 140.0ms |      14 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |
|   2.7% |  10.0ms |       1 | `runtime.convTslice`                            | `runtime/iface.go:438`         |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

|      % |    Time | Samples | Callee                                        | Location                       |
| -----: | ------: | ------: | --------------------------------------------- | ------------------------------ |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |

##### `encoding/json.(*decodeState).object` (`encoding/json/decode.go:604`)

|      % |    Time | Samples | Callee                                         | Location                       |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`encoding/json/decode.go:363`)

|      % |    Time | Samples | Callee                                | Location                      |
| -----: | ------: | ------: | ------------------------------------- | ----------------------------- |
| 100.0% | 370.0ms |      37 | `encoding/json.(*decodeState).object` | `encoding/json/decode.go:604` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.7% | 830.0ms |      83 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 19.3% | 650.0ms |      65 | `runtime.kevent` (`runtime/sys_darwin.go:438`) ← `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`) ← `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`) ← `runtime.gcStart.func4` (`runtime/mgc.go:947`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  9.5% | 320.0ms |      32 | `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.notesleep` (`runtime/lock_sema.go:46`) ← `runtime.mPark` (`runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.7% |  90.0ms |       9 | `encoding/json.stateInString` (`encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.7% |  90.0ms |       9 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.4% |  80.0ms |       8 | `encoding/json.checkValid` (`encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.8% |  60.0ms |       6 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.2% |  40.0ms |       4 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.9% |  30.0ms |       3 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.forEachPInternal` (2140) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.9% |  30.0ms |       3 | `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                      |
|  0.9% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.9% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.9% |  30.0ms |       3 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.6% |  20.0ms |       2 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                       |
|  0.6% |  20.0ms |       2 | `aeshashbody` (`runtime/asm_arm64.s:762`) ← `internal/runtime/maps.(*table).grow` (`internal/runtime/maps/table.go:1227`) ← `internal/runtime/maps.(*table).rehash` (1145) ← `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`) ← `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |
|  0.6% |  20.0ms |       2 | `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`) ← `unicode/utf8.DecodeRune` (157) ← `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                      |
|  0.6% |  20.0ms |       2 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.6% |  20.0ms |       2 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                        |
|  0.6% |  20.0ms |       2 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.6% |  20.0ms |       2 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`) ← `runtime.(*mheap).allocManual` (1039) ← `runtime.getempty.func1` (`runtime/mgcwork.go:449`) ← `runtime.getempty` (424) ← `runtime.handoff` (509) ← `runtime.(*gcWork).balance` (356) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

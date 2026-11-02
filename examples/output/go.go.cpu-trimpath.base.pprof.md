# CPU profile

Took 3.31s over 331 samples (10.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Standard library  | 99.4% |  3.29s |     329 |
| Garbage collector |  0.6% | 20.0ms |       2 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.73s (52.3%) runtime.systemstack at runtime/asm_arm64.s:353
│   ├── … 830.0ms (25.1%, self 26.0% globally) runtime.madvise at runtime/sys_darwin.go:224
│   ├── … 590.0ms (17.8%) runtime.kevent at runtime/sys_darwin.go:438
│   ├── 280.0ms (8.5%) runtime.gcBgMarkWorker.func2 at runtime/mgc.go:1847
│   │   ├── 210.0ms (6.3%) runtime.gcDrainMarkWorkerDedicated at runtime/mgcmark.go:1173
│   │   │   └── 210.0ms (6.3%) runtime.gcDrain at 1239
│   │   │       ├── 190.0ms (5.7%) runtime.(*gcControllerState).enlistWorker at runtime/mgcpacer.go:697
│   │   │       │   ├── … 160.0ms (4.8%, self 6.9% globally) runtime.pthread_kill at runtime/sys_darwin.go:148
│   │   │       │   └── 30.0ms (0.9%) runtime.wakep at runtime/proc.go:3212 …
│   │   │       └── 20.0ms (0.6%) runtime.(*gcWork).balance at runtime/mgcwork.go:356 …
│   │   └── 70.0ms (2.1%) runtime.gcDrainMarkWorkerIdle at runtime/mgcmark.go:1167 …
│   └── 30.0ms (0.9%) 3 more callees, led by (0.3%) runtime.gcMarkTermination.forEachP.func7 at runtime/proc.go:2112
├── … 810.0ms (24.5%) github.com/tomeraberbach/profiler-md-workload/internal/work.Run at github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10
│   ├── 570.0ms (17.2%) encoding/json.Unmarshal at encoding/json/decode.go:102
│   │   ├── … 370.0ms (11.2%) encoding/json.(*decodeState).objectInterface at encoding/json/decode.go:1078
│   │   │   └── 370.0ms (11.2%) 5 more callees, led by (4.2%) encoding/json.(*decodeState).valueInterface at encoding/json/decode.go:1035
│   │   └── 200.0ms (6.0%, self 2.1%) encoding/json.checkValid at encoding/json/scanner.go:33
│   │       ├── 60.0ms (1.8%, self 3.0% globally) encoding/json.stateBeginString at 268
│   │       └── 70.0ms (2.1%) 2 more callees, led by (1.2%) encoding/json.stateInString at 339
│   └── … 240.0ms (7.3%) encoding/json.(*encodeState).reflectValue at encoding/json/encode.go:366
│       ├── … 50.0ms (1.5%) encoding/json.stringEncoder at encoding/json/encode.go:610
│       │   └── 40.0ms (1.2%, self 1.8% globally) encoding/json.appendString[go.shape.string] at 999
│       └── 190.0ms (5.7%) 2 more callees, led by (5.4%) encoding/json.mapEncoder.encode at encoding/json/encode.go:765
├── … 500.0ms (15.1%) runtime.schedule at runtime/proc.go:4135
│   ├── 450.0ms (13.6%) runtime.findRunnable at 3389
│   │   ├── 400.0ms (12.1%) runtime.stopm at 2992
│   │   │   ├── … 360.0ms (10.9%, self 11.5% globally) runtime.pthread_cond_wait at runtime/sys_darwin.go:487
│   │   │   └── 40.0ms (1.2%) runtime.lock at runtime/lock_spinbit.go:151 …
│   │   └── 50.0ms (1.5%) 3 more callees, led by (0.9%) runtime.lock at runtime/lock_spinbit.go:151
│   └── … 50.0ms (1.5%, self 3.0% globally) runtime.pthread_cond_signal at runtime/sys_darwin.go:508
├── … 130.0ms (3.9%) runtime.gcBgMarkWorker.func2 at runtime/mgc.go:1847
│   ├── 80.0ms (2.4%) runtime.gcDrainMarkWorkerDedicated at runtime/mgcmark.go:1173
│   │   └── 80.0ms (2.4%) runtime.gcDrain at 1239
│   │       └── 60.0ms (1.8%) runtime.scanObject at runtime/mgcmark_greenteagc.go:1187
│   │           └── 50.0ms (1.5%, self 2.1% globally) runtime.tryDeferToSpanScan at 264
│   └── 50.0ms (1.5%) runtime.gcDrainMarkWorkerIdle at runtime/mgcmark.go:1167 …
├── … 100.0ms (3.0%) runtime.goschedImpl at runtime/proc.go:4307
│   ├── … 60.0ms (1.8%, self 5.1% globally) runtime.usleep at runtime/sys_darwin.go:273
│   └── 40.0ms (1.2%) 2 more callees, led by (0.9%) runtime.schedule at 4135
└── 10.0ms (0.3%) internal/chacha8rand.block at internal/chacha8rand/chacha8_arm64.s:19
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                                      | Location                              |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------- |
| 26.0% | 860.0ms |      86 | `runtime.madvise`                             | `runtime/sys_darwin.go:224`           |
| 17.8% | 590.0ms |      59 | `runtime.kevent`                              | `runtime/sys_darwin.go:438`           |
| 11.5% | 380.0ms |      38 | `runtime.pthread_cond_wait`                   | `runtime/sys_darwin.go:487`           |
|  6.9% | 230.0ms |      23 | `runtime.pthread_kill`                        | `runtime/sys_darwin.go:148`           |
|  5.1% | 170.0ms |      17 | `runtime.usleep`                              | `runtime/sys_darwin.go:273`           |
|  3.0% | 100.0ms |      10 | `runtime.pthread_cond_signal`                 | `runtime/sys_darwin.go:508`           |
|  3.0% | 100.0ms |      10 | `encoding/json.stateBeginString`              | `encoding/json/scanner.go:268`        |
|  2.1% |  70.0ms |       7 | `encoding/json.checkValid`                    | `encoding/json/scanner.go:33`         |
|  2.1% |  70.0ms |       7 | `runtime.tryDeferToSpanScan`                  | `runtime/mgcmark_greenteagc.go:264`   |
|  1.8% |  60.0ms |       6 | `encoding/json.appendString[go.shape.string]` | `encoding/json/encode.go:999`         |
|  1.2% |  40.0ms |       4 | `encoding/json.stateInString`                 | `encoding/json/scanner.go:339`        |
|  1.2% |  40.0ms |       4 | `encoding/json.unquoteBytes`                  | `encoding/json/decode.go:1193`        |
|  1.2% |  40.0ms |       4 | `encoding/json.stateBeginValue`               | `encoding/json/scanner.go:217`        |
|  0.9% |  30.0ms |       3 | `encoding/json.(*decodeState).rescanLiteral`  | `encoding/json/decode.go:322`         |
|  0.9% |  30.0ms |       3 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`         |
|  0.9% |  30.0ms |       3 | `cmpbody`                                     | `internal/bytealg/compare_arm64.s:35` |
|  0.9% |  30.0ms |       3 | `encoding/json.stateEndValue`                 | `encoding/json/scanner.go:281`        |
|  0.6% |  20.0ms |       2 | `runtime.mallocgc`                            | `runtime/malloc.go:1067`              |
|  0.6% |  20.0ms |       2 | `runtime.scanObjectsSmall`                    | `runtime/mgcmark_greenteagc.go:1015`  |
|  0.6% |  20.0ms |       2 | `encoding/json.mapEncoder.encode.func1`       | `encoding/json/encode.go:794`         |

#### Lines

Lines with the largest contribution to each function's self time.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 860.0ms |      86 | `runtime/sys_darwin.go:225` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 590.0ms |      59 | `runtime/sys_darwin.go:439` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 380.0ms |      38 | `runtime/sys_darwin.go:488` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 230.0ms |      23 | `runtime/sys_darwin.go:149` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 170.0ms |      17 | `runtime/sys_darwin.go:274` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 100.0ms |      10 | `runtime/sys_darwin.go:509` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 40.0% | 40.0ms |       4 | `encoding/json/scanner.go:268` |
| 30.0% | 30.0ms |       3 | `encoding/json/scanner.go:272` |
| 20.0% | 20.0ms |       2 | `encoding/json/scanner.go:270` |
| 10.0% | 10.0ms |       1 | `encoding/json/scanner.go:274` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 57.1% | 40.0ms |       4 | `encoding/json/scanner.go:36` |
| 28.6% | 20.0ms |       2 | `encoding/json/scanner.go:37` |
| 14.3% | 10.0ms |       1 | `encoding/json/scanner.go:35` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 42.9% | 30.0ms |       3 | `runtime/mgcmark_greenteagc.go:290` |
| 28.6% | 20.0ms |       2 | `runtime/mgcmark_greenteagc.go:283` |
| 14.3% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:288` |
| 14.3% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:295` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 33.3% | 20.0ms |       2 | `encoding/json/encode.go:1003` |
| 33.3% | 20.0ms |       2 | `encoding/json/encode.go:1004` |
| 16.7% | 10.0ms |       1 | `encoding/json/encode.go:1005` |
| 16.7% | 10.0ms |       1 | `encoding/json/encode.go:1002` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 75.0% | 30.0ms |       3 | `encoding/json/scanner.go:351` |
| 25.0% | 10.0ms |       1 | `encoding/json/scanner.go:339` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1220` |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1205` |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1203` |
| 25.0% | 10.0ms |       1 | `encoding/json/decode.go:1284` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 75.0% | 30.0ms |       3 | `encoding/json/scanner.go:221` |
| 25.0% | 10.0ms |       1 | `encoding/json/scanner.go:217` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 66.7% | 20.0ms |       2 | `encoding/json/decode.go:328` |
| 33.3% | 10.0ms |       1 | `encoding/json/decode.go:329` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|      % |   Time | Samples | Location                      |
| -----: | -----: | ------: | ----------------------------- |
| 100.0% | 30.0ms |       3 | `encoding/json/decode.go:301` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|     % |   Time | Samples | Location                              |
| ----: | -----: | ------: | ------------------------------------- |
| 33.3% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:36` |
| 33.3% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:53` |
| 33.3% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:44` |

##### `encoding/json.stateEndValue` (`encoding/json/scanner.go:281`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 33.3% | 10.0ms |       1 | `encoding/json/scanner.go:306` |
| 33.3% | 10.0ms |       1 | `encoding/json/scanner.go:283` |
| 33.3% | 10.0ms |       1 | `encoding/json/scanner.go:299` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|     % |   Time | Samples | Location                 |
| ----: | -----: | ------: | ------------------------ |
| 50.0% | 10.0ms |       1 | `runtime/malloc.go:1112` |
| 50.0% | 10.0ms |       1 | `runtime/malloc.go:1067` |

##### `runtime.scanObjectsSmall` (`runtime/mgcmark_greenteagc.go:1015`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 20.0ms |       2 | `runtime/mgcmark_greenteagc.go:1050` |

##### `encoding/json.mapEncoder.encode.func1` (`encoding/json/encode.go:794`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 50.0% | 10.0ms |       1 | `encoding/json/encode.go:795` |
| 50.0% | 10.0ms |       1 | `encoding/json/encode.go:794` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|     % |    Time | Samples | Caller                | Location                   |
| ----: | ------: | ------: | --------------------- | -------------------------- |
| 98.8% | 850.0ms |      85 | `runtime.sysUsedOS`   | `runtime/mem_darwin.go:29` |
|  1.2% |  10.0ms |       1 | `runtime.sysUnusedOS` | `runtime/mem_darwin.go:23` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Caller            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 590.0ms |      59 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                  |
| -----: | ------: | ------: | ------------------- | ------------------------- |
| 100.0% | 380.0ms |      38 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 230.0ms |      23 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|      % |    Time | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 170.0ms |      17 | `runtime.osyield` | `runtime/os_darwin.go:379` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Caller               | Location                  |
| -----: | ------: | ------: | -------------------- | ------------------------- |
| 100.0% | 100.0ms |      10 | `runtime.semawakeup` | `runtime/os_darwin.go:83` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Caller                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 60.0% | 60.0ms |       6 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |
| 40.0% | 40.0ms |       4 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|      % |   Time | Samples | Caller                    | Location                      |
| -----: | -----: | ------: | ------------------------- | ----------------------------- |
| 100.0% | 70.0ms |       7 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|      % |   Time | Samples | Caller               | Location                             |
| -----: | -----: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 70.0ms |       7 | `runtime.scanObject` | `runtime/mgcmark_greenteagc.go:1187` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|     % |   Time | Samples | Caller                            | Location                      |
| ----: | -----: | ------: | --------------------------------- | ----------------------------- |
| 66.7% | 40.0ms |       4 | `encoding/json.stringEncoder`     | `encoding/json/encode.go:610` |
| 33.3% | 20.0ms |       2 | `encoding/json.mapEncoder.encode` | `encoding/json/encode.go:765` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|      % |   Time | Samples | Caller                     | Location                      |
| -----: | -----: | ------: | -------------------------- | ----------------------------- |
| 100.0% | 40.0ms |       4 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|      % |   Time | Samples | Caller                  | Location                       |
| -----: | -----: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 40.0ms |       4 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|      % |   Time | Samples | Caller                                   | Location                      |
| -----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 100.0% | 40.0ms |       4 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Caller                                          | Location                       |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------ |
| 66.7% | 20.0ms |       2 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |
| 33.3% | 10.0ms |       1 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|      % |   Time | Samples | Caller                                         | Location                       |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 30.0ms |       3 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|      % |   Time | Samples | Caller                           | Location                                |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------- |
| 100.0% | 30.0ms |       3 | `internal/bytealg.CompareString` | `internal/bytealg/compare_native.go:14` |

##### `encoding/json.stateEndValue` (`encoding/json/scanner.go:281`)

|     % |   Time | Samples | Caller                                       | Location                      |
| ----: | -----: | ------: | -------------------------------------------- | ----------------------------- |
| 66.7% | 20.0ms |       2 | `encoding/json.checkValid`                   | `encoding/json/scanner.go:33` |
| 33.3% | 10.0ms |       1 | `encoding/json.(*decodeState).rescanLiteral` | `encoding/json/decode.go:322` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|      % |   Time | Samples | Caller                      | Location                |
| -----: | -----: | ------: | --------------------------- | ----------------------- |
| 100.0% | 20.0ms |       2 | `runtime.slicebytetostring` | `runtime/string.go:139` |

##### `runtime.scanObjectsSmall` (`runtime/mgcmark_greenteagc.go:1015`)

|      % |   Time | Samples | Caller             | Location                            |
| -----: | -----: | ------: | ------------------ | ----------------------------------- |
| 100.0% | 20.0ms |       2 | `runtime.scanSpan` | `runtime/mgcmark_greenteagc.go:844` |

##### `encoding/json.mapEncoder.encode.func1` (`encoding/json/encode.go:794`)

|      % |   Time | Samples | Caller                                                                                                    | Location                    |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------- | --------------------------- |
| 100.0% | 20.0ms |       2 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:10` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Samples | Function                                                          | Location                                                                 |
| ----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 57.1% |   1.89s |     189 | `runtime.systemstack`                                             | `runtime/asm_arm64.s:353`                                                |
| 26.0% | 860.0ms |      86 | `runtime.madvise`                                                 | `runtime/sys_darwin.go:224`                                              |
| 26.0% | 860.0ms |      86 | `runtime.(*mheap).allocSpan`                                      | `runtime/mheap.go:1224`                                                  |
| 25.7% | 850.0ms |      85 | `runtime.sysUsedOS`                                               | `runtime/mem_darwin.go:29`                                               |
| 25.7% | 850.0ms |      85 | `runtime.sysUsed`                                                 | `runtime/mem.go:89`                                                      |
| 25.4% | 840.0ms |      84 | `runtime.(*mheap).alloc.func1`                                    | `runtime/mheap.go:1011`                                                  |
| 24.5% | 810.0ms |      81 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |
| 24.5% | 810.0ms |      81 | `main.main`                                                       | `github.com/tomeraberbach/profiler-md-workload/main.go:12`               |
| 24.5% | 810.0ms |      81 | `runtime.main`                                                    | `runtime/proc.go:149`                                                    |
| 17.8% | 590.0ms |      59 | `runtime.kevent`                                                  | `runtime/sys_darwin.go:438`                                              |
| 17.8% | 590.0ms |      59 | `runtime.netpoll`                                                 | `runtime/netpoll_kqueue.go:90`                                           |
| 17.8% | 590.0ms |      59 | `runtime.startTheWorldWithSema`                                   | `runtime/proc.go:1760`                                                   |
| 17.8% | 590.0ms |      59 | `runtime.gcStart.func4`                                           | `runtime/mgc.go:947`                                                     |
| 17.2% | 570.0ms |      57 | `encoding/json.Unmarshal`                                         | `encoding/json/decode.go:102`                                            |
| 16.3% | 540.0ms |      54 | `runtime.schedule`                                                | `runtime/proc.go:4135`                                                   |
| 15.4% | 510.0ms |      51 | `runtime.park_m`                                                  | `runtime/proc.go:4253`                                                   |
| 15.4% | 510.0ms |      51 | `runtime.mcall`                                                   | `runtime/asm_arm64.s:302`                                                |
| 14.8% | 490.0ms |      49 | `runtime.findRunnable`                                            | `runtime/proc.go:3389`                                                   |
| 12.7% | 420.0ms |      42 | `runtime.stopm`                                                   | `runtime/proc.go:2992`                                                   |
| 12.4% | 410.0ms |      41 | `runtime.gcDrain`                                                 | `runtime/mgcmark.go:1239`                                                |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Samples | Function                        | Location                       |
| ----: | ------: | ------: | ------------------------------- | ------------------------------ |
| 57.1% |   1.89s |     189 | `runtime.systemstack`           | `runtime/asm_arm64.s:353`      |
| 26.0% | 860.0ms |      86 | `runtime.madvise`               | `runtime/sys_darwin.go:224`    |
| 26.0% | 860.0ms |      86 | `runtime.(*mheap).allocSpan`    | `runtime/mheap.go:1224`        |
| 25.7% | 850.0ms |      85 | `runtime.sysUsedOS`             | `runtime/mem_darwin.go:29`     |
| 25.7% | 850.0ms |      85 | `runtime.sysUsed`               | `runtime/mem.go:89`            |
| 25.4% | 840.0ms |      84 | `runtime.(*mheap).alloc.func1`  | `runtime/mheap.go:1011`        |
| 24.5% | 810.0ms |      81 | `runtime.main`                  | `runtime/proc.go:149`          |
| 17.8% | 590.0ms |      59 | `runtime.kevent`                | `runtime/sys_darwin.go:438`    |
| 17.8% | 590.0ms |      59 | `runtime.netpoll`               | `runtime/netpoll_kqueue.go:90` |
| 17.8% | 590.0ms |      59 | `runtime.startTheWorldWithSema` | `runtime/proc.go:1760`         |
| 17.2% | 570.0ms |      57 | `encoding/json.Unmarshal`       | `encoding/json/decode.go:102`  |
| 16.3% | 540.0ms |      54 | `runtime.schedule`              | `runtime/proc.go:4135`         |
| 15.4% | 510.0ms |      51 | `runtime.park_m`                | `runtime/proc.go:4253`         |
| 15.4% | 510.0ms |      51 | `runtime.mcall`                 | `runtime/asm_arm64.s:302`      |
| 14.8% | 490.0ms |      49 | `runtime.findRunnable`          | `runtime/proc.go:3389`         |
| 12.7% | 420.0ms |      42 | `runtime.stopm`                 | `runtime/proc.go:2992`         |
| 11.8% | 390.0ms |      39 | `runtime.semasleep`             | `runtime/os_darwin.go:45`      |
| 11.5% | 380.0ms |      38 | `runtime.pthread_cond_wait`     | `runtime/sys_darwin.go:487`    |
| 11.2% | 370.0ms |      37 | `runtime.notesleep`             | `runtime/lock_sema.go:46`      |
| 11.2% | 370.0ms |      37 | `runtime.mPark`                 | `runtime/proc.go:1965`         |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|    % |    Time | Samples | Caller                          | Location                     |
| ---: | ------: | ------: | ------------------------------- | ---------------------------- |
| 6.9% | 130.0ms |      13 | `runtime.gcBgMarkWorker`        | `runtime/mgc.go:1750`        |
| 0.5% |  10.0ms |       1 | `runtime.wbBufFlush`            | `runtime/mwbbuf.go:166`      |
| 0.5% |  10.0ms |       1 | `runtime.(*mheap).alloc`        | `runtime/mheap.go:1006`      |
| 0.5% |  10.0ms |       1 | `runtime.(*pageAlloc).scavenge` | `runtime/mgcscavenge.go:675` |

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|     % |    Time | Samples | Caller                | Location                   |
| ----: | ------: | ------: | --------------------- | -------------------------- |
| 98.8% | 850.0ms |      85 | `runtime.sysUsedOS`   | `runtime/mem_darwin.go:29` |
|  1.2% |  10.0ms |       1 | `runtime.sysUnusedOS` | `runtime/mem_darwin.go:23` |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

|     % |    Time | Samples | Caller                         | Location                |
| ----: | ------: | ------: | ------------------------------ | ----------------------- |
| 97.7% | 840.0ms |      84 | `runtime.(*mheap).alloc.func1` | `runtime/mheap.go:1011` |
|  2.3% |  20.0ms |       2 | `runtime.(*mheap).allocManual` | `runtime/mheap.go:1039` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

|      % |    Time | Samples | Caller            | Location            |
| -----: | ------: | ------: | ----------------- | ------------------- |
| 100.0% | 850.0ms |      85 | `runtime.sysUsed` | `runtime/mem.go:89` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

|      % |    Time | Samples | Caller                       | Location                |
| -----: | ------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 850.0ms |      85 | `runtime.(*mheap).allocSpan` | `runtime/mheap.go:1224` |

##### `runtime.(*mheap).alloc.func1` (`runtime/mheap.go:1011`)

|      % |    Time | Samples | Caller                | Location                  |
| -----: | ------: | ------: | --------------------- | ------------------------- |
| 100.0% | 840.0ms |      84 | `runtime.systemstack` | `runtime/asm_arm64.s:353` |

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`)

|      % |    Time | Samples | Caller      | Location                                                   |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------------- |
| 100.0% | 810.0ms |      81 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

|      % |    Time | Samples | Caller         | Location              |
| -----: | ------: | ------: | -------------- | --------------------- |
| 100.0% | 810.0ms |      81 | `runtime.main` | `runtime/proc.go:149` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Caller            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 590.0ms |      59 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`)

|      % |    Time | Samples | Caller                          | Location               |
| -----: | ------: | ------: | ------------------------------- | ---------------------- |
| 100.0% | 590.0ms |      59 | `runtime.startTheWorldWithSema` | `runtime/proc.go:1760` |

##### `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`)

|      % |    Time | Samples | Caller                  | Location             |
| -----: | ------: | ------: | ----------------------- | -------------------- |
| 100.0% | 590.0ms |      59 | `runtime.gcStart.func4` | `runtime/mgc.go:947` |

##### `runtime.gcStart.func4` (`runtime/mgc.go:947`)

|      % |    Time | Samples | Caller                | Location                  |
| -----: | ------: | ------: | --------------------- | ------------------------- |
| 100.0% | 590.0ms |      59 | `runtime.systemstack` | `runtime/asm_arm64.s:353` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

|      % |    Time | Samples | Caller                                                            | Location                                                                 |
| -----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 570.0ms |      57 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

|     % |    Time | Samples | Caller                | Location               |
| ----: | ------: | ------: | --------------------- | ---------------------- |
| 92.6% | 500.0ms |      50 | `runtime.park_m`      | `runtime/proc.go:4253` |
|  5.6% |  30.0ms |       3 | `runtime.goschedImpl` | `runtime/proc.go:4307` |
|  1.9% |  10.0ms |       1 | `runtime.preemptPark` | `runtime/proc.go:4368` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

|      % |    Time | Samples | Caller          | Location                  |
| -----: | ------: | ------: | --------------- | ------------------------- |
| 100.0% | 510.0ms |      51 | `runtime.mcall` | `runtime/asm_arm64.s:302` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

|      % |    Time | Samples | Caller             | Location               |
| -----: | ------: | ------: | ------------------ | ---------------------- |
| 100.0% | 490.0ms |      49 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `runtime.stopm` (`runtime/proc.go:2992`)

|     % |    Time | Samples | Caller                 | Location               |
| ----: | ------: | ------: | ---------------------- | ---------------------- |
| 97.6% | 410.0ms |      41 | `runtime.findRunnable` | `runtime/proc.go:3389` |
|  2.4% |  10.0ms |       1 | `runtime.gcstopm`      | `runtime/proc.go:3296` |

##### `runtime.gcDrain` (`runtime/mgcmark.go:1239`)

|     % |    Time | Samples | Caller                               | Location                  |
| ----: | ------: | ------: | ------------------------------------ | ------------------------- |
| 70.7% | 290.0ms |      29 | `runtime.gcDrainMarkWorkerDedicated` | `runtime/mgcmark.go:1173` |
| 29.3% | 120.0ms |      12 | `runtime.gcDrainMarkWorkerIdle`      | `runtime/mgcmark.go:1167` |

##### `runtime.semasleep` (`runtime/os_darwin.go:45`)

|     % |    Time | Samples | Caller                        | Location                      |
| ----: | ------: | ------: | ----------------------------- | ----------------------------- |
| 94.9% | 370.0ms |      37 | `runtime.notesleep`           | `runtime/lock_sema.go:46`     |
|  2.6% |  10.0ms |       1 | `runtime.notetsleep_internal` | `runtime/lock_sema.go:75`     |
|  2.6% |  10.0ms |       1 | `runtime.lock2`               | `runtime/lock_spinbit.go:155` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                  |
| -----: | ------: | ------: | ------------------- | ------------------------- |
| 100.0% | 380.0ms |      38 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.notesleep` (`runtime/lock_sema.go:46`)

|      % |    Time | Samples | Caller          | Location               |
| -----: | ------: | ------: | --------------- | ---------------------- |
| 100.0% | 370.0ms |      37 | `runtime.mPark` | `runtime/proc.go:1965` |

##### `runtime.mPark` (`runtime/proc.go:1965`)

|      % |    Time | Samples | Caller          | Location               |
| -----: | ------: | ------: | --------------- | ---------------------- |
| 100.0% | 370.0ms |      37 | `runtime.stopm` | `runtime/proc.go:2992` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|     % |    Time | Samples | Callee                                     | Location                     |
| ----: | ------: | ------: | ------------------------------------------ | ---------------------------- |
| 44.4% | 840.0ms |      84 | `runtime.(*mheap).alloc.func1`             | `runtime/mheap.go:1011`      |
| 31.2% | 590.0ms |      59 | `runtime.gcStart.func4`                    | `runtime/mgc.go:947`         |
| 21.7% | 410.0ms |      41 | `runtime.gcBgMarkWorker.func2`             | `runtime/mgc.go:1847`        |
|  1.1% |  20.0ms |       2 | `runtime.(*pageAlloc).scavenge.func1`      | `runtime/mgcscavenge.go:682` |
|  0.5% |  10.0ms |       1 | `runtime.gcMarkTermination.forEachP.func7` | `runtime/proc.go:2112`       |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

|     % |    Time | Samples | Callee                      | Location                |
| ----: | ------: | ------: | --------------------------- | ----------------------- |
| 98.8% | 850.0ms |      85 | `runtime.sysUsed`           | `runtime/mem.go:89`     |
|  1.2% |  10.0ms |       1 | `runtime.(*mheap).initSpan` | `runtime/mheap.go:1439` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

|      % |    Time | Samples | Callee            | Location                    |
| -----: | ------: | ------: | ----------------- | --------------------------- |
| 100.0% | 850.0ms |      85 | `runtime.madvise` | `runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

|      % |    Time | Samples | Callee              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 850.0ms |      85 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.(*mheap).alloc.func1` (`runtime/mheap.go:1011`)

|      % |    Time | Samples | Callee                       | Location                |
| -----: | ------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 840.0ms |      84 | `runtime.(*mheap).allocSpan` | `runtime/mheap.go:1224` |

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`)

|     % |    Time | Samples | Callee                    | Location                      |
| ----: | ------: | ------: | ------------------------- | ----------------------------- |
| 70.4% | 570.0ms |      57 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |
| 29.6% | 240.0ms |      24 | `encoding/json.Marshal`   | `encoding/json/encode.go:205` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

|      % |    Time | Samples | Callee                                                            | Location                                                                 |
| -----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 810.0ms |      81 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10` |

##### `runtime.main` (`runtime/proc.go:149`)

|      % |    Time | Samples | Callee      | Location                                                   |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------------- |
| 100.0% | 810.0ms |      81 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`)

|      % |    Time | Samples | Callee           | Location                    |
| -----: | ------: | ------: | ---------------- | --------------------------- |
| 100.0% | 590.0ms |      59 | `runtime.kevent` | `runtime/sys_darwin.go:438` |

##### `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`)

|      % |    Time | Samples | Callee            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 590.0ms |      59 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.gcStart.func4` (`runtime/mgc.go:947`)

|      % |    Time | Samples | Callee                          | Location               |
| -----: | ------: | ------: | ------------------------------- | ---------------------- |
| 100.0% | 590.0ms |      59 | `runtime.startTheWorldWithSema` | `runtime/proc.go:1760` |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                      |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------- |
| 64.9% | 370.0ms |      37 | `encoding/json.(*decodeState).unmarshal` | `encoding/json/decode.go:173` |
| 35.1% | 200.0ms |      20 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

|     % |    Time | Samples | Callee                  | Location               |
| ----: | ------: | ------: | ----------------------- | ---------------------- |
| 90.7% | 490.0ms |      49 | `runtime.findRunnable`  | `runtime/proc.go:3389` |
|  9.3% |  50.0ms |       5 | `runtime.resetspinning` | `runtime/proc.go:4021` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

|     % |    Time | Samples | Callee                         | Location               |
| ----: | ------: | ------: | ------------------------------ | ---------------------- |
| 98.0% | 500.0ms |      50 | `runtime.schedule`             | `runtime/proc.go:4135` |
|  2.0% |  10.0ms |       1 | `runtime.gcBgMarkWorker.func1` | `runtime/mgc.go:1791`  |

##### `runtime.mcall` (`runtime/asm_arm64.s:302`)

|      % |    Time | Samples | Callee           | Location               |
| -----: | ------: | ------: | ---------------- | ---------------------- |
| 100.0% | 510.0ms |      51 | `runtime.park_m` | `runtime/proc.go:4253` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

|     % |    Time | Samples | Callee                   | Location                      |
| ----: | ------: | ------: | ------------------------ | ----------------------------- |
| 83.7% | 410.0ms |      41 | `runtime.stopm`          | `runtime/proc.go:2992`        |
|  8.2% |  40.0ms |       4 | `runtime.runSafePointFn` | `runtime/proc.go:2232`        |
|  6.1% |  30.0ms |       3 | `runtime.lock`           | `runtime/lock_spinbit.go:151` |
|  2.0% |  10.0ms |       1 | `runtime.gcstopm`        | `runtime/proc.go:3296`        |

##### `runtime.stopm` (`runtime/proc.go:2992`)

|     % |    Time | Samples | Callee          | Location                      |
| ----: | ------: | ------: | --------------- | ----------------------------- |
| 88.1% | 370.0ms |      37 | `runtime.mPark` | `runtime/proc.go:1965`        |
| 11.9% |  50.0ms |       5 | `runtime.lock`  | `runtime/lock_spinbit.go:151` |

##### `runtime.gcDrain` (`runtime/mgcmark.go:1239`)

|     % |    Time | Samples | Callee                                      | Location                             |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------ |
| 63.4% | 260.0ms |      26 | `runtime.(*gcControllerState).enlistWorker` | `runtime/mgcpacer.go:697`            |
| 19.5% |  80.0ms |       8 | `runtime.scanObject`                        | `runtime/mgcmark_greenteagc.go:1187` |
|  4.9% |  20.0ms |       2 | `runtime.scanSpan`                          | `runtime/mgcmark_greenteagc.go:844`  |
|  4.9% |  20.0ms |       2 | `runtime.(*gcWork).balance`                 | `runtime/mgcwork.go:356`             |
|  2.4% |  10.0ms |       1 | `runtime.markroot`                          | `runtime/mgcmark.go:221`             |

##### `runtime.semasleep` (`runtime/os_darwin.go:45`)

|     % |    Time | Samples | Callee                                       | Location                    |
| ----: | ------: | ------: | -------------------------------------------- | --------------------------- |
| 97.4% | 380.0ms |      38 | `runtime.pthread_cond_wait`                  | `runtime/sys_darwin.go:487` |
|  2.6% |  10.0ms |       1 | `runtime.pthread_cond_timedwait_relative_np` | `runtime/sys_darwin.go:497` |

##### `runtime.notesleep` (`runtime/lock_sema.go:46`)

|      % |    Time | Samples | Callee              | Location                  |
| -----: | ------: | ------: | ------------------- | ------------------------- |
| 100.0% | 370.0ms |      37 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.mPark` (`runtime/proc.go:1965`)

|      % |    Time | Samples | Callee              | Location                  |
| -----: | ------: | ------: | ------------------- | ------------------------- |
| 100.0% | 370.0ms |      37 | `runtime.notesleep` | `runtime/lock_sema.go:46` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.1% | 830.0ms |      83 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 17.8% | 590.0ms |      59 | `runtime.kevent` (`runtime/sys_darwin.go:438`) ← `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`) ← `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`) ← `runtime.gcStart.func4` (`runtime/mgc.go:947`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 10.9% | 360.0ms |      36 | `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.notesleep` (`runtime/lock_sema.go:46`) ← `runtime.mPark` (`runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.8% | 160.0ms |      16 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.1% |  70.0ms |       7 | `encoding/json.checkValid` (`encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.1% |  70.0ms |       7 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.8% |  60.0ms |       6 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.8% |  60.0ms |       6 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |  50.0ms |       5 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |  50.0ms |       5 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.2% |  40.0ms |       4 | `encoding/json.stateInString` (`encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.2% |  40.0ms |       4 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.stopm` (`runtime/proc.go:2992`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.9% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% |  30.0ms |       3 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.findRunnable` (`runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.6% |  20.0ms |       2 | `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                       |
|  0.6% |  20.0ms |       2 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.stringEncoder` (610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |
|  0.6% |  20.0ms |       2 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`) ← `runtime.(*mheap).allocManual` (1039) ← `runtime.getempty.func1` (`runtime/mgcwork.go:449`) ← `runtime.getempty` (424) ← `runtime.handoff` (509) ← `runtime.(*gcWork).balance` (356) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% |  20.0ms |       2 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                    |
|  0.6% |  20.0ms |       2 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                     |
|  0.6% |  20.0ms |       2 | `encoding/json.stateEndValue` (`encoding/json/scanner.go:281`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:10`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

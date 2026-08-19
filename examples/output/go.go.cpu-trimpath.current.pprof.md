# CPU profile

Took 3.44s over 344 samples (10.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Standard library  | 99.7% |  3.43s |     343 |
| Garbage collector |  0.3% | 10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                      | Location                                       |
| ----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------- |
| 16.6% | 570.0ms |      57 | `runtime.madvise`                             | `runtime/sys_darwin.go:224`                    |
|  9.6% | 330.0ms |      33 | `runtime.kevent`                              | `runtime/sys_darwin.go:438`                    |
|  8.1% | 280.0ms |      28 | `runtime.pthread_cond_wait`                   | `runtime/sys_darwin.go:487`                    |
|  4.4% | 150.0ms |      15 | `runtime.pthread_kill`                        | `runtime/sys_darwin.go:148`                    |
|  4.1% | 140.0ms |      14 | `runtime.usleep`                              | `runtime/sys_darwin.go:273`                    |
|  4.1% | 140.0ms |      14 | `encoding/json.appendString[go.shape.string]` | `encoding/json/encode.go:999`                  |
|  3.8% | 130.0ms |      13 | `encoding/json.checkValid`                    | `encoding/json/scanner.go:33`                  |
|  3.5% | 120.0ms |      12 | `encoding/json.stateInString`                 | `encoding/json/scanner.go:339`                 |
|  3.2% | 110.0ms |      11 | `encoding/json.unquoteBytes`                  | `encoding/json/decode.go:1193`                 |
|  3.2% | 110.0ms |      11 | `runtime.pthread_cond_signal`                 | `runtime/sys_darwin.go:508`                    |
|  2.9% | 100.0ms |      10 | `encoding/json.stateBeginString`              | `encoding/json/scanner.go:268`                 |
|  2.6% |  90.0ms |       9 | `encoding/json.isSpace`                       | `encoding/json/scanner.go:201`                 |
|  2.0% |  70.0ms |       7 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`                  |
|  2.0% |  70.0ms |       7 | `runtime.tryDeferToSpanScan`                  | `runtime/mgcmark_greenteagc.go:264`            |
|  1.7% |  60.0ms |       6 | `cmpbody`                                     | `internal/bytealg/compare_arm64.s:35`          |
|  1.7% |  60.0ms |       6 | `runtime.mallocgcSmallScanNoHeader`           | `runtime/malloc.go:1503`                       |
|  1.7% |  60.0ms |       6 | `encoding/json.(*decodeState).rescanLiteral`  | `encoding/json/decode.go:322`                  |
|  1.2% |  40.0ms |       4 | `runtime.typedmemmove`                        | `runtime/mbarrier.go:150`                      |
|  1.2% |  40.0ms |       4 | `encoding/json.stateBeginValue`               | `encoding/json/scanner.go:217`                 |
|  0.9% |  30.0ms |       3 | `runtime.mapassign_faststr`                   | `internal/runtime/maps/runtime_faststr.go:263` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 570.0ms |      57 | `runtime/sys_darwin.go:225` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 330.0ms |      33 | `runtime/sys_darwin.go:439` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 280.0ms |      28 | `runtime/sys_darwin.go:488` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 150.0ms |      15 | `runtime/sys_darwin.go:149` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 140.0ms |      14 | `runtime/sys_darwin.go:274` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 35.7% | 50.0ms |       5 | `encoding/json/encode.go:1063` |
| 21.4% | 30.0ms |       3 | `encoding/json/encode.go:1005` |
| 21.4% | 30.0ms |       3 | `encoding/json/encode.go:1003` |
| 14.3% | 20.0ms |       2 | `encoding/json/encode.go:1002` |
|  7.1% | 10.0ms |       1 | `encoding/json/encode.go:1039` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 61.5% | 80.0ms |       8 | `encoding/json/scanner.go:36` |
| 30.8% | 40.0ms |       4 | `encoding/json/scanner.go:37` |
|  7.7% | 10.0ms |       1 | `encoding/json/scanner.go:35` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 50.0% | 60.0ms |       6 | `encoding/json/scanner.go:339` |
| 25.0% | 30.0ms |       3 | `encoding/json/scanner.go:351` |
| 16.7% | 20.0ms |       2 | `encoding/json/scanner.go:341` |
|  8.3% | 10.0ms |       1 | `encoding/json/scanner.go:348` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 27.3% | 30.0ms |       3 | `encoding/json/decode.go:1205` |
| 18.2% | 20.0ms |       2 | `encoding/json/decode.go:1204` |
| 18.2% | 20.0ms |       2 | `encoding/json/decode.go:1209` |
| 18.2% | 20.0ms |       2 | `encoding/json/decode.go:1203` |
|  9.1% | 10.0ms |       1 | `encoding/json/decode.go:1194` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 110.0ms |      11 | `runtime/sys_darwin.go:509` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 50.0% | 50.0ms |       5 | `encoding/json/scanner.go:268` |
| 20.0% | 20.0ms |       2 | `encoding/json/scanner.go:272` |
| 20.0% | 20.0ms |       2 | `encoding/json/scanner.go:270` |
| 10.0% | 10.0ms |       1 | `encoding/json/scanner.go:273` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

|      % |   Time | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 90.0ms |       9 | `encoding/json/scanner.go:202` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 71.4% | 50.0ms |       5 | `encoding/json/decode.go:301` |
| 14.3% | 10.0ms |       1 | `encoding/json/decode.go:300` |
| 14.3% | 10.0ms |       1 | `encoding/json/decode.go:303` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 42.9% | 30.0ms |       3 | `runtime/mgcmark_greenteagc.go:290` |
| 14.3% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:283` |
| 14.3% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:287` |
| 14.3% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:288` |
| 14.3% | 10.0ms |       1 | `runtime/mgcmark_greenteagc.go:272` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|     % |   Time | Samples | Location                               |
| ----: | -----: | ------: | -------------------------------------- |
| 33.3% | 20.0ms |       2 | `internal/bytealg/compare_arm64.s:80`  |
| 16.7% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:102` |
| 16.7% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:92`  |
| 16.7% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:72`  |
| 16.7% | 10.0ms |       1 | `internal/bytealg/compare_arm64.s:44`  |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

|     % |   Time | Samples | Location                 |
| ----: | -----: | ------: | ------------------------ |
| 66.7% | 40.0ms |       4 | `runtime/malloc.go:1550` |
| 16.7% | 10.0ms |       1 | `runtime/malloc.go:1524` |
| 16.7% | 10.0ms |       1 | `runtime/malloc.go:1531` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 33.3% | 20.0ms |       2 | `encoding/json/decode.go:328` |
| 16.7% | 10.0ms |       1 | `encoding/json/decode.go:332` |
| 16.7% | 10.0ms |       1 | `encoding/json/decode.go:322` |
| 16.7% | 10.0ms |       1 | `encoding/json/decode.go:329` |
| 16.7% | 10.0ms |       1 | `encoding/json/decode.go:353` |

##### `runtime.typedmemmove` (`runtime/mbarrier.go:150`)

|     % |   Time | Samples | Location                  |
| ----: | -----: | ------: | ------------------------- |
| 50.0% | 20.0ms |       2 | `runtime/mbarrier.go:150` |
| 25.0% | 10.0ms |       1 | `runtime/mbarrier.go:171` |
| 25.0% | 10.0ms |       1 | `runtime/mbarrier.go:154` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 50.0% | 20.0ms |       2 | `encoding/json/scanner.go:217` |
| 25.0% | 10.0ms |       1 | `encoding/json/scanner.go:238` |
| 25.0% | 10.0ms |       1 | `encoding/json/scanner.go:219` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

|     % |   Time | Samples | Location                                       |
| ----: | -----: | ------: | ---------------------------------------------- |
| 33.3% | 10.0ms |       1 | `internal/runtime/maps/runtime_faststr.go:289` |
| 33.3% | 10.0ms |       1 | `internal/runtime/maps/runtime_faststr.go:300` |
| 33.3% | 10.0ms |       1 | `internal/runtime/maps/runtime_faststr.go:324` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Caller              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 570.0ms |      57 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Caller            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 330.0ms |      33 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                  |
| -----: | ------: | ------: | ------------------- | ------------------------- |
| 100.0% | 280.0ms |      28 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |    Time | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 150.0ms |      15 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|     % |    Time | Samples | Caller             | Location                   |
| ----: | ------: | ------: | ------------------ | -------------------------- |
| 85.7% | 120.0ms |      12 | `runtime.osyield`  | `runtime/os_darwin.go:379` |
| 14.3% |  20.0ms |       2 | `runtime.runqgrab` | `runtime/proc.go:7662`     |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|     % |   Time | Samples | Caller                            | Location                      |
| ----: | -----: | ------: | --------------------------------- | ----------------------------- |
| 50.0% | 70.0ms |       7 | `encoding/json.mapEncoder.encode` | `encoding/json/encode.go:765` |
| 50.0% | 70.0ms |       7 | `encoding/json.stringEncoder`     | `encoding/json/encode.go:610` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|      % |    Time | Samples | Caller                    | Location                      |
| -----: | ------: | ------: | ------------------------- | ----------------------------- |
| 100.0% | 130.0ms |      13 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|      % |    Time | Samples | Caller                     | Location                      |
| -----: | ------: | ------: | -------------------------- | ----------------------------- |
| 100.0% | 120.0ms |      12 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|      % |    Time | Samples | Caller                  | Location                       |
| -----: | ------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 110.0ms |      11 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Caller               | Location                  |
| -----: | ------: | ------: | -------------------- | ------------------------- |
| 100.0% | 110.0ms |      11 | `runtime.semawakeup` | `runtime/os_darwin.go:83` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Caller                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 70.0% | 70.0ms |       7 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |
| 30.0% | 30.0ms |       3 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

|     % |   Time | Samples | Caller                                 | Location                       |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------ |
| 44.4% | 40.0ms |       4 | `encoding/json.stateBeginString`       | `encoding/json/scanner.go:268` |
| 33.3% | 30.0ms |       3 | `encoding/json.stateEndValue`          | `encoding/json/scanner.go:281` |
| 22.2% | 20.0ms |       2 | `encoding/json.stateBeginValueOrEmpty` | `encoding/json/scanner.go:206` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|      % |   Time | Samples | Caller                                         | Location                       |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 70.0ms |       7 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`)

|     % |   Time | Samples | Caller                     | Location                             |
| ----: | -----: | ------: | -------------------------- | ------------------------------------ |
| 85.7% | 60.0ms |       6 | `runtime.scanObject`       | `runtime/mgcmark_greenteagc.go:1187` |
| 14.3% | 10.0ms |       1 | `runtime.scanObjectsSmall` | `runtime/mgcmark_greenteagc.go:1015` |

##### `cmpbody` (`internal/bytealg/compare_arm64.s:35`)

|      % |   Time | Samples | Caller                           | Location                                |
| -----: | -----: | ------: | -------------------------------- | --------------------------------------- |
| 100.0% | 60.0ms |       6 | `internal/bytealg.CompareString` | `internal/bytealg/compare_native.go:14` |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

|      % |   Time | Samples | Caller             | Location                 |
| -----: | -----: | ------: | ------------------ | ------------------------ |
| 100.0% | 60.0ms |       6 | `runtime.mallocgc` | `runtime/malloc.go:1067` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Caller                                          | Location                       |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------ |
| 66.7% | 40.0ms |       4 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |
| 33.3% | 20.0ms |       2 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |

##### `runtime.typedmemmove` (`runtime/mbarrier.go:150`)

|     % |   Time | Samples | Caller                               | Location                  |
| ----: | -----: | ------: | ------------------------------------ | ------------------------- |
| 50.0% | 20.0ms |       2 | `reflect.typedmemmove`               | `runtime/mbarrier.go:213` |
| 50.0% | 20.0ms |       2 | `internal/runtime/maps.typedmemmove` | `runtime/mbarrier.go:235` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|     % |   Time | Samples | Caller                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 75.0% | 30.0ms |       3 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |
| 25.0% | 10.0ms |       1 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `runtime.mapassign_faststr` (`internal/runtime/maps/runtime_faststr.go:263`)

|      % |   Time | Samples | Caller                                         | Location                       |
| -----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 30.0ms |       3 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                                          | Location                                                                 |
| ----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 49.7% |   1.71s |     171 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |
| 49.7% |   1.71s |     171 | `main.main`                                                       | `github.com/tomeraberbach/profiler-md-workload/main.go:12`               |
| 49.7% |   1.71s |     171 | `runtime.main`                                                    | `runtime/proc.go:149`                                                    |
| 36.6% |   1.26s |     126 | `runtime.systemstack`                                             | `runtime/asm_arm64.s:353`                                                |
| 32.8% |   1.13s |     113 | `encoding/json.Unmarshal`                                         | `encoding/json/decode.go:102`                                            |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).objectInterface`                    | `encoding/json/decode.go:1078`                                           |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).valueInterface`                     | `encoding/json/decode.go:1035`                                           |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).arrayInterface`                     | `encoding/json/decode.go:1052`                                           |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).object`                             | `encoding/json/decode.go:604`                                            |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).value`                              | `encoding/json/decode.go:363`                                            |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).unmarshal`                          | `encoding/json/decode.go:173`                                            |
| 16.9% | 580.0ms |      58 | `runtime.(*mheap).allocSpan`                                      | `runtime/mheap.go:1224`                                                  |
| 16.9% | 580.0ms |      58 | `encoding/json.mapEncoder.encode`                                 | `encoding/json/encode.go:765`                                            |
| 16.9% | 580.0ms |      58 | `encoding/json.(*encodeState).reflectValue`                       | `encoding/json/encode.go:366`                                            |
| 16.9% | 580.0ms |      58 | `encoding/json.interfaceEncoder`                                  | `encoding/json/encode.go:695`                                            |
| 16.9% | 580.0ms |      58 | `encoding/json.arrayEncoder.encode`                               | `encoding/json/encode.go:883`                                            |
| 16.9% | 580.0ms |      58 | `encoding/json.sliceEncoder.encode`                               | `encoding/json/encode.go:843`                                            |
| 16.9% | 580.0ms |      58 | `encoding/json.(*encodeState).marshal`                            | `encoding/json/encode.go:333`                                            |
| 16.9% | 580.0ms |      58 | `encoding/json.Marshal`                                           | `encoding/json/encode.go:205`                                            |
| 16.6% | 570.0ms |      57 | `runtime.madvise`                                                 | `runtime/sys_darwin.go:224`                                              |

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                       | Location                       |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 49.7% |   1.71s |     171 | `runtime.main`                                 | `runtime/proc.go:149`          |
| 36.6% |   1.26s |     126 | `runtime.systemstack`                          | `runtime/asm_arm64.s:353`      |
| 32.8% |   1.13s |     113 | `encoding/json.Unmarshal`                      | `encoding/json/decode.go:102`  |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).valueInterface`  | `encoding/json/decode.go:1035` |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).object`          | `encoding/json/decode.go:604`  |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).value`           | `encoding/json/decode.go:363`  |
| 19.5% | 670.0ms |      67 | `encoding/json.(*decodeState).unmarshal`       | `encoding/json/decode.go:173`  |
| 16.9% | 580.0ms |      58 | `runtime.(*mheap).allocSpan`                   | `runtime/mheap.go:1224`        |
| 16.9% | 580.0ms |      58 | `encoding/json.mapEncoder.encode`              | `encoding/json/encode.go:765`  |
| 16.9% | 580.0ms |      58 | `encoding/json.(*encodeState).reflectValue`    | `encoding/json/encode.go:366`  |
| 16.9% | 580.0ms |      58 | `encoding/json.interfaceEncoder`               | `encoding/json/encode.go:695`  |
| 16.9% | 580.0ms |      58 | `encoding/json.arrayEncoder.encode`            | `encoding/json/encode.go:883`  |
| 16.9% | 580.0ms |      58 | `encoding/json.sliceEncoder.encode`            | `encoding/json/encode.go:843`  |
| 16.9% | 580.0ms |      58 | `encoding/json.(*encodeState).marshal`         | `encoding/json/encode.go:333`  |
| 16.9% | 580.0ms |      58 | `encoding/json.Marshal`                        | `encoding/json/encode.go:205`  |
| 16.6% | 570.0ms |      57 | `runtime.madvise`                              | `runtime/sys_darwin.go:224`    |
| 16.6% | 570.0ms |      57 | `runtime.sysUsedOS`                            | `runtime/mem_darwin.go:29`     |
| 16.6% | 570.0ms |      57 | `runtime.sysUsed`                              | `runtime/mem.go:89`            |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`)

|     % |    Time | Samples | Callee                    | Location                      |
| ----: | ------: | ------: | ------------------------- | ----------------------------- |
| 66.1% |   1.13s |     113 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |
| 33.9% | 580.0ms |      58 | `encoding/json.Marshal`   | `encoding/json/encode.go:205` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

|      % |  Time | Samples | Callee                                                            | Location                                                                 |
| -----: | ----: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 1.71s |     171 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |

##### `runtime.main` (`runtime/proc.go:149`)

|      % |  Time | Samples | Callee      | Location                                                   |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------------- |
| 100.0% | 1.71s |     171 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|     % |    Time | Samples | Callee                                     | Location                |
| ----: | ------: | ------: | ------------------------------------------ | ----------------------- |
| 45.2% | 570.0ms |      57 | `runtime.(*mheap).alloc.func1`             | `runtime/mheap.go:1011` |
| 26.2% | 330.0ms |      33 | `runtime.gcStart.func4`                    | `runtime/mgc.go:947`    |
| 19.0% | 240.0ms |      24 | `runtime.gcBgMarkWorker.func2`             | `runtime/mgc.go:1847`   |
|  4.0% |  50.0ms |       5 | `runtime.gcMarkDone.forEachP.func5`        | `runtime/proc.go:2112`  |
|  2.4% |  30.0ms |       3 | `runtime.gcMarkTermination.forEachP.func7` | `runtime/proc.go:2112`  |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                      |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------- |
| 59.3% | 670.0ms |      67 | `encoding/json.(*decodeState).unmarshal` | `encoding/json/decode.go:173` |
| 40.7% | 460.0ms |      46 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

|      % |    Time | Samples | Callee                                        | Location                                       |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------- |
| 100.0% | 670.0ms |      67 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035`                 |
|  28.4% | 190.0ms |      19 | `runtime.mapassign_faststr`                   | `internal/runtime/maps/runtime_faststr.go:263` |
|  23.9% | 160.0ms |      16 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`                  |
|  13.4% |  90.0ms |       9 | `encoding/json.unquote`                       | `encoding/json/decode.go:1187`                 |
|   7.5% |  50.0ms |       5 | `encoding/json.(*decodeState).rescanLiteral`  | `encoding/json/decode.go:322`                  |

##### `encoding/json.(*decodeState).valueInterface` (`encoding/json/decode.go:1035`)

|      % |    Time | Samples | Callee                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 670.0ms |      67 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |
| 100.0% | 670.0ms |      67 | `encoding/json.(*decodeState).arrayInterface`   | `encoding/json/decode.go:1052` |
|  20.9% | 140.0ms |      14 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

|      % |    Time | Samples | Callee                                        | Location                       |
| -----: | ------: | ------: | --------------------------------------------- | ------------------------------ |
| 100.0% | 670.0ms |      67 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |
|   3.0% |  20.0ms |       2 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`  |

##### `encoding/json.(*decodeState).object` (`encoding/json/decode.go:604`)

|      % |    Time | Samples | Callee                                         | Location                       |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 670.0ms |      67 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`encoding/json/decode.go:363`)

|      % |    Time | Samples | Callee                                | Location                      |
| -----: | ------: | ------: | ------------------------------------- | ----------------------------- |
| 100.0% | 670.0ms |      67 | `encoding/json.(*decodeState).object` | `encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`encoding/json/decode.go:173`)

|      % |    Time | Samples | Callee                               | Location                      |
| -----: | ------: | ------: | ------------------------------------ | ----------------------------- |
| 100.0% | 670.0ms |      67 | `encoding/json.(*decodeState).value` | `encoding/json/decode.go:363` |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

|     % |    Time | Samples | Callee                      | Location                |
| ----: | ------: | ------: | --------------------------- | ----------------------- |
| 98.3% | 570.0ms |      57 | `runtime.sysUsed`           | `runtime/mem.go:89`     |
|  1.7% |  10.0ms |       1 | `runtime.(*mheap).initSpan` | `runtime/mheap.go:1439` |

##### `encoding/json.mapEncoder.encode` (`encoding/json/encode.go:765`)

|      % |    Time | Samples | Callee                                                                                                                                   | Location                      |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 100.0% | 580.0ms |      58 | `encoding/json.interfaceEncoder`                                                                                                         | `encoding/json/encode.go:695` |
|  17.2% | 100.0ms |      10 | `slices.SortFunc[go.shape.[]encoding/json.reflectWithString,go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/sort.go:30`           |
|  15.5% |  90.0ms |       9 | `reflect.(*MapIter).Key`                                                                                                                 | `reflect/map.go:245`          |
|  12.1% |  70.0ms |       7 | `encoding/json.appendString[go.shape.string]`                                                                                            | `encoding/json/encode.go:999` |
|  12.1% |  70.0ms |       7 | `reflect.(*MapIter).Value`                                                                                                               | `reflect/map.go:289`          |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

|      % |    Time | Samples | Callee                              | Location                      |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------- |
| 100.0% | 580.0ms |      58 | `encoding/json.mapEncoder.encode`   | `encoding/json/encode.go:765` |
| 100.0% | 580.0ms |      58 | `encoding/json.sliceEncoder.encode` | `encoding/json/encode.go:843` |
|  15.5% |  90.0ms |       9 | `encoding/json.stringEncoder`       | `encoding/json/encode.go:610` |
|   8.6% |  50.0ms |       5 | `encoding/json.valueEncoder`        | `encoding/json/encode.go:381` |
|   1.7% |  10.0ms |       1 | `encoding/json.floatEncoder.encode` | `encoding/json/encode.go:571` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

|      % |    Time | Samples | Callee                                      | Location                      |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------- |
| 100.0% | 580.0ms |      58 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |
|   1.7% |  10.0ms |       1 | `reflect.Value.IsNil`                       | `reflect/value.go:1632`       |

##### `encoding/json.arrayEncoder.encode` (`encoding/json/encode.go:883`)

|      % |    Time | Samples | Callee                           | Location                      |
| -----: | ------: | ------: | -------------------------------- | ----------------------------- |
| 100.0% | 580.0ms |      58 | `encoding/json.interfaceEncoder` | `encoding/json/encode.go:695` |

##### `encoding/json.sliceEncoder.encode` (`encoding/json/encode.go:843`)

|      % |    Time | Samples | Callee                              | Location                      |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------- |
| 100.0% | 580.0ms |      58 | `encoding/json.arrayEncoder.encode` | `encoding/json/encode.go:883` |

##### `encoding/json.(*encodeState).marshal` (`encoding/json/encode.go:333`)

|      % |    Time | Samples | Callee                                      | Location                      |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------- |
| 100.0% | 580.0ms |      58 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

##### `encoding/json.Marshal` (`encoding/json/encode.go:205`)

|      % |    Time | Samples | Callee                                 | Location                      |
| -----: | ------: | ------: | -------------------------------------- | ----------------------------- |
| 100.0% | 580.0ms |      58 | `encoding/json.(*encodeState).marshal` | `encoding/json/encode.go:333` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

|      % |    Time | Samples | Callee            | Location                    |
| -----: | ------: | ------: | ----------------- | --------------------------- |
| 100.0% | 570.0ms |      57 | `runtime.madvise` | `runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

|      % |    Time | Samples | Callee              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 570.0ms |      57 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.3% | 560.0ms |      56 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  9.6% | 330.0ms |      33 | `runtime.kevent` (`runtime/sys_darwin.go:438`) ← `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`) ← `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`) ← `runtime.gcStart.func4` (`runtime/mgc.go:947`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  7.8% | 270.0ms |      27 | `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.notesleep` (`runtime/lock_sema.go:46`) ← `runtime.mPark` (`runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.8% | 130.0ms |      13 | `encoding/json.checkValid` (`encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.5% | 120.0ms |      12 | `encoding/json.stateInString` (`encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.0% |  70.0ms |       7 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.7% |  60.0ms |       6 | `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                     |
|  1.7% |  60.0ms |       6 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |  50.0ms |       5 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.preemptall` (6843) ← `runtime.forEachPInternal` (2140) ← `runtime.gcMarkDone.forEachP.func5` (2112) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.5% |  50.0ms |       5 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.5% |  50.0ms |       5 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.stringEncoder` (610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)     |
|  1.2% |  40.0ms |       4 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  40.0ms |       4 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObject` (1187) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |  30.0ms |       3 | `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                            |
|  0.9% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.9% |  30.0ms |       3 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                        |
|  0.9% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% |  20.0ms |       2 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |
|  0.6% |  20.0ms |       2 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.runqgrab` (`runtime/proc.go:7662`) ← `runtime.runqsteal` (7730) ← `runtime.stealWork` (3828) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.6% |  20.0ms |       2 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.findRunnable` (`runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

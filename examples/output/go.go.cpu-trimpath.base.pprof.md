# CPU profile

Took 3.46s over 346 samples (10.0ms per sample).

| Category         |      % |  Time | Samples |
| ---------------- | -----: | ----: | ------: |
| Standard library | 100.0% | 3.46s |     346 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                                                                                  | Location                       |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 18.8% | 650.0ms |      65 | `runtime.madvise`                                                                                         | `runtime/sys_darwin.go:224`    |
| 11.3% | 390.0ms |      39 | `runtime.pthread_cond_wait`                                                                               | `runtime/sys_darwin.go:487`    |
| 10.7% | 370.0ms |      37 | `runtime.kevent`                                                                                          | `runtime/sys_darwin.go:438`    |
|  5.5% | 190.0ms |      19 | `encoding/json.checkValid`                                                                                | `encoding/json/scanner.go:33`  |
|  5.2% | 180.0ms |      18 | `runtime.usleep`                                                                                          | `runtime/sys_darwin.go:273`    |
|  4.9% | 170.0ms |      17 | `encoding/json.stateInString`                                                                             | `encoding/json/scanner.go:339` |
|  3.5% | 120.0ms |      12 | `runtime.pthread_cond_signal`                                                                             | `runtime/sys_darwin.go:508`    |
|  2.6% |  90.0ms |       9 | `encoding/json.appendString[go.shape.string]`                                                             | `encoding/json/encode.go:999`  |
|  2.3% |  80.0ms |       8 | `runtime.pthread_kill`                                                                                    | `runtime/sys_darwin.go:148`    |
|  1.7% |  60.0ms |       6 | `encoding/json.unquoteBytes`                                                                              | `encoding/json/decode.go:1193` |
|  1.7% |  60.0ms |       6 | `encoding/json.stateBeginString`                                                                          | `encoding/json/scanner.go:268` |
|  1.4% |  50.0ms |       5 | `encoding/json.isSpace`                                                                                   | `encoding/json/scanner.go:201` |
|  1.4% |  50.0ms |       5 | `encoding/json.(*decodeState).rescanLiteral`                                                              | `encoding/json/decode.go:322`  |
|  1.4% |  50.0ms |       5 | `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:10`    |
|  1.4% |  50.0ms |       5 | `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]`     | `slices/zsortanyfunc.go:135`   |
|  1.2% |  40.0ms |       4 | `encoding/json.stateBeginValue`                                                                           | `encoding/json/scanner.go:217` |
|  1.2% |  40.0ms |       4 | `runtime.mallocgc`                                                                                        | `runtime/malloc.go:1067`       |
|  1.2% |  40.0ms |       4 | `runtime.mallocgcSmallScanNoHeader`                                                                       | `runtime/malloc.go:1503`       |
|  1.2% |  40.0ms |       4 | `unicode/utf8.decodeRuneSlow`                                                                             | `unicode/utf8/utf8.go:171`     |
|  0.9% |  30.0ms |       3 | `encoding/json.(*decodeState).scanWhile`                                                                  | `encoding/json/decode.go:298`  |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 650.0ms |      65 | `runtime/sys_darwin.go:225` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 390.0ms |      39 | `runtime/sys_darwin.go:488` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 370.0ms |      37 | `runtime/sys_darwin.go:439` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 47.4% | 90.0ms |       9 | `encoding/json/scanner.go:37` |
| 42.1% | 80.0ms |       8 | `encoding/json/scanner.go:36` |
| 10.5% | 20.0ms |       2 | `encoding/json/scanner.go:35` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 180.0ms |      18 | `runtime/sys_darwin.go:274` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 41.2% | 70.0ms |       7 | `encoding/json/scanner.go:351` |
| 23.5% | 40.0ms |       4 | `encoding/json/scanner.go:339` |
| 11.8% | 20.0ms |       2 | `encoding/json/scanner.go:348` |
| 11.8% | 20.0ms |       2 | `encoding/json/scanner.go:340` |
|  5.9% | 10.0ms |       1 | `encoding/json/scanner.go:344` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Location                    |
| -----: | ------: | ------: | --------------------------- |
| 100.0% | 120.0ms |      12 | `runtime/sys_darwin.go:509` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 44.4% | 40.0ms |       4 | `encoding/json/encode.go:1004` |
| 33.3% | 30.0ms |       3 | `encoding/json/encode.go:1003` |
| 11.1% | 10.0ms |       1 | `encoding/json/encode.go:1000` |
| 11.1% | 10.0ms |       1 | `encoding/json/encode.go:1063` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |   Time | Samples | Location                    |
| -----: | -----: | ------: | --------------------------- |
| 100.0% | 80.0ms |       8 | `runtime/sys_darwin.go:149` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 33.3% | 20.0ms |       2 | `encoding/json/decode.go:1203` |
| 33.3% | 20.0ms |       2 | `encoding/json/decode.go:1205` |
| 16.7% | 10.0ms |       1 | `encoding/json/decode.go:1204` |
| 16.7% | 10.0ms |       1 | `encoding/json/decode.go:1197` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 50.0% | 30.0ms |       3 | `encoding/json/scanner.go:268` |
| 33.3% | 20.0ms |       2 | `encoding/json/scanner.go:272` |
| 16.7% | 10.0ms |       1 | `encoding/json/scanner.go:270` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

|      % |   Time | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 50.0ms |       5 | `encoding/json/scanner.go:202` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 40.0% | 20.0ms |       2 | `encoding/json/decode.go:329` |
| 20.0% | 10.0ms |       1 | `encoding/json/decode.go:327` |
| 20.0% | 10.0ms |       1 | `encoding/json/decode.go:332` |
| 20.0% | 10.0ms |       1 | `encoding/json/decode.go:328` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

|     % |   Time | Samples | Location                    |
| ----: | -----: | ------: | --------------------------- |
| 60.0% | 30.0ms |       3 | `slices/zsortanyfunc.go:12` |
| 40.0% | 20.0ms |       2 | `slices/zsortanyfunc.go:13` |

##### `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:135`)

|     % |   Time | Samples | Location                     |
| ----: | -----: | ------: | ---------------------------- |
| 40.0% | 20.0ms |       2 | `slices/zsortanyfunc.go:139` |
| 20.0% | 10.0ms |       1 | `slices/zsortanyfunc.go:158` |
| 20.0% | 10.0ms |       1 | `slices/zsortanyfunc.go:149` |
| 20.0% | 10.0ms |       1 | `slices/zsortanyfunc.go:160` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 75.0% | 30.0ms |       3 | `encoding/json/scanner.go:221` |
| 25.0% | 10.0ms |       1 | `encoding/json/scanner.go:219` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|     % |   Time | Samples | Location                 |
| ----: | -----: | ------: | ------------------------ |
| 75.0% | 30.0ms |       3 | `runtime/malloc.go:1189` |
| 25.0% | 10.0ms |       1 | `runtime/malloc.go:1146` |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

|     % |   Time | Samples | Location                 |
| ----: | -----: | ------: | ------------------------ |
| 25.0% | 10.0ms |       1 | `runtime/malloc.go:1526` |
| 25.0% | 10.0ms |       1 | `runtime/malloc.go:1531` |
| 25.0% | 10.0ms |       1 | `runtime/malloc.go:1550` |
| 25.0% | 10.0ms |       1 | `runtime/malloc.go:1524` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

|     % |   Time | Samples | Location                   |
| ----: | -----: | ------: | -------------------------- |
| 75.0% | 30.0ms |       3 | `unicode/utf8/utf8.go:185` |
| 25.0% | 10.0ms |       1 | `unicode/utf8/utf8.go:171` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|     % |   Time | Samples | Location                      |
| ----: | -----: | ------: | ----------------------------- |
| 66.7% | 20.0ms |       2 | `encoding/json/decode.go:301` |
| 33.3% | 10.0ms |       1 | `encoding/json/decode.go:299` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.madvise` (`runtime/sys_darwin.go:224`)

|      % |    Time | Samples | Caller              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 650.0ms |      65 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`)

|      % |    Time | Samples | Caller              | Location                  |
| -----: | ------: | ------: | ------------------- | ------------------------- |
| 100.0% | 390.0ms |      39 | `runtime.semasleep` | `runtime/os_darwin.go:45` |

##### `runtime.kevent` (`runtime/sys_darwin.go:438`)

|      % |    Time | Samples | Caller            | Location                       |
| -----: | ------: | ------: | ----------------- | ------------------------------ |
| 100.0% | 370.0ms |      37 | `runtime.netpoll` | `runtime/netpoll_kqueue.go:90` |

##### `encoding/json.checkValid` (`encoding/json/scanner.go:33`)

|      % |    Time | Samples | Caller                    | Location                      |
| -----: | ------: | ------: | ------------------------- | ----------------------------- |
| 100.0% | 190.0ms |      19 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |

##### `runtime.usleep` (`runtime/sys_darwin.go:273`)

|      % |    Time | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 180.0ms |      18 | `runtime.osyield` | `runtime/os_darwin.go:379` |

##### `encoding/json.stateInString` (`encoding/json/scanner.go:339`)

|      % |    Time | Samples | Caller                     | Location                      |
| -----: | ------: | ------: | -------------------------- | ----------------------------- |
| 100.0% | 170.0ms |      17 | `encoding/json.checkValid` | `encoding/json/scanner.go:33` |

##### `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`)

|      % |    Time | Samples | Caller               | Location                  |
| -----: | ------: | ------: | -------------------- | ------------------------- |
| 100.0% | 120.0ms |      12 | `runtime.semawakeup` | `runtime/os_darwin.go:83` |

##### `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`)

|     % |   Time | Samples | Caller                            | Location                      |
| ----: | -----: | ------: | --------------------------------- | ----------------------------- |
| 66.7% | 60.0ms |       6 | `encoding/json.stringEncoder`     | `encoding/json/encode.go:610` |
| 33.3% | 30.0ms |       3 | `encoding/json.mapEncoder.encode` | `encoding/json/encode.go:765` |

##### `runtime.pthread_kill` (`runtime/sys_darwin.go:148`)

|      % |   Time | Samples | Caller            | Location                   |
| -----: | -----: | ------: | ----------------- | -------------------------- |
| 100.0% | 80.0ms |       8 | `runtime.signalM` | `runtime/os_darwin.go:489` |

##### `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`)

|      % |   Time | Samples | Caller                  | Location                       |
| -----: | -----: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 60.0ms |       6 | `encoding/json.unquote` | `encoding/json/decode.go:1187` |

##### `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`)

|     % |   Time | Samples | Caller                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 66.7% | 40.0ms |       4 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |
| 33.3% | 20.0ms |       2 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `encoding/json.isSpace` (`encoding/json/scanner.go:201`)

|     % |   Time | Samples | Caller                                  | Location                       |
| ----: | -----: | ------: | --------------------------------------- | ------------------------------ |
| 40.0% | 20.0ms |       2 | `encoding/json.stateBeginStringOrEmpty` | `encoding/json/scanner.go:255` |
| 20.0% | 10.0ms |       1 | `encoding/json.stateBeginValue`         | `encoding/json/scanner.go:217` |
| 20.0% | 10.0ms |       1 | `encoding/json.stateEndValue`           | `encoding/json/scanner.go:281` |
| 20.0% | 10.0ms |       1 | `encoding/json.stateBeginString`        | `encoding/json/scanner.go:268` |

##### `encoding/json.(*decodeState).rescanLiteral` (`encoding/json/decode.go:322`)

|     % |   Time | Samples | Caller                                          | Location                       |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------ |
| 80.0% | 40.0ms |       4 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |
| 20.0% | 10.0ms |       1 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |

##### `slices.insertionSortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:10`)

|      % |   Time | Samples | Caller                                                                                              | Location                    |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
| 100.0% | 50.0ms |       5 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` (`slices/zsortanyfunc.go:135`)

|      % |   Time | Samples | Caller                                                                                              | Location                    |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------- |
| 100.0% | 50.0ms |       5 | `slices.pdqsortCmpFunc[go.shape.struct { encoding/json.v reflect.Value; encoding/json.ks string }]` | `slices/zsortanyfunc.go:61` |

##### `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`)

|     % |   Time | Samples | Caller                                   | Location                      |
| ----: | -----: | ------: | ---------------------------------------- | ----------------------------- |
| 75.0% | 30.0ms |       3 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |
| 25.0% | 10.0ms |       1 | `encoding/json.(*decodeState).scanWhile` | `encoding/json/decode.go:298` |

##### `runtime.mallocgc` (`runtime/malloc.go:1067`)

|     % |   Time | Samples | Caller                      | Location                 |
| ----: | -----: | ------: | --------------------------- | ------------------------ |
| 50.0% | 20.0ms |       2 | `runtime.slicebytetostring` | `runtime/string.go:139`  |
| 50.0% | 20.0ms |       2 | `reflect.unsafe_New`        | `runtime/malloc.go:2177` |

##### `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`)

|      % |   Time | Samples | Caller             | Location                 |
| -----: | -----: | ------: | ------------------ | ------------------------ |
| 100.0% | 40.0ms |       4 | `runtime.mallocgc` | `runtime/malloc.go:1067` |

##### `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`)

|      % |   Time | Samples | Caller                    | Location                   |
| -----: | -----: | ------: | ------------------------- | -------------------------- |
| 100.0% | 40.0ms |       4 | `unicode/utf8.DecodeRune` | `unicode/utf8/utf8.go:157` |

##### `encoding/json.(*decodeState).scanWhile` (`encoding/json/decode.go:298`)

|     % |   Time | Samples | Caller                                         | Location                       |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 66.7% | 20.0ms |       2 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |
| 33.3% | 10.0ms |       1 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                                          | Location                                                                 |
| ----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 43.6% |   1.51s |     151 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |
| 43.6% |   1.51s |     151 | `main.main`                                                       | `github.com/tomeraberbach/profiler-md-workload/main.go:12`               |
| 43.6% |   1.51s |     151 | `runtime.main`                                                    | `runtime/proc.go:149`                                                    |
| 37.3% |   1.29s |     129 | `runtime.systemstack`                                             | `runtime/asm_arm64.s:353`                                                |
| 29.5% |   1.02s |     102 | `encoding/json.Unmarshal`                                         | `encoding/json/decode.go:102`                                            |
| 19.4% | 670.0ms |      67 | `runtime.(*mheap).allocSpan`                                      | `runtime/mheap.go:1224`                                                  |
| 19.1% | 660.0ms |      66 | `runtime.(*mheap).alloc.func1`                                    | `runtime/mheap.go:1011`                                                  |
| 18.8% | 650.0ms |      65 | `runtime.madvise`                                                 | `runtime/sys_darwin.go:224`                                              |
| 18.8% | 650.0ms |      65 | `runtime.sysUsedOS`                                               | `runtime/mem_darwin.go:29`                                               |
| 18.8% | 650.0ms |      65 | `runtime.sysUsed`                                                 | `runtime/mem.go:89`                                                      |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).objectInterface`                    | `encoding/json/decode.go:1078`                                           |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).valueInterface`                     | `encoding/json/decode.go:1035`                                           |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).arrayInterface`                     | `encoding/json/decode.go:1052`                                           |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).object`                             | `encoding/json/decode.go:604`                                            |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).value`                              | `encoding/json/decode.go:363`                                            |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).unmarshal`                          | `encoding/json/decode.go:173`                                            |
| 15.3% | 530.0ms |      53 | `runtime.schedule`                                                | `runtime/proc.go:4135`                                                   |
| 14.7% | 510.0ms |      51 | `runtime.park_m`                                                  | `runtime/proc.go:4253`                                                   |
| 14.7% | 510.0ms |      51 | `runtime.mcall`                                                   | `runtime/asm_arm64.s:302`                                                |
| 14.5% | 500.0ms |      50 | `runtime.findRunnable`                                            | `runtime/proc.go:3389`                                                   |

#### Categories

##### Standard library

|     % |    Time | Samples | Function                                       | Location                       |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 43.6% |   1.51s |     151 | `runtime.main`                                 | `runtime/proc.go:149`          |
| 37.3% |   1.29s |     129 | `runtime.systemstack`                          | `runtime/asm_arm64.s:353`      |
| 29.5% |   1.02s |     102 | `encoding/json.Unmarshal`                      | `encoding/json/decode.go:102`  |
| 19.4% | 670.0ms |      67 | `runtime.(*mheap).allocSpan`                   | `runtime/mheap.go:1224`        |
| 19.1% | 660.0ms |      66 | `runtime.(*mheap).alloc.func1`                 | `runtime/mheap.go:1011`        |
| 18.8% | 650.0ms |      65 | `runtime.madvise`                              | `runtime/sys_darwin.go:224`    |
| 18.8% | 650.0ms |      65 | `runtime.sysUsedOS`                            | `runtime/mem_darwin.go:29`     |
| 18.8% | 650.0ms |      65 | `runtime.sysUsed`                              | `runtime/mem.go:89`            |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).valueInterface`  | `encoding/json/decode.go:1035` |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).arrayInterface`  | `encoding/json/decode.go:1052` |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).object`          | `encoding/json/decode.go:604`  |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).value`           | `encoding/json/decode.go:363`  |
| 15.9% | 550.0ms |      55 | `encoding/json.(*decodeState).unmarshal`       | `encoding/json/decode.go:173`  |
| 15.3% | 530.0ms |      53 | `runtime.schedule`                             | `runtime/proc.go:4135`         |
| 14.7% | 510.0ms |      51 | `runtime.park_m`                               | `runtime/proc.go:4253`         |
| 14.7% | 510.0ms |      51 | `runtime.mcall`                                | `runtime/asm_arm64.s:302`      |
| 14.5% | 500.0ms |      50 | `runtime.findRunnable`                         | `runtime/proc.go:3389`         |
| 14.2% | 490.0ms |      49 | `encoding/json.(*encodeState).reflectValue`    | `encoding/json/encode.go:366`  |
| 14.2% | 490.0ms |      49 | `encoding/json.interfaceEncoder`               | `encoding/json/encode.go:695`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`)

|     % |    Time | Samples | Callee                    | Location                      |
| ----: | ------: | ------: | ------------------------- | ----------------------------- |
| 67.5% |   1.02s |     102 | `encoding/json.Unmarshal` | `encoding/json/decode.go:102` |
| 32.5% | 490.0ms |      49 | `encoding/json.Marshal`   | `encoding/json/encode.go:205` |

##### `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`)

|      % |  Time | Samples | Callee                                                            | Location                                                                 |
| -----: | ----: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 100.0% | 1.51s |     151 | `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` | `github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11` |

##### `runtime.main` (`runtime/proc.go:149`)

|      % |  Time | Samples | Callee      | Location                                                   |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------------- |
| 100.0% | 1.51s |     151 | `main.main` | `github.com/tomeraberbach/profiler-md-workload/main.go:12` |

##### `runtime.systemstack` (`runtime/asm_arm64.s:353`)

|     % |    Time | Samples | Callee                            | Location                |
| ----: | ------: | ------: | --------------------------------- | ----------------------- |
| 51.2% | 660.0ms |      66 | `runtime.(*mheap).alloc.func1`    | `runtime/mheap.go:1011` |
| 28.7% | 370.0ms |      37 | `runtime.gcStart.func4`           | `runtime/mgc.go:947`    |
| 17.1% | 220.0ms |      22 | `runtime.gcBgMarkWorker.func2`    | `runtime/mgc.go:1847`   |
|  0.8% |  10.0ms |       1 | `runtime.wbBufFlush.func1`        | `runtime/mwbbuf.go:180` |
|  0.8% |  10.0ms |       1 | `runtime.gcMarkTermination.func3` | `runtime/mgc.go:1500`   |

##### `encoding/json.Unmarshal` (`encoding/json/decode.go:102`)

|     % |    Time | Samples | Callee                                   | Location                      |
| ----: | ------: | ------: | ---------------------------------------- | ----------------------------- |
| 53.9% | 550.0ms |      55 | `encoding/json.(*decodeState).unmarshal` | `encoding/json/decode.go:173` |
| 46.1% | 470.0ms |      47 | `encoding/json.checkValid`               | `encoding/json/scanner.go:33` |

##### `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`)

|     % |    Time | Samples | Callee                      | Location                |
| ----: | ------: | ------: | --------------------------- | ----------------------- |
| 97.0% | 650.0ms |      65 | `runtime.sysUsed`           | `runtime/mem.go:89`     |
|  3.0% |  20.0ms |       2 | `runtime.(*mheap).initSpan` | `runtime/mheap.go:1439` |

##### `runtime.(*mheap).alloc.func1` (`runtime/mheap.go:1011`)

|      % |    Time | Samples | Callee                       | Location                |
| -----: | ------: | ------: | ---------------------------- | ----------------------- |
| 100.0% | 660.0ms |      66 | `runtime.(*mheap).allocSpan` | `runtime/mheap.go:1224` |

##### `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`)

|      % |    Time | Samples | Callee            | Location                    |
| -----: | ------: | ------: | ----------------- | --------------------------- |
| 100.0% | 650.0ms |      65 | `runtime.madvise` | `runtime/sys_darwin.go:224` |

##### `runtime.sysUsed` (`runtime/mem.go:89`)

|      % |    Time | Samples | Callee              | Location                   |
| -----: | ------: | ------: | ------------------- | -------------------------- |
| 100.0% | 650.0ms |      65 | `runtime.sysUsedOS` | `runtime/mem_darwin.go:29` |

##### `encoding/json.(*decodeState).objectInterface` (`encoding/json/decode.go:1078`)

|      % |    Time | Samples | Callee                                        | Location                                       |
| -----: | ------: | ------: | --------------------------------------------- | ---------------------------------------------- |
| 100.0% | 550.0ms |      55 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035`                 |
|  23.6% | 130.0ms |      13 | `encoding/json.unquote`                       | `encoding/json/decode.go:1187`                 |
|  21.8% | 120.0ms |      12 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`                  |
|  12.7% |  70.0ms |       7 | `runtime.mapassign_faststr`                   | `internal/runtime/maps/runtime_faststr.go:263` |
|   7.3% |  40.0ms |       4 | `encoding/json.(*decodeState).rescanLiteral`  | `encoding/json/decode.go:322`                  |

##### `encoding/json.(*decodeState).valueInterface` (`encoding/json/decode.go:1035`)

|      % |    Time | Samples | Callee                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 550.0ms |      55 | `encoding/json.(*decodeState).objectInterface`  | `encoding/json/decode.go:1078` |
| 100.0% | 550.0ms |      55 | `encoding/json.(*decodeState).arrayInterface`   | `encoding/json/decode.go:1052` |
|  27.3% | 150.0ms |      15 | `encoding/json.(*decodeState).literalInterface` | `encoding/json/decode.go:1129` |
|   1.8% |  10.0ms |       1 | `runtime.convTslice`                            | `runtime/iface.go:438`         |
|   1.8% |  10.0ms |       1 | `encoding/json.(*decodeState).scanNext`         | `encoding/json/decode.go:286`  |

##### `encoding/json.(*decodeState).arrayInterface` (`encoding/json/decode.go:1052`)

|      % |    Time | Samples | Callee                                        | Location                       |
| -----: | ------: | ------: | --------------------------------------------- | ------------------------------ |
| 100.0% | 550.0ms |      55 | `encoding/json.(*decodeState).valueInterface` | `encoding/json/decode.go:1035` |
|   1.8% |  10.0ms |       1 | `encoding/json.(*decodeState).scanWhile`      | `encoding/json/decode.go:298`  |
|   1.8% |  10.0ms |       1 | `runtime.growslice`                           | `runtime/slice.go:178`         |

##### `encoding/json.(*decodeState).object` (`encoding/json/decode.go:604`)

|      % |    Time | Samples | Callee                                         | Location                       |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 100.0% | 550.0ms |      55 | `encoding/json.(*decodeState).objectInterface` | `encoding/json/decode.go:1078` |

##### `encoding/json.(*decodeState).value` (`encoding/json/decode.go:363`)

|      % |    Time | Samples | Callee                                | Location                      |
| -----: | ------: | ------: | ------------------------------------- | ----------------------------- |
| 100.0% | 550.0ms |      55 | `encoding/json.(*decodeState).object` | `encoding/json/decode.go:604` |

##### `encoding/json.(*decodeState).unmarshal` (`encoding/json/decode.go:173`)

|      % |    Time | Samples | Callee                               | Location                      |
| -----: | ------: | ------: | ------------------------------------ | ----------------------------- |
| 100.0% | 550.0ms |      55 | `encoding/json.(*decodeState).value` | `encoding/json/decode.go:363` |

##### `runtime.schedule` (`runtime/proc.go:4135`)

|     % |    Time | Samples | Callee                  | Location               |
| ----: | ------: | ------: | ----------------------- | ---------------------- |
| 94.3% | 500.0ms |      50 | `runtime.findRunnable`  | `runtime/proc.go:3389` |
|  5.7% |  30.0ms |       3 | `runtime.resetspinning` | `runtime/proc.go:4021` |

##### `runtime.park_m` (`runtime/proc.go:4253`)

|      % |    Time | Samples | Callee             | Location               |
| -----: | ------: | ------: | ------------------ | ---------------------- |
| 100.0% | 510.0ms |      51 | `runtime.schedule` | `runtime/proc.go:4135` |

##### `runtime.mcall` (`runtime/asm_arm64.s:302`)

|      % |    Time | Samples | Callee           | Location               |
| -----: | ------: | ------: | ---------------- | ---------------------- |
| 100.0% | 510.0ms |      51 | `runtime.park_m` | `runtime/proc.go:4253` |

##### `runtime.findRunnable` (`runtime/proc.go:3389`)

|     % |    Time | Samples | Callee                   | Location                      |
| ----: | ------: | ------: | ------------------------ | ----------------------------- |
| 84.0% | 420.0ms |      42 | `runtime.stopm`          | `runtime/proc.go:2992`        |
| 10.0% |  50.0ms |       5 | `runtime.lock`           | `runtime/lock_spinbit.go:151` |
|  4.0% |  20.0ms |       2 | `runtime.runSafePointFn` | `runtime/proc.go:2232`        |
|  2.0% |  10.0ms |       1 | `runtime.gcstopm`        | `runtime/proc.go:3296`        |

##### `encoding/json.(*encodeState).reflectValue` (`encoding/json/encode.go:366`)

|      % |    Time | Samples | Callee                              | Location                      |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------- |
| 100.0% | 490.0ms |      49 | `encoding/json.mapEncoder.encode`   | `encoding/json/encode.go:765` |
| 100.0% | 490.0ms |      49 | `encoding/json.sliceEncoder.encode` | `encoding/json/encode.go:843` |
|  18.4% |  90.0ms |       9 | `encoding/json.stringEncoder`       | `encoding/json/encode.go:610` |
|   6.1% |  30.0ms |       3 | `encoding/json.valueEncoder`        | `encoding/json/encode.go:381` |
|   4.1% |  20.0ms |       2 | `encoding/json.floatEncoder.encode` | `encoding/json/encode.go:571` |

##### `encoding/json.interfaceEncoder` (`encoding/json/encode.go:695`)

|      % |    Time | Samples | Callee                                      | Location                      |
| -----: | ------: | ------: | ------------------------------------------- | ----------------------------- |
| 100.0% | 490.0ms |      49 | `encoding/json.(*encodeState).reflectValue` | `encoding/json/encode.go:366` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.5% | 640.0ms |      64 | `runtime.madvise` (`runtime/sys_darwin.go:224`) ← `runtime.sysUsedOS` (`runtime/mem_darwin.go:29`) ← `runtime.sysUsed` (`runtime/mem.go:89`) ← `runtime.(*mheap).allocSpan` (`runtime/mheap.go:1224`) ← `runtime.(*mheap).alloc.func1` (1011) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 11.0% | 380.0ms |      38 | `runtime.pthread_cond_wait` (`runtime/sys_darwin.go:487`) ← `runtime.semasleep` (`runtime/os_darwin.go:45`) ← `runtime.notesleep` (`runtime/lock_sema.go:46`) ← `runtime.mPark` (`runtime/proc.go:1965`) ← `runtime.stopm` (2992) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10.7% | 370.0ms |      37 | `runtime.kevent` (`runtime/sys_darwin.go:438`) ← `runtime.netpoll` (`runtime/netpoll_kqueue.go:90`) ← `runtime.startTheWorldWithSema` (`runtime/proc.go:1760`) ← `runtime.gcStart.func4` (`runtime/mgc.go:947`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  5.5% | 190.0ms |      19 | `encoding/json.checkValid` (`encoding/json/scanner.go:33`) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.9% | 170.0ms |      17 | `encoding/json.stateInString` (`encoding/json/scanner.go:339`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% |  80.0ms |       8 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.goschedImpl` (`runtime/proc.go:4307`) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% |  40.0ms |       4 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.stopm` (`runtime/proc.go:2992`) ← `runtime.findRunnable` (3389) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.2% |  40.0ms |       4 | `encoding/json.stateBeginString` (`encoding/json/scanner.go:268`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  40.0ms |       4 | `runtime.usleep` (`runtime/sys_darwin.go:273`) ← `runtime.osyield` (`runtime/os_darwin.go:379`) ← `runtime.lock2` (`runtime/lock_spinbit.go:155`) ← `runtime.lockWithRank` (`runtime/lockrank_off.go:23`) ← `runtime.lock` (`runtime/lock_spinbit.go:151`) ← `runtime.findRunnable` (`runtime/proc.go:3389`) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |  40.0ms |       4 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.9% |  30.0ms |       3 | `encoding/json.appendString[go.shape.string]` (`encoding/json/encode.go:999`) ← `encoding/json.stringEncoder` (610) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.arrayEncoder.encode` (883) ← `encoding/json.sliceEncoder.encode` (843) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.interfaceEncoder` (695) ← `encoding/json.mapEncoder.encode` (765) ← `encoding/json.(*encodeState).reflectValue` (366) ← `encoding/json.(*encodeState).marshal` (333) ← `encoding/json.Marshal` (205) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                         |
|  0.9% |  30.0ms |       3 | `unicode/utf8.decodeRuneSlow` (`unicode/utf8/utf8.go:171`) ← `unicode/utf8.DecodeRune` (157) ← `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).literalInterface` (1129) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                          |
|  0.9% |  30.0ms |       3 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.resetspinning` (4021) ← `runtime.schedule` (4135) ← `runtime.park_m` (4253) ← `runtime.mcall` (`runtime/asm_arm64.s:302`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.9% |  30.0ms |       3 | `encoding/json.stateBeginValue` (`encoding/json/scanner.go:217`) ← `encoding/json.checkValid` (33) ← `encoding/json.Unmarshal` (`encoding/json/decode.go:102`) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.9% |  30.0ms |       3 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.9% |  30.0ms |       3 | `runtime.pthread_kill` (`runtime/sys_darwin.go:148`) ← `runtime.signalM` (`runtime/os_darwin.go:489`) ← `runtime.preemptM` (`runtime/signal_unix.go:369`) ← `runtime.preemptone` (`runtime/proc.go:6866`) ← `runtime.(*gcControllerState).enlistWorker` (`runtime/mgcpacer.go:697`) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.6% |  20.0ms |       2 | `runtime.acquirem` (`runtime/runtime1.go:600`) ← `runtime.mallocgcSmallScanNoHeader` (`runtime/malloc.go:1503`) ← `runtime.mallocgc` (1067) ← `runtime.convTstring` (`runtime/iface.go:419`) ← `encoding/json.(*decodeState).literalInterface` (`encoding/json/decode.go:1129`) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`) |
|  0.6% |  20.0ms |       2 | `encoding/json.unquoteBytes` (`encoding/json/decode.go:1193`) ← `encoding/json.unquote` (1187) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).arrayInterface` (1052) ← `encoding/json.(*decodeState).valueInterface` (1035) ← `encoding/json.(*decodeState).objectInterface` (1078) ← `encoding/json.(*decodeState).object` (604) ← `encoding/json.(*decodeState).value` (363) ← `encoding/json.(*decodeState).unmarshal` (173) ← `encoding/json.Unmarshal` (102) ← `github.com/tomeraberbach/profiler-md-workload/internal/work.Run` (`github.com/tomeraberbach/profiler-md-workload/internal/work/work.go:11`) ← `main.main` (`github.com/tomeraberbach/profiler-md-workload/main.go:12`) ← `runtime.main` (`runtime/proc.go:149`)                                                                                                                          |
|  0.6% |  20.0ms |       2 | `runtime.pthread_cond_signal` (`runtime/sys_darwin.go:508`) ← `runtime.semawakeup` (`runtime/os_darwin.go:83`) ← `runtime.notewakeup` (`runtime/lock_sema.go:23`) ← `runtime.startm` (`runtime/proc.go:3035`) ← `runtime.wakep` (3212) ← `runtime.goschedImpl` (4307) ← `runtime.gopreempt_m` (4361) ← `runtime.newstack` (`runtime/stack.go:1026`) ← `runtime.morestack` (`runtime/asm_arm64.s:457`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.6% |  20.0ms |       2 | `runtime.tryDeferToSpanScan` (`runtime/mgcmark_greenteagc.go:264`) ← `runtime.scanObjectsSmall` (1015) ← `runtime.scanSpan` (844) ← `runtime.gcDrain` (`runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`runtime/mgc.go:1847`) ← `runtime.systemstack` (`runtime/asm_arm64.s:353`) ← `runtime.gcBgMarkWorker` (`runtime/mgc.go:1750`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

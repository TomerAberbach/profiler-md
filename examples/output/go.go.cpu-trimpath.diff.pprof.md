# CPU profile diff

Took 3.46s → 3.44s (-20.00ms, -0.6%) over 346 samples → 344 samples (10.0ms per sample).

| Category          | Change |    Delta |              % |          Time |   Samples |
| ----------------- | -----: | -------: | -------------: | ------------: | --------: |
| Standard library  |  -0.9% | -30.00ms | 100.0% → 99.7% | 3.46s → 3.43s | 346 → 343 |
| Garbage collector |    new | +10.00ms |    0.0% → 0.3% |  0ms → 10.0ms |     0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

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

Functions with the largest decrease in time spent directly in the function body, excluding callees.

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

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

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

Functions with the largest decrease in total time spent in the function and all its callees.

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

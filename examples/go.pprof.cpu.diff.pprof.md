# CPU profile diff

Took 5.39s → 5.63s (+240.0ms, +4.5%) over 152 samples → 157 samples (35.5ms → 35.9ms per sample).

| Category | Change |    Delta |      % |          Time |   Samples |
| -------- | -----: | -------: | -----: | ------------: | --------: |
| ours     |  +4.5% | +240.0ms | 100.0% | 5.39s → 5.63s | 152 → 157 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time | Samples | Function                                        | Location                                                                                                                 |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
|   +5.6% | +110.0ms | 36.5% → 36.9% |     1.97s → 2.08s | 34 → 48 | `runtime.usleep`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273            |
|  +50.0% | +110.0ms |   4.1% → 5.9% | 220.0ms → 330.0ms | 10 → 14 | `runtime.pthread_cond_signal`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508            |
| +175.0% |  +70.0ms |   0.7% → 2.0% |  40.0ms → 110.0ms |   3 → 5 | `runtime.procyieldAsm`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103             |
|  +22.2% |  +60.0ms |   5.0% → 5.9% | 270.0ms → 330.0ms |   9 → 5 | `runtime.pthread_kill`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:148            |
|     new |  +30.0ms |   0.0% → 0.5% |      0ms → 30.0ms |   0 → 2 | `runtime.lock2`                                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155          |
|   +1.3% |  +20.0ms | 28.2% → 27.4% |     1.52s → 1.54s |   2 → 3 | `runtime.madvise`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:224            |
|  +66.7% |  +20.0ms |   0.6% → 0.9% |   30.0ms → 50.0ms |   3 → 5 | `runtime.scanObject`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1187   |
| +100.0% |  +20.0ms |   0.4% → 0.7% |   20.0ms → 40.0ms |   2 → 4 | `runtime.pcvalue`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/symtab.go:1013               |
|     new |  +20.0ms |   0.0% → 0.4% |      0ms → 20.0ms |   0 → 2 | `internal/runtime/atomic.(*Uint8).Load`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:123 |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.(*mheap).alloc.func1`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1011                |
| +100.0% |  +10.0ms |   0.2% → 0.4% |   10.0ms → 20.0ms |   1 → 2 | `runtime.goschedImpl`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307                 |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.park_m`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253                 |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.wakep`                                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212                 |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.bulkBarrierPreWrite`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:388               |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `internal/runtime/atomic.(*UnsafePointer).Load` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:465 |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.memclrNoHeapPointers`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/memclr_arm64.s:11            |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.(*mspan).init`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1819                |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `internal/runtime/atomic.(*Int32).Load`         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:20  |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `gosave_systemstack_switch`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144             |
|     new |  +10.0ms |   0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `unicode/utf8.DecodeRune`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/unicode/utf8/utf8.go:157             |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |              Time | Samples | Function                                             | Location                                                                                                                 |
| ------: | ------: | ----------: | ----------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
|   -3.8% | -20.0ms | 9.8% → 9.1% | 530.0ms → 510.0ms | 12 → 10 | `runtime.pthread_cond_wait`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:487            |
|  -50.0% | -20.0ms | 0.7% → 0.4% |   40.0ms → 20.0ms |   3 → 2 | `encoding/json.stateInString`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:339         |
|  -16.7% | -20.0ms | 2.2% → 1.8% | 120.0ms → 100.0ms | 11 → 10 | `runtime.tryDeferToSpanScan`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:264    |
|  -66.7% | -20.0ms | 0.6% → 0.2% |   30.0ms → 10.0ms |   3 → 1 | `runtime.scanObjectsSmall`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015   |
| removed | -20.0ms | 0.4% → 0.0% |      20.0ms → 0ms |   2 → 0 | `encoding/json.isSpace`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:201         |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `internal/runtime/atomic.(*UnsafePointer).StoreNoWB` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/atomic/types.go:478 |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*mcache).refill`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:160                |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcSmallScanNoHeader`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503               |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.(*decodeState).valueInterface`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1035         |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.(*spanInlineMarkBits).init`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:113    |
|  -50.0% | -10.0ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `runtime.typePointers.next`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mbitmap.go:243               |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcBgMarkWorker`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750                  |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mProf_Malloc`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:437                 |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.profilealloc`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2238               |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.mallocgcTiny`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202               |
|  -50.0% | -10.0ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `runtime.wbBufFlush1`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:195                |
|  -50.0% | -10.0ms | 0.4% → 0.2% |   20.0ms → 10.0ms |   2 → 1 | `encoding/json.checkValid`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33          |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.scanObjectSmall`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:980    |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.pthread_mutex_unlock`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:468            |
| removed | -10.0ms | 0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `encoding/json.mapEncoder.encode`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:765          |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Samples | Function                                        | Location                                                                                                         |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  +10.0% | +300.0ms | 55.5% → 58.4% |     2.99s → 3.29s |      59 | `runtime.systemstack`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353      |
|  +11.3% | +240.0ms | 39.5% → 42.1% |     2.13s → 2.37s | 45 → 62 | `runtime.lock2`                                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:155  |
|  +11.3% | +240.0ms | 39.5% → 42.1% |     2.13s → 2.37s | 45 → 62 | `runtime.lockWithRank`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lockrank_off.go:23   |
|  +11.3% | +240.0ms | 39.5% → 42.1% |     2.13s → 2.37s | 45 → 62 | `runtime.lock`                                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:151  |
|  +34.2% | +130.0ms |   7.1% → 9.1% | 380.0ms → 510.0ms |      31 | `runtime.gcDrain`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239      |
|  +34.2% | +130.0ms |   7.1% → 9.1% | 380.0ms → 510.0ms |      31 | `runtime.gcBgMarkWorker.func2`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847          |
| +108.3% | +130.0ms |   2.2% → 4.4% | 120.0ms → 250.0ms |   6 → 5 | `runtime.(*gcControllerState).enlistWorker`     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcpacer.go:697      |
|   +6.2% | +120.0ms | 36.0% → 36.6% |     1.94s → 2.06s | 32 → 46 | `runtime.osyield`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:379     |
|  +16.7% | +120.0ms | 13.4% → 14.9% | 720.0ms → 840.0ms |       4 | `runtime.setprofilebucket`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2717        |
|  +16.7% | +120.0ms | 13.4% → 14.9% | 720.0ms → 840.0ms |       4 | `runtime.mProf_Malloc.func1`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:463         |
|  +73.3% | +110.0ms |   2.8% → 4.6% | 150.0ms → 260.0ms | 13 → 23 | `runtime.mallocgcSmallScanNoHeader`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1503       |
|   +5.6% | +110.0ms | 36.5% → 36.9% |     1.97s → 2.08s | 34 → 48 | `runtime.usleep`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:273    |
|  +50.0% | +110.0ms |   4.1% → 5.9% | 220.0ms → 330.0ms | 10 → 14 | `runtime.pthread_cond_signal`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/sys_darwin.go:508    |
|  +50.0% | +110.0ms |   4.1% → 5.9% | 220.0ms → 330.0ms | 10 → 14 | `runtime.semawakeup`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/os_darwin.go:83      |
|  +39.1% |  +90.0ms |   4.3% → 5.7% | 230.0ms → 320.0ms | 18 → 21 | `runtime.gcDrainMarkWorkerDedicated`            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173      |
|  +64.3% |  +90.0ms |   2.6% → 4.1% | 140.0ms → 230.0ms |  9 → 15 | `runtime.(*sweepLocked).sweep`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505      |
|  +61.5% |  +80.0ms |   2.4% → 3.7% | 130.0ms → 210.0ms |  8 → 13 | `runtime.freeSpecial`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786        |
|   +4.6% |  +70.0ms |         28.2% |     1.52s → 1.59s |   4 → 8 | `runtime.(*mheap).allocSpan`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1224        |
| +100.0% |  +70.0ms |   1.3% → 2.5% |  70.0ms → 140.0ms |  7 → 13 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |
| +175.0% |  +70.0ms |   0.7% → 2.0% |  40.0ms → 110.0ms |   3 → 5 | `runtime.procyieldAsm`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1103     |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |   Delta |             % |              Time | Samples | Function                                | Location                                                                                                                         |
| ------: | ------: | ------------: | ----------------: | ------: | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
|   -8.1% | -70.0ms | 16.0% → 14.0% | 860.0ms → 790.0ms | 74 → 69 | `main.workload.func1`                   | scripts/fixtures/assets/go/profile.go:25                                                                                         |
|  -10.4% | -70.0ms | 12.4% → 10.7% | 670.0ms → 600.0ms | 10 → 12 | `runtime.park_m`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253                         |
|  -10.4% | -70.0ms | 12.4% → 10.7% | 670.0ms → 600.0ms | 10 → 12 | `runtime.mcall`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302                      |
|  -26.1% | -60.0ms |   4.3% → 3.0% | 230.0ms → 170.0ms | 14 → 12 | `internal/runtime/maps.newTable`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73            |
|  -42.9% | -60.0ms |   2.6% → 1.4% |  140.0ms → 80.0ms |  14 → 7 | `runtime.slicebytetostring`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/string.go:139                        |
|  -50.0% | -60.0ms |   2.2% → 1.1% |  120.0ms → 60.0ms |  11 → 6 | `encoding/json.checkValid`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/scanner.go:33                  |
|  -75.0% | -60.0ms |   1.5% → 0.4% |   80.0ms → 20.0ms |   8 → 2 | `runtime.scanObjectsSmall`              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:1015           |
|   -7.7% | -50.0ms | 12.1% → 10.7% | 650.0ms → 600.0ms |      53 | `encoding/json.Unmarshal`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102                  |
|  -12.8% | -50.0ms |   7.2% → 6.0% | 390.0ms → 340.0ms |   3 → 1 | `runtime.notesleep`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_sema.go:46                      |
|  -12.8% | -50.0ms |   7.2% → 6.0% | 390.0ms → 340.0ms |   3 → 1 | `runtime.mPark`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1965                         |
|  -50.0% | -50.0ms |   1.9% → 0.9% |  100.0ms → 50.0ms |  10 → 5 | `runtime.scanSpan`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark_greenteagc.go:844            |
|  -12.5% | -40.0ms |   5.9% → 5.0% | 320.0ms → 280.0ms | 21 → 22 | `runtime.mapassign_faststr`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263 |
|  -14.3% | -40.0ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 27 → 24 | `runtime.gcBgMarkWorker`                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750                          |
|  -14.3% | -40.0ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 17 → 18 | `runtime.newarray`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199                       |
|  -14.3% | -40.0ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 17 → 18 | `internal/runtime/maps.newarray`        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2230                       |
|  -14.3% | -40.0ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 17 → 18 | `internal/runtime/maps.newGroups`       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/group.go:318           |
|  -19.0% | -40.0ms |   3.9% → 3.0% | 210.0ms → 170.0ms |      12 | `internal/runtime/maps.(*table).reset`  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101           |
|  -19.0% | -40.0ms |   3.9% → 3.0% | 210.0ms → 170.0ms |      12 | `internal/runtime/maps.(*table).grow`   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1227          |
|  -19.0% | -40.0ms |   3.9% → 3.0% | 210.0ms → 170.0ms |      12 | `internal/runtime/maps.(*table).rehash` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:1145          |
| removed | -40.0ms |   0.7% → 0.0% |      40.0ms → 0ms |   4 → 0 | `runtime.mallocgcTiny`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1202                       |

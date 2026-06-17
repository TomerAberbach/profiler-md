# CPU profile diff

Took 155.8ms → 159.9ms (+4.1ms, +2.6%) over 255 samples → 263 samples (611.1µs → 608.0µs per sample).

| Category | Change |  Delta |      % |              Time |   Samples |
| -------- | -----: | -----: | -----: | ----------------: | --------: |
| ours     |  +2.6% | +4.1ms | 100.0% | 155.8ms → 159.9ms | 255 → 263 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |  Delta |     % |              Time |   Samples | Function                            | Location                                                                                                        |
| -----: | -----: | ----: | ----------------: | --------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|  +2.6% | +3.7ms | 89.6% | 139.6ms → 143.3ms | 252 → 262 | `runtime.unlock`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260 |
|  +2.5% | +0.4ms | 10.4% |   16.2ms → 16.6ms |         1 | `runtime._LostContendedRuntimeLock` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741        |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change | Delta |    % | Time | Samples | Function               | Location                                                                                             |
| ------: | ----: | ---: | ---: | ------: | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| removed |  -0ms | 0.0% |  0ms |   2 → 0 | `sync.(*Mutex).Unlock` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:64 |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |  Delta |             % |              Time |   Samples | Function                                   | Location                                                                                                        |
| -----: | -----: | ------------: | ----------------: | --------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
|  +6.1% | +4.2ms | 43.9% → 45.4% |   68.5ms → 72.6ms |   24 → 23 | `runtime.newstack`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026       |
|  +6.1% | +4.2ms | 43.9% → 45.4% |   68.5ms → 72.6ms |   24 → 23 | `runtime.morestack`                        | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457     |
|  +6.0% | +4.1ms | 44.1% → 45.5% |   68.7ms → 72.8ms |   28 → 27 | `runtime.gopreempt_m`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361        |
|  +5.6% | +3.9ms | 44.2% → 45.5% |   68.9ms → 72.8ms |   31 → 27 | `runtime.goschedImpl`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307        |
|  +6.4% | +3.8ms | 38.4% → 39.8% |   59.8ms → 63.6ms |   46 → 44 | `runtime.schedule`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135        |
|  +2.6% | +3.7ms |         89.6% | 139.6ms → 143.3ms | 252 → 262 | `runtime.unlock`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260 |
|  +7.0% | +3.2ms | 29.6% → 30.8% |   46.1ms → 49.3ms |     5 → 3 | `runtime.runSafePointFn`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232        |
|  +5.6% | +3.2ms | 36.5% → 37.6% |   56.9ms → 60.1ms |        39 | `runtime.findRunnable`                     | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389        |
|  +6.9% | +2.1ms | 19.8% → 20.6% |   30.8ms → 33.0ms |         2 | `runtime.gcMarkTermination.forEachP.func7` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112        |
|  +6.9% | +2.1ms | 19.8% → 20.6% |   30.8ms → 33.0ms |         2 | `runtime.gcMarkTermination`                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344         |
|  +3.2% | +1.7ms | 34.4% → 34.6% |   53.6ms → 55.3ms |   13 → 17 | `runtime.gcBgMarkWorker`                   | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750         |
|  +2.9% | +1.6ms | 34.3% → 34.4% |   53.4ms → 55.0ms |         4 | `runtime.gcMarkDone`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015         |
|  +2.7% | +1.5ms |         36.4% |   56.7ms → 58.3ms | 146 → 165 | `runtime.systemstack`                      | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353     |
|  +2.1% | +1.1ms | 31.8% → 31.7% |   49.6ms → 50.7ms |         3 | `runtime.forEachPInternal`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140        |
|  +2.1% | +1.1ms | 31.8% → 31.7% |   49.6ms → 50.7ms |         3 | `runtime.forEachP`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111        |
| +15.4% | +0.9ms |   3.7% → 4.2% |     5.8ms → 6.7ms |   12 → 16 | `runtime.gcstopm`                          | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296        |
| +27.7% | +0.8ms |   1.8% → 2.2% |     2.8ms → 3.5ms |         5 | `runtime.resetspinning`                    | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021        |
| +10.8% | +0.6ms |   3.4% → 3.7% |     5.3ms → 5.9ms |   12 → 11 | `runtime.wakep`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212        |
| +13.3% | +0.5ms |   2.4% → 2.7% |     3.8ms → 4.3ms |         1 | `runtime.gcMarkDone.func2`                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083         |
|  +8.6% | +0.4ms |   3.2% → 3.4% |     5.0ms → 5.5ms |   47 → 61 | `runtime.stopTheWorldWithSema`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628        |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |  Delta |             % |            Time | Samples | Function                                        | Location                                                                                                         |
| ------: | -----: | ------------: | --------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  -13.9% | -1.8ms |   8.3% → 6.9% | 12.9ms → 11.1ms | 29 → 25 | `runtime.mcall`                                 | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302      |
|  -11.9% | -1.5ms |   8.0% → 6.8% | 12.4ms → 10.9ms | 22 → 21 | `runtime.park_m`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253         |
|   -5.6% | -1.1ms | 12.0% → 11.1% | 18.8ms → 17.7ms |       1 | `runtime.gcMarkDone.forEachP.func5`             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112         |
|  -29.6% | -0.3ms |   0.7% → 0.5% |   1.1ms → 0.8ms | 42 → 32 | `runtime.(*sweepLocked).sweep`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505      |
|  -38.3% | -0.3ms |   0.5% → 0.3% |   0.7ms → 0.4ms | 10 → 14 | `runtime.(*mcentral).uncacheSpan`               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcentral.go:205      |
|  -38.3% | -0.3ms |   0.5% → 0.3% |   0.7ms → 0.4ms | 10 → 14 | `runtime.(*mcache).releaseAll`                  | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:290        |
|  -29.4% | -0.3ms |   0.6% → 0.4% |   0.9ms → 0.7ms |       5 | `runtime.mstart1`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904         |
|  -29.4% | -0.3ms |   0.6% → 0.4% |   0.9ms → 0.7ms |       5 | `runtime.mstart0`                               | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862         |
|  -29.4% | -0.3ms |   0.6% → 0.4% |   0.9ms → 0.7ms |       5 | `runtime.mstart`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258      |
|  -29.1% | -0.3ms |   0.6% → 0.4% |   0.9ms → 0.7ms |       4 | `runtime.sysmon`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486         |
|  -33.7% | -0.3ms |   0.5% → 0.3% |   0.8ms → 0.5ms | 30 → 23 | `runtime.freeSpecial`                           | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786        |
|  -30.2% | -0.3ms |   0.5% → 0.4% |   0.8ms → 0.6ms |       2 | `runtime.incidlelocked`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6355         |
|  -30.2% | -0.3ms |   0.5% → 0.4% |   0.8ms → 0.6ms |       2 | `runtime.retake`                                | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6630         |
|  -44.9% | -0.2ms |   0.3% → 0.2% |   0.5ms → 0.3ms | 16 → 15 | `runtime.mallocgcLarge`                         | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1687       |
| removed | -0.2ms |   0.2% → 0.0% |     0.2ms → 0ms |   3 → 0 | `runtime.gosched_m`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349         |
|  -87.6% | -0.2ms |   0.2% → 0.0% |     0.2ms → 0ms |   8 → 3 | `runtime.mProf_Free`                            | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:469         |
|  -36.2% | -0.2ms |   0.4% → 0.2% |   0.6ms → 0.4ms |      31 | `encoding/json.(*decodeState).literalInterface` | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129 |
|  -25.3% | -0.2ms |   0.5% → 0.4% |   0.8ms → 0.6ms | 13 → 17 | `runtime.acquirepNoTrace`                       | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6274         |
|  -25.3% | -0.2ms |   0.5% → 0.4% |   0.8ms → 0.6ms | 13 → 17 | `runtime.acquirep`                              | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6259         |
|  -33.9% | -0.2ms |   0.4% → 0.2% |   0.6ms → 0.4ms | 25 → 21 | `runtime.growslice`                             | ../../../../../../nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178         |

# Contention profile diff

Blocked 155.8ms → 159.9ms (+4.09ms, +2.6%) over 5,028 contentions → 4,990 contentions (31.0µs → 32.0µs per contention).

| Category         | Change |   Delta |      % |              Time |   Contentions |
| ---------------- | -----: | ------: | -----: | ----------------: | ------------: |
| Standard library |  +2.6% | +4.09ms | 100.0% | 155.8ms → 159.9ms | 5,028 → 4,990 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |     % |              Time |   Contentions | Function                            | Location                                                                                         |
| -----: | ------: | ----: | ----------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +2.6% | +3.69ms | 89.6% | 139.6ms → 143.3ms | 4,344 → 4,249 | `runtime.unlock`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  +2.5% | +0.41ms | 10.4% |   16.2ms → 16.6ms |     682 → 741 | `runtime._LostContendedRuntimeLock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`        |

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |            % |         Time | Contentions | Function               | Location                                                                              |
| ------: | ------: | -----------: | -----------: | ----------: | ---------------------- | ------------------------------------------------------------------------------------- |
| removed | -0.02ms | <0.1% → 0.0% | 18.8µs → 0ms |       2 → 0 | `sync.(*Mutex).Unlock` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/sync/mutex.go:64` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |             % |              Time |   Contentions | Function                                   | Location                                                                                         |
| -----: | ------: | ------------: | ----------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  +6.1% | +4.18ms | 43.9% → 45.4% |   68.5ms → 72.6ms | 2,476 → 2,384 | `runtime.newstack`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`       |
|  +6.1% | +4.18ms | 43.9% → 45.4% |   68.5ms → 72.6ms | 2,476 → 2,384 | `runtime.morestack`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`     |
|  +6.0% | +4.10ms | 44.1% → 45.5% |   68.7ms → 72.8ms | 2,486 → 2,390 | `runtime.gopreempt_m`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`        |
|  +5.6% | +3.87ms | 44.2% → 45.5% |   68.9ms → 72.8ms | 2,493 → 2,390 | `runtime.goschedImpl`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`        |
|  +6.4% | +3.83ms | 38.4% → 39.8% |   59.8ms → 63.6ms | 1,945 → 1,916 | `runtime.schedule`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`        |
|  +2.6% | +3.69ms |         89.6% | 139.6ms → 143.3ms | 4,344 → 4,249 | `runtime.unlock`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260` |
|  +7.0% | +3.24ms | 29.6% → 30.8% |   46.1ms → 49.3ms | 1,086 → 1,063 | `runtime.runSafePointFn`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`        |
|  +5.6% | +3.17ms | 36.5% → 37.6% |   56.9ms → 60.1ms | 1,850 → 1,811 | `runtime.findRunnable`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`        |
|  +6.9% | +2.12ms | 19.8% → 20.6% |   30.8ms → 33.0ms |     297 → 298 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
|  +6.9% | +2.12ms | 19.8% → 20.6% |   30.8ms → 33.0ms |     297 → 298 | `runtime.gcMarkTermination`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`         |
|  +3.2% | +1.72ms | 34.4% → 34.6% |   53.6ms → 55.3ms |     858 → 853 | `runtime.gcBgMarkWorker`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
|  +2.9% | +1.57ms | 34.3% → 34.4% |   53.4ms → 55.0ms |     843 → 827 | `runtime.gcMarkDone`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
|  +2.7% | +1.53ms |         36.4% |   56.7ms → 58.3ms | 1,325 → 1,349 | `runtime.systemstack`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`     |
|  +2.1% | +1.07ms | 31.8% → 31.7% |   49.6ms → 50.7ms |     746 → 714 | `runtime.forEachPInternal`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`        |
|  +2.1% | +1.07ms | 31.8% → 31.7% |   49.6ms → 50.7ms |     746 → 714 | `runtime.forEachP`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`        |
| +15.4% | +0.90ms |   3.7% → 4.2% |     5.8ms → 6.7ms |     491 → 501 | `runtime.gcstopm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
| +27.7% | +0.77ms |   1.8% → 2.2% |     2.8ms → 3.5ms |      92 → 105 | `runtime.resetspinning`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`        |
| +10.8% | +0.57ms |   3.4% → 3.7% |     5.3ms → 5.9ms |     255 → 280 | `runtime.wakep`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`        |
| +13.3% | +0.51ms |   2.4% → 2.7% |     3.8ms → 4.3ms |      97 → 113 | `runtime.gcMarkDone.func2`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`         |
|  +8.6% | +0.43ms |   3.2% → 3.4% |     5.0ms → 5.5ms |     240 → 255 | `runtime.stopTheWorldWithSema`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`        |

##### Standard library

| Change |   Delta |             % |              Time |   Contentions | Function                               | Location                                                                                                          |
| -----: | ------: | ------------: | ----------------: | ------------: | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|  +6.1% | +4.18ms | 43.9% → 45.4% |   68.5ms → 72.6ms | 2,476 → 2,384 | `runtime.newstack`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/stack.go:1026`                        |
|  +6.1% | +4.18ms | 43.9% → 45.4% |   68.5ms → 72.6ms | 2,476 → 2,384 | `runtime.morestack`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:457`                      |
|  +6.0% | +4.10ms | 44.1% → 45.5% |   68.7ms → 72.8ms | 2,486 → 2,390 | `runtime.gopreempt_m`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4361`                         |
|  +5.6% | +3.87ms | 44.2% → 45.5% |   68.9ms → 72.8ms | 2,493 → 2,390 | `runtime.goschedImpl`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4307`                         |
|  +6.4% | +3.83ms | 38.4% → 39.8% |   59.8ms → 63.6ms | 1,945 → 1,916 | `runtime.schedule`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4135`                         |
|  +2.6% | +3.69ms |         89.6% | 139.6ms → 143.3ms | 4,344 → 4,249 | `runtime.unlock`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/lock_spinbit.go:260`                  |
|  +7.0% | +3.24ms | 29.6% → 30.8% |   46.1ms → 49.3ms | 1,086 → 1,063 | `runtime.runSafePointFn`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2232`                         |
|  +5.6% | +3.17ms | 36.5% → 37.6% |   56.9ms → 60.1ms | 1,850 → 1,811 | `runtime.findRunnable`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3389`                         |
|  +2.7% | +1.53ms |         36.4% |   56.7ms → 58.3ms | 1,325 → 1,349 | `runtime.systemstack`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:353`                      |
|  +2.1% | +1.07ms | 31.8% → 31.7% |   49.6ms → 50.7ms |     746 → 714 | `runtime.forEachPInternal`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2140`                         |
|  +2.1% | +1.07ms | 31.8% → 31.7% |   49.6ms → 50.7ms |     746 → 714 | `runtime.forEachP`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2111`                         |
| +27.7% | +0.77ms |   1.8% → 2.2% |     2.8ms → 3.5ms |      92 → 105 | `runtime.resetspinning`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4021`                         |
| +10.8% | +0.57ms |   3.4% → 3.7% |     5.3ms → 5.9ms |     255 → 280 | `runtime.wakep`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3212`                         |
|  +8.6% | +0.43ms |   3.2% → 3.4% |     5.0ms → 5.5ms |     240 → 255 | `runtime.stopTheWorldWithSema`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1628`                         |
|  +2.5% | +0.41ms |         10.4% |   16.2ms → 16.6ms |     682 → 741 | `runtime._LostContendedRuntimeLock`    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:5741`                         |
| +29.2% | +0.26ms |   0.6% → 0.7% |     0.9ms → 1.1ms |     167 → 215 | `internal/runtime/maps.newTable`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:73`            |
| +18.0% | +0.23ms |   0.8% → 0.9% |     1.3ms → 1.5ms |     233 → 275 | `runtime.mapassign_faststr`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/runtime_faststr.go:263` |
| +18.1% | +0.22ms |   0.8% → 0.9% |     1.2ms → 1.5ms |     218 → 263 | `runtime.mallocgcSmallScanHeader`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1594`                       |
| +25.5% | +0.22ms |   0.6% → 0.7% |     0.9ms → 1.1ms |     163 → 204 | `internal/runtime/maps.(*table).reset` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/runtime/maps/table.go:101`           |
| +15.4% | +0.19ms |   0.8% → 0.9% |     1.3ms → 1.5ms |     229 → 264 | `runtime.newarray`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:2199`                       |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |            Time | Contentions | Function                                        | Location                                                                                          |
| ------: | ------: | ------------: | --------------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -13.9% | -1.79ms |   8.3% → 6.9% | 12.9ms → 11.1ms |   403 → 376 | `runtime.mcall`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`      |
|  -11.9% | -1.47ms |   8.0% → 6.8% | 12.4ms → 10.9ms |   386 → 370 | `runtime.park_m`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`         |
|   -5.6% | -1.05ms | 12.0% → 11.1% | 18.8ms → 17.7ms |   449 → 416 | `runtime.gcMarkDone.forEachP.func5`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`         |
|  -29.6% | -0.32ms |   0.7% → 0.5% |   1.1ms → 0.8ms |   211 → 182 | `runtime.(*sweepLocked).sweep`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`      |
|  -38.3% | -0.28ms |   0.5% → 0.3% |   0.7ms → 0.4ms |   129 → 108 | `runtime.(*mcentral).uncacheSpan`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcentral.go:205`      |
|  -38.3% | -0.28ms |   0.5% → 0.3% |   0.7ms → 0.4ms |   129 → 108 | `runtime.(*mcache).releaseAll`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:290`        |
|  -29.4% | -0.28ms |   0.6% → 0.4% |   0.9ms → 0.7ms |     26 → 21 | `runtime.mstart1`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`         |
|  -29.4% | -0.28ms |   0.6% → 0.4% |   0.9ms → 0.7ms |     26 → 21 | `runtime.mstart0`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862`         |
|  -29.4% | -0.28ms |   0.6% → 0.4% |   0.9ms → 0.7ms |     26 → 21 | `runtime.mstart`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`      |
|  -29.1% | -0.27ms |   0.6% → 0.4% |   0.9ms → 0.7ms |     25 → 20 | `runtime.sysmon`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486`         |
|  -33.7% | -0.27ms |   0.5% → 0.3% |   0.8ms → 0.5ms |   121 → 120 | `runtime.freeSpecial`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`        |
|  -30.2% | -0.25ms |   0.5% → 0.4% |   0.8ms → 0.6ms |     20 → 16 | `runtime.incidlelocked`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6355`         |
|  -30.2% | -0.25ms |   0.5% → 0.4% |   0.8ms → 0.6ms |     20 → 16 | `runtime.retake`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6630`         |
|  -44.9% | -0.24ms |   0.3% → 0.2% |   0.5ms → 0.3ms |     49 → 33 | `runtime.mallocgcLarge`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1687`       |
| removed | -0.24ms |   0.2% → 0.0% |     0.2ms → 0ms |       7 → 0 | `runtime.gosched_m`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349`         |
|  -87.6% | -0.21ms |  0.2% → <0.1% |  0.2ms → 30.2µs |      15 → 9 | `runtime.mProf_Free`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:469`         |
|  -36.2% | -0.21ms |   0.4% → 0.2% |   0.6ms → 0.4ms |          67 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|  -25.3% | -0.20ms |   0.5% → 0.4% |   0.8ms → 0.6ms |   137 → 122 | `runtime.acquirepNoTrace`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6274`         |
|  -25.3% | -0.20ms |   0.5% → 0.4% |   0.8ms → 0.6ms |   137 → 122 | `runtime.acquirep`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6259`         |
|  -33.9% | -0.19ms |   0.4% → 0.2% |   0.6ms → 0.4ms |     58 → 40 | `runtime.growslice`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`         |

##### Standard library

|  Change |   Delta |            % |            Time | Contentions | Function                                        | Location                                                                                          |
| ------: | ------: | -----------: | --------------: | ----------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -13.9% | -1.79ms |  8.3% → 6.9% | 12.9ms → 11.1ms |   403 → 376 | `runtime.mcall`                                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:302`      |
|  -11.9% | -1.47ms |  8.0% → 6.8% | 12.4ms → 10.9ms |   386 → 370 | `runtime.park_m`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4253`         |
|  -38.3% | -0.28ms |  0.5% → 0.3% |   0.7ms → 0.4ms |   129 → 108 | `runtime.(*mcentral).uncacheSpan`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcentral.go:205`      |
|  -38.3% | -0.28ms |  0.5% → 0.3% |   0.7ms → 0.4ms |   129 → 108 | `runtime.(*mcache).releaseAll`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:290`        |
|  -29.4% | -0.28ms |  0.6% → 0.4% |   0.9ms → 0.7ms |     26 → 21 | `runtime.mstart1`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1904`         |
|  -29.4% | -0.28ms |  0.6% → 0.4% |   0.9ms → 0.7ms |     26 → 21 | `runtime.mstart0`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:1862`         |
|  -29.4% | -0.28ms |  0.6% → 0.4% |   0.9ms → 0.7ms |     26 → 21 | `runtime.mstart`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:258`      |
|  -29.1% | -0.27ms |  0.6% → 0.4% |   0.9ms → 0.7ms |     25 → 20 | `runtime.sysmon`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6486`         |
|  -33.7% | -0.27ms |  0.5% → 0.3% |   0.8ms → 0.5ms |   121 → 120 | `runtime.freeSpecial`                           | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:2786`        |
|  -30.2% | -0.25ms |  0.5% → 0.4% |   0.8ms → 0.6ms |     20 → 16 | `runtime.incidlelocked`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6355`         |
|  -30.2% | -0.25ms |  0.5% → 0.4% |   0.8ms → 0.6ms |     20 → 16 | `runtime.retake`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6630`         |
|  -44.9% | -0.24ms |  0.3% → 0.2% |   0.5ms → 0.3ms |     49 → 33 | `runtime.mallocgcLarge`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/malloc.go:1687`       |
| removed | -0.24ms |  0.2% → 0.0% |     0.2ms → 0ms |       7 → 0 | `runtime.gosched_m`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:4349`         |
|  -87.6% | -0.21ms | 0.2% → <0.1% |  0.2ms → 30.2µs |      15 → 9 | `runtime.mProf_Free`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mprof.go:469`         |
|  -36.2% | -0.21ms |  0.4% → 0.2% |   0.6ms → 0.4ms |          67 | `encoding/json.(*decodeState).literalInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1129` |
|  -25.3% | -0.20ms |  0.5% → 0.4% |   0.8ms → 0.6ms |   137 → 122 | `runtime.acquirepNoTrace`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6274`         |
|  -25.3% | -0.20ms |  0.5% → 0.4% |   0.8ms → 0.6ms |   137 → 122 | `runtime.acquirep`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:6259`         |
|  -33.9% | -0.19ms |  0.4% → 0.2% |   0.6ms → 0.4ms |     58 → 40 | `runtime.growslice`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/slice.go:178`         |
|  -23.7% | -0.18ms |  0.5% → 0.4% |   0.8ms → 0.6ms |   137 → 123 | `runtime.(*mcache).prepareForSweep`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mcache.go:350`        |
|  -11.0% | -0.16ms |  0.9% → 0.8% |   1.5ms → 1.3ms |   197 → 192 | `encoding/json.Marshal`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`  |

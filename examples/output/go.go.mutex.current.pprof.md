# Contention profile

Blocked 159.9ms over 4,990 samples (32.0µs per sample).

| Category         |      % |    Time | Samples |
| ---------------- | -----: | ------: | ------: |
| Standard library | 100.0% | 159.9ms |   4,990 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |   Time | Samples | Function                                               | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 34.6% | 55.3ms |     853 | `runtime.gcBgMarkWorker`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
| 34.4% | 55.0ms |     827 | `runtime.gcMarkDone`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
| 20.6% | 33.0ms |     298 | `runtime.gcMarkTermination.forEachP.func7`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 20.6% | 33.0ms |     298 | `runtime.gcMarkTermination`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`         |
| 11.1% | 17.7ms |     416 | `runtime.gcMarkDone.forEachP.func5`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
|  4.2% |  6.7ms |     501 | `runtime.gcstopm`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
|  2.7% |  4.3ms |     113 | `runtime.gcMarkDone.func2`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`         |
|  2.2% |  3.5ms |     582 | `main.workload.func1`                                  | `profile.go:25`                                                                                  |
|  1.4% |  2.2ms |     390 | `encoding/json.Unmarshal`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  0.8% |  1.3ms |     192 | `encoding/json.Marshal`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  0.7% |  1.1ms |     142 | `runtime.gcStart.func2`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`          |
|  0.7% |  1.1ms |     142 | `runtime.gcStart`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`          |
|  0.5% |  0.8ms |     182 | `runtime.(*sweepLocked).sweep`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`     |
|  0.2% |  0.3ms |      26 | `runtime.gcDrain`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`     |
|  0.2% |  0.3ms |      26 | `runtime.gcBgMarkWorker.func2`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`         |
|  0.1% |  0.2ms |      57 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`       |
|  0.1% |  0.2ms |      14 | `runtime.gcDrainMarkWorkerDedicated`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`     |
|  0.1% |  0.1ms |      12 | `runtime.gcDrainMarkWorkerIdle`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`     |
|  0.1% |  0.1ms |      32 | `runtime.sweepone`                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`     |
|  0.1% |  0.1ms |      32 | `runtime.bgsweep`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|     % |   Time | Samples | Callee               | Location                                                                                 |
| ----: | -----: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 99.5% | 55.0ms |     827 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|     % |   Time | Samples | Callee                      | Location                                                                                 |
| ----: | -----: | ------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 59.9% | 33.0ms |     298 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344` |

##### `main.workload.func1` (`profile.go:25`)

|     % |  Time | Samples | Callee                    | Location                                                                                         |
| ----: | ----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 62.4% | 2.2ms |     390 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 37.6% | 1.3ms |     192 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

|     % |  Time | Samples | Callee                               | Location                                                                                     |
| ----: | ----: | ------: | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| 57.0% | 0.2ms |      14 | `runtime.gcDrainMarkWorkerDedicated` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173` |
| 43.0% | 0.1ms |      12 | `runtime.gcDrainMarkWorkerIdle`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.gcDrainMarkWorkerDedicated` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`)

|      % |  Time | Samples | Callee            | Location                                                                                     |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 0.2ms |      14 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcDrainMarkWorkerIdle` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

|      % |  Time | Samples | Callee            | Location                                                                                     |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 0.1ms |      12 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.sweepone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`)

|      % |  Time | Samples | Callee                         | Location                                                                                     |
| -----: | ----: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% | 0.1ms |      32 | `runtime.(*sweepLocked).sweep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505` |

##### `runtime.bgsweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`)

|      % |  Time | Samples | Callee             | Location                                                                                     |
| -----: | ----: | ------: | ------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% | 0.1ms |      32 | `runtime.sweepone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame. `…` stands for frames the entry filter hides.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.6% | 32.9ms |     297 | `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) ← … ← `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                        |
| 11.1% | 17.7ms |     416 | `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) ← … ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                    |
|  2.7% |  4.3ms |     113 | `runtime.gcMarkDone.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`) ← … ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.8% |  1.3ms |     267 | `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.5% |  0.8ms |     129 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% |  0.7ms |      91 | `runtime.gcStart.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`) ← … ← `runtime.gcStart` (733) ← … ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                               |
|  0.3% |  0.4ms |      51 | `runtime.gcStart.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`) ← … ← `runtime.gcStart` (733) ← … ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                 |
|  0.2% |  0.3ms |      49 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |  0.2ms |      46 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)                                                                                                                                                                                                |
|  0.1% |  0.2ms |      14 | `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                           |
|  0.1% |  0.1ms |      32 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                 |
|  0.1% |  0.1ms |      12 | `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                |
| <0.1% |  0.1ms |      26 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% | 49.6µs |       1 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                         |
| <0.1% | 35.8µs |       9 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                   |
| <0.1% | 21.1µs |       3 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                               |
| <0.1% | 17.8µs |       2 | `runtime.gcDrainN` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1392`) ← `runtime.gcAssistAlloc1` (711) ← `runtime.gcAssistAlloc.func2` (638) ← … ← `runtime.gcAssistAlloc` (499) ← … ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                    |
| <0.1% | 12.4µs |       1 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcMarkTermination.func4` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1545`) ← … ← `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) ← … ← `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750) |
| <0.1% |  6.3µs |       3 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                               |
| <0.1% |  3.7µs |       7 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`)                                                                                                                                                                                                                                                                                                                    |

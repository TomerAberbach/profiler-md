# Contention profile

Blocked 155.8ms over 5,028 samples (31.0µs per sample).

| Category |      % |    Time | Samples |
| -------- | -----: | ------: | ------: |
| stdlib   | 100.0% | 155.8ms |   5,028 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |   Time | Samples | Function                                               | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 34.4% | 53.6ms |     858 | `runtime.gcBgMarkWorker`                               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
| 34.3% | 53.4ms |     843 | `runtime.gcMarkDone`                                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
| 19.8% | 30.8ms |     297 | `runtime.gcMarkTermination.forEachP.func7`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
| 19.8% | 30.8ms |     297 | `runtime.gcMarkTermination`                            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`         |
| 12.0% | 18.8ms |     449 | `runtime.gcMarkDone.forEachP.func5`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
|  3.7% |  5.8ms |     491 | `runtime.gcstopm`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
|  2.4% |  3.8ms |      97 | `runtime.gcMarkDone.func2`                             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`         |
|  2.3% |  3.6ms |     546 | `main.workload.func1`                                  | `profile.go:25`                                                                                  |
|  1.3% |  2.1ms |     349 | `encoding/json.Unmarshal`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  0.9% |  1.5ms |     197 | `encoding/json.Marshal`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  0.8% |  1.2ms |     143 | `runtime.gcStart.func2`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`          |
|  0.8% |  1.2ms |     143 | `runtime.gcStart`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`          |
|  0.7% |  1.1ms |     211 | `runtime.(*sweepLocked).sweep`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`     |
|  0.2% |  0.3ms |      88 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`       |
|  0.1% |  0.2ms |      31 | `runtime.sweepone`                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`     |
|  0.1% |  0.2ms |      30 | `runtime.bgsweep`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`     |
|  0.1% |  0.1ms |      15 | `runtime.gcDrain`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`     |
|  0.1% |  0.1ms |      15 | `runtime.gcBgMarkWorker.func2`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`         |
|  0.1% |  0.1ms |      10 | `runtime.gcDrainMarkWorkerIdle`                        | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`     |
| <0.1% | 31.8µs |       5 | `runtime.gcDrainMarkWorkerDedicated`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runtime.gcBgMarkWorker` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|     % |   Time | Samples | Callee               | Location                                                                                 |
| ----: | -----: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 99.8% | 53.4ms |     843 | `runtime.gcMarkDone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|     % |   Time | Samples | Callee                      | Location                                                                                 |
| ----: | -----: | ------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 57.7% | 30.8ms |     297 | `runtime.gcMarkTermination` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344` |

##### `main.workload.func1` (`profile.go:25`)

|     % |  Time | Samples | Callee                    | Location                                                                                         |
| ----: | ----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| 58.7% | 2.1ms |     349 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 41.3% | 1.5ms |     197 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.sweepone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`)

|      % |  Time | Samples | Callee                         | Location                                                                                     |
| -----: | ----: | ------: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% | 0.2ms |      31 | `runtime.(*sweepLocked).sweep` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505` |

##### `runtime.bgsweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`)

|      % |  Time | Samples | Callee             | Location                                                                                     |
| -----: | ----: | ------: | ------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% | 0.2ms |      30 | `runtime.sweepone` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359` |

##### `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

|     % |   Time | Samples | Callee                               | Location                                                                                     |
| ----: | -----: | ------: | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| 74.2% |  0.1ms |      10 | `runtime.gcDrainMarkWorkerIdle`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |
| 25.8% | 31.8µs |       5 | `runtime.gcDrainMarkWorkerDedicated` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173` |

##### `runtime.gcDrainMarkWorkerIdle` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

|      % |  Time | Samples | Callee            | Location                                                                                     |
| -----: | ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 0.1ms |      10 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcDrainMarkWorkerDedicated` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`)

|      % |   Time | Samples | Callee            | Location                                                                                     |
| -----: | -----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 31.8µs |       5 | `runtime.gcDrain` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame. `…` stands for frames the entry filter hides.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% | 30.8ms |     296 | `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) ← … ← `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                 |
| 12.0% | 18.8ms |     449 | `runtime.gcMarkDone.forEachP.func5` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) ← … ← `runtime.gcMarkDone` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                             |
|  2.4% |  3.8ms |      97 | `runtime.gcMarkDone.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`) ← … ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                           |
|  0.8% |  1.3ms |     229 | `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                              |
|  0.5% |  0.8ms |     121 | `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                                                                                                                                                                |
|  0.4% |  0.6ms |      65 | `runtime.gcStart.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`) ← … ← `runtime.gcStart` (733) ← … ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                          |
|  0.4% |  0.6ms |      78 | `runtime.gcStart.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`) ← … ← `runtime.gcStart` (733) ← … ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                        |
|  0.2% |  0.4ms |      41 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)                                                                                                                                                                                                                                                                   |
|  0.1% |  0.2ms |      54 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcstopm` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)                                                                                                         |
|  0.1% |  0.2ms |      28 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |  0.2ms |      41 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                          |
|  0.1% |  0.1ms |      28 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`)                                                                                                                                                                                                                             |
|  0.1% |  0.1ms |      10 | `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                         |
| <0.1% | 31.8µs |       5 | `runtime.gcDrain` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                    |
| <0.1% | 21.6µs |       5 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                                                                                                                                                                            |
| <0.1% | 14.1µs |       5 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Marshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`profile.go:25`)                                                  |
| <0.1% | 12.0µs |       1 | `runtime.gcDrainN` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1392`) ← `runtime.gcAssistAlloc1` (711) ← `runtime.gcAssistAlloc.func2` (638) ← … ← `runtime.gcAssistAlloc` (499) ← … ← `encoding/json.Unmarshal` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`profile.go:25`)                                                                                                           |
| <0.1% |  6.8µs |       1 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func3` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                        |
| <0.1% |  6.8µs |       1 | `runtime.gcMarkTermination.func4.1` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1548`) ← `runtime.gcMarkTermination.func4` (1545) ← … ← `runtime.gcMarkTermination.forEachP.func7` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) ← … ← `runtime.gcMarkTermination` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750) |
| <0.1% |  4.1µs |       1 | `runtime.(*sweepLocked).sweep` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← … ← `runtime/pprof.(*Profile).WriteTo` (`/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`) ← `main.writeProfile` (`profile.go:46`) ← `main.main` (61)                                                                                                                                                      |

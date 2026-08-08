# CPU profile

Took 5.39s over 539 samples (10.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| stdlib            | 99.1% |  5.34s |     534 |
| garbage collector |  0.6% | 30.0ms |       3 |
| ours              |  0.4% | 20.0ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                 | Location                                                                                                |
| ---: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| 0.2% | 10.0ms |       1 | `runtime.gcDrain`        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`             |
| 0.2% | 10.0ms |       1 | `runtime.gcBgMarkWorker` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`                 |
| 0.2% | 10.0ms |       1 | `runtime.gcstopm`        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`                |
| 0.2% | 10.0ms |       1 | `cmpbody`                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
| 0.2% | 10.0ms |       1 | `aeshashbody`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`             |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|      % |   Time | Samples | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1350` |

##### `runtime.gcBgMarkWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|      % |   Time | Samples | Location                                                                                |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1845` |

##### `runtime.gcstopm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|      % |   Time | Samples | Location                                                                                 |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296` |

##### `cmpbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`)

|      % |   Time | Samples | Location                                                                                                |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:92` |

##### `aeshashbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`)

|      % |   Time | Samples | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:797` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|      % |   Time | Samples | Caller                          | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.gcDrainMarkWorkerIdle` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                   | Location                                                                                                |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| 16.0% | 860.0ms |      86 | `main.workload.func1`                      | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`                  |
| 12.1% | 650.0ms |      65 | `encoding/json.Unmarshal`                  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`         |
|  7.8% | 420.0ms |      42 | `runtime.gcstopm`                          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`                |
|  7.1% | 380.0ms |      38 | `runtime.gcDrain`                          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`             |
|  7.1% | 380.0ms |      38 | `runtime.gcBgMarkWorker.func2`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`                 |
|  5.2% | 280.0ms |      28 | `runtime.gcBgMarkWorker`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`                 |
|  4.3% | 230.0ms |      23 | `runtime.gcDrainMarkWorkerDedicated`       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`             |
|  3.9% | 210.0ms |      21 | `encoding/json.Marshal`                    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`         |
|  2.8% | 150.0ms |      15 | `runtime.gcDrainMarkWorkerIdle`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`             |
|  2.6% | 140.0ms |      14 | `runtime.(*sweepLocked).sweep`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`             |
|  2.4% | 130.0ms |      13 | `runtime.gcStart.func2`                    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`                  |
|  1.3% |  70.0ms |       7 | `runtime.sweepone`                         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`             |
|  1.3% |  70.0ms |       7 | `runtime.bgsweep`                          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`             |
|  1.1% |  60.0ms |       6 | `runtime.wbBufFlush`                       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`               |
|  0.7% |  40.0ms |       4 | `runtime.gcMarkDone.forEachP.func5`        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`                |
|  0.6% |  30.0ms |       3 | `runtime.gcMarkTermination.forEachP.func7` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`                |
|  0.2% |  10.0ms |       1 | `cmpbody`                                  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
|  0.2% |  10.0ms |       1 | `runtime.gcMarkDone.func2`                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`                 |
|  0.2% |  10.0ms |       1 | `runtime.gcMarkTermination`                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`                 |
|  0.2% |  10.0ms |       1 | `runtime.gcMarkDone`                       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`                 |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)

|     % |    Time | Samples | Callee                    | Location                                                                                        |
| ----: | ------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
| 75.6% | 650.0ms |      65 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 24.4% | 210.0ms |      21 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|    % |   Time | Samples | Callee               | Location                                                                                  |
| ---: | -----: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 5.3% | 20.0ms |       2 | `runtime.wbBufFlush` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166` |

##### `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

|     % |    Time | Samples | Callee                               | Location                                                                                    |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| 60.5% | 230.0ms |      23 | `runtime.gcDrainMarkWorkerDedicated` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173` |
| 39.5% | 150.0ms |      15 | `runtime.gcDrainMarkWorkerIdle`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.gcBgMarkWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|    % |   Time | Samples | Callee               | Location                                                                                |
| ---: | -----: | ------: | -------------------- | --------------------------------------------------------------------------------------- |
| 3.6% | 10.0ms |       1 | `runtime.gcMarkDone` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015` |

##### `runtime.gcDrainMarkWorkerDedicated` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`)

|      % |    Time | Samples | Callee            | Location                                                                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 230.0ms |      23 | `runtime.gcDrain` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcDrainMarkWorkerIdle` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

|      % |    Time | Samples | Callee            | Location                                                                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 150.0ms |      15 | `runtime.gcDrain` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.sweepone` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`)

|      % |   Time | Samples | Callee                         | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `runtime.(*sweepLocked).sweep` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505` |

##### `runtime.bgsweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`)

|      % |   Time | Samples | Callee             | Location                                                                                    |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `runtime.sweepone` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359` |

##### `runtime.gcMarkDone` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`)

|      % |   Time | Samples | Callee                      | Location                                                                                |
| -----: | -----: | ------: | --------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.gcMarkTermination` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.8% | 580.0ms |      58 | `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                                                                                                        |
|  3.0% | 160.0ms |      16 | `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                                                                                                          |
|  2.4% | 130.0ms |      13 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                      |
|  2.0% | 110.0ms |      11 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                           |
|  1.7% |  90.0ms |       9 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)                                                                                                                                                                                                                                                                            |
|  1.3% |  70.0ms |       7 | `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.9% |  50.0ms |       5 | `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                     |
|  0.6% |  30.0ms |       3 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← … ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                   |
|  0.6% |  30.0ms |       3 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)                                                                                                                                                                                                                                                                                 |
|  0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                        |
|  0.2% |  10.0ms |       1 | `cmpbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35`) ← … ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                |
|  0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                   |
|  0.2% |  10.0ms |       1 | `runtime.gcMarkTermination` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`) ← `runtime.gcMarkDone` (1015) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  10.0ms |       1 | `aeshashbody` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`) ← … ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                      |
|  0.2% |  10.0ms |       1 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcMarkTermination.func4` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1545`) ← … ← `runtime.gcMarkTermination.forEachP.func7` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) |
|  0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `gcWriteBarrier` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`) ← … ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                               |
|  0.2% |  10.0ms |       1 | `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                       |
|  0.2% |  10.0ms |       1 | `runtime.gcDrainN` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1392`) ← `runtime.gcAssistAlloc1` (711) ← `runtime.gcAssistAlloc.func2` (638)                                                                                                                                                                                                                                                                                                                                                                             |

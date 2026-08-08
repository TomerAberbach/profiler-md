# CPU profile

Took 5.63s over 563 samples (10.0ms per sample).

| Category          |     % |   Time | Samples |
| ----------------- | ----: | -----: | ------: |
| Standard library  | 99.1% |  5.58s |     558 |
| Garbage collector |  0.7% | 40.0ms |       4 |
| Ours              |  0.2% | 10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                    | Location                                                                                     |
| ---: | -----: | ------: | --------------------------- | -------------------------------------------------------------------------------------------- |
| 0.2% | 10.0ms |       1 | `runtime.gcDrain`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`  |
| 0.2% | 10.0ms |       1 | `runtime.gcstopm`           | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`     |
| 0.2% | 10.0ms |       1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144` |
| 0.2% | 10.0ms |       1 | `runtime.gcBeginWork`       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`      |
| 0.2% | 10.0ms |       1 | `runtime.gcFlushBgCredit`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`   |

#### Categories

##### Garbage collector

|    % |   Time | Samples | Function                  | Location                                                                                    |
| ---: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------- |
| 0.2% | 10.0ms |       1 | `runtime.gcDrain`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |
| 0.2% | 10.0ms |       1 | `runtime.gcstopm`         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`    |
| 0.2% | 10.0ms |       1 | `runtime.gcBeginWork`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`     |
| 0.2% | 10.0ms |       1 | `runtime.gcFlushBgCredit` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`  |

##### Ours

|    % |   Time | Samples | Function                    | Location                                                                                     |
| ---: | -----: | ------: | --------------------------- | -------------------------------------------------------------------------------------------- |
| 0.2% | 10.0ms |       1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|      % |   Time | Samples | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1352` |

##### `runtime.gcstopm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)

|      % |   Time | Samples | Location                                                                                 |
| -----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3310` |

##### `gosave_systemstack_switch` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`)

|      % |   Time | Samples | Location                                                                                     |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1156` |

##### `runtime.gcBeginWork` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`)

|      % |   Time | Samples | Location                                                                                |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1934` |

##### `runtime.gcFlushBgCredit` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`)

|      % |   Time | Samples | Location                                                                                   |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 10.0ms |       1 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:842` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|      % |   Time | Samples | Caller                          | Location                                                                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.gcDrainMarkWorkerIdle` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.gcBeginWork` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`)

|      % |   Time | Samples | Caller                   | Location                                                                                |
| -----: | -----: | ------: | ------------------------ | --------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.gcBgMarkWorker` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750` |

##### `runtime.gcFlushBgCredit` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`)

|      % |   Time | Samples | Caller            | Location                                                                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.gcDrain` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                               | Location                                                                                        |
| ----: | ------: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 14.0% | 790.0ms |      79 | `main.workload.func1`                                  | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`          |
| 10.7% | 600.0ms |      60 | `encoding/json.Unmarshal`                              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  9.1% | 510.0ms |      51 | `runtime.gcDrain`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`     |
|  9.1% | 510.0ms |      51 | `runtime.gcBgMarkWorker.func2`                         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`         |
|  7.1% | 400.0ms |      40 | `runtime.gcstopm`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
|  5.7% | 320.0ms |      32 | `runtime.gcDrainMarkWorkerDedicated`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`     |
|  4.3% | 240.0ms |      24 | `runtime.gcBgMarkWorker`                               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
|  4.1% | 230.0ms |      23 | `runtime.(*sweepLocked).sweep`                         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`     |
|  3.4% | 190.0ms |      19 | `encoding/json.Marshal`                                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  3.4% | 190.0ms |      19 | `runtime.gcDrainMarkWorkerIdle`                        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`     |
|  2.3% | 130.0ms |      13 | `runtime.gcStart.func2`                                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`          |
|  2.1% | 120.0ms |      12 | `runtime.sweepone`                                     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`     |
|  2.1% | 120.0ms |      12 | `runtime.bgsweep`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`     |
|  1.2% |  70.0ms |       7 | `runtime.gcMarkDone.forEachP.func5`                    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
|  0.7% |  40.0ms |       4 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`       |
|  0.5% |  30.0ms |       3 | `runtime.wbBufFlush`                                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`       |
|  0.5% |  30.0ms |       3 | `runtime.gcMarkTermination.forEachP.func7`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
|  0.2% |  10.0ms |       1 | `gosave_systemstack_switch`                            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144`    |
|  0.2% |  10.0ms |       1 | `gcWriteBarrier`                                       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`    |
|  0.2% |  10.0ms |       1 | `runtime.gcStart`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`          |

#### Categories

##### Garbage collector

|    % |    Time | Samples | Function                                               | Location                                                                                    |
| ---: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 9.1% | 510.0ms |      51 | `runtime.gcDrain`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |
| 9.1% | 510.0ms |      51 | `runtime.gcBgMarkWorker.func2`                         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`     |
| 7.1% | 400.0ms |      40 | `runtime.gcstopm`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`    |
| 5.7% | 320.0ms |      32 | `runtime.gcDrainMarkWorkerDedicated`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173` |
| 4.3% | 240.0ms |      24 | `runtime.gcBgMarkWorker`                               | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`     |
| 4.1% | 230.0ms |      23 | `runtime.(*sweepLocked).sweep`                         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505` |
| 3.4% | 190.0ms |      19 | `runtime.gcDrainMarkWorkerIdle`                        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |
| 2.3% | 130.0ms |      13 | `runtime.gcStart.func2`                                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`      |
| 2.1% | 120.0ms |      12 | `runtime.sweepone`                                     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359` |
| 2.1% | 120.0ms |      12 | `runtime.bgsweep`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272` |
| 1.2% |  70.0ms |       7 | `runtime.gcMarkDone.forEachP.func5`                    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`    |
| 0.7% |  40.0ms |       4 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`   |
| 0.5% |  30.0ms |       3 | `runtime.gcMarkTermination.forEachP.func7`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`    |
| 0.2% |  10.0ms |       1 | `runtime.gcStart`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`      |
| 0.2% |  10.0ms |       1 | `runtime.gcBeginWork`                                  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`     |
| 0.2% |  10.0ms |       1 | `runtime.gcMarkTermination.func4`                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1545`     |
| 0.2% |  10.0ms |       1 | `runtime.gcFlushBgCredit`                              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`  |

##### Ours

|     % |    Time | Samples | Function                    | Location                                                                                     |
| ----: | ------: | ------: | --------------------------- | -------------------------------------------------------------------------------------------- |
| 14.0% | 790.0ms |      79 | `main.workload.func1`       | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`       |
|  0.2% |  10.0ms |       1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144` |
|  0.2% |  10.0ms |       1 | `gcWriteBarrier`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)

|     % |    Time | Samples | Callee                    | Location                                                                                        |
| ----: | ------: | ------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
| 75.9% | 600.0ms |      60 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
| 24.1% | 190.0ms |      19 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`)

|    % |   Time | Samples | Callee                    | Location                                                                                   |
| ---: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------ |
| 3.9% | 20.0ms |       2 | `runtime.wbBufFlush`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`  |
| 2.0% | 10.0ms |       1 | `runtime.gcFlushBgCredit` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836` |

##### `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)

|     % |    Time | Samples | Callee                               | Location                                                                                    |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| 62.7% | 320.0ms |      32 | `runtime.gcDrainMarkWorkerDedicated` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173` |
| 37.3% | 190.0ms |      19 | `runtime.gcDrainMarkWorkerIdle`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |

##### `runtime.gcDrainMarkWorkerDedicated` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`)

|      % |    Time | Samples | Callee            | Location                                                                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 320.0ms |      32 | `runtime.gcDrain` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.gcBgMarkWorker` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`)

|    % |   Time | Samples | Callee                | Location                                                                                |
| ---: | -----: | ------: | --------------------- | --------------------------------------------------------------------------------------- |
| 4.2% | 10.0ms |       1 | `runtime.gcBeginWork` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933` |

##### `runtime.gcDrainMarkWorkerIdle` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`)

|      % |    Time | Samples | Callee            | Location                                                                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 190.0ms |      19 | `runtime.gcDrain` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |

##### `runtime.sweepone` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`)

|      % |    Time | Samples | Callee                         | Location                                                                                    |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 120.0ms |      12 | `runtime.(*sweepLocked).sweep` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505` |

##### `runtime.bgsweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`)

|      % |    Time | Samples | Callee             | Location                                                                                    |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% | 120.0ms |      12 | `runtime.sweepone` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359` |

##### `gcWriteBarrier` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`)

|      % |   Time | Samples | Callee               | Location                                                                                  |
| -----: | -----: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `runtime.wbBufFlush` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.4% | 530.0ms |      53 | `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                                                                                                        |
| 2.8% | 160.0ms |      16 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)                                                                                                                                                                                                                                                                            |
| 2.8% | 160.0ms |      16 | `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                                                                                                                                          |
| 2.3% | 130.0ms |      13 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                      |
| 2.1% | 120.0ms |      12 | `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← `runtime.sweepone` (359) ← `runtime.bgsweep` (272)                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.1% | 120.0ms |      12 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`)                                                                                                                                                                                                                                                                                 |
| 1.2% |  70.0ms |       7 | `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerIdle` (1167) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                           |
| 1.1% |  60.0ms |       6 | `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                     |
| 0.4% |  20.0ms |       2 | `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                       |
| 0.4% |  20.0ms |       2 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `runtime.gcDrain` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                   |
| 0.2% |  10.0ms |       1 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`)                                                                                                                                                                                                                                                                               |
| 0.2% |  10.0ms |       1 | `runtime.wbBufFlush` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`) ← `gcWriteBarrier` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1475`) ← … ← `encoding/json.Unmarshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                               |
| 0.2% |  10.0ms |       1 | `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcstopm` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`)                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  10.0ms |       1 | `runtime.gcStart` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`) ← … ← `encoding/json.Marshal` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`) ← `main.workload.func1` (`Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`)                                                                                                                                                                                                         |
| 0.2% |  10.0ms |       1 | `runtime.gcBeginWork` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`) ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  10.0ms |       1 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`) ← … ← `runtime.(*sweepLocked).sweep` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`) ← … ← `runtime.gcMarkTermination.func4` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1545`) ← … ← `runtime.gcMarkTermination.forEachP.func7` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`) |
| 0.2% |  10.0ms |       1 | `runtime.gcFlushBgCredit` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`) ← `runtime.gcDrain` (1239) ← `runtime.gcDrainMarkWorkerDedicated` (1173) ← `runtime.gcBgMarkWorker.func2` (`nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`) ← … ← `runtime.gcBgMarkWorker` (1750)                                                                                                                                                                                                    |

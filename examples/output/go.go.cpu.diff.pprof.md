# CPU profile diff

Took 5.39s → 5.63s (+240.00ms, +4.5%) over 539 samples → 563 samples (10.0ms per sample).

| Category          | Change |     Delta |           % |            Time |   Samples |
| ----------------- | -----: | --------: | ----------: | --------------: | --------: |
| Standard library  |  +4.5% | +240.00ms |       99.1% |   5.34s → 5.58s | 534 → 558 |
| Garbage collector | +33.3% |  +10.00ms | 0.6% → 0.7% | 30.0ms → 40.0ms |     3 → 4 |
| Ours              | -50.0% |  -10.00ms | 0.4% → 0.2% | 20.0ms → 10.0ms |     2 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |           % |         Time | Samples | Function                    | Location                                                                                     |
| -----: | -------: | ----------: | -----------: | ------: | --------------------------- | -------------------------------------------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 0.2% | 0ms → 10.0ms |   0 → 1 | `gosave_systemstack_switch` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144` |
|    new | +10.00ms | 0.0% → 0.2% | 0ms → 10.0ms |   0 → 1 | `runtime.gcBeginWork`       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`      |
|    new | +10.00ms | 0.0% → 0.2% | 0ms → 10.0ms |   0 → 1 | `runtime.gcFlushBgCredit`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`   |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |         Time | Samples | Function                 | Location                                                                                                |
| ------: | -------: | ----------: | -----------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| removed | -10.00ms | 0.2% → 0.0% | 10.0ms → 0ms |   1 → 0 | `runtime.gcBgMarkWorker` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`                 |
| removed | -10.00ms | 0.2% → 0.0% | 10.0ms → 0ms |   1 → 0 | `cmpbody`                | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
| removed | -10.00ms | 0.2% → 0.0% | 10.0ms → 0ms |   1 → 0 | `aeshashbody`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`             |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |           % |              Time | Samples | Function                                               | Location                                                                                     |
| ------: | --------: | ----------: | ----------------: | ------: | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
|  +34.2% | +130.00ms | 7.1% → 9.1% | 380.0ms → 510.0ms | 38 → 51 | `runtime.gcDrain`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`  |
|  +34.2% | +130.00ms | 7.1% → 9.1% | 380.0ms → 510.0ms | 38 → 51 | `runtime.gcBgMarkWorker.func2`                         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`      |
|  +39.1% |  +90.00ms | 4.3% → 5.7% | 230.0ms → 320.0ms | 23 → 32 | `runtime.gcDrainMarkWorkerDedicated`                   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`  |
|  +64.3% |  +90.00ms | 2.6% → 4.1% | 140.0ms → 230.0ms | 14 → 23 | `runtime.(*sweepLocked).sweep`                         | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`  |
|  +71.4% |  +50.00ms | 1.3% → 2.1% |  70.0ms → 120.0ms |  7 → 12 | `runtime.sweepone`                                     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`  |
|  +71.4% |  +50.00ms | 1.3% → 2.1% |  70.0ms → 120.0ms |  7 → 12 | `runtime.bgsweep`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`  |
|  +26.7% |  +40.00ms | 2.8% → 3.4% | 150.0ms → 190.0ms | 15 → 19 | `runtime.gcDrainMarkWorkerIdle`                        | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`  |
|  +75.0% |  +30.00ms | 0.7% → 1.2% |   40.0ms → 70.0ms |   4 → 7 | `runtime.gcMarkDone.forEachP.func5`                    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`     |
| +300.0% |  +30.00ms | 0.2% → 0.7% |   10.0ms → 40.0ms |   1 → 4 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`    |
|     new |  +10.00ms | 0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `gosave_systemstack_switch`                            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:1144` |
|     new |  +10.00ms | 0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.gcStart`                                      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`       |
|     new |  +10.00ms | 0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.gcBeginWork`                                  | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1933`      |
|     new |  +10.00ms | 0.0% → 0.2% |      0ms → 10.0ms |   0 → 1 | `runtime.gcFlushBgCredit`                              | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:836`   |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Samples | Function                      | Location                                                                                                |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
|   -8.1% | -70.00ms | 16.0% → 14.0% | 860.0ms → 790.0ms | 86 → 79 | `main.workload.func1`         | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`                  |
|   -7.7% | -50.00ms | 12.1% → 10.7% | 650.0ms → 600.0ms | 65 → 60 | `encoding/json.Unmarshal`     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`         |
|  -14.3% | -40.00ms |   5.2% → 4.3% | 280.0ms → 240.0ms | 28 → 24 | `runtime.gcBgMarkWorker`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`                 |
|  -50.0% | -30.00ms |   1.1% → 0.5% |   60.0ms → 30.0ms |   6 → 3 | `runtime.wbBufFlush`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mwbbuf.go:166`               |
|   -4.8% | -20.00ms |   7.8% → 7.1% | 420.0ms → 400.0ms | 42 → 40 | `runtime.gcstopm`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`                |
|   -9.5% | -20.00ms |   3.9% → 3.4% | 210.0ms → 190.0ms | 21 → 19 | `encoding/json.Marshal`       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205`         |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `cmpbody`                     | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/internal/bytealg/compare_arm64.s:35` |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcMarkDone.func2`    | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`                 |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcMarkTermination`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`                 |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcMarkDone`          | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`                 |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `aeshashbody`                 | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/asm_arm64.s:762`             |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcStart.func4`       | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`                  |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcDrainN`            | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1392`             |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcAssistAlloc1`      | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:711`              |
| removed | -10.00ms |   0.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `runtime.gcAssistAlloc.func2` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:638`              |

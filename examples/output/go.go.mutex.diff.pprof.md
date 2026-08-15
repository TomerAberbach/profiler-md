# Contention profile diff

Blocked 155.8ms → 159.9ms (+4.09ms, +2.6%) over 5,028 contentions → 4,990 contentions (31.0µs → 32.0µs per contention).

| Category         | Change |   Delta |      % |              Time |   Contentions |
| ---------------- | -----: | ------: | -----: | ----------------: | ------------: |
| Standard library |  +2.6% | +4.09ms | 100.0% | 155.8ms → 159.9ms | 5,028 → 4,990 |

## Hottest functions

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|  Change |   Delta |             % |            Time | Contentions | Function                                   | Location                                                                                         |
| ------: | ------: | ------------: | --------------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|   +6.9% | +2.12ms | 19.8% → 20.6% | 30.8ms → 33.0ms |   297 → 298 | `runtime.gcMarkTermination.forEachP.func7` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
|   +6.9% | +2.12ms | 19.8% → 20.6% | 30.8ms → 33.0ms |   297 → 298 | `runtime.gcMarkTermination`                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1344`         |
|   +3.2% | +1.72ms | 34.4% → 34.6% | 53.6ms → 55.3ms |   858 → 853 | `runtime.gcBgMarkWorker`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
|   +2.9% | +1.57ms | 34.3% → 34.4% | 53.4ms → 55.0ms |   843 → 827 | `runtime.gcMarkDone`                       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
|  +15.4% | +0.90ms |   3.7% → 4.2% |   5.8ms → 6.7ms |   491 → 501 | `runtime.gcstopm`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:3296`        |
|  +13.3% | +0.51ms |   2.4% → 2.7% |   3.8ms → 4.3ms |    97 → 113 | `runtime.gcMarkDone.func2`                 | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1083`         |
| +116.5% | +0.14ms |   0.1% → 0.2% |   0.1ms → 0.3ms |     15 → 26 | `runtime.gcDrain`                          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`     |
| +116.5% | +0.14ms |   0.1% → 0.2% |   0.1ms → 0.3ms |     15 → 26 | `runtime.gcBgMarkWorker.func2`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`         |
| +379.0% | +0.12ms |  <0.1% → 0.1% |  31.8µs → 0.2ms |      5 → 14 | `runtime.gcDrainMarkWorkerDedicated`       | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1173`     |
|   +3.9% | +0.08ms |   1.3% → 1.4% |   2.1ms → 2.2ms |   349 → 390 | `encoding/json.Unmarshal`                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|  +25.4% | +0.02ms |          0.1% |           0.1ms |     10 → 12 | `runtime.gcDrainMarkWorkerIdle`            | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`     |
|  +83.9% | +0.01ms |         <0.1% |  6.8µs → 12.4µs |           1 | `runtime.gcMarkTermination.func4`          | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1545`         |
|  +41.4% | +0.01ms |         <0.1% | 12.6µs → 17.8µs |           2 | `runtime.gcDrainN`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1392`     |
|  +41.4% | +0.01ms |         <0.1% | 12.6µs → 17.8µs |           2 | `runtime.gcAssistAlloc1`                   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:711`      |
|  +41.4% | +0.01ms |         <0.1% | 12.6µs → 17.8µs |           2 | `runtime.gcAssistAlloc.func2`              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:638`      |
|  +41.4% | +0.01ms |         <0.1% | 12.6µs → 17.8µs |           2 | `runtime.gcAssistAlloc`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:499`      |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |            Time | Contentions | Function                                               | Location                                                                                         |
| ------: | ------: | ------------: | --------------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|   -5.6% | -1.05ms | 12.0% → 11.1% | 18.8ms → 17.7ms |   449 → 416 | `runtime.gcMarkDone.forEachP.func5`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/proc.go:2112`        |
|  -29.6% | -0.32ms |   0.7% → 0.5% |   1.1ms → 0.8ms |   211 → 182 | `runtime.(*sweepLocked).sweep`                         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:505`     |
|  -11.0% | -0.16ms |   0.9% → 0.8% |   1.5ms → 1.3ms |   197 → 192 | `encoding/json.Marshal`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|   -2.2% | -0.08ms |   2.3% → 2.2% |   3.6ms → 3.5ms |   546 → 582 | `main.workload.func1`                                  | `profile.go:25`                                                                                  |
|   -6.1% | -0.07ms |   0.8% → 0.7% |   1.2ms → 1.1ms |   143 → 142 | `runtime.gcStart.func2`                                | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:834`          |
|   -6.1% | -0.07ms |   0.8% → 0.7% |   1.2ms → 1.1ms |   143 → 142 | `runtime.gcStart`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:733`          |
|  -38.7% | -0.07ms |          0.1% |   0.2ms → 0.1ms |     31 → 32 | `runtime.sweepone`                                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:359`     |
|  -37.2% | -0.06ms |          0.1% |   0.2ms → 0.1ms |     30 → 32 | `runtime.bgsweep`                                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcsweep.go:272`     |
|  -21.0% | -0.06ms |   0.2% → 0.1% |   0.3ms → 0.2ms |     88 → 57 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func2` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`       |
| removed | -0.01ms |  <0.1% → 0.0% |     6.8µs → 0ms |       1 → 0 | `runtime.gcMarkTermination.func4.1`                    | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1548`         |
| removed | -4.08µs |  <0.1% → 0.0% |     4.1µs → 0ms |       1 → 0 | `runtime/pprof.(*Profile).WriteTo`                     | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/pprof/pprof.go:403`  |
| removed | -4.08µs |  <0.1% → 0.0% |     4.1µs → 0ms |       1 → 0 | `main.writeProfile`                                    | `profile.go:46`                                                                                  |
| removed | -4.08µs |  <0.1% → 0.0% |     4.1µs → 0ms |       1 → 0 | `main.main`                                            | `profile.go:61`                                                                                  |
|   -7.4% | -0.50µs |         <0.1% |   6.8µs → 6.3µs |       1 → 3 | `runtime.(*sweepLocked).sweep.(*mheap).freeSpan.func3` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mheap.go:1667`       |

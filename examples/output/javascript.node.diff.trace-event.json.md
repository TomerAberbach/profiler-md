# Trace diff

Recorded 42,533 → 42,414 events (-119, -0.3%) over 5.42s → 5.60s (+181.20ms, +3.3%).

| Category                 | Change |     Delta |             % |              Time |           Count |
| ------------------------ | -----: | --------: | ------------: | ----------------: | --------------: |
| Script                   |  +4.1% | +187.56ms | 84.4% → 85.0% |     4.58s → 4.77s | 12,865 → 12,940 |
| Garbage collection       | +11.5% | +197.83ms | 31.7% → 34.2% |     1.72s → 1.92s |   2,283 → 2,339 |
| Garbage collection pause |  +5.3% |  +37.05ms | 13.0% → 13.2% | 704.0ms → 741.0ms | 10,925 → 10,646 |
| I/O                      | -36.6% |  -43.11ms |   2.2% → 1.3% |  117.7ms → 74.5ms | 14,795 → 14,864 |
| Compilation              |  +5.3% |   +0.67ms |          0.2% |   12.6ms → 13.3ms |   1,580 → 1,540 |
| Other                    |  -4.7% |   -0.17ms |          0.1% |     3.6ms → 3.4ms |              85 |

## Threads

Threads with the largest change in time in spans. Threads run concurrently, so percentages can sum to more than 100%.

| Change |     Delta |             % |          Time |           Count | Thread                 |
| -----: | --------: | ------------: | ------------: | --------------: | ---------------------- |
| +11.5% | +197.64ms | 31.7% → 34.2% | 1.72s → 1.92s |   1,901 → 1,958 | `PlatformWorkerThread` |
|  +3.4% | +182.19ms |         99.9% | 5.42s → 5.60s | 40,500 → 40,324 | `JavaScriptMainThread` |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

#### Regressions

Thread spans with the largest increase in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |           Count |            Mean |             Max | Span                                           |
| ------: | --------: | ------------: | ----------------: | --------------: | --------------: | --------------: | ---------------------------------------------- |
|   +3.9% | +174.36ms | 82.0% → 82.5% |     4.45s → 4.62s |               1 |   4.45s → 4.62s |   4.45s → 4.62s | `RunMicrotasks`                                |
|  +12.5% |  +61.50ms |   9.1% → 9.9% | 492.5ms → 554.0ms |       195 → 201 |   2.5ms → 2.8ms |  8.6ms → 13.4ms | `V8.GC_BACKGROUND_UNPARK`                      |
|  +32.9% |  +59.02ms |   3.3% → 4.3% | 179.5ms → 238.5ms |         30 → 23 |  6.0ms → 10.4ms | 16.8ms → 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|   +6.6% |  +51.61ms | 14.4% → 14.9% | 782.2ms → 833.8ms |   1,391 → 1,413 |           0.6ms |   4.7ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  +11.2% |  +22.90ms |   3.8% → 4.1% | 204.8ms → 227.7ms |             348 |   0.6ms → 0.7ms |   1.5ms → 1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|   +7.6% |  +17.87ms |   4.3% → 4.5% | 235.6ms → 253.5ms |         82 → 88 |           2.9ms |   8.6ms → 7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|   +2.8% |  +10.25ms |          6.7% | 365.4ms → 375.7ms |       379 → 388 |           1.0ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  +15.7% |   +9.97ms |   1.2% → 1.3% |   63.5ms → 73.4ms |   2,730 → 2,757 | 23.2µs → 26.6µs |   0.3ms → 0.9ms | `V8.HandleInterrupts`                          |
|  +26.3% |   +7.20ms |   0.5% → 0.6% |   27.3ms → 34.5ms |          7 → 15 |   3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  +29.3% |   +1.83ms |          0.1% |     6.2ms → 8.1ms |             348 | 17.9µs → 23.1µs |   0.1ms → 1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`            |
|   +3.7% |   +1.81ms |          0.9% |   48.6ms → 50.4ms |   6,931 → 6,944 |   7.0µs → 7.3µs |           0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|   +8.1% |   +1.77ms |          0.4% |   21.9ms → 23.7ms |             348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  +34.5% |   +0.97ms |          0.1% |     2.8ms → 3.8ms |             348 |  8.1µs → 10.9µs |  38.0µs → 0.7ms | `V8.GCScavenger`                               |
|   +3.0% |   +0.92ms |          0.6% |   30.6ms → 31.5ms | 10,058 → 10,115 |   3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`                                 |
|   +8.9% |   +0.87ms |          0.2% |    9.8ms → 10.7ms |   2,718 → 2,735 |   3.6µs → 3.9µs | 49.0µs → 48.0µs | `V8.StackGuard`                                |
|   +5.3% |   +0.67ms |          0.2% |   12.6ms → 13.3ms |   1,580 → 1,540 |   8.0µs → 8.6µs |           0.1ms | `V8.DeoptimizeCode`                            |
|   +8.0% |   +0.56ms |          0.1% |     6.9ms → 7.5ms |       434 → 452 | 15.9µs → 16.5µs |   0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck`     |
|  +66.0% |   +0.49ms |         <0.1% |     0.7ms → 1.2ms |             348 |   2.1µs → 3.6µs |   0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`         |
|   +5.9% |   +0.45ms |          0.1% |     7.6ms → 8.1ms |             348 | 21.9µs → 23.2µs |           0.1ms | `V8.GC_SCAVENGER`                              |
| +113.5% |   +0.43ms |         <0.1% |     0.4ms → 0.8ms |         42 → 43 |  9.0µs → 18.7µs |   0.1ms → 0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`    |

##### Script

| Change |     Delta |             % |            Time |         Count |            Mean |             Max | Span                                       |
| -----: | --------: | ------------: | --------------: | ------------: | --------------: | --------------: | ------------------------------------------ |
|  +3.9% | +174.36ms | 82.0% → 82.5% |   4.45s → 4.62s |             1 |   4.45s → 4.62s |   4.45s → 4.62s | `RunMicrotasks`                            |
| +15.7% |   +9.97ms |   1.2% → 1.3% | 63.5ms → 73.4ms | 2,730 → 2,757 | 23.2µs → 26.6µs |   0.3ms → 0.9ms | `V8.HandleInterrupts`                      |
|  +3.7% |   +1.81ms |          0.9% | 48.6ms → 50.4ms | 6,931 → 6,944 |   7.0µs → 7.3µs |           0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  +8.9% |   +0.87ms |          0.2% |  9.8ms → 10.7ms | 2,718 → 2,735 |   3.6µs → 3.9µs | 49.0µs → 48.0µs | `V8.StackGuard`                            |
|  +8.0% |   +0.56ms |          0.1% |   6.9ms → 7.5ms |     434 → 452 | 15.9µs → 16.5µs |   0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|  Change |    Delta |             % |              Time |         Count |           Mean |             Max | Span                                            |
| ------: | -------: | ------------: | ----------------: | ------------: | -------------: | --------------: | ----------------------------------------------- |
|  +12.5% | +61.50ms |   9.1% → 9.9% | 492.5ms → 554.0ms |     195 → 201 |  2.5ms → 2.8ms |  8.6ms → 13.4ms | `V8.GC_BACKGROUND_UNPARK`                       |
|  +32.9% | +59.02ms |   3.3% → 4.3% | 179.5ms → 238.5ms |       30 → 23 | 6.0ms → 10.4ms | 16.8ms → 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|   +6.6% | +51.61ms | 14.4% → 14.9% | 782.2ms → 833.8ms | 1,391 → 1,413 |          0.6ms |   4.7ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|   +7.6% | +17.87ms |   4.3% → 4.5% | 235.6ms → 253.5ms |       82 → 88 |          2.9ms |   8.6ms → 7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                    |
|  +26.3% |  +7.20ms |   0.5% → 0.6% |   27.3ms → 34.5ms |        7 → 15 |  3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
| +113.5% |  +0.43ms |         <0.1% |     0.4ms → 0.8ms |       42 → 43 | 9.0µs → 18.7µs |   0.1ms → 0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
|   +8.0% |  +0.11ms |         <0.1% |     1.3ms → 1.4ms |       27 → 26 | 49.4µs → 0.1ms |           0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
|  +60.7% |  +0.05ms |         <0.1% |             0.1ms |             2 | 44.5µs → 0.1ms |  46.0µs → 0.1ms | `MarkCompactCollector::EvacuatePagesInParallel` |
|  +53.5% |  +0.05ms |         <0.1% |     0.1ms → 0.2ms |       42 → 43 |  2.4µs → 3.6µs |  5.0µs → 29.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| +305.9% |  +0.05ms |         <0.1% |    17.0µs → 0.1ms |         2 → 1 |  8.5µs → 0.1ms |   9.0µs → 0.1ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
|   +6.6% |  +0.03ms |         <0.1% |             0.5ms |     129 → 130 |  3.6µs → 3.8µs | 19.0µs → 25.0µs | `RememberedSetUpdatingItem::Process`            |
|   +9.9% |  +0.03ms |         <0.1% |             0.3ms |           348 |  0.8µs → 0.9µs |   5.0µs → 3.0µs | `Parallel scavenge started`                     |
|  +40.9% |  +0.01ms |         <0.1% |   22.0µs → 31.0µs |             8 |  2.8µs → 3.9µs |  6.0µs → 14.0µs | `ConcurrentMarking::RunMajor Preempted`         |
|  +70.0% |  +0.01ms |         <0.1% |   10.0µs → 17.0µs |             2 |  5.0µs → 8.5µs |  5.0µs → 11.0µs | `V8.GCHandleGCRequest`                          |
|  +38.5% |  +0.01ms |         <0.1% |   13.0µs → 18.0µs |             2 |  6.5µs → 9.0µs |  9.0µs → 12.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`      |
|     new |  +2.00µs |  0.0% → <0.1% |       0ms → 2.0µs |             2 |    0ms → 1.0µs |     0ms → 1.0µs | `ClearStringTableJob started`                   |
|  +33.3% |  +1.00µs |         <0.1% |     3.0µs → 4.0µs |             4 |  0.8µs → 1.0µs |           1.0µs | `Major concurrent marking started`              |

##### Garbage collection pause

|  Change |    Delta |           % |              Time |     Count |            Mean |             Max | Span                                                    |
| ------: | -------: | ----------: | ----------------: | --------: | --------------: | --------------: | ------------------------------------------------------- |
|  +11.2% | +22.90ms | 3.8% → 4.1% | 204.8ms → 227.7ms |       348 |   0.6ms → 0.7ms |   1.5ms → 1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                              |
|   +2.8% | +10.25ms |        6.7% | 365.4ms → 375.7ms | 379 → 388 |           1.0ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`                     |
|  +29.3% |  +1.83ms |        0.1% |     6.2ms → 8.1ms |       348 | 17.9µs → 23.1µs |   0.1ms → 1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`                     |
|   +8.1% |  +1.77ms |        0.4% |   21.9ms → 23.7ms |       348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`                        |
|  +34.5% |  +0.97ms |        0.1% |     2.8ms → 3.8ms |       348 |  8.1µs → 10.9µs |  38.0µs → 0.7ms | `V8.GCScavenger`                                        |
|  +66.0% |  +0.49ms |       <0.1% |     0.7ms → 1.2ms |       348 |   2.1µs → 3.6µs |   0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`                  |
|   +5.9% |  +0.45ms |        0.1% |     7.6ms → 8.1ms |       348 | 21.9µs → 23.2µs |           0.1ms | `V8.GC_SCAVENGER`                                       |
|   +5.5% |  +0.32ms |        0.1% |     5.8ms → 6.2ms |       348 | 16.8µs → 17.7µs |           0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`                   |
|  +16.5% |  +0.21ms |       <0.1% |     1.3ms → 1.5ms |       350 |   3.7µs → 4.3µs |   0.3ms → 0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`                         |
|  +54.9% |  +0.18ms |       <0.1% |     0.3ms → 0.5ms |         2 |   0.2ms → 0.3ms |   0.3ms → 0.4ms | `V8.GC_MC_INCREMENTAL_START`                            |
|  +25.5% |  +0.15ms |       <0.1% |     0.6ms → 0.7ms |         2 |   0.3ms → 0.4ms |   0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`        |
| +130.1% |  +0.13ms |       <0.1% |     0.1ms → 0.2ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_PROLOGUE`                            |
|  +37.2% |  +0.13ms |       <0.1% |     0.3ms → 0.5ms |         2 |           0.2ms |   0.2ms → 0.3ms | `V8.GC_MC_MARK`                                         |
|   +0.6% |  +0.11ms |        0.3% |   17.6ms → 17.7ms |       348 |           0.1ms |   1.3ms → 0.1ms | `MinorGC`                                               |
|  +51.6% |  +0.09ms |       <0.1% |     0.2ms → 0.3ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`          |
|  +34.5% |  +0.07ms |       <0.1% |     0.2ms → 0.3ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`              |
|   +9.9% |  +0.06ms |       <0.1% |             0.6ms |       348 |   1.6µs → 1.8µs | 14.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY` |
|   +6.4% |  +0.05ms |       <0.1% |             0.8ms |       350 |   2.2µs → 2.3µs | 11.0µs → 13.0µs | `V8.GC_HEAP_PROLOGUE`                                   |
|  +12.9% |  +0.04ms |       <0.1% |     0.3ms → 0.4ms |         4 |           0.1ms |           0.2ms | `V8.GC_MC_CLEAR_WEAK_REFERENCES`                        |
|  +14.3% |  +0.04ms |       <0.1% |             0.3ms |       350 |   0.8µs → 0.9µs |  5.0µs → 18.0µs | `V8.GC_HEAP_EXTERNAL_EPILOGUE`                          |

##### I/O

| Change |   Delta |     % |            Time |           Count |          Mean |             Max | Span            |
| -----: | ------: | ----: | --------------: | --------------: | ------------: | --------------: | --------------- |
|  +3.0% | +0.92ms |  0.6% | 30.6ms → 31.5ms | 10,058 → 10,115 | 3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`  |
|  +5.8% | +0.12ms | <0.1% |   2.1ms → 2.3ms |   1,121 → 1,124 | 1.9µs → 2.0µs | 22.0µs → 15.0µs | `fs.sync.fstat` |
| +68.4% | +0.04ms | <0.1% |           0.1ms |              18 | 3.2µs → 5.3µs |  7.0µs → 36.0µs | `fs.sync.lstat` |

#### Improvements

Thread spans with the largest decrease in time, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |           % |            Time |         Count |            Mean |             Max | Span                                                   |
| -----: | -------: | ----------: | --------------: | ------------: | --------------: | --------------: | ------------------------------------------------------ |
| -81.9% | -43.28ms | 1.0% → 0.2% |  52.8ms → 9.5ms | 1,122 → 1,125 |  47.1µs → 8.5µs |   6.3ms → 3.8ms | `fs.sync.read`                                         |
|  -4.5% |  -1.75ms |        0.7% | 38.9ms → 37.1ms |           348 |           0.1ms |   1.9ms → 1.2ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`              |
|  -2.5% |  -0.61ms |        0.4% | 23.9ms → 23.3ms | 1,122 → 1,125 | 21.3µs → 20.7µs |   0.3ms → 0.1ms | `fs.sync.open`                                         |
|  -7.8% |  -0.43ms |        0.1% |   5.5ms → 5.0ms |           353 | 15.5µs → 14.3µs |           0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                              |
| -51.7% |  -0.36ms |       <0.1% |   0.7ms → 0.3ms |       28 → 12 | 25.1µs → 28.3µs |   0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                                       |
|  -6.6% |  -0.32ms |        0.1% |   4.8ms → 4.5ms |     667 → 613 |   7.3µs → 7.4µs |   0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                                 |
| -76.6% |  -0.19ms |       <0.1% |   0.2ms → 0.1ms |             2 |  0.1ms → 28.5µs |  0.2ms → 39.0µs | `V8.GC_MC_CLEAR_JOIN_JOB`                              |
| -12.9% |  -0.16ms |       <0.1% |   1.2ms → 1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir`                                      |
|  -6.1% |  -0.15ms |       <0.1% |   2.5ms → 2.3ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 30.0µs → 14.0µs | `fs.sync.close`                                        |
|  -1.9% |  -0.15ms |        0.1% |   7.7ms → 7.5ms |       91 → 82 |           0.1ms |   0.2ms → 0.1ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`          |
|  -7.8% |  -0.13ms |       <0.1% |   1.7ms → 1.5ms |             1 |   1.7ms → 1.5ms |   1.7ms → 1.5ms | `V8.DeserializeIsolate`                                |
| -53.8% |  -0.11ms |       <0.1% |   0.2ms → 0.1ms |         5 → 2 | 41.6µs → 48.0µs |           0.1ms | `LiveObjectVisitor::VisitMarkedObjects`                |
| -29.5% |  -0.06ms |       <0.1% |   0.2ms → 0.1ms |       96 → 84 |   2.0µs → 1.6µs |  27.0µs → 5.0µs | `Evacuator::EvacuatePage`                              |
|  -3.0% |  -0.04ms |       <0.1% |   1.5ms → 1.4ms |     667 → 613 |   2.2µs → 2.3µs | 13.0µs → 17.0µs | `V8.GCIncrementalMarking`                              |
|  -2.0% |  -0.04ms |       <0.1% |           1.9ms |             1 |           1.9ms |           1.9ms | `V8.DeserializeContext`                                |
| -14.2% |  -0.03ms |       <0.1% |           0.2ms |       96 → 84 |           1.8µs |   8.0µs → 5.0µs | `FullEvacuator::RawEvacuatePage`                       |
|  -7.4% |  -0.02ms |       <0.1% |           0.3ms |           350 |   0.9µs → 0.8µs |   8.0µs → 5.0µs | `V8.GC_HEAP_DUMP_STATISTICS`                           |
|  -4.1% |  -0.02ms |       <0.1% |   0.5ms → 0.4ms |           348 |           1.3µs |   8.0µs → 7.0µs | `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`                  |
| -47.2% |  -0.02ms |       <0.1% | 36.0µs → 19.0µs |         3 → 1 | 12.0µs → 19.0µs | 17.0µs → 19.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`                    |
|  -2.6% |  -0.02ms |       <0.1% |           0.6ms |           348 |   1.7µs → 1.6µs | 25.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS` |

##### Garbage collection

| Change |   Delta |     % |            Time |     Count |            Mean |             Max | Span                                          |
| -----: | ------: | ----: | --------------: | --------: | --------------: | --------------: | --------------------------------------------- |
|  -1.9% | -0.15ms |  0.1% |   7.7ms → 7.5ms |   91 → 82 |           0.1ms |   0.2ms → 0.1ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
| -53.8% | -0.11ms | <0.1% |   0.2ms → 0.1ms |     5 → 2 | 41.6µs → 48.0µs |           0.1ms | `LiveObjectVisitor::VisitMarkedObjects`       |
| -29.5% | -0.06ms | <0.1% |   0.2ms → 0.1ms |   96 → 84 |   2.0µs → 1.6µs |  27.0µs → 5.0µs | `Evacuator::EvacuatePage`                     |
| -14.2% | -0.03ms | <0.1% |           0.2ms |   96 → 84 |           1.8µs |   8.0µs → 5.0µs | `FullEvacuator::RawEvacuatePage`              |
| -47.2% | -0.02ms | <0.1% | 36.0µs → 19.0µs |     3 → 1 | 12.0µs → 19.0µs | 17.0µs → 19.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`           |
|  -0.8% | -4.00µs | <0.1% |           0.5ms | 669 → 615 |   0.7µs → 0.8µs |           2.0µs | `Major concurrent marking rescheduled`        |

##### Garbage collection pause

| Change |   Delta |     % |            Time |     Count |            Mean |             Max | Span                                                   |
| -----: | ------: | ----: | --------------: | --------: | --------------: | --------------: | ------------------------------------------------------ |
|  -4.5% | -1.75ms |  0.7% | 38.9ms → 37.1ms |       348 |           0.1ms |   1.9ms → 1.2ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`              |
|  -7.8% | -0.43ms |  0.1% |   5.5ms → 5.0ms |       353 | 15.5µs → 14.3µs |           0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                              |
| -51.7% | -0.36ms | <0.1% |   0.7ms → 0.3ms |   28 → 12 | 25.1µs → 28.3µs |   0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                                       |
|  -6.6% | -0.32ms |  0.1% |   4.8ms → 4.5ms | 667 → 613 |   7.3µs → 7.4µs |   0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                                 |
| -76.6% | -0.19ms | <0.1% |   0.2ms → 0.1ms |         2 |  0.1ms → 28.5µs |  0.2ms → 39.0µs | `V8.GC_MC_CLEAR_JOIN_JOB`                              |
|  -3.0% | -0.04ms | <0.1% |   1.5ms → 1.4ms | 667 → 613 |   2.2µs → 2.3µs | 13.0µs → 17.0µs | `V8.GCIncrementalMarking`                              |
|  -7.4% | -0.02ms | <0.1% |           0.3ms |       350 |   0.9µs → 0.8µs |   8.0µs → 5.0µs | `V8.GC_HEAP_DUMP_STATISTICS`                           |
|  -4.1% | -0.02ms | <0.1% |   0.5ms → 0.4ms |       348 |           1.3µs |   8.0µs → 7.0µs | `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`                  |
|  -2.6% | -0.02ms | <0.1% |           0.6ms |       348 |   1.7µs → 1.6µs | 25.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS` |
| -40.9% | -0.01ms | <0.1% | 22.0µs → 13.0µs |         2 |  11.0µs → 6.5µs |  14.0µs → 7.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`                  |
| -69.2% | -0.01ms | <0.1% |  13.0µs → 4.0µs |         2 |   6.5µs → 2.0µs |  11.0µs → 2.0µs | `V8.GC_MC_SWEEP_START_JOBS`                            |
|  -6.8% | -0.01ms | <0.1% |           0.1ms |         2 |  0.1ms → 48.0µs |           0.1ms | `V8.GC_MC_FINISH`                                      |
| -24.1% | -0.01ms | <0.1% | 29.0µs → 22.0µs |         4 |   7.3µs → 5.5µs |   9.0µs → 7.0µs | `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`                      |
|  -8.3% | -4.00µs | <0.1% | 48.0µs → 44.0µs |         2 | 24.0µs → 22.0µs | 35.0µs → 25.0µs | `V8.GC_MC_EVACUATE_COPY_PARALLEL`                      |
| -40.0% | -4.00µs | <0.1% |  10.0µs → 6.0µs |         2 |   5.0µs → 3.0µs |   8.0µs → 4.0µs | `V8.GC_MC_EVACUATE_CLEAN_UP`                           |
|  -0.5% | -3.00µs | <0.1% |           0.6ms |       350 |           1.7µs |  12.0µs → 5.0µs | `V8.GC_HEAP_EPILOGUE`                                  |
| -30.0% | -3.00µs | <0.1% |  10.0µs → 7.0µs |         1 |  10.0µs → 7.0µs |  10.0µs → 7.0µs | `V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES`              |
|  -1.5% | -2.00µs | <0.1% |           0.1ms |   43 → 44 |   3.1µs → 3.0µs |  11.0µs → 8.0µs | `V8.GC_MINOR_MS_FINISH_SWEEP_ARRAY_BUFFERS`            |
| -40.0% | -2.00µs | <0.1% |   5.0µs → 3.0µs |         2 |   2.5µs → 1.5µs |   3.0µs → 2.0µs | `V8.GC_MC_CLEAR_WEAK_COLLECTIONS`                      |
| -28.6% | -2.00µs | <0.1% |   7.0µs → 5.0µs |         2 |   3.5µs → 2.5µs |   4.0µs → 3.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK`               |

##### I/O

| Change |    Delta |           % |            Time |         Count |            Mean |             Max | Span               |
| -----: | -------: | ----------: | --------------: | ------------: | --------------: | --------------: | ------------------ |
| -81.9% | -43.28ms | 1.0% → 0.2% |  52.8ms → 9.5ms | 1,122 → 1,125 |  47.1µs → 8.5µs |   6.3ms → 3.8ms | `fs.sync.read`     |
|  -2.5% |  -0.61ms |        0.4% | 23.9ms → 23.3ms | 1,122 → 1,125 | 21.3µs → 20.7µs |   0.3ms → 0.1ms | `fs.sync.open`     |
| -12.9% |  -0.16ms |       <0.1% |   1.2ms → 1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir`  |
|  -6.1% |  -0.15ms |       <0.1% |   2.5ms → 2.3ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 30.0µs → 14.0µs | `fs.sync.close`    |
|    ~0% |  -2.00µs |        0.1% |           4.5ms |           210 |          21.3µs |           0.1ms | `fs.sync.realpath` |

#### Parents

Parent spans with the largest change in contribution to each span's self time.

##### `V8.GC_SCAVENGER_SCAVENGE`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Parent            |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | ----------------- |
| +11.2% | +22.90ms | 100.0% | 204.8ms → 227.7ms |   348 | 0.6ms → 0.7ms | 1.5ms → 1.7ms | `V8.GC_SCAVENGER` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

| Change |    Delta |      % |              Time |     Count |  Mean |           Max | Parent                                    |
| -----: | -------: | -----: | ----------------: | --------: | ----: | ------------: | ----------------------------------------- |
|  +2.8% | +10.25ms | 100.0% | 365.4ms → 375.7ms | 379 → 388 | 1.0ms | 7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `V8.HandleInterrupts`

|  Change |   Delta |             % |            Time |         Count |            Mean |           Max | Parent                                     |
| ------: | ------: | ------------: | --------------: | ------------: | --------------: | ------------: | ------------------------------------------ |
|  +14.9% | +9.40ms | 99.5% → 98.8% | 63.2ms → 72.6ms | 2,718 → 2,735 | 23.2µs → 26.5µs | 0.3ms → 0.9ms | `V8.StackGuard`                            |
| +179.3% | +0.52ms |   0.5% → 1.1% |   0.3ms → 0.8ms |       12 → 20 | 24.2µs → 40.5µs | 0.1ms → 0.2ms | `RunMicrotasks`                            |
|     new | +0.05ms |   0.0% → 0.1% |    0ms → 48.0µs |         0 → 2 |    0ms → 24.0µs |  0ms → 36.0µs | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

| Change |   Delta |           % |        Time | Count |         Mean |          Max | Parent                                        |
| -----: | ------: | ----------: | ----------: | ----: | -----------: | -----------: | --------------------------------------------- |
|    new | +0.23ms | 0.0% → 0.7% | 0ms → 0.2ms | 0 → 8 | 0ms → 28.8µs | 0ms → 45.0µs | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

| Change |   Delta |      % |          Time | Count |            Mean |           Max | Parent                     |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ------------: | -------------------------- |
| +29.3% | +1.83ms | 100.0% | 6.2ms → 8.1ms |   348 | 17.9µs → 23.1µs | 0.1ms → 1.4ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.BytecodeBudgetInterrupt`

| Change |   Delta |      % |            Time |         Count |          Mean |   Max | Parent          |
| -----: | ------: | -----: | --------------: | ------------: | ------------: | ----: | --------------- |
|  +3.7% | +1.81ms | 100.0% | 48.6ms → 50.4ms | 6,918 → 6,931 | 7.0µs → 7.3µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

| Change |   Delta |      % |            Time | Count |  Mean |   Max | Parent                     |
| -----: | ------: | -----: | --------------: | ----: | ----: | ----: | -------------------------- |
|  +8.1% | +1.77ms | 100.0% | 21.9ms → 23.7ms |   348 | 0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GCScavenger`

| Change |   Delta |      % |          Time | Count |           Mean |            Max | Parent    |
| -----: | ------: | -----: | ------------: | ----: | -------------: | -------------: | --------- |
| +34.5% | +0.97ms | 100.0% | 2.8ms → 3.8ms |   348 | 8.1µs → 10.9µs | 38.0µs → 0.7ms | `MinorGC` |

##### `fs.sync.stat`

| Change |   Delta |      % |            Time |           Count |          Mean |   Max | Parent          |
| -----: | ------: | -----: | --------------: | --------------: | ------------: | ----: | --------------- |
|  +3.0% | +0.92ms | 100.0% | 30.6ms → 31.5ms | 10,057 → 10,114 | 3.0µs → 3.1µs | 0.1ms | `RunMicrotasks` |

##### `V8.StackGuard`

| Change |   Delta |              % |           Time |         Count |          Mean |             Max | Parent          |
| -----: | ------: | -------------: | -------------: | ------------: | ------------: | --------------: | --------------- |
|  +8.8% | +0.87ms | 100.0% → 99.9% | 9.8ms → 10.7ms | 2,717 → 2,734 | 3.6µs → 3.9µs | 49.0µs → 48.0µs | `RunMicrotasks` |

##### `V8.DeoptimizeCode`

| Change |   Delta |             % |          Time |     Count |            Mean |            Max | Parent              |
| -----: | ------: | ------------: | ------------: | --------: | --------------: | -------------: | ------------------- |
|  +7.8% | +0.58ms | 58.9% → 60.3% | 7.4ms → 8.0ms | 684 → 670 | 10.9µs → 12.0µs |          0.1ms | `V8.DeoptimizeCode` |
|  +1.7% | +0.09ms | 41.1% → 39.7% | 5.2ms → 5.3ms | 896 → 870 |   5.8µs → 6.1µs | 39.0µs → 0.1ms | `RunMicrotasks`     |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

| Change |   Delta |             % |          Time |     Count |            Mean |           Max | Parent          |
| -----: | ------: | ------------: | ------------: | --------: | --------------: | ------------: | --------------- |
| +10.3% | +0.67ms | 94.6% → 96.6% | 6.5ms → 7.2ms | 431 → 449 | 15.2µs → 16.1µs | 0.3ms → 0.5ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                     |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | -------------------------- |
| +66.0% | +0.49ms | 100.0% | 0.7ms → 1.2ms |   348 | 2.1µs → 3.6µs | 0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER`

| Change |   Delta |      % |          Time | Count |            Mean |   Max | Parent           |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ----: | ---------------- |
|  +5.9% | +0.45ms | 100.0% | 7.6ms → 8.1ms |   348 | 21.9µs → 23.2µs | 0.1ms | `V8.GCScavenger` |

##### `V8.GCDeoptMarkedAllocationSites`

| Change |   Delta |      % |          Time |   Count |           Mean |   Max | Parent                |
| -----: | ------: | -----: | ------------: | ------: | -------------: | ----: | --------------------- |
|  +8.0% | +0.11ms | 100.0% | 1.3ms → 1.4ms | 27 → 26 | 49.4µs → 0.1ms | 0.2ms | `V8.HandleInterrupts` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

| Change |   Delta |      % |  Time | Count |           Mean |            Max | Parent                   |
| -----: | ------: | -----: | ----: | ----: | -------------: | -------------: | ------------------------ |
| +60.7% | +0.05ms | 100.0% | 0.1ms |     2 | 44.5µs → 0.1ms | 46.0µs → 0.1ms | `V8.GC_MC_EVACUATE_COPY` |

##### `RememberedSetUpdatingItem::Process`

|  Change |   Delta |             % |           Time |    Count |          Mean |             Max | Parent                                         |
| ------: | ------: | ------------: | -------------: | -------: | ------------: | --------------: | ---------------------------------------------- |
| +472.2% | +0.17ms |  7.9% → 42.2% | 36.0µs → 0.2ms |  15 → 46 | 2.4µs → 4.5µs |  7.0µs → 25.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |
|  -33.2% | -0.14ms | 92.1% → 57.8% |  0.4ms → 0.3ms | 114 → 84 | 3.7µs → 3.4µs | 19.0µs → 24.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`   |

##### `Parallel scavenge started`

| Change |   Delta |      % |  Time | Count |          Mean |           Max | Parent                                    |
| -----: | ------: | -----: | ----: | ----: | ------------: | ------------: | ----------------------------------------- |
|  +9.9% | +0.03ms | 100.0% | 0.3ms |   348 | 0.8µs → 0.9µs | 5.0µs → 3.0µs | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `ConcurrentMarking::RunMajor Preempted`

| Change |   Delta |      % |            Time | Count |          Mean |            Max | Parent                        |
| -----: | ------: | -----: | --------------: | ----: | ------------: | -------------: | ----------------------------- |
| +40.9% | +0.01ms | 100.0% | 22.0µs → 31.0µs |     8 | 2.8µs → 3.9µs | 6.0µs → 14.0µs | `V8.GC_MC_BACKGROUND_MARKING` |

##### `V8.GCHandleGCRequest`

| Change |   Delta |      % |            Time | Count |          Mean |            Max | Parent                |
| -----: | ------: | -----: | --------------: | ----: | ------------: | -------------: | --------------------- |
| +70.0% | +0.01ms | 100.0% | 10.0µs → 17.0µs |     2 | 5.0µs → 8.5µs | 5.0µs → 11.0µs | `V8.HandleInterrupts` |

##### `ClearStringTableJob started`

| Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent           |
| -----: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ---------------- |
|    new | +2.00µs | 0.0% → 100.0% | 0ms → 2.0µs |     2 | 0ms → 1.0µs | 0ms → 1.0µs | `V8.GC_MC_CLEAR` |

##### `Major concurrent marking started`

|  Change |   Delta |             % |          Time | Count |          Mean |   Max | Parent                       |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ----: | ---------------------------- |
| +100.0% | +1.00µs | 33.3% → 50.0% | 1.0µs → 2.0µs |     2 | 0.5µs → 1.0µs | 1.0µs | `V8.GC_MC_INCREMENTAL_START` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

| Change |   Delta |      % |          Time | Count |            Mean |   Max | Parent                     |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ----: | -------------------------- |
|  +5.5% | +0.32ms | 100.0% | 5.8ms → 6.2ms |   348 | 16.8µs → 17.7µs | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent                 |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +16.3% | +0.21ms | 99.8% → 99.7% | 1.3ms → 1.5ms |   348 | 3.7µs → 4.3µs | 0.3ms → 0.5ms | `V8.GC_SCAVENGER`      |
| +66.7% | +2.00µs |   0.2% → 0.3% | 3.0µs → 5.0µs |     2 | 1.5µs → 2.5µs | 2.0µs → 3.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GC_MC_INCREMENTAL_START`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                         |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ------------------------------ |
| +54.9% | +0.18ms | 100.0% | 0.3ms → 0.5ms |     2 | 0.2ms → 0.3ms | 0.3ms → 0.4ms | `V8.GCIncrementalMarkingStart` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                              |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------------------- |
| +25.5% | +0.15ms | 100.0% | 0.6ms → 0.7ms |     2 | 0.3ms → 0.4ms | 0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |

##### `V8.GC_MC_EVACUATE_PROLOGUE`

|  Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent              |
| ------: | ------: | -----: | ------------: | ----: | ----: | ------------: | ------------------- |
| +130.1% | +0.13ms | 100.0% | 0.1ms → 0.2ms |     2 | 0.1ms | 0.1ms → 0.2ms | `V8.GC_MC_EVACUATE` |

##### `V8.GC_MC_MARK`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                 |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ---------------------- |
| +37.2% | +0.13ms | 100.0% | 0.3ms → 0.5ms |     2 | 0.2ms | 0.2ms → 0.3ms | `V8.GC_MARK_COMPACTOR` |

##### `MinorGC`

| Change |   Delta |      % |            Time | Count |  Mean |           Max | Parent          |
| -----: | ------: | -----: | --------------: | ----: | ----: | ------------: | --------------- |
|  +0.6% | +0.11ms | 100.0% | 17.6ms → 17.7ms |   348 | 0.1ms | 1.3ms → 0.1ms | `RunMicrotasks` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                              |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ----------------------------------- |
| +51.6% | +0.09ms | 100.0% | 0.2ms → 0.3ms |     2 | 0.1ms | 0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                                |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ------------------------------------- |
| +34.5% | +0.07ms | 100.0% | 0.2ms → 0.3ms |     2 | 0.1ms | 0.1ms → 0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY`

| Change |   Delta |      % |  Time | Count |          Mean |             Max | Parent                     |
| -----: | ------: | -----: | ----: | ----: | ------------: | --------------: | -------------------------- |
|  +9.9% | +0.06ms | 100.0% | 0.6ms |   348 | 1.6µs → 1.8µs | 14.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_HEAP_PROLOGUE`

| Change |   Delta |     % |  Time | Count |          Mean |             Max | Parent    |
| -----: | ------: | ----: | ----: | ----: | ------------: | --------------: | --------- |
|  +6.4% | +0.05ms | 99.6% | 0.8ms |   348 | 2.2µs → 2.3µs | 11.0µs → 13.0µs | `MinorGC` |

##### `V8.GC_MC_CLEAR_WEAK_REFERENCES`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent                           |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | -------------------------------- |
| +12.5% | +0.04ms | 97.9% → 97.6% | 0.3ms → 0.4ms |     2 |         0.2ms |         0.2ms | `V8.GC_MC_CLEAR_WEAK_REFERENCES` |
| +28.6% | +2.00µs |   2.1% → 2.4% | 7.0µs → 9.0µs |     2 | 3.5µs → 4.5µs | 4.0µs → 5.0µs | `V8.GC_MC_CLEAR`                 |

##### `V8.GC_HEAP_EXTERNAL_EPILOGUE`

|  Change |   Delta |             % |           Time | Count |          Mean |            Max | Parent                 |
| ------: | ------: | ------------: | -------------: | ----: | ------------: | -------------: | ---------------------- |
|  +10.2% | +0.03ms | 99.3% → 95.7% |          0.3ms |   348 | 0.8µs → 0.9µs | 5.0µs → 18.0µs | `RunMicrotasks`        |
| +600.0% | +0.01ms |   0.7% → 4.3% | 2.0µs → 14.0µs |     2 | 1.0µs → 7.0µs | 1.0µs → 12.0µs | `V8.GCHandleGCRequest` |

##### `fs.sync.fstat`

| Change |   Delta |      % |          Time |         Count |          Mean |             Max | Parent          |
| -----: | ------: | -----: | ------------: | ------------: | ------------: | --------------: | --------------- |
|  +5.8% | +0.12ms | 100.0% | 2.1ms → 2.3ms | 1,121 → 1,124 | 1.9µs → 2.0µs | 22.0µs → 15.0µs | `RunMicrotasks` |

##### `fs.sync.lstat`

| Change |   Delta |             % |            Time | Count |          Mean |           Max | Parent          |
| -----: | ------: | ------------: | --------------: | ----: | ------------: | ------------: | --------------- |
| -33.3% | -0.01ms | 31.6% → 12.5% | 18.0µs → 12.0µs |     5 | 3.6µs → 2.4µs | 5.0µs → 3.0µs | `RunMicrotasks` |

##### `fs.sync.read`

| Change |    Delta |      % |           Time |         Count |           Mean |           Max | Parent          |
| -----: | -------: | -----: | -------------: | ------------: | -------------: | ------------: | --------------- |
| -81.9% | -43.28ms | 100.0% | 52.8ms → 9.5ms | 1,122 → 1,125 | 47.1µs → 8.5µs | 6.3ms → 3.8ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

| Change |   Delta |      % |            Time | Count |  Mean |           Max | Parent                     |
| -----: | ------: | -----: | --------------: | ----: | ----: | ------------: | -------------------------- |
|  -4.5% | -1.75ms | 100.0% | 38.9ms → 37.1ms |   348 | 0.1ms | 1.9ms → 1.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `fs.sync.open`

| Change |   Delta |      % |            Time |         Count |            Mean |           Max | Parent          |
| -----: | ------: | -----: | --------------: | ------------: | --------------: | ------------: | --------------- |
|  -2.5% | -0.61ms | 100.0% | 23.9ms → 23.3ms | 1,122 → 1,125 | 21.3µs → 20.7µs | 0.3ms → 0.1ms | `RunMicrotasks` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|  Change |   Delta |             % |           Time | Count |            Mean |            Max | Parent                |
| ------: | ------: | ------------: | -------------: | ----: | --------------: | -------------: | --------------------- |
|   -4.1% | -0.21ms | 95.0% → 98.9% |  5.2ms → 5.0ms |   348 | 14.9µs → 14.3µs |          0.5ms | `V8.GCScavenger`      |
|  -83.6% | -0.21ms |   4.6% → 0.8% | 0.3ms → 41.0µs |     2 |  0.1ms → 20.5µs | 0.2ms → 26.0µs | `V8.GCFinalizeMC`     |
|  -66.7% | -0.01ms |   0.3% → 0.1% | 18.0µs → 6.0µs |     1 |  18.0µs → 6.0µs | 18.0µs → 6.0µs | `RunMicrotasks`       |
| +100.0% | +1.00µs |         <0.1% |  1.0µs → 2.0µs |     1 |   1.0µs → 2.0µs |  1.0µs → 2.0µs | `V8.HandleInterrupts` |

##### `V8.GC_MC_SWEEP`

| Change |   Delta |             % |           Time |  Count |            Mean |             Max | Parent                                        |
| -----: | ------: | ------------: | -------------: | -----: | --------------: | --------------: | --------------------------------------------- |
| -87.7% | -0.36ms | 58.7% → 15.0% |  0.4ms → 0.1ms | 18 → 3 | 22.9µs → 17.0µs | 34.0µs → 27.0µs | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
| -65.0% | -0.07ms | 14.2% → 10.3% | 0.1ms → 35.0µs |  3 → 1 | 33.3µs → 35.0µs | 45.0µs → 35.0µs | `LiveObjectVisitor::VisitMarkedObjects`       |
| +39.6% | +0.06ms | 19.7% → 57.1% |  0.1ms → 0.2ms |      4 | 34.8µs → 48.5µs |   0.1ms → 0.2ms | `V8.GC_MARK_COMPACTOR`                        |
| +15.4% | +0.01ms |  7.4% → 17.6% |          0.1ms |  3 → 4 | 17.3µs → 15.0µs | 32.0µs → 25.0µs | `V8.HandleInterrupts`                         |

##### `V8.GC_MC_INCREMENTAL`

| Change |   Delta |      % |          Time |     Count |          Mean |           Max | Parent                    |
| -----: | ------: | -----: | ------------: | --------: | ------------: | ------------: | ------------------------- |
|  -6.6% | -0.32ms | 100.0% | 4.8ms → 4.5ms | 667 → 613 | 7.3µs → 7.4µs | 0.1ms → 0.2ms | `V8.GCIncrementalMarking` |

##### `V8.GC_MC_CLEAR_JOIN_JOB`

| Change |   Delta |      % |          Time | Count |           Mean |            Max | Parent           |
| -----: | ------: | -----: | ------------: | ----: | -------------: | -------------: | ---------------- |
| -76.6% | -0.19ms | 100.0% | 0.2ms → 0.1ms |     2 | 0.1ms → 28.5µs | 0.2ms → 39.0µs | `V8.GC_MC_CLEAR` |

##### `fs.sync.readdir`

| Change |   Delta |      % |          Time | Count |  Mean |   Max | Parent          |
| -----: | ------: | -----: | ------------: | ----: | ----: | ----: | --------------- |
| -12.9% | -0.16ms | 100.0% | 1.2ms → 1.1ms |    21 | 0.1ms | 0.2ms | `RunMicrotasks` |

##### `fs.sync.close`

| Change |   Delta |      % |          Time |         Count |          Mean |             Max | Parent          |
| -----: | ------: | -----: | ------------: | ------------: | ------------: | --------------: | --------------- |
|  -6.1% | -0.15ms | 100.0% | 2.5ms → 2.3ms | 1,122 → 1,125 | 2.2µs → 2.1µs | 30.0µs → 14.0µs | `RunMicrotasks` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

| Change |   Delta |      % |          Time |   Count |  Mean |           Max | Parent                           |
| -----: | ------: | -----: | ------------: | ------: | ----: | ------------: | -------------------------------- |
|  -1.9% | -0.15ms | 100.0% | 7.7ms → 7.5ms | 91 → 82 | 0.1ms | 0.2ms → 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `LiveObjectVisitor::VisitMarkedObjects`

| Change |   Delta |      % |          Time | Count |            Mean |   Max | Parent                           |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ----: | -------------------------------- |
| -53.8% | -0.11ms | 100.0% | 0.2ms → 0.1ms | 5 → 2 | 41.6µs → 48.0µs | 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `Evacuator::EvacuatePage`

| Change |   Delta |             % |           Time |   Count |          Mean |            Max | Parent                              |
| -----: | ------: | ------------: | -------------: | ------: | ------------: | -------------: | ----------------------------------- |
| -28.8% | -0.04ms | 68.4% → 69.1% |          0.1ms | 69 → 60 | 1.9µs → 1.6µs | 27.0µs → 2.0µs | `V8.GC_MC_EVACUATE_COPY_PARALLEL`   |
| -31.1% | -0.02ms | 31.6% → 30.9% | 0.1ms → 42.0µs | 27 → 24 | 2.3µs → 1.8µs |  8.0µs → 5.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY` |

##### `V8.GCIncrementalMarking`

|  Change |   Delta |              % |          Time |     Count |          Mean |             Max | Parent                       |
| ------: | ------: | -------------: | ------------: | --------: | ------------: | --------------: | ---------------------------- |
|   -2.8% | -0.04ms | 99.9% → 100.0% | 1.5ms → 1.4ms | 666 → 613 | 2.2µs → 2.3µs | 13.0µs → 17.0µs | `RunMicrotasks`              |
| removed | -2.00µs |    0.1% → 0.0% |   2.0µs → 0ms |     1 → 0 |   2.0µs → 0ms |     2.0µs → 0ms | `V8.BytecodeBudgetInterrupt` |

##### `FullEvacuator::RawEvacuatePage`

| Change |   Delta |      % |  Time |   Count |  Mean |           Max | Parent                    |
| -----: | ------: | -----: | ----: | ------: | ----: | ------------: | ------------------------- |
| -14.2% | -0.03ms | 100.0% | 0.2ms | 96 → 84 | 1.8µs | 8.0µs → 5.0µs | `Evacuator::EvacuatePage` |

##### `V8.GC_HEAP_DUMP_STATISTICS`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent    |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- |
|  -7.8% | -0.02ms | 99.4% → 99.0% |         0.3ms |   348 | 0.9µs → 0.8µs | 8.0µs → 5.0µs | `MinorGC` |
| +50.0% | +1.00µs |   0.6% → 1.0% | 2.0µs → 3.0µs |     2 | 1.0µs → 1.5µs | 1.0µs → 2.0µs | `MajorGC` |

##### `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                     |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | -------------------------- |
|  -4.1% | -0.02ms | 100.0% | 0.5ms → 0.4ms |   348 | 1.3µs | 8.0µs → 7.0µs | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS`

| Change |   Delta |      % |  Time | Count |          Mean |             Max | Parent                     |
| -----: | ------: | -----: | ----: | ----: | ------------: | --------------: | -------------------------- |
|  -2.6% | -0.02ms | 100.0% | 0.6ms |   348 | 1.7µs → 1.6µs | 25.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE` |

##### `Major concurrent marking rescheduled`

| Change |   Delta |             % |          Time |     Count |          Mean |   Max | Parent                                |
| -----: | ------: | ------------: | ------------: | --------: | ------------: | ----: | ------------------------------------- |
|  -0.6% | -3.00µs | 99.2% → 99.4% |         0.5ms | 665 → 611 | 0.7µs → 0.8µs | 2.0µs | `V8.GC_MC_INCREMENTAL`                |
| -50.0% | -1.00µs |   0.4% → 0.2% | 2.0µs → 1.0µs |         2 | 1.0µs → 0.5µs | 1.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`

| Change |   Delta |      % |            Time | Count |           Mean |            Max | Parent          |
| -----: | ------: | -----: | --------------: | ----: | -------------: | -------------: | --------------- |
| -40.9% | -0.01ms | 100.0% | 22.0µs → 13.0µs |     2 | 11.0µs → 6.5µs | 14.0µs → 7.0µs | `V8.GC_MC_MARK` |

##### `V8.GC_MC_SWEEP_START_JOBS`

| Change |   Delta |      % |           Time | Count |          Mean |            Max | Parent            |
| -----: | ------: | -----: | -------------: | ----: | ------------: | -------------: | ----------------- |
| -69.2% | -0.01ms | 100.0% | 13.0µs → 4.0µs |     2 | 6.5µs → 2.0µs | 11.0µs → 2.0µs | `V8.GC_MC_FINISH` |

##### `V8.GC_MC_FINISH`

| Change |   Delta |      % |  Time | Count |           Mean |   Max | Parent                 |
| -----: | ------: | -----: | ----: | ----: | -------------: | ----: | ---------------------- |
|  -6.8% | -0.01ms | 100.0% | 0.1ms |     2 | 0.1ms → 48.0µs | 0.1ms | `V8.GC_MARK_COMPACTOR` |

##### `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Parent                       |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | ---------------------------- |
| -24.1% | -0.01ms | 100.0% | 29.0µs → 22.0µs |     4 | 7.3µs → 5.5µs | 9.0µs → 7.0µs | `V8.GC_MC_INCREMENTAL_START` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

| Change |   Delta |      % |            Time | Count |            Mean |             Max | Parent                                          |
| -----: | ------: | -----: | --------------: | ----: | --------------: | --------------: | ----------------------------------------------- |
|  -8.3% | -4.00µs | 100.0% | 48.0µs → 44.0µs |     2 | 24.0µs → 22.0µs | 35.0µs → 25.0µs | `MarkCompactCollector::EvacuatePagesInParallel` |

##### `V8.GC_MC_EVACUATE_CLEAN_UP`

| Change |   Delta |      % |           Time | Count |          Mean |           Max | Parent              |
| -----: | ------: | -----: | -------------: | ----: | ------------: | ------------: | ------------------- |
| -40.0% | -4.00µs | 100.0% | 10.0µs → 6.0µs |     2 | 5.0µs → 3.0µs | 8.0µs → 4.0µs | `V8.GC_MC_EVACUATE` |

##### `V8.GC_HEAP_EPILOGUE`

| Change |   Delta |             % |          Time | Count |          Mean |            Max | Parent    |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | -------------: | --------- |
|  -0.3% | -2.00µs | 99.3% → 99.5% |         0.6ms |   348 |         1.7µs | 12.0µs → 5.0µs | `MinorGC` |
| -25.0% | -1.00µs |   0.7% → 0.5% | 4.0µs → 3.0µs |     2 | 2.0µs → 1.5µs |          2.0µs | `MajorGC` |

##### `V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES`

| Change |   Delta |      % |           Time | Count |           Mean |            Max | Parent            |
| -----: | ------: | -----: | -------------: | ----: | -------------: | -------------: | ----------------- |
| -30.0% | -3.00µs | 100.0% | 10.0µs → 7.0µs |     1 | 10.0µs → 7.0µs | 10.0µs → 7.0µs | `V8.GC_SCAVENGER` |

##### `V8.GC_MINOR_MS_FINISH_SWEEP_ARRAY_BUFFERS`

| Change |   Delta |      % |  Time |   Count |          Mean |            Max | Parent                                |
| -----: | ------: | -----: | ----: | ------: | ------------: | -------------: | ------------------------------------- |
|  -1.5% | -2.00µs | 100.0% | 0.1ms | 43 → 44 | 3.1µs → 3.0µs | 11.0µs → 8.0µs | `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS` |

##### `V8.GC_MC_CLEAR_WEAK_COLLECTIONS`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                           |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | -------------------------------- |
| -40.0% | -2.00µs | 100.0% | 5.0µs → 3.0µs |     2 | 2.5µs → 1.5µs | 3.0µs → 2.0µs | `V8.GC_MC_CLEAR_WEAK_REFERENCES` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                              |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------------------- |
| -28.6% | -2.00µs | 100.0% | 7.0µs → 5.0µs |     2 | 3.5µs → 2.5µs | 4.0µs → 3.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |

##### `fs.sync.realpath`

| Change |   Delta |      % |  Time | Count |   Mean |   Max | Parent          |
| -----: | ------: | -----: | ----: | ----: | -----: | ----: | --------------- |
|    ~0% | -2.00µs | 100.0% | 4.5ms |   210 | 21.3µs | 0.1ms | `RunMicrotasks` |

### Total time

#### Regressions

Thread spans with the largest increase in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time |           Count |            Mean |             Max | Span                                           |
| -----: | --------: | ------------: | ----------------: | --------------: | --------------: | --------------: | ---------------------------------------------- |
|  +3.4% | +182.42ms |         99.8% |     5.41s → 5.60s |               1 |   5.41s → 5.60s |   5.41s → 5.60s | `RunMicrotasks`                                |
| +12.5% |  +61.50ms |   9.1% → 9.9% | 492.5ms → 554.0ms |       195 → 201 |   2.5ms → 2.8ms |  8.6ms → 13.4ms | `V8.GC_BACKGROUND_UNPARK`                      |
| +32.9% |  +59.03ms |   3.3% → 4.3% | 179.5ms → 238.5ms |         30 → 23 |  6.0ms → 10.4ms | 16.8ms → 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  +6.6% |  +51.61ms | 14.4% → 14.9% | 782.2ms → 833.8ms |   1,391 → 1,413 |           0.6ms |   4.7ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  +5.5% |  +37.44ms | 12.6% → 12.9% | 684.0ms → 721.4ms |             348 |   2.0ms → 2.1ms |   8.6ms → 8.5ms | `MinorGC`                                      |
|  +5.6% |  +37.31ms | 12.3% → 12.5% | 664.7ms → 702.0ms |             348 |   1.9ms → 2.0ms |   8.6ms → 8.5ms | `V8.GCScavenger`                               |
|  +5.6% |  +36.54ms | 12.1% → 12.4% | 656.6ms → 693.2ms |             348 |   1.9ms → 2.0ms |   8.6ms → 8.5ms | `V8.GC_SCAVENGER`                              |
|  +5.6% |  +35.85ms | 11.9% → 12.2% | 645.9ms → 681.8ms |             348 |   1.9ms → 2.0ms |   8.5ms → 8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  +7.6% |  +17.87ms |   4.3% → 4.5% | 235.6ms → 253.5ms |         82 → 88 |           2.9ms |   8.6ms → 7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                   |
| +12.1% |  +10.38ms |   1.6% → 1.7% |   85.9ms → 96.3ms |   2,718 → 2,735 | 31.6µs → 35.2µs |   8.5ms → 5.5ms | `V8.StackGuard`                                |
|  +2.8% |  +10.25ms |          6.7% | 365.4ms → 375.7ms |       379 → 388 |           1.0ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
| +13.2% |  +10.08ms |   1.4% → 1.5% |   76.4ms → 86.4ms |   2,730 → 2,757 | 28.0µs → 31.4µs |   8.5ms → 5.5ms | `V8.HandleInterrupts`                          |
|  +2.1% |   +8.52ms |   7.5% → 7.4% | 404.6ms → 413.1ms |             348 |           1.2ms |   7.5ms → 7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
| +26.3% |   +7.20ms |   0.5% → 0.6% |   27.3ms → 34.5ms |          7 → 15 |   3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
| +29.3% |   +1.83ms |          0.1% |     6.2ms → 8.1ms |             348 | 17.9µs → 23.1µs |   0.1ms → 1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`            |
|  +8.1% |   +1.77ms |          0.4% |   21.9ms → 23.7ms |             348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  +3.6% |   +1.77ms |          0.9% |   48.6ms → 50.4ms |   6,931 → 6,944 |   7.0µs → 7.3µs |           0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  +3.0% |   +0.92ms |          0.6% |   30.6ms → 31.5ms | 10,058 → 10,115 |   3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`                                 |
|  +5.3% |   +0.67ms |          0.2% |   12.6ms → 13.3ms |   1,580 → 1,540 | 12.7µs → 13.8µs |           0.1ms | `V8.DeoptimizeCode`                            |
|  +8.7% |   +0.60ms |          0.1% |     6.9ms → 7.5ms |       434 → 452 | 15.9µs → 16.6µs |   0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck`     |

##### Script

| Change |     Delta |           % |            Time |         Count |            Mean |           Max | Span                                       |
| -----: | --------: | ----------: | --------------: | ------------: | --------------: | ------------: | ------------------------------------------ |
|  +3.4% | +182.42ms |       99.8% |   5.41s → 5.60s |             1 |   5.41s → 5.60s | 5.41s → 5.60s | `RunMicrotasks`                            |
| +12.1% |  +10.38ms | 1.6% → 1.7% | 85.9ms → 96.3ms | 2,718 → 2,735 | 31.6µs → 35.2µs | 8.5ms → 5.5ms | `V8.StackGuard`                            |
| +13.2% |  +10.08ms | 1.4% → 1.5% | 76.4ms → 86.4ms | 2,730 → 2,757 | 28.0µs → 31.4µs | 8.5ms → 5.5ms | `V8.HandleInterrupts`                      |
|  +3.6% |   +1.77ms |        0.9% | 48.6ms → 50.4ms | 6,931 → 6,944 |   7.0µs → 7.3µs |         0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  +8.7% |   +0.60ms |        0.1% |   6.9ms → 7.5ms |     434 → 452 | 15.9µs → 16.6µs | 0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|  Change |    Delta |             % |              Time |         Count |           Mean |             Max | Span                                           |
| ------: | -------: | ------------: | ----------------: | ------------: | -------------: | --------------: | ---------------------------------------------- |
|  +12.5% | +61.50ms |   9.1% → 9.9% | 492.5ms → 554.0ms |     195 → 201 |  2.5ms → 2.8ms |  8.6ms → 13.4ms | `V8.GC_BACKGROUND_UNPARK`                      |
|  +32.9% | +59.03ms |   3.3% → 4.3% | 179.5ms → 238.5ms |       30 → 23 | 6.0ms → 10.4ms | 16.8ms → 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|   +6.6% | +51.61ms | 14.4% → 14.9% | 782.2ms → 833.8ms | 1,391 → 1,413 |          0.6ms |   4.7ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|   +7.6% | +17.87ms |   4.3% → 4.5% | 235.6ms → 253.5ms |       82 → 88 |          2.9ms |   8.6ms → 7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|  +26.3% |  +7.20ms |   0.5% → 0.6% |   27.3ms → 34.5ms |        7 → 15 |  3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
| +113.5% |  +0.43ms |         <0.1% |     0.4ms → 0.8ms |       42 → 43 | 9.0µs → 18.7µs |   0.1ms → 0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`    |
| +420.8% |  +0.22ms |         <0.1% |     0.1ms → 0.3ms |         2 → 1 | 26.5µs → 0.3ms |  30.0µs → 0.3ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |
|   +8.0% |  +0.11ms |         <0.1% |     1.3ms → 1.4ms |       27 → 26 | 49.4µs → 0.1ms |           0.2ms | `V8.GCDeoptMarkedAllocationSites`              |
|  +53.5% |  +0.05ms |         <0.1% |     0.1ms → 0.2ms |       42 → 43 |  2.4µs → 3.6µs |  5.0µs → 29.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`           |
|   +6.6% |  +0.03ms |         <0.1% |             0.5ms |     129 → 130 |  3.6µs → 3.8µs | 19.0µs → 25.0µs | `RememberedSetUpdatingItem::Process`           |
|   +9.9% |  +0.03ms |         <0.1% |             0.3ms |           348 |  0.8µs → 0.9µs |   5.0µs → 3.0µs | `Parallel scavenge started`                    |
|   +1.1% |  +0.03ms |         <0.1% |     2.5ms → 2.6ms |         3 → 1 |  0.8ms → 2.6ms |   0.9ms → 2.6ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`            |
|  +40.9% |  +0.01ms |         <0.1% |   22.0µs → 31.0µs |             8 |  2.8µs → 3.9µs |  6.0µs → 14.0µs | `ConcurrentMarking::RunMajor Preempted`        |
|  +38.5% |  +0.01ms |         <0.1% |   13.0µs → 18.0µs |             2 |  6.5µs → 9.0µs |  9.0µs → 12.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`     |
|     new |  +2.00µs |  0.0% → <0.1% |       0ms → 2.0µs |             2 |    0ms → 1.0µs |     0ms → 1.0µs | `ClearStringTableJob started`                  |
|  +33.3% |  +1.00µs |         <0.1% |     3.0µs → 4.0µs |             4 |  0.8µs → 1.0µs |           1.0µs | `Major concurrent marking started`             |

##### Garbage collection pause

|  Change |    Delta |             % |              Time |     Count |            Mean |             Max | Span                                                    |
| ------: | -------: | ------------: | ----------------: | --------: | --------------: | --------------: | ------------------------------------------------------- |
|   +5.5% | +37.44ms | 12.6% → 12.9% | 684.0ms → 721.4ms |       348 |   2.0ms → 2.1ms |   8.6ms → 8.5ms | `MinorGC`                                               |
|   +5.6% | +37.31ms | 12.3% → 12.5% | 664.7ms → 702.0ms |       348 |   1.9ms → 2.0ms |   8.6ms → 8.5ms | `V8.GCScavenger`                                        |
|   +5.6% | +36.54ms | 12.1% → 12.4% | 656.6ms → 693.2ms |       348 |   1.9ms → 2.0ms |   8.6ms → 8.5ms | `V8.GC_SCAVENGER`                                       |
|   +5.6% | +35.85ms | 11.9% → 12.2% | 645.9ms → 681.8ms |       348 |   1.9ms → 2.0ms |   8.5ms → 8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                              |
|   +2.8% | +10.25ms |          6.7% | 365.4ms → 375.7ms | 379 → 388 |           1.0ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`                     |
|   +2.1% |  +8.52ms |   7.5% → 7.4% | 404.6ms → 413.1ms |       348 |           1.2ms |   7.5ms → 7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`               |
|  +29.3% |  +1.83ms |          0.1% |     6.2ms → 8.1ms |       348 | 17.9µs → 23.1µs |   0.1ms → 1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`                     |
|   +8.1% |  +1.77ms |          0.4% |   21.9ms → 23.7ms |       348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`                        |
|  +66.0% |  +0.49ms |         <0.1% |     0.7ms → 1.2ms |       348 |   2.1µs → 3.6µs |   0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`                  |
|   +5.5% |  +0.32ms |          0.1% |     5.8ms → 6.2ms |       348 | 16.8µs → 17.7µs |           0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`                   |
|  +16.5% |  +0.21ms |         <0.1% |     1.3ms → 1.5ms |       350 |   3.7µs → 4.3µs |   0.3ms → 0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`                         |
|  +40.0% |  +0.21ms |         <0.1% |     0.5ms → 0.7ms |         2 |   0.3ms → 0.4ms |   0.4ms → 0.5ms | `V8.GC_MC_INCREMENTAL_START`                            |
|  +24.4% |  +0.20ms |         <0.1% |     0.8ms → 1.0ms |         2 |   0.4ms → 0.5ms |   0.5ms → 0.6ms | `V8.GC_MC_MARK`                                         |
|  +25.5% |  +0.15ms |         <0.1% |     0.6ms → 0.7ms |         2 |   0.3ms → 0.4ms |   0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`        |
| +130.1% |  +0.13ms |         <0.1% |     0.1ms → 0.2ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_PROLOGUE`                            |
|   +7.8% |  +0.10ms |         <0.1% |     1.3ms → 1.4ms |         2 |           0.7ms |           0.9ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS`                     |
|  +27.8% |  +0.08ms |         <0.1% |     0.3ms → 0.4ms |         2 |   0.1ms → 0.2ms |           0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`                   |
|  +34.5% |  +0.07ms |         <0.1% |     0.2ms → 0.3ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`              |
|   +9.9% |  +0.06ms |         <0.1% |             0.6ms |       348 |   1.6µs → 1.8µs | 14.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY` |
|   +6.4% |  +0.05ms |         <0.1% |             0.8ms |       350 |   2.2µs → 2.3µs | 11.0µs → 13.0µs | `V8.GC_HEAP_PROLOGUE`                                   |

##### I/O

| Change |   Delta |     % |            Time |           Count |          Mean |             Max | Span            |
| -----: | ------: | ----: | --------------: | --------------: | ------------: | --------------: | --------------- |
|  +3.0% | +0.92ms |  0.6% | 30.6ms → 31.5ms | 10,058 → 10,115 | 3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`  |
|  +5.8% | +0.12ms | <0.1% |   2.1ms → 2.3ms |   1,121 → 1,124 | 1.9µs → 2.0µs | 22.0µs → 15.0µs | `fs.sync.fstat` |
| +68.4% | +0.04ms | <0.1% |           0.1ms |              18 | 3.2µs → 5.3µs |  7.0µs → 36.0µs | `fs.sync.lstat` |

#### Improvements

Thread spans with the largest decrease in time, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |           % |            Time |         Count |            Mean |             Max | Span                                            |
| -----: | -------: | ----------: | --------------: | ------------: | --------------: | --------------: | ----------------------------------------------- |
| -81.9% | -43.28ms | 1.0% → 0.2% |  52.8ms → 9.5ms | 1,122 → 1,125 |  47.1µs → 8.5µs |   6.3ms → 3.8ms | `fs.sync.read`                                  |
|  -2.5% |  -0.61ms |        0.4% | 23.9ms → 23.3ms | 1,122 → 1,125 | 21.3µs → 20.7µs |   0.3ms → 0.1ms | `fs.sync.open`                                  |
|  -9.3% |  -0.59ms |        0.1% |   6.3ms → 5.7ms |             2 |   3.2ms → 2.9ms |   5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`               |
|  -6.1% |  -0.54ms | 0.2% → 0.1% |   8.8ms → 8.2ms |       96 → 84 |           0.1ms |           0.2ms | `Evacuator::EvacuatePage`                       |
|  -8.3% |  -0.53ms |        0.1% |   6.4ms → 5.9ms |             2 |   3.2ms → 2.9ms |   5.5ms → 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |
|  -8.1% |  -0.52ms |        0.1% |   6.5ms → 5.9ms |             2 |   3.2ms → 3.0ms |   5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY`                        |
|  -5.6% |  -0.48ms | 0.2% → 0.1% |   8.6ms → 8.1ms |       96 → 84 |           0.1ms |           0.2ms | `FullEvacuator::RawEvacuatePage`                |
|  -7.8% |  -0.43ms |        0.1% |   5.5ms → 5.0ms |           353 | 15.5µs → 14.3µs |           0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                       |
|  -4.8% |  -0.37ms |        0.1% |   7.6ms → 7.2ms |     667 → 613 | 11.4µs → 11.8µs |   0.1ms → 0.2ms | `V8.GCIncrementalMarking`                       |
| -51.6% |  -0.36ms |       <0.1% |   0.7ms → 0.3ms |       28 → 12 | 25.2µs → 28.5µs |   0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                                |
|  -5.3% |  -0.32ms |        0.1% |   6.1ms → 5.8ms |     667 → 613 |   9.2µs → 9.4µs |   0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                          |
|  -3.3% |  -0.28ms | 0.2% → 0.1% |   8.5ms → 8.2ms |             4 |   2.1ms → 2.0ms |   6.5ms → 4.0ms | `V8.GC_MC_EVACUATE`                             |
|  -3.4% |  -0.28ms |        0.1% |   8.1ms → 7.8ms |       91 → 82 |           0.1ms |           0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
|  -1.8% |  -0.20ms |        0.2% | 11.0ms → 10.8ms |             2 |   5.5ms → 5.4ms |   8.4ms → 5.5ms | `V8.GCFinalizeMC`                               |
|  -1.7% |  -0.19ms |        0.2% | 11.1ms → 10.9ms |             2 |   5.6ms → 5.5ms |   8.5ms → 5.5ms | `MajorGC`                                       |
| -57.5% |  -0.18ms |       <0.1% |   0.3ms → 0.1ms |         5 → 2 |           0.1ms |           0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
|  -1.5% |  -0.17ms |        0.2% | 11.1ms → 11.0ms |             2 |   5.6ms → 5.5ms |   8.5ms → 5.5ms | `V8.GCHandleGCRequest`                          |
| -12.9% |  -0.16ms |       <0.1% |   1.2ms → 1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir`                               |
|  -6.1% |  -0.15ms |       <0.1% |   2.5ms → 2.3ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 30.0µs → 14.0µs | `fs.sync.close`                                 |
| -28.0% |  -0.14ms |       <0.1% |   0.5ms → 0.4ms |             2 |   0.3ms → 0.2ms |   0.5ms → 0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`    |

##### Garbage collection

| Change |   Delta |           % |            Time |     Count |          Mean |           Max | Span                                            |
| -----: | ------: | ----------: | --------------: | --------: | ------------: | ------------: | ----------------------------------------------- |
|  -6.1% | -0.54ms | 0.2% → 0.1% |   8.8ms → 8.2ms |   96 → 84 |         0.1ms |         0.2ms | `Evacuator::EvacuatePage`                       |
|  -8.3% | -0.53ms |        0.1% |   6.4ms → 5.9ms |         2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |
|  -5.6% | -0.48ms | 0.2% → 0.1% |   8.6ms → 8.1ms |   96 → 84 |         0.1ms |         0.2ms | `FullEvacuator::RawEvacuatePage`                |
|  -3.4% | -0.28ms |        0.1% |   8.1ms → 7.8ms |   91 → 82 |         0.1ms |         0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
| -57.5% | -0.18ms |       <0.1% |   0.3ms → 0.1ms |     5 → 2 |         0.1ms |         0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
|  -1.5% | -0.17ms |        0.2% | 11.1ms → 11.0ms |         2 | 5.6ms → 5.5ms | 8.5ms → 5.5ms | `V8.GCHandleGCRequest`                          |
|  -0.8% | -4.00µs |       <0.1% |           0.5ms | 669 → 615 | 0.7µs → 0.8µs |         2.0µs | `Major concurrent marking rescheduled`          |

##### Garbage collection pause

| Change |   Delta |           % |            Time |     Count |            Mean |             Max | Span                                                   |
| -----: | ------: | ----------: | --------------: | --------: | --------------: | --------------: | ------------------------------------------------------ |
|  -9.3% | -0.59ms |        0.1% |   6.3ms → 5.7ms |         2 |   3.2ms → 2.9ms |   5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`                      |
|  -8.1% | -0.52ms |        0.1% |   6.5ms → 5.9ms |         2 |   3.2ms → 3.0ms |   5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY`                               |
|  -7.8% | -0.43ms |        0.1% |   5.5ms → 5.0ms |       353 | 15.5µs → 14.3µs |           0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                              |
|  -4.8% | -0.37ms |        0.1% |   7.6ms → 7.2ms | 667 → 613 | 11.4µs → 11.8µs |   0.1ms → 0.2ms | `V8.GCIncrementalMarking`                              |
| -51.6% | -0.36ms |       <0.1% |   0.7ms → 0.3ms |   28 → 12 | 25.2µs → 28.5µs |   0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                                       |
|  -5.3% | -0.32ms |        0.1% |   6.1ms → 5.8ms | 667 → 613 |   9.2µs → 9.4µs |   0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                                 |
|  -3.3% | -0.28ms | 0.2% → 0.1% |   8.5ms → 8.2ms |         4 |   2.1ms → 2.0ms |   6.5ms → 4.0ms | `V8.GC_MC_EVACUATE`                                    |
|  -1.8% | -0.20ms |        0.2% | 11.0ms → 10.8ms |         2 |   5.5ms → 5.4ms |   8.4ms → 5.5ms | `V8.GCFinalizeMC`                                      |
|  -1.7% | -0.19ms |        0.2% | 11.1ms → 10.9ms |         2 |   5.6ms → 5.5ms |   8.5ms → 5.5ms | `MajorGC`                                              |
| -28.0% | -0.14ms |       <0.1% |   0.5ms → 0.4ms |         2 |   0.3ms → 0.2ms |   0.5ms → 0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`           |
| -13.4% | -0.07ms |       <0.1% |           0.5ms |         2 |   0.3ms → 0.2ms |   0.3ms → 0.4ms | `V8.GC_MC_CLEAR_JOIN_JOB`                              |
|  -6.9% | -0.05ms |       <0.1% |   0.7ms → 0.6ms |         2 |           0.3ms |   0.6ms → 0.5ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`         |
|  -7.4% | -0.02ms |       <0.1% |           0.3ms |       350 |   0.9µs → 0.8µs |   8.0µs → 5.0µs | `V8.GC_HEAP_DUMP_STATISTICS`                           |
|  -3.5% | -0.02ms |       <0.1% |           0.6ms |       348 |           1.7µs | 13.0µs → 10.0µs | `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`                  |
|  -2.6% | -0.02ms |       <0.1% |           0.6ms |       348 |   1.7µs → 1.6µs | 25.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS` |
| -11.6% | -0.01ms |       <0.1% |           0.1ms |         2 |           0.1ms |           0.1ms | `V8.GC_MC_FINISH`                                      |
| -69.2% | -0.01ms |       <0.1% |  13.0µs → 4.0µs |         2 |   6.5µs → 2.0µs |  11.0µs → 2.0µs | `V8.GC_MC_SWEEP_START_JOBS`                            |
| -24.1% | -0.01ms |       <0.1% | 29.0µs → 22.0µs |         4 |   7.3µs → 5.5µs |   9.0µs → 7.0µs | `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`                      |
| -40.0% | -4.00µs |       <0.1% |  10.0µs → 6.0µs |         2 |   5.0µs → 3.0µs |   8.0µs → 4.0µs | `V8.GC_MC_EVACUATE_CLEAN_UP`                           |
|  -0.5% | -3.00µs |       <0.1% |           0.6ms |       350 |           1.7µs |  12.0µs → 5.0µs | `V8.GC_HEAP_EPILOGUE`                                  |

##### I/O

| Change |    Delta |           % |            Time |         Count |            Mean |             Max | Span               |
| -----: | -------: | ----------: | --------------: | ------------: | --------------: | --------------: | ------------------ |
| -81.9% | -43.28ms | 1.0% → 0.2% |  52.8ms → 9.5ms | 1,122 → 1,125 |  47.1µs → 8.5µs |   6.3ms → 3.8ms | `fs.sync.read`     |
|  -2.5% |  -0.61ms |        0.4% | 23.9ms → 23.3ms | 1,122 → 1,125 | 21.3µs → 20.7µs |   0.3ms → 0.1ms | `fs.sync.open`     |
| -12.9% |  -0.16ms |       <0.1% |   1.2ms → 1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir`  |
|  -6.1% |  -0.15ms |       <0.1% |   2.5ms → 2.3ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 30.0µs → 14.0µs | `fs.sync.close`    |
|    ~0% |  -2.00µs |        0.1% |           4.5ms |           210 |          21.3µs |           0.1ms | `fs.sync.realpath` |

#### Attribute values

Attribute values with the largest change in contribution to each span's total time.

##### `MinorGC`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Attribute | Value                |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | --------- | -------------------- |
|  +5.5% | +37.44ms | 100.0% | 684.0ms → 721.4ms |   348 | 2.0ms → 2.1ms | 8.6ms → 8.5ms | `cause`   | `allocation failure` |

##### `FullEvacuator::RawEvacuatePage`

| Change |   Delta |             % |          Time |   Count |  Mean |   Max | Attribute         | Value                |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ----: | ----------------- | -------------------- |
| -35.2% | -0.66ms | 21.9% → 15.0% | 1.9ms → 1.2ms |  15 → 9 | 0.1ms | 0.2ms | `evacuation_mode` | `objects-new-to-old` |
|  +5.6% | +0.36ms | 74.4% → 83.3% | 6.4ms → 6.7ms | 76 → 73 | 0.1ms | 0.1ms | `evacuation_mode` | `page-new-to-old`    |
| -56.2% | -0.18ms |   3.7% → 1.7% | 0.3ms → 0.1ms |   5 → 2 | 0.1ms | 0.1ms | `evacuation_mode` | `objects-old-to-old` |

##### `MajorGC`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Attribute | Value                                          |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | --------- | ---------------------------------------------- |
|  -1.7% | -0.19ms | 100.0% | 11.1ms → 10.9ms |     2 | 5.6ms → 5.5ms | 8.5ms → 5.5ms | `cause`   | `finalize incremental marking via stack guard` |

#### Attribute amounts

Attribute amounts of each span with the largest relative change.

##### `MinorGC`

|      % |              Time | Count | Attribute   | Change |       Delta |               Total |   Mean |                 Max |
| -----: | ----------------: | ----: | ----------- | -----: | ----------: | ------------------: | -----: | ------------------: |
| 100.0% | 684.0ms → 721.4ms |   348 | `reclaimed` |  -0.3% | -12.915 MiB | 4.08 GiB → 4.07 GiB | 12 MiB | 15.6 MiB → 15.5 MiB |

##### `MajorGC`

|      % |            Time | Count | Attribute   | Change |      Delta |               Total |               Mean |                 Max |
| -----: | --------------: | ----: | ----------- | -----: | ---------: | ------------------: | -----------------: | ------------------: |
| 100.0% | 11.1ms → 10.9ms |     2 | `reclaimed` | +50.3% | +5.082 MiB | 10.1 MiB → 15.2 MiB | 5.06 MiB → 7.6 MiB | 7.68 MiB → 12.3 MiB |

#### Threads

Threads with the largest change in contribution to each span's total time.

##### `RunMicrotasks`

| Change |     Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | --------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
|  +3.4% | +182.42ms | 100.0% | 5.41s → 5.60s |     1 | 5.41s → 5.60s | 5.41s → 5.60s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_UNPARK`

| Change |    Delta |      % |              Time |     Count |          Mean |            Max | Thread                 |
| -----: | -------: | -----: | ----------------: | --------: | ------------: | -------------: | ---------------------- |
| +12.5% | +61.50ms | 100.0% | 492.5ms → 554.0ms | 195 → 201 | 2.5ms → 2.8ms | 8.6ms → 13.4ms | `PlatformWorkerThread` |

##### `V8.GC_MC_BACKGROUND_MARKING`

| Change |    Delta |      % |              Time |   Count |           Mean |             Max | Thread                 |
| -----: | -------: | -----: | ----------------: | ------: | -------------: | --------------: | ---------------------- |
| +32.9% | +59.03ms | 100.0% | 179.5ms → 238.5ms | 30 → 23 | 6.0ms → 10.4ms | 16.8ms → 29.9ms | `PlatformWorkerThread` |

##### `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`

| Change |    Delta |      % |              Time |         Count |  Mean |           Max | Thread                 |
| -----: | -------: | -----: | ----------------: | ------------: | ----: | ------------: | ---------------------- |
|  +6.6% | +51.61ms | 100.0% | 782.2ms → 833.8ms | 1,391 → 1,413 | 0.6ms | 4.7ms → 3.6ms | `PlatformWorkerThread` |

##### `MinorGC`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Thread                 |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | ---------------------- |
|  +5.5% | +37.44ms | 100.0% | 684.0ms → 721.4ms |   348 | 2.0ms → 2.1ms | 8.6ms → 8.5ms | `JavaScriptMainThread` |

##### `V8.GCScavenger`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Thread                 |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | ---------------------- |
|  +5.6% | +37.31ms | 100.0% | 664.7ms → 702.0ms |   348 | 1.9ms → 2.0ms | 8.6ms → 8.5ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Thread                 |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | ---------------------- |
|  +5.6% | +36.54ms | 100.0% | 656.6ms → 693.2ms |   348 | 1.9ms → 2.0ms | 8.6ms → 8.5ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Thread                 |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | ---------------------- |
|  +5.6% | +35.85ms | 100.0% | 645.9ms → 681.8ms |   348 | 1.9ms → 2.0ms | 8.5ms → 8.4ms | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_SAFEPOINT`

| Change |    Delta |      % |              Time |   Count |  Mean |           Max | Thread                 |
| -----: | -------: | -----: | ----------------: | ------: | ----: | ------------: | ---------------------- |
|  +7.6% | +17.87ms | 100.0% | 235.6ms → 253.5ms | 82 → 88 | 2.9ms | 8.6ms → 7.6ms | `PlatformWorkerThread` |

##### `V8.StackGuard`

| Change |    Delta |      % |            Time |         Count |            Mean |           Max | Thread                 |
| -----: | -------: | -----: | --------------: | ------------: | --------------: | ------------: | ---------------------- |
| +12.1% | +10.38ms | 100.0% | 85.9ms → 96.3ms | 2,718 → 2,735 | 31.6µs → 35.2µs | 8.5ms → 5.5ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

| Change |    Delta |      % |              Time |     Count |  Mean |           Max | Thread                 |
| -----: | -------: | -----: | ----------------: | --------: | ----: | ------------: | ---------------------- |
|  +2.8% | +10.25ms | 100.0% | 365.4ms → 375.7ms | 379 → 388 | 1.0ms | 7.4ms → 7.3ms | `JavaScriptMainThread` |

##### `V8.HandleInterrupts`

| Change |    Delta |      % |            Time |         Count |            Mean |           Max | Thread                 |
| -----: | -------: | -----: | --------------: | ------------: | --------------: | ------------: | ---------------------- |
| +13.2% | +10.08ms | 100.0% | 76.4ms → 86.4ms | 2,730 → 2,757 | 28.0µs → 31.4µs | 8.5ms → 5.5ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

| Change |   Delta |      % |              Time | Count |  Mean |           Max | Thread                 |
| -----: | ------: | -----: | ----------------: | ----: | ----: | ------------: | ---------------------- |
|  +2.1% | +8.52ms | 100.0% | 404.6ms → 413.1ms |   348 | 1.2ms | 7.5ms → 7.4ms | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

| Change |   Delta |      % |            Time |  Count |          Mean |            Max | Thread                 |
| -----: | ------: | -----: | --------------: | -----: | ------------: | -------------: | ---------------------- |
| +26.3% | +7.20ms | 100.0% | 27.3ms → 34.5ms | 7 → 15 | 3.9ms → 2.3ms | 9.4ms → 14.6ms | `PlatformWorkerThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

| Change |   Delta |      % |          Time | Count |            Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ------------: | ---------------------- |
| +29.3% | +1.83ms | 100.0% | 6.2ms → 8.1ms |   348 | 17.9µs → 23.1µs | 0.1ms → 1.4ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

| Change |   Delta |      % |            Time | Count |  Mean |   Max | Thread                 |
| -----: | ------: | -----: | --------------: | ----: | ----: | ----: | ---------------------- |
|  +8.1% | +1.77ms | 100.0% | 21.9ms → 23.7ms |   348 | 0.1ms | 0.2ms | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterrupt`

| Change |   Delta |      % |            Time |         Count |          Mean |   Max | Thread                 |
| -----: | ------: | -----: | --------------: | ------------: | ------------: | ----: | ---------------------- |
|  +3.6% | +1.77ms | 100.0% | 48.6ms → 50.4ms | 6,931 → 6,944 | 7.0µs → 7.3µs | 0.3ms | `JavaScriptMainThread` |

##### `fs.sync.stat`

| Change |   Delta |      % |            Time |           Count |          Mean |   Max | Thread                 |
| -----: | ------: | -----: | --------------: | --------------: | ------------: | ----: | ---------------------- |
|  +3.0% | +0.92ms | 100.0% | 30.6ms → 31.5ms | 10,058 → 10,115 | 3.0µs → 3.1µs | 0.1ms | `JavaScriptMainThread` |

##### `V8.DeoptimizeCode`

| Change |   Delta |      % |            Time |         Count |            Mean |   Max | Thread                 |
| -----: | ------: | -----: | --------------: | ------------: | --------------: | ----: | ---------------------- |
|  +6.2% | +1.25ms | 100.0% | 20.1ms → 21.3ms | 1,580 → 1,540 | 12.7µs → 13.8µs | 0.1ms | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

| Change |   Delta |      % |          Time |     Count |            Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | --------: | --------------: | ------------: | ---------------------- |
|  +8.7% | +0.60ms | 100.0% | 6.9ms → 7.5ms | 434 → 452 | 15.9µs → 16.6µs | 0.3ms → 0.5ms | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`

|  Change |   Delta |      % |          Time |   Count |           Mean |           Max | Thread                 |
| ------: | ------: | -----: | ------------: | ------: | -------------: | ------------: | ---------------------- |
| +113.5% | +0.43ms | 100.0% | 0.4ms → 0.8ms | 42 → 43 | 9.0µs → 18.7µs | 0.1ms → 0.3ms | `PlatformWorkerThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`

|  Change |   Delta |      % |          Time | Count |           Mean |            Max | Thread                 |
| ------: | ------: | -----: | ------------: | ----: | -------------: | -------------: | ---------------------- |
| +420.8% | +0.22ms | 100.0% | 0.1ms → 0.3ms | 2 → 1 | 26.5µs → 0.3ms | 30.0µs → 0.3ms | `PlatformWorkerThread` |

##### `V8.GCDeoptMarkedAllocationSites`

| Change |   Delta |      % |          Time |   Count |           Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ------: | -------------: | ----: | ---------------------- |
|  +8.0% | +0.11ms | 100.0% | 1.3ms → 1.4ms | 27 → 26 | 49.4µs → 0.1ms | 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`

| Change |   Delta |      % |          Time |   Count |          Mean |            Max | Thread                 |
| -----: | ------: | -----: | ------------: | ------: | ------------: | -------------: | ---------------------- |
| +53.5% | +0.05ms | 100.0% | 0.1ms → 0.2ms | 42 → 43 | 2.4µs → 3.6µs | 5.0µs → 29.0µs | `PlatformWorkerThread` |

##### `RememberedSetUpdatingItem::Process`

|  Change |   Delta |             % |           Time |    Count |          Mean |             Max | Thread                 |
| ------: | ------: | ------------: | -------------: | -------: | ------------: | --------------: | ---------------------- |
| +472.2% | +0.17ms |  7.9% → 42.2% | 36.0µs → 0.2ms |  15 → 46 | 2.4µs → 4.5µs |  7.0µs → 25.0µs | `PlatformWorkerThread` |
|  -33.2% | -0.14ms | 92.1% → 57.8% |  0.4ms → 0.3ms | 114 → 84 | 3.7µs → 3.4µs | 19.0µs → 24.0µs | `JavaScriptMainThread` |

##### `Parallel scavenge started`

| Change |   Delta |      % |  Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ------------: | ------------: | ---------------------- |
|  +9.9% | +0.03ms | 100.0% | 0.3ms |   348 | 0.8µs → 0.9µs | 5.0µs → 3.0µs | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_COPY`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
|  +1.1% | +0.03ms | 100.0% | 2.5ms → 2.6ms | 3 → 1 | 0.8ms → 2.6ms | 0.9ms → 2.6ms | `PlatformWorkerThread` |

##### `ConcurrentMarking::RunMajor Preempted`

| Change |   Delta |      % |            Time | Count |          Mean |            Max | Thread                 |
| -----: | ------: | -----: | --------------: | ----: | ------------: | -------------: | ---------------------- |
| +40.9% | +0.01ms | 100.0% | 22.0µs → 31.0µs |     8 | 2.8µs → 3.9µs | 6.0µs → 14.0µs | `PlatformWorkerThread` |

##### `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`

| Change |   Delta |      % |            Time | Count |          Mean |            Max | Thread                 |
| -----: | ------: | -----: | --------------: | ----: | ------------: | -------------: | ---------------------- |
| +38.5% | +0.01ms | 100.0% | 13.0µs → 18.0µs |     2 | 6.5µs → 9.0µs | 9.0µs → 12.0µs | `PlatformWorkerThread` |

##### `ClearStringTableJob started`

| Change |   Delta |             % |        Time | Count |        Mean |         Max | Thread                 |
| -----: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ---------------------- |
|    new | +2.00µs | 0.0% → 100.0% | 0ms → 2.0µs |     2 | 0ms → 1.0µs | 0ms → 1.0µs | `JavaScriptMainThread` |

##### `Major concurrent marking started`

| Change |   Delta |      % |          Time | Count |          Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ----: | ---------------------- |
| +33.3% | +1.00µs | 100.0% | 3.0µs → 4.0µs |     4 | 0.8µs → 1.0µs | 1.0µs | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +66.0% | +0.49ms | 100.0% | 0.7ms → 1.2ms |   348 | 2.1µs → 3.6µs | 0.1ms → 0.6ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

| Change |   Delta |      % |          Time | Count |            Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ----: | ---------------------- |
|  +5.5% | +0.32ms | 100.0% | 5.8ms → 6.2ms |   348 | 16.8µs → 17.7µs | 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +16.5% | +0.21ms | 100.0% | 1.3ms → 1.5ms |   350 | 3.7µs → 4.3µs | 0.3ms → 0.5ms | `JavaScriptMainThread` |

##### `V8.GC_MC_INCREMENTAL_START`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +40.0% | +0.21ms | 100.0% | 0.5ms → 0.7ms |     2 | 0.3ms → 0.4ms | 0.4ms → 0.5ms | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +24.4% | +0.20ms | 100.0% | 0.8ms → 1.0ms |     2 | 0.4ms → 0.5ms | 0.5ms → 0.6ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +25.5% | +0.15ms | 100.0% | 0.6ms → 0.7ms |     2 | 0.3ms → 0.4ms | 0.3ms → 0.4ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_PROLOGUE`

|  Change |   Delta |      % |          Time | Count |  Mean |           Max | Thread                 |
| ------: | ------: | -----: | ------------: | ----: | ----: | ------------: | ---------------------- |
| +130.1% | +0.13ms | 100.0% | 0.1ms → 0.2ms |     2 | 0.1ms | 0.1ms → 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS`

| Change |   Delta |      % |          Time | Count |  Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ----: | ----: | ---------------------- |
|  +7.8% | +0.10ms | 100.0% | 1.3ms → 1.4ms |     2 | 0.7ms | 0.9ms | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`

| Change |   Delta |      % |          Time | Count |          Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ----: | ---------------------- |
| +27.8% | +0.08ms | 100.0% | 0.3ms → 0.4ms |     2 | 0.1ms → 0.2ms | 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ---------------------- |
| +34.5% | +0.07ms | 100.0% | 0.2ms → 0.3ms |     2 | 0.1ms | 0.1ms → 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY`

| Change |   Delta |      % |  Time | Count |          Mean |             Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ------------: | --------------: | ---------------------- |
|  +9.9% | +0.06ms | 100.0% | 0.6ms |   348 | 1.6µs → 1.8µs | 14.0µs → 13.0µs | `JavaScriptMainThread` |

##### `V8.GC_HEAP_PROLOGUE`

| Change |   Delta |      % |  Time | Count |          Mean |             Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ------------: | --------------: | ---------------------- |
|  +6.4% | +0.05ms | 100.0% | 0.8ms |   350 | 2.2µs → 2.3µs | 11.0µs → 13.0µs | `JavaScriptMainThread` |

##### `fs.sync.fstat`

| Change |   Delta |      % |          Time |         Count |          Mean |             Max | Thread                 |
| -----: | ------: | -----: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  +5.8% | +0.12ms | 100.0% | 2.1ms → 2.3ms | 1,121 → 1,124 | 1.9µs → 2.0µs | 22.0µs → 15.0µs | `JavaScriptMainThread` |

##### `fs.sync.lstat`

| Change |   Delta |      % |  Time | Count |          Mean |            Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ------------: | -------------: | ---------------------- |
| +68.4% | +0.04ms | 100.0% | 0.1ms |    18 | 3.2µs → 5.3µs | 7.0µs → 36.0µs | `JavaScriptMainThread` |

##### `fs.sync.read`

| Change |    Delta |      % |           Time |         Count |           Mean |           Max | Thread                 |
| -----: | -------: | -----: | -------------: | ------------: | -------------: | ------------: | ---------------------- |
| -81.9% | -43.28ms | 100.0% | 52.8ms → 9.5ms | 1,122 → 1,125 | 47.1µs → 8.5µs | 6.3ms → 3.8ms | `JavaScriptMainThread` |

##### `fs.sync.open`

| Change |   Delta |      % |            Time |         Count |            Mean |           Max | Thread                 |
| -----: | ------: | -----: | --------------: | ------------: | --------------: | ------------: | ---------------------- |
|  -2.5% | -0.61ms | 100.0% | 23.9ms → 23.3ms | 1,122 → 1,125 | 21.3µs → 20.7µs | 0.3ms → 0.1ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
|  -9.3% | -0.59ms | 100.0% | 6.3ms → 5.7ms |     2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `JavaScriptMainThread` |

##### `Evacuator::EvacuatePage`

| Change |   Delta |             % |          Time |   Count |  Mean |           Max | Thread                 |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ------------: | ---------------------- |
|  -9.3% | -0.58ms | 71.5% → 69.1% | 6.3ms → 5.7ms | 69 → 60 | 0.1ms |         0.2ms | `JavaScriptMainThread` |
|  +1.8% | +0.04ms | 28.5% → 30.9% |         2.5ms | 27 → 24 | 0.1ms | 0.1ms → 0.2ms | `PlatformWorkerThread` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
|  -8.3% | -0.53ms | 100.0% | 6.4ms → 5.9ms |     2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
|  -8.1% | -0.52ms | 100.0% | 6.5ms → 5.9ms |     2 | 3.2ms → 3.0ms | 5.5ms → 3.2ms | `JavaScriptMainThread` |

##### `FullEvacuator::RawEvacuatePage`

| Change |   Delta |             % |          Time |   Count |  Mean |           Max | Thread                 |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ------------: | ---------------------- |
|  -8.9% | -0.54ms | 71.6% → 69.1% | 6.1ms → 5.6ms | 69 → 60 | 0.1ms | 0.2ms → 0.1ms | `JavaScriptMainThread` |
|  +2.6% | +0.06ms | 28.4% → 30.9% | 2.4ms → 2.5ms | 27 → 24 | 0.1ms | 0.1ms → 0.2ms | `PlatformWorkerThread` |

##### `V8.GC_TIME_TO_SAFEPOINT`

| Change |   Delta |      % |          Time | Count |            Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ----: | ---------------------- |
|  -7.8% | -0.43ms | 100.0% | 5.5ms → 5.0ms |   353 | 15.5µs → 14.3µs | 0.5ms | `JavaScriptMainThread` |

##### `V8.GCIncrementalMarking`

| Change |   Delta |      % |          Time |     Count |            Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | --------: | --------------: | ------------: | ---------------------- |
|  -4.8% | -0.37ms | 100.0% | 7.6ms → 7.2ms | 667 → 613 | 11.4µs → 11.8µs | 0.1ms → 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_SWEEP`

| Change |   Delta |      % |          Time |   Count |            Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ------: | --------------: | ------------: | ---------------------- |
| -51.6% | -0.36ms | 100.0% | 0.7ms → 0.3ms | 28 → 12 | 25.2µs → 28.5µs | 0.1ms → 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_INCREMENTAL`

| Change |   Delta |      % |          Time |     Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | --------: | ------------: | ------------: | ---------------------- |
|  -5.3% | -0.32ms | 100.0% | 6.1ms → 5.8ms | 667 → 613 | 9.2µs → 9.4µs | 0.1ms → 0.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
|  -3.3% | -0.28ms | 100.0% | 8.5ms → 8.2ms |     4 | 2.1ms → 2.0ms | 6.5ms → 4.0ms | `JavaScriptMainThread` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

| Change |   Delta |             % |          Time |   Count |  Mean |           Max | Thread                 |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ------------: | ---------------------- |
|  -6.3% | -0.36ms | 70.6% → 68.5% | 5.7ms → 5.4ms | 64 → 58 | 0.1ms | 0.2ms → 0.1ms | `JavaScriptMainThread` |
|  +3.5% | +0.08ms | 29.4% → 31.5% | 2.4ms → 2.5ms | 27 → 24 | 0.1ms | 0.1ms → 0.2ms | `PlatformWorkerThread` |

##### `V8.GCFinalizeMC`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | ---------------------- |
|  -1.8% | -0.20ms | 100.0% | 11.0ms → 10.8ms |     2 | 5.5ms → 5.4ms | 8.4ms → 5.5ms | `JavaScriptMainThread` |

##### `MajorGC`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | ---------------------- |
|  -1.7% | -0.19ms | 100.0% | 11.1ms → 10.9ms |     2 | 5.6ms → 5.5ms | 8.5ms → 5.5ms | `JavaScriptMainThread` |

##### `LiveObjectVisitor::VisitMarkedObjects`

| Change |   Delta |      % |          Time | Count |  Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ----: | ----: | ---------------------- |
| -57.5% | -0.18ms | 100.0% | 0.3ms → 0.1ms | 5 → 2 | 0.1ms | 0.1ms | `JavaScriptMainThread` |

##### `V8.GCHandleGCRequest`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | ---------------------- |
|  -1.5% | -0.17ms | 100.0% | 11.1ms → 11.0ms |     2 | 5.6ms → 5.5ms | 8.5ms → 5.5ms | `JavaScriptMainThread` |

##### `fs.sync.readdir`

| Change |   Delta |      % |          Time | Count |  Mean |   Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ----: | ----: | ---------------------- |
| -12.9% | -0.16ms | 100.0% | 1.2ms → 1.1ms |    21 | 0.1ms | 0.2ms | `JavaScriptMainThread` |

##### `fs.sync.close`

| Change |   Delta |      % |          Time |         Count |          Mean |             Max | Thread                 |
| -----: | ------: | -----: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  -6.1% | -0.15ms | 100.0% | 2.5ms → 2.3ms | 1,122 → 1,125 | 2.2µs → 2.1µs | 30.0µs → 14.0µs | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| -28.0% | -0.14ms | 100.0% | 0.5ms → 0.4ms |     2 | 0.3ms → 0.2ms | 0.5ms → 0.3ms | `JavaScriptMainThread` |

##### `Major concurrent marking rescheduled`

| Change |   Delta |      % |  Time |     Count |          Mean |   Max | Thread                 |
| -----: | ------: | -----: | ----: | --------: | ------------: | ----: | ---------------------- |
|  -0.8% | -4.00µs | 100.0% | 0.5ms | 669 → 615 | 0.7µs → 0.8µs | 2.0µs | `JavaScriptMainThread` |

##### `V8.GC_MC_CLEAR_JOIN_JOB`

| Change |   Delta |      % |  Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ------------: | ------------: | ---------------------- |
| -13.4% | -0.07ms | 100.0% | 0.5ms |     2 | 0.3ms → 0.2ms | 0.3ms → 0.4ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Thread                 |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ---------------------- |
|  -6.9% | -0.05ms | 100.0% | 0.7ms → 0.6ms |     2 | 0.3ms | 0.6ms → 0.5ms | `JavaScriptMainThread` |

##### `V8.GC_HEAP_DUMP_STATISTICS`

| Change |   Delta |      % |  Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ------------: | ------------: | ---------------------- |
|  -7.4% | -0.02ms | 100.0% | 0.3ms |   350 | 0.9µs → 0.8µs | 8.0µs → 5.0µs | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`

| Change |   Delta |      % |  Time | Count |  Mean |             Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ----: | --------------: | ---------------------- |
|  -3.5% | -0.02ms | 100.0% | 0.6ms |   348 | 1.7µs | 13.0µs → 10.0µs | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS`

| Change |   Delta |      % |  Time | Count |          Mean |             Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ------------: | --------------: | ---------------------- |
|  -2.6% | -0.02ms | 100.0% | 0.6ms |   348 | 1.7µs → 1.6µs | 25.0µs → 13.0µs | `JavaScriptMainThread` |

##### `V8.GC_MC_FINISH`

| Change |   Delta |      % |  Time | Count |  Mean |   Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ----: | ----: | ---------------------- |
| -11.6% | -0.01ms | 100.0% | 0.1ms |     2 | 0.1ms | 0.1ms | `JavaScriptMainThread` |

##### `V8.GC_MC_SWEEP_START_JOBS`

| Change |   Delta |      % |           Time | Count |          Mean |            Max | Thread                 |
| -----: | ------: | -----: | -------------: | ----: | ------------: | -------------: | ---------------------- |
| -69.2% | -0.01ms | 100.0% | 13.0µs → 4.0µs |     2 | 6.5µs → 2.0µs | 11.0µs → 2.0µs | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | ---------------------- |
| -24.1% | -0.01ms | 100.0% | 29.0µs → 22.0µs |     4 | 7.3µs → 5.5µs | 9.0µs → 7.0µs | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_CLEAN_UP`

| Change |   Delta |      % |           Time | Count |          Mean |           Max | Thread                 |
| -----: | ------: | -----: | -------------: | ----: | ------------: | ------------: | ---------------------- |
| -40.0% | -4.00µs | 100.0% | 10.0µs → 6.0µs |     2 | 5.0µs → 3.0µs | 8.0µs → 4.0µs | `JavaScriptMainThread` |

##### `V8.GC_HEAP_EPILOGUE`

| Change |   Delta |      % |  Time | Count |  Mean |            Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | ----: | -------------: | ---------------------- |
|  -0.5% | -3.00µs | 100.0% | 0.6ms |   350 | 1.7µs | 12.0µs → 5.0µs | `JavaScriptMainThread` |

##### `fs.sync.realpath`

| Change |   Delta |      % |  Time | Count |   Mean |   Max | Thread                 |
| -----: | ------: | -----: | ----: | ----: | -----: | ----: | ---------------------- |
|    ~0% | -2.00µs | 100.0% | 4.5ms |   210 | 21.3µs | 0.1ms | `JavaScriptMainThread` |

#### Parents

Parent spans with the largest change in contribution to each span's total time.

##### `MinorGC`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Parent          |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | --------------- |
|  +5.5% | +37.44ms | 100.0% | 684.0ms → 721.4ms |   348 | 2.0ms → 2.1ms | 8.6ms → 8.5ms | `RunMicrotasks` |

##### `V8.GCScavenger`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Parent    |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | --------- |
|  +5.6% | +37.31ms | 100.0% | 664.7ms → 702.0ms |   348 | 1.9ms → 2.0ms | 8.6ms → 8.5ms | `MinorGC` |

##### `V8.GC_SCAVENGER`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Parent           |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | ---------------- |
|  +5.6% | +36.54ms | 100.0% | 656.6ms → 693.2ms |   348 | 1.9ms → 2.0ms | 8.6ms → 8.5ms | `V8.GCScavenger` |

##### `V8.GC_SCAVENGER_SCAVENGE`

| Change |    Delta |      % |              Time | Count |          Mean |           Max | Parent            |
| -----: | -------: | -----: | ----------------: | ----: | ------------: | ------------: | ----------------- |
|  +5.6% | +35.85ms | 100.0% | 645.9ms → 681.8ms |   348 | 1.9ms → 2.0ms | 8.5ms → 8.4ms | `V8.GC_SCAVENGER` |

##### `V8.StackGuard`

| Change |    Delta |      % |            Time |         Count |            Mean |           Max | Parent          |
| -----: | -------: | -----: | --------------: | ------------: | --------------: | ------------: | --------------- |
| +12.1% | +10.37ms | 100.0% | 85.9ms → 96.2ms | 2,717 → 2,734 | 31.6µs → 35.2µs | 8.5ms → 5.5ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

| Change |    Delta |      % |              Time |     Count |  Mean |           Max | Parent                                    |
| -----: | -------: | -----: | ----------------: | --------: | ----: | ------------: | ----------------------------------------- |
|  +2.8% | +10.25ms | 100.0% | 365.4ms → 375.7ms | 379 → 388 | 1.0ms | 7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `V8.HandleInterrupts`

|  Change |   Delta |             % |            Time |         Count |            Mean |           Max | Parent                                     |
| ------: | ------: | ------------: | --------------: | ------------: | --------------: | ------------: | ------------------------------------------ |
|  +12.5% | +9.51ms | 99.6% → 99.0% | 76.1ms → 85.6ms | 2,718 → 2,735 | 28.0µs → 31.3µs | 8.5ms → 5.5ms | `V8.StackGuard`                            |
| +179.3% | +0.52ms |   0.4% → 0.9% |   0.3ms → 0.8ms |       12 → 20 | 24.2µs → 40.5µs | 0.1ms → 0.2ms | `RunMicrotasks`                            |
|     new | +0.05ms |   0.0% → 0.1% |    0ms → 48.0µs |         0 → 2 |    0ms → 24.0µs |  0ms → 36.0µs | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

| Change |   Delta |      % |              Time | Count |  Mean |           Max | Parent                     |
| -----: | ------: | -----: | ----------------: | ----: | ----: | ------------: | -------------------------- |
|  +2.1% | +8.52ms | 100.0% | 404.6ms → 413.1ms |   348 | 1.2ms | 7.5ms → 7.4ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

| Change |   Delta |           % |        Time | Count |         Mean |          Max | Parent                                        |
| -----: | ------: | ----------: | ----------: | ----: | -----------: | -----------: | --------------------------------------------- |
|    new | +0.23ms | 0.0% → 0.7% | 0ms → 0.2ms | 0 → 8 | 0ms → 28.8µs | 0ms → 45.0µs | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

| Change |   Delta |      % |          Time | Count |            Mean |           Max | Parent                     |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ------------: | -------------------------- |
| +29.3% | +1.83ms | 100.0% | 6.2ms → 8.1ms |   348 | 17.9µs → 23.1µs | 0.1ms → 1.4ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

| Change |   Delta |      % |            Time | Count |  Mean |   Max | Parent                     |
| -----: | ------: | -----: | --------------: | ----: | ----: | ----: | -------------------------- |
|  +8.1% | +1.77ms | 100.0% | 21.9ms → 23.7ms |   348 | 0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.BytecodeBudgetInterrupt`

| Change |   Delta |      % |            Time |         Count |          Mean |   Max | Parent          |
| -----: | ------: | -----: | --------------: | ------------: | ------------: | ----: | --------------- |
|  +3.6% | +1.77ms | 100.0% | 48.6ms → 50.4ms | 6,918 → 6,931 | 7.0µs → 7.3µs | 0.3ms | `RunMicrotasks` |

##### `fs.sync.stat`

| Change |   Delta |      % |            Time |           Count |          Mean |   Max | Parent          |
| -----: | ------: | -----: | --------------: | --------------: | ------------: | ----: | --------------- |
|  +3.0% | +0.92ms | 100.0% | 30.6ms → 31.5ms | 10,057 → 10,114 | 3.0µs → 3.1µs | 0.1ms | `RunMicrotasks` |

##### `V8.DeoptimizeCode`

| Change |   Delta |             % |            Time |     Count |            Mean |   Max | Parent              |
| -----: | ------: | ------------: | --------------: | --------: | --------------: | ----: | ------------------- |
|  +5.3% | +0.67ms | 62.9% → 62.4% | 12.6ms → 13.3ms | 896 → 870 | 14.1µs → 15.3µs | 0.1ms | `RunMicrotasks`     |
|  +7.8% | +0.58ms | 37.1% → 37.6% |   7.4ms → 8.0ms | 684 → 670 | 10.9µs → 12.0µs | 0.1ms | `V8.DeoptimizeCode` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

| Change |   Delta |             % |          Time |     Count |            Mean |           Max | Parent          |
| -----: | ------: | ------------: | ------------: | --------: | --------------: | ------------: | --------------- |
| +11.0% | +0.72ms | 94.6% → 96.6% | 6.5ms → 7.3ms | 431 → 449 | 15.2µs → 16.2µs | 0.3ms → 0.5ms | `RunMicrotasks` |

##### `V8.GCDeoptMarkedAllocationSites`

| Change |   Delta |      % |          Time |   Count |           Mean |   Max | Parent                |
| -----: | ------: | -----: | ------------: | ------: | -------------: | ----: | --------------------- |
|  +8.0% | +0.11ms | 100.0% | 1.3ms → 1.4ms | 27 → 26 | 49.4µs → 0.1ms | 0.2ms | `V8.HandleInterrupts` |

##### `RememberedSetUpdatingItem::Process`

|  Change |   Delta |             % |           Time |    Count |          Mean |             Max | Parent                                         |
| ------: | ------: | ------------: | -------------: | -------: | ------------: | --------------: | ---------------------------------------------- |
| +472.2% | +0.17ms |  7.9% → 42.2% | 36.0µs → 0.2ms |  15 → 46 | 2.4µs → 4.5µs |  7.0µs → 25.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |
|  -33.2% | -0.14ms | 92.1% → 57.8% |  0.4ms → 0.3ms | 114 → 84 | 3.7µs → 3.4µs | 19.0µs → 24.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`   |

##### `Parallel scavenge started`

| Change |   Delta |      % |  Time | Count |          Mean |           Max | Parent                                    |
| -----: | ------: | -----: | ----: | ----: | ------------: | ------------: | ----------------------------------------- |
|  +9.9% | +0.03ms | 100.0% | 0.3ms |   348 | 0.8µs → 0.9µs | 5.0µs → 3.0µs | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `ConcurrentMarking::RunMajor Preempted`

| Change |   Delta |      % |            Time | Count |          Mean |            Max | Parent                        |
| -----: | ------: | -----: | --------------: | ----: | ------------: | -------------: | ----------------------------- |
| +40.9% | +0.01ms | 100.0% | 22.0µs → 31.0µs |     8 | 2.8µs → 3.9µs | 6.0µs → 14.0µs | `V8.GC_MC_BACKGROUND_MARKING` |

##### `ClearStringTableJob started`

| Change |   Delta |             % |        Time | Count |        Mean |         Max | Parent           |
| -----: | ------: | ------------: | ----------: | ----: | ----------: | ----------: | ---------------- |
|    new | +2.00µs | 0.0% → 100.0% | 0ms → 2.0µs |     2 | 0ms → 1.0µs | 0ms → 1.0µs | `V8.GC_MC_CLEAR` |

##### `Major concurrent marking started`

|  Change |   Delta |             % |          Time | Count |          Mean |   Max | Parent                       |
| ------: | ------: | ------------: | ------------: | ----: | ------------: | ----: | ---------------------------- |
| +100.0% | +1.00µs | 33.3% → 50.0% | 1.0µs → 2.0µs |     2 | 0.5µs → 1.0µs | 1.0µs | `V8.GC_MC_INCREMENTAL_START` |

##### `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                     |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | -------------------------- |
| +66.0% | +0.49ms | 100.0% | 0.7ms → 1.2ms |   348 | 2.1µs → 3.6µs | 0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

| Change |   Delta |      % |          Time | Count |            Mean |   Max | Parent                     |
| -----: | ------: | -----: | ------------: | ----: | --------------: | ----: | -------------------------- |
|  +5.5% | +0.32ms | 100.0% | 5.8ms → 6.2ms |   348 | 16.8µs → 17.7µs | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent                 |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +16.3% | +0.21ms | 99.8% → 99.7% | 1.3ms → 1.5ms |   348 | 3.7µs → 4.3µs | 0.3ms → 0.5ms | `V8.GC_SCAVENGER`      |
| +66.7% | +2.00µs |   0.2% → 0.3% | 3.0µs → 5.0µs |     2 | 1.5µs → 2.5µs | 2.0µs → 3.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GC_MC_INCREMENTAL_START`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                         |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ------------------------------ |
| +40.0% | +0.21ms | 100.0% | 0.5ms → 0.7ms |     2 | 0.3ms → 0.4ms | 0.4ms → 0.5ms | `V8.GCIncrementalMarkingStart` |

##### `V8.GC_MC_MARK`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
| +24.4% | +0.20ms | 100.0% | 0.8ms → 1.0ms |     2 | 0.4ms → 0.5ms | 0.5ms → 0.6ms | `V8.GC_MARK_COMPACTOR` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                              |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------------------- |
| +25.5% | +0.15ms | 100.0% | 0.6ms → 0.7ms |     2 | 0.3ms → 0.4ms | 0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |

##### `V8.GC_MC_EVACUATE_PROLOGUE`

|  Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent              |
| ------: | ------: | -----: | ------------: | ----: | ----: | ------------: | ------------------- |
| +130.1% | +0.13ms | 100.0% | 0.1ms → 0.2ms |     2 | 0.1ms | 0.1ms → 0.2ms | `V8.GC_MC_EVACUATE` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS`

| Change |   Delta |      % |          Time | Count |  Mean |   Max | Parent              |
| -----: | ------: | -----: | ------------: | ----: | ----: | ----: | ------------------- |
|  +7.8% | +0.10ms | 100.0% | 1.3ms → 1.4ms |     2 | 0.7ms | 0.9ms | `V8.GC_MC_EVACUATE` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`

| Change |   Delta |      % |          Time | Count |          Mean |   Max | Parent          |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ----: | --------------- |
| +27.8% | +0.08ms | 100.0% | 0.3ms → 0.4ms |     2 | 0.1ms → 0.2ms | 0.2ms | `V8.GC_MC_MARK` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                                |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ------------------------------------- |
| +34.5% | +0.07ms | 100.0% | 0.2ms → 0.3ms |     2 | 0.1ms | 0.1ms → 0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY`

| Change |   Delta |      % |  Time | Count |          Mean |             Max | Parent                     |
| -----: | ------: | -----: | ----: | ----: | ------------: | --------------: | -------------------------- |
|  +9.9% | +0.06ms | 100.0% | 0.6ms |   348 | 1.6µs → 1.8µs | 14.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_HEAP_PROLOGUE`

| Change |   Delta |     % |  Time | Count |          Mean |             Max | Parent    |
| -----: | ------: | ----: | ----: | ----: | ------------: | --------------: | --------- |
|  +6.4% | +0.05ms | 99.6% | 0.8ms |   348 | 2.2µs → 2.3µs | 11.0µs → 13.0µs | `MinorGC` |

##### `fs.sync.fstat`

| Change |   Delta |      % |          Time |         Count |          Mean |             Max | Parent          |
| -----: | ------: | -----: | ------------: | ------------: | ------------: | --------------: | --------------- |
|  +5.8% | +0.12ms | 100.0% | 2.1ms → 2.3ms | 1,121 → 1,124 | 1.9µs → 2.0µs | 22.0µs → 15.0µs | `RunMicrotasks` |

##### `fs.sync.lstat`

| Change |   Delta |             % |            Time | Count |          Mean |           Max | Parent          |
| -----: | ------: | ------------: | --------------: | ----: | ------------: | ------------: | --------------- |
| -33.3% | -0.01ms | 31.6% → 12.5% | 18.0µs → 12.0µs |     5 | 3.6µs → 2.4µs | 5.0µs → 3.0µs | `RunMicrotasks` |

##### `fs.sync.read`

| Change |    Delta |      % |           Time |         Count |           Mean |           Max | Parent          |
| -----: | -------: | -----: | -------------: | ------------: | -------------: | ------------: | --------------- |
| -81.9% | -43.28ms | 100.0% | 52.8ms → 9.5ms | 1,122 → 1,125 | 47.1µs → 8.5µs | 6.3ms → 3.8ms | `RunMicrotasks` |

##### `fs.sync.open`

| Change |   Delta |      % |            Time |         Count |            Mean |           Max | Parent          |
| -----: | ------: | -----: | --------------: | ------------: | --------------: | ------------: | --------------- |
|  -2.5% | -0.61ms | 100.0% | 23.9ms → 23.3ms | 1,122 → 1,125 | 21.3µs → 20.7µs | 0.3ms → 0.1ms | `RunMicrotasks` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                                          |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ----------------------------------------------- |
|  -9.3% | -0.59ms | 100.0% | 6.3ms → 5.7ms |     2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |

##### `Evacuator::EvacuatePage`

| Change |   Delta |             % |          Time |   Count |  Mean |           Max | Parent                              |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ------------: | ----------------------------------- |
|  -9.3% | -0.58ms | 71.5% → 69.1% | 6.3ms → 5.7ms | 69 → 60 | 0.1ms |         0.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`   |
|  +1.8% | +0.04ms | 28.5% → 30.9% |         2.5ms | 27 → 24 | 0.1ms | 0.1ms → 0.2ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                   |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ------------------------ |
|  -8.3% | -0.53ms | 100.0% | 6.4ms → 5.9ms |     2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY` |

##### `V8.GC_MC_EVACUATE_COPY`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent              |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ------------------- |
|  -8.1% | -0.52ms | 100.0% | 6.5ms → 5.9ms |     2 | 3.2ms → 3.0ms | 5.5ms → 3.2ms | `V8.GC_MC_EVACUATE` |

##### `FullEvacuator::RawEvacuatePage`

| Change |   Delta |      % |          Time |   Count |  Mean |   Max | Parent                    |
| -----: | ------: | -----: | ------------: | ------: | ----: | ----: | ------------------------- |
|  -5.6% | -0.48ms | 100.0% | 8.6ms → 8.1ms | 96 → 84 | 0.1ms | 0.2ms | `Evacuator::EvacuatePage` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|  Change |   Delta |             % |           Time | Count |            Mean |            Max | Parent                |
| ------: | ------: | ------------: | -------------: | ----: | --------------: | -------------: | --------------------- |
|   -4.1% | -0.21ms | 95.0% → 98.9% |  5.2ms → 5.0ms |   348 | 14.9µs → 14.3µs |          0.5ms | `V8.GCScavenger`      |
|  -83.6% | -0.21ms |   4.6% → 0.8% | 0.3ms → 41.0µs |     2 |  0.1ms → 20.5µs | 0.2ms → 26.0µs | `V8.GCFinalizeMC`     |
|  -66.7% | -0.01ms |   0.3% → 0.1% | 18.0µs → 6.0µs |     1 |  18.0µs → 6.0µs | 18.0µs → 6.0µs | `RunMicrotasks`       |
| +100.0% | +1.00µs |         <0.1% |  1.0µs → 2.0µs |     1 |   1.0µs → 2.0µs |  1.0µs → 2.0µs | `V8.HandleInterrupts` |

##### `V8.GCIncrementalMarking`

|  Change |   Delta |              % |          Time |     Count |            Mean |           Max | Parent                       |
| ------: | ------: | -------------: | ------------: | --------: | --------------: | ------------: | ---------------------------- |
|   -4.3% | -0.33ms | 99.5% → 100.0% | 7.6ms → 7.2ms | 666 → 613 | 11.3µs → 11.8µs | 0.1ms → 0.2ms | `RunMicrotasks`              |
| removed | -0.04ms |    0.5% → 0.0% |  41.0µs → 0ms |     1 → 0 |    41.0µs → 0ms |  41.0µs → 0ms | `V8.BytecodeBudgetInterrupt` |

##### `V8.GC_MC_SWEEP`

| Change |   Delta |             % |           Time |  Count |            Mean |             Max | Parent                                        |
| -----: | ------: | ------------: | -------------: | -----: | --------------: | --------------: | --------------------------------------------- |
| -87.7% | -0.36ms | 58.5% → 14.9% |  0.4ms → 0.1ms | 18 → 3 | 22.9µs → 17.0µs | 34.0µs → 27.0µs | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
| -65.0% | -0.07ms | 14.2% → 10.2% | 0.1ms → 35.0µs |  3 → 1 | 33.3µs → 35.0µs | 45.0µs → 35.0µs | `LiveObjectVisitor::VisitMarkedObjects`       |
| +39.0% | +0.06ms | 20.0% → 57.3% |  0.1ms → 0.2ms |      4 | 35.3µs → 49.0µs |   0.1ms → 0.2ms | `V8.GC_MARK_COMPACTOR`                        |
| +15.4% | +0.01ms |  7.4% → 17.5% |          0.1ms |  3 → 4 | 17.3µs → 15.0µs | 32.0µs → 25.0µs | `V8.HandleInterrupts`                         |

##### `V8.GC_MC_INCREMENTAL`

| Change |   Delta |      % |          Time |     Count |          Mean |           Max | Parent                    |
| -----: | ------: | -----: | ------------: | --------: | ------------: | ------------: | ------------------------- |
|  -5.3% | -0.32ms | 100.0% | 6.1ms → 5.8ms | 667 → 613 | 9.2µs → 9.4µs | 0.1ms → 0.2ms | `V8.GCIncrementalMarking` |

##### `V8.GC_MC_EVACUATE`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                 |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------- |
|  -3.3% | -0.28ms | 100.0% | 8.5ms → 8.2ms |     4 | 2.1ms → 2.0ms | 6.5ms → 4.0ms | `V8.GC_MARK_COMPACTOR` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

| Change |   Delta |      % |          Time |   Count |  Mean |   Max | Parent                           |
| -----: | ------: | -----: | ------------: | ------: | ----: | ----: | -------------------------------- |
|  -3.4% | -0.28ms | 100.0% | 8.1ms → 7.8ms | 91 → 82 | 0.1ms | 0.2ms | `FullEvacuator::RawEvacuatePage` |

##### `V8.GCFinalizeMC`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Parent    |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | --------- |
|  -1.8% | -0.20ms | 100.0% | 11.0ms → 10.8ms |     2 | 5.5ms → 5.4ms | 8.4ms → 5.5ms | `MajorGC` |

##### `MajorGC`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Parent                 |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | ---------------------- |
|  -1.7% | -0.19ms | 100.0% | 11.1ms → 10.9ms |     2 | 5.6ms → 5.5ms | 8.5ms → 5.5ms | `V8.GCHandleGCRequest` |

##### `LiveObjectVisitor::VisitMarkedObjects`

| Change |   Delta |      % |          Time | Count |  Mean |   Max | Parent                           |
| -----: | ------: | -----: | ------------: | ----: | ----: | ----: | -------------------------------- |
| -57.5% | -0.18ms | 100.0% | 0.3ms → 0.1ms | 5 → 2 | 0.1ms | 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `V8.GCHandleGCRequest`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Parent                |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | --------------------- |
|  -1.5% | -0.17ms | 100.0% | 11.1ms → 11.0ms |     2 | 5.6ms → 5.5ms | 8.5ms → 5.5ms | `V8.HandleInterrupts` |

##### `fs.sync.readdir`

| Change |   Delta |      % |          Time | Count |  Mean |   Max | Parent          |
| -----: | ------: | -----: | ------------: | ----: | ----: | ----: | --------------- |
| -12.9% | -0.16ms | 100.0% | 1.2ms → 1.1ms |    21 | 0.1ms | 0.2ms | `RunMicrotasks` |

##### `fs.sync.close`

| Change |   Delta |      % |          Time |         Count |          Mean |             Max | Parent          |
| -----: | ------: | -----: | ------------: | ------------: | ------------: | --------------: | --------------- |
|  -6.1% | -0.15ms | 100.0% | 2.5ms → 2.3ms | 1,122 → 1,125 | 2.2µs → 2.1µs | 30.0µs → 14.0µs | `RunMicrotasks` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`

| Change |   Delta |      % |          Time | Count |          Mean |           Max | Parent                                         |
| -----: | ------: | -----: | ------------: | ----: | ------------: | ------------: | ---------------------------------------------- |
| -28.0% | -0.14ms | 100.0% | 0.5ms → 0.4ms |     2 | 0.3ms → 0.2ms | 0.5ms → 0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN` |

##### `Major concurrent marking rescheduled`

| Change |   Delta |             % |          Time |     Count |          Mean |   Max | Parent                                |
| -----: | ------: | ------------: | ------------: | --------: | ------------: | ----: | ------------------------------------- |
|  -0.6% | -3.00µs | 99.2% → 99.4% |         0.5ms | 665 → 611 | 0.7µs → 0.8µs | 2.0µs | `V8.GC_MC_INCREMENTAL`                |
| -50.0% | -1.00µs |   0.4% → 0.2% | 2.0µs → 1.0µs |         2 | 1.0µs → 0.5µs | 1.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL` |

##### `V8.GC_MC_CLEAR_JOIN_JOB`

| Change |   Delta |      % |  Time | Count |          Mean |           Max | Parent           |
| -----: | ------: | -----: | ----: | ----: | ------------: | ------------: | ---------------- |
| -13.4% | -0.07ms | 100.0% | 0.5ms |     2 | 0.3ms → 0.2ms | 0.3ms → 0.4ms | `V8.GC_MC_CLEAR` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`

| Change |   Delta |      % |          Time | Count |  Mean |           Max | Parent                              |
| -----: | ------: | -----: | ------------: | ----: | ----: | ------------: | ----------------------------------- |
|  -6.9% | -0.05ms | 100.0% | 0.7ms → 0.6ms |     2 | 0.3ms | 0.6ms → 0.5ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |

##### `V8.GC_HEAP_DUMP_STATISTICS`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Parent    |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------- |
|  -7.8% | -0.02ms | 99.4% → 99.0% |         0.3ms |   348 | 0.9µs → 0.8µs | 8.0µs → 5.0µs | `MinorGC` |
| +50.0% | +1.00µs |   0.6% → 1.0% | 2.0µs → 3.0µs |     2 | 1.0µs → 1.5µs | 1.0µs → 2.0µs | `MajorGC` |

##### `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`

| Change |   Delta |      % |  Time | Count |  Mean |             Max | Parent                     |
| -----: | ------: | -----: | ----: | ----: | ----: | --------------: | -------------------------- |
|  -3.5% | -0.02ms | 100.0% | 0.6ms |   348 | 1.7µs | 13.0µs → 10.0µs | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS`

| Change |   Delta |      % |  Time | Count |          Mean |             Max | Parent                     |
| -----: | ------: | -----: | ----: | ----: | ------------: | --------------: | -------------------------- |
|  -2.6% | -0.02ms | 100.0% | 0.6ms |   348 | 1.7µs → 1.6µs | 25.0µs → 13.0µs | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_MC_FINISH`

| Change |   Delta |      % |  Time | Count |  Mean |   Max | Parent                 |
| -----: | ------: | -----: | ----: | ----: | ----: | ----: | ---------------------- |
| -11.6% | -0.01ms | 100.0% | 0.1ms |     2 | 0.1ms | 0.1ms | `V8.GC_MARK_COMPACTOR` |

##### `V8.GC_MC_SWEEP_START_JOBS`

| Change |   Delta |      % |           Time | Count |          Mean |            Max | Parent            |
| -----: | ------: | -----: | -------------: | ----: | ------------: | -------------: | ----------------- |
| -69.2% | -0.01ms | 100.0% | 13.0µs → 4.0µs |     2 | 6.5µs → 2.0µs | 11.0µs → 2.0µs | `V8.GC_MC_FINISH` |

##### `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`

| Change |   Delta |      % |            Time | Count |          Mean |           Max | Parent                       |
| -----: | ------: | -----: | --------------: | ----: | ------------: | ------------: | ---------------------------- |
| -24.1% | -0.01ms | 100.0% | 29.0µs → 22.0µs |     4 | 7.3µs → 5.5µs | 9.0µs → 7.0µs | `V8.GC_MC_INCREMENTAL_START` |

##### `V8.GC_MC_EVACUATE_CLEAN_UP`

| Change |   Delta |      % |           Time | Count |          Mean |           Max | Parent              |
| -----: | ------: | -----: | -------------: | ----: | ------------: | ------------: | ------------------- |
| -40.0% | -4.00µs | 100.0% | 10.0µs → 6.0µs |     2 | 5.0µs → 3.0µs | 8.0µs → 4.0µs | `V8.GC_MC_EVACUATE` |

##### `V8.GC_HEAP_EPILOGUE`

| Change |   Delta |             % |          Time | Count |          Mean |            Max | Parent    |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | -------------: | --------- |
|  -0.3% | -2.00µs | 99.3% → 99.5% |         0.6ms |   348 |         1.7µs | 12.0µs → 5.0µs | `MinorGC` |
| -25.0% | -1.00µs |   0.7% → 0.5% | 4.0µs → 3.0µs |     2 | 2.0µs → 1.5µs |          2.0µs | `MajorGC` |

##### `fs.sync.realpath`

| Change |   Delta |      % |  Time | Count |   Mean |   Max | Parent          |
| -----: | ------: | -----: | ----: | ----: | -----: | ----: | --------------- |
|    ~0% | -2.00µs | 100.0% | 4.5ms |   210 | 21.3µs | 0.1ms | `RunMicrotasks` |

#### Children

Child spans with the largest change in contribution to each span's total time.

##### `RunMicrotasks`

| Change |    Delta |             % |              Time |           Count |            Mean |           Max | Child                        |
| -----: | -------: | ------------: | ----------------: | --------------: | --------------: | ------------: | ---------------------------- |
| -81.9% | -43.28ms |   1.0% → 0.2% |    52.8ms → 9.5ms |   1,122 → 1,125 |  47.1µs → 8.5µs | 6.3ms → 3.8ms | `fs.sync.read`               |
|  +5.5% | +37.44ms | 12.6% → 12.9% | 684.0ms → 721.4ms |             348 |   2.0ms → 2.1ms | 8.6ms → 8.5ms | `MinorGC`                    |
| +12.1% | +10.37ms |   1.6% → 1.7% |   85.9ms → 96.2ms |   2,717 → 2,734 | 31.6µs → 35.2µs | 8.5ms → 5.5ms | `V8.StackGuard`              |
|  +3.6% |  +1.77ms |          0.9% |   48.6ms → 50.4ms |   6,918 → 6,931 |   7.0µs → 7.3µs |         0.3ms | `V8.BytecodeBudgetInterrupt` |
|  +3.0% |  +0.92ms |          0.6% |   30.6ms → 31.5ms | 10,057 → 10,114 |   3.0µs → 3.1µs |         0.1ms | `fs.sync.stat`               |

##### `V8.GC_MC_BACKGROUND_MARKING`

| Change |   Delta |     % |            Time | Count |          Mean |            Max | Child                                   |
| -----: | ------: | ----: | --------------: | ----: | ------------: | -------------: | --------------------------------------- |
| +40.9% | +0.01ms | <0.1% | 22.0µs → 31.0µs |     8 | 2.8µs → 3.9µs | 6.0µs → 14.0µs | `ConcurrentMarking::RunMajor Preempted` |

##### `MinorGC`

| Change |    Delta |             % |              Time | Count |          Mean |             Max | Child                        |
| -----: | -------: | ------------: | ----------------: | ----: | ------------: | --------------: | ---------------------------- |
|  +5.6% | +37.31ms | 97.2% → 97.3% | 664.7ms → 702.0ms |   348 | 1.9ms → 2.0ms |   8.6ms → 8.5ms | `V8.GCScavenger`             |
|  +6.4% |  +0.05ms |          0.1% |             0.8ms |   348 | 2.2µs → 2.3µs | 11.0µs → 13.0µs | `V8.GC_HEAP_PROLOGUE`        |
|  -7.8% |  -0.02ms |         <0.1% |             0.3ms |   348 | 0.9µs → 0.8µs |   8.0µs → 5.0µs | `V8.GC_HEAP_DUMP_STATISTICS` |
|  -0.3% |  -2.00µs |          0.1% |             0.6ms |   348 |         1.7µs |  12.0µs → 5.0µs | `V8.GC_HEAP_EPILOGUE`        |

##### `V8.GCScavenger`

| Change |    Delta |             % |              Time |   Count |            Mean |             Max | Child                                          |
| -----: | -------: | ------------: | ----------------: | ------: | --------------: | --------------: | ---------------------------------------------- |
|  +5.6% | +36.54ms | 98.8% → 98.7% | 656.6ms → 693.2ms |     348 |   1.9ms → 2.0ms |   8.6ms → 8.5ms | `V8.GC_SCAVENGER`                              |
|  -4.1% |  -0.21ms |   0.8% → 0.7% |     5.2ms → 5.0ms |     348 | 14.9µs → 14.3µs |           0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                      |
|  +6.8% |  +4.00µs |         <0.1% |             0.1ms |       4 | 14.8µs → 15.8µs | 31.0µs → 32.0µs | `V8.GC_MC_COMPLETE_SWEEPING`                   |
|  +4.5% |  +1.00µs |         <0.1% |   22.0µs → 23.0µs | 12 → 13 |           1.8µs |   7.0µs → 8.0µs | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |

##### `V8.GC_SCAVENGER`

| Change |    Delta |     % |              Time | Count |           Mean |             Max | Child                                     |
| -----: | -------: | ----: | ----------------: | ----: | -------------: | --------------: | ----------------------------------------- |
|  +5.6% | +35.85ms | 98.4% | 645.9ms → 681.8ms |   348 |  1.9ms → 2.0ms |   8.5ms → 8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                |
| +16.3% |  +0.21ms |  0.2% |     1.3ms → 1.5ms |   348 |  3.7µs → 4.3µs |   0.3ms → 0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`           |
|  +1.7% |  +0.03ms |  0.3% |             1.8ms |   348 |  5.1µs → 5.2µs | 27.0µs → 18.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
| -30.0% |  -3.00µs | <0.1% |    10.0µs → 7.0µs |     1 | 10.0µs → 7.0µs |  10.0µs → 7.0µs | `V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES` |

##### `V8.GC_SCAVENGER_SCAVENGE`

| Change |   Delta |             % |              Time | Count |            Mean |           Max | Child                                     |
| -----: | ------: | ------------: | ----------------: | ----: | --------------: | ------------: | ----------------------------------------- |
|  +2.1% | +8.52ms | 62.6% → 60.6% | 404.6ms → 413.1ms |   348 |           1.2ms | 7.5ms → 7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
| +29.3% | +1.83ms |   1.0% → 1.2% |     6.2ms → 8.1ms |   348 | 17.9µs → 23.1µs | 0.1ms → 1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  +8.1% | +1.77ms |   3.4% → 3.5% |   21.9ms → 23.7ms |   348 |           0.1ms |         0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
| +66.0% | +0.49ms |   0.1% → 0.2% |     0.7ms → 1.2ms |   348 |   2.1µs → 3.6µs | 0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`    |
|  +5.5% | +0.32ms |          0.9% |     5.8ms → 6.2ms |   348 | 16.8µs → 17.7µs |         0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |

##### `V8.StackGuard`

| Change |   Delta |             % |            Time |         Count |            Mean |           Max | Child                 |
| -----: | ------: | ------------: | --------------: | ------------: | --------------: | ------------: | --------------------- |
| +12.5% | +9.51ms | 88.5% → 88.9% | 76.1ms → 85.6ms | 2,718 → 2,735 | 28.0µs → 31.3µs | 8.5ms → 5.5ms | `V8.HandleInterrupts` |

##### `V8.HandleInterrupts`

|  Change |   Delta |             % |            Time |   Count |            Mean |             Max | Child                             |
| ------: | ------: | ------------: | --------------: | ------: | --------------: | --------------: | --------------------------------- |
|   -1.5% | -0.17ms | 14.6% → 12.7% | 11.1ms → 11.0ms |       2 |   5.6ms → 5.5ms |   8.5ms → 5.5ms | `V8.GCHandleGCRequest`            |
|  +44.1% | +0.17ms |   0.5% → 0.6% |   0.4ms → 0.5ms |       1 |   0.4ms → 0.5ms |   0.4ms → 0.5ms | `V8.GCIncrementalMarkingStart`    |
|   +8.0% | +0.11ms |          1.7% |   1.3ms → 1.4ms | 27 → 26 |  49.4µs → 0.1ms |           0.2ms | `V8.GCDeoptMarkedAllocationSites` |
|  +15.4% | +0.01ms |          0.1% |           0.1ms |   3 → 4 | 17.3µs → 15.0µs | 32.0µs → 25.0µs | `V8.GC_MC_SWEEP`                  |
| +100.0% | +1.00µs |         <0.1% |   1.0µs → 2.0µs |       1 |   1.0µs → 2.0µs |   1.0µs → 2.0µs | `V8.GC_TIME_TO_SAFEPOINT`         |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

| Change |    Delta |             % |              Time |     Count |          Mean |           Max | Child                               |
| -----: | -------: | ------------: | ----------------: | --------: | ------------: | ------------: | ----------------------------------- |
|  +2.8% | +10.25ms | 90.3% → 90.9% | 365.4ms → 375.7ms | 379 → 388 |         1.0ms | 7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL` |
|  +9.9% |  +0.03ms |          0.1% |             0.3ms |       348 | 0.8µs → 0.9µs | 5.0µs → 3.0µs | `Parallel scavenge started`         |

##### `V8.BytecodeBudgetInterrupt`

|  Change |   Delta |           % |         Time | Count |         Mean |          Max | Child                     |
| ------: | ------: | ----------: | -----------: | ----: | -----------: | -----------: | ------------------------- |
| removed | -0.04ms | 0.1% → 0.0% | 41.0µs → 0ms | 1 → 0 | 41.0µs → 0ms | 41.0µs → 0ms | `V8.GCIncrementalMarking` |

##### `V8.DeoptimizeCode`

| Change |   Delta |             % |          Time |     Count |            Mean |   Max | Child               |
| -----: | ------: | ------------: | ------------: | --------: | --------------: | ----: | ------------------- |
|  +7.8% | +0.58ms | 37.1% → 37.6% | 7.4ms → 8.0ms | 684 → 670 | 10.9µs → 12.0µs | 0.1ms | `V8.DeoptimizeCode` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

| Change |   Delta |           % |         Time | Count |         Mean |          Max | Child                 |
| -----: | ------: | ----------: | -----------: | ----: | -----------: | -----------: | --------------------- |
|    new | +0.05ms | 0.0% → 0.6% | 0ms → 48.0µs | 0 → 2 | 0ms → 24.0µs | 0ms → 36.0µs | `V8.HandleInterrupts` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`

|  Change |   Delta |             % |           Time |   Count |          Mean |            Max | Child                                 |
| ------: | ------: | ------------: | -------------: | ------: | ------------: | -------------: | ------------------------------------- |
| +472.2% | +0.17ms | 67.9% → 74.6% | 36.0µs → 0.2ms | 15 → 46 | 2.4µs → 4.5µs | 7.0µs → 25.0µs | `RememberedSetUpdatingItem::Process`  |
|     new | +1.00µs |   0.0% → 0.4% |    0ms → 1.0µs |   0 → 1 |   0ms → 1.0µs |    0ms → 1.0µs | `EphemeronTableUpdatingItem::Process` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_COPY`

| Change |   Delta |             % |  Time |   Count |  Mean |           Max | Child                     |
| -----: | ------: | ------------: | ----: | ------: | ----: | ------------: | ------------------------- |
|  +1.8% | +0.04ms | 98.6% → 99.3% | 2.5ms | 27 → 24 | 0.1ms | 0.1ms → 0.2ms | `Evacuator::EvacuatePage` |

##### `V8.GC_MC_INCREMENTAL_START`

|  Change |   Delta |             % |            Time | Count |          Mean |           Max | Child                                    |
| ------: | ------: | ------------: | --------------: | ----: | ------------: | ------------: | ---------------------------------------- |
|  +20.9% | +0.03ms | 31.2% → 26.9% |           0.2ms |     2 |         0.1ms |         0.1ms | `V8.GC_MC_MARK_ROOTS`                    |
|  -24.1% | -0.01ms |   5.6% → 3.0% | 29.0µs → 22.0µs |     4 | 7.3µs → 5.5µs | 9.0µs → 7.0µs | `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`        |
| +100.0% | +1.00µs |   0.2% → 0.3% |   1.0µs → 2.0µs |     2 | 0.5µs → 1.0µs |         1.0µs | `Major concurrent marking started`       |
| +100.0% | +1.00µs |   0.2% → 0.3% |   1.0µs → 2.0µs |     2 | 0.5µs → 1.0µs |         1.0µs | `V8.GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE` |

##### `V8.GC_MC_MARK`

|  Change |   Delta |             % |           Time | Count |            Mean |           Max | Child                                 |
| ------: | ------: | ------------: | -------------: | ----: | --------------: | ------------: | ------------------------------------- |
|  +27.8% | +0.08ms | 34.2% → 35.1% |  0.3ms → 0.4ms |     2 |   0.1ms → 0.2ms |         0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL` |
|   -3.4% | -0.01ms | 21.5% → 16.7% |          0.2ms |     4 | 43.5µs → 42.0µs |         0.1ms | `V8.GC_MC_MARK_ROOTS`                 |
| +100.0% | +4.00µs |   0.5% → 0.8% |  4.0µs → 8.0µs |     2 |   2.0µs → 4.0µs | 2.0µs → 5.0µs | `V8.GC_MC_MARK_FINISH_INCREMENTAL`    |
|  -20.0% | -2.00µs |   1.2% → 0.8% | 10.0µs → 8.0µs |     2 |   5.0µs → 4.0µs | 6.0µs → 4.0µs | `V8.GC_MC_MARK_FULL_CLOSURE`          |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                                            |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ------------------------------------------------ |
| +25.5% | +0.15ms | 44.9% → 52.3% | 0.6ms → 0.7ms |     2 | 0.3ms → 0.4ms | 0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS` |
|  -6.9% | -0.05ms | 53.2% → 45.9% | 0.7ms → 0.6ms |     2 |         0.3ms | 0.6ms → 0.5ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`   |
| -28.6% | -2.00µs |   0.5% → 0.4% | 7.0µs → 5.0µs |     2 | 3.5µs → 2.5µs | 4.0µs → 3.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK`         |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`

| Change |   Delta |             % |           Time | Count |            Mean |             Max | Child                                          |
| -----: | ------: | ------------: | -------------: | ----: | --------------: | --------------: | ---------------------------------------------- |
| +34.5% | +0.07ms | 72.2% → 76.0% |  0.2ms → 0.3ms |     2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`     |
| +36.2% | +0.02ms | 17.0% → 18.1% | 47.0µs → 0.1ms |     4 | 11.8µs → 16.0µs | 28.0µs → 41.0µs | `V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING` |
| -50.0% | -1.00µs |   0.7% → 0.3% |  2.0µs → 1.0µs |     2 |   1.0µs → 0.5µs |           1.0µs | `Major concurrent marking rescheduled`         |
| +16.7% | +1.00µs |   2.2% → 2.0% |  6.0µs → 7.0µs |     4 |   1.5µs → 1.8µs |   2.0µs → 3.0µs | `V8.GC_MC_MARK_EMBEDDER_TRACING`               |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

| Change |   Delta |     % |          Time |   Count |  Mean |   Max | Child                     |
| -----: | ------: | ----: | ------------: | ------: | ----: | ----: | ------------------------- |
|  -9.3% | -0.58ms | 99.2% | 6.3ms → 5.7ms | 69 → 60 | 0.1ms | 0.2ms | `Evacuator::EvacuatePage` |

##### `Evacuator::EvacuatePage`

| Change |   Delta |             % |          Time |   Count |  Mean |   Max | Child                            |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ----: | -------------------------------- |
|  -5.6% | -0.48ms | 97.8% → 98.3% | 8.6ms → 8.1ms | 96 → 84 | 0.1ms | 0.2ms | `FullEvacuator::RawEvacuatePage` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                             |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | --------------------------------- |
|  -9.3% | -0.59ms | 98.6% → 97.5% | 6.3ms → 5.7ms |     2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL` |

##### `V8.GC_MC_EVACUATE_COPY`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                                           |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ----------------------------------------------- |
|  -8.3% | -0.53ms | 99.1% → 98.9% | 6.4ms → 5.9ms |     2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |

##### `FullEvacuator::RawEvacuatePage`

| Change |   Delta |             % |          Time |   Count |  Mean |   Max | Child                                         |
| -----: | ------: | ------------: | ------------: | ------: | ----: | ----: | --------------------------------------------- |
|  -3.4% | -0.28ms | 94.4% → 96.5% | 8.1ms → 7.8ms | 91 → 82 | 0.1ms | 0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
| -57.5% | -0.18ms |   3.6% → 1.6% | 0.3ms → 0.1ms |   5 → 2 | 0.1ms | 0.1ms | `LiveObjectVisitor::VisitMarkedObjects`       |

##### `V8.GCIncrementalMarking`

| Change |   Delta |             % |          Time |     Count |          Mean |           Max | Child                  |
| -----: | ------: | ------------: | ------------: | --------: | ------------: | ------------: | ---------------------- |
|  -5.3% | -0.32ms | 80.5% → 80.1% | 6.1ms → 5.8ms | 667 → 613 | 9.2µs → 9.4µs | 0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL` |

##### `V8.GC_MC_INCREMENTAL`

| Change |   Delta |             % |  Time |     Count |          Mean |             Max | Child                                   |
| -----: | ------: | ------------: | ----: | --------: | ------------: | --------------: | --------------------------------------- |
|  -0.6% | -3.00µs |   8.0% → 8.4% | 0.5ms | 665 → 611 | 0.7µs → 0.8µs |           2.0µs | `Major concurrent marking rescheduled`  |
|  -0.1% | -1.00µs | 12.7% → 13.4% | 0.8ms | 667 → 613 | 1.2µs → 1.3µs | 10.0µs → 25.0µs | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING` |

##### `V8.GC_MC_EVACUATE`

|  Change |   Delta |             % |           Time | Count |          Mean |           Max | Child                               |
| ------: | ------: | ------------: | -------------: | ----: | ------------: | ------------: | ----------------------------------- |
|   -8.1% | -0.52ms | 76.4% → 72.6% |  6.5ms → 5.9ms |     2 | 3.2ms → 3.0ms | 5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY`            |
| +130.1% | +0.13ms |   1.2% → 2.9% |  0.1ms → 0.2ms |     2 |         0.1ms | 0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_PROLOGUE`        |
|   +7.8% | +0.10ms | 15.4% → 17.1% |  1.3ms → 1.4ms |     2 |         0.7ms |         0.9ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |
|  -40.0% | -4.00µs |          0.1% | 10.0µs → 6.0µs |     2 | 5.0µs → 3.0µs | 8.0µs → 4.0µs | `V8.GC_MC_EVACUATE_CLEAN_UP`        |
|   +0.5% | +3.00µs |   6.6% → 6.9% |          0.6ms |     2 |         0.3ms | 0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_REBALANCE`       |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

| Change |   Delta |           % |          Time |  Count |            Mean |             Max | Child                          |
| -----: | ------: | ----------: | ------------: | -----: | --------------: | --------------: | ------------------------------ |
| -87.7% | -0.36ms | 5.1% → 0.7% | 0.4ms → 0.1ms | 18 → 3 | 22.9µs → 17.0µs | 34.0µs → 27.0µs | `V8.GC_MC_SWEEP`               |
|    new | +0.23ms | 0.0% → 2.9% |   0ms → 0.2ms |  0 → 8 |    0ms → 28.8µs |    0ms → 45.0µs | `V8.GC_MC_BACKGROUND_SWEEPING` |

##### `V8.GCFinalizeMC`

| Change |   Delta |             % |           Time | Count |           Mean |            Max | Child                     |
| -----: | ------: | ------------: | -------------: | ----: | -------------: | -------------: | ------------------------- |
| -83.6% | -0.21ms |   2.3% → 0.4% | 0.3ms → 41.0µs |     2 | 0.1ms → 20.5µs | 0.2ms → 26.0µs | `V8.GC_TIME_TO_SAFEPOINT` |
|    ~0% | +4.00µs | 97.5% → 99.3% |         10.7ms |     2 |          5.4ms |  8.2ms → 5.4ms | `V8.GC_MARK_COMPACTOR`    |

##### `MajorGC`

| Change |   Delta |             % |            Time | Count |          Mean |           Max | Child                        |
| -----: | ------: | ------------: | --------------: | ----: | ------------: | ------------: | ---------------------------- |
|  -1.8% | -0.20ms | 99.1% → 99.0% | 11.0ms → 10.8ms |     2 | 5.5ms → 5.4ms | 8.4ms → 5.5ms | `V8.GCFinalizeMC`            |
| -25.0% | -1.00µs |         <0.1% |   4.0µs → 3.0µs |     2 | 2.0µs → 1.5µs |         2.0µs | `V8.GC_HEAP_EPILOGUE`        |
| +50.0% | +1.00µs |         <0.1% |   2.0µs → 3.0µs |     2 | 1.0µs → 1.5µs | 1.0µs → 2.0µs | `V8.GC_HEAP_DUMP_STATISTICS` |

##### `LiveObjectVisitor::VisitMarkedObjects`

| Change |   Delta |             % |           Time | Count |            Mean |             Max | Child            |
| -----: | ------: | ------------: | -------------: | ----: | --------------: | --------------: | ---------------- |
| -65.0% | -0.07ms | 32.5% → 26.7% | 0.1ms → 35.0µs | 3 → 1 | 33.3µs → 35.0µs | 45.0µs → 35.0µs | `V8.GC_MC_SWEEP` |

##### `V8.GCHandleGCRequest`

|  Change |   Delta |             % |            Time | Count |          Mean |            Max | Child                          |
| ------: | ------: | ------------: | --------------: | ----: | ------------: | -------------: | ------------------------------ |
|   -1.7% | -0.19ms | 99.9% → 99.7% | 11.1ms → 10.9ms |     2 | 5.6ms → 5.5ms |  8.5ms → 5.5ms | `MajorGC`                      |
| +600.0% | +0.01ms |  <0.1% → 0.1% |  2.0µs → 14.0µs |     2 | 1.0µs → 7.0µs | 1.0µs → 12.0µs | `V8.GC_HEAP_EXTERNAL_EPILOGUE` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`

| Change |   Delta |             % |          Time |    Count |          Mean |             Max | Child                                 |
| -----: | ------: | ------------: | ------------: | -------: | ------------: | --------------: | ------------------------------------- |
| -33.2% | -0.14ms | 83.1% → 77.0% | 0.4ms → 0.3ms | 114 → 84 | 3.7µs → 3.4µs | 19.0µs → 24.0µs | `RememberedSetUpdatingItem::Process`  |
| -50.0% | -1.00µs |   0.4% → 0.3% | 2.0µs → 1.0µs |    2 → 1 |         1.0µs |           1.0µs | `EphemeronTableUpdatingItem::Process` |

##### `V8.GC_MC_CLEAR_JOIN_JOB`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                         |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | ----------------------------- |
| +42.2% | +0.12ms | 53.2% → 87.4% | 0.3ms → 0.4ms |     1 | 0.3ms → 0.4ms | 0.3ms → 0.4ms | `V8.GC_MC_CLEAR_STRING_TABLE` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`

| Change |   Delta |             % |          Time | Count |          Mean |           Max | Child                                        |
| -----: | ------: | ------------: | ------------: | ----: | ------------: | ------------: | -------------------------------------------- |
| -28.0% | -0.14ms | 73.4% → 56.8% | 0.5ms → 0.4ms |     2 | 0.3ms → 0.2ms | 0.5ms → 0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL` |

##### `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`

| Change |   Delta |             % |  Time |   Count |          Mean |            Max | Child                                       |
| -----: | ------: | ------------: | ----: | ------: | ------------: | -------------: | ------------------------------------------- |
|  -1.5% | -2.00µs | 22.1% → 22.6% | 0.1ms | 43 → 44 | 3.1µs → 3.0µs | 11.0µs → 8.0µs | `V8.GC_MINOR_MS_FINISH_SWEEP_ARRAY_BUFFERS` |

##### `V8.GC_MC_FINISH`

| Change |   Delta |            % |           Time | Count |          Mean |            Max | Child                                 |
| -----: | ------: | -----------: | -------------: | ----: | ------------: | -------------: | ------------------------------------- |
| -69.2% | -0.01ms | 10.7% → 3.7% | 13.0µs → 4.0µs |     2 | 6.5µs → 2.0µs | 11.0µs → 2.0µs | `V8.GC_MC_SWEEP_START_JOBS`           |
| +40.0% | +2.00µs |  4.1% → 6.5% |  5.0µs → 7.0µs |     2 | 2.5µs → 3.5µs |          4.0µs | `V8.GC_MC_FINISH_SWEEP_ARRAY_BUFFERS` |

#### Longest instances

Instances of each span with the most time, paired by rank.

##### `RunMicrotasks`

| Change |     Delta |      % |          Time |      CPU time |         Start | Thread                 |
| -----: | --------: | -----: | ------------: | ------------: | ------------: | ---------------------- |
|  +3.4% | +182.42ms | 100.0% | 5.41s → 5.60s | 5.25s → 5.47s | 7.7ms → 6.6ms | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_UNPARK`

| Change |   Delta |           % |           Time |        CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | -------------: | --------------: | --------------: | ---------------------- |
| +56.6% | +4.84ms | 1.7% → 2.4% | 8.6ms → 13.4ms |  7.0µs → 21.0µs | 2.47s → 924.7ms | `PlatformWorkerThread` |
|  +8.7% | +0.74ms |        1.7% |  8.5ms → 9.3ms |  23.0µs → 8.0µs | 2.47s → 924.6ms | `PlatformWorkerThread` |
| +11.6% | +0.95ms |        1.7% |  8.2ms → 9.2ms |  8.0µs → 19.0µs | 1.37s → 924.3ms | `PlatformWorkerThread` |
|  +8.9% | +0.66ms |        1.5% |  7.4ms → 8.0ms |  8.0µs → 24.0µs |   2.51s → 2.66s | `PlatformWorkerThread` |
| +11.2% | +0.81ms | 1.5% → 1.4% |  7.2ms → 8.0ms | 12.0µs → 14.0µs |   2.26s → 2.66s | `PlatformWorkerThread` |

##### `V8.GC_MC_BACKGROUND_MARKING`

| Change |    Delta |            % |            Time |        CPU time |         Start | Thread                 |
| -----: | -------: | -----------: | --------------: | --------------: | ------------: | ---------------------- |
| +77.9% | +13.12ms | 9.4% → 12.6% | 16.8ms → 29.9ms | 15.5ms → 28.3ms | 1.31s → 1.64s | `PlatformWorkerThread` |
| +77.9% | +13.11ms | 9.4% → 12.5% | 16.8ms → 29.9ms | 15.6ms → 28.6ms | 1.31s → 1.64s | `PlatformWorkerThread` |
| +77.9% | +13.10ms | 9.4% → 12.5% | 16.8ms → 29.9ms | 15.3ms → 27.9ms | 1.31s → 1.64s | `PlatformWorkerThread` |
| +80.9% | +13.37ms | 9.2% → 12.5% | 16.5ms → 29.9ms | 15.3ms → 27.2ms | 1.31s → 1.64s | `PlatformWorkerThread` |
| -10.2% |  -1.59ms |  8.7% → 5.9% | 15.6ms → 14.0ms | 14.7ms → 12.7ms | 1.33s → 1.67s | `PlatformWorkerThread` |

##### `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`

| Change |   Delta |           % |          Time |      CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | ----------------: | ---------------------- |
| -22.1% | -1.03ms | 0.6% → 0.4% | 4.7ms → 3.6ms | 4.6ms → 3.6ms | 650.6ms → 637.9ms | `PlatformWorkerThread` |
| -16.4% | -0.71ms | 0.6% → 0.4% | 4.3ms → 3.6ms | 0.1ms → 3.6ms | 129.4ms → 637.9ms | `PlatformWorkerThread` |
| -20.7% | -0.89ms | 0.5% → 0.4% | 4.3ms → 3.4ms | 0.9ms → 3.2ms | 129.5ms → 398.3ms | `PlatformWorkerThread` |
| -14.1% | -0.55ms | 0.5% → 0.4% | 3.9ms → 3.4ms | 0.1ms → 3.2ms |   129.5ms → 2.62s | `PlatformWorkerThread` |
| -14.0% | -0.55ms | 0.5% → 0.4% | 3.9ms → 3.4ms | 3.7ms → 3.3ms |     2.37s → 2.62s | `PlatformWorkerThread` |

##### `MinorGC`

| Change |   Delta |           % |          Time |      CPU time |         Start | Thread                 | Attributes                                     |
| -----: | ------: | ----------: | ------------: | ------------: | ------------: | ---------------------- | ---------------------------------------------- |
|  -1.1% | -0.10ms | 1.3% → 1.2% | 8.6ms → 8.5ms |         8.5ms | 2.47s → 2.65s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=8.51 MiB` |
|  -3.3% | -0.26ms | 1.2% → 1.1% | 7.9ms → 7.6ms | 7.8ms → 7.6ms | 2.55s → 4.15s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=6.88 MiB` |
|  +1.4% | +0.11ms | 1.1% → 1.0% | 7.5ms → 7.6ms |         7.4ms | 2.51s → 2.34s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=4.23 MiB` |
|  +1.5% | +0.11ms | 1.1% → 1.0% | 7.2ms → 7.4ms | 7.0ms → 7.3ms | 2.26s → 2.75s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=7.97 MiB` |
|  +3.2% | +0.22ms |        1.0% | 7.0ms → 7.2ms | 7.0ms → 7.2ms | 2.65s → 2.73s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=8.29 MiB` |

##### `V8.GCScavenger`

| Change |   Delta |           % |          Time |      CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | ------------: | ---------------------- |
|  -1.2% | -0.10ms | 1.3% → 1.2% | 8.6ms → 8.5ms | 8.5ms → 8.4ms | 2.47s → 2.65s | `JavaScriptMainThread` |
|  -3.9% | -0.30ms | 1.2% → 1.1% | 7.9ms → 7.6ms | 7.8ms → 7.5ms | 2.55s → 4.15s | `JavaScriptMainThread` |
|  +1.4% | +0.11ms |        1.1% | 7.4ms → 7.5ms |         7.4ms | 2.51s → 2.34s | `JavaScriptMainThread` |
|  +1.4% | +0.10ms | 1.1% → 1.0% | 7.2ms → 7.3ms | 7.0ms → 7.2ms | 2.26s → 2.75s | `JavaScriptMainThread` |
|  +3.3% | +0.23ms |        1.0% | 6.9ms → 7.2ms | 6.9ms → 7.1ms | 2.65s → 2.73s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER`

| Change |   Delta |           % |          Time |      CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | ------------: | ---------------------- |
|  -1.1% | -0.10ms | 1.3% → 1.2% | 8.6ms → 8.5ms | 8.5ms → 8.4ms | 2.47s → 2.65s | `JavaScriptMainThread` |
|  -3.9% | -0.31ms | 1.2% → 1.1% | 7.8ms → 7.5ms | 7.8ms → 7.5ms | 2.55s → 4.15s | `JavaScriptMainThread` |
|  -0.1% | -0.01ms |        1.1% |         7.4ms |         7.3ms | 2.51s → 2.34s | `JavaScriptMainThread` |
|  +1.0% | +0.08ms | 1.1% → 1.0% | 7.2ms → 7.3ms | 6.9ms → 7.2ms | 2.26s → 2.75s | `JavaScriptMainThread` |
|  +3.1% | +0.21ms | 1.1% → 1.0% | 6.9ms → 7.1ms | 6.9ms → 7.1ms | 2.65s → 2.73s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE`

| Change |   Delta |           % |          Time |      CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | ------------: | ---------------------- |
|  -0.9% | -0.08ms | 1.3% → 1.2% | 8.5ms → 8.4ms |         8.4ms | 2.47s → 2.65s | `JavaScriptMainThread` |
|  -4.5% | -0.35ms | 1.2% → 1.1% | 7.8ms → 7.4ms | 7.7ms → 7.4ms | 2.55s → 4.15s | `JavaScriptMainThread` |
|    ~0% | -1.00µs |        1.1% |         7.3ms |         7.3ms | 2.51s → 2.34s | `JavaScriptMainThread` |
|  +0.7% | +0.05ms |        1.1% | 7.1ms → 7.2ms | 6.9ms → 7.1ms | 2.26s → 2.75s | `JavaScriptMainThread` |
|  +3.1% | +0.21ms | 1.1% → 1.0% | 6.9ms → 7.1ms | 6.9ms → 7.1ms | 2.65s → 2.73s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_SAFEPOINT`

| Change |   Delta |           % |          Time |        CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | ------------: | --------------: | ------------: | ---------------------- |
| -11.8% | -1.02ms | 3.6% → 3.0% | 8.6ms → 7.6ms | 12.0µs → 22.0µs | 2.47s → 4.15s | `PlatformWorkerThread` |
| -10.5% | -0.89ms | 3.6% → 3.0% | 8.5ms → 7.6ms | 15.0µs → 20.0µs | 1.37s → 4.15s | `PlatformWorkerThread` |
| -11.4% | -0.96ms | 3.6% → 3.0% | 8.5ms → 7.5ms | 17.0µs → 25.0µs | 1.37s → 2.34s | `PlatformWorkerThread` |
|  -7.2% | -0.57ms | 3.3% → 2.9% | 7.9ms → 7.3ms | 12.0µs → 16.0µs | 2.55s → 2.75s | `PlatformWorkerThread` |
|  -8.7% | -0.68ms | 3.3% → 2.8% | 7.9ms → 7.2ms | 17.0µs → 16.0µs | 2.55s → 2.73s | `PlatformWorkerThread` |

##### `V8.StackGuard`

|  Change |   Delta |           % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ----------: | ------------: | ------------: | --------------: | ---------------------- |
|  -34.9% | -2.97ms | 9.9% → 5.8% | 8.5ms → 5.5ms | 8.2ms → 5.5ms | 1.37s → 334.1ms | `JavaScriptMainThread` |
| +106.4% | +2.79ms | 3.1% → 5.6% | 2.6ms → 5.4ms | 2.3ms → 5.3ms | 321.2ms → 1.69s | `JavaScriptMainThread` |
| +104.9% | +0.49ms | 0.5% → 1.0% | 0.5ms → 1.0ms | 0.5ms → 0.1ms | 1.31s → 944.7ms | `JavaScriptMainThread` |
| +155.1% | +0.45ms | 0.3% → 0.8% | 0.3ms → 0.7ms | 0.3ms → 0.7ms |   2.12s → 1.62s | `JavaScriptMainThread` |
|  +50.0% | +0.13ms | 0.3% → 0.4% | 0.3ms → 0.4ms | 0.2ms → 0.4ms |   3.01s → 2.73s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

| Change |   Delta |           % |          Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | --------------: | ---------------------- |
|  -1.6% | -0.12ms | 2.0% → 1.9% | 7.4ms → 7.3ms | 7.4ms → 7.3ms |   2.47s → 2.66s | `JavaScriptMainThread` |
|  -6.6% | -0.45ms | 1.9% → 1.7% | 6.9ms → 6.5ms | 6.9ms → 6.5ms |   2.55s → 2.34s | `JavaScriptMainThread` |
|  -3.7% | -0.24ms | 1.8% → 1.7% | 6.5ms → 6.3ms | 6.5ms → 6.3ms | 2.51s → 858.3ms | `JavaScriptMainThread` |
|  -6.3% | -0.41ms | 1.8% → 1.6% | 6.5ms → 6.1ms | 6.3ms → 6.0ms |   2.26s → 2.75s | `JavaScriptMainThread` |
|  +0.7% | +0.04ms | 1.7% → 1.6% | 6.0ms → 6.1ms |         6.0ms | 2.65s → 565.7ms | `JavaScriptMainThread` |

##### `V8.HandleInterrupts`

|  Change |   Delta |            % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | -----------: | ------------: | ------------: | --------------: | ---------------------- |
|  -34.9% | -2.97ms | 11.1% → 6.4% | 8.5ms → 5.5ms | 8.2ms → 5.5ms | 1.37s → 334.1ms | `JavaScriptMainThread` |
| +106.5% | +2.80ms |  3.4% → 6.3% | 2.6ms → 5.4ms | 2.3ms → 5.3ms | 321.2ms → 1.69s | `JavaScriptMainThread` |
| +106.1% | +0.49ms |  0.6% → 1.1% | 0.5ms → 0.9ms | 0.5ms → 0.1ms | 1.31s → 944.7ms | `JavaScriptMainThread` |
| +151.9% | +0.43ms |  0.4% → 0.8% | 0.3ms → 0.7ms | 0.3ms → 0.7ms |   2.12s → 1.62s | `JavaScriptMainThread` |
|  +71.2% | +0.17ms |  0.3% → 0.5% | 0.2ms → 0.4ms | 0.2ms → 0.4ms |   3.82s → 2.73s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

| Change |   Delta |           % |          Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | --------------: | ---------------------- |
|  -1.9% | -0.14ms | 1.9% → 1.8% | 7.5ms → 7.4ms | 7.4ms → 7.3ms |   2.47s → 2.66s | `JavaScriptMainThread` |
|  -6.3% | -0.44ms | 1.7% → 1.6% | 7.0ms → 6.5ms | 6.9ms → 6.5ms |   2.55s → 2.34s | `JavaScriptMainThread` |
|  -3.6% | -0.23ms | 1.6% → 1.5% | 6.6ms → 6.3ms | 6.5ms → 6.3ms | 2.51s → 858.3ms | `JavaScriptMainThread` |
|  -6.4% | -0.42ms | 1.6% → 1.5% | 6.6ms → 6.1ms | 6.3ms → 6.1ms |   2.26s → 2.75s | `JavaScriptMainThread` |
|  +1.0% | +0.06ms |        1.5% |         6.1ms |         6.1ms |   2.65s → 2.73s | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

|  Change |   Delta |             % |           Time |       CPU time |             Start | Thread                 |
| ------: | ------: | ------------: | -------------: | -------------: | ----------------: | ---------------------- |
|  +55.7% | +5.24ms | 34.4% → 42.5% | 9.4ms → 14.6ms | 9.4ms → 14.6ms |     1.37s → 1.69s | `PlatformWorkerThread` |
|  +15.4% | +1.40ms | 33.3% → 30.4% | 9.1ms → 10.5ms | 9.1ms → 10.4ms |     1.38s → 1.69s | `PlatformWorkerThread` |
|  -28.2% | -1.27ms |  16.4% → 9.3% |  4.5ms → 3.2ms |  4.5ms → 3.2ms |     1.38s → 1.70s | `PlatformWorkerThread` |
| +100.5% | +1.14ms |   4.1% → 6.6% |  1.1ms → 2.3ms |  1.1ms → 2.3ms | 323.7ms → 340.4ms | `PlatformWorkerThread` |
|  +68.2% | +0.75ms |   4.0% → 5.3% |  1.1ms → 1.8ms |  1.1ms → 1.8ms | 323.7ms → 340.8ms | `PlatformWorkerThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

|   Change |   Delta |            % |          Time | CPU time |           Start | Thread                 |
| -------: | ------: | -----------: | ------------: | -------: | --------------: | ---------------------- |
| +1250.0% | +1.33ms | 1.7% → 17.8% | 0.1ms → 1.4ms |    0.1ms | 1.42s → 928.4ms | `JavaScriptMainThread` |
|  +134.0% | +0.07ms |  0.9% → 1.5% |         0.1ms |    0.1ms |   3.98s → 1.74s | `JavaScriptMainThread` |
|  +100.0% | +0.05ms |  0.8% → 1.3% |         0.1ms |    0.1ms | 387.9ms → 3.51s | `JavaScriptMainThread` |
|   +27.5% | +0.01ms |         0.8% |         0.1ms |    0.1ms |   2.86s → 4.76s | `JavaScriptMainThread` |
|    +5.9% | +3.00µs |  0.8% → 0.7% |         0.1ms |    0.1ms | 5.18s → 401.8ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

| Change |   Delta |           % |  Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | ----: | ------------: | --------------: | ---------------------- |
| +14.5% | +0.03ms | 0.9% → 1.0% | 0.2ms | 0.1ms → 0.2ms |   5.17s → 2.75s | `JavaScriptMainThread` |
| +22.6% | +0.04ms | 0.8% → 1.0% | 0.2ms |         0.2ms |   4.24s → 2.73s | `JavaScriptMainThread` |
| +30.7% | +0.05ms | 0.7% → 0.9% | 0.2ms |         0.2ms |   2.63s → 2.70s | `JavaScriptMainThread` |
| +17.4% | +0.03ms | 0.7% → 0.8% | 0.2ms |         0.2ms | 2.65s → 894.3ms | `JavaScriptMainThread` |
| +20.5% | +0.03ms | 0.7% → 0.8% | 0.2ms |         0.2ms |   2.69s → 2.91s | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterrupt`

| Change |   Delta |           % |          Time |       CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | ------------: | -------------: | ----------------: | ---------------------- |
|  -3.4% | -0.01ms |        0.5% |         0.3ms |          0.3ms |   718.9ms → 1.09s | `JavaScriptMainThread` |
|  -9.2% | -0.02ms |        0.5% | 0.3ms → 0.2ms |          0.2ms | 145.8ms → 710.0ms | `JavaScriptMainThread` |
| -30.6% | -0.08ms | 0.5% → 0.3% |         0.2ms |          0.2ms |   1.06s → 710.5ms | `JavaScriptMainThread` |
| -18.7% | -0.04ms | 0.4% → 0.3% |         0.2ms |          0.2ms | 231.1ms → 617.0ms | `JavaScriptMainThread` |
| -10.1% | -0.02ms | 0.4% → 0.3% |         0.2ms | 49.0µs → 0.2ms | 170.6ms → 729.4ms | `JavaScriptMainThread` |

##### `fs.sync.stat`

| Change |   Delta |           % |           Time |       CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | -------------: | -------------: | ----------------: | ---------------------- |
| -18.6% | -0.02ms |        0.3% |          0.1ms |          0.1ms |   149.3ms → 2.29s | `JavaScriptMainThread` |
| -18.5% | -0.02ms | 0.3% → 0.2% |          0.1ms |          0.1ms | 120.8ms → 103.9ms | `JavaScriptMainThread` |
|  -1.8% | -1.00µs |        0.2% |          0.1ms |          0.1ms |   3.92s → 189.7ms | `JavaScriptMainThread` |
|  +8.0% | +4.00µs |        0.2% |          0.1ms |          0.1ms |   3.91s → 452.7ms | `JavaScriptMainThread` |
| +10.4% | +5.00µs |        0.2% | 48.0µs → 0.1ms | 47.0µs → 0.1ms |     2.23s → 4.13s | `JavaScriptMainThread` |

##### `V8.DeoptimizeCode`

| Change |   Delta |           % |  Time | CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | ----: | -------: | --------------: | ---------------------- |
| +13.3% | +0.01ms | 0.4% → 0.5% | 0.1ms |    0.1ms |   3.12s → 3.28s | `JavaScriptMainThread` |
| +32.4% | +0.02ms | 0.3% → 0.4% | 0.1ms |    0.1ms |   3.12s → 1.20s | `JavaScriptMainThread` |
| +36.5% | +0.02ms | 0.3% → 0.4% | 0.1ms |    0.1ms |   2.15s → 2.92s | `JavaScriptMainThread` |
| +41.1% | +0.02ms | 0.3% → 0.4% | 0.1ms |    0.1ms | 3.08s → 956.6ms | `JavaScriptMainThread` |
| +29.1% | +0.02ms |        0.3% | 0.1ms |    0.1ms |   1.27s → 2.17s | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|  Change |   Delta |           % |          Time |      CPU time |             Start | Thread                 |
| ------: | ------: | ----------: | ------------: | ------------: | ----------------: | ---------------------- |
| +117.9% | +0.30ms | 3.6% → 7.3% | 0.3ms → 0.5ms | 0.3ms → 0.5ms | 145.0ms → 115.2ms | `JavaScriptMainThread` |
|  +13.8% | +0.03ms | 3.6% → 3.7% | 0.2ms → 0.3ms | 0.2ms → 0.3ms | 722.1ms → 714.0ms | `JavaScriptMainThread` |
|  -23.3% | -0.05ms | 3.2% → 2.3% |         0.2ms |         0.2ms |   1.72s → 956.2ms | `JavaScriptMainThread` |
|   -8.5% | -0.02ms | 2.5% → 2.1% |         0.2ms | 0.1ms → 0.2ms |   7.1ms → 694.0ms | `JavaScriptMainThread` |
|  -11.2% | -0.02ms | 2.5% → 2.0% |         0.2ms |         0.2ms |   142.4ms → 1.66s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`

|  Change |   Delta |             % |            Time |        CPU time |             Start | Thread                 |
| ------: | ------: | ------------: | --------------: | --------------: | ----------------: | ---------------------- |
| +152.2% | +0.18ms | 30.5% → 36.0% |   0.1ms → 0.3ms |  46.0µs → 0.3ms |   388.0ms → 4.16s | `PlatformWorkerThread` |
| +528.6% | +0.07ms |  3.7% → 10.9% |  14.0µs → 0.1ms |  13.0µs → 0.1ms |     4.08s → 2.30s | `PlatformWorkerThread` |
| +515.4% | +0.07ms |   3.4% → 9.9% |  13.0µs → 0.1ms |  13.0µs → 0.1ms |   2.35s → 451.4ms | `PlatformWorkerThread` |
| +330.8% | +0.04ms |   3.4% → 7.0% |  13.0µs → 0.1ms |  13.0µs → 0.1ms |   3.98s → 377.0ms | `PlatformWorkerThread` |
| +258.3% | +0.03ms |   3.2% → 5.3% | 12.0µs → 43.0µs | 11.0µs → 42.0µs | 420.4ms → 267.6ms | `PlatformWorkerThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`

|  Change |   Delta |              % |           Time |       CPU time |           Start | Thread                 |
| ------: | ------: | -------------: | -------------: | -------------: | --------------: | ---------------------- |
| +820.0% | +0.25ms | 56.6% → 100.0% | 30.0µs → 0.3ms | 29.0µs → 0.3ms | 323.3ms → 1.69s | `PlatformWorkerThread` |
| removed | -0.02ms |   43.4% → 0.0% |   23.0µs → 0ms |   22.0µs → 0ms |   323.3ms → 0ms | `PlatformWorkerThread` |

##### `V8.GCDeoptMarkedAllocationSites`

| Change |   Delta |             % |  Time | CPU time |         Start | Thread                 |
| -----: | ------: | ------------: | ----: | -------: | ------------: | ---------------------- |
|  +2.5% | +4.00µs | 11.8% → 11.2% | 0.2ms |    0.2ms | 3.96s → 2.91s | `JavaScriptMainThread` |
| +57.0% | +0.05ms |   6.4% → 9.4% | 0.1ms |    0.1ms | 4.26s → 2.70s | `JavaScriptMainThread` |
| +43.1% | +0.03ms |   5.4% → 7.1% | 0.1ms |    0.1ms | 2.56s → 4.09s | `JavaScriptMainThread` |
| +27.8% | +0.02ms |   5.4% → 6.4% | 0.1ms |    0.1ms | 2.63s → 2.62s | `JavaScriptMainThread` |
| +26.6% | +0.02ms |   4.8% → 5.6% | 0.1ms |    0.1ms | 2.29s → 4.42s | `JavaScriptMainThread` |

##### `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`

|  Change |   Delta |            % |           Time |       CPU time |           Start | Thread                 |
| ------: | ------: | -----------: | -------------: | -------------: | --------------: | ---------------------- |
| +480.0% | +0.02ms | 5.0% → 18.7% | 5.0µs → 29.0µs |  5.0µs → 6.0µs | 2.27s → 377.0ms | `PlatformWorkerThread` |
| +100.0% | +0.01ms |  5.0% → 6.5% | 5.0µs → 10.0µs | 5.0µs → 11.0µs | 135.6ms → 4.26s | `PlatformWorkerThread` |
| +125.0% | +0.01ms |  4.0% → 5.8% |  4.0µs → 9.0µs |  4.0µs → 8.0µs |   3.98s → 2.36s | `PlatformWorkerThread` |
| +100.0% | +3.00µs |  3.0% → 3.9% |  3.0µs → 6.0µs |  2.0µs → 6.0µs |   2.35s → 2.30s | `PlatformWorkerThread` |
|  +66.7% | +2.00µs |  3.0% → 3.2% |  3.0µs → 5.0µs |  4.0µs → 3.0µs |   3.93s → 4.17s | `PlatformWorkerThread` |

##### `RememberedSetUpdatingItem::Process`

| Change |   Delta |           % |            Time |        CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | --------------: | --------------: | --------------: | ---------------------- |
| +31.6% | +0.01ms | 4.1% → 5.1% | 19.0µs → 25.0µs | 19.0µs → 25.0µs |   1.37s → 1.69s | `PlatformWorkerThread` |
| +50.0% | +0.01ms | 3.5% → 4.9% | 16.0µs → 24.0µs | 17.0µs → 25.0µs |   1.37s → 1.69s | `JavaScriptMainThread` |
| +26.7% | +4.00µs | 3.3% → 3.9% | 15.0µs → 19.0µs | 16.0µs → 19.0µs |   1.37s → 1.69s | `JavaScriptMainThread` |
| +26.7% | +4.00µs | 3.3% → 3.9% | 15.0µs → 19.0µs | 15.0µs → 19.0µs |   1.37s → 1.69s | `JavaScriptMainThread` |
| +21.4% | +3.00µs | 3.1% → 3.5% | 14.0µs → 17.0µs | 15.0µs → 18.0µs | 1.37s → 339.2ms | `JavaScriptMainThread` |

##### `Parallel scavenge started`

| Change |   Delta |           % |          Time |      CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | ----------------: | ---------------------- |
| -40.0% | -2.00µs | 1.8% → 1.0% | 5.0µs → 3.0µs | 5.0µs → 3.0µs |     5.22s → 2.73s | `JavaScriptMainThread` |
|   0.0% |     0ms | 0.7% → 0.6% |         2.0µs | 2.0µs → 1.0µs | 109.6ms → 224.6ms | `JavaScriptMainThread` |
|   0.0% |     0ms | 0.7% → 0.6% |         2.0µs | 2.0µs → 3.0µs |     1.61s → 2.59s | `JavaScriptMainThread` |
|   0.0% |     0ms | 0.7% → 0.6% |         2.0µs | 2.0µs → 1.0µs |     2.88s → 3.57s | `JavaScriptMainThread` |
|   0.0% |     0ms | 0.7% → 0.6% |         2.0µs | 3.0µs → 2.0µs |     3.29s → 3.73s | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_COPY`

|  Change |   Delta |              % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | -------------: | ------------: | ------------: | --------------: | ---------------------- |
| +196.9% | +1.70ms | 34.1% → 100.0% | 0.9ms → 2.6ms | 0.8ms → 2.6ms | 322.1ms → 1.69s | `PlatformWorkerThread` |
| removed | -0.86ms |   34.0% → 0.0% |   0.9ms → 0ms |   0.9ms → 0ms |   322.1ms → 0ms | `PlatformWorkerThread` |
| removed | -0.81ms |   32.0% → 0.0% |   0.8ms → 0ms |   0.8ms → 0ms |   322.1ms → 0ms | `PlatformWorkerThread` |

##### `ConcurrentMarking::RunMajor Preempted`

|  Change |   Delta |             % |           Time |       CPU time |         Start | Thread                 |
| ------: | ------: | ------------: | -------------: | -------------: | ------------: | ---------------------- |
| +133.3% | +0.01ms | 27.3% → 45.2% | 6.0µs → 14.0µs | 6.0µs → 14.0µs | 1.34s → 1.63s | `PlatformWorkerThread` |
|  +33.3% | +1.00µs | 13.6% → 12.9% |  3.0µs → 4.0µs |  4.0µs → 5.0µs | 1.32s → 1.63s | `PlatformWorkerThread` |
|    0.0% |     0ms |  13.6% → 9.7% |          3.0µs |          3.0µs | 1.32s → 1.63s | `PlatformWorkerThread` |
|    0.0% |     0ms |  13.6% → 9.7% |          3.0µs |  4.0µs → 3.0µs | 1.32s → 1.67s | `PlatformWorkerThread` |
|  +50.0% | +1.00µs |   9.1% → 9.7% |  2.0µs → 3.0µs |  1.0µs → 3.0µs | 1.34s → 1.63s | `PlatformWorkerThread` |

##### `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`

| Change |   Delta |             % |           Time |        CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | -------------: | --------------: | ----------------: | ---------------------- |
| +33.3% | +3.00µs | 69.2% → 66.7% | 9.0µs → 12.0µs | 10.0µs → 12.0µs |     1.37s → 1.69s | `PlatformWorkerThread` |
| +50.0% | +2.00µs | 30.8% → 33.3% |  4.0µs → 6.0µs |   4.0µs → 6.0µs | 323.7ms → 340.4ms | `PlatformWorkerThread` |

##### `ClearStringTableJob started`

| Change |   Delta |            % |        Time |    CPU time |             Start | Thread                 |
| -----: | ------: | -----------: | ----------: | ----------: | ----------------: | ---------------------- |
|    new | +1.00µs | 0.0% → 50.0% | 0ms → 1.0µs |       1.0µs | 321.6ms → 334.6ms | `JavaScriptMainThread` |
|    new | +1.00µs | 0.0% → 50.0% | 0ms → 1.0µs | 1.0µs → 0ms |     1.37s → 1.69s | `JavaScriptMainThread` |

##### `Major concurrent marking started`

| Change |   Delta |             % |        Time | CPU time |           Start | Thread                 |
| -----: | ------: | ------------: | ----------: | -------: | --------------: | ---------------------- |
|   0.0% |     0ms | 33.3% → 25.0% |       1.0µs |      0ms | 1.31s → 322.7ms | `JavaScriptMainThread` |
|   0.0% |     0ms | 33.3% → 25.0% |       1.0µs |      0ms |   1.33s → 1.62s | `JavaScriptMainThread` |
|   0.0% |     0ms | 33.3% → 25.0% |       1.0µs |      0ms |   1.35s → 1.64s | `JavaScriptMainThread` |
|    new | +1.00µs |  0.0% → 25.0% | 0ms → 1.0µs |      0ms | 313.6ms → 1.67s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`

|  Change |   Delta |             % |            Time |        CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | --------------: | --------------: | --------------: | ---------------------- |
| +396.6% | +0.47ms | 15.8% → 47.2% |   0.1ms → 0.6ms |   0.1ms → 0.6ms |   1.33s → 1.64s | `JavaScriptMainThread` |
|  +11.8% | +0.01ms |  13.6% → 9.2% |           0.1ms |           0.1ms |   1.35s → 1.67s | `JavaScriptMainThread` |
|  +30.0% | +3.00µs |   1.3% → 1.0% | 10.0µs → 13.0µs | 10.0µs → 13.0µs |   2.03s → 1.59s | `JavaScriptMainThread` |
|  +33.3% | +3.00µs |   1.2% → 1.0% |  9.0µs → 12.0µs |  9.0µs → 13.0µs | 5.41s → 527.6ms | `JavaScriptMainThread` |
|  +50.0% | +3.00µs |   0.8% → 0.7% |   6.0µs → 9.0µs |  6.0µs → 11.0µs |   1.50s → 1.51s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

| Change |   Delta |           % |  Time | CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | ----: | -------: | ----------------: | ---------------------- |
|  +1.7% | +3.00µs | 3.0% → 2.9% | 0.2ms |    0.2ms |     4.17s → 4.38s | `JavaScriptMainThread` |
|  +0.9% | +1.00µs | 1.9% → 1.8% | 0.1ms |    0.1ms | 802.8ms → 791.9ms | `JavaScriptMainThread` |
|  -2.7% | -3.00µs | 1.9% → 1.8% | 0.1ms |    0.1ms |     2.60s → 2.66s | `JavaScriptMainThread` |
|  -2.0% | -2.00µs | 1.7% → 1.6% | 0.1ms |    0.1ms |     4.22s → 4.40s | `JavaScriptMainThread` |
|  +3.3% | +3.00µs | 1.6% → 1.5% | 0.1ms |    0.1ms |   2.50s → 641.6ms | `JavaScriptMainThread` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

| Change |   Delta |             % |            Time |        CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | --------------: | --------------: | ----------------: | ---------------------- |
| +44.3% | +0.15ms | 25.8% → 32.0% |   0.3ms → 0.5ms |   0.3ms → 0.5ms | 286.9ms → 239.6ms | `JavaScriptMainThread` |
| +46.4% | +0.08ms | 13.8% → 17.3% |   0.2ms → 0.3ms |   0.2ms → 0.3ms | 225.1ms → 182.5ms | `JavaScriptMainThread` |
|  +7.5% | +0.01ms |   8.2% → 7.6% |           0.1ms |           0.1ms | 129.1ms → 111.4ms | `JavaScriptMainThread` |
| -15.5% | -0.01ms |   4.5% → 3.2% |  0.1ms → 49.0µs |  0.1ms → 49.0µs |  111.6ms → 94.7ms | `JavaScriptMainThread` |
| -58.3% | -0.01ms |   1.8% → 0.7% | 24.0µs → 10.0µs | 24.0µs → 10.0µs |    4.53s → 93.7ms | `JavaScriptMainThread` |

##### `V8.GC_MC_INCREMENTAL_START`

| Change |   Delta |             % |          Time |      CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ------------: | ------------: | ----------------: | ---------------------- |
| +43.9% | +0.17ms | 72.8% → 74.8% | 0.4ms → 0.5ms | 0.4ms → 0.5ms |     1.31s → 1.62s | `JavaScriptMainThread` |
| +29.6% | +0.04ms | 27.2% → 25.2% | 0.1ms → 0.2ms | 0.1ms → 0.2ms | 313.5ms → 322.5ms | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK`

| Change |   Delta |             % |          Time |      CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ------------: | ------------: | ----------------: | ---------------------- |
| +11.9% | +0.06ms | 66.3% → 59.7% | 0.5ms → 0.6ms | 0.5ms → 0.6ms |     1.37s → 1.69s | `JavaScriptMainThread` |
| +49.1% | +0.13ms | 33.7% → 40.3% | 0.3ms → 0.4ms | 0.3ms → 0.4ms | 321.3ms → 334.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`

| Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
| +30.1% | +0.09ms | 51.2% → 53.1% | 0.3ms → 0.4ms | 0.3ms → 0.4ms | 1.37s → 338.7ms | `JavaScriptMainThread` |
| +20.7% | +0.06ms | 48.8% → 46.9% |         0.3ms |         0.3ms | 323.0ms → 1.69s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_PROLOGUE`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
| +250.0% | +0.13ms | 50.5% → 76.8% | 0.1ms → 0.2ms | 0.1ms → 0.2ms | 1.37s → 335.3ms | `JavaScriptMainThread` |
|   +7.8% | +4.00µs | 49.5% → 23.2% |         0.1ms |         0.1ms | 322.0ms → 1.69s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS`

| Change |   Delta |             % |          Time |      CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ------------: | ------------: | ----------------: | ---------------------- |
|  -7.9% | -0.07ms | 71.6% → 61.2% |         0.9ms | 0.9ms → 0.8ms |     1.37s → 1.69s | `JavaScriptMainThread` |
| +47.4% | +0.18ms | 28.4% → 38.8% | 0.4ms → 0.5ms | 0.4ms → 0.5ms | 323.0ms → 338.7ms | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`

| Change |   Delta |             % |  Time | CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ----: | -------: | ----------------: | ---------------------- |
| +23.6% | +0.05ms | 70.4% → 68.1% | 0.2ms |    0.2ms |     1.37s → 1.69s | `JavaScriptMainThread` |
| +37.8% | +0.03ms | 29.6% → 31.9% | 0.1ms |    0.1ms | 321.4ms → 334.4ms | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`

| Change |   Delta |             % |          Time |        CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ------------: | --------------: | ----------------: | ---------------------- |
| +39.6% | +0.06ms | 74.5% → 77.3% | 0.1ms → 0.2ms |   0.1ms → 0.2ms |     1.37s → 1.69s | `JavaScriptMainThread` |
| +19.6% | +0.01ms | 25.5% → 22.7% |         0.1ms | 31.0µs → 37.0µs | 321.5ms → 334.5ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY`

| Change |   Delta |           % |            Time |        CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | --------------: | --------------: | ------------: | ---------------------- |
|  -7.1% | -1.00µs | 2.5% → 2.1% | 14.0µs → 13.0µs | 13.0µs → 11.0µs | 5.17s → 3.57s | `JavaScriptMainThread` |
|  +9.1% | +1.00µs |        1.9% | 11.0µs → 12.0µs | 11.0µs → 13.0µs | 1.43s → 2.26s | `JavaScriptMainThread` |
| +20.0% | +2.00µs | 1.8% → 1.9% | 10.0µs → 12.0µs |  9.0µs → 11.0µs | 4.57s → 3.34s | `JavaScriptMainThread` |
| +25.0% | +2.00µs | 1.4% → 1.6% |  8.0µs → 10.0µs |   8.0µs → 9.0µs | 5.22s → 3.15s | `JavaScriptMainThread` |
| +66.7% | +4.00µs | 1.1% → 1.6% |  6.0µs → 10.0µs |   5.0µs → 9.0µs | 3.54s → 5.48s | `JavaScriptMainThread` |

##### `V8.GC_HEAP_PROLOGUE`

| Change |   Delta |           % |            Time |        CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | --------------: | --------------: | --------------: | ---------------------- |
| +18.2% | +2.00µs | 1.4% → 1.6% | 11.0µs → 13.0µs | 11.0µs → 12.0µs |   3.24s → 2.30s | `JavaScriptMainThread` |
| +22.2% | +2.00µs | 1.2% → 1.3% |  9.0µs → 11.0µs |          11.0µs | 4.79s → 789.8ms | `JavaScriptMainThread` |
| +42.9% | +3.00µs | 0.9% → 1.2% |  7.0µs → 10.0µs |  6.0µs → 11.0µs |   3.79s → 3.32s | `JavaScriptMainThread` |
|   0.0% |     0ms |        0.9% |           7.0µs |   6.0µs → 5.0µs |   3.88s → 2.18s | `JavaScriptMainThread` |
| -14.3% | -1.00µs | 0.9% → 0.7% |   7.0µs → 6.0µs |           6.0µs |   4.57s → 1.84s | `JavaScriptMainThread` |

##### `fs.sync.fstat`

| Change |   Delta |           % |            Time |        CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | --------------: | --------------: | --------------: | ---------------------- |
| -31.8% | -0.01ms | 1.0% → 0.7% | 22.0µs → 15.0µs | 10.0µs → 14.0µs | 2.39s → 331.7ms | `JavaScriptMainThread` |
| +55.6% | +5.00µs | 0.4% → 0.6% |  9.0µs → 14.0µs |  9.0µs → 15.0µs | 151.1ms → 2.36s | `JavaScriptMainThread` |
| +37.5% | +3.00µs | 0.4% → 0.5% |  8.0µs → 11.0µs |  9.0µs → 11.0µs |   2.35s → 4.11s | `JavaScriptMainThread` |
| +66.7% | +4.00µs | 0.3% → 0.4% |  6.0µs → 10.0µs |  5.0µs → 10.0µs | 305.9ms → 2.36s | `JavaScriptMainThread` |
| +66.7% | +4.00µs | 0.3% → 0.4% |  6.0µs → 10.0µs |   5.0µs → 9.0µs |   2.23s → 2.42s | `JavaScriptMainThread` |

##### `fs.sync.lstat`

|  Change |   Delta |             % |           Time |       CPU time |          Start | Thread                 |
| ------: | ------: | ------------: | -------------: | -------------: | -------------: | ---------------------- |
| +414.3% | +0.03ms | 12.3% → 37.5% | 7.0µs → 36.0µs | 8.0µs → 36.0µs |  6.0ms → 5.2ms | `JavaScriptMainThread` |
| +120.0% | +0.01ms |  8.8% → 11.5% | 5.0µs → 11.0µs | 5.0µs → 11.0µs |  7.3ms → 5.2ms | `JavaScriptMainThread` |
|  +80.0% | +4.00µs |   8.8% → 9.4% |  5.0µs → 9.0µs |  5.0µs → 9.0µs |  9.1ms → 6.3ms | `JavaScriptMainThread` |
|  +75.0% | +3.00µs |   7.0% → 7.3% |  4.0µs → 7.0µs |  4.0µs → 8.0µs | 14.6ms → 6.4ms | `JavaScriptMainThread` |
|    0.0% |     0ms |   5.3% → 3.1% |          3.0µs |          3.0µs |  6.0ms → 5.3ms | `JavaScriptMainThread` |

##### `fs.sync.read`

| Change |   Delta |             % |          Time |       CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ------------: | -------------: | ----------------: | ---------------------- |
| -39.3% | -2.47ms | 11.9% → 39.9% | 6.3ms → 3.8ms |  4.9ms → 3.8ms |   14.7ms → 11.2ms | `JavaScriptMainThread` |
| -48.2% | -0.28ms |   1.1% → 3.1% | 0.6ms → 0.3ms |          0.3ms | 513.4ms → 488.9ms | `JavaScriptMainThread` |
| -45.3% | -0.20ms |   0.8% → 2.5% | 0.4ms → 0.2ms |          0.2ms |   446.5ms → 2.49s | `JavaScriptMainThread` |
| -52.9% | -0.20ms |   0.7% → 1.9% | 0.4ms → 0.2ms |  0.1ms → 0.2ms |   138.6ms → 4.24s | `JavaScriptMainThread` |
| -73.4% | -0.28ms |   0.7% → 1.1% | 0.4ms → 0.1ms | 46.0µs → 0.1ms |   343.1ms → 2.44s | `JavaScriptMainThread` |

##### `fs.sync.open`

| Change |   Delta |           % |          Time | CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | ------------: | -------: | ----------------: | ---------------------- |
| -55.3% | -0.17ms | 1.3% → 0.6% | 0.3ms → 0.1ms |    0.1ms | 138.3ms → 403.3ms | `JavaScriptMainThread` |
|  -2.4% | -3.00µs |        0.5% |         0.1ms |    0.1ms | 340.0ms → 244.8ms | `JavaScriptMainThread` |
|  -2.5% | -3.00µs |        0.5% |         0.1ms |    0.1ms |   151.0ms → 2.29s | `JavaScriptMainThread` |
| +54.2% | +0.04ms | 0.3% → 0.5% |         0.1ms |    0.1ms | 315.7ms → 377.3ms | `JavaScriptMainThread` |
| +28.2% | +0.02ms | 0.3% → 0.4% |         0.1ms |    0.1ms |   2.22s → 301.4ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  -41.9% | -2.28ms | 86.3% → 55.3% | 5.5ms → 3.2ms | 5.5ms → 3.2ms | 1.37s → 335.5ms | `JavaScriptMainThread` |
| +195.8% | +1.70ms | 13.7% → 44.7% | 0.9ms → 2.6ms | 0.8ms → 2.6ms | 322.1ms → 1.69s | `JavaScriptMainThread` |

##### `Evacuator::EvacuatePage`

| Change |   Delta |           % |          Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | --------------: | ---------------------- |
| -26.2% | -0.06ms | 2.7% → 2.1% |         0.2ms |         0.2ms |   1.37s → 1.69s | `PlatformWorkerThread` |
|  -2.3% | -4.00µs | 2.0% → 2.1% |         0.2ms |         0.2ms |   1.37s → 1.69s | `PlatformWorkerThread` |
|  -8.5% | -0.01ms | 1.9% → 1.8% |         0.2ms |         0.2ms | 1.37s → 337.8ms | `JavaScriptMainThread` |
|  -9.1% | -0.02ms | 1.9% → 1.8% | 0.2ms → 0.1ms | 0.2ms → 0.1ms |   1.37s → 1.69s | `PlatformWorkerThread` |
| -16.0% | -0.03ms | 1.8% → 1.7% | 0.2ms → 0.1ms | 0.2ms → 0.1ms | 1.37s → 338.5ms | `JavaScriptMainThread` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  -41.4% | -2.27ms | 85.8% → 54.8% | 5.5ms → 3.2ms | 5.5ms → 3.2ms | 1.37s → 335.5ms | `JavaScriptMainThread` |
| +190.8% | +1.74ms | 14.2% → 45.2% | 0.9ms → 2.7ms | 0.9ms → 2.6ms | 322.0ms → 1.69s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  -41.2% | -2.28ms | 85.5% → 54.7% | 5.5ms → 3.2ms | 5.5ms → 3.2ms | 1.37s → 335.5ms | `JavaScriptMainThread` |
| +187.0% | +1.75ms | 14.5% → 45.3% | 0.9ms → 2.7ms | 0.9ms → 2.6ms | 322.0ms → 1.69s | `JavaScriptMainThread` |

##### `FullEvacuator::RawEvacuatePage`

| Change |   Delta |           % |          Time |      CPU time |           Start | Thread                 | Attributes                           |
| -----: | ------: | ----------: | ------------: | ------------: | --------------: | ---------------------- | ------------------------------------ |
| -26.7% | -0.06ms | 2.8% → 2.1% |         0.2ms |         0.2ms |   1.37s → 1.69s | `PlatformWorkerThread` | `evacuation_mode=objects-new-to-old` |
|  -2.3% | -4.00µs | 2.0% → 2.1% |         0.2ms |         0.2ms |   1.37s → 1.69s | `PlatformWorkerThread` | `evacuation_mode=objects-new-to-old` |
|  -9.2% | -0.02ms | 1.9% → 1.8% | 0.2ms → 0.1ms | 0.2ms → 0.1ms | 1.37s → 337.8ms | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |
|  -8.6% | -0.01ms | 1.9% → 1.8% | 0.2ms → 0.1ms | 0.2ms → 0.1ms |   1.37s → 1.69s | `PlatformWorkerThread` | `evacuation_mode=objects-new-to-old` |
| -15.5% | -0.03ms | 1.9% → 1.7% | 0.2ms → 0.1ms | 0.2ms → 0.1ms | 1.37s → 338.5ms | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |

##### `V8.GC_TIME_TO_SAFEPOINT`

| Change |   Delta |           % |          Time |        CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | ------------: | --------------: | ------------: | ---------------------- |
| -14.5% | -0.08ms | 9.9% → 9.2% |         0.5ms | 27.0µs → 15.0µs | 2.96s → 3.31s | `JavaScriptMainThread` |
| -27.2% | -0.13ms | 8.8% → 7.0% | 0.5ms → 0.4ms |  9.0µs → 13.0µs | 1.19s → 3.25s | `JavaScriptMainThread` |
| -40.8% | -0.19ms | 8.7% → 5.6% | 0.5ms → 0.3ms |           8.0µs | 3.77s → 3.45s | `JavaScriptMainThread` |
| -14.6% | -0.04ms | 5.5% → 5.1% |         0.3ms |  14.0µs → 6.0µs | 3.00s → 3.97s | `JavaScriptMainThread` |
| -24.0% | -0.07ms | 5.5% → 4.5% | 0.3ms → 0.2ms |   7.0µs → 8.0µs | 2.88s → 4.82s | `JavaScriptMainThread` |

##### `V8.GCIncrementalMarking`

| Change |   Delta |           % |          Time |      CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | ------------: | ---------------------- |
| +59.3% | +0.07ms | 1.5% → 2.5% | 0.1ms → 0.2ms | 0.1ms → 0.2ms | 1.32s → 1.67s | `JavaScriptMainThread` |
| +42.9% | +0.05ms | 1.4% → 2.1% | 0.1ms → 0.2ms |         0.1ms | 1.32s → 1.68s | `JavaScriptMainThread` |
| +42.6% | +0.04ms | 1.2% → 1.9% |         0.1ms |         0.1ms | 1.32s → 1.68s | `JavaScriptMainThread` |
|  +1.1% | +1.00µs | 1.2% → 1.3% |         0.1ms |         0.1ms | 1.32s → 1.67s | `JavaScriptMainThread` |
| +16.9% | +0.01ms | 1.0% → 1.2% |         0.1ms |         0.1ms | 1.33s → 1.67s | `JavaScriptMainThread` |

##### `V8.GC_MC_SWEEP`

| Change |   Delta |             % |            Time |        CPU time |           Start | Thread                 |
| -----: | ------: | ------------: | --------------: | --------------: | --------------: | ---------------------- |
| +25.4% | +0.03ms | 17.3% → 44.7% |   0.1ms → 0.2ms |   0.1ms → 0.2ms |   1.37s → 1.69s | `JavaScriptMainThread` |
| -17.8% | -0.01ms |  6.4% → 10.8% | 45.0µs → 37.0µs | 44.0µs → 38.0µs | 1.37s → 335.2ms | `JavaScriptMainThread` |
|  +2.9% | +1.00µs |  4.8% → 10.2% | 34.0µs → 35.0µs |          35.0µs |   1.37s → 1.69s | `JavaScriptMainThread` |
| -15.6% | -0.01ms |   4.5% → 7.9% | 32.0µs → 27.0µs | 31.0µs → 26.0µs | 1.37s → 337.8ms | `JavaScriptMainThread` |
| -21.9% | -0.01ms |   4.5% → 7.3% | 32.0µs → 25.0µs | 33.0µs → 24.0µs | 1.38s → 339.8ms | `JavaScriptMainThread` |

##### `V8.GC_MC_INCREMENTAL`

| Change |   Delta |           % |          Time |      CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | ------------: | ---------------------- |
| +58.9% | +0.07ms | 1.8% → 3.1% | 0.1ms → 0.2ms | 0.1ms → 0.2ms | 1.32s → 1.67s | `JavaScriptMainThread` |
| +42.3% | +0.04ms | 1.7% → 2.6% |         0.1ms |         0.1ms | 1.32s → 1.68s | `JavaScriptMainThread` |
| +42.4% | +0.04ms | 1.5% → 2.3% |         0.1ms |         0.1ms | 1.32s → 1.68s | `JavaScriptMainThread` |
|   0.0% |     0ms |        1.5% |         0.1ms |         0.1ms | 1.32s → 1.67s | `JavaScriptMainThread` |
| +17.1% | +0.01ms | 1.2% → 1.5% |         0.1ms |         0.1ms | 1.33s → 1.67s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  -39.0% | -2.54ms | 77.1% → 48.7% | 6.5ms → 4.0ms | 6.5ms → 4.0ms | 1.37s → 335.3ms | `JavaScriptMainThread` |
| +164.1% | +2.25ms | 16.2% → 44.3% | 1.4ms → 3.6ms | 1.3ms → 3.5ms | 322.0ms → 1.69s | `JavaScriptMainThread` |
|  +16.8% | +0.05ms |   3.6% → 4.3% | 0.3ms → 0.4ms | 0.3ms → 0.4ms | 323.3ms → 1.69s | `JavaScriptMainThread` |
|  -14.8% | -0.04ms |   3.1% → 2.7% | 0.3ms → 0.2ms | 0.3ms → 0.2ms | 1.37s → 339.3ms | `JavaScriptMainThread` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

| Change |   Delta |           % |          Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | --------------: | ---------------------- |
| -25.9% | -0.06ms | 2.8% → 2.2% |         0.2ms |         0.2ms |   1.37s → 1.69s | `PlatformWorkerThread` |
|  -2.3% | -4.00µs | 2.1% → 2.2% |         0.2ms |         0.2ms |   1.37s → 1.69s | `PlatformWorkerThread` |
|  -9.3% | -0.02ms | 2.0% → 1.9% | 0.2ms → 0.1ms | 0.2ms → 0.1ms | 1.37s → 337.8ms | `JavaScriptMainThread` |
|  -8.8% | -0.01ms | 2.0% → 1.9% | 0.2ms → 0.1ms | 0.2ms → 0.1ms |   1.37s → 1.69s | `PlatformWorkerThread` |
| -16.4% | -0.03ms | 2.0% → 1.7% | 0.2ms → 0.1ms | 0.2ms → 0.1ms | 1.37s → 338.5ms | `JavaScriptMainThread` |

##### `V8.GCFinalizeMC`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  -35.4% | -2.99ms | 76.7% → 50.4% | 8.4ms → 5.5ms | 8.2ms → 5.4ms | 1.37s → 334.1ms | `JavaScriptMainThread` |
| +108.7% | +2.79ms | 23.3% → 49.6% | 2.6ms → 5.4ms | 2.2ms → 5.2ms | 321.2ms → 1.69s | `JavaScriptMainThread` |

##### `MajorGC`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 | Attributes                                                               |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- | ------------------------------------------------------------------------ |
|  -35.1% | -2.98ms | 76.5% → 50.5% | 8.5ms → 5.5ms | 8.2ms → 5.4ms | 1.37s → 334.1ms | `JavaScriptMainThread` | `cause=finalize incremental marking via stack guard, reclaimed=2.87 MiB` |
| +106.8% | +2.79ms | 23.5% → 49.5% | 2.6ms → 5.4ms | 2.3ms → 5.2ms | 321.2ms → 1.69s | `JavaScriptMainThread` | `cause=finalize incremental marking via stack guard, reclaimed=12.3 MiB` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|  Change |   Delta |             % |           Time |       CPU time |         Start | Thread                 |
| ------: | ------: | ------------: | -------------: | -------------: | ------------: | ---------------------- |
|  -10.9% | -0.01ms | 32.8% → 68.7% |          0.1ms |          0.1ms | 1.37s → 1.69s | `JavaScriptMainThread` |
|  -50.0% | -0.04ms | 26.6% → 31.3% | 0.1ms → 41.0µs | 0.1ms → 42.0µs | 1.37s → 1.69s | `JavaScriptMainThread` |
| removed | -0.06ms |  19.5% → 0.0% |    0.1ms → 0ms |    0.1ms → 0ms |   1.37s → 0ms | `JavaScriptMainThread` |
| removed | -0.06ms |  18.5% → 0.0% |    0.1ms → 0ms |    0.1ms → 0ms |   1.37s → 0ms | `JavaScriptMainThread` |
| removed | -0.01ms |   2.6% → 0.0% |    8.0µs → 0ms |    8.0µs → 0ms |   1.37s → 0ms | `JavaScriptMainThread` |

##### `V8.GCHandleGCRequest`

|  Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
|  -34.9% | -2.97ms | 76.4% → 50.5% | 8.5ms → 5.5ms | 8.2ms → 5.5ms | 1.37s → 334.1ms | `JavaScriptMainThread` |
| +106.6% | +2.80ms | 23.6% → 49.5% | 2.6ms → 5.4ms | 2.3ms → 5.3ms | 321.2ms → 1.69s | `JavaScriptMainThread` |

##### `fs.sync.readdir`

| Change |   Delta |             % |  Time | CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ----: | -------: | ----------------: | ---------------------- |
| -33.2% | -0.08ms | 18.6% → 14.3% | 0.2ms |    0.2ms | 158.0ms → 121.2ms | `JavaScriptMainThread` |
| -32.0% | -0.04ms |  10.5% → 8.2% | 0.1ms |    0.1ms |   3.91s → 123.4ms | `JavaScriptMainThread` |
|  -3.6% | -3.00µs |   6.8% → 7.6% | 0.1ms |    0.1ms |   160.6ms → 4.06s | `JavaScriptMainThread` |
|  +6.0% | +4.00µs |   5.5% → 6.7% | 0.1ms |    0.1ms |     2.21s → 2.29s | `JavaScriptMainThread` |
|   0.0% |     0ms |   5.5% → 6.3% | 0.1ms |    0.1ms |     4.02s → 2.29s | `JavaScriptMainThread` |

##### `fs.sync.close`

| Change |   Delta |           % |            Time |        CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | --------------: | --------------: | ----------------: | ---------------------- |
| -53.3% | -0.02ms | 1.2% → 0.6% | 30.0µs → 14.0µs | 23.0µs → 15.0µs |    22.9ms → 2.35s | `JavaScriptMainThread` |
| -22.2% | -4.00µs | 0.7% → 0.6% | 18.0µs → 14.0µs | 11.0µs → 15.0µs |   413.8ms → 4.09s | `JavaScriptMainThread` |
|   0.0% |     0ms |        0.5% |          12.0µs |  8.0µs → 11.0µs | 195.9ms → 255.9ms | `JavaScriptMainThread` |
|   0.0% |     0ms |        0.5% |          12.0µs | 11.0µs → 12.0µs |   4.07s → 304.0ms | `JavaScriptMainThread` |
|  +9.1% | +1.00µs | 0.4% → 0.5% | 11.0µs → 12.0µs | 11.0µs → 12.0µs |   3.91s → 472.8ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`

|  Change |   Delta |             % |           Time |       CPU time |             Start | Thread                 |
| ------: | ------: | ------------: | -------------: | -------------: | ----------------: | ---------------------- |
|  -44.4% | -0.21ms | 94.9% → 73.2% |  0.5ms → 0.3ms |  0.5ms → 0.3ms |     1.37s → 1.69s | `JavaScriptMainThread` |
| +276.9% | +0.07ms |  5.1% → 26.8% | 26.0µs → 0.1ms | 25.0µs → 0.1ms | 323.3ms → 339.1ms | `JavaScriptMainThread` |

##### `Major concurrent marking rescheduled`

| Change | Delta |    % |  Time |      CPU time |           Start | Thread                 |
| -----: | ----: | ---: | ----: | ------------: | --------------: | ---------------------- |
|   0.0% |   0ms | 0.4% | 2.0µs |         2.0µs | 314.0ms → 1.63s | `JavaScriptMainThread` |
|   0.0% |   0ms | 0.4% | 2.0µs | 2.0µs → 1.0µs | 315.0ms → 1.66s | `JavaScriptMainThread` |
|   0.0% |   0ms | 0.4% | 2.0µs |         2.0µs |   1.31s → 1.66s | `JavaScriptMainThread` |
|   0.0% |   0ms | 0.4% | 2.0µs |   1.0µs → 0ms |   1.31s → 1.66s | `JavaScriptMainThread` |
|   0.0% |   0ms | 0.4% | 2.0µs |         2.0µs |   1.31s → 1.66s | `JavaScriptMainThread` |

##### `V8.GC_MC_CLEAR_JOIN_JOB`

| Change |   Delta |             % |           Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ------------: | -------------: | ------------: | --------------: | ---------------------- |
| +41.1% | +0.12ms | 56.0% → 91.4% |  0.3ms → 0.4ms | 0.3ms → 0.4ms | 1.37s → 334.8ms | `JavaScriptMainThread` |
| -83.0% | -0.19ms |  44.0% → 8.6% | 0.2ms → 39.0µs | 5.0µs → 6.0µs | 321.7ms → 1.69s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`

|  Change |   Delta |             % |          Time |      CPU time |             Start | Thread                 |
| ------: | ------: | ------------: | ------------: | ------------: | ----------------: | ---------------------- |
|  -19.5% | -0.12ms | 89.7% → 77.6% | 0.6ms → 0.5ms | 0.6ms → 0.5ms |     1.37s → 1.69s | `JavaScriptMainThread` |
| +102.8% | +0.07ms | 10.3% → 22.4% |         0.1ms |         0.1ms | 323.2ms → 339.1ms | `JavaScriptMainThread` |

##### `V8.GC_HEAP_DUMP_STATISTICS`

| Change |   Delta |           % |          Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | ------------: | ------------: | --------------: | ---------------------- |
| -37.5% | -3.00µs | 2.6% → 1.7% | 8.0µs → 5.0µs | 8.0µs → 5.0µs | 214.5ms → 4.16s | `JavaScriptMainThread` |
| -20.0% | -1.00µs | 1.6% → 1.4% | 5.0µs → 4.0µs |   0ms → 5.0µs |   1.51s → 3.40s | `JavaScriptMainThread` |
| -40.0% | -2.00µs | 1.6% → 1.0% | 5.0µs → 3.0µs | 2.0µs → 3.0µs | 1.58s → 930.6ms | `JavaScriptMainThread` |
| -50.0% | -2.00µs | 1.3% → 0.7% | 4.0µs → 2.0µs | 4.0µs → 2.0µs | 2.13s → 108.8ms | `JavaScriptMainThread` |
| -50.0% | -2.00µs | 1.3% → 0.7% | 4.0µs → 2.0µs | 2.0µs → 1.0µs |   3.13s → 1.14s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SWEEP_ARRAY_BUFFERS`

| Change |   Delta |           % |            Time |        CPU time |         Start | Thread                 |
| -----: | ------: | ----------: | --------------: | --------------: | ------------: | ---------------------- |
| -23.1% | -3.00µs | 2.2% → 1.7% | 13.0µs → 10.0µs | 13.0µs → 10.0µs | 3.96s → 2.35s | `JavaScriptMainThread` |
|   0.0% |     0ms | 1.3% → 1.4% |           8.0µs |   9.0µs → 7.0µs | 4.81s → 2.46s | `JavaScriptMainThread` |
|   0.0% |     0ms |        1.2% |           7.0µs |   8.0µs → 6.0µs | 2.38s → 2.30s | `JavaScriptMainThread` |
|   0.0% |     0ms |        1.2% |           7.0µs |   7.0µs → 8.0µs | 2.41s → 2.45s | `JavaScriptMainThread` |
|   0.0% |     0ms |        1.2% |           7.0µs |           8.0µs | 3.98s → 3.31s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS`

| Change |   Delta |           % |            Time |       CPU time |            Start | Thread                 |
| -----: | ------: | ----------: | --------------: | -------------: | ---------------: | ---------------------- |
| -48.0% | -0.01ms | 4.3% → 2.3% | 25.0µs → 13.0µs |         13.0µs | 110.0ms → 94.2ms | `JavaScriptMainThread` |
| +44.4% | +4.00µs | 1.5% → 2.3% |  9.0µs → 13.0µs | 8.0µs → 12.0µs |            4.09s | `JavaScriptMainThread` |
| +71.4% | +0.01ms | 1.2% → 2.1% |  7.0µs → 12.0µs | 6.0µs → 12.0µs |    1.42s → 3.50s | `JavaScriptMainThread` |
| +42.9% | +3.00µs | 1.2% → 1.8% |  7.0µs → 10.0µs | 7.0µs → 11.0µs |    2.75s → 2.23s | `JavaScriptMainThread` |
| +16.7% | +1.00µs | 1.0% → 1.2% |   6.0µs → 7.0µs |  6.0µs → 7.0µs |    2.63s → 2.70s | `JavaScriptMainThread` |

##### `V8.GC_MC_FINISH`

| Change |   Delta |             % |           Time |       CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | -------------: | -------------: | ----------------: | ---------------------- |
| +14.3% | +0.01ms | 52.1% → 67.3% |          0.1ms |          0.1ms |     1.37s → 1.69s | `JavaScriptMainThread` |
| -39.7% | -0.02ms | 47.9% → 32.7% | 0.1ms → 35.0µs | 0.1ms → 35.0µs | 323.6ms → 339.5ms | `JavaScriptMainThread` |

##### `V8.GC_MC_SWEEP_START_JOBS`

| Change |   Delta |             % |           Time |       CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | -------------: | -------------: | ----------------: | ---------------------- |
| -81.8% | -0.01ms | 84.6% → 50.0% | 11.0µs → 2.0µs | 11.0µs → 2.0µs | 323.7ms → 339.5ms | `JavaScriptMainThread` |
|   0.0% |     0ms | 15.4% → 50.0% |          2.0µs |          2.0µs |     1.37s → 1.69s | `JavaScriptMainThread` |

##### `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`

| Change |   Delta |             % |          Time |      CPU time |             Start | Thread                 |
| -----: | ------: | ------------: | ------------: | ------------: | ----------------: | ---------------------- |
| -22.2% | -2.00µs | 31.0% → 31.8% | 9.0µs → 7.0µs | 9.0µs → 7.0µs | 313.5ms → 322.7ms | `JavaScriptMainThread` |
| -25.0% | -2.00µs | 27.6% → 27.3% | 8.0µs → 6.0µs | 8.0µs → 6.0µs |   1.31s → 322.6ms | `JavaScriptMainThread` |
| -28.6% | -2.00µs | 24.1% → 22.7% | 7.0µs → 5.0µs | 8.0µs → 5.0µs |   313.6ms → 1.62s | `JavaScriptMainThread` |
| -20.0% | -1.00µs | 17.2% → 18.2% | 5.0µs → 4.0µs |         5.0µs |     1.31s → 1.62s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_CLEAN_UP`

| Change |   Delta |             % |          Time |      CPU time |           Start | Thread                 |
| -----: | ------: | ------------: | ------------: | ------------: | --------------: | ---------------------- |
| -50.0% | -4.00µs | 80.0% → 66.7% | 8.0µs → 4.0µs | 7.0µs → 3.0µs | 323.3ms → 1.69s | `JavaScriptMainThread` |
|   0.0% |     0ms | 20.0% → 33.3% |         2.0µs |         2.0µs | 1.37s → 339.3ms | `JavaScriptMainThread` |

##### `V8.GC_HEAP_EPILOGUE`

| Change |   Delta |           % |           Time |       CPU time |           Start | Thread                 |
| -----: | ------: | ----------: | -------------: | -------------: | --------------: | ---------------------- |
| -58.3% | -0.01ms | 2.1% → 0.9% | 12.0µs → 5.0µs | 12.0µs → 5.0µs | 4.08s → 930.6ms | `JavaScriptMainThread` |
|   0.0% |     0ms |        0.9% |          5.0µs |          5.0µs |   3.03s → 2.53s | `JavaScriptMainThread` |
| -25.0% | -1.00µs | 0.7% → 0.5% |  4.0µs → 3.0µs |  4.0µs → 3.0µs | 5.12s → 527.7ms | `JavaScriptMainThread` |
| -25.0% | -1.00µs | 0.7% → 0.5% |  4.0µs → 3.0µs |  4.0µs → 3.0µs | 5.18s → 539.4ms | `JavaScriptMainThread` |
|   0.0% |     0ms |        0.5% |          3.0µs |  2.0µs → 3.0µs | 1.84s → 906.0ms | `JavaScriptMainThread` |

##### `fs.sync.realpath`

| Change |   Delta |           % |  Time | CPU time |             Start | Thread                 |
| -----: | ------: | ----------: | ----: | -------: | ----------------: | ---------------------- |
| +34.1% | +0.03ms | 1.8% → 2.5% | 0.1ms |    0.1ms |   3.91s → 121.0ms | `JavaScriptMainThread` |
| +17.5% | +0.01ms | 1.4% → 1.7% | 0.1ms |    0.1ms |     3.92s → 2.31s | `JavaScriptMainThread` |
| +22.8% | +0.01ms | 1.3% → 1.6% | 0.1ms |    0.1ms | 157.8ms → 457.7ms | `JavaScriptMainThread` |
| +10.5% | +0.01ms | 1.3% → 1.4% | 0.1ms |    0.1ms |     4.07s → 4.08s | `JavaScriptMainThread` |
| +24.0% | +0.01ms | 1.1% → 1.4% | 0.1ms |    0.1ms | 160.2ms → 354.0ms | `JavaScriptMainThread` |

### Self CPU time

#### Regressions

Thread spans with the largest increase in time on a CPU, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |          CPU time |           Count |            Mean |             Max | Span                                           |
| ------: | --------: | ------------: | ----------------: | --------------: | --------------: | --------------: | ---------------------------------------------- |
|   +4.0% | +175.04ms | 81.0% → 81.5% |     4.39s → 4.57s |               1 |   4.39s → 4.57s |   4.39s → 4.57s | `RunMicrotasks`                                |
|   +8.1% |  +55.61ms | 12.7% → 13.3% | 689.1ms → 744.8ms |   1,391 → 1,413 |           0.5ms |   4.6ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  +32.8% |  +54.92ms |   3.1% → 4.0% | 167.7ms → 222.6ms |         30 → 23 |   5.6ms → 9.7ms | 15.6ms → 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  +11.9% |  +24.24ms |   3.7% → 4.1% | 203.0ms → 227.2ms |             348 |   0.6ms → 0.7ms |   1.5ms → 1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|   +2.8% |   +9.37ms |          6.2% | 337.6ms → 346.9ms |       379 → 388 |           0.9ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  +14.6% |   +9.26ms |   1.2% → 1.3% |   63.2ms → 72.5ms |   2,730 → 2,757 | 23.2µs → 26.3µs |   0.3ms → 0.4ms | `V8.HandleInterrupts`                          |
|  +25.9% |   +7.07ms |   0.5% → 0.6% |   27.3ms → 34.4ms |          7 → 15 |   3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|   +4.8% |   +2.27ms |          0.9% |   47.6ms → 49.8ms |   6,931 → 6,944 |   6.9µs → 7.2µs |           0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|   +8.4% |   +1.84ms |          0.4% |   21.9ms → 23.7ms |             348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|   +7.1% |   +1.16ms |          0.3% |   16.4ms → 17.6ms |             348 |  47.1µs → 0.1ms |   0.3ms → 0.1ms | `MinorGC`                                      |
|   +3.0% |   +0.92ms |          0.6% |   30.4ms → 31.3ms | 10,058 → 10,115 |   3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`                                 |
|   +8.9% |   +0.81ms |          0.2% |     9.0ms → 9.8ms |             348 | 25.9µs → 28.2µs |           0.1ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|   +8.5% |   +0.79ms |          0.2% |    9.4ms → 10.2ms |   2,718 → 2,735 |   3.4µs → 3.7µs | 29.0µs → 40.0µs | `V8.StackGuard`                                |
|   +5.7% |   +0.71ms |          0.2% |   12.5ms → 13.2ms |   1,580 → 1,540 |   7.9µs → 8.6µs |           0.1ms | `V8.DeoptimizeCode`                            |
|   +9.5% |   +0.65ms |          0.1% |     6.8ms → 7.4ms |       434 → 452 | 15.6µs → 16.4µs |   0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck`     |
|   +7.9% |   +0.59ms |          0.1% |     7.5ms → 8.1ms |             348 | 21.5µs → 23.2µs |           0.1ms | `V8.GC_SCAVENGER`                              |
|  +25.2% |   +0.54ms |         <0.1% |     2.2ms → 2.7ms |       195 → 201 | 11.1µs → 13.5µs | 38.0µs → 35.0µs | `V8.GC_BACKGROUND_UNPARK`                      |
| +162.4% |   +0.50ms |         <0.1% |     0.3ms → 0.8ms |         42 → 43 |  7.3µs → 18.7µs |  46.0µs → 0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`    |
|  +66.6% |   +0.50ms |         <0.1% |     0.7ms → 1.2ms |             348 |   2.1µs → 3.6µs |   0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`         |
|   +6.8% |   +0.42ms |          0.1% |     6.2ms → 6.7ms |             348 | 17.9µs → 19.1µs |           0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`            |

##### Script

| Change |     Delta |             % |        CPU time |         Count |            Mean |             Max | Span                                       |
| -----: | --------: | ------------: | --------------: | ------------: | --------------: | --------------: | ------------------------------------------ |
|  +4.0% | +175.04ms | 81.0% → 81.5% |   4.39s → 4.57s |             1 |   4.39s → 4.57s |   4.39s → 4.57s | `RunMicrotasks`                            |
| +14.6% |   +9.26ms |   1.2% → 1.3% | 63.2ms → 72.5ms | 2,730 → 2,757 | 23.2µs → 26.3µs |   0.3ms → 0.4ms | `V8.HandleInterrupts`                      |
|  +4.8% |   +2.27ms |          0.9% | 47.6ms → 49.8ms | 6,931 → 6,944 |   6.9µs → 7.2µs |           0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  +8.5% |   +0.79ms |          0.2% |  9.4ms → 10.2ms | 2,718 → 2,735 |   3.4µs → 3.7µs | 29.0µs → 40.0µs | `V8.StackGuard`                            |
|  +9.5% |   +0.65ms |          0.1% |   6.8ms → 7.4ms |     434 → 452 | 15.6µs → 16.4µs |   0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|  Change |    Delta |             % |          CPU time |         Count |            Mean |             Max | Span                                            |
| ------: | -------: | ------------: | ----------------: | ------------: | --------------: | --------------: | ----------------------------------------------- |
|   +8.1% | +55.61ms | 12.7% → 13.3% | 689.1ms → 744.8ms | 1,391 → 1,413 |           0.5ms |   4.6ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  +32.8% | +54.92ms |   3.1% → 4.0% | 167.7ms → 222.6ms |       30 → 23 |   5.6ms → 9.7ms | 15.6ms → 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  +25.9% |  +7.07ms |   0.5% → 0.6% |   27.3ms → 34.4ms |        7 → 15 |   3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  +25.2% |  +0.54ms |         <0.1% |     2.2ms → 2.7ms |     195 → 201 | 11.1µs → 13.5µs | 38.0µs → 35.0µs | `V8.GC_BACKGROUND_UNPARK`                       |
| +162.4% |  +0.50ms |         <0.1% |     0.3ms → 0.8ms |       42 → 43 |  7.3µs → 18.7µs |  46.0µs → 0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
|  +30.6% |  +0.38ms |         <0.1% |     1.2ms → 1.6ms |       82 → 88 | 15.0µs → 18.2µs | 32.0µs → 45.0µs | `V8.GC_BACKGROUND_SAFEPOINT`                    |
|   +7.8% |  +0.10ms |         <0.1% |     1.3ms → 1.4ms |       27 → 26 |  49.6µs → 0.1ms |           0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| +294.4% |  +0.05ms |         <0.1% |    18.0µs → 0.1ms |         2 → 1 |   9.0µs → 0.1ms |   9.0µs → 0.1ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
|  +28.6% |  +0.03ms |         <0.1% |             0.1ms |       42 → 43 |   2.3µs → 2.9µs |  5.0µs → 11.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
|  +37.1% |  +0.02ms |         <0.1% |             0.1ms |             2 | 31.0µs → 42.5µs | 32.0µs → 46.0µs | `MarkCompactCollector::EvacuatePagesInParallel` |
|   +3.7% |  +0.02ms |         <0.1% |             0.5ms |     129 → 130 |   3.6µs → 3.7µs | 19.0µs → 25.0µs | `RememberedSetUpdatingItem::Process`            |
|  +41.7% |  +0.01ms |         <0.1% |   24.0µs → 34.0µs |             8 |   3.0µs → 4.3µs |  6.0µs → 14.0µs | `ConcurrentMarking::RunMajor Preempted`         |
|  +88.9% |  +0.01ms |         <0.1% |    9.0µs → 17.0µs |             2 |   4.5µs → 8.5µs |  5.0µs → 11.0µs | `V8.GCHandleGCRequest`                          |
|  +28.6% |  +4.00µs |         <0.1% |   14.0µs → 18.0µs |             2 |   7.0µs → 9.0µs | 10.0µs → 12.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`      |
|   +1.1% |  +3.00µs |         <0.1% |             0.3ms |           348 |           0.8µs |   5.0µs → 3.0µs | `Parallel scavenge started`                     |
|  +50.0% |  +1.00µs |         <0.1% |     2.0µs → 3.0µs |             2 |   1.0µs → 1.5µs |   1.0µs → 2.0µs | `PageEvacuationJob started`                     |
| +100.0% |  +1.00µs |         <0.1% |     1.0µs → 2.0µs |             2 |   0.5µs → 1.0µs |           1.0µs | `Major concurrent marking paused`               |

##### Garbage collection pause

|  Change |    Delta |           % |          CPU time |     Count |            Mean |             Max | Span                                             |
| ------: | -------: | ----------: | ----------------: | --------: | --------------: | --------------: | ------------------------------------------------ |
|  +11.9% | +24.24ms | 3.7% → 4.1% | 203.0ms → 227.2ms |       348 |   0.6ms → 0.7ms |   1.5ms → 1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                       |
|   +2.8% |  +9.37ms |        6.2% | 337.6ms → 346.9ms | 379 → 388 |           0.9ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`              |
|   +8.4% |  +1.84ms |        0.4% |   21.9ms → 23.7ms |       348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`                 |
|   +7.1% |  +1.16ms |        0.3% |   16.4ms → 17.6ms |       348 |  47.1µs → 0.1ms |   0.3ms → 0.1ms | `MinorGC`                                        |
|   +8.9% |  +0.81ms |        0.2% |     9.0ms → 9.8ms |       348 | 25.9µs → 28.2µs |           0.1ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`        |
|   +7.9% |  +0.59ms |        0.1% |     7.5ms → 8.1ms |       348 | 21.5µs → 23.2µs |           0.1ms | `V8.GC_SCAVENGER`                                |
|  +66.6% |  +0.50ms |       <0.1% |     0.7ms → 1.2ms |       348 |   2.1µs → 3.6µs |   0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`           |
|   +6.8% |  +0.42ms |        0.1% |     6.2ms → 6.7ms |       348 | 17.9µs → 19.1µs |           0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`              |
|  +14.2% |  +0.39ms |        0.1% |     2.7ms → 3.1ms |       348 |   7.9µs → 9.0µs | 29.0µs → 43.0µs | `V8.GCScavenger`                                 |
|   +6.1% |  +0.36ms |        0.1% |     5.8ms → 6.2ms |       348 | 16.8µs → 17.8µs |           0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`            |
|  +23.2% |  +0.23ms |       <0.1% |     1.0ms → 1.2ms |       353 |   2.8µs → 3.4µs | 27.0µs → 25.0µs | `V8.GC_TIME_TO_SAFEPOINT`                        |
|  +14.6% |  +0.19ms |       <0.1% |     1.3ms → 1.5ms |       350 |   3.7µs → 4.3µs |   0.3ms → 0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`                  |
|  +54.7% |  +0.18ms |       <0.1% |     0.3ms → 0.5ms |         2 |   0.2ms → 0.3ms |   0.3ms → 0.4ms | `V8.GC_MC_INCREMENTAL_START`                     |
|  +25.9% |  +0.15ms |       <0.1% |     0.6ms → 0.7ms |         2 |   0.3ms → 0.4ms |   0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS` |
| +130.4% |  +0.13ms |       <0.1% |     0.1ms → 0.2ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_PROLOGUE`                     |
|  +33.9% |  +0.12ms |       <0.1% |     0.3ms → 0.5ms |         2 |           0.2ms |   0.2ms → 0.3ms | `V8.GC_MC_MARK`                                  |
|  +49.7% |  +0.08ms |       <0.1% |             0.2ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL_JOIN`       |
|  +35.3% |  +0.06ms |       <0.1% |             0.2ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`   |
|  +15.7% |  +0.05ms |       <0.1% |             0.3ms |       350 |   0.8µs → 0.9µs |  4.0µs → 17.0µs | `V8.GC_HEAP_EXTERNAL_EPILOGUE`                   |
|   +6.3% |  +0.04ms |       <0.1% |     0.6ms → 0.7ms |         2 |           0.3ms |           0.4ms | `V8.GC_MC_CLEAR_STRING_TABLE`                    |

##### I/O

| Change |   Delta |     % |        CPU time |           Count |            Mean |             Max | Span               |
| -----: | ------: | ----: | --------------: | --------------: | --------------: | --------------: | ------------------ |
|  +3.0% | +0.92ms |  0.6% | 30.4ms → 31.3ms | 10,058 → 10,115 |   3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`     |
|  +7.6% | +0.16ms | <0.1% |   2.1ms → 2.3ms |   1,121 → 1,124 |   1.9µs → 2.1µs | 10.0µs → 15.0µs | `fs.sync.fstat`    |
|  +0.9% | +0.04ms |  0.1% |           4.5ms |             210 | 21.2µs → 21.4µs |           0.1ms | `fs.sync.realpath` |
| +56.5% | +0.04ms | <0.1% |           0.1ms |              18 |   3.4µs → 5.4µs |  8.0µs → 36.0µs | `fs.sync.lstat`    |
| +16.7% | +1.00µs | <0.1% |   6.0µs → 7.0µs |               1 |   6.0µs → 7.0µs |   6.0µs → 7.0µs | `fs.sync.readlink` |

#### Improvements

Thread spans with the largest decrease in time on a CPU, excluding child spans. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |           % |        CPU time |         Count |            Mean |             Max | Span                                           |
| -----: | ------: | ----------: | --------------: | ------------: | --------------: | --------------: | ---------------------------------------------- |
| -42.9% | -7.11ms | 0.3% → 0.2% |  16.6ms → 9.5ms | 1,122 → 1,125 |  14.8µs → 8.4µs |   4.9ms → 3.8ms | `fs.sync.read`                                 |
|  -1.6% | -0.38ms |        0.4% | 23.5ms → 23.2ms | 1,122 → 1,125 | 21.0µs → 20.6µs |           0.1ms | `fs.sync.open`                                 |
| -52.1% | -0.37ms |       <0.1% |   0.7ms → 0.3ms |       28 → 12 | 25.2µs → 28.2µs |   0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                               |
|  -7.6% | -0.36ms |        0.1% |   4.7ms → 4.4ms |     667 → 613 |           7.1µs |   0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                         |
|  -5.3% | -0.13ms |       <0.1% |   2.5ms → 2.4ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 23.0µs → 15.0µs | `fs.sync.close`                                |
|  -1.5% | -0.12ms |        0.1% |   7.6ms → 7.5ms |       91 → 82 |           0.1ms |   0.2ms → 0.1ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`  |
| -53.1% | -0.11ms |       <0.1% |   0.2ms → 0.1ms |         5 → 2 | 41.4µs → 48.5µs |           0.1ms | `LiveObjectVisitor::VisitMarkedObjects`        |
|  -6.0% | -0.10ms |       <0.1% |   1.6ms → 1.5ms |             1 |   1.6ms → 1.5ms |   1.6ms → 1.5ms | `V8.DeserializeIsolate`                        |
|  -8.3% | -0.09ms |       <0.1% |           1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir`                              |
|  -2.0% | -0.04ms |       <0.1% |           1.9ms |             1 |           1.9ms |           1.9ms | `V8.DeserializeContext`                        |
| -20.1% | -0.03ms |       <0.1% |   0.2ms → 0.1ms |       96 → 84 |   1.8µs → 1.6µs |   9.0µs → 6.0µs | `Evacuator::EvacuatePage`                      |
| -57.8% | -0.03ms |       <0.1% | 45.0µs → 19.0µs |         3 → 1 | 15.0µs → 19.0µs | 22.0µs → 19.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`            |
| -12.4% | -0.02ms |       <0.1% |   0.2ms → 0.1ms |       96 → 84 |           1.8µs |           6.0µs | `FullEvacuator::RawEvacuatePage`               |
| -69.2% | -0.01ms |       <0.1% |  13.0µs → 4.0µs |             2 |   6.5µs → 2.0µs |  11.0µs → 2.0µs | `V8.GC_MC_SWEEP_START_JOBS`                    |
|  -1.4% | -0.01ms |       <0.1% |           0.5ms |     669 → 615 |   0.7µs → 0.8µs |           3.0µs | `Major concurrent marking rescheduled`         |
| -23.3% | -0.01ms |       <0.1% | 30.0µs → 23.0µs |             4 |   7.5µs → 5.8µs |   9.0µs → 7.0µs | `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`              |
| -23.5% | -4.00µs |       <0.1% | 17.0µs → 13.0µs |             2 |   8.5µs → 6.5µs |  11.0µs → 8.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`          |
| -19.0% | -4.00µs |       <0.1% | 21.0µs → 17.0µs |       13 → 14 |   1.6µs → 1.2µs |   2.0µs → 4.0µs | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |
| -44.4% | -4.00µs |       <0.1% |   9.0µs → 5.0µs |             2 |   4.5µs → 2.5µs |   7.0µs → 3.0µs | `V8.GC_MC_EVACUATE_CLEAN_UP`                   |
| -15.0% | -3.00µs |       <0.1% | 20.0µs → 17.0µs |             2 |  10.0µs → 8.5µs |  11.0µs → 9.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS`            |

##### Garbage collection

|  Change |   Delta |            % |        CPU time |     Count |            Mean |             Max | Span                                          |
| ------: | ------: | -----------: | --------------: | --------: | --------------: | --------------: | --------------------------------------------- |
|   -1.5% | -0.12ms |         0.1% |   7.6ms → 7.5ms |   91 → 82 |           0.1ms |   0.2ms → 0.1ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
|  -53.1% | -0.11ms |        <0.1% |   0.2ms → 0.1ms |     5 → 2 | 41.4µs → 48.5µs |           0.1ms | `LiveObjectVisitor::VisitMarkedObjects`       |
|  -20.1% | -0.03ms |        <0.1% |   0.2ms → 0.1ms |   96 → 84 |   1.8µs → 1.6µs |   9.0µs → 6.0µs | `Evacuator::EvacuatePage`                     |
|  -57.8% | -0.03ms |        <0.1% | 45.0µs → 19.0µs |     3 → 1 | 15.0µs → 19.0µs | 22.0µs → 19.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`           |
|  -12.4% | -0.02ms |        <0.1% |   0.2ms → 0.1ms |   96 → 84 |           1.8µs |           6.0µs | `FullEvacuator::RawEvacuatePage`              |
|   -1.4% | -0.01ms |        <0.1% |           0.5ms | 669 → 615 |   0.7µs → 0.8µs |           3.0µs | `Major concurrent marking rescheduled`        |
|  -66.7% | -2.00µs |        <0.1% |   3.0µs → 1.0µs |         2 |   1.5µs → 0.5µs |   2.0µs → 1.0µs | `PointersUpdatingJob started`                 |
|  -50.0% | -1.00µs |        <0.1% |   2.0µs → 1.0µs |         2 |   1.0µs → 0.5µs |           1.0µs | `ClearStringTableJob started`                 |
| removed | -1.00µs | <0.1% → 0.0% |     1.0µs → 0ms |         2 |     0.5µs → 0ms |     1.0µs → 0ms | `Major concurrent marking resumed`            |

##### Garbage collection pause

| Change |    Delta |     % |        CPU time |     Count |            Mean |             Max | Span                                           |
| -----: | -------: | ----: | --------------: | --------: | --------------: | --------------: | ---------------------------------------------- |
| -52.1% |  -0.37ms | <0.1% |   0.7ms → 0.3ms |   28 → 12 | 25.2µs → 28.2µs |   0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                               |
|  -7.6% |  -0.36ms |  0.1% |   4.7ms → 4.4ms | 667 → 613 |           7.1µs |   0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                         |
| -69.2% |  -0.01ms | <0.1% |  13.0µs → 4.0µs |         2 |   6.5µs → 2.0µs |  11.0µs → 2.0µs | `V8.GC_MC_SWEEP_START_JOBS`                    |
| -23.3% |  -0.01ms | <0.1% | 30.0µs → 23.0µs |         4 |   7.5µs → 5.8µs |   9.0µs → 7.0µs | `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`              |
| -23.5% |  -4.00µs | <0.1% | 17.0µs → 13.0µs |         2 |   8.5µs → 6.5µs |  11.0µs → 8.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`          |
| -19.0% |  -4.00µs | <0.1% | 21.0µs → 17.0µs |   13 → 14 |   1.6µs → 1.2µs |   2.0µs → 4.0µs | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |
| -44.4% |  -4.00µs | <0.1% |   9.0µs → 5.0µs |         2 |   4.5µs → 2.5µs |   7.0µs → 3.0µs | `V8.GC_MC_EVACUATE_CLEAN_UP`                   |
| -15.0% |  -3.00µs | <0.1% | 20.0µs → 17.0µs |         2 |  10.0µs → 8.5µs |  11.0µs → 9.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS`            |
|  -3.0% |  -3.00µs | <0.1% |           0.1ms |         2 |  0.1ms → 48.5µs |           0.1ms | `V8.GC_MC_FINISH`                              |
| -30.0% |  -3.00µs | <0.1% |  10.0µs → 7.0µs |         1 |  10.0µs → 7.0µs |  10.0µs → 7.0µs | `V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES`      |
|  -1.5% |  -2.00µs | <0.1% |           0.1ms |   43 → 44 |   3.1µs → 3.0µs |  12.0µs → 8.0µs | `V8.GC_MINOR_MS_FINISH_SWEEP_ARRAY_BUFFERS`    |
| -28.6% |  -2.00µs | <0.1% |   7.0µs → 5.0µs |         2 |   3.5µs → 2.5µs |   4.0µs → 3.0µs | `V8.GC_MC_CLEAR_EXTERNAL_STRING_TABLE`         |
| -50.0% |  -1.00µs | <0.1% |   2.0µs → 1.0µs |         1 |   2.0µs → 1.0µs |   2.0µs → 1.0µs | `V8.GC_MINOR_MS_SWEEP`                         |
| -33.3% |  -1.00µs | <0.1% |   3.0µs → 2.0µs |         2 |   1.5µs → 1.0µs |   2.0µs → 1.0µs | `V8.GC_MC_CLEAR_WEAK_GLOBAL_HANDLES`           |
| -20.0% |  -1.00µs | <0.1% |   5.0µs → 4.0µs |         2 |   2.5µs → 2.0µs |   3.0µs → 2.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK`       |
| -50.0% |  -1.00µs | <0.1% |   2.0µs → 1.0µs |         1 |   2.0µs → 1.0µs |   2.0µs → 1.0µs | `V8.GC_MC_COMPLETE_SWEEP_ARRAY_BUFFERS`        |
|    ~0% | -<0.01µs | <0.1% |           1.5ms |       350 |           4.4µs | 20.0µs → 16.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`                |

##### I/O

| Change |   Delta |           % |        CPU time |         Count |            Mean |             Max | Span              |
| -----: | ------: | ----------: | --------------: | ------------: | --------------: | --------------: | ----------------- |
| -42.9% | -7.11ms | 0.3% → 0.2% |  16.6ms → 9.5ms | 1,122 → 1,125 |  14.8µs → 8.4µs |   4.9ms → 3.8ms | `fs.sync.read`    |
|  -1.6% | -0.38ms |        0.4% | 23.5ms → 23.2ms | 1,122 → 1,125 | 21.0µs → 20.6µs |           0.1ms | `fs.sync.open`    |
|  -5.3% | -0.13ms |       <0.1% |   2.5ms → 2.4ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 23.0µs → 15.0µs | `fs.sync.close`   |
|  -8.3% | -0.09ms |       <0.1% |           1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir` |

### Total CPU time

#### Regressions

Thread spans with the largest increase in time on a CPU, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |          CPU time |           Count |            Mean |             Max | Span                                           |
| ------: | --------: | ------------: | ----------------: | --------------: | --------------: | --------------: | ---------------------------------------------- |
|   +4.2% | +222.63ms | 96.8% → 97.6% |     5.25s → 5.47s |               1 |   5.25s → 5.47s |   5.25s → 5.47s | `RunMicrotasks`                                |
|   +8.1% |  +55.61ms | 12.7% → 13.3% | 689.1ms → 744.8ms |   1,391 → 1,413 |           0.5ms |   4.6ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  +32.8% |  +54.93ms |   3.1% → 4.0% | 167.7ms → 222.6ms |         30 → 23 |   5.6ms → 9.7ms | 15.6ms → 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|   +6.5% |  +40.21ms | 11.4% → 11.8% | 618.6ms → 658.8ms |             348 |   1.8ms → 1.9ms |           8.5ms | `MinorGC`                                      |
|   +6.5% |  +39.00ms | 11.1% → 11.4% | 600.6ms → 639.6ms |             348 |   1.7ms → 1.8ms |   8.5ms → 8.4ms | `V8.GCScavenger`                               |
|   +6.4% |  +38.37ms | 11.0% → 11.3% | 596.8ms → 635.2ms |             348 |   1.7ms → 1.8ms |   8.5ms → 8.4ms | `V8.GC_SCAVENGER`                              |
|   +6.4% |  +37.58ms | 10.8% → 11.1% | 586.2ms → 623.8ms |             348 |   1.7ms → 1.8ms |           8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|   +2.9% |  +10.18ms |          6.4% | 346.9ms → 357.0ms |             348 |           1.0ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  +11.8% |   +9.95ms |   1.6% → 1.7% |   84.6ms → 94.6ms |   2,718 → 2,735 | 31.1µs → 34.6µs |   8.2ms → 5.5ms | `V8.StackGuard`                                |
|  +12.9% |   +9.72ms |   1.4% → 1.5% |   75.5ms → 85.3ms |   2,730 → 2,757 | 27.7µs → 30.9µs |   8.2ms → 5.5ms | `V8.HandleInterrupts`                          |
|   +2.8% |   +9.37ms |          6.2% | 337.6ms → 346.9ms |       379 → 388 |           0.9ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  +25.9% |   +7.07ms |   0.5% → 0.6% |   27.3ms → 34.4ms |          7 → 15 |   3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|   +4.7% |   +2.23ms |          0.9% |   47.6ms → 49.8ms |   6,931 → 6,944 |   6.9µs → 7.2µs |           0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|   +8.4% |   +1.84ms |          0.4% |   21.9ms → 23.7ms |             348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|   +3.0% |   +0.92ms |          0.6% |   30.4ms → 31.3ms | 10,058 → 10,115 |   3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`                                 |
|   +5.7% |   +0.71ms |          0.2% |   12.5ms → 13.2ms |   1,580 → 1,540 | 12.6µs → 13.8µs |           0.1ms | `V8.DeoptimizeCode`                            |
|  +10.3% |   +0.69ms |          0.1% |     6.8ms → 7.5ms |       434 → 452 | 15.6µs → 16.5µs |   0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck`     |
|  +25.2% |   +0.54ms |         <0.1% |     2.2ms → 2.7ms |       195 → 201 | 11.1µs → 13.5µs | 38.0µs → 35.0µs | `V8.GC_BACKGROUND_UNPARK`                      |
| +162.4% |   +0.50ms |         <0.1% |     0.3ms → 0.8ms |         42 → 43 |  7.3µs → 18.7µs |  46.0µs → 0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`    |
|  +66.6% |   +0.50ms |         <0.1% |     0.7ms → 1.2ms |             348 |   2.1µs → 3.6µs |   0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`         |

##### Script

| Change |     Delta |             % |        CPU time |         Count |            Mean |           Max | Span                                       |
| -----: | --------: | ------------: | --------------: | ------------: | --------------: | ------------: | ------------------------------------------ |
|  +4.2% | +222.63ms | 96.8% → 97.6% |   5.25s → 5.47s |             1 |   5.25s → 5.47s | 5.25s → 5.47s | `RunMicrotasks`                            |
| +11.8% |   +9.95ms |   1.6% → 1.7% | 84.6ms → 94.6ms | 2,718 → 2,735 | 31.1µs → 34.6µs | 8.2ms → 5.5ms | `V8.StackGuard`                            |
| +12.9% |   +9.72ms |   1.4% → 1.5% | 75.5ms → 85.3ms | 2,730 → 2,757 | 27.7µs → 30.9µs | 8.2ms → 5.5ms | `V8.HandleInterrupts`                      |
|  +4.7% |   +2.23ms |          0.9% | 47.6ms → 49.8ms | 6,931 → 6,944 |   6.9µs → 7.2µs |         0.3ms | `V8.BytecodeBudgetInterrupt`               |
| +10.3% |   +0.69ms |          0.1% |   6.8ms → 7.5ms |     434 → 452 | 15.6µs → 16.5µs | 0.3ms → 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|  Change |    Delta |             % |          CPU time |         Count |            Mean |             Max | Span                                           |
| ------: | -------: | ------------: | ----------------: | ------------: | --------------: | --------------: | ---------------------------------------------- |
|   +8.1% | +55.61ms | 12.7% → 13.3% | 689.1ms → 744.8ms | 1,391 → 1,413 |           0.5ms |   4.6ms → 3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  +32.8% | +54.93ms |   3.1% → 4.0% | 167.7ms → 222.6ms |       30 → 23 |   5.6ms → 9.7ms | 15.6ms → 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  +25.9% |  +7.07ms |   0.5% → 0.6% |   27.3ms → 34.4ms |        7 → 15 |   3.9ms → 2.3ms |  9.4ms → 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  +25.2% |  +0.54ms |         <0.1% |     2.2ms → 2.7ms |     195 → 201 | 11.1µs → 13.5µs | 38.0µs → 35.0µs | `V8.GC_BACKGROUND_UNPARK`                      |
| +162.4% |  +0.50ms |         <0.1% |     0.3ms → 0.8ms |       42 → 43 |  7.3µs → 18.7µs |  46.0µs → 0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`    |
|  +30.6% |  +0.38ms |         <0.1% |     1.2ms → 1.6ms |       82 → 88 | 15.0µs → 18.2µs | 32.0µs → 45.0µs | `V8.GC_BACKGROUND_SAFEPOINT`                   |
| +443.1% |  +0.23ms |         <0.1% |     0.1ms → 0.3ms |         2 → 1 |  25.5µs → 0.3ms |  29.0µs → 0.3ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |
|   +1.7% |  +0.18ms |          0.2% |   10.5ms → 10.7ms |             2 |   5.3ms → 5.4ms |   8.2ms → 5.5ms | `V8.GCHandleGCRequest`                         |
|   +7.8% |  +0.10ms |         <0.1% |     1.3ms → 1.4ms |       27 → 26 |  49.6µs → 0.1ms |           0.2ms | `V8.GCDeoptMarkedAllocationSites`              |
|   +2.8% |  +0.07ms |         <0.1% |     2.5ms → 2.6ms |         3 → 1 |   0.8ms → 2.6ms |   0.9ms → 2.6ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`            |
|  +28.6% |  +0.03ms |         <0.1% |             0.1ms |       42 → 43 |   2.3µs → 2.9µs |  5.0µs → 11.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`           |
|   +3.7% |  +0.02ms |         <0.1% |             0.5ms |     129 → 130 |   3.6µs → 3.7µs | 19.0µs → 25.0µs | `RememberedSetUpdatingItem::Process`           |
|  +41.7% |  +0.01ms |         <0.1% |   24.0µs → 34.0µs |             8 |   3.0µs → 4.3µs |  6.0µs → 14.0µs | `ConcurrentMarking::RunMajor Preempted`        |
|  +28.6% |  +4.00µs |         <0.1% |   14.0µs → 18.0µs |             2 |   7.0µs → 9.0µs | 10.0µs → 12.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`     |
|   +1.1% |  +3.00µs |         <0.1% |             0.3ms |           348 |           0.8µs |   5.0µs → 3.0µs | `Parallel scavenge started`                    |
|  +50.0% |  +1.00µs |         <0.1% |     2.0µs → 3.0µs |             2 |   1.0µs → 1.5µs |   1.0µs → 2.0µs | `PageEvacuationJob started`                    |
| +100.0% |  +1.00µs |         <0.1% |     1.0µs → 2.0µs |             2 |   0.5µs → 1.0µs |           1.0µs | `Major concurrent marking paused`              |

##### Garbage collection pause

|  Change |    Delta |             % |          CPU time |     Count |            Mean |             Max | Span                                             |
| ------: | -------: | ------------: | ----------------: | --------: | --------------: | --------------: | ------------------------------------------------ |
|   +6.5% | +40.21ms | 11.4% → 11.8% | 618.6ms → 658.8ms |       348 |   1.8ms → 1.9ms |           8.5ms | `MinorGC`                                        |
|   +6.5% | +39.00ms | 11.1% → 11.4% | 600.6ms → 639.6ms |       348 |   1.7ms → 1.8ms |   8.5ms → 8.4ms | `V8.GCScavenger`                                 |
|   +6.4% | +38.37ms | 11.0% → 11.3% | 596.8ms → 635.2ms |       348 |   1.7ms → 1.8ms |   8.5ms → 8.4ms | `V8.GC_SCAVENGER`                                |
|   +6.4% | +37.58ms | 10.8% → 11.1% | 586.2ms → 623.8ms |       348 |   1.7ms → 1.8ms |           8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                       |
|   +2.9% | +10.18ms |          6.4% | 346.9ms → 357.0ms |       348 |           1.0ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`        |
|   +2.8% |  +9.37ms |          6.2% | 337.6ms → 346.9ms | 379 → 388 |           0.9ms |   7.4ms → 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`              |
|   +8.4% |  +1.84ms |          0.4% |   21.9ms → 23.7ms |       348 |           0.1ms |           0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`                 |
|  +66.6% |  +0.50ms |         <0.1% |     0.7ms → 1.2ms |       348 |   2.1µs → 3.6µs |   0.1ms → 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`           |
|   +6.8% |  +0.42ms |          0.1% |     6.2ms → 6.7ms |       348 | 17.9µs → 19.1µs |           0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`              |
|   +6.1% |  +0.36ms |          0.1% |     5.8ms → 6.2ms |       348 | 16.8µs → 17.8µs |           0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`            |
|  +23.2% |  +0.23ms |         <0.1% |     1.0ms → 1.2ms |       353 |   2.8µs → 3.4µs | 27.0µs → 25.0µs | `V8.GC_TIME_TO_SAFEPOINT`                        |
|  +39.8% |  +0.21ms |         <0.1% |     0.5ms → 0.7ms |         2 |   0.3ms → 0.4ms |   0.4ms → 0.5ms | `V8.GC_MC_INCREMENTAL_START`                     |
|  +26.8% |  +0.20ms |         <0.1% |     0.8ms → 1.0ms |         2 |   0.4ms → 0.5ms |   0.5ms → 0.6ms | `V8.GC_MC_MARK`                                  |
|  +25.9% |  +0.20ms |         <0.1% |     0.8ms → 1.0ms |         2 |   0.4ms → 0.5ms |           0.6ms | `V8.GC_MC_CLEAR`                                 |
|  +14.6% |  +0.19ms |         <0.1% |     1.3ms → 1.5ms |       350 |   3.7µs → 4.3µs |   0.3ms → 0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`                  |
|   +1.6% |  +0.17ms |          0.2% |   10.5ms → 10.7ms |         2 |           5.3ms |   8.2ms → 5.4ms | `MajorGC`                                        |
|   +1.5% |  +0.16ms |          0.2% |   10.4ms → 10.6ms |         2 |   5.2ms → 5.3ms |   8.2ms → 5.4ms | `V8.GCFinalizeMC`                                |
|  +25.9% |  +0.15ms |         <0.1% |     0.6ms → 0.7ms |         2 |   0.3ms → 0.4ms |   0.3ms → 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS` |
|   +1.4% |  +0.15ms |          0.2% |   10.4ms → 10.5ms |         2 |   5.2ms → 5.3ms |   8.1ms → 5.3ms | `V8.GC_MARK_COMPACTOR`                           |
| +130.4% |  +0.13ms |         <0.1% |     0.1ms → 0.2ms |         2 |           0.1ms |   0.1ms → 0.2ms | `V8.GC_MC_EVACUATE_PROLOGUE`                     |

##### I/O

| Change |   Delta |     % |        CPU time |           Count |            Mean |             Max | Span               |
| -----: | ------: | ----: | --------------: | --------------: | --------------: | --------------: | ------------------ |
|  +3.0% | +0.92ms |  0.6% | 30.4ms → 31.3ms | 10,058 → 10,115 |   3.0µs → 3.1µs |           0.1ms | `fs.sync.stat`     |
|  +7.6% | +0.16ms | <0.1% |   2.1ms → 2.3ms |   1,121 → 1,124 |   1.9µs → 2.1µs | 10.0µs → 15.0µs | `fs.sync.fstat`    |
|  +0.9% | +0.04ms |  0.1% |           4.5ms |             210 | 21.2µs → 21.4µs |           0.1ms | `fs.sync.realpath` |
| +56.5% | +0.04ms | <0.1% |           0.1ms |              18 |   3.4µs → 5.4µs |  8.0µs → 36.0µs | `fs.sync.lstat`    |
| +16.7% | +1.00µs | <0.1% |   6.0µs → 7.0µs |               1 |   6.0µs → 7.0µs |   6.0µs → 7.0µs | `fs.sync.readlink` |

#### Improvements

Thread spans with the largest decrease in time on a CPU, including child spans. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |           % |        CPU time |         Count |            Mean |             Max | Span                                            |
| -----: | ------: | ----------: | --------------: | ------------: | --------------: | --------------: | ----------------------------------------------- |
| -42.9% | -7.11ms | 0.3% → 0.2% |  16.6ms → 9.5ms | 1,122 → 1,125 |  14.8µs → 8.4µs |   4.9ms → 3.8ms | `fs.sync.read`                                  |
|  -9.1% | -0.57ms |        0.1% |   6.3ms → 5.7ms |             2 |   3.2ms → 2.9ms |   5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`               |
|  -8.6% | -0.55ms |        0.1% |   6.4ms → 5.8ms |             2 |   3.2ms → 2.9ms |   5.5ms → 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |
|  -8.4% | -0.54ms |        0.1% |   6.4ms → 5.9ms |             2 |   3.2ms → 2.9ms |   5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY`                        |
|  -5.5% | -0.48ms | 0.2% → 0.1% |   8.7ms → 8.2ms |       96 → 84 |           0.1ms |           0.2ms | `Evacuator::EvacuatePage`                       |
|  -5.2% | -0.45ms | 0.2% → 0.1% |   8.5ms → 8.1ms |       96 → 84 |           0.1ms |           0.2ms | `FullEvacuator::RawEvacuatePage`                |
|  -1.6% | -0.38ms |        0.4% | 23.5ms → 23.2ms | 1,122 → 1,125 | 21.0µs → 20.6µs |           0.1ms | `fs.sync.open`                                  |
| -51.8% | -0.37ms |       <0.1% |   0.7ms → 0.3ms |       28 → 12 | 25.3µs → 28.4µs |   0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                                |
|  -4.0% | -0.34ms | 0.2% → 0.1% |   8.4ms → 8.1ms |             4 |   2.1ms → 2.0ms |   6.5ms → 4.0ms | `V8.GC_MC_EVACUATE`                             |
|  -5.6% | -0.34ms |        0.1% |   6.0ms → 5.6ms |     667 → 613 |   9.0µs → 9.2µs |   0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                          |
|  -4.2% | -0.31ms |        0.1% |   7.4ms → 7.1ms |     667 → 613 | 11.1µs → 11.6µs |   0.1ms → 0.2ms | `V8.GCIncrementalMarking`                       |
|  -3.1% | -0.25ms |        0.1% |   8.1ms → 7.8ms |       91 → 82 |           0.1ms |           0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
| -56.7% | -0.17ms |       <0.1% |   0.3ms → 0.1ms |         5 → 2 |           0.1ms |           0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| -29.2% | -0.15ms |       <0.1% |   0.5ms → 0.4ms |             2 |   0.3ms → 0.2ms |   0.5ms → 0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`    |
|  -5.3% | -0.13ms |       <0.1% |   2.5ms → 2.4ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 23.0µs → 15.0µs | `fs.sync.close`                                 |
|  -6.0% | -0.10ms |       <0.1% |   1.6ms → 1.5ms |             1 |   1.6ms → 1.5ms |   1.6ms → 1.5ms | `V8.DeserializeIsolate`                         |
|  -8.3% | -0.09ms |       <0.1% |           1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir`                               |
| -13.4% | -0.09ms |       <0.1% |   0.7ms → 0.6ms |             2 |           0.3ms |   0.6ms → 0.5ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`  |
|  -2.0% | -0.04ms |       <0.1% |           1.9ms |             1 |           1.9ms |           1.9ms | `V8.DeserializeContext`                         |
|  -8.5% | -0.01ms |       <0.1% |           0.1ms |             2 |           0.1ms |           0.1ms | `V8.GC_MC_FINISH`                               |

##### Garbage collection

|  Change |   Delta |            % |      CPU time |     Count |          Mean |           Max | Span                                            |
| ------: | ------: | -----------: | ------------: | --------: | ------------: | ------------: | ----------------------------------------------- |
|   -8.6% | -0.55ms |         0.1% | 6.4ms → 5.8ms |         2 | 3.2ms → 2.9ms | 5.5ms → 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |
|   -5.5% | -0.48ms |  0.2% → 0.1% | 8.7ms → 8.2ms |   96 → 84 |         0.1ms |         0.2ms | `Evacuator::EvacuatePage`                       |
|   -5.2% | -0.45ms |  0.2% → 0.1% | 8.5ms → 8.1ms |   96 → 84 |         0.1ms |         0.2ms | `FullEvacuator::RawEvacuatePage`                |
|   -3.1% | -0.25ms |         0.1% | 8.1ms → 7.8ms |   91 → 82 |         0.1ms |         0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
|  -56.7% | -0.17ms |        <0.1% | 0.3ms → 0.1ms |     5 → 2 |         0.1ms |         0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
|   -1.4% | -0.01ms |        <0.1% |         0.5ms | 669 → 615 | 0.7µs → 0.8µs |         3.0µs | `Major concurrent marking rescheduled`          |
|  -66.7% | -2.00µs |        <0.1% | 3.0µs → 1.0µs |         2 | 1.5µs → 0.5µs | 2.0µs → 1.0µs | `PointersUpdatingJob started`                   |
|  -50.0% | -1.00µs |        <0.1% | 2.0µs → 1.0µs |         2 | 1.0µs → 0.5µs |         1.0µs | `ClearStringTableJob started`                   |
| removed | -1.00µs | <0.1% → 0.0% |   1.0µs → 0ms |         2 |   0.5µs → 0ms |   1.0µs → 0ms | `Major concurrent marking resumed`              |

##### Garbage collection pause

| Change |   Delta |           % |        CPU time |     Count |            Mean |            Max | Span                                           |
| -----: | ------: | ----------: | --------------: | --------: | --------------: | -------------: | ---------------------------------------------- |
|  -9.1% | -0.57ms |        0.1% |   6.3ms → 5.7ms |         2 |   3.2ms → 2.9ms |  5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`              |
|  -8.4% | -0.54ms |        0.1% |   6.4ms → 5.9ms |         2 |   3.2ms → 2.9ms |  5.5ms → 3.2ms | `V8.GC_MC_EVACUATE_COPY`                       |
| -51.8% | -0.37ms |       <0.1% |   0.7ms → 0.3ms |   28 → 12 | 25.3µs → 28.4µs |  0.1ms → 0.2ms | `V8.GC_MC_SWEEP`                               |
|  -4.0% | -0.34ms | 0.2% → 0.1% |   8.4ms → 8.1ms |         4 |   2.1ms → 2.0ms |  6.5ms → 4.0ms | `V8.GC_MC_EVACUATE`                            |
|  -5.6% | -0.34ms |        0.1% |   6.0ms → 5.6ms | 667 → 613 |   9.0µs → 9.2µs |  0.1ms → 0.2ms | `V8.GC_MC_INCREMENTAL`                         |
|  -4.2% | -0.31ms |        0.1% |   7.4ms → 7.1ms | 667 → 613 | 11.1µs → 11.6µs |  0.1ms → 0.2ms | `V8.GCIncrementalMarking`                      |
| -29.2% | -0.15ms |       <0.1% |   0.5ms → 0.4ms |         2 |   0.3ms → 0.2ms |  0.5ms → 0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`   |
| -13.4% | -0.09ms |       <0.1% |   0.7ms → 0.6ms |         2 |           0.3ms |  0.6ms → 0.5ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN` |
|  -8.5% | -0.01ms |       <0.1% |           0.1ms |         2 |           0.1ms |          0.1ms | `V8.GC_MC_FINISH`                              |
| -69.2% | -0.01ms |       <0.1% |  13.0µs → 4.0µs |         2 |   6.5µs → 2.0µs | 11.0µs → 2.0µs | `V8.GC_MC_SWEEP_START_JOBS`                    |
| -23.3% | -0.01ms |       <0.1% | 30.0µs → 23.0µs |         4 |   7.5µs → 5.8µs |  9.0µs → 7.0µs | `V8.GC_MC_MARK_EMBEDDER_PROLOGUE`              |
| -15.4% | -4.00µs |       <0.1% | 26.0µs → 22.0µs |   13 → 14 |   2.0µs → 1.6µs |  7.0µs → 9.0µs | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |
| -44.4% | -4.00µs |       <0.1% |   9.0µs → 5.0µs |         2 |   4.5µs → 2.5µs |  7.0µs → 3.0µs | `V8.GC_MC_EVACUATE_CLEAN_UP`                   |
| -30.0% | -3.00µs |       <0.1% |  10.0µs → 7.0µs |         1 |  10.0µs → 7.0µs | 10.0µs → 7.0µs | `V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES`      |
|  -1.5% | -2.00µs |       <0.1% |           0.1ms |   43 → 44 |   3.1µs → 3.0µs | 12.0µs → 8.0µs | `V8.GC_MINOR_MS_FINISH_SWEEP_ARRAY_BUFFERS`    |
| -28.6% | -2.00µs |       <0.1% |   7.0µs → 5.0µs |         2 |   3.5µs → 2.5µs |  4.0µs → 3.0µs | `V8.GC_MC_CLEAR_EXTERNAL_STRING_TABLE`         |
| -50.0% | -1.00µs |       <0.1% |   2.0µs → 1.0µs |         1 |   2.0µs → 1.0µs |  2.0µs → 1.0µs | `V8.GC_MINOR_MS_SWEEP`                         |
| -33.3% | -1.00µs |       <0.1% |   3.0µs → 2.0µs |         2 |   1.5µs → 1.0µs |  2.0µs → 1.0µs | `V8.GC_MC_CLEAR_WEAK_GLOBAL_HANDLES`           |
| -20.0% | -1.00µs |       <0.1% |   5.0µs → 4.0µs |         2 |   2.5µs → 2.0µs |  3.0µs → 2.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK`       |
| -50.0% | -1.00µs |       <0.1% |   2.0µs → 1.0µs |         1 |   2.0µs → 1.0µs |  2.0µs → 1.0µs | `V8.GC_MC_COMPLETE_SWEEP_ARRAY_BUFFERS`        |

##### I/O

| Change |   Delta |           % |        CPU time |         Count |            Mean |             Max | Span              |
| -----: | ------: | ----------: | --------------: | ------------: | --------------: | --------------: | ----------------- |
| -42.9% | -7.11ms | 0.3% → 0.2% |  16.6ms → 9.5ms | 1,122 → 1,125 |  14.8µs → 8.4µs |   4.9ms → 3.8ms | `fs.sync.read`    |
|  -1.6% | -0.38ms |        0.4% | 23.5ms → 23.2ms | 1,122 → 1,125 | 21.0µs → 20.6µs |           0.1ms | `fs.sync.open`    |
|  -5.3% | -0.13ms |       <0.1% |   2.5ms → 2.4ms | 1,122 → 1,125 |   2.2µs → 2.1µs | 23.0µs → 15.0µs | `fs.sync.close`   |
|  -8.3% | -0.09ms |       <0.1% |           1.1ms |            21 |           0.1ms |           0.2ms | `fs.sync.readdir` |

### Count

#### Regressions

Thread spans with the largest increase in occurrences recorded. Categories account for at least 1.0% of self time on the base or the current side.

|  Change | Delta |             % |           Count | Span                                           |
| ------: | ----: | ------------: | --------------: | ---------------------------------------------- |
|   +0.6% |   +57 | 23.9% → 24.1% | 10,058 → 10,115 | `fs.sync.stat`                                 |
|   +1.0% |   +27 |   6.5% → 6.6% |   2,730 → 2,757 | `V8.HandleInterrupts`                          |
|   +1.6% |   +22 |   3.3% → 3.4% |   1,391 → 1,413 | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|   +4.1% |   +18 |   1.0% → 1.1% |       434 → 452 | `V8.BytecodeBudgetInterruptWithStackCheck`     |
|   +0.6% |   +17 |          6.5% |   2,718 → 2,735 | `V8.StackGuard`                                |
|   +0.2% |   +13 | 16.5% → 16.6% |   6,931 → 6,944 | `V8.BytecodeBudgetInterrupt`                   |
|   +2.4% |    +9 |          0.9% |       379 → 388 | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
| +114.3% |    +8 |         <0.1% |          7 → 15 | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|   +7.3% |    +6 |          0.2% |         82 → 88 | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|   +3.1% |    +6 |          0.5% |       195 → 201 | `V8.GC_BACKGROUND_UNPARK`                      |
|   +0.3% |    +3 |          2.7% |   1,122 → 1,125 | `fs.sync.open`                                 |
|   +0.3% |    +3 |          2.7% |   1,121 → 1,124 | `fs.sync.fstat`                                |
|   +0.3% |    +3 |          2.7% |   1,122 → 1,125 | `fs.sync.read`                                 |
|   +0.3% |    +3 |          2.7% |   1,122 → 1,125 | `fs.sync.close`                                |
|   +2.3% |    +1 |          0.1% |         43 → 44 | `V8.GC_MINOR_MS_FINISH_SWEEP_ARRAY_BUFFERS`    |
|   +7.7% |    +1 |         <0.1% |         13 → 14 | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |
|   +0.8% |    +1 |          0.3% |       129 → 130 | `RememberedSetUpdatingItem::Process`           |
|   +2.4% |    +1 |          0.1% |         42 → 43 | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`           |
|   +2.4% |    +1 |          0.1% |         42 → 43 | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`    |

##### Script

| Change | Delta |             % |         Count | Span                                       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ |
|  +1.0% |   +27 |   6.5% → 6.6% | 2,730 → 2,757 | `V8.HandleInterrupts`                      |
|  +4.1% |   +18 |   1.0% → 1.1% |     434 → 452 | `V8.BytecodeBudgetInterruptWithStackCheck` |
|  +0.6% |   +17 |          6.5% | 2,718 → 2,735 | `V8.StackGuard`                            |
|  +0.2% |   +13 | 16.5% → 16.6% | 6,931 → 6,944 | `V8.BytecodeBudgetInterrupt`               |

##### Garbage collection

|  Change | Delta |           % |         Count | Span                                           |
| ------: | ----: | ----------: | ------------: | ---------------------------------------------- |
|   +1.6% |   +22 | 3.3% → 3.4% | 1,391 → 1,413 | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
| +114.3% |    +8 |       <0.1% |        7 → 15 | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|   +7.3% |    +6 |        0.2% |       82 → 88 | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|   +3.1% |    +6 |        0.5% |     195 → 201 | `V8.GC_BACKGROUND_UNPARK`                      |
|   +0.8% |    +1 |        0.3% |     129 → 130 | `RememberedSetUpdatingItem::Process`           |
|   +2.4% |    +1 |        0.1% |       42 → 43 | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`           |
|   +2.4% |    +1 |        0.1% |       42 → 43 | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`    |

##### Garbage collection pause

| Change | Delta |     % |     Count | Span                                           |
| -----: | ----: | ----: | --------: | ---------------------------------------------- |
|  +2.4% |    +9 |  0.9% | 379 → 388 | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  +2.3% |    +1 |  0.1% |   43 → 44 | `V8.GC_MINOR_MS_FINISH_SWEEP_ARRAY_BUFFERS`    |
|  +7.7% |    +1 | <0.1% |   13 → 14 | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |

##### I/O

| Change | Delta |             % |           Count | Span            |
| -----: | ----: | ------------: | --------------: | --------------- |
|  +0.6% |   +57 | 23.9% → 24.1% | 10,058 → 10,115 | `fs.sync.stat`  |
|  +0.3% |    +3 |          2.7% |   1,122 → 1,125 | `fs.sync.open`  |
|  +0.3% |    +3 |          2.7% |   1,121 → 1,124 | `fs.sync.fstat` |
|  +0.3% |    +3 |          2.7% |   1,122 → 1,125 | `fs.sync.read`  |
|  +0.3% |    +3 |          2.7% |   1,122 → 1,125 | `fs.sync.close` |

#### Improvements

Thread spans with the largest decrease in occurrences recorded. Categories account for at least 1.0% of self time on the base or the current side.

| Change | Delta |            % |         Count | Span                                           |
| -----: | ----: | -----------: | ------------: | ---------------------------------------------- |
|  -8.1% |   -54 |  1.6% → 1.5% |     667 → 613 | `V8.GCIncrementalMarking`                      |
|  -8.1% |   -54 |  1.6% → 1.5% |     667 → 613 | `V8.GC_MC_INCREMENTAL`                         |
|  -8.1% |   -54 |  1.6% → 1.5% |     667 → 613 | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING`        |
|  -8.1% |   -54 |  1.6% → 1.5% |     669 → 615 | `Major concurrent marking rescheduled`         |
|  -2.5% |   -40 |  3.8% → 3.7% | 1,580 → 1,540 | `V8.DeoptimizeCode`                            |
| -57.1% |   -16 | 0.1% → <0.1% |       28 → 12 | `V8.GC_MC_SWEEP`                               |
| -12.5% |   -12 |         0.2% |       96 → 84 | `Evacuator::EvacuatePage`                      |
| -12.5% |   -12 |         0.2% |       96 → 84 | `FullEvacuator::RawEvacuatePage`               |
|  -9.9% |    -9 |         0.2% |       91 → 82 | `LiveObjectVisitor::VisitMarkedObjectsNoFail`  |
| -23.3% |    -7 |         0.1% |       30 → 23 | `V8.GC_MC_BACKGROUND_MARKING`                  |
| -60.0% |    -3 |        <0.1% |         5 → 2 | `LiveObjectVisitor::VisitMarkedObjects`        |
| -66.7% |    -2 |        <0.1% |         3 → 1 | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`            |
|  -3.7% |    -1 |         0.1% |       27 → 26 | `V8.GCDeoptMarkedAllocationSites`              |
| -50.0% |    -1 |        <0.1% |         2 → 1 | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |

##### Garbage collection

| Change | Delta |           % |     Count | Span                                           |
| -----: | ----: | ----------: | --------: | ---------------------------------------------- |
|  -8.1% |   -54 | 1.6% → 1.5% | 669 → 615 | `Major concurrent marking rescheduled`         |
| -12.5% |   -12 |        0.2% |   96 → 84 | `Evacuator::EvacuatePage`                      |
| -12.5% |   -12 |        0.2% |   96 → 84 | `FullEvacuator::RawEvacuatePage`               |
|  -9.9% |    -9 |        0.2% |   91 → 82 | `LiveObjectVisitor::VisitMarkedObjectsNoFail`  |
| -23.3% |    -7 |        0.1% |   30 → 23 | `V8.GC_MC_BACKGROUND_MARKING`                  |
| -60.0% |    -3 |       <0.1% |     5 → 2 | `LiveObjectVisitor::VisitMarkedObjects`        |
| -66.7% |    -2 |       <0.1% |     3 → 1 | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`            |
|  -3.7% |    -1 |        0.1% |   27 → 26 | `V8.GCDeoptMarkedAllocationSites`              |
| -50.0% |    -1 |       <0.1% |     2 → 1 | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |

##### Garbage collection pause

| Change | Delta |            % |     Count | Span                                    |
| -----: | ----: | -----------: | --------: | --------------------------------------- |
|  -8.1% |   -54 |  1.6% → 1.5% | 667 → 613 | `V8.GCIncrementalMarking`               |
|  -8.1% |   -54 |  1.6% → 1.5% | 667 → 613 | `V8.GC_MC_INCREMENTAL`                  |
|  -8.1% |   -54 |  1.6% → 1.5% | 667 → 613 | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING` |
| -57.1% |   -16 | 0.1% → <0.1% |   28 → 12 | `V8.GC_MC_SWEEP`                        |

## Longest async spans

Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.

### Elapsed time

#### Regressions

Async spans with the largest increase in time elapsed from start to end.

| Change |     Delta |                  Time | Count |              Mean |           Max | Span               |
| -----: | --------: | --------------------: | ----: | ----------------: | ------------: | ------------------ |
|  +3.4% |  +10.824s | 5m 19.30s → 5m 30.13s |    80 |     5.41s → 5.60s | 5.42s → 5.60s | `PROMISE`          |
|  +3.4% | +183.26ms |         5.41s → 5.59s |     1 |     5.41s → 5.59s | 5.41s → 5.59s | `PIPEWRAP`         |
|  +3.4% | +182.49ms |         5.41s → 5.60s |    51 | 106.1ms → 109.7ms | 5.41s → 5.59s | `PROMISE_CALLBACK` |

#### Parents

Parent spans with the largest change in contribution to each span's elapsed time.

##### `PROMISE_CALLBACK`

| Change |     Delta |      % |          Time | Count |              Mean |           Max | Parent    |
| -----: | --------: | -----: | ------------: | ----: | ----------------: | ------------: | --------- |
|  +3.4% | +182.49ms | 100.0% | 5.41s → 5.60s |    51 | 106.1ms → 109.7ms | 5.41s → 5.59s | `PROMISE` |

#### Children

Child spans with the largest change in contribution to each span's elapsed time.

##### `PROMISE`

| Change |     Delta |    % |          Time | Count |              Mean |           Max | Child              |
| -----: | --------: | ---: | ------------: | ----: | ----------------: | ------------: | ------------------ |
|  +3.4% | +182.49ms | 1.7% | 5.41s → 5.60s |    51 | 106.1ms → 109.7ms | 5.41s → 5.59s | `PROMISE_CALLBACK` |

#### Longest instances

Instances of each span with the most time, paired by rank.

##### `PROMISE`

| Change |     Delta |    % |          Time |         Start |
| -----: | --------: | ---: | ------------: | ------------: |
|  +3.4% | +181.93ms | 1.7% | 5.42s → 5.60s | 6.5ms → 5.8ms |
|  +3.4% | +182.30ms | 1.7% | 5.42s → 5.60s | 7.6ms → 6.6ms |
|  +3.4% | +182.30ms | 1.7% | 5.42s → 5.60s | 7.7ms → 6.6ms |
|  +3.4% | +182.30ms | 1.7% | 5.42s → 5.60s | 7.7ms → 6.6ms |
|  +3.4% | +182.73ms | 1.7% | 5.41s → 5.60s | 8.7ms → 7.2ms |

##### `PIPEWRAP`

| Change |     Delta |      % |          Time |          Start |
| -----: | --------: | -----: | ------------: | -------------: |
|  +3.4% | +183.26ms | 100.0% | 5.41s → 5.59s | 11.9ms → 9.9ms |

##### `PROMISE_CALLBACK`

| Change |     Delta |            % |          Time |           Start |
| -----: | --------: | -----------: | ------------: | --------------: |
|  +3.4% | +184.08ms |        99.9% | 5.41s → 5.59s | 13.5ms → 10.7ms |
| -13.5% |   -0.39ms | 0.1% → <0.1% | 2.9ms → 2.5ms |   9.5ms → 7.7ms |
| -39.9% |   -0.42ms |        <0.1% | 1.1ms → 0.6ms |   7.7ms → 6.6ms |
| -52.9% |   -0.27ms |        <0.1% | 0.5ms → 0.2ms |  12.4ms → 7.3ms |
| -65.2% |   -0.28ms |        <0.1% | 0.4ms → 0.1ms |   8.8ms → 7.6ms |

### Count

No async span differed in occurrences recorded.

## Most frequent instants

### Count

No instant differed in occurrences recorded.

## Gauges

Gauges with the largest relative change in their last reading. Means are weighted by how long each level lasted.

| Gauge                         | Change |      Delta | Readings |                 Min |              Mean |               Max |               First |              Last | Trend                                         |
| ----------------------------- | -----: | ---------: | -------: | ------------------: | ----------------: | ----------------: | ------------------: | ----------------: | --------------------------------------------- |
| `Heap used after collection`  |  -0.2% | -1.514 MiB |      350 |   16.9 MiB → 17 MiB | 385 MiB → 381 MiB | 736 MiB → 735 MiB |   16.9 MiB → 17 MiB | 736 MiB → 735 MiB | `▁▂▂▂▃▃▃▃▄▅▅▅▅▆▆▇▇███ → ▁▂▂▂▃▃▃▃▄▅▅▅▅▆▆▇▇▇██` |
| `Heap used before collection` |  -0.2% | -1.206 MiB |      350 | 17.2 MiB → 17.6 MiB | 396 MiB → 393 MiB | 751 MiB → 750 MiB | 17.4 MiB → 17.8 MiB | 751 MiB → 750 MiB | `▁▂▂▃▃▃▃▄▄▅▅▅▅▆▆▇▇███ → ▁▂▂▃▃▃▃▃▄▅▅▅▅▆▆▇▇▇██` |

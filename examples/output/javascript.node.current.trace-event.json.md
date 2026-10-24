# Trace

Recorded 42,414 events over 5.60s.

| Category                 |     % |    Time |  Count |
| ------------------------ | ----: | ------: | -----: |
| Script                   | 85.0% |   4.76s | 12,940 |
| Garbage collection       | 34.4% |   1.92s |  3,233 |
| Garbage collection pause | 13.1% | 734.2ms |  9,752 |
| I/O                      |  1.3% |  74.5ms | 14,864 |
| Compilation              |  0.2% |  13.3ms |  1,540 |
| Other                    |  0.1% |   3.4ms |     85 |

## Threads

Threads with the most time in spans. Threads run concurrently, so percentages can sum to more than 100%.

|     % |  Time |  Count | Thread                 |
| ----: | ----: | -----: | ---------------------- |
| 99.9% | 5.59s | 40,324 | `JavaScriptMainThread` |
| 34.2% | 1.91s |  1,958 | `PlatformWorkerThread` |

## Longest spans

### Self time

Spans with the most time, excluding child spans.

|     % |    Time |  Count |   Mean |    Max | Span                                           |
| ----: | ------: | -----: | -----: | -----: | ---------------------------------------------- |
| 82.5% |   4.62s |      1 |  4.62s |  4.62s | `RunMicrotasks`                                |
| 14.9% | 833.8ms |  1,413 |  0.6ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  9.9% | 554.0ms |    201 |  2.8ms | 13.4ms | `V8.GC_BACKGROUND_UNPARK`                      |
|  6.7% | 375.7ms |    388 |  1.0ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  4.5% | 253.5ms |     88 |  2.9ms |  7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|  4.3% | 238.5ms |     23 | 10.4ms | 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  4.1% | 227.7ms |    348 |  0.7ms |  1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  1.3% |  73.4ms |  2,757 | 26.6µs |  0.9ms | `V8.HandleInterrupts`                          |
|  0.9% |  50.4ms |  6,944 |  7.3µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.7% |  37.1ms |    348 |  0.1ms |  1.2ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  0.6% |  34.5ms |     15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.6% |  31.5ms | 10,115 |  3.1µs |  0.1ms | `fs.sync.stat`                                 |
|  0.4% |  23.7ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.4% |  23.3ms |  1,125 | 20.7µs |  0.1ms | `fs.sync.open`                                 |
|  0.3% |  17.7ms |    348 |  0.1ms |  0.1ms | `MinorGC`                                      |
|  0.2% |  13.3ms |  1,540 |  8.6µs |  0.1ms | `V8.DeoptimizeCode`                            |
|  0.2% |  10.7ms |  2,735 |  3.9µs | 48.0µs | `V8.StackGuard`                                |
|  0.2% |   9.5ms |  1,125 |  8.5µs |  3.8ms | `fs.sync.read`                                 |
|  0.1% |   8.1ms |    348 | 23.2µs |  0.1ms | `V8.GC_SCAVENGER`                              |
|  0.1% |   8.1ms |    348 | 23.1µs |  1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % |   Time | Count |   Mean |    Max | Span                                       |
| ----: | -----: | ----: | -----: | -----: | ------------------------------------------ |
| 82.5% |  4.62s |     1 |  4.62s |  4.62s | `RunMicrotasks`                            |
|  1.3% | 73.4ms | 2,757 | 26.6µs |  0.9ms | `V8.HandleInterrupts`                      |
|  0.9% | 50.4ms | 6,944 |  7.3µs |  0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.2% | 10.7ms | 2,735 |  3.9µs | 48.0µs | `V8.StackGuard`                            |
|  0.1% |  7.5ms |   452 | 16.5µs |  0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % |    Time | Count |   Mean |    Max | Span                                            |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------------- |
| 14.9% | 833.8ms | 1,413 |  0.6ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  9.9% | 554.0ms |   201 |  2.8ms | 13.4ms | `V8.GC_BACKGROUND_UNPARK`                       |
|  4.5% | 253.5ms |    88 |  2.9ms |  7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                    |
|  4.3% | 238.5ms |    23 | 10.4ms | 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.6% |  34.5ms |    15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.1% |   7.5ms |    82 |  0.1ms |  0.1ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
| <0.1% |   1.4ms |    26 |  0.1ms |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |   0.8ms |    43 | 18.7µs |  0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |   0.5ms |   615 |  0.8µs |  2.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |   0.5ms |   130 |  3.8µs | 25.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |   0.3ms |   348 |  0.9µs |  3.0µs | `Parallel scavenge started`                     |
| <0.1% |   0.2ms |    43 |  3.6µs | 29.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |   0.2ms |    84 |  1.8µs |  5.0µs | `FullEvacuator::RawEvacuatePage`                |
| <0.1% |   0.1ms |     2 |  0.1ms |  0.1ms | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |   0.1ms |    84 |  1.6µs |  5.0µs | `Evacuator::EvacuatePage`                       |
| <0.1% |   0.1ms |     2 | 48.0µs |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |   0.1ms |     1 |  0.1ms |  0.1ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |  31.0µs |     8 |  3.9µs | 14.0µs | `ConcurrentMarking::RunMajor Preempted`         |
| <0.1% |  19.0µs |     1 | 19.0µs | 19.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |  18.0µs |     2 |  9.0µs | 12.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`      |

##### Garbage collection pause

|     % |    Time | Count |   Mean |    Max | Span                                                    |
| ----: | ------: | ----: | -----: | -----: | ------------------------------------------------------- |
|  6.7% | 375.7ms |   388 |  1.0ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`                     |
|  4.1% | 227.7ms |   348 |  0.7ms |  1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                              |
|  0.7% |  37.1ms |   348 |  0.1ms |  1.2ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`               |
|  0.4% |  23.7ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`                        |
|  0.3% |  17.7ms |   348 |  0.1ms |  0.1ms | `MinorGC`                                               |
|  0.1% |   8.1ms |   348 | 23.2µs |  0.1ms | `V8.GC_SCAVENGER`                                       |
|  0.1% |   8.1ms |   348 | 23.1µs |  1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`                     |
|  0.1% |   6.2ms |   348 | 17.7µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`                   |
|  0.1% |   5.0ms |   353 | 14.3µs |  0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                               |
|  0.1% |   4.5ms |   613 |  7.4µs |  0.2ms | `V8.GC_MC_INCREMENTAL`                                  |
|  0.1% |   3.8ms |   348 | 10.9µs |  0.7ms | `V8.GCScavenger`                                        |
| <0.1% |   1.5ms |   350 |  4.4µs | 16.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`                         |
| <0.1% |   1.5ms |   350 |  4.3µs |  0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`                         |
| <0.1% |   1.4ms |   613 |  2.3µs | 17.0µs | `V8.GCIncrementalMarking`                               |
| <0.1% |   1.2ms |   348 |  3.6µs |  0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`                  |
| <0.1% |   0.8ms |   350 |  2.3µs | 13.0µs | `V8.GC_HEAP_PROLOGUE`                                   |
| <0.1% |   0.8ms |   613 |  1.3µs | 25.0µs | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING`                 |
| <0.1% |   0.7ms |     2 |  0.4ms |  0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`        |
| <0.1% |   0.7ms |     2 |  0.3ms |  0.4ms | `V8.GC_MC_CLEAR_STRING_TABLE`                           |
| <0.1% |   0.6ms |   348 |  1.8µs | 13.0µs | `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

|      % |    Time | Count |  Mean |   Max | Parent                                    |
| -----: | ------: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 375.7ms |   388 | 1.0ms | 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|      % |    Time | Count |  Mean |   Max | Parent            |
| -----: | ------: | ----: | ----: | ----: | ----------------- |
| 100.0% | 227.7ms |   348 | 0.7ms | 1.7ms | `V8.GC_SCAVENGER` |

##### `V8.HandleInterrupts`

|     % |   Time | Count |   Mean |    Max | Parent                                     |
| ----: | -----: | ----: | -----: | -----: | ------------------------------------------ |
| 98.8% | 72.6ms | 2,735 | 26.5µs |  0.9ms | `V8.StackGuard`                            |
|  1.1% |  0.8ms |    20 | 40.5µs |  0.2ms | `RunMicrotasks`                            |
|  0.1% | 48.0µs |     2 | 24.0µs | 36.0µs | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### `V8.BytecodeBudgetInterrupt`

|      % |   Time | Count |  Mean |   Max | Parent          |
| -----: | -----: | ----: | ----: | ----: | --------------- |
| 100.0% | 50.4ms | 6,931 | 7.3µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|      % |   Time | Count |  Mean |   Max | Parent                     |
| -----: | -----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 37.1ms |   348 | 0.1ms | 1.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

|    % |  Time | Count |   Mean |    Max | Parent                                        |
| ---: | ----: | ----: | -----: | -----: | --------------------------------------------- |
| 0.7% | 0.2ms |     8 | 28.8µs | 45.0µs | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |

##### `fs.sync.stat`

|      % |   Time |  Count |  Mean |   Max | Parent          |
| -----: | -----: | -----: | ----: | ----: | --------------- |
| 100.0% | 31.5ms | 10,114 | 3.1µs | 0.1ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

|      % |   Time | Count |  Mean |   Max | Parent                     |
| -----: | -----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 23.7ms |   348 | 0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `fs.sync.open`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 23.3ms | 1,125 | 20.7µs | 0.1ms | `RunMicrotasks` |

##### `MinorGC`

|      % |   Time | Count |  Mean |   Max | Parent          |
| -----: | -----: | ----: | ----: | ----: | --------------- |
| 100.0% | 17.7ms |   348 | 0.1ms | 0.1ms | `RunMicrotasks` |

##### `V8.DeoptimizeCode`

|     % |  Time | Count |   Mean |   Max | Parent              |
| ----: | ----: | ----: | -----: | ----: | ------------------- |
| 60.3% | 8.0ms |   670 | 12.0µs | 0.1ms | `V8.DeoptimizeCode` |
| 39.7% | 5.3ms |   870 |  6.1µs | 0.1ms | `RunMicrotasks`     |

##### `V8.StackGuard`

|     % |   Time | Count |  Mean |    Max | Parent          |
| ----: | -----: | ----: | ----: | -----: | --------------- |
| 99.9% | 10.7ms | 2,734 | 3.9µs | 48.0µs | `RunMicrotasks` |

##### `fs.sync.read`

|      % |  Time | Count |  Mean |   Max | Parent          |
| -----: | ----: | ----: | ----: | ----: | --------------- |
| 100.0% | 9.5ms | 1,125 | 8.5µs | 3.8ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER`

|      % |  Time | Count |   Mean |   Max | Parent           |
| -----: | ----: | ----: | -----: | ----: | ---------------- |
| 100.0% | 8.1ms |   348 | 23.2µs | 0.1ms | `V8.GCScavenger` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 8.1ms |   348 | 23.1µs | 1.4ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|      % |  Time | Count |  Mean |   Max | Parent                           |
| -----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 100.0% | 7.5ms |    82 | 0.1ms | 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|     % |  Time | Count |   Mean |   Max | Parent          |
| ----: | ----: | ----: | -----: | ----: | --------------- |
| 96.6% | 7.2ms |   449 | 16.1µs | 0.5ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 6.2ms |   348 | 17.7µs | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|     % |   Time | Count |   Mean |    Max | Parent                |
| ----: | -----: | ----: | -----: | -----: | --------------------- |
| 98.9% |  5.0ms |   348 | 14.3µs |  0.5ms | `V8.GCScavenger`      |
|  0.8% | 41.0µs |     2 | 20.5µs | 26.0µs | `V8.GCFinalizeMC`     |
|  0.1% |  6.0µs |     1 |  6.0µs |  6.0µs | `RunMicrotasks`       |
| <0.1% |  2.0µs |     1 |  2.0µs |  2.0µs | `V8.HandleInterrupts` |

##### `V8.GC_MC_INCREMENTAL`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 4.5ms |   613 | 7.4µs | 0.2ms | `V8.GCIncrementalMarking` |

##### `V8.GCScavenger`

|      % |  Time | Count |   Mean |   Max | Parent    |
| -----: | ----: | ----: | -----: | ----: | --------- |
| 100.0% | 3.8ms |   348 | 10.9µs | 0.7ms | `MinorGC` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|     % |   Time | Count |  Mean |    Max | Parent                 |
| ----: | -----: | ----: | ----: | -----: | ---------------------- |
| 99.3% |  1.5ms |   348 | 4.4µs | 16.0µs | `V8.GC_SCAVENGER`      |
|  0.7% | 11.0µs |     2 | 5.5µs |  6.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

|     % |  Time | Count |  Mean |   Max | Parent                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 99.7% | 1.5ms |   348 | 4.3µs | 0.5ms | `V8.GC_SCAVENGER`      |
|  0.3% | 5.0µs |     2 | 2.5µs | 3.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GCDeoptMarkedAllocationSites`

|      % |  Time | Count |  Mean |   Max | Parent                |
| -----: | ----: | ----: | ----: | ----: | --------------------- |
| 100.0% | 1.4ms |    26 | 0.1ms | 0.2ms | `V8.HandleInterrupts` |

##### `V8.GCIncrementalMarking`

|      % |  Time | Count |  Mean |    Max | Parent          |
| -----: | ----: | ----: | ----: | -----: | --------------- |
| 100.0% | 1.4ms |   613 | 2.3µs | 17.0µs | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`

|      % |  Time | Count |  Mean |   Max | Parent                     |
| -----: | ----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 1.2ms |   348 | 3.6µs | 0.6ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_HEAP_PROLOGUE`

|     % |  Time | Count |  Mean |    Max | Parent    |
| ----: | ----: | ----: | ----: | -----: | --------- |
| 99.6% | 0.8ms |   348 | 2.3µs | 13.0µs | `MinorGC` |
|  0.4% | 3.0µs |     2 | 1.5µs |  2.0µs | `MajorGC` |

##### `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING`

|      % |  Time | Count |  Mean |    Max | Parent                 |
| -----: | ----: | ----: | ----: | -----: | ---------------------- |
| 100.0% | 0.8ms |   613 | 1.3µs | 25.0µs | `V8.GC_MC_INCREMENTAL` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`

|      % |  Time | Count |  Mean |   Max | Parent                              |
| -----: | ----: | ----: | ----: | ----: | ----------------------------------- |
| 100.0% | 0.7ms |     2 | 0.4ms | 0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |

##### `V8.GC_MC_CLEAR_STRING_TABLE`

|     % |  Time | Count |  Mean |   Max | Parent                    |
| ----: | ----: | ----: | ----: | ----: | ------------------------- |
| 57.2% | 0.4ms |     1 | 0.4ms | 0.4ms | `V8.GC_MC_CLEAR_JOIN_JOB` |

##### `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY`

|      % |  Time | Count |  Mean |    Max | Parent                     |
| -----: | ----: | ----: | ----: | -----: | -------------------------- |
| 100.0% | 0.6ms |   348 | 1.8µs | 13.0µs | `V8.GC_SCAVENGER_SCAVENGE` |

##### `Major concurrent marking rescheduled`

|     % |  Time | Count |  Mean |   Max | Parent                                         |
| ----: | ----: | ----: | ----: | ----: | ---------------------------------------------- |
| 99.4% | 0.5ms |   611 | 0.8µs | 2.0µs | `V8.GC_MC_INCREMENTAL`                         |
|  0.4% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING` |
|  0.2% | 1.0µs |     2 | 0.5µs | 1.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`          |

##### `RememberedSetUpdatingItem::Process`

|     % |  Time | Count |  Mean |    Max | Parent                                         |
| ----: | ----: | ----: | ----: | -----: | ---------------------------------------------- |
| 57.8% | 0.3ms |    84 | 3.4µs | 24.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`   |
| 42.2% | 0.2ms |    46 | 4.5µs | 25.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |

##### `Parallel scavenge started`

|      % |  Time | Count |  Mean |   Max | Parent                                    |
| -----: | ----: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 0.3ms |   348 | 0.9µs | 3.0µs | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `FullEvacuator::RawEvacuatePage`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 0.2ms |    84 | 1.8µs | 5.0µs | `Evacuator::EvacuatePage` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|      % |  Time | Count |  Mean |   Max | Parent                   |
| -----: | ----: | ----: | ----: | ----: | ------------------------ |
| 100.0% | 0.1ms |     2 | 0.1ms | 0.1ms | `V8.GC_MC_EVACUATE_COPY` |

##### `Evacuator::EvacuatePage`

|     % |   Time | Count |  Mean |   Max | Parent                              |
| ----: | -----: | ----: | ----: | ----: | ----------------------------------- |
| 69.1% |  0.1ms |    60 | 1.6µs | 2.0µs | `V8.GC_MC_EVACUATE_COPY_PARALLEL`   |
| 30.9% | 42.0µs |    24 | 1.8µs | 5.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|      % |  Time | Count |   Mean |   Max | Parent                           |
| -----: | ----: | ----: | -----: | ----: | -------------------------------- |
| 100.0% | 0.1ms |     2 | 48.0µs | 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `ConcurrentMarking::RunMajor Preempted`

|      % |   Time | Count |  Mean |    Max | Parent                        |
| -----: | -----: | ----: | ----: | -----: | ----------------------------- |
| 100.0% | 31.0µs |     8 | 3.9µs | 14.0µs | `V8.GC_MC_BACKGROUND_MARKING` |

### Total time

Spans with the most time, including child spans.

|     % |    Time |  Count |   Mean |    Max | Span                                           |
| ----: | ------: | -----: | -----: | -----: | ---------------------------------------------- |
| 99.8% |   5.59s |      1 |  5.59s |  5.59s | `RunMicrotasks`                                |
| 14.9% | 833.8ms |  1,413 |  0.6ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
| 12.9% | 721.4ms |    348 |  2.1ms |  8.5ms | `MinorGC`                                      |
| 12.5% | 702.0ms |    348 |  2.0ms |  8.5ms | `V8.GCScavenger`                               |
| 12.4% | 693.2ms |    348 |  2.0ms |  8.5ms | `V8.GC_SCAVENGER`                              |
| 12.2% | 681.8ms |    348 |  2.0ms |  8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  9.9% | 554.0ms |    201 |  2.8ms | 13.4ms | `V8.GC_BACKGROUND_UNPARK`                      |
|  7.4% | 413.1ms |    348 |  1.2ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  6.7% | 375.7ms |    388 |  1.0ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  4.5% | 253.5ms |     88 |  2.9ms |  7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|  4.3% | 238.5ms |     23 | 10.4ms | 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  1.7% |  96.3ms |  2,735 | 35.2µs |  5.5ms | `V8.StackGuard`                                |
|  1.5% |  86.4ms |  2,757 | 31.4µs |  5.5ms | `V8.HandleInterrupts`                          |
|  0.9% |  50.4ms |  6,944 |  7.3µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.6% |  34.5ms |     15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.6% |  31.5ms | 10,115 |  3.1µs |  0.1ms | `fs.sync.stat`                                 |
|  0.4% |  23.7ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.4% |  23.3ms |  1,125 | 20.7µs |  0.1ms | `fs.sync.open`                                 |
|  0.2% |  13.3ms |  1,540 | 13.8µs |  0.1ms | `V8.DeoptimizeCode`                            |
|  0.2% |  11.0ms |      2 |  5.5ms |  5.5ms | `V8.GCHandleGCRequest`                         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % |   Time | Count |   Mean |   Max | Span                                       |
| ----: | -----: | ----: | -----: | ----: | ------------------------------------------ |
| 99.8% |  5.59s |     1 |  5.59s | 5.59s | `RunMicrotasks`                            |
|  1.7% | 96.3ms | 2,735 | 35.2µs | 5.5ms | `V8.StackGuard`                            |
|  1.5% | 86.4ms | 2,757 | 31.4µs | 5.5ms | `V8.HandleInterrupts`                      |
|  0.9% | 50.4ms | 6,944 |  7.3µs | 0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.1% |  7.5ms |   452 | 16.6µs | 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % |    Time | Count |   Mean |    Max | Span                                            |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------------- |
| 14.9% | 833.8ms | 1,413 |  0.6ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  9.9% | 554.0ms |   201 |  2.8ms | 13.4ms | `V8.GC_BACKGROUND_UNPARK`                       |
|  4.5% | 253.5ms |    88 |  2.9ms |  7.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                    |
|  4.3% | 238.5ms |    23 | 10.4ms | 29.9ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.6% |  34.5ms |    15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.2% |  11.0ms |     2 |  5.5ms |  5.5ms | `V8.GCHandleGCRequest`                          |
|  0.1% |   8.2ms |    84 |  0.1ms |  0.2ms | `Evacuator::EvacuatePage`                       |
|  0.1% |   8.1ms |    84 |  0.1ms |  0.2ms | `FullEvacuator::RawEvacuatePage`                |
|  0.1% |   7.8ms |    82 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
|  0.1% |   5.9ms |     2 |  2.9ms |  3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |   2.6ms |     1 |  2.6ms |  2.6ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |   1.4ms |    26 |  0.1ms |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |   0.8ms |    43 | 18.7µs |  0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |   0.5ms |   615 |  0.8µs |  2.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |   0.5ms |   130 |  3.8µs | 25.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |   0.3ms |   348 |  0.9µs |  3.0µs | `Parallel scavenge started`                     |
| <0.1% |   0.3ms |     1 |  0.3ms |  0.3ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |   0.2ms |    43 |  3.6µs | 29.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |   0.1ms |     2 |  0.1ms |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |  31.0µs |     8 |  3.9µs | 14.0µs | `ConcurrentMarking::RunMajor Preempted`         |

##### Garbage collection pause

|     % |    Time | Count |   Mean |    Max | Span                                      |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------- |
| 12.9% | 721.4ms |   348 |  2.1ms |  8.5ms | `MinorGC`                                 |
| 12.5% | 702.0ms |   348 |  2.0ms |  8.5ms | `V8.GCScavenger`                          |
| 12.4% | 693.2ms |   348 |  2.0ms |  8.5ms | `V8.GC_SCAVENGER`                         |
| 12.2% | 681.8ms |   348 |  2.0ms |  8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                |
|  7.4% | 413.1ms |   348 |  1.2ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
|  6.7% | 375.7ms |   388 |  1.0ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`       |
|  0.4% |  23.7ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
|  0.2% |  10.9ms |     2 |  5.5ms |  5.5ms | `MajorGC`                                 |
|  0.2% |  10.8ms |     2 |  5.4ms |  5.5ms | `V8.GCFinalizeMC`                         |
|  0.2% |  10.7ms |     2 |  5.4ms |  5.4ms | `V8.GC_MARK_COMPACTOR`                    |
|  0.1% |   8.2ms |     4 |  2.0ms |  4.0ms | `V8.GC_MC_EVACUATE`                       |
|  0.1% |   8.1ms |   348 | 23.1µs |  1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  0.1% |   7.2ms |   613 | 11.8µs |  0.2ms | `V8.GCIncrementalMarking`                 |
|  0.1% |   6.2ms |   348 | 17.7µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |
|  0.1% |   5.9ms |     2 |  3.0ms |  3.2ms | `V8.GC_MC_EVACUATE_COPY`                  |
|  0.1% |   5.8ms |   613 |  9.4µs |  0.2ms | `V8.GC_MC_INCREMENTAL`                    |
|  0.1% |   5.7ms |     2 |  2.9ms |  3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`         |
|  0.1% |   5.0ms |   353 | 14.3µs |  0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                 |
| <0.1% |   1.8ms |   350 |  5.2µs | 18.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
| <0.1% |   1.5ms |   350 |  4.3µs |  0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`           |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `MinorGC`

|      % |    Time | Count |  Mean |   Max | Attribute | Value                |
| -----: | ------: | ----: | ----: | ----: | --------- | -------------------- |
| 100.0% | 721.4ms |   348 | 2.1ms | 8.5ms | `cause`   | `allocation failure` |

##### `MajorGC`

|      % |   Time | Count |  Mean |   Max | Attribute | Value                                          |
| -----: | -----: | ----: | ----: | ----: | --------- | ---------------------------------------------- |
| 100.0% | 10.9ms |     2 | 5.5ms | 5.5ms | `cause`   | `finalize incremental marking via stack guard` |

##### `FullEvacuator::RawEvacuatePage`

|     % |  Time | Count |  Mean |   Max | Attribute         | Value                |
| ----: | ----: | ----: | ----: | ----: | ----------------- | -------------------- |
| 83.3% | 6.7ms |    73 | 0.1ms | 0.1ms | `evacuation_mode` | `page-new-to-old`    |
| 15.0% | 1.2ms |     9 | 0.1ms | 0.2ms | `evacuation_mode` | `objects-new-to-old` |
|  1.7% | 0.1ms |     2 | 0.1ms | 0.1ms | `evacuation_mode` | `objects-old-to-old` |

#### Attribute amounts

Attribute amounts with the largest contribution to each span's total time.

##### `MinorGC`

|    Time | Count | Attribute   |    Total |   Mean |      Max |
| ------: | ----: | ----------- | -------: | -----: | -------: |
| 721.4ms |   348 | `reclaimed` | 4.07 GiB | 12 MiB | 15.5 MiB |

##### `MajorGC`

|   Time | Count | Attribute   |    Total |    Mean |      Max |
| -----: | ----: | ----------- | -------: | ------: | -------: |
| 10.9ms |     2 | `reclaimed` | 15.2 MiB | 7.6 MiB | 12.3 MiB |

#### Threads

Threads with the largest contribution to each span's total time.

##### `Evacuator::EvacuatePage`

|     % |  Time | Count |  Mean |   Max | Thread                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 69.1% | 5.7ms |    60 | 0.1ms | 0.1ms | `JavaScriptMainThread` |
| 30.9% | 2.5ms |    24 | 0.1ms | 0.2ms | `PlatformWorkerThread` |

##### `FullEvacuator::RawEvacuatePage`

|     % |  Time | Count |  Mean |   Max | Thread                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 69.1% | 5.6ms |    60 | 0.1ms | 0.1ms | `JavaScriptMainThread` |
| 30.9% | 2.5ms |    24 | 0.1ms | 0.2ms | `PlatformWorkerThread` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|     % |  Time | Count |  Mean |   Max | Thread                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 68.5% | 5.4ms |    58 | 0.1ms | 0.1ms | `JavaScriptMainThread` |
| 31.5% | 2.5ms |    24 | 0.1ms | 0.2ms | `PlatformWorkerThread` |

##### `RememberedSetUpdatingItem::Process`

|     % |  Time | Count |  Mean |    Max | Thread                 |
| ----: | ----: | ----: | ----: | -----: | ---------------------- |
| 57.8% | 0.3ms |    84 | 3.4µs | 24.0µs | `JavaScriptMainThread` |
| 42.2% | 0.2ms |    46 | 4.5µs | 25.0µs | `PlatformWorkerThread` |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `MinorGC`

|      % |    Time | Count |  Mean |   Max | Parent          |
| -----: | ------: | ----: | ----: | ----: | --------------- |
| 100.0% | 721.4ms |   348 | 2.1ms | 8.5ms | `RunMicrotasks` |

##### `V8.GCScavenger`

|      % |    Time | Count |  Mean |   Max | Parent    |
| -----: | ------: | ----: | ----: | ----: | --------- |
| 100.0% | 702.0ms |   348 | 2.0ms | 8.5ms | `MinorGC` |

##### `V8.GC_SCAVENGER`

|      % |    Time | Count |  Mean |   Max | Parent           |
| -----: | ------: | ----: | ----: | ----: | ---------------- |
| 100.0% | 693.2ms |   348 | 2.0ms | 8.5ms | `V8.GCScavenger` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|      % |    Time | Count |  Mean |   Max | Parent            |
| -----: | ------: | ----: | ----: | ----: | ----------------- |
| 100.0% | 681.8ms |   348 | 2.0ms | 8.4ms | `V8.GC_SCAVENGER` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|      % |    Time | Count |  Mean |   Max | Parent                     |
| -----: | ------: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 413.1ms |   348 | 1.2ms | 7.4ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

|      % |    Time | Count |  Mean |   Max | Parent                                    |
| -----: | ------: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 375.7ms |   388 | 1.0ms | 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `V8.StackGuard`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 96.2ms | 2,734 | 35.2µs | 5.5ms | `RunMicrotasks` |

##### `V8.HandleInterrupts`

|     % |   Time | Count |   Mean |    Max | Parent                                     |
| ----: | -----: | ----: | -----: | -----: | ------------------------------------------ |
| 99.0% | 85.6ms | 2,735 | 31.3µs |  5.5ms | `V8.StackGuard`                            |
|  0.9% |  0.8ms |    20 | 40.5µs |  0.2ms | `RunMicrotasks`                            |
|  0.1% | 48.0µs |     2 | 24.0µs | 36.0µs | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### `V8.BytecodeBudgetInterrupt`

|      % |   Time | Count |  Mean |   Max | Parent          |
| -----: | -----: | ----: | ----: | ----: | --------------- |
| 100.0% | 50.4ms | 6,931 | 7.3µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

|    % |  Time | Count |   Mean |    Max | Parent                                        |
| ---: | ----: | ----: | -----: | -----: | --------------------------------------------- |
| 0.7% | 0.2ms |     8 | 28.8µs | 45.0µs | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |

##### `fs.sync.stat`

|      % |   Time |  Count |  Mean |   Max | Parent          |
| -----: | -----: | -----: | ----: | ----: | --------------- |
| 100.0% | 31.5ms | 10,114 | 3.1µs | 0.1ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

|      % |   Time | Count |  Mean |   Max | Parent                     |
| -----: | -----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 23.7ms |   348 | 0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `fs.sync.open`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 23.3ms | 1,125 | 20.7µs | 0.1ms | `RunMicrotasks` |

##### `V8.DeoptimizeCode`

|     % |   Time | Count |   Mean |   Max | Parent              |
| ----: | -----: | ----: | -----: | ----: | ------------------- |
| 62.4% | 13.3ms |   870 | 15.3µs | 0.1ms | `RunMicrotasks`     |
| 37.6% |  8.0ms |   670 | 12.0µs | 0.1ms | `V8.DeoptimizeCode` |

##### `V8.GCHandleGCRequest`

|      % |   Time | Count |  Mean |   Max | Parent                |
| -----: | -----: | ----: | ----: | ----: | --------------------- |
| 100.0% | 11.0ms |     2 | 5.5ms | 5.5ms | `V8.HandleInterrupts` |

##### `MajorGC`

|      % |   Time | Count |  Mean |   Max | Parent                 |
| -----: | -----: | ----: | ----: | ----: | ---------------------- |
| 100.0% | 10.9ms |     2 | 5.5ms | 5.5ms | `V8.GCHandleGCRequest` |

##### `V8.GCFinalizeMC`

|      % |   Time | Count |  Mean |   Max | Parent    |
| -----: | -----: | ----: | ----: | ----: | --------- |
| 100.0% | 10.8ms |     2 | 5.4ms | 5.5ms | `MajorGC` |

##### `V8.GC_MARK_COMPACTOR`

|      % |   Time | Count |  Mean |   Max | Parent            |
| -----: | -----: | ----: | ----: | ----: | ----------------- |
| 100.0% | 10.7ms |     2 | 5.4ms | 5.4ms | `V8.GCFinalizeMC` |

##### `Evacuator::EvacuatePage`

|     % |  Time | Count |  Mean |   Max | Parent                              |
| ----: | ----: | ----: | ----: | ----: | ----------------------------------- |
| 69.1% | 5.7ms |    60 | 0.1ms | 0.1ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`   |
| 30.9% | 2.5ms |    24 | 0.1ms | 0.2ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY` |

##### `V8.GC_MC_EVACUATE`

|      % |  Time | Count |  Mean |   Max | Parent                 |
| -----: | ----: | ----: | ----: | ----: | ---------------------- |
| 100.0% | 8.2ms |     4 | 2.0ms | 4.0ms | `V8.GC_MARK_COMPACTOR` |

##### `FullEvacuator::RawEvacuatePage`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 8.1ms |    84 | 0.1ms | 0.2ms | `Evacuator::EvacuatePage` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 8.1ms |   348 | 23.1µs | 1.4ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|      % |  Time | Count |  Mean |   Max | Parent                           |
| -----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 100.0% | 7.8ms |    82 | 0.1ms | 0.2ms | `FullEvacuator::RawEvacuatePage` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|     % |  Time | Count |   Mean |   Max | Parent          |
| ----: | ----: | ----: | -----: | ----: | --------------- |
| 96.6% | 7.3ms |   449 | 16.2µs | 0.5ms | `RunMicrotasks` |

##### `V8.GCIncrementalMarking`

|      % |  Time | Count |   Mean |   Max | Parent          |
| -----: | ----: | ----: | -----: | ----: | --------------- |
| 100.0% | 7.2ms |   613 | 11.8µs | 0.2ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 6.2ms |   348 | 17.7µs | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_MC_EVACUATE_COPY`

|      % |  Time | Count |  Mean |   Max | Parent              |
| -----: | ----: | ----: | ----: | ----: | ------------------- |
| 100.0% | 5.9ms |     2 | 3.0ms | 3.2ms | `V8.GC_MC_EVACUATE` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|      % |  Time | Count |  Mean |   Max | Parent                   |
| -----: | ----: | ----: | ----: | ----: | ------------------------ |
| 100.0% | 5.9ms |     2 | 2.9ms | 3.2ms | `V8.GC_MC_EVACUATE_COPY` |

##### `V8.GC_MC_INCREMENTAL`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 5.8ms |   613 | 9.4µs | 0.2ms | `V8.GCIncrementalMarking` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

|      % |  Time | Count |  Mean |   Max | Parent                                          |
| -----: | ----: | ----: | ----: | ----: | ----------------------------------------------- |
| 100.0% | 5.7ms |     2 | 2.9ms | 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|     % |   Time | Count |   Mean |    Max | Parent                |
| ----: | -----: | ----: | -----: | -----: | --------------------- |
| 98.9% |  5.0ms |   348 | 14.3µs |  0.5ms | `V8.GCScavenger`      |
|  0.8% | 41.0µs |     2 | 20.5µs | 26.0µs | `V8.GCFinalizeMC`     |
|  0.1% |  6.0µs |     1 |  6.0µs |  6.0µs | `RunMicrotasks`       |
| <0.1% |  2.0µs |     1 |  2.0µs |  2.0µs | `V8.HandleInterrupts` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|     % |   Time | Count |  Mean |    Max | Parent                 |
| ----: | -----: | ----: | ----: | -----: | ---------------------- |
| 99.3% |  1.8ms |   348 | 5.2µs | 18.0µs | `V8.GC_SCAVENGER`      |
|  0.7% | 12.0µs |     2 | 6.0µs |  6.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

|     % |  Time | Count |  Mean |   Max | Parent                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 99.7% | 1.5ms |   348 | 4.3µs | 0.5ms | `V8.GC_SCAVENGER`      |
|  0.3% | 5.0µs |     2 | 2.5µs | 3.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GCDeoptMarkedAllocationSites`

|      % |  Time | Count |  Mean |   Max | Parent                |
| -----: | ----: | ----: | ----: | ----: | --------------------- |
| 100.0% | 1.4ms |    26 | 0.1ms | 0.2ms | `V8.HandleInterrupts` |

##### `Major concurrent marking rescheduled`

|     % |  Time | Count |  Mean |   Max | Parent                                         |
| ----: | ----: | ----: | ----: | ----: | ---------------------------------------------- |
| 99.4% | 0.5ms |   611 | 0.8µs | 2.0µs | `V8.GC_MC_INCREMENTAL`                         |
|  0.4% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING` |
|  0.2% | 1.0µs |     2 | 0.5µs | 1.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`          |

##### `RememberedSetUpdatingItem::Process`

|     % |  Time | Count |  Mean |    Max | Parent                                         |
| ----: | ----: | ----: | ----: | -----: | ---------------------------------------------- |
| 57.8% | 0.3ms |    84 | 3.4µs | 24.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`   |
| 42.2% | 0.2ms |    46 | 4.5µs | 25.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |

##### `Parallel scavenge started`

|      % |  Time | Count |  Mean |   Max | Parent                                    |
| -----: | ----: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 0.3ms |   348 | 0.9µs | 3.0µs | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|      % |  Time | Count |  Mean |   Max | Parent                           |
| -----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 100.0% | 0.1ms |     2 | 0.1ms | 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `ConcurrentMarking::RunMajor Preempted`

|      % |   Time | Count |  Mean |    Max | Parent                        |
| -----: | -----: | ----: | ----: | -----: | ----------------------------- |
| 100.0% | 31.0µs |     8 | 3.9µs | 14.0µs | `V8.GC_MC_BACKGROUND_MARKING` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `RunMicrotasks`

|     % |    Time |  Count |   Mean |   Max | Child                        |
| ----: | ------: | -----: | -----: | ----: | ---------------------------- |
| 12.9% | 721.4ms |    348 |  2.1ms | 8.5ms | `MinorGC`                    |
|  1.7% |  96.2ms |  2,734 | 35.2µs | 5.5ms | `V8.StackGuard`              |
|  0.9% |  50.4ms |  6,931 |  7.3µs | 0.3ms | `V8.BytecodeBudgetInterrupt` |
|  0.6% |  31.5ms | 10,114 |  3.1µs | 0.1ms | `fs.sync.stat`               |
|  0.4% |  23.3ms |  1,125 | 20.7µs | 0.1ms | `fs.sync.open`               |

##### `MinorGC`

|     % |    Time | Count |  Mean |    Max | Child                        |
| ----: | ------: | ----: | ----: | -----: | ---------------------------- |
| 97.3% | 702.0ms |   348 | 2.0ms |  8.5ms | `V8.GCScavenger`             |
|  0.1% |   0.8ms |   348 | 2.3µs | 13.0µs | `V8.GC_HEAP_PROLOGUE`        |
|  0.1% |   0.6ms |   348 | 1.7µs |  5.0µs | `V8.GC_HEAP_EPILOGUE`        |
| <0.1% |   0.3ms |   348 | 0.8µs |  5.0µs | `V8.GC_HEAP_DUMP_STATISTICS` |

##### `V8.GCScavenger`

|     % |    Time | Count |   Mean |    Max | Child                                          |
| ----: | ------: | ----: | -----: | -----: | ---------------------------------------------- |
| 98.7% | 693.2ms |   348 |  2.0ms |  8.5ms | `V8.GC_SCAVENGER`                              |
|  0.7% |   5.0ms |   348 | 14.3µs |  0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                      |
| <0.1% |   0.1ms |     4 | 15.8µs | 32.0µs | `V8.GC_MC_COMPLETE_SWEEPING`                   |
| <0.1% |  23.0µs |    13 |  1.8µs |  8.0µs | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |
| <0.1% |   1.0µs |     1 |  1.0µs |  1.0µs | `V8.GC_MC_COMPLETE_SWEEP_ARRAY_BUFFERS`        |

##### `V8.GC_SCAVENGER`

|     % |    Time | Count |  Mean |    Max | Child                                     |
| ----: | ------: | ----: | ----: | -----: | ----------------------------------------- |
| 98.4% | 681.8ms |   348 | 2.0ms |  8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                |
|  0.3% |   1.8ms |   348 | 5.2µs | 18.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
|  0.2% |   1.5ms |   348 | 4.3µs |  0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`           |
| <0.1% |   7.0µs |     1 | 7.0µs |  7.0µs | `V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|     % |    Time | Count |   Mean |   Max | Child                                     |
| ----: | ------: | ----: | -----: | ----: | ----------------------------------------- |
| 60.6% | 413.1ms |   348 |  1.2ms | 7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
|  3.5% |  23.7ms |   348 |  0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
|  1.2% |   8.1ms |   348 | 23.1µs | 1.4ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  0.9% |   6.2ms |   348 | 17.7µs | 0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |
|  0.2% |   1.2ms |   348 |  3.6µs | 0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`    |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|     % |    Time | Count |  Mean |   Max | Child                               |
| ----: | ------: | ----: | ----: | ----: | ----------------------------------- |
| 90.9% | 375.7ms |   388 | 1.0ms | 7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL` |
|  0.1% |   0.3ms |   348 | 0.9µs | 3.0µs | `Parallel scavenge started`         |

##### `V8.GC_MC_BACKGROUND_MARKING`

|     % |   Time | Count |  Mean |    Max | Child                                   |
| ----: | -----: | ----: | ----: | -----: | --------------------------------------- |
| <0.1% | 31.0µs |     8 | 3.9µs | 14.0µs | `ConcurrentMarking::RunMajor Preempted` |

##### `V8.StackGuard`

|     % |   Time | Count |   Mean |   Max | Child                 |
| ----: | -----: | ----: | -----: | ----: | --------------------- |
| 88.9% | 85.6ms | 2,735 | 31.3µs | 5.5ms | `V8.HandleInterrupts` |

##### `V8.HandleInterrupts`

|     % |   Time | Count |   Mean |    Max | Child                             |
| ----: | -----: | ----: | -----: | -----: | --------------------------------- |
| 12.7% | 11.0ms |     2 |  5.5ms |  5.5ms | `V8.GCHandleGCRequest`            |
|  1.7% |  1.4ms |    26 |  0.1ms |  0.2ms | `V8.GCDeoptMarkedAllocationSites` |
|  0.6% |  0.5ms |     1 |  0.5ms |  0.5ms | `V8.GCIncrementalMarkingStart`    |
|  0.1% |  0.1ms |     4 | 15.0µs | 25.0µs | `V8.GC_MC_SWEEP`                  |
| <0.1% |  2.0µs |     1 |  2.0µs |  2.0µs | `V8.GC_TIME_TO_SAFEPOINT`         |

##### `V8.DeoptimizeCode`

|     % |  Time | Count |   Mean |   Max | Child               |
| ----: | ----: | ----: | -----: | ----: | ------------------- |
| 37.6% | 8.0ms |   670 | 12.0µs | 0.1ms | `V8.DeoptimizeCode` |

##### `V8.GCHandleGCRequest`

|     % |   Time | Count |  Mean |    Max | Child                          |
| ----: | -----: | ----: | ----: | -----: | ------------------------------ |
| 99.7% | 10.9ms |     2 | 5.5ms |  5.5ms | `MajorGC`                      |
|  0.1% | 14.0µs |     2 | 7.0µs | 12.0µs | `V8.GC_HEAP_EXTERNAL_EPILOGUE` |

##### `MajorGC`

|     % |   Time | Count |  Mean |   Max | Child                        |
| ----: | -----: | ----: | ----: | ----: | ---------------------------- |
| 99.0% | 10.8ms |     2 | 5.4ms | 5.5ms | `V8.GCFinalizeMC`            |
| <0.1% |  3.0µs |     2 | 1.5µs | 2.0µs | `V8.GC_HEAP_PROLOGUE`        |
| <0.1% |  3.0µs |     2 | 1.5µs | 2.0µs | `V8.GC_HEAP_EPILOGUE`        |
| <0.1% |  3.0µs |     2 | 1.5µs | 2.0µs | `V8.GC_HEAP_DUMP_STATISTICS` |

##### `V8.GCFinalizeMC`

|     % |   Time | Count |   Mean |    Max | Child                     |
| ----: | -----: | ----: | -----: | -----: | ------------------------- |
| 99.3% | 10.7ms |     2 |  5.4ms |  5.4ms | `V8.GC_MARK_COMPACTOR`    |
|  0.4% | 41.0µs |     2 | 20.5µs | 26.0µs | `V8.GC_TIME_TO_SAFEPOINT` |

##### `V8.GC_MARK_COMPACTOR`

|     % |  Time | Count |   Mean |   Max | Child               |
| ----: | ----: | ----: | -----: | ----: | ------------------- |
| 76.2% | 8.2ms |     4 |  2.0ms | 4.0ms | `V8.GC_MC_EVACUATE` |
|  9.5% | 1.0ms |     2 |  0.5ms | 0.6ms | `V8.GC_MC_CLEAR`    |
|  9.4% | 1.0ms |     2 |  0.5ms | 0.6ms | `V8.GC_MC_MARK`     |
|  1.8% | 0.2ms |     4 | 49.0µs | 0.2ms | `V8.GC_MC_SWEEP`    |
|  1.0% | 0.1ms |     2 |  0.1ms | 0.1ms | `V8.GC_MC_FINISH`   |

##### `Evacuator::EvacuatePage`

|     % |  Time | Count |  Mean |   Max | Child                            |
| ----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 98.3% | 8.1ms |    84 | 0.1ms | 0.2ms | `FullEvacuator::RawEvacuatePage` |

##### `V8.GC_MC_EVACUATE`

|     % |   Time | Count |  Mean |    Max | Child                               |
| ----: | -----: | ----: | ----: | -----: | ----------------------------------- |
| 72.6% |  5.9ms |     2 | 3.0ms |  3.2ms | `V8.GC_MC_EVACUATE_COPY`            |
| 17.1% |  1.4ms |     2 | 0.7ms |  0.9ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |
|  6.9% |  0.6ms |     2 | 0.3ms |  0.4ms | `V8.GC_MC_EVACUATE_REBALANCE`       |
|  2.9% |  0.2ms |     2 | 0.1ms |  0.2ms | `V8.GC_MC_EVACUATE_PROLOGUE`        |
|  0.1% | 11.0µs |     2 | 5.5µs | 10.0µs | `V8.GC_MC_EVACUATE_EPILOGUE`        |

##### `FullEvacuator::RawEvacuatePage`

|     % |  Time | Count |  Mean |   Max | Child                                         |
| ----: | ----: | ----: | ----: | ----: | --------------------------------------------- |
| 96.5% | 7.8ms |    82 | 0.1ms | 0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
|  1.6% | 0.1ms |     2 | 0.1ms | 0.1ms | `LiveObjectVisitor::VisitMarkedObjects`       |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|    % |  Time | Count |   Mean |    Max | Child                          |
| ---: | ----: | ----: | -----: | -----: | ------------------------------ |
| 2.9% | 0.2ms |     8 | 28.8µs | 45.0µs | `V8.GC_MC_BACKGROUND_SWEEPING` |
| 0.7% | 0.1ms |     3 | 17.0µs | 27.0µs | `V8.GC_MC_SWEEP`               |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|    % |   Time | Count |   Mean |    Max | Child                 |
| ---: | -----: | ----: | -----: | -----: | --------------------- |
| 0.6% | 48.0µs |     2 | 24.0µs | 36.0µs | `V8.HandleInterrupts` |

##### `V8.GCIncrementalMarking`

|     % |  Time | Count |  Mean |   Max | Child                  |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 80.1% | 5.8ms |   613 | 9.4µs | 0.2ms | `V8.GC_MC_INCREMENTAL` |

##### `V8.GC_MC_EVACUATE_COPY`

|     % |  Time | Count |  Mean |   Max | Child                                           |
| ----: | ----: | ----: | ----: | ----: | ----------------------------------------------- |
| 98.9% | 5.9ms |     2 | 2.9ms | 3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|     % |  Time | Count |  Mean |   Max | Child                             |
| ----: | ----: | ----: | ----: | ----: | --------------------------------- |
| 97.5% | 5.7ms |     2 | 2.9ms | 3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL` |
| <0.1% | 2.0µs |     2 | 1.0µs | 1.0µs | `PageEvacuationJob started`       |

##### `V8.GC_MC_INCREMENTAL`

|     % |  Time | Count |  Mean |    Max | Child                                   |
| ----: | ----: | ----: | ----: | -----: | --------------------------------------- |
| 13.4% | 0.8ms |   613 | 1.3µs | 25.0µs | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING` |
|  8.4% | 0.5ms |   611 | 0.8µs |  2.0µs | `Major concurrent marking rescheduled`  |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

|     % |  Time | Count |  Mean |   Max | Child                     |
| ----: | ----: | ----: | ----: | ----: | ------------------------- |
| 99.2% | 5.7ms |    60 | 0.1ms | 0.1ms | `Evacuator::EvacuatePage` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_COPY`

|     % |  Time | Count |  Mean |   Max | Child                     |
| ----: | ----: | ----: | ----: | ----: | ------------------------- |
| 99.3% | 2.5ms |    24 | 0.1ms | 0.2ms | `Evacuator::EvacuatePage` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|     % |  Time | Count |  Mean |   Max | Child                                  |
| ----: | ----: | ----: | ----: | ----: | -------------------------------------- |
| 15.7% | 0.3ms |   350 | 0.8µs | 2.0µs | `V8.GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`

|     % |  Time | Count |  Mean |    Max | Child                                 |
| ----: | ----: | ----: | ----: | -----: | ------------------------------------- |
| 74.6% | 0.2ms |    46 | 4.5µs | 25.0µs | `RememberedSetUpdatingItem::Process`  |
|  0.4% | 1.0µs |     1 | 1.0µs |  1.0µs | `EphemeronTableUpdatingItem::Process` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|     % |   Time | Count |   Mean |    Max | Child            |
| ----: | -----: | ----: | -----: | -----: | ---------------- |
| 26.7% | 35.0µs |     1 | 35.0µs | 35.0µs | `V8.GC_MC_SWEEP` |

#### Longest instances

Instances of each span with the most time, and when each started.

##### `RunMicrotasks`

|      % |  Time | CPU time | Start | Thread                 |
| -----: | ----: | -------: | ----: | ---------------------- |
| 100.0% | 5.59s |    5.47s | 6.6ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.4% | 3.6ms |    3.6ms | 637.9ms | `PlatformWorkerThread` |
| 0.4% | 3.6ms |    3.6ms | 637.9ms | `PlatformWorkerThread` |
| 0.4% | 3.4ms |    3.2ms | 398.3ms | `PlatformWorkerThread` |
| 0.4% | 3.4ms |    3.2ms |   2.61s | `PlatformWorkerThread` |
| 0.4% | 3.4ms |    3.3ms |   2.61s | `PlatformWorkerThread` |

##### `MinorGC`

|    % |  Time | CPU time | Start | Thread                 | Attributes                                     |
| ---: | ----: | -------: | ----: | ---------------------- | ---------------------------------------------- |
| 1.2% | 8.5ms |    8.5ms | 2.65s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=8.51 MiB` |
| 1.1% | 7.6ms |    7.6ms | 4.14s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=6.88 MiB` |
| 1.0% | 7.6ms |    7.4ms | 2.34s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=4.23 MiB` |
| 1.0% | 7.4ms |    7.3ms | 2.75s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=7.97 MiB` |
| 1.0% | 7.2ms |    7.2ms | 2.72s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=8.29 MiB` |

##### `V8.GCScavenger`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.2% | 8.5ms |    8.4ms | 2.65s | `JavaScriptMainThread` |
| 1.1% | 7.6ms |    7.5ms | 4.14s | `JavaScriptMainThread` |
| 1.1% | 7.5ms |    7.4ms | 2.34s | `JavaScriptMainThread` |
| 1.0% | 7.3ms |    7.2ms | 2.75s | `JavaScriptMainThread` |
| 1.0% | 7.2ms |    7.1ms | 2.72s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.2% | 8.5ms |    8.4ms | 2.65s | `JavaScriptMainThread` |
| 1.1% | 7.5ms |    7.5ms | 4.14s | `JavaScriptMainThread` |
| 1.1% | 7.4ms |    7.3ms | 2.34s | `JavaScriptMainThread` |
| 1.0% | 7.3ms |    7.2ms | 2.75s | `JavaScriptMainThread` |
| 1.0% | 7.1ms |    7.1ms | 2.72s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.2% | 8.4ms |    8.4ms | 2.65s | `JavaScriptMainThread` |
| 1.1% | 7.4ms |    7.4ms | 4.14s | `JavaScriptMainThread` |
| 1.1% | 7.3ms |    7.3ms | 2.34s | `JavaScriptMainThread` |
| 1.1% | 7.2ms |    7.1ms | 2.75s | `JavaScriptMainThread` |
| 1.0% | 7.1ms |    7.1ms | 2.72s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_UNPARK`

|    % |   Time | CPU time |   Start | Thread                 |
| ---: | -----: | -------: | ------: | ---------------------- |
| 2.4% | 13.4ms |   21.0µs | 924.7ms | `PlatformWorkerThread` |
| 1.7% |  9.3ms |    8.0µs | 924.6ms | `PlatformWorkerThread` |
| 1.7% |  9.2ms |   19.0µs | 924.3ms | `PlatformWorkerThread` |
| 1.5% |  8.0ms |   24.0µs |   2.65s | `PlatformWorkerThread` |
| 1.4% |  8.0ms |   14.0µs |   2.65s | `PlatformWorkerThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.8% | 7.4ms |    7.3ms |   2.65s | `JavaScriptMainThread` |
| 1.6% | 6.5ms |    6.5ms |   2.34s | `JavaScriptMainThread` |
| 1.5% | 6.3ms |    6.3ms | 858.3ms | `JavaScriptMainThread` |
| 1.5% | 6.1ms |    6.1ms |   2.75s | `JavaScriptMainThread` |
| 1.5% | 6.1ms |    6.1ms |   2.72s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.9% | 7.3ms |    7.3ms |   2.65s | `JavaScriptMainThread` |
| 1.7% | 6.5ms |    6.5ms |   2.34s | `JavaScriptMainThread` |
| 1.7% | 6.3ms |    6.3ms | 858.3ms | `JavaScriptMainThread` |
| 1.6% | 6.1ms |    6.0ms |   2.75s | `JavaScriptMainThread` |
| 1.6% | 6.1ms |    6.0ms | 565.7ms | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_SAFEPOINT`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 3.0% | 7.6ms |   22.0µs | 4.14s | `PlatformWorkerThread` |
| 3.0% | 7.6ms |   20.0µs | 4.14s | `PlatformWorkerThread` |
| 3.0% | 7.5ms |   25.0µs | 2.34s | `PlatformWorkerThread` |
| 2.9% | 7.3ms |   16.0µs | 2.75s | `PlatformWorkerThread` |
| 2.8% | 7.2ms |   16.0µs | 2.72s | `PlatformWorkerThread` |

##### `V8.GC_MC_BACKGROUND_MARKING`

|     % |   Time | CPU time | Start | Thread                 |
| ----: | -----: | -------: | ----: | ---------------------- |
| 12.6% | 29.9ms |   28.3ms | 1.63s | `PlatformWorkerThread` |
| 12.5% | 29.9ms |   28.6ms | 1.63s | `PlatformWorkerThread` |
| 12.5% | 29.9ms |   27.9ms | 1.63s | `PlatformWorkerThread` |
| 12.5% | 29.9ms |   27.2ms | 1.63s | `PlatformWorkerThread` |
|  5.9% | 14.0ms |   12.7ms | 1.67s | `PlatformWorkerThread` |

##### `V8.StackGuard`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 5.8% | 5.5ms |    5.5ms | 334.1ms | `JavaScriptMainThread` |
| 5.6% | 5.4ms |    5.3ms |   1.68s | `JavaScriptMainThread` |
| 1.0% | 1.0ms |    0.1ms | 944.7ms | `JavaScriptMainThread` |
| 0.8% | 0.7ms |    0.7ms |   1.62s | `JavaScriptMainThread` |
| 0.4% | 0.4ms |    0.4ms |   2.72s | `JavaScriptMainThread` |

##### `V8.HandleInterrupts`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 6.4% | 5.5ms |    5.5ms | 334.1ms | `JavaScriptMainThread` |
| 6.3% | 5.4ms |    5.3ms |   1.68s | `JavaScriptMainThread` |
| 1.1% | 0.9ms |    0.1ms | 944.7ms | `JavaScriptMainThread` |
| 0.8% | 0.7ms |    0.7ms |   1.62s | `JavaScriptMainThread` |
| 0.5% | 0.4ms |    0.4ms |   2.72s | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterrupt`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.5% | 0.3ms |    0.3ms |   1.09s | `JavaScriptMainThread` |
| 0.5% | 0.2ms |    0.2ms | 710.0ms | `JavaScriptMainThread` |
| 0.3% | 0.2ms |    0.2ms | 710.5ms | `JavaScriptMainThread` |
| 0.3% | 0.2ms |    0.2ms | 617.0ms | `JavaScriptMainThread` |
| 0.3% | 0.2ms |    0.2ms | 729.4ms | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

|     % |   Time | CPU time |   Start | Thread                 |
| ----: | -----: | -------: | ------: | ---------------------- |
| 42.5% | 14.6ms |   14.6ms |   1.69s | `PlatformWorkerThread` |
| 30.4% | 10.5ms |   10.4ms |   1.69s | `PlatformWorkerThread` |
|  9.3% |  3.2ms |    3.2ms |   1.70s | `PlatformWorkerThread` |
|  6.6% |  2.3ms |    2.3ms | 340.4ms | `PlatformWorkerThread` |
|  5.3% |  1.8ms |    1.8ms | 340.8ms | `PlatformWorkerThread` |

##### `fs.sync.stat`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.3% | 0.1ms |    0.1ms |   2.28s | `JavaScriptMainThread` |
| 0.2% | 0.1ms |    0.1ms | 103.9ms | `JavaScriptMainThread` |
| 0.2% | 0.1ms |    0.1ms | 189.7ms | `JavaScriptMainThread` |
| 0.2% | 0.1ms |    0.1ms | 452.7ms | `JavaScriptMainThread` |
| 0.2% | 0.1ms |    0.1ms |   4.13s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.0% | 0.2ms |    0.2ms |   2.75s | `JavaScriptMainThread` |
| 1.0% | 0.2ms |    0.2ms |   2.72s | `JavaScriptMainThread` |
| 0.9% | 0.2ms |    0.2ms |   2.69s | `JavaScriptMainThread` |
| 0.8% | 0.2ms |    0.2ms | 894.3ms | `JavaScriptMainThread` |
| 0.8% | 0.2ms |    0.2ms |   2.90s | `JavaScriptMainThread` |

##### `fs.sync.open`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.6% | 0.1ms |    0.1ms | 403.3ms | `JavaScriptMainThread` |
| 0.5% | 0.1ms |    0.1ms | 244.8ms | `JavaScriptMainThread` |
| 0.5% | 0.1ms |    0.1ms |   2.28s | `JavaScriptMainThread` |
| 0.5% | 0.1ms |    0.1ms | 377.3ms | `JavaScriptMainThread` |
| 0.4% | 0.1ms |    0.1ms | 301.4ms | `JavaScriptMainThread` |

##### `V8.DeoptimizeCode`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.5% | 0.1ms |    0.1ms |   3.28s | `JavaScriptMainThread` |
| 0.4% | 0.1ms |    0.1ms |   1.20s | `JavaScriptMainThread` |
| 0.4% | 0.1ms |    0.1ms |   2.91s | `JavaScriptMainThread` |
| 0.4% | 0.1ms |    0.1ms | 956.6ms | `JavaScriptMainThread` |
| 0.3% | 0.1ms |    0.1ms |   2.16s | `JavaScriptMainThread` |

##### `V8.GCHandleGCRequest`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 50.5% | 5.5ms |    5.5ms | 334.1ms | `JavaScriptMainThread` |
| 49.5% | 5.4ms |    5.3ms |   1.68s | `JavaScriptMainThread` |

##### `MajorGC`

|     % |  Time | CPU time |   Start | Thread                 | Attributes                                                               |
| ----: | ----: | -------: | ------: | ---------------------- | ------------------------------------------------------------------------ |
| 50.5% | 5.5ms |    5.4ms | 334.1ms | `JavaScriptMainThread` | `cause=finalize incremental marking via stack guard, reclaimed=2.87 MiB` |
| 49.5% | 5.4ms |    5.2ms |   1.68s | `JavaScriptMainThread` | `cause=finalize incremental marking via stack guard, reclaimed=12.3 MiB` |

##### `V8.GCFinalizeMC`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 50.4% | 5.5ms |    5.4ms | 334.1ms | `JavaScriptMainThread` |
| 49.6% | 5.4ms |    5.2ms |   1.68s | `JavaScriptMainThread` |

##### `V8.GC_MARK_COMPACTOR`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 50.3% | 5.4ms |    5.3ms | 334.2ms | `JavaScriptMainThread` |
| 49.7% | 5.3ms |    5.2ms |   1.68s | `JavaScriptMainThread` |

##### `Evacuator::EvacuatePage`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 2.1% | 0.2ms |    0.2ms |   1.68s | `PlatformWorkerThread` |
| 2.1% | 0.2ms |    0.2ms |   1.68s | `PlatformWorkerThread` |
| 1.8% | 0.1ms |    0.1ms | 337.8ms | `JavaScriptMainThread` |
| 1.8% | 0.1ms |    0.1ms |   1.68s | `PlatformWorkerThread` |
| 1.7% | 0.1ms |    0.1ms | 338.5ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 48.7% | 4.0ms |    4.0ms | 335.3ms | `JavaScriptMainThread` |
| 44.3% | 3.6ms |    3.5ms |   1.68s | `JavaScriptMainThread` |
|  4.3% | 0.4ms |    0.4ms |   1.69s | `JavaScriptMainThread` |
|  2.7% | 0.2ms |    0.2ms | 339.3ms | `JavaScriptMainThread` |

##### `FullEvacuator::RawEvacuatePage`

|    % |  Time | CPU time |   Start | Thread                 | Attributes                           |
| ---: | ----: | -------: | ------: | ---------------------- | ------------------------------------ |
| 2.1% | 0.2ms |    0.2ms |   1.68s | `PlatformWorkerThread` | `evacuation_mode=objects-new-to-old` |
| 2.1% | 0.2ms |    0.2ms |   1.68s | `PlatformWorkerThread` | `evacuation_mode=objects-new-to-old` |
| 1.8% | 0.1ms |    0.1ms | 337.8ms | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |
| 1.8% | 0.1ms |    0.1ms |   1.68s | `PlatformWorkerThread` | `evacuation_mode=objects-new-to-old` |
| 1.7% | 0.1ms |    0.1ms | 338.5ms | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 17.8% | 1.4ms |    0.1ms | 928.4ms | `JavaScriptMainThread` |
|  1.5% | 0.1ms |    0.1ms |   1.73s | `JavaScriptMainThread` |
|  1.3% | 0.1ms |    0.1ms |   3.51s | `JavaScriptMainThread` |
|  0.8% | 0.1ms |    0.1ms |   4.75s | `JavaScriptMainThread` |
|  0.7% | 0.1ms |    0.1ms | 401.8ms | `JavaScriptMainThread` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 2.2% | 0.2ms |    0.2ms |   1.68s | `PlatformWorkerThread` |
| 2.2% | 0.2ms |    0.2ms |   1.68s | `PlatformWorkerThread` |
| 1.9% | 0.1ms |    0.1ms | 337.8ms | `JavaScriptMainThread` |
| 1.9% | 0.1ms |    0.1ms |   1.68s | `PlatformWorkerThread` |
| 1.7% | 0.1ms |    0.1ms | 338.5ms | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 7.3% | 0.5ms |    0.5ms | 115.2ms | `JavaScriptMainThread` |
| 3.7% | 0.3ms |    0.3ms | 714.0ms | `JavaScriptMainThread` |
| 2.3% | 0.2ms |    0.2ms | 956.2ms | `JavaScriptMainThread` |
| 2.1% | 0.2ms |    0.2ms | 694.0ms | `JavaScriptMainThread` |
| 2.0% | 0.2ms |    0.2ms |   1.65s | `JavaScriptMainThread` |

##### `V8.GCIncrementalMarking`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 2.5% | 0.2ms |    0.2ms | 1.67s | `JavaScriptMainThread` |
| 2.1% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |
| 1.9% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |
| 1.3% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |
| 1.2% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 2.9% | 0.2ms |    0.2ms |   4.37s | `JavaScriptMainThread` |
| 1.8% | 0.1ms |    0.1ms | 791.9ms | `JavaScriptMainThread` |
| 1.8% | 0.1ms |    0.1ms |   2.66s | `JavaScriptMainThread` |
| 1.6% | 0.1ms |    0.1ms |   4.39s | `JavaScriptMainThread` |
| 1.5% | 0.1ms |    0.1ms | 641.6ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 54.7% | 3.2ms |    3.2ms | 335.5ms | `JavaScriptMainThread` |
| 45.3% | 2.7ms |    2.6ms |   1.68s | `JavaScriptMainThread` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 54.8% | 3.2ms |    3.2ms | 335.5ms | `JavaScriptMainThread` |
| 45.2% | 2.7ms |    2.6ms |   1.68s | `JavaScriptMainThread` |

##### `V8.GC_MC_INCREMENTAL`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 3.1% | 0.2ms |    0.2ms | 1.67s | `JavaScriptMainThread` |
| 2.6% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |
| 2.3% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |
| 1.5% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |
| 1.5% | 0.1ms |    0.1ms | 1.67s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 55.3% | 3.2ms |    3.2ms | 335.5ms | `JavaScriptMainThread` |
| 44.7% | 2.6ms |    2.6ms |   1.68s | `JavaScriptMainThread` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 9.2% | 0.5ms |   15.0µs | 3.30s | `JavaScriptMainThread` |
| 7.0% | 0.4ms |   13.0µs | 3.24s | `JavaScriptMainThread` |
| 5.6% | 0.3ms |    8.0µs | 3.44s | `JavaScriptMainThread` |
| 5.1% | 0.3ms |    6.0µs | 3.96s | `JavaScriptMainThread` |
| 4.5% | 0.2ms |    8.0µs | 4.82s | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_COPY`

|      % |  Time | CPU time | Start | Thread                 |
| -----: | ----: | -------: | ----: | ---------------------- |
| 100.0% | 2.6ms |    2.6ms | 1.68s | `PlatformWorkerThread` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|    % |   Time | CPU time |   Start | Thread                 |
| ---: | -----: | -------: | ------: | ---------------------- |
| 1.0% | 18.0µs |   17.0µs | 929.9ms | `JavaScriptMainThread` |
| 0.9% | 16.0µs |   16.0µs |   2.53s | `JavaScriptMainThread` |
| 0.7% | 12.0µs |   12.0µs |   1.13s | `JavaScriptMainThread` |
| 0.5% | 10.0µs |   10.0µs | 517.1ms | `JavaScriptMainThread` |
| 0.5% | 10.0µs |    9.0µs |   2.12s | `JavaScriptMainThread` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

|     % |   Time | CPU time |   Start | Thread                 |
| ----: | -----: | -------: | ------: | ---------------------- |
| 32.0% |  0.5ms |    0.5ms | 239.6ms | `JavaScriptMainThread` |
| 17.3% |  0.3ms |    0.3ms | 182.5ms | `JavaScriptMainThread` |
|  7.6% |  0.1ms |    0.1ms | 111.4ms | `JavaScriptMainThread` |
|  3.2% | 49.0µs |   49.0µs |  94.7ms | `JavaScriptMainThread` |
|  0.7% | 10.0µs |   10.0µs |  93.7ms | `JavaScriptMainThread` |

##### `V8.GCDeoptMarkedAllocationSites`

|     % |  Time | CPU time | Start | Thread                 |
| ----: | ----: | -------: | ----: | ---------------------- |
| 11.2% | 0.2ms |    0.2ms | 2.90s | `JavaScriptMainThread` |
|  9.4% | 0.1ms |    0.1ms | 2.70s | `JavaScriptMainThread` |
|  7.1% | 0.1ms |    0.1ms | 4.09s | `JavaScriptMainThread` |
|  6.4% | 0.1ms |    0.1ms | 2.62s | `JavaScriptMainThread` |
|  5.6% | 0.1ms |    0.1ms | 4.41s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`

|     % |   Time | CPU time |   Start | Thread                 |
| ----: | -----: | -------: | ------: | ---------------------- |
| 36.0% |  0.3ms |    0.3ms |   4.15s | `PlatformWorkerThread` |
| 10.9% |  0.1ms |    0.1ms |   2.30s | `PlatformWorkerThread` |
|  9.9% |  0.1ms |    0.1ms | 451.4ms | `PlatformWorkerThread` |
|  7.0% |  0.1ms |    0.1ms | 377.0ms | `PlatformWorkerThread` |
|  5.3% | 43.0µs |   42.0µs | 267.6ms | `PlatformWorkerThread` |

##### `Major concurrent marking rescheduled`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 0.4% | 2.0µs |    2.0µs | 1.62s | `JavaScriptMainThread` |
| 0.4% | 2.0µs |    1.0µs | 1.66s | `JavaScriptMainThread` |
| 0.4% | 2.0µs |    2.0µs | 1.66s | `JavaScriptMainThread` |
| 0.4% | 2.0µs |      0ms | 1.66s | `JavaScriptMainThread` |
| 0.4% | 2.0µs |    2.0µs | 1.66s | `JavaScriptMainThread` |

##### `RememberedSetUpdatingItem::Process`

|    % |   Time | CPU time |   Start | Thread                 |
| ---: | -----: | -------: | ------: | ---------------------- |
| 5.1% | 25.0µs |   25.0µs |   1.69s | `PlatformWorkerThread` |
| 4.9% | 24.0µs |   25.0µs |   1.69s | `JavaScriptMainThread` |
| 3.9% | 19.0µs |   19.0µs |   1.69s | `JavaScriptMainThread` |
| 3.9% | 19.0µs |   19.0µs |   1.69s | `JavaScriptMainThread` |
| 3.5% | 17.0µs |   18.0µs | 339.2ms | `JavaScriptMainThread` |

##### `Parallel scavenge started`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.0% | 3.0µs |    3.0µs |   2.72s | `JavaScriptMainThread` |
| 0.6% | 2.0µs |    1.0µs | 224.6ms | `JavaScriptMainThread` |
| 0.6% | 2.0µs |    3.0µs |   2.58s | `JavaScriptMainThread` |
| 0.6% | 2.0µs |    1.0µs |   3.57s | `JavaScriptMainThread` |
| 0.6% | 2.0µs |    2.0µs |   3.73s | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`

|      % |  Time | CPU time | Start | Thread                 |
| -----: | ----: | -------: | ----: | ---------------------- |
| 100.0% | 0.3ms |    0.3ms | 1.68s | `PlatformWorkerThread` |

##### `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`

|     % |   Time | CPU time |   Start | Thread                 |
| ----: | -----: | -------: | ------: | ---------------------- |
| 18.7% | 29.0µs |    6.0µs | 377.0ms | `PlatformWorkerThread` |
|  6.5% | 10.0µs |   11.0µs |   4.25s | `PlatformWorkerThread` |
|  5.8% |  9.0µs |    8.0µs |   2.35s | `PlatformWorkerThread` |
|  3.9% |  6.0µs |    6.0µs |   2.30s | `PlatformWorkerThread` |
|  3.2% |  5.0µs |    3.0µs |   4.17s | `PlatformWorkerThread` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|     % |   Time | CPU time | Start | Thread                 |
| ----: | -----: | -------: | ----: | ---------------------- |
| 68.7% |  0.1ms |    0.1ms | 1.68s | `JavaScriptMainThread` |
| 31.3% | 41.0µs |   42.0µs | 1.68s | `JavaScriptMainThread` |

##### `ConcurrentMarking::RunMajor Preempted`

|     % |   Time | CPU time | Start | Thread                 |
| ----: | -----: | -------: | ----: | ---------------------- |
| 45.2% | 14.0µs |   14.0µs | 1.63s | `PlatformWorkerThread` |
| 12.9% |  4.0µs |    5.0µs | 1.63s | `PlatformWorkerThread` |
|  9.7% |  3.0µs |    3.0µs | 1.63s | `PlatformWorkerThread` |
|  9.7% |  3.0µs |    3.0µs | 1.66s | `PlatformWorkerThread` |
|  9.7% |  3.0µs |    3.0µs | 1.63s | `PlatformWorkerThread` |

### Self CPU time

Spans with the most time their thread spent running, excluding child spans.

|     % | CPU time |  Count |   Mean |    Max | Span                                           |
| ----: | -------: | -----: | -----: | -----: | ---------------------------------------------- |
| 81.5% |    4.56s |      1 |  4.56s |  4.56s | `RunMicrotasks`                                |
| 13.3% |  744.8ms |  1,413 |  0.5ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  6.2% |  346.9ms |    388 |  0.9ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  4.1% |  227.2ms |    348 |  0.7ms |  1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  4.0% |  222.6ms |     23 |  9.7ms | 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  1.3% |   72.5ms |  2,757 | 26.3µs |  0.4ms | `V8.HandleInterrupts`                          |
|  0.9% |   49.8ms |  6,944 |  7.2µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.6% |   34.4ms |     15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.6% |   31.3ms | 10,115 |  3.1µs |  0.1ms | `fs.sync.stat`                                 |
|  0.4% |   23.7ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.4% |   23.1ms |  1,125 | 20.6µs |  0.1ms | `fs.sync.open`                                 |
|  0.3% |   17.6ms |    348 |  0.1ms |  0.1ms | `MinorGC`                                      |
|  0.2% |   13.2ms |  1,540 |  8.6µs |  0.1ms | `V8.DeoptimizeCode`                            |
|  0.2% |   10.2ms |  2,735 |  3.7µs | 40.0µs | `V8.StackGuard`                                |
|  0.2% |    9.8ms |    348 | 28.2µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  0.2% |    9.5ms |  1,125 |  8.4µs |  3.8ms | `fs.sync.read`                                 |
|  0.1% |    8.1ms |    348 | 23.2µs |  0.1ms | `V8.GC_SCAVENGER`                              |
|  0.1% |    7.5ms |     82 |  0.1ms |  0.1ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`  |
|  0.1% |    7.4ms |    452 | 16.4µs |  0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck`     |
|  0.1% |    6.7ms |    348 | 19.1µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % | CPU time | Count |   Mean |    Max | Span                                       |
| ----: | -------: | ----: | -----: | -----: | ------------------------------------------ |
| 81.5% |    4.56s |     1 |  4.56s |  4.56s | `RunMicrotasks`                            |
|  1.3% |   72.5ms | 2,757 | 26.3µs |  0.4ms | `V8.HandleInterrupts`                      |
|  0.9% |   49.8ms | 6,944 |  7.2µs |  0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.2% |   10.2ms | 2,735 |  3.7µs | 40.0µs | `V8.StackGuard`                            |
|  0.1% |    7.4ms |   452 | 16.4µs |  0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % | CPU time | Count |   Mean |    Max | Span                                            |
| ----: | -------: | ----: | -----: | -----: | ----------------------------------------------- |
| 13.3% |  744.8ms | 1,413 |  0.5ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  4.0% |  222.6ms |    23 |  9.7ms | 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.6% |   34.4ms |    15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.1% |    7.5ms |    82 |  0.1ms |  0.1ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
| <0.1% |    2.7ms |   201 | 13.5µs | 35.0µs | `V8.GC_BACKGROUND_UNPARK`                       |
| <0.1% |    1.6ms |    88 | 18.2µs | 45.0µs | `V8.GC_BACKGROUND_SAFEPOINT`                    |
| <0.1% |    1.4ms |    26 |  0.1ms |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |    0.8ms |    43 | 18.7µs |  0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |    0.5ms |   615 |  0.8µs |  3.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |    0.5ms |   130 |  3.7µs | 25.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |    0.3ms |   348 |  0.8µs |  3.0µs | `Parallel scavenge started`                     |
| <0.1% |    0.1ms |    84 |  1.8µs |  6.0µs | `FullEvacuator::RawEvacuatePage`                |
| <0.1% |    0.1ms |    84 |  1.6µs |  6.0µs | `Evacuator::EvacuatePage`                       |
| <0.1% |    0.1ms |    43 |  2.9µs | 11.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |    0.1ms |     2 | 48.5µs |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |    0.1ms |     2 | 42.5µs | 46.0µs | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |    0.1ms |     1 |  0.1ms |  0.1ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |   34.0µs |     8 |  4.3µs | 14.0µs | `ConcurrentMarking::RunMajor Preempted`         |
| <0.1% |   19.0µs |     1 | 19.0µs | 19.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |   18.0µs |     2 |  9.0µs | 12.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`      |

##### Garbage collection pause

|     % | CPU time | Count |   Mean |    Max | Span                                                    |
| ----: | -------: | ----: | -----: | -----: | ------------------------------------------------------- |
|  6.2% |  346.9ms |   388 |  0.9ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`                     |
|  4.1% |  227.2ms |   348 |  0.7ms |  1.7ms | `V8.GC_SCAVENGER_SCAVENGE`                              |
|  0.4% |   23.7ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`                        |
|  0.3% |   17.6ms |   348 |  0.1ms |  0.1ms | `MinorGC`                                               |
|  0.2% |    9.8ms |   348 | 28.2µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`               |
|  0.1% |    8.1ms |   348 | 23.2µs |  0.1ms | `V8.GC_SCAVENGER`                                       |
|  0.1% |    6.7ms |   348 | 19.1µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`                     |
|  0.1% |    6.2ms |   348 | 17.8µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`                   |
|  0.1% |    4.4ms |   613 |  7.1µs |  0.2ms | `V8.GC_MC_INCREMENTAL`                                  |
|  0.1% |    3.1ms |   348 |  9.0µs | 43.0µs | `V8.GCScavenger`                                        |
| <0.1% |    1.5ms |   350 |  4.4µs | 16.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`                         |
| <0.1% |    1.5ms |   350 |  4.3µs |  0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`                         |
| <0.1% |    1.4ms |   613 |  2.4µs | 17.0µs | `V8.GCIncrementalMarking`                               |
| <0.1% |    1.2ms |   348 |  3.6µs |  0.6ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`                  |
| <0.1% |    1.2ms |   353 |  3.4µs | 25.0µs | `V8.GC_TIME_TO_SAFEPOINT`                               |
| <0.1% |    0.8ms |   350 |  2.3µs | 12.0µs | `V8.GC_HEAP_PROLOGUE`                                   |
| <0.1% |    0.8ms |   613 |  1.3µs | 25.0µs | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING`                 |
| <0.1% |    0.7ms |     2 |  0.4ms |  0.4ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`        |
| <0.1% |    0.7ms |     2 |  0.3ms |  0.4ms | `V8.GC_MC_CLEAR_STRING_TABLE`                           |
| <0.1% |    0.6ms |   348 |  1.7µs | 13.0µs | `V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY` |

### Total CPU time

Spans with the most time their thread spent running, including child spans.

|     % | CPU time |  Count |   Mean |    Max | Span                                           |
| ----: | -------: | -----: | -----: | -----: | ---------------------------------------------- |
| 97.6% |    5.47s |      1 |  5.47s |  5.47s | `RunMicrotasks`                                |
| 13.3% |  744.8ms |  1,413 |  0.5ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
| 11.8% |  658.8ms |    348 |  1.9ms |  8.5ms | `MinorGC`                                      |
| 11.4% |  639.6ms |    348 |  1.8ms |  8.4ms | `V8.GCScavenger`                               |
| 11.3% |  635.2ms |    348 |  1.8ms |  8.4ms | `V8.GC_SCAVENGER`                              |
| 11.1% |  623.8ms |    348 |  1.8ms |  8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  6.4% |  357.0ms |    348 |  1.0ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  6.2% |  346.9ms |    388 |  0.9ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  4.0% |  222.6ms |     23 |  9.7ms | 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  1.7% |   94.6ms |  2,735 | 34.6µs |  5.5ms | `V8.StackGuard`                                |
|  1.5% |   85.3ms |  2,757 | 30.9µs |  5.5ms | `V8.HandleInterrupts`                          |
|  0.9% |   49.8ms |  6,944 |  7.2µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.6% |   34.4ms |     15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.6% |   31.3ms | 10,115 |  3.1µs |  0.1ms | `fs.sync.stat`                                 |
|  0.4% |   23.7ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.4% |   23.1ms |  1,125 | 20.6µs |  0.1ms | `fs.sync.open`                                 |
|  0.2% |   13.2ms |  1,540 | 13.8µs |  0.1ms | `V8.DeoptimizeCode`                            |
|  0.2% |   10.7ms |      2 |  5.4ms |  5.5ms | `V8.GCHandleGCRequest`                         |
|  0.2% |   10.7ms |      2 |  5.3ms |  5.4ms | `MajorGC`                                      |
|  0.2% |   10.6ms |      2 |  5.3ms |  5.4ms | `V8.GCFinalizeMC`                              |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % | CPU time | Count |   Mean |   Max | Span                                       |
| ----: | -------: | ----: | -----: | ----: | ------------------------------------------ |
| 97.6% |    5.47s |     1 |  5.47s | 5.47s | `RunMicrotasks`                            |
|  1.7% |   94.6ms | 2,735 | 34.6µs | 5.5ms | `V8.StackGuard`                            |
|  1.5% |   85.3ms | 2,757 | 30.9µs | 5.5ms | `V8.HandleInterrupts`                      |
|  0.9% |   49.8ms | 6,944 |  7.2µs | 0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.1% |    7.5ms |   452 | 16.5µs | 0.5ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % | CPU time | Count |   Mean |    Max | Span                                            |
| ----: | -------: | ----: | -----: | -----: | ----------------------------------------------- |
| 13.3% |  744.8ms | 1,413 |  0.5ms |  3.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  4.0% |  222.6ms |    23 |  9.7ms | 28.6ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.6% |   34.4ms |    15 |  2.3ms | 14.6ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.2% |   10.7ms |     2 |  5.4ms |  5.5ms | `V8.GCHandleGCRequest`                          |
|  0.1% |    8.2ms |    84 |  0.1ms |  0.2ms | `Evacuator::EvacuatePage`                       |
|  0.1% |    8.1ms |    84 |  0.1ms |  0.2ms | `FullEvacuator::RawEvacuatePage`                |
|  0.1% |    7.8ms |    82 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
|  0.1% |    5.8ms |     2 |  2.9ms |  3.2ms | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |    2.7ms |   201 | 13.5µs | 35.0µs | `V8.GC_BACKGROUND_UNPARK`                       |
| <0.1% |    2.6ms |     1 |  2.6ms |  2.6ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |    1.6ms |    88 | 18.2µs | 45.0µs | `V8.GC_BACKGROUND_SAFEPOINT`                    |
| <0.1% |    1.4ms |    26 |  0.1ms |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |    0.8ms |    43 | 18.7µs |  0.3ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |    0.5ms |   615 |  0.8µs |  3.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |    0.5ms |   130 |  3.7µs | 25.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |    0.3ms |   348 |  0.8µs |  3.0µs | `Parallel scavenge started`                     |
| <0.1% |    0.3ms |     1 |  0.3ms |  0.3ms | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |    0.1ms |     2 |  0.1ms |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |    0.1ms |    43 |  2.9µs | 11.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |   34.0µs |     8 |  4.3µs | 14.0µs | `ConcurrentMarking::RunMajor Preempted`         |

##### Garbage collection pause

|     % | CPU time | Count |   Mean |    Max | Span                                      |
| ----: | -------: | ----: | -----: | -----: | ----------------------------------------- |
| 11.8% |  658.8ms |   348 |  1.9ms |  8.5ms | `MinorGC`                                 |
| 11.4% |  639.6ms |   348 |  1.8ms |  8.4ms | `V8.GCScavenger`                          |
| 11.3% |  635.2ms |   348 |  1.8ms |  8.4ms | `V8.GC_SCAVENGER`                         |
| 11.1% |  623.8ms |   348 |  1.8ms |  8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                |
|  6.4% |  357.0ms |   348 |  1.0ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
|  6.2% |  346.9ms |   388 |  0.9ms |  7.3ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`       |
|  0.4% |   23.7ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
|  0.2% |   10.7ms |     2 |  5.3ms |  5.4ms | `MajorGC`                                 |
|  0.2% |   10.6ms |     2 |  5.3ms |  5.4ms | `V8.GCFinalizeMC`                         |
|  0.2% |   10.5ms |     2 |  5.3ms |  5.3ms | `V8.GC_MARK_COMPACTOR`                    |
|  0.1% |    8.1ms |     4 |  2.0ms |  4.0ms | `V8.GC_MC_EVACUATE`                       |
|  0.1% |    7.1ms |   613 | 11.6µs |  0.2ms | `V8.GCIncrementalMarking`                 |
|  0.1% |    6.7ms |   348 | 19.1µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  0.1% |    6.2ms |   348 | 17.8µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |
|  0.1% |    5.9ms |     2 |  2.9ms |  3.2ms | `V8.GC_MC_EVACUATE_COPY`                  |
|  0.1% |    5.7ms |     2 |  2.9ms |  3.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`         |
|  0.1% |    5.6ms |   613 |  9.2µs |  0.2ms | `V8.GC_MC_INCREMENTAL`                    |
| <0.1% |    1.8ms |   350 |  5.2µs | 17.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
| <0.1% |    1.5ms |   350 |  4.3µs |  0.5ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`           |
| <0.1% |    1.3ms |     2 |  0.7ms |  0.8ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS`       |

### Elapsed time

Async spans with the most time elapsed from start to end.

|      Time | Count |    Mean |   Max | Span               |
| --------: | ----: | ------: | ----: | ------------------ |
| 5m 30.12s |    80 |   5.59s | 5.59s | `PROMISE`          |
|     5.59s |    51 | 109.7ms | 5.59s | `PROMISE_CALLBACK` |
|     5.59s |     1 |   5.59s | 5.59s | `PIPEWRAP`         |

#### Parents

Parent spans with the largest contribution to each span's elapsed time.

##### `PROMISE_CALLBACK`

|      % |  Time | Count |    Mean |   Max | Parent    |
| -----: | ----: | ----: | ------: | ----: | --------- |
| 100.0% | 5.59s |    51 | 109.7ms | 5.59s | `PROMISE` |

#### Children

Child spans with the largest contribution to each span's elapsed time.

##### `PROMISE`

|    % |  Time | Count |    Mean |   Max | Child              |
| ---: | ----: | ----: | ------: | ----: | ------------------ |
| 1.7% | 5.59s |    51 | 109.7ms | 5.59s | `PROMISE_CALLBACK` |

#### Longest instances

Instances of each span with the most time, and when each started.

##### `PROMISE`

|    % |  Time | Start |
| ---: | ----: | ----: |
| 1.7% | 5.59s | 5.8ms |
| 1.7% | 5.59s | 6.6ms |
| 1.7% | 5.59s | 6.6ms |
| 1.7% | 5.59s | 6.6ms |
| 1.7% | 5.59s | 7.2ms |

##### `PROMISE_CALLBACK`

|     % |  Time |  Start |
| ----: | ----: | -----: |
| 99.9% | 5.59s | 10.7ms |
| <0.1% | 2.5ms |  7.7ms |
| <0.1% | 0.6ms |  6.6ms |
| <0.1% | 0.2ms |  7.3ms |
| <0.1% | 0.1ms |  7.6ms |

##### `PIPEWRAP`

|      % |  Time | Start |
| -----: | ----: | ----: |
| 100.0% | 5.59s | 9.9ms |

## Most frequent instants

### Count

Instants with the most occurrences recorded.

|     % | Count | Instant                            |
| ----: | ----: | ---------------------------------- |
| 98.9% |   350 | `V8.GC_Heap_Stats`                 |
|  0.6% |     2 | `V8.GCMarkCompactorSummary`        |
|  0.6% |     2 | `V8.GCMarkCompactorMarkingSummary` |

#### Categories

Categories accounting for at least 1.0% of instants.

##### Garbage collection pause

|     % | Count | Instant            |
| ----: | ----: | ------------------ |
| 98.9% |   350 | `V8.GC_Heap_Stats` |

##### Garbage collection

|    % | Count | Instant                            |
| ---: | ----: | ---------------------------------- |
| 0.6% |     2 | `V8.GCMarkCompactorSummary`        |
| 0.6% |     2 | `V8.GCMarkCompactorMarkingSummary` |

## Gauges

Quantities with the most readings of their level over time. A mean weighs each reading by the time until the next. A minimum and a maximum state when the level first reached them. A trend draws the level across the trace, scaled from the lowest reading to the highest.

| Gauge                         | Readings |                Min |    Mean |              Max |    First |    Last | Trend                  |
| ----------------------------- | -------: | -----------------: | ------: | ---------------: | -------: | ------: | ---------------------- |
| `Heap used before collection` |      350 | 17.6 MiB at 94.7ms | 393 MiB | 750 MiB at 5.59s | 17.8 MiB | 750 MiB | `▁▂▂▃▃▃▃▃▄▅▅▅▅▆▆▇▇▇██` |
| `Heap used after collection`  |      350 |   17 MiB at 94.3ms | 381 MiB | 735 MiB at 5.59s |   17 MiB | 735 MiB | `▁▂▂▂▃▃▃▃▄▅▅▅▅▆▆▇▇▇██` |

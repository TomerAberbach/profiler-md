# Trace

Recorded 42,533 events over 5.42s.

| Category                 |     % |    Time |  Count |
| ------------------------ | ----: | ------: | -----: |
| Script                   | 84.4% |   4.57s | 12,865 |
| Garbage collection       | 31.7% |   1.72s |  1,933 |
| Garbage collection pause | 13.0% | 704.0ms | 11,275 |
| I/O                      |  2.2% | 117.7ms | 14,795 |
| Compilation              |  0.2% |  12.6ms |  1,580 |
| Other                    |  0.1% |   3.6ms |     85 |

## Threads

Threads with the most time in spans. Threads run concurrently, so percentages can sum to more than 100%.

|     % |  Time |  Count | Thread                 |
| ----: | ----: | -----: | ---------------------- |
| 99.9% | 5.41s | 40,500 | `JavaScriptMainThread` |
| 31.7% | 1.72s |  1,901 | `PlatformWorkerThread` |

## Longest thread spans

Spans recorded on one thread. A span's time includes time its thread spent waiting.

### Self time

Thread spans with the most time, excluding child spans.

|     % |    Time |  Count |   Mean |    Max | Span                                           |
| ----: | ------: | -----: | -----: | -----: | ---------------------------------------------- |
| 82.0% |   4.44s |      1 |  4.44s |  4.44s | `RunMicrotasks`                                |
| 14.4% | 782.2ms |  1,391 |  0.6ms |  4.7ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  9.1% | 492.5ms |    195 |  2.5ms |  8.6ms | `V8.GC_BACKGROUND_UNPARK`                      |
|  6.7% | 365.4ms |    379 |  1.0ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  4.3% | 235.6ms |     82 |  2.9ms |  8.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|  3.8% | 204.8ms |    348 |  0.6ms |  1.5ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  3.3% | 179.5ms |     30 |  6.0ms | 16.8ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  1.2% |  63.5ms |  2,730 | 23.2µs |  0.3ms | `V8.HandleInterrupts`                          |
|  1.0% |  52.8ms |  1,122 | 47.1µs |  6.3ms | `fs.sync.read`                                 |
|  0.9% |  48.6ms |  6,931 |  7.0µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.7% |  38.9ms |    348 |  0.1ms |  1.9ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  0.6% |  30.6ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`                                 |
|  0.5% |  27.3ms |      7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.4% |  23.9ms |  1,122 | 21.3µs |  0.3ms | `fs.sync.open`                                 |
|  0.4% |  21.9ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.3% |  17.6ms |    348 |  0.1ms |  1.3ms | `MinorGC`                                      |
|  0.2% |  12.6ms |  1,580 |  8.0µs |  0.1ms | `V8.DeoptimizeCode`                            |
|  0.2% |   9.8ms |  2,718 |  3.6µs | 49.0µs | `V8.StackGuard`                                |
|  0.1% |   7.7ms |     91 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`  |
|  0.1% |   7.6ms |    348 | 21.9µs |  0.1ms | `V8.GC_SCAVENGER`                              |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % |   Time | Count |   Mean |    Max | Span                                       |
| ----: | -----: | ----: | -----: | -----: | ------------------------------------------ |
| 82.0% |  4.44s |     1 |  4.44s |  4.44s | `RunMicrotasks`                            |
|  1.2% | 63.5ms | 2,730 | 23.2µs |  0.3ms | `V8.HandleInterrupts`                      |
|  0.9% | 48.6ms | 6,931 |  7.0µs |  0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.2% |  9.8ms | 2,718 |  3.6µs | 49.0µs | `V8.StackGuard`                            |
|  0.1% |  6.9ms |   434 | 15.9µs |  0.3ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % |    Time | Count |   Mean |    Max | Span                                            |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------------- |
| 14.4% | 782.2ms | 1,391 |  0.6ms |  4.7ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  9.1% | 492.5ms |   195 |  2.5ms |  8.6ms | `V8.GC_BACKGROUND_UNPARK`                       |
|  4.3% | 235.6ms |    82 |  2.9ms |  8.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                    |
|  3.3% | 179.5ms |    30 |  6.0ms | 16.8ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.5% |  27.3ms |     7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.1% |   7.7ms |    91 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
| <0.1% |   1.3ms |    27 | 49.4µs |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |   0.5ms |   669 |  0.7µs |  2.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |   0.5ms |   129 |  3.6µs | 19.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |   0.4ms |    42 |  9.0µs |  0.1ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |   0.3ms |   348 |  0.8µs |  5.0µs | `Parallel scavenge started`                     |
| <0.1% |   0.2ms |     5 | 41.6µs |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |   0.2ms |    96 |  2.0µs | 27.0µs | `Evacuator::EvacuatePage`                       |
| <0.1% |   0.2ms |    96 |  1.8µs |  8.0µs | `FullEvacuator::RawEvacuatePage`                |
| <0.1% |   0.1ms |    42 |  2.4µs |  5.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |   0.1ms |     2 | 44.5µs | 46.0µs | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |  36.0µs |     3 | 12.0µs | 17.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |  22.0µs |     8 |  2.8µs |  6.0µs | `ConcurrentMarking::RunMajor Preempted`         |
| <0.1% |  17.0µs |     2 |  8.5µs |  9.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |  13.0µs |     2 |  6.5µs |  9.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`      |

##### Garbage collection pause

|     % |    Time | Count |   Mean |    Max | Span                                      |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------- |
|  6.7% | 365.4ms |   379 |  1.0ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`       |
|  3.8% | 204.8ms |   348 |  0.6ms |  1.5ms | `V8.GC_SCAVENGER_SCAVENGE`                |
|  0.7% |  38.9ms |   348 |  0.1ms |  1.9ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
|  0.4% |  21.9ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
|  0.3% |  17.6ms |   348 |  0.1ms |  1.3ms | `MinorGC`                                 |
|  0.1% |   7.6ms |   348 | 21.9µs |  0.1ms | `V8.GC_SCAVENGER`                         |
|  0.1% |   6.2ms |   348 | 17.9µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  0.1% |   5.8ms |   348 | 16.8µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |
|  0.1% |   5.5ms |   353 | 15.5µs |  0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                 |
|  0.1% |   4.8ms |   667 |  7.3µs |  0.1ms | `V8.GC_MC_INCREMENTAL`                    |
|  0.1% |   2.8ms |   348 |  8.1µs | 38.0µs | `V8.GCScavenger`                          |
| <0.1% |   1.5ms |   350 |  4.4µs | 26.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
| <0.1% |   1.5ms |   667 |  2.2µs | 13.0µs | `V8.GCIncrementalMarking`                 |
| <0.1% |   1.3ms |   350 |  3.7µs |  0.3ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`           |
| <0.1% |   0.8ms |   667 |  1.2µs | 10.0µs | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING`   |
| <0.1% |   0.8ms |   350 |  2.2µs | 11.0µs | `V8.GC_HEAP_PROLOGUE`                     |
| <0.1% |   0.7ms |   348 |  2.1µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`    |
| <0.1% |   0.7ms |    28 | 25.1µs |  0.1ms | `V8.GC_MC_SWEEP`                          |
| <0.1% |   0.6ms |     2 |  0.3ms |  0.4ms | `V8.GC_MC_CLEAR_STRING_TABLE`             |
| <0.1% |   0.6ms |   350 |  1.7µs | 12.0µs | `V8.GC_HEAP_EPILOGUE`                     |

##### I/O

|     % |   Time |  Count |   Mean |    Max | Span               |
| ----: | -----: | -----: | -----: | -----: | ------------------ |
|  1.0% | 52.8ms |  1,122 | 47.1µs |  6.3ms | `fs.sync.read`     |
|  0.6% | 30.6ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`     |
|  0.4% | 23.9ms |  1,122 | 21.3µs |  0.3ms | `fs.sync.open`     |
|  0.1% |  4.5ms |    210 | 21.3µs |  0.1ms | `fs.sync.realpath` |
| <0.1% |  2.5ms |  1,122 |  2.2µs | 30.0µs | `fs.sync.close`    |
| <0.1% |  2.1ms |  1,121 |  1.9µs | 22.0µs | `fs.sync.fstat`    |
| <0.1% |  1.2ms |     21 |  0.1ms |  0.2ms | `fs.sync.readdir`  |
| <0.1% |  0.1ms |     18 |  3.2µs |  7.0µs | `fs.sync.lstat`    |
| <0.1% |  6.0µs |      1 |  6.0µs |  6.0µs | `fs.sync.readlink` |

#### Parents

Parent spans with the largest contribution to each span's self time.

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

|      % |    Time | Count |  Mean |   Max | Parent                                    |
| -----: | ------: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 365.4ms |   379 | 1.0ms | 7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|      % |    Time | Count |  Mean |   Max | Parent            |
| -----: | ------: | ----: | ----: | ----: | ----------------- |
| 100.0% | 204.8ms |   348 | 0.6ms | 1.5ms | `V8.GC_SCAVENGER` |

##### `V8.HandleInterrupts`

|     % |   Time | Count |   Mean |   Max | Parent          |
| ----: | -----: | ----: | -----: | ----: | --------------- |
| 99.5% | 63.2ms | 2,718 | 23.2µs | 0.3ms | `V8.StackGuard` |
|  0.5% |  0.3ms |    12 | 24.2µs | 0.1ms | `RunMicrotasks` |

##### `fs.sync.read`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 52.8ms | 1,122 | 47.1µs | 6.3ms | `RunMicrotasks` |

##### `V8.BytecodeBudgetInterrupt`

|      % |   Time | Count |  Mean |   Max | Parent          |
| -----: | -----: | ----: | ----: | ----: | --------------- |
| 100.0% | 48.6ms | 6,918 | 7.0µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|      % |   Time | Count |  Mean |   Max | Parent                     |
| -----: | -----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 38.9ms |   348 | 0.1ms | 1.9ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `fs.sync.stat`

|      % |   Time |  Count |  Mean |   Max | Parent          |
| -----: | -----: | -----: | ----: | ----: | --------------- |
| 100.0% | 30.6ms | 10,057 | 3.0µs | 0.1ms | `RunMicrotasks` |

##### `fs.sync.open`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 23.9ms | 1,122 | 21.3µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

|      % |   Time | Count |  Mean |   Max | Parent                     |
| -----: | -----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 21.9ms |   348 | 0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `MinorGC`

|      % |   Time | Count |  Mean |   Max | Parent          |
| -----: | -----: | ----: | ----: | ----: | --------------- |
| 100.0% | 17.6ms |   348 | 0.1ms | 1.3ms | `RunMicrotasks` |

##### `V8.DeoptimizeCode`

|     % |  Time | Count |   Mean |    Max | Parent              |
| ----: | ----: | ----: | -----: | -----: | ------------------- |
| 58.9% | 7.4ms |   684 | 10.9µs |  0.1ms | `V8.DeoptimizeCode` |
| 41.1% | 5.2ms |   896 |  5.8µs | 39.0µs | `RunMicrotasks`     |

##### `V8.StackGuard`

|      % |  Time | Count |  Mean |    Max | Parent          |
| -----: | ----: | ----: | ----: | -----: | --------------- |
| 100.0% | 9.8ms | 2,717 | 3.6µs | 49.0µs | `RunMicrotasks` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|      % |  Time | Count |  Mean |   Max | Parent                           |
| -----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 100.0% | 7.7ms |    91 | 0.1ms | 0.2ms | `FullEvacuator::RawEvacuatePage` |

##### `V8.GC_SCAVENGER`

|      % |  Time | Count |   Mean |   Max | Parent           |
| -----: | ----: | ----: | -----: | ----: | ---------------- |
| 100.0% | 7.6ms |   348 | 21.9µs | 0.1ms | `V8.GCScavenger` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|     % |  Time | Count |   Mean |   Max | Parent          |
| ----: | ----: | ----: | -----: | ----: | --------------- |
| 94.6% | 6.5ms |   431 | 15.2µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 6.2ms |   348 | 17.9µs | 0.1ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 5.8ms |   348 | 16.8µs | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|     % |   Time | Count |   Mean |    Max | Parent                |
| ----: | -----: | ----: | -----: | -----: | --------------------- |
| 95.0% |  5.2ms |   348 | 14.9µs |  0.5ms | `V8.GCScavenger`      |
|  4.6% |  0.3ms |     2 |  0.1ms |  0.2ms | `V8.GCFinalizeMC`     |
|  0.3% | 18.0µs |     1 | 18.0µs | 18.0µs | `RunMicrotasks`       |
| <0.1% |  1.0µs |     1 |  1.0µs |  1.0µs | `V8.HandleInterrupts` |

##### `V8.GC_MC_INCREMENTAL`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 4.8ms |   667 | 7.3µs | 0.1ms | `V8.GCIncrementalMarking` |

##### `fs.sync.realpath`

|      % |  Time | Count |   Mean |   Max | Parent          |
| -----: | ----: | ----: | -----: | ----: | --------------- |
| 100.0% | 4.5ms |   210 | 21.3µs | 0.1ms | `RunMicrotasks` |

##### `V8.GCScavenger`

|      % |  Time | Count |  Mean |    Max | Parent    |
| -----: | ----: | ----: | ----: | -----: | --------- |
| 100.0% | 2.8ms |   348 | 8.1µs | 38.0µs | `MinorGC` |

##### `fs.sync.close`

|      % |  Time | Count |  Mean |    Max | Parent          |
| -----: | ----: | ----: | ----: | -----: | --------------- |
| 100.0% | 2.5ms | 1,122 | 2.2µs | 30.0µs | `RunMicrotasks` |

##### `fs.sync.fstat`

|      % |  Time | Count |  Mean |    Max | Parent          |
| -----: | ----: | ----: | ----: | -----: | --------------- |
| 100.0% | 2.1ms | 1,121 | 1.9µs | 22.0µs | `RunMicrotasks` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|     % |   Time | Count |   Mean |    Max | Parent                 |
| ----: | -----: | ----: | -----: | -----: | ---------------------- |
| 98.4% |  1.5ms |   348 |  4.3µs | 26.0µs | `V8.GC_SCAVENGER`      |
|  1.6% | 25.0µs |     2 | 12.5µs | 21.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GCIncrementalMarking`

|     % |  Time | Count |  Mean |    Max | Parent                       |
| ----: | ----: | ----: | ----: | -----: | ---------------------------- |
| 99.9% | 1.5ms |   666 | 2.2µs | 13.0µs | `RunMicrotasks`              |
|  0.1% | 2.0µs |     1 | 2.0µs |  2.0µs | `V8.BytecodeBudgetInterrupt` |

##### `V8.GCDeoptMarkedAllocationSites`

|      % |  Time | Count |   Mean |   Max | Parent                |
| -----: | ----: | ----: | -----: | ----: | --------------------- |
| 100.0% | 1.3ms |    27 | 49.4µs | 0.2ms | `V8.HandleInterrupts` |

##### `V8.GC_HEAP_PROLOGUE_SAFEPOINT`

|     % |  Time | Count |  Mean |   Max | Parent                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 99.8% | 1.3ms |   348 | 3.7µs | 0.3ms | `V8.GC_SCAVENGER`      |
|  0.2% | 3.0µs |     2 | 1.5µs | 2.0µs | `V8.GC_MARK_COMPACTOR` |

##### `fs.sync.readdir`

|      % |  Time | Count |  Mean |   Max | Parent          |
| -----: | ----: | ----: | ----: | ----: | --------------- |
| 100.0% | 1.2ms |    21 | 0.1ms | 0.2ms | `RunMicrotasks` |

##### `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING`

|      % |  Time | Count |  Mean |    Max | Parent                 |
| -----: | ----: | ----: | ----: | -----: | ---------------------- |
| 100.0% | 0.8ms |   667 | 1.2µs | 10.0µs | `V8.GC_MC_INCREMENTAL` |

##### `V8.GC_HEAP_PROLOGUE`

|     % |  Time | Count |  Mean |    Max | Parent    |
| ----: | ----: | ----: | ----: | -----: | --------- |
| 99.6% | 0.8ms |   348 | 2.2µs | 11.0µs | `MinorGC` |
|  0.4% | 3.0µs |     2 | 1.5µs |  2.0µs | `MajorGC` |

##### `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`

|      % |  Time | Count |  Mean |   Max | Parent                     |
| -----: | ----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 0.7ms |   348 | 2.1µs | 0.1ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_MC_SWEEP`

|     % |  Time | Count |   Mean |    Max | Parent                                        |
| ----: | ----: | ----: | -----: | -----: | --------------------------------------------- |
| 58.7% | 0.4ms |    18 | 22.9µs | 34.0µs | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
| 19.7% | 0.1ms |     4 | 34.8µs |  0.1ms | `V8.GC_MARK_COMPACTOR`                        |
| 14.2% | 0.1ms |     3 | 33.3µs | 45.0µs | `LiveObjectVisitor::VisitMarkedObjects`       |
|  7.4% | 0.1ms |     3 | 17.3µs | 32.0µs | `V8.HandleInterrupts`                         |

##### `V8.GC_MC_CLEAR_STRING_TABLE`

|     % |  Time | Count |  Mean |   Max | Parent                    |
| ----: | ----: | ----: | ----: | ----: | ------------------------- |
| 42.7% | 0.3ms |     1 | 0.3ms | 0.3ms | `V8.GC_MC_CLEAR_JOIN_JOB` |

##### `V8.GC_HEAP_EPILOGUE`

|     % |  Time | Count |  Mean |    Max | Parent    |
| ----: | ----: | ----: | ----: | -----: | --------- |
| 99.3% | 0.6ms |   348 | 1.7µs | 12.0µs | `MinorGC` |
|  0.7% | 4.0µs |     2 | 2.0µs |  2.0µs | `MajorGC` |

##### `Major concurrent marking rescheduled`

|     % |  Time | Count |  Mean |   Max | Parent                                         |
| ----: | ----: | ----: | ----: | ----: | ---------------------------------------------- |
| 99.2% | 0.5ms |   665 | 0.7µs | 2.0µs | `V8.GC_MC_INCREMENTAL`                         |
|  0.4% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`          |
|  0.4% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING` |

##### `RememberedSetUpdatingItem::Process`

|     % |   Time | Count |  Mean |    Max | Parent                                         |
| ----: | -----: | ----: | ----: | -----: | ---------------------------------------------- |
| 92.1% |  0.4ms |   114 | 3.7µs | 19.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`   |
|  7.9% | 36.0µs |    15 | 2.4µs |  7.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |

##### `Parallel scavenge started`

|      % |  Time | Count |  Mean |   Max | Parent                                    |
| -----: | ----: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 0.3ms |   348 | 0.8µs | 5.0µs | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|      % |  Time | Count |   Mean |   Max | Parent                           |
| -----: | ----: | ----: | -----: | ----: | -------------------------------- |
| 100.0% | 0.2ms |     5 | 41.6µs | 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `Evacuator::EvacuatePage`

|     % |  Time | Count |  Mean |    Max | Parent                              |
| ----: | ----: | ----: | ----: | -----: | ----------------------------------- |
| 68.4% | 0.1ms |    69 | 1.9µs | 27.0µs | `V8.GC_MC_EVACUATE_COPY_PARALLEL`   |
| 31.6% | 0.1ms |    27 | 2.3µs |  8.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY` |

##### `FullEvacuator::RawEvacuatePage`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 0.2ms |    96 | 1.8µs | 8.0µs | `Evacuator::EvacuatePage` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|      % |  Time | Count |   Mean |    Max | Parent                   |
| -----: | ----: | ----: | -----: | -----: | ------------------------ |
| 100.0% | 0.1ms |     2 | 44.5µs | 46.0µs | `V8.GC_MC_EVACUATE_COPY` |

##### `fs.sync.lstat`

|     % |   Time | Count |  Mean |   Max | Parent          |
| ----: | -----: | ----: | ----: | ----: | --------------- |
| 31.6% | 18.0µs |     5 | 3.6µs | 5.0µs | `RunMicrotasks` |

##### `ConcurrentMarking::RunMajor Preempted`

|      % |   Time | Count |  Mean |   Max | Parent                        |
| -----: | -----: | ----: | ----: | ----: | ----------------------------- |
| 100.0% | 22.0µs |     8 | 2.8µs | 6.0µs | `V8.GC_MC_BACKGROUND_MARKING` |

### Total time

Thread spans with the most time, including child spans.

|     % |    Time |  Count |   Mean |    Max | Span                                           |
| ----: | ------: | -----: | -----: | -----: | ---------------------------------------------- |
| 99.8% |   5.41s |      1 |  5.41s |  5.41s | `RunMicrotasks`                                |
| 14.4% | 782.2ms |  1,391 |  0.6ms |  4.7ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
| 12.6% | 684.0ms |    348 |  2.0ms |  8.6ms | `MinorGC`                                      |
| 12.3% | 664.7ms |    348 |  1.9ms |  8.6ms | `V8.GCScavenger`                               |
| 12.1% | 656.6ms |    348 |  1.9ms |  8.6ms | `V8.GC_SCAVENGER`                              |
| 11.9% | 645.9ms |    348 |  1.9ms |  8.5ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  9.1% | 492.5ms |    195 |  2.5ms |  8.6ms | `V8.GC_BACKGROUND_UNPARK`                      |
|  7.5% | 404.6ms |    348 |  1.2ms |  7.5ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  6.7% | 365.4ms |    379 |  1.0ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  4.3% | 235.6ms |     82 |  2.9ms |  8.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                   |
|  3.3% | 179.5ms |     30 |  6.0ms | 16.8ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  1.6% |  85.9ms |  2,718 | 31.6µs |  8.5ms | `V8.StackGuard`                                |
|  1.4% |  76.4ms |  2,730 | 28.0µs |  8.5ms | `V8.HandleInterrupts`                          |
|  1.0% |  52.8ms |  1,122 | 47.1µs |  6.3ms | `fs.sync.read`                                 |
|  0.9% |  48.6ms |  6,931 |  7.0µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.6% |  30.6ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`                                 |
|  0.5% |  27.3ms |      7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.4% |  23.9ms |  1,122 | 21.3µs |  0.3ms | `fs.sync.open`                                 |
|  0.4% |  21.9ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.2% |  12.6ms |  1,580 | 12.7µs |  0.1ms | `V8.DeoptimizeCode`                            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % |   Time | Count |   Mean |   Max | Span                                       |
| ----: | -----: | ----: | -----: | ----: | ------------------------------------------ |
| 99.8% |  5.41s |     1 |  5.41s | 5.41s | `RunMicrotasks`                            |
|  1.6% | 85.9ms | 2,718 | 31.6µs | 8.5ms | `V8.StackGuard`                            |
|  1.4% | 76.4ms | 2,730 | 28.0µs | 8.5ms | `V8.HandleInterrupts`                      |
|  0.9% | 48.6ms | 6,931 |  7.0µs | 0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.1% |  6.9ms |   434 | 15.9µs | 0.3ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % |    Time | Count |   Mean |    Max | Span                                            |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------------- |
| 14.4% | 782.2ms | 1,391 |  0.6ms |  4.7ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  9.1% | 492.5ms |   195 |  2.5ms |  8.6ms | `V8.GC_BACKGROUND_UNPARK`                       |
|  4.3% | 235.6ms |    82 |  2.9ms |  8.6ms | `V8.GC_BACKGROUND_SAFEPOINT`                    |
|  3.3% | 179.5ms |    30 |  6.0ms | 16.8ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.5% |  27.3ms |     7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.2% |  11.1ms |     2 |  5.6ms |  8.5ms | `V8.GCHandleGCRequest`                          |
|  0.2% |   8.8ms |    96 |  0.1ms |  0.2ms | `Evacuator::EvacuatePage`                       |
|  0.2% |   8.6ms |    96 |  0.1ms |  0.2ms | `FullEvacuator::RawEvacuatePage`                |
|  0.1% |   8.1ms |    91 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
|  0.1% |   6.4ms |     2 |  3.2ms |  5.5ms | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |   2.5ms |     3 |  0.8ms |  0.9ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |   1.3ms |    27 | 49.4µs |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |   0.5ms |   669 |  0.7µs |  2.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |   0.5ms |   129 |  3.6µs | 19.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |   0.4ms |    42 |  9.0µs |  0.1ms | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |   0.3ms |     5 |  0.1ms |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |   0.3ms |   348 |  0.8µs |  5.0µs | `Parallel scavenge started`                     |
| <0.1% |   0.1ms |    42 |  2.4µs |  5.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |   0.1ms |     2 | 26.5µs | 30.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |  22.0µs |     8 |  2.8µs |  6.0µs | `ConcurrentMarking::RunMajor Preempted`         |

##### Garbage collection pause

|     % |    Time | Count |   Mean |    Max | Span                                      |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------- |
| 12.6% | 684.0ms |   348 |  2.0ms |  8.6ms | `MinorGC`                                 |
| 12.3% | 664.7ms |   348 |  1.9ms |  8.6ms | `V8.GCScavenger`                          |
| 12.1% | 656.6ms |   348 |  1.9ms |  8.6ms | `V8.GC_SCAVENGER`                         |
| 11.9% | 645.9ms |   348 |  1.9ms |  8.5ms | `V8.GC_SCAVENGER_SCAVENGE`                |
|  7.5% | 404.6ms |   348 |  1.2ms |  7.5ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
|  6.7% | 365.4ms |   379 |  1.0ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`       |
|  0.4% |  21.9ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
|  0.2% |  11.1ms |     2 |  5.6ms |  8.5ms | `MajorGC`                                 |
|  0.2% |  11.0ms |     2 |  5.5ms |  8.4ms | `V8.GCFinalizeMC`                         |
|  0.2% |  10.7ms |     2 |  5.4ms |  8.2ms | `V8.GC_MARK_COMPACTOR`                    |
|  0.2% |   8.5ms |     4 |  2.1ms |  6.5ms | `V8.GC_MC_EVACUATE`                       |
|  0.1% |   7.6ms |   667 | 11.4µs |  0.1ms | `V8.GCIncrementalMarking`                 |
|  0.1% |   6.5ms |     2 |  3.2ms |  5.5ms | `V8.GC_MC_EVACUATE_COPY`                  |
|  0.1% |   6.3ms |     2 |  3.2ms |  5.5ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`         |
|  0.1% |   6.2ms |   348 | 17.9µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  0.1% |   6.1ms |   667 |  9.2µs |  0.1ms | `V8.GC_MC_INCREMENTAL`                    |
|  0.1% |   5.8ms |   348 | 16.8µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |
|  0.1% |   5.5ms |   353 | 15.5µs |  0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                 |
| <0.1% |   1.8ms |   350 |  5.2µs | 27.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
| <0.1% |   1.3ms |     2 |  0.7ms |  0.9ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS`       |

##### I/O

|     % |   Time |  Count |   Mean |    Max | Span               |
| ----: | -----: | -----: | -----: | -----: | ------------------ |
|  1.0% | 52.8ms |  1,122 | 47.1µs |  6.3ms | `fs.sync.read`     |
|  0.6% | 30.6ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`     |
|  0.4% | 23.9ms |  1,122 | 21.3µs |  0.3ms | `fs.sync.open`     |
|  0.1% |  4.5ms |    210 | 21.3µs |  0.1ms | `fs.sync.realpath` |
| <0.1% |  2.5ms |  1,122 |  2.2µs | 30.0µs | `fs.sync.close`    |
| <0.1% |  2.1ms |  1,121 |  1.9µs | 22.0µs | `fs.sync.fstat`    |
| <0.1% |  1.2ms |     21 |  0.1ms |  0.2ms | `fs.sync.readdir`  |
| <0.1% |  0.1ms |     18 |  3.2µs |  7.0µs | `fs.sync.lstat`    |
| <0.1% |  6.0µs |      1 |  6.0µs |  6.0µs | `fs.sync.readlink` |

#### Attribute values

Attribute values with the largest contribution to each span's total time.

##### `MinorGC`

|      % |    Time | Count |  Mean |   Max | Attribute | Value                |
| -----: | ------: | ----: | ----: | ----: | --------- | -------------------- |
| 100.0% | 684.0ms |   348 | 2.0ms | 8.6ms | `cause`   | `allocation failure` |

##### `MajorGC`

|      % |   Time | Count |  Mean |   Max | Attribute | Value                                          |
| -----: | -----: | ----: | ----: | ----: | --------- | ---------------------------------------------- |
| 100.0% | 11.1ms |     2 | 5.6ms | 8.5ms | `cause`   | `finalize incremental marking via stack guard` |

##### `FullEvacuator::RawEvacuatePage`

|     % |  Time | Count |  Mean |   Max | Attribute         | Value                |
| ----: | ----: | ----: | ----: | ----: | ----------------- | -------------------- |
| 74.4% | 6.4ms |    76 | 0.1ms | 0.1ms | `evacuation_mode` | `page-new-to-old`    |
| 21.9% | 1.9ms |    15 | 0.1ms | 0.2ms | `evacuation_mode` | `objects-new-to-old` |
|  3.7% | 0.3ms |     5 | 0.1ms | 0.1ms | `evacuation_mode` | `objects-old-to-old` |

#### Attribute amounts

Attribute amounts with the largest contribution to each span's total time.

##### `MinorGC`

|      % |    Time | Count | Attribute   |    Total |   Mean |      Max |
| -----: | ------: | ----: | ----------- | -------: | -----: | -------: |
| 100.0% | 684.0ms |   348 | `reclaimed` | 4.08 GiB | 12 MiB | 15.6 MiB |

##### `MajorGC`

|      % |   Time | Count | Attribute   |    Total |     Mean |      Max |
| -----: | -----: | ----: | ----------- | -------: | -------: | -------: |
| 100.0% | 11.1ms |     2 | `reclaimed` | 10.1 MiB | 5.06 MiB | 7.68 MiB |

#### Threads

Threads with the largest contribution to each span's total time.

##### `Evacuator::EvacuatePage`

|     % |  Time | Count |  Mean |   Max | Thread                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 71.5% | 6.3ms |    69 | 0.1ms | 0.2ms | `JavaScriptMainThread` |
| 28.5% | 2.5ms |    27 | 0.1ms | 0.1ms | `PlatformWorkerThread` |

##### `FullEvacuator::RawEvacuatePage`

|     % |  Time | Count |  Mean |   Max | Thread                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 71.6% | 6.1ms |    69 | 0.1ms | 0.2ms | `JavaScriptMainThread` |
| 28.4% | 2.4ms |    27 | 0.1ms | 0.1ms | `PlatformWorkerThread` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|     % |  Time | Count |  Mean |   Max | Thread                 |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 70.6% | 5.7ms |    64 | 0.1ms | 0.2ms | `JavaScriptMainThread` |
| 29.4% | 2.4ms |    27 | 0.1ms | 0.1ms | `PlatformWorkerThread` |

##### `RememberedSetUpdatingItem::Process`

|     % |   Time | Count |  Mean |    Max | Thread                 |
| ----: | -----: | ----: | ----: | -----: | ---------------------- |
| 92.1% |  0.4ms |   114 | 3.7µs | 19.0µs | `JavaScriptMainThread` |
|  7.9% | 36.0µs |    15 | 2.4µs |  7.0µs | `PlatformWorkerThread` |

#### Parents

Parent spans with the largest contribution to each span's total time.

##### `MinorGC`

|      % |    Time | Count |  Mean |   Max | Parent          |
| -----: | ------: | ----: | ----: | ----: | --------------- |
| 100.0% | 684.0ms |   348 | 2.0ms | 8.6ms | `RunMicrotasks` |

##### `V8.GCScavenger`

|      % |    Time | Count |  Mean |   Max | Parent    |
| -----: | ------: | ----: | ----: | ----: | --------- |
| 100.0% | 664.7ms |   348 | 1.9ms | 8.6ms | `MinorGC` |

##### `V8.GC_SCAVENGER`

|      % |    Time | Count |  Mean |   Max | Parent           |
| -----: | ------: | ----: | ----: | ----: | ---------------- |
| 100.0% | 656.6ms |   348 | 1.9ms | 8.6ms | `V8.GCScavenger` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|      % |    Time | Count |  Mean |   Max | Parent            |
| -----: | ------: | ----: | ----: | ----: | ----------------- |
| 100.0% | 645.9ms |   348 | 1.9ms | 8.5ms | `V8.GC_SCAVENGER` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|      % |    Time | Count |  Mean |   Max | Parent                     |
| -----: | ------: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 404.6ms |   348 | 1.2ms | 7.5ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

|      % |    Time | Count |  Mean |   Max | Parent                                    |
| -----: | ------: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 365.4ms |   379 | 1.0ms | 7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `V8.StackGuard`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 85.9ms | 2,717 | 31.6µs | 8.5ms | `RunMicrotasks` |

##### `V8.HandleInterrupts`

|     % |   Time | Count |   Mean |   Max | Parent          |
| ----: | -----: | ----: | -----: | ----: | --------------- |
| 99.6% | 76.1ms | 2,718 | 28.0µs | 8.5ms | `V8.StackGuard` |
|  0.4% |  0.3ms |    12 | 24.2µs | 0.1ms | `RunMicrotasks` |

##### `fs.sync.read`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 52.8ms | 1,122 | 47.1µs | 6.3ms | `RunMicrotasks` |

##### `V8.BytecodeBudgetInterrupt`

|      % |   Time | Count |  Mean |   Max | Parent          |
| -----: | -----: | ----: | ----: | ----: | --------------- |
| 100.0% | 48.6ms | 6,918 | 7.0µs | 0.3ms | `RunMicrotasks` |

##### `fs.sync.stat`

|      % |   Time |  Count |  Mean |   Max | Parent          |
| -----: | -----: | -----: | ----: | ----: | --------------- |
| 100.0% | 30.6ms | 10,057 | 3.0µs | 0.1ms | `RunMicrotasks` |

##### `fs.sync.open`

|      % |   Time | Count |   Mean |   Max | Parent          |
| -----: | -----: | ----: | -----: | ----: | --------------- |
| 100.0% | 23.9ms | 1,122 | 21.3µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

|      % |   Time | Count |  Mean |   Max | Parent                     |
| -----: | -----: | ----: | ----: | ----: | -------------------------- |
| 100.0% | 21.9ms |   348 | 0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.DeoptimizeCode`

|     % |   Time | Count |   Mean |   Max | Parent              |
| ----: | -----: | ----: | -----: | ----: | ------------------- |
| 62.9% | 12.6ms |   896 | 14.1µs | 0.1ms | `RunMicrotasks`     |
| 37.1% |  7.4ms |   684 | 10.9µs | 0.1ms | `V8.DeoptimizeCode` |

##### `V8.GCHandleGCRequest`

|      % |   Time | Count |  Mean |   Max | Parent                |
| -----: | -----: | ----: | ----: | ----: | --------------------- |
| 100.0% | 11.1ms |     2 | 5.6ms | 8.5ms | `V8.HandleInterrupts` |

##### `MajorGC`

|      % |   Time | Count |  Mean |   Max | Parent                 |
| -----: | -----: | ----: | ----: | ----: | ---------------------- |
| 100.0% | 11.1ms |     2 | 5.6ms | 8.5ms | `V8.GCHandleGCRequest` |

##### `V8.GCFinalizeMC`

|      % |   Time | Count |  Mean |   Max | Parent    |
| -----: | -----: | ----: | ----: | ----: | --------- |
| 100.0% | 11.0ms |     2 | 5.5ms | 8.4ms | `MajorGC` |

##### `V8.GC_MARK_COMPACTOR`

|      % |   Time | Count |  Mean |   Max | Parent            |
| -----: | -----: | ----: | ----: | ----: | ----------------- |
| 100.0% | 10.7ms |     2 | 5.4ms | 8.2ms | `V8.GCFinalizeMC` |

##### `Evacuator::EvacuatePage`

|     % |  Time | Count |  Mean |   Max | Parent                              |
| ----: | ----: | ----: | ----: | ----: | ----------------------------------- |
| 71.5% | 6.3ms |    69 | 0.1ms | 0.2ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`   |
| 28.5% | 2.5ms |    27 | 0.1ms | 0.1ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY` |

##### `FullEvacuator::RawEvacuatePage`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 8.6ms |    96 | 0.1ms | 0.2ms | `Evacuator::EvacuatePage` |

##### `V8.GC_MC_EVACUATE`

|      % |  Time | Count |  Mean |   Max | Parent                 |
| -----: | ----: | ----: | ----: | ----: | ---------------------- |
| 100.0% | 8.5ms |     4 | 2.1ms | 6.5ms | `V8.GC_MARK_COMPACTOR` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|      % |  Time | Count |  Mean |   Max | Parent                           |
| -----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 100.0% | 8.1ms |    91 | 0.1ms | 0.2ms | `FullEvacuator::RawEvacuatePage` |

##### `V8.GCIncrementalMarking`

|     % |   Time | Count |   Mean |    Max | Parent                       |
| ----: | -----: | ----: | -----: | -----: | ---------------------------- |
| 99.5% |  7.6ms |   666 | 11.3µs |  0.1ms | `RunMicrotasks`              |
|  0.5% | 41.0µs |     1 | 41.0µs | 41.0µs | `V8.BytecodeBudgetInterrupt` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|     % |  Time | Count |   Mean |   Max | Parent          |
| ----: | ----: | ----: | -----: | ----: | --------------- |
| 94.6% | 6.5ms |   431 | 15.2µs | 0.3ms | `RunMicrotasks` |

##### `V8.GC_MC_EVACUATE_COPY`

|      % |  Time | Count |  Mean |   Max | Parent              |
| -----: | ----: | ----: | ----: | ----: | ------------------- |
| 100.0% | 6.5ms |     2 | 3.2ms | 5.5ms | `V8.GC_MC_EVACUATE` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|      % |  Time | Count |  Mean |   Max | Parent                   |
| -----: | ----: | ----: | ----: | ----: | ------------------------ |
| 100.0% | 6.4ms |     2 | 3.2ms | 5.5ms | `V8.GC_MC_EVACUATE_COPY` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

|      % |  Time | Count |  Mean |   Max | Parent                                          |
| -----: | ----: | ----: | ----: | ----: | ----------------------------------------------- |
| 100.0% | 6.3ms |     2 | 3.2ms | 5.5ms | `MarkCompactCollector::EvacuatePagesInParallel` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 6.2ms |   348 | 17.9µs | 0.1ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_MC_INCREMENTAL`

|      % |  Time | Count |  Mean |   Max | Parent                    |
| -----: | ----: | ----: | ----: | ----: | ------------------------- |
| 100.0% | 6.1ms |   667 | 9.2µs | 0.1ms | `V8.GCIncrementalMarking` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

|      % |  Time | Count |   Mean |   Max | Parent                     |
| -----: | ----: | ----: | -----: | ----: | -------------------------- |
| 100.0% | 5.8ms |   348 | 16.8µs | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|     % |   Time | Count |   Mean |    Max | Parent                |
| ----: | -----: | ----: | -----: | -----: | --------------------- |
| 95.0% |  5.2ms |   348 | 14.9µs |  0.5ms | `V8.GCScavenger`      |
|  4.6% |  0.3ms |     2 |  0.1ms |  0.2ms | `V8.GCFinalizeMC`     |
|  0.3% | 18.0µs |     1 | 18.0µs | 18.0µs | `RunMicrotasks`       |
| <0.1% |  1.0µs |     1 |  1.0µs |  1.0µs | `V8.HandleInterrupts` |

##### `fs.sync.realpath`

|      % |  Time | Count |   Mean |   Max | Parent          |
| -----: | ----: | ----: | -----: | ----: | --------------- |
| 100.0% | 4.5ms |   210 | 21.3µs | 0.1ms | `RunMicrotasks` |

##### `fs.sync.close`

|      % |  Time | Count |  Mean |    Max | Parent          |
| -----: | ----: | ----: | ----: | -----: | --------------- |
| 100.0% | 2.5ms | 1,122 | 2.2µs | 30.0µs | `RunMicrotasks` |

##### `fs.sync.fstat`

|      % |  Time | Count |  Mean |    Max | Parent          |
| -----: | ----: | ----: | ----: | -----: | --------------- |
| 100.0% | 2.1ms | 1,121 | 1.9µs | 22.0µs | `RunMicrotasks` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|     % |   Time | Count |   Mean |    Max | Parent                 |
| ----: | -----: | ----: | -----: | -----: | ---------------------- |
| 98.5% |  1.8ms |   348 |  5.1µs | 27.0µs | `V8.GC_SCAVENGER`      |
|  1.5% | 27.0µs |     2 | 13.5µs | 22.0µs | `V8.GC_MARK_COMPACTOR` |

##### `V8.GCDeoptMarkedAllocationSites`

|      % |  Time | Count |   Mean |   Max | Parent                |
| -----: | ----: | ----: | -----: | ----: | --------------------- |
| 100.0% | 1.3ms |    27 | 49.4µs | 0.2ms | `V8.HandleInterrupts` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS`

|      % |  Time | Count |  Mean |   Max | Parent              |
| -----: | ----: | ----: | ----: | ----: | ------------------- |
| 100.0% | 1.3ms |     2 | 0.7ms | 0.9ms | `V8.GC_MC_EVACUATE` |

##### `fs.sync.readdir`

|      % |  Time | Count |  Mean |   Max | Parent          |
| -----: | ----: | ----: | ----: | ----: | --------------- |
| 100.0% | 1.2ms |    21 | 0.1ms | 0.2ms | `RunMicrotasks` |

##### `Major concurrent marking rescheduled`

|     % |  Time | Count |  Mean |   Max | Parent                                         |
| ----: | ----: | ----: | ----: | ----: | ---------------------------------------------- |
| 99.2% | 0.5ms |   665 | 0.7µs | 2.0µs | `V8.GC_MC_INCREMENTAL`                         |
|  0.4% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_MARK_FULL_CLOSURE_PARALLEL`          |
|  0.4% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING` |

##### `RememberedSetUpdatingItem::Process`

|     % |   Time | Count |  Mean |    Max | Parent                                         |
| ----: | -----: | ----: | ----: | -----: | ---------------------------------------------- |
| 92.1% |  0.4ms |   114 | 3.7µs | 19.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_PARALLEL`   |
|  7.9% | 36.0µs |    15 | 2.4µs |  7.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|      % |  Time | Count |  Mean |   Max | Parent                           |
| -----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 100.0% | 0.3ms |     5 | 0.1ms | 0.1ms | `FullEvacuator::RawEvacuatePage` |

##### `Parallel scavenge started`

|      % |  Time | Count |  Mean |   Max | Parent                                    |
| -----: | ----: | ----: | ----: | ----: | ----------------------------------------- |
| 100.0% | 0.3ms |   348 | 0.8µs | 5.0µs | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |

##### `fs.sync.lstat`

|     % |   Time | Count |  Mean |   Max | Parent          |
| ----: | -----: | ----: | ----: | ----: | --------------- |
| 31.6% | 18.0µs |     5 | 3.6µs | 5.0µs | `RunMicrotasks` |

##### `ConcurrentMarking::RunMajor Preempted`

|      % |   Time | Count |  Mean |   Max | Parent                        |
| -----: | -----: | ----: | ----: | ----: | ----------------------------- |
| 100.0% | 22.0µs |     8 | 2.8µs | 6.0µs | `V8.GC_MC_BACKGROUND_MARKING` |

#### Children

Child spans with the largest contribution to each span's total time.

##### `RunMicrotasks`

|     % |    Time |  Count |   Mean |   Max | Child                        |
| ----: | ------: | -----: | -----: | ----: | ---------------------------- |
| 12.6% | 684.0ms |    348 |  2.0ms | 8.6ms | `MinorGC`                    |
|  1.6% |  85.9ms |  2,717 | 31.6µs | 8.5ms | `V8.StackGuard`              |
|  1.0% |  52.8ms |  1,122 | 47.1µs | 6.3ms | `fs.sync.read`               |
|  0.9% |  48.6ms |  6,918 |  7.0µs | 0.3ms | `V8.BytecodeBudgetInterrupt` |
|  0.6% |  30.6ms | 10,057 |  3.0µs | 0.1ms | `fs.sync.stat`               |

##### `MinorGC`

|     % |    Time | Count |  Mean |    Max | Child                        |
| ----: | ------: | ----: | ----: | -----: | ---------------------------- |
| 97.2% | 664.7ms |   348 | 1.9ms |  8.6ms | `V8.GCScavenger`             |
|  0.1% |   0.8ms |   348 | 2.2µs | 11.0µs | `V8.GC_HEAP_PROLOGUE`        |
|  0.1% |   0.6ms |   348 | 1.7µs | 12.0µs | `V8.GC_HEAP_EPILOGUE`        |
| <0.1% |   0.3ms |   348 | 0.9µs |  8.0µs | `V8.GC_HEAP_DUMP_STATISTICS` |

##### `V8.GCScavenger`

|     % |    Time | Count |   Mean |    Max | Child                                          |
| ----: | ------: | ----: | -----: | -----: | ---------------------------------------------- |
| 98.8% | 656.6ms |   348 |  1.9ms |  8.6ms | `V8.GC_SCAVENGER`                              |
|  0.8% |   5.2ms |   348 | 14.9µs |  0.5ms | `V8.GC_TIME_TO_SAFEPOINT`                      |
| <0.1% |   0.1ms |     4 | 14.8µs | 31.0µs | `V8.GC_MC_COMPLETE_SWEEPING`                   |
| <0.1% |  22.0µs |    12 |  1.8µs |  7.0µs | `V8.GC_SCAVENGER_COMPLETE_SWEEP_ARRAY_BUFFERS` |
| <0.1% |   1.0µs |     1 |  1.0µs |  1.0µs | `V8.GC_MC_COMPLETE_SWEEP_ARRAY_BUFFERS`        |

##### `V8.GC_SCAVENGER`

|     % |    Time | Count |   Mean |    Max | Child                                     |
| ----: | ------: | ----: | -----: | -----: | ----------------------------------------- |
| 98.4% | 645.9ms |   348 |  1.9ms |  8.5ms | `V8.GC_SCAVENGER_SCAVENGE`                |
|  0.3% |   1.8ms |   348 |  5.1µs | 27.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
|  0.2% |   1.3ms |   348 |  3.7µs |  0.3ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`           |
| <0.1% |  10.0µs |     1 | 10.0µs | 10.0µs | `V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|     % |    Time | Count |   Mean |   Max | Child                                     |
| ----: | ------: | ----: | -----: | ----: | ----------------------------------------- |
| 62.6% | 404.6ms |   348 |  1.2ms | 7.5ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
|  3.4% |  21.9ms |   348 |  0.1ms | 0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
|  1.0% |   6.2ms |   348 | 17.9µs | 0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  0.9% |   5.8ms |   348 | 16.8µs | 0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |
|  0.1% |   0.7ms |   348 |  2.1µs | 0.1ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`    |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|     % |    Time | Count |  Mean |   Max | Child                               |
| ----: | ------: | ----: | ----: | ----: | ----------------------------------- |
| 90.3% | 365.4ms |   379 | 1.0ms | 7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL` |
|  0.1% |   0.3ms |   348 | 0.8µs | 5.0µs | `Parallel scavenge started`         |

##### `V8.GC_MC_BACKGROUND_MARKING`

|     % |   Time | Count |  Mean |   Max | Child                                   |
| ----: | -----: | ----: | ----: | ----: | --------------------------------------- |
| <0.1% | 22.0µs |     8 | 2.8µs | 6.0µs | `ConcurrentMarking::RunMajor Preempted` |

##### `V8.StackGuard`

|     % |   Time | Count |   Mean |   Max | Child                 |
| ----: | -----: | ----: | -----: | ----: | --------------------- |
| 88.5% | 76.1ms | 2,718 | 28.0µs | 8.5ms | `V8.HandleInterrupts` |

##### `V8.HandleInterrupts`

|     % |   Time | Count |   Mean |    Max | Child                             |
| ----: | -----: | ----: | -----: | -----: | --------------------------------- |
| 14.6% | 11.1ms |     2 |  5.6ms |  8.5ms | `V8.GCHandleGCRequest`            |
|  1.7% |  1.3ms |    27 | 49.4µs |  0.2ms | `V8.GCDeoptMarkedAllocationSites` |
|  0.5% |  0.4ms |     1 |  0.4ms |  0.4ms | `V8.GCIncrementalMarkingStart`    |
|  0.1% |  0.1ms |     3 | 17.3µs | 32.0µs | `V8.GC_MC_SWEEP`                  |
| <0.1% |  1.0µs |     1 |  1.0µs |  1.0µs | `V8.GC_TIME_TO_SAFEPOINT`         |

##### `V8.BytecodeBudgetInterrupt`

|    % |   Time | Count |   Mean |    Max | Child                     |
| ---: | -----: | ----: | -----: | -----: | ------------------------- |
| 0.1% | 41.0µs |     1 | 41.0µs | 41.0µs | `V8.GCIncrementalMarking` |

##### `V8.DeoptimizeCode`

|     % |  Time | Count |   Mean |   Max | Child               |
| ----: | ----: | ----: | -----: | ----: | ------------------- |
| 37.1% | 7.4ms |   684 | 10.9µs | 0.1ms | `V8.DeoptimizeCode` |

##### `V8.GCHandleGCRequest`

|     % |   Time | Count |  Mean |   Max | Child                          |
| ----: | -----: | ----: | ----: | ----: | ------------------------------ |
| 99.9% | 11.1ms |     2 | 5.6ms | 8.5ms | `MajorGC`                      |
| <0.1% |  2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_HEAP_EXTERNAL_EPILOGUE` |

##### `MajorGC`

|     % |   Time | Count |  Mean |   Max | Child                        |
| ----: | -----: | ----: | ----: | ----: | ---------------------------- |
| 99.1% | 11.0ms |     2 | 5.5ms | 8.4ms | `V8.GCFinalizeMC`            |
| <0.1% |  4.0µs |     2 | 2.0µs | 2.0µs | `V8.GC_HEAP_EPILOGUE`        |
| <0.1% |  3.0µs |     2 | 1.5µs | 2.0µs | `V8.GC_HEAP_PROLOGUE`        |
| <0.1% |  2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_HEAP_DUMP_STATISTICS` |

##### `V8.GCFinalizeMC`

|     % |   Time | Count |  Mean |   Max | Child                     |
| ----: | -----: | ----: | ----: | ----: | ------------------------- |
| 97.5% | 10.7ms |     2 | 5.4ms | 8.2ms | `V8.GC_MARK_COMPACTOR`    |
|  2.3% |  0.3ms |     2 | 0.1ms | 0.2ms | `V8.GC_TIME_TO_SAFEPOINT` |

##### `V8.GC_MARK_COMPACTOR`

|     % |  Time | Count |   Mean |   Max | Child               |
| ----: | ----: | ----: | -----: | ----: | ------------------- |
| 78.8% | 8.5ms |     4 |  2.1ms | 6.5ms | `V8.GC_MC_EVACUATE` |
|  9.4% | 1.0ms |     2 |  0.5ms | 0.6ms | `V8.GC_MC_CLEAR`    |
|  7.6% | 0.8ms |     2 |  0.4ms | 0.5ms | `V8.GC_MC_MARK`     |
|  1.3% | 0.1ms |     4 | 35.3µs | 0.1ms | `V8.GC_MC_SWEEP`    |
|  1.1% | 0.1ms |     2 |  0.1ms | 0.1ms | `V8.GC_MC_FINISH`   |

##### `Evacuator::EvacuatePage`

|     % |  Time | Count |  Mean |   Max | Child                            |
| ----: | ----: | ----: | ----: | ----: | -------------------------------- |
| 97.8% | 8.6ms |    96 | 0.1ms | 0.2ms | `FullEvacuator::RawEvacuatePage` |

##### `FullEvacuator::RawEvacuatePage`

|     % |  Time | Count |  Mean |   Max | Child                                         |
| ----: | ----: | ----: | ----: | ----: | --------------------------------------------- |
| 94.4% | 8.1ms |    91 | 0.1ms | 0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail` |
|  3.6% | 0.3ms |     5 | 0.1ms | 0.1ms | `LiveObjectVisitor::VisitMarkedObjects`       |

##### `V8.GC_MC_EVACUATE`

|     % |   Time | Count |  Mean |   Max | Child                               |
| ----: | -----: | ----: | ----: | ----: | ----------------------------------- |
| 76.4% |  6.5ms |     2 | 3.2ms | 5.5ms | `V8.GC_MC_EVACUATE_COPY`            |
| 15.4% |  1.3ms |     2 | 0.7ms | 0.9ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS` |
|  6.6% |  0.6ms |     2 | 0.3ms | 0.3ms | `V8.GC_MC_EVACUATE_REBALANCE`       |
|  1.2% |  0.1ms |     2 | 0.1ms | 0.1ms | `V8.GC_MC_EVACUATE_PROLOGUE`        |
|  0.1% | 10.0µs |     2 | 5.0µs | 8.0µs | `V8.GC_MC_EVACUATE_CLEAN_UP`        |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|    % |  Time | Count |   Mean |    Max | Child            |
| ---: | ----: | ----: | -----: | -----: | ---------------- |
| 5.1% | 0.4ms |    18 | 22.9µs | 34.0µs | `V8.GC_MC_SWEEP` |

##### `V8.GCIncrementalMarking`

|     % |  Time | Count |  Mean |   Max | Child                  |
| ----: | ----: | ----: | ----: | ----: | ---------------------- |
| 80.5% | 6.1ms |   667 | 9.2µs | 0.1ms | `V8.GC_MC_INCREMENTAL` |

##### `V8.GC_MC_EVACUATE_COPY`

|     % |  Time | Count |  Mean |   Max | Child                                           |
| ----: | ----: | ----: | ----: | ----: | ----------------------------------------------- |
| 99.1% | 6.4ms |     2 | 3.2ms | 5.5ms | `MarkCompactCollector::EvacuatePagesInParallel` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|     % |  Time | Count |  Mean |   Max | Child                             |
| ----: | ----: | ----: | ----: | ----: | --------------------------------- |
| 98.6% | 6.3ms |     2 | 3.2ms | 5.5ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL` |
| <0.1% | 2.0µs |     2 | 1.0µs | 1.0µs | `PageEvacuationJob started`       |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

|     % |  Time | Count |  Mean |   Max | Child                     |
| ----: | ----: | ----: | ----: | ----: | ------------------------- |
| 99.2% | 6.3ms |    69 | 0.1ms | 0.2ms | `Evacuator::EvacuatePage` |

##### `V8.GC_MC_INCREMENTAL`

|     % |  Time | Count |  Mean |    Max | Child                                   |
| ----: | ----: | ----: | ----: | -----: | --------------------------------------- |
| 12.7% | 0.8ms |   667 | 1.2µs | 10.0µs | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING` |
|  8.0% | 0.5ms |   665 | 0.7µs |  2.0µs | `Major concurrent marking rescheduled`  |

##### `V8.GC_MC_BACKGROUND_EVACUATE_COPY`

|     % |  Time | Count |  Mean |   Max | Child                     |
| ----: | ----: | ----: | ----: | ----: | ------------------------- |
| 98.6% | 2.5ms |    27 | 0.1ms | 0.1ms | `Evacuator::EvacuatePage` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|     % |  Time | Count |  Mean |   Max | Child                                  |
| ----: | ----: | ----: | ----: | ----: | -------------------------------------- |
| 15.9% | 0.3ms |   350 | 0.8µs | 2.0µs | `V8.GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS`

|     % |  Time | Count |  Mean |   Max | Child                                              |
| ----: | ----: | ----: | ----: | ----: | -------------------------------------------------- |
| 53.2% | 0.7ms |     2 | 0.3ms | 0.6ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN`     |
| 44.9% | 0.6ms |     2 | 0.3ms | 0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS`   |
|  0.5% | 7.0µs |     2 | 3.5µs | 4.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK`           |
|  0.2% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_CLIENT_HEAPS`   |
|  0.2% | 2.0µs |     2 | 1.0µs | 1.0µs | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_POINTER_TABLES` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|     % |  Time | Count |   Mean |    Max | Child            |
| ----: | ----: | ----: | -----: | -----: | ---------------- |
| 32.5% | 0.1ms |     3 | 33.3µs | 45.0µs | `V8.GC_MC_SWEEP` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`

|     % |   Time | Count |  Mean |   Max | Child                                |
| ----: | -----: | ----: | ----: | ----: | ------------------------------------ |
| 67.9% | 36.0µs |    15 | 2.4µs | 7.0µs | `RememberedSetUpdatingItem::Process` |

#### Longest instances

Instances of each span with the most time.

##### `RunMicrotasks`

|      % |  Time | CPU time | Start | Thread                 |
| -----: | ----: | -------: | ----: | ---------------------- |
| 100.0% | 5.41s |    5.24s | 7.7ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.6% | 4.7ms |    4.6ms | 650.6ms | `PlatformWorkerThread` |
| 0.6% | 4.3ms |    0.1ms | 129.4ms | `PlatformWorkerThread` |
| 0.5% | 4.3ms |    0.9ms | 129.5ms | `PlatformWorkerThread` |
| 0.5% | 3.9ms |    0.1ms | 129.5ms | `PlatformWorkerThread` |
| 0.5% | 3.9ms |    3.7ms |   2.37s | `PlatformWorkerThread` |

##### `MinorGC`

|    % |  Time | CPU time | Start | Thread                 | Attributes                                     |
| ---: | ----: | -------: | ----: | ---------------------- | ---------------------------------------------- |
| 1.3% | 8.6ms |    8.5ms | 2.47s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=5.07 MiB` |
| 1.2% | 7.9ms |    7.8ms | 2.55s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=5.73 MiB` |
| 1.1% | 7.5ms |    7.4ms | 2.51s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=6.81 MiB` |
| 1.1% | 7.2ms |    7.0ms | 2.25s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=4.99 MiB` |
| 1.0% | 7.0ms |    7.0ms | 2.65s | `JavaScriptMainThread` | `cause=allocation failure, reclaimed=7.76 MiB` |

##### `V8.GCScavenger`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.3% | 8.6ms |    8.5ms | 2.47s | `JavaScriptMainThread` |
| 1.2% | 7.9ms |    7.8ms | 2.55s | `JavaScriptMainThread` |
| 1.1% | 7.4ms |    7.4ms | 2.51s | `JavaScriptMainThread` |
| 1.1% | 7.2ms |    7.0ms | 2.25s | `JavaScriptMainThread` |
| 1.0% | 6.9ms |    6.9ms | 2.65s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.3% | 8.6ms |    8.5ms | 2.47s | `JavaScriptMainThread` |
| 1.2% | 7.8ms |    7.8ms | 2.55s | `JavaScriptMainThread` |
| 1.1% | 7.4ms |    7.3ms | 2.51s | `JavaScriptMainThread` |
| 1.1% | 7.2ms |    6.9ms | 2.25s | `JavaScriptMainThread` |
| 1.1% | 6.9ms |    6.9ms | 2.65s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.3% | 8.5ms |    8.4ms | 2.47s | `JavaScriptMainThread` |
| 1.2% | 7.8ms |    7.7ms | 2.55s | `JavaScriptMainThread` |
| 1.1% | 7.3ms |    7.3ms | 2.51s | `JavaScriptMainThread` |
| 1.1% | 7.1ms |    6.9ms | 2.25s | `JavaScriptMainThread` |
| 1.1% | 6.9ms |    6.9ms | 2.65s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_UNPARK`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.7% | 8.6ms |    7.0µs | 2.47s | `PlatformWorkerThread` |
| 1.7% | 8.5ms |   23.0µs | 2.47s | `PlatformWorkerThread` |
| 1.7% | 8.2ms |    8.0µs | 1.36s | `PlatformWorkerThread` |
| 1.5% | 7.4ms |    8.0µs | 2.51s | `PlatformWorkerThread` |
| 1.5% | 7.2ms |   12.0µs | 2.25s | `PlatformWorkerThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.9% | 7.5ms |    7.4ms | 2.47s | `JavaScriptMainThread` |
| 1.7% | 7.0ms |    6.9ms | 2.55s | `JavaScriptMainThread` |
| 1.6% | 6.6ms |    6.5ms | 2.51s | `JavaScriptMainThread` |
| 1.6% | 6.6ms |    6.3ms | 2.25s | `JavaScriptMainThread` |
| 1.5% | 6.1ms |    6.1ms | 2.65s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 2.0% | 7.4ms |    7.4ms | 2.47s | `JavaScriptMainThread` |
| 1.9% | 6.9ms |    6.9ms | 2.55s | `JavaScriptMainThread` |
| 1.8% | 6.5ms |    6.5ms | 2.51s | `JavaScriptMainThread` |
| 1.8% | 6.5ms |    6.3ms | 2.25s | `JavaScriptMainThread` |
| 1.7% | 6.0ms |    6.0ms | 2.65s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_SAFEPOINT`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 3.6% | 8.6ms |   12.0µs | 2.47s | `PlatformWorkerThread` |
| 3.6% | 8.5ms |   15.0µs | 1.36s | `PlatformWorkerThread` |
| 3.6% | 8.5ms |   17.0µs | 1.36s | `PlatformWorkerThread` |
| 3.3% | 7.9ms |   12.0µs | 2.55s | `PlatformWorkerThread` |
| 3.3% | 7.9ms |   17.0µs | 2.55s | `PlatformWorkerThread` |

##### `V8.GC_MC_BACKGROUND_MARKING`

|    % |   Time | CPU time | Start | Thread                 |
| ---: | -----: | -------: | ----: | ---------------------- |
| 9.4% | 16.8ms |   15.5ms | 1.30s | `PlatformWorkerThread` |
| 9.4% | 16.8ms |   15.6ms | 1.30s | `PlatformWorkerThread` |
| 9.4% | 16.8ms |   15.3ms | 1.30s | `PlatformWorkerThread` |
| 9.2% | 16.5ms |   15.3ms | 1.30s | `PlatformWorkerThread` |
| 8.7% | 15.6ms |   14.7ms | 1.32s | `PlatformWorkerThread` |

##### `V8.StackGuard`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 9.9% | 8.5ms |    8.2ms |   1.36s | `JavaScriptMainThread` |
| 3.1% | 2.6ms |    2.3ms | 321.2ms | `JavaScriptMainThread` |
| 0.5% | 0.5ms |    0.5ms |   1.30s | `JavaScriptMainThread` |
| 0.3% | 0.3ms |    0.3ms |   2.12s | `JavaScriptMainThread` |
| 0.3% | 0.3ms |    0.2ms |   3.01s | `JavaScriptMainThread` |

##### `V8.HandleInterrupts`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 11.1% | 8.5ms |    8.2ms |   1.36s | `JavaScriptMainThread` |
|  3.4% | 2.6ms |    2.3ms | 321.2ms | `JavaScriptMainThread` |
|  0.6% | 0.5ms |    0.5ms |   1.30s | `JavaScriptMainThread` |
|  0.4% | 0.3ms |    0.3ms |   2.12s | `JavaScriptMainThread` |
|  0.3% | 0.2ms |    0.2ms |   3.82s | `JavaScriptMainThread` |

##### `fs.sync.read`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 11.9% | 6.3ms |    4.9ms |  14.7ms | `JavaScriptMainThread` |
|  1.1% | 0.6ms |    0.3ms | 513.4ms | `JavaScriptMainThread` |
|  0.8% | 0.4ms |    0.2ms | 446.5ms | `JavaScriptMainThread` |
|  0.7% | 0.4ms |    0.1ms | 138.6ms | `JavaScriptMainThread` |
|  0.7% | 0.4ms |   46.0µs | 343.1ms | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterrupt`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.5% | 0.3ms |    0.3ms | 718.9ms | `JavaScriptMainThread` |
| 0.5% | 0.3ms |    0.2ms | 145.8ms | `JavaScriptMainThread` |
| 0.5% | 0.2ms |    0.2ms |   1.06s | `JavaScriptMainThread` |
| 0.4% | 0.2ms |    0.2ms | 231.1ms | `JavaScriptMainThread` |
| 0.4% | 0.2ms |   49.0µs | 170.6ms | `JavaScriptMainThread` |

##### `fs.sync.stat`

|    % |   Time | CPU time |   Start | Thread                 |
| ---: | -----: | -------: | ------: | ---------------------- |
| 0.3% |  0.1ms |    0.1ms | 149.3ms | `JavaScriptMainThread` |
| 0.3% |  0.1ms |    0.1ms | 120.8ms | `JavaScriptMainThread` |
| 0.2% |  0.1ms |    0.1ms |   3.91s | `JavaScriptMainThread` |
| 0.2% |  0.1ms |    0.1ms |   3.90s | `JavaScriptMainThread` |
| 0.2% | 48.0µs |   47.0µs |   2.22s | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_SWEEPING`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 34.4% | 9.4ms |    9.4ms |   1.37s | `PlatformWorkerThread` |
| 33.3% | 9.1ms |    9.1ms |   1.37s | `PlatformWorkerThread` |
| 16.4% | 4.5ms |    4.5ms |   1.37s | `PlatformWorkerThread` |
|  4.1% | 1.1ms |    1.1ms | 323.7ms | `PlatformWorkerThread` |
|  4.0% | 1.1ms |    1.1ms | 323.7ms | `PlatformWorkerThread` |

##### `fs.sync.open`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.3% | 0.3ms |    0.1ms | 138.3ms | `JavaScriptMainThread` |
| 0.5% | 0.1ms |    0.1ms | 340.0ms | `JavaScriptMainThread` |
| 0.5% | 0.1ms |    0.1ms | 151.0ms | `JavaScriptMainThread` |
| 0.3% | 0.1ms |    0.1ms | 315.7ms | `JavaScriptMainThread` |
| 0.3% | 0.1ms |    0.1ms |   2.21s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_ROOTS`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 0.9% | 0.2ms |    0.1ms | 5.17s | `JavaScriptMainThread` |
| 0.8% | 0.2ms |    0.2ms | 4.24s | `JavaScriptMainThread` |
| 0.7% | 0.2ms |    0.2ms | 2.62s | `JavaScriptMainThread` |
| 0.7% | 0.2ms |    0.2ms | 2.65s | `JavaScriptMainThread` |
| 0.7% | 0.2ms |    0.2ms | 2.68s | `JavaScriptMainThread` |

##### `V8.DeoptimizeCode`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 0.4% | 0.1ms |    0.1ms | 3.11s | `JavaScriptMainThread` |
| 0.3% | 0.1ms |    0.1ms | 3.11s | `JavaScriptMainThread` |
| 0.3% | 0.1ms |    0.1ms | 2.14s | `JavaScriptMainThread` |
| 0.3% | 0.1ms |    0.1ms | 3.07s | `JavaScriptMainThread` |
| 0.3% | 0.1ms |    0.1ms | 1.27s | `JavaScriptMainThread` |

##### `V8.GCHandleGCRequest`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 76.4% | 8.5ms |    8.2ms |   1.36s | `JavaScriptMainThread` |
| 23.6% | 2.6ms |    2.3ms | 321.2ms | `JavaScriptMainThread` |

##### `MajorGC`

|     % |  Time | CPU time |   Start | Thread                 | Attributes                                                               |
| ----: | ----: | -------: | ------: | ---------------------- | ------------------------------------------------------------------------ |
| 76.5% | 8.5ms |    8.2ms |   1.36s | `JavaScriptMainThread` | `cause=finalize incremental marking via stack guard, reclaimed=7.68 MiB` |
| 23.5% | 2.6ms |    2.3ms | 321.2ms | `JavaScriptMainThread` | `cause=finalize incremental marking via stack guard, reclaimed=2.43 MiB` |

##### `V8.GCFinalizeMC`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 76.7% | 8.4ms |    8.2ms |   1.36s | `JavaScriptMainThread` |
| 23.3% | 2.6ms |    2.2ms | 321.2ms | `JavaScriptMainThread` |

##### `V8.GC_MARK_COMPACTOR`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 76.5% | 8.2ms |    8.1ms |   1.36s | `JavaScriptMainThread` |
| 23.5% | 2.5ms |    2.2ms | 321.2ms | `JavaScriptMainThread` |

##### `Evacuator::EvacuatePage`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 2.7% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` |
| 2.0% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` |
| 1.9% | 0.2ms |    0.2ms | 1.36s | `JavaScriptMainThread` |
| 1.9% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` |
| 1.8% | 0.2ms |    0.2ms | 1.36s | `JavaScriptMainThread` |

##### `FullEvacuator::RawEvacuatePage`

|    % |  Time | CPU time | Start | Thread                 | Attributes                           |
| ---: | ----: | -------: | ----: | ---------------------- | ------------------------------------ |
| 2.8% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |
| 2.0% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |
| 1.9% | 0.2ms |    0.2ms | 1.36s | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |
| 1.9% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |
| 1.9% | 0.2ms |    0.2ms | 1.36s | `JavaScriptMainThread` | `evacuation_mode=objects-new-to-old` |

##### `V8.GC_MC_EVACUATE`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 77.1% | 6.5ms |    6.5ms |   1.36s | `JavaScriptMainThread` |
| 16.2% | 1.4ms |    1.3ms | 322.0ms | `JavaScriptMainThread` |
|  3.6% | 0.3ms |    0.3ms | 323.3ms | `JavaScriptMainThread` |
|  3.1% | 0.3ms |    0.3ms |   1.37s | `JavaScriptMainThread` |

##### `LiveObjectVisitor::VisitMarkedObjectsNoFail`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 2.8% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` |
| 2.1% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` |
| 2.0% | 0.2ms |    0.2ms | 1.36s | `JavaScriptMainThread` |
| 2.0% | 0.2ms |    0.2ms | 1.37s | `JavaScriptMainThread` |
| 2.0% | 0.2ms |    0.2ms | 1.36s | `JavaScriptMainThread` |

##### `V8.GCIncrementalMarking`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.5% | 0.1ms |    0.1ms | 1.31s | `JavaScriptMainThread` |
| 1.4% | 0.1ms |    0.1ms | 1.32s | `JavaScriptMainThread` |
| 1.2% | 0.1ms |    0.1ms | 1.31s | `JavaScriptMainThread` |
| 1.2% | 0.1ms |    0.1ms | 1.32s | `JavaScriptMainThread` |
| 1.0% | 0.1ms |    0.1ms | 1.33s | `JavaScriptMainThread` |

##### `V8.BytecodeBudgetInterruptWithStackCheck`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 3.6% | 0.3ms |    0.3ms | 145.0ms | `JavaScriptMainThread` |
| 3.6% | 0.2ms |    0.2ms | 722.1ms | `JavaScriptMainThread` |
| 3.2% | 0.2ms |    0.2ms |   1.71s | `JavaScriptMainThread` |
| 2.5% | 0.2ms |    0.1ms |   7.1ms | `JavaScriptMainThread` |
| 2.5% | 0.2ms |    0.2ms | 142.4ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 85.5% | 5.5ms |    5.5ms |   1.36s | `JavaScriptMainThread` |
| 14.5% | 0.9ms |    0.9ms | 322.0ms | `JavaScriptMainThread` |

##### `MarkCompactCollector::EvacuatePagesInParallel`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 85.8% | 5.5ms |    5.5ms |   1.36s | `JavaScriptMainThread` |
| 14.2% | 0.9ms |    0.9ms | 322.0ms | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_COPY_PARALLEL`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 86.3% | 5.5ms |    5.5ms |   1.36s | `JavaScriptMainThread` |
| 13.7% | 0.9ms |    0.8ms | 322.1ms | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.7% | 0.1ms |    0.1ms |   1.42s | `JavaScriptMainThread` |
| 0.9% | 0.1ms |    0.1ms |   3.97s | `JavaScriptMainThread` |
| 0.8% | 0.1ms |    0.1ms | 387.9ms | `JavaScriptMainThread` |
| 0.8% | 0.1ms |    0.1ms |   2.86s | `JavaScriptMainThread` |
| 0.8% | 0.1ms |    0.1ms |   5.17s | `JavaScriptMainThread` |

##### `V8.GC_MC_INCREMENTAL`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 1.8% | 0.1ms |    0.1ms | 1.31s | `JavaScriptMainThread` |
| 1.7% | 0.1ms |    0.1ms | 1.32s | `JavaScriptMainThread` |
| 1.5% | 0.1ms |    0.1ms | 1.31s | `JavaScriptMainThread` |
| 1.5% | 0.1ms |    0.1ms | 1.32s | `JavaScriptMainThread` |
| 1.2% | 0.1ms |    0.1ms | 1.33s | `JavaScriptMainThread` |

##### `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 3.0% | 0.2ms |    0.2ms |   4.16s | `JavaScriptMainThread` |
| 1.9% | 0.1ms |    0.1ms | 802.8ms | `JavaScriptMainThread` |
| 1.9% | 0.1ms |    0.1ms |   2.59s | `JavaScriptMainThread` |
| 1.7% | 0.1ms |    0.1ms |   4.22s | `JavaScriptMainThread` |
| 1.6% | 0.1ms |    0.1ms |   2.49s | `JavaScriptMainThread` |

##### `V8.GC_TIME_TO_SAFEPOINT`

|    % |  Time | CPU time | Start | Thread                 |
| ---: | ----: | -------: | ----: | ---------------------- |
| 9.9% | 0.5ms |   27.0µs | 2.95s | `JavaScriptMainThread` |
| 8.8% | 0.5ms |    9.0µs | 1.18s | `JavaScriptMainThread` |
| 8.7% | 0.5ms |    8.0µs | 3.77s | `JavaScriptMainThread` |
| 5.5% | 0.3ms |   14.0µs |    3s | `JavaScriptMainThread` |
| 5.5% | 0.3ms |    7.0µs | 2.88s | `JavaScriptMainThread` |

##### `fs.sync.realpath`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.8% | 0.1ms |    0.1ms |   3.90s | `JavaScriptMainThread` |
| 1.4% | 0.1ms |    0.1ms |   3.91s | `JavaScriptMainThread` |
| 1.3% | 0.1ms |    0.1ms | 157.8ms | `JavaScriptMainThread` |
| 1.3% | 0.1ms |    0.1ms |   4.06s | `JavaScriptMainThread` |
| 1.1% | 0.1ms |    0.1ms | 160.2ms | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_COPY`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 34.1% | 0.9ms |    0.8ms | 322.1ms | `PlatformWorkerThread` |
| 34.0% | 0.9ms |    0.9ms | 322.1ms | `PlatformWorkerThread` |
| 32.0% | 0.8ms |    0.8ms | 322.1ms | `PlatformWorkerThread` |

##### `fs.sync.close`

|    % |   Time | CPU time |   Start | Thread                 |
| ---: | -----: | -------: | ------: | ---------------------- |
| 1.2% | 30.0µs |   23.0µs |  22.9ms | `JavaScriptMainThread` |
| 0.7% | 18.0µs |   11.0µs | 413.8ms | `JavaScriptMainThread` |
| 0.5% | 12.0µs |    8.0µs | 195.9ms | `JavaScriptMainThread` |
| 0.5% | 12.0µs |   11.0µs |   4.06s | `JavaScriptMainThread` |
| 0.4% | 11.0µs |   11.0µs |   3.91s | `JavaScriptMainThread` |

##### `fs.sync.fstat`

|    % |   Time | CPU time |   Start | Thread                 |
| ---: | -----: | -------: | ------: | ---------------------- |
| 1.0% | 22.0µs |   10.0µs |   2.38s | `JavaScriptMainThread` |
| 0.4% |  9.0µs |    9.0µs | 151.1ms | `JavaScriptMainThread` |
| 0.4% |  8.0µs |    9.0µs |   2.34s | `JavaScriptMainThread` |
| 0.3% |  6.0µs |    5.0µs | 305.9ms | `JavaScriptMainThread` |
| 0.3% |  6.0µs |    5.0µs |   2.23s | `JavaScriptMainThread` |

##### `V8.GC_HEAP_EPILOGUE_SAFEPOINT`

|    % |   Time | CPU time |   Start | Thread                 |
| ---: | -----: | -------: | ------: | ---------------------- |
| 1.5% | 27.0µs |   12.0µs |   3.49s | `JavaScriptMainThread` |
| 1.2% | 22.0µs |   21.0µs | 323.7ms | `JavaScriptMainThread` |
| 1.0% | 18.0µs |   18.0µs |   5.17s | `JavaScriptMainThread` |
| 0.9% | 17.0µs |   16.0µs |   2.07s | `JavaScriptMainThread` |
| 0.9% | 17.0µs |   17.0µs |   4.24s | `JavaScriptMainThread` |

##### `V8.GCDeoptMarkedAllocationSites`

|     % |  Time | CPU time | Start | Thread                 |
| ----: | ----: | -------: | ----: | ---------------------- |
| 11.8% | 0.2ms |    0.2ms | 3.96s | `JavaScriptMainThread` |
|  6.4% | 0.1ms |    0.1ms | 4.26s | `JavaScriptMainThread` |
|  5.4% | 0.1ms |    0.1ms | 2.55s | `JavaScriptMainThread` |
|  5.4% | 0.1ms |    0.1ms | 2.63s | `JavaScriptMainThread` |
|  4.8% | 0.1ms |    0.1ms | 2.29s | `JavaScriptMainThread` |

##### `V8.GC_MC_EVACUATE_UPDATE_POINTERS`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 71.6% | 0.9ms |    0.9ms |   1.37s | `JavaScriptMainThread` |
| 28.4% | 0.4ms |    0.4ms | 323.0ms | `JavaScriptMainThread` |

##### `fs.sync.readdir`

|     % |  Time | CPU time |   Start | Thread                 |
| ----: | ----: | -------: | ------: | ---------------------- |
| 18.6% | 0.2ms |    0.2ms | 158.0ms | `JavaScriptMainThread` |
| 10.5% | 0.1ms |    0.1ms |   3.90s | `JavaScriptMainThread` |
|  6.8% | 0.1ms |    0.1ms | 160.6ms | `JavaScriptMainThread` |
|  5.5% | 0.1ms |    0.1ms |   2.20s | `JavaScriptMainThread` |
|  5.5% | 0.1ms |    0.1ms |   4.02s | `JavaScriptMainThread` |

##### `Major concurrent marking rescheduled`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 0.4% | 2.0µs |    2.0µs | 314.0ms | `JavaScriptMainThread` |
| 0.4% | 2.0µs |    2.0µs | 315.0ms | `JavaScriptMainThread` |
| 0.4% | 2.0µs |    2.0µs |   1.30s | `JavaScriptMainThread` |
| 0.4% | 2.0µs |    1.0µs |   1.31s | `JavaScriptMainThread` |
| 0.4% | 2.0µs |    2.0µs |   1.31s | `JavaScriptMainThread` |

##### `RememberedSetUpdatingItem::Process`

|    % |   Time | CPU time | Start | Thread                 |
| ---: | -----: | -------: | ----: | ---------------------- |
| 4.1% | 19.0µs |   19.0µs | 1.37s | `JavaScriptMainThread` |
| 3.5% | 16.0µs |   17.0µs | 1.37s | `JavaScriptMainThread` |
| 3.3% | 15.0µs |   16.0µs | 1.37s | `JavaScriptMainThread` |
| 3.3% | 15.0µs |   15.0µs | 1.37s | `JavaScriptMainThread` |
| 3.1% | 14.0µs |   15.0µs | 1.37s | `JavaScriptMainThread` |

##### `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`

|     % |   Time | CPU time |   Start | Thread                 |
| ----: | -----: | -------: | ------: | ---------------------- |
| 30.5% |  0.1ms |   46.0µs | 388.0ms | `PlatformWorkerThread` |
|  3.7% | 14.0µs |   13.0µs |   4.07s | `PlatformWorkerThread` |
|  3.4% | 13.0µs |   13.0µs |   2.35s | `PlatformWorkerThread` |
|  3.4% | 13.0µs |   13.0µs |   3.97s | `PlatformWorkerThread` |
|  3.2% | 12.0µs |   11.0µs | 420.4ms | `PlatformWorkerThread` |

##### `LiveObjectVisitor::VisitMarkedObjects`

|     % |  Time | CPU time | Start | Thread                 |
| ----: | ----: | -------: | ----: | ---------------------- |
| 32.8% | 0.1ms |    0.1ms | 1.37s | `JavaScriptMainThread` |
| 26.6% | 0.1ms |    0.1ms | 1.37s | `JavaScriptMainThread` |
| 19.5% | 0.1ms |    0.1ms | 1.37s | `JavaScriptMainThread` |
| 18.5% | 0.1ms |    0.1ms | 1.37s | `JavaScriptMainThread` |
|  2.6% | 8.0µs |    8.0µs | 1.37s | `JavaScriptMainThread` |

##### `Parallel scavenge started`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 1.8% | 5.0µs |    5.0µs |   5.22s | `JavaScriptMainThread` |
| 0.7% | 2.0µs |    2.0µs | 109.6ms | `JavaScriptMainThread` |
| 0.7% | 2.0µs |    2.0µs |   1.60s | `JavaScriptMainThread` |
| 0.7% | 2.0µs |    2.0µs |   2.88s | `JavaScriptMainThread` |
| 0.7% | 2.0µs |    3.0µs |   3.28s | `JavaScriptMainThread` |

##### `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`

|    % |  Time | CPU time |   Start | Thread                 |
| ---: | ----: | -------: | ------: | ---------------------- |
| 5.0% | 5.0µs |    5.0µs |   2.27s | `PlatformWorkerThread` |
| 5.0% | 5.0µs |    5.0µs | 135.6ms | `PlatformWorkerThread` |
| 4.0% | 4.0µs |    4.0µs |   3.97s | `PlatformWorkerThread` |
| 3.0% | 3.0µs |    2.0µs |   2.35s | `PlatformWorkerThread` |
| 3.0% | 3.0µs |    4.0µs |   3.92s | `PlatformWorkerThread` |

##### `fs.sync.lstat`

|     % |  Time | CPU time |  Start | Thread                 |
| ----: | ----: | -------: | -----: | ---------------------- |
| 12.3% | 7.0µs |    8.0µs |  6.0ms | `JavaScriptMainThread` |
|  8.8% | 5.0µs |    5.0µs |  7.3ms | `JavaScriptMainThread` |
|  8.8% | 5.0µs |    5.0µs |  9.1ms | `JavaScriptMainThread` |
|  7.0% | 4.0µs |    4.0µs | 14.6ms | `JavaScriptMainThread` |
|  5.3% | 3.0µs |    3.0µs |  6.0ms | `JavaScriptMainThread` |

##### `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`

|     % |   Time | CPU time |   Start | Thread                 |
| ----: | -----: | -------: | ------: | ---------------------- |
| 56.6% | 30.0µs |   29.0µs | 323.3ms | `PlatformWorkerThread` |
| 43.4% | 23.0µs |   22.0µs | 323.3ms | `PlatformWorkerThread` |

##### `ConcurrentMarking::RunMajor Preempted`

|     % |  Time | CPU time | Start | Thread                 |
| ----: | ----: | -------: | ----: | ---------------------- |
| 27.3% | 6.0µs |    6.0µs | 1.34s | `PlatformWorkerThread` |
| 13.6% | 3.0µs |    4.0µs | 1.32s | `PlatformWorkerThread` |
| 13.6% | 3.0µs |    3.0µs | 1.32s | `PlatformWorkerThread` |
| 13.6% | 3.0µs |    4.0µs | 1.32s | `PlatformWorkerThread` |
|  9.1% | 2.0µs |    1.0µs | 1.34s | `PlatformWorkerThread` |

##### `fs.sync.readlink`

|      % |  Time | CPU time | Start | Thread                 |
| -----: | ----: | -------: | ----: | ---------------------- |
| 100.0% | 6.0µs |    6.0µs | 6.0ms | `JavaScriptMainThread` |

### Self CPU time

Thread spans with the most time on a CPU, excluding child spans.

|     % | CPU time |  Count |   Mean |    Max | Span                                           |
| ----: | -------: | -----: | -----: | -----: | ---------------------------------------------- |
| 81.0% |    4.39s |      1 |  4.39s |  4.39s | `RunMicrotasks`                                |
| 12.7% |  689.1ms |  1,391 |  0.5ms |  4.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
|  6.2% |  337.6ms |    379 |  0.9ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  3.7% |  203.0ms |    348 |  0.6ms |  1.5ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  3.1% |  167.7ms |     30 |  5.6ms | 15.6ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  1.2% |   63.2ms |  2,730 | 23.2µs |  0.3ms | `V8.HandleInterrupts`                          |
|  0.9% |   47.6ms |  6,931 |  6.9µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.6% |   30.4ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`                                 |
|  0.5% |   27.3ms |      7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.4% |   23.5ms |  1,122 | 21.0µs |  0.1ms | `fs.sync.open`                                 |
|  0.4% |   21.9ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.3% |   16.6ms |  1,122 | 14.8µs |  4.9ms | `fs.sync.read`                                 |
|  0.3% |   16.4ms |    348 | 47.1µs |  0.3ms | `MinorGC`                                      |
|  0.2% |   12.5ms |  1,580 |  7.9µs |  0.1ms | `V8.DeoptimizeCode`                            |
|  0.2% |    9.4ms |  2,718 |  3.4µs | 29.0µs | `V8.StackGuard`                                |
|  0.2% |    9.0ms |    348 | 25.9µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  0.1% |    7.6ms |     91 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`  |
|  0.1% |    7.5ms |    348 | 21.5µs |  0.1ms | `V8.GC_SCAVENGER`                              |
|  0.1% |    6.8ms |    434 | 15.6µs |  0.3ms | `V8.BytecodeBudgetInterruptWithStackCheck`     |
|  0.1% |    6.2ms |    348 | 17.9µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % | CPU time | Count |   Mean |    Max | Span                                       |
| ----: | -------: | ----: | -----: | -----: | ------------------------------------------ |
| 81.0% |    4.39s |     1 |  4.39s |  4.39s | `RunMicrotasks`                            |
|  1.2% |   63.2ms | 2,730 | 23.2µs |  0.3ms | `V8.HandleInterrupts`                      |
|  0.9% |   47.6ms | 6,931 |  6.9µs |  0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.2% |    9.4ms | 2,718 |  3.4µs | 29.0µs | `V8.StackGuard`                            |
|  0.1% |    6.8ms |   434 | 15.6µs |  0.3ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % | CPU time | Count |   Mean |    Max | Span                                            |
| ----: | -------: | ----: | -----: | -----: | ----------------------------------------------- |
| 12.7% |  689.1ms | 1,391 |  0.5ms |  4.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  3.1% |  167.7ms |    30 |  5.6ms | 15.6ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.5% |   27.3ms |     7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.1% |    7.6ms |    91 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
| <0.1% |    2.2ms |   195 | 11.1µs | 38.0µs | `V8.GC_BACKGROUND_UNPARK`                       |
| <0.1% |    1.3ms |    27 | 49.6µs |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |    1.2ms |    82 | 15.0µs | 32.0µs | `V8.GC_BACKGROUND_SAFEPOINT`                    |
| <0.1% |    0.5ms |   669 |  0.7µs |  3.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |    0.5ms |   129 |  3.6µs | 19.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |    0.3ms |    42 |  7.3µs | 46.0µs | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |    0.3ms |   348 |  0.8µs |  5.0µs | `Parallel scavenge started`                     |
| <0.1% |    0.2ms |     5 | 41.4µs |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |    0.2ms |    96 |  1.8µs |  6.0µs | `FullEvacuator::RawEvacuatePage`                |
| <0.1% |    0.2ms |    96 |  1.8µs |  9.0µs | `Evacuator::EvacuatePage`                       |
| <0.1% |    0.1ms |    42 |  2.3µs |  5.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |    0.1ms |     2 | 31.0µs | 32.0µs | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |   45.0µs |     3 | 15.0µs | 22.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |   24.0µs |     8 |  3.0µs |  6.0µs | `ConcurrentMarking::RunMajor Preempted`         |
| <0.1% |   18.0µs |     2 |  9.0µs |  9.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |   14.0µs |     2 |  7.0µs | 10.0µs | `V8.GC_BACKGROUND_FULL_ARRAY_BUFFER_SWEEP`      |

##### Garbage collection pause

|     % | CPU time | Count |   Mean |    Max | Span                                             |
| ----: | -------: | ----: | -----: | -----: | ------------------------------------------------ |
|  6.2% |  337.6ms |   379 |  0.9ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`              |
|  3.7% |  203.0ms |   348 |  0.6ms |  1.5ms | `V8.GC_SCAVENGER_SCAVENGE`                       |
|  0.4% |   21.9ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`                 |
|  0.3% |   16.4ms |   348 | 47.1µs |  0.3ms | `MinorGC`                                        |
|  0.2% |    9.0ms |   348 | 25.9µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`        |
|  0.1% |    7.5ms |   348 | 21.5µs |  0.1ms | `V8.GC_SCAVENGER`                                |
|  0.1% |    6.2ms |   348 | 17.9µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`              |
|  0.1% |    5.8ms |   348 | 16.8µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`            |
|  0.1% |    4.7ms |   667 |  7.1µs |  0.1ms | `V8.GC_MC_INCREMENTAL`                           |
|  0.1% |    2.7ms |   348 |  7.9µs | 29.0µs | `V8.GCScavenger`                                 |
| <0.1% |    1.5ms |   350 |  4.4µs | 20.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`                  |
| <0.1% |    1.4ms |   667 |  2.1µs | 12.0µs | `V8.GCIncrementalMarking`                        |
| <0.1% |    1.3ms |   350 |  3.7µs |  0.3ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`                  |
| <0.1% |    1.0ms |   353 |  2.8µs | 27.0µs | `V8.GC_TIME_TO_SAFEPOINT`                        |
| <0.1% |    0.8ms |   350 |  2.2µs | 11.0µs | `V8.GC_HEAP_PROLOGUE`                            |
| <0.1% |    0.8ms |   667 |  1.1µs | 11.0µs | `V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING`          |
| <0.1% |    0.7ms |   348 |  2.1µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS`           |
| <0.1% |    0.7ms |    28 | 25.2µs |  0.1ms | `V8.GC_MC_SWEEP`                                 |
| <0.1% |    0.6ms |     2 |  0.3ms |  0.4ms | `V8.GC_MC_CLEAR_STRING_TABLE`                    |
| <0.1% |    0.6ms |     2 |  0.3ms |  0.3ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS` |

##### I/O

|     % | CPU time |  Count |   Mean |    Max | Span               |
| ----: | -------: | -----: | -----: | -----: | ------------------ |
|  0.6% |   30.4ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`     |
|  0.4% |   23.5ms |  1,122 | 21.0µs |  0.1ms | `fs.sync.open`     |
|  0.3% |   16.6ms |  1,122 | 14.8µs |  4.9ms | `fs.sync.read`     |
|  0.1% |    4.5ms |    210 | 21.2µs |  0.1ms | `fs.sync.realpath` |
| <0.1% |    2.5ms |  1,122 |  2.2µs | 23.0µs | `fs.sync.close`    |
| <0.1% |    2.1ms |  1,121 |  1.9µs | 10.0µs | `fs.sync.fstat`    |
| <0.1% |    1.1ms |     21 |  0.1ms |  0.2ms | `fs.sync.readdir`  |
| <0.1% |    0.1ms |     18 |  3.4µs |  8.0µs | `fs.sync.lstat`    |
| <0.1% |    6.0µs |      1 |  6.0µs |  6.0µs | `fs.sync.readlink` |

### Total CPU time

Thread spans with the most time on a CPU, including child spans.

|     % | CPU time |  Count |   Mean |    Max | Span                                           |
| ----: | -------: | -----: | -----: | -----: | ---------------------------------------------- |
| 96.8% |    5.24s |      1 |  5.24s |  5.24s | `RunMicrotasks`                                |
| 12.7% |  689.1ms |  1,391 |  0.5ms |  4.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL` |
| 11.4% |  618.6ms |    348 |  1.8ms |  8.5ms | `MinorGC`                                      |
| 11.1% |  600.6ms |    348 |  1.7ms |  8.5ms | `V8.GCScavenger`                               |
| 11.0% |  596.8ms |    348 |  1.7ms |  8.5ms | `V8.GC_SCAVENGER`                              |
| 10.8% |  586.2ms |    348 |  1.7ms |  8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                     |
|  6.4% |  346.9ms |    348 |  1.0ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE`      |
|  6.2% |  337.6ms |    379 |  0.9ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`            |
|  3.1% |  167.7ms |     30 |  5.6ms | 15.6ms | `V8.GC_MC_BACKGROUND_MARKING`                  |
|  1.6% |   84.6ms |  2,718 | 31.1µs |  8.2ms | `V8.StackGuard`                                |
|  1.4% |   75.5ms |  2,730 | 27.7µs |  8.2ms | `V8.HandleInterrupts`                          |
|  0.9% |   47.6ms |  6,931 |  6.9µs |  0.3ms | `V8.BytecodeBudgetInterrupt`                   |
|  0.6% |   30.4ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`                                 |
|  0.5% |   27.3ms |      7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                 |
|  0.4% |   23.5ms |  1,122 | 21.0µs |  0.1ms | `fs.sync.open`                                 |
|  0.4% |   21.9ms |    348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`               |
|  0.3% |   16.6ms |  1,122 | 14.8µs |  4.9ms | `fs.sync.read`                                 |
|  0.2% |   12.5ms |  1,580 | 12.6µs |  0.1ms | `V8.DeoptimizeCode`                            |
|  0.2% |   10.5ms |      2 |  5.3ms |  8.2ms | `V8.GCHandleGCRequest`                         |
|  0.2% |   10.5ms |      2 |  5.3ms |  8.2ms | `MajorGC`                                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Script

|     % | CPU time | Count |   Mean |   Max | Span                                       |
| ----: | -------: | ----: | -----: | ----: | ------------------------------------------ |
| 96.8% |    5.24s |     1 |  5.24s | 5.24s | `RunMicrotasks`                            |
|  1.6% |   84.6ms | 2,718 | 31.1µs | 8.2ms | `V8.StackGuard`                            |
|  1.4% |   75.5ms | 2,730 | 27.7µs | 8.2ms | `V8.HandleInterrupts`                      |
|  0.9% |   47.6ms | 6,931 |  6.9µs | 0.3ms | `V8.BytecodeBudgetInterrupt`               |
|  0.1% |    6.8ms |   434 | 15.6µs | 0.3ms | `V8.BytecodeBudgetInterruptWithStackCheck` |

##### Garbage collection

|     % | CPU time | Count |   Mean |    Max | Span                                            |
| ----: | -------: | ----: | -----: | -----: | ----------------------------------------------- |
| 12.7% |  689.1ms | 1,391 |  0.5ms |  4.6ms | `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`  |
|  3.1% |  167.7ms |    30 |  5.6ms | 15.6ms | `V8.GC_MC_BACKGROUND_MARKING`                   |
|  0.5% |   27.3ms |     7 |  3.9ms |  9.4ms | `V8.GC_MC_BACKGROUND_SWEEPING`                  |
|  0.2% |   10.5ms |     2 |  5.3ms |  8.2ms | `V8.GCHandleGCRequest`                          |
|  0.2% |    8.7ms |    96 |  0.1ms |  0.2ms | `Evacuator::EvacuatePage`                       |
|  0.2% |    8.5ms |    96 |  0.1ms |  0.2ms | `FullEvacuator::RawEvacuatePage`                |
|  0.1% |    8.1ms |    91 |  0.1ms |  0.2ms | `LiveObjectVisitor::VisitMarkedObjectsNoFail`   |
|  0.1% |    6.4ms |     2 |  3.2ms |  5.5ms | `MarkCompactCollector::EvacuatePagesInParallel` |
| <0.1% |    2.5ms |     3 |  0.8ms |  0.9ms | `V8.GC_MC_BACKGROUND_EVACUATE_COPY`             |
| <0.1% |    2.2ms |   195 | 11.1µs | 38.0µs | `V8.GC_BACKGROUND_UNPARK`                       |
| <0.1% |    1.3ms |    27 | 49.6µs |  0.2ms | `V8.GCDeoptMarkedAllocationSites`               |
| <0.1% |    1.2ms |    82 | 15.0µs | 32.0µs | `V8.GC_BACKGROUND_SAFEPOINT`                    |
| <0.1% |    0.5ms |   669 |  0.7µs |  3.0µs | `Major concurrent marking rescheduled`          |
| <0.1% |    0.5ms |   129 |  3.6µs | 19.0µs | `RememberedSetUpdatingItem::Process`            |
| <0.1% |    0.3ms |    42 |  7.3µs | 46.0µs | `V8.GC_BACKGROUND_YOUNG_ARRAY_BUFFER_SWEEP`     |
| <0.1% |    0.3ms |     5 |  0.1ms |  0.1ms | `LiveObjectVisitor::VisitMarkedObjects`         |
| <0.1% |    0.3ms |   348 |  0.8µs |  5.0µs | `Parallel scavenge started`                     |
| <0.1% |    0.1ms |    42 |  2.3µs |  5.0µs | `V8.GC_MINOR_MS_BACKGROUND_SWEEPING`            |
| <0.1% |    0.1ms |     2 | 25.5µs | 29.0µs | `V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS`  |
| <0.1% |   24.0µs |     8 |  3.0µs |  6.0µs | `ConcurrentMarking::RunMajor Preempted`         |

##### Garbage collection pause

|     % | CPU time | Count |   Mean |    Max | Span                                      |
| ----: | -------: | ----: | -----: | -----: | ----------------------------------------- |
| 11.4% |  618.6ms |   348 |  1.8ms |  8.5ms | `MinorGC`                                 |
| 11.1% |  600.6ms |   348 |  1.7ms |  8.5ms | `V8.GCScavenger`                          |
| 11.0% |  596.8ms |   348 |  1.7ms |  8.5ms | `V8.GC_SCAVENGER`                         |
| 10.8% |  586.2ms |   348 |  1.7ms |  8.4ms | `V8.GC_SCAVENGER_SCAVENGE`                |
|  6.4% |  346.9ms |   348 |  1.0ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL_PHASE` |
|  6.2% |  337.6ms |   379 |  0.9ms |  7.4ms | `V8.GC_SCAVENGER_SCAVENGE_PARALLEL`       |
|  0.4% |   21.9ms |   348 |  0.1ms |  0.2ms | `V8.GC_SCAVENGER_SCAVENGE_ROOTS`          |
|  0.2% |   10.5ms |     2 |  5.3ms |  8.2ms | `MajorGC`                                 |
|  0.2% |   10.4ms |     2 |  5.2ms |  8.2ms | `V8.GCFinalizeMC`                         |
|  0.2% |   10.4ms |     2 |  5.2ms |  8.1ms | `V8.GC_MARK_COMPACTOR`                    |
|  0.2% |    8.4ms |     4 |  2.1ms |  6.5ms | `V8.GC_MC_EVACUATE`                       |
|  0.1% |    7.4ms |   667 | 11.1µs |  0.1ms | `V8.GCIncrementalMarking`                 |
|  0.1% |    6.4ms |     2 |  3.2ms |  5.5ms | `V8.GC_MC_EVACUATE_COPY`                  |
|  0.1% |    6.3ms |     2 |  3.2ms |  5.5ms | `V8.GC_MC_EVACUATE_COPY_PARALLEL`         |
|  0.1% |    6.2ms |   348 | 17.9µs |  0.1ms | `V8.GC_SCAVENGER_SCAVENGE_FINALIZE`       |
|  0.1% |    6.0ms |   667 |  9.0µs |  0.1ms | `V8.GC_MC_INCREMENTAL`                    |
|  0.1% |    5.8ms |   348 | 16.8µs |  0.2ms | `V8.GC_SCAVENGER_FREE_REMEMBERED_SET`     |
| <0.1% |    1.8ms |   350 |  5.2µs | 21.0µs | `V8.GC_HEAP_EPILOGUE_SAFEPOINT`           |
| <0.1% |    1.3ms |   350 |  3.7µs |  0.3ms | `V8.GC_HEAP_PROLOGUE_SAFEPOINT`           |
| <0.1% |    1.3ms |     2 |  0.6ms |  0.9ms | `V8.GC_MC_EVACUATE_UPDATE_POINTERS`       |

##### I/O

|     % | CPU time |  Count |   Mean |    Max | Span               |
| ----: | -------: | -----: | -----: | -----: | ------------------ |
|  0.6% |   30.4ms | 10,058 |  3.0µs |  0.1ms | `fs.sync.stat`     |
|  0.4% |   23.5ms |  1,122 | 21.0µs |  0.1ms | `fs.sync.open`     |
|  0.3% |   16.6ms |  1,122 | 14.8µs |  4.9ms | `fs.sync.read`     |
|  0.1% |    4.5ms |    210 | 21.2µs |  0.1ms | `fs.sync.realpath` |
| <0.1% |    2.5ms |  1,122 |  2.2µs | 23.0µs | `fs.sync.close`    |
| <0.1% |    2.1ms |  1,121 |  1.9µs | 10.0µs | `fs.sync.fstat`    |
| <0.1% |    1.1ms |     21 |  0.1ms |  0.2ms | `fs.sync.readdir`  |
| <0.1% |    0.1ms |     18 |  3.4µs |  8.0µs | `fs.sync.lstat`    |
| <0.1% |    6.0µs |      1 |  6.0µs |  6.0µs | `fs.sync.readlink` |

## Longest async spans

Spans of operations that stay pending while threads do other work. Async spans overlap one another, so their times can sum to more than the trace's duration.

### Elapsed time

Async spans with the most time elapsed from start to end.

|      Time | Count |    Mean |   Max | Span               |
| --------: | ----: | ------: | ----: | ------------------ |
| 5m 19.30s |    80 |   5.41s | 5.41s | `PROMISE`          |
|     5.41s |    51 | 106.1ms | 5.40s | `PROMISE_CALLBACK` |
|     5.41s |     1 |   5.41s | 5.41s | `PIPEWRAP`         |

#### Parents

Parent spans with the largest contribution to each span's elapsed time.

##### `PROMISE_CALLBACK`

|      % |  Time | Count |    Mean |   Max | Parent    |
| -----: | ----: | ----: | ------: | ----: | --------- |
| 100.0% | 5.41s |    51 | 106.1ms | 5.40s | `PROMISE` |

#### Children

Child spans with the largest contribution to each span's elapsed time.

##### `PROMISE`

|    % |  Time | Count |    Mean |   Max | Child              |
| ---: | ----: | ----: | ------: | ----: | ------------------ |
| 1.7% | 5.41s |    51 | 106.1ms | 5.40s | `PROMISE_CALLBACK` |

#### Longest instances

Instances of each span with the most time.

##### `PROMISE`

|    % |  Time | Start |
| ---: | ----: | ----: |
| 1.7% | 5.41s | 6.5ms |
| 1.7% | 5.41s | 7.6ms |
| 1.7% | 5.41s | 7.7ms |
| 1.7% | 5.41s | 7.7ms |
| 1.7% | 5.41s | 8.7ms |

##### `PROMISE_CALLBACK`

|     % |  Time |  Start |
| ----: | ----: | -----: |
| 99.9% | 5.40s | 13.5ms |
|  0.1% | 2.9ms |  9.5ms |
| <0.1% | 1.1ms |  7.7ms |
| <0.1% | 0.5ms | 12.4ms |
| <0.1% | 0.4ms |  8.8ms |

##### `PIPEWRAP`

|      % |  Time |  Start |
| -----: | ----: | -----: |
| 100.0% | 5.41s | 11.9ms |

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

Gauges with the most readings. Means are weighted by how long each level lasted.

| Gauge                         | Readings |                 Min |    Mean |              Max |    First |    Last | Trend                  |
| ----------------------------- | -------: | ------------------: | ------: | ---------------: | -------: | ------: | ---------------------- |
| `Heap used before collection` |      350 | 17.2 MiB at 111.6ms | 396 MiB | 751 MiB at 5.41s | 17.4 MiB | 751 MiB | `▁▂▂▃▃▃▃▄▄▅▅▅▅▆▆▇▇███` |
| `Heap used after collection`  |      350 | 16.9 MiB at 111.3ms | 385 MiB | 736 MiB at 5.41s | 16.9 MiB | 736 MiB | `▁▂▂▂▃▃▃▃▄▅▅▅▅▆▆▇▇███` |

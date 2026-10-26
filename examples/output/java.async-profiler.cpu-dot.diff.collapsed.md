# Sampling profile diff

Collected 4,878 → 4,725 samples (-153 samples, -3.1%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Ours              |   -8.5% |  -245 | 58.8% → 55.5% | 2,867 → 2,622 |
| Native            |  +15.6% |  +185 | 24.4% → 29.1% | 1,189 → 1,374 |
| Standard library  |  -10.0% |   -70 | 14.4% → 13.4% |     701 → 631 |
| JIT               |  -24.2% |   -15 |   1.3% → 1.0% |       62 → 47 |
| Compiler          |  -14.0% |    -8 |   1.2% → 1.0% |       57 → 49 |
| Unknown           | +100.0% |    +1 |         <0.1% |         1 → 2 |
| Garbage collector | removed |    -1 |  <0.1% → 0.0% |         1 → 0 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 4,626 → 4,475 samples (94.8% → 94.7%) run at java.util.concurrent.ForkJoinWorkerThread
│   └── 4,626 → 4,475 samples (94.8% → 94.7%) runWorker at java.util.concurrent.ForkJoinPool
│       ├── … 4,348 → 4,105 samples (89.1% → 86.9%) doExec at java.util.concurrent.ForkJoinTask
│       │   ├── … 4,302 → 4,059 samples (88.2% → 85.9%) exec at java.util.concurrent.RecursiveTask
│       │   │   └── 4,299 → 4,058 samples (88.1% → 85.9%) compute at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   │       ├── 1,856 → 1,726 samples (38.0% → 36.5%) computeDirectly at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   ├── … 1,381 → 1,239 samples (28.3% → 26.2%, self 8.6% → 11.0%) findNearestCentroid at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   │   ├── 912 → 655 samples (18.7% → 13.9%, self 18.5% → 13.4%) distance
│       │   │       │   │   └── 50 → 66 samples (1.0% → 1.4%) 6 more callees, led by (0.8% → 1.2%) get at java.util.ArrayList
│       │   │       │   └── … 475 → 486 samples (9.7% → 10.3%, self 2.1% → 2.7%) collectClusters at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │       ├── 173 → 161 samples (3.5% → 3.4%, self 3.1% → 2.8%) computeIfAbsent at java.util.HashMap
│       │   │       │       │   └── 22 → 24 samples (0.5%) hash
│       │   │       │       ├── 134 → 150 samples (2.7% → 3.2%, self 1.5% → 1.2%) add at java.util.ArrayList
│       │   │       │       │   └── … 63 → 94 samples (1.3% → 2.0%, self 0.4% → 1.1%) grow at java.util.ArrayList
│       │   │       │       │       └── 42 → 41 samples (0.9%) 4 more callees, led by (0.3% → 0.4%) zero_blocks
│       │   │       │       └── 67 → 47 samples (1.4% → 1.0%) 3 more callees, led by (1.4% → 1.0%) get at java.util.ArrayList
│       │   │       ├── 1,632 → 1,461 samples (33.5% → 30.9%) computeDirectly at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │   └── … 1,632 → 1,461 samples (33.5% → 30.9%, self 9.8% → 9.5%) vectorSum at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │       ├── 1,068 → 950 samples (21.9% → 20.1%, self 19.5% → 18.5%) accumulate
│       │   │       │       │   └── 115 → 77 samples (2.4% → 1.6%) doubleValue at java.lang.Double
│       │   │       │       └── 87 → 58 samples (1.8% → 1.2%) get at java.util.ArrayList
│       │   │       │           └── 87 → 55 samples (1.8% → 1.2%, self 3.3% → 2.9% globally) elementData
│       │   │       ├── … 307 → 338 samples (6.3% → 7.2%) merge at java.util.HashMap
│       │   │       │   ├── 207 → 253 samples (4.2% → 5.4%) apply at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda
│       │   │       │   │   └── 207 → 253 samples (4.2% → 5.4%) lambda$merge$6 at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │       │   │       ├── 149 → 165 samples (3.1% → 3.5%) addAll at java.util.ArrayList …
│       │   │       │   │       └── … 40 → 65 samples (0.8% → 1.4%, self 3.9% → 4.7% globally) forward_copy_longs
│       │   │       │   ├── 57 → 55 samples (1.2%) arrayof_jint_disjoint_arraycopy …
│       │   │       │   └── 35 → 23 samples (0.7% → 0.5%, self 1.3% → 0.9% globally) zero_blocks
│       │   │       └── 488 → 513 samples (10.0% → 10.9%) 10 more callees, led by (9.6% → 10.2%) join at java.util.concurrent.ForkJoinTask
│       │   └── 43 → 46 samples (0.9% → 1.0%) 2 more callees, led by (0.9%) setDone
│       └── … 257 → 336 samples (5.3% → 7.1%) Parker::park
│           └── 256 → 332 samples (5.2% → 7.0%, self 14.0% → 16.6% globally) __psynch_cvwait
├── … 200 → 198 samples (4.1% → 4.2%) Thread::call_run
│   ├── 106 → 103 samples (2.2%) WorkerThread::run
│   │   ├── 2 → 7 samples (<0.1% → 0.1%) semaphore_wait_trap
│   │   ├── … 0 → 8 samples (0.0% → 0.2%) _platform_memset
│   │   └── 104 → 88 samples (2.1% → 1.9%) 7 more callees, led by (1.4% → 1.2%) G1FullGCMarkTask::work
│   └── 94 → 95 samples (1.9% → 2.0%) 4 more callees, led by (1.6%) JavaThread::thread_main_inner
└── 51 → 52 samples (1.0% → 1.1%) 8 more root frames, led by (0.8% → 1.0%) main at org.renaissance.core.Launcher
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                          | Location                                                               |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +15.4% |  +105 | 14.0% → 16.6% | 681 → 786 | `__psynch_cvwait`                                                                 | `<unknown>`                                                            |
|  +23.6% |   +99 |  8.6% → 11.0% | 419 → 518 | `findNearestCentroid`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +17.4% |   +33 |   3.9% → 4.7% | 190 → 223 | `forward_copy_longs`                                                              | `<unknown>`                                                            |
| +152.4% |   +32 |   0.4% → 1.1% |   21 → 53 | `grow`                                                                            | `java.util.ArrayList`                                                  |
|  +26.7% |   +27 |   2.1% → 2.7% | 101 → 128 | `collectClusters`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +250.0% |   +20 |   0.2% → 0.6% |    8 → 28 | `_platform_memset`                                                                | `<unknown>`                                                            |
| +127.3% |   +14 |   0.2% → 0.5% |   11 → 25 | `__psynch_mutexwait`                                                              | `<unknown>`                                                            |
| +225.0% |    +9 |   0.1% → 0.3% |    4 → 13 | `semaphore_wait_trap`                                                             | `<unknown>`                                                            |
|  +18.6% |    +8 |   0.9% → 1.1% |   43 → 51 | `__psynch_cvsignal`                                                               | `<unknown>`                                                            |
| +150.0% |    +6 |   0.1% → 0.2% |    4 → 10 | `awaitDone`                                                                       | `java.util.concurrent.ForkJoinTask`                                    |
| +500.0% |    +5 |  <0.1% → 0.1% |     1 → 6 | `runWorker`                                                                       | `java.util.concurrent.ForkJoinPool`                                    |
|  +23.5% |    +4 |   0.3% → 0.4% |   17 → 21 | `arrayof_jint_disjoint_arraycopy`                                                 | `<unknown>`                                                            |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `<unknown>`                                                            |
| +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `Parker::park`                                                                    | `<unknown>`                                                            |
| +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`                                                            |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `putVal`                                                                          | `java.util.HashMap`                                                    |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `vtable stub`                                                                     | `<unknown>`                                                            |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `accept`                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `signalWork`                                                                      | `java.util.concurrent.ForkJoinPool`                                    |
|   +9.1% |    +2 |          0.5% |   22 → 24 | `hash`                                                                            | `java.util.HashMap`                                                    |

##### Ours

| Change | Delta |            % |   Samples | Function                 | Location                                                               |
| -----: | ----: | -----------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
| +23.6% |   +99 | 8.6% → 11.0% | 419 → 518 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +26.7% |   +27 |  2.1% → 2.7% | 101 → 128 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +2 | 0.0% → <0.1% |     0 → 2 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90` |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `lambda$generateData$3`  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `boxed`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `getVmStartNanos`        | `org.renaissance.harness.RenaissanceSuite$`                            |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `forkThreshold`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                          | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ----------- |
|  +15.4% |  +105 | 14.0% → 16.6% | 681 → 786 | `__psynch_cvwait`                                                                 | `<unknown>` |
|  +17.4% |   +33 |   3.9% → 4.7% | 190 → 223 | `forward_copy_longs`                                                              | `<unknown>` |
| +250.0% |   +20 |   0.2% → 0.6% |    8 → 28 | `_platform_memset`                                                                | `<unknown>` |
| +127.3% |   +14 |   0.2% → 0.5% |   11 → 25 | `__psynch_mutexwait`                                                              | `<unknown>` |
| +225.0% |    +9 |   0.1% → 0.3% |    4 → 13 | `semaphore_wait_trap`                                                             | `<unknown>` |
|  +18.6% |    +8 |   0.9% → 1.1% |   43 → 51 | `__psynch_cvsignal`                                                               | `<unknown>` |
|  +23.5% |    +4 |   0.3% → 0.4% |   17 → 21 | `arrayof_jint_disjoint_arraycopy`                                                 | `<unknown>` |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `<unknown>` |
| +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `Parker::park`                                                                    | `<unknown>` |
| +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `LinkResolver::resolve_method`                                                    | `<unknown>` |
|  +28.6% |    +2 |   0.1% → 0.2% |     7 → 9 | `G1RegionMarkStatsCache::add_live_words`                                          | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `semaphore_signal_trap`                                                           | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `pthread_mutex_trylock`                                                           | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `_platform_memmove`                                                               | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `__gettimeofday`                                                                  | `<unknown>` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `G1FullGCMarker::follow_marking_stacks`                                           | `<unknown>` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `G1FullGCMarker::complete_marking`                                                | `<unknown>` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `Unsafe_Park`                                                                     | `<unknown>` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `MemAllocator::allocate`                                                          | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function           | Location                                        |
| ------: | ----: | -----------: | ------: | ------------------ | ----------------------------------------------- |
| +152.4% |   +32 |  0.4% → 1.1% | 21 → 53 | `grow`             | `java.util.ArrayList`                           |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`             |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `runWorker`        | `java.util.concurrent.ForkJoinPool`             |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `putVal`           | `java.util.HashMap`                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `signalWork`       | `java.util.concurrent.ForkJoinPool`             |
|   +9.1% |    +2 |         0.5% | 22 → 24 | `hash`             | `java.util.HashMap`                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `casSlotToNull`    | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `<init>`           | `java.util.stream.AbstractPipeline`             |
|  +33.3% |    +1 |         0.1% |   3 → 4 | `scan`             | `java.util.concurrent.ForkJoinPool`             |
|  +14.3% |    +1 |  0.1% → 0.2% |   7 → 8 | `forEach`          | `java.util.HashMap`                             |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `get`              | `java.util.ArrayList`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`           | `java.util.ArrayList`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invoke`           | `java.lang.invoke.LambdaForm$MH`                |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `push`             | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `resize`           | `java.util.HashMap`                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `read`             | `java.util.jar.Manifest`                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `length`           | `java.lang.String`                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`           | `jdk.internal.org.objectweb.asm.ByteVector`     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`           | `java.util.stream.IntPipeline$1`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `forEachRemaining` | `java.util.Spliterators$DoubleArraySpliterator` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|    new |    +3 | 0.0% → 0.1% |   0 → 3 | `vtable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                         | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | ----------- |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseChaitin::build_ifg_physical`               | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Type::cmp`                                      | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseIdealLoop::build_loop_late`                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::xform`                                 | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block`      | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciMethodData::load_data`                        | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::analyze`                              | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseChaitin::post_allocate_copy_removal`       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeAryPtr::TypeAryPtr`                         | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::Dominators`                     | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IfNode::Ideal_common`                           | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ValueMap::kill_memory`                          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::build_intervals`                    | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RegMask::is_UP`                                 | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CallNode::Ideal`                                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::unique_ctrl_out_or_null`                  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `URShiftLNode::Opcode`                           | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseMacroExpand::generate_unchecked_arraycopy` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CallDynamicJavaNode::Opcode`                    | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ValueStack::pin_stack_for_linear_scan`          | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                        | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -29.9% |  -269 | 18.5% → 13.4% | 901 → 632 | `distance`                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.4% |   -80 | 19.5% → 18.5% | 953 → 873 | `accumulate`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.5% |   -26 |   9.8% → 9.5% | 477 → 451 | `vectorSum`                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -20.8% |   -26 |   2.6% → 2.1% |  125 → 99 | `doubleValue`                                                                                   | `java.lang.Double`                                         |
|  -13.8% |   -22 |   3.3% → 2.9% | 160 → 138 | `elementData`                                                                                   | `java.util.ArrayList`                                      |
|  -12.1% |   -18 |   3.1% → 2.8% | 149 → 131 | `computeIfAbsent`                                                                               | `java.util.HashMap`                                        |
|  -27.9% |   -17 |   1.3% → 0.9% |   61 → 44 | `zero_blocks`                                                                                   | `<unknown>`                                                |
|  -55.2% |   -16 |   0.6% → 0.3% |   29 → 13 | `helpJoin`                                                                                      | `java.util.concurrent.ForkJoinPool`                        |
|  -19.7% |   -14 |   1.5% → 1.2% |   71 → 57 | `add`                                                                                           | `java.util.ArrayList`                                      |
|  -40.6% |   -13 |   0.7% → 0.4% |   32 → 19 | `checkIndex`                                                                                    | `java.util.Objects`                                        |
|  -38.2% |   -13 |   0.7% → 0.4% |   34 → 21 | `G1FullGCMarker::mark_object`                                                                   | `<unknown>`                                                |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `pthread_mutex_lock`                                                                            | `<unknown>`                                                |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `PhaseIdealLoop::build_loop_late_post_work`                                                     | `<unknown>`                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `doExec`                                                                                        | `java.util.concurrent.ForkJoinTask`                        |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `PhaseChaitin::gather_lrg_masks`                                                                | `<unknown>`                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>`                                                |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `<unknown>`                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `getAndClearSlot`                                                                               | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                               | `<unknown>`                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `putMapEntries`                                                                                 | `java.util.HashMap`                                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                   | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -29.9% |  -269 | 18.5% → 13.4% | 901 → 632 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.4% |   -80 | 19.5% → 18.5% | 953 → 873 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.5% |   -26 |   9.8% → 9.5% | 477 → 451 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -33.3% |    -1 |  0.1% → <0.1% |     3 → 2 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------- | ----------- |
|  -38.2% |   -13 |  0.7% → 0.4% | 34 → 21 | `G1FullGCMarker::mark_object`                                                                   | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `pthread_mutex_lock`                                                                            | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                               | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1MarkAndPushClosure>`                    | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `_sigtramp`                                                                                     | `<unknown>` |
|   -8.0% |    -2 |         0.5% | 25 → 23 | `_platform_bzero`                                                                               | `<unknown>` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `inflate_fast`                                                                                  | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1BarrierSetRuntime::write_ref_array_post_entry`                                               | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1FullGCCompactTask::compact_region`                                                           | `<unknown>` |
|  -16.7% |    -1 |         0.1% |   6 → 5 | `G1FullGCMarker::follow_object`                                                                 | `<unknown>` |
|  -14.3% |    -1 |         0.1% |   7 → 6 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `_new_array_Java`                                                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `InstanceKlass::allocate_objArray`                                                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `_kernelrpc_mach_vm_map_trap`                                                                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `as_ValueType`                                                                                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Unsafe_Unpark`                                                                                 | `<unknown>` |
|   -5.9% |    -1 |         0.3% | 17 → 16 | `pthread_jit_write_protect_np`                                                                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ArenaObj::operator new`                                                                        | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function             | Location                                       |
| ------: | ----: | -----------: | --------: | -------------------- | ---------------------------------------------- |
|  -20.8% |   -26 |  2.6% → 2.1% |  125 → 99 | `doubleValue`        | `java.lang.Double`                             |
|  -13.8% |   -22 |  3.3% → 2.9% | 160 → 138 | `elementData`        | `java.util.ArrayList`                          |
|  -12.1% |   -18 |  3.1% → 2.8% | 149 → 131 | `computeIfAbsent`    | `java.util.HashMap`                            |
|  -55.2% |   -16 |  0.6% → 0.3% |   29 → 13 | `helpJoin`           | `java.util.concurrent.ForkJoinPool`            |
|  -19.7% |   -14 |  1.5% → 1.2% |   71 → 57 | `add`                | `java.util.ArrayList`                          |
|  -40.6% |   -13 |  0.7% → 0.4% |   32 → 19 | `checkIndex`         | `java.util.Objects`                            |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `doExec`             | `java.util.concurrent.ForkJoinTask`            |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `getAndClearSlot`    | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `putMapEntries`      | `java.util.HashMap`                            |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `exec`               | `java.util.concurrent.RecursiveTask`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `join`               | `java.util.concurrent.ForkJoinTask`            |
|  -12.5% |    -1 |  0.2% → 0.1% |     8 → 7 | `merge`              | `java.util.HashMap`                            |
|  -10.0% |    -1 |         0.2% |    10 → 9 | `copyOf`             | `java.util.Arrays`                             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `toArray`            | `java.util.ArrayList`                          |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `accept`             | `java.util.stream.IntPipeline$1$1`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `forEachRemaining`   | `java.util.stream.Streams$RangeIntSpliterator` |
|  -20.0% |    -1 |         0.1% |     5 → 4 | `newLength`          | `jdk.internal.util.ArraysSupport`              |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `unpark`             | `jdk.internal.misc.Unsafe`                     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `newInvokeSpecial`   | `java.lang.invoke.DirectMethodHandle$Holder`   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder`             |

##### JIT

|  Change | Delta |            % | Samples | Function      | Location    |
| ------: | ----: | -----------: | ------: | ------------- | ----------- |
|  -27.9% |   -17 |  1.3% → 0.9% | 61 → 44 | `zero_blocks` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `itable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::add_users_to_worklist`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciObjectFactory::create_new_metadata`      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GraphKit::null_check_common`               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::bias_color`                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node_Array::insert`                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeOopPtr::is_known_instance`             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IndexSet::IndexSet`                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CompilationPolicy::is_mature`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseLive::compute`                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::disconnect_useless_nodes`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node`                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::select`                          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RelocIterator::advance_over_prefix`        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MulNode::Value`                            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `compU_reg_immIAddSubNode::rule`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::merge_multidefs`             | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                  | Location    |
| -----: | ----: | ------------: | --------: | ----------------------- | ----------- |
| +16.6% |  +110 | 97.4% → 98.3% | 663 → 773 | `Parker::park`          | `<unknown>` |
| -27.8% |    -5 |   2.6% → 1.7% |   18 → 13 | `PlatformMonitor::wait` | `<unknown>` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
| +23.6% |   +99 | 100.0% | 419 → 518 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| +16.8% |   +26 | 81.6% → 81.2% | 155 → 181 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| +20.0% |    +7 | 18.4% → 18.8% |   35 → 42 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `grow` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller | Location              |
| ------: | ----: | ------------: | ------: | ------ | --------------------- |
| +240.0% |   +36 | 71.4% → 96.2% | 15 → 51 | `grow` | `java.util.ArrayList` |
|  -66.7% |    -4 |  28.6% → 3.8% |   6 → 2 | `add`  | `java.util.ArrayList` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
| +26.7% |   +27 | 100.0% | 101 → 128 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| +114.3% |    +8 | 87.5% → 53.6% |  7 → 15 | `MemAllocator::allocate`         | `<unknown>` |
|     new |    +8 |  0.0% → 28.6% |   0 → 8 | `MarkBitMap::do_clear`           | `<unknown>` |
|     new |    +3 |  0.0% → 10.7% |   0 → 3 | `HeapRegionManager::par_iterate` | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `Compile::Compile`               | `<unknown>` |
|     new |    +1 |   0.0% → 3.6% |   0 → 1 | `G1BatchedTask::work`            | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +127.3% |   +14 | 100.0% | 11 → 25 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| +250.0% |    +5 | 50.0% → 53.8% |   2 → 7 | `WorkerThread::run`              | `<unknown>` |
| +400.0% |    +4 | 25.0% → 38.5% |   1 → 5 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `__psynch_cvsignal` (`<unknown>`)

| Change | Delta |      % | Samples | Caller          | Location    |
| -----: | ----: | -----: | ------: | --------------- | ----------- |
| +18.6% |    +8 | 100.0% | 43 → 51 | `Unsafe_Unpark` | `<unknown>` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Caller | Location                            |
| ------: | ----: | -----: | ------: | ------ | ----------------------------------- |
| +150.0% |    +6 | 100.0% |  4 → 10 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller | Location                                    |
| ------: | ----: | -----: | ------: | ------ | ------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location              |
| ------: | ----: | ------------: | ------: | -------- | --------------------- |
| +140.0% |    +7 | 29.4% → 57.1% |  5 → 12 | `copyOf` | `java.util.Arrays`    |
|  -80.0% |    -4 |  29.4% → 4.8% |   5 → 1 | `merge`  | `java.util.HashMap`   |
|  +14.3% |    +1 | 41.2% → 38.1% |   7 → 8 | `grow`   | `java.util.ArrayList` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                              | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------- | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `<unknown>` |

##### `Parker::park` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller        | Location                   |
| ------: | ----: | -------------: | ------: | ------------- | -------------------------- |
| +400.0% |    +4 | 50.0% → 100.0% |   1 → 5 | `Unsafe_Park` | `<unknown>`                |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `park`        | `jdk.internal.misc.Unsafe` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller   | Location              |
| ------: | ----: | -----: | ------: | -------- | --------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `addAll` | `java.util.ArrayList` |

##### `putVal` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller          | Location            |
| -----: | ----: | ------------: | ------: | --------------- | ------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `putMapEntries` | `java.util.HashMap` |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90`)

| Change | Delta |             % | Samples | Caller    | Location            |
| -----: | ----: | ------------: | ------: | --------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `forEach` | `java.util.HashMap` |

##### `signalWork` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller | Location                                      |
| -----: | ----: | ------------: | ------: | ------ | --------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `push` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `hash` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location            |
| -----: | ----: | -----: | ------: | ----------------- | ------------------- |
|  +9.1% |    +2 | 100.0% | 22 → 24 | `computeIfAbsent` | `java.util.HashMap` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller | Location                             |
| -----: | ----: | ------------: | ------: | ------ | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller            | Location                                               |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller  | Location                                            |
| -----: | ----: | -----: | ------: | ------- | --------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller    | Location                                               |
| -----: | ----: | -----: | ------: | --------- | ------------------------------------------------------ |
| +50.0% |    +1 | 100.0% |   2 → 3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `boxed` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                   | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------ | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `getVmStartNanos` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller          | Location                                    |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller          | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forkThreshold` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `LinkResolver::resolve_method` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                  | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LinkResolver::linktime_resolve_virtual_method_or_null` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Bytecode_invoke::static_target`                        | `<unknown>` |

##### `G1RegionMarkStatsCache::add_live_words` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------- |
| +28.6% |    +2 | 100.0% |   7 → 9 | `G1FullGCMarker::mark_object` | `<unknown>` |

##### `semaphore_signal_trap` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `WorkerThreads::run_task` | `<unknown>` |

##### `pthread_mutex_trylock` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                     | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1CollectedHeap::attempt_allocation_slow` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                              | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Node::out_grow`                    | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `SharedRuntime::resolve_sub_helper` | `<unknown>` |

##### `__gettimeofday` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                  | Location    |
| -----: | ----: | -----------: | ------: | ----------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Parker::park`          | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PlatformMonitor::wait` | `<unknown>` |

##### `G1FullGCMarker::follow_marking_stacks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1FullGCMarkTask::work` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

| Change | Delta |             % | Samples | Caller | Location                   |
| -----: | ----: | ------------: | ------: | ------ | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `park` | `jdk.internal.misc.Unsafe` |

##### `MemAllocator::allocate` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                          | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `CollectedHeap::array_allocate` | `<unknown>` |

##### `casSlotToNull` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller | Location                            |
| -----: | ----: | ------------: | ------: | ------ | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `<init>` (`java.util.stream.AbstractPipeline`)

| Change | Delta |            % | Samples | Caller   | Location                             |
| -----: | ----: | -----------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>` | `java.util.stream.DoublePipeline`    |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>` | `java.util.stream.ReferencePipeline` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `forEach` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `get` (`java.util.ArrayList`)

| Change | Delta |              % | Samples | Caller                | Location                                                   |
| -----: | ----: | -------------: | ------: | --------------------- | ---------------------------------------------------------- |
|    new |    +2 |   0.0% → 66.7% |   0 → 2 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -50.0% |    -1 | 100.0% → 33.3% |   2 → 1 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller   | Location                                               |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % | Samples | Caller               | Location                           |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `push` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller | Location                            |
| -----: | ----: | -----: | ------: | ------ | ----------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `fork` | `java.util.concurrent.ForkJoinTask` |

##### `resize` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller            | Location            |
| -----: | ----: | -----------: | ------: | ----------------- | ------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `computeIfAbsent` | `java.util.HashMap` |

##### `read` (`java.util.jar.Manifest`)

| Change | Delta |             % | Samples | Caller   | Location                 |
| -----: | ----: | ------------: | ------: | -------- | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>` | `java.util.jar.Manifest` |

##### `length` (`java.lang.String`)

| Change | Delta |             % | Samples | Caller   | Location                          |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `append` | `java.lang.AbstractStringBuilder` |

##### `<init>` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change | Delta |             % | Samples | Caller   | Location                                          |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `create` | `jdk.internal.org.objectweb.asm.AnnotationWriter` |

##### `<init>` (`java.util.stream.IntPipeline$1`)

| Change | Delta |             % | Samples | Caller     | Location                       |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `mapToObj` | `java.util.stream.IntPipeline` |

##### `forEachRemaining` (`java.util.Spliterators$DoubleArraySpliterator`)

| Change | Delta |             % | Samples | Caller             | Location                         |
| -----: | ----: | ------------: | ------: | ------------------ | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `forEachRemaining` | `java.util.Spliterator$OfDouble` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Type::cmp` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                       | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `NodeHash::hash_find_insert` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Dict::Insert`               | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                               | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

| Change | Delta |             % | Samples | Caller           | Location    |
| -----: | ----: | ------------: | ------: | ---------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Matcher::match` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `ciMethodData::load_data` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `PhaseCCP::analyze` (`<unknown>`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::PhaseCCP` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `TypeAryPtr::TypeAryPtr` (`<unknown>`)

| Change | Delta |             % | Samples | Caller             | Location    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `TypeAryPtr::make` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IfNode::Ideal_common` (`<unknown>`)

| Change | Delta |             % | Samples | Caller          | Location    |
| -----: | ----: | ------------: | ------: | --------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `IfNode::Ideal` | `<unknown>` |

##### `ValueMap::kill_memory` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                       | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `RegMask::is_UP` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::raise_pressure` | `<unknown>` |

##### `CallNode::Ideal` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphKit::set_output_for_allocation` | `<unknown>` |

##### `Node::unique_ctrl_out_or_null` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ProjNode::is_uncommon_trap_proj` | `<unknown>` |

##### `URShiftLNode::Opcode` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                              | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::disconnect_useless_nodes` | `<unknown>` |

##### `PhaseMacroExpand::generate_unchecked_arraycopy` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseMacroExpand::generate_arraycopy` | `<unknown>` |

##### `CallDynamicJavaNode::Opcode` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::add_users_to_worklist` | `<unknown>` |

##### `ValueStack::pin_stack_for_linear_scan` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `IR::compute_use_counts` | `<unknown>` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                | Location                                                   |
| -----: | ----: | -----: | --------: | --------------------- | ---------------------------------------------------------- |
| -29.9% |  -269 | 100.0% | 901 → 632 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller      | Location                                                  |
| -----: | ----: | -----: | --------: | ----------- | --------------------------------------------------------- |
|  -8.4% |   -80 | 100.0% | 953 → 873 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                  |
| -----: | ----: | -----: | --------: | ----------------- | --------------------------------------------------------- |
|  -5.5% |   -26 | 100.0% | 477 → 451 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `doubleValue` (`java.lang.Double`)

|  Change | Delta |             % |  Samples | Caller       | Location                                                   |
| ------: | ----: | ------------: | -------: | ------------ | ---------------------------------------------------------- |
|  -33.0% |   -38 | 92.0% → 77.8% | 115 → 77 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +120.0% |   +12 |  8.0% → 22.2% |  10 → 22 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller | Location              |
| -----: | ----: | -----: | --------: | ------ | --------------------- |
| -13.8% |   -22 | 100.0% | 160 → 138 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
| -12.1% |   -18 | 100.0% | 149 → 131 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------------------------- |
| -34.3% |   -12 | 57.4% → 52.3% | 35 → 23 | `merge`               | `java.util.HashMap`                                        |
| -66.7% |    -4 |   9.8% → 4.5% |   6 → 2 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -66.7% |    -2 |   4.9% → 2.3% |   3 → 1 | `copyOf`              | `java.util.Arrays`                                         |
|  +5.9% |    +1 | 27.9% → 40.9% | 17 → 18 | `grow`                | `java.util.ArrayList`                                      |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| -55.2% |   -16 | 100.0% | 29 → 13 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `add` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller            | Location                                                   |
| -----: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------------- |
| -18.8% |   -13 | 97.2% → 98.2% | 69 → 56 | `add`             | `java.util.ArrayList`                                      |
| -50.0% |    -1 |   2.8% → 1.8% |   2 → 1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `checkIndex` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller | Location              |
| -----: | ----: | -----: | ------: | ------ | --------------------- |
| -40.6% |   -13 | 100.0% | 32 → 19 | `get`  | `java.util.ArrayList` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -30.8% |    -8 | 76.5% → 85.7% | 26 → 18 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
| removed |    -4 |  11.8% → 0.0% |   4 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `G1MarkAndPushClosure::do_oop`                                                                       | `<unknown>` |
|  -33.3% |    -1 |   8.8% → 9.5% |   3 → 2 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `G1FullGCMarker::complete_marking`                                                                   | `<unknown>` |

##### `pthread_mutex_lock` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `_pthread_cond_wait`                  | `<unknown>` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `Mutex::lock_without_safepoint_check` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                               | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Caller             | Location                                      |
| ------: | ----: | -----------: | ------: | ------------------ | --------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                          | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `G1AdjustRegionClosure::do_heap_region`                         | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `G1AdjustRegionClosure::do_heap_region` | `<unknown>` |

##### `getAndClearSlot` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller             | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------ | --------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `putMapEntries` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller   | Location            |
| ------: | ----: | ------------: | ------: | -------- | ------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `<init>` | `java.util.HashMap` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller           | Location                                                  |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller  | Location                                            |
| ------: | ----: | ------------: | ------: | ------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller    | Location                                               |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller    | Location                                               |
| -----: | ----: | -----: | ------: | --------- | ------------------------------------------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller  | Location                                                                              |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a8011a3940` |

##### `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1MarkAndPushClosure>` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                        | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                        | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------- | ----------- |
|   -4.2% |    -1 | 96.0% → 100.0% | 24 → 23 | `MemAllocator::allocate`      | `<unknown>` |
| removed |    -1 |    4.0% → 0.0% |   1 → 0 | `ciMethod::get_method_blocks` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `G1BarrierSetRuntime::write_ref_array_post_entry` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |

##### `G1FullGCCompactTask::compact_region` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1FullGCCompactTask::work` | `<unknown>` |

##### `G1FullGCMarker::follow_object` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                        | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| -25.0% |    -1 | 66.7% → 60.0% |   4 → 3 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| -14.3% |    -1 | 100.0% |   7 → 6 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `InstanceKlass::allocate_objArray` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller            | Location    |
| ------: | ----: | ------------: | ------: | ----------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_new_array_Java` | `<unknown>` |

##### `_kernelrpc_mach_vm_map_trap` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller            | Location    |
| ------: | ----: | ------------: | ------: | ----------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_pthread_create` | `<unknown>` |

##### `as_ValueType` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                   |
| ------: | ----: | ------------: | ------: | -------- | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unpark` | `jdk.internal.misc.Unsafe` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                              | Location                   |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------------------- |
|  -80.0% |    -4 | 29.4% → 6.3% |   5 → 1 | `_new_array_Java`                   | `<unknown>`                |
|     new |    +3 | 0.0% → 18.8% |   0 → 3 | `OptoRuntime::new_array_C`          | `<unknown>`                |
| removed |    -1 |  5.9% → 0.0% |   1 → 0 | `park`                              | `jdk.internal.misc.Unsafe` |
| removed |    -1 |  5.9% → 0.0% |   1 → 0 | `Unsafe_AllocateInstance`           | `<unknown>`                |
|     new |    +1 |  0.0% → 6.3% |   0 → 1 | `Deoptimization::fetch_unroll_info` | `<unknown>`                |

##### `ArenaObj::operator new` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::Label_Root` | `<unknown>` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller    | Location                                               |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `merge` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| -12.5% |    -1 | 100.0% |   8 → 7 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller    | Location              |
| ------: | ----: | ------------: | ------: | --------- | --------------------- |
|  -16.7% |    -1 | 60.0% → 55.6% |   6 → 5 | `toArray` | `java.util.ArrayList` |
|  +33.3% |    +1 | 30.0% → 44.4% |   3 → 4 | `grow`    | `java.util.ArrayList` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `copyOf`  | `java.util.Arrays`    |

##### `toArray` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller   | Location              |
| ------: | ----: | ------------: | ------: | -------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `java.util.ArrayList` |

##### `accept` (`java.util.stream.IntPipeline$1$1`)

|  Change | Delta |             % | Samples | Caller             | Location                                       |
| ------: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Caller             | Location                      |
| ------: | ----: | ------------: | ------: | ------------------ | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining` | `java.util.Spliterator$OfInt` |

##### `newLength` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |      % | Samples | Caller | Location              |
| -----: | ----: | -----: | ------: | ------ | --------------------- |
| -20.0% |    -1 | 100.0% |   5 → 4 | `grow` | `java.util.ArrayList` |

##### `unpark` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller   | Location                                 |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unpark` | `java.util.concurrent.locks.LockSupport` |

##### `newInvokeSpecial` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller               | Location                           |
| ------: | ----: | ------------: | ------: | -------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `linkToTargetMethod` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Caller            | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location                |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown` | `java.util.Spliterator` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::PhaseIterGVN` | `<unknown>` |

##### `ciObjectFactory::create_new_metadata` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciObjectFactory::get_metadata` | `<unknown>` |

##### `GraphKit::null_check_common` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphKit::null_check_oop` | `<unknown>` |

##### `PhaseChaitin::bias_color` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Select` | `<unknown>` |

##### `Node_Array::insert` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::insert_proj` | `<unknown>` |

##### `TypeOopPtr::is_known_instance` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MemNode::optimize_simple_memory_chain` | `<unknown>` |

##### `PhaseCFG::global_code_motion` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller              | Location    |
| ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Compile::Code_Gen` | `<unknown>` |

##### `IndexSet::IndexSet` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `<unknown>` |

##### `CompilationPolicy::is_mature` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciMethodData::load_data` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                   | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |

##### `PhaseIterGVN::subsume_node` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old` | `<unknown>` |

##### `PhaseCFG::select` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCFG::schedule_local` | `<unknown>` |

##### `RelocIterator::advance_over_prefix` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CodeBuffer::finalize_oop_references` | `<unknown>` |

##### `MulNode::Value` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old` | `<unknown>` |

##### `compU_reg_immIAddSubNode::rule` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MachNode::rematerialize` | `<unknown>` |

##### `PhaseChaitin::merge_multidefs` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |   Samples | Function                          | Location                                                               |
| -----: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------------------- |
| +17.3% |  +117 | 13.9% → 16.8% | 676 → 793 | `Unsafe_Park`                     | `<unknown>`                                                            |
| +17.1% |  +116 | 13.9% → 16.8% | 679 → 795 | `park`                            | `jdk.internal.misc.Unsafe`                                             |
| +16.9% |  +113 | 13.7% → 16.6% | 670 → 783 | `Parker::park`                    | `<unknown>`                                                            |
| +16.9% |  +113 | 13.7% → 16.6% | 669 → 782 | `park`                            | `java.util.concurrent.locks.LockSupport`                               |
| +15.4% |  +105 | 14.0% → 16.6% | 681 → 786 | `__psynch_cvwait`                 | `<unknown>`                                                            |
| +31.7% |   +86 |   5.6% → 7.6% | 271 → 357 | `awaitWork`                       | `java.util.concurrent.ForkJoinPool`                                    |
| +36.7% |   +47 |   2.6% → 3.7% | 128 → 175 | `toArray`                         | `java.util.ArrayList`                                                  |
| +22.0% |   +47 |   4.4% → 5.5% | 214 → 261 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                    |
| +22.2% |   +46 |   4.2% → 5.4% | 207 → 253 | `lambda$merge$6`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +25.0% |   +41 |   3.4% → 4.3% | 164 → 205 | `copyOf`                          | `java.util.Arrays`                                                     |
| +11.1% |   +35 |   6.5% → 7.4% | 315 → 350 | `forEach`                         | `java.util.HashMap`                                                    |
| +11.0% |   +34 |   6.3% → 7.2% | 308 → 342 | `accept`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90` |
| +10.5% |   +34 |   6.6% → 7.6% | 324 → 358 | `merge`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +10.5% |   +34 |   6.6% → 7.6% | 323 → 357 | `combineResults`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +17.4% |   +33 |   3.9% → 4.7% | 190 → 223 | `forward_copy_longs`              | `<unknown>`                                                            |
| +10.4% |   +32 |   6.3% → 7.2% | 307 → 339 | `merge`                           | `java.util.HashMap`                                                    |
| +10.4% |   +32 |   6.3% → 7.2% | 308 → 340 | `lambda$merge$7`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +55.2% |   +32 |   1.2% → 1.9% |   58 → 90 | `<init>`                          | `java.util.ArrayList`                                                  |
| +17.4% |   +30 |   3.5% → 4.3% | 172 → 202 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| +22.4% |   +22 |   2.0% → 2.5% |  98 → 120 | `grow`                            | `java.util.ArrayList`                                                  |

##### Ours

| Change | Delta |            % |   Samples | Function                    | Location                                                               |
| -----: | ----: | -----------: | --------: | --------------------------- | ---------------------------------------------------------------------- |
| +22.0% |   +47 |  4.4% → 5.5% | 214 → 261 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                    |
| +22.2% |   +46 |  4.2% → 5.4% | 207 → 253 | `lambda$merge$6`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +11.0% |   +34 |  6.3% → 7.2% | 308 → 342 | `accept`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90` |
| +10.5% |   +34 |  6.6% → 7.6% | 324 → 358 | `merge`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +10.5% |   +34 |  6.6% → 7.6% | 323 → 357 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +10.4% |   +32 |  6.3% → 7.2% | 308 → 340 | `lambda$merge$7`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +2.3% |   +11 | 9.7% → 10.3% | 475 → 486 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +66.7% |    +6 |  0.2% → 0.3% |    9 → 15 | `setUpBeforeAll`            | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +35.3% |    +6 |  0.3% → 0.5% |   17 → 23 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                            |
| +35.3% |    +6 |  0.3% → 0.5% |   17 → 23 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111ede0` |
| +31.6% |    +6 |  0.4% → 0.5% |   19 → 25 | `runBenchmarks`             | `org.renaissance.harness.RenaissanceSuite$`                            |
| +18.8% |    +6 |  0.7% → 0.8% |   32 → 38 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
| +17.6% |    +6 |  0.7% → 0.8% |   34 → 40 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
| +15.4% |    +6 |  0.8% → 1.0% |   39 → 45 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
| +15.0% |    +6 |  0.8% → 1.0% |   40 → 46 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
| +15.0% |    +6 |  0.8% → 1.0% |   40 → 46 | `main`                      | `org.renaissance.core.Launcher`                                        |
|    new |    +6 |  0.0% → 0.1% |     0 → 6 | `rowToArray$1`              | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |    +6 |  0.0% → 0.1% |     0 → 6 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |    +6 |  0.0% → 0.1% |     0 → 6 | `apply`                     | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a801126908`   |
|    new |    +6 |  0.0% → 0.1% |     0 → 6 | `lambda$toCsvRows$2`        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`     |

##### Native

|  Change | Delta |             % |   Samples | Function                            | Location    |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ----------- |
|  +17.3% |  +117 | 13.9% → 16.8% | 676 → 793 | `Unsafe_Park`                       | `<unknown>` |
|  +16.9% |  +113 | 13.7% → 16.6% | 670 → 783 | `Parker::park`                      | `<unknown>` |
|  +15.4% |  +105 | 14.0% → 16.6% | 681 → 786 | `__psynch_cvwait`                   | `<unknown>` |
|  +17.4% |   +33 |   3.9% → 4.7% | 190 → 223 | `forward_copy_longs`                | `<unknown>` |
|  +17.4% |   +30 |   3.5% → 4.3% | 172 → 202 | `arrayof_jint_disjoint_arraycopy`   | `<unknown>` |
| +250.0% |   +20 |   0.2% → 0.6% |    8 → 28 | `_platform_memset`                  | `<unknown>` |
|  +34.0% |   +16 |   1.0% → 1.3% |   47 → 63 | `MemAllocator::allocate`            | `<unknown>` |
|  +33.3% |   +16 |   1.0% → 1.4% |   48 → 64 | `OptoRuntime::new_array_C`          | `<unknown>` |
| +127.3% |   +14 |   0.2% → 0.5% |   11 → 25 | `__psynch_mutexwait`                | `<unknown>` |
| +127.3% |   +14 |   0.2% → 0.5% |   11 → 25 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |
|  +25.5% |   +12 |   1.0% → 1.2% |   47 → 59 | `CollectedHeap::array_allocate`     | `<unknown>` |
|  +25.5% |   +12 |   1.0% → 1.2% |   47 → 59 | `InstanceKlass::allocate_objArray`  | `<unknown>` |
|  +16.1% |    +9 |   1.1% → 1.4% |   56 → 65 | `_new_array_Java`                   | `<unknown>` |
| +225.0% |    +9 |   0.1% → 0.3% |    4 → 13 | `semaphore_wait_trap`               | `<unknown>` |
|  +19.0% |    +8 |   0.9% → 1.1% |   42 → 50 | `arrayof_oop_disjoint_arraycopy`    | `<unknown>` |
|  +18.6% |    +8 |   0.9% → 1.1% |   43 → 51 | `__psynch_cvsignal`                 | `<unknown>` |
|  +88.9% |    +8 |   0.2% → 0.4% |    9 → 17 | `HeapRegionManager::par_iterate`    | `<unknown>` |
| +200.0% |    +8 |   0.1% → 0.3% |    4 → 12 | `Parse::do_one_block`               | `<unknown>` |
| +200.0% |    +8 |   0.1% → 0.3% |    4 → 12 | `Parse::do_all_blocks`              | `<unknown>` |
| +200.0% |    +8 |   0.1% → 0.3% |    4 → 12 | `Parse::Parse`                      | `<unknown>` |

##### Standard library

| Change | Delta |             % |   Samples | Function         | Location                                             |
| -----: | ----: | ------------: | --------: | ---------------- | ---------------------------------------------------- |
| +17.1% |  +116 | 13.9% → 16.8% | 679 → 795 | `park`           | `jdk.internal.misc.Unsafe`                           |
| +16.9% |  +113 | 13.7% → 16.6% | 669 → 782 | `park`           | `java.util.concurrent.locks.LockSupport`             |
| +31.7% |   +86 |   5.6% → 7.6% | 271 → 357 | `awaitWork`      | `java.util.concurrent.ForkJoinPool`                  |
| +36.7% |   +47 |   2.6% → 3.7% | 128 → 175 | `toArray`        | `java.util.ArrayList`                                |
| +25.0% |   +41 |   3.4% → 4.3% | 164 → 205 | `copyOf`         | `java.util.Arrays`                                   |
| +11.1% |   +35 |   6.5% → 7.4% | 315 → 350 | `forEach`        | `java.util.HashMap`                                  |
| +10.4% |   +32 |   6.3% → 7.2% | 307 → 339 | `merge`          | `java.util.HashMap`                                  |
| +55.2% |   +32 |   1.2% → 1.9% |   58 → 90 | `<init>`         | `java.util.ArrayList`                                |
| +22.4% |   +22 |   2.0% → 2.5% |  98 → 120 | `grow`           | `java.util.ArrayList`                                |
| +12.7% |   +17 |   2.7% → 3.2% | 134 → 151 | `add`            | `java.util.ArrayList`                                |
| +10.7% |   +16 |   3.1% → 3.5% | 149 → 165 | `addAll`         | `java.util.ArrayList`                                |
| +15.1% |    +8 |   1.1% → 1.3% |   53 → 61 | `unpark`         | `jdk.internal.misc.Unsafe`                           |
| +15.1% |    +8 |   1.1% → 1.3% |   53 → 61 | `unpark`         | `java.util.concurrent.locks.LockSupport`             |
| +20.6% |    +7 |   0.7% → 0.9% |   34 → 41 | `invoke`         | `java.lang.invoke.LambdaForm$MH`                     |
| +20.6% |    +7 |   0.7% → 0.9% |   34 → 41 | `invoke`         | `java.lang.reflect.Method`                           |
| +35.3% |    +6 |   0.3% → 0.5% |   17 → 23 | `apply`          | `scala.runtime.function.JProcedure1`                 |
| +35.3% |    +6 |   0.3% → 0.5% |   17 → 23 | `foreach`        | `scala.collection.immutable.List`                    |
| +17.6% |    +6 |   0.7% → 0.8% |   34 → 40 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |
| +17.1% |    +6 |   0.7% → 0.9% |   35 → 41 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                   |
| +17.6% |    +6 |   0.7% → 0.8% |   34 → 40 | `invokeImpl`     | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|    new |    +3 | 0.0% → 0.1% |   0 → 3 | `vtable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `Compilation::emit_lir`                     | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `CompileBroker::compile_method_base`        | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `CompileBroker::compile_method`             | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `CompilationPolicy::event`                  | `<unknown>` |
| +133.3% |    +4 |         0.1% |   3 → 7 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `LinearScan::do_linear_scan`                | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GraphBuilder::try_inline_full`             | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GraphBuilder::try_inline`                  | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `LinearScan::build_intervals`               | `<unknown>` |
|  +16.7% |    +2 |  0.2% → 0.3% | 12 → 14 | `Compilation::compile_java_method`          | `<unknown>` |
|  +15.4% |    +2 |         0.3% | 13 → 15 | `Compilation::compile_method`               | `<unknown>` |
|  +15.4% |    +2 |         0.3% | 13 → 15 | `Compilation::Compilation`                  | `<unknown>` |
|   +2.9% |    +2 |  1.4% → 1.5% | 69 → 71 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseCCP::analyze`                         | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseOutput::Output`                       | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciEnv::lookup_method`                      | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciEnv::get_method_by_index_impl`           | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCCP::transform`                       | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                 | Location                                                   |
| -----: | ----: | ------------: | ------------: | ------------------------ | ---------------------------------------------------------- |
|  -7.1% |  -283 | 81.9% → 78.6% | 3,997 → 3,714 | `tryRemoveAndExec`       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -6.3% |  -266 | 86.0% → 83.2% | 4,196 → 3,930 | `awaitDone`              | `java.util.concurrent.ForkJoinTask`                        |
|  -6.3% |  -266 | 86.0% → 83.2% | 4,196 → 3,930 | `join`                   | `java.util.concurrent.ForkJoinTask`                        |
| -28.2% |  -257 | 18.7% → 13.9% |     912 → 655 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -5.6% |  -244 | 89.2% → 86.9% | 4,349 → 4,105 | `topLevelExec`           | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -5.6% |  -243 | 89.1% → 86.9% | 4,348 → 4,105 | `doExec`                 | `java.util.concurrent.ForkJoinTask`                        |
|  -5.6% |  -242 | 89.3% → 87.0% | 4,354 → 4,112 | `scan`                   | `java.util.concurrent.ForkJoinPool`                        |
|  -5.6% |  -241 | 88.6% → 86.4% | 4,322 → 4,081 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -5.6% |  -241 | 88.6% → 86.4% | 4,322 → 4,081 | `exec`                   | `java.util.concurrent.RecursiveTask`                       |
| -10.5% |  -171 | 33.5% → 30.9% | 1,632 → 1,461 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -10.5% |  -171 | 33.5% → 30.9% | 1,632 → 1,461 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -3.3% |  -151 | 94.8% → 94.7% | 4,626 → 4,475 | `runWorker`              | `java.util.concurrent.ForkJoinPool`                        |
|  -3.3% |  -151 | 94.8% → 94.7% | 4,626 → 4,475 | `run`                    | `java.util.concurrent.ForkJoinWorkerThread`                |
| -10.2% |  -141 | 28.3% → 26.2% | 1,381 → 1,240 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -7.0% |  -130 | 38.0% → 36.5% | 1,856 → 1,726 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -11.0% |  -118 | 21.9% → 20.1% |   1,068 → 950 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -8.1% |   -86 | 21.7% → 20.6% |   1,059 → 973 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                        |
|  -9.5% |   -73 | 15.7% → 14.6% |     765 → 692 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -9.1% |   -70 | 15.8% → 14.8% |     769 → 699 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -9.1% |   -70 | 15.8% → 14.8% |     769 → 699 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Ours

|  Change | Delta |             % |       Samples | Function                          | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------------- | ---------------------------------------------------------------------- |
|  -28.2% |  -257 | 18.7% → 13.9% |     912 → 655 | `distance`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -5.6% |  -241 | 88.6% → 86.4% | 4,322 → 4,081 | `compute`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -10.5% |  -171 | 33.5% → 30.9% | 1,632 → 1,461 | `vectorSum`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.5% |  -171 | 33.5% → 30.9% | 1,632 → 1,461 | `computeDirectly`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -10.2% |  -141 | 28.3% → 26.2% | 1,381 → 1,240 | `findNearestCentroid`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -7.0% |  -130 | 38.0% → 36.5% | 1,856 → 1,726 | `computeDirectly`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.0% |  -118 | 21.9% → 20.1% |   1,068 → 950 | `accumulate`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -9.5% |   -73 | 15.7% → 14.6% |     765 → 692 | `average`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -9.1% |   -70 | 15.8% → 14.8% |     769 → 699 | `computeClusterAverages`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -9.1% |   -70 | 15.8% → 14.8% |     769 → 699 | `computeDirectly`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -3.4% |   -16 |   9.6% → 9.5% |     467 → 451 | `lambda$run$0`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.4% |   -16 |   9.6% → 9.5% |     467 → 451 | `call`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0` |
| removed |    -5 |   0.1% → 0.0% |         5 → 0 | `run`                             | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `add`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `combineResults`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -40.0% |    -2 |          0.1% |         5 → 3 | `executeOperation`                | `org.renaissance.harness.ExecutionDriver`                              |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `deleteRecursively`               | `org.renaissance.core.DirUtils`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `lambda$createScratchDirectory$1` | `org.renaissance.core.DirUtils`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `run`                             | `org.renaissance.core.DirUtils$$Lambda.0x000000e001003a68`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `OptionDef$superArg$1`            | `scopt.OptionDef`                                                      |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -33.3% |   -18 |  1.1% → 0.8% | 54 → 36 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |
|  -60.0% |   -15 |  0.5% → 0.2% | 25 → 10 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `<unknown>` |
|  -17.1% |   -12 |  1.4% → 1.2% | 70 → 58 | `G1FullGCMarker::complete_marking`                                                                   | `<unknown>` |
|  -17.1% |   -12 |  1.4% → 1.2% | 70 → 58 | `G1FullGCMarkTask::work`                                                                             | `<unknown>` |
|  -26.8% |   -11 |  0.8% → 0.6% | 41 → 30 | `G1FullGCMarker::mark_object`                                                                        | `<unknown>` |
|  -87.5% |    -7 | 0.2% → <0.1% |   8 → 1 | `G1AdjustRegionClosure::do_heap_region`                                                              | `<unknown>` |
|  -87.5% |    -7 | 0.2% → <0.1% |   8 → 1 | `G1FullGCAdjustTask::work`                                                                           | `<unknown>` |
|  -43.8% |    -7 |  0.3% → 0.2% |  16 → 9 | `G1EvacuateRegionsTask::evacuate_live_objects`                                                       | `<unknown>` |
|  -58.3% |    -7 |  0.2% → 0.1% |  12 → 5 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  -75.0% |    -6 | 0.2% → <0.1% |   8 → 2 | `G1ParScanThreadState::steal_and_trim_queue`                                                         | `<unknown>` |
|  -40.0% |    -6 |  0.3% → 0.2% |  15 → 9 | `G1ParEvacuateFollowersClosure::do_void`                                                             | `<unknown>` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                      | `<unknown>` |
|  -62.5% |    -5 |  0.2% → 0.1% |   8 → 3 | `ClassFileParser::fill_instance_klass`                                                               | `<unknown>` |
|  -62.5% |    -5 |  0.2% → 0.1% |   8 → 3 | `ClassFileParser::create_instance_klass`                                                             | `<unknown>` |
|  -41.7% |    -5 |  0.2% → 0.1% |  12 → 7 | `KlassFactory::create_from_stream`                                                                   | `<unknown>` |
|  -50.0% |    -4 |  0.2% → 0.1% |   8 → 4 | `Monitor::wait`                                                                                      | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                    | `<unknown>` |
|  -40.0% |    -4 |  0.2% → 0.1% |  10 → 6 | `G1ParScanThreadState::trim_queue_to_threshold`                                                      | `<unknown>` |
|  -57.1% |    -4 |         0.1% |   7 → 3 | `DefaultMethods::generate_default_methods`                                                           | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `pthread_mutex_lock`                                                                                 | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function           | Location                                            |
| ------: | ----: | ------------: | ------------: | ------------------ | --------------------------------------------------- |
|   -7.1% |  -283 | 81.9% → 78.6% | 3,997 → 3,714 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -6.3% |  -266 | 86.0% → 83.2% | 4,196 → 3,930 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
|   -6.3% |  -266 | 86.0% → 83.2% | 4,196 → 3,930 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
|   -5.6% |  -244 | 89.2% → 86.9% | 4,349 → 4,105 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -5.6% |  -243 | 89.1% → 86.9% | 4,348 → 4,105 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
|   -5.6% |  -242 | 89.3% → 87.0% | 4,354 → 4,112 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
|   -5.6% |  -241 | 88.6% → 86.4% | 4,322 → 4,081 | `exec`             | `java.util.concurrent.RecursiveTask`                |
|   -3.3% |  -151 | 94.8% → 94.7% | 4,626 → 4,475 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
|   -3.3% |  -151 | 94.8% → 94.7% | 4,626 → 4,475 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
|   -8.1% |   -86 | 21.7% → 20.6% |   1,059 → 973 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
|   -5.8% |   -65 | 23.1% → 22.5% | 1,129 → 1,064 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
|  -17.5% |   -34 |   4.0% → 3.4% |     194 → 160 | `get`              | `java.util.ArrayList`                               |
|  -20.8% |   -26 |   2.6% → 2.1% |      125 → 99 | `doubleValue`      | `java.lang.Double`                                  |
|  -13.8% |   -22 |   3.3% → 2.9% |     160 → 138 | `elementData`      | `java.util.ArrayList`                               |
|   -3.4% |   -16 |   9.6% → 9.5% |     467 → 451 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -40.6% |   -13 |   0.7% → 0.4% |       32 → 19 | `checkIndex`       | `java.util.Objects`                                 |
|   -6.9% |   -12 |   3.5% → 3.4% |     173 → 161 | `computeIfAbsent`  | `java.util.HashMap`                                 |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `getAndClearSlot`  | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -33.3% |    -2 |          0.1% |         6 → 4 | `read`             | `java.io.FilterInputStream`                         |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `allocateInstance` | `jdk.internal.misc.Unsafe`                          |

##### JIT

|  Change | Delta |            % | Samples | Function      | Location    |
| ------: | ----: | -----------: | ------: | ------------- | ----------- |
|  -27.9% |   -17 |  1.3% → 0.9% | 61 → 44 | `zero_blocks` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `itable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
|  -24.1% |    -7 |  0.6% → 0.5% | 29 → 22 | `Compile::Code_Gen`                         | `<unknown>` |
|  -30.8% |    -4 |  0.3% → 0.2% |  13 → 9 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  -30.8% |    -4 |  0.3% → 0.2% |  13 → 9 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
|  -30.8% |    -4 |  0.3% → 0.2% |  13 → 9 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
|  -23.5% |    -4 |         0.3% | 17 → 13 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `PhaseCFG::global_code_motion`              | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `CompileQueue::get`                         | `<unknown>` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `PhaseCFG::do_global_code_motion`           | `<unknown>` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
|   -9.5% |    -2 |         0.4% | 21 → 19 | `Compile::Optimize`                         | `<unknown>` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciObjectFactory::create_new_metadata`      | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseLive::compute`                        | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `<unknown>` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `Compile::optimize_loops`                   | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::build_cfg`                       | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::PhaseCFG`                        | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next`              | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Unsafe_Park` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller | Location                   |
| -----: | ----: | -----: | --------: | ------ | -------------------------- |
| +17.3% |  +117 | 100.0% | 676 → 793 | `park` | `jdk.internal.misc.Unsafe` |

##### `park` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |   Samples | Caller      | Location                                 |
| -----: | ----: | ------------: | --------: | ----------- | ---------------------------------------- |
| +16.9% |  +113 | 98.5% → 98.4% | 669 → 782 | `park`      | `java.util.concurrent.locks.LockSupport` |
| +30.0% |    +3 |   1.5% → 1.6% |   10 → 13 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |

##### `Parker::park` (`<unknown>`)

|  Change | Delta |              % |   Samples | Caller        | Location                   |
| ------: | ----: | -------------: | --------: | ------------- | -------------------------- |
|  +17.0% |  +114 | 99.9% → 100.0% | 669 → 783 | `Unsafe_Park` | `<unknown>`                |
| removed |    -1 |    0.1% → 0.0% |     1 → 0 | `park`        | `jdk.internal.misc.Unsafe` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % |   Samples | Caller      | Location                            |
| -----: | ----: | ------------: | --------: | ----------- | ----------------------------------- |
| +31.7% |   +82 | 38.7% → 43.6% | 259 → 341 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |
|  +7.6% |   +31 | 61.3% → 56.4% | 410 → 441 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                  | Location    |
| -----: | ----: | ------------: | --------: | ----------------------- | ----------- |
| +16.6% |  +110 | 97.4% → 98.3% | 663 → 773 | `Parker::park`          | `<unknown>` |
| -27.8% |    -5 |   2.6% → 1.7% |   18 → 13 | `PlatformMonitor::wait` | `<unknown>` |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |   Samples | Caller      | Location                            |
| -----: | ----: | -----: | --------: | ----------- | ----------------------------------- |
| +31.7% |   +86 | 100.0% | 271 → 357 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `toArray` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
| +54.4% |   +31 | 44.5% → 50.3% | 57 → 88 | `<init>` | `java.util.ArrayList` |
| +22.5% |   +16 | 55.5% → 49.7% | 71 → 87 | `addAll` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |             % |   Samples | Caller   | Location                           |
| -----: | ----: | ------------: | --------: | -------- | ---------------------------------- |
| +22.2% |   +46 | 96.7% → 96.9% | 207 → 253 | `merge`  | `java.util.HashMap`                |
| +14.3% |    +1 |   3.3% → 3.1% |     7 → 8 | `accept` | `java.util.stream.IntPipeline$1$1` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller  | Location                                            |
| -----: | ----: | -----: | --------: | ------- | --------------------------------------------------- |
| +22.2% |   +46 | 100.0% | 207 → 253 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % |   Samples | Caller     | Location                                    |
| ------: | ----: | ------------: | --------: | ---------- | ------------------------------------------- |
|  +37.8% |   +48 | 77.4% → 85.4% | 127 → 175 | `toArray`  | `java.util.ArrayList`                       |
|  -14.3% |    -5 | 21.3% → 14.6% |   35 → 30 | `grow`     | `java.util.ArrayList`                       |
|  -75.0% |    -3 |   2.4% → 0.5% |     4 → 1 | `copyOf`   | `java.util.Arrays`                          |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `<init>`   | `java.util.concurrent.CopyOnWriteArrayList` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `getBytes` | `jdk.internal.loader.Resource`              |

##### `forEach` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller  | Location                                    |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------- |
| +11.1% |   +35 | 100.0% | 315 → 350 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90`)

| Change | Delta |      % |   Samples | Caller    | Location            |
| -----: | ----: | -----: | --------: | --------- | ------------------- |
| +11.0% |   +34 | 100.0% | 308 → 342 | `forEach` | `java.util.HashMap` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |     % |   Samples | Caller           | Location                                                   |
| -----: | ----: | ----: | --------: | ---------------- | ---------------------------------------------------------- |
| +10.6% |   +34 | 99.4% | 322 → 356 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller           | Location                                                   |
| -----: | ----: | -----: | --------: | ---------------- | ---------------------------------------------------------- |
| +10.6% |   +34 |  99.7% | 322 → 356 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +10.5% |   +34 | 100.0% | 323 → 357 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| +16.8% |   +26 | 81.6% → 81.2% | 155 → 181 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| +20.0% |    +7 | 18.4% → 18.8% |   35 → 42 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `merge` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------- |
| +10.4% |   +32 | 100.0% | 307 → 339 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| +10.4% |   +32 | 100.0% | 308 → 340 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90` |

##### `<init>` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller           | Location                                               |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------------------------------ |
| +54.4% |   +31 | 98.3% → 97.8% | 57 → 88 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|    new |    +1 |   0.0% → 1.1% |   0 → 1 | `<init>`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |  Samples | Caller   | Location              |
| -----: | ----: | ------------: | -------: | -------- | --------------------- |
| +38.9% |   +37 | 55.2% → 65.3% | 95 → 132 | `copyOf` | `java.util.Arrays`    |
| -25.0% |    -5 |  11.6% → 7.4% |  20 → 15 | `grow`   | `java.util.ArrayList` |
|  -3.5% |    -2 | 33.1% → 27.2% |  57 → 55 | `merge`  | `java.util.HashMap`   |

##### `grow` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
| +61.4% |   +35 | 58.2% → 76.7% | 57 → 92 | `grow`   | `java.util.ArrayList` |
| +49.2% |   +31 | 64.3% → 78.3% | 63 → 94 | `add`    | `java.util.ArrayList` |
| -25.7% |    -9 | 35.7% → 21.7% | 35 → 26 | `addAll` | `java.util.ArrayList` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
|  +2.3% |   +11 | 100.0% | 475 → 486 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `setUpBeforeAll` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller             | Location                                  |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| +66.7% |    +6 | 100.0% |  9 → 15 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller      | Location                                                               |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------- |
| +35.3% |    +6 | 100.0% | 17 → 23 | `applyVoid` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111ede0` |

##### `applyVoid` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111ede0`)

| Change | Delta |      % | Samples | Caller  | Location                             |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------ |
| +35.3% |    +6 | 100.0% | 17 → 23 | `apply` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller | Location                                    |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------- |
| +31.6% |    +6 | 100.0% | 19 → 25 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller | Location                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------ |
| +18.8% |    +6 | 100.0% | 32 → 38 | `main` | `org.renaissance.harness.RenaissanceSuite` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Caller         | Location                                             |
| -----: | ----: | -----: | ------: | -------------- | ---------------------------------------------------- |
| +17.6% |    +6 | 100.0% | 34 → 40 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller               | Location                        |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------- |
| +15.4% |    +6 | 100.0% | 39 → 45 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller | Location                        |
| -----: | ----: | -----: | ------: | ------ | ------------------------------- |
| +15.0% |    +6 | 100.0% | 40 → 46 | `main` | `org.renaissance.core.Launcher` |

##### `rowToArray$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                      | Location                                  |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller  | Location                                                             |
| -----: | ----: | ------------: | ------: | ------- | -------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a801126908` |

##### `apply` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a801126908`)

| Change | Delta |             % | Samples | Caller               | Location                                                           |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------------------------------------------ |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `lambda$toCsvRows$2` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `lambda$toCsvRows$2` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller  | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000a801123bf8` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| +114.3% |    +8 | 87.5% → 53.6% |  7 → 15 | `MemAllocator::allocate`         | `<unknown>` |
|     new |    +8 |  0.0% → 28.6% |   0 → 8 | `MarkBitMap::do_clear`           | `<unknown>` |
|     new |    +3 |  0.0% → 10.7% |   0 → 3 | `HeapRegionManager::par_iterate` | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `Compile::Compile`               | `<unknown>` |
|     new |    +1 |   0.0% → 3.6% |   0 → 1 | `G1BatchedTask::work`            | `<unknown>` |

##### `MemAllocator::allocate` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|  +28.3% |   +13 | 97.9% → 93.7% | 46 → 59 | `CollectedHeap::array_allocate`    | `<unknown>` |
| +300.0% |    +3 |   2.1% → 6.3% |   1 → 4 | `InstanceKlass::allocate_instance` | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

| Change | Delta |      % | Samples | Caller            | Location    |
| -----: | ----: | -----: | ------: | ----------------- | ----------- |
| +33.3% |   +16 | 100.0% | 48 → 64 | `_new_array_Java` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +127.3% |   +14 | 100.0% | 11 → 25 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +140.0% |    +7 | 45.5% → 48.0% |  5 → 12 | `Mutex::lock`                         | `<unknown>` |
|     new |    +4 |  0.0% → 16.0% |   0 → 4 | `ThreadCritical::ThreadCritical`      | `<unknown>` |
| +100.0% |    +1 |   9.1% → 8.0% |   1 → 2 | `_pthread_cond_wait`                  | `<unknown>` |
|  +20.0% |    +1 | 45.5% → 24.0% |   5 → 6 | `Mutex::lock_without_safepoint_check` | `<unknown>` |
|     new |    +1 |   0.0% → 4.0% |   0 → 1 | `Parker::unpark`                      | `<unknown>` |

##### `CollectedHeap::array_allocate` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|  +26.1% |   +12 | 97.9% → 98.3% | 46 → 58 | `InstanceKlass::allocate_objArray` | `<unknown>` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `OptoRuntime::new_array_C`         | `<unknown>` |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `InterpreterRuntime::newarray`     | `<unknown>` |

##### `InstanceKlass::allocate_objArray` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                     | Location    |
| ------: | ----: | -------------: | ------: | -------------------------- | ----------- |
|  +28.3% |   +13 | 97.9% → 100.0% | 46 → 59 | `OptoRuntime::new_array_C` | `<unknown>` |
| removed |    -1 |    2.1% → 0.0% |   1 → 0 | `_new_array_Java`          | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location                                                   |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------------------------------------------------- |
|  +16.7% |    +9 | 96.4% → 96.9% | 54 → 63 | `copyOf`              | `java.util.Arrays`                                         |
|     new |    +2 |   0.0% → 3.1% |   0 → 2 | `resize`              | `java.util.HashMap`                                        |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `semaphore_wait_trap` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| +250.0% |    +5 | 50.0% → 53.8% |   2 → 7 | `WorkerThread::run`              | `<unknown>` |
| +400.0% |    +4 | 25.0% → 38.5% |   1 → 5 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller   | Location              |
| ------: | ----: | -------------: | ------: | -------- | --------------------- |
|  +22.0% |    +9 | 97.6% → 100.0% | 41 → 50 | `addAll` | `java.util.ArrayList` |
| removed |    -1 |    2.4% → 0.0% |   1 → 0 | `copyOf` | `java.util.Arrays`    |

##### `__psynch_cvsignal` (`<unknown>`)

| Change | Delta |      % | Samples | Caller          | Location    |
| -----: | ----: | -----: | ------: | --------------- | ----------- |
| +18.6% |    +8 | 100.0% | 43 → 51 | `Unsafe_Unpark` | `<unknown>` |

##### `HeapRegionManager::par_iterate` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|     new |    +8 |  0.0% → 47.1% |   0 → 8 | `WorkerThread::run`               | `<unknown>` |
|  -87.5% |    -7 |  88.9% → 5.9% |   8 → 1 | `G1FullGCAdjustTask::work`        | `<unknown>` |
| +700.0% |    +7 | 11.1% → 47.1% |   1 → 8 | `G1FullGCResetMetadataTask::work` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                 | Location    |
| ------: | ----: | -----: | ------: | ---------------------- | ----------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `Parse::do_all_blocks` | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller         | Location    |
| ------: | ----: | -----: | ------: | -------------- | ----------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `Parse::Parse` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                     | Location    |
| ------: | ----: | -----: | ------: | -------------------------- | ----------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `ParseGenerator::generate` | `<unknown>` |

##### `add` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -------------: | --------: | ----------------- | ---------------------------------------------------------- |
| +13.6% |   +18 |  98.5% → 99.3% | 132 → 150 | `add`             | `java.util.ArrayList`                                      |
| +11.9% |   +16 | 100.0% → 99.3% | 134 → 150 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |    0.0% → 0.7% |     0 → 1 | `accept`          | `java.util.stream.Collectors$$Lambda.0x000000a80106fdf8`   |

##### `addAll` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------- |
| +10.7% |   +16 | 100.0% | 149 → 165 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `unpark` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller   | Location                                 |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------- |
| +15.1% |    +8 | 100.0% | 53 → 61 | `unpark` | `java.util.concurrent.locks.LockSupport` |

##### `unpark` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller          | Location                            |
| -----: | ----: | ------------: | ------: | --------------- | ----------------------------------- |
| +55.6% |    +5 | 17.0% → 23.0% |  9 → 14 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |
|  +7.3% |    +3 | 77.4% → 72.1% | 41 → 44 | `signalWaiters` | `java.util.concurrent.ForkJoinTask` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |              % | Samples | Caller               | Location                           |
| -----: | ----: | -------------: | ------: | -------------------- | ---------------------------------- |
| +17.6% |    +6 | 100.0% → 97.6% | 34 → 40 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |    0.0% → 2.4% |   0 → 1 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Caller                      | Location                        |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------- |
| +20.6% |    +7 | 100.0% | 34 → 41 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |

##### `apply` (`scala.runtime.function.JProcedure1`)

| Change | Delta |           % | Samples | Caller    | Location                             |
| -----: | ----: | ----------: | ------: | --------- | ------------------------------------ |
| +35.3% |    +6 |      100.0% | 17 → 23 | `apply`   | `scala.runtime.function.JProcedure1` |
| +35.3% |    +6 |      100.0% | 17 → 23 | `foreach` | `scala.collection.immutable.List`    |
|    new |    +1 | 0.0% → 4.3% |   0 → 1 | `foreach` | `scala.collection.IterableOnceOps`   |

##### `foreach` (`scala.collection.immutable.List`)

| Change | Delta |      % | Samples | Caller          | Location                                    |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------------- |
| +35.3% |    +6 | 100.0% | 17 → 23 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000a801004800`)

| Change | Delta |      % | Samples | Caller   | Location                         |
| -----: | ----: | -----: | ------: | -------- | -------------------------------- |
| +17.6% |    +6 | 100.0% | 34 → 40 | `invoke` | `java.lang.invoke.LambdaForm$MH` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller       | Location                                          |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------------------- |
| +17.6% |    +6 | 97.1% → 97.6% | 34 → 40 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| -50.0% |    -1 |   5.7% → 2.4% |   2 → 1 | `invoke`     | `java.lang.invoke.BootstrapMethodInvoker`         |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller   | Location                                          |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------- |
| +17.6% |    +6 | 100.0% | 34 → 40 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `Compilation::emit_lir` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                             | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `Compilation::compile_java_method` | `<unknown>` |

##### `CompileBroker::compile_method_base` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                          | Location    |
| ------: | ----: | -----: | ------: | ------------------------------- | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `CompileBroker::compile_method` | `<unknown>` |

##### `CompileBroker::compile_method` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                        | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | ----------- |
| +400.0% |    +4 |         100.0% |   1 → 5 | `CompileBroker::compile_method`               | `<unknown>` |
| +200.0% |    +2 | 100.0% → 60.0% |   1 → 3 | `CompilationPolicy::event`                    | `<unknown>` |
|     new |    +2 |   0.0% → 40.0% |   0 → 2 | `CompilationPolicy::method_back_branch_event` | `<unknown>` |

##### `CompilationPolicy::event` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                 | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------ | ----------- |
| +500.0% |    +5 | 50.0% → 100.0% |   1 → 6 | `Runtime1::counter_overflow`                           | `<unknown>` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `InterpreterRuntime::frequency_counter_overflow_inner` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                  | Location    |
| ------: | ----: | -----: | ------: | ----------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `Compilation::emit_lir` | `<unknown>` |

##### `GraphBuilder::try_inline_full` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                     | Location    |
| ------: | ----: | -----: | ------: | -------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `GraphBuilder::try_inline` | `<unknown>` |

##### `GraphBuilder::try_inline` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                 | Location    |
| ------: | ----: | -----: | ------: | ---------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `GraphBuilder::invoke` | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------- |
| +16.7% |    +2 | 100.0% | 12 → 14 | `Compilation::compile_method` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| +15.4% |    +2 | 100.0% | 13 → 15 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| +15.4% |    +2 | 100.0% | 13 → 15 | `Compiler::compile_method` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------- | ----------- |
|  +2.9% |    +2 | 100.0% | 69 → 71 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                          | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------- | ----------- |
| +66.7% |    +2 |       100.0% |   3 → 5 | `GraphBuilder::GraphBuilder`    | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `GraphBuilder::try_inline_full` | `<unknown>` |

##### `PhaseCCP::analyze` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller               | Location    |
| ------: | ----: | -----: | ------: | -------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseCCP::PhaseCCP` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller              | Location    |
| ------: | ----: | -----: | ------: | ------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `Compile::Code_Gen` | `<unknown>` |

##### `ciEnv::lookup_method` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciEnv::get_method_by_index_impl` | `<unknown>` |

##### `ciEnv::get_method_by_index_impl` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciBytecodeStream::get_method` | `<unknown>` |

##### `PhaseCCP::transform` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCCP::do_transform` | `<unknown>` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -7.1% |  -283 | 100.0% | 3,997 → 3,714 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller | Location                            |
| -----: | ----: | -----: | ------------: | ------ | ----------------------------------- |
|  -6.3% |  -266 | 100.0% | 4,196 → 3,930 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller    | Location                                               |
| -----: | ----: | -----: | ------------: | --------- | ------------------------------------------------------ |
|  -6.3% |  -266 | 100.0% | 4,196 → 3,930 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                | Location                                                   |
| -----: | ----: | -----: | --------: | --------------------- | ---------------------------------------------------------- |
| -28.2% |  -257 | 100.0% | 912 → 655 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller | Location                            |
| -----: | ----: | -----: | ------------: | ------ | ----------------------------------- |
|  -5.6% |  -244 | 100.0% | 4,349 → 4,105 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller             | Location                                      |
| -----: | ----: | ------------: | ------------: | ------------------ | --------------------------------------------- |
|  -7.1% |  -282 | 91.9% → 90.5% | 3,996 → 3,714 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -5.6% |  -243 |        100.0% | 4,348 → 4,105 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -8.1% |   -86 | 24.4% → 23.7% |   1,059 → 973 | `invoke`           | `java.util.concurrent.ForkJoinTask`           |
|  -5.3% |   -58 | 25.3% → 25.4% | 1,101 → 1,043 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -5.6% |  -242 | 100.0% | 4,354 → 4,112 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller | Location                             |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------ |
|  -5.6% |  -241 | 100.0% | 4,322 → 4,081 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
|  -5.6% |  -241 | 100.0% | 4,322 → 4,081 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                  |
| -----: | ----: | -----: | ------------: | ----------------- | --------------------------------------------------------- |
| -10.5% |  -171 | 100.0% | 1,632 → 1,461 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                  |
| -----: | ----: | -----: | ------------: | ----------------- | --------------------------------------------------------- |
| -10.5% |  -171 | 100.0% | 1,632 → 1,461 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -10.5% |  -171 | 100.0% | 1,632 → 1,461 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller | Location                                    |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------------- |
|  -3.3% |  -151 | 100.0% | 4,626 → 4,475 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Caller            | Location                                                   |
| -----: | ----: | -------------: | ------------: | ----------------- | ---------------------------------------------------------- |
| -10.3% |  -142 | 100.0% → 99.9% | 1,381 → 1,239 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |    0.0% → 0.1% |         0 → 1 | `[break_deopt]`   | `<unknown>`                                                |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Caller            | Location                                                   |
| -----: | ----: | -------------: | ------------: | ----------------- | ---------------------------------------------------------- |
|  -7.1% |  -131 | 100.0% → 99.9% | 1,856 → 1,725 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -7.0% |  -130 |         100.0% | 1,856 → 1,726 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |     Samples | Caller      | Location                                                  |
| -----: | ----: | -----: | ----------: | ----------- | --------------------------------------------------------- |
| -11.0% |  -118 | 100.0% | 1,068 → 950 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller         | Location                                               |
| -----: | ----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
|  -9.5% |   -73 | 72.2% → 71.1% | 765 → 692 | `average`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -3.6% |   -17 | 44.0% → 46.1% | 466 → 449 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                   | Location                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ------------------------------------------------------ |
|  -9.5% |   -73 | 100.0% | 765 → 692 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                               |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------------------ |
|  -9.1% |   -70 | 100.0% | 769 → 699 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                               |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------------------ |
|  -9.1% |   -70 | 100.0% | 769 → 699 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -9.1% |   -70 | 100.0% | 769 → 699 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller | Location                                                               |
| -----: | ----: | -----: | --------: | ------ | ---------------------------------------------------------------------- |
|  -3.4% |   -16 | 100.0% | 467 → 451 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`)

| Change | Delta |      % |   Samples | Caller | Location                                            |
| -----: | ----: | -----: | --------: | ------ | --------------------------------------------------- |
|  -3.4% |   -16 | 100.0% | 467 → 451 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `run` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Caller             | Location                                  |
| ------: | ----: | ------------: | ------: | ------------------ | ----------------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `executeOperation` | `org.renaissance.harness.ExecutionDriver` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller           | Location                                                  |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |            % | Samples | Caller           | Location                                                  |
| ------: | ----: | -----------: | ------: | ---------------- | --------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -75.0% |    -3 |       100.0% |   4 → 1 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `executeOperation` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller             | Location                                  |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `deleteRecursively` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Caller                            | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `deleteRecursively`               | `org.renaissance.core.DirUtils` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `lambda$createScratchDirectory$1` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Caller | Location                                                   |
| ------: | ----: | ------------: | ------: | ------ | ---------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `run`  | `org.renaissance.core.DirUtils$$Lambda.0x000000e001003a68` |

##### `run` (`org.renaissance.core.DirUtils$$Lambda.0x000000e001003a68`)

|  Change | Delta |             % | Samples | Caller    | Location           |
| ------: | ----: | ------------: | ------: | --------- | ------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `runWith` | `java.lang.Thread` |

##### `OptionDef$superArg$1` (`scopt.OptionDef`)

|  Change | Delta |             % | Samples | Caller   | Location          |
| ------: | ----: | ------------: | ------: | -------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `scopt.OptionDef` |

##### `G1FullGCMarker::follow_marking_stacks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -33.3% |   -18 | 100.0% | 54 → 36 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| -60.0% |   -15 | 100.0% | 25 → 10 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -17.1% |   -12 | 100.0% | 70 → 58 | `G1FullGCMarkTask::work` | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -17.1% |   -12 | 100.0% | 70 → 58 | `WorkerThread::run` | `<unknown>` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -15.6% |    -5 | 78.0% → 90.0% | 32 → 27 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
| removed |    -5 |  12.2% → 0.0% |   5 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| removed |    -1 |   2.4% → 0.0% |   1 → 0 | `G1MarkAndPushClosure::do_oop`                                                                       | `<unknown>` |
|  -33.3% |    -1 |   7.3% → 6.7% |   3 → 2 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `G1FullGCMarker::complete_marking`                                                                   | `<unknown>` |

##### `G1AdjustRegionClosure::do_heap_region` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `HeapRegionManager::par_iterate` | `<unknown>` |

##### `G1FullGCAdjustTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `WorkerThread::run` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -43.8% |    -7 | 100.0% |  16 → 9 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -90.9% |   -10 | 91.7% → 20.0% |  11 → 1 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |
| +300.0% |    +3 |  8.3% → 80.0% |   1 → 4 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                   | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ----------- |
| -75.0% |    -6 | 100.0% |   8 → 2 | `G1ParEvacuateFollowersClosure::do_void` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| -40.0% |    -6 | 100.0% |  15 → 9 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `G1AdjustRegionClosure::do_heap_region` | `<unknown>` |

##### `ClassFileParser::fill_instance_klass` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                   | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ----------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `ClassFileParser::create_instance_klass` | `<unknown>` |

##### `ClassFileParser::create_instance_klass` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `KlassFactory::create_from_stream` | `<unknown>` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------- |
|  -33.3% |    -3 | 75.0% → 85.7% |   9 → 6 | `SystemDictionary::resolve_class_from_stream`        | `<unknown>` |
|  -50.0% |    -1 | 16.7% → 14.3% |   2 → 1 | `SystemDictionary::resolve_hidden_class_from_stream` | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `ClassLoader::load_class`                            | `<unknown>` |

##### `Monitor::wait` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------- | ----------- |
|  -71.4% |    -5 | 87.5% → 50.0% |   7 → 2 | `CompileQueue::get`             | `<unknown>` |
| +100.0% |    +1 | 12.5% → 50.0% |   1 → 2 | `VMThread::wait_until_executed` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                       | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| -75.0% |    -6 | 80.0% → 33.3% |   8 → 2 | `G1ParScanThreadState::steal_and_trim_queue` | `<unknown>` |
| +50.0% |    +1 | 20.0% → 50.0% |   2 → 3 | `G1ParEvacuateFollowersClosure::do_void`     | `<unknown>` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `G1ScanHRForRegionClosure::scan_memregion`   | `<unknown>` |

##### `DefaultMethods::generate_default_methods` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `ClassFileParser::fill_instance_klass` | `<unknown>` |

##### `pthread_mutex_lock` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `_pthread_cond_wait`                  | `<unknown>` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `Mutex::lock_without_safepoint_check` | `<unknown>` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -5.8% |   -65 | 100.0% | 1,129 → 1,064 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `get` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------------------------- |
| -33.3% |   -29 | 44.8% → 36.3% | 87 → 58 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -31.8% |   -21 | 34.0% → 28.1% | 66 → 45 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +39.0% |   +16 | 21.1% → 35.6% | 41 → 57 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|  Change | Delta |             % |  Samples | Caller       | Location                                                   |
| ------: | ----: | ------------: | -------: | ------------ | ---------------------------------------------------------- |
|  -33.0% |   -38 | 92.0% → 77.8% | 115 → 77 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +120.0% |   +12 |  8.0% → 22.2% |  10 → 22 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller | Location              |
| -----: | ----: | -----: | --------: | ------ | --------------------- |
| -13.8% |   -22 | 100.0% | 160 → 138 | `get`  | `java.util.ArrayList` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller   | Location                            |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------- |
|  -3.4% |   -16 | 100.0% | 467 → 451 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `checkIndex` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller | Location              |
| -----: | ----: | -----: | ------: | ------ | --------------------- |
| -40.6% |   -13 | 100.0% | 32 → 19 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
|  -6.9% |   -12 | 100.0% | 173 → 161 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `getAndClearSlot` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller             | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------ | --------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `read` (`java.io.FilterInputStream`)

| Change | Delta |      % | Samples | Caller       | Location              |
| -----: | ----: | -----: | ------: | ------------ | --------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `transferTo` | `java.io.InputStream` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller             | Location                              |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `zero_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------------------------- |
| -34.3% |   -12 | 57.4% → 52.3% | 35 → 23 | `merge`               | `java.util.HashMap`                                        |
| -66.7% |    -4 |   9.8% → 4.5% |   6 → 2 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -66.7% |    -2 |   4.9% → 2.3% |   3 → 1 | `copyOf`              | `java.util.Arrays`                                         |
|  +5.9% |    +1 | 27.9% → 40.9% | 17 → 18 | `grow`                | `java.util.ArrayList`                                      |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location                |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown` | `java.util.Spliterator` |

##### `Compile::Code_Gen` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| -24.1% |    -7 | 100.0% | 29 → 22 | `Compile::Compile` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
| -25.0% |    -2 | 61.5% → 66.7% |   8 → 6 | `Compile::Optimize`       | `<unknown>` |
| -40.0% |    -2 | 38.5% → 33.3% |   5 → 3 | `Compile::optimize_loops` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -23.5% |    -4 | 100.0% | 17 → 13 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseCFG::global_code_motion` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                            | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------- | ----------- |
|  -60.0% |    -3 | 83.3% → 100.0% |   5 → 2 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `Compile::Code_Gen`               | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                               | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------ | ----------- |
|  -60.0% |    -3 | 83.3% → 100.0% |   5 → 2 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------- | ----------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
|  -9.5% |    -2 | 100.0% | 21 → 19 | `Compile::Compile` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `ciObjectFactory::create_new_metadata` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciObjectFactory::get_metadata` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciBytecodeStream::get_method` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `Compile::Optimize` | `<unknown>` |

##### `PhaseCFG::build_cfg` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller               | Location    |
| ------: | ----: | ------------: | ------: | -------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::PhaseCFG` | `<unknown>` |

##### `PhaseCFG::PhaseCFG` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller              | Location    |
| ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Compile::Code_Gen` | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Unsafe_Park` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------- | ----------- |
| +17.0% |  +114 | 99.0% → 98.7% | 669 → 783 | `Parker::park`                        | `<unknown>` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `java_lang_Thread::get_thread_status` | `<unknown>` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `JavaFrameAnchor::make_walkable`      | `<unknown>` |

##### `park` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |   Samples | Callee                                                                                                                                                     | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +17.3% |  +117 | 99.6% → 99.7% | 676 → 793 | `Unsafe_Park`                                                                                                                                              | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `pthread_jit_write_protect_np`                                                                                                                             | `<unknown>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `Parker::park`                                                                                                                                             | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `<unknown>` |

##### `Parker::park` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                        | Location    |
| -----: | ----: | ------------: | --------: | ----------------------------- | ----------- |
| +16.6% |  +110 | 99.0% → 98.7% | 663 → 773 | `__psynch_cvwait`             | `<unknown>` |
| -80.0% |    -4 |   0.7% → 0.1% |     5 → 1 | `_pthread_cond_wait`          | `<unknown>` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `SafepointMechanism::process` | `<unknown>` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `pthread_testcancel`          | `<unknown>` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `clock_gettime`               | `<unknown>` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |   Samples | Callee | Location                   |
| -----: | ----: | -----: | --------: | ------ | -------------------------- |
| +16.9% |  +113 | 100.0% | 669 → 782 | `park` | `jdk.internal.misc.Unsafe` |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee      | Location                                 |
| -----: | ----: | ------------: | --------: | ----------- | ---------------------------------------- |
| +31.7% |   +82 | 95.6% → 95.5% | 259 → 341 | `park`      | `java.util.concurrent.locks.LockSupport` |
| +30.0% |    +3 |   3.7% → 3.6% |   10 → 13 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `hasTasks`  | `java.util.concurrent.ForkJoinPool`      |

##### `toArray` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Callee   | Location           |
| -----: | ----: | -------------: | --------: | -------- | ------------------ |
| +37.8% |   +48 | 99.2% → 100.0% | 127 → 175 | `copyOf` | `java.util.Arrays` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |             % |   Samples | Callee                  | Location                                    |
| -----: | ----: | ------------: | --------: | ----------------------- | ------------------------------------------- |
| +22.2% |   +46 | 96.7% → 96.9% | 207 → 253 | `lambda$merge$6`        | `org.renaissance.jdk.concurrent.JavaKMeans` |
| +14.3% |    +1 |   3.3% → 3.1% |     7 → 8 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee   | Location              |
| -----: | ----: | ------------: | --------: | -------- | --------------------- |
| +54.4% |   +31 | 27.5% → 34.8% |   57 → 88 | `<init>` | `java.util.ArrayList` |
| +10.7% |   +16 | 72.0% → 65.2% | 149 → 165 | `addAll` | `java.util.ArrayList` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % |  Samples | Callee                            | Location           |
| ------: | ----: | ------------: | -------: | --------------------------------- | ------------------ |
|  +38.9% |   +37 | 57.9% → 64.4% | 95 → 132 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
|  +16.7% |    +9 | 32.9% → 30.7% |  54 → 63 | `_new_array_Java`                 | `<unknown>`        |
|  -75.0% |    -3 |   2.4% → 0.5% |    4 → 1 | `copyOf`                          | `java.util.Arrays` |
|  -66.7% |    -2 |   1.8% → 0.5% |    3 → 1 | `zero_blocks`                     | `<unknown>`        |
| removed |    -1 |   0.6% → 0.0% |    1 → 0 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>`        |

##### `forEach` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee   | Location                                                               |
| -----: | ----: | ------------: | --------: | -------- | ---------------------------------------------------------------------- |
| +11.0% |   +34 | 97.8% → 97.7% | 308 → 342 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90`)

| Change | Delta |              % |   Samples | Callee           | Location                                    |
| -----: | ----: | -------------: | --------: | ---------------- | ------------------------------------------- |
| +10.4% |   +32 | 100.0% → 99.4% | 308 → 340 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Callee               | Location                           |
| ------: | ----: | ------------: | --------: | -------------------- | ---------------------------------- |
|  +11.1% |   +35 | 97.2% → 97.8% | 315 → 350 | `forEach`            | `java.util.HashMap`                |
| removed |    -2 |   0.6% → 0.0% |     2 → 0 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `_new_instance_Java` | `<unknown>`                        |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |     % |   Samples | Callee           | Location                                                   |
| -----: | ----: | ----: | --------: | ---------------- | ---------------------------------------------------------- |
| +10.6% |   +34 | 99.7% | 322 → 356 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +10.6% |   +34 | 99.7% | 322 → 356 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                            | Location                                            |
| -----: | ----: | ------------: | --------: | --------------------------------- | --------------------------------------------------- |
| +22.2% |   +46 | 67.4% → 74.6% | 207 → 253 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |
| -34.3% |   -12 |  11.4% → 6.8% |   35 → 23 | `zero_blocks`                     | `<unknown>`                                         |
|  -3.5% |    -2 | 18.6% → 16.2% |   57 → 55 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                         |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `resolve_opt_virtual_call`        | `<unknown>`                                         |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |           % |   Samples | Callee          | Location                               |
| ------: | ----: | ----------: | --------: | --------------- | -------------------------------------- |
|  +10.4% |   +32 |       99.7% | 307 → 339 | `merge`         | `java.util.HashMap`                    |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `linkCallSite`  | `java.lang.invoke.MethodHandleNatives` |
|     new |    +1 | 0.0% → 0.3% |     0 → 1 | `SafepointBlob` | `<unknown>`                            |

##### `<init>` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee    | Location              |
| -----: | ----: | ------------: | ------: | --------- | --------------------- |
| +54.4% |   +31 | 98.3% → 97.8% | 57 → 88 | `toArray` | `java.util.ArrayList` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee               | Location    |
| -----: | ----: | ------------: | --------: | -------------------- | ----------- |
| +16.8% |   +26 | 90.1% → 89.6% | 155 → 181 | `forward_copy_longs` | `<unknown>` |

##### `grow` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                            | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------------------- |
| +61.4% |   +35 | 58.2% → 76.7% | 57 → 92 | `grow`                            | `java.util.ArrayList`             |
| -14.3% |    -5 | 35.7% → 25.0% | 35 → 30 | `copyOf`                          | `java.util.Arrays`                |
| -25.0% |    -5 | 20.4% → 12.5% | 20 → 15 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                       |
| -20.0% |    -1 |   5.1% → 3.3% |   5 → 4 | `newLength`                       | `jdk.internal.util.ArraysSupport` |
|  +5.9% |    +1 | 17.3% → 15.0% | 17 → 18 | `zero_blocks`                     | `<unknown>`                       |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee               | Location                           |
| ------: | ----: | ------------: | --------: | -------------------- | ---------------------------------- |
|  -31.8% |   -21 |  13.9% → 9.3% |   66 → 45 | `get`                | `java.util.ArrayList`              |
|  +11.9% |   +16 | 28.2% → 30.9% | 134 → 150 | `add`                | `java.util.ArrayList`              |
|   -6.9% |   -12 | 36.4% → 33.1% | 173 → 161 | `computeIfAbsent`    | `java.util.HashMap`                |
|     new |    +2 |   0.0% → 0.4% |     0 → 2 | `_new_instance_Java` | `<unknown>`                        |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `setUpBeforeAll` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee      | Location                                                           |
| -----: | ----: | -----------: | ------: | ----------- | ------------------------------------------------------------------ |
|    new |    +6 | 0.0% → 40.0% |   0 → 6 | `toCsvRows` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `runBenchmarks$$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Callee             | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------------------------------- |
| +28.6% |    +4 | 82.4% → 78.3% | 14 → 18 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |
| +66.7% |    +2 | 17.6% → 21.7% |   3 → 5 | `create`           | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111ede0`)

| Change | Delta |      % | Samples | Callee                     | Location                                    |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| +35.3% |    +6 | 100.0% | 17 → 23 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                     | Location                                    |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------- |
|  +35.3% |    +6 | 89.5% → 92.0% | 17 → 23 | `foreach`                  | `scala.collection.immutable.List`           |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `linkMethodHandleConstant` | `java.lang.invoke.MethodHandleNatives`      |
| +100.0% |    +1 |   5.3% → 8.0% |   1 → 2 | `getVmStartNanos`          | `org.renaissance.harness.RenaissanceSuite$` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                  | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------- |
|  +31.6% |    +6 | 59.4% → 65.8% | 19 → 25 | `runBenchmarks`         | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   3.1% → 0.0% |   1 → 0 | `<clinit>`              | `scala.util.Try$`                           |
|  +50.0% |    +1 |   6.3% → 7.9% |   2 → 3 | `parse`                 | `org.renaissance.harness.ConfigParser`      |
| removed |    -1 |   3.1% → 0.0% |   1 → 0 | `getMatchingBenchmarks` | `org.renaissance.core.BenchmarkSuite`       |
|     new |    +1 |   0.0% → 2.6% |   0 → 1 | `apply`                 | `scala.util.Try$`                           |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |             % | Samples | Callee | Location                                    |
| -----: | ----: | ------------: | ------: | ------ | ------------------------------------------- |
| +18.8% |    +6 | 94.1% → 95.0% | 32 → 38 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                       | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------- |
| +20.6% |    +7 | 87.2% → 91.1% | 34 → 41 | `invoke`                     | `java.lang.reflect.Method`          |
| -20.0% |    -1 |  12.8% → 8.9% |   5 → 4 | `createClassLoaderForModule` | `org.renaissance.core.ModuleLoader` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                      | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
| +15.4% |    +6 | 97.5% → 97.8% | 39 → 45 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |

##### `main` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee               | Location                        |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------- |
| +15.0% |    +6 | 100.0% | 40 → 46 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `rowToArray$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee                     | Location                               |
| -----: | ----: | -----------: | ------: | -------------------------- | -------------------------------------- |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `<clinit>`                 | `scala.Predef$`                        |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `linkMethodHandleConstant` | `java.lang.invoke.MethodHandleNatives` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `toArray`                  | `scala.collection.AbstractIterable`    |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `loadClass`                | `java.lang.ClassLoader`                |

##### `setUpBeforeAll$$anonfun$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee         | Location                                  |
| -----: | ----: | ------------: | ------: | -------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `rowToArray$1` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a801126908`)

| Change | Delta |             % | Samples | Callee                      | Location                                  |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee  | Location                                                             |
| -----: | ----: | ------------: | ------: | ------- | -------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a801126908` |

##### `MemAllocator::allocate` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| +114.3% |    +8 | 14.9% → 23.8% |  7 → 15 | `_platform_memset`                            | `<unknown>` |
| +125.0% |    +5 |  8.5% → 14.3% |   4 → 9 | `G1CollectedHeap::mem_allocate`               | `<unknown>` |
|  +28.6% |    +2 | 14.9% → 14.3% |   7 → 9 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| +100.0% |    +2 |   4.3% → 6.3% |   2 → 4 | `ObjArrayAllocator::initialize`               | `<unknown>` |
|   -4.2% |    -1 | 51.1% → 36.5% | 24 → 23 | `_platform_bzero`                             | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|  +28.3% |   +13 | 95.8% → 92.2% | 46 → 59 | `InstanceKlass::allocate_objArray`                 | `<unknown>` |
|     new |    +3 |   0.0% → 4.7% |   0 → 3 | `pthread_jit_write_protect_np`                     | `<unknown>` |
|     new |    +2 |   0.0% → 3.1% |   0 → 2 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `<unknown>` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate`                    | `<unknown>` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `InstanceKlass::array_klass`                       | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee               | Location    |
| ------: | ----: | -----: | ------: | -------------------- | ----------- |
| +127.3% |   +14 | 100.0% | 11 → 25 | `__psynch_mutexwait` | `<unknown>` |

##### `CollectedHeap::array_allocate` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                          | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------- | ----------- |
|  +28.3% |   +13 | 97.9% → 100.0% | 46 → 59 | `MemAllocator::allocate`        | `<unknown>` |
| removed |    -1 |    2.1% → 0.0% |   1 → 0 | `ObjArrayAllocator::initialize` | `<unknown>` |

##### `InstanceKlass::allocate_objArray` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| +26.1% |   +12 | 97.9% → 98.3% | 46 → 58 | `CollectedHeap::array_allocate`        | `<unknown>` |
|    new |    +1 |   0.0% → 1.7% |   0 → 1 | `Klass::check_array_allocation_length` | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|  +33.3% |   +16 | 85.7% → 98.5% | 48 → 64 | `OptoRuntime::new_array_C`         | `<unknown>` |
|  -80.0% |    -4 |   8.9% → 1.5% |   5 → 1 | `pthread_jit_write_protect_np`     | `<unknown>` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `InstanceKlass::allocate_objArray` | `<unknown>` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `os::current_thread_enable_wx`     | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|  +20.0% |    +7 | 83.3% → 84.0% | 35 → 42 | `forward_copy_longs`                              | `<unknown>` |
| removed |    -2 |   4.8% → 0.0% |   2 → 0 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `<unknown>` |
|  -33.3% |    -1 |   7.1% → 4.0% |   3 → 2 | `tlv_get_addr`                                    | `<unknown>` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `G1BarrierSet::invalidate`                        | `<unknown>` |

##### `HeapRegionManager::par_iterate` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
|     new |    +8 |  0.0% → 47.1% |   0 → 8 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region`         | `<unknown>` |
|  -87.5% |    -7 |  88.9% → 5.9% |   8 → 1 | `G1AdjustRegionClosure::do_heap_region`                             | `<unknown>` |
| +400.0% |    +4 | 11.1% → 29.4% |   1 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `<unknown>` |
|     new |    +3 |  0.0% → 17.6% |   0 → 3 | `_platform_memset`                                                  | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                   | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
| +200.0% |    +6 |        75.0% |   3 → 9 | `Parse::do_call`         | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Parse::do_if`           | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Parse::do_one_bytecode` | `<unknown>` |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `Parse::do_field_access` | `<unknown>` |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `Parse::do_new`          | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                | Location    |
| ------: | ----: | -----: | ------: | --------------------- | ----------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `Parse::do_one_block` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|  Change | Delta |           % | Samples | Callee                  | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| +200.0% |    +8 |      100.0% |  4 → 12 | `Parse::do_all_blocks`  | `<unknown>` |
|     new |    +1 | 0.0% → 8.3% |   0 → 1 | `Parse::build_exits`    | `<unknown>` |
|     new |    +1 | 0.0% → 8.3% |   0 → 1 | `ciMethod::method_data` | `<unknown>` |

##### `add` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee | Location              |
| -----: | ----: | ------------: | --------: | ------ | --------------------- |
| +49.2% |   +31 | 47.0% → 62.3% |   63 → 94 | `grow` | `java.util.ArrayList` |
| +13.6% |   +18 | 98.5% → 99.3% | 132 → 150 | `add`  | `java.util.ArrayList` |

##### `addAll` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                           | Location              |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------- |
| +22.5% |   +16 | 47.7% → 52.7% | 71 → 87 | `toArray`                        | `java.util.ArrayList` |
| +22.0% |    +9 | 27.5% → 30.3% | 41 → 50 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |
| -25.7% |    -9 | 23.5% → 15.8% | 35 → 26 | `grow`                           | `java.util.ArrayList` |

##### `unpark` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Callee                                         | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
| +11.5% |    +6 | 98.1% → 95.1% | 52 → 58 | `Unsafe_Unpark`                                | `<unknown>` |
|    new |    +3 |   0.0% → 4.9% |   0 → 3 | `FastThreadsListHandle::FastThreadsListHandle` | `<unknown>` |

##### `unpark` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Callee   | Location                   |
| -----: | ----: | -----: | ------: | -------- | -------------------------- |
| +15.1% |    +8 | 100.0% | 53 → 61 | `unpark` | `jdk.internal.misc.Unsafe` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |              % | Samples | Callee         | Location                                             |
| -----: | ----: | -------------: | ------: | -------------- | ---------------------------------------------------- |
| +17.6% |    +6 | 100.0% → 97.6% | 34 → 40 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |

##### `invoke` (`java.lang.reflect.Method`)

| Change | Delta |              % | Samples | Callee                  | Location                                          |
| -----: | ----: | -------------: | ------: | ----------------------- | ------------------------------------------------- |
| +17.6% |    +6 | 100.0% → 97.6% | 34 → 40 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new |    +1 |    0.0% → 2.4% |   0 → 1 | `acquireMethodAccessor` | `java.lang.reflect.Method`                        |

##### `apply` (`scala.runtime.function.JProcedure1`)

| Change | Delta |           % | Samples | Callee      | Location                                                               |
| -----: | ----: | ----------: | ------: | ----------- | ---------------------------------------------------------------------- |
| +35.3% |    +6 |      100.0% | 17 → 23 | `applyVoid` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111ede0` |
| +35.3% |    +6 |      100.0% | 17 → 23 | `apply`     | `scala.runtime.function.JProcedure1`                                   |
|    new |    +1 | 0.0% → 4.3% |   0 → 1 | `applyVoid` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                      |

##### `foreach` (`scala.collection.immutable.List`)

| Change | Delta |      % | Samples | Callee  | Location                             |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------ |
| +35.3% |    +6 | 100.0% | 17 → 23 | `apply` | `scala.runtime.function.JProcedure1` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000a801004800`)

| Change | Delta |      % | Samples | Callee | Location                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------ |
| +17.6% |    +6 | 100.0% | 34 → 40 | `main` | `org.renaissance.harness.RenaissanceSuite` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Callee         | Location                                     |
| -----: | ----: | ------------: | ------: | -------------- | -------------------------------------------- |
| +17.6% |    +6 | 97.1% → 97.6% | 34 → 40 | `invoke`       | `java.lang.invoke.LambdaForm$MH`             |
| -50.0% |    -1 |   5.7% → 2.4% |   2 → 1 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| +17.6% |    +6 | 100.0% | 34 → 40 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `Compilation::emit_lir` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                       | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------- | ----------- |
| +200.0% |    +4 | 100.0% → 85.7% |   2 → 6 | `LinearScan::do_linear_scan` | `<unknown>` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `BlockList::iterate_forward` | `<unknown>` |

##### `CompileBroker::compile_method_base` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                              | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `Mutex::lock`                       | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `InstanceKlass::lookup_osr_nmethod` | `<unknown>` |

##### `CompileBroker::compile_method` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                               | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `CompileBroker::compile_method_base` | `<unknown>` |
| +400.0% |    +4 | 100.0% |   1 → 5 | `CompileBroker::compile_method`      | `<unknown>` |

##### `CompilationPolicy::event` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                        | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
| +200.0% |    +2 |        50.0% |   1 → 3 | `CompileBroker::compile_method`               | `<unknown>` |
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `CompilationPolicy::method_back_branch_event` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                         | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `MachNode::rematerialize`                      | `<unknown>` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `IndexSetIterator::advance_and_next`           | `<unknown>` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `RegMask::Size`                                | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 50.0% |   0 → 3 | `LinearScan::build_intervals`          | `<unknown>` |
| +100.0% |    +1 | 50.0% → 33.3% |   1 → 2 | `LinearScan::allocate_registers`       | `<unknown>` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `LinearScan::assign_reg_num`           | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LinearScan::compute_global_live_sets` | `<unknown>` |

##### `GraphBuilder::try_inline_full` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                             | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `ciMethod::ensure_method_data`     | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `GraphBuilder::try_inline` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                          | Location    |
| ------: | ----: | -----: | ------: | ------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `GraphBuilder::try_inline_full` | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                    | Location    |
| -----: | ----: | -----------: | ------: | ------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LIR_OpVisitState::visit` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LinearScan::add_use`     | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| +250.0% |    +5 | 16.7% → 50.0% |   2 → 7 | `Compilation::emit_lir`        | `<unknown>` |
| removed |    -3 |  25.0% → 0.0% |   3 → 0 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| +16.7% |    +2 | 92.3% → 93.3% | 12 → 14 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------- |
| +15.4% |    +2 | 100.0% | 13 → 15 | `Compilation::compile_method` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                        | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| +15.4% |    +2 | 18.8% → 21.1% | 13 → 15 | `Compiler::compile_method`    | `<unknown>` |
|  -1.8% |    -1 | 81.2% → 77.5% | 56 → 55 | `C2Compiler::compile_method`  | `<unknown>` |
|    new |    +1 |   0.0% → 1.4% |   0 → 1 | `CompilationLog::log_compile` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                 | Location    |
| -----: | ----: | -------------: | ------: | ---------------------- | ----------- |
| +33.3% |    +1 | 100.0% → 80.0% |   3 → 4 | `GraphBuilder::invoke` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `PhaseCCP::analyze` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                   | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::push_child_nodes_to_worklist` | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `MulNode::Value`                         | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhiNode::Value`                         | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                          | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------- | ----------- |
|    new |    +2 |   0.0% → 50.0% |   0 → 2 | `PhaseOutput::shorten_branches` | `<unknown>` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `Scheduling::DoScheduling`      | `<unknown>` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `PhaseOutput::fill_buffer`      | `<unknown>` |

##### `ciEnv::lookup_method` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                  | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LinkResolver::linktime_resolve_virtual_method_or_null` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LinkResolver::resolve_static_call_or_null`             | `<unknown>` |

##### `ciEnv::get_method_by_index_impl` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                 | Location    |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciEnv::lookup_method` | `<unknown>` |

##### `PhaseCCP::transform` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                              | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Compile::disconnect_useless_nodes` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Compile::update_dead_node_list`    | `<unknown>` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % |       Samples | Callee            | Location                                      |
| ------: | ----: | -----------: | ------------: | ----------------- | --------------------------------------------- |
|   -7.1% |  -282 |       100.0% | 3,996 → 3,714 | `doExec`          | `java.util.concurrent.ForkJoinTask`           |
| removed |    -3 |  0.1% → 0.0% |         3 → 0 | `getAndClearSlot` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `releaseAccess`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                     | Location                                      |
| ------: | ----: | ------------: | ------------: | -------------------------- | --------------------------------------------- |
|   -7.1% |  -283 | 95.3% → 94.5% | 3,997 → 3,714 | `tryRemoveAndExec`         | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -5.8% |   -65 | 26.9% → 27.1% | 1,129 → 1,064 | `helpJoin`                 | `java.util.concurrent.ForkJoinPool`           |
|   +7.6% |   +31 |  9.8% → 11.2% |     410 → 441 | `park`                     | `java.util.concurrent.locks.LockSupport`      |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `resolve_opt_virtual_call` | `<unknown>`                                   |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `uncompensate`             | `java.util.concurrent.ForkJoinPool`           |

##### `join` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -6.3% |  -266 | 100.0% | 4,196 → 3,930 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |           % | Samples | Callee        | Location           |
| ------: | ----: | ----------: | ------: | ------------- | ------------------ |
| +120.0% |   +12 | 1.1% → 3.4% | 10 → 22 | `doubleValue` | `java.lang.Double` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % |       Samples | Callee    | Location                                      |
| ------: | ----: | -----------: | ------------: | --------- | --------------------------------------------- |
|   -5.6% |  -243 |       100.0% | 4,348 → 4,105 | `doExec`  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `tryPoll` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee    | Location                                            |
| -----: | ----: | ------------: | ------------: | --------- | --------------------------------------------------- |
|  -5.6% |  -241 |         99.4% | 4,322 → 4,081 | `exec`    | `java.util.concurrent.RecursiveTask`                |
|  -3.4% |   -16 | 10.7% → 11.0% |     467 → 451 | `exec`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +4.8% |    +2 |   1.0% → 1.1% |       42 → 44 | `setDone` | `java.util.concurrent.ForkJoinTask`                 |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee          | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------- | --------------------------------------------- |
|  -5.6% |  -244 | 99.9% → 99.8% | 4,349 → 4,105 | `topLevelExec`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +2 |  0.0% → <0.1% |         0 → 2 | `casSlotToNull` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -50.0% |    -1 |         <0.1% |         2 → 1 | `signalWork`    | `java.util.concurrent.ForkJoinPool`           |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee            | Location                                                   |
| -----: | ----: | ------------: | ------------: | ----------------- | ---------------------------------------------------------- |
|  -6.3% |  -266 | 97.1% → 96.3% | 4,196 → 3,930 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| -10.5% |  -171 | 37.8% → 35.8% | 1,632 → 1,461 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -7.0% |  -130 | 42.9% → 42.3% | 1,856 → 1,726 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -9.1% |   -70 | 17.8% → 17.1% |     769 → 699 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +10.5% |   +34 |   7.5% → 8.7% |     323 → 357 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee    | Location                                               |
| -----: | ----: | -----: | ------------: | --------- | ------------------------------------------------------ |
|  -5.6% |  -241 | 100.0% | 4,322 → 4,081 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |     Samples | Callee                           | Location                                                  |
| -----: | ----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------------- |
| -11.0% |  -118 | 65.4% → 65.0% | 1,068 → 950 | `accumulate`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -33.3% |   -29 |   5.3% → 4.0% |     87 → 58 | `get`                            | `java.util.ArrayList`                                     |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `DeoptimizationBlob`             | `<unknown>`                                               |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `counter_overflow Runtime1 stub` | `<unknown>`                                               |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Callee            | Location                                                  |
| -----: | ----: | -----: | ------------: | ----------------- | --------------------------------------------------------- |
| -10.5% |  -171 | 100.0% | 1,632 → 1,461 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -10.5% |  -171 | 100.0% | 1,632 → 1,461 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee      | Location                            |
| -----: | ----: | ------------: | ------------: | ----------- | ----------------------------------- |
|  -5.6% |  -242 | 94.1% → 91.9% | 4,354 → 4,112 | `scan`      | `java.util.concurrent.ForkJoinPool` |
| +31.7% |   +86 |   5.9% → 8.0% |     271 → 357 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -3.3% |  -151 | 100.0% | 4,626 → 4,475 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                           | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  -28.2% |  -257 | 66.0% → 52.8% | 912 → 655 | `distance`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +39.0% |   +16 |   3.0% → 4.6% |   41 → 57 | `get`                            | `java.util.ArrayList`                                      |
|  -66.7% |    -4 |   0.4% → 0.2% |     6 → 2 | `zero_blocks`                    | `<unknown>`                                                |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `SafepointBlob`                  | `<unknown>`                                                |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Callee                | Location                                                   |
| -----: | ----: | -------------: | ------------: | --------------------- | ---------------------------------------------------------- |
| -10.3% |  -142 |  74.4% → 71.8% | 1,381 → 1,239 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -7.1% |  -131 | 100.0% → 99.9% | 1,856 → 1,725 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +2.3% |   +11 |  25.6% → 28.2% |     475 → 486 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |            % |  Samples | Callee        | Location           |
| -----: | ----: | -----------: | -------: | ------------- | ------------------ |
| -33.0% |   -38 | 10.8% → 8.1% | 115 → 77 | `doubleValue` | `java.lang.Double` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |     Samples | Callee   | Location                            |
| -----: | ----: | -----: | ----------: | -------- | ----------------------------------- |
|  -8.1% |   -86 | 100.0% | 1,059 → 973 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee   | Location                            |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------- |
|  -9.5% |   -73 | 100.0% | 765 → 692 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Callee    | Location                                               |
| -----: | ----: | ------------: | --------: | --------- | ------------------------------------------------------ |
|  -9.5% |   -73 | 99.5% → 99.0% | 765 → 692 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +50.0% |    +2 |   0.5% → 0.9% |     4 → 6 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                   | Location                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ------------------------------------------------------ |
|  -9.1% |   -70 | 100.0% | 769 → 699 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -9.1% |   -70 | 100.0% | 769 → 699 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee   | Location                                               |
| -----: | ----: | ------------: | --------: | -------- | ------------------------------------------------------ |
|  -3.6% |   -17 | 99.8% → 99.6% | 466 → 449 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`)

| Change | Delta |      % |   Samples | Callee         | Location                                    |
| -----: | ----: | -----: | --------: | -------------- | ------------------------------------------- |
|  -3.4% |   -16 | 100.0% | 467 → 451 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |            % | Samples | Callee      | Location                           |
| ------: | ----: | -----------: | ------: | ----------- | ---------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `<clinit>`  | `scala.Predef$`                    |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `map`       | `scala.collection.immutable.Range` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `loadClass` | `java.lang.ClassLoader`            |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |            % | Samples | Callee           | Location                                                  |
| ------: | ----: | -----------: | ------: | ---------------- | --------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `add`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `executeOperation` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Callee                      | Location                                                             |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `run`                       | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `validate`                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a8011a6a30` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `notifyAfterOperationSetUp` | `org.renaissance.harness.EventDispatcher`                            |

##### `deleteRecursively` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Callee              | Location                        |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `walkFileTree`      | `java.nio.file.Files`           |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `deleteRecursively` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Callee              | Location                        |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `deleteRecursively` | `org.renaissance.core.DirUtils` |

##### `run` (`org.renaissance.core.DirUtils$$Lambda.0x000000e001003a68`)

|  Change | Delta |             % | Samples | Callee                            | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `lambda$createScratchDirectory$1` | `org.renaissance.core.DirUtils` |

##### `OptionDef$superArg$1` (`scopt.OptionDef`)

|  Change | Delta |             % | Samples | Callee         | Location                               |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `G1FullGCMarker::follow_marking_stacks` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -60.0% |   -15 | 46.3% → 27.8% | 25 → 10 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `<unknown>` |
|  -22.7% |    -5 | 40.7% → 47.2% | 22 → 17 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
| +300.0% |    +3 |  1.9% → 11.1% |   1 → 4 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1MarkAndPushClosure>`                         | `<unknown>` |
|  -33.3% |    -1 |          5.6% |   3 → 2 | `G1FullGCMarker::mark_object`                                                                        | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -90.9% |   -10 | 44.0% → 10.0% |  11 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| removed |    -2 |   8.0% → 0.0% |   2 → 0 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1MarkAndPushClosure>`                         | `<unknown>` |
|  -25.0% |    -1 | 16.0% → 30.0% |   4 → 3 | `G1FullGCMarker::follow_object`                                                                      | `<unknown>` |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `ClassLoaderData::oops_do`                                                                           | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                     | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
|  -33.3% |   -18 | 77.1% → 62.1% | 54 → 36 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `<unknown>` |
|  +14.3% |    +2 | 20.0% → 27.6% | 14 → 16 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `<unknown>` |
| +100.0% |    +1 |   1.4% → 3.4% |   1 → 2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |
| +100.0% |    +1 |   1.4% → 3.4% |   1 → 2 | `TaskTerminator::offer_termination`                                                                        | `<unknown>` |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `G1FullGCMarker::mark_object`                                                                              | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -17.1% |   -12 | 100.0% | 70 → 58 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                   | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------- |
| +28.6% |    +2 | 17.1% → 30.0% |   7 → 9 | `G1RegionMarkStatsCache::add_live_words` | `<unknown>` |

##### `G1AdjustRegionClosure::do_heap_region` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                                         | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ----------- |
|  -83.3% |    -5 | 75.0% → 100.0% |   6 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                                | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `void OopOopIterateBoundedDispatch<G1AdjustClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>` | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                | `<unknown>` |

##### `G1FullGCAdjustTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `HeapRegionManager::par_iterate` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                   | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ----------- |
|  -40.0% |    -6 | 93.8% → 100.0% |  15 → 9 | `G1ParEvacuateFollowersClosure::do_void` | `<unknown>` |
| removed |    -1 |    6.3% → 0.0% |   1 → 0 | `CompositeElapsedCounterSource::now`     | `<unknown>` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------- | ----------- |
| removed |    -5 | 41.7% → 0.0% |   5 → 0 | `G1FullGCMarker::mark_object` | `<unknown>` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `ClassLoaderData::oops_do`    | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -75.0% |    -6 | 100.0% |   8 → 2 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| -75.0% |    -6 | 53.3% → 22.2% |   8 → 2 | `G1ParScanThreadState::steal_and_trim_queue`       | `<unknown>` |
| +50.0% |    +1 | 13.3% → 33.3% |   2 → 3 | `G1ParScanThreadState::trim_queue_to_threshold`    | `<unknown>` |
| -20.0% |    -1 | 33.3% → 44.4% |   5 → 4 | `G1ParEvacuateFollowersClosure::offer_termination` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                          | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |

##### `ClassFileParser::fill_instance_klass` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                     | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | ----------- |
|  -57.1% |    -4 | 87.5% → 100.0% |   7 → 3 | `DefaultMethods::generate_default_methods` | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `java_lang_Class::create_mirror`           | `<unknown>` |

##### `ClassFileParser::create_instance_klass` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `ClassFileParser::fill_instance_klass` | `<unknown>` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                   | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------- |
| -62.5% |    -5 | 66.7% → 42.9% |   8 → 3 | `ClassFileParser::create_instance_klass` | `<unknown>` |

##### `Monitor::wait` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -50.0% |    -4 | 100.0% |   8 → 4 | `PlatformMonitor::wait` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                         | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | ----------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::start_partial_objarray` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                            | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| -80.0% |    -4 | 50.0% → 16.7% |   5 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `fwd_copy_again`                                  | `<unknown>` |

##### `DefaultMethods::generate_default_methods` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                          | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | ----------- |
|  -50.0% |    -3 | 85.7% → 100.0% |   6 → 3 | `HierarchyVisitor<FindMethodsByErasedSig>::run` | `<unknown>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `Method::sort_methods`                          | `<unknown>` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee          | Location                            |
| -----: | ----: | ------------: | ------------: | --------------- | ----------------------------------- |
|  -5.3% |   -58 | 97.5% → 98.0% | 1,101 → 1,043 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
| +55.6% |    +5 |   0.8% → 1.3% |        9 → 14 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `get` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee        | Location              |
| -----: | ----: | ------------: | --------: | ------------- | --------------------- |
| -13.8% |   -22 | 82.5% → 86.3% | 160 → 138 | `elementData` | `java.util.ArrayList` |
| -40.6% |   -13 | 16.5% → 11.9% |   32 → 19 | `checkIndex`  | `java.util.Objects`   |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee | Location                                                               |
| -----: | ----: | -----: | --------: | ------ | ---------------------------------------------------------------------- |
|  -3.4% |   -16 | 100.0% | 467 → 451 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0` |

##### `computeIfAbsent` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Callee                           | Location                                                                              |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +3 |   0.0% → 1.9% |   0 → 3 | `resize`                         | `java.util.HashMap`                                                                   |
|  +9.1% |    +2 | 12.7% → 14.9% | 22 → 24 | `hash`                           | `java.util.HashMap`                                                                   |
| -50.0% |    -1 |   1.2% → 0.6% |   2 → 1 | `apply`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a8011a3940` |
|    new |    +1 |   0.0% → 0.6% |   0 → 1 | `counter_overflow Runtime1 stub` | `<unknown>`                                                                           |
|    new |    +1 |   0.0% → 0.6% |   0 → 1 | `newNode`                        | `java.util.HashMap`                                                                   |

##### `read` (`java.io.FilterInputStream`)

| Change | Delta |      % | Samples | Callee | Location                            |
| -----: | ----: | -----: | ------: | ------ | ----------------------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `read` | `java.util.zip.InflaterInputStream` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |            % | Samples | Callee                                                               | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `JvmtiVMObjectAllocEventCollector::JvmtiVMObjectAllocEventCollector` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Unsafe_AllocateInstance`                                            | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|  -23.5% |    -4 | 58.6% → 59.1% | 17 → 13 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
|  -60.0% |    -3 |  17.2% → 9.1% |   5 → 2 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
| removed |    -2 |   6.9% → 0.0% |   2 → 0 | `PhaseCFG::PhaseCFG`              | `<unknown>` |
| +100.0% |    +2 |  6.9% → 18.2% |   2 → 4 | `PhaseOutput::Output`             | `<unknown>` |
|  +50.0% |    +1 |  6.9% → 13.6% |   2 → 3 | `Matcher::match`                  | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|  -33.3% |    -2 | 46.2% → 44.4% |   6 → 4 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| removed |    -2 |  15.4% → 0.0% |   2 → 0 | `IdealLoopTree::loop_predication`           | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `Node::pinned`                              | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `ProjNode::pinned`                          | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| +133.3% |    +4 | 17.6% → 53.8% |   3 → 7 | `PhaseChaitin::build_ifg_physical`               | `<unknown>` |
|  -50.0% |    -2 | 23.5% → 15.4% |   4 → 2 | `PhaseChaitin::gather_lrg_masks`                 | `<unknown>` |
| removed |    -2 |  11.8% → 0.0% |   2 → 0 | `PhaseLive::compute`                             | `<unknown>` |
|  -50.0% |    -1 |  11.8% → 7.7% |   2 → 1 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `<unknown>` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `PhaseChaitin::Select`                           | `<unknown>` |

##### `PhaseCFG::global_code_motion` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `PhaseCFG::schedule_local`        | `<unknown>` |
|  -50.0% |    -1 | 33.3% → 50.0% |   2 → 1 | `PhaseCFG::schedule_late`         | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `loadConNKlassNode::ideal_Opcode` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                        | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `ProjNode::is_uncommon_trap_proj`             | `<unknown>` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `ProjNode::is_uncommon_trap_if_pattern`       | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                          | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------- | ----------- |
| -71.4% |    -5 | 100.0% → 50.0% |   7 → 2 | `Monitor::wait`                 | `<unknown>` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `Mutex::lock`                   | `<unknown>` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `TimeStamp::ticks_since_update` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                         | Location    |
| -----: | ----: | -----: | ------: | ------------------------------ | ----------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                      | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
| -60.0% |    -3 | 83.3% → 50.0% |   5 → 2 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| -25.0% |    -2 | 38.1% → 31.6% |   8 → 6 | `PhaseIdealLoop::optimize`   | `<unknown>` |
| -40.0% |    -2 | 23.8% → 15.8% |   5 → 3 | `Compile::optimize_loops`    | `<unknown>` |
|    new |    +2 |  0.0% → 10.5% |   0 → 2 | `PhaseCCP::do_transform`     | `<unknown>` |
| -50.0% |    -1 |   9.5% → 5.3% |   2 → 1 | `PhaseIterGVN::PhaseIterGVN` | `<unknown>` |
| +50.0% |    +1 |  9.5% → 15.8% |   2 → 3 | `PhaseCCP::PhaseCCP`         | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                         | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------ | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `checkCastPPNode::out_RegMask` | `<unknown>` |

##### `ciObjectFactory::create_new_metadata` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee               | Location    |
| ------: | ----: | -----------: | ------: | -------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciMethod::ciMethod` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciObjectFactory::create_new_metadata` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                   | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseLive::add_liveout` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                           | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `CastIINode::Opcode`             | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_thru_phi` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseCFG::build_cfg` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node::is_block_proj` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node::Node`          | `<unknown>` |

##### `PhaseCFG::PhaseCFG` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::build_cfg` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +29.7% |   +76 |  5.2% → 7.0% | 256 → 332 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +61.5% |   +24 |  0.8% → 1.3% |   39 → 63 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +73.1% |   +19 |  0.5% → 1.0% |   26 → 45 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +21.9% |   +16 |  1.5% → 1.9% |   73 → 89 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +10.7% |   +13 |  2.5% → 2.9% | 122 → 135 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +162.5% |   +13 |  0.2% → 0.4% |    8 → 21 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +220.0% |   +11 |  0.1% → 0.3% |    5 → 16 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +62.5% |   +10 |  0.3% → 0.6% |   16 → 26 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +42.9% |    +9 |  0.4% → 0.6% |   21 → 30 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +180.0% |    +9 |  0.1% → 0.3% |    5 → 14 | `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +25.8% |    +8 |  0.6% → 0.8% |   31 → 39 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +400.0% |    +8 | <0.1% → 0.2% |    2 → 10 | `elementData` (`java.util.ArrayList`) ← `get` ← `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +400.0% |    +8 | <0.1% → 0.2% |    2 → 10 | `doubleValue` (`java.lang.Double`) ← `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `_platform_memset` ← `MarkBitMap::do_clear` ← `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region` ← `HeapRegionManager::par_iterate` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +10.4% |    +7 |  1.4% → 1.6% |   67 → 74 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +13.2% |    +7 |  1.1% → 1.3% |   53 → 60 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +17.1% |    +6 |  0.7% → 0.9% |   35 → 41 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`) |
| +120.0% |    +6 |  0.1% → 0.2% |    5 → 11 | `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)     |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |            % |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -----: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -40.1% |   -61 |  3.1% → 1.9% | 152 → 91 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -32.1% |   -36 |  2.3% → 1.6% | 112 → 76 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -39.2% |   -31 |  1.6% → 1.0% |  79 → 48 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -40.3% |   -31 |  1.6% → 1.0% |  77 → 46 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -27.4% |   -29 |  2.2% → 1.6% | 106 → 77 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -35.7% |   -20 |  1.1% → 0.8% |  56 → 36 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -16.5% |   -15 |  1.9% → 1.6% |  91 → 76 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -43.8% |   -14 |  0.7% → 0.4% |  32 → 18 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -22.8% |   -13 |  1.2% → 0.9% |  57 → 44 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -25.6% |   -11 |  0.9% → 0.7% |  43 → 32 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -66.7% |   -10 |  0.3% → 0.1% |   15 → 5 | `elementData` (`java.util.ArrayList`) ← `get` ← `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -19.6% |    -9 |  0.9% → 0.8% |  46 → 37 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -75.0% |    -9 |  0.2% → 0.1% |   12 → 3 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -69.2% |    -9 |  0.3% → 0.1% |   13 → 4 | `doubleValue` (`java.lang.Double`) ← `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -81.8% |    -9 | 0.2% → <0.1% |   11 → 2 | `add` (`java.util.ArrayList`) ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -12.3% |    -8 |  1.3% → 1.2% |  65 → 57 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| -88.9% |    -8 | 0.2% → <0.1% |    9 → 1 | `elementData` (`java.util.ArrayList`) ← `get` ← `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -18.6% |    -8 |  0.9% → 0.7% |  43 → 35 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -15.2% |    -7 |  0.9% → 0.8% |  46 → 39 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -46.7% |    -7 |  0.3% → 0.2% |   15 → 8 | `computeIfAbsent` (`java.util.HashMap`) ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Sampling profile diff

Collected 4,878 samples → 4,725 samples (-153 samples, -3.1%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Ours              |   -8.5% |  -245 | 58.8% → 55.5% | 2,867 → 2,622 |
| Native            |  +15.6% |  +185 | 24.4% → 29.1% | 1,189 → 1,374 |
| Standard library  |  -10.0% |   -70 | 14.4% → 13.4% |     701 → 631 |
| Compiler          |  -14.0% |    -8 |   1.2% → 1.0% |       57 → 49 |
| JIT               |  -24.2% |   -15 |   1.3% → 1.0% |       62 → 47 |
| Unknown           | +100.0% |    +1 |         <0.1% |         1 → 2 |
| Garbage collector | removed |    -1 |  <0.1% → 0.0% |         1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |            % | Samples | Function           | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------ | --------------------------------------------------- |
| +152.4% |   +32 |  0.4% → 1.1% | 21 → 53 | `grow`             | `java.util.ArrayList`                               |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `putVal`           | `java.util.HashMap`                                 |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `signalWork`       | `java.util.concurrent.ForkJoinPool`                 |
|   +9.1% |    +2 |         0.5% | 22 → 24 | `hash`             | `java.util.HashMap`                                 |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `casSlotToNull`    | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `<init>`           | `java.util.stream.AbstractPipeline`                 |
|  +33.3% |    +1 |         0.1% |   3 → 4 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
|  +14.3% |    +1 |  0.1% → 0.2% |   7 → 8 | `forEach`          | `java.util.HashMap`                                 |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `get`              | `java.util.ArrayList`                               |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`           | `java.util.ArrayList`                               |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `push`             | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `resize`           | `java.util.HashMap`                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `read`             | `java.util.jar.Manifest`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `length`           | `java.lang.String`                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`           | `jdk.internal.org.objectweb.asm.ByteVector`         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000a801000c00` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`           | `java.util.stream.IntPipeline$1`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `forEachRemaining` | `java.util.Spliterators$DoubleArraySpliterator`     |

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                          | Location                                                               |
| -----: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------------------- |
| +17.3% |  +117 | 13.9% → 16.8% | 676 → 793 | `Unsafe_Park`                     | `<unknown>`                                                            |
| +17.1% |  +116 | 13.9% → 16.8% | 679 → 795 | `park`                            | `jdk.internal.misc.Unsafe`                                             |
| +16.9% |  +113 | 13.7% → 16.6% | 670 → 783 | `Parker::park`                    | `<unknown>`                                                            |
| +16.9% |  +113 | 13.7% → 16.6% | 669 → 782 | `park`                            | `java.util.concurrent.locks.LockSupport`                               |
| +15.4% |  +105 | 14.0% → 16.6% | 681 → 786 | `__psynch_cvwait`                 | `<unknown>`                                                            |
| +31.7% |   +86 |   5.6% → 7.6% | 271 → 357 | `awaitWork`                       | `java.util.concurrent.ForkJoinPool`                                    |
| +36.7% |   +47 |   2.6% → 3.7% | 128 → 175 | `toArray`                         | `java.util.ArrayList`                                                  |
| +22.2% |   +46 |   4.2% → 5.4% | 207 → 253 | `lambda$merge$6`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +22.2% |   +46 |   4.2% → 5.4% | 207 → 253 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
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
| +22.2% |   +46 |  4.2% → 5.4% | 207 → 253 | `lambda$merge$6`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +22.2% |   +46 |  4.2% → 5.4% | 207 → 253 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
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
| +20.6% |    +7 |   0.7% → 0.9% |   34 → 41 | `invoke`         | `java.lang.reflect.Method`                           |
| +35.3% |    +6 |   0.3% → 0.5% |   17 → 23 | `apply`          | `scala.runtime.function.JProcedure1`                 |
| +35.3% |    +6 |   0.3% → 0.5% |   17 → 23 | `foreach`        | `scala.collection.immutable.List`                    |
| +17.6% |    +6 |   0.7% → 0.8% |   34 → 40 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |
| +17.6% |    +6 |   0.7% → 0.8% |   34 → 40 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000a801009800`  |
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

Functions with the largest decrease in total samples taken in the function and all its callees.

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
|  -57.1% |    -4 |          0.1% |         7 → 3 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2388` |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `add`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `combineResults`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -40.0% |    -2 |          0.1% |         5 → 3 | `executeOperation`                | `org.renaissance.harness.ExecutionDriver`                              |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `deleteRecursively`               | `org.renaissance.core.DirUtils`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `lambda$createScratchDirectory$1` | `org.renaissance.core.DirUtils`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `run`                             | `org.renaissance.core.DirUtils$$Lambda.0x000000e001003a68`             |

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

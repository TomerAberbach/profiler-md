# Sampling profile diff

Collected 4,646 samples → 4,611 samples (-35 samples, -0.8%).

| Category         |  Change | Delta |             % |       Samples |
| ---------------- | ------: | ----: | ------------: | ------------: |
| Ours             |   -1.6% |   -40 | 54.0% → 53.5% | 2,507 → 2,467 |
| Native           |   -1.2% |   -16 | 28.8% → 28.7% | 1,340 → 1,324 |
| Standard library |   +3.8% |   +26 | 14.9% → 15.5% |     690 → 716 |
| Compiler         |  +18.4% |    +9 |   1.1% → 1.3% |       49 → 58 |
| JIT              |  -22.0% |   -13 |   1.3% → 1.0% |       59 → 46 |
| Unknown          | removed |    -1 |  <0.1% → 0.0% |         1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                           | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ---------------------------------------------------------- |
|  +40.1% |  +134 |  7.2% → 10.1% | 334 → 468 | `findNearestCentroid`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +11.8% |   +93 | 17.0% → 19.1% | 790 → 883 | `accumulate`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +46.2% |   +49 |   2.3% → 3.4% | 106 → 155 | `doubleValue`                                      | `java.lang.Double`                                         |
|  +11.2% |   +45 |   8.7% → 9.7% | 403 → 448 | `vectorSum`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +190.0% |   +38 |   0.4% → 1.3% |   20 → 58 | `grow`                                             | `java.util.ArrayList`                                      |
|  +45.8% |   +11 |   0.5% → 0.8% |   24 → 35 | `helpJoin`                                         | `java.util.concurrent.ForkJoinPool`                        |
|  +88.9% |    +8 |   0.2% → 0.4% |    9 → 17 | `__psynch_mutexwait`                               | `<unknown>`                                                |
|  +70.0% |    +7 |   0.2% → 0.4% |   10 → 17 | `semaphore_wait_trap`                              | `<unknown>`                                                |
| +120.0% |    +6 |   0.1% → 0.2% |    5 → 11 | `G1FullGCMarker::follow_object`                    | `<unknown>`                                                |
| +250.0% |    +5 |  <0.1% → 0.2% |     2 → 7 | `G1ParScanThreadState::trim_queue_to_threshold`    | `<unknown>`                                                |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location` | `<unknown>`                                                |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `G1ParScanThreadState::start_partial_objarray`     | `<unknown>`                                                |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `Unsafe_Park`                                      | `<unknown>`                                                |
|  +75.0% |    +3 |   0.1% → 0.2% |     4 → 7 | `scan`                                             | `java.util.concurrent.ForkJoinPool`                        |
|  +75.0% |    +3 |   0.1% → 0.2% |     4 → 7 | `copyOf`                                           | `java.util.Arrays`                                         |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `combineResults`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |    +3 |          0.1% |     3 → 6 | `arrayof_oop_disjoint_arraycopy`                   | `<unknown>`                                                |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `PhaseLive::compute`                               | `<unknown>`                                                |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `G1BarrierSet::invalidate`                         | `<unknown>`                                                |
| +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `nextNode`                                         | `java.util.HashMap$HashIterator`                           |

##### Ours

| Change | Delta |             % |   Samples | Function                   | Location                                                   |
| -----: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| +40.1% |  +134 |  7.2% → 10.1% | 334 → 468 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +11.8% |   +93 | 17.0% → 19.1% | 790 → 883 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +11.2% |   +45 |   8.7% → 9.7% | 403 → 448 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +3 |   0.0% → 0.1% |     0 → 3 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +2 |  0.0% → <0.1% |     0 → 2 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +33.3% |    +1 |          0.1% |     3 → 4 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +50.0% |    +1 |  <0.1% → 0.1% |     2 → 3 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                   | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
|  +88.9% |    +8 |  0.2% → 0.4% |  9 → 17 | `__psynch_mutexwait`                                                                                       | `<unknown>` |
|  +70.0% |    +7 |  0.2% → 0.4% | 10 → 17 | `semaphore_wait_trap`                                                                                      | `<unknown>` |
| +120.0% |    +6 |  0.1% → 0.2% |  5 → 11 | `G1FullGCMarker::follow_object`                                                                            | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.2% |   2 → 7 | `G1ParScanThreadState::trim_queue_to_threshold`                                                            | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location`                                                         | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ParScanThreadState::start_partial_objarray`                                                             | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `Unsafe_Park`                                                                                              | `<unknown>` |
| +100.0% |    +3 |         0.1% |   3 → 6 | `arrayof_oop_disjoint_arraycopy`                                                                           | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `G1BarrierSet::invalidate`                                                                                 | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `semaphore_signal_trap`                                                                                    | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `__psynch_cvbroad`                                                                                         | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Parker::park`                                                                                             | `<unknown>` |
|  +13.3% |    +2 |  0.3% → 0.4% | 15 → 17 | `pthread_jit_write_protect_np`                                                                             | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `tlv_get_addr`                                                                                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ClassLoaderData::oops_do`                                                                                 | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `read`                                                                                                     | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`                                                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1FullGCMarker::complete_marking`                                                                         | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ClassFileParser::parse_constant_pool_entries`                                                             | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function              | Location                                           |
| ------: | ----: | -----------: | --------: | --------------------- | -------------------------------------------------- |
|  +46.2% |   +49 |  2.3% → 3.4% | 106 → 155 | `doubleValue`         | `java.lang.Double`                                 |
| +190.0% |   +38 |  0.4% → 1.3% |   20 → 58 | `grow`                | `java.util.ArrayList`                              |
|  +45.8% |   +11 |  0.5% → 0.8% |   24 → 35 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`                |
|  +75.0% |    +3 |  0.1% → 0.2% |     4 → 7 | `scan`                | `java.util.concurrent.ForkJoinPool`                |
|  +75.0% |    +3 |  0.1% → 0.2% |     4 → 7 | `copyOf`              | `java.util.Arrays`                                 |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `nextNode`            | `java.util.HashMap$HashIterator`                   |
|  +50.0% |    +2 |         0.1% |     4 → 6 | `forEach`             | `java.util.HashMap`                                |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `getRawResult`        | `java.util.concurrent.RecursiveTask`               |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `join`                | `java.util.concurrent.ForkJoinTask`                |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `exec`                | `java.util.concurrent.RecursiveTask`               |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `addAll`              | `java.util.ArrayList`                              |
|  +12.5% |    +1 |         0.2% |     8 → 9 | `merge`               | `java.util.HashMap`                                |
|   +3.8% |    +1 |         0.6% |   26 → 27 | `hash`                | `java.util.HashMap`                                |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `evaluateToArrayNode` | `java.util.stream.AbstractPipeline`                |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `newNode`             | `java.util.HashMap`                                |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `entrySet`            | `java.util.HashMap`                                |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `readLine`            | `java.util.jar.Manifest$FastInputStream`           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `isKnown`             | `java.util.stream.StreamOpFlag`                    |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `advance`             | `java.util.concurrent.ConcurrentHashMap$Traverser` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `getEntryHash`        | `java.util.zip.ZipFile$Source`                     |

##### JIT

| Change | Delta |            % | Samples | Function                   | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xaaa)`  | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub`              | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseLive::compute`                          | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::gather_lrg_masks`              | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `RegionNode::is_CFG`                          | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::is_counted_loop`             | `<unknown>` |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `IndexSetIterator::advance_and_next`          | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `LinearScanWalker::alloc_free_reg`            | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScanWalker::activate_current`          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IntervalWalker::walk_to`                     | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `DebugInformationRecorder::describe_scope`    | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Backward_Iterator::next`                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::optimize`                      | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::identify_useful_nodes`              | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `BoolNode::Ideal`                             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhiNode::Ideal`                              | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Type::cmp`                                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LIRGenerator::move_to_phi`                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RelocIterator::set_limits`                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CallLeafDirectNode::pipeline`                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CmpINode::Opcode`                            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                        | Location                                                               |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -34.7% |  -297 | 18.4% → 12.1% | 855 → 558 | `distance`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -44.2% |   -23 |   1.1% → 0.6% |   52 → 29 | `checkIndex`                                                    | `java.util.Objects`                                                    |
|  -14.3% |   -18 |   2.7% → 2.3% | 126 → 108 | `computeIfAbsent`                                               | `java.util.HashMap`                                                    |
|  -27.6% |   -16 |   1.2% → 0.9% |   58 → 42 | `zero_blocks`                                                   | `<unknown>`                                                            |
|  -21.5% |   -14 |   1.4% → 1.1% |   65 → 51 | `add`                                                           | `java.util.ArrayList`                                                  |
|  -11.8% |   -12 |   2.2% → 2.0% |  102 → 90 | `collectClusters`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -5.1% |   -12 |   5.1% → 4.9% | 237 → 225 | `forward_copy_longs`                                            | `<unknown>`                                                            |
|  -78.6% |   -11 |   0.3% → 0.1% |    14 → 3 | `G1RegionMarkStatsCache::add_live_words`                        | `<unknown>`                                                            |
|  -81.8% |    -9 |  0.2% → <0.1% |    11 → 2 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>`                                                            |
|   -4.2% |    -7 |   3.6% → 3.4% | 165 → 158 | `elementData`                                                   | `java.util.ArrayList`                                                  |
|   -9.8% |    -6 |   1.3% → 1.2% |   61 → 55 | `__psynch_cvsignal`                                             | `<unknown>`                                                            |
|  -55.6% |    -5 |   0.2% → 0.1% |     9 → 4 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>`                                                            |
|  -50.0% |    -5 |   0.2% → 0.1% |    10 → 5 | `inflate_fast`                                                  | `<unknown>`                                                            |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `tryRemoveAndExec`                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -26.7% |    -4 |   0.3% → 0.2% |   15 → 11 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>`                                                            |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `_sigtramp`                                                     | `<unknown>`                                                            |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `accept`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `pthread_mutex_trylock`                                         | `<unknown>`                                                            |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `awaitWork`                                                     | `java.util.concurrent.ForkJoinPool`                                    |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `casSlotToNull`                                                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |

##### Ours

|  Change | Delta |             % |   Samples | Function                | Location                                                               |
| ------: | ----: | ------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  -34.7% |  -297 | 18.4% → 12.1% | 855 → 558 | `distance`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.8% |   -12 |   2.2% → 2.0% |  102 → 90 | `collectClusters`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `accept`                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `lambda$run$0`          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `lambda$merge$6`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `lambda$merge$7`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `boxed`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                             | Location    |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|   -5.1% |   -12 |  5.1% → 4.9% | 237 → 225 | `forward_copy_longs`                                                                                 | `<unknown>` |
|  -78.6% |   -11 |  0.3% → 0.1% |    14 → 3 | `G1RegionMarkStatsCache::add_live_words`                                                             | `<unknown>` |
|  -81.8% |    -9 | 0.2% → <0.1% |    11 → 2 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                      | `<unknown>` |
|   -9.8% |    -6 |  1.3% → 1.2% |   61 → 55 | `__psynch_cvsignal`                                                                                  | `<unknown>` |
|  -55.6% |    -5 |  0.2% → 0.1% |     9 → 4 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
|  -50.0% |    -5 |  0.2% → 0.1% |    10 → 5 | `inflate_fast`                                                                                       | `<unknown>` |
|  -26.7% |    -4 |  0.3% → 0.2% |   15 → 11 | `arrayof_jint_disjoint_arraycopy`                                                                    | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `_sigtramp`                                                                                          | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `pthread_mutex_trylock`                                                                              | `<unknown>` |
|   -0.3% |    -2 |        16.4% | 760 → 758 | `__psynch_cvwait`                                                                                    | `<unknown>` |
|  -14.3% |    -2 |         0.3% |   14 → 12 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                    | `<unknown>` |
|  -40.0% |    -2 |         0.1% |     5 → 3 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `ObjArrayAllocator::initialize`                                                                      | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `ResourceBitMap::ResourceBitMap`                                                                     | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `__psynch_mutexdrop`                                                                                 | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `CodeCache::find_blob`                                                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `ClassFileParser::skip_over_field_signature`                                                         | `<unknown>` |
|   -4.0% |    -1 |         0.5% |   25 → 24 | `G1FullGCMarker::mark_object`                                                                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `InstanceKlass::check_valid_for_instantiation`                                                       | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function           | Location                                      |
| ------: | ----: | -----------: | --------: | ------------------ | --------------------------------------------- |
|  -44.2% |   -23 |  1.1% → 0.6% |   52 → 29 | `checkIndex`       | `java.util.Objects`                           |
|  -14.3% |   -18 |  2.7% → 2.3% | 126 → 108 | `computeIfAbsent`  | `java.util.HashMap`                           |
|  -21.5% |   -14 |  1.4% → 1.1% |   65 → 51 | `add`              | `java.util.ArrayList`                         |
|   -4.2% |    -7 |  3.6% → 3.4% | 165 → 158 | `elementData`      | `java.util.ArrayList`                         |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -60.0% |    -3 | 0.1% → <0.1% |     5 → 2 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `casSlotToNull`    | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `park`             | `jdk.internal.misc.Unsafe`                    |
|  -28.6% |    -2 |  0.2% → 0.1% |     7 → 5 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`           |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `get`              | `java.util.ArrayList`                         |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `accept`           | `java.util.stream.IntPipeline$1$1`            |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `putVal`           | `java.util.HashMap`                           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>`           | `java.util.stream.AbstractPipeline`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `resize`           | `java.util.HashMap`                           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `invoke`           | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`           | `java.util.zip.InflaterInputStream`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `keySet`           | `java.util.HashMap`                           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `match`            | `java.util.jar.JarFile`                       |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `fork`             | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `make`             | `java.lang.invoke.DirectMethodHandle`         |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -27.6% |   -16 | 1.2% → 0.9% | 58 → 42 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                         | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | ----------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MachNode::rematerialize`                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::Dominators`                     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::hash`                                     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Scheduling::AddNodeToAvailableList`             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::find_long_type`                           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NTarjan::DFS`                                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::insert_anti_dependences`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciMethod::load_code`                            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::merge_multidefs`                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CallNode::match_edge`                           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegMask::is_misaligned_pair`                    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MacroAssembler::ldst_can_merge`                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `branchConUNode::ideal_Opcode`                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LIRGenerator::increment_event_counter`          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MergeMemNode::set_memory_at`                    | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `PhaseIdealLoop::build_loop_late`                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ConNode::Opcode`                                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachProjNode::bottom_type`                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypePtr::singleton`                             | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |       Samples | Function                                                                                                                                                        | Location                                                               |
| -------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +10.1% |  +139 | 29.7% → 32.9% | 1,379 → 1,518 | `vectorSum`                                                                                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +10.1% |  +139 | 29.7% → 32.9% | 1,380 → 1,519 | `computeDirectly`                                                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +11.6% |  +102 | 18.9% → 21.3% |     880 → 982 | `accumulate`                                                                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +46.2% |   +49 |   2.3% → 3.4% |     106 → 155 | `doubleValue`                                                                                                                                                   | `java.lang.Double`                                                     |
|   +71.9% |   +46 |   1.4% → 2.4% |      64 → 110 | `grow`                                                                                                                                                          | `java.util.ArrayList`                                                  |
|    +3.7% |   +38 | 22.2% → 23.2% | 1,032 → 1,070 | `helpJoin`                                                                                                                                                      | `java.util.concurrent.ForkJoinPool`                                    |
|    +0.5% |   +20 | 82.1% → 83.2% | 3,816 → 3,836 | `join`                                                                                                                                                          | `java.util.concurrent.ForkJoinTask`                                    |
|    +0.5% |   +19 | 82.1% → 83.1% | 3,815 → 3,834 | `awaitDone`                                                                                                                                                     | `java.util.concurrent.ForkJoinTask`                                    |
|   +15.7% |   +18 |   2.5% → 2.9% |     115 → 133 | `add`                                                                                                                                                           | `java.util.ArrayList`                                                  |
|    +5.7% |   +13 |   4.9% → 5.2% |     228 → 241 | `lambda$merge$6`                                                                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +5.7% |   +13 |   4.9% → 5.2% |     228 → 241 | `apply`                                                                                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |
|    +7.1% |   +12 |   3.7% → 3.9% |     170 → 182 | `copyOf`                                                                                                                                                        | `java.util.Arrays`                                                     |
|   +16.0% |   +12 |   1.6% → 1.9% |       75 → 87 | `<init>`                                                                                                                                                        | `java.util.ArrayList`                                                  |
|    +4.6% |   +10 |   4.6% → 4.9% |     216 → 226 | `Thread::call_run`                                                                                                                                              | `<unknown>`                                                            |
|    +4.6% |   +10 |   4.6% → 4.9% |     216 → 226 | `thread_native_entry`                                                                                                                                           | `<unknown>`                                                            |
|    +4.6% |   +10 |   4.7% → 4.9% |     217 → 227 | `_pthread_start`                                                                                                                                                | `<unknown>`                                                            |
|    +4.6% |   +10 |   4.7% → 4.9% |     217 → 227 | `thread_start`                                                                                                                                                  | `<unknown>`                                                            |
| +1000.0% |   +10 |  <0.1% → 0.2% |        1 → 11 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `<unknown>`                                                            |
|      new |    +9 |   0.0% → 0.2% |         0 → 9 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `<unknown>`                                                            |
|      new |    +9 |   0.0% → 0.2% |         0 → 9 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `<unknown>`                                                            |

##### Ours

|  Change | Delta |             % |       Samples | Function                   | Location                                                                              |
| ------: | ----: | ------------: | ------------: | -------------------------- | ------------------------------------------------------------------------------------- |
|  +10.1% |  +139 | 29.7% → 32.9% | 1,379 → 1,518 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +10.1% |  +139 | 29.7% → 32.9% | 1,380 → 1,519 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +11.6% |  +102 | 18.9% → 21.3% |     880 → 982 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +5.7% |   +13 |   4.9% → 5.2% |     228 → 241 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   +5.7% |   +13 |   4.9% → 5.2% |     228 → 241 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`                |
|   +0.2% |    +7 | 86.1% → 86.9% | 4,002 → 4,009 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +75.0% |    +3 |   0.1% → 0.2% |         4 → 7 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8`                |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10`                |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.3% |    +1 |   7.7% → 7.8% |     358 → 359 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +16.7% |    +1 |   0.1% → 0.2% |         6 → 7 | `lambda$generateData$5`    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `hasOverrides`             | `org.renaissance.core.BenchmarkDescriptor$Configuration`                              |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `visibleName`              | `org.renaissance.core.BenchmarkDescriptor$Configuration`                              |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `<init>`                   | `org.renaissance.core.BenchmarkDescriptor$Configuration`                              |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `getConfiguration`         | `org.renaissance.core.BenchmarkDescriptor`                                            |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `createBenchmarkContext`   | `org.renaissance.core.BenchmarkSuite`                                                 |

##### Native

|   Change | Delta |            % |   Samples | Function                                                                                                                                                        | Location    |
| -------: | ----: | -----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    +4.6% |   +10 |  4.6% → 4.9% | 216 → 226 | `Thread::call_run`                                                                                                                                              | `<unknown>` |
|    +4.6% |   +10 |  4.6% → 4.9% | 216 → 226 | `thread_native_entry`                                                                                                                                           | `<unknown>` |
|    +4.6% |   +10 |  4.7% → 4.9% | 217 → 227 | `_pthread_start`                                                                                                                                                | `<unknown>` |
|    +4.6% |   +10 |  4.7% → 4.9% | 217 → 227 | `thread_start`                                                                                                                                                  | `<unknown>` |
| +1000.0% |   +10 | <0.1% → 0.2% |    1 → 11 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `<unknown>` |
|      new |    +9 |  0.0% → 0.2% |     0 → 9 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `<unknown>` |
|      new |    +9 |  0.0% → 0.2% |     0 → 9 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `<unknown>` |
|      new |    +9 |  0.0% → 0.2% |     0 → 9 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `<unknown>` |
|      new |    +9 |  0.0% → 0.2% |     0 → 9 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `<unknown>` |
|      new |    +9 |  0.0% → 0.2% |     0 → 9 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `<unknown>` |
|   +88.9% |    +8 |  0.2% → 0.4% |    9 → 17 | `__psynch_mutexwait`                                                                                                                                            | `<unknown>` |
|   +88.9% |    +8 |  0.2% → 0.4% |    9 → 17 | `_pthread_mutex_firstfit_lock_slow`                                                                                                                             | `<unknown>` |
|   +33.3% |    +8 |  0.5% → 0.7% |   24 → 32 | `PlatformMonitor::wait`                                                                                                                                         | `<unknown>` |
|   +38.1% |    +8 |  0.5% → 0.6% |   21 → 29 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `<unknown>` |
|      new |    +8 |  0.0% → 0.2% |     0 → 8 | `G1FullGCCompactTask::compact_region`                                                                                                                           | `<unknown>` |
|      new |    +8 |  0.0% → 0.2% |     0 → 8 | `G1FullGCCompactTask::work`                                                                                                                                     | `<unknown>` |
|   +70.0% |    +7 |  0.2% → 0.4% |   10 → 17 | `semaphore_wait_trap`                                                                                                                                           | `<unknown>` |
|  +350.0% |    +7 | <0.1% → 0.2% |     2 → 9 | `VMThread::run`                                                                                                                                                 | `<unknown>` |
|  +300.0% |    +6 | <0.1% → 0.2% |     2 → 8 | `G1CollectedHeap::attempt_allocation_slow`                                                                                                                      | `<unknown>` |
|  +120.0% |    +6 |  0.1% → 0.2% |    5 → 11 | `G1FullGCMarker::follow_object`                                                                                                                                 | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function        | Location                                 |
| ------: | ----: | ------------: | ------------: | --------------- | ---------------------------------------- |
|  +46.2% |   +49 |   2.3% → 3.4% |     106 → 155 | `doubleValue`   | `java.lang.Double`                       |
|  +71.9% |   +46 |   1.4% → 2.4% |      64 → 110 | `grow`          | `java.util.ArrayList`                    |
|   +3.7% |   +38 | 22.2% → 23.2% | 1,032 → 1,070 | `helpJoin`      | `java.util.concurrent.ForkJoinPool`      |
|   +0.5% |   +20 | 82.1% → 83.2% | 3,816 → 3,836 | `join`          | `java.util.concurrent.ForkJoinTask`      |
|   +0.5% |   +19 | 82.1% → 83.1% | 3,815 → 3,834 | `awaitDone`     | `java.util.concurrent.ForkJoinTask`      |
|  +15.7% |   +18 |   2.5% → 2.9% |     115 → 133 | `add`           | `java.util.ArrayList`                    |
|   +7.1% |   +12 |   3.7% → 3.9% |     170 → 182 | `copyOf`        | `java.util.Arrays`                       |
|  +16.0% |   +12 |   1.6% → 1.9% |       75 → 87 | `<init>`        | `java.util.ArrayList`                    |
|  +80.0% |    +8 |   0.2% → 0.4% |       10 → 18 | `parkUntil`     | `java.util.concurrent.locks.LockSupport` |
|   +0.2% |    +7 | 86.1% → 86.9% | 4,002 → 4,009 | `exec`          | `java.util.concurrent.RecursiveTask`     |
| +100.0% |    +7 |   0.2% → 0.3% |        7 → 14 | `tryCompensate` | `java.util.concurrent.ForkJoinPool`      |
|  +40.0% |    +4 |   0.2% → 0.3% |       10 → 14 | `putMapEntries` | `java.util.HashMap`                      |
|  +40.0% |    +4 |   0.2% → 0.3% |       10 → 14 | `<init>`        | `java.util.HashMap`                      |
|  +42.9% |    +3 |          0.2% |        7 → 10 | `defineClass1`  | `java.lang.ClassLoader`                  |
|  +42.9% |    +3 |          0.2% |        7 → 10 | `defineClass`   | `java.lang.ClassLoader`                  |
|  +42.9% |    +3 |          0.2% |        7 → 10 | `defineClass`   | `java.security.SecureClassLoader`        |
|  +21.4% |    +3 |   0.3% → 0.4% |       14 → 17 | `loadClass`     | `java.lang.ClassLoader`                  |
|   +2.0% |    +3 |   3.3% → 3.4% |     152 → 155 | `addAll`        | `java.util.ArrayList`                    |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `nextNode`      | `java.util.HashMap$HashIterator`         |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `next`          | `java.util.HashMap$EntryIterator`        |

##### JIT

| Change | Delta |            % | Samples | Function                   | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xaaa)`  | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub`              | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
|  +12.5% |    +6 |  1.0% → 1.2% | 48 → 54 | `C2Compiler::compile_method`                | `<unknown>` |
|  +31.3% |    +5 |  0.3% → 0.5% | 16 → 21 | `Compile::Optimize`                         | `<unknown>` |
|  +10.2% |    +5 |  1.1% → 1.2% | 49 → 54 | `Compile::Compile`                          | `<unknown>` |
|   +6.5% |    +5 |  1.7% → 1.8% | 77 → 82 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
|  +36.4% |    +4 |  0.2% → 0.3% | 11 → 15 | `CompileQueue::get`                         | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `LinearScan::allocate_registers`            | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `PhaseLive::compute`                        | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  +27.3% |    +3 |  0.2% → 0.3% | 11 → 14 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  +27.3% |    +3 |  0.2% → 0.3% | 11 → 14 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
|  +23.1% |    +3 |         0.3% | 13 → 16 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `LinearScanWalker::activate_current`        | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `IntervalWalker::walk_to`                   | `<unknown>` |
|  +75.0% |    +3 |  0.1% → 0.2% |   4 → 7 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseGVN::transform_no_reclaim`            | `<unknown>` |
|  +15.4% |    +2 |         0.3% | 13 → 15 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
|   +3.1% |    +2 |  1.4% → 1.5% | 65 → 67 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `CompilationPolicy::event`                  | `<unknown>` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `PhaseIterGVN::optimize`                    | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `RegionNode::is_CFG`                        | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                        | Location                                                               |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -29.4% |  -257 | 18.8% → 13.4% |     873 → 616 | `distance`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -9.6% |  -164 | 37.0% → 33.7% | 1,717 → 1,553 | `computeDirectly`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.9% |  -154 | 27.8% → 24.7% | 1,291 → 1,137 | `findNearestCentroid`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -10.8% |   -51 |  10.1% → 9.1% |     471 → 420 | `lambda$run$0`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.8% |   -51 |  10.1% → 9.1% |     471 → 420 | `call`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |
| -10.8% |   -51 |  10.1% → 9.1% |     471 → 420 | `exec`                                                          | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -4.5% |   -43 | 20.5% → 19.7% |     953 → 910 | `invoke`                                                        | `java.util.concurrent.ForkJoinTask`                                    |
|  -0.8% |   -34 |         94.2% | 4,376 → 4,342 | `runWorker`                                                     | `java.util.concurrent.ForkJoinPool`                                    |
|  -0.8% |   -34 |         94.2% | 4,376 → 4,342 | `run`                                                           | `java.util.concurrent.ForkJoinWorkerThread`                            |
| -14.5% |   -32 |   4.7% → 4.1% |     220 → 188 | `get`                                                           | `java.util.ArrayList`                                                  |
|  -9.2% |   -29 |   6.8% → 6.2% |     315 → 286 | `awaitWork`                                                     | `java.util.concurrent.ForkJoinPool`                                    |
| -44.2% |   -23 |   1.1% → 0.6% |       52 → 29 | `checkIndex`                                                    | `java.util.Objects`                                                    |
| -12.9% |   -20 |   3.3% → 2.9% |     155 → 135 | `computeIfAbsent`                                               | `java.util.HashMap`                                                    |
| -40.0% |   -20 |   1.1% → 0.7% |       50 → 30 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>`                                                            |
|  -2.4% |   -18 | 16.1% → 15.8% |     747 → 729 | `park`                                                          | `java.util.concurrent.locks.LockSupport`                               |
| -27.6% |   -16 |   1.2% → 0.9% |       58 → 42 | `zero_blocks`                                                   | `<unknown>`                                                            |
| -28.8% |   -15 |   1.1% → 0.8% |       52 → 37 | `G1FullGCMarker::follow_marking_stacks`                         | `<unknown>`                                                            |
|  -5.1% |   -12 |   5.1% → 4.9% |     237 → 225 | `forward_copy_longs`                                            | `<unknown>`                                                            |
|  -1.5% |   -11 | 16.3% → 16.2% |     757 → 746 | `park`                                                          | `jdk.internal.misc.Unsafe`                                             |
| -27.5% |   -11 |   0.9% → 0.6% |       40 → 29 | `G1FullGCMarker::mark_object`                                   | `<unknown>`                                                            |

##### Ours

| Change | Delta |             % |       Samples | Function                    | Location                                                               |
| -----: | ----: | ------------: | ------------: | --------------------------- | ---------------------------------------------------------------------- |
| -29.4% |  -257 | 18.8% → 13.4% |     873 → 616 | `distance`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -9.6% |  -164 | 37.0% → 33.7% | 1,717 → 1,553 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.9% |  -154 | 27.8% → 24.7% | 1,291 → 1,137 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -10.8% |   -51 |  10.1% → 9.1% |     471 → 420 | `lambda$run$0`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.8% |   -51 |  10.1% → 9.1% |     471 → 420 | `call`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |
|  -2.1% |    -9 |   9.1% → 9.0% |     425 → 416 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.6% |    -9 |   7.4% → 7.3% |     344 → 335 | `accept`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
| -16.3% |    -7 |   0.9% → 0.8% |       43 → 36 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
| -15.9% |    -7 |   0.9% → 0.8% |       44 → 37 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
| -15.9% |    -7 |   0.9% → 0.8% |       44 → 37 | `main`                      | `org.renaissance.core.Launcher`                                        |
| -17.1% |    -6 |   0.8% → 0.6% |       35 → 29 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
| -16.2% |    -6 |   0.8% → 0.7% |       37 → 31 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  -1.8% |    -6 |          7.3% |     341 → 335 | `lambda$merge$7`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.8% |    -5 |         13.9% |     646 → 641 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -83.3% |    -5 |  0.1% → <0.1% |         6 → 1 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48` |
|  -0.6% |    -4 |         13.8% |     640 → 636 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -0.6% |    -4 |         13.9% |     646 → 642 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -20.0% |    -3 |          0.3% |       15 → 12 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                              |
| -15.8% |    -3 |   0.4% → 0.3% |       19 → 16 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                            |
| -15.8% |    -3 |   0.4% → 0.3% |       19 → 16 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |

##### Native

| Change | Delta |             % |   Samples | Function                                                        | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------- | ----------- |
| -40.0% |   -20 |   1.1% → 0.7% |   50 → 30 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
| -28.8% |   -15 |   1.1% → 0.8% |   52 → 37 | `G1FullGCMarker::follow_marking_stacks`                         | `<unknown>` |
|  -5.1% |   -12 |   5.1% → 4.9% | 237 → 225 | `forward_copy_longs`                                            | `<unknown>` |
| -27.5% |   -11 |   0.9% → 0.6% |   40 → 29 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
| -78.6% |   -11 |   0.3% → 0.1% |    14 → 3 | `G1RegionMarkStatsCache::add_live_words`                        | `<unknown>` |
| -73.3% |   -11 |   0.3% → 0.1% |    15 → 4 | `G1AdjustRegionClosure::do_heap_region`                         | `<unknown>` |
| -73.3% |   -11 |   0.3% → 0.1% |    15 → 4 | `HeapRegionManager::par_iterate`                                | `<unknown>` |
| -73.3% |   -11 |   0.3% → 0.1% |    15 → 4 | `G1FullGCAdjustTask::work`                                      | `<unknown>` |
| -27.8% |   -10 |   0.8% → 0.6% |   36 → 26 | `G1EvacuateRegionsTask::evacuate_live_objects`                  | `<unknown>` |
|  -1.2% |    -9 | 16.0% → 15.9% | 743 → 734 | `Parker::park`                                                  | `<unknown>` |
|  -1.2% |    -9 | 16.3% → 16.2% | 755 → 746 | `Unsafe_Park`                                                   | `<unknown>` |
|  -4.5% |    -9 |   4.3% → 4.2% | 202 → 193 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>` |
| -25.7% |    -9 |   0.8% → 0.6% |   35 → 26 | `G1ParEvacuateFollowersClosure::do_void`                        | `<unknown>` |
| -13.0% |    -9 |   1.5% → 1.3% |   69 → 60 | `G1FullGCMarker::complete_marking`                              | `<unknown>` |
| -13.0% |    -9 |   1.5% → 1.3% |   69 → 60 | `G1FullGCMarkTask::work`                                        | `<unknown>` |
| -69.2% |    -9 |   0.3% → 0.1% |    13 → 4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>` |
| -61.5% |    -8 |   0.3% → 0.1% |    13 → 5 | `G1ParEvacuateFollowersClosure::offer_termination`              | `<unknown>` |
| -53.8% |    -7 |   0.3% → 0.1% |    13 → 6 | `TaskTerminator::offer_termination`                             | `<unknown>` |
|  -9.8% |    -6 |   1.3% → 1.2% |   61 → 55 | `__psynch_cvsignal`                                             | `<unknown>` |
| -28.6% |    -6 |   0.5% → 0.3% |   21 → 15 | `G1ParScanThreadState::steal_and_trim_queue`                    | `<unknown>` |

##### Standard library

| Change | Delta |             % |       Samples | Function            | Location                                             |
| -----: | ----: | ------------: | ------------: | ------------------- | ---------------------------------------------------- |
| -10.8% |   -51 |  10.1% → 9.1% |     471 → 420 | `exec`              | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  -4.5% |   -43 | 20.5% → 19.7% |     953 → 910 | `invoke`            | `java.util.concurrent.ForkJoinTask`                  |
|  -0.8% |   -34 |         94.2% | 4,376 → 4,342 | `runWorker`         | `java.util.concurrent.ForkJoinPool`                  |
|  -0.8% |   -34 |         94.2% | 4,376 → 4,342 | `run`               | `java.util.concurrent.ForkJoinWorkerThread`          |
| -14.5% |   -32 |   4.7% → 4.1% |     220 → 188 | `get`               | `java.util.ArrayList`                                |
|  -9.2% |   -29 |   6.8% → 6.2% |     315 → 286 | `awaitWork`         | `java.util.concurrent.ForkJoinPool`                  |
| -44.2% |   -23 |   1.1% → 0.6% |       52 → 29 | `checkIndex`        | `java.util.Objects`                                  |
| -12.9% |   -20 |   3.3% → 2.9% |     155 → 135 | `computeIfAbsent`   | `java.util.HashMap`                                  |
|  -2.4% |   -18 | 16.1% → 15.8% |     747 → 729 | `park`              | `java.util.concurrent.locks.LockSupport`             |
|  -1.5% |   -11 | 16.3% → 16.2% |     757 → 746 | `park`              | `jdk.internal.misc.Unsafe`                           |
| -17.5% |   -10 |   1.2% → 1.0% |       57 → 47 | `signalWaiters`     | `java.util.concurrent.ForkJoinTask`                  |
| -17.5% |   -10 |   1.2% → 1.0% |       57 → 47 | `setDone`           | `java.util.concurrent.ForkJoinTask`                  |
| -18.4% |    -7 |   0.8% → 0.7% |       38 → 31 | `invoke`            | `java.lang.reflect.Method`                           |
|  -2.0% |    -7 |   7.5% → 7.4% |     348 → 341 | `forEach`           | `java.util.HashMap`                                  |
|  -4.2% |    -7 |   3.6% → 3.4% |     165 → 158 | `elementData`       | `java.util.ArrayList`                                |
| -16.2% |    -6 |   0.8% → 0.7% |       37 → 31 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| -16.2% |    -6 |   0.8% → 0.7% |       37 → 31 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
| -16.2% |    -6 |   0.8% → 0.7% |       37 → 31 | `invokeImpl`        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -16.2% |    -6 |   0.8% → 0.7% |       37 → 31 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -54.5% |    -6 |   0.2% → 0.1% |        11 → 5 | `inflateBytesBytes` | `java.util.zip.Inflater`                             |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -27.6% |   -16 | 1.2% → 0.9% | 58 → 42 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                             | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
|  -62.5% |    -5 |  0.2% → 0.1% |   8 → 3 | `Compile::optimize_loops`            | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `PhaseOutput::Output`                | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseIdealLoop::Dominators`         | `<unknown>` |
|  -10.7% |    -3 |  0.6% → 0.5% | 28 → 25 | `Compile::Code_Gen`                  | `<unknown>` |
|  -18.8% |    -3 |         0.3% | 16 → 13 | `Compilation::compile_method`        | `<unknown>` |
|  -18.8% |    -3 |         0.3% | 16 → 13 | `Compilation::Compilation`           | `<unknown>` |
|  -13.3% |    -2 |         0.3% | 15 → 13 | `Compilation::compile_java_method`   | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `Matcher::Label_Root`                | `<unknown>` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `Matcher::match`                     | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MachNode::rematerialize`            | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::Split`                | `<unknown>` |
|  -25.0% |    -2 |  0.2% → 0.1% |   8 → 6 | `Compilation::build_hir`             | `<unknown>` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `GraphBuilder::GraphBuilder`         | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseOutput::fill_buffer`           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::hash`                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::lazy_replace`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Scheduling::AddNodeToAvailableList` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::find_long_type`               | `<unknown>` |
|  -33.3% |    -1 | 0.1% → <0.1% |   3 → 2 | `Matcher::match_tree`                | `<unknown>` |

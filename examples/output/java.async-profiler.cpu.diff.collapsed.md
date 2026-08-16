# Sampling profile diff

Collected 4,869 samples → 4,711 samples (-158 samples, -3.2%).

| Category         |  Change | Delta |             % |       Samples |
| ---------------- | ------: | ----: | ------------: | ------------: |
| Ours             |   -3.7% |  -108 | 60.3% → 60.1% | 2,937 → 2,829 |
| Native           |   +2.9% |   +31 | 21.9% → 23.3% | 1,068 → 1,099 |
| Standard library |   -6.5% |   -48 | 15.1% → 14.5% |     733 → 685 |
| Compiler         |   -3.7% |    -2 |          1.1% |       54 → 52 |
| JIT              |  -38.7% |   -29 |   1.5% → 1.0% |       75 → 46 |
| Unknown          | removed |    -2 |  <0.1% → 0.0% |         2 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                          | Location                                                  |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  +18.8% |   +79 |  8.6% → 10.6% | 420 → 499 | `vectorSum`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +11.7% |   +18 |   3.2% → 3.7% | 154 → 172 | `elementData`                                                                     | `java.util.ArrayList`                                     |
| +360.0% |   +18 |   0.1% → 0.5% |    5 → 23 | `semaphore_wait_trap`                                                             | `<unknown>`                                               |
|  +28.3% |   +13 |   0.9% → 1.3% |   46 → 59 | `__psynch_cvsignal`                                                               | `<unknown>`                                               |
|   +1.2% |   +12 | 19.8% → 20.7% | 962 → 974 | `accumulate`                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|   +2.0% |   +11 | 11.2% → 11.8% | 545 → 556 | `__psynch_cvwait`                                                                 | `<unknown>`                                               |
|     new |    +8 |   0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `<unknown>`                                               |
| +233.3% |    +7 |   0.1% → 0.2% |    3 → 10 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `<unknown>`                                               |
|  +43.8% |    +7 |   0.3% → 0.5% |   16 → 23 | `__psynch_mutexwait`                                                              | `<unknown>`                                               |
|  +35.3% |    +6 |   0.3% → 0.5% |   17 → 23 | `_platform_bzero`                                                                 | `<unknown>`                                               |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `addAll`                                                                          | `java.util.ArrayList`                                     |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `HeapRegionManager::par_iterate`                                                  | `<unknown>`                                               |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `compute`                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |
|   +9.7% |    +3 |   0.6% → 0.7% |   31 → 34 | `helpJoin`                                                                        | `java.util.concurrent.ForkJoinPool`                       |
|   +5.2% |    +3 |   1.2% → 1.3% |   58 → 61 | `add`                                                                             | `java.util.ArrayList`                                     |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `read`                                                                            | `<unknown>`                                               |
|  +18.2% |    +2 |   0.2% → 0.3% |   11 → 13 | `arrayof_jint_disjoint_arraycopy`                                                 | `<unknown>`                                               |
|   +6.5% |    +2 |   0.6% → 0.7% |   31 → 33 | `hash`                                                                            | `java.util.HashMap`                                       |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`                                               |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `__psynch_mutexdrop`                                                              | `<unknown>`                                               |

##### Ours

|  Change | Delta |             % |   Samples | Function                | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------- | ---------------------------------------------------------- |
|  +18.8% |   +79 |  8.6% → 10.6% | 420 → 499 | `vectorSum`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +1.2% |   +12 | 19.8% → 20.7% | 962 → 974 | `accumulate`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `compute`               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                   | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +360.0% |   +18 |   0.1% → 0.5% |    5 → 23 | `semaphore_wait_trap`                                                                                                                                      | `<unknown>` |
|  +28.3% |   +13 |   0.9% → 1.3% |   46 → 59 | `__psynch_cvsignal`                                                                                                                                        | `<unknown>` |
|   +2.0% |   +11 | 11.2% → 11.8% | 545 → 556 | `__psynch_cvwait`                                                                                                                                          | `<unknown>` |
|     new |    +8 |   0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`                                                                          | `<unknown>` |
| +233.3% |    +7 |   0.1% → 0.2% |    3 → 10 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                          | `<unknown>` |
|  +43.8% |    +7 |   0.3% → 0.5% |   16 → 23 | `__psynch_mutexwait`                                                                                                                                       | `<unknown>` |
|  +35.3% |    +6 |   0.3% → 0.5% |   17 → 23 | `_platform_bzero`                                                                                                                                          | `<unknown>` |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `HeapRegionManager::par_iterate`                                                                                                                           | `<unknown>` |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `read`                                                                                                                                                     | `<unknown>` |
|  +18.2% |    +2 |   0.2% → 0.3% |   11 → 13 | `arrayof_jint_disjoint_arraycopy`                                                                                                                          | `<unknown>` |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `arrayof_oop_disjoint_arraycopy`                                                                                                                           | `<unknown>` |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `__psynch_mutexdrop`                                                                                                                                       | `<unknown>` |
|  +66.7% |    +2 |          0.1% |     3 → 5 | `G1FullGCMarker::follow_object`                                                                                                                            | `<unknown>` |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                               | `<unknown>` |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2`                                                 | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `_sigtramp`                                                                                                                                                | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `InstanceKlass::find_method_index`                                                                                                                         | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `SpinPause`                                                                                                                                                | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `Klass::check_array_allocation_length`                                                                                                                     | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function              | Location                                        |
| ------: | ----: | -----------: | --------: | --------------------- | ----------------------------------------------- |
|  +11.7% |   +18 |  3.2% → 3.7% | 154 → 172 | `elementData`         | `java.util.ArrayList`                           |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `addAll`              | `java.util.ArrayList`                           |
|   +9.7% |    +3 |  0.6% → 0.7% |   31 → 34 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`             |
|   +5.2% |    +3 |  1.2% → 1.3% |   58 → 61 | `add`                 | `java.util.ArrayList`                           |
|   +6.5% |    +2 |  0.6% → 0.7% |   31 → 33 | `hash`                | `java.util.HashMap`                             |
|  +33.3% |    +1 |         0.1% |     3 → 4 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `scan`                | `java.util.concurrent.ForkJoinPool`             |
|  +25.0% |    +1 |         0.1% |     4 → 5 | `runWorker`           | `java.util.concurrent.ForkJoinPool`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `park`                | `jdk.internal.misc.Unsafe`                      |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `park`                | `java.util.concurrent.locks.LockSupport`        |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `unpark`              | `java.util.concurrent.locks.LockSupport`        |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `awaitWork`           | `java.util.concurrent.ForkJoinPool`             |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `resize`              | `java.util.HashMap`                             |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `push`                | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `evaluateToArrayNode` | `java.util.stream.AbstractPipeline`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `newNode`             | `java.util.HashMap`                             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `spliterator`         | `java.util.Arrays`                              |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `begin`               | `java.util.stream.Nodes$FixedNodeBuilder`       |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `forEachRemaining`    | `java.util.Spliterators$DoubleArraySpliterator` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `valuesToArray`       | `java.util.HashMap`                             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCCP::transform`                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Backward_Iterator::next`              | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::find_shared`                      | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseChaitin::Split`                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::Label_Root`                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::ReduceInst`                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciBytecodeStream::reset_to_bci`            | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IdealKit::make_leaf_call`                  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeKlassPtr::exact_klass_helper`          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::schedule_early`                  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AbstractAssembler::bind`                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::build_intervals`               | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CProjNode::is_CFG`                         | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AddPNode::Opcode`                          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::select`                          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::remove_empty_blocks`             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Array::grow`                          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::ReduceOper`                       | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                        | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------- | ---------------------------------------------------------- |
|  -20.3% |   -90 |   9.1% → 7.5% | 444 → 354 | `findNearestCentroid`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.1% |   -78 | 19.8% → 18.8% | 965 → 887 | `distance`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.8% |   -35 |   2.9% → 2.3% | 141 → 106 | `doubleValue`                                                   | `java.lang.Double`                                         |
|  -21.7% |   -28 |   2.6% → 2.1% | 129 → 101 | `collectClusters`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -37.0% |   -27 |   1.5% → 1.0% |   73 → 46 | `zero_blocks`                                                   | `<unknown>`                                                |
|  -42.6% |   -20 |   1.0% → 0.6% |   47 → 27 | `checkIndex`                                                    | `java.util.Objects`                                        |
|  -10.1% |   -15 |   3.0% → 2.8% | 148 → 133 | `computeIfAbsent`                                               | `java.util.HashMap`                                        |
|  -56.0% |   -14 |   0.5% → 0.2% |   25 → 11 | `G1FullGCMarker::mark_object`                                   | `<unknown>`                                                |
|  -33.3% |   -11 |   0.7% → 0.5% |   33 → 22 | `grow`                                                          | `java.util.ArrayList`                                      |
|   -4.3% |    -9 |   4.3% → 4.2% | 207 → 198 | `forward_copy_longs`                                            | `<unknown>`                                                |
|  -56.3% |    -9 |   0.3% → 0.1% |    16 → 7 | `_platform_memset`                                              | `<unknown>`                                                |
|  -87.5% |    -7 |  0.2% → <0.1% |     8 → 1 | `G1RegionMarkStatsCache::add_live_words`                        | `<unknown>`                                                |
|  -62.5% |    -5 |   0.2% → 0.1% |     8 → 3 | `inflate_fast`                                                  | `<unknown>`                                                |
|  -44.4% |    -4 |   0.2% → 0.1% |     9 → 5 | `copyOf`                                                        | `java.util.Arrays`                                         |
|  -66.7% |    -4 |  0.1% → <0.1% |     6 → 2 | `ObjArrayAllocator::initialize`                                 | `<unknown>`                                                |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `newLength`                                                     | `jdk.internal.util.ArraysSupport`                          |
|  -57.1% |    -4 |          0.1% |     7 → 3 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>`                                                |
|  -66.7% |    -4 |  0.1% → <0.1% |     6 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>`                                                |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `fwd_copy_again`                                                | `<unknown>`                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `getAndClearSlot`                                               | `java.util.concurrent.ForkJoinPool$WorkQueue`              |

##### Ours

|  Change | Delta |             % |   Samples | Function                   | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------------------------------------- |
|  -20.3% |   -90 |   9.1% → 7.5% | 444 → 354 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.1% |   -78 | 19.8% → 18.8% | 965 → 887 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -21.7% |   -28 |   2.6% → 2.1% | 129 → 101 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -50.0% |    -2 |  0.1% → <0.1% |     4 → 2 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                        | Location    |
| ------: | ----: | -----------: | --------: | ----------------------------------------------------------------------------------------------- | ----------- |
|  -56.0% |   -14 |  0.5% → 0.2% |   25 → 11 | `G1FullGCMarker::mark_object`                                                                   | `<unknown>` |
|   -4.3% |    -9 |  4.3% → 4.2% | 207 → 198 | `forward_copy_longs`                                                                            | `<unknown>` |
|  -56.3% |    -9 |  0.3% → 0.1% |    16 → 7 | `_platform_memset`                                                                              | `<unknown>` |
|  -87.5% |    -7 | 0.2% → <0.1% |     8 → 1 | `G1RegionMarkStatsCache::add_live_words`                                                        | `<unknown>` |
|  -62.5% |    -5 |  0.2% → 0.1% |     8 → 3 | `inflate_fast`                                                                                  | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |     6 → 2 | `ObjArrayAllocator::initialize`                                                                 | `<unknown>` |
|  -57.1% |    -4 |         0.1% |     7 → 3 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |     6 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                 | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `fwd_copy_again`                                                                                | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `G1BarrierSet::invalidate`                                                                      | `<unknown>` |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                 | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `klassVtable::get_mirandas`                                                                     | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `inflate_table`                                                                                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `DefaultMethods::generate_default_methods`                                                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `IdealLoopTree::policy_range_check`                                                             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `Unsafe_Unpark`                                                                                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `G1FullGCCompactTask::compact_region`                                                           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `JavaThread::is_interrupted`                                                                    | `<unknown>` |
|   -5.0% |    -1 |         0.4% |   20 → 19 | `pthread_jit_write_protect_np`                                                                  | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function           | Location                                      |
| ------: | ----: | -----------: | --------: | ------------------ | --------------------------------------------- |
|  -24.8% |   -35 |  2.9% → 2.3% | 141 → 106 | `doubleValue`      | `java.lang.Double`                            |
|  -42.6% |   -20 |  1.0% → 0.6% |   47 → 27 | `checkIndex`       | `java.util.Objects`                           |
|  -10.1% |   -15 |  3.0% → 2.8% | 148 → 133 | `computeIfAbsent`  | `java.util.HashMap`                           |
|  -33.3% |   -11 |  0.7% → 0.5% |   33 → 22 | `grow`             | `java.util.ArrayList`                         |
|  -44.4% |    -4 |  0.2% → 0.1% |     9 → 5 | `copyOf`           | `java.util.Arrays`                            |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `newLength`        | `jdk.internal.util.ArraysSupport`             |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `getAndClearSlot`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `join`             | `java.util.concurrent.ForkJoinTask`           |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `forEach`          | `java.util.HashMap`                           |
|  -16.7% |    -2 |         0.2% |   12 → 10 | `merge`            | `java.util.HashMap`                           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `size`             | `java.util.ArrayList`                         |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `nextNode`         | `java.util.HashMap$HashIterator`              |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `signalWaiters`    | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `fork`             | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `substring`        | `java.lang.String`                            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `compareAndSet`    | `java.util.concurrent.atomic.AtomicLong`      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `accept`           | `java.util.stream.IntPipeline$1$1`            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `verify`           | `jdk.internal.jimage.ImageLocation`           |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `getAndSetAccess`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `compareAndSetCtl` | `java.util.concurrent.ForkJoinPool`           |

##### JIT

|  Change | Delta |            % | Samples | Function      | Location    |
| ------: | ----: | -----------: | ------: | ------------- | ----------- |
|  -37.0% |   -27 |  1.5% → 1.0% | 73 → 46 | `zero_blocks` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `vtable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                              | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::needs_anti_dependence_check`   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_early`    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IndexSet::initialize`                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::pd_clone_node`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `HaltNode::is_CFG`                    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::assign_reg_num`          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::raise_pressure`        | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `PhaseChaitin::build_ifg_physical`    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInstPtr::hash`                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::int_pressure_limit`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInterfaces::hash`                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ValueStack::ValueStack`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GraphBuilder::append_with_bci`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInt::eq`                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `storeLNode::emit`                    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseOutput::shorten_branches`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegionNode::Ideal`                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_loop`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                          | Location                                                  |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------- | --------------------------------------------------------- |
|   +9.7% |   +66 | 14.0% → 15.9% |     682 → 748 | `computeClusterAverages`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   +9.7% |   +66 | 14.0% → 15.9% |     682 → 748 | `computeDirectly`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   +8.7% |   +59 | 14.0% → 15.7% |     680 → 739 | `average`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   +3.2% |   +51 | 32.8% → 35.0% | 1,599 → 1,650 | `vectorSum`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|   +3.1% |   +49 | 32.9% → 35.0% | 1,601 → 1,650 | `computeDirectly`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|   +4.4% |   +43 | 20.1% → 21.7% |   981 → 1,024 | `invoke`                                          | `java.util.concurrent.ForkJoinTask`                       |
|     new |   +33 |   0.0% → 0.7% |        0 → 33 | `invokeStatic`                                    | `java.lang.invoke.LambdaForm$DMH.0x0000000401004800`      |
|     new |   +33 |   0.0% → 0.7% |        0 → 33 | `invoke`                                          | `java.lang.invoke.LambdaForm$MH.0x0000000401009800`       |
|  +11.7% |   +18 |   3.2% → 3.7% |     154 → 172 | `elementData`                                     | `java.util.ArrayList`                                     |
| +360.0% |   +18 |   0.1% → 0.5% |        5 → 23 | `semaphore_wait_trap`                             | `<unknown>`                                               |
|   +2.6% |   +14 | 11.0% → 11.7% |     536 → 550 | `park`                                            | `java.util.concurrent.locks.LockSupport`                  |
|  +26.9% |   +14 |   1.1% → 1.4% |       52 → 66 | `Unsafe_Unpark`                                   | `<unknown>`                                               |
|  +26.4% |   +14 |   1.1% → 1.4% |       53 → 67 | `unpark`                                          | `java.util.concurrent.locks.LockSupport`                  |
|  +28.3% |   +13 |   0.9% → 1.3% |       46 → 59 | `__psynch_cvsignal`                               | `<unknown>`                                               |
|  +24.5% |   +13 |   1.1% → 1.4% |       53 → 66 | `unpark`                                          | `jdk.internal.misc.Unsafe`                                |
| +260.0% |   +13 |   0.1% → 0.4% |        5 → 18 | `CompileQueue::get`                               | `<unknown>`                                               |
| +240.0% |   +12 |   0.1% → 0.4% |        5 → 17 | `Monitor::wait`                                   | `<unknown>`                                               |
|   +2.0% |   +11 | 11.2% → 11.8% |     545 → 556 | `__psynch_cvwait`                                 | `<unknown>`                                               |
|   +7.6% |   +11 |   3.0% → 3.3% |     145 → 156 | `addAll`                                          | `java.util.ArrayList`                                     |
| +366.7% |   +11 |   0.1% → 0.3% |        3 → 14 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>`                                               |

##### Ours

|  Change | Delta |             % |       Samples | Function                          | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------------- | ---------------------------------------------------------------------- |
|   +9.7% |   +66 | 14.0% → 15.9% |     682 → 748 | `computeClusterAverages`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +9.7% |   +66 | 14.0% → 15.9% |     682 → 748 | `computeDirectly`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +8.7% |   +59 | 14.0% → 15.7% |     680 → 739 | `average`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +3.2% |   +51 | 32.8% → 35.0% | 1,599 → 1,650 | `vectorSum`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +3.1% |   +49 | 32.9% → 35.0% | 1,601 → 1,650 | `computeDirectly`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +700.0% |    +7 |  <0.1% → 0.2% |         1 → 8 | `boxed`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +300.0% |    +6 |  <0.1% → 0.2% |         2 → 8 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011258d8` |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `lambda$generateData$5`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +16.7% |    +2 |   0.2% → 0.3% |       12 → 14 | `executeBenchmark`                | `org.renaissance.harness.ExecutionDriver`                              |
|   +6.7% |    +2 |   0.6% → 0.7% |       30 → 32 | `main`                            | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +6.5% |    +2 |   0.6% → 0.7% |       31 → 33 | `main`                            | `org.renaissance.harness.RenaissanceSuite`                             |
|   +5.6% |    +2 |   0.7% → 0.8% |       36 → 38 | `loadAndInvokeHarnessClass`       | `org.renaissance.core.Launcher`                                        |
|   +5.4% |    +2 |          0.8% |       37 → 39 | `launchHarnessClass`              | `org.renaissance.core.Launcher`                                        |
|   +5.4% |    +2 |          0.8% |       37 → 39 | `main`                            | `org.renaissance.core.Launcher`                                        |
|   +0.9% |    +2 |   4.5% → 4.7% |     219 → 221 | `lambda$merge$6`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.9% |    +2 |   4.5% → 4.7% |     219 → 221 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218` |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `combineResults`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `deleteRecursively`               | `org.renaissance.core.DirUtils`                                        |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `lambda$createScratchDirectory$1` | `org.renaissance.core.DirUtils`                                        |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `run`                             | `org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68`             |

##### Native

|   Change | Delta |             % |   Samples | Function                                                                                                                                                        | Location    |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +360.0% |   +18 |   0.1% → 0.5% |    5 → 23 | `semaphore_wait_trap`                                                                                                                                           | `<unknown>` |
|   +26.9% |   +14 |   1.1% → 1.4% |   52 → 66 | `Unsafe_Unpark`                                                                                                                                                 | `<unknown>` |
|   +28.3% |   +13 |   0.9% → 1.3% |   46 → 59 | `__psynch_cvsignal`                                                                                                                                             | `<unknown>` |
|  +240.0% |   +12 |   0.1% → 0.4% |    5 → 17 | `Monitor::wait`                                                                                                                                                 | `<unknown>` |
|    +2.0% |   +11 | 11.2% → 11.8% | 545 → 556 | `__psynch_cvwait`                                                                                                                                               | `<unknown>` |
|  +366.7% |   +11 |   0.1% → 0.3% |    3 → 14 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `<unknown>` |
| +1100.0% |   +11 |  <0.1% → 0.3% |    1 → 12 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `<unknown>` |
|  +333.3% |   +10 |   0.1% → 0.3% |    3 → 13 | `Mutex::lock_without_safepoint_check`                                                                                                                           | `<unknown>` |
|   +29.0% |    +9 |   0.6% → 0.8% |   31 → 40 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `<unknown>` |
|    +1.5% |    +8 | 11.2% → 11.7% | 543 → 551 | `Unsafe_Park`                                                                                                                                                   | `<unknown>` |
|      new |    +8 |   0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`                                                                               | `<unknown>` |
|      new |    +8 |   0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`                                                                                             | `<unknown>` |
|      new |    +8 |   0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::work`                                                                                                                               | `<unknown>` |
|    +1.3% |    +7 | 11.0% → 11.5% | 535 → 542 | `Parker::park`                                                                                                                                                  | `<unknown>` |
|   +15.9% |    +7 |   0.9% → 1.1% |   44 → 51 | `OptoRuntime::new_array_C`                                                                                                                                      | `<unknown>` |
|   +43.8% |    +7 |   0.3% → 0.5% |   16 → 23 | `__psynch_mutexwait`                                                                                                                                            | `<unknown>` |
|   +43.8% |    +7 |   0.3% → 0.5% |   16 → 23 | `_pthread_mutex_firstfit_lock_slow`                                                                                                                             | `<unknown>` |
|      new |    +7 |   0.0% → 0.1% |     0 → 7 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `<unknown>` |
|      new |    +7 |   0.0% → 0.1% |     0 → 7 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `<unknown>` |
|      new |    +7 |   0.0% → 0.1% |     0 → 7 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                     | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------- | ---------------------------------------------------- |
|   +4.4% |   +43 | 20.1% → 21.7% |   981 → 1,024 | `invoke`                     | `java.util.concurrent.ForkJoinTask`                  |
|     new |   +33 |   0.0% → 0.7% |        0 → 33 | `invokeStatic`               | `java.lang.invoke.LambdaForm$DMH.0x0000000401004800` |
|     new |   +33 |   0.0% → 0.7% |        0 → 33 | `invoke`                     | `java.lang.invoke.LambdaForm$MH.0x0000000401009800`  |
|  +11.7% |   +18 |   3.2% → 3.7% |     154 → 172 | `elementData`                | `java.util.ArrayList`                                |
|   +2.6% |   +14 | 11.0% → 11.7% |     536 → 550 | `park`                       | `java.util.concurrent.locks.LockSupport`             |
|  +26.4% |   +14 |   1.1% → 1.4% |       53 → 67 | `unpark`                     | `java.util.concurrent.locks.LockSupport`             |
|  +24.5% |   +13 |   1.1% → 1.4% |       53 → 66 | `unpark`                     | `jdk.internal.misc.Unsafe`                           |
|   +7.6% |   +11 |   3.0% → 3.3% |     145 → 156 | `addAll`                     | `java.util.ArrayList`                                |
|   +1.8% |   +10 | 11.2% → 11.8% |     544 → 554 | `park`                       | `jdk.internal.misc.Unsafe`                           |
| +200.0% |    +8 |   0.1% → 0.3% |        4 → 12 | `evaluateToArrayNode`        | `java.util.stream.AbstractPipeline`                  |
| +200.0% |    +8 |   0.1% → 0.3% |        4 → 12 | `toArray`                    | `java.util.stream.ReferencePipeline`                 |
| +114.3% |    +8 |   0.1% → 0.3% |        7 → 15 | `tryCompensate`              | `java.util.concurrent.ForkJoinPool`                  |
|  +13.6% |    +6 |   0.9% → 1.1% |       44 → 50 | `signalWaiters`              | `java.util.concurrent.ForkJoinTask`                  |
|  +13.3% |    +6 |   0.9% → 1.1% |       45 → 51 | `setDone`                    | `java.util.concurrent.ForkJoinTask`                  |
|   +0.5% |    +5 | 21.4% → 22.2% | 1,040 → 1,045 | `helpJoin`                   | `java.util.concurrent.ForkJoinPool`                  |
|  +50.0% |    +4 |   0.2% → 0.3% |        8 → 12 | `evaluate`                   | `java.util.stream.AbstractPipeline`                  |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `loadClassOrNull`            | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `loadClass`                  | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `loadClass`                  | `jdk.internal.loader.ClassLoaders$AppClassLoader`    |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `findClassOnClassPathOrNull` | `jdk.internal.loader.BuiltinClassLoader`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
| +260.0% |   +13 |  0.1% → 0.4% |  5 → 18 | `CompileQueue::get`                         | `<unknown>` |
|   +7.0% |    +6 |  1.8% → 2.0% | 86 → 92 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `PhaseCFG::global_code_motion`              | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `PhaseCFG::do_global_code_motion`           | `<unknown>` |
|  +80.0% |    +4 |  0.1% → 0.2% |   5 → 9 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
| +133.3% |    +4 |         0.1% |   3 → 7 | `CompileBroker::compile_method`             | `<unknown>` |
| +133.3% |    +4 |         0.1% |   3 → 7 | `CompilationPolicy::event`                  | `<unknown>` |
|  +60.0% |    +3 |  0.1% → 0.2% |   5 → 8 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `GraphBuilder::invoke`                      | `<unknown>` |
|  +50.0% |    +3 |  0.1% → 0.2% |   6 → 9 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `CompileBroker::compile_method_base`        | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Matcher::ReduceInst`                       | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Matcher::ReduceInst_Interior`              | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCCP::transform`                       | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCCP::do_transform`                    | `<unknown>` |
|  +25.0% |    +2 |         0.2% |  8 → 10 | `Compilation::build_hir`                    | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `CompileBroker::create_compile_task`        | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciEnv::lookup_method`                      | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Compile::call_generator`                   | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::set_idom`                  | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function              | Location                                                   |
| ------: | ----: | ------------: | ------------: | --------------------- | ---------------------------------------------------------- |
|  -11.5% |  -229 | 41.0% → 37.5% | 1,997 → 1,768 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -11.8% |  -177 | 30.9% → 28.2% | 1,504 → 1,327 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.0% |  -177 | 90.0% → 89.2% | 4,381 → 4,204 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   -4.0% |  -177 | 90.0% → 89.3% | 4,382 → 4,205 | `exec`                | `java.util.concurrent.RecursiveTask`                       |
|   -4.0% |  -177 | 90.6% → 89.9% | 4,412 → 4,235 | `doExec`              | `java.util.concurrent.ForkJoinTask`                        |
|   -4.0% |  -176 | 90.6% → 89.9% | 4,412 → 4,236 | `topLevelExec`        | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -3.9% |  -173 | 90.7% → 90.0% | 4,414 → 4,241 | `scan`                | `java.util.concurrent.ForkJoinPool`                        |
|   -3.7% |  -172 | 94.9% → 94.4% | 4,619 → 4,447 | `runWorker`           | `java.util.concurrent.ForkJoinPool`                        |
|   -3.7% |  -171 | 94.9% → 94.4% | 4,619 → 4,448 | `run`                 | `java.util.concurrent.ForkJoinWorkerThread`                |
|   -3.9% |  -164 | 86.6% → 86.1% | 4,218 → 4,054 | `join`                | `java.util.concurrent.ForkJoinTask`                        |
|   -3.9% |  -163 | 86.6% → 86.1% | 4,217 → 4,054 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                        |
|   -3.9% |  -159 | 82.9% → 82.3% | 4,036 → 3,877 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -7.9% |   -78 | 20.2% → 19.2% |     984 → 906 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -10.5% |   -52 |  10.1% → 9.4% |     493 → 441 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.8% |   -35 |   2.9% → 2.3% |     141 → 106 | `doubleValue`         | `java.lang.Double`                                         |
| removed |   -31 |   0.6% → 0.0% |        31 → 0 | `invokeStatic`        | `java.lang.invoke.LambdaForm$DMH.0x000000d001004800`       |
| removed |   -31 |   0.6% → 0.0% |        31 → 0 | `invoke`              | `java.lang.invoke.LambdaForm$MH.0x000000d001009800`        |
|   -9.0% |   -30 |   6.8% → 6.4% |     332 → 302 | `forEach`             | `java.util.HashMap`                                        |
|   -8.6% |   -30 |   7.1% → 6.7% |     347 → 317 | `combineResults`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.4% |   -29 |   7.1% → 6.8% |     347 → 318 | `merge`               | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Ours

|  Change | Delta |             % |       Samples | Function                   | Location                                                                              |
| ------: | ----: | ------------: | ------------: | -------------------------- | ------------------------------------------------------------------------------------- |
|  -11.5% |  -229 | 41.0% → 37.5% | 1,997 → 1,768 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -11.8% |  -177 | 30.9% → 28.2% | 1,504 → 1,327 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -4.0% |  -177 | 90.0% → 89.2% | 4,381 → 4,204 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|   -7.9% |   -78 | 20.2% → 19.2% |     984 → 906 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -10.5% |   -52 |  10.1% → 9.4% |     493 → 441 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.6% |   -30 |   7.1% → 6.7% |     347 → 317 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -8.4% |   -29 |   7.1% → 6.8% |     347 → 318 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -8.5% |   -28 |   6.7% → 6.4% |     328 → 300 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88`                |
|   -8.3% |   -27 |   6.7% → 6.4% |     327 → 300 | `lambda$merge$7`           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -2.1% |   -23 | 22.3% → 22.6% | 1,086 → 1,063 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -0.9% |    -4 |   9.5% → 9.7% |     462 → 458 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.9% |    -4 |   9.5% → 9.7% |     462 → 458 | `call`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`                |
|  -50.0% |    -3 |          0.1% |         6 → 3 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10`                |
|  -50.0% |    -2 |  0.1% → <0.1% |         4 → 2 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -50.0% |    -2 |  0.1% → <0.1% |         4 → 2 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38` |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `head`                     | `scopt.OptionParser`                                                                  |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `updateOption`             | `scopt.OptionParser`                                                                  |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `makeDef`                  | `scopt.OptionParser`                                                                  |

##### Native

|  Change | Delta |            % |   Samples | Function                                                        | Location    |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------- | ----------- |
|  -61.5% |   -24 |  0.8% → 0.3% |   39 → 15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
|  -36.5% |   -19 |  1.1% → 0.7% |   52 → 33 | `G1FullGCMarker::complete_marking`                              | `<unknown>` |
|  -36.5% |   -19 |  1.1% → 0.7% |   52 → 33 | `G1FullGCMarkTask::work`                                        | `<unknown>` |
|  -61.3% |   -19 |  0.6% → 0.3% |   31 → 12 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
|   -6.2% |   -11 |  3.7% → 3.5% | 178 → 167 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>` |
|  -31.3% |   -10 |  0.7% → 0.5% |   32 → 22 | `G1FullGCMarker::follow_marking_stacks`                         | `<unknown>` |
|   -4.3% |    -9 |  4.3% → 4.2% | 207 → 198 | `forward_copy_longs`                                            | `<unknown>` |
|  -56.3% |    -9 |  0.3% → 0.1% |    16 → 7 | `_platform_memset`                                              | `<unknown>` |
|  -72.7% |    -8 |  0.2% → 0.1% |    11 → 3 | `Java_java_util_zip_Inflater_inflateBytesBytes`                 | `<unknown>` |
| removed |    -8 |  0.2% → 0.0% |     8 → 0 | `MarkBitMap::do_clear`                                          | `<unknown>` |
| removed |    -8 |  0.2% → 0.0% |     8 → 0 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region`     | `<unknown>` |
|  -70.0% |    -7 |  0.2% → 0.1% |    10 → 3 | `Monitor::wait_without_safepoint_check`                         | `<unknown>` |
|  -87.5% |    -7 | 0.2% → <0.1% |     8 → 1 | `ConcurrentGCThread::run`                                       | `<unknown>` |
|  -87.5% |    -7 | 0.2% → <0.1% |     8 → 1 | `G1RegionMarkStatsCache::add_live_words`                        | `<unknown>` |
| removed |    -6 |  0.1% → 0.0% |     6 → 0 | `G1ConcurrentRefineThread::run_service`                         | `<unknown>` |
|  -62.5% |    -5 |  0.2% → 0.1% |     8 → 3 | `inflate_fast`                                                  | `<unknown>` |
|  -27.8% |    -5 |  0.4% → 0.3% |   18 → 13 | `Compiler::compile_method`                                      | `<unknown>` |
|  -55.6% |    -5 |  0.2% → 0.1% |     9 → 4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>` |
|  -71.4% |    -5 | 0.1% → <0.1% |     7 → 2 | `G1CollectedHeap::attempt_allocation`                           | `<unknown>` |
|  -41.7% |    -5 |  0.2% → 0.1% |    12 → 7 | `MemAllocator::mem_allocate_inside_tlab_slow`                   | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function           | Location                                             |
| ------: | ----: | ------------: | ------------: | ------------------ | ---------------------------------------------------- |
|   -4.0% |  -177 | 90.0% → 89.3% | 4,382 → 4,205 | `exec`             | `java.util.concurrent.RecursiveTask`                 |
|   -4.0% |  -177 | 90.6% → 89.9% | 4,412 → 4,235 | `doExec`           | `java.util.concurrent.ForkJoinTask`                  |
|   -4.0% |  -176 | 90.6% → 89.9% | 4,412 → 4,236 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -3.9% |  -173 | 90.7% → 90.0% | 4,414 → 4,241 | `scan`             | `java.util.concurrent.ForkJoinPool`                  |
|   -3.7% |  -172 | 94.9% → 94.4% | 4,619 → 4,447 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                  |
|   -3.7% |  -171 | 94.9% → 94.4% | 4,619 → 4,448 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -3.9% |  -164 | 86.6% → 86.1% | 4,218 → 4,054 | `join`             | `java.util.concurrent.ForkJoinTask`                  |
|   -3.9% |  -163 | 86.6% → 86.1% | 4,217 → 4,054 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                  |
|   -3.9% |  -159 | 82.9% → 82.3% | 4,036 → 3,877 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -24.8% |   -35 |   2.9% → 2.3% |     141 → 106 | `doubleValue`      | `java.lang.Double`                                   |
| removed |   -31 |   0.6% → 0.0% |        31 → 0 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x000000d001004800` |
| removed |   -31 |   0.6% → 0.0% |        31 → 0 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001009800`  |
|   -9.0% |   -30 |   6.8% → 6.4% |     332 → 302 | `forEach`          | `java.util.HashMap`                                  |
|   -8.3% |   -27 |   6.7% → 6.4% |     327 → 300 | `merge`            | `java.util.HashMap`                                  |
|  -42.6% |   -20 |   1.0% → 0.6% |       47 → 27 | `checkIndex`       | `java.util.Objects`                                  |
|  -13.3% |   -17 |   2.6% → 2.4% |     128 → 111 | `add`              | `java.util.ArrayList`                                |
|   -9.1% |   -17 |   3.8% → 3.6% |     187 → 170 | `computeIfAbsent`  | `java.util.HashMap`                                  |
|  -12.6% |   -11 |   1.8% → 1.6% |       87 → 76 | `grow`             | `java.util.ArrayList`                                |
|   -6.7% |   -10 |   3.1% → 3.0% |     149 → 139 | `toArray`          | `java.util.ArrayList`                                |
|  -11.0% |    -8 |   1.5% → 1.4% |       73 → 65 | `<init>`           | `java.util.ArrayList`                                |

##### JIT

|  Change | Delta |            % | Samples | Function      | Location    |
| ------: | ----: | -----------: | ------: | ------------- | ----------- |
|  -37.0% |   -27 |  1.5% → 1.0% | 73 → 46 | `zero_blocks` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `vtable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
|  -20.0% |    -7 |  0.7% → 0.6% | 35 → 28 | `Compile::Code_Gen`                        | `<unknown>` |
|   -8.6% |    -7 |  1.7% → 1.6% | 81 → 74 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  -35.3% |    -6 |  0.3% → 0.2% | 17 → 11 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
|  -75.0% |    -6 | 0.2% → <0.1% |   8 → 2 | `Compilation::emit_lir`                    | `<unknown>` |
|  -27.8% |    -5 |  0.4% → 0.3% | 18 → 13 | `Compilation::compile_java_method`         | `<unknown>` |
|  -27.8% |    -5 |  0.4% → 0.3% | 18 → 13 | `Compilation::compile_method`              | `<unknown>` |
|  -27.8% |    -5 |  0.4% → 0.3% | 18 → 13 | `Compilation::Compilation`                 | `<unknown>` |
|  -25.0% |    -4 |         0.3% | 16 → 12 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|   -4.8% |    -3 |         1.3% | 63 → 60 | `Compile::Compile`                         | `<unknown>` |
|   -4.8% |    -3 |         1.3% | 63 → 60 | `C2Compiler::compile_method`               | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `LinearScan::assign_reg_num`               | `<unknown>` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `LinearScan::do_linear_scan`               | `<unknown>` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `PhaseOutput::Output`                      | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `RegionNode::Ideal`                        | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `LIRGenerator::block_do`                   | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `BlockList::iterate_forward`               | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Matcher::pd_clone_node`                   | `<unknown>` |

# Sampling profile

Collected 4,858 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 59.5% |   2,889 |
| Native           | 24.7% |   1,199 |
| Standard library | 13.9% |     673 |
| Compiler         |  1.1% |      55 |
| JIT              |  0.9% |      42 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                       | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 21.2% |   1,029 | `accumulate`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.2% |     882 | `distance`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 14.2% |     691 | `__psynch_cvwait`              | `<unknown>`                                                |
|  9.7% |     469 | `vectorSum`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.8% |     381 | `findNearestCentroid`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.7% |     181 | `forward_copy_longs`           | `<unknown>`                                                |
|  3.3% |     161 | `elementData`                  | `java.util.ArrayList`                                      |
|  2.7% |     133 | `computeIfAbsent`              | `java.util.HashMap`                                        |
|  2.3% |     113 | `doubleValue`                  | `java.lang.Double`                                         |
|  2.3% |     110 | `collectClusters`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.2% |      57 | `add`                          | `java.util.ArrayList`                                      |
|  1.2% |      56 | `__psynch_cvsignal`            | `<unknown>`                                                |
|  0.8% |      41 | `zero_blocks`                  | `<unknown>`                                                |
|  0.7% |      35 | `checkIndex`                   | `java.util.Objects`                                        |
|  0.6% |      29 | `grow`                         | `java.util.ArrayList`                                      |
|  0.5% |      22 | `helpJoin`                     | `java.util.concurrent.ForkJoinPool`                        |
|  0.4% |      18 | `hash`                         | `java.util.HashMap`                                        |
|  0.3% |      17 | `pthread_jit_write_protect_np` | `<unknown>`                                                |
|  0.3% |      17 | `_platform_bzero`              | `<unknown>`                                                |
|  0.3% |      17 | `semaphore_wait_trap`          | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                | Location                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 21.2% |   1,029 | `accumulate`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 18.2% |     882 | `distance`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.7% |     469 | `vectorSum`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  7.8% |     381 | `findNearestCentroid`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.3% |     110 | `collectClusters`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       3 | `combineResults`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       3 | `combineResults`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `add`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `compute`               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| <0.1% |       1 | `accept`                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001186d88` |
| <0.1% |       1 | `lambda$run$0`          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `forkThreshold`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `apply`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b0011258d8` |
| <0.1% |       1 | `boxed`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `div`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Native

|     % | Samples | Function                                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 14.2% |     691 | `__psynch_cvwait`                                                                            | `<unknown>` |
|  3.7% |     181 | `forward_copy_longs`                                                                         | `<unknown>` |
|  1.2% |      56 | `__psynch_cvsignal`                                                                          | `<unknown>` |
|  0.3% |      17 | `pthread_jit_write_protect_np`                                                               | `<unknown>` |
|  0.3% |      17 | `_platform_bzero`                                                                            | `<unknown>` |
|  0.3% |      17 | `semaphore_wait_trap`                                                                        | `<unknown>` |
|  0.3% |      16 | `G1FullGCMarker::mark_object`                                                                | `<unknown>` |
|  0.3% |      13 | `__psynch_mutexwait`                                                                         | `<unknown>` |
|  0.2% |      12 | `arrayof_jint_disjoint_arraycopy`                                                            | `<unknown>` |
|  0.2% |      10 | `_platform_memset`                                                                           | `<unknown>` |
|  0.1% |       7 | `G1RegionMarkStatsCache::add_live_words`                                                     | `<unknown>` |
|  0.1% |       7 | `_sigtramp`                                                                                  | `<unknown>` |
|  0.1% |       5 | `arrayof_oop_disjoint_arraycopy`                                                             | `<unknown>` |
|  0.1% |       5 | `inflate_fast`                                                                               | `<unknown>` |
|  0.1% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                            | `<unknown>` |
|  0.1% |       5 | `G1FullGCMarker::follow_object`                                                              | `<unknown>` |
|  0.1% |       4 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `<unknown>` |
|  0.1% |       4 | `HeapRegion::update_bot_for_block`                                                           | `<unknown>` |
|  0.1% |       4 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `<unknown>` |
|  0.1% |       4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                              | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
|  3.3% |     161 | `elementData`      | `java.util.ArrayList`                         |
|  2.7% |     133 | `computeIfAbsent`  | `java.util.HashMap`                           |
|  2.3% |     113 | `doubleValue`      | `java.lang.Double`                            |
|  1.2% |      57 | `add`              | `java.util.ArrayList`                         |
|  0.7% |      35 | `checkIndex`       | `java.util.Objects`                           |
|  0.6% |      29 | `grow`             | `java.util.ArrayList`                         |
|  0.5% |      22 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
|  0.4% |      18 | `hash`             | `java.util.HashMap`                           |
|  0.3% |      16 | `merge`            | `java.util.HashMap`                           |
|  0.2% |       8 | `copyOf`           | `java.util.Arrays`                            |
|  0.1% |       5 | `doExec`           | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       5 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       4 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `push`             | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `addAll`           | `java.util.ArrayList`                         |
|  0.1% |       3 | `scan`             | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       3 | `putVal`           | `java.util.HashMap`                           |
|  0.1% |       3 | `newLength`        | `jdk.internal.util.ArraysSupport`             |
|  0.1% |       3 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       2 | `join`             | `java.util.concurrent.ForkJoinTask`           |

##### Compiler

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
|  0.1% |       3 | `PhaseOutput::BuildOopMaps`                 | `<unknown>` |
| <0.1% |       2 | `Matcher::xform`                            | `<unknown>` |
| <0.1% |       2 | `PhaseIterGVN::add_users_to_worklist`       | `<unknown>` |
| <0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| <0.1% |       2 | `PhaseLive::compute`                        | `<unknown>` |
| <0.1% |       1 | `ciMethodData::bci_to_data`                 | `<unknown>` |
| <0.1% |       1 | `Compile::Compile`                          | `<unknown>` |
| <0.1% |       1 | `MachSafePointNode::in_RegMask`             | `<unknown>` |
| <0.1% |       1 | `TypeOopPtr::is_known_instance`             | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_tree`           | `<unknown>` |
| <0.1% |       1 | `ciObjectFactory::get`                      | `<unknown>` |
| <0.1% |       1 | `ThreadLocalNode::Opcode`                   | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| <0.1% |       1 | `RegionNode::is_CFG`                        | `<unknown>` |
| <0.1% |       1 | `AddPNode::bottom_type`                     | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::remix_address_expressions` | `<unknown>` |
| <0.1% |       1 | `ShouldNotReachHereNode::is_block_proj`     | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::schedule_late`                   | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |   1,029 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     882 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 96.5% |     667 | `Parker::park`          | `<unknown>` |
|  3.5% |      24 | `PlatformMonitor::wait` | `<unknown>` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     469 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     381 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 81.2% |     147 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 18.8% |      34 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     161 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     133 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 85.0% |      96 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.0% |      17 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     110 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 96.5% |      55 | `add`             | `java.util.ArrayList`                                      |
|  3.5% |       2 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      56 | `Unsafe_Unpark` | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 65.9% |      27 | `merge`               | `java.util.HashMap`                                        |
| 26.8% |      11 | `grow`                | `java.util.ArrayList`                                      |
|  7.3% |       3 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      35 | `get`  | `java.util.ArrayList` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller | Location              |
| ----: | ------: | ------ | --------------------- |
| 86.2% |      25 | `grow` | `java.util.ArrayList` |
| 13.8% |       4 | `add`  | `java.util.ArrayList` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |      22 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `hash` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 94.4% |      17 | `computeIfAbsent` | `java.util.HashMap` |
|  5.6% |       1 | `putMapEntries`   | `java.util.HashMap` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 47.1% |       8 | `Unsafe_Park`              | `<unknown>` |
| 17.6% |       3 | `_new_array_Java`          | `<unknown>` |
| 11.8% |       2 | `Unsafe_Unpark`            | `<unknown>` |
| 11.8% |       2 | `OptoRuntime::new_array_C` | `<unknown>` |
|  5.9% |       1 | `Unsafe_AllocateInstance`  | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      17 | `MemAllocator::allocate` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 88.2% |      15 | `WorkerThread::run`              | `<unknown>` |
|  5.9% |       1 | `WorkerThreads::run_task`        | `<unknown>` |
|  5.9% |       1 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|      % | Samples | Caller                                                          | Location    |
| -----: | ------: | --------------------------------------------------------------- | ----------- |
| 100.0% |      16 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      16 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 41.7% |       5 | `copyOf` | `java.util.Arrays`    |
| 41.7% |       5 | `grow`   | `java.util.ArrayList` |
| 16.7% |       2 | `merge`  | `java.util.HashMap`   |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 60.0% |       6 | `MemAllocator::allocate`                      | `<unknown>` |
| 20.0% |       2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 10.0% |       1 | `G1BatchedTask::work`                         | `<unknown>` |
| 10.0% |       1 | `G1PLABAllocator::PLABData::~PLABData`        | `<unknown>` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller    | Location              |
| ----: | ------: | --------- | --------------------- |
| 62.5% |       5 | `toArray` | `java.util.ArrayList` |
| 37.5% |       3 | `grow`    | `java.util.ArrayList` |

##### `G1RegionMarkStatsCache::add_live_words` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       7 | `G1FullGCMarker::mark_object` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       5 | `addAll` | `java.util.ArrayList` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `G1FullGCMarker::follow_object` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |       4 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |
| 20.0% |       1 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 60.0% |       3 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 40.0% |       2 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       5 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 75.0% |       3 | `G1FullGCMarker::complete_marking`      | `<unknown>` |
| 25.0% |       1 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `HeapRegion::update_bot_for_block` (`<unknown>`)

|     % | Samples | Caller                                                                                       | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `<unknown>` |
| 25.0% |       1 | `G1FullGCPrepareTask::work`                                                                  | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`<unknown>`)

|      % | Samples | Caller                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |       4 | `G1FullGCPrepareTask::work` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       4 | `G1AdjustRegionClosure::do_heap_region` | `<unknown>` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `push` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       4 | `fork` | `java.util.concurrent.ForkJoinTask` |

##### `addAll` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |       4 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       3 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |       3 | `putMapEntries` | `java.util.HashMap` |

##### `newLength` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |       3 | `grow` | `java.util.ArrayList` |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       3 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       3 | `PhaseOutput::Output` | `<unknown>` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |       2 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       2 | `Matcher::match` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist` (`<unknown>`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 50.0% |       1 | `IfNode::Ideal_common`       | `<unknown>` |
| 50.0% |       1 | `PhaseIterGVN::PhaseIterGVN` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       1 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001186d88`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       1 | `forEach` | `java.util.HashMap` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001183d68` |

##### `forkThreshold` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001125b10` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b0011258d8`)

|      % | Samples | Caller   | Location                           |
| -----: | ------: | -------- | ---------------------------------- |
| 100.0% |       1 | `accept` | `java.util.stream.IntPipeline$1$1` |

##### `boxed` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `div` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                   |
| -----: | ------: | --------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `ciMethodData::bci_to_data` (`<unknown>`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       1 | `Compile::call_generator` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `C2Compiler::compile_method` | `<unknown>` |

##### `MachSafePointNode::in_RegMask` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `TypeOopPtr::is_known_instance` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `PhaseIterGVN::transform_old` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `ciObjectFactory::get` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       1 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `ThreadLocalNode::Opcode` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `Matcher::match_tree` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `RegionNode::is_CFG` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `AddPNode::bottom_type` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIterGVN::add_users_to_worklist` | `<unknown>` |

##### `PhaseIdealLoop::remix_address_expressions` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::split_if_with_blocks_pre` | `<unknown>` |

##### `ShouldNotReachHereNode::is_block_proj` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseCFG::schedule_node_into_block` | `<unknown>` |

##### `PhaseCFG::schedule_late` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 94.7% |   4,599 | `runWorker`              | `java.util.concurrent.ForkJoinPool`                        |
| 94.7% |   4,599 | `run`                    | `java.util.concurrent.ForkJoinWorkerThread`                |
| 89.2% |   4,331 | `scan`                   | `java.util.concurrent.ForkJoinPool`                        |
| 89.0% |   4,324 | `topLevelExec`           | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 88.9% |   4,320 | `doExec`                 | `java.util.concurrent.ForkJoinTask`                        |
| 88.3% |   4,289 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 88.3% |   4,289 | `exec`                   | `java.util.concurrent.RecursiveTask`                       |
| 85.2% |   4,137 | `awaitDone`              | `java.util.concurrent.ForkJoinTask`                        |
| 85.1% |   4,136 | `join`                   | `java.util.concurrent.ForkJoinTask`                        |
| 80.7% |   3,921 | `tryRemoveAndExec`       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 36.7% |   1,785 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 34.5% |   1,674 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 34.5% |   1,674 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 27.7% |   1,347 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 23.9% |   1,162 | `helpJoin`               | `java.util.concurrent.ForkJoinPool`                        |
| 23.2% |   1,126 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.4% |   1,038 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                        |
| 18.5% |     900 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 15.7% |     765 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 15.7% |     765 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 88.3% |   4,289 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 36.7% |   1,785 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 34.5% |   1,674 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 34.5% |   1,674 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 27.7% |   1,347 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 23.2% |   1,126 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 18.5% |     900 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 15.7% |     765 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.7% |     765 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.6% |     760 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.4% |     457 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.4% |     457 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001183d68` |
|  9.0% |     437 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.2% |     303 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.2% |     301 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  5.9% |     289 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001186d88` |
|  5.9% |     288 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  3.9% |     188 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  3.9% |     188 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001187218` |
|  0.9% |      42 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Native

|     % | Samples | Function                           | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 14.2% |     691 | `__psynch_cvwait`                  | `<unknown>` |
| 14.1% |     684 | `Unsafe_Park`                      | `<unknown>` |
| 13.9% |     674 | `Parker::park`                     | `<unknown>` |
|  4.2% |     202 | `Thread::call_run`                 | `<unknown>` |
|  4.2% |     202 | `thread_native_entry`              | `<unknown>` |
|  4.2% |     202 | `_pthread_start`                   | `<unknown>` |
|  4.2% |     202 | `thread_start`                     | `<unknown>` |
|  3.7% |     181 | `forward_copy_longs`               | `<unknown>` |
|  3.3% |     159 | `arrayof_jint_disjoint_arraycopy`  | `<unknown>` |
|  2.1% |     104 | `WorkerThread::run`                | `<unknown>` |
|  1.7% |      84 | `JavaThread::thread_main_inner`    | `<unknown>` |
|  1.2% |      60 | `Unsafe_Unpark`                    | `<unknown>` |
|  1.2% |      56 | `__psynch_cvsignal`                | `<unknown>` |
|  0.9% |      46 | `_new_array_Java`                  | `<unknown>` |
|  0.9% |      43 | `arrayof_oop_disjoint_arraycopy`   | `<unknown>` |
|  0.9% |      42 | `G1FullGCMarker::complete_marking` | `<unknown>` |
|  0.9% |      42 | `G1FullGCMarkTask::work`           | `<unknown>` |
|  0.9% |      42 | `OptoRuntime::new_array_C`         | `<unknown>` |
|  0.8% |      40 | `MemAllocator::allocate`           | `<unknown>` |
|  0.8% |      38 | `InstanceKlass::allocate_objArray` | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 94.7% |   4,599 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 94.7% |   4,599 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 89.2% |   4,331 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 89.0% |   4,324 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 88.9% |   4,320 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 88.3% |   4,289 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 85.2% |   4,137 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 85.1% |   4,136 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 80.7% |   3,921 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 23.9% |   1,162 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| 21.4% |   1,038 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 14.1% |     686 | `park`             | `jdk.internal.misc.Unsafe`                          |
| 13.8% |     671 | `park`             | `java.util.concurrent.locks.LockSupport`            |
|  9.4% |     457 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  6.0% |     291 | `forEach`          | `java.util.HashMap`                                 |
|  5.9% |     287 | `merge`            | `java.util.HashMap`                                 |
|  5.5% |     265 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                 |
|  4.1% |     197 | `get`              | `java.util.ArrayList`                               |
|  3.3% |     161 | `elementData`      | `java.util.ArrayList`                               |
|  3.1% |     150 | `computeIfAbsent`  | `java.util.HashMap`                                 |

##### Compiler

|    % | Samples | Function                                   | Location    |
| ---: | ------: | ------------------------------------------ | ----------- |
| 1.7% |      83 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 1.4% |      70 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 1.2% |      60 | `Compile::Compile`                         | `<unknown>` |
| 1.2% |      60 | `C2Compiler::compile_method`               | `<unknown>` |
| 0.6% |      31 | `Compile::Code_Gen`                        | `<unknown>` |
| 0.4% |      20 | `Compile::Optimize`                        | `<unknown>` |
| 0.3% |      15 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 0.3% |      13 | `CompileQueue::get`                        | `<unknown>` |
| 0.2% |      12 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 0.2% |      11 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 0.2% |      11 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 0.2% |       9 | `Compilation::compile_java_method`         | `<unknown>` |
| 0.2% |       9 | `Compilation::compile_method`              | `<unknown>` |
| 0.2% |       9 | `Compilation::Compilation`                 | `<unknown>` |
| 0.1% |       7 | `PhaseIterGVN::transform_old`              | `<unknown>` |
| 0.1% |       7 | `PhaseIterGVN::optimize`                   | `<unknown>` |
| 0.1% |       7 | `Matcher::match`                           | `<unknown>` |
| 0.1% |       7 | `Compile::optimize_loops`                  | `<unknown>` |
| 0.1% |       6 | `PhaseOutput::Output`                      | `<unknown>` |
| 0.1% |       4 | `Matcher::xform`                           | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                           | Location                            |
| ----: | ------: | ------------------------------------------------ | ----------------------------------- |
| 94.2% |   4,331 | `scan`                                           | `java.util.concurrent.ForkJoinPool` |
|  5.8% |     265 | `awaitWork`                                      | `java.util.concurrent.ForkJoinPool` |
| <0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                         |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |   4,599 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee         | Location                                      |
| ----: | ------: | -------------- | --------------------------------------------- |
| 99.8% |   4,324 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `signalWork`   | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Callee    | Location                                      |
| ----: | ------: | --------- | --------------------------------------------- |
| 99.9% |   4,320 | `doExec`  | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       3 | `tryPoll` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee    | Location                                            |
| ----: | ------: | --------- | --------------------------------------------------- |
| 99.3% |   4,289 | `exec`    | `java.util.concurrent.RecursiveTask`                |
| 10.6% |     457 | `exec`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.0% |      44 | `setDone` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 96.4% |   4,136 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 41.6% |   1,785 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 39.0% |   1,674 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.8% |     765 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.0% |     301 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |   4,289 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 94.8% |   3,921 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 28.1% |   1,162 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
| 10.3% |     425 | `park`             | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       2 | `uncompensate`     | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `UncommonTrapBlob` | `<unknown>`                                   |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee              | Location                             |
| -----: | ------: | ------------------- | ------------------------------------ |
| 100.0% |   4,136 | `awaitDone`         | `java.util.concurrent.ForkJoinTask`  |
|  <0.1% |       1 | `getRawResult`      | `java.util.concurrent.RecursiveTask` |
|  <0.1% |       1 | `wrong_method_stub` | `<unknown>`                          |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee              | Location                                      |
| -----: | ------: | ------------------- | --------------------------------------------- |
| 100.0% |   3,921 | `doExec`            | `java.util.concurrent.ForkJoinTask`           |
|   0.1% |       2 | `getAndClearSlot`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  <0.1% |       1 | `wrong_method_stub` | `<unknown>`                                   |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 99.9% |   1,784 | `computeDirectly`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 75.5% |   1,347 | `findNearestCentroid`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 24.5% |     437 | `collectClusters`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       1 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee               | Location                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------- |
| 67.3% |   1,126 | `accumulate`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.6% |      77 | `get`                | `java.util.ArrayList`                                     |
|  0.1% |       1 | `DeoptimizationBlob` | `<unknown>`                                               |
|  0.1% |       1 | `_new_array_Java`    | `<unknown>`                                               |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |   1,674 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |   1,674 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee        | Location                                                   |
| ----: | ------: | ------------- | ---------------------------------------------------------- |
| 66.8% |     900 | `distance`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.6% |      62 | `get`         | `java.util.ArrayList`                                      |
|  0.2% |       3 | `zero_blocks` | `<unknown>`                                                |
|  0.1% |       1 | `size`        | `java.util.ArrayList`                                      |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 98.0% |   1,139 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
|  1.2% |      14 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee                           | Location           |
| ---: | ------: | -------------------------------- | ------------------ |
| 8.5% |      96 | `doubleValue`                    | `java.lang.Double` |
| 0.1% |       1 | `counter_overflow Runtime1 stub` | `<unknown>`        |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee            | Location                            |
| ----: | ------: | ----------------- | ----------------------------------- |
| 99.9% |   1,037 | `doExec`          | `java.util.concurrent.ForkJoinTask` |
|  0.1% |       1 | `reportException` | `java.util.concurrent.ForkJoinTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.9% |      17 | `doubleValue`   | `java.lang.Double` |
| 0.1% |       1 | `SafepointBlob` | `<unknown>`        |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 99.3% |     760 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.5% |       4 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     765 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     765 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                                               |
| ----: | ------: | -------- | ------------------------------------------------------ |
| 99.9% |     759 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
|  0.1% |       1 | `div`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `park` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 99.7% |     684 | `Unsafe_Park`                                  | `<unknown>` |
|  0.1% |       1 | `JavaThreadParkedState::JavaThreadParkedState` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 98.5% |     674 | `Parker::park`                                 | `<unknown>` |
|  1.2% |       8 | `pthread_jit_write_protect_np`                 | `<unknown>` |
|  0.1% |       1 | `JavaThreadParkedState::JavaThreadParkedState` | `<unknown>` |

##### `Parker::park` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 99.0% |     667 | `__psynch_cvwait`    | `<unknown>` |
|  0.4% |       3 | `_pthread_cond_wait` | `<unknown>` |
|  0.3% |       2 | `__gettimeofday`     | `<unknown>` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee | Location                   |
| -----: | ------: | ------ | -------------------------- |
| 100.0% |     671 | `park` | `jdk.internal.misc.Unsafe` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 99.8% |     456 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     457 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |     457 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001183d68` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 34.3% |     150 | `computeIfAbsent`    | `java.util.HashMap`   |
| 27.0% |     118 | `add`                | `java.util.ArrayList` |
| 13.3% |      58 | `get`                | `java.util.ArrayList` |
|  0.2% |       1 | `DeoptimizationBlob` | `<unknown>`           |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 96.0% |     291 | `forEach`            | `java.util.HashMap`                |
|  3.0% |       9 | `<init>`             | `java.util.HashMap`                |
|  1.0% |       3 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 98.7% |     297 | `merge`                          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 98.7% |     297 | `combineResults`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |       1 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 99.3% |     289 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001186d88`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 99.7% |     288 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 99.7% |     287 | `merge`             | `java.util.HashMap` |
|  0.3% |       1 | `wrong_method_stub` | `<unknown>`         |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 65.5% |     188 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001187218` |
| 18.8% |      54 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  9.4% |      27 | `zero_blocks`                     | `<unknown>`                                                            |
|  0.3% |       1 | `newNode`                         | `java.util.HashMap`                                                    |
|  0.3% |       1 | `resize`                          | `java.util.HashMap`                                                    |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee               | Location                                 |
| ----: | ------: | -------------------- | ---------------------------------------- |
| 92.8% |     246 | `park`               | `java.util.concurrent.locks.LockSupport` |
|  5.7% |      15 | `parkUntil`          | `java.util.concurrent.locks.LockSupport` |
|  0.4% |       1 | `os::javaTimeMillis` | `<unknown>`                              |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 51.5% |     104 | `WorkerThread::run`             | `<unknown>` |
| 41.6% |      84 | `JavaThread::thread_main_inner` | `<unknown>` |
|  3.5% |       7 | `VMThread::run`                 | `<unknown>` |
|  2.5% |       5 | `WatcherThread::run`            | `<unknown>` |
|  1.0% |       2 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     202 | `Thread::call_run` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     202 | `thread_native_entry` | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     202 | `_pthread_start` | `<unknown>` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Callee        | Location              |
| ----: | ------: | ------------- | --------------------- |
| 81.7% |     161 | `elementData` | `java.util.ArrayList` |
| 17.8% |      35 | `checkIndex`  | `java.util.Objects`   |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 67.0% |     126 | `addAll` | `java.util.ArrayList` |
| 33.0% |      62 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001187218`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     188 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 92.5% |     147 | `forward_copy_longs` | `<unknown>` |

##### `computeIfAbsent` (`java.util.HashMap`)

|     % | Samples | Callee | Location            |
| ----: | ------: | ------ | ------------------- |
| 11.3% |      17 | `hash` | `java.util.HashMap` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 40.4% |      42 | `G1FullGCMarkTask::work`          | `<unknown>` |
| 16.3% |      17 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 14.4% |      15 | `semaphore_wait_trap`             | `<unknown>` |
|  9.6% |      10 | `G1FullGCPrepareTask::work`       | `<unknown>` |
|  7.7% |       8 | `G1FullGCAdjustTask::work`        | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 98.8% |      83 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
|  1.2% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 84.3% |      70 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 15.7% |      13 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 85.7% |      60 | `C2Compiler::compile_method` | `<unknown>` |
| 12.9% |       9 | `Compiler::compile_method`   | `<unknown>` |
|  1.4% |       1 | `ciObjectFactory::get`       | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 93.3% |      56 | `__psynch_cvsignal`            | `<unknown>` |
|  3.3% |       2 | `pthread_jit_write_protect_np` | `<unknown>` |
|  1.7% |       1 | `Parker::unpark`               | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 51.7% |      31 | `Compile::Code_Gen`        | `<unknown>` |
| 33.3% |      20 | `Compile::Optimize`        | `<unknown>` |
| 13.3% |       8 | `ParseGenerator::generate` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      60 | `Compile::Compile` | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 91.3% |      42 | `OptoRuntime::new_array_C`                         | `<unknown>` |
|  6.5% |       3 | `pthread_jit_write_protect_np`                     | `<unknown>` |
|  2.2% |       1 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 79.1% |      34 | `forward_copy_longs`                              | `<unknown>` |
|  4.7% |       2 | `G1BarrierSet::invalidate`                        | `<unknown>` |
|  2.3% |       1 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `<unknown>` |
|  2.3% |       1 | `tlv_get_addr`                                    | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 95.2% |      40 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
|  2.4% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher`     |
|  2.4% |       1 | `create`                    | `org.renaissance.core.ModuleLoader` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 69.0% |      29 | `G1FullGCMarker::follow_marking_stacks`                         | `<unknown>` |
| 26.2% |      11 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
|  4.8% |       2 | `TaskTerminator::offer_termination`                             | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      42 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 90.5% |      38 | `InstanceKlass::allocate_objArray`     | `<unknown>` |
|  4.8% |       2 | `pthread_jit_write_protect_np`         | `<unknown>` |
|  2.4% |       1 | `Klass::check_array_allocation_length` | `<unknown>` |
|  2.4% |       1 | `CollectedHeap::array_allocate`        | `<unknown>` |

##### `MemAllocator::allocate` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 42.5% |      17 | `_platform_bzero`                             | `<unknown>` |
| 17.5% |       7 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 15.0% |       6 | `_platform_memset`                            | `<unknown>` |
|  7.5% |       3 | `G1CollectedHeap::mem_allocate`               | `<unknown>` |
|  7.5% |       3 | `MemAllocator::Allocation::notify_allocation` | `<unknown>` |

##### `InstanceKlass::allocate_objArray` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 94.7% |      36 | `CollectedHeap::array_allocate` | `<unknown>` |
|  2.6% |       1 | `MemAllocator::allocate`        | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 48.4% |      15 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 22.6% |       7 | `Matcher::match`                  | `<unknown>` |
| 19.4% |       6 | `PhaseOutput::Output`             | `<unknown>` |
|  9.7% |       3 | `PhaseCFG::do_global_code_motion` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 35.0% |       7 | `Compile::optimize_loops`              | `<unknown>` |
| 25.0% |       5 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 20.0% |       4 | `PhaseIterGVN::optimize`               | `<unknown>` |
| 10.0% |       2 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |
| 10.0% |       2 | `PhaseIterGVN::PhaseIterGVN`           | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 26.7% |       4 | `PhaseLive::compute`                       | `<unknown>` |
| 13.3% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 13.3% |       2 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
| 13.3% |       2 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 13.3% |       2 | `PhaseChaitin::Split`                      | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|      % | Samples | Callee          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      13 | `Monitor::wait` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 91.7% |      11 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
|  8.3% |       1 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 36.4% |       4 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 27.3% |       3 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
|  9.1% |       1 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |
|  9.1% |       1 | `RegionNode::is_CFG`                   | `<unknown>` |
|  9.1% |       1 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 44.4% |       4 | `Compilation::build_hir`      | `<unknown>` |
| 33.3% |       3 | `Compilation::emit_code_body` | `<unknown>` |
| 22.2% |       2 | `Compilation::emit_lir`       | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       9 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       9 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 28.6% |       2 | `IfNode::Ideal`                 | `<unknown>` |
| 14.3% |       1 | `TypeOopPtr::is_known_instance` | `<unknown>` |
| 14.3% |       1 | `LoadNode::Ideal`               | `<unknown>` |
| 14.3% |       1 | `LoadBNode::Opcode`             | `<unknown>` |
| 14.3% |       1 | `NodeHash::hash_find_insert`    | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       7 | `PhaseIterGVN::transform_old` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 57.1% |       4 | `Matcher::xform`                              | `<unknown>` |
| 28.6% |       2 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
| 14.3% |       1 | `Matcher::find_shared`                        | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 50.0% |       3 | `PhaseOutput::BuildOopMaps` | `<unknown>` |
| 33.3% |       2 | `Scheduling::DoScheduling`  | `<unknown>` |
| 16.7% |       1 | `PhaseOutput::fill_buffer`  | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.0% |       2 | `Matcher::match_tree` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% |     242 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.9% |     142 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.6% |     126 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.6% |     124 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.2% |     107 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.1% |     104 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.0% |      97 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% |      94 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.6% |      80 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |      67 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.3% |      64 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |      62 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |      61 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.2% |      56 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |
| 1.1% |      55 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |      53 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      51 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |      51 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      50 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |      50 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

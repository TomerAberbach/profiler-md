# Sampling profile

Collected 4,646 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 54.0% |   2,507 |
| Native           | 28.8% |   1,340 |
| Standard library | 14.9% |     690 |
| JIT              |  1.3% |      59 |
| Compiler         |  1.1% |      49 |
| Unknown          | <0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                          | Location                                                   |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------- |
| 18.4% |     855 | `distance`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 17.0% |     790 | `accumulate`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.4% |     760 | `__psynch_cvwait`                 | `<unknown>`                                                |
|  8.7% |     403 | `vectorSum`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.2% |     334 | `findNearestCentroid`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  5.1% |     237 | `forward_copy_longs`              | `<unknown>`                                                |
|  3.6% |     165 | `elementData`                     | `java.util.ArrayList`                                      |
|  2.7% |     126 | `computeIfAbsent`                 | `java.util.HashMap`                                        |
|  2.3% |     106 | `doubleValue`                     | `java.lang.Double`                                         |
|  2.2% |     102 | `collectClusters`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |      65 | `add`                             | `java.util.ArrayList`                                      |
|  1.3% |      61 | `__psynch_cvsignal`               | `<unknown>`                                                |
|  1.2% |      58 | `zero_blocks`                     | `<unknown>`                                                |
|  1.1% |      52 | `checkIndex`                      | `java.util.Objects`                                        |
|  0.6% |      26 | `hash`                            | `java.util.HashMap`                                        |
|  0.5% |      25 | `G1FullGCMarker::mark_object`     | `<unknown>`                                                |
|  0.5% |      24 | `helpJoin`                        | `java.util.concurrent.ForkJoinPool`                        |
|  0.4% |      20 | `grow`                            | `java.util.ArrayList`                                      |
|  0.3% |      15 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                |
|  0.3% |      15 | `pthread_jit_write_protect_np`    | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                                               |
| ----: | ------: | -------------------------- | ---------------------------------------------------------------------- |
| 18.4% |     855 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 17.0% |     790 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.7% |     403 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  7.2% |     334 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.2% |     102 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       3 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  0.1% |       3 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
| <0.1% |       2 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       2 | `lambda$generateData$3`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       2 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       2 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       2 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `lambda$merge$7`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `boxed`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Native

|     % | Samples | Function                                                                                             | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 16.4% |     760 | `__psynch_cvwait`                                                                                    | `<unknown>` |
|  5.1% |     237 | `forward_copy_longs`                                                                                 | `<unknown>` |
|  1.3% |      61 | `__psynch_cvsignal`                                                                                  | `<unknown>` |
|  0.5% |      25 | `G1FullGCMarker::mark_object`                                                                        | `<unknown>` |
|  0.3% |      15 | `arrayof_jint_disjoint_arraycopy`                                                                    | `<unknown>` |
|  0.3% |      15 | `pthread_jit_write_protect_np`                                                                       | `<unknown>` |
|  0.3% |      15 | `_platform_bzero`                                                                                    | `<unknown>` |
|  0.3% |      14 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                    | `<unknown>` |
|  0.3% |      14 | `G1RegionMarkStatsCache::add_live_words`                                                             | `<unknown>` |
|  0.2% |      11 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                      | `<unknown>` |
|  0.2% |      10 | `semaphore_wait_trap`                                                                                | `<unknown>` |
|  0.2% |      10 | `inflate_fast`                                                                                       | `<unknown>` |
|  0.2% |       9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
|  0.2% |       9 | `__psynch_mutexwait`                                                                                 | `<unknown>` |
|  0.2% |       8 | `_platform_memset`                                                                                   | `<unknown>` |
|  0.1% |       5 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  0.1% |       5 | `_sigtramp`                                                                                          | `<unknown>` |
|  0.1% |       5 | `G1FullGCMarker::follow_object`                                                                      | `<unknown>` |
|  0.1% |       4 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `<unknown>` |
|  0.1% |       4 | `MarkBitMap::check_mark`                                                                             | `<unknown>` |

##### Standard library

|    % | Samples | Function           | Location                                      |
| ---: | ------: | ------------------ | --------------------------------------------- |
| 3.6% |     165 | `elementData`      | `java.util.ArrayList`                         |
| 2.7% |     126 | `computeIfAbsent`  | `java.util.HashMap`                           |
| 2.3% |     106 | `doubleValue`      | `java.lang.Double`                            |
| 1.4% |      65 | `add`              | `java.util.ArrayList`                         |
| 1.1% |      52 | `checkIndex`       | `java.util.Objects`                           |
| 0.6% |      26 | `hash`             | `java.util.HashMap`                           |
| 0.5% |      24 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
| 0.4% |      20 | `grow`             | `java.util.ArrayList`                         |
| 0.2% |       8 | `merge`            | `java.util.HashMap`                           |
| 0.2% |       7 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       6 | `runWorker`        | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       5 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       5 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       4 | `scan`             | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       4 | `copyOf`           | `java.util.Arrays`                            |
| 0.1% |       4 | `forEach`          | `java.util.HashMap`                           |
| 0.1% |       4 | `putVal`           | `java.util.HashMap`                           |
| 0.1% |       3 | `doExec`           | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       3 | `get`              | `java.util.ArrayList`                         |
| 0.1% |       3 | `newLength`        | `jdk.internal.util.ArraysSupport`             |

##### JIT

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
|  1.2% |      58 | `zero_blocks`            | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                         | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| <0.1% |       2 | `IndexSetIterator::advance_and_next`             | `<unknown>` |
| <0.1% |       2 | `MachNode::rematerialize`                        | `<unknown>` |
| <0.1% |       2 | `PhaseIdealLoop::build_loop_late`                | `<unknown>` |
| <0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`      | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::Dominators`                     | `<unknown>` |
| <0.1% |       1 | `Node::hash`                                     | `<unknown>` |
| <0.1% |       1 | `Scheduling::AddNodeToAvailableList`             | `<unknown>` |
| <0.1% |       1 | `Node::find_long_type`                           | `<unknown>` |
| <0.1% |       1 | `Matcher::xform`                                 | `<unknown>` |
| <0.1% |       1 | `NTarjan::DFS`                                   | `<unknown>` |
| <0.1% |       1 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::insert_anti_dependences`              | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::Split`                            | `<unknown>` |
| <0.1% |       1 | `ciMethod::load_code`                            | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::merge_multidefs`                  | `<unknown>` |
| <0.1% |       1 | `LinearScanWalker::alloc_free_reg`               | `<unknown>` |
| <0.1% |       1 | `GraphBuilder::iterate_bytecodes_for_block`      | `<unknown>` |
| <0.1% |       1 | `CallNode::match_edge`                           | `<unknown>` |
| <0.1% |       1 | `RegMask::is_misaligned_pair`                    | `<unknown>` |
| <0.1% |       1 | `MacroAssembler::ldst_can_merge`                 | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     855 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     790 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 97.2% |     739 | `Parker::park`          | `<unknown>` |
|  2.8% |      21 | `PlatformMonitor::wait` | `<unknown>` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     403 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     334 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 78.9% |     187 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 21.1% |      50 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     165 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     126 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 84.9% |      90 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.1% |      16 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     102 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 98.5% |      64 | `add`             | `java.util.ArrayList`                                      |
|  1.5% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      61 | `Unsafe_Unpark` | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 63.8% |      37 | `merge`               | `java.util.HashMap`                                        |
| 22.4% |      13 | `grow`                | `java.util.ArrayList`                                      |
| 12.1% |       7 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% |       1 | `resize`              | `java.util.HashMap`                                        |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      52 | `get`  | `java.util.ArrayList` |

##### `hash` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 96.2% |      25 | `computeIfAbsent` | `java.util.HashMap` |
|  3.8% |       1 | `put`             | `java.util.HashMap` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|     % | Samples | Caller                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 96.0% |      24 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
|  4.0% |       1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |      24 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller | Location              |
| ----: | ------: | ------ | --------------------- |
| 80.0% |      16 | `grow` | `java.util.ArrayList` |
| 20.0% |       4 | `add`  | `java.util.ArrayList` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 60.0% |       9 | `copyOf` | `java.util.Arrays`    |
| 20.0% |       3 | `merge`  | `java.util.HashMap`   |
| 20.0% |       3 | `grow`   | `java.util.ArrayList` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 40.0% |       6 | `Unsafe_Park`              | `<unknown>` |
| 26.7% |       4 | `OptoRuntime::new_array_C` | `<unknown>` |
| 20.0% |       3 | `Unsafe_Unpark`            | `<unknown>` |
| 13.3% |       2 | `_new_array_Java`          | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      15 | `MemAllocator::allocate` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 85.7% |      12 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 14.3% |       2 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |

##### `G1RegionMarkStatsCache::add_live_words` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 92.9% |      13 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
|  7.1% |       1 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |      11 | `G1AdjustRegionClosure::do_heap_region` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 50.0% |       5 | `WorkerThread::run`              | `<unknown>` |
| 50.0% |       5 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      10 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 55.6% |       5 | `G1FullGCMarker::complete_marking`      | `<unknown>` |
| 44.4% |       4 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 50.0% |       4 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 50.0% |       4 | `MemAllocator::allocate`                      | `<unknown>` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |       8 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       7 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |       6 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |       4 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |
| 20.0% |       1 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |

##### `G1FullGCMarker::follow_object` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 60.0% |       3 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |
| 40.0% |       2 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       5 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       5 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       4 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `MarkBitMap::check_mark` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 50.0% |       2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
| 50.0% |       2 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       4 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller    | Location              |
| ----: | ------: | --------- | --------------------- |
| 75.0% |       3 | `toArray` | `java.util.ArrayList` |
| 25.0% |       1 | `grow`    | `java.util.ArrayList` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       4 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |       4 | `putMapEntries` | `java.util.HashMap` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       3 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       3 | `forEach` | `java.util.HashMap` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 66.7% |       2 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 33.3% |       1 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 66.7% |       2 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 33.3% |       1 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `newLength` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |       3 | `grow` | `java.util.ArrayList` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                   |
| -----: | ------: | --------------- | ---------------------------------------------------------- |
| 100.0% |       2 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 50.0% |       1 | `PhaseIFG::SquareUp`     | `<unknown>` |
| 50.0% |       1 | `PhaseLive::add_liveout` | `<unknown>` |

##### `MachNode::rematerialize` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Split` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |

##### `boxed` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       1 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Node::hash` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `PhaseIterGVN::subsume_node` | `<unknown>` |

##### `Scheduling::AddNodeToAvailableList` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `Scheduling::AddNodeToBundle` | `<unknown>` |

##### `Node::find_long_type` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `State::_sub_Op_ConL` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `Matcher::match` | `<unknown>` |

##### `NTarjan::DFS` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::Dominators` | `<unknown>` |

##### `LIR_Assembler::record_non_safepoint_debug_info` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       1 | `LIR_Assembler::process_debug_info` | `<unknown>` |

##### `PhaseCFG::insert_anti_dependences` (`<unknown>`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::schedule_late` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `ciMethod::load_code` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |       1 | `XHandlers::XHandlers` | `<unknown>` |

##### `PhaseChaitin::merge_multidefs` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `CallNode::match_edge` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `Matcher::match_sfpt` | `<unknown>` |

##### `RegMask::is_misaligned_pair` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::gather_lrg_masks` | `<unknown>` |

##### `MacroAssembler::ldst_can_merge` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       1 | `BarrierSetAssembler::nmethod_entry_barrier` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function              | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 94.2% |   4,376 | `runWorker`           | `java.util.concurrent.ForkJoinPool`                        |
| 94.2% |   4,376 | `run`                 | `java.util.concurrent.ForkJoinWorkerThread`                |
| 87.3% |   4,054 | `scan`                | `java.util.concurrent.ForkJoinPool`                        |
| 87.0% |   4,043 | `topLevelExec`        | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 87.0% |   4,042 | `doExec`              | `java.util.concurrent.ForkJoinTask`                        |
| 86.1% |   4,002 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 86.1% |   4,002 | `exec`                | `java.util.concurrent.RecursiveTask`                       |
| 82.1% |   3,816 | `join`                | `java.util.concurrent.ForkJoinTask`                        |
| 82.1% |   3,815 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                        |
| 78.1% |   3,629 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 37.0% |   1,717 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 29.7% |   1,380 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 29.7% |   1,379 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 27.8% |   1,291 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.2% |   1,032 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`                        |
| 20.5% |     953 | `invoke`              | `java.util.concurrent.ForkJoinTask`                        |
| 18.9% |     880 | `accumulate`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.8% |     873 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 16.4% |     760 | `__psynch_cvwait`     | `<unknown>`                                                |
| 16.3% |     757 | `park`                | `jdk.internal.misc.Unsafe`                                 |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 86.1% |   4,002 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 37.0% |   1,717 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 29.7% |   1,380 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 29.7% |   1,379 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 27.8% |   1,291 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 18.9% |     880 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 18.8% |     873 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 13.9% |     646 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.9% |     646 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.8% |     640 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 10.1% |     471 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 10.1% |     471 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |
|  9.1% |     425 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.8% |     361 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.7% |     358 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.4% |     344 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
|  7.3% |     341 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.9% |     228 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.9% |     228 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218` |
|  0.9% |      44 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Native

|     % | Samples | Function                                                        | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 16.4% |     760 | `__psynch_cvwait`                                               | `<unknown>` |
| 16.3% |     755 | `Unsafe_Park`                                                   | `<unknown>` |
| 16.0% |     743 | `Parker::park`                                                  | `<unknown>` |
|  5.1% |     237 | `forward_copy_longs`                                            | `<unknown>` |
|  4.7% |     217 | `_pthread_start`                                                | `<unknown>` |
|  4.7% |     217 | `thread_start`                                                  | `<unknown>` |
|  4.6% |     216 | `Thread::call_run`                                              | `<unknown>` |
|  4.6% |     216 | `thread_native_entry`                                           | `<unknown>` |
|  4.3% |     202 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>` |
|  2.8% |     128 | `WorkerThread::run`                                             | `<unknown>` |
|  1.7% |      78 | `JavaThread::thread_main_inner`                                 | `<unknown>` |
|  1.5% |      69 | `G1FullGCMarker::complete_marking`                              | `<unknown>` |
|  1.5% |      69 | `G1FullGCMarkTask::work`                                        | `<unknown>` |
|  1.5% |      68 | `Unsafe_Unpark`                                                 | `<unknown>` |
|  1.3% |      61 | `__psynch_cvsignal`                                             | `<unknown>` |
|  1.2% |      54 | `arrayof_oop_disjoint_arraycopy`                                | `<unknown>` |
|  1.1% |      52 | `G1FullGCMarker::follow_marking_stacks`                         | `<unknown>` |
|  1.1% |      50 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
|  0.9% |      42 | `_new_array_Java`                                               | `<unknown>` |
|  0.9% |      40 | `OptoRuntime::new_array_C`                                      | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 94.2% |   4,376 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 94.2% |   4,376 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 87.3% |   4,054 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 87.0% |   4,043 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 87.0% |   4,042 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 86.1% |   4,002 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 82.1% |   3,816 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 82.1% |   3,815 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 78.1% |   3,629 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 22.2% |   1,032 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| 20.5% |     953 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 16.3% |     757 | `park`             | `jdk.internal.misc.Unsafe`                          |
| 16.1% |     747 | `park`             | `java.util.concurrent.locks.LockSupport`            |
| 10.1% |     471 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  7.5% |     348 | `forEach`          | `java.util.HashMap`                                 |
|  7.3% |     339 | `merge`            | `java.util.HashMap`                                 |
|  6.8% |     315 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                 |
|  4.7% |     220 | `get`              | `java.util.ArrayList`                               |
|  3.7% |     170 | `copyOf`           | `java.util.Arrays`                                  |
|  3.6% |     165 | `elementData`      | `java.util.ArrayList`                               |

##### JIT

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
|  1.2% |      58 | `zero_blocks`            | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                   | Location    |
| ---: | ------: | ------------------------------------------ | ----------- |
| 1.7% |      77 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 1.4% |      65 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 1.1% |      49 | `Compile::Compile`                         | `<unknown>` |
| 1.0% |      48 | `C2Compiler::compile_method`               | `<unknown>` |
| 0.6% |      28 | `Compile::Code_Gen`                        | `<unknown>` |
| 0.3% |      16 | `Compile::Optimize`                        | `<unknown>` |
| 0.3% |      16 | `Compilation::compile_method`              | `<unknown>` |
| 0.3% |      16 | `Compilation::Compilation`                 | `<unknown>` |
| 0.3% |      15 | `Compilation::compile_java_method`         | `<unknown>` |
| 0.3% |      13 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 0.3% |      13 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 0.2% |      11 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 0.2% |      11 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 0.2% |      11 | `CompileQueue::get`                        | `<unknown>` |
| 0.2% |       8 | `Compile::optimize_loops`                  | `<unknown>` |
| 0.2% |       8 | `Compilation::build_hir`                   | `<unknown>` |
| 0.1% |       6 | `PhaseOutput::Output`                      | `<unknown>` |
| 0.1% |       6 | `Matcher::match`                           | `<unknown>` |
| 0.1% |       6 | `GraphBuilder::GraphBuilder`               | `<unknown>` |
| 0.1% |       5 | `Compilation::emit_lir`                    | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 92.6% |   4,054 | `scan`                   | `java.util.concurrent.ForkJoinPool` |
|  7.2% |     315 | `awaitWork`              | `java.util.concurrent.ForkJoinPool` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)` | `<unknown>`                         |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |   4,376 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 99.7% |   4,043 | `topLevelExec`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `signalWork`    | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       3 | `casSlotToNull` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee          | Location                                      |
| -----: | ------: | --------------- | --------------------------------------------- |
| 100.0% |   4,042 | `doExec`        | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       1 | `nextLocalTask` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee    | Location                                            |
| ----: | ------: | --------- | --------------------------------------------------- |
| 99.0% |   4,002 | `exec`    | `java.util.concurrent.RecursiveTask`                |
| 11.7% |     471 | `exec`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.4% |      57 | `setDone` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 95.4% |   3,816 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 42.9% |   1,717 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 34.5% |   1,380 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.1% |     646 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  8.9% |     358 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |   4,002 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |   3,815 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 95.1% |   3,629 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 27.1% |   1,032 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
| 11.7% |     447 | `park`             | `java.util.concurrent.locks.LockSupport`      |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee            | Location                                      |
| -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% |   3,629 | `doExec`          | `java.util.concurrent.ForkJoinTask`           |
|   0.1% |       2 | `getAndClearSlot` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 99.9% |   1,716 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 75.2% |   1,291 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 24.8% |     425 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee            | Location                                                  |
| ----: | ------: | ----------------- | --------------------------------------------------------- |
| 99.9% |   1,379 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,379 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 63.8% |     880 | `accumulate`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  6.8% |      94 | `get`                            | `java.util.ArrayList`                                     |
|  0.1% |       1 | `DeoptimizationBlob`             | `<unknown>`                                               |
|  0.1% |       1 | `counter_overflow Runtime1 stub` | `<unknown>`                                               |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee          | Location                                                   |
| ----: | ------: | --------------- | ---------------------------------------------------------- |
| 67.6% |     873 | `distance`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  5.7% |      74 | `get`           | `java.util.ArrayList`                                      |
|  0.5% |       7 | `zero_blocks`   | `<unknown>`                                                |
|  0.1% |       1 | `size`          | `java.util.ArrayList`                                      |
|  0.1% |       1 | `SafepointBlob` | `<unknown>`                                                |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 98.1% |   1,012 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
|  0.7% |       7 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 99.9% |     952 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 10.2% |      90 | `doubleValue` | `java.lang.Double` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.8% |      16 | `doubleValue`   | `java.lang.Double` |
| 0.2% |       2 | `SafepointBlob` | `<unknown>`        |

##### `park` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee        | Location    |
| ----: | ------: | ------------- | ----------- |
| 99.7% |     755 | `Unsafe_Park` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 98.4% |     743 | `Parker::park`                   | `<unknown>` |
|  0.8% |       6 | `pthread_jit_write_protect_np`   | `<unknown>` |
|  0.3% |       2 | `pthread_mutex_trylock`          | `<unknown>` |
|  0.1% |       1 | `JavaFrameAnchor::make_walkable` | `<unknown>` |
|  0.1% |       1 | `pthread_mutex_unlock`           | `<unknown>` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee | Location                   |
| -----: | ------: | ------ | -------------------------- |
| 100.0% |     747 | `park` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 99.5% |     739 | `__psynch_cvwait`               | `<unknown>` |
|  0.3% |       2 | `_pthread_cond_wait`            | `<unknown>` |
|  0.1% |       1 | `stub:pthread_mutex_unlock`     | `<unknown>` |
|  0.1% |       1 | `java_lang_Thread::interrupted` | `<unknown>` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 99.1% |     640 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.8% |       5 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       2 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     646 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     646 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     640 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 99.4% |     468 | `invoke` | `java.util.concurrent.ForkJoinTask` |
|  0.2% |       1 | `keySet` | `java.util.HashMap`                 |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     471 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |     471 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location              |
| ----: | ------: | ----------------- | --------------------- |
| 36.5% |     155 | `computeIfAbsent` | `java.util.HashMap`   |
| 27.1% |     115 | `add`             | `java.util.ArrayList` |
| 12.2% |      52 | `get`             | `java.util.ArrayList` |
|  0.2% |       1 | `SafepointBlob`   | `<unknown>`           |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 96.4% |     348 | `forEach`            | `java.util.HashMap`                |
|  2.8% |      10 | `<init>`             | `java.util.HashMap`                |
|  0.8% |       3 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |     358 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |     358 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 98.9% |     344 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 99.1% |     341 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee          | Location            |
| ----: | ------: | --------------- | ------------------- |
| 99.4% |     339 | `merge`         | `java.util.HashMap` |
|  0.3% |       1 | `SafepointBlob` | `<unknown>`         |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 67.3% |     228 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218` |
| 19.5% |      66 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| 10.9% |      37 | `zero_blocks`                     | `<unknown>`                                                            |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                                 |
| ----: | ------: | ----------- | ---------------------------------------- |
| 95.2% |     300 | `park`      | `java.util.concurrent.locks.LockSupport` |
|  3.2% |      10 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 66.7% |     152 | `addAll` | `java.util.ArrayList` |
| 32.9% |      75 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     228 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Callee        | Location              |
| ----: | ------: | ------------- | --------------------- |
| 75.0% |     165 | `elementData` | `java.util.ArrayList` |
| 23.6% |      52 | `checkIndex`  | `java.util.Objects`   |

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.5% |     216 | `thread_native_entry` | `<unknown>` |
|  0.5% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     217 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 59.3% |     128 | `WorkerThread::run`             | `<unknown>` |
| 36.1% |      78 | `JavaThread::thread_main_inner` | `<unknown>` |
|  1.9% |       4 | `ConcurrentGCThread::run`       | `<unknown>` |
|  1.4% |       3 | `WatcherThread::run`            | `<unknown>` |
|  0.9% |       2 | `VMThread::run`                 | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     216 | `Thread::call_run` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 92.6% |     187 | `forward_copy_longs` | `<unknown>` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 74.1% |     126 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 23.5% |      40 | `_new_array_Java`                 | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 53.9% |      69 | `G1FullGCMarkTask::work`          | `<unknown>` |
| 29.7% |      38 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 11.7% |      15 | `G1FullGCAdjustTask::work`        | `<unknown>` |
|  3.9% |       5 | `semaphore_wait_trap`             | `<unknown>` |
|  0.8% |       1 | `G1ParallelCleaningTask::work`    | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 98.7% |      77 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
|  1.3% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 84.4% |      65 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 14.3% |      11 | `CompileQueue::get`                        | `<unknown>` |
|  1.3% |       1 | `CompileBroker::init_compiler_runtime`     | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|     % | Samples | Callee                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| 75.4% |      52 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `<unknown>` |
| 21.7% |      15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `<unknown>` |
|  2.9% |       2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      69 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 89.7% |      61 | `__psynch_cvsignal`            | `<unknown>` |
|  4.4% |       3 | `pthread_jit_write_protect_np` | `<unknown>` |
|  2.9% |       2 | `Parker::unpark`               | `<unknown>` |
|  1.5% |       1 | `_pthread_cond_updateval`      | `<unknown>` |
|  1.5% |       1 | `pthread_cond_signal`          | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 73.8% |      48 | `C2Compiler::compile_method`  | `<unknown>` |
| 24.6% |      16 | `Compiler::compile_method`    | `<unknown>` |
|  1.5% |       1 | `CompilationLog::log_compile` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 92.6% |      50 | `forward_copy_longs`       | `<unknown>` |
|  1.9% |       1 | `G1BarrierSet::invalidate` | `<unknown>` |

##### `G1FullGCMarker::follow_marking_stacks` (`<unknown>`)

|     % | Samples | Callee                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 67.3% |      35 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
| 17.3% |       9 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `<unknown>` |
|  7.7% |       4 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  5.8% |       3 | `G1FullGCMarker::follow_object`                                                                      | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 76.0% |      38 | `G1FullGCMarker::mark_object`            | `<unknown>` |
|  4.0% |       2 | `MarkBitMap::check_mark`                 | `<unknown>` |
|  2.0% |       1 | `G1RegionMarkStatsCache::add_live_words` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 57.1% |      28 | `Compile::Code_Gen`                      | `<unknown>` |
| 32.7% |      16 | `Compile::Optimize`                      | `<unknown>` |
|  8.2% |       4 | `ParseGenerator::generate`               | `<unknown>` |
|  2.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      48 | `Compile::Compile` | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 97.7% |      43 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
|  2.3% |       1 | `create`                    | `org.renaissance.core.ModuleLoader` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 95.2% |      40 | `OptoRuntime::new_array_C`     | `<unknown>` |
|  4.8% |       2 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 75.0% |      30 | `InstanceKlass::allocate_objArray` | `<unknown>` |
| 10.0% |       4 | `pthread_jit_write_protect_np`     | `<unknown>` |
|  5.0% |       2 | `CollectedHeap::array_allocate`    | `<unknown>` |
|  2.5% |       1 | `ObjArrayKlass::array_klass`       | `<unknown>` |
|  2.5% |       1 | `G1CardTable::is_in_young`         | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 46.4% |      13 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 21.4% |       6 | `PhaseOutput::Output`             | `<unknown>` |
| 21.4% |       6 | `Matcher::match`                  | `<unknown>` |
| 10.7% |       3 | `PhaseCFG::do_global_code_motion` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 50.0% |       8 | `Compile::optimize_loops`                  | `<unknown>` |
| 31.3% |       5 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  6.3% |       1 | `Compile::inline_incrementally`            | `<unknown>` |
|  6.3% |       1 | `Compile::process_for_post_loop_opts_igvn` | `<unknown>` |
|  6.3% |       1 | `PhaseCCP::PhaseCCP`                       | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 93.8% |      15 | `Compilation::compile_java_method` | `<unknown>` |
|  6.3% |       1 | `ciEnv::register_method`           | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      16 | `Compilation::compile_method` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 53.3% |       8 | `Compilation::build_hir`       | `<unknown>` |
| 33.3% |       5 | `Compilation::emit_lir`        | `<unknown>` |
|  6.7% |       1 | `Compilation::emit_code_body`  | `<unknown>` |
|  6.7% |       1 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 84.6% |      11 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 15.4% |       2 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 23.1% |       3 | `PhaseChaitin::Split`              | `<unknown>` |
| 15.4% |       2 | `PhaseChaitin::gather_lrg_masks`   | `<unknown>` |
| 15.4% |       2 | `PhaseLive::compute`               | `<unknown>` |
| 15.4% |       2 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
|  7.7% |       1 | `PhaseIFG::SquareUp`               | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 36.4% |       4 | `PhaseIdealLoop::build_loop_late`   | `<unknown>` |
| 27.3% |       3 | `PhaseIdealLoop::Dominators`        | `<unknown>` |
|  9.1% |       1 | `IdealLoopTree::counted_loop`       | `<unknown>` |
|  9.1% |       1 | `IdealLoopTree::policy_range_check` | `<unknown>` |
|  9.1% |       1 | `PhaseIdealLoop::build_loop_tree`   | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 90.9% |      10 | `Monitor::wait`                       | `<unknown>` |
|  9.1% |       1 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 87.5% |       7 | `IR::IR`                                     | `<unknown>` |
| 12.5% |       1 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 33.3% |       2 | `Scheduling::DoScheduling`      | `<unknown>` |
| 33.3% |       2 | `PhaseOutput::fill_buffer`      | `<unknown>` |
| 16.7% |       1 | `PhaseOutput::shorten_branches` | `<unknown>` |
| 16.7% |       1 | `PhaseOutput::BuildOopMaps`     | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 83.3% |       5 | `Matcher::xform`         | `<unknown>` |
| 16.7% |       1 | `Matcher::pd_clone_node` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 83.3% |       5 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
| 16.7% |       1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 80.0% |       4 | `LinearScan::do_linear_scan` | `<unknown>` |
| 20.0% |       1 | `BlockList::iterate_forward` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.3% |     292 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.7% |     126 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.6% |     122 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.4% |     113 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.1% |      97 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.6% |      73 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |
| 1.5% |      72 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.5% |      71 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.5% |      69 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% |      67 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.4% |      66 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |      60 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |      55 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |      53 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |      49 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      48 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% |      42 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |      40 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.8% |      38 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.8% |      37 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

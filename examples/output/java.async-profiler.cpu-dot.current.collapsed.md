# Sampling profile

Collected 4,611 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 53.5% |   2,467 |
| Native           | 28.7% |   1,324 |
| Standard library | 15.5% |     716 |
| Compiler         |  1.3% |      58 |
| JIT              |  1.0% |      46 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                       | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 19.1% |     883 | `accumulate`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.4% |     758 | `__psynch_cvwait`              | `<unknown>`                                                |
| 12.1% |     558 | `distance`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 10.1% |     468 | `findNearestCentroid`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  9.7% |     448 | `vectorSum`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  4.9% |     225 | `forward_copy_longs`           | `<unknown>`                                                |
|  3.4% |     158 | `elementData`                  | `java.util.ArrayList`                                      |
|  3.4% |     155 | `doubleValue`                  | `java.lang.Double`                                         |
|  2.3% |     108 | `computeIfAbsent`              | `java.util.HashMap`                                        |
|  2.0% |      90 | `collectClusters`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.3% |      58 | `grow`                         | `java.util.ArrayList`                                      |
|  1.2% |      55 | `__psynch_cvsignal`            | `<unknown>`                                                |
|  1.1% |      51 | `add`                          | `java.util.ArrayList`                                      |
|  0.9% |      42 | `zero_blocks`                  | `<unknown>`                                                |
|  0.8% |      35 | `helpJoin`                     | `java.util.concurrent.ForkJoinPool`                        |
|  0.6% |      29 | `checkIndex`                   | `java.util.Objects`                                        |
|  0.6% |      27 | `hash`                         | `java.util.HashMap`                                        |
|  0.5% |      24 | `G1FullGCMarker::mark_object`  | `<unknown>`                                                |
|  0.4% |      17 | `pthread_jit_write_protect_np` | `<unknown>`                                                |
|  0.4% |      17 | `__psynch_mutexwait`           | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 19.1% |     883 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 12.1% |     558 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 10.1% |     468 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  9.7% |     448 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  2.0% |      90 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       4 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  0.1% |       3 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       3 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       2 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `lambda$generateData$3`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Native

|     % | Samples | Function                                                 | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 16.4% |     758 | `__psynch_cvwait`                                        | `<unknown>` |
|  4.9% |     225 | `forward_copy_longs`                                     | `<unknown>` |
|  1.2% |      55 | `__psynch_cvsignal`                                      | `<unknown>` |
|  0.5% |      24 | `G1FullGCMarker::mark_object`                            | `<unknown>` |
|  0.4% |      17 | `pthread_jit_write_protect_np`                           | `<unknown>` |
|  0.4% |      17 | `__psynch_mutexwait`                                     | `<unknown>` |
|  0.4% |      17 | `semaphore_wait_trap`                                    | `<unknown>` |
|  0.3% |      15 | `_platform_bzero`                                        | `<unknown>` |
|  0.3% |      12 | `G1ParScanThreadState::do_copy_to_survivor_space`        | `<unknown>` |
|  0.2% |      11 | `arrayof_jint_disjoint_arraycopy`                        | `<unknown>` |
|  0.2% |      11 | `G1FullGCMarker::follow_object`                          | `<unknown>` |
|  0.2% |       9 | `_platform_memset`                                       | `<unknown>` |
|  0.2% |       7 | `G1ParScanThreadState::trim_queue_to_threshold`          | `<unknown>` |
|  0.1% |       6 | `arrayof_oop_disjoint_arraycopy`                         | `<unknown>` |
|  0.1% |       5 | `inflate_fast`                                           | `<unknown>` |
|  0.1% |       5 | `G1FullGCCompactTask::copy_object_to_new_location`       | `<unknown>` |
|  0.1% |       4 | `Unsafe_Park`                                            | `<unknown>` |
|  0.1% |       4 | `G1ParScanThreadState::start_partial_objarray`           | `<unknown>` |
|  0.1% |       4 | `G1FullGCMarker::publish_and_drain_oop_tasks`            | `<unknown>` |
|  0.1% |       4 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` | `<unknown>` |

##### Standard library

|     % | Samples | Function          | Location                             |
| ----: | ------: | ----------------- | ------------------------------------ |
|  3.4% |     158 | `elementData`     | `java.util.ArrayList`                |
|  3.4% |     155 | `doubleValue`     | `java.lang.Double`                   |
|  2.3% |     108 | `computeIfAbsent` | `java.util.HashMap`                  |
|  1.3% |      58 | `grow`            | `java.util.ArrayList`                |
|  1.1% |      51 | `add`             | `java.util.ArrayList`                |
|  0.8% |      35 | `helpJoin`        | `java.util.concurrent.ForkJoinPool`  |
|  0.6% |      29 | `checkIndex`      | `java.util.Objects`                  |
|  0.6% |      27 | `hash`            | `java.util.HashMap`                  |
|  0.2% |       9 | `merge`           | `java.util.HashMap`                  |
|  0.2% |       7 | `scan`            | `java.util.concurrent.ForkJoinPool`  |
|  0.2% |       7 | `copyOf`          | `java.util.Arrays`                   |
|  0.1% |       6 | `runWorker`       | `java.util.concurrent.ForkJoinPool`  |
|  0.1% |       6 | `forEach`         | `java.util.HashMap`                  |
|  0.1% |       5 | `awaitDone`       | `java.util.concurrent.ForkJoinTask`  |
|  0.1% |       5 | `nextNode`        | `java.util.HashMap$HashIterator`     |
|  0.1% |       3 | `doExec`          | `java.util.concurrent.ForkJoinTask`  |
|  0.1% |       3 | `join`            | `java.util.concurrent.ForkJoinTask`  |
|  0.1% |       3 | `addAll`          | `java.util.ArrayList`                |
| <0.1% |       2 | `exec`            | `java.util.concurrent.RecursiveTask` |
| <0.1% |       2 | `putVal`          | `java.util.HashMap`                  |

##### Compiler

|     % | Samples | Function                                      | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
|  0.1% |       3 | `IndexSetIterator::advance_and_next`          | `<unknown>` |
|  0.1% |       3 | `PhaseLive::compute`                          | `<unknown>` |
| <0.1% |       2 | `RegionNode::is_CFG`                          | `<unknown>` |
| <0.1% |       2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::gather_lrg_masks`              | `<unknown>` |
| <0.1% |       2 | `LinearScanWalker::alloc_free_reg`            | `<unknown>` |
| <0.1% |       1 | `Compile::identify_useful_nodes`              | `<unknown>` |
| <0.1% |       1 | `BoolNode::Ideal`                             | `<unknown>` |
| <0.1% |       1 | `PhaseIterGVN::optimize`                      | `<unknown>` |
| <0.1% |       1 | `PhiNode::Ideal`                              | `<unknown>` |
| <0.1% |       1 | `Type::cmp`                                   | `<unknown>` |
| <0.1% |       1 | `LIRGenerator::move_to_phi`                   | `<unknown>` |
| <0.1% |       1 | `LinearScanWalker::activate_current`          | `<unknown>` |
| <0.1% |       1 | `RelocIterator::set_limits`                   | `<unknown>` |
| <0.1% |       1 | `CallLeafDirectNode::pipeline`                | `<unknown>` |
| <0.1% |       1 | `CmpINode::Opcode`                            | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::schedule_local`                    | `<unknown>` |
| <0.1% |       1 | `GraphBuilder::iterate_bytecodes_for_block`   | `<unknown>` |
| <0.1% |       1 | `PhaseIterGVN::add_users_to_worklist`         | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::build_ifg_physical`            | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     883 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 96.3% |     730 | `Parker::park`          | `<unknown>` |
|  3.7% |      28 | `PlatformMonitor::wait` | `<unknown>` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     558 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     468 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     448 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 80.9% |     182 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 19.1% |      43 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     158 | `get`  | `java.util.ArrayList` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 63.9% |      99 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 36.1% |      56 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     108 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |      90 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      58 | `grow` | `java.util.ArrayList` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      55 | `Unsafe_Unpark` | `<unknown>` |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      51 | `add`  | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 73.8% |      31 | `merge`  | `java.util.HashMap`   |
| 23.8% |      10 | `grow`   | `java.util.ArrayList` |
|  2.4% |       1 | `copyOf` | `java.util.Arrays`    |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |      35 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      29 | `get`  | `java.util.ArrayList` |

##### `hash` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 88.9% |      24 | `computeIfAbsent` | `java.util.HashMap` |
|  7.4% |       2 | `putMapEntries`   | `java.util.HashMap` |
|  3.7% |       1 | `merge`           | `java.util.HashMap` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|     % | Samples | Caller                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 83.3% |      20 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
|  8.3% |       2 | `G1FullGCMarker::complete_marking`                                                                   | `<unknown>` |
|  4.2% |       1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  4.2% |       1 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 35.3% |       6 | `_new_array_Java`                           | `<unknown>` |
| 23.5% |       4 | `Unsafe_Park`                               | `<unknown>` |
| 17.6% |       3 | `OptoRuntime::new_array_C`                  | `<unknown>` |
| 17.6% |       3 | `Unsafe_Unpark`                             | `<unknown>` |
|  5.9% |       1 | `SharedRuntime::resolve_opt_virtual_call_C` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      17 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 64.7% |      11 | `WorkerThread::run`              | `<unknown>` |
| 35.3% |       6 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|     % | Samples | Caller                                              | Location    |
| ----: | ------: | --------------------------------------------------- | ----------- |
| 93.3% |      14 | `MemAllocator::allocate`                            | `<unknown>` |
|  6.7% |       1 | `G1YoungCollector::evacuate_initial_collection_set` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 91.7% |      11 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
|  8.3% |       1 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller   | Location            |
| ----: | ------: | -------- | ------------------- |
| 72.7% |       8 | `copyOf` | `java.util.Arrays`  |
| 27.3% |       3 | `merge`  | `java.util.HashMap` |

##### `G1FullGCMarker::follow_object` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 54.5% |       6 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |
| 45.5% |       5 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 66.7% |       6 | `MemAllocator::allocate`                      | `<unknown>` |
| 22.2% |       2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 11.1% |       1 | `ConstMethod::allocate`                       | `<unknown>` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |       9 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 71.4% |       5 | `G1ParScanThreadState::steal_and_trim_queue`                        | `<unknown>` |
| 14.3% |       1 | `G1ScanHRForRegionClosure::scan_memregion`                          | `<unknown>` |
| 14.3% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       7 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller    | Location              |
| ----: | ------: | --------- | --------------------- |
| 85.7% |       6 | `toArray` | `java.util.ArrayList` |
| 14.3% |       1 | `grow`    | `java.util.ArrayList` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       6 | `addAll` | `java.util.ArrayList` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |       6 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       6 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`<unknown>`)

|     % | Samples | Caller                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 80.0% |       4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `<unknown>` |
| 20.0% |       1 | `G1FullGCCompactTask::compact_region`                | `<unknown>` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       5 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `nextNode` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller | Location                          |
| -----: | ------: | ------ | --------------------------------- |
| 100.0% |       5 | `next` | `java.util.HashMap$EntryIterator` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       4 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `Unsafe_Park` (`<unknown>`)

|      % | Samples | Caller | Location                   |
| -----: | ------: | ------ | -------------------------- |
| 100.0% |       4 | `park` | `jdk.internal.misc.Unsafe` |

##### `G1ParScanThreadState::start_partial_objarray` (`<unknown>`)

|      % | Samples | Caller                                            | Location    |
| -----: | ------: | ------------------------------------------------- | ----------- |
| 100.0% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       4 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 75.0% |       3 | `G1ParScanThreadState::do_partial_array`       | `<unknown>` |
| 25.0% |       1 | `G1ParScanThreadState::start_partial_objarray` | `<unknown>` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |       3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 66.7% |       2 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 33.3% |       1 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `addAll` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |       3 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 66.7% |       2 | `PhaseLive::add_liveout` | `<unknown>` |
| 33.3% |       1 | `PhaseChaitin::Simplify` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |       2 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       2 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |       2 | `putMapEntries` | `java.util.HashMap` |

##### `RegionNode::is_CFG` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 50.0% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 50.0% |       1 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                                                  |
| -----: | ------: | -------- | --------------------------------------------------------- |
| 100.0% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller          | Location                                                  |
| -----: | ------: | --------------- | --------------------------------------------------------- |
| 100.0% |       1 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|      % | Samples | Caller                                   | Location    |
| -----: | ------: | ---------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |

##### `BoolNode::Ideal` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhiNode::Ideal` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `PhaseIterGVN::transform_old` | `<unknown>` |

##### `Type::cmp` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |       1 | `Dict::Insert` | `<unknown>` |

##### `LIRGenerator::move_to_phi` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       1 | `LIRGenerator::do_Goto` | `<unknown>` |

##### `LinearScanWalker::activate_current` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `LinearScan::allocate_registers` | `<unknown>` |

##### `RelocIterator::set_limits` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `SharedRuntime::reresolve_call_site` | `<unknown>` |

##### `CallLeafDirectNode::pipeline` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::partial_latency_of_defs` | `<unknown>` |

##### `CmpINode::Opcode` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       1 | `PhaseCCP::transform_once` | `<unknown>` |

##### `PhaseCFG::schedule_local` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `PhaseIterGVN::PhaseIterGVN` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function              | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 94.2% |   4,342 | `runWorker`           | `java.util.concurrent.ForkJoinPool`                        |
| 94.2% |   4,342 | `run`                 | `java.util.concurrent.ForkJoinWorkerThread`                |
| 87.8% |   4,050 | `scan`                | `java.util.concurrent.ForkJoinPool`                        |
| 87.7% |   4,042 | `topLevelExec`        | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 87.6% |   4,040 | `doExec`              | `java.util.concurrent.ForkJoinTask`                        |
| 86.9% |   4,009 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 86.9% |   4,009 | `exec`                | `java.util.concurrent.RecursiveTask`                       |
| 83.2% |   3,836 | `join`                | `java.util.concurrent.ForkJoinTask`                        |
| 83.1% |   3,834 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                        |
| 78.7% |   3,631 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 33.7% |   1,553 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 32.9% |   1,519 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 32.9% |   1,518 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 24.7% |   1,137 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 23.2% |   1,070 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`                        |
| 21.3% |     982 | `accumulate`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 19.7% |     910 | `invoke`              | `java.util.concurrent.ForkJoinTask`                        |
| 16.4% |     758 | `__psynch_cvwait`     | `<unknown>`                                                |
| 16.2% |     746 | `Unsafe_Park`         | `<unknown>`                                                |
| 16.2% |     746 | `park`                | `jdk.internal.misc.Unsafe`                                 |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 86.9% |   4,009 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 33.7% |   1,553 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 32.9% |   1,519 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 32.9% |   1,518 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 24.7% |   1,137 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 21.3% |     982 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 13.9% |     642 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.9% |     641 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.8% |     636 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.4% |     616 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.1% |     420 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.1% |     420 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |
|  9.0% |     416 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.8% |     359 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.8% |     358 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.3% |     335 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.3% |     335 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
|  5.2% |     241 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  5.2% |     241 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |
|  0.8% |      37 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Native

|     % | Samples | Function                           | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 16.4% |     758 | `__psynch_cvwait`                  | `<unknown>` |
| 16.2% |     746 | `Unsafe_Park`                      | `<unknown>` |
| 15.9% |     734 | `Parker::park`                     | `<unknown>` |
|  4.9% |     227 | `_pthread_start`                   | `<unknown>` |
|  4.9% |     227 | `thread_start`                     | `<unknown>` |
|  4.9% |     226 | `Thread::call_run`                 | `<unknown>` |
|  4.9% |     226 | `thread_native_entry`              | `<unknown>` |
|  4.9% |     225 | `forward_copy_longs`               | `<unknown>` |
|  4.2% |     193 | `arrayof_jint_disjoint_arraycopy`  | `<unknown>` |
|  2.6% |     122 | `WorkerThread::run`                | `<unknown>` |
|  1.8% |      83 | `JavaThread::thread_main_inner`    | `<unknown>` |
|  1.4% |      63 | `Unsafe_Unpark`                    | `<unknown>` |
|  1.3% |      60 | `G1FullGCMarker::complete_marking` | `<unknown>` |
|  1.3% |      60 | `G1FullGCMarkTask::work`           | `<unknown>` |
|  1.2% |      55 | `__psynch_cvsignal`                | `<unknown>` |
|  1.2% |      55 | `arrayof_oop_disjoint_arraycopy`   | `<unknown>` |
|  1.0% |      47 | `_new_array_Java`                  | `<unknown>` |
|  0.9% |      41 | `OptoRuntime::new_array_C`         | `<unknown>` |
|  0.8% |      37 | `MemAllocator::allocate`           | `<unknown>` |
|  0.8% |      37 | `CollectedHeap::array_allocate`    | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 94.2% |   4,342 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 94.2% |   4,342 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 87.8% |   4,050 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 87.7% |   4,042 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 87.6% |   4,040 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 86.9% |   4,009 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 83.2% |   3,836 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 83.1% |   3,834 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 78.7% |   3,631 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 23.2% |   1,070 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| 19.7% |     910 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 16.2% |     746 | `park`             | `jdk.internal.misc.Unsafe`                          |
| 15.8% |     729 | `park`             | `java.util.concurrent.locks.LockSupport`            |
|  9.1% |     420 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  7.4% |     341 | `forEach`          | `java.util.HashMap`                                 |
|  7.3% |     335 | `merge`            | `java.util.HashMap`                                 |
|  6.2% |     286 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                 |
|  4.1% |     188 | `get`              | `java.util.ArrayList`                               |
|  3.9% |     182 | `copyOf`           | `java.util.Arrays`                                  |
|  3.4% |     158 | `elementData`      | `java.util.ArrayList`                               |

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.8% |      82 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 1.5% |      67 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 1.2% |      54 | `Compile::Compile`                          | `<unknown>` |
| 1.2% |      54 | `C2Compiler::compile_method`                | `<unknown>` |
| 0.5% |      25 | `Compile::Code_Gen`                         | `<unknown>` |
| 0.5% |      21 | `Compile::Optimize`                         | `<unknown>` |
| 0.3% |      16 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
| 0.3% |      15 | `CompileQueue::get`                         | `<unknown>` |
| 0.3% |      15 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
| 0.3% |      14 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
| 0.3% |      14 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
| 0.3% |      13 | `Compilation::compile_java_method`          | `<unknown>` |
| 0.3% |      13 | `Compilation::compile_method`               | `<unknown>` |
| 0.3% |      13 | `Compilation::Compilation`                  | `<unknown>` |
| 0.2% |       7 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.1% |       6 | `Compilation::emit_lir`                     | `<unknown>` |
| 0.1% |       6 | `Compilation::build_hir`                    | `<unknown>` |
| 0.1% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.1% |       6 | `PhaseLive::compute`                        | `<unknown>` |
| 0.1% |       5 | `PhaseIterGVN::optimize`                    | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                            |
| ----: | ------: | ----------- | ----------------------------------- |
| 93.3% |   4,050 | `scan`      | `java.util.concurrent.ForkJoinPool` |
|  6.6% |     286 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |   4,342 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee         | Location                                      |
| ----: | ------: | -------------- | --------------------------------------------- |
| 99.8% |   4,042 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       1 | `signalWork`   | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee    | Location                                      |
| -----: | ------: | --------- | --------------------------------------------- |
| 100.0% |   4,040 | `doExec`  | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       1 | `tryPoll` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  <0.1% |       1 | `unpark`  | `jdk.internal.misc.Unsafe`                    |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee    | Location                                            |
| ----: | ------: | --------- | --------------------------------------------------- |
| 99.2% |   4,009 | `exec`    | `java.util.concurrent.RecursiveTask`                |
| 10.4% |     420 | `exec`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.2% |      47 | `setDone` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 95.7% |   3,836 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 38.7% |   1,553 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 37.9% |   1,519 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.0% |     641 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  9.0% |     359 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |   4,009 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                     | Location                             |
| ----: | ------: | -------------------------- | ------------------------------------ |
| 99.9% |   3,834 | `awaitDone`                | `java.util.concurrent.ForkJoinTask`  |
|  0.1% |       2 | `getRawResult`             | `java.util.concurrent.RecursiveTask` |
| <0.1% |       1 | `resolve_opt_virtual_call` | `<unknown>`                          |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee              | Location                                      |
| ----: | ------: | ------------------- | --------------------------------------------- |
| 94.7% |   3,631 | `tryRemoveAndExec`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 27.9% |   1,070 | `helpJoin`          | `java.util.concurrent.ForkJoinPool`           |
| 12.1% |     464 | `park`              | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `setCurrentBlocker` | `java.util.concurrent.locks.LockSupport`      |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee            | Location                                      |
| -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% |   3,631 | `doExec`          | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       1 | `getAndClearSlot` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   1,553 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  73.2% |   1,137 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  26.8% |     416 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee            | Location                                                  |
| ----: | ------: | ----------------- | --------------------------------------------------------- |
| 99.9% |   1,518 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,518 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 64.7% |     982 | `accumulate`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.7% |      86 | `get`                            | `java.util.ArrayList`                                     |
|  0.1% |       1 | `_new_array_Java`                | `<unknown>`                                               |
|  0.1% |       1 | `counter_overflow Runtime1 stub` | `<unknown>`                                               |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                                           | Location                                                   |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
| 54.2% |     616 | `distance`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.1% |      47 | `get`                                            | `java.util.ArrayList`                                      |
|  0.3% |       3 | `SafepointBlob`                                  | `<unknown>`                                                |
|  0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                                                |
|  0.1% |       1 | `_new_array_Java`                                | `<unknown>`                                                |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 97.0% |   1,038 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
|  1.3% |      14 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 10.1% |      99 | `doubleValue` | `java.lang.Double` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     910 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 98.4% |     734 | `Parker::park`                                                                                                                                             | `<unknown>` |
|  0.5% |       4 | `pthread_jit_write_protect_np`                                                                                                                             | `<unknown>` |
|  0.1% |       1 | `JavaThread::is_interrupted`                                                                                                                               | `<unknown>` |
|  0.1% |       1 | `java_lang_Thread::set_thread_status`                                                                                                                      | `<unknown>` |
|  0.1% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | `<unknown>` |

##### `park` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |     746 | `Unsafe_Park` | `<unknown>` |

##### `Parker::park` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 99.5% |     730 | `__psynch_cvwait`           | `<unknown>` |
|  0.1% |       1 | `stub:pthread_mutex_unlock` | `<unknown>` |
|  0.1% |       1 | `_pthread_cond_wait`        | `<unknown>` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Callee                     | Location                   |
| ----: | ------: | -------------------------- | -------------------------- |
| 99.9% |     728 | `park`                     | `jdk.internal.misc.Unsafe` |
|  0.1% |       1 | `resolve_opt_virtual_call` | `<unknown>`                |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     642 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  99.8% |     641 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|   0.2% |       1 | `I2C/C2I adapters(0xba)` | `<unknown>`                                            |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 99.2% |     636 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.6% |       4 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.2% |       1 | `put`     | `java.util.HashMap`                                    |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     636 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 9.1% |      56 | `doubleValue`   | `java.lang.Double` |
| 0.3% |       2 | `SafepointBlob` | `<unknown>`        |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 99.5% |     418 | `invoke`                   | `java.util.concurrent.ForkJoinTask` |
|  0.2% |       1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>`                         |
|  0.2% |       1 | `<init>`                   | `java.util.ArrayList`               |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     420 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |     420 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 32.5% |     135 | `computeIfAbsent`    | `java.util.HashMap`                |
| 32.0% |     133 | `add`                | `java.util.ArrayList`              |
| 13.2% |      55 | `get`                | `java.util.ArrayList`              |
|  0.5% |       2 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |
|  0.2% |       1 | `SafepointBlob`      | `<unknown>`                        |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 99.2% |     356 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 99.2% |     356 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                               |
| ----: | ------: | -------------------- | -------------------------------------- |
| 95.3% |     341 | `forEach`            | `java.util.HashMap`                    |
|  3.9% |      14 | `<init>`             | `java.util.HashMap`                    |
|  0.6% |       2 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder`     |
|  0.3% |       1 | `linkCallSite`       | `java.lang.invoke.MethodHandleNatives` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 98.2% |     335 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |     335 | `merge` | `java.util.HashMap` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     335 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 71.9% |     241 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |
| 15.8% |      53 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  9.3% |      31 | `zero_blocks`                     | `<unknown>`                                                            |
|  0.3% |       1 | `hash`                            | `java.util.HashMap`                                                    |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee        | Location                                 |
| ----: | ------: | ------------- | ---------------------------------------- |
| 92.7% |     265 | `park`        | `java.util.concurrent.locks.LockSupport` |
|  6.3% |      18 | `parkUntil`   | `java.util.concurrent.locks.LockSupport` |
|  0.3% |       1 | `interrupted` | `java.lang.Thread`                       |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 64.3% |     155 | `addAll` | `java.util.ArrayList` |
| 35.7% |      86 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     241 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.6% |     226 | `thread_native_entry` | `<unknown>` |
|  0.4% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     227 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 54.0% |     122 | `WorkerThread::run`             | `<unknown>` |
| 36.7% |      83 | `JavaThread::thread_main_inner` | `<unknown>` |
|  4.0% |       9 | `VMThread::run`                 | `<unknown>` |
|  3.1% |       7 | `ConcurrentGCThread::run`       | `<unknown>` |
|  2.2% |       5 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     226 | `Thread::call_run` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 94.3% |     182 | `forward_copy_longs` | `<unknown>` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Callee        | Location              |
| ----: | ------: | ------------- | --------------------- |
| 84.0% |     158 | `elementData` | `java.util.ArrayList` |
| 15.4% |      29 | `checkIndex`  | `java.util.Objects`   |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location           |
| ----: | ------: | --------------------------------- | ------------------ |
| 71.4% |     130 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
| 24.2% |      44 | `_new_array_Java`                 | `<unknown>`        |
|  0.5% |       1 | `zero_blocks`                     | `<unknown>`        |
|  0.5% |       1 | `copyOf`                          | `java.util.Arrays` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 49.2% |      60 | `G1FullGCMarkTask::work`          | `<unknown>` |
| 30.3% |      37 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  9.0% |      11 | `semaphore_wait_trap`             | `<unknown>` |
|  6.6% |       8 | `G1FullGCCompactTask::work`       | `<unknown>` |
|  3.3% |       4 | `G1FullGCAdjustTask::work`        | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 98.8% |      82 | `CompileBroker::compiler_thread_loop` | `<unknown>` |
|  1.2% |       1 | `ServiceThread::service_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 81.7% |      67 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 18.3% |      15 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 80.6% |      54 | `C2Compiler::compile_method` | `<unknown>` |
| 19.4% |      13 | `Compiler::compile_method`   | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 87.3% |      55 | `__psynch_cvsignal`                            | `<unknown>` |
|  4.8% |       3 | `pthread_jit_write_protect_np`                 | `<unknown>` |
|  3.2% |       2 | `Parker::unpark`                               | `<unknown>` |
|  1.6% |       1 | `FastThreadsListHandle::FastThreadsListHandle` | `<unknown>` |
|  1.6% |       1 | `stub:pthread_jit_write_protect_np`            | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|     % | Samples | Callee                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| 61.7% |      37 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `<unknown>` |
| 25.0% |      15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `<unknown>` |
|  6.7% |       4 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |
|  3.3% |       2 | `G1FullGCMarker::mark_object`                                                                              | `<unknown>` |
|  1.7% |       1 | `TaskTerminator::offer_termination`                                                                        | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      60 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 78.2% |      43 | `forward_copy_longs`                              | `<unknown>` |
|  5.5% |       3 | `G1BarrierSet::invalidate`                        | `<unknown>` |
|  3.6% |       2 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `<unknown>` |
|  1.8% |       1 | `G1BarrierSet::write_ref_array_work`              | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 46.3% |      25 | `Compile::Code_Gen`                      | `<unknown>` |
| 38.9% |      21 | `Compile::Optimize`                      | `<unknown>` |
| 11.1% |       6 | `ParseGenerator::generate`               | `<unknown>` |
|  1.9% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  1.9% |       1 | `Type::Initialize`                       | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      54 | `Compile::Compile` | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 87.2% |      41 | `OptoRuntime::new_array_C`     | `<unknown>` |
| 12.8% |       6 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 82.9% |      34 | `InstanceKlass::allocate_objArray` | `<unknown>` |
|  7.3% |       3 | `pthread_jit_write_protect_np`     | `<unknown>` |
|  7.3% |       3 | `CollectedHeap::array_allocate`    | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                        |
| ----: | ------: | --------------------------- | ------------------------------- |
| 97.3% |      36 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |
|  2.7% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher` |

##### `MemAllocator::allocate` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 37.8% |      14 | `_platform_bzero`                             | `<unknown>` |
| 24.3% |       9 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 16.2% |       6 | `_platform_memset`                            | `<unknown>` |
| 13.5% |       5 | `G1CollectedHeap::mem_allocate`               | `<unknown>` |
|  2.7% |       1 | `MemAllocator::Allocation::notify_allocation` | `<unknown>` |

##### `CollectedHeap::array_allocate` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 97.3% |      36 | `MemAllocator::allocate` | `<unknown>` |
|  2.7% |       1 | `tlv_get_addr`           | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 64.0% |      16 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 16.0% |       4 | `Matcher::match`                  | `<unknown>` |
| 12.0% |       3 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  8.0% |       2 | `PhaseOutput::Output`             | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 57.1% |      12 | `PhaseIdealLoop::optimize`   | `<unknown>` |
| 19.0% |       4 | `PhaseIterGVN::optimize`     | `<unknown>` |
| 14.3% |       3 | `Compile::optimize_loops`    | `<unknown>` |
|  4.8% |       1 | `PhaseCCP::do_transform`     | `<unknown>` |
|  4.8% |       1 | `PhaseIterGVN::PhaseIterGVN` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 37.5% |       6 | `PhaseLive::compute`               | `<unknown>` |
| 12.5% |       2 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 12.5% |       2 | `PhaseChaitin::gather_lrg_masks`   | `<unknown>` |
| 12.5% |       2 | `PhaseChaitin::Simplify`           | `<unknown>` |
|  6.3% |       1 | `PhaseChaitin::build_ifg_virtual`  | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|     % | Samples | Callee          | Location    |
| ----: | ------: | --------------- | ----------- |
| 93.3% |      14 | `Monitor::wait` | `<unknown>` |
|  6.7% |       1 | `Mutex::lock`   | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 93.3% |      14 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
|  6.7% |       1 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 50.0% |       7 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 14.3% |       2 | `IdealLoopTree::iteration_split`       | `<unknown>` |
|  7.1% |       1 | `MultiNode::is_CFG`                    | `<unknown>` |
|  7.1% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
|  7.1% |       1 | `RegionNode::is_CFG`                   | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 46.2% |       6 | `Compilation::emit_lir`       | `<unknown>` |
| 46.2% |       6 | `Compilation::build_hir`      | `<unknown>` |
|  7.7% |       1 | `Compilation::emit_code_body` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      13 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      13 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 85.7% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 83.3% |       5 | `LinearScan::do_linear_scan` | `<unknown>` |
| 16.7% |       1 | `BlockList::iterate_forward` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 66.7% |       4 | `IR::IR`                                     | `<unknown>` |
| 16.7% |       1 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
| 16.7% |       1 | `IR::eliminate_null_checks`                  | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 33.3% |       2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
| 16.7% |       1 | `RegionNode::is_CFG`                          | `<unknown>` |
| 16.7% |       1 | `PhaseIdealLoop::compute_lca_of_uses`         | `<unknown>` |
| 16.7% |       1 | `CallLeafNode::Opcode`                        | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 50.0% |       3 | `PhaseLive::add_liveout` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 60.0% |       3 | `PhaseIterGVN::transform_old` | `<unknown>` |
| 20.0% |       1 | `BoolNode::Ideal`             | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% |     258 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.8% |     130 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.0% |      93 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.9% |      87 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |      78 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      77 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% |      75 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |      73 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |      72 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |      65 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                         |
| 1.4% |      65 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.3% |      62 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.2% |      56 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.2% |      56 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.2% |      56 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |      47 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |      47 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                      |
| 1.0% |      46 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |      45 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.8% |      38 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |

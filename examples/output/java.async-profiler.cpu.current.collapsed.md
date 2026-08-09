# Sampling profile

Collected 4,711 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 60.1% |   2,829 |
| Native           | 23.3% |   1,099 |
| Standard library | 14.5% |     685 |
| Compiler         |  1.1% |      52 |
| JIT              |  1.0% |      46 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function              | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 20.7% |     974 | `accumulate`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.8% |     887 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 11.8% |     556 | `__psynch_cvwait`     | `<unknown>`                                                |
| 10.6% |     499 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.5% |     354 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.2% |     198 | `forward_copy_longs`  | `<unknown>`                                                |
|  3.7% |     172 | `elementData`         | `java.util.ArrayList`                                      |
|  2.8% |     133 | `computeIfAbsent`     | `java.util.HashMap`                                        |
|  2.3% |     106 | `doubleValue`         | `java.lang.Double`                                         |
|  2.1% |     101 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.3% |      61 | `add`                 | `java.util.ArrayList`                                      |
|  1.3% |      59 | `__psynch_cvsignal`   | `<unknown>`                                                |
|  1.0% |      46 | `zero_blocks`         | `<unknown>`                                                |
|  0.7% |      34 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`                        |
|  0.7% |      33 | `hash`                | `java.util.HashMap`                                        |
|  0.6% |      27 | `checkIndex`          | `java.util.Objects`                                        |
|  0.5% |      23 | `_platform_bzero`     | `<unknown>`                                                |
|  0.5% |      23 | `semaphore_wait_trap` | `<unknown>`                                                |
|  0.5% |      23 | `__psynch_mutexwait`  | `<unknown>`                                                |
|  0.5% |      22 | `grow`                | `java.util.ArrayList`                                      |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 20.7% |     974 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.8% |     887 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 10.6% |     499 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.5% |     354 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.1% |     101 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       3 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       2 | `lambda$generateData$3`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       2 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       2 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Native

|     % | Samples | Function                                                                                                   | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| 11.8% |     556 | `__psynch_cvwait`                                                                                          | `<unknown>` |
|  4.2% |     198 | `forward_copy_longs`                                                                                       | `<unknown>` |
|  1.3% |      59 | `__psynch_cvsignal`                                                                                        | `<unknown>` |
|  0.5% |      23 | `_platform_bzero`                                                                                          | `<unknown>` |
|  0.5% |      23 | `semaphore_wait_trap`                                                                                      | `<unknown>` |
|  0.5% |      23 | `__psynch_mutexwait`                                                                                       | `<unknown>` |
|  0.4% |      19 | `pthread_jit_write_protect_np`                                                                             | `<unknown>` |
|  0.3% |      13 | `arrayof_jint_disjoint_arraycopy`                                                                          | `<unknown>` |
|  0.2% |      11 | `G1FullGCMarker::mark_object`                                                                              | `<unknown>` |
|  0.2% |      10 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                          | `<unknown>` |
|  0.2% |       8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`                          | `<unknown>` |
|  0.1% |       7 | `_platform_memset`                                                                                         | `<unknown>` |
|  0.1% |       6 | `G1ParScanThreadState::do_partial_array`                                                                   | `<unknown>` |
|  0.1% |       5 | `HeapRegionManager::par_iterate`                                                                           | `<unknown>` |
|  0.1% |       5 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`       | `<unknown>` |
|  0.1% |       5 | `G1FullGCMarker::follow_object`                                                                            | `<unknown>` |
|  0.1% |       4 | `arrayof_oop_disjoint_arraycopy`                                                                           | `<unknown>` |
|  0.1% |       4 | `tlv_get_addr`                                                                                             | `<unknown>` |
|  0.1% |       4 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |
|  0.1% |       4 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                   | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
|  3.7% |     172 | `elementData`      | `java.util.ArrayList`                         |
|  2.8% |     133 | `computeIfAbsent`  | `java.util.HashMap`                           |
|  2.3% |     106 | `doubleValue`      | `java.lang.Double`                            |
|  1.3% |      61 | `add`              | `java.util.ArrayList`                         |
|  0.7% |      34 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
|  0.7% |      33 | `hash`             | `java.util.HashMap`                           |
|  0.6% |      27 | `checkIndex`       | `java.util.Objects`                           |
|  0.5% |      22 | `grow`             | `java.util.ArrayList`                         |
|  0.2% |      10 | `merge`            | `java.util.HashMap`                           |
|  0.1% |       7 | `putVal`           | `java.util.HashMap`                           |
|  0.1% |       5 | `runWorker`        | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       5 | `copyOf`           | `java.util.Arrays`                            |
|  0.1% |       5 | `addAll`           | `java.util.ArrayList`                         |
|  0.1% |       4 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       3 | `exec`             | `java.util.concurrent.RecursiveTask`          |
|  0.1% |       3 | `scan`             | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       3 | `get`              | `java.util.ArrayList`                         |
|  0.1% |       3 | `resize`           | `java.util.HashMap`                           |
| <0.1% |       2 | `forEach`          | `java.util.HashMap`                           |

##### Compiler

|     % | Samples | Function                                    | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| <0.1% |       2 | `PhaseChaitin::Split`                       | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| <0.1% |       2 | `PhaseCCP::transform`                       | `<unknown>` |
| <0.1% |       1 | `Matcher::ReduceInst`                       | `<unknown>` |
| <0.1% |       1 | `Matcher::match_tree`                       | `<unknown>` |
| <0.1% |       1 | `ciBytecodeStream::reset_to_bci`            | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| <0.1% |       1 | `IdealKit::make_leaf_call`                  | `<unknown>` |
| <0.1% |       1 | `TypeKlassPtr::exact_klass_helper`          | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::schedule_early`                  | `<unknown>` |
| <0.1% |       1 | `AbstractAssembler::bind`                   | `<unknown>` |
| <0.1% |       1 | `LinearScan::build_intervals`               | `<unknown>` |
| <0.1% |       1 | `CProjNode::is_CFG`                         | `<unknown>` |
| <0.1% |       1 | `AddPNode::Opcode`                          | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::select`                          | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::remove_empty_blocks`             | `<unknown>` |
| <0.1% |       1 | `Node_Array::grow`                          | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| <0.1% |       1 | `Node_Backward_Iterator::next`              | `<unknown>` |
| <0.1% |       1 | `Matcher::ReduceOper`                       | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     974 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     887 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 96.6% |     537 | `Parker::park`          | `<unknown>` |
|  3.4% |      19 | `PlatformMonitor::wait` | `<unknown>` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     499 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     354 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 77.8% |     154 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 22.2% |      44 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     172 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     133 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 84.0% |      89 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.0% |      17 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     101 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 93.4% |      57 | `add`             | `java.util.ArrayList`                                      |
|  6.6% |       4 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      59 | `Unsafe_Unpark` | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 63.0% |      29 | `merge`               | `java.util.HashMap`                                        |
| 19.6% |       9 | `grow`                | `java.util.ArrayList`                                      |
| 10.9% |       5 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.2% |       1 | `<init>`              | `java.util.ArrayList`                                      |
|  2.2% |       1 | `resize`              | `java.util.HashMap`                                        |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |      34 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `hash` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 93.9% |      31 | `computeIfAbsent` | `java.util.HashMap` |
|  3.0% |       1 | `putMapEntries`   | `java.util.HashMap` |
|  3.0% |       1 | `merge`           | `java.util.HashMap` |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      27 | `get`  | `java.util.ArrayList` |

##### `_platform_bzero` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      23 | `MemAllocator::allocate` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 87.0% |      20 | `WorkerThread::run`              | `<unknown>` |
| 13.0% |       3 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      23 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller | Location              |
| ----: | ------: | ------ | --------------------- |
| 90.9% |      20 | `grow` | `java.util.ArrayList` |
|  9.1% |       2 | `add`  | `java.util.ArrayList` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 31.6% |       6 | `Unsafe_Park`              | `<unknown>` |
| 26.3% |       5 | `Unsafe_Unpark`            | `<unknown>` |
| 15.8% |       3 | `OptoRuntime::new_array_C` | `<unknown>` |
| 10.5% |       2 | `_new_array_Java`          | `<unknown>` |
| 10.5% |       2 | `JVM_IHashCode`            | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 38.5% |       5 | `grow`   | `java.util.ArrayList` |
| 30.8% |       4 | `merge`  | `java.util.HashMap`   |
| 30.8% |       4 | `copyOf` | `java.util.Arrays`    |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|      % | Samples | Caller                                                          | Location    |
| -----: | ------: | --------------------------------------------------------------- | ----------- |
| 100.0% |      11 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 80.0% |       8 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 10.0% |       1 | `G1ScanHRForRegionClosure::scan_memregion`      | `<unknown>` |
| 10.0% |       1 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      10 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`<unknown>`)

|      % | Samples | Caller                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------- | ----------- |
| 100.0% |       8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 71.4% |       5 | `MemAllocator::allocate`                      | `<unknown>` |
| 28.6% |       2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |       7 | `putMapEntries` | `java.util.HashMap` |

##### `G1ParScanThreadState::do_partial_array` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 83.3% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 16.7% |       1 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |

##### `HeapRegionManager::par_iterate` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       5 | `G1PrepareEvacuationTask::work` | `<unknown>` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       5 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |

##### `G1FullGCMarker::follow_object` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 60.0% |       3 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |
| 40.0% |       2 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |       5 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller    | Location              |
| ----: | ------: | --------- | --------------------- |
| 60.0% |       3 | `toArray` | `java.util.ArrayList` |
| 40.0% |       2 | `grow`    | `java.util.ArrayList` |

##### `addAll` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |       5 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       4 | `addAll` | `java.util.ArrayList` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 25.0% |       1 | `ThreadLocalAllocBuffer::retire_before_allocation` | `<unknown>` |
| 25.0% |       1 | `TypeInstPtr::xmeet_helper`                        | `<unknown>` |
| 25.0% |       1 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |
| 25.0% |       1 | `BlockListBuilder::BlockListBuilder`               | `<unknown>` |

##### `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       4 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 50.0% |       2 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 25.0% |       1 | `G1ParScanThreadState::do_partial_array`        | `<unknown>` |
| 25.0% |       1 | `G1ParScanThreadState::start_partial_objarray`  | `<unknown>` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       4 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       3 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       3 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       3 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 66.7% |       2 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.3% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `resize` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 66.7% |       2 | `putVal`          | `java.util.HashMap` |
| 33.3% |       1 | `computeIfAbsent` | `java.util.HashMap` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       2 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseCCP::transform` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `PhaseCCP::do_transform` | `<unknown>` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller          | Location                                                  |
| -----: | ------: | --------------- | --------------------------------------------------------- |
| 100.0% |       1 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `Matcher::ReduceInst` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `Matcher::ReduceInst_Interior` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `Matcher::xform` | `<unknown>` |

##### `ciBytecodeStream::reset_to_bci` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `ciMethod::get_method_at_bci` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `IdealKit::make_leaf_call` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `G1BarrierSetC2::pre_barrier` | `<unknown>` |

##### `TypeKlassPtr::exact_klass_helper` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       1 | `SubTypeCheckNode::sub` | `<unknown>` |

##### `PhaseCFG::schedule_early` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `AbstractAssembler::bind` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `CounterOverflowStub::emit_code` | `<unknown>` |

##### `LinearScan::build_intervals` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `CProjNode::is_CFG` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `AddPNode::Opcode` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `IdealLoopTree::reassociate` | `<unknown>` |

##### `PhaseCFG::select` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::schedule_local` | `<unknown>` |

##### `PhaseCFG::remove_empty_blocks` (`<unknown>`)

|      % | Samples | Caller              | Location    |
| -----: | ------: | ------------------- | ----------- |
| 100.0% |       1 | `Compile::Code_Gen` | `<unknown>` |

##### `Node_Array::grow` (`<unknown>`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::schedule_late` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `Matcher::ReduceOper` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `Matcher::ReduceInst_Interior` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 94.4% |   4,448 | `run`                    | `java.util.concurrent.ForkJoinWorkerThread`                |
| 94.4% |   4,447 | `runWorker`              | `java.util.concurrent.ForkJoinPool`                        |
| 90.0% |   4,241 | `scan`                   | `java.util.concurrent.ForkJoinPool`                        |
| 89.9% |   4,236 | `topLevelExec`           | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 89.9% |   4,235 | `doExec`                 | `java.util.concurrent.ForkJoinTask`                        |
| 89.3% |   4,205 | `exec`                   | `java.util.concurrent.RecursiveTask`                       |
| 89.2% |   4,204 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 86.1% |   4,054 | `awaitDone`              | `java.util.concurrent.ForkJoinTask`                        |
| 86.1% |   4,054 | `join`                   | `java.util.concurrent.ForkJoinTask`                        |
| 82.3% |   3,877 | `tryRemoveAndExec`       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 37.5% |   1,768 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 35.0% |   1,650 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 35.0% |   1,650 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 28.2% |   1,327 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.6% |   1,063 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 22.2% |   1,045 | `helpJoin`               | `java.util.concurrent.ForkJoinPool`                        |
| 21.7% |   1,024 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                        |
| 19.2% |     906 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 15.9% |     748 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 15.9% |     748 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 89.2% |   4,204 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 37.5% |   1,768 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 35.0% |   1,650 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.0% |   1,650 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 28.2% |   1,327 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.6% |   1,063 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 19.2% |     906 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 15.9% |     748 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.9% |     748 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.7% |     739 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.7% |     458 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.7% |     458 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |
|  9.4% |     441 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.8% |     318 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.7% |     317 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.4% |     300 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.4% |     300 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88` |
|  4.7% |     221 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.7% |     221 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218` |
|  0.8% |      39 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Native

|     % | Samples | Function                           | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 11.8% |     556 | `__psynch_cvwait`                  | `<unknown>` |
| 11.7% |     551 | `Unsafe_Park`                      | `<unknown>` |
| 11.5% |     542 | `Parker::park`                     | `<unknown>` |
|  4.6% |     215 | `_pthread_start`                   | `<unknown>` |
|  4.6% |     215 | `thread_start`                     | `<unknown>` |
|  4.5% |     214 | `Thread::call_run`                 | `<unknown>` |
|  4.5% |     214 | `thread_native_entry`              | `<unknown>` |
|  4.2% |     198 | `forward_copy_longs`               | `<unknown>` |
|  3.5% |     167 | `arrayof_jint_disjoint_arraycopy`  | `<unknown>` |
|  2.4% |     113 | `WorkerThread::run`                | `<unknown>` |
|  2.0% |      93 | `JavaThread::thread_main_inner`    | `<unknown>` |
|  1.4% |      66 | `Unsafe_Unpark`                    | `<unknown>` |
|  1.3% |      59 | `__psynch_cvsignal`                | `<unknown>` |
|  1.1% |      53 | `_new_array_Java`                  | `<unknown>` |
|  1.1% |      51 | `OptoRuntime::new_array_C`         | `<unknown>` |
|  1.0% |      49 | `arrayof_oop_disjoint_arraycopy`   | `<unknown>` |
|  1.0% |      45 | `MemAllocator::allocate`           | `<unknown>` |
|  0.9% |      44 | `CollectedHeap::array_allocate`    | `<unknown>` |
|  0.9% |      43 | `InstanceKlass::allocate_objArray` | `<unknown>` |
|  0.8% |      40 | `G1EvacuateRegionsBaseTask::work`  | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 94.4% |   4,448 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 94.4% |   4,447 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 90.0% |   4,241 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 89.9% |   4,236 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 89.9% |   4,235 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 89.3% |   4,205 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 86.1% |   4,054 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 86.1% |   4,054 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 82.3% |   3,877 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 22.2% |   1,045 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| 21.7% |   1,024 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 11.8% |     554 | `park`             | `jdk.internal.misc.Unsafe`                          |
| 11.7% |     550 | `park`             | `java.util.concurrent.locks.LockSupport`            |
|  9.7% |     458 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  6.4% |     302 | `forEach`          | `java.util.HashMap`                                 |
|  6.4% |     300 | `merge`            | `java.util.HashMap`                                 |
|  4.3% |     202 | `get`              | `java.util.ArrayList`                               |
|  4.3% |     201 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                 |
|  3.7% |     172 | `elementData`      | `java.util.ArrayList`                               |
|  3.6% |     170 | `computeIfAbsent`  | `java.util.HashMap`                                 |

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 2.0% |      92 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 1.6% |      74 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 1.3% |      60 | `Compile::Compile`                          | `<unknown>` |
| 1.3% |      60 | `C2Compiler::compile_method`                | `<unknown>` |
| 0.6% |      28 | `Compile::Code_Gen`                         | `<unknown>` |
| 0.4% |      20 | `Compile::Optimize`                         | `<unknown>` |
| 0.4% |      18 | `CompileQueue::get`                         | `<unknown>` |
| 0.3% |      13 | `Compilation::compile_java_method`          | `<unknown>` |
| 0.3% |      13 | `Compilation::compile_method`               | `<unknown>` |
| 0.3% |      13 | `Compilation::Compilation`                  | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
| 0.2% |      11 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
| 0.2% |      10 | `Compilation::build_hir`                    | `<unknown>` |
| 0.2% |       9 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
| 0.2% |       9 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
| 0.2% |       9 | `Matcher::match`                            | `<unknown>` |
| 0.2% |       8 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| 0.2% |       8 | `Matcher::match_tree`                       | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee           | Location                            |
| -----: | ------: | ---------------- | ----------------------------------- |
| 100.0% |   4,447 | `runWorker`      | `java.util.concurrent.ForkJoinPool` |
|  <0.1% |       1 | `registerWorker` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                            |
| ----: | ------: | ----------- | ----------------------------------- |
| 95.4% |   4,241 | `scan`      | `java.util.concurrent.ForkJoinPool` |
|  4.5% |     201 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee         | Location                                      |
| ----: | ------: | -------------- | --------------------------------------------- |
| 99.9% |   4,236 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       2 | `signalWork`   | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee    | Location                                      |
| -----: | ------: | --------- | --------------------------------------------- |
| 100.0% |   4,235 | `doExec`  | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       1 | `tryPoll` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee    | Location                                            |
| ----: | ------: | --------- | --------------------------------------------------- |
| 99.3% |   4,205 | `exec`    | `java.util.concurrent.RecursiveTask`                |
| 10.8% |     458 | `exec`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.2% |      51 | `setDone` | `java.util.concurrent.ForkJoinTask`                 |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |   4,204 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 96.4% |   4,054 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 42.1% |   1,768 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 39.2% |   1,650 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.8% |     748 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.5% |     317 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                     | Location                                      |
| ----: | ------: | -------------------------- | --------------------------------------------- |
| 95.6% |   3,877 | `tryRemoveAndExec`         | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 25.8% |   1,045 | `helpJoin`                 | `java.util.concurrent.ForkJoinPool`           |
|  8.8% |     355 | `park`                     | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `resolve_opt_virtual_call` | `<unknown>`                                   |
| <0.1% |       1 | `setCurrentBlocker`        | `java.util.concurrent.locks.LockSupport`      |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee         | Location                             |
| -----: | ------: | -------------- | ------------------------------------ |
| 100.0% |   4,054 | `awaitDone`    | `java.util.concurrent.ForkJoinTask`  |
|  <0.1% |       1 | `getRawResult` | `java.util.concurrent.RecursiveTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   3,877 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   1,768 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.1% |   1,327 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.9% |     441 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                                           | Location                                                  |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------- |
| 64.4% |   1,063 | `accumulate`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.3% |      87 | `get`                                            | `java.util.ArrayList`                                     |
|  0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                                               |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |   1,650 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |   1,650 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 68.3% |     906 | `distance`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.3% |      57 | `get`                            | `java.util.ArrayList`                                      |
|  0.4% |       5 | `zero_blocks`                    | `<unknown>`                                                |
|  0.2% |       3 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |
|  0.2% |       2 | `_new_array_Java`                | `<unknown>`                                                |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee        | Location           |
| ---: | ------: | ------------- | ------------------ |
| 8.4% |      89 | `doubleValue` | `java.lang.Double` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 96.7% |   1,011 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
|  1.4% |      15 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee         | Location                            |
| ----: | ------: | -------------- | ----------------------------------- |
| 99.9% |   1,023 | `doExec`       | `java.util.concurrent.ForkJoinTask` |
|  0.1% |       1 | `ic_miss_stub` | `<unknown>`                         |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee                                           | Location           |
| ---: | ------: | ------------------------------------------------ | ------------------ |
| 1.9% |      17 | `doubleValue`                                    | `java.lang.Double` |
| 0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`        |
| 0.1% |       1 | `SafepointBlob`                                  | `<unknown>`        |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 98.8% |     739 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.1% |       8 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     748 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     748 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     739 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `park` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 99.5% |     551 | `Unsafe_Park`                         | `<unknown>` |
|  0.2% |       1 | `os::current_thread_enable_wx`        | `<unknown>` |
|  0.2% |       1 | `java_lang_Thread::set_thread_status` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 98.4% |     542 | `Parker::park`                                                                                                                                             | `<unknown>` |
|  1.1% |       6 | `pthread_jit_write_protect_np`                                                                                                                             | `<unknown>` |
|  0.4% |       2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | `<unknown>` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Callee | Location                   |
| ----: | ------: | ------ | -------------------------- |
| 99.8% |     549 | `park` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 99.1% |     537 | `__psynch_cvwait`             | `<unknown>` |
|  0.4% |       2 | `SafepointMechanism::process` | `<unknown>` |
|  0.2% |       1 | `pthread_testcancel`          | `<unknown>` |
|  0.2% |       1 | `__psynch_cvclrprepost`       | `<unknown>` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------- |
| 99.6% |     456 | `invoke` | `java.util.concurrent.ForkJoinTask`                        |
|  0.2% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.2% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     458 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |     458 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                     | Location              |
| ----: | ------: | -------------------------- | --------------------- |
| 38.5% |     170 | `computeIfAbsent`          | `java.util.HashMap`   |
| 25.2% |     111 | `add`                      | `java.util.ArrayList` |
| 13.2% |      58 | `get`                      | `java.util.ArrayList` |
|  0.2% |       1 | `resolve_opt_virtual_call` | `<unknown>`           |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 95.0% |     302 | `forEach`            | `java.util.HashMap`                |
|  4.4% |      14 | `<init>`             | `java.util.HashMap`                |
|  0.6% |       2 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 99.7% |     316 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 99.7% |     316 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 99.3% |     300 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |     300 | `merge` | `java.util.HashMap` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401186d88`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     300 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 73.7% |     221 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218` |
| 13.0% |      39 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  9.7% |      29 | `zero_blocks`                     | `<unknown>`                                                            |
|  0.3% |       1 | `hash`                            | `java.util.HashMap`                                                    |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 70.6% |     156 | `addAll` | `java.util.ArrayList` |
| 29.0% |      64 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187218`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     221 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.5% |     214 | `thread_native_entry` | `<unknown>` |
|  0.5% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     215 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 52.8% |     113 | `WorkerThread::run`             | `<unknown>` |
| 43.5% |      93 | `JavaThread::thread_main_inner` | `<unknown>` |
|  2.8% |       6 | `VMThread::run`                 | `<unknown>` |
|  0.5% |       1 | `WatcherThread::run`            | `<unknown>` |
|  0.5% |       1 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     214 | `Thread::call_run` | `<unknown>` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Callee        | Location              |
| ----: | ------: | ------------- | --------------------- |
| 85.1% |     172 | `elementData` | `java.util.ArrayList` |
| 13.4% |      27 | `checkIndex`  | `java.util.Objects`   |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                                 |
| ----: | ------: | ----------- | ---------------------------------------- |
| 97.0% |     195 | `park`      | `java.util.concurrent.locks.LockSupport` |
|  2.5% |       5 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |

##### `computeIfAbsent` (`java.util.HashMap`)

|     % | Samples | Callee    | Location                                                                              |
| ----: | ------: | --------- | ------------------------------------------------------------------------------------- |
| 18.2% |      31 | `hash`    | `java.util.HashMap`                                                                   |
|  1.8% |       3 | `resize`  | `java.util.HashMap`                                                                   |
|  1.2% |       2 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38` |
|  0.6% |       1 | `newNode` | `java.util.HashMap`                                                                   |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 92.2% |     154 | `forward_copy_longs` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 35.4% |      40 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| 29.2% |      33 | `G1FullGCMarkTask::work`          | `<unknown>` |
| 17.7% |      20 | `semaphore_wait_trap`             | `<unknown>` |
|  7.1% |       8 | `G1FullGCResetMetadataTask::work` | `<unknown>` |
|  5.3% |       6 | `G1PrepareEvacuationTask::work`   | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 98.9% |      92 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
|  1.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 80.4% |      74 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 19.6% |      18 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 81.1% |      60 | `C2Compiler::compile_method`    | `<unknown>` |
| 17.6% |      13 | `Compiler::compile_method`      | `<unknown>` |
|  1.4% |       1 | `ciEnv::get_method_from_handle` | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 89.4% |      59 | `__psynch_cvsignal`            | `<unknown>` |
|  7.6% |       5 | `pthread_jit_write_protect_np` | `<unknown>` |
|  3.0% |       2 | `Parker::unpark`               | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 46.7% |      28 | `Compile::Code_Gen`                      | `<unknown>` |
| 33.3% |      20 | `Compile::Optimize`                      | `<unknown>` |
| 15.0% |       9 | `ParseGenerator::generate`               | `<unknown>` |
|  1.7% |       1 | `Compile::Init`                          | `<unknown>` |
|  1.7% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      60 | `Compile::Compile` | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 96.2% |      51 | `OptoRuntime::new_array_C`     | `<unknown>` |
|  3.8% |       2 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 84.3% |      43 | `InstanceKlass::allocate_objArray`     | `<unknown>` |
|  5.9% |       3 | `pthread_jit_write_protect_np`         | `<unknown>` |
|  3.9% |       2 | `CollectedHeap::array_allocate`        | `<unknown>` |
|  3.9% |       2 | `Klass::check_array_allocation_length` | `<unknown>` |
|  2.0% |       1 | `ObjArrayKlass::array_klass`           | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 89.8% |      44 | `forward_copy_longs`       | `<unknown>` |
|  2.0% |       1 | `G1BarrierSet::invalidate` | `<unknown>` |

##### `MemAllocator::allocate` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 51.1% |      23 | `_platform_bzero`                             | `<unknown>` |
| 15.6% |       7 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 11.1% |       5 | `G1CollectedHeap::mem_allocate`               | `<unknown>` |
| 11.1% |       5 | `_platform_memset`                            | `<unknown>` |
|  4.4% |       2 | `ObjArrayAllocator::initialize`               | `<unknown>` |

##### `CollectedHeap::array_allocate` (`<unknown>`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      44 | `MemAllocator::allocate` | `<unknown>` |

##### `InstanceKlass::allocate_objArray` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 95.3% |      41 | `CollectedHeap::array_allocate` | `<unknown>` |
|  2.3% |       1 | `MemAllocator::allocate`        | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 70.0% |      28 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |
| 30.0% |      12 | `G1EvacuateRegionsTask::scan_roots`            | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                        |
| ----: | ------: | --------------------------- | ------------------------------- |
| 97.4% |      38 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |
|  2.6% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 39.3% |      11 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 32.1% |       9 | `Matcher::match`                  | `<unknown>` |
| 17.9% |       5 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  7.1% |       2 | `PhaseOutput::Output`             | `<unknown>` |
|  3.6% |       1 | `PhaseCFG::remove_empty_blocks`   | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 30.0% |       6 | `Compile::optimize_loops`              | `<unknown>` |
| 30.0% |       6 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 15.0% |       3 | `PhaseCCP::do_transform`               | `<unknown>` |
| 10.0% |       2 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |
|  5.0% |       1 | `PhaseIterGVN::optimize`               | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 94.4% |      17 | `Monitor::wait`                       | `<unknown>` |
|  5.6% |       1 | `CompileTask::select_for_compilation` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 76.9% |      10 | `Compilation::build_hir`      | `<unknown>` |
| 15.4% |       2 | `Compilation::emit_lir`       | `<unknown>` |
|  7.7% |       1 | `Compilation::emit_code_body` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      13 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      13 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 25.0% |       3 | `PhaseIdealLoop::split_if_with_blocks`  | `<unknown>` |
| 16.7% |       2 | `PhaseIdealLoop::build_loop_late`       | `<unknown>` |
|  8.3% |       1 | `IdealLoopTree::counted_loop`           | `<unknown>` |
|  8.3% |       1 | `CProjNode::is_CFG`                     | `<unknown>` |
|  8.3% |       1 | `IdealLoopTree::reassociate_invariants` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|      % | Samples | Callee                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 18.2% |       2 | `PhaseChaitin::Split`                      | `<unknown>` |
| 18.2% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 18.2% |       2 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
|  9.1% |       1 | `PhaseChaitin::Simplify`                   | `<unknown>` |
|  9.1% |       1 | `PhiNode::out_RegMask`                     | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 90.0% |       9 | `IR::IR`                 | `<unknown>` |
| 10.0% |       1 | `IR::compute_use_counts` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 88.9% |       8 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| 11.1% |       1 | `GraphBuilder::setup_osr_entry_block`       | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       9 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                 | Location    |
| ----: | ------: | ---------------------- | ----------- |
| 88.9% |       8 | `Matcher::xform`       | `<unknown>` |
| 11.1% |       1 | `Matcher::find_shared` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 62.5% |       5 | `GraphBuilder::invoke`        | `<unknown>` |
| 12.5% |       1 | `GraphBuilder::load_constant` | `<unknown>` |
| 12.5% |       1 | `GraphBuilder::access_field`  | `<unknown>` |
| 12.5% |       1 | `GraphBuilder::arithmetic_op` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.0% |       4 | `Matcher::Label_Root` | `<unknown>` |
| 37.5% |       3 | `Matcher::ReduceInst` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.9% |     186 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.1% |     144 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.5% |     118 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.4% |     111 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.2% |     102 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.1% |      98 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.0% |      94 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.9% |      88 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% |      83 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |      82 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |
| 1.5% |      69 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      66 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |      63 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.3% |      60 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |      55 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% |      51 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |      48 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      46 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      45 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.9% |      44 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

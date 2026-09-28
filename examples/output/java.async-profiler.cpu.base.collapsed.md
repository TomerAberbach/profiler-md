# Sampling profile

Collected 4,682 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 57.4% |   2,688 |
| Native           | 26.0% |   1,216 |
| Standard library | 14.2% |     665 |
| JIT              |  1.4% |      64 |
| Compiler         |  1.0% |      49 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                          | Location                                                   |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------- |
| 18.8% |     881 | `distance`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 18.2% |     853 | `accumulate`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 13.8% |     648 | `__psynch_cvwait`                 | `<unknown>`                                                |
|  9.8% |     460 | `vectorSum`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.6% |     357 | `findNearestCentroid`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  5.0% |     236 | `forward_copy_longs`              | `<unknown>`                                                |
|  3.1% |     143 | `elementData`                     | `java.util.ArrayList`                                      |
|  2.9% |     134 | `computeIfAbsent`                 | `java.util.HashMap`                                        |
|  2.8% |     132 | `doubleValue`                     | `java.lang.Double`                                         |
|  2.4% |     112 | `collectClusters`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.3% |      60 | `zero_blocks`                     | `<unknown>`                                                |
|  1.3% |      59 | `add`                             | `java.util.ArrayList`                                      |
|  1.0% |      48 | `__psynch_cvsignal`               | `<unknown>`                                                |
|  0.9% |      42 | `checkIndex`                      | `java.util.Objects`                                        |
|  0.6% |      26 | `G1FullGCMarker::mark_object`     | `<unknown>`                                                |
|  0.5% |      25 | `grow`                            | `java.util.ArrayList`                                      |
|  0.5% |      24 | `helpJoin`                        | `java.util.concurrent.ForkJoinPool`                        |
|  0.4% |      20 | `_platform_bzero`                 | `<unknown>`                                                |
|  0.4% |      18 | `hash`                            | `java.util.HashMap`                                        |
|  0.3% |      15 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                | Location                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 18.8% |     881 | `distance`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 18.2% |     853 | `accumulate`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  9.8% |     460 | `vectorSum`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  7.6% |     357 | `findNearestCentroid`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.4% |     112 | `collectClusters`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       5 | `add`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  0.1% |       3 | `accept`                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  0.1% |       3 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  0.1% |       3 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       2 | `compute`               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| <0.1% |       2 | `lambda$run$0`          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       2 | `combineResults`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `computeDirectly`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `merge`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |

##### Native

|     % | Samples | Function                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------- | ----------- |
| 13.8% |     648 | `__psynch_cvwait`                                                                 | `<unknown>` |
|  5.0% |     236 | `forward_copy_longs`                                                              | `<unknown>` |
|  1.0% |      48 | `__psynch_cvsignal`                                                               | `<unknown>` |
|  0.6% |      26 | `G1FullGCMarker::mark_object`                                                     | `<unknown>` |
|  0.4% |      20 | `_platform_bzero`                                                                 | `<unknown>` |
|  0.3% |      15 | `arrayof_jint_disjoint_arraycopy`                                                 | `<unknown>` |
|  0.3% |      12 | `semaphore_wait_trap`                                                             | `<unknown>` |
|  0.3% |      12 | `pthread_jit_write_protect_np`                                                    | `<unknown>` |
|  0.3% |      12 | `__psynch_mutexwait`                                                              | `<unknown>` |
|  0.2% |      10 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `<unknown>` |
|  0.2% |       9 | `G1RegionMarkStatsCache::add_live_words`                                          | `<unknown>` |
|  0.2% |       8 | `inflate_fast`                                                                    | `<unknown>` |
|  0.2% |       8 | `_platform_memset`                                                                | `<unknown>` |
|  0.2% |       8 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                          | `<unknown>` |
|  0.2% |       8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `<unknown>` |
|  0.1% |       6 | `G1ParScanThreadState::do_partial_array`                                          | `<unknown>` |
|  0.1% |       6 | `_sigtramp`                                                                       | `<unknown>` |
|  0.1% |       5 | `G1ParScanThreadState::trim_queue_to_threshold`                                   | `<unknown>` |
|  0.1% |       5 | `G1FullGCMarker::follow_object`                                                   | `<unknown>` |
|  0.1% |       5 | `tlv_get_addr`                                                                    | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
|  3.1% |     143 | `elementData`      | `java.util.ArrayList`                         |
|  2.9% |     134 | `computeIfAbsent`  | `java.util.HashMap`                           |
|  2.8% |     132 | `doubleValue`      | `java.lang.Double`                            |
|  1.3% |      59 | `add`              | `java.util.ArrayList`                         |
|  0.9% |      42 | `checkIndex`       | `java.util.Objects`                           |
|  0.5% |      25 | `grow`             | `java.util.ArrayList`                         |
|  0.5% |      24 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
|  0.4% |      18 | `hash`             | `java.util.HashMap`                           |
|  0.2% |      10 | `merge`            | `java.util.HashMap`                           |
|  0.2% |       8 | `copyOf`           | `java.util.Arrays`                            |
|  0.2% |       8 | `newLength`        | `jdk.internal.util.ArraysSupport`             |
|  0.1% |       7 | `scan`             | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       6 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `forEach`          | `java.util.HashMap`                           |
|  0.1% |       3 | `signalWaiters`    | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       3 | `getAndSetAccess`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       2 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       2 | `doExec`           | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       2 | `runWorker`        | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       2 | `unpark`           | `java.util.concurrent.locks.LockSupport`      |

##### JIT

|     % | Samples | Function                | Location    |
| ----: | ------: | ----------------------- | ----------- |
|  1.3% |      60 | `zero_blocks`           | `<unknown>` |
| <0.1% |       2 | `vtable stub`           | `<unknown>` |
| <0.1% |       1 | `itable stub`           | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xb)` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                       | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
|  0.1% |       5 | `PhaseChaitin::gather_lrg_masks`               | `<unknown>` |
| <0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`    | `<unknown>` |
| <0.1% |       2 | `PhaseIdealLoop::Dominators`                   | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::build_ifg_physical`             | `<unknown>` |
| <0.1% |       2 | `PhaseAggressiveCoalesce::insert_copies`       | `<unknown>` |
| <0.1% |       1 | `PhaseIFG::effective_degree`                   | `<unknown>` |
| <0.1% |       1 | `lShiftI_reg_immNode::emit`                    | `<unknown>` |
| <0.1% |       1 | `Matcher::is_vshift_con_pattern`               | `<unknown>` |
| <0.1% |       1 | `Matcher::xform`                               | `<unknown>` |
| <0.1% |       1 | `ciInstanceKlass::get_field_by_offset`         | `<unknown>` |
| <0.1% |       1 | `Compile::disconnect_useless_nodes`            | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |
| <0.1% |       1 | `TypePtr::singleton`                           | `<unknown>` |
| <0.1% |       1 | `ciMethodData::load_data`                      | `<unknown>` |
| <0.1% |       1 | `Type::hashcons`                               | `<unknown>` |
| <0.1% |       1 | `GraphBuilder::state_at_entry`                 | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::elide_copy`                     | `<unknown>` |
| <0.1% |       1 | `ciEnv::get_method_from_handle`                | `<unknown>` |
| <0.1% |       1 | `PhiNode::wait_for_region_igvn`                | `<unknown>` |
| <0.1% |       1 | `PhiNode::Ideal`                               | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     881 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     853 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 97.2% |     630 | `Parker::park`          | `<unknown>` |
|  2.8% |      18 | `PlatformMonitor::wait` | `<unknown>` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     460 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     357 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 82.2% |     194 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 17.8% |      42 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     143 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     134 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 85.6% |     113 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 14.4% |      19 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     112 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 60.0% |      36 | `merge`               | `java.util.HashMap`                                        |
| 30.0% |      18 | `grow`                | `java.util.ArrayList`                                      |
|  8.3% |       5 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% |       1 | `copyOf`              | `java.util.Arrays`                                         |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 98.3% |      58 | `add`             | `java.util.ArrayList`                                      |
|  1.7% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      48 | `Unsafe_Unpark` | `<unknown>` |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      42 | `get`  | `java.util.ArrayList` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|     % | Samples | Caller                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 73.1% |      19 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
| 19.2% |       5 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |
|  3.8% |       1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  3.8% |       1 | `G1FullGCMarker::complete_marking`                                                                   | `<unknown>` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller | Location              |
| ----: | ------: | ------ | --------------------- |
| 72.0% |      18 | `grow` | `java.util.ArrayList` |
| 28.0% |       7 | `add`  | `java.util.ArrayList` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |      24 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `_platform_bzero` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      20 | `MemAllocator::allocate` | `<unknown>` |

##### `hash` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 94.4% |      17 | `computeIfAbsent` | `java.util.HashMap` |
|  5.6% |       1 | `merge`           | `java.util.HashMap` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 53.3% |       8 | `copyOf` | `java.util.Arrays`    |
| 33.3% |       5 | `grow`   | `java.util.ArrayList` |
| 13.3% |       2 | `merge`  | `java.util.HashMap`   |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 75.0% |       9 | `WorkerThread::run`              | `<unknown>` |
| 25.0% |       3 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 50.0% |       6 | `Unsafe_Park`              | `<unknown>` |
| 16.7% |       2 | `Unsafe_Unpark`            | `<unknown>` |
| 16.7% |       2 | `OptoRuntime::new_array_C` | `<unknown>` |
|  8.3% |       1 | `_new_array_Java`          | `<unknown>` |
|  8.3% |       1 | `JVM_NewArray`             | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 90.0% |       9 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 10.0% |       1 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      10 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `G1RegionMarkStatsCache::add_live_words` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 88.9% |       8 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
| 11.1% |       1 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       8 | `MemAllocator::allocate` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 87.5% |       7 | `G1ParScanThreadState::do_partial_array`        | `<unknown>` |
| 12.5% |       1 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`<unknown>`)

|      % | Samples | Caller                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------- | ----------- |
| 100.0% |       8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `<unknown>` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller    | Location              |
| ----: | ------: | --------- | --------------------- |
| 75.0% |       6 | `toArray` | `java.util.ArrayList` |
| 25.0% |       2 | `grow`    | `java.util.ArrayList` |

##### `newLength` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |       8 | `grow` | `java.util.ArrayList` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       7 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `G1ParScanThreadState::do_partial_array` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       6 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |       5 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 60.0% |       3 | `G1ScanHRForRegionClosure::scan_memregion`   | `<unknown>` |
| 40.0% |       2 | `G1ParScanThreadState::steal_and_trim_queue` | `<unknown>` |

##### `G1FullGCMarker::follow_object` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 60.0% |       3 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |
| 40.0% |       2 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 60.0% |       3 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |
| 20.0% |       1 | `Symbol::as_unicode`             | `<unknown>` |
| 20.0% |       1 | `TypeAryPtr::add_offset`         | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       4 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       3 | `forEach` | `java.util.HashMap` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10` |

##### `signalWaiters` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller      | Location                            |
| ----: | ------: | ----------- | ----------------------------------- |
| 66.7% |       2 | `setDone`   | `java.util.concurrent.ForkJoinTask` |
| 33.3% |       1 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `getAndSetAccess` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |       3 | `push` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       2 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       2 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller             | Location                                      |
| -----: | ------: | ------------------ | --------------------------------------------- |
| 100.0% |       2 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |       2 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `unpark` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Caller          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 50.0% |       1 | `signalWaiters` | `java.util.concurrent.ForkJoinTask` |
| 50.0% |       1 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 50.0% |       1 | `join`   | `java.util.concurrent.ForkJoinTask` |
| 50.0% |       1 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |       1 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                   |
| -----: | ------: | --------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                                                  |
| -----: | ------: | -------- | --------------------------------------------------------- |
| 100.0% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller                | Location                |
| -----: | ------: | --------------------- | ----------------------- |
| 100.0% |       1 | `getExactSizeIfKnown` | `java.util.Spliterator` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|      % | Samples | Caller             | Location                           |
| -----: | ------: | ------------------ | ---------------------------------- |
| 100.0% |       1 | `parseContextSpec` | `sun.net.www.protocol.jar.Handler` |

##### `PhaseIFG::effective_degree` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIFG::Compute_Effective_Degree` | `<unknown>` |

##### `lShiftI_reg_immNode::emit` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `PhaseOutput::scratch_emit_size` | `<unknown>` |

##### `Matcher::is_vshift_con_pattern` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |       1 | `Matcher::find_shared` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `Matcher::match` | `<unknown>` |

##### `ciInstanceKlass::get_field_by_offset` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `TypeOopPtr::TypeOopPtr` | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `PhaseCCP::transform` | `<unknown>` |

##### `PhaseChaitin::compute_initial_block_pressure` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |

##### `TypePtr::singleton` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `ciMethodData::load_data` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `Type::hashcons` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `Compile::flatten_alias_type` | `<unknown>` |

##### `GraphBuilder::state_at_entry` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `ciEnv::get_method_from_handle` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |       1 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `PhiNode::wait_for_region_igvn` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `PhiNode::Ideal` | `<unknown>` |

##### `PhiNode::Ideal` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 94.5% |   4,424 | `runWorker`              | `java.util.concurrent.ForkJoinPool`                        |
| 94.5% |   4,424 | `run`                    | `java.util.concurrent.ForkJoinWorkerThread`                |
| 89.0% |   4,165 | `scan`                   | `java.util.concurrent.ForkJoinPool`                        |
| 88.7% |   4,155 | `topLevelExec`           | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 88.7% |   4,154 | `doExec`                 | `java.util.concurrent.ForkJoinTask`                        |
| 88.2% |   4,130 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 88.2% |   4,130 | `exec`                   | `java.util.concurrent.RecursiveTask`                       |
| 84.0% |   3,935 | `awaitDone`              | `java.util.concurrent.ForkJoinTask`                        |
| 84.0% |   3,935 | `join`                   | `java.util.concurrent.ForkJoinTask`                        |
| 79.7% |   3,731 | `tryRemoveAndExec`       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 37.9% |   1,773 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 32.0% |   1,499 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 32.0% |   1,498 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 28.2% |   1,321 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.5% |   1,052 | `helpJoin`               | `java.util.concurrent.ForkJoinPool`                        |
| 20.6% |     966 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 20.0% |     935 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                        |
| 19.3% |     902 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 13.8% |     648 | `__psynch_cvwait`        | `<unknown>`                                                |
| 13.8% |     647 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 88.2% |   4,130 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 37.9% |   1,773 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 32.0% |   1,499 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 32.0% |   1,498 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 28.2% |   1,321 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.6% |     966 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 19.3% |     902 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 13.8% |     647 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.8% |     647 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.7% |     641 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.7% |     452 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.6% |     450 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.6% |     450 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|  7.9% |     369 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.8% |     365 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.6% |     355 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  7.5% |     352 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  5.1% |     238 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  5.1% |     238 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |
|  0.8% |      37 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Native

|     % | Samples | Function                                | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 13.8% |     648 | `__psynch_cvwait`                       | `<unknown>` |
| 13.7% |     643 | `Unsafe_Park`                           | `<unknown>` |
| 13.6% |     635 | `Parker::park`                          | `<unknown>` |
|  5.0% |     236 | `forward_copy_longs`                    | `<unknown>` |
|  4.5% |     212 | `_pthread_start`                        | `<unknown>` |
|  4.5% |     212 | `thread_start`                          | `<unknown>` |
|  4.5% |     211 | `Thread::call_run`                      | `<unknown>` |
|  4.5% |     211 | `thread_native_entry`                   | `<unknown>` |
|  4.5% |     209 | `arrayof_jint_disjoint_arraycopy`       | `<unknown>` |
|  2.9% |     134 | `WorkerThread::run`                     | `<unknown>` |
|  1.6% |      73 | `JavaThread::thread_main_inner`         | `<unknown>` |
|  1.3% |      60 | `G1FullGCMarker::complete_marking`      | `<unknown>` |
|  1.3% |      60 | `G1FullGCMarkTask::work`                | `<unknown>` |
|  1.1% |      51 | `arrayof_oop_disjoint_arraycopy`        | `<unknown>` |
|  1.1% |      51 | `Unsafe_Unpark`                         | `<unknown>` |
|  1.0% |      48 | `__psynch_cvsignal`                     | `<unknown>` |
|  1.0% |      45 | `G1EvacuateRegionsBaseTask::work`       | `<unknown>` |
|  1.0% |      45 | `_new_array_Java`                       | `<unknown>` |
|  0.9% |      44 | `OptoRuntime::new_array_C`              | `<unknown>` |
|  0.9% |      42 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 94.5% |   4,424 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 94.5% |   4,424 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 89.0% |   4,165 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 88.7% |   4,155 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 88.7% |   4,154 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 88.2% |   4,130 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 84.0% |   3,935 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 84.0% |   3,935 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 79.7% |   3,731 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 22.5% |   1,052 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| 20.0% |     935 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 13.8% |     644 | `park`             | `jdk.internal.misc.Unsafe`                          |
| 13.6% |     636 | `park`             | `java.util.concurrent.locks.LockSupport`            |
|  9.6% |     450 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  7.7% |     359 | `forEach`          | `java.util.HashMap`                                 |
|  7.5% |     352 | `merge`            | `java.util.HashMap`                                 |
|  5.5% |     257 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                 |
|  4.0% |     187 | `copyOf`           | `java.util.Arrays`                                  |
|  4.0% |     186 | `get`              | `java.util.ArrayList`                               |
|  3.4% |     160 | `toArray`          | `java.util.ArrayList`                               |

##### JIT

|     % | Samples | Function                | Location    |
| ----: | ------: | ----------------------- | ----------- |
|  1.3% |      60 | `zero_blocks`           | `<unknown>` |
| <0.1% |       2 | `vtable stub`           | `<unknown>` |
| <0.1% |       1 | `itable stub`           | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xb)` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.6% |      73 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| 1.3% |      59 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
| 1.0% |      47 | `Compile::Compile`                          | `<unknown>` |
| 1.0% |      47 | `C2Compiler::compile_method`                | `<unknown>` |
| 0.6% |      26 | `Compile::Code_Gen`                         | `<unknown>` |
| 0.4% |      17 | `Compile::Optimize`                         | `<unknown>` |
| 0.3% |      14 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
| 0.3% |      13 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
| 0.3% |      13 | `CompileQueue::get`                         | `<unknown>` |
| 0.3% |      12 | `Compilation::compile_method`               | `<unknown>` |
| 0.3% |      12 | `Compilation::Compilation`                  | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
| 0.3% |      12 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
| 0.2% |       9 | `Compilation::compile_java_method`          | `<unknown>` |
| 0.2% |       9 | `Compile::optimize_loops`                   | `<unknown>` |
| 0.1% |       7 | `Compilation::build_hir`                    | `<unknown>` |
| 0.1% |       5 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
| 0.1% |       5 | `Matcher::match`                            | `<unknown>` |
| 0.1% |       5 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.1% |       5 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                            |
| ----: | ------: | ----------- | ----------------------------------- |
| 94.1% |   4,165 | `scan`      | `java.util.concurrent.ForkJoinPool` |
|  5.8% |     257 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |   4,424 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 99.8% |   4,155 | `topLevelExec`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       2 | `signalWork`    | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `casSlotToNull` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   4,154 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee        | Location                                            |
| ----: | ------: | ------------- | --------------------------------------------------- |
| 99.4% |   4,130 | `exec`        | `java.util.concurrent.RecursiveTask`                |
| 10.8% |     450 | `exec`        | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.0% |      40 | `setDone`     | `java.util.concurrent.ForkJoinTask`                 |
| <0.1% |       1 | `vtable stub` | `<unknown>`                                         |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 95.3% |   3,935 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 42.9% |   1,773 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 36.3% |   1,499 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.7% |     647 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  8.8% |     365 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |   4,130 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                     | Location                                      |
| ----: | ------: | -------------------------- | --------------------------------------------- |
| 94.8% |   3,731 | `tryRemoveAndExec`         | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 26.7% |   1,052 | `helpJoin`                 | `java.util.concurrent.ForkJoinPool`           |
|  9.8% |     387 | `park`                     | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `signalWaiters`            | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       1 | `resolve_opt_virtual_call` | `<unknown>`                                   |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee         | Location                             |
| -----: | ------: | -------------- | ------------------------------------ |
| 100.0% |   3,935 | `awaitDone`    | `java.util.concurrent.ForkJoinTask`  |
|  <0.1% |       1 | `getRawResult` | `java.util.concurrent.RecursiveTask` |
|  <0.1% |       1 | `vtable stub`  | `<unknown>`                          |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Callee            | Location                                      |
| ----: | ------: | ----------------- | --------------------------------------------- |
| 99.9% |   3,729 | `doExec`          | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       2 | `getAndClearSlot` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   1,773 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  74.5% |   1,321 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  25.5% |     452 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee            | Location                                                  |
| ----: | ------: | ----------------- | --------------------------------------------------------- |
| 99.9% |   1,498 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,498 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee       | Location                                                  |
| ----: | ------: | ------------ | --------------------------------------------------------- |
| 64.5% |     966 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.8% |      72 | `get`        | `java.util.ArrayList`                                     |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee          | Location                                                   |
| ----: | ------: | --------------- | ---------------------------------------------------------- |
| 68.3% |     902 | `distance`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.0% |      53 | `get`           | `java.util.ArrayList`                                      |
|  0.4% |       5 | `zero_blocks`   | `<unknown>`                                                |
|  0.2% |       2 | `size`          | `java.util.ArrayList`                                      |
|  0.1% |       1 | `SafepointBlob` | `<unknown>`                                                |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 97.3% |   1,024 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
|  1.2% |      13 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 11.7% |     113 | `doubleValue` | `java.lang.Double` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     935 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 2.1% |      19 | `doubleValue`   | `java.lang.Double` |
| 0.2% |       2 | `SafepointBlob` | `<unknown>`        |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 99.1% |     641 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.9% |       6 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     647 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     647 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `park` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 99.8% |     643 | `Unsafe_Park`                                  | `<unknown>` |
|  0.2% |       1 | `JavaThreadParkedState::JavaThreadParkedState` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 98.8% |     635 | `Parker::park`                                 | `<unknown>` |
|  0.9% |       6 | `pthread_jit_write_protect_np`                 | `<unknown>` |
|  0.2% |       1 | `JavaThreadParkedState::JavaThreadParkedState` | `<unknown>` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                                                  |
| ----: | ------: | -------- | --------------------------------------------------------- |
| 99.8% |     640 | `invoke` | `java.util.concurrent.ForkJoinTask`                       |
|  0.2% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee | Location                   |
| -----: | ------: | ------ | -------------------------- |
| 100.0% |     636 | `park` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.2% |     630 | `__psynch_cvwait`                                                                                                                                          | `<unknown>` |
|  0.3% |       2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `<unknown>` |
|  0.2% |       1 | `_pthread_cond_wait`                                                                                                                                       | `<unknown>` |
|  0.2% |       1 | `stub:pthread_mutex_trylock`                                                                                                                               | `<unknown>` |
|  0.2% |       1 | `pthread_mutex_unlock`                                                                                                                                     | `<unknown>` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                     | Location              |
| ----: | ------: | -------------------------- | --------------------- |
| 33.8% |     153 | `computeIfAbsent`          | `java.util.HashMap`   |
| 27.0% |     122 | `add`                      | `java.util.ArrayList` |
| 13.5% |      61 | `get`                      | `java.util.ArrayList` |
|  0.4% |       2 | `wrong_method_stub`        | `<unknown>`           |
|  0.2% |       1 | `resolve_opt_virtual_call` | `<unknown>`           |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee      | Location                            |
| ----: | ------: | ----------- | ----------------------------------- |
| 99.3% |     447 | `invoke`    | `java.util.concurrent.ForkJoinTask` |
|  0.2% |       1 | `loadClass` | `java.lang.ClassLoader`             |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     450 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |     450 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 97.3% |     359 | `forEach`            | `java.util.HashMap`                |
|  1.6% |       6 | `<init>`             | `java.util.HashMap`                |
|  0.8% |       3 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 99.5% |     363 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 99.5% |     363 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 98.9% |     355 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 99.2% |     352 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |     352 | `merge` | `java.util.HashMap` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 67.6% |     238 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |
| 18.8% |      66 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| 10.2% |      36 | `zero_blocks`                     | `<unknown>`                                                            |
|  0.3% |       1 | `hash`                            | `java.util.HashMap`                                                    |
|  0.3% |       1 | `resize`                          | `java.util.HashMap`                                                    |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                                 |
| ----: | ------: | ----------- | ---------------------------------------- |
| 96.9% |     249 | `park`      | `java.util.concurrent.locks.LockSupport` |
|  3.1% |       8 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 66.0% |     157 | `addAll` | `java.util.ArrayList` |
| 34.0% |      81 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     238 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.5% |     211 | `thread_native_entry` | `<unknown>` |
|  0.5% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     212 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 63.5% |     134 | `WorkerThread::run`             | `<unknown>` |
| 34.6% |      73 | `JavaThread::thread_main_inner` | `<unknown>` |
|  0.9% |       2 | `VMThread::run`                 | `<unknown>` |
|  0.5% |       1 | `WatcherThread::run`            | `<unknown>` |
|  0.5% |       1 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     211 | `Thread::call_run` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 92.8% |     194 | `forward_copy_longs` | `<unknown>` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 71.7% |     134 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 23.5% |      44 | `_new_array_Java`                 | `<unknown>` |
|  0.5% |       1 | `zero_blocks`                     | `<unknown>` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Callee        | Location              |
| ----: | ------: | ------------- | --------------------- |
| 76.9% |     143 | `elementData` | `java.util.ArrayList` |
| 22.6% |      42 | `checkIndex`  | `java.util.Objects`   |

##### `toArray` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     160 | `copyOf` | `java.util.Arrays` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 44.8% |      60 | `G1FullGCMarkTask::work`          | `<unknown>` |
| 33.6% |      45 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  6.7% |       9 | `semaphore_wait_trap`             | `<unknown>` |
|  6.0% |       8 | `KlassCleaningTask::work`         | `<unknown>` |
|  6.0% |       8 | `G1FullGCResetMetadataTask::work` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      73 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 80.8% |      59 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 17.8% |      13 | `CompileQueue::get`                        | `<unknown>` |
|  1.4% |       1 | `ciEnv::get_method_from_handle`            | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|     % | Samples | Callee                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| 70.0% |      42 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `<unknown>` |
| 23.3% |      14 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `<unknown>` |
|  1.7% |       1 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |
|  1.7% |       1 | `TaskTerminator::offer_termination`                                                                        | `<unknown>` |
|  1.7% |       1 | `G1FullGCMarker::mark_object`                                                                              | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      60 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 79.7% |      47 | `C2Compiler::compile_method` | `<unknown>` |
| 20.3% |      12 | `Compiler::compile_method`   | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 82.4% |      42 | `forward_copy_longs`       | `<unknown>` |
|  5.9% |       3 | `G1BarrierSet::invalidate` | `<unknown>` |
|  5.9% |       3 | `tlv_get_addr`             | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 94.1% |      48 | `__psynch_cvsignal`            | `<unknown>` |
|  3.9% |       2 | `pthread_jit_write_protect_np` | `<unknown>` |
|  2.0% |       1 | `Parker::unpark`               | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 55.3% |      26 | `Compile::Code_Gen`        | `<unknown>` |
| 36.2% |      17 | `Compile::Optimize`        | `<unknown>` |
|  8.5% |       4 | `ParseGenerator::generate` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      47 | `Compile::Compile` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 80.0% |      36 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |
| 20.0% |       9 | `G1EvacuateRegionsTask::scan_roots`            | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 97.8% |      44 | `OptoRuntime::new_array_C`     | `<unknown>` |
|  2.2% |       1 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 90.9% |      40 | `InstanceKlass::allocate_objArray` | `<unknown>` |
|  4.5% |       2 | `pthread_jit_write_protect_np`     | `<unknown>` |
|  2.3% |       1 | `CollectedHeap::array_allocate`    | `<unknown>` |

##### `G1FullGCMarker::follow_marking_stacks` (`<unknown>`)

|     % | Samples | Callee                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 45.2% |      19 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
| 26.2% |      11 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `<unknown>` |
| 11.9% |       5 | `G1FullGCMarker::mark_object`                                                                        | `<unknown>` |
|  4.8% |       2 | `G1FullGCMarker::follow_object`                                                                      | `<unknown>` |
|  4.8% |       2 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 94.6% |      35 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
|  2.7% |       1 | `create`                    | `org.renaissance.core.ModuleLoader` |
|  2.7% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher`     |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 53.8% |      14 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 19.2% |       5 | `Matcher::match`                  | `<unknown>` |
| 15.4% |       4 | `PhaseOutput::Output`             | `<unknown>` |
| 11.5% |       3 | `PhaseCFG::do_global_code_motion` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 52.9% |       9 | `Compile::optimize_loops`      | `<unknown>` |
| 23.5% |       4 | `PhaseIdealLoop::optimize`     | `<unknown>` |
| 11.8% |       2 | `PhaseIterGVN::optimize`       | `<unknown>` |
|  5.9% |       1 | `PhaseCCP::do_transform`       | `<unknown>` |
|  5.9% |       1 | `ConnectionGraph::do_analysis` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 35.7% |       5 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
| 21.4% |       3 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 14.3% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 14.3% |       2 | `PhaseAggressiveCoalesce::insert_copies`   | `<unknown>` |
|  7.1% |       1 | `PhaseIFG::Compute_Effective_Degree`       | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 92.3% |      12 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
|  7.7% |       1 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|     % | Samples | Callee          | Location    |
| ----: | ------: | --------------- | ----------- |
| 92.3% |      12 | `Monitor::wait` | `<unknown>` |
|  7.7% |       1 | `Mutex::lock`   | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 75.0% |       9 | `Compilation::compile_java_method` | `<unknown>` |
| 16.7% |       2 | `ciEnv::register_method`           | `<unknown>` |
|  8.3% |       1 | `Dependencies::assert_common_1`    | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      12 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 41.7% |       5 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 33.3% |       4 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  8.3% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
|  8.3% |       1 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  8.3% |       1 | `IdealLoopTree::loop_predication`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 77.8% |       7 | `Compilation::build_hir`       | `<unknown>` |
| 11.1% |       1 | `ciMethod::ensure_method_data` | `<unknown>` |
| 11.1% |       1 | `Compilation::emit_lir`        | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 71.4% |       5 | `IR::IR`                 | `<unknown>` |
| 14.3% |       1 | `IR::compute_code`       | `<unknown>` |
| 14.3% |       1 | `IR::compute_use_counts` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 60.0% |       3 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |
| 20.0% |       1 | `GraphBuilder::state_at_entry`     | `<unknown>` |
| 20.0% |       1 | `BlockBegin::iterate_preorder`     | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                 | Location    |
| ----: | ------: | ---------------------- | ----------- |
| 80.0% |       4 | `Matcher::xform`       | `<unknown>` |
| 20.0% |       1 | `Matcher::find_shared` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 60.0% |       3 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       5 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% |     242 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.9% |     138 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.6% |     122 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.5% |     115 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |     101 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% |      90 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      80 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |      79 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |      79 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |      66 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |      65 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |      60 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% |      59 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |      58 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |      57 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |
| 1.2% |      56 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |      52 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |      47 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.9% |      40 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.8% |      39 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# Sampling profile

Collected 4,869 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 60.3% |   2,937 |
| Native           | 21.9% |   1,068 |
| Standard library | 15.1% |     733 |
| JIT              |  1.5% |      75 |
| Compiler         |  1.1% |      54 |
| Unknown          | <0.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                       | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 19.8% |     965 | `distance`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 19.8% |     962 | `accumulate`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 11.2% |     545 | `__psynch_cvwait`              | `<unknown>`                                                |
|  9.1% |     444 | `findNearestCentroid`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  8.6% |     420 | `vectorSum`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  4.3% |     207 | `forward_copy_longs`           | `<unknown>`                                                |
|  3.2% |     154 | `elementData`                  | `java.util.ArrayList`                                      |
|  3.0% |     148 | `computeIfAbsent`              | `java.util.HashMap`                                        |
|  2.9% |     141 | `doubleValue`                  | `java.lang.Double`                                         |
|  2.6% |     129 | `collectClusters`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% |      73 | `zero_blocks`                  | `<unknown>`                                                |
|  1.2% |      58 | `add`                          | `java.util.ArrayList`                                      |
|  1.0% |      47 | `checkIndex`                   | `java.util.Objects`                                        |
|  0.9% |      46 | `__psynch_cvsignal`            | `<unknown>`                                                |
|  0.7% |      33 | `grow`                         | `java.util.ArrayList`                                      |
|  0.6% |      31 | `helpJoin`                     | `java.util.concurrent.ForkJoinPool`                        |
|  0.6% |      31 | `hash`                         | `java.util.HashMap`                                        |
|  0.5% |      25 | `G1FullGCMarker::mark_object`  | `<unknown>`                                                |
|  0.4% |      20 | `pthread_jit_write_protect_np` | `<unknown>`                                                |
|  0.3% |      17 | `_platform_bzero`              | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                                               |
| ----: | ------: | -------------------------- | ---------------------------------------------------------------------- |
| 19.8% |     965 | `distance`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 19.8% |     962 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  9.1% |     444 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.6% |     420 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  2.6% |     129 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       4 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       2 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |
| <0.1% |       1 | `lambda$generateData$3`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011258d8` |
| <0.1% |       1 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Native

|     % | Samples | Function                                                        | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 11.2% |     545 | `__psynch_cvwait`                                               | `<unknown>` |
|  4.3% |     207 | `forward_copy_longs`                                            | `<unknown>` |
|  0.9% |      46 | `__psynch_cvsignal`                                             | `<unknown>` |
|  0.5% |      25 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
|  0.4% |      20 | `pthread_jit_write_protect_np`                                  | `<unknown>` |
|  0.3% |      17 | `_platform_bzero`                                               | `<unknown>` |
|  0.3% |      16 | `_platform_memset`                                              | `<unknown>` |
|  0.3% |      16 | `__psynch_mutexwait`                                            | `<unknown>` |
|  0.2% |      11 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>` |
|  0.2% |       8 | `inflate_fast`                                                  | `<unknown>` |
|  0.2% |       8 | `G1RegionMarkStatsCache::add_live_words`                        | `<unknown>` |
|  0.1% |       7 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>` |
|  0.1% |       6 | `ObjArrayAllocator::initialize`                                 | `<unknown>` |
|  0.1% |       6 | `G1ParScanThreadState::do_partial_array`                        | `<unknown>` |
|  0.1% |       6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
|  0.1% |       5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`        | `<unknown>` |
|  0.1% |       5 | `tlv_get_addr`                                                  | `<unknown>` |
|  0.1% |       5 | `semaphore_wait_trap`                                           | `<unknown>` |
|  0.1% |       4 | `G1ParScanThreadState::trim_queue_to_threshold`                 | `<unknown>` |
|  0.1% |       4 | `G1BarrierSet::invalidate`                                      | `<unknown>` |

##### Standard library

|    % | Samples | Function           | Location                                      |
| ---: | ------: | ------------------ | --------------------------------------------- |
| 3.2% |     154 | `elementData`      | `java.util.ArrayList`                         |
| 3.0% |     148 | `computeIfAbsent`  | `java.util.HashMap`                           |
| 2.9% |     141 | `doubleValue`      | `java.lang.Double`                            |
| 1.2% |      58 | `add`              | `java.util.ArrayList`                         |
| 1.0% |      47 | `checkIndex`       | `java.util.Objects`                           |
| 0.7% |      33 | `grow`             | `java.util.ArrayList`                         |
| 0.6% |      31 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
| 0.6% |      31 | `hash`             | `java.util.HashMap`                           |
| 0.2% |      12 | `merge`            | `java.util.HashMap`                           |
| 0.2% |       9 | `copyOf`           | `java.util.Arrays`                            |
| 0.1% |       7 | `putVal`           | `java.util.HashMap`                           |
| 0.1% |       5 | `newLength`        | `jdk.internal.util.ArraysSupport`             |
| 0.1% |       4 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       4 | `runWorker`        | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       4 | `forEach`          | `java.util.HashMap`                           |
| 0.1% |       3 | `get`              | `java.util.ArrayList`                         |
| 0.1% |       3 | `exec`             | `java.util.concurrent.RecursiveTask`          |
| 0.1% |       3 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       3 | `join`             | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       3 | `getAndClearSlot`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### JIT

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
|  1.5% |      73 | `zero_blocks` | `<unknown>` |
| <0.1% |       2 | `vtable stub` | `<unknown>` |

##### Compiler

|     % | Samples | Function                            | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| <0.1% |       2 | `PhaseChaitin::build_ifg_physical`  | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::elide_copy`          | `<unknown>` |
| <0.1% |       2 | `Matcher::match_tree`               | `<unknown>` |
| <0.1% |       1 | `Node::needs_anti_dependence_check` | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_early`  | `<unknown>` |
| <0.1% |       1 | `IndexSet::initialize`              | `<unknown>` |
| <0.1% |       1 | `Matcher::pd_clone_node`            | `<unknown>` |
| <0.1% |       1 | `HaltNode::is_CFG`                  | `<unknown>` |
| <0.1% |       1 | `LinearScan::assign_reg_num`        | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::raise_pressure`      | `<unknown>` |
| <0.1% |       1 | `TypeInstPtr::hash`                 | `<unknown>` |
| <0.1% |       1 | `Matcher::int_pressure_limit`       | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::Split`               | `<unknown>` |
| <0.1% |       1 | `TypeInterfaces::hash`              | `<unknown>` |
| <0.1% |       1 | `ValueStack::ValueStack`            | `<unknown>` |
| <0.1% |       1 | `GraphBuilder::append_with_bci`     | `<unknown>` |
| <0.1% |       1 | `TypeInt::eq`                       | `<unknown>` |
| <0.1% |       1 | `PhaseIterGVN::transform_old`       | `<unknown>` |
| <0.1% |       1 | `storeLNode::emit`                  | `<unknown>` |
| <0.1% |       1 | `PhaseOutput::shorten_branches`     | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     965 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     962 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 97.4% |     531 | `Parker::park`          | `<unknown>` |
|  2.6% |      14 | `PlatformMonitor::wait` | `<unknown>` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     444 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     420 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 80.7% |     167 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 19.3% |      40 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     154 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     148 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 87.9% |     124 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 12.1% |      17 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     129 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 63.0% |      46 | `merge`               | `java.util.HashMap`                                        |
| 23.3% |      17 | `grow`                | `java.util.ArrayList`                                      |
|  9.6% |       7 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.7% |       2 | `<init>`              | `java.util.ArrayList`                                      |
|  1.4% |       1 | `resize`              | `java.util.HashMap`                                        |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 87.9% |      51 | `add`             | `java.util.ArrayList`                                      |
| 12.1% |       7 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      47 | `get`  | `java.util.ArrayList` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      46 | `Unsafe_Unpark` | `<unknown>` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller | Location              |
| ----: | ------: | ------ | --------------------- |
| 78.8% |      26 | `grow` | `java.util.ArrayList` |
| 21.2% |       7 | `add`  | `java.util.ArrayList` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |      31 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `hash` (`java.util.HashMap`)

|      % | Samples | Caller            | Location            |
| -----: | ------: | ----------------- | ------------------- |
| 100.0% |      31 | `computeIfAbsent` | `java.util.HashMap` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 96.0% |      24 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
|  4.0% |       1 | `G1FullGCMarker::complete_marking`                              | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 40.0% |       8 | `Unsafe_Park`              | `<unknown>` |
| 20.0% |       4 | `Unsafe_Unpark`            | `<unknown>` |
| 20.0% |       4 | `OptoRuntime::new_array_C` | `<unknown>` |
| 15.0% |       3 | `_new_array_Java`          | `<unknown>` |
|  5.0% |       1 | `JVM_IHashCode`            | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      17 | `MemAllocator::allocate` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 50.0% |       8 | `MarkBitMap::do_clear`   | `<unknown>` |
| 43.8% |       7 | `MemAllocator::allocate` | `<unknown>` |
|  6.3% |       1 | `ReturnNode::ReturnNode` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      16 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      12 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 45.5% |       5 | `copyOf` | `java.util.Arrays`    |
| 36.4% |       4 | `grow`   | `java.util.ArrayList` |
| 18.2% |       2 | `merge`  | `java.util.HashMap`   |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller    | Location              |
| ----: | ------: | --------- | --------------------- |
| 77.8% |       7 | `toArray` | `java.util.ArrayList` |
| 22.2% |       2 | `grow`    | `java.util.ArrayList` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `G1RegionMarkStatsCache::add_live_words` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 75.0% |       6 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
| 25.0% |       2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       7 | `G1AdjustRegionClosure::do_heap_region` | `<unknown>` |

##### `putVal` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |       7 | `putMapEntries` | `java.util.HashMap` |

##### `ObjArrayAllocator::initialize` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 83.3% |       5 | `MemAllocator::allocate`          | `<unknown>` |
| 16.7% |       1 | `CollectedHeap::fill_with_object` | `<unknown>` |

##### `G1ParScanThreadState::do_partial_array` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 66.7% |       4 | `G1FullGCMarker::complete_marking`      | `<unknown>` |
| 33.3% |       2 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 80.0% |       4 | `G1ParScanThreadState::do_partial_array`        | `<unknown>` |
| 20.0% |       1 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 60.0% |       3 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |
| 20.0% |       1 | `LIR_List::LIR_List`             | `<unknown>` |
| 20.0% |       1 | `GraphKit::clone_map`            | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 60.0% |       3 | `WorkerThread::run`              | `<unknown>` |
| 40.0% |       2 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `newLength` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |       5 | `grow` | `java.util.ArrayList` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |       4 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d001186b38` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 50.0% |       2 | `G1ParScanThreadState::steal_and_trim_queue`                        | `<unknown>` |
| 25.0% |       1 | `G1ParEvacuateFollowersClosure::do_void`                            | `<unknown>` |
| 25.0% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `G1BarrierSet::invalidate` (`<unknown>`)

|     % | Samples | Caller                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 75.0% |       3 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |
| 25.0% |       1 | `addAll`                         | `java.util.ArrayList` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       4 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |       4 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       4 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 66.7% |       2 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.3% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       3 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       3 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `getAndClearSlot` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller             | Location                                      |
| -----: | ------: | ------------------ | --------------------------------------------- |
| 100.0% |       3 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller   | Location                                               |
| -----: | ------: | -------- | ------------------------------------------------------ |
| 100.0% |       2 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 50.0% |       1 | `join`    | `java.util.concurrent.ForkJoinTask`                    |
| 50.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       2 | `Matcher::xform` | `<unknown>` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       1 | `forEach` | `java.util.HashMap` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001125b10` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011258d8`)

|      % | Samples | Caller   | Location                           |
| -----: | ------: | -------- | ---------------------------------- |
| 100.0% |       1 | `accept` | `java.util.stream.IntPipeline$1$1` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |       1 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `Node::needs_anti_dependence_check` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `Node_Backward_Iterator::next` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `IndexSet::initialize` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `PhaseIFG::init` | `<unknown>` |

##### `Matcher::pd_clone_node` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |       1 | `Matcher::find_shared` | `<unknown>` |

##### `HaltNode::is_CFG` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_tree` | `<unknown>` |

##### `LinearScan::assign_reg_num` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `PhaseChaitin::raise_pressure` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |

##### `TypeInstPtr::hash` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |       1 | `Dict::Insert` | `<unknown>` |

##### `Matcher::int_pressure_limit` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `TypeInterfaces::hash` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |       1 | `Dict::Insert` | `<unknown>` |

##### `ValueStack::ValueStack` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::append_with_bci` | `<unknown>` |

##### `GraphBuilder::append_with_bci` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::arithmetic_op` | `<unknown>` |

##### `TypeInt::eq` (`<unknown>`)

|      % | Samples | Caller      | Location    |
| -----: | ------: | ----------- | ----------- |
| 100.0% |       1 | `Type::cmp` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `storeLNode::emit` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       1 | `PhaseOutput::shorten_branches` | `<unknown>` |

##### `PhaseOutput::shorten_branches` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `PhaseOutput::Output` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 94.9% |   4,619 | `runWorker`              | `java.util.concurrent.ForkJoinPool`                        |
| 94.9% |   4,619 | `run`                    | `java.util.concurrent.ForkJoinWorkerThread`                |
| 90.7% |   4,414 | `scan`                   | `java.util.concurrent.ForkJoinPool`                        |
| 90.6% |   4,412 | `doExec`                 | `java.util.concurrent.ForkJoinTask`                        |
| 90.6% |   4,412 | `topLevelExec`           | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 90.0% |   4,382 | `exec`                   | `java.util.concurrent.RecursiveTask`                       |
| 90.0% |   4,381 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 86.6% |   4,218 | `join`                   | `java.util.concurrent.ForkJoinTask`                        |
| 86.6% |   4,217 | `awaitDone`              | `java.util.concurrent.ForkJoinTask`                        |
| 82.9% |   4,036 | `tryRemoveAndExec`       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 41.0% |   1,997 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 32.9% |   1,601 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 32.8% |   1,599 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 30.9% |   1,504 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.3% |   1,086 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.4% |   1,040 | `helpJoin`               | `java.util.concurrent.ForkJoinPool`                        |
| 20.2% |     984 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 20.1% |     981 | `invoke`                 | `java.util.concurrent.ForkJoinTask`                        |
| 14.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 14.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 90.0% |   4,381 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 41.0% |   1,997 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 32.9% |   1,601 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 32.8% |   1,599 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 30.9% |   1,504 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 22.3% |   1,086 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 20.2% |     984 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 14.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     680 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 10.1% |     493 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.5% |     462 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.5% |     462 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |
|  7.1% |     347 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.1% |     347 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.7% |     328 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |
|  6.7% |     327 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.5% |     219 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.5% |     219 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0` |
|  0.8% |      37 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Native

|     % | Samples | Function                           | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 11.2% |     545 | `__psynch_cvwait`                  | `<unknown>` |
| 11.2% |     543 | `Unsafe_Park`                      | `<unknown>` |
| 11.0% |     535 | `Parker::park`                     | `<unknown>` |
|  4.3% |     210 | `Thread::call_run`                 | `<unknown>` |
|  4.3% |     210 | `thread_native_entry`              | `<unknown>` |
|  4.3% |     210 | `_pthread_start`                   | `<unknown>` |
|  4.3% |     210 | `thread_start`                     | `<unknown>` |
|  4.3% |     207 | `forward_copy_longs`               | `<unknown>` |
|  3.7% |     178 | `arrayof_jint_disjoint_arraycopy`  | `<unknown>` |
|  2.2% |     107 | `WorkerThread::run`                | `<unknown>` |
|  1.8% |      87 | `JavaThread::thread_main_inner`    | `<unknown>` |
|  1.1% |      52 | `Unsafe_Unpark`                    | `<unknown>` |
|  1.1% |      52 | `G1FullGCMarker::complete_marking` | `<unknown>` |
|  1.1% |      52 | `G1FullGCMarkTask::work`           | `<unknown>` |
|  1.0% |      49 | `arrayof_oop_disjoint_arraycopy`   | `<unknown>` |
|  1.0% |      47 | `_new_array_Java`                  | `<unknown>` |
|  0.9% |      46 | `__psynch_cvsignal`                | `<unknown>` |
|  0.9% |      44 | `MemAllocator::allocate`           | `<unknown>` |
|  0.9% |      44 | `OptoRuntime::new_array_C`         | `<unknown>` |
|  0.8% |      41 | `CollectedHeap::array_allocate`    | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 94.9% |   4,619 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 94.9% |   4,619 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 90.7% |   4,414 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 90.6% |   4,412 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 90.6% |   4,412 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 90.0% |   4,382 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 86.6% |   4,218 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 86.6% |   4,217 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 82.9% |   4,036 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 21.4% |   1,040 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| 20.1% |     981 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 11.2% |     544 | `park`             | `jdk.internal.misc.Unsafe`                          |
| 11.0% |     536 | `park`             | `java.util.concurrent.locks.LockSupport`            |
|  9.5% |     462 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  6.8% |     332 | `forEach`          | `java.util.HashMap`                                 |
|  6.7% |     327 | `merge`            | `java.util.HashMap`                                 |
|  4.2% |     204 | `get`              | `java.util.ArrayList`                               |
|  4.1% |     201 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                 |
|  3.8% |     187 | `computeIfAbsent`  | `java.util.HashMap`                                 |
|  3.6% |     173 | `copyOf`           | `java.util.Arrays`                                  |

##### JIT

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
|  1.5% |      73 | `zero_blocks` | `<unknown>` |
| <0.1% |       2 | `vtable stub` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                   | Location    |
| ---: | ------: | ------------------------------------------ | ----------- |
| 1.8% |      86 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 1.7% |      81 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 1.3% |      63 | `Compile::Compile`                         | `<unknown>` |
| 1.3% |      63 | `C2Compiler::compile_method`               | `<unknown>` |
| 0.7% |      35 | `Compile::Code_Gen`                        | `<unknown>` |
| 0.4% |      21 | `Compile::Optimize`                        | `<unknown>` |
| 0.4% |      18 | `Compilation::compile_java_method`         | `<unknown>` |
| 0.4% |      18 | `Compilation::compile_method`              | `<unknown>` |
| 0.4% |      18 | `Compilation::Compilation`                 | `<unknown>` |
| 0.3% |      17 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 0.3% |      16 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 0.3% |      13 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 0.3% |      13 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 0.2% |      10 | `Matcher::match`                           | `<unknown>` |
| 0.2% |       8 | `Compilation::emit_lir`                    | `<unknown>` |
| 0.2% |       8 | `Compilation::build_hir`                   | `<unknown>` |
| 0.1% |       7 | `Matcher::match_tree`                      | `<unknown>` |
| 0.1% |       7 | `Matcher::xform`                           | `<unknown>` |
| 0.1% |       6 | `Compile::optimize_loops`                  | `<unknown>` |
| 0.1% |       6 | `GraphBuilder::GraphBuilder`               | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                            |
| ----: | ------: | ----------- | ----------------------------------- |
| 95.6% |   4,414 | `scan`      | `java.util.concurrent.ForkJoinPool` |
|  4.4% |     201 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |   4,619 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee         | Location                                      |
| -----: | ------: | -------------- | --------------------------------------------- |
| 100.0% |   4,412 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee    | Location                                            |
| ----: | ------: | --------- | --------------------------------------------------- |
| 99.3% |   4,382 | `exec`    | `java.util.concurrent.RecursiveTask`                |
| 10.5% |     462 | `exec`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.0% |      45 | `setDone` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   4,412 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |   4,381 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 96.3% |   4,218 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 45.6% |   1,997 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 36.5% |   1,601 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.6% |     682 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.9% |     347 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee        | Location                            |
| -----: | ------: | ------------- | ----------------------------------- |
| 100.0% |   4,217 | `awaitDone`   | `java.util.concurrent.ForkJoinTask` |
|  <0.1% |       1 | `vtable stub` | `<unknown>`                         |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 95.7% |   4,036 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 24.7% |   1,040 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
|  8.1% |     343 | `park`             | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `uncompensate`     | `java.util.concurrent.ForkJoinPool`           |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee            | Location                                      |
| -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% |   4,036 | `doExec`          | `java.util.concurrent.ForkJoinTask`           |
|   0.1% |       3 | `getAndClearSlot` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   1,997 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.3% |   1,504 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.7% |     493 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee            | Location                                                  |
| ----: | ------: | ----------------- | --------------------------------------------------------- |
| 99.9% |   1,599 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,599 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee               | Location                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------- |
| 67.9% |   1,086 | `accumulate`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.8% |      92 | `get`                | `java.util.ArrayList`                                     |
|  0.1% |       1 | `DeoptimizationBlob` | `<unknown>`                                               |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 65.4% |     984 | `distance`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.3% |      64 | `get`             | `java.util.ArrayList`                                      |
|  0.5% |       7 | `zero_blocks`     | `<unknown>`                                                |
|  0.2% |       3 | `_new_array_Java` | `<unknown>`                                                |
|  0.1% |       2 | `size`            | `java.util.ArrayList`                                      |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 11.4% |     124 | `doubleValue` | `java.lang.Double` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 97.5% |   1,014 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
|  0.7% |       7 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.7% |      17 | `doubleValue`   | `java.lang.Double` |
| 0.2% |       2 | `SafepointBlob` | `<unknown>`        |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     981 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 99.7% |     680 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     682 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     682 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 99.9% |     679 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `park` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                                                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.8% |     543 | `Unsafe_Park`                                                                                                                                              | `<unknown>` |
|  0.2% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 98.5% |     535 | `Parker::park`                 | `<unknown>` |
|  1.5% |       8 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee | Location                   |
| -----: | ------: | ------ | -------------------------- |
| 100.0% |     536 | `park` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 99.3% |     531 | `__psynch_cvwait`            | `<unknown>` |
|  0.4% |       2 | `_pthread_cond_wait`         | `<unknown>` |
|  0.2% |       1 | `JavaThread::is_interrupted` | `<unknown>` |
|  0.2% |       1 | `__gettimeofday`             | `<unknown>` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 37.9% |     187 | `computeIfAbsent`                | `java.util.HashMap`   |
| 25.6% |     126 | `add`                            | `java.util.ArrayList` |
|  9.7% |      48 | `get`                            | `java.util.ArrayList` |
|  0.4% |       2 | `counter_overflow Runtime1 stub` | `<unknown>`           |
|  0.2% |       1 | `_new_instance_Java`             | `<unknown>`           |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee      | Location                                               |
| ----: | ------: | ----------- | ------------------------------------------------------ |
| 99.4% |     459 | `invoke`    | `java.util.concurrent.ForkJoinTask`                    |
|  0.4% |       2 | `<init>`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.2% |       1 | `loadClass` | `java.lang.ClassLoader`                                |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     462 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |     462 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee    | Location            |
| ----: | ------: | --------- | ------------------- |
| 95.7% |     332 | `forEach` | `java.util.HashMap` |
|  4.0% |      14 | `<init>`  | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |     347 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |     347 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 98.8% |     328 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001186d88`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 99.7% |     327 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |     327 | `merge` | `java.util.HashMap` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 67.0% |     219 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0` |
| 15.3% |      50 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| 14.1% |      46 | `zero_blocks`                     | `<unknown>`                                                            |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 66.2% |     145 | `addAll` | `java.util.ArrayList` |
| 33.3% |      73 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d0011876a0`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     219 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 51.0% |     107 | `WorkerThread::run`             | `<unknown>` |
| 41.4% |      87 | `JavaThread::thread_main_inner` | `<unknown>` |
|  3.8% |       8 | `ConcurrentGCThread::run`       | `<unknown>` |
|  2.9% |       6 | `VMThread::run`                 | `<unknown>` |
|  0.5% |       1 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     210 | `Thread::call_run` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     210 | `thread_native_entry` | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     210 | `_pthread_start` | `<unknown>` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Callee        | Location              |
| ----: | ------: | ------------- | --------------------- |
| 75.5% |     154 | `elementData` | `java.util.ArrayList` |
| 23.0% |      47 | `checkIndex`  | `java.util.Objects`   |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                                 |
| ----: | ------: | ----------- | ---------------------------------------- |
| 96.0% |     193 | `park`      | `java.util.concurrent.locks.LockSupport` |
|  4.0% |       8 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |

##### `computeIfAbsent` (`java.util.HashMap`)

|     % | Samples | Callee    | Location                                                                              |
| ----: | ------: | --------- | ------------------------------------------------------------------------------------- |
| 16.6% |      31 | `hash`    | `java.util.HashMap`                                                                   |
|  2.1% |       4 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000d001186b38` |
|  1.6% |       3 | `resize`  | `java.util.HashMap`                                                                   |
|  0.5% |       1 | `newNode` | `java.util.HashMap`                                                                   |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 93.8% |     167 | `forward_copy_longs` | `<unknown>` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 69.4% |     120 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 25.4% |      44 | `_new_array_Java`                 | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 48.6% |      52 | `G1FullGCMarkTask::work`          | `<unknown>` |
| 28.0% |      30 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  8.4% |       9 | `G1FullGCAdjustTask::work`        | `<unknown>` |
|  7.5% |       8 | `HeapRegionManager::par_iterate`  | `<unknown>` |
|  2.8% |       3 | `semaphore_wait_trap`             | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 98.9% |      86 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
|  1.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 94.2% |      81 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  5.8% |       5 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 77.8% |      63 | `C2Compiler::compile_method` | `<unknown>` |
| 22.2% |      18 | `Compiler::compile_method`   | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 55.6% |      35 | `Compile::Code_Gen`        | `<unknown>` |
| 33.3% |      21 | `Compile::Optimize`        | `<unknown>` |
|  9.5% |       6 | `ParseGenerator::generate` | `<unknown>` |
|  1.6% |       1 | `Compile::return_values`   | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      63 | `Compile::Compile` | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 88.5% |      46 | `__psynch_cvsignal`            | `<unknown>` |
|  7.7% |       4 | `pthread_jit_write_protect_np` | `<unknown>` |
|  1.9% |       1 | `Parker::unpark`               | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|     % | Samples | Callee                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| 61.5% |      32 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `<unknown>` |
| 32.7% |      17 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `<unknown>` |
|  3.8% |       2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |
|  1.9% |       1 | `G1FullGCMarker::mark_object`                                                                              | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      52 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 81.6% |      40 | `forward_copy_longs`                 | `<unknown>` |
|  6.1% |       3 | `G1BarrierSet::invalidate`           | `<unknown>` |
|  6.1% |       3 | `tlv_get_addr`                       | `<unknown>` |
|  2.0% |       1 | `G1BarrierSet::write_ref_array_work` | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 93.6% |      44 | `OptoRuntime::new_array_C`     | `<unknown>` |
|  6.4% |       3 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `MemAllocator::allocate` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 38.6% |      17 | `_platform_bzero`                             | `<unknown>` |
| 27.3% |      12 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 15.9% |       7 | `_platform_memset`                            | `<unknown>` |
| 11.4% |       5 | `ObjArrayAllocator::initialize`               | `<unknown>` |
|  4.5% |       2 | `G1CollectedHeap::mem_allocate`               | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 84.1% |      37 | `InstanceKlass::allocate_objArray` | `<unknown>` |
|  9.1% |       4 | `pthread_jit_write_protect_np`     | `<unknown>` |
|  6.8% |       3 | `CollectedHeap::array_allocate`    | `<unknown>` |

##### `CollectedHeap::array_allocate` (`<unknown>`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      41 | `MemAllocator::allocate` | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                        |
| ----: | ------: | --------------------------- | ------------------------------- |
| 97.3% |      36 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |
|  2.7% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 48.6% |      17 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 28.6% |      10 | `Matcher::match`                  | `<unknown>` |
| 14.3% |       5 | `PhaseOutput::Output`             | `<unknown>` |
|  2.9% |       1 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  2.9% |       1 | `PhaseOutput::install_code`       | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 47.6% |      10 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| 28.6% |       6 | `Compile::optimize_loops`              | `<unknown>` |
|  9.5% |       2 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  4.8% |       1 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |
|  4.8% |       1 | `ConnectionGraph::do_analysis`         | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 44.4% |       8 | `Compilation::emit_lir`       | `<unknown>` |
| 44.4% |       8 | `Compilation::build_hir`      | `<unknown>` |
| 11.1% |       2 | `Compilation::emit_code_body` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      18 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      18 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 29.4% |       5 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 17.6% |       3 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 11.8% |       2 | `PhaseChaitin::Split`                      | `<unknown>` |
|  5.9% |       1 | `PhaseIFG::init`                           | `<unknown>` |
|  5.9% |       1 | `Arena::Arena`                             | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 81.3% |      13 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 12.5% |       2 | `PhaseIterGVN::optimize`         | `<unknown>` |
|  6.3% |       1 | `Chunk::next_chop`               | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 30.8% |       4 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 15.4% |       2 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
|  7.7% |       1 | `IdealLoopTree::policy_range_check`    | `<unknown>` |
|  7.7% |       1 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  7.7% |       1 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      13 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                 | Location    |
| ----: | ------: | ---------------------- | ----------- |
| 70.0% |       7 | `Matcher::xform`       | `<unknown>` |
| 30.0% |       3 | `Matcher::find_shared` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 62.5% |       5 | `LinearScan::do_linear_scan` | `<unknown>` |
| 37.5% |       3 | `BlockList::iterate_forward` | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 75.0% |       6 | `IR::IR`                                     | `<unknown>` |
| 12.5% |       1 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |
| 12.5% |       1 | `IR::eliminate_null_checks`                  | `<unknown>` |

##### `Matcher::match_tree` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 42.9% |       3 | `Matcher::Label_Root` | `<unknown>` |
| 28.6% |       2 | `Chunk::next_chop`    | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       7 | `Matcher::match_tree` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 83.3% |       5 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
| 16.7% |       1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.9% |     189 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.5% |     172 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.8% |     136 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.4% |     119 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.2% |     109 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |     109 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.0% |      97 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      81 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000d001183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |
| 1.5% |      74 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.5% |      74 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |      70 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      69 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      68 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |      67 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.3% |      64 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |      52 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |      50 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.0% |      49 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      48 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |      45 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

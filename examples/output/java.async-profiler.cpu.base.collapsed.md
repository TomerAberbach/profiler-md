# Sampling profile

Collected 5,314 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 57.1% |   3,032 |
| Native           | 26.4% |   1,404 |
| Standard library | 14.3% |     760 |
| JIT              |  1.2% |      63 |
| Compiler         |  1.0% |      55 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                          | Location                                                   |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------- |
| 18.4% |     977 | `accumulate`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.4% |     977 | `distance`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 16.1% |     853 | `__psynch_cvwait`                 | `<unknown>`                                                |
|  9.3% |     492 | `vectorSum`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  8.2% |     436 | `findNearestCentroid`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.5% |     188 | `forward_copy_longs`              | `<unknown>`                                                |
|  3.3% |     174 | `elementData`                     | `java.util.ArrayList`                                      |
|  3.0% |     158 | `computeIfAbsent`                 | `java.util.HashMap`                                        |
|  2.4% |     127 | `collectClusters`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.2% |     119 | `doubleValue`                     | `java.lang.Double`                                         |
|  1.3% |      67 | `add`                             | `java.util.ArrayList`                                      |
|  1.1% |      61 | `zero_blocks`                     | `<unknown>`                                                |
|  1.0% |      51 | `checkIndex`                      | `java.util.Objects`                                        |
|  0.9% |      47 | `__psynch_cvsignal`               | `<unknown>`                                                |
|  0.6% |      34 | `hash`                            | `java.util.HashMap`                                        |
|  0.5% |      28 | `pthread_jit_write_protect_np`    | `<unknown>`                                                |
|  0.5% |      26 | `grow`                            | `java.util.ArrayList`                                      |
|  0.5% |      25 | `_platform_bzero`                 | `<unknown>`                                                |
|  0.4% |      21 | `__psynch_mutexwait`              | `<unknown>`                                                |
|  0.4% |      20 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 18.4% |     977 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 18.4% |     977 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.3% |     492 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.2% |     436 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.4% |     127 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       3 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  0.1% |       3 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  0.1% |       3 | `lambda$generateData$3`  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       2 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       2 | `add`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `forkThreshold`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186d88` |
| <0.1% |       1 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `forkThreshold`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `<init>`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `<init>`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

|     % | Samples | Function                                                        | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 16.1% |     853 | `__psynch_cvwait`                                               | `<unknown>` |
|  3.5% |     188 | `forward_copy_longs`                                            | `<unknown>` |
|  0.9% |      47 | `__psynch_cvsignal`                                             | `<unknown>` |
|  0.5% |      28 | `pthread_jit_write_protect_np`                                  | `<unknown>` |
|  0.5% |      25 | `_platform_bzero`                                               | `<unknown>` |
|  0.4% |      21 | `__psynch_mutexwait`                                            | `<unknown>` |
|  0.4% |      20 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>` |
|  0.4% |      20 | `semaphore_wait_trap`                                           | `<unknown>` |
|  0.3% |      17 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
|  0.2% |      13 | `G1ParScanThreadState::do_copy_to_survivor_space`               | `<unknown>` |
|  0.2% |       8 | `_sigtramp`                                                     | `<unknown>` |
|  0.1% |       6 | `G1ParScanThreadState::trim_queue_to_threshold`                 | `<unknown>` |
|  0.1% |       6 | `inflate_fast`                                                  | `<unknown>` |
|  0.1% |       5 | `Unsafe_Park`                                                   | `<unknown>` |
|  0.1% |       5 | `tlv_get_addr`                                                  | `<unknown>` |
|  0.1% |       5 | `_platform_memset`                                              | `<unknown>` |
|  0.1% |       5 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
|  0.1% |       5 | `__psynch_mutexdrop`                                            | `<unknown>` |
|  0.1% |       4 | `G1RegionMarkStatsCache::add_live_words`                        | `<unknown>` |
|  0.1% |       4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
|  3.3% |     174 | `elementData`      | `java.util.ArrayList`                         |
|  3.0% |     158 | `computeIfAbsent`  | `java.util.HashMap`                           |
|  2.2% |     119 | `doubleValue`      | `java.lang.Double`                            |
|  1.3% |      67 | `add`              | `java.util.ArrayList`                         |
|  1.0% |      51 | `checkIndex`       | `java.util.Objects`                           |
|  0.6% |      34 | `hash`             | `java.util.HashMap`                           |
|  0.5% |      26 | `grow`             | `java.util.ArrayList`                         |
|  0.3% |      17 | `merge`            | `java.util.HashMap`                           |
|  0.3% |      15 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
|  0.2% |      13 | `copyOf`           | `java.util.Arrays`                            |
|  0.1% |       6 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       6 | `putVal`           | `java.util.HashMap`                           |
|  0.1% |       4 | `runWorker`        | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       4 | `get`              | `java.util.ArrayList`                         |
|  0.1% |       4 | `entrySet`         | `java.util.HashMap`                           |
|  0.1% |       3 | `exec`             | `java.util.concurrent.RecursiveTask`          |
|  0.1% |       3 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       3 | `scan`             | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       3 | `forEach`          | `java.util.HashMap`                           |
| <0.1% |       2 | `join`             | `java.util.concurrent.ForkJoinTask`           |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.1% |      61 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                      | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
|  0.1% |       3 | `PhaseChaitin::build_ifg_virtual`             | `<unknown>` |
| <0.1% |       2 | `ciObjectFactory::get_metadata`               | `<unknown>` |
| <0.1% |       2 | `Node::is_CFG`                                | `<unknown>` |
| <0.1% |       2 | `PhaseIterGVN::transform_old`                 | `<unknown>` |
| <0.1% |       2 | `LIR_OpVisitState::visit`                     | `<unknown>` |
| <0.1% |       2 | `PhaseChaitin::Split`                         | `<unknown>` |
| <0.1% |       2 | `Type::cmp`                                   | `<unknown>` |
| <0.1% |       1 | `Compile::identify_useful_nodes`              | `<unknown>` |
| <0.1% |       1 | `BoolNode::Opcode`                            | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_late`             | `<unknown>` |
| <0.1% |       1 | `Compile::update_dead_node_list`              | `<unknown>` |
| <0.1% |       1 | `Node::latency`                               | `<unknown>` |
| <0.1% |       1 | `ciEnv::~ciEnv`                               | `<unknown>` |
| <0.1% |       1 | `ValueStack::ValueStack`                      | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::Dominators`                  | `<unknown>` |
| <0.1% |       1 | `Node::add_prec`                              | `<unknown>` |
| <0.1% |       1 | `Node::out_grow`                              | `<unknown>` |
| <0.1% |       1 | `TypeInstKlassPtr::eq`                        | `<unknown>` |
| <0.1% |       1 | `NTarjan::DFS`                                | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------- |
| 100.0% |     977 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |     977 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 96.6% |     824 | `Parker::park`          | `<unknown>` |
|  3.4% |      29 | `PlatformMonitor::wait` | `<unknown>` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     492 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     436 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 78.2% |     147 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 21.8% |      41 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     174 | `get`  | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     158 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     127 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

|     % | Samples | Caller       | Location                                                   |
| ----: | ------: | ------------ | ---------------------------------------------------------- |
| 93.3% |     111 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  6.7% |       8 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

|     % | Samples | Caller            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 98.5% |      66 | `add`             | `java.util.ArrayList`                                      |
|  1.5% |       1 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 67.2% |      41 | `merge`               | `java.util.HashMap`                                        |
| 21.3% |      13 | `grow`                | `java.util.ArrayList`                                      |
|  8.2% |       5 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.6% |       1 | `copyOf`              | `java.util.Arrays`                                         |
|  1.6% |       1 | `resize`              | `java.util.HashMap`                                        |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |      51 | `get`  | `java.util.ArrayList` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      47 | `Unsafe_Unpark` | `<unknown>` |

##### `hash` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 94.1% |      32 | `computeIfAbsent` | `java.util.HashMap` |
|  2.9% |       1 | `putMapEntries`   | `java.util.HashMap` |
|  2.9% |       1 | `merge`           | `java.util.HashMap` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                     | Location                   |
| ----: | ------: | -------------------------- | -------------------------- |
| 50.0% |      14 | `JVM_IHashCode`            | `<unknown>`                |
| 28.6% |       8 | `Unsafe_Park`              | `<unknown>`                |
|  7.1% |       2 | `Unsafe_Unpark`            | `<unknown>`                |
|  3.6% |       1 | `park`                     | `jdk.internal.misc.Unsafe` |
|  3.6% |       1 | `OptoRuntime::new_array_C` | `<unknown>`                |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller | Location              |
| ----: | ------: | ------ | --------------------- |
| 92.3% |      24 | `grow` | `java.util.ArrayList` |
|  7.7% |       2 | `add`  | `java.util.ArrayList` |

##### `_platform_bzero` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      25 | `MemAllocator::allocate` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      21 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 50.0% |      10 | `copyOf` | `java.util.Arrays`    |
| 40.0% |       8 | `grow`   | `java.util.ArrayList` |
| 10.0% |       2 | `merge`  | `java.util.HashMap`   |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 50.0% |      10 | `WorkerThread::run`              | `<unknown>` |
| 40.0% |       8 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |
| 10.0% |       2 | `WorkerThreads::run_task`        | `<unknown>` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 88.2% |      15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
|  5.9% |       1 | `G1FullGCMarker::publish_and_drain_oop_tasks`                   | `<unknown>` |
|  5.9% |       1 | `G1FullGCMarker::follow_marking_stacks`                         | `<unknown>` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |      17 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |      15 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 76.9% |      10 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| 15.4% |       2 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |
|  7.7% |       1 | `G1ScanHRForRegionClosure::scan_memregion`      | `<unknown>` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller    | Location              |
| ----: | ------: | --------- | --------------------- |
| 53.8% |       7 | `toArray` | `java.util.ArrayList` |
| 46.2% |       6 | `grow`    | `java.util.ArrayList` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 83.3% |       5 | `G1ParScanThreadState::steal_and_trim_queue` | `<unknown>` |
| 16.7% |       1 | `G1ScanHRForRegionClosure::scan_memregion`   | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       6 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       6 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `putVal` (`java.util.HashMap`)

|     % | Samples | Caller          | Location            |
| ----: | ------: | --------------- | ------------------- |
| 83.3% |       5 | `putMapEntries` | `java.util.HashMap` |
| 16.7% |       1 | `put`           | `java.util.HashMap` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Caller                | Location                   |
| ----: | ------: | --------------------- | -------------------------- |
| 80.0% |       4 | `park`                | `jdk.internal.misc.Unsafe` |
| 20.0% |       1 | `[break_stack_range]` | `<unknown>`                |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 60.0% |       3 | `arrayof_oop_disjoint_arraycopy`                   | `<unknown>` |
| 20.0% |       1 | `LoadKlassNode::make`                              | `<unknown>` |
| 20.0% |       1 | `ThreadLocalAllocBuffer::retire_before_allocation` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |       4 | `MemAllocator::allocate`                      | `<unknown>` |
| 20.0% |       1 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 80.0% |       4 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |
| 20.0% |       1 | `G1FullGCMarker::complete_marking`      | `<unknown>` |

##### `__psynch_mutexdrop` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |       5 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |

##### `G1RegionMarkStatsCache::add_live_words` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       4 | `G1FullGCMarker::mark_object` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       4 | `G1AdjustRegionClosure::do_heap_region` | `<unknown>` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |       4 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Caller                | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 50.0% |       2 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 25.0% |       1 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 25.0% |       1 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `entrySet` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |       4 | `putMapEntries` | `java.util.HashMap` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |       3 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |       3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001125b10` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       3 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       3 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       3 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       3 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `PhaseChaitin::build_ifg_virtual` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001183d68` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |       2 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `forkThreshold` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 50.0% |       1 | `ciReceiverTypeData::translate_receiver_data_from` | `<unknown>` |
| 50.0% |       1 | `ciEnv::get_klass_by_index_impl`                   | `<unknown>` |

##### `Node::is_CFG` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 50.0% |       1 | `IdealLoopTree::est_loop_clone_sz`   | `<unknown>` |
| 50.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `LIR_OpVisitState::visit` (`<unknown>`)

|     % | Samples | Caller                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 50.0% |       1 | `LinearScan::build_intervals` | `<unknown>` |
| 50.0% |       1 | `LinearScan::assign_reg_num`  | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Type::cmp` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |       2 | `Dict::Insert` | `<unknown>` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186d88`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       1 | `forEach` | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forkThreshold` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller          | Location                                                  |
| -----: | ------: | --------------- | --------------------------------------------------------- |
| 100.0% |       1 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       1 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |       1 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       1 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `BoolNode::Opcode` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compile::update_dead_node_list` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `PhaseCCP::transform` | `<unknown>` |

##### `Node::latency` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `Scheduling::AddNodeToBundle` | `<unknown>` |

##### `ciEnv::~ciEnv` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       1 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `ValueStack::ValueStack` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::append_with_bci` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Node::add_prec` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `Parse::do_one_bytecode` | `<unknown>` |

##### `Node::out_grow` (`<unknown>`)

|      % | Samples | Caller                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |       1 | `IdealKit::do_memory_merge` | `<unknown>` |

##### `TypeInstKlassPtr::eq` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       1 | `LoadNKlassNode::Value` | `<unknown>` |

##### `NTarjan::DFS` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::Dominators` | `<unknown>` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function              | Location                                                   |
| ----: | ------: | --------------------- | ---------------------------------------------------------- |
| 94.9% |   5,045 | `run`                 | `java.util.concurrent.ForkJoinWorkerThread`                |
| 94.9% |   5,044 | `runWorker`           | `java.util.concurrent.ForkJoinPool`                        |
| 88.0% |   4,676 | `scan`                | `java.util.concurrent.ForkJoinPool`                        |
| 87.8% |   4,668 | `topLevelExec`        | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 87.8% |   4,665 | `doExec`              | `java.util.concurrent.ForkJoinTask`                        |
| 87.2% |   4,633 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 87.2% |   4,633 | `exec`                | `java.util.concurrent.RecursiveTask`                       |
| 84.7% |   4,500 | `join`                | `java.util.concurrent.ForkJoinTask`                        |
| 84.7% |   4,499 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                        |
| 80.1% |   4,254 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 38.1% |   2,024 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 31.7% |   1,686 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 31.7% |   1,686 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 28.5% |   1,513 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 21.7% |   1,153 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`                        |
| 21.3% |   1,130 | `invoke`              | `java.util.concurrent.ForkJoinTask`                        |
| 20.5% |   1,088 | `accumulate`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.6% |     989 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 16.1% |     853 | `__psynch_cvwait`     | `<unknown>`                                                |
| 16.0% |     850 | `park`                | `jdk.internal.misc.Unsafe`                                 |

#### Categories

##### Ours

|     % | Samples | Function                 | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 87.2% |   4,633 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 38.1% |   2,024 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 31.7% |   1,686 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 31.7% |   1,686 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 28.5% |   1,513 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.5% |   1,088 | `accumulate`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 18.6% |     989 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 15.2% |     806 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.2% |     806 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.9% |     794 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 10.1% |     536 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 10.1% |     536 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001183d68` |
|  9.6% |     510 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.3% |     337 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.3% |     337 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.0% |     317 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186d88` |
|  5.9% |     316 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.2% |     222 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.2% |     222 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186fd0` |
|  0.7% |      38 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |

##### Native

|     % | Samples | Function                           | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 16.1% |     853 | `__psynch_cvwait`                  | `<unknown>` |
| 16.0% |     848 | `Unsafe_Park`                      | `<unknown>` |
| 15.7% |     834 | `Parker::park`                     | `<unknown>` |
|  4.1% |     219 | `_pthread_start`                   | `<unknown>` |
|  4.1% |     219 | `thread_start`                     | `<unknown>` |
|  4.1% |     218 | `Thread::call_run`                 | `<unknown>` |
|  4.1% |     218 | `thread_native_entry`              | `<unknown>` |
|  3.5% |     188 | `forward_copy_longs`               | `<unknown>` |
|  3.1% |     167 | `arrayof_jint_disjoint_arraycopy`  | `<unknown>` |
|  2.2% |     115 | `WorkerThread::run`                | `<unknown>` |
|  1.5% |      81 | `JavaThread::thread_main_inner`    | `<unknown>` |
|  1.1% |      56 | `Unsafe_Unpark`                    | `<unknown>` |
|  0.9% |      50 | `G1FullGCMarker::complete_marking` | `<unknown>` |
|  0.9% |      50 | `G1FullGCMarkTask::work`           | `<unknown>` |
|  0.9% |      47 | `__psynch_cvsignal`                | `<unknown>` |
|  0.9% |      46 | `arrayof_oop_disjoint_arraycopy`   | `<unknown>` |
|  0.8% |      43 | `_new_array_Java`                  | `<unknown>` |
|  0.8% |      41 | `OptoRuntime::new_array_C`         | `<unknown>` |
|  0.7% |      39 | `MemAllocator::allocate`           | `<unknown>` |
|  0.7% |      39 | `CollectedHeap::array_allocate`    | `<unknown>` |

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 94.9% |   5,045 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 94.9% |   5,044 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 88.0% |   4,676 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 87.8% |   4,668 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 87.8% |   4,665 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 87.2% |   4,633 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 84.7% |   4,500 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 84.7% |   4,499 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 80.1% |   4,254 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 21.7% |   1,153 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| 21.3% |   1,130 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 16.0% |     850 | `park`             | `jdk.internal.misc.Unsafe`                          |
| 15.6% |     830 | `park`             | `java.util.concurrent.locks.LockSupport`            |
| 10.1% |     536 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  6.8% |     363 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                 |
|  6.0% |     320 | `forEach`          | `java.util.HashMap`                                 |
|  5.9% |     315 | `merge`            | `java.util.HashMap`                                 |
|  4.3% |     229 | `get`              | `java.util.ArrayList`                               |
|  4.0% |     211 | `computeIfAbsent`  | `java.util.HashMap`                                 |
|  3.3% |     176 | `copyOf`           | `java.util.Arrays`                                  |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.1% |      61 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                   | Location    |
| ---: | ------: | ------------------------------------------ | ----------- |
| 1.5% |      81 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 1.3% |      69 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 1.1% |      57 | `Compile::Compile`                         | `<unknown>` |
| 1.1% |      57 | `C2Compiler::compile_method`               | `<unknown>` |
| 0.5% |      24 | `Compile::Code_Gen`                        | `<unknown>` |
| 0.4% |      20 | `Compile::Optimize`                        | `<unknown>` |
| 0.3% |      15 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
| 0.2% |      13 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
| 0.2% |      13 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
| 0.2% |      13 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 0.2% |      12 | `CompileQueue::get`                        | `<unknown>` |
| 0.2% |       9 | `Compilation::compile_java_method`         | `<unknown>` |
| 0.2% |       9 | `Compilation::compile_method`              | `<unknown>` |
| 0.2% |       9 | `Compilation::Compilation`                 | `<unknown>` |
| 0.1% |       7 | `PhaseOutput::Output`                      | `<unknown>` |
| 0.1% |       6 | `Compilation::emit_lir`                    | `<unknown>` |
| 0.1% |       5 | `PhaseIdealLoop::build_loop_late`          | `<unknown>` |
| 0.1% |       5 | `Compile::optimize_loops`                  | `<unknown>` |
| 0.1% |       4 | `CompilationPolicy::event`                 | `<unknown>` |
| 0.1% |       4 | `PhaseIterGVN::transform_old`              | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                     | Location                            |
| -----: | ------: | -------------------------- | ----------------------------------- |
| 100.0% |   5,044 | `runWorker`                | `java.util.concurrent.ForkJoinPool` |
|  <0.1% |       1 | `I2C/C2I adapters(0xbbaa)` | `<unknown>`                         |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                   | Location                            |
| ----: | ------: | ------------------------ | ----------------------------------- |
| 92.7% |   4,676 | `scan`                   | `java.util.concurrent.ForkJoinPool` |
|  7.2% |     363 | `awaitWork`              | `java.util.concurrent.ForkJoinPool` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)` | `<unknown>`                         |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 99.8% |   4,668 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       3 | `signalWork`       | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `UncommonTrapBlob` | `<unknown>`                                   |
| <0.1% |       1 | `casSlotToNull`    | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Callee    | Location                                      |
| ----: | ------: | --------- | --------------------------------------------- |
| 99.9% |   4,665 | `doExec`  | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       3 | `tryPoll` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee    | Location                                            |
| ----: | ------: | --------- | --------------------------------------------------- |
| 99.3% |   4,633 | `exec`    | `java.util.concurrent.RecursiveTask`                |
| 11.5% |     536 | `exec`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.0% |      45 | `setDone` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 97.1% |   4,500 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 43.7% |   2,024 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 36.4% |   1,686 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.4% |     806 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.3% |     337 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |   4,633 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee              | Location                             |
| -----: | ------: | ------------------- | ------------------------------------ |
| 100.0% |   4,499 | `awaitDone`         | `java.util.concurrent.ForkJoinTask`  |
|  <0.1% |       1 | `wrong_method_stub` | `<unknown>`                          |
|  <0.1% |       1 | `getRawResult`      | `java.util.concurrent.RecursiveTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 94.6% |   4,254 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 25.6% |   1,153 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
| 10.9% |     489 | `park`             | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `interrupted`      | `java.lang.Thread`                            |
| <0.1% |       1 | `signalWaiters`    | `java.util.concurrent.ForkJoinTask`           |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee            | Location                                      |
| -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% |   4,254 | `doExec`          | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       2 | `getAndClearSlot` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |   2,023 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  74.8% |   1,513 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  25.2% |     510 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                                           | Location                                                  |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------- |
| 64.5% |   1,088 | `accumulate`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  6.2% |     104 | `get`                                            | `java.util.ArrayList`                                     |
|  0.1% |       2 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                                               |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |   1,686 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |   1,686 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                  | Location                                                   |
| ----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 65.4% |     989 | `distance`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  5.3% |      80 | `get`                   | `java.util.ArrayList`                                      |
|  0.3% |       5 | `zero_blocks`           | `<unknown>`                                                |
|  0.1% |       2 | `SafepointBlob`         | `<unknown>`                                                |
|  0.1% |       1 | `nmethod_entry_barrier` | `<unknown>`                                                |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee          | Location                            |
| ----: | ------: | --------------- | ----------------------------------- |
| 98.6% |   1,137 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
|  0.7% |       8 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 99.9% |   1,129 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 10.2% |     111 | `doubleValue` | `java.lang.Double` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 0.8% |       8 | `doubleValue`   | `java.lang.Double` |
| 0.4% |       4 | `SafepointBlob` | `<unknown>`        |

##### `park` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 99.6% |     847 | `Unsafe_Park`                    | `<unknown>` |
|  0.1% |       1 | `JavaThread::threadObj`          | `<unknown>` |
|  0.1% |       1 | `pthread_jit_write_protect_np`   | `<unknown>` |
|  0.1% |       1 | `JavaFrameAnchor::make_walkable` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 98.3% |     834 | `Parker::park`                 | `<unknown>` |
|  0.9% |       8 | `pthread_jit_write_protect_np` | `<unknown>` |
|  0.1% |       1 | `JavaThread::threadObj`        | `<unknown>` |

##### `Parker::park` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 98.8% |     824 | `__psynch_cvwait`                                                                                                                                          | `<unknown>` |
|  0.4% |       3 | `_pthread_cond_wait`                                                                                                                                       | `<unknown>` |
|  0.2% |       2 | `SafepointMechanism::process`                                                                                                                              | `<unknown>` |
|  0.1% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `<unknown>` |
|  0.1% |       1 | `stub:pthread_mutex_unlock`                                                                                                                                | `<unknown>` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Callee | Location                   |
| ----: | ------: | ------ | -------------------------- |
| 99.9% |     829 | `park` | `jdk.internal.misc.Unsafe` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 98.5% |     794 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.1% |       9 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.2% |       2 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     806 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     806 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |     794 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------- |
| 99.4% |     533 | `invoke` | `java.util.concurrent.ForkJoinTask`                        |
|  0.2% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |     536 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |     536 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001183d68` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 41.4% |     211 | `computeIfAbsent`    | `java.util.HashMap`   |
| 24.5% |     125 | `add`                | `java.util.ArrayList` |
|  8.8% |      45 | `get`                | `java.util.ArrayList` |
|  0.2% |       1 | `_new_instance_Java` | `<unknown>`           |
|  0.2% |       1 | `<init>`             | `java.util.HashMap`   |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee      | Location                                 |
| ----: | ------: | ----------- | ---------------------------------------- |
| 93.9% |     341 | `park`      | `java.util.concurrent.locks.LockSupport` |
|  5.8% |      21 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee    | Location            |
| ----: | ------: | --------- | ------------------- |
| 95.0% |     320 | `forEach` | `java.util.HashMap` |
|  5.0% |      17 | `<init>`  | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 99.7% |     336 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 99.7% |     336 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach` (`java.util.HashMap`)

|     % | Samples | Callee   | Location                                                               |
| ----: | ------: | -------- | ---------------------------------------------------------------------- |
| 99.1% |     317 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186d88`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 99.7% |     316 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee         | Location                               |
| ----: | ------: | -------------- | -------------------------------------- |
| 99.7% |     315 | `merge`        | `java.util.HashMap`                    |
|  0.3% |       1 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `merge` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 70.5% |     222 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186fd0` |
| 13.0% |      41 | `zero_blocks`                     | `<unknown>`                                                            |
| 10.5% |      33 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  0.3% |       1 | `resize`                          | `java.util.HashMap`                                                    |
|  0.3% |       1 | `hash`                            | `java.util.HashMap`                                                    |

##### `get` (`java.util.ArrayList`)

|     % | Samples | Callee        | Location              |
| ----: | ------: | ------------- | --------------------- |
| 76.0% |     174 | `elementData` | `java.util.ArrayList` |
| 22.3% |      51 | `checkIndex`  | `java.util.Objects`   |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 67.6% |     150 | `addAll` | `java.util.ArrayList` |
| 32.4% |      72 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001186fd0`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     222 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.5% |     218 | `thread_native_entry` | `<unknown>` |
|  0.5% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     219 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 52.8% |     115 | `WorkerThread::run`             | `<unknown>` |
| 37.2% |      81 | `JavaThread::thread_main_inner` | `<unknown>` |
|  4.1% |       9 | `VMThread::run`                 | `<unknown>` |
|  3.2% |       7 | `WatcherThread::run`            | `<unknown>` |
|  2.8% |       6 | `ConcurrentGCThread::run`       | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     218 | `Thread::call_run` | `<unknown>` |

##### `computeIfAbsent` (`java.util.HashMap`)

|     % | Samples | Callee                     | Location            |
| ----: | ------: | -------------------------- | ------------------- |
| 22.7% |      48 | `hash`                     | `java.util.HashMap` |
|  0.9% |       2 | `resize`                   | `java.util.HashMap` |
|  0.5% |       1 | `wrong_method_stub`        | `<unknown>`         |
|  0.5% |       1 | `afterNodeAccess`          | `java.util.HashMap` |
|  0.5% |       1 | `resolve_opt_virtual_call` | `<unknown>`         |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 67.6% |     119 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 24.4% |      43 | `_new_array_Java`                 | `<unknown>` |
|  0.6% |       1 | `zero_blocks`                     | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 88.0% |     147 | `forward_copy_longs` | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 43.5% |      50 | `G1FullGCMarkTask::work`          | `<unknown>` |
| 32.2% |      37 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  8.7% |      10 | `semaphore_wait_trap`             | `<unknown>` |
|  7.8% |       9 | `G1FullGCAdjustTask::work`        | `<unknown>` |
|  2.6% |       3 | `G1PrepareEvacuationTask::work`   | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      81 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 85.2% |      69 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 14.8% |      12 | `CompileQueue::get`                        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 82.6% |      57 | `C2Compiler::compile_method`  | `<unknown>` |
| 13.0% |       9 | `Compiler::compile_method`    | `<unknown>` |
|  1.4% |       1 | `ciEnv::~ciEnv`               | `<unknown>` |
|  1.4% |       1 | `CompilationLog::log_compile` | `<unknown>` |
|  1.4% |       1 | `ciEnv::ciEnv`                | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 42.1% |      24 | `Compile::Code_Gen`         | `<unknown>` |
| 35.1% |      20 | `Compile::Optimize`         | `<unknown>` |
| 19.3% |      11 | `ParseGenerator::generate`  | `<unknown>` |
|  1.8% |       1 | `CallGenerator::for_inline` | `<unknown>` |
|  1.8% |       1 | `TypeFunc::make`            | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      57 | `Compile::Compile` | `<unknown>` |

##### `Unsafe_Unpark` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 83.9% |      47 | `__psynch_cvsignal`            | `<unknown>` |
|  3.6% |       2 | `pthread_cond_signal`          | `<unknown>` |
|  3.6% |       2 | `Parker::unpark`               | `<unknown>` |
|  3.6% |       2 | `pthread_jit_write_protect_np` | `<unknown>` |
|  1.8% |       1 | `os::current_thread_enable_wx` | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|     % | Samples | Callee                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| 54.0% |      27 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `<unknown>` |
| 22.0% |      11 | `TaskTerminator::offer_termination`                                                                        | `<unknown>` |
| 20.0% |      10 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `<unknown>` |
|  4.0% |       2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      50 | `G1FullGCMarker::complete_marking` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 89.1% |      41 | `forward_copy_longs` | `<unknown>` |
|  6.5% |       3 | `tlv_get_addr`       | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 95.3% |      41 | `OptoRuntime::new_array_C`     | `<unknown>` |
|  2.3% |       1 | `ClassLoaderData::holder`      | `<unknown>` |
|  2.3% |       1 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `OptoRuntime::new_array_C` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 92.7% |      38 | `InstanceKlass::allocate_objArray` | `<unknown>` |
|  2.4% |       1 | `ObjArrayKlass::array_klass`       | `<unknown>` |
|  2.4% |       1 | `CollectedHeap::array_allocate`    | `<unknown>` |
|  2.4% |       1 | `pthread_jit_write_protect_np`     | `<unknown>` |

##### `MemAllocator::allocate` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 64.1% |      25 | `_platform_bzero`                             | `<unknown>` |
| 15.4% |       6 | `MemAllocator::mem_allocate_inside_tlab_slow` | `<unknown>` |
| 10.3% |       4 | `_platform_memset`                            | `<unknown>` |
|  5.1% |       2 | `G1CollectedHeap::mem_allocate`               | `<unknown>` |
|  2.6% |       1 | `MemAllocator::Allocation::notify_allocation` | `<unknown>` |

##### `CollectedHeap::array_allocate` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 97.4% |      38 | `MemAllocator::allocate` | `<unknown>` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 94.7% |      36 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
|  2.6% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher`     |
|  2.6% |       1 | `create`                    | `org.renaissance.core.ModuleLoader` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 54.2% |      13 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 29.2% |       7 | `PhaseOutput::Output`             | `<unknown>` |
|  8.3% |       2 | `Matcher::match`                  | `<unknown>` |
|  8.3% |       2 | `PhaseOutput::install_code`       | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 50.0% |      10 | `PhaseIdealLoop::optimize` | `<unknown>` |
| 25.0% |       5 | `Compile::optimize_loops`  | `<unknown>` |
| 10.0% |       2 | `PhaseIterGVN::optimize`   | `<unknown>` |
|  5.0% |       1 | `PhaseCCP::do_transform`   | `<unknown>` |
|  5.0% |       1 | `PhaseCCP::PhaseCCP`       | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 86.7% |      13 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 13.3% |       2 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 38.5% |       5 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |
| 15.4% |       2 | `PhaseIdealLoop::Dominators`      | `<unknown>` |
|  7.7% |       1 | `IdealLoopTree::iteration_split`  | `<unknown>` |
|  7.7% |       1 | `PhaseIdealLoop::build_loop_tree` | `<unknown>` |
|  7.7% |       1 | `RegionNode::pinned`              | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      13 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 23.1% |       3 | `PhaseChaitin::build_ifg_virtual`          | `<unknown>` |
| 23.1% |       3 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 15.4% |       2 | `PhaseChaitin::Split`                      | `<unknown>` |
|  7.7% |       1 | `PhaseLive::compute`                       | `<unknown>` |
|  7.7% |       1 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|      % | Samples | Callee          | Location    |
| -----: | ------: | --------------- | ----------- |
| 100.0% |      12 | `Monitor::wait` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 66.7% |       6 | `Compilation::emit_lir`        | `<unknown>` |
| 11.1% |       1 | `ciMethod::ensure_method_data` | `<unknown>` |
| 11.1% |       1 | `Compilation::build_hir`       | `<unknown>` |
| 11.1% |       1 | `Compilation::emit_code_body`  | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       9 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       9 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 42.9% |       3 | `PhaseOutput::fill_buffer`      | `<unknown>` |
| 28.6% |       2 | `Scheduling::DoScheduling`      | `<unknown>` |
| 14.3% |       1 | `PhaseOutput::shorten_branches` | `<unknown>` |
| 14.3% |       1 | `branchNode::label_set`         | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 66.7% |       4 | `LinearScan::do_linear_scan` | `<unknown>` |
| 33.3% |       2 | `BlockList::iterate_forward` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 60.0% |       3 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 20.0% |       1 | `BoolNode::Opcode`                          | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       5 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `CompilationPolicy::event` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 50.0% |       2 | `CompileBroker::compile_method`               | `<unknown>` |
| 25.0% |       1 | `CompilationPolicy::method_back_branch_event` | `<unknown>` |
| 25.0% |       1 | `CompilationPolicy::call_event`               | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee              | Location    |
| ----: | ------: | ------------------- | ----------- |
| 25.0% |       1 | `AddNode::Identity` | `<unknown>` |
| 25.0% |       1 | `CmpPNode::Opcode`  | `<unknown>` |
| 25.0% |       1 | `IfNode::Ideal`     | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.2% |     330 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.0% |     158 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.9% |     153 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.4% |     130 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |     119 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.0% |     108 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      90 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |
| 1.6% |      84 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.5% |      79 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      72 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |      69 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |      68 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |      67 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2% |      65 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |      59 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% |      59 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |      57 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |      51 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% |      50 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.9% |      50 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

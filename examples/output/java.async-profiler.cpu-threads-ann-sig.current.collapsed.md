# Sampling profile

Collected 4,556 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 60.6% |   2,762 |
| Native           | 23.2% |   1,055 |
| Standard library | 13.8% |     628 |
| Compiler         |  1.2% |      56 |
| JIT              |  1.2% |      55 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 22.0% |   1,003 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.6% |     801 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 13.0% |     593 | `__psynch_cvwait`                                         | `<unknown>`                                                |
| 10.6% |     484 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  8.1% |     371 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.2% |     192 | `forward_copy_longs`                                      | `<unknown>`                                                |
|  4.1% |     186 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  2.5% |     114 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  2.3% |     103 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  1.9% |      87 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.1% |      52 | `zero_blocks`                                             | `<unknown>`                                                |
|  1.1% |      50 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|  0.9% |      42 | `__psynch_cvsignal`                                       | `<unknown>`                                                |
|  0.6% |      28 | `hash(Object)`                                            | `java.util.HashMap`                                        |
|  0.5% |      23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  0.5% |      22 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  0.4% |      19 | `checkIndex(int, int)`                                    | `java.util.Objects`                                        |
|  0.4% |      17 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                |
|  0.3% |      15 | `semaphore_wait_trap`                                     | `<unknown>`                                                |
|  0.3% |      12 | `_platform_bzero`                                         | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                                              |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| 22.0% |   1,003 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 17.6% |     801 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 10.6% |     484 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  8.1% |     371 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  1.9% |      87 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.1% |       5 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| <0.1% |       2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| <0.1% |       1 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| <0.1% |       1 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| <0.1% |       1 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| <0.1% |       1 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Native

|     % | Samples | Function                                                                                             | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 13.0% |     593 | `__psynch_cvwait`                                                                                    | `<unknown>` |
|  4.2% |     192 | `forward_copy_longs`                                                                                 | `<unknown>` |
|  0.9% |      42 | `__psynch_cvsignal`                                                                                  | `<unknown>` |
|  0.4% |      17 | `arrayof_jint_disjoint_arraycopy`                                                                    | `<unknown>` |
|  0.3% |      15 | `semaphore_wait_trap`                                                                                | `<unknown>` |
|  0.3% |      12 | `_platform_bzero`                                                                                    | `<unknown>` |
|  0.2% |      11 | `pthread_jit_write_protect_np`                                                                       | `<unknown>` |
|  0.2% |      10 | `_platform_memset`                                                                                   | `<unknown>` |
|  0.2% |      10 | `__psynch_mutexwait`                                                                                 | `<unknown>` |
|  0.2% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`              | `<unknown>` |
|  0.2% |       8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` | `<unknown>` |
|  0.2% |       7 | `G1FullGCMarker::mark_object(oopDesc*)`                                                              | `<unknown>` |
|  0.1% |       6 | `_sigtramp`                                                                                          | `<unknown>` |
|  0.1% |       5 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>(G1CMBitMap*, G1AdjustLiveClosure*)`   | `<unknown>` |
|  0.1% |       5 | `inflate_fast`                                                                                       | `<unknown>` |
|  0.1% |       4 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                      | `<unknown>` |
|  0.1% |       4 | `mach_absolute_time`                                                                                 | `<unknown>` |
|  0.1% |       4 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)`                                                   | `<unknown>` |
|  0.1% |       3 | `arrayof_oop_disjoint_arraycopy`                                                                     | `<unknown>` |
|  0.1% |       3 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                                              | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  4.1% |     186 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  2.5% |     114 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  2.3% |     103 | `doubleValue()`                                           | `java.lang.Double`                            |
|  1.1% |      50 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  0.6% |      28 | `hash(Object)`                                            | `java.util.HashMap`                           |
|  0.5% |      23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.5% |      22 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  0.4% |      19 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|  0.2% |       7 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|  0.1% |       6 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  0.1% |       5 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       5 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       4 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
|  0.1% |       4 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       3 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       2 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| <0.1% |       2 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       2 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       2 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`             |

##### Compiler

|     % | Samples | Function                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| <0.1% |       2 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)`                                  | `<unknown>` |
| <0.1% |       2 | `PhaseIdealLoop::Dominators()`                                                          | `<unknown>` |
| <0.1% |       1 | `Node::add_req(Node*)`                                                                  | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                      | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`            | `<unknown>` |
| <0.1% |       1 | `PhaseChaitin::post_allocate_copy_removal()`                                            | `<unknown>` |
| <0.1% |       1 | `BlockListBuilder::make_block_at(int, BlockBegin*)`                                     | `<unknown>` |
| <0.1% |       1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)`                       | `<unknown>` |
| <0.1% |       1 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                              | `<unknown>` |
| <0.1% |       1 | `lShiftI_reg_immNode::emit(CodeBuffer&, PhaseRegAlloc*) const`                          | `<unknown>` |
| <0.1% |       1 | `MethodLiveness::BasicBlock::compute_gen_kill_range(ciBytecodeStream*)`                 | `<unknown>` |
| <0.1% |       1 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
| <0.1% |       1 | `IfTrueNode::Opcode() const`                                                            | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)`              | `<unknown>` |
| <0.1% |       1 | `IfNode::Ideal(PhaseGVN*, bool)`                                                        | `<unknown>` |
| <0.1% |       1 | `Node::uncast(bool) const`                                                              | `<unknown>` |
| <0.1% |       1 | `ConNode::make(Type const*)`                                                            | `<unknown>` |
| <0.1% |       1 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                     | `<unknown>` |
| <0.1% |       1 | `PhaseIFG::re_insert(unsigned int)`                                                     | `<unknown>` |
| <0.1% |       1 | `MergeMemNode::Opcode() const`                                                          | `<unknown>` |

##### JIT

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
|  1.1% |      52 | `zero_blocks`            | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xa)`  | `<unknown>` |
| <0.1% |       1 | `vtable stub`            | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |   1,003 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     801 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 96.0% |     569 | `Parker::park(bool, long)`                  | `<unknown>` |
|  4.0% |      24 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     484 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     371 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 80.7% |     155 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 19.3% |      37 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     186 | `get(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     114 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 92.2% |      95 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.8% |       8 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      87 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 55.8% |      29 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 30.8% |      16 | `grow(int)`                         | `java.util.ArrayList`                                      |
| 11.5% |       6 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.9% |       1 | `<init>(Collection)`                | `java.util.ArrayList`                                      |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      50 | `add(Object)` | `java.util.ArrayList` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      42 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `hash(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 96.4% |      27 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|  3.6% |       1 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      23 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      22 | `grow()` | `java.util.ArrayList` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      19 | `get(int)` | `java.util.ArrayList` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 58.8% |      10 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 29.4% |       5 | `grow(int)`                         | `java.util.ArrayList` |
| 11.8% |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 73.3% |      11 | `WorkerThread::run()`                 | `<unknown>` |
| 26.7% |       4 | `GenericWaitBarrier::Cell::wait(int)` | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      12 | `MemAllocator::allocate() const` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 36.4% |       4 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>` |
| 18.2% |       2 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`         | `<unknown>` |
| 18.2% |       2 | `_new_array_Java`                                       | `<unknown>` |
|  9.1% |       1 | `JVM_IsArrayClass`                                      | `<unknown>` |
|  9.1% |       1 | `JVM_IHashCode`                                         | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 50.0% |       5 | `MemAllocator::allocate() const`                                               | `<unknown>` |
| 30.0% |       3 | `G1BatchedTask::work(unsigned int)`                                            | `<unknown>` |
| 10.0% |       1 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |
| 10.0% |       1 | `Dict::Insert(void*, void*, bool)`                                             | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      10 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 87.5% |       7 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`       | `<unknown>` |
| 12.5% |       1 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                           | Location    |
| -----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 100.0% |       8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `G1FullGCMarker::mark_object(oopDesc*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 85.7% |       6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                                                                                                    | `<unknown>` |
| 14.3% |       1 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |       7 | `toArray()` | `java.util.ArrayList` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       6 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>(G1CMBitMap*, G1AdjustLiveClosure*)` (`<unknown>`)

|      % | Samples | Caller                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |       5 | `G1AdjustRegionClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       5 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks()` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       4 | `G1FullGCMarker::follow_marking_stacks()` | `<unknown>` |

##### `mach_absolute_time` (`<unknown>`)

|     % | Samples | Caller                  | Location                                    |
| ----: | ------: | ----------------------- | ------------------------------------------- |
| 50.0% |       2 | `os::elapsed_counter()` | `<unknown>`                                 |
| 25.0% |       1 | `gettimeofday`          | `<unknown>`                                 |
| 25.0% |       1 | `getVmStartNanos()`     | `org.renaissance.harness.RenaissanceSuite$` |

##### `G1RegionMarkStatsCache::add_live_words(oopDesc*)` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       4 | `G1FullGCMarker::mark_object(oopDesc*)` | `<unknown>` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       4 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       4 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller               | Location              |
| -----: | ------: | -------------------- | --------------------- |
| 100.0% |       3 | `addAll(Collection)` | `java.util.ArrayList` |

##### `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` (`<unknown>`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |       3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       3 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       2 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                 | Location                            |
| ----: | ------: | ---------------------- | ----------------------------------- |
| 50.0% |       1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |
| 50.0% |       1 | `setDone()`            | `java.util.concurrent.ForkJoinTask` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |       2 | `grow(int)` | `java.util.ArrayList` |

##### `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       2 | `PhaseOutput::Output()` | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                  | Location                                                               |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `Node::add_req(Node*)` (`<unknown>`)

|      % | Samples | Caller                                                                                       | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `BlockListBuilder::make_block_at(int, BlockBegin*)` (`<unknown>`)

|      % | Samples | Caller                                                            | Location    |
| -----: | ------: | ----------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` | `<unknown>` |

##### `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` (`<unknown>`)

|      % | Samples | Caller                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |       1 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `PhaseIterGVN::subsume_node(Node*, Node*)` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |

##### `lShiftI_reg_immNode::emit(CodeBuffer&, PhaseRegAlloc*) const` (`<unknown>`)

|      % | Samples | Caller                                                 | Location    |
| -----: | ------: | ------------------------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` | `<unknown>` |

##### `MethodLiveness::BasicBlock::compute_gen_kill_range(ciBytecodeStream*)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `MethodLiveness::BasicBlock::get_liveness_at(ciMethod*, int)` | `<unknown>` |

##### `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       1 | `Parse::do_call()` | `<unknown>` |

##### `IfTrueNode::Opcode() const` (`<unknown>`)

|      % | Samples | Caller                                                                    | Location    |
| -----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)` | `<unknown>` |

##### `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `IfNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |

##### `Node::uncast(bool) const` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       1 | `SubNode::Value(PhaseGVN*) const` | `<unknown>` |

##### `ConNode::make(Type const*)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseValues::uncached_makecon(Type const*)` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                                                                     | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `PhaseIFG::re_insert(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `PhaseChaitin::Select()` | `<unknown>` |

##### `MergeMemNode::Opcode() const` (`<unknown>`)

|      % | Samples | Caller                                                                  | Location    |
| -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const` | `<unknown>` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller              | Location                     |
| -----: | ------: | ------------------- | ---------------------------- |
| 100.0% |       1 | `boxToInteger(int)` | `scala.runtime.BoxesRunTime` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|      % | Samples | Caller                     | Location                |
| -----: | ------: | -------------------------- | ----------------------- |
| 100.0% |       1 | `getInputStream(ZipEntry)` | `java.util.zip.ZipFile` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 94.7% |   4,313 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 94.7% |   4,313 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 89.8% |   4,093 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 89.8% |   4,090 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 89.8% |   4,090 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 89.3% |   4,068 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 89.3% |   4,068 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 86.2% |   3,927 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 86.2% |   3,925 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 82.5% |   3,760 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 37.1% |   1,688 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 37.1% |   1,688 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 35.8% |   1,629 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 27.0% |   1,231 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 24.1% |   1,098 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.9% |   1,000 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 21.3% |     971 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 17.8% |     810 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 16.1% |     732 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 16.1% |     732 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

##### Ours

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 89.3% |   4,068 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 37.1% |   1,688 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 37.1% |   1,688 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.8% |   1,629 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 27.0% |   1,231 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 24.1% |   1,098 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 17.8% |     810 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 16.1% |     732 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 16.1% |     732 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 16.0% |     728 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.2% |     419 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.2% |     419 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |
|  8.7% |     398 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.4% |     291 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.4% |     291 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.3% |     289 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.1% |     277 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.1% |     277 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
|  4.3% |     194 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  4.3% |     194 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |

##### Native

|     % | Samples | Function                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 13.0% |     593 | `__psynch_cvwait`                                                                                                                                                                                                                   | `<unknown>` |
| 12.8% |     581 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                                                                                                                                                                             | `<unknown>` |
| 12.5% |     571 | `Parker::park(bool, long)`                                                                                                                                                                                                          | `<unknown>` |
|  4.2% |     192 | `thread_native_entry(Thread*)`                                                                                                                                                                                                      | `<unknown>` |
|  4.2% |     192 | `_pthread_start`                                                                                                                                                                                                                    | `<unknown>` |
|  4.2% |     192 | `thread_start`                                                                                                                                                                                                                      | `<unknown>` |
|  4.2% |     192 | `forward_copy_longs`                                                                                                                                                                                                                | `<unknown>` |
|  4.2% |     191 | `Thread::call_run()`                                                                                                                                                                                                                | `<unknown>` |
|  3.8% |     172 | `arrayof_jint_disjoint_arraycopy`                                                                                                                                                                                                   | `<unknown>` |
|  2.0% |      90 | `JavaThread::thread_main_inner()`                                                                                                                                                                                                   | `<unknown>` |
|  1.9% |      87 | `WorkerThread::run()`                                                                                                                                                                                                               | `<unknown>` |
|  1.0% |      44 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                                                                                                                                                                                     | `<unknown>` |
|  0.9% |      42 | `arrayof_oop_disjoint_arraycopy`                                                                                                                                                                                                    | `<unknown>` |
|  0.9% |      42 | `__psynch_cvsignal`                                                                                                                                                                                                                 | `<unknown>` |
|  0.6% |      28 | `_new_array_Java`                                                                                                                                                                                                                   | `<unknown>` |
|  0.6% |      27 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |
|  0.6% |      27 | `G1FullGCMarkTask::work(unsigned int)`                                                                                                                                                                                              | `<unknown>` |
|  0.6% |      26 | `MemAllocator::allocate() const`                                                                                                                                                                                                    | `<unknown>` |
|  0.6% |      26 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)`                                                                                                                                                      | `<unknown>` |
|  0.6% |      26 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                                                                                                                                                                           | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 94.7% |   4,313 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 94.7% |   4,313 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 89.8% |   4,093 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 89.8% |   4,090 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 89.8% |   4,090 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 89.3% |   4,068 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 86.2% |   3,927 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 86.2% |   3,925 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 82.5% |   3,760 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 21.9% |   1,000 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 21.3% |     971 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 12.8% |     583 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| 12.7% |     577 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
|  9.2% |     419 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  6.1% |     278 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  6.1% |     276 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  4.7% |     215 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  4.5% |     205 | `get(int)`                                                | `java.util.ArrayList`                               |
|  4.1% |     186 | `elementData(int)`                                        | `java.util.ArrayList`                               |
|  3.2% |     147 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |

##### Compiler

|    % | Samples | Function                                                                                                | Location    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 2.0% |      90 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 1.7% |      77 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 1.3% |      61 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 1.3% |      60 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 0.7% |      31 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 0.4% |      18 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 0.3% |      15 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 0.3% |      15 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 0.3% |      13 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 0.3% |      13 | `CompileQueue::get(CompilerThread*)`                                                                    | `<unknown>` |
| 0.3% |      12 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 0.2% |       9 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 0.2% |       8 | `PhaseOutput::Output()`                                                                                 | `<unknown>` |
| 0.1% |       6 | `Compilation::build_hir()`                                                                              | `<unknown>` |
| 0.1% |       6 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
| 0.1% |       6 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 0.1% |       6 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 0.1% |       5 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
| 0.1% |       5 | `PhaseCFG::global_code_motion()`                                                                        | `<unknown>` |
| 0.1% |       5 | `PhaseCFG::do_global_code_motion()`                                                                     | `<unknown>` |

##### JIT

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
|  1.1% |      52 | `zero_blocks`            | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xa)`  | `<unknown>` |
| <0.1% |       1 | `vtable stub`            | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 94.9% |   4,093 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
|  5.0% |     215 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   4,313 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.9% |   4,090 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       1 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                 | Location                                            |
| ----: | ------: | ---------------------- | --------------------------------------------------- |
| 99.5% |   4,068 | `exec()`               | `java.util.concurrent.RecursiveTask`                |
| 10.2% |     419 | `exec()`               | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.9% |      36 | `setDone()`            | `java.util.concurrent.ForkJoinTask`                 |
| <0.1% |       1 | `resolve_virtual_call` | `<unknown>`                                         |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   4,090 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 96.5% |   3,927 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 41.5% |   1,688 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 40.0% |   1,629 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 18.0% |     732 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.2% |     291 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,068 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                 | Location                             |
| ----: | ------: | ---------------------- | ------------------------------------ |
| 99.9% |   3,925 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
|  0.1% |       2 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |
| <0.1% |       1 | `vtable stub`          | `<unknown>`                          |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 95.8% |   3,760 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 25.5% |   1,000 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  9.5% |     371 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   3,760 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 65.0% |   1,098 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  6.3% |     106 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |   1,688 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |   1,688 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |   1,629 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.6% |   1,231 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.4% |     398 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 65.8% |     810 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.2% |      40 | `get(int)`                       | `java.util.ArrayList`                                      |
|  0.5% |       6 | `zero_blocks`                    | `<unknown>`                                                |
|  0.2% |       2 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |
|  0.1% |       1 | `size()`                         | `java.util.ArrayList`                                      |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 8.7% |      95 | `doubleValue()` | `java.lang.Double` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 97.9% |     979 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  0.7% |       7 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     971 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.0% |       8 | `doubleValue()` | `java.lang.Double` |
| 0.1% |       1 | `SafepointBlob` | `<unknown>`        |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.5% |     728 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.5% |       4 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     732 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     732 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     728 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.7% |     581 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                                                                                                           | `<unknown>` |
|  0.2% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier(void*)` | `<unknown>` |
|  0.2% |       1 | `JavaThreadParkedState::JavaThreadParkedState(JavaThread*, bool)`                                                                                                 | `<unknown>` |

##### `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 98.3% |     571 | `Parker::park(bool, long)`         | `<unknown>` |
|  0.7% |       4 | `pthread_jit_write_protect_np`     | `<unknown>` |
|  0.2% |       1 | `JavaThread::threadObj() const`    | `<unknown>` |
|  0.2% |       1 | `pthread_mutex_trylock`            | `<unknown>` |
|  0.2% |       1 | `JavaThread::is_interrupted(bool)` | `<unknown>` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     577 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Parker::park(bool, long)` (`<unknown>`)

|     % | Samples | Callee                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 99.6% |     569 | `__psynch_cvwait`       | `<unknown>` |
|  0.2% |       1 | `__gettimeofday`        | `<unknown>` |
|  0.2% |       1 | `__psynch_cvclrprepost` | `<unknown>` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 99.5% |     417 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|  0.2% |       1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     419 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     419 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location                           |
| ----: | ------: | ----------------------------------- | ---------------------------------- |
| 36.2% |     144 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                |
| 26.1% |     104 | `add(Object)`                       | `java.util.ArrayList`              |
| 14.8% |      59 | `get(int)`                          | `java.util.ArrayList`              |
|  0.5% |       2 | `linkToTargetMethod(Object)`        | `java.lang.invoke.Invokers$Holder` |
|  0.5% |       2 | `SafepointBlob`                     | `<unknown>`                        |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 95.5% |     278 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  4.5% |      13 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                     | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 99.3% |     289 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     289 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 99.6% |     277 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.6% |     276 | `merge(Object, Object, BiFunction)`                              | `java.util.HashMap`                    |
|  0.4% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`)

|      % | Samples | Callee                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |     277 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 70.3% |     194 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |
| 17.0% |      47 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| 10.5% |      29 | `zero_blocks`                     | `<unknown>`                                                            |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 95.8% |     206 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  2.8% |       6 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `get(int)` (`java.util.ArrayList`)

|     % | Samples | Callee                 | Location              |
| ----: | ------: | ---------------------- | --------------------- |
| 90.7% |     186 | `elementData(int)`     | `java.util.ArrayList` |
|  9.3% |      19 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 63.4% |     123 | `addAll(Collection)` | `java.util.ArrayList` |
| 36.1% |      70 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`)

|      % | Samples | Callee                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |     194 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|     % | Samples | Callee                                                      | Location    |
| ----: | ------: | ----------------------------------------------------------- | ----------- |
| 99.5% |     191 | `Thread::call_run()`                                        | `<unknown>` |
|  0.5% |       1 | `Monitor::wait_without_safepoint_check(unsigned long long)` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Callee                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |     192 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     192 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 47.1% |      90 | `JavaThread::thread_main_inner()` | `<unknown>` |
| 45.5% |      87 | `WorkerThread::run()`             | `<unknown>` |
|  4.7% |       9 | `ConcurrentGCThread::run()`       | `<unknown>` |
|  2.1% |       4 | `VMThread::run()`                 | `<unknown>` |
|  0.5% |       1 | `WatcherThread::run()`            | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 90.1% |     155 | `forward_copy_longs` | `<unknown>` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 76.9% |     113 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 18.4% |      27 | `_new_array_Java`                 | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Callee                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |      90 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 85.6% |      77 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
| 14.4% |      13 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 31.0% |      27 | `G1FullGCMarkTask::work(unsigned int)`          | `<unknown>` |
| 26.4% |      23 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 12.6% |      11 | `semaphore_wait_trap`                           | `<unknown>` |
|  9.2% |       8 | `G1FullGCResetMetadataTask::work(unsigned int)` | `<unknown>` |
|  9.2% |       8 | `G1FullGCAdjustTask::work(unsigned int)`        | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 79.2% |      61 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 19.5% |      15 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  1.3% |       1 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                  | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 98.4% |      60 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  1.6% |       1 | `Compile::~Compile()`                                              | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 51.7% |      31 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 30.0% |      18 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 15.0% |       9 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.7% |       1 | `TypeFunc::make(ciMethod*)`                                                                | `<unknown>` |
|  1.7% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 95.5% |      42 | `__psynch_cvsignal`            | `<unknown>` |
|  4.5% |       2 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 88.1% |      37 | `forward_copy_longs`                                                             | `<unknown>` |
|  2.4% |       1 | `G1BarrierSetRuntime::write_ref_array_post_entry(HeapWordImpl**, unsigned long)` | `<unknown>` |
|  2.4% |       1 | `G1BarrierSet::invalidate(MemRegion)`                                            | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 38.7% |      12 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 25.8% |       8 | `PhaseOutput::Output()`                                                              | `<unknown>` |
| 16.1% |       5 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
| 12.9% |       4 | `Matcher::match()`                                                                   | `<unknown>` |
|  3.2% |       1 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 92.9% |      26 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` | `<unknown>` |
|  7.1% |       2 | `pthread_jit_write_protect_np`                       | `<unknown>` |

##### `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` (`<unknown>`)

|     % | Samples | Callee                                                                                           | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------ | ----------- |
| 74.1% |      20 | `G1FullGCMarker::follow_marking_stacks()`                                                        | `<unknown>` |
| 14.8% |       4 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` | `<unknown>` |
|  7.4% |       2 | `TaskTerminator::offer_termination(TerminatorTerminator*)`                                       | `<unknown>` |
|  3.7% |       1 | `G1FullGCMarker::mark_object(oopDesc*)`                                                          | `<unknown>` |

##### `G1FullGCMarkTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Callee                                                                                                                                                                                                                              | Location    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      27 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `MemAllocator::allocate() const` (`<unknown>`)

|     % | Samples | Callee                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 46.2% |      12 | `_platform_bzero`                                                              | `<unknown>` |
| 23.1% |       6 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |
| 19.2% |       5 | `_platform_memset`                                                             | `<unknown>` |
| 11.5% |       3 | `ObjArrayAllocator::initialize(HeapWordImpl**) const`                          | `<unknown>` |

##### `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` (`<unknown>`)

|      % | Samples | Callee                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      26 | `MemAllocator::allocate() const` | `<unknown>` |

##### `InstanceKlass::allocate_objArray(int, int, JavaThread*)` (`<unknown>`)

|      % | Samples | Callee                                                                         | Location    |
| -----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 100.0% |      26 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 27.8% |       5 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 22.2% |       4 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 16.7% |       3 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
| 11.1% |       2 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  5.6% |       1 | `PhaseCCP::do_transform()`                              | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 86.7% |      13 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
| 13.3% |       2 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      15 | `Compilation::compile_method()` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 46.2% |       6 | `Compilation::build_hir()`                | `<unknown>` |
| 38.5% |       5 | `Compilation::emit_lir()`                 | `<unknown>` |
|  7.7% |       1 | `FrameMap::FrameMap(ciMethod*, int, int)` | `<unknown>` |
|  7.7% |       1 | `Compilation::emit_code_body()`           | `<unknown>` |

##### `CompileQueue::get(CompilerThread*)` (`<unknown>`)

|      % | Samples | Callee                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `Monitor::wait(unsigned long long)` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 16.7% |       2 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 16.7% |       2 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
| 16.7% |       2 | `PhaseChaitin::Simplify()`                         | `<unknown>` |
|  8.3% |       1 | `PhaseChaitin::Select()`                           | `<unknown>` |
|  8.3% |       1 | `PhaseIFG::SquareUp()`                             | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 66.7% |       6 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 33.3% |       3 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `PhaseOutput::Output()` (`<unknown>`)

|     % | Samples | Callee                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 50.0% |       4 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` | `<unknown>` |
| 25.0% |       2 | `PhaseOutput::shorten_branches(unsigned int*)`         | `<unknown>` |
| 12.5% |       1 | `addI_reg_immNode::reloc() const`                      | `<unknown>` |
| 12.5% |       1 | `Scheduling::DoScheduling()`                           | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 66.7% |       4 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
| 16.7% |       1 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
| 16.7% |       1 | `IR::eliminate_null_checks()`                     | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 83.3% |       5 | `PhaseIterGVN::transform_old(Node*)`                 | `<unknown>` |
| 16.7% |       1 | `OuterStripMinedLoopEndNode::Ideal(PhaseGVN*, bool)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 50.0% |       3 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 33.3% |       2 | `PhaseIdealLoop::Dominators()`                                         | `<unknown>` |
| 16.7% |       1 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`        | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 20.0% |       1 | `PhaseIterGVN::subsume_node(Node*, Node*)`   | `<unknown>` |
| 20.0% |       1 | `IfNode::Ideal(PhaseGVN*, bool)`             | `<unknown>` |
| 20.0% |       1 | `ConvI2LNode::Value(PhaseGVN*) const`        | `<unknown>` |
| 20.0% |       1 | `CallStaticJavaNode::Ideal(PhaseGVN*, bool)` | `<unknown>` |
| 20.0% |       1 | `LoadNode::Ideal(PhaseGVN*, bool)`           | `<unknown>` |

##### `PhaseCFG::global_code_motion()` (`<unknown>`)

|     % | Samples | Callee                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------- | ----------- |
| 40.0% |       2 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                         | `<unknown>` |
| 20.0% |       1 | `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)` | `<unknown>` |
| 20.0% |       1 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)`                              | `<unknown>` |
| 20.0% |       1 | `Node_Backward_Iterator::next()`                                           | `<unknown>` |

##### `PhaseCFG::do_global_code_motion()` (`<unknown>`)

|      % | Samples | Callee                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       5 | `PhaseCFG::global_code_motion()` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.4% |     200 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.9% |     134 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.7% |     122 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.5% |     115 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |     104 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.1% |      94 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.0% |      91 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.9% |      86 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% |      74 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |      71 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |      68 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |      66 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.4% |      62 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.4% |      62 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.3% |      59 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |      58 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
| 1.3% |      57 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.2% |      54 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.0% |      47 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |      46 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

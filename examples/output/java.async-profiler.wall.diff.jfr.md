# Sampling profile diff

Collected 5,569 samples → 5,267 samples (-302 samples, -5.4%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Native            |   -8.0% |  -371 | 83.6% → 81.4% | 4,658 → 4,287 |
| Ours              |   -7.9% |   -56 | 12.7% → 12.3% |     705 → 649 |
| Standard library  |   -7.8% |   -14 |   3.2% → 3.1% |     179 → 165 |
| Unknown           |     new |  +130 |   0.0% → 2.5% |       0 → 130 |
| JIT               |  +72.7% |    +8 |   0.2% → 0.4% |       11 → 19 |
| Compiler          |  +13.3% |    +2 |          0.3% |       15 → 17 |
| Garbage collector | removed |    -1 |  <0.1% → 0.0% |         1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|     new |  +130 |  0.0% → 2.5% |   0 → 130 | `(anonymous)`                                             | `<unknown>`                                                |
|  +13.5% |   +21 |  2.8% → 3.3% | 155 → 176 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +47.1% |   +16 |  0.6% → 0.9% |   34 → 50 | `forward_copy_longs`                                      | `<unknown>`                                                |
|     new |    +9 |  0.0% → 0.2% |     0 → 9 | `grow()`                                                  | `java.util.ArrayList`                                      |
|  +17.5% |    +7 |  0.7% → 0.9% |   40 → 47 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  +63.6% |    +7 |  0.2% → 0.3% |   11 → 18 | `zero_blocks`                                             | `<unknown>`                                                |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                |
|  +75.0% |    +3 |         0.1% |     4 → 7 | `hash(Object)`                                            | `java.util.HashMap`                                        |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `G1RegionMarkStatsCache::add_live_words`                  | `libjvm.dylib`                                             |
| +100.0% |    +2 | <0.1% → 0.1% |     2 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `G1FullGCMarker::mark_object`                             | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `getRawResult()`                                          | `java.util.concurrent.RecursiveTask`                       |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `ClassLoaderData::oops_do`                                | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `PhaseLive::compute`                                      | `libjvm.dylib`                                             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `PlatformMonitor::wait`                                   | `libjvm.dylib`                                             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `MemAllocator::allocate`                                  | `libjvm.dylib`                                             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |

##### Native

|  Change | Delta |            % | Samples | Function                                          | Location                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------------------- |
|  +47.1% |   +16 |  0.6% → 0.9% | 34 → 50 | `forward_copy_longs`                              | `<unknown>`                |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `arrayof_jint_disjoint_arraycopy`                 | `<unknown>`                |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `G1RegionMarkStatsCache::add_live_words`          | `libjvm.dylib`             |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `G1FullGCMarker::mark_object`                     | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ClassLoaderData::oops_do`                        | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PlatformMonitor::wait`                           | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MemAllocator::allocate`                          | `libjvm.dylib`             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `tlv_get_addr`                                    | `libdyld.dylib`            |
|  +33.3% |    +1 |         0.1% |   3 → 4 | `_platform_bzero`                                 | `libsystem_platform.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AllocTracer::send_allocation_in_new_tlab`        | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `arrayof_oop_arraycopy`                           | `<unknown>`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `pthread_mutex_lock`                              | `libsystem_pthread.dylib`  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `InstanceKlass::find_method_index`                | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `semaphore_signal_trap`                           | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__semwait_signal`                                | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__open_nocancel`                                 | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `JavaThread::set_threadOopHandles`                | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `BytecodeConstantPool::find_or_add`               | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `mkdir`                                           | `libsystem_kernel.dylib`   |

##### Ours

| Change | Delta |            % |   Samples | Function                         | Location                                                   |
| -----: | ----: | -----------: | --------: | -------------------------------- | ---------------------------------------------------------- |
| +13.5% |   +21 |  2.8% → 3.3% | 155 → 176 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +3 |  0.0% → 0.1% |     0 → 3 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|     new |    +9 |  0.0% → 0.2% |   0 → 9 | `grow()`                                                  | `java.util.ArrayList`                         |
|  +17.5% |    +7 |  0.7% → 0.9% | 40 → 47 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `hash(Object)`                                            | `java.util.HashMap`                           |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `getRawResult()`                                          | `java.util.concurrent.RecursiveTask`          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `entrySet()`                                              | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(int)`                                             | `java.util.jar.Attributes`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAndClearSlot(ForkJoinTask[], int)`                    | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|    new |  +130 | 0.0% → 2.5% | 0 → 130 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                          | Location                                                   |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------- | ---------------------------------------------------------- |
|  -18.1% |  -276 | 27.4% → 23.7% | 1,524 → 1,248 | `semaphore_wait_trap`                             | `libsystem_kernel.dylib`                                   |
|   -2.8% |   -77 | 49.3% → 50.6% | 2,743 → 2,666 | `__psynch_cvwait`                                 | `libsystem_kernel.dylib`                                   |
|  -32.5% |   -41 |   2.3% → 1.6% |      126 → 85 | `findNearestCentroid()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -35.7% |   -15 |   0.8% → 0.5% |       42 → 27 | `computeIfAbsent(Object, Function)`               | `java.util.HashMap`                                        |
|  -11.8% |   -15 |   2.3% → 2.1% |     127 → 112 | `vectorSum()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `__ulock_wait`                                    | `libsystem_kernel.dylib`                                   |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `mach_msg2_trap`                                  | `libsystem_kernel.dylib`                                   |
|  -34.5% |   -10 |   0.5% → 0.4% |       29 → 19 | `collectClusters(int[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.9% |   -10 |   4.6% → 4.7% |     257 → 247 | `accumulate(Double[], double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -80.0% |    -8 |  0.2% → <0.1% |        10 → 2 | `_platform_memset`                                | `libsystem_platform.dylib`                                 |
|  -60.0% |    -6 |   0.2% → 0.1% |        10 → 4 | `__psynch_mutexwait`                              | `libsystem_kernel.dylib`                                   |
| removed |    -6 |   0.1% → 0.0% |         6 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`                                             |
|  -45.5% |    -5 |   0.2% → 0.1% |        11 → 6 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                      |
|  -30.8% |    -4 |          0.2% |        13 → 9 | `grow(int)`                                       | `java.util.ArrayList`                                      |
|  -44.4% |    -4 |   0.2% → 0.1% |         9 → 5 | `checkIndex(int, int)`                            | `java.util.Objects`                                        |
|  -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `merge(Object, Object, BiFunction)`               | `java.util.HashMap`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `putMapEntries(Map, boolean)`                     | `java.util.HashMap`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `nextNode()`                                      | `java.util.HashMap$HashIterator`                           |
|  -40.0% |    -2 |          0.1% |         5 → 3 | `pthread_jit_write_protect_np`                    | `libsystem_pthread.dylib`                                  |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `thread_self_trap`                                | `libsystem_kernel.dylib`                                   |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                                   | Location                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -18.1% |  -276 | 27.4% → 23.7% | 1,524 → 1,248 | `semaphore_wait_trap`                                                                                      | `libsystem_kernel.dylib`   |
|   -2.8% |   -77 | 49.3% → 50.6% | 2,743 → 2,666 | `__psynch_cvwait`                                                                                          | `libsystem_kernel.dylib`   |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `__ulock_wait`                                                                                             | `libsystem_kernel.dylib`   |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `mach_msg2_trap`                                                                                           | `libsystem_kernel.dylib`   |
|  -80.0% |    -8 |  0.2% → <0.1% |        10 → 2 | `_platform_memset`                                                                                         | `libsystem_platform.dylib` |
|  -60.0% |    -6 |   0.2% → 0.1% |        10 → 4 | `__psynch_mutexwait`                                                                                       | `libsystem_kernel.dylib`   |
| removed |    -6 |   0.1% → 0.0% |         6 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                          | `libjvm.dylib`             |
|  -40.0% |    -2 |          0.1% |         5 → 3 | `pthread_jit_write_protect_np`                                                                             | `libsystem_pthread.dylib`  |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `thread_self_trap`                                                                                         | `libsystem_kernel.dylib`   |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `Dependencies::assert_common_1`                                                                            | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `_new_array_Java`                                                                                          | `<unknown>`                |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `ObjArrayAllocator::initialize`                                                                            | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                            | `libjvm.dylib`             |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `G1BarrierSet::write_ref_array_work`                                                                       | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`               | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `InstanceKlass::check_valid_for_instantiation`                                                             | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `HeapRegionManager::allocate_free_region`                                                                  | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `JfrAllocationTracer::JfrAllocationTracer`                                                                 | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `_platform_memmove`                                                                                        | `libsystem_platform.dylib` |

##### Ours

|  Change | Delta |            % |   Samples | Function                             | Location                                                   |
| ------: | ----: | -----------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  -32.5% |   -41 |  2.3% → 1.6% |  126 → 85 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -11.8% |   -15 |  2.3% → 2.1% | 127 → 112 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -34.5% |   -10 |  0.5% → 0.4% |   29 → 19 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.9% |   -10 |  4.6% → 4.7% | 257 → 247 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

|  Change | Delta |            % | Samples | Function                                        | Location                                               |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ------------------------------------------------------ |
|  -35.7% |   -15 |  0.8% → 0.5% | 42 → 27 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap`                                    |
|  -45.5% |    -5 |  0.2% → 0.1% |  11 → 6 | `add(Object, Object[], int)`                    | `java.util.ArrayList`                                  |
|  -30.8% |    -4 |         0.2% |  13 → 9 | `grow(int)`                                     | `java.util.ArrayList`                                  |
|  -44.4% |    -4 |  0.2% → 0.1% |   9 → 5 | `checkIndex(int, int)`                          | `java.util.Objects`                                    |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `nextNode()`                                    | `java.util.HashMap$HashIterator`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `join()`                                        | `java.util.concurrent.ForkJoinTask`                    |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `addAll(Collection)`                            | `java.util.ArrayList`                                  |
|   -2.9% |    -1 |         0.6% | 34 → 33 | `doubleValue()`                                 | `java.lang.Double`                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `characteristics()`                             | `java.util.Spliterators$DoubleArraySpliterator`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `next()`                                        | `scala.collection.StrictOptimizedLinearSeqOps$$anon$1` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName()`                                     | `java.lang.Class`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAndAddCtl(long)`                            | `java.util.concurrent.ForkJoinPool`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `fork()`                                        | `java.util.concurrent.ForkJoinTask`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nextWorkerThreadName()`                        | `java.util.concurrent.ForkJoinPool`                    |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|     new |  +130 |   0.0% → 2.5% |   0 → 130 | `(anonymous)`                                             | `<unknown>`                                                |
|     new |  +128 |   0.0% → 2.4% |   0 → 128 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000301004800`       |
|     new |  +128 |   0.0% → 2.4% |   0 → 128 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`        |
|  +28.1% |  +103 |   6.6% → 8.9% | 367 → 470 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|  +10.4% |   +79 | 13.6% → 15.9% | 756 → 835 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`                   |
|   +6.9% |   +63 | 16.4% → 18.6% | 915 → 978 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                 |
|   +6.8% |   +62 | 16.4% → 18.5% | 913 → 975 | `Parker::park`                                            | `libjvm.dylib`                                             |
|   +6.8% |   +62 | 16.4% → 18.5% | 915 → 977 | `Unsafe_Park`                                             | `libjvm.dylib`                                             |
|  +47.1% |   +16 |   0.6% → 0.9% |   34 → 50 | `forward_copy_longs`                                      | `<unknown>`                                                |
|   +8.1% |   +14 |   3.1% → 3.6% | 173 → 187 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +41.4% |   +12 |   0.5% → 0.8% |   29 → 41 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                |
|  +36.0% |    +9 |   0.4% → 0.6% |   25 → 34 | `grow()`                                                  | `java.util.ArrayList`                                      |
| +266.7% |    +8 |   0.1% → 0.2% |    3 → 11 | `G1FullGCMarker::complete_marking`                        | `libjvm.dylib`                                             |
| +266.7% |    +8 |   0.1% → 0.2% |    3 → 11 | `G1FullGCMarkTask::work`                                  | `libjvm.dylib`                                             |
|   +2.5% |    +7 |   5.0% → 5.5% | 281 → 288 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  +17.5% |    +7 |   0.7% → 0.9% |   40 → 47 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  +63.6% |    +7 |   0.2% → 0.3% |   11 → 18 | `zero_blocks`                                             | `<unknown>`                                                |
| +600.0% |    +6 |  <0.1% → 0.1% |     1 → 7 | `G1FullGCMarker::follow_marking_stacks`                   | `libjvm.dylib`                                             |
|  +62.5% |    +5 |   0.1% → 0.2% |    8 → 13 | `arrayof_oop_disjoint_arraycopy`                          | `<unknown>`                                                |
| +500.0% |    +5 |  <0.1% → 0.1% |     1 → 6 | `TaskTerminator::offer_termination`                       | `libjvm.dylib`                                             |

##### Native

|  Change | Delta |             % |   Samples | Function                                                        | Location       |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------- | -------------- |
|   +6.8% |   +62 | 16.4% → 18.5% | 913 → 975 | `Parker::park`                                                  | `libjvm.dylib` |
|   +6.8% |   +62 | 16.4% → 18.5% | 915 → 977 | `Unsafe_Park`                                                   | `libjvm.dylib` |
|  +47.1% |   +16 |   0.6% → 0.9% |   34 → 50 | `forward_copy_longs`                                            | `<unknown>`    |
|  +41.4% |   +12 |   0.5% → 0.8% |   29 → 41 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>`    |
| +266.7% |    +8 |   0.1% → 0.2% |    3 → 11 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib` |
| +266.7% |    +8 |   0.1% → 0.2% |    3 → 11 | `G1FullGCMarkTask::work`                                        | `libjvm.dylib` |
| +600.0% |    +6 |  <0.1% → 0.1% |     1 → 7 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |
|  +62.5% |    +5 |   0.1% → 0.2% |    8 → 13 | `arrayof_oop_disjoint_arraycopy`                                | `<unknown>`    |
| +500.0% |    +5 |  <0.1% → 0.1% |     1 → 6 | `TaskTerminator::offer_termination`                             | `libjvm.dylib` |
| +500.0% |    +5 |  <0.1% → 0.1% |     1 → 6 | `G1ParEvacuateFollowersClosure::offer_termination`              | `libjvm.dylib` |
| +500.0% |    +5 |  <0.1% → 0.1% |     1 → 6 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |
| +500.0% |    +5 |  <0.1% → 0.1% |     1 → 6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `G1FullGCMarker::publish_and_drain_oop_tasks`                   | `libjvm.dylib` |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `Parse::do_one_block`                                           | `libjvm.dylib` |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `Parse::do_all_blocks`                                          | `libjvm.dylib` |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `G1RegionMarkStatsCache::add_live_words`                        | `libjvm.dylib` |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `Parse::Parse`                                                  | `libjvm.dylib` |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `ParseGenerator::generate`                                      | `libjvm.dylib` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `Parse::do_call`                                                | `libjvm.dylib` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `Mutex::lock_without_safepoint_check`                           | `libjvm.dylib` |

##### Ours

| Change | Delta |            % |   Samples | Function                                      | Location                                                   |
| -----: | ----: | -----------: | --------: | --------------------------------------------- | ---------------------------------------------------------- |
|  +8.1% |   +14 |  3.1% → 3.6% | 173 → 187 | `distance(Double[], Double[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +4 |  0.0% → 0.1% |     0 → 4 | `combineResults(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +3 |  0.0% → 0.1% |     0 → 3 | `add(double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +3 |  0.0% → 0.1% |     0 → 3 | `combineResults(double[], double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `runParser(Seq, Object, List, OParserSetup)`  | `scopt.ORunner$`                                           |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `parse(Seq, Object)`                          | `scopt.OptionParser`                                       |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `parse(String[])`                             | `org.renaissance.harness.ConfigParser`                     |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `createScratchDir(BenchmarkDescriptor)`       | `org.renaissance.core.BenchmarkSuite`                      |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `createBenchmarkContext(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite`                      |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                                    | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +128 |   0.0% → 2.4% |       0 → 128 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000000301004800` |
|     new |  +128 |   0.0% → 2.4% |       0 → 128 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`  |
|  +28.1% |  +103 |   6.6% → 8.9% |     367 → 470 | `awaitWork(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
|  +10.4% |   +79 | 13.6% → 15.9% |     756 → 835 | `park()`                                                                    | `java.util.concurrent.locks.LockSupport`             |
|   +6.9% |   +63 | 16.4% → 18.6% |     915 → 978 | `park(boolean, long)`                                                       | `jdk.internal.misc.Unsafe`                           |
|  +36.0% |    +9 |   0.4% → 0.6% |       25 → 34 | `grow()`                                                                    | `java.util.ArrayList`                                |
|   +2.5% |    +7 |   5.0% → 5.5% |     281 → 288 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                   | `java.util.concurrent.ForkJoinPool`                  |
|  +17.5% |    +7 |   0.7% → 0.9% |       40 → 47 | `elementData(int)`                                                          | `java.util.ArrayList`                                |
|  +11.1% |    +4 |   0.6% → 0.8% |       36 → 40 | `add(Object, Object[], int)`                                                | `java.util.ArrayList`                                |
|  +10.8% |    +4 |   0.7% → 0.8% |       37 → 41 | `add(Object)`                                                               | `java.util.ArrayList`                                |
|   +6.1% |    +3 |   0.9% → 1.0% |       49 → 52 | `get(int)`                                                                  | `java.util.ArrayList`                                |
|  +40.0% |    +2 |          0.1% |         5 → 7 | `hash(Object)`                                                              | `java.util.HashMap`                                  |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `defineClass(String, Resource)`                                             | `java.net.URLClassLoader`                            |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `getRawResult()`                                                            | `java.util.concurrent.RecursiveTask`                 |
|   +0.1% |    +1 | 29.6% → 31.3% | 1,646 → 1,647 | `runWorker(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
|   +0.1% |    +1 | 29.6% → 31.3% | 1,646 → 1,647 | `run()`                                                                     | `java.util.concurrent.ForkJoinWorkerThread`          |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|    new |  +130 | 0.0% → 2.5% | 0 → 130 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ------------------------------------------------------ |
|  -11.7% |  -378 | 57.8% → 53.9% | 3,219 → 2,841 | `_pthread_start`                                     | `libsystem_pthread.dylib`                              |
|  -11.7% |  -378 | 57.8% → 53.9% | 3,219 → 2,841 | `thread_start`                                       | `libsystem_pthread.dylib`                              |
|  -11.9% |  -367 | 55.3% → 51.5% | 3,077 → 2,710 | `Thread::call_run`                                   | `libjvm.dylib`                                         |
|  -11.9% |  -367 | 55.3% → 51.5% | 3,077 → 2,710 | `thread_native_entry`                                | `libjvm.dylib`                                         |
|  -18.1% |  -276 | 27.4% → 23.7% | 1,524 → 1,248 | `semaphore_wait_trap`                                | `libsystem_kernel.dylib`                               |
|  -17.1% |  -232 | 24.3% → 21.3% | 1,354 → 1,122 | `WorkerThread::run`                                  | `libjvm.dylib`                                         |
| removed |  -138 |   2.5% → 0.0% |       138 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`   |
| removed |  -138 |   2.5% → 0.0% |       138 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`    |
|   -8.9% |  -122 | 24.6% → 23.7% | 1,372 → 1,250 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
|   -7.6% |  -118 | 28.0% → 27.3% | 1,557 → 1,439 | `PlatformMonitor::wait`                              | `libjvm.dylib`                                         |
|   -9.0% |  -112 | 22.3% → 21.5% | 1,243 → 1,131 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
|   -8.1% |  -103 | 22.9% → 22.3% | 1,275 → 1,172 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
|   -8.1% |  -103 | 22.9% → 22.3% | 1,275 → 1,172 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|   -8.0% |  -102 | 22.8% → 22.2% | 1,270 → 1,168 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|   -8.0% |  -102 | 22.8% → 22.2% | 1,270 → 1,168 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
|   -8.0% |  -102 | 22.9% → 22.3% | 1,277 → 1,175 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
|   -7.9% |   -88 | 19.9% → 19.4% | 1,109 → 1,021 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|   -7.9% |   -80 | 18.3% → 17.8% |   1,018 → 938 | `JavaThread::thread_main_inner`                      | `libjvm.dylib`                                         |
|   -2.8% |   -77 | 49.3% → 50.6% | 2,743 → 2,666 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                               |
|   -6.6% |   -73 | 19.9% → 19.7% | 1,109 → 1,036 | `Monitor::wait_without_safepoint_check`              | `libjvm.dylib`                                         |

##### Native

| Change | Delta |             % |       Samples | Function                                              | Location                  |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------- | ------------------------- |
| -11.7% |  -378 | 57.8% → 53.9% | 3,219 → 2,841 | `_pthread_start`                                      | `libsystem_pthread.dylib` |
| -11.7% |  -378 | 57.8% → 53.9% | 3,219 → 2,841 | `thread_start`                                        | `libsystem_pthread.dylib` |
| -11.9% |  -367 | 55.3% → 51.5% | 3,077 → 2,710 | `Thread::call_run`                                    | `libjvm.dylib`            |
| -11.9% |  -367 | 55.3% → 51.5% | 3,077 → 2,710 | `thread_native_entry`                                 | `libjvm.dylib`            |
| -18.1% |  -276 | 27.4% → 23.7% | 1,524 → 1,248 | `semaphore_wait_trap`                                 | `libsystem_kernel.dylib`  |
| -17.1% |  -232 | 24.3% → 21.3% | 1,354 → 1,122 | `WorkerThread::run`                                   | `libjvm.dylib`            |
|  -7.6% |  -118 | 28.0% → 27.3% | 1,557 → 1,439 | `PlatformMonitor::wait`                               | `libjvm.dylib`            |
|  -7.9% |   -80 | 18.3% → 17.8% |   1,018 → 938 | `JavaThread::thread_main_inner`                       | `libjvm.dylib`            |
|  -2.8% |   -77 | 49.3% → 50.6% | 2,743 → 2,666 | `__psynch_cvwait`                                     | `libsystem_kernel.dylib`  |
|  -6.6% |   -73 | 19.9% → 19.7% | 1,109 → 1,036 | `Monitor::wait_without_safepoint_check`               | `libjvm.dylib`            |
| -10.0% |   -45 |   8.0% → 7.7% |     448 → 403 | `Monitor::wait`                                       | `libjvm.dylib`            |
| -77.8% |   -35 |   0.8% → 0.2% |       45 → 10 | `SafepointSynchronize::block`                         | `libjvm.dylib`            |
| -77.8% |   -35 |   0.8% → 0.2% |       45 → 10 | `SafepointMechanism::process`                         | `libjvm.dylib`            |
| -76.7% |   -33 |   0.8% → 0.2% |       43 → 10 | `GenericWaitBarrier::Cell::wait`                      | `libjvm.dylib`            |
| -76.7% |   -33 |   0.8% → 0.2% |       43 → 10 | `GenericWaitBarrier::wait`                            | `libjvm.dylib`            |
|  -7.8% |   -33 |   7.6% → 7.4% |     423 → 390 | `ConcurrentGCThread::run`                             | `libjvm.dylib`            |
|  -7.8% |   -22 |   5.1% → 4.9% |     282 → 260 | `JLI_Launch`                                          | `libjli.dylib`            |
|  -7.8% |   -22 |   5.1% → 4.9% |     282 → 260 | `main`                                                | `java`                    |
| -73.1% |   -19 |   0.5% → 0.1% |        26 → 7 | `ThreadSafepointState::handle_polling_page_exception` | `libjvm.dylib`            |
| -73.1% |   -19 |   0.5% → 0.1% |        26 → 7 | `SafepointSynchronize::handle_polling_page_exception` | `libjvm.dylib`            |

##### Ours

| Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -8.0% |  -102 | 22.8% → 22.2% | 1,270 → 1,168 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -13.1% |   -60 |   8.2% → 7.5% |     457 → 397 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.1% |   -36 |   5.8% → 5.5% |     325 → 289 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -18.2% |   -24 |   2.4% → 2.1% |     132 → 108 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.8% |   -21 |          7.8% |     433 → 412 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -4.8% |   -21 |          7.8% |     433 → 412 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -6.2% |   -14 |          4.0% |     225 → 211 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -6.2% |   -14 |          4.0% |     225 → 211 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -9.9% |   -13 |   2.4% → 2.2% |     131 → 118 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -9.9% |   -13 |   2.4% → 2.2% |     131 → 118 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000301183d68` |
|  -5.4% |   -12 |          4.0% |     223 → 211 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -7.9% |   -11 |   2.5% → 2.4% |     140 → 129 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -7.9% |   -11 |   2.5% → 2.4% |     140 → 129 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -8.0% |   -11 |   2.5% → 2.4% |     138 → 127 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -8.1% |   -11 |          2.4% |     136 → 125 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -7.2% |   -10 |   2.5% → 2.4% |     139 → 129 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -7.2% |   -10 |   2.5% → 2.4% |     138 → 128 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -7.4% |   -10 |          2.4% |     135 → 125 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -7.4% |   -10 |          2.4% |     135 → 125 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030111f208` |
|  -7.5% |   -10 |          2.4% |     134 → 124 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
| removed |  -138 |   2.5% → 0.0% |       138 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |  -138 |   2.5% → 0.0% |       138 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   -8.9% |  -122 | 24.6% → 23.7% | 1,372 → 1,250 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|   -9.0% |  -112 | 22.3% → 21.5% | 1,243 → 1,131 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|   -8.1% |  -103 | 22.9% → 22.3% | 1,275 → 1,172 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -8.1% |  -103 | 22.9% → 22.3% | 1,275 → 1,172 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -8.0% |  -102 | 22.8% → 22.2% | 1,270 → 1,168 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|   -8.0% |  -102 | 22.9% → 22.3% | 1,277 → 1,175 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|   -7.9% |   -88 | 19.9% → 19.4% | 1,109 → 1,021 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -7.5% |   -23 |   5.5% → 5.4% |     305 → 282 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  -27.1% |   -13 |   0.9% → 0.7% |       48 → 35 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                  |
|   -9.9% |   -13 |   2.4% → 2.2% |     131 → 118 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `waitForReferencePendingList()`                      | `java.lang.ref.Reference`                            |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `processPendingReferences()`                         | `java.lang.ref.Reference`                            |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `run()`                                              | `java.lang.ref.Reference$ReferenceHandler`           |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `wait0(long)`                                        | `java.lang.Object`                                   |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `wait(long)`                                         | `java.lang.Object`                                   |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `wait()`                                             | `java.lang.Object`                                   |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `await()`                                            | `java.lang.ref.NativeReferenceQueue`                 |
|   -7.8% |   -11 |          2.5% |     141 → 130 | `remove0()`                                          | `java.lang.ref.ReferenceQueue`                       |

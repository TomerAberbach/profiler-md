# Sampling profile

Collected 5,569 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 83.6% |   4,658 |
| Ours              | 12.7% |     705 |
| Standard library  |  3.2% |     179 |
| Compiler          |  0.3% |      15 |
| JIT               |  0.2% |      11 |
| Garbage collector | <0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 49.3% |   2,743 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`                                   |
| 27.4% |   1,524 | `semaphore_wait_trap`               | `libsystem_kernel.dylib`                                   |
|  4.6% |     257 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  2.8% |     155 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.5% |     141 | `__ulock_wait`                      | `libsystem_kernel.dylib`                                   |
|  2.5% |     141 | `mach_msg2_trap`                    | `libsystem_kernel.dylib`                                   |
|  2.3% |     127 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  2.3% |     126 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.8% |      42 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  0.7% |      40 | `elementData(int)`                  | `java.util.ArrayList`                                      |
|  0.6% |      34 | `forward_copy_longs`                | `<unknown>`                                                |
|  0.6% |      34 | `doubleValue()`                     | `java.lang.Double`                                         |
|  0.5% |      29 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |      13 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  0.2% |      11 | `zero_blocks`                       | `<unknown>`                                                |
|  0.2% |      11 | `add(Object, Object[], int)`        | `java.util.ArrayList`                                      |
|  0.2% |      10 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`                                   |
|  0.2% |      10 | `_platform_memset`                  | `libsystem_platform.dylib`                                 |
|  0.2% |      10 | `__psynch_cvsignal`                 | `libsystem_kernel.dylib`                                   |
|  0.2% |       9 | `checkIndex(int, int)`              | `java.util.Objects`                                        |

#### Categories

##### Native

|     % | Samples | Function                                                                                                   | Location                   |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
| 49.3% |   2,743 | `__psynch_cvwait`                                                                                          | `libsystem_kernel.dylib`   |
| 27.4% |   1,524 | `semaphore_wait_trap`                                                                                      | `libsystem_kernel.dylib`   |
|  2.5% |     141 | `__ulock_wait`                                                                                             | `libsystem_kernel.dylib`   |
|  2.5% |     141 | `mach_msg2_trap`                                                                                           | `libsystem_kernel.dylib`   |
|  0.6% |      34 | `forward_copy_longs`                                                                                       | `<unknown>`                |
|  0.2% |      10 | `__psynch_mutexwait`                                                                                       | `libsystem_kernel.dylib`   |
|  0.2% |      10 | `_platform_memset`                                                                                         | `libsystem_platform.dylib` |
|  0.2% |      10 | `__psynch_cvsignal`                                                                                        | `libsystem_kernel.dylib`   |
|  0.1% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                          | `libjvm.dylib`             |
|  0.1% |       5 | `pthread_jit_write_protect_np`                                                                             | `libsystem_pthread.dylib`  |
|  0.1% |       3 | `_platform_bzero`                                                                                          | `libsystem_platform.dylib` |
| <0.1% |       2 | `ObjArrayAllocator::initialize`                                                                            | `libjvm.dylib`             |
| <0.1% |       2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib`             |
| <0.1% |       2 | `inflate_fast`                                                                                             | `libzip.dylib`             |
| <0.1% |       2 | `thread_self_trap`                                                                                         | `libsystem_kernel.dylib`   |
| <0.1% |       1 | `Dependencies::assert_common_1`                                                                            | `libjvm.dylib`             |
| <0.1% |       1 | `_new_array_Java`                                                                                          | `<unknown>`                |
| <0.1% |       1 | `tlv_get_addr`                                                                                             | `libdyld.dylib`            |
| <0.1% |       1 | `arrayof_jint_disjoint_arraycopy`                                                                          | `<unknown>`                |
| <0.1% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`                                                            | `libjvm.dylib`             |

##### Ours

|     % | Samples | Function                                         | Location                                                                              |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|  4.6% |     257 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  2.8% |     155 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  2.3% |     127 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  2.3% |     126 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.5% |      29 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       2 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| <0.1% |       1 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| <0.1% |       1 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       1 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |
| <0.1% |       1 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| <0.1% |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       1 | `div(double[], int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |

##### Standard library

|     % | Samples | Function                                                  | Location                                               |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------ |
|  0.8% |      42 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                    |
|  0.7% |      40 | `elementData(int)`                                        | `java.util.ArrayList`                                  |
|  0.6% |      34 | `doubleValue()`                                           | `java.lang.Double`                                     |
|  0.2% |      13 | `grow(int)`                                               | `java.util.ArrayList`                                  |
|  0.2% |      11 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                  |
|  0.2% |       9 | `checkIndex(int, int)`                                    | `java.util.Objects`                                    |
|  0.1% |       4 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                    |
|  0.1% |       4 | `hash(Object)`                                            | `java.util.HashMap`                                    |
| <0.1% |       2 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                    |
| <0.1% |       2 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                    |
| <0.1% |       2 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                    |
| <0.1% |       2 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                    |
| <0.1% |       2 | `nextNode()`                                              | `java.util.HashMap$HashIterator`                       |
| <0.1% |       1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                    |
| <0.1% |       1 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                    |
| <0.1% |       1 | `addAll(Collection)`                                      | `java.util.ArrayList`                                  |
| <0.1% |       1 | `add(Object)`                                             | `java.util.ArrayList`                                  |
| <0.1% |       1 | `characteristics()`                                       | `java.util.Spliterators$DoubleArraySpliterator`        |
| <0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                    |
| <0.1% |       1 | `next()`                                                  | `scala.collection.StrictOptimizedLinearSeqOps$$anon$1` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 89.9% |     231 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| 10.1% |      26 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 56.8% |      88 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
| 37.4% |      58 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
|  5.2% |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
|  0.6% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 86.6% |     110 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 13.4% |      17 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 49.2% |      62 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
| 34.1% |      43 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 15.9% |      20 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  0.8% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |      14 | `java.util.HashMap:1213` |
| 21.4% |       9 | `java.util.HashMap:1197` |
| 19.0% |       8 | `java.util.HashMap:1207` |
| 16.7% |       7 | `java.util.HashMap:1204` |
|  9.5% |       4 | `java.util.HashMap:1222` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      40 | `java.util.ArrayList:411` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      34 | `java.lang.Double:1001` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 31.0% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 20.7% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 20.7% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 17.2% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| 10.3% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      13 | `java.util.ArrayList:239` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      11 | `java.util.ArrayList:482` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       9 | `java.util.Objects:385` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 75.0% |       3 | `java.util.HashMap:1384` |
| 25.0% |       1 | `java.util.HashMap:1362` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `java.util.HashMap:338` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ForkJoinTask:385` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:1809` |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:1808` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:2047` |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:2023` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:519` |
| 50.0% |       1 | `java.util.HashMap:522` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|     % | Samples | Location                              |
| ----: | ------: | ------------------------------------- |
| 50.0% |       1 | `java.util.HashMap$HashIterator:1609` |
| 50.0% |       1 | `java.util.HashMap$HashIterator:1604` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:145` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:651` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:1843` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:760` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:496` |

##### `characteristics()` (`java.util.Spliterators$DoubleArraySpliterator`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `java.util.Spliterators$DoubleArraySpliterator:1344` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:634` |

##### `next()` (`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `scala.collection.StrictOptimizedLinearSeqOps$$anon$1:267` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 56.7% |   1,556 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| 33.0% |     906 | `Parker::park`          | `libjvm.dylib`           |
|  5.1% |     141 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  5.1% |     140 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.6% |   1,335 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.3% |     141 | `os::signal_wait`                | `libjvm.dylib` |
|  2.8% |      43 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       5 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     257 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     155 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     141 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     141 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     127 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     126 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      42 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      40 | `get(int)` | `java.util.ArrayList` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 82.4% |      28 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 17.6% |       6 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 73.5% |      25 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 26.5% |       9 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      29 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      13 | `grow()` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 54.5% |       6 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 36.4% |       4 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  9.1% |       1 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      11 | `add(Object)` | `java.util.ArrayList` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      10 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 70.0% |       7 | `MarkBitMap::do_clear`   | `libjvm.dylib` |
| 30.0% |       3 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      10 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |       9 | `get(int)` | `java.util.ArrayList` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller            | Location       |
| ----: | ------: | ----------------- | -------------- |
| 40.0% |       2 | `Unsafe_Park`     | `libjvm.dylib` |
| 40.0% |       2 | `_new_array_Java` | `<unknown>`    |
| 20.0% |       1 | `Unsafe_Unpark`   | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       4 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       4 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       3 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 50.0% |       1 | `ThreadLocalAllocBuffer::retire_before_allocation` | `libjvm.dylib` |
| 50.0% |       1 | `MemAllocator::allocate`                           | `libjvm.dylib` |

##### `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       2 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `thread_self_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `SafepointSynchronize::block` | `libjvm.dylib` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       2 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       2 | `<init>(Map)` | `java.util.HashMap` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       2 | `next()` | `java.util.HashMap$EntryIterator` |

##### `Dependencies::assert_common_1` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       1 | `Parse::Parse` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |       1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `tlv_get_addr` (`libdyld.dylib`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |       1 | `grow(int)` | `java.util.ArrayList` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       1 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                                              |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                  | Location                                                               |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller          | Location                                               |
| -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% |       1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |       1 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `characteristics()` (`java.util.Spliterators$DoubleArraySpliterator`)

|      % | Samples | Caller                             | Location                        |
| -----: | ------: | ---------------------------------- | ------------------------------- |
| 100.0% |       1 | `fromCharacteristics(Spliterator)` | `java.util.stream.StreamOpFlag` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `next()` (`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`)

|      % | Samples | Caller   | Location                                                   |
| -----: | ------: | -------- | ---------------------------------------------------------- |
| 100.0% |       1 | `next()` | `scala.collection.mutable.MutationTracker$CheckedIterator` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                             | Location                                               |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------ |
| 57.8% |   3,219 | `_pthread_start`                                     | `libsystem_pthread.dylib`                              |
| 57.8% |   3,219 | `thread_start`                                       | `libsystem_pthread.dylib`                              |
| 55.3% |   3,077 | `Thread::call_run`                                   | `libjvm.dylib`                                         |
| 55.3% |   3,077 | `thread_native_entry`                                | `libjvm.dylib`                                         |
| 49.3% |   2,743 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                               |
| 29.6% |   1,646 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
| 29.6% |   1,646 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
| 28.0% |   1,557 | `PlatformMonitor::wait`                              | `libjvm.dylib`                                         |
| 27.4% |   1,524 | `semaphore_wait_trap`                                | `libsystem_kernel.dylib`                               |
| 24.6% |   1,372 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
| 24.3% |   1,354 | `WorkerThread::run`                                  | `libjvm.dylib`                                         |
| 22.9% |   1,277 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
| 22.9% |   1,275 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
| 22.9% |   1,275 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 22.8% |   1,270 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| 22.8% |   1,270 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
| 22.3% |   1,243 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| 19.9% |   1,109 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 19.9% |   1,109 | `Monitor::wait_without_safepoint_check`              | `libjvm.dylib`                                         |
| 18.3% |   1,018 | `JavaThread::thread_main_inner`                      | `libjvm.dylib`                                         |

#### Categories

##### Native

|     % | Samples | Function                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------- | ------------------------- |
| 57.8% |   3,219 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
| 57.8% |   3,219 | `thread_start`                                           | `libsystem_pthread.dylib` |
| 55.3% |   3,077 | `Thread::call_run`                                       | `libjvm.dylib`            |
| 55.3% |   3,077 | `thread_native_entry`                                    | `libjvm.dylib`            |
| 49.3% |   2,743 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
| 28.0% |   1,557 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
| 27.4% |   1,524 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`  |
| 24.3% |   1,354 | `WorkerThread::run`                                      | `libjvm.dylib`            |
| 19.9% |   1,109 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
| 18.3% |   1,018 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
| 16.4% |     915 | `Unsafe_Park`                                            | `libjvm.dylib`            |
| 16.4% |     913 | `Parker::park`                                           | `libjvm.dylib`            |
|  8.0% |     448 | `Monitor::wait`                                          | `libjvm.dylib`            |
|  7.6% |     423 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
|  5.1% |     282 | `JLI_Launch`                                             | `libjli.dylib`            |
|  5.1% |     282 | `main`                                                   | `java`                    |
|  2.5% |     141 | `JVM_WaitForReferencePendingList`                        | `libjvm.dylib`            |
|  2.5% |     141 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |
|  2.5% |     141 | `__ulock_wait`                                           | `libsystem_kernel.dylib`  |
|  2.5% |     141 | `CallJavaMainInNewThread`                                | `libjli.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 22.8% |   1,270 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  8.2% |     457 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.8% |     433 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  7.8% |     433 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  5.8% |     325 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  5.1% |     282 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  4.0% |     225 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  4.0% |     225 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  4.0% |     223 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  3.1% |     173 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.5% |     140 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  2.5% |     140 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  2.5% |     139 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  2.5% |     138 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.5% |     138 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  2.4% |     136 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     135 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     135 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |
|  2.4% |     134 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  2.4% |     132 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 29.6% |   1,646 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 29.6% |   1,646 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| 24.6% |   1,372 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 22.9% |   1,277 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 22.9% |   1,275 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| 22.9% |   1,275 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 22.8% |   1,270 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| 22.3% |   1,243 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 19.9% |   1,109 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 16.4% |     915 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
| 13.6% |     756 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  6.6% |     367 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  5.5% |     305 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  5.0% |     281 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  2.5% |     141 | `waitForReferencePendingList()`                           | `java.lang.ref.Reference`                     |
|  2.5% |     141 | `processPendingReferences()`                              | `java.lang.ref.Reference`                     |
|  2.5% |     141 | `run()`                                                   | `java.lang.ref.Reference$ReferenceHandler`    |
|  2.5% |     141 | `wait0(long)`                                             | `java.lang.Object`                            |
|  2.5% |     141 | `wait(long)`                                              | `java.lang.Object`                            |
|  2.5% |     141 | `wait()`                                                  | `java.lang.Object`                            |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.6% |   3,077 | `thread_native_entry` | `libjvm.dylib` |
|  4.4% |     141 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   3,219 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.0% |   1,354 | `WorkerThread::run`             | `libjvm.dylib` |
| 33.1% |   1,018 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.7% |     423 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.6% |     141 | `VMThread::run`                 | `libjvm.dylib` |
|  4.6% |     141 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   3,077 | `Thread::call_run` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 77.6% |   1,277 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| 22.3% |     367 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,646 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   1,556 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 80.8% |   1,109 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 29.7% |     408 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 20.5% |     281 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 98.6% |   1,335 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.6% |       8 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.5% |       7 | `HeapRegionManager::par_iterate`  | `libjvm.dylib`           |
|  0.2% |       3 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  0.1% |       1 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.8% |   1,275 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       1 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.6% |   1,270 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 10.3% |     131 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.6% |       8 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,275 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 97.9% |   1,243 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 36.0% |     457 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 34.1% |     433 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.7% |     225 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  6.2% |      79 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,270 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,243 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,109 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,109 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 30.9% |     315 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 13.9% |     141 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 13.9% |     141 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 13.9% |     141 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 13.8% |     140 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 99.8% |     913 | `Parker::park`                 | `libjvm.dylib`            |
|  0.2% |       2 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     915 | `Unsafe_Park` | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location                  |
| ----: | ------: | ----------------------------- | ------------------------- |
| 99.2% |     906 | `__psynch_cvwait`             | `libsystem_kernel.dylib`  |
|  0.5% |       5 | `SafepointMechanism::process` | `libjvm.dylib`            |
|  0.1% |       1 | `_pthread_cond_wait`          | `libsystem_pthread.dylib` |
|  0.1% |       1 | `stub:pthread_mutex_trylock`  | `libjvm.dylib`            |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     756 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     457 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  71.1% |     325 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  28.9% |     132 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     448 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 65.1% |     282 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.5% |      24 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     433 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     433 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     141 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     141 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
| 33.3% |     141 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 94.8% |     348 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  5.2% |      19 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                                           | Location                                                   |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
| 53.2% |     173 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.7% |      12 | `get(int)`                                       | `java.util.ArrayList`                                      |
|  2.8% |       9 | `SafepointBlob`                                  | `<unknown>`                                                |
|  0.9% |       3 | `_new_array_Java`                                | `<unknown>`                                                |
|  0.3% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                             |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     305 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     141 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |     141 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     282 | `JLI_Launch` | `libjli.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 8.9% |      25 | `doubleValue()` | `java.lang.Double` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 98.9% |     278 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  1.1% |       3 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.1% |     223 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.9% |       2 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     225 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     225 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee               | Location                                               |
| ----: | ------: | -------------------- | ------------------------------------------------------ |
| 99.6% |     222 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
|  0.4% |       1 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 5.2% |       9 | `SafepointBlob` | `<unknown>`        |
| 5.2% |       9 | `doubleValue()` | `java.lang.Double` |

##### `JVM_WaitForReferencePendingList` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     141 | `Monitor::wait` | `libjvm.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |     141 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Callee         | Location                 |
| -----: | ------: | -------------- | ------------------------ |
| 100.0% |     141 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     141 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     141 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     141 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     141 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     141 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     141 | `wait(long)` | `java.lang.Object` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                                                      | Location                        |
| ----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 99.3% |     139 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |
|  0.7% |       1 | `loadClass(String)`                                         | `java.lang.ClassLoader`         |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     140 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                     | Location                   |
| ----: | ------: | -------------------------- | -------------------------- |
| 99.3% |     138 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |
|  0.7% |       1 | `loadClass(String)`        | `java.lang.ClassLoader`    |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 98.6% |     136 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  0.7% |       1 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  0.7% |       1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     138 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee               | Location                                    |
| ----: | ------: | -------------------- | ------------------------------------------- |
| 99.3% |     135 | `foreach(Function1)` | `scala.collection.immutable.List`           |
|  0.7% |       1 | `getVmStartNanos()`  | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                                       | Location                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.3% |     134 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  0.7% |       1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208`)

|      % | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     135 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                             | Location                                  |
| ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 98.5% |     132 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
|  1.5% |       2 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 36.4% |      48 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 28.0% |      37 | `add(Object)`                       | `java.util.ArrayList` |
|  9.8% |      13 | `get(int)`                          | `java.util.ArrayList` |
|  3.8% |       5 | `SafepointBlob`                     | `<unknown>`           |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.0% |   1,335 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.2% |     344 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.4% |     298 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     141 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |     141 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.5% |     141 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |     141 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |     141 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |     141 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     141 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     141 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     140 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     140 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |     140 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |     140 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     140 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.4% |     136 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |     129 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700117ae68`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  2.3% |     128 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.8% |     101 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

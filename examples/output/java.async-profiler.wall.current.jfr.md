# Sampling profile

Collected 4,878 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 83.3% |   4,061 |
| Ours             | 13.8% |     671 |
| Standard library |  2.4% |     117 |
| Compiler         |  0.3% |      14 |
| JIT              |  0.2% |      10 |
| Unknown          |  0.1% |       5 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                          | Location                                                   |
| ----: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 50.1% |   2,446 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`                                   |
| 26.3% |   1,282 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`                                   |
|  5.1% |     250 | `accumulate(Double[], double[])`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  4.3% |     211 | `distance(Double[], Double[])`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.5% |     122 | `mach_msg2_trap`                                                                  | `libsystem_kernel.dylib`                                   |
|  2.5% |     122 | `__ulock_wait`                                                                    | `libsystem_kernel.dylib`                                   |
|  1.9% |      91 | `findNearestCentroid()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% |      85 | `vectorSum()`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.9% |      43 | `forward_copy_longs`                                                              | `<unknown>`                                                |
|  0.7% |      34 | `computeIfAbsent(Object, Function)`                                               | `java.util.HashMap`                                        |
|  0.6% |      31 | `collectClusters(int[])`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |      29 | `elementData(int)`                                                                | `java.util.ArrayList`                                      |
|  0.2% |      10 | `zero_blocks`                                                                     | `<unknown>`                                                |
|  0.2% |       8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                         | `java.util.concurrent.ForkJoinPool`                        |
|  0.2% |       8 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`                                   |
|  0.1% |       7 | `add(Object, Object[], int)`                                                      | `java.util.ArrayList`                                      |
|  0.1% |       7 | `__psynch_mutexwait`                                                              | `libsystem_kernel.dylib`                                   |
|  0.1% |       6 | `hash(Object)`                                                                    | `java.util.HashMap`                                        |
|  0.1% |       6 | `checkIndex(int, int)`                                                            | `java.util.Objects`                                        |
|  0.1% |       5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`                                             |

#### Categories

##### Native

|     % | Samples | Function                                                                          | Location                   |
| ----: | ------: | --------------------------------------------------------------------------------- | -------------------------- |
| 50.1% |   2,446 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`   |
| 26.3% |   1,282 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`   |
|  2.5% |     122 | `mach_msg2_trap`                                                                  | `libsystem_kernel.dylib`   |
|  2.5% |     122 | `__ulock_wait`                                                                    | `libsystem_kernel.dylib`   |
|  0.9% |      43 | `forward_copy_longs`                                                              | `<unknown>`                |
|  0.2% |       8 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`   |
|  0.1% |       7 | `__psynch_mutexwait`                                                              | `libsystem_kernel.dylib`   |
|  0.1% |       5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`             |
|  0.1% |       3 | `arrayof_jint_disjoint_arraycopy`                                                 | `<unknown>`                |
|  0.1% |       3 | `_platform_memset`                                                                | `libsystem_platform.dylib` |
| <0.1% |       2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                   | `libjvm.dylib`             |
| <0.1% |       1 | `write`                                                                           | `libsystem_kernel.dylib`   |
| <0.1% |       1 | `FieldStreamBase::initialize`                                                     | `libjvm.dylib`             |
| <0.1% |       1 | `klassItable::setup_itable_offset_table`                                          | `libjvm.dylib`             |
| <0.1% |       1 | `Dictionary::find`                                                                | `libjvm.dylib`             |
| <0.1% |       1 | `mach_absolute_time`                                                              | `libsystem_kernel.dylib`   |
| <0.1% |       1 | `ClassFileParser::check_super_class_access`                                       | `libjvm.dylib`             |
| <0.1% |       1 | `JfrObjectAllocationSample::send_event`                                           | `libjvm.dylib`             |
| <0.1% |       1 | `InstanceKlass::allocate_objArray`                                                | `libjvm.dylib`             |
| <0.1% |       1 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`                |

##### Ours

|     % | Samples | Function                                   | Location                                                   |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
|  5.1% |     250 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  4.3% |     211 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.9% |      91 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% |      85 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.6% |      31 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `lambda$run$0(int, List, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  0.7% |      34 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  0.6% |      29 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  0.2% |       8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       7 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  0.1% |       6 | `hash(Object)`                                            | `java.util.HashMap`                           |
|  0.1% |       6 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|  0.1% |       4 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  0.1% |       4 | `doubleValue()`                                           | `java.lang.Double`                            |
| <0.1% |       2 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| <0.1% |       2 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| <0.1% |       1 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                       |
| <0.1% |       1 | `sourceSpliterator(int)`                                  | `java.util.stream.AbstractPipeline`           |
| <0.1% |       1 | `opWrapSink(int, Sink)`                                   | `java.util.stream.IntPipeline$1`              |
| <0.1% |       1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       1 | `add(Object)`                                             | `java.util.ArrayList`                         |
| <0.1% |       1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
| <0.1% |       1 | `get(int)`                                                | `java.util.ArrayList`                         |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 93.2% |     233 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
|  6.8% |      17 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 56.9% |     120 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 40.8% |      86 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  2.4% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 56.0% |      51 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 26.4% |      24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  9.9% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  5.5% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  2.2% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 85.9% |      73 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 14.1% |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 35.3% |      12 | `java.util.HashMap:1213` |
| 23.5% |       8 | `java.util.HashMap:1197` |
| 17.6% |       6 | `java.util.HashMap:1204` |
|  8.8% |       3 | `java.util.HashMap:1207` |
|  8.8% |       3 | `java.util.HashMap:1219` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 32.3% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 25.8% |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 16.1% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 12.9% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| 12.9% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      29 | `java.util.ArrayList:411` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 37.5% |       3 | `java.util.concurrent.ForkJoinPool:2053` |
| 25.0% |       2 | `java.util.concurrent.ForkJoinPool:2057` |
| 12.5% |       1 | `java.util.concurrent.ForkJoinPool:2051` |
| 12.5% |       1 | `java.util.concurrent.ForkJoinPool:2059` |
| 12.5% |       1 | `java.util.concurrent.ForkJoinPool:2041` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       7 | `java.util.ArrayList:482` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       6 | `java.util.HashMap:338` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       6 | `java.util.Objects:385` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 50.0% |       2 | `java.util.ArrayList:232` |
| 50.0% |       2 | `java.util.ArrayList:239` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `java.lang.Double:1001` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `java.util.HashMap:1427` |
| 50.0% |       1 | `java.util.HashMap:1428` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `java.util.HashMap:1372` |
| 50.0% |       1 | `java.util.HashMap:1369` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:59` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.jar.JarFile:1000` |

##### `sourceSpliterator(int)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.stream.AbstractPipeline:412` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `java.util.stream.IntPipeline$1:177` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:413` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:495` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:387` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:1808` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:427` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 54.9% |   1,344 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| 35.1% |     859 | `Parker::park`          | `libjvm.dylib`           |
|  5.0% |     122 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  4.9% |     121 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.5% |   1,147 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.5% |     122 | `os::signal_wait`                | `libjvm.dylib` |
|  0.7% |       9 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     250 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     211 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     122 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     122 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      91 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      85 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 81.4% |      35 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 18.6% |       8 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      34 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      31 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      29 | `get(int)` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 50.0% |       5 | `grow(int)`                         | `java.util.ArrayList` |
| 50.0% |       5 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       8 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |       8 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |       7 | `add(Object)` | `java.util.ArrayList` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       7 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       6 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |       6 | `get(int)` | `java.util.ArrayList` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|      % | Samples | Caller                                                              | Location       |
| -----: | ------: | ------------------------------------------------------------------- | -------------- |
| 100.0% |       5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       4 | `grow()` | `java.util.ArrayList` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Caller                         | Location                                                   |
| -----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 100.0% |       4 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |       3 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       3 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 50.0% |       1 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |
| 50.0% |       1 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       2 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `write` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location                 |
| -----: | ------: | ----------------------- | ------------------------ |
| 100.0% |       1 | `Profiler::runInternal` | `libasyncProfiler.dylib` |

##### `FieldStreamBase::initialize` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       1 | `JavaFieldStream::JavaFieldStream` | `libjvm.dylib` |

##### `klassItable::setup_itable_offset_table` (`libjvm.dylib`)

|      % | Samples | Caller                                 | Location       |
| -----: | ------: | -------------------------------------- | -------------- |
| 100.0% |       1 | `ClassFileParser::fill_instance_klass` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       1 | `JVM_FindLoadedClass` | `libjvm.dylib` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

|      % | Samples | Caller              | Location                                    |
| -----: | ------: | ------------------- | ------------------------------------------- |
| 100.0% |       1 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `ClassFileParser::check_super_class_access` (`libjvm.dylib`)

|      % | Samples | Caller                                 | Location       |
| -----: | ------: | -------------------------------------- | -------------- |
| 100.0% |       1 | `ClassFileParser::fill_instance_klass` | `libjvm.dylib` |

##### `JfrObjectAllocationSample::send_event` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       1 | `JfrAllocationTracer::JfrAllocationTracer` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|      % | Samples | Caller            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |       1 | `_new_array_Java` | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller               | Location              |
| -----: | ------: | -------------------- | --------------------- |
| 100.0% |       1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801183d68` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

|      % | Samples | Caller                        | Location                |
| -----: | ------: | ----------------------------- | ----------------------- |
| 100.0% |       1 | `checkForSpecialAttributes()` | `java.util.jar.JarFile` |

##### `sourceSpliterator(int)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller                             | Location                            |
| -----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% |       1 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % | Samples | Caller           | Location                            |
| -----: | ------: | ---------------- | ----------------------------------- |
| 100.0% |       1 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |       1 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                    | Location                                      |
| -----: | ------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       1 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller           | Location                                 |
| -----: | ------: | ---------------- | ---------------------------------------- |
| 100.0% |       1 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |       1 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                             | Location                                               |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------ |
| 56.7% |   2,765 | `_pthread_start`                                     | `libsystem_pthread.dylib`                              |
| 56.7% |   2,765 | `thread_start`                                       | `libsystem_pthread.dylib`                              |
| 54.2% |   2,642 | `Thread::call_run`                                   | `libjvm.dylib`                                         |
| 54.2% |   2,642 | `thread_native_entry`                                | `libjvm.dylib`                                         |
| 50.1% |   2,446 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                               |
| 30.8% |   1,500 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
| 30.8% |   1,500 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
| 27.6% |   1,346 | `PlatformMonitor::wait`                              | `libjvm.dylib`                                         |
| 26.3% |   1,282 | `semaphore_wait_trap`                                | `libsystem_kernel.dylib`                               |
| 23.8% |   1,161 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
| 23.7% |   1,157 | `WorkerThread::run`                                  | `libjvm.dylib`                                         |
| 22.1% |   1,079 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
| 22.1% |   1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 22.1% |   1,079 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
| 22.1% |   1,076 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| 22.1% |   1,076 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
| 21.5% |   1,051 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| 19.8% |     966 | `Monitor::wait_without_safepoint_check`              | `libjvm.dylib`                                         |
| 19.5% |     951 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 17.9% |     875 | `JavaThread::thread_main_inner`                      | `libjvm.dylib`                                         |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 56.7% |   2,765 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 56.7% |   2,765 | `thread_start`                          | `libsystem_pthread.dylib` |
| 54.2% |   2,642 | `Thread::call_run`                      | `libjvm.dylib`            |
| 54.2% |   2,642 | `thread_native_entry`                   | `libjvm.dylib`            |
| 50.1% |   2,446 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 27.6% |   1,346 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 26.3% |   1,282 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 23.7% |   1,157 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 19.8% |     966 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 17.9% |     875 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 17.6% |     859 | `Parker::park`                          | `libjvm.dylib`            |
| 17.6% |     859 | `Unsafe_Park`                           | `libjvm.dylib`            |
|  7.8% |     380 | `Monitor::wait`                         | `libjvm.dylib`            |
|  7.5% |     366 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  5.0% |     244 | `JLI_Launch`                            | `libjli.dylib`            |
|  5.0% |     244 | `main`                                  | `java`                    |
|  2.5% |     122 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  2.5% |     122 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  2.5% |     122 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  2.5% |     122 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |

##### Ours

|     % | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 22.1% |   1,076 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  8.7% |     425 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.2% |     351 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  7.2% |     351 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  6.5% |     318 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  5.1% |     250 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  4.4% |     217 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.5% |     171 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  3.5% |     171 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  3.5% |     171 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.5% |     121 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  2.5% |     121 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  2.5% |     120 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  2.5% |     120 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  2.4% |     119 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     117 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     116 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  2.4% |     116 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     116 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0` |
|  2.3% |     114 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 30.8% |   1,500 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 30.8% |   1,500 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| 23.8% |   1,161 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 22.1% |   1,079 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| 22.1% |   1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 22.1% |   1,079 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 22.1% |   1,076 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| 21.5% |   1,051 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 19.5% |     951 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 17.6% |     859 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
| 14.8% |     722 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  8.6% |     420 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  4.9% |     240 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  4.7% |     229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  2.5% |     122 | `wait0(long)`                                             | `java.lang.Object`                            |
|  2.5% |     122 | `wait(long)`                                              | `java.lang.Object`                            |
|  2.5% |     122 | `wait()`                                                  | `java.lang.Object`                            |
|  2.5% |     122 | `await()`                                                 | `java.lang.ref.NativeReferenceQueue`          |
|  2.5% |     122 | `remove0()`                                               | `java.lang.ref.ReferenceQueue`                |
|  2.5% |     122 | `remove()`                                                | `java.lang.ref.NativeReferenceQueue`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.6% |   2,642 | `thread_native_entry` | `libjvm.dylib` |
|  4.4% |     122 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,765 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 43.8% |   1,157 | `WorkerThread::run`             | `libjvm.dylib` |
| 33.1% |     875 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.9% |     366 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.6% |     122 | `VMThread::run`                 | `libjvm.dylib` |
|  4.6% |     122 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,642 | `Thread::call_run` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 71.9% |   1,079 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| 28.0% |     420 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,500 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   1,344 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       2 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 81.9% |     951 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 27.4% |     318 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 19.7% |     229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.1% |   1,147 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.4% |       5 | `G1FullGCResetMetadataTask::work` | `libjvm.dylib`           |
|  0.3% |       3 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  0.1% |       1 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |
|  0.1% |       1 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.7% |   1,076 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 10.1% |     109 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.6% |       7 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,079 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 97.7% |   1,051 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 39.5% |     425 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 32.6% |     351 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.9% |     171 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  6.5% |      70 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,076 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,051 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     966 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee                     | Location                            |
| -----: | ------: | -------------------------- | ----------------------------------- |
| 100.0% |     951 | `doExec()`                 | `java.util.concurrent.ForkJoinTask` |
|   0.1% |       1 | `resolve_opt_virtual_call` | `<unknown>`                         |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 31.1% |     272 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
| 13.9% |     122 | `signal_thread_entry`                           | `libjvm.dylib` |
| 13.9% |     122 | `ServiceThread::service_thread_entry`           | `libjvm.dylib` |
| 13.8% |     121 | `NotificationThread::notification_thread_entry` | `libjvm.dylib` |
| 13.8% |     121 | `JvmtiAgentThread::start_function_wrapper`      | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |     859 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     859 | `Parker::park` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |     859 | `Unsafe_Park` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     722 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     425 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  74.8% |     318 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  25.2% |     107 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 96.2% |     404 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  3.8% |      16 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     380 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     122 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     122 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     122 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 71.2% |     250 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.6% |      16 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     351 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     351 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 68.2% |     217 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.5% |       8 | `get(int)`                     | `java.util.ArrayList`                                      |
|  0.6% |       2 | `SafepointBlob`                | `<unknown>`                                                |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     122 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     122 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     244 | `JLI_Launch` | `libjli.dylib` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     240 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 97.4% |     223 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  0.9% |       2 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.8% |       4 | `doubleValue()` | `java.lang.Double` |
| 0.9% |       2 | `SafepointBlob` | `<unknown>`        |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     171 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee          | Location                                               |
| -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% |     171 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     171 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     171 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |     122 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     122 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |     122 | `mach_msg` | `libsystem_kernel.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     122 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     122 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     122 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     122 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     122 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     122 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                                                      | Location                            |
| ----: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 99.2% |     120 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  0.8% |       1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     121 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee              | Location                                    |
| ----: | ------: | ------------------- | ------------------------------------------- |
| 99.2% |     119 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  0.8% |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     120 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 98.3% |     117 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  0.8% |       1 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  0.8% |       1 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee               | Location                                    |
| ----: | ------: | -------------------- | ------------------------------------------- |
| 99.1% |     116 | `foreach(Function1)` | `scala.collection.immutable.List`           |
|  0.9% |       1 | `getVmStartNanos()`  | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                             | Location                                  |
| ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 98.3% |     114 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
|  1.7% |       2 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Callee               | Location                                  |
| -----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% |     116 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0`)

|      % | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     116 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                                            | Location                                  |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------- |
| 97.4% |     111 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans` |
|  2.6% |       3 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.5% |   1,147 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  8.3% |     404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.1% |     251 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     122 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |     122 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     122 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |     122 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |     122 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |     122 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     122 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     122 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.5% |     121 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     121 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     121 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     121 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |     121 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.4% |     118 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.4% |     117 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.3% |     110 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80117ae68`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  1.6% |      77 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

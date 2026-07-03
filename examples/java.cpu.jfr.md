# Sampling profile

Collected 16,884 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 60.2% |  10,158 |
| native   | 31.0% |   5,233 |
| stdlib   |  7.8% |   1,320 |
| jit      |  1.0% |     173 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 28.1% |   4,742 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 20.4% |   3,445 | `__psynch_cvwait`                   | libsystem_kernel.dylib                                   |
| 15.7% |   2,657 | `distance(Double[], Double[])`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  8.1% |   1,373 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  4.8% |     803 | `forward_copy_longs`                | `<unknown>`                                              |
|  4.7% |     791 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.4% |     579 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                        |
|  2.4% |     400 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  1.3% |     214 | `__psynch_cvsignal`                 | libsystem_kernel.dylib                                   |
|  1.0% |     166 | `zero_blocks`                       | `<unknown>`                                              |
|  0.7% |     124 | `computeDirectly()`                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.4% |      75 | `_platform_bzero`                   | libsystem_platform.dylib                                 |
|  0.4% |      75 | `pthread_jit_write_protect_np`      | libsystem_pthread.dylib                                  |
|  0.4% |      63 | `arrayof_jint_disjoint_arraycopy`   | `<unknown>`                                              |
|  0.3% |      55 | `semaphore_wait_trap`               | libsystem_kernel.dylib                                   |
|  0.2% |      42 | `_platform_memset`                  | libsystem_platform.dylib                                 |
|  0.2% |      38 | `G1FullGCMarker::mark_object`       | libjvm.dylib                                             |
|  0.2% |      33 | `__psynch_mutexwait`                | libsystem_kernel.dylib                                   |
|  0.1% |      22 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                        |
|  0.1% |      17 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans                |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |   4,742 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |   2,657 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 97.5% |   1,338 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  2.5% |      35 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 71.4% |     565 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 28.3% |     224 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
|  0.3% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 74.8% |     433 | java.util.HashMap:1219 |
| 24.4% |     141 | java.util.HashMap:1197 |
|  0.9% |       5 | java.util.HashMap:1206 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 69.0% |     276 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |
| 31.0% |     124 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 99.2% |     123 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204 |
|  0.8% |       1 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171 |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 45.5% |      10 | java.util.HashMap:1409 |
| 31.8% |       7 | java.util.HashMap:1384 |
| 13.6% |       3 | java.util.HashMap:1362 |
|  4.5% |       1 | java.util.HashMap:1411 |
|  4.5% |       1 | java.util.HashMap:1371 |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |      17 | org.renaissance.jdk.concurrent.JavaKMeans:112 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |   4,742 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `__psynch_cvwait` (libsystem_kernel.dylib)

|     % | Samples | Caller                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 99.1% |   3,414 | `Parker::park`          | libjvm.dylib |
|  0.9% |      31 | `PlatformMonitor::wait` | libjvm.dylib |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |   2,657 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |   1,373 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 75.7% |     608 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 24.3% |     195 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     791 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |     579 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     400 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `__psynch_cvsignal` (libsystem_kernel.dylib)

|      % | Samples | Caller          | Location     |
| -----: | ------: | --------------- | ------------ |
| 100.0% |     214 | `Unsafe_Unpark` | libjvm.dylib |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 69.3% |     115 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                        |
|  6.0% |      10 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Caller              | Location                                                 |
| ----: | ------: | ------------------- | -------------------------------------------------------- |
| 99.2% |     123 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.8% |       1 | `compute()`         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |

##### `_platform_bzero` (libsystem_platform.dylib)

|      % | Samples | Caller                   | Location     |
| -----: | ------: | ------------------------ | ------------ |
| 100.0% |      75 | `MemAllocator::allocate` | libjvm.dylib |

##### `pthread_jit_write_protect_np` (libsystem_pthread.dylib)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 42.7% |      32 | `Unsafe_Park`              | libjvm.dylib |
| 25.3% |      19 | `_new_array_Java`          | `<unknown>`  |
| 18.7% |      14 | `OptoRuntime::new_array_C` | libjvm.dylib |
| 13.3% |      10 | `Unsafe_Unpark`            | libjvm.dylib |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                   | Location                                                 |
| ----: | ------: | ------------------------ | -------------------------------------------------------- |
| 22.2% |      14 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `semaphore_wait_trap` (libsystem_kernel.dylib)

|     % | Samples | Caller                           | Location     |
| ----: | ------: | -------------------------------- | ------------ |
| 65.5% |      36 | `WorkerThread::run`              | libjvm.dylib |
| 30.9% |      17 | `GenericWaitBarrier::Cell::wait` | libjvm.dylib |
|  3.6% |       2 | `WorkerThreads::run_task`        | libjvm.dylib |

##### `_platform_memset` (libsystem_platform.dylib)

|     % | Samples | Caller                                        | Location     |
| ----: | ------: | --------------------------------------------- | ------------ |
| 83.3% |      35 | `MemAllocator::allocate`                      | libjvm.dylib |
|  7.1% |       3 | `MemAllocator::mem_allocate_inside_tlab_slow` | libjvm.dylib |
|  4.8% |       2 | `MarkBitMap::do_clear`                        | libjvm.dylib |
|  2.4% |       1 | `G1RemSet::merge_heap_roots`                  | libjvm.dylib |
|  2.4% |       1 | `G1BatchedTask::work`                         | libjvm.dylib |

##### `G1FullGCMarker::mark_object` (libjvm.dylib)

|     % | Samples | Caller                                                                                               | Location     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ------------ |
| 89.5% |      34 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | libjvm.dylib |
|  5.3% |       2 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | libjvm.dylib |
|  5.3% |       2 | `G1FullGCMarker::follow_marking_stacks`                                                              | libjvm.dylib |

##### `__psynch_mutexwait` (libsystem_kernel.dylib)

|      % | Samples | Caller                              | Location                |
| -----: | ------: | ----------------------------------- | ----------------------- |
| 100.0% |      33 | `_pthread_mutex_firstfit_lock_slow` | libsystem_pthread.dylib |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % | Samples | Caller                              | Location                                  |
| -----: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% |      22 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % | Samples | Caller                   | Location                                                             |
| -----: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% |      17 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3bf8 |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                         | Location                                                             |
| ----: | ------: | -------------------------------- | -------------------------------------------------------------------- |
| 86.7% |  14,646 | `compute()`                      | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 83.1% |  14,029 | `join()`                         | java.util.concurrent.ForkJoinTask                                    |
| 35.0% |   5,910 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 30.5% |   5,147 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 30.5% |   5,145 | `vectorSum()`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 28.1% |   4,742 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
| 24.0% |   4,058 | `findNearestCentroid()`          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 20.6% |   3,480 | `Unsafe_Park`                    | libjvm.dylib                                                         |
| 20.4% |   3,445 | `__psynch_cvwait`                | libsystem_kernel.dylib                                               |
| 20.4% |   3,437 | `Parker::park`                   | libjvm.dylib                                                         |
| 15.8% |   2,667 | `distance(Double[], Double[])`   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 13.8% |   2,330 | `computeClusterAverages()`       | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 13.8% |   2,330 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 13.7% |   2,319 | `average(List)`                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
| 10.2% |   1,728 | `collectClusters(int[])`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  9.2% |   1,553 | `lambda$run$0(int, List, int)`   | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  9.2% |   1,553 | `call()`                         | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a2798 |
|  7.8% |   1,319 | `merge(Map, Map)`                | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  7.8% |   1,319 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  7.8% |   1,314 | `combineResults(Map, Map)`       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 95.8% |  14,029 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 40.3% |   5,906 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 35.1% |   5,147 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 15.9% |   2,330 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  9.0% |   1,319 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `join()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee        | Location    |
| ----: | ------: | ------------- | ----------- |
| <0.1% |       4 | `vtable stub` | `<unknown>` |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |   5,909 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  68.7% |   4,058 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  29.2% |   1,728 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |   5,145 | `vectorSum()`       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| 100.0% |   5,145 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 92.2% |   4,742 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  0.1% |       3 | `_new_array_Java`                | `<unknown>`                                             |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                         | Location                                                 |
| ----: | ------: | ------------------------------ | -------------------------------------------------------- |
| 65.7% |   2,667 | `distance(Double[], Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% |      10 | `zero_blocks`                  | `<unknown>`                                              |
|  0.1% |       4 | `_sigtramp`                    | libsystem_platform.dylib                                 |
|  0.1% |       3 | `_new_array_Java`              | `<unknown>`                                              |
| <0.1% |       1 | `SafepointBlob`                | `<unknown>`                                              |

##### `Unsafe_Park` (libjvm.dylib)

|     % | Samples | Callee                                                                                                                                                     | Location                |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 98.8% |   3,437 | `Parker::park`                                                                                                                                             | libjvm.dylib            |
|  0.9% |      32 | `pthread_jit_write_protect_np`                                                                                                                             | libsystem_pthread.dylib |
|  0.1% |       2 | `JavaThread::threadObj`                                                                                                                                    | libjvm.dylib            |
| <0.1% |       1 | `JavaThreadParkedState::JavaThreadParkedState`                                                                                                             | libjvm.dylib            |
| <0.1% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | libjvm.dylib            |

##### `Parker::park` (libjvm.dylib)

|     % | Samples | Callee                                                                                                                                                     | Location                |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 99.3% |   3,414 | `__psynch_cvwait`                                                                                                                                          | libsystem_kernel.dylib  |
|  0.3% |      10 | `_pthread_cond_wait`                                                                                                                                       | libsystem_pthread.dylib |
|  0.1% |       5 | `SafepointMechanism::process`                                                                                                                              | libjvm.dylib            |
|  0.1% |       2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | libjvm.dylib            |
|  0.1% |       2 | `__gettimeofday`                                                                                                                                           | libsystem_kernel.dylib  |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|    % | Samples | Callee          | Location    |
| ---: | ------: | --------------- | ----------- |
| 0.4% |      10 | `SafepointBlob` | `<unknown>` |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|     % | Samples | Callee                | Location                                             |
| ----: | ------: | --------------------- | ---------------------------------------------------- |
| 99.5% |   2,319 | `average(List)`       | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  0.3% |       8 | `boxed(double[])`     | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  0.2% |       4 | `put(Object, Object)` | java.util.HashMap                                    |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Samples | Callee                     | Location                                             |
| -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% |   2,330 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 100.0% |   2,330 | `computeDirectly()`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                              | Location          |
| ----: | ------: | ----------------------------------- | ----------------- |
| 34.2% |     591 | `computeIfAbsent(Object, Function)` | java.util.HashMap |
|  1.2% |      21 | `arrayof_jint_disjoint_arraycopy`   | `<unknown>`       |
|  0.1% |       2 | `SafepointBlob`                     | `<unknown>`       |
|  0.1% |       1 | `_new_instance_Java`                | `<unknown>`       |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|    % | Samples | Callee                    | Location                                             |
| ---: | ------: | ------------------------- | ---------------------------------------------------- |
| 0.1% |       1 | `keySet()`                | java.util.HashMap                                    |
| 0.1% |       1 | `<init>(JavaKMeans, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a2798)

|      % | Samples | Callee                         | Location                                  |
| -----: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% |   1,553 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                     | Location                                                 |
| ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 99.6% |   1,314 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee            | Location                                  |
| -----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% |   1,314 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.8% |   1,647 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `Parker::park` (libjvm.dylib) ← `Unsafe_Park`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.5% |     591 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.2% |     547 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `Parker::park` (libjvm.dylib) ← `Unsafe_Park` ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.0% |     499 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.6% |     441 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.4% |     413 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.0% |     340 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.0% |     332 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |     276 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |     232 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |     230 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.3% |     219 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `Parker::park` (libjvm.dylib) ← `Unsafe_Park` ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% |     214 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |     212 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a2798) |
| 1.2% |     202 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |     199 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                              |
| 1.2% |     197 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.1% |     185 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                          |
| 1.0% |     177 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                    |
| 1.0% |     171 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                                                                                                                              |

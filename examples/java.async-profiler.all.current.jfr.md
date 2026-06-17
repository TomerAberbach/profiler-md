# Sampling profile

Collected 5,107 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 94.9% |   4,849 |
| stdlib   |  5.1% |     258 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 20.8% |   1,061 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 18.2% |     932 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 12.5% |     640 | `__psynch_cvwait()`                                       | libsystem_kernel.dylib                                   |
|  9.5% |     486 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  7.6% |     388 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.0% |     152 | `elementData(int)`                                        | java.util.ArrayList                                      |
|  2.7% |     139 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                        |
|  2.7% |     139 | `doubleValue()`                                           | java.lang.Double                                         |
|  2.2% |     111 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.4% |      73 | `add(Object, Object[], int)`                              | java.util.ArrayList                                      |
|  1.2% |      59 | `zero_blocks()`                                           | `<unknown>`                                              |
|  0.9% |      46 | `__psynch_cvsignal()`                                     | libsystem_kernel.dylib                                   |
|  0.6% |      30 | `RegisterMap::RegisterMap()`                              | libjvm.dylib                                             |
|  0.5% |      28 | `checkIndex(int, int)`                                    | java.util.Objects                                        |
|  0.5% |      26 | `__psynch_mutexwait()`                                    | libsystem_kernel.dylib                                   |
|  0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
|  0.4% |      22 | `pthread_jit_write_protect_np()`                          | libsystem_pthread.dylib                                  |
|  0.4% |      22 | `grow(int)`                                               | java.util.ArrayList                                      |
|  0.4% |      21 | `hash(Object)`                                            | java.util.HashMap                                        |
|  0.4% |      18 | `arrayof_jint_disjoint_arraycopy()`                       | `<unknown>`                                              |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 81.6% |     866 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412 |
| 18.4% |     195 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 61.4% |     572 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |
| 37.3% |     348 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249 |
|  1.3% |      12 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 80.9% |     393 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |
| 19.1% |      93 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 50.8% |     197 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231 |
| 30.4% |     118 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |
| 10.1% |      39 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  7.0% |      27 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226 |
|  1.8% |       7 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |     152 | java.util.ArrayList:411 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 24.5% |      34 | java.util.HashMap:1197 |
| 22.3% |      31 | java.util.HashMap:1213 |
| 17.3% |      24 | java.util.HashMap:1207 |
| 13.7% |      19 | java.util.HashMap:1204 |
|  8.6% |      12 | java.util.HashMap:1222 |

##### `doubleValue()` (java.lang.Double)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |     139 | java.lang.Double:1001 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 22.5% |      25 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212 |
| 22.5% |      25 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213 |
| 21.6% |      24 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 17.1% |      19 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
| 10.8% |      12 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214 |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 72.6% |      53 | java.util.ArrayList:482 |
| 27.4% |      20 | java.util.ArrayList:484 |

##### `checkIndex(int, int)` (java.util.Objects)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      28 | java.util.Objects:385 |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Location                               |
| ----: | ------: | -------------------------------------- |
| 25.0% |       6 | java.util.concurrent.ForkJoinPool:2057 |
| 16.7% |       4 | java.util.concurrent.ForkJoinPool:2051 |
| 12.5% |       3 | java.util.concurrent.ForkJoinPool:2053 |
| 12.5% |       3 | java.util.concurrent.ForkJoinPool:2055 |
| 12.5% |       3 | java.util.concurrent.ForkJoinPool:2041 |

##### `grow(int)` (java.util.ArrayList)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 86.4% |      19 | java.util.ArrayList:239 |
|  9.1% |       2 | java.util.ArrayList:233 |
|  4.5% |       1 | java.util.ArrayList:232 |

##### `hash(Object)` (java.util.HashMap)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      21 | java.util.HashMap:338 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |   1,061 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     932 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `__psynch_cvwait()` (libsystem_kernel.dylib)

|     % | Samples | Caller                    | Location               |
| ----: | ------: | ------------------------- | ---------------------- |
| 97.3% |     623 | `Parker::park()`          | libjvm.dylib           |
|  2.5% |      16 | `PlatformMonitor::wait()` | libjvm.dylib           |
|  0.2% |       1 | `Profiler::timerLoop()`   | libasyncProfiler.dylib |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     486 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     388 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     152 | `get(int)` | java.util.ArrayList |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |     139 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `doubleValue()` (java.lang.Double)

|     % | Samples | Caller                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 89.2% |     124 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 10.8% |      15 | `distance(Double[], Double[])`   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     111 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |      73 | `add(Object)` | java.util.ArrayList |

##### `zero_blocks()` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 50.8% |      30 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                        |
| 39.0% |      23 | `grow(int)`                         | java.util.ArrayList                                      |
|  6.8% |       4 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.4% |       2 | `copyOf(Object[], int, Class)`      | java.util.Arrays                                         |

##### `__psynch_cvsignal()` (libsystem_kernel.dylib)

|      % | Samples | Caller            | Location     |
| -----: | ------: | ----------------- | ------------ |
| 100.0% |      46 | `Unsafe_Unpark()` | libjvm.dylib |

##### `RegisterMap::RegisterMap()` (libjvm.dylib)

|     % | Samples | Caller                 | Location     |
| ----: | ------: | ---------------------- | ------------ |
| 93.3% |      28 | `vframe::vframe()`     | libjvm.dylib |
|  6.7% |       2 | `vframe::new_vframe()` | libjvm.dylib |

##### `checkIndex(int, int)` (java.util.Objects)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |      28 | `get(int)` | java.util.ArrayList |

##### `__psynch_mutexwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                                | Location                |
| -----: | ------: | ------------------------------------- | ----------------------- |
| 100.0% |      26 | `_pthread_mutex_firstfit_lock_slow()` | libsystem_pthread.dylib |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |      24 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `pthread_jit_write_protect_np()` (libsystem_pthread.dylib)

|     % | Samples | Caller                       | Location     |
| ----: | ------: | ---------------------------- | ------------ |
| 31.8% |       7 | `Unsafe_Park()`              | libjvm.dylib |
| 18.2% |       4 | `jvmti_GetCurrentThread()`   | libjvm.dylib |
|  9.1% |       2 | `Unsafe_Unpark()`            | libjvm.dylib |
|  9.1% |       2 | `OptoRuntime::new_array_C()` | libjvm.dylib |
|  4.5% |       1 | `JVM_IHashCode()`            | libjvm.dylib |

##### `grow(int)` (java.util.ArrayList)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |      22 | `grow()` | java.util.ArrayList |

##### `hash(Object)` (java.util.HashMap)

|     % | Samples | Caller                              | Location          |
| ----: | ------: | ----------------------------------- | ----------------- |
| 95.2% |      20 | `computeIfAbsent(Object, Function)` | java.util.HashMap |
|  4.8% |       1 | `putMapEntries(Map, boolean)`       | java.util.HashMap |

##### `arrayof_jint_disjoint_arraycopy()` (`<unknown>`)

|     % | Samples | Caller                  | Location            |
| ----: | ------: | ----------------------- | ------------------- |
| 55.6% |      10 | `copyOf(Object[], int)` | java.util.Arrays    |
| 44.4% |       8 | `grow(int)`             | java.util.ArrayList |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 95.2% |   4,862 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                        |
| 95.2% |   4,862 | `run()`                                                   | java.util.concurrent.ForkJoinWorkerThread                |
| 88.9% |   4,542 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                        |
| 88.7% |   4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 88.6% |   4,527 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                        |
| 88.2% |   4,504 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 88.2% |   4,504 | `exec()`                                                  | java.util.concurrent.RecursiveTask                       |
| 85.2% |   4,352 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                        |
| 85.2% |   4,352 | `join()`                                                  | java.util.concurrent.ForkJoinTask                        |
| 81.6% |   4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 37.0% |   1,889 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 37.0% |   1,889 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 34.4% |   1,756 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 34.4% |   1,756 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 34.4% |   1,756 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 27.4% |   1,399 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 23.2% |   1,185 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 22.0% |   1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
| 21.0% |   1,074 | `invoke()`                                                | java.util.concurrent.ForkJoinTask                        |
| 18.5% |     947 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                   | Location                          |
| ----: | ------: | ---------------------------------------- | --------------------------------- |
| 93.4% |   4,542 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |
|  6.5% |     314 | `awaitWork(ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % | Samples | Callee                              | Location                          |
| -----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% |   4,862 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                               | Location                                    |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 99.7% |   4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |
|  0.2% |       7 | `signalWork()`                                       | java.util.concurrent.ForkJoinPool           |
|  0.0% |       1 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee      | Location                                    |
| -----: | ------: | ----------- | ------------------------------------------- |
| 100.0% |   4,527 | `doExec()`  | java.util.concurrent.ForkJoinTask           |
|   0.0% |       2 | `tryPoll()` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee      | Location                                          |
| ----: | ------: | ----------- | ------------------------------------------------- |
| 99.5% |   4,504 | `exec()`    | java.util.concurrent.RecursiveTask                |
| 10.4% |     472 | `exec()`    | java.util.concurrent.ForkJoinTask$AdaptedCallable |
|  0.8% |      38 | `setDone()` | java.util.concurrent.ForkJoinTask                 |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 96.6% |   4,352 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 41.9% |   1,887 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 39.0% |   1,756 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 17.3% |     780 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  8.9% |     401 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Callee      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |   4,504 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee                                                    | Location                                    |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 95.7% |   4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 25.9% |   1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |
|  8.1% |     351 | `park()`                                                  | java.util.concurrent.locks.LockSupport      |
|  0.0% |       2 | `interrupted()`                                           | java.lang.Thread                            |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee                 | Location                           |
| -----: | ------: | ---------------------- | ---------------------------------- |
| 100.0% |   4,352 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask  |
|   0.0% |       2 | `getRawResult()`       | java.util.concurrent.RecursiveTask |
|   0.0% |       1 | `vtable stub()`        | `<unknown>`                        |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee                                 | Location                                    |
| -----: | ------: | -------------------------------------- | ------------------------------------------- |
| 100.0% |   4,164 | `doExec()`                             | java.util.concurrent.ForkJoinTask           |
|   0.0% |       2 | `releaseAccess()`                      | java.util.concurrent.ForkJoinPool$WorkQueue |
|   0.0% |       1 | `getAndClearSlot(ForkJoinTask[], int)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                   | Location                                                 |
| ----: | ------: | ------------------------ | -------------------------------------------------------- |
| 74.0% |   1,398 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 26.0% |     491 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |   1,889 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 67.5% |   1,185 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  4.7% |      83 | `get(int)`                       | java.util.ArrayList                                     |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |   1,756 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |   1,756 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                         | Location                                                 |
| ----: | ------: | ------------------------------ | -------------------------------------------------------- |
| 67.7% |     947 | `distance(Double[], Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.5% |      49 | `get(int)`                     | java.util.ArrayList                                      |
|  0.3% |       4 | `zero_blocks()`                | `<unknown>`                                              |
|  0.1% |       2 | `_sigtramp()`                  | libsystem_platform.dylib                                 |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee          | Location         |
| ----: | ------: | --------------- | ---------------- |
| 10.5% |     124 | `doubleValue()` | java.lang.Double |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                         | Location                          |
| ----: | ------: | ------------------------------ | --------------------------------- |
| 98.0% |   1,103 | `doExec()`                     | java.util.concurrent.ForkJoinTask |
|  0.8% |       9 | `tryCompensate(long, boolean)` | java.util.concurrent.ForkJoinPool |

##### `invoke()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,074 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|    % | Samples | Callee          | Location         |
| ---: | ------: | --------------- | ---------------- |
| 1.6% |      15 | `doubleValue()` | java.lang.Double |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `run()` (java.util.concurrent.ForkJoinWorkerThread)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.7% |     293 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `LockTracer::UnsafeParkHook()` (libasyncProfiler.dylib) ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.3% |     167 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.7% |     136 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.4% |     123 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% |     115 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |     114 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `LockTracer::UnsafeParkHook()` (libasyncProfiler.dylib) ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.2% |     112 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |      82 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |      72 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      69 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) |
| 1.4% |      69 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.3% |      68 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |      66 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.2% |      63 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |      62 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.1% |      55 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |      50 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.9% |      47 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |      46 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.9% |      45 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |


# Allocated heap profile

Allocated 3.25 GB over 74,967 samples (43.4 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| ours     | 100.0% | 3.25 GB |  74,967 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                     | Location                                                 |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| 99.6% | 3.24 GB |  67,962 | `copyOf(Object[], int)`                      | java.util.Arrays                                         |
|  0.2% | 6.98 MB |   3,545 | `findNearestCentroid()`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% |  5.1 MB |      26 | `copyOf(Object[], int, Class)`               | java.util.Arrays                                         |
|  0.0% |  266 kB |      26 | `copyOf(byte[], int)`                        | java.util.Arrays                                         |
|  0.0% |  251 kB |      12 | `<init>(InputStream, Inflater, int)`         | java.util.zip.InflaterInputStream                        |
|  0.0% | 27.2 kB |     485 | `grow(int)`                                  | java.util.ArrayList                                      |
|  0.0% | 17.5 kB |     364 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 17.2 kB |     539 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                        |
|  0.0% | 16.4 kB |       1 | `readNBytes(int)`                            | java.io.InputStream                                      |
|  0.0% |   16 kB |     228 | `resize()`                                   | java.util.HashMap                                        |
|  0.0% | 15.5 kB |     277 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 9.84 kB |     205 | `collectClusters(int[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 8.21 kB |       1 | `<init>(InputStream, int)`                   | java.util.jar.Manifest$FastInputStream                   |
|  0.0% | 8.01 kB |     143 | `add(double[], double[])`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 8.01 kB |     143 | `vectorSum()`                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 6.14 kB |     128 | `merge(Map, Map)`                            | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.0% |  5.5 kB |     229 | `lambda$merge$6(List, List)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.0% | 5.04 kB |     210 | `lambda$collectClusters$0(Double[])`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 2.97 kB |      53 | `intStream(Spliterator$OfInt, boolean)`      | java.util.stream.StreamSupport                           |
|  0.0% | 2.76 kB |     115 | `valueOf(double)`                            | java.lang.Double                                         |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 3.24 GB |  67,962 | java.util.Arrays:3482 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 6.98 MB |   3,545 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |   Size | Samples | Location              |
| -----: | -----: | ------: | --------------------- |
| 100.0% | 5.1 MB |      26 | java.util.Arrays:3513 |

##### `copyOf(byte[], int)` (java.util.Arrays)

|      % |   Size | Samples | Location              |
| -----: | -----: | ------: | --------------------- |
| 100.0% | 266 kB |      26 | java.util.Arrays:3541 |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 251 kB |      12 | java.util.zip.InflaterInputStream:89 |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 27.2 kB |     485 | java.util.ArrayList:239 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 17.5 kB |     364 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 17.2 kB |     539 | java.util.HashMap:1909 |

##### `readNBytes(int)` (java.io.InputStream)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 16.4 kB |       1 | java.io.InputStream:408 |

##### `resize()` (java.util.HashMap)

|      % |  Size | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 16 kB |     228 | java.util.HashMap:710 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 15.5 kB |     277 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 9.84 kB |     205 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `<init>(InputStream, int)` (java.util.jar.Manifest$FastInputStream)

|      % |    Size | Samples | Location                                   |
| -----: | ------: | ------: | ------------------------------------------ |
| 100.0% | 8.21 kB |       1 | java.util.jar.Manifest$FastInputStream:421 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 8.01 kB |     143 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 8.01 kB |     143 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 6.14 kB |     128 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Location                                      |
| -----: | -----: | ------: | --------------------------------------------- |
| 100.0% | 5.5 kB |     229 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 5.04 kB |     210 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 2.97 kB |      53 | java.util.stream.StreamSupport:138 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 2.76 kB |     115 | java.lang.Double:773 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `copyOf(Object[], int)` (java.util.Arrays)

|     % |    Size | Samples | Caller      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 62.9% | 2.04 GB |  38,799 | `grow(int)` | java.util.ArrayList |
| 37.1% |  1.2 GB |  29,163 | `toArray()` | java.util.ArrayList |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 6.98 MB |   3,545 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |   Size | Samples | Caller                  | Location         |
| -----: | -----: | ------: | ----------------------- | ---------------- |
| 100.0% | 5.1 MB |      26 | `copyOf(Object[], int)` | java.util.Arrays |

##### `copyOf(byte[], int)` (java.util.Arrays)

|     % |    Size | Samples | Caller                        | Location                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------- |
| 98.4% |  262 kB |      24 | `getBytes()`                  | jdk.internal.loader.Resource    |
|  1.5% | 4.11 kB |       1 | `ensureCapacity(int)`         | java.io.ByteArrayOutputStream   |
|  0.1% |   160 B |       1 | `ensureCapacityInternal(int)` | java.lang.AbstractStringBuilder |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Caller                                                                                  | Location                                         |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 251 kB |      12 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | java.util.zip.ZipFile$ZipFileInflaterInputStream |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Caller   | Location            |
| -----: | ------: | ------: | -------- | ------------------- |
| 100.0% | 27.2 kB |     485 | `grow()` | java.util.ArrayList |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 17.5 kB |     364 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 53.8% | 9.28 kB |     290 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 45.6% | 7.87 kB |     246 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |
|  0.6% |    96 B |       3 | `merge(Object, Object, BiFunction)`             | java.util.HashMap |

##### `readNBytes(int)` (java.io.InputStream)

|      % |    Size | Samples | Caller           | Location            |
| -----: | ------: | ------: | ---------------- | ------------------- |
| 100.0% | 16.4 kB |       1 | `readAllBytes()` | java.io.InputStream |

##### `resize()` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 77.0% | 12.3 kB |     154 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 23.0% | 3.69 kB |      74 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 15.5 kB |     277 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 9.84 kB |     205 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `<init>(InputStream, int)` (java.util.jar.Manifest$FastInputStream)

|      % |    Size | Samples | Caller                | Location                               |
| -----: | ------: | ------: | --------------------- | -------------------------------------- |
| 100.0% | 8.21 kB |       1 | `<init>(InputStream)` | java.util.jar.Manifest$FastInputStream |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller                               | Location                                                |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 8.01 kB |     143 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 8.01 kB |     143 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |  Size | Samples | Caller                     | Location                                                 |
| ----: | ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 97.7% |  6 kB |     125 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.3% | 144 B |       3 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Caller                  | Location                                                             |
| -----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 5.5 kB |     229 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 5.04 kB |     210 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 2.97 kB |      53 | `range(int, int)` | java.util.stream.IntStream |

##### `valueOf(double)` (java.lang.Double)

|     % |    Size | Samples | Caller                                           | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
| 96.5% | 2.66 kB |     111 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans                  |
|  3.5% |    96 B |       4 | `apply(double)`                                  | java.util.stream.DoublePipeline$$Lambda.0x000000c8011c1bc8 |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                             | Location                                                             |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| 99.8% | 3.25 GB |  74,565 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
| 99.8% | 3.25 GB |  74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| 99.8% | 3.25 GB |  74,565 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
| 99.8% | 3.25 GB |  74,565 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
| 99.8% | 3.25 GB |  74,565 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
| 99.8% | 3.25 GB |  74,559 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.8% | 3.25 GB |  74,559 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
| 99.8% | 3.24 GB |  67,988 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
| 99.5% | 3.23 GB |  56,907 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.23 GB |  56,898 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.23 GB |  56,898 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.23 GB |  56,432 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
| 99.5% | 3.23 GB |  56,432 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.23 GB |  56,432 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88 |
| 99.5% | 3.23 GB |  56,432 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
| 99.5% | 3.23 GB |  56,429 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.23 GB |  56,429 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0 |
| 81.1% | 2.64 GB |  41,976 | `addAll(Collection)`                                 | java.util.ArrayList                                                  |
| 62.8% | 2.04 GB |  39,291 | `grow(int)`                                          | java.util.ArrayList                                                  |
| 62.7% | 2.04 GB |  15,374 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                                    |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee   | Location                                          |
| -----: | ------: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 3.25 GB |  74,559 | `exec()` | java.util.concurrent.RecursiveTask                |
|  62.8% | 2.04 GB |  15,055 | `exec()` | java.util.concurrent.ForkJoinTask$AdaptedCallable |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 3.25 GB |  74,565 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                               | Location                                    |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 3.25 GB |  74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                   | Location                          |
| -----: | ------: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 3.25 GB |  74,565 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |    Size | Samples | Callee                              | Location                          |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 3.25 GB |  74,565 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.6% | 3.23 GB |  56,898 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 31.1% | 1.01 GB |  59,892 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  0.4% | 11.9 MB |  16,673 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 20.3 kB |     392 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.0% | 17.5 kB |     364 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |    Size | Samples | Callee      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 3.25 GB |  74,559 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `copyOf(Object[], int)` (java.util.Arrays)

|    % |   Size | Samples | Callee                         | Location         |
| ---: | -----: | ------: | ------------------------------ | ---------------- |
| 0.2% | 5.1 MB |      26 | `copyOf(Object[], int, Class)` | java.util.Arrays |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                               | Location                         |
| -----: | ------: | ------: | ------------------------------------ | -------------------------------- |
| 100.0% | 3.23 GB |  56,432 | `forEach(BiConsumer)`                | java.util.HashMap                |
|   0.0% | 11.7 kB |     346 | `<init>(Map)`                        | java.util.HashMap                |
|   0.0% |    16 B |       1 | `linkToTargetMethod(Object, Object)` | java.lang.invoke.Invokers$Holder |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 3.23 GB |  56,898 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 3.23 GB |  56,898 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                                       | Location                                                             |
| -----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 3.23 GB |  56,429 | `apply(Object, Object)`                      | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0 |
|   0.0% |    96 B |       3 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                                    |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 3.23 GB |  56,432 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 3.23 GB |  56,432 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 3.23 GB |  56,432 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 81.6% | 2.64 GB |  41,976 | `addAll(Collection)` | java.util.ArrayList |
| 18.4% |  596 MB |  14,224 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 3.23 GB |  56,429 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `addAll(Collection)` (java.util.ArrayList)

|     % |    Size | Samples | Callee      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 77.0% | 2.03 GB |  27,018 | `grow(int)` | java.util.ArrayList |
| 23.0% |  607 MB |  14,958 | `toArray()` | java.util.ArrayList |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Callee                  | Location         |
| -----: | ------: | ------: | ----------------------- | ---------------- |
| 100.0% | 2.04 GB |  38,806 | `copyOf(Object[], int)` | java.util.Arrays |

##### `invoke()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.04 GB |  15,374 | `doExec()` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.1% |  882 MB |   1,851 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 15.7% |  510 MB |   4,819 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  8.6% |  280 MB |   1,145 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  8.6% |  278 MB |   1,112 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  7.9% |  257 MB |   1,061 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.5% |  145 MB |   2,854 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.3% |  141 MB |   2,554 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.0% |  131 MB |   2,845 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.4% | 77.1 MB |     631 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  2.2% |   72 MB |     614 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% | 71.5 MB |     561 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% |   49 MB |   2,343 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.2% | 39.9 MB |   1,695 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% | 35.4 MB |   1,506 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 23.5 MB |   2,102 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                             |
|  0.7% | 23.4 MB |     401 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 22.1 MB |     334 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  0.6% | 19.4 MB |     311 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) |
|  0.4% | 13.9 MB |   1,212 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 13.5 MB |   1,211 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


# Lock contention profile

Blocked 1.6ms over 9 samples (177.2µs per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 1.6ms |       9 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |  Time | Samples | Function                                         | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------------- |
| 77.0% | 1.2ms |       4 | `loadClass(String, boolean)`                     | java.lang.ClassLoader                             |
| 15.1% | 0.2ms |       1 | `loadClassOrNull(String, boolean)`               | jdk.internal.loader.BuiltinClassLoader            |
|  3.7% | 0.1ms |       2 | `<init>(boolean)`                                | java.util.concurrent.locks.ReentrantReadWriteLock |
|  2.8% |   0ms |       1 | `<init>(Collection, int)`                        | java.nio.file.FileTreeWalker                      |
|  1.4% |   0ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | sun.nio.fs.UnixDirectoryStream                    |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (java.lang.ClassLoader)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.2ms |       4 | java.lang.ClassLoader:573 |

##### `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 0.2ms |       1 | jdk.internal.loader.BuiltinClassLoader:651 |

##### `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock)

|     % |  Time | Samples | Location                                              |
| ----: | ----: | ------: | ----------------------------------------------------- |
| 90.3% | 0.1ms |       1 | java.util.concurrent.locks.ReentrantReadWriteLock:241 |
|  9.7% |   0ms |       1 | java.util.concurrent.locks.ReentrantReadWriteLock:242 |

##### `<init>(Collection, int)` (java.nio.file.FileTreeWalker)

|      % | Time | Samples | Location                         |
| -----: | ---: | ------: | -------------------------------- |
| 100.0% |  0ms |       1 | java.nio.file.FileTreeWalker:192 |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (sun.nio.fs.UnixDirectoryStream)

|      % | Time | Samples | Location                          |
| -----: | ---: | ------: | --------------------------------- |
| 100.0% |  0ms |       1 | sun.nio.fs.UnixDirectoryStream:52 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `loadClass(String, boolean)` (java.lang.ClassLoader)

|      % |  Time | Samples | Caller              | Location              |
| -----: | ----: | ------: | ------------------- | --------------------- |
| 100.0% | 1.2ms |       4 | `loadClass(String)` | java.lang.ClassLoader |

##### `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader)

|      % |  Time | Samples | Caller                       | Location                               |
| -----: | ----: | ------: | ---------------------------- | -------------------------------------- |
| 100.0% | 0.2ms |       1 | `loadClass(String, boolean)` | jdk.internal.loader.BuiltinClassLoader |

##### `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock)

|      % |  Time | Samples | Caller                                           | Location                       |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------ |
| 100.0% | 0.1ms |       2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | sun.nio.fs.UnixDirectoryStream |

##### `<init>(Collection, int)` (java.nio.file.FileTreeWalker)

|      % | Time | Samples | Caller                                      | Location            |
| -----: | ---: | ------: | ------------------------------------------- | ------------------- |
| 100.0% |  0ms |       1 | `walkFileTree(Path, Set, int, FileVisitor)` | java.nio.file.Files |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (sun.nio.fs.UnixDirectoryStream)

|      % | Time | Samples | Caller                                             | Location                          |
| -----: | ---: | ------: | -------------------------------------------------- | --------------------------------- |
| 100.0% |  0ms |       1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | sun.nio.fs.UnixFileSystemProvider |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Samples | Function                                             | Location                                                 |
| ----: | ----: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| 92.0% | 1.5ms |       5 | `loadClass(String)`                                  | java.lang.ClassLoader                                    |
| 77.0% | 1.2ms |       4 | `loadClass(String, boolean)`                         | java.lang.ClassLoader                                    |
| 77.0% | 1.2ms |       4 | `average(List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.0% | 1.2ms |       4 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.0% | 1.2ms |       4 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.0% | 1.2ms |       4 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.0% | 1.2ms |       4 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 77.0% | 1.2ms |       4 | `exec()`                                             | java.util.concurrent.RecursiveTask                       |
| 77.0% | 1.2ms |       4 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                        |
| 77.0% | 1.2ms |       4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 77.0% | 1.2ms |       4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                        |
| 77.0% | 1.2ms |       4 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                        |
| 77.0% | 1.2ms |       4 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                |
| 43.5% | 0.7ms |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 43.5% | 0.7ms |       2 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                        |
| 43.5% | 0.7ms |       2 | `join()`                                             | java.util.concurrent.ForkJoinTask                        |
| 23.0% | 0.4ms |       5 | `deleteRecursively(Path, boolean)`                   | org.renaissance.core.DirUtils                            |
| 23.0% | 0.4ms |       5 | `deleteRecursively(Path)`                            | org.renaissance.core.DirUtils                            |
| 23.0% | 0.4ms |       5 | `lambda$createScratchDirectory$1(Path)`              | org.renaissance.core.DirUtils                            |
| 23.0% | 0.4ms |       5 | `run()`                                              | org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `loadClass(String)` (java.lang.ClassLoader)

|     % |  Time | Samples | Callee                       | Location                                        |
| ----: | ----: | ------: | ---------------------------- | ----------------------------------------------- |
| 83.6% | 1.2ms |       4 | `loadClass(String, boolean)` | java.lang.ClassLoader                           |
| 16.4% | 0.2ms |       1 | `loadClass(String, boolean)` | jdk.internal.loader.ClassLoaders$AppClassLoader |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee              | Location              |
| -----: | ----: | ------: | ------------------- | --------------------- |
| 100.0% | 1.2ms |       4 | `loadClass(String)` | java.lang.ClassLoader |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee          | Location                                             |
| -----: | ----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `average(List)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % |  Time | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  56.5% | 0.7ms |       2 | `join()`            | java.util.concurrent.ForkJoinTask                    |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |  Time | Samples | Callee      | Location                                             |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee   | Location                                          |
| -----: | ----: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `exec()` | java.util.concurrent.RecursiveTask                |
|  29.8% | 0.4ms |       1 | `exec()` | java.util.concurrent.ForkJoinTask$AdaptedCallable |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |  Time | Samples | Callee     | Location                          |
| -----: | ----: | ------: | ---------- | --------------------------------- |
| 100.0% | 1.2ms |       4 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |  Time | Samples | Callee                                               | Location                                    |
| -----: | ----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 1.2ms |       4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |  Time | Samples | Callee                                   | Location                          |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 1.2ms |       4 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |  Time | Samples | Callee                              | Location                          |
| -----: | ----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 1.2ms |       4 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |  Time | Samples | Callee     | Location                          |
| -----: | ----: | ------: | ---------- | --------------------------------- |
| 100.0% | 0.7ms |       2 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                                    | Location                                    |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 100.0% | 0.7ms |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                 | Location                          |
| -----: | ----: | ------: | ---------------------- | --------------------------------- |
| 100.0% | 0.7ms |       2 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils)

|     % |  Time | Samples | Callee                            | Location              |
| ----: | ----: | ------: | --------------------------------- | --------------------- |
| 65.5% | 0.2ms |       1 | `loadClass(String)`               | java.lang.ClassLoader |
| 34.5% | 0.1ms |       4 | `walkFileTree(Path, FileVisitor)` | java.nio.file.Files   |

##### `deleteRecursively(Path)` (org.renaissance.core.DirUtils)

|      % |  Time | Samples | Callee                             | Location                      |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       5 | `deleteRecursively(Path, boolean)` | org.renaissance.core.DirUtils |

##### `lambda$createScratchDirectory$1(Path)` (org.renaissance.core.DirUtils)

|      % |  Time | Samples | Callee                    | Location                      |
| -----: | ----: | ------: | ------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       5 | `deleteRecursively(Path)` | org.renaissance.core.DirUtils |

##### `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68)

|      % |  Time | Samples | Callee                                  | Location                      |
| -----: | ----: | ------: | --------------------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       5 | `lambda$createScratchDirectory$1(Path)` | org.renaissance.core.DirUtils |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |  Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.5% | 0.5ms |       2 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 22.9% | 0.4ms |       1 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread) |
| 20.5% | 0.3ms |       1 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 15.1% | 0.2ms |       1 | `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (jdk.internal.loader.ClassLoaders$AppClassLoader) ← `loadClass(String)` (java.lang.ClassLoader) ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.7% | 0.1ms |       2 | `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (sun.nio.fs.UnixDirectoryStream) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (sun.nio.fs.UnixFileSystemProvider) ← `newDirectoryStream(Path)` (java.nio.file.Files) ← `visit(Path, boolean, boolean)` (java.nio.file.FileTreeWalker) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.8% |   0ms |       1 | `<init>(Collection, int)` (java.nio.file.FileTreeWalker) ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.4% |   0ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)` (sun.nio.fs.UnixDirectoryStream) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (sun.nio.fs.UnixFileSystemProvider) ← `newDirectoryStream(Path)` (java.nio.file.Files) ← `visit(Path, boolean, boolean)` (java.nio.file.FileTreeWalker) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

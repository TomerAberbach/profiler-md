# Sampling profile

Collected 5,188 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 94.3% |   4,893 |
| stdlib   |  5.7% |     295 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 18.9% |     983 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 18.2% |     943 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 10.8% |     562 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  9.8% |     509 | `__psynch_cvwait()`                                       | libsystem_kernel.dylib                                   |
|  9.5% |     491 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.6% |     187 | `elementData(int)`                                        | java.util.ArrayList                                      |
|  2.8% |     147 | `computeIfAbsent(Object, Function)`                       | java.util.HashMap                                        |
|  2.8% |     143 | `doubleValue()`                                           | java.lang.Double                                         |
|  2.1% |     108 | `collectClusters(int[])`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.3% |      69 | `add(Object, Object[], int)`                              | java.util.ArrayList                                      |
|  1.3% |      67 | `zero_blocks()`                                           | `<unknown>`                                              |
|  0.7% |      35 | `__psynch_cvsignal()`                                     | libsystem_kernel.dylib                                   |
|  0.6% |      32 | `pthread_jit_write_protect_np()`                          | libsystem_pthread.dylib                                  |
|  0.6% |      30 | `hash(Object)`                                            | java.util.HashMap                                        |
|  0.6% |      30 | `checkIndex(int, int)`                                    | java.util.Objects                                        |
|  0.5% |      28 | `grow(int)`                                               | java.util.ArrayList                                      |
|  0.5% |      28 | `RegisterMap::RegisterMap()`                              | libjvm.dylib                                             |
|  0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
|  0.4% |      21 | `__psynch_mutexwait()`                                    | libsystem_kernel.dylib                                   |
|  0.3% |      18 | `arrayof_jint_disjoint_arraycopy()`                       | `<unknown>`                                              |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 57.4% |     564 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |
| 40.7% |     400 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249 |
|  1.9% |      19 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250 |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 88.9% |     838 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412 |
| 11.1% |     105 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 88.3% |     496 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |
| 11.7% |      66 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 53.4% |     262 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231 |
| 28.3% |     139 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |
| 11.6% |      57 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  3.9% |      19 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226 |
|  2.6% |      13 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |     187 | java.util.ArrayList:411 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 29.3% |      43 | java.util.HashMap:1213 |
| 22.4% |      33 | java.util.HashMap:1197 |
| 16.3% |      24 | java.util.HashMap:1204 |
| 16.3% |      24 | java.util.HashMap:1207 |
|  8.8% |      13 | java.util.HashMap:1219 |

##### `doubleValue()` (java.lang.Double)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |     143 | java.lang.Double:1001 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 25.0% |      27 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213 |
| 24.1% |      26 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214 |
| 23.1% |      25 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 21.3% |      23 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212 |
|  5.6% |       6 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 87.0% |      60 | java.util.ArrayList:482 |
| 13.0% |       9 | java.util.ArrayList:484 |

##### `hash(Object)` (java.util.HashMap)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      30 | java.util.HashMap:338 |

##### `checkIndex(int, int)` (java.util.Objects)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |      30 | java.util.Objects:385 |

##### `grow(int)` (java.util.ArrayList)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 96.4% |      27 | java.util.ArrayList:239 |
|  3.6% |       1 | java.util.ArrayList:232 |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Location                               |
| ----: | ------: | -------------------------------------- |
| 37.5% |       9 | java.util.concurrent.ForkJoinPool:2053 |
| 29.2% |       7 | java.util.concurrent.ForkJoinPool:2051 |
| 16.7% |       4 | java.util.concurrent.ForkJoinPool:2041 |
|  4.2% |       1 | java.util.concurrent.ForkJoinPool:2058 |
|  4.2% |       1 | java.util.concurrent.ForkJoinPool:2023 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     983 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     943 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     562 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `__psynch_cvwait()` (libsystem_kernel.dylib)

|     % | Samples | Caller                    | Location     |
| ----: | ------: | ------------------------- | ------------ |
| 96.5% |     491 | `Parker::park()`          | libjvm.dylib |
|  3.5% |      18 | `PlatformMonitor::wait()` | libjvm.dylib |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     491 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     187 | `get(int)` | java.util.ArrayList |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |     147 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `doubleValue()` (java.lang.Double)

|     % | Samples | Caller                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 92.3% |     132 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  7.7% |      11 | `distance(Double[], Double[])`   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     108 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |      69 | `add(Object)` | java.util.ArrayList |

##### `zero_blocks()` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 59.7% |      40 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                        |
| 20.9% |      14 | `grow(int)`                         | java.util.ArrayList                                      |
| 14.9% |      10 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.0% |       2 | `resize()`                          | java.util.HashMap                                        |
|  1.5% |       1 | `copyOf(Object[], int, Class)`      | java.util.Arrays                                         |

##### `__psynch_cvsignal()` (libsystem_kernel.dylib)

|      % | Samples | Caller            | Location     |
| -----: | ------: | ----------------- | ------------ |
| 100.0% |      35 | `Unsafe_Unpark()` | libjvm.dylib |

##### `pthread_jit_write_protect_np()` (libsystem_pthread.dylib)

|     % | Samples | Caller                       | Location     |
| ----: | ------: | ---------------------------- | ------------ |
| 21.9% |       7 | `JVM_IHashCode()`            | libjvm.dylib |
| 15.6% |       5 | `jvmti_GetCurrentThread()`   | libjvm.dylib |
| 12.5% |       4 | `Unsafe_Park()`              | libjvm.dylib |
|  9.4% |       3 | `OptoRuntime::new_array_C()` | libjvm.dylib |
|  9.4% |       3 | `Unsafe_Unpark()`            | libjvm.dylib |

##### `hash(Object)` (java.util.HashMap)

|     % | Samples | Caller                              | Location          |
| ----: | ------: | ----------------------------------- | ----------------- |
| 83.3% |      25 | `computeIfAbsent(Object, Function)` | java.util.HashMap |
| 10.0% |       3 | `putMapEntries(Map, boolean)`       | java.util.HashMap |
|  6.7% |       2 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `checkIndex(int, int)` (java.util.Objects)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |      30 | `get(int)` | java.util.ArrayList |

##### `grow(int)` (java.util.ArrayList)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |      28 | `grow()` | java.util.ArrayList |

##### `RegisterMap::RegisterMap()` (libjvm.dylib)

|     % | Samples | Caller                      | Location     |
| ----: | ------: | --------------------------- | ------------ |
| 89.3% |      25 | `vframe::vframe()`          | libjvm.dylib |
|  7.1% |       2 | `vframe::new_vframe()`      | libjvm.dylib |
|  3.6% |       1 | `JvmtiEnv::GetStackTrace()` | libjvm.dylib |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |      24 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `__psynch_mutexwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                                | Location                |
| -----: | ------: | ------------------------------------- | ----------------------- |
| 100.0% |      21 | `_pthread_mutex_firstfit_lock_slow()` | libsystem_pthread.dylib |

##### `arrayof_jint_disjoint_arraycopy()` (`<unknown>`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 44.4% |       8 | `copyOf(Object[], int)`             | java.util.Arrays    |
| 44.4% |       8 | `grow(int)`                         | java.util.ArrayList |
| 11.1% |       2 | `merge(Object, Object, BiFunction)` | java.util.HashMap   |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                 |
| ----: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
| 95.0% |   4,929 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                        |
| 95.0% |   4,929 | `run()`                                                   | java.util.concurrent.ForkJoinWorkerThread                |
| 91.2% |   4,730 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                        |
| 91.1% |   4,727 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                        |
| 91.1% |   4,727 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 90.7% |   4,708 | `exec()`                                                  | java.util.concurrent.RecursiveTask                       |
| 90.7% |   4,707 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 87.7% |   4,549 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                        |
| 87.7% |   4,549 | `join()`                                                  | java.util.concurrent.ForkJoinTask                        |
| 84.1% |   4,361 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 40.4% |   2,097 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 40.4% |   2,096 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 33.6% |   1,741 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 33.5% |   1,740 | `vectorSum()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 33.5% |   1,740 | `computeDirectly()`                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 30.1% |   1,559 | `findNearestCentroid()`                                   | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 21.0% |   1,092 | `invoke()`                                                | java.util.concurrent.ForkJoinTask                        |
| 20.7% |   1,075 | `accumulate(Double[], double[])`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 20.7% |   1,074 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                        |
| 19.2% |     997 | `distance(Double[], Double[])`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                   | Location                          |
| ----: | ------: | ---------------------------------------- | --------------------------------- |
| 96.0% |   4,730 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |
|  4.0% |     196 | `awaitWork(ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % | Samples | Callee                              | Location                          |
| -----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% |   4,929 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                               | Location                                    |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 99.9% |   4,727 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |
|  0.1% |       3 | `signalWork()`                                       | java.util.concurrent.ForkJoinPool           |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee      | Location                                          |
| ----: | ------: | ----------- | ------------------------------------------------- |
| 99.6% |   4,708 | `exec()`    | java.util.concurrent.RecursiveTask                |
| 10.6% |     503 | `exec()`    | java.util.concurrent.ForkJoinTask$AdaptedCallable |
|  0.6% |      30 | `setDone()` | java.util.concurrent.ForkJoinTask                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   4,727 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Callee      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |   4,707 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 96.6% |   4,549 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 44.6% |   2,097 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 37.0% |   1,741 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 16.5% |     779 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  9.5% |     448 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee                                                    | Location                                    |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 95.9% |   4,361 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 23.6% |   1,074 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |
|  7.4% |     338 | `park()`                                                  | java.util.concurrent.locks.LockSupport      |
|  0.0% |       1 | `signalWaiters()`                                         | java.util.concurrent.ForkJoinTask           |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee                 | Location                           |
| -----: | ------: | ---------------------- | ---------------------------------- |
| 100.0% |   4,549 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask  |
|   0.1% |       3 | `getRawResult()`       | java.util.concurrent.RecursiveTask |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |   4,361 | `doExec()`        | java.util.concurrent.ForkJoinTask           |
|   0.0% |       1 | `releaseAccess()` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |   2,096 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                   | Location                                                 |
| ----: | ------: | ------------------------ | -------------------------------------------------------- |
| 74.4% |   1,559 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 25.6% |     537 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee              | Location                                                |
| ----: | ------: | ------------------- | ------------------------------------------------------- |
| 99.9% |   1,740 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 61.8% |   1,075 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  5.9% |     103 | `get(int)`                       | java.util.ArrayList                                     |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |   1,740 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Callee                                             | Location                                                 |
| ----: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| 64.0% |     997 | `distance(Double[], Double[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.9% |      45 | `get(int)`                                         | java.util.ArrayList                                      |
|  0.6% |      10 | `zero_blocks()`                                    | `<unknown>`                                              |
|  0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow()` | libjvm.dylib                                             |

##### `invoke()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,092 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee          | Location         |
| ----: | ------: | --------------- | ---------------- |
| 12.3% |     132 | `doubleValue()` | java.lang.Double |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                         | Location                          |
| ----: | ------: | ------------------------------ | --------------------------------- |
| 98.0% |   1,052 | `doExec()`                     | java.util.concurrent.ForkJoinTask |
|  1.0% |      11 | `tryCompensate(long, boolean)` | java.util.concurrent.ForkJoinPool |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|    % | Samples | Callee          | Location         |
| ---: | ------: | --------------- | ---------------- |
| 1.1% |      11 | `doubleValue()` | java.lang.Double |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `run()` (java.util.concurrent.ForkJoinWorkerThread)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.5% |     181 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.3% |     169 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `LockTracer::UnsafeParkHook()` (libasyncProfiler.dylib) ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.6% |     136 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.4% |     124 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |     121 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `LockTracer::UnsafeParkHook()` (libasyncProfiler.dylib) ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.9% |     101 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.9% |      96 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      86 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |      85 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |      84 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.5% |      79 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) |
| 1.5% |      79 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.5% |      79 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% |      76 | `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.2% |      61 | `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |      61 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |      56 | `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.1% |      55 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% |      48 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.9% |      46 | `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |


# Allocated heap profile

Allocated 3.29 GB over 75,095 samples (43.9 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| ours     | 100.0% | 3.29 GB |  75,095 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                     | Location                                                 |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| 99.6% | 3.28 GB |  68,206 | `copyOf(Object[], int)`                      | java.util.Arrays                                         |
|  0.2% | 6.85 MB |   3,477 | `findNearestCentroid()`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.2% | 5.71 MB |      33 | `copyOf(Object[], int, Class)`               | java.util.Arrays                                         |
|  0.0% |  392 kB |      12 | `<init>(InputStream, Inflater, int)`         | java.util.zip.InflaterInputStream                        |
|  0.0% |  332 kB |      25 | `copyOf(byte[], int)`                        | java.util.Arrays                                         |
|  0.0% |  178 kB |       2 | `readNBytes(int)`                            | java.io.InputStream                                      |
|  0.0% | 26.6 kB |     475 | `grow(int)`                                  | java.util.ArrayList                                      |
|  0.0% | 17.2 kB |     538 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                        |
|  0.0% | 16.4 kB |       1 | `transferTo(OutputStream)`                   | java.io.InputStream                                      |
|  0.0% | 15.9 kB |     194 | `resize()`                                   | java.util.HashMap                                        |
|  0.0% | 14.2 kB |     254 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 14.2 kB |     295 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 10.9 kB |     228 | `collectClusters(int[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% |  8.9 kB |     159 | `add(double[], double[])`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 8.06 kB |     144 | `vectorSum()`                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 6.43 kB |     134 | `merge(Map, Map)`                            | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.0% | 5.71 kB |     238 | `lambda$merge$6(List, List)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.0% |  4.9 kB |     204 | `lambda$collectClusters$0(Double[])`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 3.75 kB |      67 | `intStream(Spliterator$OfInt, boolean)`      | java.util.stream.StreamSupport                           |
|  0.0% | 3.07 kB |     128 | `valueOf(double)`                            | java.lang.Double                                         |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 3.28 GB |  68,206 | java.util.Arrays:3482 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 6.85 MB |   3,477 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 5.71 MB |      33 | java.util.Arrays:3513 |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 392 kB |      12 | java.util.zip.InflaterInputStream:89 |

##### `copyOf(byte[], int)` (java.util.Arrays)

|      % |   Size | Samples | Location              |
| -----: | -----: | ------: | --------------------- |
| 100.0% | 332 kB |      25 | java.util.Arrays:3541 |

##### `readNBytes(int)` (java.io.InputStream)

|     % |    Size | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 90.8% |  161 kB |       1 | java.io.InputStream:448 |
|  9.2% | 16.4 kB |       1 | java.io.InputStream:408 |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 26.6 kB |     475 | java.util.ArrayList:239 |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 17.2 kB |     538 | java.util.HashMap:1909 |

##### `transferTo(OutputStream)` (java.io.InputStream)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 16.4 kB |       1 | java.io.InputStream:794 |

##### `resize()` (java.util.HashMap)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 15.9 kB |     194 | java.util.HashMap:710 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 14.2 kB |     254 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 14.2 kB |     295 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 10.9 kB |     228 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 8.9 kB |     159 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 8.06 kB |     144 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 6.43 kB |     134 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 5.71 kB |     238 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Location                                                     |
| -----: | -----: | ------: | ------------------------------------------------------------ |
| 100.0% | 4.9 kB |     204 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 3.75 kB |      67 | java.util.stream.StreamSupport:138 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 3.07 kB |     128 | java.lang.Double:773 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `copyOf(Object[], int)` (java.util.Arrays)

|     % |    Size | Samples | Caller      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 62.9% | 2.06 GB |  38,964 | `grow(int)` | java.util.ArrayList |
| 37.1% | 1.22 GB |  29,242 | `toArray()` | java.util.ArrayList |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 6.85 MB |   3,477 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |    Size | Samples | Caller                  | Location         |
| -----: | ------: | ------: | ----------------------- | ---------------- |
| 100.0% | 5.71 MB |      33 | `copyOf(Object[], int)` | java.util.Arrays |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Caller                                                                                  | Location                                         |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 392 kB |      12 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | java.util.zip.ZipFile$ZipFileInflaterInputStream |

##### `copyOf(byte[], int)` (java.util.Arrays)

|     % |   Size | Samples | Caller                        | Location                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------- |
| 99.9% | 332 kB |      23 | `getBytes()`                  | jdk.internal.loader.Resource    |
|  0.1% |  464 B |       2 | `ensureCapacityInternal(int)` | java.lang.AbstractStringBuilder |

##### `readNBytes(int)` (java.io.InputStream)

|      % |   Size | Samples | Caller           | Location            |
| -----: | -----: | ------: | ---------------- | ------------------- |
| 100.0% | 178 kB |       2 | `readAllBytes()` | java.io.InputStream |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Caller   | Location            |
| -----: | ------: | ------: | -------- | ------------------- |
| 100.0% | 26.6 kB |     475 | `grow()` | java.util.ArrayList |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 57.2% | 9.86 kB |     308 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 42.4% |  7.3 kB |     228 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |
|  0.4% |    64 B |       2 | `merge(Object, Object, BiFunction)`             | java.util.HashMap |

##### `transferTo(OutputStream)` (java.io.InputStream)

|      % |    Size | Samples | Caller                                  | Location            |
| -----: | ------: | ------: | --------------------------------------- | ------------------- |
| 100.0% | 16.4 kB |       1 | `copy(InputStream, Path, CopyOption[])` | java.nio.file.Files |

##### `resize()` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 63.4% | 10.1 kB |     126 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 36.4% | 5.78 kB |      67 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |
|  0.2% |    32 B |       1 | `merge(Object, Object, BiFunction)`             | java.util.HashMap |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 14.2 kB |     254 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 14.2 kB |     295 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 10.9 kB |     228 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |   Size | Samples | Caller                               | Location                                                |
| -----: | -----: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 8.9 kB |     159 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 8.06 kB |     144 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Caller                     | Location                                                 |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 98.5% | 6.34 kB |     132 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.5% |    96 B |       2 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 5.71 kB |     238 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |   Size | Samples | Caller          | Location                                                                            |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 4.9 kB |     204 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 3.75 kB |      67 | `range(int, int)` | java.util.stream.IntStream |

##### `valueOf(double)` (java.lang.Double)

|     % | Size | Samples | Caller                                           | Location                                                   |
| ----: | ---: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
| 97.7% | 3 kB |     125 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans                  |
|  2.3% | 72 B |       3 | `apply(double)`                                  | java.util.stream.DoublePipeline$$Lambda.0x00000008011c2258 |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                             | Location                                                             |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| 99.8% | 3.29 GB |  74,662 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
| 99.8% | 3.29 GB |  74,662 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| 99.8% | 3.29 GB |  74,662 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
| 99.8% | 3.29 GB |  74,662 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
| 99.8% | 3.29 GB |  74,662 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
| 99.8% | 3.29 GB |  74,657 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.8% | 3.29 GB |  74,657 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
| 99.8% | 3.29 GB |  68,239 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
| 99.4% | 3.28 GB |  57,120 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.4% | 3.28 GB |  57,113 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.4% | 3.28 GB |  57,113 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.4% | 3.28 GB |  56,664 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
| 99.4% | 3.28 GB |  56,664 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.4% | 3.28 GB |  56,664 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460 |
| 99.4% | 3.28 GB |  56,664 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
| 99.4% | 3.28 GB |  56,661 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.4% | 3.28 GB |  56,661 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38 |
| 81.3% | 2.68 GB |  42,207 | `addAll(Collection)`                                 | java.util.ArrayList                                                  |
| 62.8% | 2.07 GB |  39,452 | `grow(int)`                                          | java.util.ArrayList                                                  |
| 62.5% | 2.06 GB |  15,204 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                                    |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee   | Location                                          |
| -----: | ------: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 3.29 GB |  74,657 | `exec()` | java.util.concurrent.RecursiveTask                |
|  62.7% | 2.06 GB |  14,930 | `exec()` | java.util.concurrent.ForkJoinTask$AdaptedCallable |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 3.29 GB |  74,662 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                               | Location                                    |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 3.29 GB |  74,662 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                   | Location                          |
| -----: | ------: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 3.29 GB |  74,662 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |    Size | Samples | Callee                              | Location                          |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 3.29 GB |  74,662 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.6% | 3.28 GB |  57,113 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 30.6% |    1 GB |  59,794 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  0.4% | 11.7 MB |  16,626 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 17.9 kB |     343 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.0% | 14.2 kB |     254 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |    Size | Samples | Callee      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 3.29 GB |  74,657 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `copyOf(Object[], int)` (java.util.Arrays)

|    % |    Size | Samples | Callee                         | Location         |
| ---: | ------: | ------: | ------------------------------ | ---------------- |
| 0.2% | 5.71 MB |      33 | `copyOf(Object[], int, Class)` | java.util.Arrays |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                                                           | Location                             |
| -----: | ------: | ------: | ---------------------------------------------------------------- | ------------------------------------ |
| 100.0% | 3.28 GB |  56,664 | `forEach(BiConsumer)`                                            | java.util.HashMap                    |
|   0.0% | 10.7 kB |     321 | `<init>(Map)`                                                    | java.util.HashMap                    |
|   0.0% |   112 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | java.lang.invoke.MethodHandleNatives |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 3.28 GB |  57,113 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 3.28 GB |  57,113 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                                       | Location                                                             |
| -----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% | 3.28 GB |  56,661 | `apply(Object, Object)`                      | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38 |
|   0.0% |    64 B |       2 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                                    |
|   0.0% |    32 B |       1 | `resize()`                                   | java.util.HashMap                                                    |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 3.28 GB |  56,664 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 3.28 GB |  56,664 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 3.28 GB |  56,664 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 81.7% | 2.68 GB |  42,207 | `addAll(Collection)` | java.util.ArrayList |
| 18.3% |  599 MB |  14,216 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 3.28 GB |  56,661 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `addAll(Collection)` (java.util.ArrayList)

|     % |    Size | Samples | Callee      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 77.0% | 2.06 GB |  27,161 | `grow(int)` | java.util.ArrayList |
| 23.0% |  617 MB |  15,046 | `toArray()` | java.util.ArrayList |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Callee                  | Location         |
| -----: | ------: | ------: | ----------------------- | ---------------- |
| 100.0% | 2.07 GB |  38,977 | `copyOf(Object[], int)` | java.util.Arrays |

##### `invoke()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.06 GB |  15,204 | `doExec()` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.8% |  915 MB |   1,932 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 15.7% |  517 MB |   4,858 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  8.6% |  282 MB |   1,155 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  8.4% |  277 MB |   1,114 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  7.5% |  247 MB |   1,006 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.5% |  149 MB |   2,881 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.3% |  143 MB |   2,602 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.2% |  138 MB |   2,891 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.4% | 79.3 MB |     668 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% | 72.9 MB |     595 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.1% | 69.2 MB |     583 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |   51 MB |   2,424 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.2% | 39.2 MB |   1,683 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% | 37.1 MB |   1,529 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 23.4 MB |     382 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 22.6 MB |   2,105 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                             |
|  0.7% | 21.7 MB |     340 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) |
|  0.6% | 19.4 MB |     304 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  0.4% | 14.6 MB |   1,345 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% |   13 MB |   1,186 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


# Lock contention profile

Blocked 2.7ms over 28 samples (96.7µs per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 2.7ms |      28 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |  Time | Samples | Function                                                                                             | Location                                          |
| ----: | ----: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 64.8% | 1.8ms |       7 | `loadClass(String, boolean)`                                                                         | java.lang.ClassLoader                             |
| 12.7% | 0.3ms |       2 | `loadClassOrNull(String, boolean)`                                                                   | jdk.internal.loader.BuiltinClassLoader            |
| 11.1% | 0.3ms |       5 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | java.util.stream.StreamSupport                    |
|  7.2% | 0.2ms |       7 | `opWrapSink(int, Sink)`                                                                              | java.util.stream.DoublePipeline$1                 |
|  1.8% |   0ms |       1 | `<init>(boolean)`                                                                                    | java.util.concurrent.locks.ReentrantReadWriteLock |
|  1.2% |   0ms |       2 | `mapToObj(DoubleFunction, int)`                                                                      | java.util.stream.DoublePipeline                   |
|  0.5% |   0ms |       1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | java.lang.ClassLoader                             |
|  0.4% |   0ms |       1 | `newDirectoryStream(Path)`                                                                           | java.nio.file.Files                               |
|  0.1% |   0ms |       1 | `<init>(Collection, int)`                                                                            | java.nio.file.FileTreeWalker                      |
|  0.1% |   0ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)`                                                     | sun.nio.fs.UnixDirectoryStream                    |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (java.lang.ClassLoader)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.8ms |       7 | java.lang.ClassLoader:573 |

##### `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 0.3ms |       2 | jdk.internal.loader.BuiltinClassLoader:651 |

##### `doubleStream(Spliterator$OfDouble, boolean)` (java.util.stream.StreamSupport)

|      % |  Time | Samples | Location                           |
| -----: | ----: | ------: | ---------------------------------- |
| 100.0% | 0.3ms |       5 | java.util.stream.StreamSupport:274 |

##### `opWrapSink(int, Sink)` (java.util.stream.DoublePipeline$1)

|      % |  Time | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 0.2ms |       7 | java.util.stream.DoublePipeline$1:173 |

##### `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock)

|      % | Time | Samples | Location                                              |
| -----: | ---: | ------: | ----------------------------------------------------- |
| 100.0% |  0ms |       1 | java.util.concurrent.locks.ReentrantReadWriteLock:241 |

##### `mapToObj(DoubleFunction, int)` (java.util.stream.DoublePipeline)

|      % | Time | Samples | Location                            |
| -----: | ---: | ------: | ----------------------------------- |
| 100.0% |  0ms |       2 | java.util.stream.DoublePipeline:170 |

##### `newDirectoryStream(Path)` (java.nio.file.Files)

|      % | Time | Samples | Location                |
| -----: | ---: | ------: | ----------------------- |
| 100.0% |  0ms |       1 | java.nio.file.Files:482 |

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
| 100.0% | 1.8ms |       7 | `loadClass(String)` | java.lang.ClassLoader |

##### `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader)

|      % |  Time | Samples | Caller                       | Location                               |
| -----: | ----: | ------: | ---------------------------- | -------------------------------------- |
| 100.0% | 0.3ms |       2 | `loadClass(String, boolean)` | jdk.internal.loader.BuiltinClassLoader |

##### `doubleStream(Spliterator$OfDouble, boolean)` (java.util.stream.StreamSupport)

|      % |  Time | Samples | Caller                       | Location         |
| -----: | ----: | ------: | ---------------------------- | ---------------- |
| 100.0% | 0.3ms |       5 | `stream(double[], int, int)` | java.util.Arrays |

##### `opWrapSink(int, Sink)` (java.util.stream.DoublePipeline$1)

|      % |  Time | Samples | Caller           | Location                          |
| -----: | ----: | ------: | ---------------- | --------------------------------- |
| 100.0% | 0.2ms |       7 | `wrapSink(Sink)` | java.util.stream.AbstractPipeline |

##### `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock)

|      % | Time | Samples | Caller                                           | Location                       |
| -----: | ---: | ------: | ------------------------------------------------ | ------------------------------ |
| 100.0% |  0ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | sun.nio.fs.UnixDirectoryStream |

##### `mapToObj(DoubleFunction, int)` (java.util.stream.DoublePipeline)

|      % | Time | Samples | Caller    | Location                        |
| -----: | ---: | ------: | --------- | ------------------------------- |
| 100.0% |  0ms |       2 | `boxed()` | java.util.stream.DoublePipeline |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (java.lang.ClassLoader)

|      % | Time | Samples | Caller                                                                                    | Location           |
| -----: | ---: | ------: | ----------------------------------------------------------------------------------------- | ------------------ |
| 100.0% |  0ms |       1 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | java.lang.System$2 |

##### `newDirectoryStream(Path)` (java.nio.file.Files)

|      % | Time | Samples | Caller                          | Location                     |
| -----: | ---: | ------: | ------------------------------- | ---------------------------- |
| 100.0% |  0ms |       1 | `visit(Path, boolean, boolean)` | java.nio.file.FileTreeWalker |

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

|     % |  Time | Samples | Function                                             | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
| 84.9% | 2.3ms |      22 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 84.9% | 2.3ms |      22 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 84.9% | 2.3ms |      22 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 84.9% | 2.3ms |      22 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |
| 84.9% | 2.3ms |      22 | `exec()`                                             | java.util.concurrent.RecursiveTask                   |
| 84.9% | 2.3ms |      22 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                    |
| 84.9% | 2.3ms |      22 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue          |
| 84.9% | 2.3ms |      22 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                    |
| 84.9% | 2.3ms |      22 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                    |
| 84.9% | 2.3ms |      22 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread            |
| 77.5% | 2.1ms |       9 | `loadClass(String)`                                  | java.lang.ClassLoader                                |
| 64.8% | 1.8ms |       7 | `loadClass(String, boolean)`                         | java.lang.ClassLoader                                |
| 59.2% | 1.6ms |       4 | `average(List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 52.8% | 1.4ms |      11 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue          |
| 52.8% | 1.4ms |      11 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                    |
| 52.8% | 1.4ms |      11 | `join()`                                             | java.util.concurrent.ForkJoinTask                    |
| 25.7% | 0.7ms |      18 | `boxed(double[])`                                    | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 15.1% | 0.4ms |       6 | `deleteRecursively(Path, boolean)`                   | org.renaissance.core.DirUtils                        |
| 15.1% | 0.4ms |       6 | `deleteRecursively(Path)`                            | org.renaissance.core.DirUtils                        |
| 15.1% | 0.4ms |       6 | `lambda$createScratchDirectory$1(Path)`              | org.renaissance.core.DirUtils                        |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|     % |  Time | Samples | Callee            | Location                                             |
| ----: | ----: | ------: | ----------------- | ---------------------------------------------------- |
| 69.7% | 1.6ms |       4 | `average(List)`   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 30.3% | 0.7ms |      18 | `boxed(double[])` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 2.3ms |      22 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 2.3ms |      22 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % |  Time | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 2.3ms |      22 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  62.2% | 1.4ms |      11 | `join()`            | java.util.concurrent.ForkJoinTask                    |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |  Time | Samples | Callee      | Location                                             |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 2.3ms |      22 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee   | Location                                          |
| -----: | ----: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 2.3ms |      22 | `exec()` | java.util.concurrent.RecursiveTask                |
|   5.8% | 0.1ms |       3 | `exec()` | java.util.concurrent.ForkJoinTask$AdaptedCallable |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |  Time | Samples | Callee     | Location                          |
| -----: | ----: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.3ms |      22 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |  Time | Samples | Callee                                               | Location                                    |
| -----: | ----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.3ms |      22 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |  Time | Samples | Callee                                   | Location                          |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 2.3ms |      22 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |  Time | Samples | Callee                              | Location                          |
| -----: | ----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 2.3ms |      22 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `loadClass(String)` (java.lang.ClassLoader)

|     % |  Time | Samples | Callee                       | Location                                        |
| ----: | ----: | ------: | ---------------------------- | ----------------------------------------------- |
| 83.7% | 1.8ms |       7 | `loadClass(String, boolean)` | java.lang.ClassLoader                           |
| 16.3% | 0.3ms |       2 | `loadClass(String, boolean)` | jdk.internal.loader.ClassLoaders$AppClassLoader |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee              | Location              |
| -----: | ----: | ------: | ------------------- | --------------------- |
| 100.0% | 1.6ms |       4 | `loadClass(String)` | java.lang.ClassLoader |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |  Time | Samples | Callee     | Location                          |
| -----: | ----: | ------: | ---------- | --------------------------------- |
| 100.0% | 1.4ms |      11 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                                    | Location                                    |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 100.0% | 1.4ms |      11 | `tryRemoveAndExec(ForkJoinTask, boolean)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                 | Location                          |
| -----: | ----: | ------: | ---------------------- | --------------------------------- |
| 100.0% | 1.4ms |      11 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|     % |  Time | Samples | Callee                 | Location                           |
| ----: | ----: | ------: | ---------------------- | ---------------------------------- |
| 43.3% | 0.3ms |       5 | `stream(double[])`     | java.util.Arrays                   |
| 28.0% | 0.2ms |       7 | `toArray(IntFunction)` | java.util.stream.ReferencePipeline |
| 22.0% | 0.2ms |       3 | `loadClass(String)`    | java.lang.ClassLoader              |
|  6.7% |   0ms |       3 | `boxed()`              | java.util.stream.DoublePipeline    |

##### `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils)

|     % |  Time | Samples | Callee                            | Location              |
| ----: | ----: | ------: | --------------------------------- | --------------------- |
| 82.3% | 0.3ms |       1 | `loadClass(String)`               | java.lang.ClassLoader |
| 17.7% | 0.1ms |       5 | `walkFileTree(Path, FileVisitor)` | java.nio.file.Files   |

##### `deleteRecursively(Path)` (org.renaissance.core.DirUtils)

|      % |  Time | Samples | Callee                             | Location                      |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       6 | `deleteRecursively(Path, boolean)` | org.renaissance.core.DirUtils |

##### `lambda$createScratchDirectory$1(Path)` (org.renaissance.core.DirUtils)

|      % |  Time | Samples | Callee                    | Location                      |
| -----: | ----: | ------: | ------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       6 | `deleteRecursively(Path)` | org.renaissance.core.DirUtils |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |  Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40.2% | 1.1ms |       2 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 18.9% | 0.5ms |       2 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 12.4% | 0.3ms |       1 | `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (jdk.internal.loader.ClassLoaders$AppClassLoader) ← `loadClass(String)` (java.lang.ClassLoader) ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.9% | 0.1ms |       2 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.6% | 0.1ms |       2 | `doubleStream(Spliterator$OfDouble, boolean)` (java.util.stream.StreamSupport) ← `stream(double[], int, int)` (java.util.Arrays) ← `stream(double[])` ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  4.3% | 0.1ms |       2 | `doubleStream(Spliterator$OfDouble, boolean)` (java.util.stream.StreamSupport) ← `stream(double[], int, int)` (java.util.Arrays) ← `stream(double[])` ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.7% | 0.1ms |       3 | `opWrapSink(int, Sink)` (java.util.stream.DoublePipeline$1) ← `wrapSink(Sink)` (java.util.stream.AbstractPipeline) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.4% | 0.1ms |       3 | `opWrapSink(int, Sink)` (java.util.stream.DoublePipeline$1) ← `wrapSink(Sink)` (java.util.stream.AbstractPipeline) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.2% | 0.1ms |       1 | `doubleStream(Spliterator$OfDouble, boolean)` (java.util.stream.StreamSupport) ← `stream(double[], int, int)` (java.util.Arrays) ← `stream(double[])` ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                        |
|  2.0% | 0.1ms |       1 | `opWrapSink(int, Sink)` (java.util.stream.DoublePipeline$1) ← `wrapSink(Sink)` (java.util.stream.AbstractPipeline) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (java.util.stream.ReferencePipeline) ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread) |
|  1.8% |   0ms |       1 | `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (sun.nio.fs.UnixDirectoryStream) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (sun.nio.fs.UnixFileSystemProvider) ← `newDirectoryStream(Path)` (java.nio.file.Files) ← `visit(Path, boolean, boolean)` (java.nio.file.FileTreeWalker) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |   0ms |       1 | `mapToObj(DoubleFunction, int)` (java.util.stream.DoublePipeline) ← `boxed()` ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.7% |   0ms |       1 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                   |
|  0.5% |   0ms |       1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (java.lang.ClassLoader) ← `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` (java.lang.System$2) ← `defineClass(boolean, Object)` (java.lang.invoke.MethodHandles$Lookup$ClassDefiner) ← `generateInnerClass()` (java.lang.invoke.InnerClassLambdaMetafactory) ← `spinInnerClass()` ← `buildCallSite()` ← `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (java.lang.invoke.LambdaMetafactory) ← `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (java.lang.invoke.DirectMethodHandle$Holder) ← `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (java.lang.invoke.Invokers$Holder) ← `invoke(Class, MethodHandle, String, Object, Object, Class)` (java.lang.invoke.BootstrapMethodInvoker) ← `makeSite(MethodHandle, String, MethodType, Object, Class)` (java.lang.invoke.CallSite) ← `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (java.lang.invoke.MethodHandleNatives) ← `linkCallSite(Object, Object, Object, Object, Object, Object[])` ← `boxed()` (java.util.stream.DoublePipeline) ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)         |
|  0.4% |   0ms |       1 | `newDirectoryStream(Path)` (java.nio.file.Files) ← `visit(Path, boolean, boolean)` (java.nio.file.FileTreeWalker) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.4% |   0ms |       1 | `mapToObj(DoubleFunction, int)` (java.util.stream.DoublePipeline) ← `boxed()` ← `boxed(double[])` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |   0ms |       1 | `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (jdk.internal.loader.ClassLoaders$AppClassLoader) ← `loadClass(String)` (java.lang.ClassLoader) ← `visitFile(Path, BasicFileAttributes)` (org.renaissance.core.DirUtils$1) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |   0ms |       1 | `<init>(Collection, int)` (java.nio.file.FileTreeWalker) ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |   0ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)` (sun.nio.fs.UnixDirectoryStream) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (sun.nio.fs.UnixFileSystemProvider) ← `newDirectoryStream(Path)` (java.nio.file.Files) ← `visit(Path, boolean, boolean)` (java.nio.file.FileTreeWalker) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
